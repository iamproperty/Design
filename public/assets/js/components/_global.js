export const trackComponentRegistered = (componentName) => {
    // Data layer Web component created
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event: 'customElementRegistered',
        element: componentName,
    });
};
export const trackComponent = (component, componentName, trackEvents) => {
    // Data layer Web component created
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event: 'customElementAdded',
        element: componentName,
    });
    trackEvents.forEach((eventName) => {
        component.addEventListener(eventName, function (event) {
            const eventDetails = {
                event: eventName,
                element: componentName,
                target: event.target,
            };
            Object.keys(event.detail).forEach((eventKey) => {
                const eventDetail = event.detail[eventKey];
                eventDetails[eventKey] = eventDetail;
            });
            window.dataLayer.push(eventDetails);
        });
    });
    return true;
};
