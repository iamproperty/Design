var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { trackComponent, trackComponentRegistered } from '../_global.js';
import { cardHTML, setupCard } from '../../modules/card.module.js';
trackComponentRegistered('iam-record-card');
class iamRecordCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        const assetLocation = document.body.hasAttribute('data-assets-location')
            ? document.body.getAttribute('data-assets-location')
            : '/assets';
        const loadCSS = `@import "${assetLocation}/css/components/record-card.component.css";`;
        const template = document.createElement('template');
        template.innerHTML = `
    <style>
    ${this.hasAttribute('css') ? `@import "${this.getAttribute('css')}";` : ``}
    
    ${loadCSS}
    </style>
    ${cardHTML}
    `;
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
    connectedCallback() {
        return __awaiter(this, void 0, void 0, function* () {
            const cardHead = this.shadowRoot.querySelector('.card__head');
            setupCard(this);
            Array.from(this.querySelectorAll(':scope > *:not([slot])')).forEach((element) => {
                element.setAttribute('slot', 'details');
            });
            if (this.hasAttribute('data-avatar')) {
                cardHead.innerHTML += `<img src="${this.getAttribute('data-avatar')}" alt="" loading="lazy" class="card__avatar" part="avatar" />`;
            }
            trackComponent(this, 'iam-record-card', []);
        });
    }
    static get observedAttributes() {
        return ['data-image'];
    }
    attributeChangedCallback(attrName, oldVal, newVal) {
        switch (attrName) {
            case 'data-image': {
                if (oldVal != newVal) {
                    const cardHeadImg = this.shadowRoot.querySelector('.card__head img');
                    if (cardHeadImg)
                        cardHeadImg.setAttribute('src', newVal);
                }
                break;
            }
            case 'data-avatar': {
                if (oldVal != newVal) {
                    const cardHeadImg = this.shadowRoot.querySelector('.card__avatar');
                    if (cardHeadImg)
                        cardHeadImg.setAttribute('src', newVal);
                }
                break;
            }
        }
    }
}
export default iamRecordCard;
