/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/overlayscrollbars/styles/overlayscrollbars.css":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/overlayscrollbars/styles/overlayscrollbars.css ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*! \n * OverlayScrollbars\n * Version: 2.11.4\n * \n * Copyright (c) Rene Haas | KingSora.\n * https://github.com/KingSora\n * \n * Released under the MIT license.\n */\n.os-size-observer,\n.os-size-observer-listener {\n  scroll-behavior: auto !important;\n  direction: inherit;\n  pointer-events: none;\n  overflow: hidden;\n  visibility: hidden;\n  box-sizing: border-box;\n}\n\n.os-size-observer,\n.os-size-observer-listener,\n.os-size-observer-listener-item,\n.os-size-observer-listener-item-final {\n  writing-mode: horizontal-tb;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n\n.os-size-observer {\n  z-index: -1;\n  contain: strict;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  padding: inherit;\n  border: inherit;\n  box-sizing: inherit;\n  margin: -133px;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  transform: scale(0.1);\n}\n.os-size-observer::before {\n  content: \"\";\n  flex: none;\n  box-sizing: inherit;\n  padding: 10px;\n  width: 10px;\n  height: 10px;\n}\n\n.os-size-observer-appear {\n  animation: os-size-observer-appear-animation 1ms forwards;\n}\n\n.os-size-observer-listener {\n  box-sizing: border-box;\n  position: relative;\n  flex: auto;\n  padding: inherit;\n  border: inherit;\n  margin: -133px;\n  transform: scale(calc(1 / 0.1));\n}\n.os-size-observer-listener.ltr {\n  margin-right: -266px;\n  margin-left: 0;\n}\n.os-size-observer-listener.rtl {\n  margin-left: -266px;\n  margin-right: 0;\n}\n.os-size-observer-listener:empty::before {\n  content: \"\";\n  width: 100%;\n  height: 100%;\n}\n.os-size-observer-listener:empty::before, .os-size-observer-listener > .os-size-observer-listener-item {\n  display: block;\n  position: relative;\n  padding: inherit;\n  border: inherit;\n  box-sizing: content-box;\n  flex: auto;\n}\n\n.os-size-observer-listener-scroll {\n  box-sizing: border-box;\n  display: flex;\n}\n\n.os-size-observer-listener-item {\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n  direction: ltr;\n  flex: none;\n}\n\n.os-size-observer-listener-item-final {\n  transition: none;\n}\n\n@keyframes os-size-observer-appear-animation {\n  from {\n    cursor: auto;\n  }\n  to {\n    cursor: none;\n  }\n}\n.os-trinsic-observer {\n  flex: none;\n  box-sizing: border-box;\n  position: relative;\n  max-width: 0px;\n  max-height: 1px;\n  padding: 0;\n  margin: 0;\n  border: none;\n  overflow: hidden;\n  z-index: -1;\n  height: 0;\n  top: calc(100% + 1px);\n  contain: strict;\n}\n.os-trinsic-observer:not(:empty) {\n  height: calc(100% + 1px);\n  top: -1px;\n}\n.os-trinsic-observer:not(:empty) > .os-size-observer {\n  width: 1000%;\n  height: 1000%;\n  min-height: 1px;\n  min-width: 1px;\n}\n\n/**\n * hide native scrollbars\n * changes to this styles need to be reflected in the environment styles to correctly detect scrollbar hiding\n */\n[data-overlayscrollbars-initialize]:not([data-overlayscrollbars-viewport]),\n[data-overlayscrollbars-viewport~=scrollbarHidden] {\n  scrollbar-width: none !important;\n}\n\n[data-overlayscrollbars-initialize]:not([data-overlayscrollbars-viewport])::-webkit-scrollbar,\n[data-overlayscrollbars-initialize]:not([data-overlayscrollbars-viewport])::-webkit-scrollbar-corner,\n[data-overlayscrollbars-viewport~=scrollbarHidden]::-webkit-scrollbar,\n[data-overlayscrollbars-viewport~=scrollbarHidden]::-webkit-scrollbar-corner {\n  -webkit-appearance: none !important;\n          appearance: none !important;\n  display: none !important;\n  width: 0 !important;\n  height: 0 !important;\n}\n\n[data-overlayscrollbars-initialize]:not([data-overlayscrollbars]):not(html):not(body) {\n  overflow: auto;\n}\n\n/**\n * body element\n */\nhtml[data-overlayscrollbars-body] {\n  overflow: hidden;\n}\n\nhtml[data-overlayscrollbars-body],\nhtml[data-overlayscrollbars-body] > body {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n}\n\nhtml[data-overlayscrollbars-body] > body {\n  overflow: visible;\n  margin: 0;\n}\n\n/**\n * structure setup \n */\n[data-overlayscrollbars] {\n  position: relative;\n}\n\n[data-overlayscrollbars~=host],\n[data-overlayscrollbars-padding] {\n  display: flex;\n  align-items: stretch !important;\n  flex-direction: row !important;\n  flex-wrap: nowrap !important;\n  scroll-behavior: auto !important;\n}\n\n[data-overlayscrollbars-padding],\n[data-overlayscrollbars-viewport]:not([data-overlayscrollbars]) {\n  box-sizing: inherit;\n  position: relative;\n  flex: auto;\n  height: auto;\n  width: 100%;\n  min-width: 0;\n  padding: 0;\n  margin: 0;\n  border: none;\n  z-index: 0;\n}\n\n[data-overlayscrollbars-viewport]:not([data-overlayscrollbars]) {\n  --os-vaw: 0;\n  --os-vah: 0;\n  outline: none;\n}\n[data-overlayscrollbars-viewport]:not([data-overlayscrollbars]):focus {\n  outline: none;\n}\n[data-overlayscrollbars-viewport][data-overlayscrollbars-viewport~=arrange]::before {\n  content: \"\";\n  position: absolute;\n  pointer-events: none;\n  z-index: -1;\n  min-width: 1px;\n  min-height: 1px;\n  width: var(--os-vaw);\n  height: var(--os-vah);\n}\n\n/**\n * wrapper elements overflow:\n */\n[data-overlayscrollbars~=host],\n[data-overlayscrollbars-padding] {\n  overflow: hidden !important;\n}\n\n[data-overlayscrollbars~=host][data-overlayscrollbars~=noClipping],\n[data-overlayscrollbars-padding~=noClipping] {\n  overflow: visible !important;\n}\n\n/**\n * viewport overflow:\n */\n[data-overlayscrollbars-viewport] {\n  --os-viewport-overflow-x: hidden;\n  --os-viewport-overflow-y: hidden;\n  overflow-x: var(--os-viewport-overflow-x);\n  overflow-y: var(--os-viewport-overflow-y);\n}\n\n[data-overlayscrollbars-viewport~=overflowXVisible] {\n  --os-viewport-overflow-x: visible;\n}\n\n[data-overlayscrollbars-viewport~=overflowXHidden] {\n  --os-viewport-overflow-x: hidden;\n}\n\n[data-overlayscrollbars-viewport~=overflowXScroll] {\n  --os-viewport-overflow-x: scroll;\n}\n\n[data-overlayscrollbars-viewport~=overflowYVisible] {\n  --os-viewport-overflow-y: visible;\n}\n\n[data-overlayscrollbars-viewport~=overflowYHidden] {\n  --os-viewport-overflow-y: hidden;\n}\n\n[data-overlayscrollbars-viewport~=overflowYScroll] {\n  --os-viewport-overflow-y: scroll;\n}\n\n[data-overlayscrollbars-viewport~=overflowImportant] {\n  overflow-x: var(--os-viewport-overflow-x) !important;\n  overflow-y: var(--os-viewport-overflow-y) !important;\n}\n\n/**\n * viewport state modifiers:\n */\n[data-overlayscrollbars-viewport~=noContent]:not(#osFakeId) {\n  font-size: 0 !important;\n  line-height: 0 !important;\n}\n\n[data-overlayscrollbars-viewport~=noContent]:not(#osFakeId)::before,\n[data-overlayscrollbars-viewport~=noContent]:not(#osFakeId)::after,\n[data-overlayscrollbars-viewport~=noContent]:not(#osFakeId) > * {\n  display: none !important;\n  position: absolute !important;\n  width: 1px !important;\n  height: 1px !important;\n  padding: 0 !important;\n  margin: -1px !important;\n  overflow: hidden !important;\n  clip: rect(0, 0, 0, 0) !important;\n  white-space: nowrap !important;\n  border-width: 0 !important;\n}\n\n[data-overlayscrollbars-viewport~=measuring],\n[data-overlayscrollbars-viewport~=scrolling] {\n  scroll-behavior: auto !important;\n  scroll-snap-type: none !important;\n}\n\n[data-overlayscrollbars-viewport~=measuring][data-overlayscrollbars-viewport~=overflowXVisible] {\n  overflow-x: hidden !important;\n}\n\n[data-overlayscrollbars-viewport~=measuring][data-overlayscrollbars-viewport~=overflowYVisible] {\n  overflow-y: hidden !important;\n}\n\n/**\n * content element:\n */\n[data-overlayscrollbars-content] {\n  box-sizing: inherit;\n}\n\n/**\n * Display contents to bridge any flickering during deferred initialization.\n */\n[data-overlayscrollbars-contents]:not(#osFakeId):not([data-overlayscrollbars-padding]):not([data-overlayscrollbars-viewport]):not([data-overlayscrollbars-content]) {\n  display: contents;\n}\n\n/**\n * optional & experimental grid mode\n */\n[data-overlayscrollbars-grid],\n[data-overlayscrollbars-grid] [data-overlayscrollbars-padding] {\n  display: grid;\n  grid-template: 1fr/1fr;\n}\n\n[data-overlayscrollbars-grid] > [data-overlayscrollbars-padding],\n[data-overlayscrollbars-grid] > [data-overlayscrollbars-viewport],\n[data-overlayscrollbars-grid] > [data-overlayscrollbars-padding] > [data-overlayscrollbars-viewport] {\n  height: auto !important;\n  width: auto !important;\n}\n\n@property --os-scroll-percent {\n  syntax: \"<number>\";\n  inherits: true;\n  initial-value: 0;\n}\n@property --os-viewport-percent {\n  syntax: \"<number>\";\n  inherits: true;\n  initial-value: 0;\n}\n.os-scrollbar {\n  --os-viewport-percent: 0;\n  --os-scroll-percent: 0;\n  --os-scroll-direction: 0;\n  --os-scroll-percent-directional: calc(\n    var(--os-scroll-percent) - (var(--os-scroll-percent) + (1 - var(--os-scroll-percent)) * -1) *\n      var(--os-scroll-direction)\n  );\n}\n\n.os-scrollbar {\n  contain: size layout;\n  contain: size layout style;\n  transition: opacity 0.15s, visibility 0.15s, top 0.15s, right 0.15s, bottom 0.15s, left 0.15s;\n  pointer-events: none;\n  position: absolute;\n  opacity: 0;\n  visibility: hidden;\n}\n\nbody > .os-scrollbar {\n  position: fixed;\n  z-index: 99999;\n}\n\n.os-scrollbar-transitionless {\n  transition: none !important;\n}\n\n.os-scrollbar-track {\n  position: relative;\n  padding: 0 !important;\n  border: none !important;\n}\n\n.os-scrollbar-handle {\n  position: absolute;\n}\n\n.os-scrollbar-track,\n.os-scrollbar-handle {\n  pointer-events: none;\n  width: 100%;\n  height: 100%;\n}\n\n.os-scrollbar.os-scrollbar-track-interactive .os-scrollbar-track,\n.os-scrollbar.os-scrollbar-handle-interactive .os-scrollbar-handle {\n  pointer-events: auto;\n  touch-action: none;\n}\n\n.os-scrollbar-horizontal {\n  bottom: 0;\n  left: 0;\n}\n\n.os-scrollbar-vertical {\n  top: 0;\n  right: 0;\n}\n\n.os-scrollbar-rtl.os-scrollbar-horizontal {\n  right: 0;\n}\n\n.os-scrollbar-rtl.os-scrollbar-vertical {\n  right: auto;\n  left: 0;\n}\n\n.os-scrollbar-visible {\n  opacity: 1;\n  visibility: visible;\n}\n\n.os-scrollbar-auto-hide.os-scrollbar-auto-hide-hidden {\n  opacity: 0;\n  visibility: hidden;\n}\n\n.os-scrollbar-interaction.os-scrollbar-visible {\n  opacity: 1;\n  visibility: visible;\n}\n\n.os-scrollbar-unusable,\n.os-scrollbar-unusable *,\n.os-scrollbar-wheel,\n.os-scrollbar-wheel * {\n  pointer-events: none !important;\n}\n\n.os-scrollbar-unusable .os-scrollbar-handle {\n  opacity: 0 !important;\n  transition: none !important;\n}\n\n.os-scrollbar-horizontal .os-scrollbar-handle {\n  bottom: 0;\n  left: calc(var(--os-scroll-percent-directional) * 100%);\n  transform: translateX(calc(var(--os-scroll-percent-directional) * -100%));\n  width: calc(var(--os-viewport-percent) * 100%);\n}\n\n.os-scrollbar-vertical .os-scrollbar-handle {\n  right: 0;\n  top: calc(var(--os-scroll-percent-directional) * 100%);\n  transform: translateY(calc(var(--os-scroll-percent-directional) * -100%));\n  height: calc(var(--os-viewport-percent) * 100%);\n}\n\n@supports (container-type: size) {\n  .os-scrollbar-track {\n    container-type: size;\n  }\n  .os-scrollbar-horizontal .os-scrollbar-handle {\n    left: auto;\n    transform: translateX(calc(var(--os-scroll-percent-directional) * 100cqw + var(--os-scroll-percent-directional) * -100%));\n  }\n  .os-scrollbar-vertical .os-scrollbar-handle {\n    top: auto;\n    transform: translateY(calc(var(--os-scroll-percent-directional) * 100cqh + var(--os-scroll-percent-directional) * -100%));\n  }\n  .os-scrollbar-rtl.os-scrollbar-horizontal .os-scrollbar-handle {\n    right: auto;\n    left: 0;\n  }\n}\n.os-scrollbar-rtl.os-scrollbar-vertical .os-scrollbar-handle {\n  right: auto;\n  left: 0;\n}\n\n.os-scrollbar.os-scrollbar-horizontal.os-scrollbar-cornerless,\n.os-scrollbar.os-scrollbar-horizontal.os-scrollbar-cornerless.os-scrollbar-rtl {\n  left: 0;\n  right: 0;\n}\n\n.os-scrollbar.os-scrollbar-vertical.os-scrollbar-cornerless,\n.os-scrollbar.os-scrollbar-vertical.os-scrollbar-cornerless.os-scrollbar-rtl {\n  top: 0;\n  bottom: 0;\n}\n\n@media print {\n  .os-scrollbar {\n    display: none;\n  }\n}\n.os-scrollbar {\n  --os-size: 0;\n  --os-padding-perpendicular: 0;\n  --os-padding-axis: 0;\n  --os-track-border-radius: 0;\n  --os-track-bg: none;\n  --os-track-bg-hover: none;\n  --os-track-bg-active: none;\n  --os-track-border: none;\n  --os-track-border-hover: none;\n  --os-track-border-active: none;\n  --os-handle-border-radius: 0;\n  --os-handle-bg: none;\n  --os-handle-bg-hover: none;\n  --os-handle-bg-active: none;\n  --os-handle-border: none;\n  --os-handle-border-hover: none;\n  --os-handle-border-active: none;\n  --os-handle-min-size: 33px;\n  --os-handle-max-size: none;\n  --os-handle-perpendicular-size: 100%;\n  --os-handle-perpendicular-size-hover: 100%;\n  --os-handle-perpendicular-size-active: 100%;\n  --os-handle-interactive-area-offset: 0;\n}\n\n.os-scrollbar-track {\n  border: var(--os-track-border);\n  border-radius: var(--os-track-border-radius);\n  background: var(--os-track-bg);\n  transition: opacity 0.15s, background-color 0.15s, border-color 0.15s;\n}\n.os-scrollbar-track:hover {\n  border: var(--os-track-border-hover);\n  background: var(--os-track-bg-hover);\n}\n.os-scrollbar-track:active {\n  border: var(--os-track-border-active);\n  background: var(--os-track-bg-active);\n}\n\n.os-scrollbar-handle {\n  border: var(--os-handle-border);\n  border-radius: var(--os-handle-border-radius);\n  background: var(--os-handle-bg);\n}\n.os-scrollbar-handle:hover {\n  border: var(--os-handle-border-hover);\n  background: var(--os-handle-bg-hover);\n}\n.os-scrollbar-handle:active {\n  border: var(--os-handle-border-active);\n  background: var(--os-handle-bg-active);\n}\n\n.os-scrollbar-track:before,\n.os-scrollbar-handle:before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  display: block;\n}\n\n.os-scrollbar-horizontal {\n  padding: var(--os-padding-perpendicular) var(--os-padding-axis);\n  right: var(--os-size);\n  height: var(--os-size);\n}\n.os-scrollbar-horizontal.os-scrollbar-rtl {\n  left: var(--os-size);\n  right: 0;\n}\n.os-scrollbar-horizontal .os-scrollbar-track:before {\n  top: calc(var(--os-padding-perpendicular) * -1);\n  bottom: calc(var(--os-padding-perpendicular) * -1);\n}\n.os-scrollbar-horizontal .os-scrollbar-handle {\n  min-width: var(--os-handle-min-size);\n  max-width: var(--os-handle-max-size);\n  height: var(--os-handle-perpendicular-size);\n  transition: opacity 0.15s, background-color 0.15s, border-color 0.15s, height 0.15s;\n}\n.os-scrollbar-horizontal .os-scrollbar-handle:before {\n  top: calc((var(--os-padding-perpendicular) + var(--os-handle-interactive-area-offset)) * -1);\n  bottom: calc(var(--os-padding-perpendicular) * -1);\n}\n.os-scrollbar-horizontal:hover .os-scrollbar-handle {\n  height: var(--os-handle-perpendicular-size-hover);\n}\n.os-scrollbar-horizontal:active .os-scrollbar-handle {\n  height: var(--os-handle-perpendicular-size-active);\n}\n\n.os-scrollbar-vertical {\n  padding: var(--os-padding-axis) var(--os-padding-perpendicular);\n  bottom: var(--os-size);\n  width: var(--os-size);\n}\n.os-scrollbar-vertical .os-scrollbar-track:before {\n  left: calc(var(--os-padding-perpendicular) * -1);\n  right: calc(var(--os-padding-perpendicular) * -1);\n}\n.os-scrollbar-vertical .os-scrollbar-handle {\n  min-height: var(--os-handle-min-size);\n  max-height: var(--os-handle-max-size);\n  width: var(--os-handle-perpendicular-size);\n  transition: opacity 0.15s, background-color 0.15s, border-color 0.15s, width 0.15s;\n}\n.os-scrollbar-vertical .os-scrollbar-handle:before {\n  left: calc((var(--os-padding-perpendicular) + var(--os-handle-interactive-area-offset)) * -1);\n  right: calc(var(--os-padding-perpendicular) * -1);\n}\n.os-scrollbar-vertical.os-scrollbar-rtl .os-scrollbar-handle:before {\n  right: calc((var(--os-padding-perpendicular) + var(--os-handle-interactive-area-offset)) * -1);\n  left: calc(var(--os-padding-perpendicular) * -1);\n}\n.os-scrollbar-vertical:hover .os-scrollbar-handle {\n  width: var(--os-handle-perpendicular-size-hover);\n}\n.os-scrollbar-vertical:active .os-scrollbar-handle {\n  width: var(--os-handle-perpendicular-size-active);\n}\n\n/* NONE THEME: */\n[data-overlayscrollbars-viewport~=measuring] > .os-scrollbar,\n.os-theme-none.os-scrollbar {\n  display: none !important;\n}\n\n/* DARK & LIGHT THEME: */\n.os-theme-dark,\n.os-theme-light {\n  box-sizing: border-box;\n  --os-size: 10px;\n  --os-padding-perpendicular: 2px;\n  --os-padding-axis: 2px;\n  --os-track-border-radius: 10px;\n  --os-handle-interactive-area-offset: 4px;\n  --os-handle-border-radius: 10px;\n}\n\n.os-theme-dark {\n  --os-handle-bg: rgba(0, 0, 0, 0.44);\n  --os-handle-bg-hover: rgba(0, 0, 0, 0.55);\n  --os-handle-bg-active: rgba(0, 0, 0, 0.66);\n}\n\n.os-theme-light {\n  --os-handle-bg: rgba(255, 255, 255, 0.44);\n  --os-handle-bg-hover: rgba(255, 255, 255, 0.55);\n  --os-handle-bg-active: rgba(255, 255, 255, 0.66);\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/overlayscrollbars/overlayscrollbars.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/overlayscrollbars/overlayscrollbars.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClickScrollPlugin: () => (/* binding */ zt),
/* harmony export */   OverlayScrollbars: () => (/* binding */ OverlayScrollbars),
/* harmony export */   ScrollbarsHidingPlugin: () => (/* binding */ Ht),
/* harmony export */   SizeObserverPlugin: () => (/* binding */ Ct)
/* harmony export */ });
/*!
 * OverlayScrollbars
 * Version: 2.11.4
 *
 * Copyright (c) Rene Haas | KingSora.
 * https://github.com/KingSora
 *
 * Released under the MIT license.
 */
