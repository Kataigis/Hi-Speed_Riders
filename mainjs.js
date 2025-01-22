document.addEventListener('shown.bs.tab', function (event) {
    const newTab = event.target;
    const activePaneId = newTab.getAttribute('data-bs-target');
    const activePane = document.querySelector(activePaneId);
    const tabContentWrapper = newTab.closest('.card')?.querySelector('.tab-content-wrapper');
    if (tabContentWrapper) {
        const currentHeight = tabContentWrapper.offsetHeight;
        tabContentWrapper.style.height = `${currentHeight}px`;
        tabContentWrapper.offsetHeight;
        const newHeight = activePane.offsetHeight;
        tabContentWrapper.style.height = `${newHeight}px`;
    } else {
        const contentDivs = activePane.querySelectorAll('.contentDiv');
        for (var i = 0, ln = contentDivs.length; i < ln; i++) {
            var contentDiv = contentDivs[i];
            var cards = contentDiv.querySelectorAll('.card');
            for (var j = 0, len = cards.length; j < len; j++) {
                var card = cards[j];
                const s_tabContentWrapper = card.querySelector('.tab-content-wrapper');
                const s_activePane = s_tabContentWrapper.querySelector('.active');
                const currentHeight = s_tabContentWrapper.offsetHeight;
                s_tabContentWrapper.style.height = `${currentHeight}px`;
                s_tabContentWrapper.offsetHeight;
                const newHeight = s_activePane.offsetHeight;
                s_tabContentWrapper.style.height = `${newHeight}px`;
            }
        }
    }
});
