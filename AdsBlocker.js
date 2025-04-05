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
blockElementsBySelector('iframe[src*=".doubleclick.net"]');
blockElementsBySelector('iframe[src*=".googleadservices.com"]');
blockElementsBySelector('div[id*="google_ads_iframe"]');
blockElementsBySelector('div[id*="div-gpt-ad"]');
blockElementsBySelector('ins.adsbygoogle');
blockElementsBySelector('gpt_unit');
blockElementsBySelector('div.ad-unit');
blockElementsBySelector('div.ad-container');
blockElementsBySelector('div.ad-banner');
blockElementsBySelector('div.interstitial-ad');
blockElementsBySelector('ins[id^="gpt_unit"]');
blockElementsBySelector('div.banner-ad');
blockElementsBySelector('div[id*="ad"]');
blockElementsBySelector('div[class*="ad"]');
blockElementsBySelector('div[id*="banner"]');
blockElementsBySelector('div[class*="banner"]');
blockElementsBySelector('div[class*="notranslate"]');
blockElementsBySelector('div[class*="Logo"]');


// Block Google Topics iframe
blockElementsBySelector('iframe[name="goog_topics_frame"]');


// Block the popup container
blockPopupContainer();

// 3isk Start
blockElementsByClass('Logo');
blockElementsByClass('header-items');
blockElementsByClass('aplvideo');
blockElementsByClass('main-container videoap-container');
blockElementsByClass('sm_box_1694957651544');
blockElementsByClass('header-wrapper');
blockElementsByClass('footer');
blockElementsByClass('row width_fix_300 my-20');
blockElementsByClass('row width_fix_300 watch-row-2 my-20');
blockElementsByClass('my-40');
blockElementsByClass('div-gpt-ad-1698946296176-0');
blockElementsByClass('div-gpt-ad-1698946361303-0');
blockElementsByClass('div-gpt-ad-8176806-1');
blockElementsByClass('blog-post');
blockElementsByClass('comments-container');
blockElementsByClass('abs-head');
blockElementsByClass('modal fade');
blockElementsByClass('wrapper justify-content-between align-items-center');
blockElementsByClass('abs');
blockElementsByClass('end');
blockElementsByClass('aside-wrapper mt-5');
blockElementsByClass('mb-3 text-center');
blockElementsByClass('fade modal');
blockElementsByClass('d-flex justify-content-center my-3');
// 3isk End

//ArabSeed Start
blockElementsByClass('PageHeader');
blockElementsByClass('SlideMenu');
blockElementsByClass('relatedPosts');
blockElementsByClass('row');
blockElementsByClass('AboElSeed');
blockElementsByClass('ads-aa');
blockElementsByClass('pl-6f4f5c3f5bfa5f5651799c658cb3556b__wrap');
blockElementsByClass('container-6f4f5c3f5bfa5f5651799c658cb3556b40743');
blockElementsByClass('container-6f4f5c3f5bfa5f5651799c658cb3556b6839');
blockElementsByClass('container-6f4f5c3f5bfa5f5651799c658cb3556b49835');
blockElementsByClass('container-6f4f5c3f5bfa5f5651799c658cb3556b13062');
blockElementsByClass('GoogleCreativeContainerClass');
blockElementsByClass('pl-6f4f5c3f5bfa5f5651799c658cb3556b__wrap');
//End Page 1
blockElementsByClass('MainMenuOverlay');
blockElementsByClass('mys-wrapper');
blockElementsByClass('GoogleActiveViewInnerContainer');
blockElementsByClass('div-over');
blockElementsByClass('WatcherArea');
blockElementsByClass('videoAdUi');
blockElementsByClass('sarhne--banr');
blockElementsByClass('ima-sdk-frame');
blockElementsByClass('HeaderLogo');
blockElementsByClass('downloadBTn');
blockElementsByClass('div-over');
blockElementsByClass('container-6f4f5c3f5bfa5f5651799c658cb3556b32535');
blockElementsByClass('container-6f4f5c3f5bfa5f5651799c658cb3556b62840');
blockElementsByClass('container-6f4f5c3f5bfa5f5651799c658cb3556b9969');
blockElementsByClass('container-6f4f5c3f5bfa5f5651799c658cb3556b8124');
blockElementsByClass('container-6f4f5c3f5bfa5f5651799c658cb3556b12185');
blockElementsByClass('container-6f4f5c3f5bfa5f5651799c658cb3556b41932');
blockElementsByClass('container-6f4f5c3f5bfa5f5651799c658cb3556b71401');

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