const createCache = (t, n) => {
  const {o: o, i: s, u: e} = t;
  let c = o;
  let r;
  const cacheUpdateContextual = (t, n) => {
    const o = c;
    const i = t;
    const l = n || (s ? !s(o, i) : o !== i);
    if (l || e) {
      c = i;
      r = o;
    }
    return [ c, l, r ];
  };
  const cacheUpdateIsolated = t => cacheUpdateContextual(n(c, r), t);
  const getCurrentCache = t => [ c, !!t, r ];
  return [ n ? cacheUpdateIsolated : cacheUpdateContextual, getCurrentCache ];
};

const t = typeof window !== "undefined" && typeof HTMLElement !== "undefined" && !!window.document;

const n = t ? window : {};

const o = Math.max;

const s = Math.min;

const e = Math.round;

const c = Math.abs;

const r = Math.sign;

const i = n.cancelAnimationFrame;

const l = n.requestAnimationFrame;

const a = n.setTimeout;

const u = n.clearTimeout;

const getApi = t => typeof n[t] !== "undefined" ? n[t] : void 0;

const f = getApi("MutationObserver");

const _ = getApi("IntersectionObserver");

const d = getApi("ResizeObserver");

const p = getApi("ScrollTimeline");

const isUndefined = t => t === void 0;

const isNull = t => t === null;

const isNumber = t => typeof t === "number";

const isString = t => typeof t === "string";

const isBoolean = t => typeof t === "boolean";

const isFunction = t => typeof t === "function";

const isArray = t => Array.isArray(t);

const isObject = t => typeof t === "object" && !isArray(t) && !isNull(t);

const isArrayLike = t => {
  const n = !!t && t.length;
  const o = isNumber(n) && n > -1 && n % 1 == 0;
  return isArray(t) || !isFunction(t) && o ? n > 0 && isObject(t) ? n - 1 in t : true : false;
};

const isPlainObject = t => !!t && t.constructor === Object;

const isHTMLElement = t => t instanceof HTMLElement;

const isElement = t => t instanceof Element;

const animationCurrentTime = () => performance.now();

const animateNumber = (t, n, s, e, c) => {
  let r = 0;
  const a = animationCurrentTime();
  const u = o(0, s);
  const frame = s => {
    const i = animationCurrentTime();
    const f = i - a;
    const _ = f >= u;
    const d = s ? 1 : 1 - (o(0, a + u - i) / u || 0);
    const p = (n - t) * (isFunction(c) ? c(d, d * u, 0, 1, u) : d) + t;
    const v = _ || d === 1;
    if (e) {
      e(p, d, v);
    }
    r = v ? 0 : l((() => frame()));
  };
  frame();
  return t => {
    i(r);
    if (t) {
      frame(t);
    }
  };
};

function each(t, n) {
  if (isArrayLike(t)) {
    for (let o = 0; o < t.length; o++) {
      if (n(t[o], o, t) === false) {
        break;
      }
    }
  } else if (t) {
    each(Object.keys(t), (o => n(t[o], o, t)));
  }
  return t;
}

const inArray = (t, n) => t.indexOf(n) >= 0;

const concat = (t, n) => t.concat(n);

const push = (t, n, o) => {
  if (!isString(n) && isArrayLike(n)) {
    Array.prototype.push.apply(t, n);
  } else {
    t.push(n);
  }
  return t;
};

const from = t => Array.from(t || []);

const createOrKeepArray = t => {
  if (isArray(t)) {
    return t;
  }
  return !isString(t) && isArrayLike(t) ? from(t) : [ t ];
};

const isEmptyArray = t => !!t && !t.length;

const deduplicateArray = t => from(new Set(t));

const runEachAndClear = (t, n, o) => {
  const runFn = t => t ? t.apply(void 0, n || []) : true;
  each(t, runFn);
  if (!o) {
    t.length = 0;
  }
};

const v = "paddingTop";

const g = "paddingRight";

const h = "paddingLeft";

const b = "paddingBottom";

const w = "marginLeft";

const y = "marginRight";

const S = "marginBottom";

const m = "overflowX";

const O = "overflowY";

const $ = "width";

const C = "height";

const x = "visible";

const H = "hidden";

const E = "scroll";

const capitalizeFirstLetter = t => {
  const n = String(t || "");
  return n ? n[0].toUpperCase() + n.slice(1) : "";
};

const equal = (t, n, o, s) => {
  if (t && n) {
    let s = true;
    each(o, (o => {
      const e = t[o];
      const c = n[o];
      if (e !== c) {
        s = false;
      }
    }));
    return s;
  }
  return false;
};

const equalWH = (t, n) => equal(t, n, [ "w", "h" ]);

const equalXY = (t, n) => equal(t, n, [ "x", "y" ]);

const equalTRBL = (t, n) => equal(t, n, [ "t", "r", "b", "l" ]);

const bind = (t, ...n) => t.bind(0, ...n);

const selfClearTimeout = t => {
  let n;
  const o = t ? a : l;
  const s = t ? u : i;
  return [ e => {
    s(n);
    n = o((() => e()), isFunction(t) ? t() : t);
  }, () => s(n) ];
};

const getDebouncer = t => {
  const n = isFunction(t) ? t() : t;
  if (isNumber(n)) {
    const t = n ? a : l;
    const o = n ? u : i;
    return s => {
      const e = t((() => s()), n);
      return () => {
        o(e);
      };
    };
  }
  return n && n._;
};

const debounce = (t, n) => {
  const {p: o, v: s, S: e, m: c} = n || {};
  let r;
  let i;
  let l;
  let a;
  let u;
  const f = function invokeFunctionToDebounce(n) {
    if (i) {
      i();
    }
    if (r) {
      r();
    }
    u = i = r = l = void 0;
    t.apply(this, n);
  };
  const mergeParms = t => c && l ? c(l, t) : t;
  const flush = () => {
    if (i) {
      f(mergeParms(a) || a);
    }
  };
  const _ = function debouncedFn() {
    const t = from(arguments);
    const n = getDebouncer(o);
    if (n) {
      const o = getDebouncer(s);
      const c = mergeParms(t);
      const _ = c || t;
      const d = f.bind(0, _);
      if (i) {
        i();
      }
      if (e && !u) {
        d();
        u = true;
        i = n((() => u = void 0));
      } else {
        i = n(d);
        if (o && !r) {
          r = o(flush);
        }
      }
      l = a = _;
    } else {
      f(t);
    }
  };
  _.O = flush;
  return _;
};

const hasOwnProperty = (t, n) => Object.prototype.hasOwnProperty.call(t, n);

const keys = t => t ? Object.keys(t) : [];

const assignDeep = (t, n, o, s, e, c, r) => {
  const i = [ n, o, s, e, c, r ];
  if ((typeof t !== "object" || isNull(t)) && !isFunction(t)) {
    t = {};
  }
  each(i, (n => {
    each(n, ((o, s) => {
      const e = n[s];
      if (t === e) {
        return true;
      }
      const c = isArray(e);
      if (e && isPlainObject(e)) {
        const n = t[s];
        let o = n;
        if (c && !isArray(n)) {
          o = [];
        } else if (!c && !isPlainObject(n)) {
          o = {};
        }
        t[s] = assignDeep(o, e);
      } else {
        t[s] = c ? e.slice() : e;
      }
    }));
  }));
  return t;
};

const removeUndefinedProperties = (t, n) => each(assignDeep({}, t), ((t, n, o) => {
  if (t === void 0) {
    delete o[n];
  } else if (t && isPlainObject(t)) {
    o[n] = removeUndefinedProperties(t);
  }
}));

const isEmptyObject = t => !keys(t).length;

const noop = () => {};

const capNumber = (t, n, e) => o(t, s(n, e));

const getDomTokensArray = t => deduplicateArray((isArray(t) ? t : (t || "").split(" ")).filter((t => t)));

const getAttr = (t, n) => t && t.getAttribute(n);

const hasAttr = (t, n) => t && t.hasAttribute(n);

const setAttrs = (t, n, o) => {
  each(getDomTokensArray(n), (n => {
    if (t) {
      t.setAttribute(n, String(o || ""));
    }
  }));
};

const removeAttrs = (t, n) => {
  each(getDomTokensArray(n), (n => t && t.removeAttribute(n)));
};

const domTokenListAttr = (t, n) => {
  const o = getDomTokensArray(getAttr(t, n));
  const s = bind(setAttrs, t, n);
  const domTokenListOperation = (t, n) => {
    const s = new Set(o);
    each(getDomTokensArray(t), (t => {
      s[n](t);
    }));
    return from(s).join(" ");
  };
  return {
    $: t => s(domTokenListOperation(t, "delete")),
    C: t => s(domTokenListOperation(t, "add")),
    H: t => {
      const n = getDomTokensArray(t);
      return n.reduce(((t, n) => t && o.includes(n)), n.length > 0);
    }
  };
};

