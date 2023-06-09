"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultSettings = exports.defaultTranslations = void 0;
var react_1 = __importDefault(require("react"));
exports.defaultTranslations = {
    pluginName: 'Divider',
    pluginDescription: 'A horizontal divider',
};
exports.defaultSettings = {
    translations: exports.defaultTranslations,
    Renderer: function () { return react_1.default.createElement(react_1.default.Fragment, null, "Renderer for this plugin was not provided"); },
};
//# sourceMappingURL=settings.js.map