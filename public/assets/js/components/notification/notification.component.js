import setupNotification, { closeNotification } from '../../modules/notification.js';
// Data layer Web component created
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
    event: 'customElementRegistered',
    element: 'Notification',
});
class iamNotification extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        const assetLocation = document.body.hasAttribute('data-assets-location')
            ? document.body.getAttribute('data-assets-location')
            : '/assets';
        const coreCSS = document.body.hasAttribute('data-core-css')
            ? document.body.getAttribute('data-core-css')
            : `${assetLocation}/css/core.min.css`;
        const loadCSS = `@import "${assetLocation}/css/components/notification.css";`;
        const loadExtraCSS = `@import "${assetLocation}/css/components/notification.global.css";`;
        const template = document.createElement('template');
        template.innerHTML = `
    <style>
    @import "${coreCSS}";
    ${loadCSS}
    ${this.hasAttribute('data-css') ? `${this.getAttribute('data-css')}` : ``}
    </style>

    <div class="notification">
      <div class="notification__icon"><slot name="icon"></slot></div>
      <div class="notification__inner"><div class="notification__text"><slot></slot></div><div class="notification__btns"><slot name="btns"></slot></div></div>
      <div class="notification__dismiss"></div>
    </div>
    `;
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        // insert extra CSS
        if (!document.getElementById('notificationHolder'))
            document.head.insertAdjacentHTML('beforeend', `<style id="notificationHolder">${loadExtraCSS}</style>`);
    }
    connectedCallback() {
        var _a, _b, _c, _d, _e;
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const wrapper = this;
        const statusBG = this.hasAttribute('data-status') ? this.getAttribute('data-status') : 'white';
        if (this.hasAttribute('data-type'))
            this.classList.add(`bg-${statusBG}`);
        else {
            this.classList.add(`colour-${statusBG}`);
        }
        if (!this.querySelector('i')) {
            switch (statusBG) {
                case 'danger':
                    this.insertAdjacentHTML('beforeend', '<i class="fa-solid fa-circle-exclamation" aria-hidden="true" slot="icon"></i>');
                    break;
                case 'warning':
                    this.insertAdjacentHTML('beforeend', '<i class="fa-solid fa-triangle-exclamation" aria-hidden="true" slot="icon"></i>');
                    break;
                case 'success':
                    this.insertAdjacentHTML('beforeend', '<i class="fa-solid fa-check-circle" aria-hidden="true" slot="icon"></i>');
                    break;
                default:
                    this.insertAdjacentHTML('beforeend', '<i class="fa-solid fa-circle-info" aria-hidden="true" slot="icon"></i>');
            }
        }
        const buttons = this.querySelectorAll('a,button');
        Array.from(buttons).forEach((button) => {
            button.setAttribute('slot', 'btns');
            button.classList.add('link');
        });
        if (buttons.length || this.hasAttribute('data-dismiss')) {
            this.classList.add('notification--dismissable');
        }
        if (!buttons.length) {
            (_b = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('.notification__btns')) === null || _b === void 0 ? void 0 : _b.classList.add('empty');
        }
        else {
            (_d = (_c = this.shadowRoot) === null || _c === void 0 ? void 0 : _c.querySelector('.notification__btns')) === null || _d === void 0 ? void 0 : _d.classList.remove('empty');
        }
        if (this.hasAttribute('data-dismiss')) {
            (_e = this.shadowRoot.querySelector('.notification__dismiss')) === null || _e === void 0 ? void 0 : _e.innerHTML =
                `<button data-dismiss-button part="dismiss-btn">Dismiss</button>`;
            this.shadowRoot.querySelector('.notification__dismiss [data-dismiss-button]').addEventListener('click', function () {
                closeNotification(wrapper);
            }, false);
        }
        setupNotification(this);
    }
}
export default iamNotification;
