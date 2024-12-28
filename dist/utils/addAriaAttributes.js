export function addAriaAttributes(element, attributes) {
    Object.keys(attributes).forEach(function (key) {
        element.setAttribute("aria-".concat(key), attributes[key]);
    });
}
