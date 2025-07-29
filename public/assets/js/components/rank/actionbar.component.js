import extendDialogs from '../../modules/dialogs.js';
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
    event: 'customElementRegistered',
    element: 'action bar',
});
function setSelectAllInput(element, value) {
    if (element && value == 'all') {
        element.querySelector('input').indeterminate = false;
        element.querySelector('input').checked = true;
        element.querySelector('label').textContent = `Select all`;
    }
    else if (element && value == 0) {
        element.querySelector('input').indeterminate = false;
        element.querySelector('input').checked = false;
        element.querySelector('label').textContent = `Select all`;
    }
    else if (element && value) {
        element.querySelector('input').indeterminate = true;
        element.querySelector('input').checked = false;
        element.querySelector('label').textContent = `${value} item${value > 1 ? 's' : ''} selected`;
    }
    else if (element) {
        element.querySelector('input').checked = false;
        element.querySelector('input').indeterminate = false;
        element.querySelector('label').textContent = `Select all`;
    }
}
class iamActionbar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        const assetLocation = document.body.hasAttribute('data-assets-location')
            ? document.body.getAttribute('data-assets-location')
            : '/assets';
        const coreCSS = document.body.hasAttribute('data-core-css')
            ? document.body.getAttribute('data-core-css')
            : `${assetLocation}/css/core.min.css`;
        const loadCSS = `@import "${assetLocation}/css/components/actionbar.component.css";`;
        const loadExtraCSS = `@import "${assetLocation}/css/components/actionbar.global.css";`;
        const template = document.createElement('template');
        template.innerHTML = `
    <style>
    @import "${coreCSS}";
    ${loadCSS}
    ${this.hasAttribute('css') ? `@import "${this.getAttribute('css')}";` : ``}
    </style>
    <link rel="stylesheet" href="https://kit.fontawesome.com/26fdbf0179.css" crossorigin="anonymous">
    <div class="actionbar__wrapper">
    
      <div class="actionbar" part="actionbar">
        <slot name="selectall"></slot>
        <div class="safe-area">
          <slot></slot>
          <div class="body">
            <div class="dialog__wrapper dialog__wrapper--right dialog-overflow d-none show">
              <button class="btn btn-secondary btn-compact fa-ellipsis-vertical m-0">More actions</button>
              <dialog class="dialog--list" part="overflow">
                <slot name="overflow"></slot>
                <slot name="menu"></slot>
              </dialog>
            </div>


            <div class="dialog__wrapper dialog__wrapper--right filter-columns">
              <button class="btn btn-secondary btn-compact btn-sm mb-0 me-0 fa-regular fa-table-columns" title="Select colums">Filter</button>
              <dialog class="dialog--list">
                <div class="pb-0 mb-0 checklists">
                  
                </div>
                <div class="text-right checklist-btns"><button id="cancelColumns" class="btn btn-action">Cancel</button><button id="saveColumns" class="btn btn-action btn-secondary">Save</button></div>
              </dialog>
            </div>

            <button class="btn btn-secondary btn-compact btn-sm fa-search" data-search="" part="search-btn">Search</button>
          </div>
        </div>
      </div>
      <div class="actionbar--selected">
        <div class="safe-area">
          <slot name="selected"></slot>
          <div class="body">
            <div class="dialog__wrapper dialog__wrapper--right dialog-overflow d-none show">
              <button class="btn btn-secondary btn-compact fa-ellipsis-vertical m-0">More actions</button>
              <dialog class="dialog--list" part="selected-overflow">
                <slot name="selected-overflow"></slot>
              </dialog>
            </div>
          </div>
        </div>
      </div>

      <div class="actionbar--search">
        <button data-search class="btn btn-compact fa-xmark-large btn-secondary m-0" >Close</button>

        <div class="search-wrapper" part="search">
          <label for="search" class="visually-hidden">Input field label</label>
          <button class="suffix" part="search-btn"><i class="fa-regular fa-search"></i></button>
          <input type="text" id="search" name="search" required="" part="search-input">
        </div>

      </div>
    </div>
    `;
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        // insert extra CSS
        if (!document.getElementById('actionbarGlobal'))
            document.head.insertAdjacentHTML('beforeend', `<style id="actionbarGlobal">${loadExtraCSS}</style>`);
    }
    connectedCallback() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        const actionbarWrapper = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('.actionbar__wrapper');
        const checklistHolder = (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('.checklists');
        // #region select all
        if (this.hasAttribute('data-selectall')) {
            actionbarWrapper === null || actionbarWrapper === void 0 ? void 0 : actionbarWrapper.insertAdjacentHTML('afterbegin', `<div class="selectall pb-0"><input type="checkbox" name="selectall" id="selectall"><label for="selectall" class="m-0">Select all</label></div>`);
            const selectAll = (_c = this.shadowRoot) === null || _c === void 0 ? void 0 : _c.querySelector('.selectall');
            if (this.hasAttribute('data-selected')) {
                setSelectAllInput(selectAll, this.getAttribute('data-selected'));
            }
            selectAll === null || selectAll === void 0 ? void 0 : selectAll.addEventListener('change', (event) => {
                var _a;
                if (event && event.target instanceof HTMLElement && event.target.closest('input')) {
                    if ((_a = event.target.closest('input')) === null || _a === void 0 ? void 0 : _a.checked)
                        this.setAttribute('data-selected', 'all');
                    else
                        this.setAttribute('data-selected', '0');
                }
            });
            const cancelButton = this.querySelector('button[data-cancel]');
            if (cancelButton) {
                cancelButton.addEventListener('click', () => {
                    this.setAttribute('data-selected', '0');
                });
            }
        }
        // Wtach div for the select inputs
        if (this.hasAttribute('data-select-watch')) {
            const element = document.getElementById(this.getAttribute('data-select-watch'));
            element === null || element === void 0 ? void 0 : element.setAttribute('data-select-container', 'true');
            Array.from(element.querySelectorAll('input[type="checkbox"]')).forEach((input) => {
                var _a;
                (_a = input.parentElement) === null || _a === void 0 ? void 0 : _a.setAttribute('slot', 'checkbox');
            });
            element === null || element === void 0 ? void 0 : element.addEventListener('change', (event) => {
                if (event && event.target instanceof HTMLElement && event.target.closest('[type="checkbox"]')) {
                    const count = element.querySelectorAll('input[type="checkbox"]').length;
                    const countChecked = element.querySelectorAll('input[type="checkbox"]:checked').length;
                    this.setAttribute('data-selected', count == countChecked ? 'all' : String(countChecked));
                    if (countChecked) {
                        Array.from(element.querySelectorAll('input[type="checkbox"]')).forEach((input) => {
                            var _a;
                            if (input.closest('iam-card'))
                                (_a = input.closest('iam-card')) === null || _a === void 0 ? void 0 : _a.setAttribute('data-selected', 'true');
                        });
                    }
                    else {
                        Array.from(element.querySelectorAll('input[type="checkbox"]')).forEach((input) => {
                            var _a;
                            if (input.closest('iam-card'))
                                (_a = input.closest('iam-card')) === null || _a === void 0 ? void 0 : _a.removeAttribute('data-selected');
                        });
                    }
                }
            });
        }
        // #endregion
        // #region switchviews
        if (this.hasAttribute('data-switchviews')) {
            let btns = '';
            const viewList = (_d = this.getAttribute('data-switchviews')) === null || _d === void 0 ? void 0 : _d.split(',');
            viewList === null || viewList === void 0 ? void 0 : viewList.forEach((view) => {
                let icon = 'fa-grid-2';
                if (view == 'list')
                    icon = 'fa-grip-lines';
                else if (view == 'small')
                    icon = 'fa-bars';
                btns += `<button class="btn btn-action btn-compact mb-0 fa-regular ${icon}">${view}</button>`;
            });
            actionbarWrapper === null || actionbarWrapper === void 0 ? void 0 : actionbarWrapper.insertAdjacentHTML('afterbegin', `<div class="views m-0">${btns}</div>`);
            const views = (_e = this.shadowRoot) === null || _e === void 0 ? void 0 : _e.querySelector('.views');
            views === null || views === void 0 ? void 0 : views.addEventListener('click', (event) => {
                if (event && event.target instanceof HTMLElement && event.target.closest('.btn-action')) {
                    const btn = event.target.closest('.btn-action');
                    this.setAttribute('data-view', btn.textContent);
                    const switchEvent = new CustomEvent('switch-view', { detail: { view: btn.textContent } });
                    this.dispatchEvent(switchEvent);
                }
            });
        }
        // #endregion
        // #region search
        const searchBar = (_f = this.shadowRoot) === null || _f === void 0 ? void 0 : _f.querySelector('.actionbar--search');
        if (this.hasAttribute('data-search-value')) {
            ((_g = this.shadowRoot) === null || _g === void 0 ? void 0 : _g.querySelector('#search')).value = String(this.getAttribute('data-search-value'));
        }
        if (this.hasAttribute('data-search') && this.getAttribute('data-search') == 'show')
            searchBar === null || searchBar === void 0 ? void 0 : searchBar.classList.add('show');
        const searchBtn = this.shadowRoot.querySelector('button[data-search]');
        this.shadowRoot.addEventListener('click', (event) => {
            if (event && event.target instanceof HTMLElement && event.target.closest('button[data-search]')) {
                searchBar.classList.toggle('show');
                searchBtn.toggleAttribute('aria-expanded');
            }
        });
        searchBar.addEventListener('keyup', () => {
            const keyupEvent = new CustomEvent('search-keyup', {
                detail: { search: searchBar.querySelector('input').value },
            });
            this.dispatchEvent(keyupEvent);
        });
        searchBar.addEventListener('change', () => {
            const changeEvent = new CustomEvent('search-change', {
                detail: { search: searchBar.querySelector('input').value },
            });
            this.dispatchEvent(changeEvent);
        });
        searchBar.addEventListener('click', (event) => {
            if (event && event.target instanceof HTMLElement && event.target.closest('button.suffix')) {
                const submitEvent = new CustomEvent('search-submit', {
                    detail: { search: searchBar.querySelector('input').value },
                });
                this.dispatchEvent(submitEvent);
            }
        });
        // #endregion
        // Make sure dialogs created in the shadow dom work
        Array.from(this.shadowRoot.querySelectorAll('.body')).forEach((element) => {
            extendDialogs(element);
        });
        // #region Reponsive safe area
        const hideButtons = () => {
            const wrapperWidth = actionbarWrapper.scrollWidth;
            const screenWidth = document.documentElement.scrollWidth;
            let safeAreaWidth = 750;
            let elementMargin = 16;
            let tabletSafeWidth = 450;
            let mobileSafeWidth = (this === null || this === void 0 ? void 0 : this.hasAttribute('data-switchviews')) ? 144 : 210;
            if (this.hasAttribute('data-large-safe-area')) {
                safeAreaWidth = 1048;
                tabletSafeWidth = 620;
                mobileSafeWidth = 260;
            }
            // We need to modify the widths to mimic the CSS's scaling functionality
            let modifier = 1;
            if (screenWidth >= 992 && screenWidth <= 1280) {
                modifier = screenWidth / 1280;
            }
            else if (screenWidth >= 576 && screenWidth < 992) {
                modifier = screenWidth / 768;
            }
            else if (screenWidth < 576) {
                modifier = screenWidth / 375;
            }
            // Work out the safe sapce width depending upon the wrappers width and modifier comp
            if (wrapperWidth >= 992 && wrapperWidth <= 1280) {
                safeAreaWidth = safeAreaWidth * modifier;
            }
            else if (wrapperWidth >= 576 && wrapperWidth < 992) {
                safeAreaWidth = tabletSafeWidth * modifier;
            }
            else if (wrapperWidth < 576) {
                safeAreaWidth = mobileSafeWidth * modifier;
            }
            // Margin in between elements
            elementMargin = elementMargin * modifier;
            // If the wrapper width is small we want to reduce the btn sizes by adding or removing btn-compact classes
            if (wrapperWidth < 576) {
                Array.from(this.querySelectorAll(':scope > .btn:not(.js-updated), :scope > .dialog__wrapper > .btn[class*="fa-"]:first-child:not(.js-updated)')).forEach((element) => {
                    element.className = element.className.replace(' btn-compact', ' _btn-compact');
                    element.classList.add('btn-compact');
                    element.classList.add('js-updated');
                });
            }
            else {
                Array.from(this.querySelectorAll(':scope > .btn.js-updated, :scope > .dialog__wrapper > .btn.js-updated:first-child')).forEach((element) => {
                    element.classList.remove('btn-compact');
                    element.classList.remove('js-updated');
                    element.className = element.className.replace(' _btn-compact', ' btn-compact');
                });
            }
            // Reset the elements before we decide what elements become slotted into the overflow
            Array.from(this.querySelectorAll('[slot]')).forEach((element) => {
                if (element.getAttribute('slot') == 'overflow')
                    element.removeAttribute('slot');
                if (element.getAttribute('slot') == 'selected-overflow')
                    element.setAttribute('slot', 'selected');
            });
            Array.from(this.querySelectorAll('.show')).forEach((element) => {
                element.classList.remove('show');
            });
            // Foreach safe area lets check what elements are slotted in them and if they need an overflow
            Array.from(this.shadowRoot.querySelectorAll('.safe-area')).forEach((element) => {
                var _a, _b, _c;
                // Decide on which overflow slot to use
                let overflowSlot = 'overflow';
                if (((_a = element.querySelector('slot')) === null || _a === void 0 ? void 0 : _a.hasAttribute('name')) &&
                    ((_b = element.querySelector('slot')) === null || _b === void 0 ? void 0 : _b.getAttribute('name')) == 'selected')
                    overflowSlot = 'selected-overflow';
                // Get the slotted elements, remember they aren't children of the safe area
                const elements = (_c = element.querySelector('slot')) === null || _c === void 0 ? void 0 : _c.assignedElements();
                let tempWidth = 44 * modifier; // Allow space for the overflow button
                // If search then allow for the search button width
                if (this.hasAttribute('data-search'))
                    tempWidth += 44 * modifier;
                // Foreach element this isn't an action button or dialog wrapper add to the width, these will not be moved into the overflow slot
                for (let i = 0; i < elements.length; i++) {
                    if (!elements[i].classList.contains('btn-action') && !elements[i].classList.contains('dialog__wrapper')) {
                        tempWidth += elements[i].offsetWidth;
                        tempWidth += elementMargin;
                    }
                }
                // Foreach dialog wrapper decide if safe in safe area or move into the overflow slot, dialog wrappers have priority over the action buttons
                for (let i = 0; i < elements.length; i++) {
                    if (elements[i].classList.contains('dialog__wrapper')) {
                        elements[i].classList.add('show');
                        tempWidth += elements[i].offsetWidth;
                        tempWidth += elementMargin / 2;
                        // If we have exceeded the safe area then lets break the loop
                        if (tempWidth - elementMargin / 2 > safeAreaWidth) {
                            elements[i].classList.remove('show');
                            break;
                        }
                    }
                }
                // Foreach action button
                for (let i = 0; i < elements.length; i++) {
                    if (elements[i].classList.contains('btn-action')) {
                        elements[i].classList.add('show');
                        tempWidth += elements[i].offsetWidth;
                        tempWidth += elementMargin / 2;
                        // If we have exceeded the safe area then lets break the loop
                        if (tempWidth - elementMargin / 2 > safeAreaWidth) {
                            elements[i].classList.remove('show');
                            break;
                        }
                    }
                }
                const overflowDialog = element.querySelector('.dialog-overflow');
                if (overflowDialog)
                    overflowDialog.classList.add('d-none');
                // Decide which elements go into the overflow slot
                for (let i = 0; i < elements.length; i++) {
                    if (elements[i].classList.contains('btn-action') || elements[i].classList.contains('dialog__wrapper')) {
                        if (!elements[i].classList.contains('show')) {
                            // Move to the slot by changing the attribute
                            elements[i].setAttribute('slot', overflowSlot);
                            // if an element has been added to overflow slot then make sure we show the overflow menu button
                            if (overflowDialog)
                                overflowDialog.classList.remove('d-none');
                        }
                    }
                }
            });
        };
        // Check buttons on load and when the wrapper element gets resized.
        hideButtons();
        new ResizeObserver(hideButtons).observe(actionbarWrapper);
        // #endregion
        // #region cloumn filters
        const setColumnFilters = () => {
            let columnsHidden = '';
            Array.from(checklistHolder === null || checklistHolder === void 0 ? void 0 : checklistHolder.querySelectorAll('label input')).forEach((element, index) => {
                columnsHidden += this.hasAttribute(`data-hide-col${index + 1}`) ? `${index + 1},` : '';
            });
            const dispatchedEvent = new CustomEvent('columm-filters-set', {
                detail: {
                    columnsHidden: columnsHidden.slice(0, -1),
                },
            });
            this.dispatchEvent(dispatchedEvent);
        };
        if (this.hasAttribute('data-filter-columns') || this.hasAttribute('data-filter-columns-save')) {
            const columns = this.closest('iam-table').querySelectorAll('thead th');
            Array.from(columns).forEach((element, index) => {
                if (element.textContent) {
                    checklistHolder === null || checklistHolder === void 0 ? void 0 : checklistHolder.insertAdjacentHTML('beforeend', `<label class="m-0" title="Change the display of "><input name="hideCol${index + 1}" value="${index + 1}" type="checkbox" ${this.hasAttribute('data-hide-col' + (index + 1)) ? '' : 'checked'} /> ${element.textContent}</label>`);
                }
            });
        }
        if (this.hasAttribute('data-filter-columns') && !this.hasAttribute('data-filter-columns-save')) {
            checklistHolder === null || checklistHolder === void 0 ? void 0 : checklistHolder.addEventListener('change', (event) => {
                if (event && event.target instanceof HTMLElement && event.target.closest('input')) {
                    const checkbox = event.target.closest('input');
                    if ((checkbox === null || checkbox === void 0 ? void 0 : checkbox.checked) == false) {
                        this.setAttribute('data-hide-col' + (checkbox === null || checkbox === void 0 ? void 0 : checkbox.value), 'true');
                    }
                    else {
                        this.removeAttribute('data-hide-col' + (checkbox === null || checkbox === void 0 ? void 0 : checkbox.value));
                    }
                    setColumnFilters();
                }
            });
        }
        if (this.hasAttribute('data-filter-columns-save')) {
            const checklistHolder = (_h = this.shadowRoot) === null || _h === void 0 ? void 0 : _h.querySelector('.checklists');
            const checklistSave = (_j = this.shadowRoot) === null || _j === void 0 ? void 0 : _j.querySelector('#saveColumns');
            const checklistCancel = (_k = this.shadowRoot) === null || _k === void 0 ? void 0 : _k.querySelector('#cancelColumns');
            checklistSave === null || checklistSave === void 0 ? void 0 : checklistSave.addEventListener('click', (event) => {
                var _a;
                Array.from(checklistHolder === null || checklistHolder === void 0 ? void 0 : checklistHolder.querySelectorAll('label input')).forEach((checkbox) => {
                    if ((checkbox === null || checkbox === void 0 ? void 0 : checkbox.checked) == false) {
                        this.setAttribute('data-hide-col' + (checkbox === null || checkbox === void 0 ? void 0 : checkbox.value), 'true');
                    }
                    else {
                        this.removeAttribute('data-hide-col' + (checkbox === null || checkbox === void 0 ? void 0 : checkbox.value));
                    }
                });
                setColumnFilters();
                (_a = checklistSave.closest('dialog')) === null || _a === void 0 ? void 0 : _a.close();
            });
            // Revert back to what was previously saved
            checklistCancel === null || checklistCancel === void 0 ? void 0 : checklistCancel.addEventListener('click', (event) => {
                var _a, _b;
                const checklistHolder = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('.checklists');
                Array.from(checklistHolder === null || checklistHolder === void 0 ? void 0 : checklistHolder.querySelectorAll('label input')).forEach((element, index) => {
                    element.checked = this.hasAttribute(`data-hide-col${index + 1}`) ? false : true;
                });
                setColumnFilters();
                (_b = checklistSave.closest('dialog')) === null || _b === void 0 ? void 0 : _b.close();
            });
        }
        // #endregion
    }
    static get observedAttributes() {
        return ['data-selected'];
    }
    attributeChangedCallback(attrName, oldVal, newVal) {
        switch (attrName) {
            case 'data-selected': {
                const selectAll = this.shadowRoot.querySelector('.selectall');
                if (selectAll)
                    setSelectAllInput(selectAll, newVal);
                const event = new CustomEvent('selected', { detail: { selected: newVal } });
                this.dispatchEvent(event);
                if (newVal == 'all' && this.hasAttribute('data-select-watch')) {
                    const element = document.getElementById(String(this.getAttribute('data-select-watch')));
                    Array.from(element.querySelectorAll('input[type="checkbox"]')).forEach((input) => {
                        var _a;
                        input.checked = true;
                        if (input.closest('iam-card'))
                            (_a = input.closest('iam-card')) === null || _a === void 0 ? void 0 : _a.setAttribute('data-selected', 'true');
                    });
                }
                if (newVal == '0' && this.hasAttribute('data-select-watch')) {
                    const element = document.getElementById(String(this.getAttribute('data-select-watch')));
                    Array.from(element.querySelectorAll('input[type="checkbox"]')).forEach((input) => {
                        var _a;
                        input.checked = false;
                        if (input.closest('iam-card'))
                            (_a = input.closest('iam-card')) === null || _a === void 0 ? void 0 : _a.removeAttribute('data-selected');
                    });
                }
                break;
            }
        }
    }
}
export default iamActionbar;
