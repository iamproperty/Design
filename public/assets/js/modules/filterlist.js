function filterlist(list, input) {
    addFilterlistEventListeners(list, input);
}
function addFilterlistEventListeners(list, input) {
    let timer;
    input.addEventListener('keyup', () => {
        clearTimeout(timer);
        timer = setTimeout(function () {
            filterTheList(list, input.value);
        }, 500);
    });
    input.addEventListener('change', () => {
        clearTimeout(timer);
        filterTheList(list, input.value);
    });
}
export const filterTheList = function (list, searchTerm) {
    Array.from(list.querySelectorAll(':scope > li')).forEach((item) => {
        const content = item.textContent.toLowerCase();
        item.classList.add('d-none');
        if (content.includes(searchTerm.toLowerCase()))
            item.classList.remove('d-none');
    });
    // Data layer Web component created
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event: 'Filtered list',
        value: searchTerm,
    });
};
export default filterlist;
