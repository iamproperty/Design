function createDataLayer() {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event: 'Pageview',
        pageTitle: document.title,
    });
    document.addEventListener('click', (event) => {
        const target = event.target.closest('[open] summary');
        if (target) {
            window.dataLayer.push({
                event: 'closeDetails',
                detailsTitle: target.textContent || '',
            });
        }
        else {
            const summary = event.target.closest('summary');
            const link = event.target.closest('a');
            const button = event.target.closest('button');
            if (summary) {
                window.dataLayer.push({
                    event: 'openDetails',
                    detailsTitle: summary.textContent || '',
                });
            }
            if (link) {
                window.dataLayer.push({
                    event: 'linkClicked',
                    linkText: link.hasAttribute('title') ? link.getAttribute('title') || '' : link.textContent || '',
                    class: link.hasAttribute('class') ? link.getAttribute('class') || '' : '',
                    href: link.getAttribute('href') || '',
                });
            }
            if (button) {
                window.dataLayer.push({
                    event: 'buttonClicked',
                    buttonText: button.textContent || '',
                    class: button.hasAttribute('class') ? button.getAttribute('class') || '' : '',
                });
            }
        }
    });
}
export default createDataLayer;
