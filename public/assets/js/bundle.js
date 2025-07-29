// @ts-nocheck
// Modules
import * as helpers from '../js/modules/helpers.js';
import extendDialogs from '../js/modules/dialogs.js';
import createDataLayer from '../js/modules/data-layer.js';
import extendInputs from '../js/modules/inputs.js';
import nav from '../js/modules/nav.js';
//import accordion from './modules/accordion'
import testimonial from '../js/modules/testimonial.js';
import carousel from '../js/modules/carousel.js';
import form from '../js/modules/form.js';
import youtubeVideo from '../js/modules/youtubevideo.js';
import iamHeader from './components/header/header.component.js';
import iamAccordion from './components/accordion/accordion.component.js';
import iamTabs from './components/tabs/tabs.component.js';
import iamTable from './components/table/table.component.js';
import iamCard from './components/card/card.component.js';
import iamAppliedFilters from './components/applied-filters/applied-filters.component.js';
import iamPagination from './components/pagination/pagination.component.js';
import iamFilterlist from './components/filterlist/filterlist.component.js';
import iamNotification from './components/notification/notification.component.js';
// Attach classes to dom elements
document.addEventListener("DOMContentLoaded", function () {
    createDataLayer();
    // Global stuff
    helpers.addBodyClasses(document.body);
    helpers.addGlobalEvents(document.body);
    extendDialogs(document.body);
    extendInputs(document.body);
    //helpers.checkElements(document.body);
    if (!window.customElements.get(`iam-header`))
        window.customElements.define(`iam-header`, iamHeader);
    if (!window.customElements.get(`iam-accordion`))
        window.customElements.define(`iam-accordion`, iamAccordion);
    if (!window.customElements.get(`iam-tabs`))
        window.customElements.define(`iam-tabs`, iamTabs);
    if (!window.customElements.get(`iam-table`))
        window.customElements.define(`iam-table`, iamTable);
    if (!window.customElements.get(`iam-card`))
        window.customElements.define(`iam-card`, iamCard);
    if (!window.customElements.get(`iam-filterlist`))
        window.customElements.define(`iam-filterlist`, iamFilterlist);
    if (!window.customElements.get(`iam-pagination`))
        window.customElements.define(`iam-pagination`, iamPagination);
    if (!window.customElements.get(`iam-applied-filters`))
        window.customElements.define(`iam-applied-filters`, iamAppliedFilters);
    if (!window.customElements.get(`iam-notification`))
        window.customElements.define(`iam-notification`, iamNotification);
    // ANav
    Array.from(document.querySelectorAll('.nav')).forEach((arrayElement) => {
        nav(arrayElement);
    });
    // Testimonial
    Array.from(document.querySelectorAll('.testimonial')).forEach((arrayElement) => {
        testimonial(arrayElement);
    });
    // Carousel
    Array.from(document.querySelectorAll('.carousel')).forEach((arrayElement) => {
        carousel(arrayElement);
    });
    // Form
    Array.from(document.querySelectorAll('form')).forEach((arrayElement) => {
        form(arrayElement);
    });
    // YouTube videos
    Array.from(document.querySelectorAll('.youtube-embed')).forEach((arrayElement) => {
        new youtubeVideo(arrayElement);
    });
    window.addEventListener('hashchange', function () {
        const hash = location.hash.replace('#', '');
        const label = document.querySelector(`label[for="${hash}"]`);
        if (label instanceof HTMLElement)
            label.click();
    }, false);
});
