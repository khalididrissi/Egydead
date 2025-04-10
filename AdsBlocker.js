// Enhanced Ad Blocker for Egydead
(function() {
    'use strict';

    // Configuration
    const config = {
        debug: false,
        blockPatterns: {
            iframes: [
                {
                    position: 'fixed',
                    zIndex: '2147483647',
                    inset: 'auto 0px 0px auto'
                },
                {
                    position: 'static',
                    height: '218px',
                    zIndex: '1',
                    userSelect: 'none'
                }
            ],
            elements: [
                'iframe[scrolling="no"]',
                'iframe[style*="position: fixed"]',
                'iframe[style*="z-index: 2147483647"]',
                'iframe[style*="inset: auto 0px 0px auto"]',
                'iframe[style*="height: 218px"]',
                'iframe[style*="user-select: none"]',
                // Footer blocking patterns
                'footer',
                'div[class*="container"]',
                'div[class*="Menu"]',
                'ul[itemscope]',
                'li[class*="menu-item"]',
                'div[class*="Social"]',
                'a[class*="facebook"]',
                'a[class*="twitter"]',
                'a[class*="youtube"]',
                'a[class*="telegram"]',
                'div[class*="site-copyright"]',
                'div[class*="clr"]',
                'div[bis_skin_checked="1"]',
                // Main menu and search blocking patterns
                'div[class*="mainMenu"]',
                'select[class*="mob-select"]',
                'div[class*="header-left"]',
                'form[id="s"]',
                'input[name="s"]',
                'div[class*="searchLive"]',
                'button[id="searchsubmit"]',
                'option[value*="egydead.fyi"]',
                'option[value*="7ad9anorga.sbs"]'
            ],
            urls: [
                'ads.',
                'doubleclick',
                'googleads',
                'googlesyndication',
                'adsystem',
                'adserver',
                'bidder',
                'banner/',
                'pop',
                'facebook/tr',
                'analytics',
                'egydead.fyi',
                'facebook.com/egydead2',
                'x.com/egydead1',
                'youtube.com/@egydead',
                'bit.ly/3MZEJUc',
                '7ad9anorga.sbs'
            ]
        }
    };

    // Logger function
    function log(message) {
        if (config.debug) {
            console.log('[Egydead AdBlocker]', message);
        }
    }

    // Check if element matches pattern
    function matchesPattern(element, pattern) {
        const style = window.getComputedStyle(element);
        return Object.entries(pattern).every(([key, value]) => {
            const elementValue = style.getPropertyValue(key);
            return elementValue === value;
        });
    }

    // Block problematic iframes
    function blockIframes() {
        const iframes = document.getElementsByTagName('iframe');
        for (const iframe of iframes) {
            // Check against patterns
            const shouldBlock = config.blockPatterns.iframes.some(pattern => 
                matchesPattern(iframe, pattern)
            );

            if (shouldBlock) {
                log('Blocking iframe:', iframe);
                iframe.remove();
            }
        }
    }

    // Block elements by selector
    function blockElements() {
        config.blockPatterns.elements.forEach(selector => {
            document.querySelectorAll(selector).forEach(element => {
                log('Blocking element:', element);
                element.remove();
            });
        });
    }

    // Block specific footer content
    function blockFooter() {
        // Remove footer element
        const footer = document.querySelector('footer');
        if (footer) {
            log('Blocking footer');
            footer.remove();
        }

        // Remove any remaining social links
        const socialLinks = document.querySelectorAll('a[class*="facebook"], a[class*="twitter"], a[class*="youtube"], a[class*="telegram"]');
        socialLinks.forEach(link => {
            log('Blocking social link:', link);
            link.remove();
        });

        // Remove copyright text
        const copyright = document.querySelector('div[class*="site-copyright"]');
        if (copyright) {
            log('Blocking copyright');
            copyright.remove();
        }
    }

    // Block main menu and search
    function blockMainMenu() {
        // Remove main menu
        const mainMenu = document.querySelector('div[class*="mainMenu"]');
        if (mainMenu) {
            log('Blocking main menu');
            mainMenu.remove();
        }

        // Remove search form
        const searchForm = document.querySelector('form[id="s"]');
        if (searchForm) {
            log('Blocking search form');
            searchForm.remove();
        }

        // Remove any remaining select elements
        const selects = document.querySelectorAll('select[class*="mob-select"]');
        selects.forEach(select => {
            log('Blocking select:', select);
            select.remove();
        });
    }

    // Block requests
    const originalFetch = window.fetch;
    window.fetch = function(url, options) {
        const urlString = url.toString().toLowerCase();
        if (config.blockPatterns.urls.some(pattern => urlString.includes(pattern))) {
            log('Blocking request:', url);
            return Promise.reject(new Error('Blocked by Egydead AdBlocker'));
        }
        return originalFetch(url, options);
    };

    // Block XMLHttpRequest
    const originalXHR = window.XMLHttpRequest;
    window.XMLHttpRequest = function() {
        const xhr = new originalXHR();
        const originalOpen = xhr.open;
        xhr.open = function(method, url) {
            const urlString = url.toString().toLowerCase();
            if (config.blockPatterns.urls.some(pattern => urlString.includes(pattern))) {
                log('Blocking XHR:', url);
                throw new Error('Blocked by Egydead AdBlocker');
            }
            return originalOpen.apply(xhr, arguments);
        };
        return xhr;
    };

    // Initial blocking
    blockIframes();
    blockElements();
    blockFooter();
    blockMainMenu();

    // Set up observer for dynamic content
    const observer = new MutationObserver((mutations) => {
        mutations.forEach(() => {
            blockIframes();
            blockElements();
            blockFooter();
            blockMainMenu();
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    // Clean up on page unload
    window.addEventListener('unload', () => {
        observer.disconnect();
    });

    log('Egydead AdBlocker initialized');
})(); 
