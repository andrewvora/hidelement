console.log('hidelement', 'Running hidelement for Firefox...');

window.addEventListener('load', () => {
    const observer = new MutationObserver(hideMatchingElements);
    const observerConfig = {
        attributes: true,
        childList: true,
        subtree: true,
    }
    observer.observe(document.body, observerConfig)
});

function hideMatchingElements(mutationList, observer) {
    console.log('hidelement', 'Hiding matching elements...');

    // find elements matching outlook element
    const matchedElements = document.querySelectorAll('div.pBKjV');

    // if we have any matches, hide every one of them
    if (matchedElements) {
        matchedElements.forEach(element => {
            element.hidden = true;
            element.style.display = 'none';
        });
    }

    // disconnect the observer because our job is done
    observer.disconnect();
}