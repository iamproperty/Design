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
trackComponentRegistered('iam-filter-card');
class iamFilerCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        const assetLocation = document.body.hasAttribute('data-assets-location')
            ? document.body.getAttribute('data-assets-location')
            : '/assets';
        const loadCSS = `@import "${assetLocation}/css/components/filter-card.component.css";`;
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
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            const cardComponent = this;
            setupCard(cardComponent);
            // Dispatch events of selecting checkboxes
            const checkbox = cardComponent.parentElement.querySelector('input[type="checkbox"]');
            if (checkbox) {
                checkbox.addEventListener('change', () => {
                    if (checkbox.checked) {
                        const customEvent = new CustomEvent('select-card', {
                            detail: { 'Card value': checkbox.value, 'input name': checkbox.getAttribute('name') },
                        });
                        cardComponent.dispatchEvent(customEvent);
                        cardComponent.classList.add('active');
                    }
                    else {
                        const customEvent = new CustomEvent('unselect-card', {
                            detail: { 'Card value': checkbox.value, 'input name': checkbox.getAttribute('name') },
                        });
                        cardComponent.dispatchEvent(customEvent);
                        cardComponent.classList.remove('active');
                    }
                });
            }
            if (cardComponent.parentElement.matches('button')) {
                const button = cardComponent.parentElement;
                button.addEventListener('click', () => {
                    if (!cardComponent.classList.contains('active')) {
                        const customEvent = new CustomEvent('select-card', {
                            detail: { 'button name': button.getAttribute('name') },
                        });
                        cardComponent.dispatchEvent(customEvent);
                        cardComponent.classList.add('active');
                    }
                    else {
                        const customEvent = new CustomEvent('unselect-card', {
                            detail: { 'button name': button.getAttribute('name') },
                        });
                        cardComponent.dispatchEvent(customEvent);
                        cardComponent.classList.remove('active');
                    }
                });
            }
            trackComponent(cardComponent, 'iam-filter-card', ['select-card', 'unselect-card']);
        });
    }
}
export default iamFilerCard;
