var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Modules
import * as helpers from './modules/helpers.js';
import extendDialogs from './modules/dialogs.js';
import createDataLayer from './modules/data-layer.js';
import extendInputs from './modules/inputs.js';
import createDynamicEvents from './modules/dynamicEvents.js';
import videoSupport from './modules/videos.js';
const components = [
    'accordion',
    'header',
    'table',
    'table-basic',
    'table-no-submit',
    'tabs',
    'card',
    'content',
    'filter-card',
    'video-card',
    'record-card',
    'filterlist',
    'applied-filters',
    'pagination',
    'notification',
    'actionbar',
    'nav',
    'collapsible-side',
    'address-lookup',
    'fileupload',
    'search',
    'inline-edit',
    'multiselect',
    'multi-step',
    'menu',
    'slider',
    'carousel',
    'marketing',
    'barchart',
    'doughnutchart',
    'bento-grid',
];
// Attach classes to dom elements
document.addEventListener('DOMContentLoaded', () => __awaiter(void 0, void 0, void 0, function* () {
    createDataLayer();
    createDynamicEvents();
    // Global stuff
    helpers.addBodyClasses(document.body);
    helpers.addGlobalEvents(document.body);
    extendDialogs(document.body);
    extendInputs(document.body);
    videoSupport(document.body);
    /*
    const prefix = 'iam';
    const options = {
      rootMargin: '50px',
      threshold: 0.1,
    };
    const componentExt = '.component.min.js';
  
    // Load components - Each component will load once the first of its type has been loaded
    components.forEach((component) => {
      if (document.getElementsByTagName(`${prefix}-${component}`).length === 0) return;
  
      const callback = (entries: any): void => {
        entries.forEach((entry: any) => {
          if (entry.intersectionRatio > 0) {
  
            import(`../js/components/${component}/${component}${componentExt}`)
              .then((module) => {
                if (!window.customElements.get(`${prefix}-${component}`))
                  window.customElements.define(`${prefix}-${component}`, module.default);
              })
              .catch((err) => {
                console.log(err.message);
              });
  
            intObserver.unobserve(entry.target);
          }
        });
      };
  
      const intObserver = new IntersectionObserver(callback, options);
      intObserver.observe(document.getElementsByTagName(`${prefix}-${component}`)[0]);
    });
    */
}));
