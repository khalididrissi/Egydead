// Block elements by class name
function blockElementsByClass(className) {
    var elements = document.getElementsByClassName(className);

    // Remove elements from the DOM
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
}

// Block elements by selector
function blockElementsBySelector(selector) {
    var elements = document.querySelectorAll(selector);

    // Remove elements from the DOM
    elements.forEach(function(element) {
        element.parentNode.removeChild(element);
    });
}

// Block the popup container
function blockPopupContainer() {
    var popupContainers = document.querySelectorAll('iframe[id^="container-6f4"][style*="position: fixed;"]');
    popupContainers.forEach(function(container) {
        container.parentNode.removeChild(container);
    });
}

// Block common ad selectors

blockElementsBySelector('div[class*="Logo"]');
blockElementsBySelector('div[class*="notranslate"]');
blockElementsBySelector('div[class*="share-post"]');


// Block Google Topics iframe
blockElementsBySelector('iframe[name="goog_topics_frame"]');


//ArabSeed Start
blockElementsByClass('notranslate');
blockElementsByClass('share-post');




// Remove elements by ID
var elementsToRemoveById = [
    'div-gpt-ad-1714577946689-0',
    'div-gpt-ad-1715073293748-0',
    'ps_ad_rotation_id_5446',
    'ad_unit',
    'fixedban2',
    'fixedban',
    'fixedban5',
    'gpt_unit_/21727820151,22953604694/Gametech_HM/video-ad2_0',
    'container-6f4f5c3f5bfa5f5651799c658cb3556b44923',
    'div-gpt-ad-1714577932847-0',
    'google_ads_iframe_/21727820151,22953604694/Gametech_HM/Interstitial-gameland_0__container__',
    'gpt_unit_/21727820151,22953604694/Gametech_HM/Interstitial-gameland_0',
    'id-custom_banner',
    'google_ads_iframe_/22654869840/apl_1__container__',
    'google_ads_iframe_/22893379435/apl_0__container__',
    'dontfoid',
    'gpt_unit_/7047,22643491855/apl/anchor/anchortop_0',
    'banner-container',
    'goog_2013926817',
    'google_ads_iframe_/21727820151,22953604694/Gametech_HM/video-ad2_0__container__',
    'google_ads_iframe_/21727820151,22953604694/Gametech_HM/tgv1_0__container__'
];

elementsToRemoveById.forEach(function(elementId) {
    var element = document.getElementById(elementId);
    if (element) {
        element.remove();
    }
});

// Remove additional aplvideo elements by class name
var aplvideoDivs = document.getElementsByClassName('aplvideo');
while (aplvideoDivs.length > 0) {
    aplvideoDivs[0].remove();
}
