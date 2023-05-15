"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var createPlugin_1 = __importDefault(require("./createPlugin"));
var DividerHtmlRenderer_1 = __importDefault(require("./Renderer/DividerHtmlRenderer"));
var plugin = (0, createPlugin_1.default)({
    Renderer: DividerHtmlRenderer_1.default,
});
exports.default = plugin;
//# sourceMappingURL=index.js.map