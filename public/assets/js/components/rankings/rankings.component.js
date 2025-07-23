import { trackComponentRegistered } from '../_global.js';
trackComponentRegistered('iam-rankings');
class iamRankings extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        const assetLocation = document.body.hasAttribute('data-assets-location')
            ? document.body.getAttribute('data-assets-location')
            : '/assets';
        const loadCSS = `@import "${assetLocation}/css/components/rankings.component.css";`;
        const loadExtraCSS = `@import "${assetLocation}/css/components/rankings.global.css";`;
        const template = document.createElement('template');
        template.innerHTML = `
    <style>
    ${loadCSS}
    </style>
    <div class="podium">
      <div>
        <iam-rank class="rank--trophy first-position">1st</iam-rank>
      </div>
      <div>
        <iam-rank class="second-position">2nd</iam-rank>
      </div>
      <div>
        <iam-rank class="third-position">3rd</iam-rank>
      </div>
    </div>
    <div class="mh-md" part="leaderboard"><slot></slot></div>
    `;
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        // insert extra CSS
        if (!document.getElementById('rankingsGlobal'))
            document.head.insertAdjacentHTML('beforeend', `<style id="rankingsGlobal">${loadExtraCSS}</style>`);
    }
    connectedCallback() {
        var _a, _b, _c, _d, _e, _f;
        const firstText = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('.first-position');
        const secondText = (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('.second-position');
        const thirdText = (_c = this.shadowRoot) === null || _c === void 0 ? void 0 : _c.querySelector('.third-position');
        firstText === null || firstText === void 0 ? void 0 : firstText.setAttribute('data-title', (_d = this.querySelector('tbody tr:nth-child(1) :is(td,th):nth-child(1)')) === null || _d === void 0 ? void 0 : _d.textContent);
        secondText === null || secondText === void 0 ? void 0 : secondText.setAttribute('data-title', (_e = this.querySelector('tbody tr:nth-child(2) :is(td,th):nth-child(1)')) === null || _e === void 0 ? void 0 : _e.textContent);
        thirdText === null || thirdText === void 0 ? void 0 : thirdText.setAttribute('data-title', (_f = this.querySelector('tbody tr:nth-child(3) :is(td,th):nth-child(1)')) === null || _f === void 0 ? void 0 : _f.textContent);
        const max = this.hasAttribute('data-max') ? this.getAttribute('data-max') : 100;
        this.querySelectorAll('tbody tr').forEach((element) => {
            var _a, _b, _c;
            const value = (_b = (_a = element.querySelector('td:last-child')) === null || _a === void 0 ? void 0 : _a.textContent) === null || _b === void 0 ? void 0 : _b.trim();
            if (!element.querySelector(':first-child progress'))
                (_c = element.querySelector(':first-child')) === null || _c === void 0 ? void 0 : _c.innerHTML += `<progress max="${max}" value="${value}"></progress>`;
        });
        if (!this.classList.contains('hide-gold')) {
            const firstRow = this.querySelector('tbody tr th');
            firstRow === null || firstRow === void 0 ? void 0 : firstRow.insertAdjacentHTML('afterbegin', `<iam-rank class="rank--medal first-position">1st</iam-rank>`);
        }
    }
}
export default iamRankings;