const removeAttrClass = (t, n, o) => {
  domTokenListAttr(t, n).$(o);
  return bind(addAttrClass, t, n, o);
};

const addAttrClass = (t, n, o) => {
  domTokenListAttr(t, n).C(o);
  return bind(removeAttrClass, t, n, o);
};

const addRemoveAttrClass = (t, n, o, s) => (s ? addAttrClass : removeAttrClass)(t, n, o);

const hasAttrClass = (t, n, o) => domTokenListAttr(t, n).H(o);

const createDomTokenListClass = t => domTokenListAttr(t, "class");

const removeClass = (t, n) => {
  createDomTokenListClass(t).$(n);
};

const addClass = (t, n) => {
  createDomTokenListClass(t).C(n);
  return bind(removeClass, t, n);
};

const find = (t, n) => {
  const o = n ? isElement(n) && n : document;
  return o ? from(o.querySelectorAll(t)) : [];
};

const findFirst = (t, n) => {
  const o = n ? isElement(n) && n : document;
  return o && o.querySelector(t);
};

const is = (t, n) => isElement(t) && t.matches(n);

const isBodyElement = t => is(t, "body");

const contents = t => t ? from(t.childNodes) : [];

const parent = t => t && t.parentElement;

const closest = (t, n) => isElement(t) && t.closest(n);

const getFocusedElement = t => document.activeElement;

const liesBetween = (t, n, o) => {
  const s = closest(t, n);
  const e = t && findFirst(o, s);
  const c = closest(e, n) === s;
  return s && e ? s === t || e === t || c && closest(closest(t, o), n) !== s : false;
};

const removeElements = t => {
  each(createOrKeepArray(t), (t => {
    const n = parent(t);
    if (t && n) {
      n.removeChild(t);
    }
  }));
};

const appendChildren = (t, n) => bind(removeElements, t && n && each(createOrKeepArray(n), (n => {
  if (n) {
    t.appendChild(n);
  }
})));

let z;

const getTrustedTypePolicy = () => z;

const setTrustedTypePolicy = t => {
  z = t;
};

const createDiv = t => {
  const n = document.createElement("div");
  setAttrs(n, "class", t);
  return n;
};

const createDOM = t => {
  const n = createDiv();
  const o = getTrustedTypePolicy();
  const s = t.trim();
  n.innerHTML = o ? o.createHTML(s) : s;
  return each(contents(n), (t => removeElements(t)));
};

const getCSSVal = (t, n) => t.getPropertyValue(n) || t[n] || "";

const validFiniteNumber = t => {
  const n = t || 0;
  return isFinite(n) ? n : 0;
};

const parseToZeroOrNumber = t => validFiniteNumber(parseFloat(t || ""));

const roundCssNumber = t => Math.round(t * 1e4) / 1e4;

const numberToCssPx = t => `${roundCssNumber(validFiniteNumber(t))}px`;

function setStyles(t, n) {
  t && n && each(n, ((n, o) => {
    try {
      const s = t.style;
      const e = isNull(n) || isBoolean(n) ? "" : isNumber(n) ? numberToCssPx(n) : n;
      if (o.indexOf("--") === 0) {
        s.setProperty(o, e);
      } else {
        s[o] = e;
      }
    } catch (s) {}
  }));
}

function getStyles(t, o, s) {
  const e = isString(o);
  let c = e ? "" : {};
  if (t) {
    const r = n.getComputedStyle(t, s) || t.style;
    c = e ? getCSSVal(r, o) : from(o).reduce(((t, n) => {
      t[n] = getCSSVal(r, n);
      return t;
    }), c);
  }
  return c;
}

const topRightBottomLeft = (t, n, o) => {
  const s = n ? `${n}-` : "";
  const e = o ? `-${o}` : "";
  const c = `${s}top${e}`;
  const r = `${s}right${e}`;
  const i = `${s}bottom${e}`;
  const l = `${s}left${e}`;
  const a = getStyles(t, [ c, r, i, l ]);
  return {
    t: parseToZeroOrNumber(a[c]),
    r: parseToZeroOrNumber(a[r]),
    b: parseToZeroOrNumber(a[i]),
    l: parseToZeroOrNumber(a[l])
  };
};

const getTrasformTranslateValue = (t, n) => `translate${isObject(t) ? `(${t.x},${t.y})` : `${n ? "X" : "Y"}(${t})`}`;

const elementHasDimensions = t => !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length);

const T = {
  w: 0,
  h: 0
};

const getElmWidthHeightProperty = (t, n) => n ? {
  w: n[`${t}Width`],
  h: n[`${t}Height`]
} : T;

const getWindowSize = t => getElmWidthHeightProperty("inner", t || n);

const I = bind(getElmWidthHeightProperty, "offset");

const A = bind(getElmWidthHeightProperty, "client");

const D = bind(getElmWidthHeightProperty, "scroll");

const getFractionalSize = t => {
  const n = parseFloat(getStyles(t, $)) || 0;
  const o = parseFloat(getStyles(t, C)) || 0;
  return {
    w: n - e(n),
    h: o - e(o)
  };
};

const getBoundingClientRect = t => t.getBoundingClientRect();

const hasDimensions = t => !!t && elementHasDimensions(t);

const domRectHasDimensions = t => !!(t && (t[C] || t[$]));

const domRectAppeared = (t, n) => {
  const o = domRectHasDimensions(t);
  const s = domRectHasDimensions(n);
  return !s && o;
};

const removeEventListener = (t, n, o, s) => {
  each(getDomTokensArray(n), (n => {
    if (t) {
      t.removeEventListener(n, o, s);
    }
  }));
};

const addEventListener = (t, n, o, s) => {
  var e;
  const c = (e = s && s.T) != null ? e : true;
  const r = s && s.I || false;
  const i = s && s.A || false;
  const l = {
    passive: c,
    capture: r
  };
  return bind(runEachAndClear, getDomTokensArray(n).map((n => {
    const s = i ? e => {
      removeEventListener(t, n, s, r);
      if (o) {
        o(e);
      }
    } : o;
    if (t) {
      t.addEventListener(n, s, l);
    }
    return bind(removeEventListener, t, n, s, r);
  })));
};

const stopPropagation = t => t.stopPropagation();

const preventDefault = t => t.preventDefault();

const stopAndPrevent = t => stopPropagation(t) || preventDefault(t);

const scrollElementTo = (t, n) => {
  const {x: o, y: s} = isNumber(n) ? {
    x: n,
    y: n
  } : n || {};
  isNumber(o) && (t.scrollLeft = o);
  isNumber(s) && (t.scrollTop = s);
};

const getElementScroll = t => ({
  x: t.scrollLeft,
  y: t.scrollTop
});

const getZeroScrollCoordinates = () => ({
  D: {
    x: 0,
    y: 0
  },
  M: {
    x: 0,
    y: 0
  }
});

const sanitizeScrollCoordinates = (t, n) => {
  const {D: o, M: s} = t;
  const {w: e, h: i} = n;
  const sanitizeAxis = (t, n, o) => {
    let s = r(t) * o;
    let e = r(n) * o;
    if (s === e) {
      const o = c(t);
      const r = c(n);
      e = o > r ? 0 : e;
      s = o < r ? 0 : s;
    }
    s = s === e ? 0 : s;
    return [ s + 0, e + 0 ];
  };
  const [l, a] = sanitizeAxis(o.x, s.x, e);
  const [u, f] = sanitizeAxis(o.y, s.y, i);
  return {
    D: {
      x: l,
      y: u
    },
    M: {
      x: a,
      y: f
    }
  };
};

const isDefaultDirectionScrollCoordinates = ({D: t, M: n}) => {
  const getAxis = (t, n) => t === 0 && t <= n;
  return {
    x: getAxis(t.x, n.x),
    y: getAxis(t.y, n.y)
  };
};

const getScrollCoordinatesPercent = ({D: t, M: n}, o) => {
  const getAxis = (t, n, o) => capNumber(0, 1, (t - o) / (t - n) || 0);
  return {
    x: getAxis(t.x, n.x, o.x),
    y: getAxis(t.y, n.y, o.y)
  };
};

const focusElement = t => {
  if (t && t.focus) {
    t.focus({
      preventScroll: true
    });
  }
};

const manageListener = (t, n) => {
  each(createOrKeepArray(n), t);
};

const createEventListenerHub = t => {
  const n = new Map;
  const removeEvent = (t, o) => {
    if (t) {
      const s = n.get(t);
      manageListener((t => {
        if (s) {
          s[t ? "delete" : "clear"](t);
        }
      }), o);
    } else {
      n.forEach((t => {
        t.clear();
      }));
      n.clear();
    }
  };
  const addEvent = (t, o) => {
    if (isString(t)) {
      const s = n.get(t) || new Set;
      n.set(t, s);
      manageListener((t => {
        if (isFunction(t)) {
          s.add(t);
        }
      }), o);
      return bind(removeEvent, t, o);
    }
    if (isBoolean(o) && o) {
      removeEvent();
    }
    const s = keys(t);
    const e = [];
    each(s, (n => {
      const o = t[n];
      if (o) {
        push(e, addEvent(n, o));
      }
    }));
    return bind(runEachAndClear, e);
  };
  const triggerEvent = (t, o) => {
    each(from(n.get(t)), (t => {
      if (o && !isEmptyArray(o)) {
        t.apply(0, o);
      } else {
        t();
      }
    }));
  };
  addEvent(t || {});
  return [ addEvent, removeEvent, triggerEvent ];
};

const M = {};

const k = {};

const addPlugins = t => {
  each(t, (t => each(t, ((n, o) => {
    M[o] = t[o];
  }))));
};

const registerPluginModuleInstances = (t, n, o) => keys(t).map((s => {
  const {static: e, instance: c} = t[s];
  const [r, i, l] = o || [];
  const a = o ? c : e;
  if (a) {
    const t = o ? a(r, i, n) : a(n);
    return (l || k)[s] = t;
  }
}));

const getStaticPluginModuleInstance = t => k[t];

const R = "__osOptionsValidationPlugin";

const V = `data-overlayscrollbars`;

const L = "os-environment";

const U = `${L}-scrollbar-hidden`;

const P = `${V}-initialize`;

const N = "noClipping";

const q = `${V}-body`;

const B = V;

const F = "host";

const j = `${V}-viewport`;

const X = m;

const Y = O;

const W = "arrange";

const J = "measuring";

const G = "scrolling";

const K = "scrollbarHidden";

const Q = "noContent";

const Z = `${V}-padding`;

const tt = `${V}-content`;

const nt = "os-size-observer";

const ot = `${nt}-appear`;

const st = `${nt}-listener`;

const et = `${st}-scroll`;

const ct = `${st}-item`;

const rt = `${ct}-final`;

const it = "os-trinsic-observer";

const lt = "os-theme-none";

const at = "os-scrollbar";

const ut = `${at}-rtl`;

const ft = `${at}-horizontal`;

const _t = `${at}-vertical`;

const dt = `${at}-track`;

const pt = `${at}-handle`;

const vt = `${at}-visible`;

const gt = `${at}-cornerless`;

const ht = `${at}-interaction`;

const bt = `${at}-unusable`;

const wt = `${at}-auto-hide`;

const yt = `${wt}-hidden`;

const St = `${at}-wheel`;

const mt = `${dt}-interactive`;

const Ot = `${pt}-interactive`;

const $t = "__osSizeObserverPlugin";

const Ct = /* @__PURE__ */ (() => ({
  [$t]: {
    static: () => (t, n, o) => {
      const s = 3333333;
      const e = "scroll";
      const c = createDOM(`<div class="${ct}" dir="ltr"><div class="${ct}"><div class="${rt}"></div></div><div class="${ct}"><div class="${rt}" style="width: 200%; height: 200%"></div></div></div>`);
      const r = c[0];
      const a = r.lastChild;
      const u = r.firstChild;
      const f = u == null ? void 0 : u.firstChild;
      let _ = I(r);
      let d = _;
      let p = false;
      let v;
      const reset = () => {
        scrollElementTo(u, s);
        scrollElementTo(a, s);
      };
      const onResized = t => {
        v = 0;
        if (p) {
          _ = d;
          n(t === true);
        }
      };
      const onScroll = t => {
        d = I(r);
        p = !t || !equalWH(d, _);
        if (t) {
          stopPropagation(t);
          if (p && !v) {
            i(v);
            v = l(onResized);
          }
        } else {
          onResized(t === false);
        }
        reset();
      };
      const g = [ appendChildren(t, c), addEventListener(u, e, onScroll), addEventListener(a, e, onScroll) ];
      addClass(t, et);
      setStyles(f, {
        [$]: s,
        [C]: s
      });
      l(reset);
      return [ o ? bind(onScroll, false) : reset, g ];
    }
  }
}))();

const getShowNativeOverlaidScrollbars = (t, n) => {
  const {k: o} = n;
  const [s, e] = t("showNativeOverlaidScrollbars");
  return [ s && o.x && o.y, e ];
};

const overflowIsVisible = t => t.indexOf(x) === 0;

const overflowBehaviorToOverflowStyle = t => t.replace(`${x}-`, "");

const overflowCssValueToOverflowStyle = (t, n) => {
  if (t === "auto") {
    return n ? E : H;
  }
  const o = t || H;
  return [ H, E, x ].includes(o) ? o : H;
};

const getElementOverflowStyle = (t, n) => {
  const {overflowX: o, overflowY: s} = getStyles(t, [ m, O ]);
  return {
    x: overflowCssValueToOverflowStyle(o, n.x),
    y: overflowCssValueToOverflowStyle(s, n.y)
  };
};

const xt = "__osScrollbarsHidingPlugin";

