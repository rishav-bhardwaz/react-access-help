'use strict';

var react = require('react');
var tslib = require('tslib');
var axe = require('axe-core');

function useAccessibleFocus(ref, condition) {
    react.useEffect(function () {
        if (condition && ref.current) {
            ref.current.focus();
        }
    }, [condition, ref]);
}

function checkAccessibility(rootElement) {
    return tslib.__awaiter(this, void 0, void 0, function () {
        var results;
        return tslib.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axe.run(rootElement)];
                case 1:
                    results = _a.sent();
                    return [2 /*return*/, results];
            }
        });
    });
}

function addAriaAttributes(element, attributes) {
    Object.keys(attributes).forEach(function (key) {
        element.setAttribute("aria-".concat(key), attributes[key]);
    });
}

exports.addAriaAttributes = addAriaAttributes;
exports.checkAccessibility = checkAccessibility;
exports.useAccessibleFocus = useAccessibleFocus;
