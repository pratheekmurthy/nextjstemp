/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./redux/store.js":
/*!************************!*\
  !*** ./redux/store.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-thunk */ \"./node_modules/redux-thunk/es/index.js\");\n/* harmony import */ var _reducers_logReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers/logReducer */ \"./redux/reducers/logReducer.js\");\n/* harmony import */ var _reducers_countriesActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers/countriesActions */ \"./redux/reducers/countriesActions.js\");\n/* harmony import */ var _reducers_countriesActions__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reducers_countriesActions__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar root = {\n  log: _reducers_logReducer__WEBPACK_IMPORTED_MODULE_1__.logReducer,\n  countries: _reducers_countriesActions__WEBPACK_IMPORTED_MODULE_2__.countriesReducer\n};\n\nvar configureStore = function configureStore() {\n  var store = (0,redux__WEBPACK_IMPORTED_MODULE_3__.createStore)((0,redux__WEBPACK_IMPORTED_MODULE_3__.combineReducers)(root), (0,redux__WEBPACK_IMPORTED_MODULE_3__.applyMiddleware)(redux_thunk__WEBPACK_IMPORTED_MODULE_0__.default));\n  return store;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (configureStore);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvc3RvcmUuanM/NjUyNCJdLCJuYW1lcyI6WyJyb290IiwibG9nIiwibG9nUmVkdWNlciIsImNvdW50cmllcyIsImNvdW50cmllc1JlZHVjZXIiLCJjb25maWd1cmVTdG9yZSIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJjb21iaW5lUmVkdWNlcnMiLCJhcHBseU1pZGRsZXdhcmUiLCJ0aHVuayJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSUEsSUFBTUEsSUFBSSxHQUFHO0FBQ1RDLEtBQUcsRUFBR0MsNERBREc7QUFFVEMsV0FBUyxFQUFHQyx3RUFBZ0JBO0FBRm5CLENBQWI7O0FBS0EsSUFBTUMsY0FBYyxHQUFFLFNBQWhCQSxjQUFnQixHQUFJO0FBQ3RCLE1BQU1DLEtBQUssR0FBR0Msa0RBQVcsQ0FBQ0Msc0RBQWUsQ0FBQ1IsSUFBRCxDQUFoQixFQUF1QlMsc0RBQWUsQ0FBQ0MsZ0RBQUQsQ0FBdEMsQ0FBekI7QUFDQSxTQUFPSixLQUFQO0FBRUgsQ0FKRDs7QUFNQSwrREFBZUQsY0FBZiIsImZpbGUiOiIuL3JlZHV4L3N0b3JlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjb21iaW5lUmVkdWNlcnMsY3JlYXRlU3RvcmUsYXBwbHlNaWRkbGV3YXJlfSBmcm9tICdyZWR1eCdcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuaydcbmltcG9ydCB7bG9nUmVkdWNlcn0gZnJvbSAnLi9yZWR1Y2Vycy9sb2dSZWR1Y2VyJ1xuaW1wb3J0IHtjb3VudHJpZXNSZWR1Y2VyfSBmcm9tICcuL3JlZHVjZXJzL2NvdW50cmllc0FjdGlvbnMnXG5cblxuXG5jb25zdCByb290ID0ge1xuICAgIGxvZyA6IGxvZ1JlZHVjZXIsXG4gICAgY291bnRyaWVzIDogY291bnRyaWVzUmVkdWNlclxufVxuXG5jb25zdCBjb25maWd1cmVTdG9yZSA9KCk9PntcbiAgICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKGNvbWJpbmVSZWR1Y2Vycyhyb290KSxhcHBseU1pZGRsZXdhcmUodGh1bmspKVxuICAgIHJldHVybiBzdG9yZVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbmZpZ3VyZVN0b3JlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./redux/store.js\n");

/***/ })

});