const Ht = /* @__PURE__ */ (() => ({
  [xt]: {
    static: () => ({
      R: (t, n, o, s, e) => {
        const {V: c, L: r} = t;
        const {U: i, k: l, P: a} = s;
        const u = !c && !i && (l.x || l.y);
        const [f] = getShowNativeOverlaidScrollbars(e, s);
        const _getViewportOverflowHideOffset = t => {
          const n = i || f ? 0 : 42;
          const getHideOffsetPerAxis = (t, o, s) => {
            const e = t ? n : s;
            const c = o && !i ? e : 0;
            const r = t && !!n;
            return [ c, r ];
          };
          const [o, s] = getHideOffsetPerAxis(l.x, t.x === E, a.x);
          const [e, c] = getHideOffsetPerAxis(l.y, t.y === E, a.y);
          return {
            N: {
              x: o,
              y: e
            },
            q: {
              x: s,
              y: c
            }
          };
        };
        const _hideNativeScrollbars = t => {
          if (!c) {
            const {B: s} = o;
            const e = assignDeep({}, {
              [y]: 0,
              [S]: 0,
              [w]: 0
            });
            const {N: c, q: r} = _getViewportOverflowHideOffset(t);
            const {x: i, y: l} = r;
            const {x: a, y: f} = c;
            const {F: _} = n;
            const d = s ? w : y;
            const p = s ? h : g;
            const v = _[d];
            const m = _[S];
            const O = _[p];
            const C = _[b];
            e[$] = `calc(100% + ${f + v * -1}px)`;
            e[d] = -f + v;
            e[S] = -a + m;
            if (u) {
              e[p] = O + (l ? f : 0);
              e[b] = C + (i ? a : 0);
            }
            return e;
          }
        };
        const _arrangeViewport = (t, s, e) => {
          if (u) {
            const {F: c} = n;
            const {N: i, q: l} = _getViewportOverflowHideOffset(t);
            const {x: a, y: u} = l;
            const {x: f, y: _} = i;
            const {B: d} = o;
            const p = d ? g : h;
            const v = c[p];
            const b = c.paddingTop;
            const w = s.w + e.w;
            const y = s.h + e.h;
            const S = {
              w: _ && u ? `${_ + w - v}px` : "",
              h: f && a ? `${f + y - b}px` : ""
            };
            setStyles(r, {
              "--os-vaw": S.w,
              "--os-vah": S.h
            });
          }
          return u;
        };
        const _undoViewportArrange = () => {
          if (u) {
            const {j: t, F: o} = n;
            const s = getElementOverflowStyle(r, t);
            const {q: e} = _getViewportOverflowHideOffset(s);
            const {x: c, y: i} = e;
            const l = {};
            const assignProps = t => each(t, (t => {
              l[t] = o[t];
            }));
            if (c) {
              assignProps([ S, v, b ]);
            }
            if (i) {
              assignProps([ w, y, h, g ]);
            }
            const a = getStyles(r, keys(l));
            const u = removeAttrClass(r, j, W);
            setStyles(r, l);
            return () => {
              setStyles(r, assignDeep({}, a, _hideNativeScrollbars(s)));
              u();
            };
          }
          return noop;
        };
        return {
          X: _arrangeViewport,
          Y: _undoViewportArrange,
          W: _hideNativeScrollbars
        };
      }
    })
  }
}))();

const Et = "__osClickScrollPlugin";

const zt = /* @__PURE__ */ (() => ({
  [Et]: {
    static: () => (t, n, o, s) => {
      let e = false;
      let c = noop;
      const r = 133;
      const i = 222;
      const [l, a] = selfClearTimeout(r);
      const u = Math.sign(n);
      const f = o * u;
      const _ = f / 2;
      const easing = t => 1 - (1 - t) * (1 - t);
      const easedEndPressAnimation = (n, o) => animateNumber(n, o, i, t, easing);
      const linearPressAnimation = (o, s) => animateNumber(o, n - f, r * s, ((o, s, e) => {
        t(o);
        if (e) {
          c = easedEndPressAnimation(o, n);
        }
      }));
      const d = animateNumber(0, f, i, ((r, i, a) => {
        t(r);
        if (a) {
          s(e);
          if (!e) {
            const t = n - r;
            const s = Math.sign(t - _) === u;
            if (s) {
              l((() => {
                const s = t - f;
                const e = Math.sign(s) === u;
                c = e ? linearPressAnimation(r, Math.abs(s) / o) : easedEndPressAnimation(r, n);
              }));
            }
          }
        }
      }), easing);
      return t => {
        e = true;
        if (t) {
          d();
        }
        a();
        c();
      };
    }
  }
}))();

const opsStringify = t => JSON.stringify(t, ((t, n) => {
  if (isFunction(n)) {
    throw 0;
  }
  return n;
}));

const getPropByPath = (t, n) => t ? `${n}`.split(".").reduce(((t, n) => t && hasOwnProperty(t, n) ? t[n] : void 0), t) : void 0;

const Tt = {
  paddingAbsolute: false,
  showNativeOverlaidScrollbars: false,
  update: {
    elementEvents: [ [ "img", "load" ] ],
    debounce: [ 0, 33 ],
    attributes: null,
    ignoreMutation: null
  },
  overflow: {
    x: "scroll",
    y: "scroll"
  },
  scrollbars: {
    theme: "os-theme-dark",
    visibility: "auto",
    autoHide: "never",
    autoHideDelay: 1300,
    autoHideSuspend: false,
    dragScroll: true,
    clickScroll: false,
    pointers: [ "mouse", "touch", "pen" ]
  }
};

const getOptionsDiff = (t, n) => {
  const o = {};
  const s = concat(keys(n), keys(t));
  each(s, (s => {
    const e = t[s];
    const c = n[s];
    if (isObject(e) && isObject(c)) {
      assignDeep(o[s] = {}, getOptionsDiff(e, c));
      if (isEmptyObject(o[s])) {
        delete o[s];
      }
    } else if (hasOwnProperty(n, s) && c !== e) {
      let t = true;
      if (isArray(e) || isArray(c)) {
        try {
          if (opsStringify(e) === opsStringify(c)) {
            t = false;
          }
        } catch (r) {}
      }
      if (t) {
        o[s] = c;
      }
    }
  }));
  return o;
};

const createOptionCheck = (t, n, o) => s => [ getPropByPath(t, s), o || getPropByPath(n, s) !== void 0 ];

let It;

const getNonce = () => It;

const setNonce = t => {
  It = t;
};

let At;

const createEnvironment = () => {
  const getNativeScrollbarSize = (t, n, o) => {
    appendChildren(document.body, t);
    appendChildren(document.body, t);
    const s = A(t);
    const e = I(t);
    const c = getFractionalSize(n);
    if (o) {
      removeElements(t);
    }
    return {
      x: e.h - s.h + c.h,
      y: e.w - s.w + c.w
    };
  };
  const getNativeScrollbarsHiding = t => {
    let n = false;
    const o = addClass(t, U);
    try {
      n = getStyles(t, "scrollbar-width") === "none" || getStyles(t, "display", "::-webkit-scrollbar") === "none";
    } catch (s) {}
    o();
    return n;
  };
  const t = `.${L}{scroll-behavior:auto!important;position:fixed;opacity:0;visibility:hidden;overflow:scroll;height:200px;width:200px;z-index:-1}.${L} div{width:200%;height:200%;margin:10px 0}.${U}{scrollbar-width:none!important}.${U}::-webkit-scrollbar,.${U}::-webkit-scrollbar-corner{appearance:none!important;display:none!important;width:0!important;height:0!important}`;
  const o = createDOM(`<div class="${L}"><div></div><style>${t}</style></div>`);
  const s = o[0];
  const e = s.firstChild;
  const c = s.lastChild;
  const r = getNonce();
  if (r) {
    c.nonce = r;
  }
  const [i, , l] = createEventListenerHub();
  const [a, u] = createCache({
    o: getNativeScrollbarSize(s, e),
    i: equalXY
  }, bind(getNativeScrollbarSize, s, e, true));
  const [f] = u();
  const _ = getNativeScrollbarsHiding(s);
  const d = {
    x: f.x === 0,
    y: f.y === 0
  };
  const v = {
    elements: {
      host: null,
      padding: !_,
      viewport: t => _ && isBodyElement(t) && t,
      content: false
    },
    scrollbars: {
      slot: true
    },
    cancel: {
      nativeScrollbarsOverlaid: false,
      body: null
    }
  };
  const g = assignDeep({}, Tt);
  const h = bind(assignDeep, {}, g);
  const b = bind(assignDeep, {}, v);
  const w = {
    P: f,
    k: d,
    U: _,
    J: !!p,
    G: bind(i, "r"),
    K: b,
    Z: t => assignDeep(v, t) && b(),
    tt: h,
    nt: t => assignDeep(g, t) && h(),
    ot: assignDeep({}, v),
    st: assignDeep({}, g)
  };
  removeAttrs(s, "style");
  removeElements(s);
  addEventListener(n, "resize", (() => {
    l("r", []);
  }));
  if (isFunction(n.matchMedia) && !_ && (!d.x || !d.y)) {
    const addZoomListener = t => {
      const o = n.matchMedia(`(resolution: ${n.devicePixelRatio}dppx)`);
      addEventListener(o, "change", (() => {
        t();
        addZoomListener(t);
      }), {
        A: true
      });
    };
    addZoomListener((() => {
      const [t, n] = a();
      assignDeep(w.P, t);
      l("r", [ n ]);
    }));
  }
  return w;
};

const getEnvironment = () => {
  if (!At) {
    At = createEnvironment();
  }
  return At;
};

const createEventContentChange = (t, n, o) => {
  let s = false;
  const e = o ? new WeakMap : false;
  const destroy = () => {
    s = true;
  };
  const updateElements = c => {
    if (e && o) {
      const r = o.map((n => {
        const [o, s] = n || [];
        const e = s && o ? (c || find)(o, t) : [];
        return [ e, s ];
      }));
      each(r, (o => each(o[0], (c => {
        const r = o[1];
        const i = e.get(c) || [];
        const l = t.contains(c);
        if (l && r) {
          const t = addEventListener(c, r, (o => {
            if (s) {
              t();
              e.delete(c);
            } else {
              n(o);
            }
          }));
          e.set(c, push(i, t));
        } else {
          runEachAndClear(i);
          e.delete(c);
        }
      }))));
    }
  };
  updateElements();
  return [ destroy, updateElements ];
};

const createDOMObserver = (t, n, o, s) => {
  let e = false;
  const {et: c, ct: r, rt: i, it: l, lt: a, ut: u} = s || {};
  const _ = debounce((() => e && o(true)), {
    p: 33,
    v: 99
  });
  const [d, p] = createEventContentChange(t, _, i);
  const v = c || [];
  const g = r || [];
  const h = concat(v, g);
  const observerCallback = (e, c) => {
    if (!isEmptyArray(c)) {
      const r = a || noop;
      const i = u || noop;
      const f = [];
      const _ = [];
      let d = false;
      let v = false;
      each(c, (o => {
        const {attributeName: e, target: c, type: a, oldValue: u, addedNodes: p, removedNodes: h} = o;
        const b = a === "attributes";
        const w = a === "childList";
        const y = t === c;
        const S = b && e;
        const m = S && getAttr(c, e || "");
        const O = isString(m) ? m : null;
        const $ = S && u !== O;
        const C = inArray(g, e) && $;
        if (n && (w || !y)) {
          const n = b && $;
          const a = n && l && is(c, l);
          const _ = a ? !r(c, e, u, O) : !b || n;
          const d = _ && !i(o, !!a, t, s);
          each(p, (t => push(f, t)));
          each(h, (t => push(f, t)));
          v = v || d;
        }
        if (!n && y && $ && !r(c, e, u, O)) {
          push(_, e);
          d = d || C;
        }
      }));
      p((t => deduplicateArray(f).reduce(((n, o) => {
        push(n, find(t, o));
        return is(o, t) ? push(n, o) : n;
      }), [])));
      if (n) {
        if (!e && v) {
          o(false);
        }
        return [ false ];
      }
      if (!isEmptyArray(_) || d) {
        const t = [ deduplicateArray(_), d ];
        if (!e) {
          o.apply(0, t);
        }
        return t;
      }
    }
  };
  const b = new f(bind(observerCallback, false));
  return [ () => {
    b.observe(t, {
      attributes: true,
      attributeOldValue: true,
      attributeFilter: h,
      subtree: n,
      childList: n,
      characterData: n
    });
    e = true;
    return () => {
      if (e) {
        d();
        b.disconnect();
        e = false;
      }
    };
  }, () => {
    if (e) {
      _.O();
      return observerCallback(true, b.takeRecords());
    }
  } ];
};

let Dt = null;

const createSizeObserver = (t, n, o) => {
  const {ft: s} = o || {};
  const e = getStaticPluginModuleInstance($t);
  const [c] = createCache({
    o: false,
    u: true
  });
  return () => {
    const o = [];
    const r = createDOM(`<div class="${nt}"><div class="${st}"></div></div>`);
    const i = r[0];
    const l = i.firstChild;
    const onSizeChangedCallbackProxy = t => {
      const o = isArray(t) && !isEmptyArray(t);
      let s = false;
      let e = false;
      if (o) {
        const n = t[0];
        const [o, , r] = c(n.contentRect);
        const i = domRectHasDimensions(o);
        e = domRectAppeared(o, r);
        s = !e && !i;
      } else {
        e = t === true;
      }
      if (!s) {
        n({
          _t: true,
          ft: e
        });
      }
    };
    if (d) {
      if (!isBoolean(Dt)) {
        const n = new d(noop);
        n.observe(t, {
          get box() {
            Dt = true;
          }
        });
        Dt = Dt || false;
        n.disconnect();
      }
      const n = debounce(onSizeChangedCallbackProxy, {
        p: 0,
        v: 0
      });
      const resizeObserverCallback = t => n(t);
      const s = new d(resizeObserverCallback);
      s.observe(Dt ? t : l);
      push(o, [ () => {
        s.disconnect();
      }, !Dt && appendChildren(t, i) ]);
      if (Dt) {
        const n = new d(resizeObserverCallback);
        n.observe(t, {
          box: "border-box"
        });
        push(o, (() => n.disconnect()));
      }
    } else if (e) {
      const [n, c] = e(l, onSizeChangedCallbackProxy, s);
      push(o, concat([ addClass(i, ot), addEventListener(i, "animationstart", n), appendChildren(t, i) ], c));
    } else {
      return noop;
    }
    return bind(runEachAndClear, o);
  };
};

const createTrinsicObserver = (t, n) => {
  let o;
  const isHeightIntrinsic = t => t.h === 0 || t.isIntersecting || t.intersectionRatio > 0;
  const s = createDiv(it);
  const [e] = createCache({
    o: false
  });
  const triggerOnTrinsicChangedCallback = (t, o) => {
    if (t) {
      const s = e(isHeightIntrinsic(t));
      const [, c] = s;
      return c && !o && n(s) && [ s ];
    }
  };
  const intersectionObserverCallback = (t, n) => triggerOnTrinsicChangedCallback(n.pop(), t);
  return [ () => {
    const n = [];
    if (_) {
      o = new _(bind(intersectionObserverCallback, false), {
        root: t
      });
      o.observe(s);
      push(n, (() => {
        o.disconnect();
      }));
    } else {
      const onSizeChanged = () => {
        const t = I(s);
        triggerOnTrinsicChangedCallback(t);
      };
      push(n, createSizeObserver(s, onSizeChanged)());
      onSizeChanged();
    }
    return bind(runEachAndClear, push(n, appendChildren(t, s)));
  }, () => o && intersectionObserverCallback(true, o.takeRecords()) ];
};

