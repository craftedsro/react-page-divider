"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var editor_1 = require("@react-page/editor");
var react_1 = __importDefault(require("react"));
var settings_1 = require("./default/settings");
var DividerHtmlRenderer_1 = __importDefault(require("./Renderer/DividerHtmlRenderer"));
var Remove = (0, editor_1.lazyLoad)(function () { return Promise.resolve().then(function () { return __importStar(require('@mui/icons-material/Remove')); }); });
var createPlugin = function (settings) {
    var _a, _b;
    var mergedSettings = __assign(__assign({}, settings_1.defaultSettings), settings);
    return {
        Renderer: settings.Renderer || DividerHtmlRenderer_1.default,
        id: 'ory/editor/core/content/divider',
        version: 1,
        icon: react_1.default.createElement(Remove, null),
        title: (_a = mergedSettings.translations) === null || _a === void 0 ? void 0 : _a.pluginName,
        description: (_b = mergedSettings.translations) === null || _b === void 0 ? void 0 : _b.pluginDescription,
    };
};
exports.default = createPlugin;
//# sourceMappingURL=createPlugin.js.map