/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_actions_logActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/actions/logActions */ \"./redux/actions/logActions.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/home/pratheekk/Desktop/LMS/fe/pages/login.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Login = function Login() {\n  _s();\n\n  var log = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {\n    return state.log;\n  });\n  var countries = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {\n    return state.countries;\n  });\n  console.log(countries);\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n\n  var handlelogin = function handlelogin(e) {\n    dispatch((0,_redux_actions_logActions__WEBPACK_IMPORTED_MODULE_3__.toggleStatus)());\n  }; // const getCountries =()=>{\n  //     axios.get(`https://restcountries.eu/rest/v2/all`)\n  //         .then((res)=>{\n  //             console.log(res.data)\n  //         })\n  //         .catch((err)=>{\n  //             console.log(err)\n  //         })\n  // }\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {\n    dispatch((0,_redux_actions_logActions__WEBPACK_IMPORTED_MODULE_3__.getALLCountries)());\n  }, []);\n  console.log(log);\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"jumbotron text-center bg-primary square\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 14\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 19\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 24\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 29\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        className: \"white\",\n        children: \" Login Page\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 5\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: handlelogin,\n        className: \"button1\",\n        children: \"login\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Login, \"UCFOcsCWG5rOxOimr8o9+t9Qm/Y=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch, next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];\n});\n\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\n\nvar _c;\n\n$RefreshReg$(_c, \"Login\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanM/M2I2OSJdLCJuYW1lcyI6WyJMb2dpbiIsImxvZyIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJjb3VudHJpZXMiLCJjb25zb2xlIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImhhbmRsZWxvZ2luIiwiZSIsInRvZ2dsZVN0YXR1cyIsInVzZUVmZmVjdCIsImdldEFMTENvdW50cmllcyIsInJvdXRlciIsInVzZVJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFFLFNBQVBBLEtBQU8sR0FBSTtBQUFBOztBQUNiLE1BQU1DLEdBQUcsR0FBR0Msd0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDRixHQUFWO0FBQUEsR0FBTixDQUF2QjtBQUNBLE1BQU1HLFNBQVMsR0FBR0Ysd0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDQyxTQUFWO0FBQUEsR0FBTixDQUE3QjtBQUVBQyxTQUFPLENBQUNKLEdBQVIsQ0FBWUcsU0FBWjtBQUVBLE1BQU1FLFFBQVEsR0FBR0Msd0RBQVcsRUFBNUI7O0FBRUEsTUFBTUMsV0FBVyxHQUFFLFNBQWJBLFdBQWEsQ0FBQ0MsQ0FBRCxFQUFLO0FBQ3BCSCxZQUFRLENBQUNJLHVFQUFZLEVBQWIsQ0FBUjtBQUNILEdBRkQsQ0FSYSxDQVliO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUFDLGtEQUFTLENBQUMsWUFBSTtBQUNWTCxZQUFRLENBQUNNLDBFQUFlLEVBQWhCLENBQVI7QUFDSCxHQUZRLEVBRVAsRUFGTyxDQUFUO0FBSUFQLFNBQU8sQ0FBQ0osR0FBUixDQUFZQSxHQUFaO0FBRUEsTUFBTVksTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUVBLHNCQUFRO0FBQUEsNEJBQ1I7QUFBSyxlQUFTLEVBQUMseUNBQWY7QUFBQSw4QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFDUztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFQsZUFDYztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRGQsZUFDbUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURuQixlQUN3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRHhCLGVBRUE7QUFBSSxpQkFBUyxFQUFDLE9BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEUSxlQUtSO0FBQUEsOEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRUk7QUFBUSxlQUFPLEVBQUVOLFdBQWpCO0FBQThCLGlCQUFTLEVBQUMsU0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMUTtBQUFBLGtCQUFSO0FBV0gsQ0F6Q0Q7O0dBQU1SLEs7VUFDVUUsb0QsRUFDTUEsb0QsRUFJREssb0QsRUFzQkZPLGtEOzs7S0E1QmJkLEs7QUEyQ04sK0RBQWVBLEtBQWYiLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7dXNlU2VsZWN0b3IsdXNlRGlzcGF0Y2h9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHt0b2dnbGVTdGF0dXMsZ2V0QUxMQ291bnRyaWVzfSBmcm9tICcuLi9yZWR1eC9hY3Rpb25zL2xvZ0FjdGlvbnMnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgTG9naW4gPSgpPT57XG4gICAgY29uc3QgbG9nID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUubG9nKVxuICAgIGNvbnN0IGNvdW50cmllcyA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmNvdW50cmllcylcblxuICAgIGNvbnNvbGUubG9nKGNvdW50cmllcylcblxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxuXG4gICAgY29uc3QgaGFuZGxlbG9naW4gPShlKT0+e1xuICAgICAgICBkaXNwYXRjaCh0b2dnbGVTdGF0dXMoKSlcbiAgICB9XG5cbiAgICAvLyBjb25zdCBnZXRDb3VudHJpZXMgPSgpPT57XG4gICAgLy8gICAgIGF4aW9zLmdldChgaHR0cHM6Ly9yZXN0Y291bnRyaWVzLmV1L3Jlc3QvdjIvYWxsYClcbiAgICAvLyAgICAgICAgIC50aGVuKChyZXMpPT57XG4gICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpXG4gICAgLy8gICAgICAgICB9KVxuICAgIC8vICAgICAgICAgLmNhdGNoKChlcnIpPT57XG4gICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgIC8vICAgICAgICAgfSlcbiAgICAvLyB9XG4gICAgXG4gICAgdXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGRpc3BhdGNoKGdldEFMTENvdW50cmllcygpKVxuICAgIH0sW10pXG5cbiAgICBjb25zb2xlLmxvZyhsb2cpXG5cbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gICAgcmV0dXJuICg8PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwianVtYm90cm9uIHRleHQtY2VudGVyIGJnLXByaW1hcnkgc3F1YXJlXCI+XG4gICAgICAgIDxici8+PGJyLz48YnIvPjxici8+PGJyLz5cbiAgICA8aDEgY2xhc3NOYW1lPVwid2hpdGVcIj4gTG9naW4gUGFnZTwvaDE+XG4gICAgPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgICAgPGJyLz5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVsb2dpbn0gY2xhc3NOYW1lPVwiYnV0dG9uMVwiPmxvZ2luPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICAgICAgIFxuICAgIDwvPilcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/login.js\n");

/***/ })

});