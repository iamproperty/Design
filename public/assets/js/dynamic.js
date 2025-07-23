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
import iamNotification from './components/notification/notification.component.js';
const components = ['accordion', 'header', 'tabs', 'table', 'card', 'pagination', 'filterlist', 'applied-filters', 'nav', 'marketing'];
const prefix = "iam";
const options = {
    rootMargin: '50px',
    threshold: 0.1
};
const componentExt = ".component.min.js";
// Load components - Each component will load once the first of its type has been loaded
components.forEach((component) => {
    console.log(component);
    if (document.getElementsByTagName(`${prefix}-${component}`).length === 0)
        return;
    let callback = (entries) => {
        entries.forEach((entry) => {
            if (entry.intersectionRatio > 0) {
                console.log(component);
                import(`./components/${component}/${component}${componentExt}`).then(module => {
                    if (!window.customElements.get(`${prefix}-${component}`))
                        window.customElements.define(`${prefix}-${component}`, module.default);
                }).catch((err) => {
                    console.log(err.message);
                });
                intObserver.unobserve(entry.target);
            }
        });
    };
    const intObserver = new IntersectionObserver(callback, options);
    intObserver.observe(document.getElementsByTagName(`${prefix}-${component}`)[0]);
});
// Attach classes to dom elements
document.addEventListener("DOMContentLoaded", function () {
    createDataLayer();
    // Global stuff
    helpers.addBodyClasses(document.body);
    helpers.addGlobalEvents(document.body);
    //helpers.checkElements(document.body);
    extendDialogs(document.body);
    extendInputs(document.body);
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
        console.log(arrayElement);
        new youtubeVideo(arrayElement);
    });
    window.addEventListener('hashchange', function () {
        const hash = location.hash.replace('#', '');
        const label = document.querySelector(`label[for="${hash}"]`);
        if (label instanceof HTMLElement)
            label.click();
    }, false);
});