const createObserversSetup = (t, n, o, s) => {
  let e;
  let c;
  let r;
  let i;
  let l;
  let a;
  const u = `[${B}]`;
  const f = `[${j}]`;
  const _ = [ "id", "class", "style", "open", "wrap", "cols", "rows" ];
  const {dt: p, vt: v, L: g, gt: h, ht: b, V: w, bt: y, wt: S, yt: m, St: O} = t;
  const getDirectionIsRTL = t => getStyles(t, "direction") === "rtl";
  const $ = {
    Ot: false,
    B: getDirectionIsRTL(p)
  };
  const C = getEnvironment();
  const x = getStaticPluginModuleInstance(xt);
  const [H] = createCache({
    i: equalWH,
    o: {
      w: 0,
      h: 0
    }
  }, (() => {
    const s = x && x.R(t, n, $, C, o).Y;
    const e = y && w;
    const c = !e && hasAttrClass(v, B, N);
    const r = !w && S(W);
    const i = r && getElementScroll(h);
    const l = i && O();
    const a = m(J, c);
    const u = r && s && s();
    const f = D(g);
    const _ = getFractionalSize(g);
    if (u) {
      u();
    }
    scrollElementTo(h, i);
    if (l) {
      l();
    }
    if (c) {
      a();
    }
    return {
      w: f.w + _.w,
      h: f.h + _.h
    };
  }));
  const E = debounce(s, {
    p: () => e,
    v: () => c,
    m(t, n) {
      const [o] = t;
      const [s] = n;
      return [ concat(keys(o), keys(s)).reduce(((t, n) => {
        t[n] = o[n] || s[n];
        return t;
      }), {}) ];
    }
  });
  const setDirection = t => {
    const n = getDirectionIsRTL(p);
    assignDeep(t, {
      $t: a !== n
    });
    assignDeep($, {
      B: n
    });
    a = n;
  };
  const onTrinsicChanged = (t, n) => {
    const [o, e] = t;
    const c = {
      Ct: e
    };
    assignDeep($, {
      Ot: o
    });
    if (!n) {
      s(c);
    }
    return c;
  };
  const onSizeChanged = ({_t: t, ft: n}) => {
    const o = t && !n;
    const e = !o && C.U ? E : s;
    const c = {
      _t: t || n,
      ft: n
    };
    setDirection(c);
    e(c);
  };
  const onContentMutation = (t, n) => {
    const [, o] = H();
    const e = {
      xt: o
    };
    setDirection(e);
    const c = t ? s : E;
    if (o && !n) {
      c(e);
    }
    return e;
  };
  const onHostMutation = (t, n, o) => {
    const s = {
      Ht: n
    };
    setDirection(s);
    if (n && !o) {
      E(s);
    }
    return s;
  };
  const [z, T] = b ? createTrinsicObserver(v, onTrinsicChanged) : [];
  const I = !w && createSizeObserver(v, onSizeChanged, {
    ft: true
  });
  const [A, M] = createDOMObserver(v, false, onHostMutation, {
    ct: _,
    et: _
  });
  const k = w && d && new d((t => {
    const n = t[t.length - 1].contentRect;
    onSizeChanged({
      _t: true,
      ft: domRectAppeared(n, l)
    });
    l = n;
  }));
  const R = debounce((() => {
    const [, t] = H();
    s({
      xt: t
    });
  }), {
    p: 222,
    S: true
  });
  return [ () => {
    if (k) {
      k.observe(v);
    }
    const t = I && I();
    const n = z && z();
    const o = A();
    const s = C.G((t => {
      if (t) {
        E({
          Et: t
        });
      } else {
        R();
      }
    }));
    return () => {
      if (k) {
        k.disconnect();
      }
      if (t) {
        t();
      }
      if (n) {
        n();
      }
      if (i) {
        i();
      }
      o();
      s();
    };
  }, ({zt: t, Tt: n, It: o}) => {
    const s = {};
    const [l] = t("update.ignoreMutation");
    const [a, d] = t("update.attributes");
    const [p, v] = t("update.elementEvents");
    const [h, y] = t("update.debounce");
    const S = v || d;
    const m = n || o;
    const ignoreMutationFromOptions = t => isFunction(l) && l(t);
    if (S) {
      if (r) {
        r();
      }
      if (i) {
        i();
      }
      const [t, n] = createDOMObserver(b || g, true, onContentMutation, {
        et: concat(_, a || []),
        rt: p,
        it: u,
        ut: (t, n) => {
          const {target: o, attributeName: s} = t;
          const e = !n && s && !w ? liesBetween(o, u, f) : false;
          return e || !!closest(o, `.${at}`) || !!ignoreMutationFromOptions(t);
        }
      });
      i = t();
      r = n;
    }
    if (y) {
      E.O();
      if (isArray(h)) {
        const t = h[0];
        const n = h[1];
        e = isNumber(t) && t;
        c = isNumber(n) && n;
      } else if (isNumber(h)) {
        e = h;
        c = false;
      } else {
        e = false;
        c = false;
      }
    }
    if (m) {
      const t = M();
      const n = T && T();
      const o = r && r();
      if (t) {
        assignDeep(s, onHostMutation(t[0], t[1], m));
      }
      if (n) {
        assignDeep(s, onTrinsicChanged(n[0], m));
      }
      if (o) {
        assignDeep(s, onContentMutation(o[0], m));
      }
    }
    setDirection(s);
    return s;
  }, $ ];
};

const resolveInitialization = (t, n) => isFunction(n) ? n.apply(0, t) : n;

const staticInitializationElement = (t, n, o, s) => {
  const e = isUndefined(s) ? o : s;
  const c = resolveInitialization(t, e);
  return c || n.apply(0, t);
};

const dynamicInitializationElement = (t, n, o, s) => {
  const e = isUndefined(s) ? o : s;
  const c = resolveInitialization(t, e);
  return !!c && (isHTMLElement(c) ? c : n.apply(0, t));
};

const cancelInitialization = (t, n) => {
  const {nativeScrollbarsOverlaid: o, body: s} = n || {};
  const {k: e, U: c, K: r} = getEnvironment();
  const {nativeScrollbarsOverlaid: i, body: l} = r().cancel;
  const a = o != null ? o : i;
  const u = isUndefined(s) ? l : s;
  const f = (e.x || e.y) && a;
  const _ = t && (isNull(u) ? !c : u);
  return !!f || !!_;
};

const createScrollbarsSetupElements = (t, n, o, s) => {
  const e = "--os-viewport-percent";
  const c = "--os-scroll-percent";
  const r = "--os-scroll-direction";
  const {K: i} = getEnvironment();
  const {scrollbars: l} = i();
  const {slot: a} = l;
  const {dt: u, vt: f, L: _, At: d, gt: v, bt: g, V: h} = n;
  const {scrollbars: b} = d ? {} : t;
  const {slot: w} = b || {};
  const y = [];
  const S = [];
  const m = [];
  const O = dynamicInitializationElement([ u, f, _ ], (() => h && g ? u : f), a, w);
  const initScrollTimeline = t => {
    if (p) {
      let n = null;
      let s = [];
      const e = new p({
        source: v,
        axis: t
      });
      const cancelAnimation = () => {
        if (n) {
          n.cancel();
        }
        n = null;
      };
      const _setScrollPercentAnimation = c => {
        const {Dt: r} = o;
        const i = isDefaultDirectionScrollCoordinates(r)[t];
        const l = t === "x";
        const a = [ getTrasformTranslateValue(0, l), getTrasformTranslateValue(`calc(100cq${l ? "w" : "h"} + -100%)`, l) ];
        const u = i ? a : a.reverse();
        if (s[0] === u[0] && s[1] === u[1]) {
          return cancelAnimation;
        }
        cancelAnimation();
        s = u;
        n = c.Mt.animate({
          clear: [ "left" ],
          transform: u
        }, {
          timeline: e
        });
        return cancelAnimation;
      };
      return {
        kt: _setScrollPercentAnimation
      };
    }
  };
  const $ = {
    x: initScrollTimeline("x"),
    y: initScrollTimeline("y")
  };
  const getViewportPercent = () => {
    const {Rt: t, Vt: n} = o;
    const getAxisValue = (t, n) => capNumber(0, 1, t / (t + n) || 0);
    return {
      x: getAxisValue(n.x, t.x),
      y: getAxisValue(n.y, t.y)
    };
  };
  const scrollbarStructureAddRemoveClass = (t, n, o) => {
    const s = o ? addClass : removeClass;
    each(t, (t => {
      s(t.Lt, n);
    }));
  };
  const scrollbarStyle = (t, n) => {
    each(t, (t => {
      const [o, s] = n(t);
      setStyles(o, s);
    }));
  };
  const scrollbarsAddRemoveClass = (t, n, o) => {
    const s = isBoolean(o);
    const e = s ? o : true;
    const c = s ? !o : true;
    if (e) {
      scrollbarStructureAddRemoveClass(S, t, n);
    }
    if (c) {
      scrollbarStructureAddRemoveClass(m, t, n);
    }
  };
  const refreshScrollbarsHandleLength = () => {
    const t = getViewportPercent();
    const createScrollbarStyleFn = t => n => [ n.Lt, {
      [e]: roundCssNumber(t) + ""
    } ];
    scrollbarStyle(S, createScrollbarStyleFn(t.x));
    scrollbarStyle(m, createScrollbarStyleFn(t.y));
  };
  const refreshScrollbarsHandleOffset = () => {
    if (!p) {
      const {Dt: t} = o;
      const n = getScrollCoordinatesPercent(t, getElementScroll(v));
      const createScrollbarStyleFn = t => n => [ n.Lt, {
        [c]: roundCssNumber(t) + ""
      } ];
      scrollbarStyle(S, createScrollbarStyleFn(n.x));
      scrollbarStyle(m, createScrollbarStyleFn(n.y));
    }
  };
  const refreshScrollbarsScrollCoordinates = () => {
    const {Dt: t} = o;
    const n = isDefaultDirectionScrollCoordinates(t);
    const createScrollbarStyleFn = t => n => [ n.Lt, {
      [r]: t ? "0" : "1"
    } ];
    scrollbarStyle(S, createScrollbarStyleFn(n.x));
    scrollbarStyle(m, createScrollbarStyleFn(n.y));
    if (p) {
      S.forEach($.x.kt);
      m.forEach($.y.kt);
    }
  };
  const refreshScrollbarsScrollbarOffset = () => {
    if (h && !g) {
      const {Rt: t, Dt: n} = o;
      const s = isDefaultDirectionScrollCoordinates(n);
      const e = getScrollCoordinatesPercent(n, getElementScroll(v));
      const styleScrollbarPosition = n => {
        const {Lt: o} = n;
        const c = parent(o) === _ && o;
        const getTranslateValue = (t, n, o) => {
          const s = n * t;
          return numberToCssPx(o ? s : -s);
        };
        return [ c, c && {
          transform: getTrasformTranslateValue({
            x: getTranslateValue(e.x, t.x, s.x),
            y: getTranslateValue(e.y, t.y, s.y)
          })
        } ];
      };
      scrollbarStyle(S, styleScrollbarPosition);
      scrollbarStyle(m, styleScrollbarPosition);
    }
  };
  const generateScrollbarDOM = t => {
    const n = t ? "x" : "y";
    const o = t ? ft : _t;
    const e = createDiv(`${at} ${o}`);
    const c = createDiv(dt);
    const r = createDiv(pt);
    const i = {
      Lt: e,
      Ut: c,
      Mt: r
    };
    const l = $[n];
    push(t ? S : m, i);
    push(y, [ appendChildren(e, c), appendChildren(c, r), bind(removeElements, e), l && l.kt(i), s(i, scrollbarsAddRemoveClass, t) ]);
    return i;
  };
  const C = bind(generateScrollbarDOM, true);
  const x = bind(generateScrollbarDOM, false);
  const appendElements = () => {
    appendChildren(O, S[0].Lt);
    appendChildren(O, m[0].Lt);
    return bind(runEachAndClear, y);
  };
  C();
  x();
  return [ {
    Pt: refreshScrollbarsHandleLength,
    Nt: refreshScrollbarsHandleOffset,
    qt: refreshScrollbarsScrollCoordinates,
    Bt: refreshScrollbarsScrollbarOffset,
    Ft: scrollbarsAddRemoveClass,
    jt: {
      Xt: S,
      Yt: C,
      Wt: bind(scrollbarStyle, S)
    },
    Jt: {
      Xt: m,
      Yt: x,
      Wt: bind(scrollbarStyle, m)
    }
  }, appendElements ];
};

const createScrollbarsSetupEvents = (t, n, o, s) => (r, i, l) => {
  const {vt: u, L: f, V: _, gt: d, Gt: p, St: v} = n;
  const {Lt: g, Ut: h, Mt: b} = r;
  const [w, y] = selfClearTimeout(333);
  const [S, m] = selfClearTimeout(444);
  const scrollOffsetElementScrollBy = t => {
    if (isFunction(d.scrollBy)) {
      d.scrollBy({
        behavior: "smooth",
        left: t.x,
        top: t.y
      });
    }
  };
  const createInteractiveScrollEvents = () => {
    const n = "pointerup pointercancel lostpointercapture";
    const s = `client${l ? "X" : "Y"}`;
    const r = l ? $ : C;
    const i = l ? "left" : "top";
    const a = l ? "w" : "h";
    const u = l ? "x" : "y";
    const createRelativeHandleMove = (t, n) => s => {
      const {Rt: e} = o;
      const c = I(h)[a] - I(b)[a];
      const r = n * s / c;
      const i = r * e[u];
      scrollElementTo(d, {
        [u]: t + i
      });
    };
    const f = [];
    return addEventListener(h, "pointerdown", (o => {
      const l = closest(o.target, `.${pt}`) === b;
      const _ = l ? b : h;
      const g = t.scrollbars;
      const w = g[l ? "dragScroll" : "clickScroll"];
      const {button: y, isPrimary: O, pointerType: $} = o;
      const {pointers: C} = g;
      const x = y === 0 && O && w && (C || []).includes($);
      if (x) {
        runEachAndClear(f);
        m();
        const t = !l && (o.shiftKey || w === "instant");
        const g = bind(getBoundingClientRect, b);
        const y = bind(getBoundingClientRect, h);
        const getHandleOffset = (t, n) => (t || g())[i] - (n || y())[i];
        const O = e(getBoundingClientRect(d)[r]) / I(d)[a] || 1;
        const $ = createRelativeHandleMove(getElementScroll(d)[u], 1 / O);
        const C = o[s];
        const x = g();
        const H = y();
        const E = x[r];
        const z = getHandleOffset(x, H) + E / 2;
        const T = C - H[i];
        const A = l ? 0 : T - z;
        const releasePointerCapture = t => {
          runEachAndClear(k);
          _.releasePointerCapture(t.pointerId);
        };
        const D = l || t;
        const M = v();
        const k = [ addEventListener(p, n, releasePointerCapture), addEventListener(p, "selectstart", (t => preventDefault(t)), {
          T: false
        }), addEventListener(h, n, releasePointerCapture), D && addEventListener(h, "pointermove", (t => $(A + (t[s] - C)))), D && (() => {
          const t = getElementScroll(d);
          M();
          const n = getElementScroll(d);
          const o = {
            x: n.x - t.x,
            y: n.y - t.y
          };
          if (c(o.x) > 3 || c(o.y) > 3) {
            v();
            scrollElementTo(d, t);
            scrollOffsetElementScrollBy(o);
            S(M);
          }
        }) ];
        _.setPointerCapture(o.pointerId);
        if (t) {
          $(A);
        } else if (!l) {
          const t = getStaticPluginModuleInstance(Et);
          if (t) {
            const n = t($, A, E, (t => {
              if (t) {
                M();
              } else {
                push(k, M);
              }
            }));
            push(k, n);
            push(f, bind(n, true));
          }
        }
      }
    }));
  };
  let O = true;
  return bind(runEachAndClear, [ addEventListener(b, "pointermove pointerleave", s), addEventListener(g, "pointerenter", (() => {
    i(ht, true);
  })), addEventListener(g, "pointerleave pointercancel", (() => {
    i(ht, false);
  })), !_ && addEventListener(g, "mousedown", (() => {
    const t = getFocusedElement();
    if (hasAttr(t, j) || hasAttr(t, B) || t === document.body) {
      a(bind(focusElement, f), 25);
    }
  })), addEventListener(g, "wheel", (t => {
    const {deltaX: n, deltaY: o, deltaMode: s} = t;
    if (O && s === 0 && parent(g) === u) {
      scrollOffsetElementScrollBy({
        x: n,
        y: o
      });
    }
    O = false;
    i(St, true);
    w((() => {
      O = true;
      i(St);
    }));
    preventDefault(t);
  }), {
    T: false,
    I: true
  }), addEventListener(g, "pointerdown", (() => {
    const t = addEventListener(p, "click", (t => {
      n();
      stopAndPrevent(t);
    }), {
      A: true,
      I: true,
      T: false
    });
    const n = addEventListener(p, "pointerup pointercancel", (() => {
      n();
      setTimeout(t, 150);
    }), {
      I: true,
      T: true
    });
  }), {
    I: true,
    T: true
  }), createInteractiveScrollEvents(), y, m ]);
};

