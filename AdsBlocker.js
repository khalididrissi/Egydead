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




//ArabSeed Start
blockElementsByClass('notranslate');
blockElementsByClass('share-post');




// Remove elements by ID
var elementsToRemoveById = [

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
