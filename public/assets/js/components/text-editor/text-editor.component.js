class iamContent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        const assetLocation = document.body.hasAttribute('data-assets-location')
            ? document.body.getAttribute('data-assets-location')
            : '/assets';
        const loadCSS = `@import "${assetLocation}/css/components/text-editor.component.css";`;
        const template = document.createElement('template');
        template.innerHTML = `
    <style>
    ${loadCSS}

    ${this.hasAttribute('css') ? `@import "${this.getAttribute('css')}";` : ``}
    </style>
    <div class="btn__container">
    <button data-element="h1">H1</button>
    <button data-element="h2">H2</button>
    <button data-element="h3">H3</button>
    <button data-element="h4">H4</button>
    <button data-element="p">P</button>
    <button data-element="ul">UL</button>
    <button data-element="ul">OL</button>
    -
    <button data-inline="span">SPAN</button>
    <button data-inline="i">Italic</button>
    <button data-inline="b">Bold</button>
    -
    <button data-undo>Undo</button>
    <button data-redo>Redo</button>
    -
    <button data-save>Save</button>
    </div>
    <div class="content__container">
      <slot></slot>
    </div>
    <div class="path__container"></div>
    `;
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.history = [];
        this.historyIndex = 0;
        this.selectedElement;
    }
    createPath(composedPath) {
        var _a;
        const pathContainer = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('.path__container');
        pathContainer === null || pathContainer === void 0 ? void 0 : pathContainer.innerHTML = '';
        for (const el of composedPath) {
            if (typeof el.matches == "function" && el.matches('slot')) { // TODO add extra checks
                break;
            }
            if ((pathContainer === null || pathContainer === void 0 ? void 0 : pathContainer.innerHTML) != "")
                pathContainer === null || pathContainer === void 0 ? void 0 : pathContainer.innerHTML += " / ";
            pathContainer === null || pathContainer === void 0 ? void 0 : pathContainer.innerHTML += el.tagName;
        }
    }
    undoChange() {
        // TODO work out when to kill future array items
        if (this.history[this.historyIndex - 1]) {
            this.innerHTML = this.history[this.historyIndex - 1];
            this.historyIndex--;
            console.log(this.historyIndex);
        }
    }
    redoChange() {
        // TODO check is its working correct
        if (this.history[this.historyIndex]) {
            this.innerHTML = this.history[this.historyIndex];
            this.historyIndex++;
        }
    }
    connectedCallback() {
        var _a, _b;
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const component = this;
        const button = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('[data-element="h1"]');
        const contentContainer = (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('.content__container');
        const selection = window.getSelection();
        let selectionInterval;
        this.setAttribute('contentEditable', true);
        if (this.innerHTML == "") {
            this.innerHTML = `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`; // todo add lorum
        }
        contentContainer.addEventListener('click', (event) => {
            if (!event.target.matches('iam-text-editor') && !this.classList.contains('selecting')) {
                if (event.target != (selection === null || selection === void 0 ? void 0 : selection.anchorNode)) {
                    selection.removeAllRanges();
                    const range = document.createRange();
                    range.selectNodeContents(event.target);
                    selection.addRange(range);
                }
                else {
                    selection.removeAllRanges();
                }
            }
            //if(event.composedPath().includes(contentContainer)){
            this.createPath(event.composedPath());
            this.selectedElement = event.composedPath()[0];
            //}
        });
        document.addEventListener('selectionchange', (event) => {
            component.classList.add('selecting');
            clearInterval(selectionInterval);
            selectionInterval = setInterval(function () {
                component === null || component === void 0 ? void 0 : component.classList.remove('selecting');
            }, 1000);
            this.createPath(event.composedPath());
        });
        component.shadowRoot.addEventListener('click', (event) => {
            var _a, _b, _c, _d, _e;
            if (event.composedPath()[0].matches('button[data-save]') && ((_a = event.composedPath()[1]) === null || _a === void 0 ? void 0 : _a.matches('.btn__container'))) {
                const customEvent = new CustomEvent('save', {
                    detail: {
                        'content': this.innerHTML,
                        'timestamp': Date.now()
                    },
                });
                this.dispatchEvent(customEvent);
            }
            else if (event.composedPath()[0].matches('button[data-undo]') && ((_b = event.composedPath()[1]) === null || _b === void 0 ? void 0 : _b.matches('.btn__container'))) {
                this.undoChange();
            }
            else if (event.composedPath()[0].matches('button[data-redo]') && ((_c = event.composedPath()[1]) === null || _c === void 0 ? void 0 : _c.matches('.btn__container'))) {
                this.redoChange();
            }
            else if (event.composedPath()[0].matches('button[data-element]') && ((_d = event.composedPath()[1]) === null || _d === void 0 ? void 0 : _d.matches('.btn__container'))) {
                this.history[this.historyIndex++] = this.innerHTML;
                const target = event.composedPath()[0];
                const selection = window.getSelection();
                const original = selection.anchorNode;
                console.log(original);
                const replacement = document.createElement(target.getAttribute('data-element'));
                console.log(replacement);
                if (target.getAttribute('data-element') == "ul" || target.getAttribute('data-element') == "ol")
                    replacement.innerHTML = `<li>${original.innerHTML}</li>`;
                else
                    replacement.innerHTML = original.innerHTML;
                original.parentNode.replaceChild(replacement, original);
            }
            else if (event.composedPath()[0].matches('button[data-inline]') && ((_e = event.composedPath()[1]) === null || _e === void 0 ? void 0 : _e.matches('.btn__container'))) {
                this.history[this.historyIndex++] = this.innerHTML;
                const target = event.composedPath()[0];
                const selection = window.getSelection();
                // TODO add in attributes
                const original = selection.anchorNode;
                console.log(selection);
                console.log(original, this.outerHTML);
                console.log(this.selectedElement);
                if ((selection === null || selection === void 0 ? void 0 : selection.anchorNode.nodeType) == 3) {
                    const selection2 = window.getSelection().getRangeAt(0);
                    const selectedText = selection2.extractContents();
                    const span = document.createElement(target.getAttribute('data-inline'));
                    span.style.backgroundColor = "yellow";
                    span.appendChild(selectedText);
                    selection2.insertNode(span);
                }
            }
        });
    }
}
export default iamContent;