const createScrollbarsSetup = (t, n, o, s, e, c) => {
  let r;
  let i;
  let l;
  let a;
  let u;
  let f = noop;
  let _ = 0;
  const d = [ "mouse", "pen" ];
  const isHoverablePointerType = t => d.includes(t.pointerType);
  const [p, v] = selfClearTimeout();
  const [g, h] = selfClearTimeout(100);
  const [b, w] = selfClearTimeout(100);
  const [y, S] = selfClearTimeout((() => _));
  const [m, O] = createScrollbarsSetupElements(t, e, s, createScrollbarsSetupEvents(n, e, s, (t => isHoverablePointerType(t) && manageScrollbarsAutoHideInstantInteraction())));
  const {vt: $, Kt: C, bt: H} = e;
  const {Ft: z, Pt: T, Nt: I, qt: A, Bt: D} = m;
  const manageScrollbarsAutoHide = (t, n) => {
    S();
    if (t) {
      z(yt);
    } else {
      const t = bind(z, yt, true);
      if (_ > 0 && !n) {
        y(t);
      } else {
        t();
      }
    }
  };
  const manageScrollbarsAutoHideInstantInteraction = () => {
    if (l ? !r : !a) {
      manageScrollbarsAutoHide(true);
      g((() => {
        manageScrollbarsAutoHide(false);
      }));
    }
  };
  const manageAutoHideSuspension = t => {
    z(wt, t, true);
    z(wt, t, false);
  };
  const onHostMouseEnter = t => {
    if (isHoverablePointerType(t)) {
      r = l;
      if (l) {
        manageScrollbarsAutoHide(true);
      }
    }
  };
  const M = [ S, h, w, v, () => f(), addEventListener($, "pointerover", onHostMouseEnter, {
    A: true
  }), addEventListener($, "pointerenter", onHostMouseEnter), addEventListener($, "pointerleave", (t => {
    if (isHoverablePointerType(t)) {
      r = false;
      if (l) {
        manageScrollbarsAutoHide(false);
      }
    }
  })), addEventListener($, "pointermove", (t => {
    if (isHoverablePointerType(t) && i) {
      manageScrollbarsAutoHideInstantInteraction();
    }
  })), addEventListener(C, "scroll", (t => {
    p((() => {
      I();
      manageScrollbarsAutoHideInstantInteraction();
    }));
    c(t);
    D();
  })) ];
  return [ () => bind(runEachAndClear, push(M, O())), ({zt: t, It: n, Qt: e, Zt: c}) => {
    const {tn: r, nn: d, sn: p, en: v} = c || {};
    const {$t: g, ft: h} = e || {};
    const {B: w} = o;
    const {k: y} = getEnvironment();
    const {cn: S, j: m} = s;
    const [O, $] = t("showNativeOverlaidScrollbars");
    const [M, k] = t("scrollbars.theme");
    const [R, V] = t("scrollbars.visibility");
    const [L, U] = t("scrollbars.autoHide");
    const [P, N] = t("scrollbars.autoHideSuspend");
    const [q] = t("scrollbars.autoHideDelay");
    const [B, F] = t("scrollbars.dragScroll");
    const [j, X] = t("scrollbars.clickScroll");
    const [Y, W] = t("overflow");
    const J = h && !n;
    const G = m.x || m.y;
    const K = r || d || v || g || n;
    const Q = p || V || W;
    const Z = O && y.x && y.y;
    const setScrollbarVisibility = (t, n, o) => {
      const s = t.includes(E) && (R === x || R === "auto" && n === E);
      z(vt, s, o);
      return s;
    };
    _ = q;
    if (J) {
      if (P && G) {
        manageAutoHideSuspension(false);
        f();
        b((() => {
          f = addEventListener(C, "scroll", bind(manageAutoHideSuspension, true), {
            A: true
          });
        }));
      } else {
        manageAutoHideSuspension(true);
      }
    }
    if ($) {
      z(lt, Z);
    }
    if (k) {
      z(u);
      z(M, true);
      u = M;
    }
    if (N && !P) {
      manageAutoHideSuspension(true);
    }
    if (U) {
      i = L === "move";
      l = L === "leave";
      a = L === "never";
      manageScrollbarsAutoHide(a, true);
    }
    if (F) {
      z(Ot, B);
    }
    if (X) {
      z(mt, !!j);
    }
    if (Q) {
      const t = setScrollbarVisibility(Y.x, S.x, true);
      const n = setScrollbarVisibility(Y.y, S.y, false);
      const o = t && n;
      z(gt, !o);
    }
    if (K) {
      I();
      T();
      D();
      if (v) {
        A();
      }
      z(bt, !m.x, true);
      z(bt, !m.y, false);
      z(ut, w && !H);
    }
  }, {}, m ];
};

const createStructureSetupElements = t => {
  const o = getEnvironment();
  const {K: s, U: e} = o;
  const {elements: c} = s();
  const {padding: r, viewport: i, content: l} = c;
  const a = isHTMLElement(t);
  const u = a ? {} : t;
  const {elements: f} = u;
  const {padding: _, viewport: d, content: p} = f || {};
  const v = a ? t : u.target;
  const g = isBodyElement(v);
  const h = v.ownerDocument;
  const b = h.documentElement;
  const getDocumentWindow = () => h.defaultView || n;
  const w = bind(staticInitializationElement, [ v ]);
  const y = bind(dynamicInitializationElement, [ v ]);
  const S = bind(createDiv, "");
  const $ = bind(w, S, i);
  const C = bind(y, S, l);
  const elementHasOverflow = t => {
    const n = I(t);
    const o = D(t);
    const s = getStyles(t, m);
    const e = getStyles(t, O);
    return o.w - n.w > 0 && !overflowIsVisible(s) || o.h - n.h > 0 && !overflowIsVisible(e);
  };
  const x = $(d);
  const H = x === v;
  const E = H && g;
  const z = !H && C(p);
  const T = !H && x === z;
  const A = E ? b : x;
  const M = E ? A : v;
  const k = !H && y(S, r, _);
  const R = !T && z;
  const V = [ R, A, k, M ].map((t => isHTMLElement(t) && !parent(t) && t));
  const elementIsGenerated = t => t && inArray(V, t);
  const L = !elementIsGenerated(A) && elementHasOverflow(A) ? A : v;
  const U = E ? b : A;
  const N = E ? h : A;
  const X = {
    dt: v,
    vt: M,
    L: A,
    rn: k,
    ht: R,
    gt: U,
    Kt: N,
    ln: g ? b : L,
    Gt: h,
    bt: g,
    At: a,
    V: H,
    an: getDocumentWindow,
    wt: t => hasAttrClass(A, j, t),
    yt: (t, n) => addRemoveAttrClass(A, j, t, n),
    St: () => addRemoveAttrClass(U, j, G, true)
  };
  const {dt: Y, vt: W, rn: J, L: Q, ht: nt} = X;
  const ot = [ () => {
    removeAttrs(W, [ B, P ]);
    removeAttrs(Y, P);
    if (g) {
      removeAttrs(b, [ P, B ]);
    }
  } ];
  let st = contents([ nt, Q, J, W, Y ].find((t => t && !elementIsGenerated(t))));
  const et = E ? Y : nt || Q;
  const ct = bind(runEachAndClear, ot);
  const appendElements = () => {
    const t = getDocumentWindow();
    const n = getFocusedElement();
    const unwrap = t => {
      appendChildren(parent(t), contents(t));
      removeElements(t);
    };
    const prepareWrapUnwrapFocus = t => addEventListener(t, "focusin focusout focus blur", stopAndPrevent, {
      I: true,
      T: false
    });
    const o = "tabindex";
    const s = getAttr(Q, o);
    const c = prepareWrapUnwrapFocus(n);
    setAttrs(W, B, H ? "" : F);
    setAttrs(J, Z, "");
    setAttrs(Q, j, "");
    setAttrs(nt, tt, "");
    if (!H) {
      setAttrs(Q, o, s || "-1");
      if (g) {
        setAttrs(b, q, "");
      }
    }
    appendChildren(et, st);
    appendChildren(W, J);
    appendChildren(J || W, !H && Q);
    appendChildren(Q, nt);
    push(ot, [ c, () => {
      const t = getFocusedElement();
      const n = elementIsGenerated(Q);
      const e = n && t === Q ? Y : t;
      const c = prepareWrapUnwrapFocus(e);
      removeAttrs(J, Z);
      removeAttrs(nt, tt);
      removeAttrs(Q, j);
      if (g) {
        removeAttrs(b, q);
      }
      if (s) {
        setAttrs(Q, o, s);
      } else {
        removeAttrs(Q, o);
      }
      if (elementIsGenerated(nt)) {
        unwrap(nt);
      }
      if (n) {
        unwrap(Q);
      }
      if (elementIsGenerated(J)) {
        unwrap(J);
      }
      focusElement(e);
      c();
    } ]);
    if (e && !H) {
      addAttrClass(Q, j, K);
      push(ot, bind(removeAttrs, Q, j));
    }
    focusElement(!H && g && n === Y && t.top === t ? Q : n);
    c();
    st = 0;
    return ct;
  };
  return [ X, appendElements, ct ];
};

const createTrinsicUpdateSegment = ({ht: t}) => ({Qt: n, un: o, It: s}) => {
  const {Ct: e} = n || {};
  const {Ot: c} = o;
  const r = t && (e || s);
  if (r) {
    setStyles(t, {
      [C]: c && "100%"
    });
  }
};

const createPaddingUpdateSegment = ({vt: t, rn: n, L: o, V: s}, e) => {
  const [c, r] = createCache({
    i: equalTRBL,
    o: topRightBottomLeft()
  }, bind(topRightBottomLeft, t, "padding", ""));
  return ({zt: t, Qt: i, un: l, It: a}) => {
    let [u, f] = r(a);
    const {U: _} = getEnvironment();
    const {_t: d, xt: p, $t: m} = i || {};
    const {B: O} = l;
    const [C, x] = t("paddingAbsolute");
    const H = a || p;
    if (d || f || H) {
      [u, f] = c(a);
    }
    const E = !s && (x || m || f);
    if (E) {
      const t = !C || !n && !_;
      const s = u.r + u.l;
      const c = u.t + u.b;
      const r = {
        [y]: t && !O ? -s : 0,
        [S]: t ? -c : 0,
        [w]: t && O ? -s : 0,
        top: t ? -u.t : 0,
        right: t ? O ? -u.r : "auto" : 0,
        left: t ? O ? "auto" : -u.l : 0,
        [$]: t && `calc(100% + ${s}px)`
      };
      const i = {
        [v]: t ? u.t : 0,
        [g]: t ? u.r : 0,
        [b]: t ? u.b : 0,
        [h]: t ? u.l : 0
      };
      setStyles(n || o, r);
      setStyles(o, i);
      assignDeep(e, {
        rn: u,
        fn: !t,
        F: n ? i : assignDeep({}, r, i)
      });
    }
    return {
      _n: E
    };
  };
};

