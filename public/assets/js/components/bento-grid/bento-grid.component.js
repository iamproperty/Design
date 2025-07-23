window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
    event: 'customElementRegistered',
    element: 'bento-grid',
});
class iamBentoGrid extends HTMLElement {
    constructor() {
        var _a;
        super();
        this.attachShadow({ mode: 'open' });
        const assetLocation = document.body.hasAttribute('data-assets-location')
            ? document.body.getAttribute('data-assets-location')
            : '/assets';
        const loadCSS = `@import "${assetLocation}/css/components/bento-grid.component.css";`;
        const loadExtraCSS = `@import "${assetLocation}/css/components/bento-grid.global.css";`;
        const template = document.createElement('template');
        template.innerHTML = `
    <style>
    ${this.hasAttribute('css') ? `@import "${this.getAttribute('css')}";` : ``}
    
    ${loadCSS}
    </style>
    <div class="wrapper">
      <slot></slot>
    </div>
    `;
        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(template.content.cloneNode(true));
        if (!document.getElementById('bentogridGlobal'))
            document.head.insertAdjacentHTML('beforeend', `<style id="bentogridGlobal">${loadExtraCSS}</style>`);
    }
    connectedCallback() {
        this.classList.add('loaded');
        const arrDetails = this.querySelectorAll('details');
        Array.from(arrDetails).forEach((details) => {
            details.classList.add('bg-primary');
            const summary = details.querySelector('summary');
            summary === null || summary === void 0 ? void 0 : summary.classList.add('h3');
            if (!(summary === null || summary === void 0 ? void 0 : summary.querySelector('[role="presentation"]')))
                summary === null || summary === void 0 ? void 0 : summary.insertAdjacentHTML('beforeend', ` <span role="presentation">Find out more</span>`);
        });
        this.addEventListener('click', (event) => {
            if (event && event.target instanceof HTMLElement && event.target.closest('details summary')) {
                const summary = event.target.closest('details summary');
                const details = summary === null || summary === void 0 ? void 0 : summary.closest('details');
                details === null || details === void 0 ? void 0 : details.classList.add('animating');
                setTimeout(() => {
                    details === null || details === void 0 ? void 0 : details.classList.remove('animating');
                }, 1100);
                if (details === null || details === void 0 ? void 0 : details.hasAttribute('open')) {
                    const customEvent = new CustomEvent('item-closed', {
                        detail: {
                            title: summary === null || summary === void 0 ? void 0 : summary.textContent,
                        },
                    });
                    this.dispatchEvent(customEvent);
                }
                else {
                    const customEvent = new CustomEvent('item-opened', {
                        detail: {
                            title: summary === null || summary === void 0 ? void 0 : summary.textContent,
                        },
                    });
                    this.dispatchEvent(customEvent);
                }
            }
        });
    }
}
export default iamBentoGrid;