const createOverflowUpdateSegment = (t, s) => {
  const e = getEnvironment();
  const {vt: c, rn: r, L: i, V: a, Kt: u, gt: f, bt: _, yt: d, an: p} = t;
  const {U: v} = e;
  const g = _ && a;
  const h = bind(o, 0);
  const b = {
    display: () => false,
    direction: t => t !== "ltr",
    flexDirection: t => t.endsWith("-reverse"),
    writingMode: t => t !== "horizontal-tb"
  };
  const w = keys(b);
  const y = {
    i: equalWH,
    o: {
      w: 0,
      h: 0
    }
  };
  const S = {
    i: equalXY,
    o: {}
  };
  const setMeasuringMode = t => {
    d(J, !g && t);
  };
  const getMeasuredScrollCoordinates = t => {
    const n = w.some((n => {
      const o = t[n];
      return o && b[n](o);
    }));
    if (!n) {
      return {
        D: {
          x: 0,
          y: 0
        },
        M: {
          x: 1,
          y: 1
        }
      };
    }
    setMeasuringMode(true);
    const o = getElementScroll(f);
    const s = d(Q, true);
    const e = addEventListener(u, E, (t => {
      const n = getElementScroll(f);
      if (t.isTrusted && n.x === o.x && n.y === o.y) {
        stopPropagation(t);
      }
    }), {
      I: true,
      A: true
    });
    scrollElementTo(f, {
      x: 0,
      y: 0
    });
    s();
    const c = getElementScroll(f);
    const r = D(f);
    scrollElementTo(f, {
      x: r.w,
      y: r.h
    });
    const i = getElementScroll(f);
    scrollElementTo(f, {
      x: i.x - c.x < 1 && -r.w,
      y: i.y - c.y < 1 && -r.h
    });
    const a = getElementScroll(f);
    scrollElementTo(f, o);
    l((() => e()));
    return {
      D: c,
      M: a
    };
  };
  const getOverflowAmount = (t, o) => {
    const s = n.devicePixelRatio % 1 !== 0 ? 1 : 0;
    const e = {
      w: h(t.w - o.w),
      h: h(t.h - o.h)
    };
    return {
      w: e.w > s ? e.w : 0,
      h: e.h > s ? e.h : 0
    };
  };
  const getViewportOverflowStyle = (t, n) => {
    const getAxisOverflowStyle = (t, n, o, s) => {
      const e = t === x ? H : overflowBehaviorToOverflowStyle(t);
      const c = overflowIsVisible(t);
      const r = overflowIsVisible(o);
      if (!n && !s) {
        return H;
      }
      if (c && r) {
        return x;
      }
      if (c) {
        const t = n ? x : H;
        return n && s ? e : t;
      }
      const i = r && s ? x : H;
      return n ? e : i;
    };
    return {
      x: getAxisOverflowStyle(n.x, t.x, n.y, t.y),
      y: getAxisOverflowStyle(n.y, t.y, n.x, t.x)
    };
  };
  const setViewportOverflowStyle = t => {
    const createAllOverflowStyleClassNames = t => [ x, H, E ].map((n => createViewportOverflowStyleClassName(overflowCssValueToOverflowStyle(n), t)));
    const n = createAllOverflowStyleClassNames(true).concat(createAllOverflowStyleClassNames()).join(" ");
    d(n);
    d(keys(t).map((n => createViewportOverflowStyleClassName(t[n], n === "x"))).join(" "), true);
  };
  const [m, O] = createCache(y, bind(getFractionalSize, i));
  const [$, C] = createCache(y, bind(D, i));
  const [z, T] = createCache(y);
  const [I] = createCache(S);
  const [M, k] = createCache(y);
  const [R] = createCache(S);
  const [V] = createCache({
    i: (t, n) => equal(t, n, w),
    o: {}
  }, (() => hasDimensions(i) ? getStyles(i, w) : {}));
  const [L, U] = createCache({
    i: (t, n) => equalXY(t.D, n.D) && equalXY(t.M, n.M),
    o: getZeroScrollCoordinates()
  });
  const P = getStaticPluginModuleInstance(xt);
  const createViewportOverflowStyleClassName = (t, n) => {
    const o = n ? X : Y;
    return `${o}${capitalizeFirstLetter(t)}`;
  };
  return ({zt: n, Qt: o, un: l, It: a}, {_n: u}) => {
    const {_t: f, Ht: _, xt: b, $t: w, ft: y, Et: S} = o || {};
    const x = P && P.R(t, s, l, e, n);
    const {X: H, Y: E, W: D} = x || {};
    const [q, F] = getShowNativeOverlaidScrollbars(n, e);
    const [j, X] = n("overflow");
    const Y = overflowIsVisible(j.x);
    const W = overflowIsVisible(j.y);
    const J = f || u || b || w || S || F;
    let G = O(a);
    let Q = C(a);
    let tt = T(a);
    let nt = k(a);
    if (F && v) {
      d(K, !q);
    }
    if (J) {
      if (hasAttrClass(c, B, N)) {
        setMeasuringMode(true);
      }
      const t = E && E();
      const [n] = G = m(a);
      const [o] = Q = $(a);
      const s = A(i);
      const e = g && getWindowSize(p());
      const r = {
        w: h(o.w + n.w),
        h: h(o.h + n.h)
      };
      const l = {
        w: h((e ? e.w : s.w + h(s.w - o.w)) + n.w),
        h: h((e ? e.h : s.h + h(s.h - o.h)) + n.h)
      };
      if (t) {
        t();
      }
      nt = M(l);
      tt = z(getOverflowAmount(r, l), a);
    }
    const [ot, st] = nt;
    const [et, ct] = tt;
    const [rt, it] = Q;
    const [lt, at] = G;
    const [ut, ft] = I({
      x: et.w > 0,
      y: et.h > 0
    });
    const _t = Y && W && (ut.x || ut.y) || Y && ut.x && !ut.y || W && ut.y && !ut.x;
    const dt = u || w || S || at || it || st || ct || X || F || J || _ && g;
    const [pt, vt] = V(a);
    const gt = w || y || vt || ft || a;
    const [ht, bt] = gt ? L(getMeasuredScrollCoordinates(pt), a) : U();
    let wt = getViewportOverflowStyle(ut, j);
    setMeasuringMode(false);
    if (dt) {
      setViewportOverflowStyle(wt);
      wt = getElementOverflowStyle(i, ut);
      if (D && H) {
        H(wt, rt, lt);
        setStyles(i, D(wt));
      }
    }
    const [yt, St] = R(wt);
    addRemoveAttrClass(c, B, N, _t);
    addRemoveAttrClass(r, Z, N, _t);
    assignDeep(s, {
      cn: yt,
      Vt: {
        x: ot.w,
        y: ot.h
      },
      Rt: {
        x: et.w,
        y: et.h
      },
      j: ut,
      Dt: sanitizeScrollCoordinates(ht, et)
    });
    return {
      sn: St,
      tn: st,
      nn: ct,
      en: bt || ct,
      dn: gt
    };
  };
};

const createStructureSetup = t => {
  const [n, o, s] = createStructureSetupElements(t);
  const e = {
    rn: {
      t: 0,
      r: 0,
      b: 0,
      l: 0
    },
    fn: false,
    F: {
      [y]: 0,
      [S]: 0,
      [w]: 0,
      [v]: 0,
      [g]: 0,
      [b]: 0,
      [h]: 0
    },
    Vt: {
      x: 0,
      y: 0
    },
    Rt: {
      x: 0,
      y: 0
    },
    cn: {
      x: H,
      y: H
    },
    j: {
      x: false,
      y: false
    },
    Dt: getZeroScrollCoordinates()
  };
  const {dt: c, gt: r, V: i, St: l} = n;
  const {U: a, k: u} = getEnvironment();
  const f = !a && (u.x || u.y);
  const _ = [ createTrinsicUpdateSegment(n), createPaddingUpdateSegment(n, e), createOverflowUpdateSegment(n, e) ];
  return [ o, t => {
    const n = {};
    const o = f;
    const s = o && getElementScroll(r);
    const e = s && l();
    each(_, (o => {
      assignDeep(n, o(t, n) || {});
    }));
    scrollElementTo(r, s);
    if (e) {
      e();
    }
    if (!i) {
      scrollElementTo(c, 0);
    }
    return n;
  }, e, n, s ];
};

const createSetups = (t, n, o, s, e) => {
  let c = false;
  const r = createOptionCheck(n, {});
  const [i, l, a, u, f] = createStructureSetup(t);
  const [_, d, p] = createObserversSetup(u, a, r, (t => {
    update({}, t);
  }));
  const [v, g, , h] = createScrollbarsSetup(t, n, p, a, u, e);
  const updateHintsAreTruthy = t => keys(t).some((n => !!t[n]));
  const update = (t, e) => {
    if (o()) {
      return false;
    }
    const {pn: r, It: i, Tt: a, vn: u} = t;
    const f = r || {};
    const _ = !!i || !c;
    const v = {
      zt: createOptionCheck(n, f, _),
      pn: f,
      It: _
    };
    if (u) {
      g(v);
      return false;
    }
    const h = e || d(assignDeep({}, v, {
      Tt: a
    }));
    const b = l(assignDeep({}, v, {
      un: p,
      Qt: h
    }));
    g(assignDeep({}, v, {
      Qt: h,
      Zt: b
    }));
    const w = updateHintsAreTruthy(h);
    const y = updateHintsAreTruthy(b);
    const S = w || y || !isEmptyObject(f) || _;
    c = true;
    if (S) {
      s(t, {
        Qt: h,
        Zt: b
      });
    }
    return S;
  };
  return [ () => {
    const {ln: t, gt: n, St: o} = u;
    const s = getElementScroll(t);
    const e = [ _(), i(), v() ];
    const c = o();
    scrollElementTo(n, s);
    c();
    return bind(runEachAndClear, e);
  }, update, () => ({
    gn: p,
    hn: a
  }), {
    bn: u,
    wn: h
  }, f ];
};

const Mt = new WeakMap;

const addInstance = (t, n) => {
  Mt.set(t, n);
};

const removeInstance = t => {
  Mt.delete(t);
};

const getInstance = t => Mt.get(t);

const OverlayScrollbars = (t, n, o) => {
  const {tt: s} = getEnvironment();
  const e = isHTMLElement(t);
  const c = e ? t : t.target;
  const r = getInstance(c);
  if (n && !r) {
    let r = false;
    const i = [];
    const l = {};
    const validateOptions = t => {
      const n = removeUndefinedProperties(t);
      const o = getStaticPluginModuleInstance(R);
      return o ? o(n, true) : n;
    };
    const a = assignDeep({}, s(), validateOptions(n));
    const [u, f, _] = createEventListenerHub();
    const [d, p, v] = createEventListenerHub(o);
    const triggerEvent = (t, n) => {
      v(t, n);
      _(t, n);
    };
    const [g, h, b, w, y] = createSetups(t, a, (() => r), (({pn: t, It: n}, {Qt: o, Zt: s}) => {
      const {_t: e, $t: c, Ct: r, xt: i, Ht: l, ft: a} = o;
      const {tn: u, nn: f, sn: _, en: d} = s;
      triggerEvent("updated", [ S, {
        updateHints: {
          sizeChanged: !!e,
          directionChanged: !!c,
          heightIntrinsicChanged: !!r,
          overflowEdgeChanged: !!u,
          overflowAmountChanged: !!f,
          overflowStyleChanged: !!_,
          scrollCoordinatesChanged: !!d,
          contentMutation: !!i,
          hostMutation: !!l,
          appear: !!a
        },
        changedOptions: t || {},
        force: !!n
      } ]);
    }), (t => triggerEvent("scroll", [ S, t ])));
    const destroy = t => {
      removeInstance(c);
      runEachAndClear(i);
      r = true;
      triggerEvent("destroyed", [ S, t ]);
      f();
      p();
    };
    const S = {
      options(t, n) {
        if (t) {
          const o = n ? s() : {};
          const e = getOptionsDiff(a, assignDeep(o, validateOptions(t)));
          if (!isEmptyObject(e)) {
            assignDeep(a, e);
            h({
              pn: e
            });
          }
        }
        return assignDeep({}, a);
      },
      on: d,
      off: (t, n) => {
        if (t && n) {
          p(t, n);
        }
      },
      state() {
        const {gn: t, hn: n} = b();
        const {B: o} = t;
        const {Vt: s, Rt: e, cn: c, j: i, rn: l, fn: a, Dt: u} = n;
        return assignDeep({}, {
          overflowEdge: s,
          overflowAmount: e,
          overflowStyle: c,
          hasOverflow: i,
          scrollCoordinates: {
            start: u.D,
            end: u.M
          },
          padding: l,
          paddingAbsolute: a,
          directionRTL: o,
          destroyed: r
        });
      },
      elements() {
        const {dt: t, vt: n, rn: o, L: s, ht: e, gt: c, Kt: r} = w.bn;
        const {jt: i, Jt: l} = w.wn;
        const translateScrollbarStructure = t => {
          const {Mt: n, Ut: o, Lt: s} = t;
          return {
            scrollbar: s,
            track: o,
            handle: n
          };
        };
        const translateScrollbarsSetupElement = t => {
          const {Xt: n, Yt: o} = t;
          const s = translateScrollbarStructure(n[0]);
          return assignDeep({}, s, {
            clone: () => {
              const t = translateScrollbarStructure(o());
              h({
                vn: true
              });
              return t;
            }
          });
        };
        return assignDeep({}, {
          target: t,
          host: n,
          padding: o || s,
          viewport: s,
          content: e || s,
          scrollOffsetElement: c,
          scrollEventElement: r,
          scrollbarHorizontal: translateScrollbarsSetupElement(i),
          scrollbarVertical: translateScrollbarsSetupElement(l)
        });
      },
      update: t => h({
        It: t,
        Tt: true
      }),
      destroy: bind(destroy, false),
      plugin: t => l[keys(t)[0]]
    };
    push(i, [ y ]);
    addInstance(c, S);
    registerPluginModuleInstances(M, OverlayScrollbars, [ S, u, l ]);
    if (cancelInitialization(w.bn.bt, !e && t.cancel)) {
      destroy(true);
      return S;
    }
    push(i, g());
    triggerEvent("initialized", [ S ]);
    S.update();
    return S;
  }
  return r;
};

OverlayScrollbars.plugin = t => {
  const n = isArray(t);
  const o = n ? t : [ t ];
  const s = o.map((t => registerPluginModuleInstances(t, OverlayScrollbars)[0]));
  addPlugins(o);
  return n ? s : s[0];
};

OverlayScrollbars.valid = t => {
  const n = t && t.elements;
  const o = isFunction(n) && n();
  return isPlainObject(o) && !!getInstance(o.target);
};

OverlayScrollbars.env = () => {
  const {P: t, k: n, U: o, J: s, ot: e, st: c, K: r, Z: i, tt: l, nt: a} = getEnvironment();
  return assignDeep({}, {
    scrollbarsSize: t,
    scrollbarsOverlaid: n,
    scrollbarsHiding: o,
    scrollTimeline: s,
    staticDefaultInitialization: e,
    staticDefaultOptions: c,
    getDefaultInitialization: r,
    setDefaultInitialization: i,
    getDefaultOptions: l,
    setDefaultOptions: a
  });
};

OverlayScrollbars.nonce = setNonce;

OverlayScrollbars.trustedTypePolicy = setTrustedTypePolicy;


//# sourceMappingURL=overlayscrollbars.mjs.map


/***/ }),

/***/ "./node_modules/overlayscrollbars/styles/overlayscrollbars.css":
/*!*********************************************************************!*\
  !*** ./node_modules/overlayscrollbars/styles/overlayscrollbars.css ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_overlayscrollbars_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!../../postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./overlayscrollbars.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/overlayscrollbars/styles/overlayscrollbars.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_overlayscrollbars_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_overlayscrollbars_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_vhMobileFix_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/vhMobileFix.js */ "./src/modules/vhMobileFix.js");
/* harmony import */ var _modules_scrollersAndSort_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scrollersAndSort.js */ "./src/modules/scrollersAndSort.js");
/* harmony import */ var _modules_kioskScheduleHoverImg_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/kioskScheduleHoverImg.js */ "./src/modules/kioskScheduleHoverImg.js");
/* harmony import */ var _modules_bgAnimPendulum_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/bgAnimPendulum.js */ "./src/modules/bgAnimPendulum.js");
/* harmony import */ var _modules_overlayScrollbars_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/overlayScrollbars.js */ "./src/modules/overlayScrollbars.js");
var body;
var is_touch_device;
var html_top_margin;





body = jQuery('body');
is_touch_device = body.hasClass('is_touch_device');
html_top_margin = parseInt(jQuery('html').css('margin-top'));
(0,_modules_vhMobileFix_js__WEBPACK_IMPORTED_MODULE_0__.vh_mobile_fix)();
(0,_modules_kioskScheduleHoverImg_js__WEBPACK_IMPORTED_MODULE_2__.kiosk_schedule_hover_img)();
(0,_modules_scrollersAndSort_js__WEBPACK_IMPORTED_MODULE_1__.kiosk_gallery_slick)();
// kiosk_program_mcsutomscrollbar();
(0,_modules_scrollersAndSort_js__WEBPACK_IMPORTED_MODULE_1__.kiosk_program_slick)();
//kiosk_new_articles_mcsutomscrollbar();
(0,_modules_scrollersAndSort_js__WEBPACK_IMPORTED_MODULE_1__.kiosk_archive_sort)();
(0,_modules_bgAnimPendulum_js__WEBPACK_IMPORTED_MODULE_3__.bg_animation)();
var custom_scroll_elements = document.querySelectorAll('.custom-scrollbar-wrapper');
custom_scroll_elements.forEach(function (element) {
  (0,_modules_overlayScrollbars_js__WEBPACK_IMPORTED_MODULE_4__.initializeCustomScrollbars)(element);
});

// main menu
//==================================================================

var toggleBtn = document.getElementById('main_menu_switch');
var offcanvas = document.getElementById('main_menu_wrap');
toggleBtn.addEventListener('click', function () {
  var isOpen = offcanvas.getAttribute('aria-hidden') === 'true';
  offcanvas.setAttribute('aria-hidden', String(!isOpen));
  toggleBtn.setAttribute('aria-expanded', String(isOpen));
  offcanvas.focus();
});
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && offcanvas.getAttribute('aria-hidden') === 'false') {
    offcanvas.setAttribute('aria-hidden', 'true');
    toggleBtn.setAttribute('aria-expanded', 'false');
  }
});

/***/ }),

/***/ "./src/modules/bgAnimPendulum.js":
/*!***************************************!*\
  !*** ./src/modules/bgAnimPendulum.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bg_animation: () => (/* binding */ bg_animation),
/* harmony export */   getSinusoid: () => (/* binding */ getSinusoid)
/* harmony export */ });
function bg_animation() {
  if (!document.body.classList.contains('page_homepage')) {
    return;
  }
  var SPEED_SLIDER = document.querySelector('input.metronome-speed-slider');
  var TICK_AUDIO = document.querySelector('audio.metronome_tick');
  var current_tick_num = 0;
  var PENDULUM = document.getElementById('metronome_pendulum_image');
  var SOUND_BUTTON = document.getElementById('metronome_sound_on');
  var PENDULUM_BLUR = document.querySelector('#metronome_pendulum_blur feGaussianBlur');
  var METRONOME_SPEED_NUMBER = document.getElementById('metronome-speed-no');
  var bpm = 40;
  if (SPEED_SLIDER) {
    bpm = Number(SPEED_SLIDER.value);
    METRONOME_SPEED_NUMBER.innerHTML = SPEED_SLIDER.value;
  }
  var freq = bpm / 60;
  setBlur(freq);
  var soundOn = false;
  var audioTickTimeout = null;
  var now = null;
  var TICK_URL = TICK_AUDIO.src;
  var context = null;
  var tickBuffer = void 0;
  SOUND_BUTTON.addEventListener('click', function () {
    if (context === null) {
      AudioContext = window.AudioContext || window.webkitAudioContext; // Make it crossbrowser
      context = new AudioContext({
        sampleRate: 48000,
        // Set latencyHint to 'interactive' for better timing precision
        latencyHint: 'interactive'
      });
      window.fetch(TICK_URL).then(function (response) {
        return response.arrayBuffer();
      }).then(function (arrayBuffer) {
        return context.decodeAudioData(arrayBuffer, function (audioBuffer) {
          tickBuffer = audioBuffer;
        }, function (error) {
          return console.error(error);
        });
      });
    }
    soundOn = !soundOn;
    SOUND_BUTTON.setAttribute("aria-pressed", soundOn ? "true" : "false");
  });
  SPEED_SLIDER.addEventListener('change', function () {
    changeSpeed(false);
  });
  SPEED_SLIDER.addEventListener('input', function () {
    changeSpeed();
  });
  /**
   * 
   * @param {boolean} only_number //if only display the value, but not change. 
   */
  function changeSpeed() {
    var only_number = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    if (!only_number) {
      bpm = Number(SPEED_SLIDER.value);
      freq = bpm / 120; //every second note, since we have 2 two ticks per sinusoid
      setBlur(freq);
    }
    METRONOME_SPEED_NUMBER.innerHTML = SPEED_SLIDER.value;
  }
  function setBlur(freq) {
    var newBlurValue = (freq - .6) * 6; //arbitrary values, how it seemed visually ok
    if (newBlurValue > 0) {
      PENDULUM_BLUR.setAttribute('stdDeviation', "".concat(newBlurValue, " 0"));
      return;
    }
    PENDULUM_BLUR.setAttribute('stdDeviation', '0 0');
  }
  var prevRotation = null;
  var currentRotation = null;
  // Animation (visual)
  function animate() {
    var now = performance.now() * 0.001;
    currentRotation = getSinusoid(now, freq);
    if (soundOn) {
      if (prevRotation !== null && Math.sign(prevRotation) !== Math.sign(currentRotation)) {
        playTick(tickBuffer);
      }
    }
    prevRotation = currentRotation;
    PENDULUM.setAttribute('transform', "rotate(".concat(currentRotation * 30, ", 1650, 1312)"));
    requestAnimationFrame(animate);
  }
  animate();
  function playTick(audioBuffer) {
    var source = context.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(context.destination);
    source.start();
  }
  ;
}

/**
 * Returns a sinusoidal value between -1 and 1.
 * @param {number} time - The current time in seconds.
 * @param {number} freq - The frequency in Hz (beats per second).
 * @returns {number} Sinusoidal value between -1 and 1.
 */
function getSinusoid(time) {
  var freq = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return Math.sin(freq * time * 2 * Math.PI);
}

/***/ }),

/***/ "./src/modules/kioskScheduleHoverImg.js":
/*!**********************************************!*\
  !*** ./src/modules/kioskScheduleHoverImg.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   kiosk_schedule_hover_img: () => (/* binding */ kiosk_schedule_hover_img)
/* harmony export */ });
// schedule hover img
//==================================================================
function kiosk_schedule_hover_img() {
  var is_touch_device = window.is_touch_device;
  var mod = jQuery('.schedules_wrap');
  var list;
  var url;
  var square;
  if (!mod.length || is_touch_device) {
    return;
  }
  list = mod.find('.schedules_list');
  square = mod.find('.square');

  // hide square on mouseleave
  mod.find('ol').on('mouseleave', function () {
    if (square.hasClass('show')) {
      square.removeClass('show');
    }
  });

  // show square on hover
  mod.find('li').on('mouseenter', function () {
    url = jQuery(this).attr('data-img');
    if (url !== '') {
      if (!square.hasClass('show')) {
        square.addClass('show');
      }
      square.css({
        'background-image': 'url(' + url + ')'
      });
    } else {
      if (square.hasClass('show')) {
        square.removeClass('show');
      }
      square.css({
        'background-image': 'none'
      });
    }
  });

  // cursor move
  var delta;
  delta = parseInt(jQuery('html').css('margin-top'));
  mod.on('mousemove', function (e) {
    square.css({
      left: e.pageX - list.offset().left,
      top: e.pageY - delta - list.offset().top
    });
  });
  jQuery('html').trigger('mousemove');
}

/***/ }),

/***/ "./src/modules/overlayScrollbars.js":
/*!******************************************!*\
  !*** ./src/modules/overlayScrollbars.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initializeCustomScrollbars: () => (/* binding */ initializeCustomScrollbars)
/* harmony export */ });
/* harmony import */ var overlayscrollbars_overlayscrollbars_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! overlayscrollbars/overlayscrollbars.css */ "./node_modules/overlayscrollbars/styles/overlayscrollbars.css");
/* harmony import */ var overlayscrollbars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! overlayscrollbars */ "./node_modules/overlayscrollbars/overlayscrollbars.mjs");


function initializeCustomScrollbars(scrollingElement) {
  overlayscrollbars__WEBPACK_IMPORTED_MODULE_1__.OverlayScrollbars.plugin(overlayscrollbars__WEBPACK_IMPORTED_MODULE_1__.ClickScrollPlugin);
  var osInstance = (0,overlayscrollbars__WEBPACK_IMPORTED_MODULE_1__.OverlayScrollbars)({
    target: scrollingElement,
    elements: {
      viewport: scrollingElement,
      scrollbars: {
        slot: scrollingElement
      }
    }
  }, {
    scrollbars: {
      dragScroll: true,
      clickScroll: true
    },
    overflow: {
      x: 'scroll',
      y: 'visible'
    }
  });
  enableDragToScroll(scrollingElement);
}
function enableDragToScroll(element) {
  var isDown = false;
  var startX;
  var scrollLeft;
  var isDragging = false;
  element.addEventListener('dragstart', function (e) {
    e.preventDefault();
  });
  element.addEventListener('mousedown', function (e) {
    //prevent drag scrolling to override custom scrollbar
    if (e.target.classList.contains('os-scrollbar-handle') || e.target.classList.contains('os-scrollbar-track')) {
      return;
    }
    isDown = true;
    isDragging = false;
    startX = e.pageX - element.offsetLeft;
    scrollLeft = element.scrollLeft;
  });
  element.addEventListener('mouseleave', function () {
    isDown = false;
    element.classList.remove('dragging');
  });
  element.addEventListener('mouseup', function (e) {
    isDown = false;
    setTimeout(function () {
      isDragging = false;
    }, 0); // reset after click
    element.classList.remove('dragging');
  });
  element.addEventListener('mousemove', function (e) {
    if (!isDown) return;
    var x = e.pageX - element.offsetLeft;
    var walk = (x - startX) * 3;
    if (Math.abs(walk) > 5) {
      // threshold to consider as drag
      isDragging = true;
      element.classList.add('dragging');
      e.preventDefault();
      element.scrollLeft = scrollLeft - walk;
    }
  });

  // Prevent link clicks if dragging
  element.addEventListener('click', function (e) {
    if (isDragging) {
      e.preventDefault();
      e.stopPropagation();
    }
  }, true);
}

/***/ }),

/***/ "./src/modules/scrollersAndSort.js":
/*!*****************************************!*\
  !*** ./src/modules/scrollersAndSort.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   kiosk_archive_sort: () => (/* binding */ kiosk_archive_sort),
/* harmony export */   kiosk_gallery_slick: () => (/* binding */ kiosk_gallery_slick),
/* harmony export */   kiosk_new_articles_mcsutomscrollbar: () => (/* binding */ kiosk_new_articles_mcsutomscrollbar),
/* harmony export */   kiosk_program_mcsutomscrollbar: () => (/* binding */ kiosk_program_mcsutomscrollbar),
/* harmony export */   kiosk_program_slick: () => (/* binding */ kiosk_program_slick)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// archive sort
//==================================================================
function kiosk_archive_sort() {
  var form = jQuery('.archive_sort_form');
  if (!form.length) {
    return;
  }
  form.find('.value').on('click', function () {
    form.trigger('submit');
  });
}

// kiosk_program_slick
//==================================================================
function kiosk_program_slick() {
  var mod = jQuery('.schedules_wrap');
  if (!mod.length) {
    return;
  }
  mod.find('.schedules_list').slick(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
    slide: '.schedule_wrap',
    infinite: false,
    variableWidth: false,
    autoplay: false,
    autoplaySpeed: 3000,
    swipe: true,
    speed: 500
  }, "variableWidth", true), "appendArrows", mod.find('.main_title span')), "prevArrow", '<span class="arrow-prev"></span>'), "nextArrow", '<span class="arrow-next"></span>'));
}

// kiosk_program_mcsutomscrollbar
//==================================================================
function kiosk_program_mcsutomscrollbar() {
  var list = jQuery('.schedules_list');
  list.mCustomScrollbar({
    theme: "rounded-dark",
    axis: 'x',
    mouseWheel: false,
    scrollbarPosition: 'outside',
    contentTouchScroll: false,
    documentTouchScroll: false,
    advanced: {
      updateOnContentResize: true
    }
  });
  var oldX = null;
  var newX = null;
  var oldY = null;
  var newY = null;
  var contentX;
  list.on('touchstart', function (e) {
    oldX = null;
    newX = null;
    oldY = null;
    newY = null;
    contentX = list.find('.mCSB_container').offset().left * -1;
  });
  list.on('touchmove', function (e) {
    if (newX === null) {
      newX = e.originalEvent.touches[0].pageX;
      newY = e.originalEvent.touches[0].pageY;
    } else {
      oldX = newX;
      newX = e.originalEvent.touches[0].pageX;
      oldY = newY;
      newY = e.originalEvent.touches[0].pageY;
      if (Math.abs(oldY - newY) > 4) {
        return;
      }
      contentX += (oldX - newX) * 1.5;
      contentX = contentX < 0 ? 0 : contentX;
      list.mCustomScrollbar('scrollTo', contentX, {
        scrollInertia: 0
      });
    }
  });
}

// kiosk_new_articles_mcsutomscrollbar
//==================================================================
function kiosk_new_articles_mcsutomscrollbar() {
  var lists = jQuery('.articles_list');
  console.log(lists);
  lists.each(function () {
    var list = jQuery(this);
    list.mCustomScrollbar({
      theme: "dark-rounded",
      axis: 'x',
      mouseWheel: false,
      scrollbarPosition: 'outside',
      contentTouchScroll: false,
      documentTouchScroll: false,
      advanced: {
        updateOnContentResize: true
      }
    });
    var oldX = null;
    var newX = null;
    var oldY = null;
    var newY = null;
    var contentX;
    list.on('touchstart', function (e) {
      oldX = null;
      newX = null;
      oldY = null;
      newY = null;
      contentX = list.find('.mCSB_container').offset().left * -1;
    });
    list.on('touchmove', function (e) {
      if (newX === null) {
        newX = e.originalEvent.touches[0].pageX;
        newY = e.originalEvent.touches[0].pageY;
      } else {
        oldX = newX;
        newX = e.originalEvent.touches[0].pageX;
        oldY = newY;
        newY = e.originalEvent.touches[0].pageY;
        if (Math.abs(oldY - newY) > 4) {
          return;
        }
        contentX += (oldX - newX) * 1.5;
        contentX = contentX < 0 ? 0 : contentX;
        list.mCustomScrollbar('scrollTo', contentX, {
          scrollInertia: 0
        });
      }
    });
  });
}

// post gallery slick
//==================================================================
function kiosk_gallery_slick() {
  var mod = jQuery('.gallery_wrap, .archive_detail_gallery');
  if (!mod.length) {
    return;
  }
  mod.find('.items').slick({
    slide: '.img_wrap',
    infinite: true,
    variableWidth: false,
    autoplay: false,
    autoplaySpeed: 3000,
    slidesToShow: 2,
    slidesToScroll: 2,
    swipe: false,
    speed: 500,
    appendArrows: mod.find('.arrs_wrap'),
    prevArrow: '<span class="arrow-prev"></span>',
    nextArrow: '<span class="arrow-next"></span>',
    responsive: [{
      breakpoint: 801,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
}

/***/ }),

/***/ "./src/modules/vhMobileFix.js":
/*!************************************!*\
  !*** ./src/modules/vhMobileFix.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   vh_mobile_fix: () => (/* binding */ vh_mobile_fix)
/* harmony export */ });
function vh_mobile_fix() {
  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
  window.addEventListener('resize', function () {
    if (!window.is_touch_device) {
      var _vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', "".concat(_vh, "px"));
    }
  });
}

/***/ }),

/***/ "./style.less":
/*!********************!*\
  !*** ./style.less ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/main": 0,
/******/ 			"style.min": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkkiosk_sk"] = self["webpackChunkkiosk_sk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["style.min"], () => (__webpack_require__("./src/main.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["style.min"], () => (__webpack_require__("./style.less")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;