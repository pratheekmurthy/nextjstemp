/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/register";
exports.ids = ["pages/register"];
exports.modules = {

/***/ "./pages/register.js":
/*!***************************!*\
  !*** ./pages/register.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/home/pratheekk/Desktop/LMS/fe/pages/register.js\";\n\n\n\nconst Register = () => {\n  const log = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.log);\n  const countries = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.countries);\n  console.log(countries);\n  console.log(log);\n  const {\n    0: email,\n    1: setEmail\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n  const {\n    0: password,\n    1: setPassword\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n  const {\n    0: name,\n    1: setName\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n\n  const handleSubmit = e => {\n    e.preventDefault();\n    console.table(email, password, name);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"jumbotron text-center bg-primary square\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 14\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 19\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 24\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 29\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        className: \"white\",\n        children: \" Register Page\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 11\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 5\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"container col-md-4 offset-md-4 pb-5\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        type: \"email\",\n        className: \"form-control mb-4 p-4\",\n        value: name,\n        onChange: e => setName(e.target.value),\n        placeholder: \"Enter name\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 5\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        type: \"email\",\n        className: \"form-control mb-4 p-4\",\n        value: email,\n        onChange: e => setEmail(e.target.value),\n        placeholder: \"Enter email\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        type: \"password\",\n        className: \"form-control mb-4 p-4\",\n        value: password,\n        onChange: e => setPassword(e.target.value),\n        placeholder: \"Enter password\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        type: \"submit\",\n        className: \"button\",\n        onClick: handleSubmit,\n        children: \"Submit\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 5\n    }, undefined)]\n  }, void 0, true);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Register);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mZS8uL3BhZ2VzL3JlZ2lzdGVyLmpzPzBlY2IiXSwibmFtZXMiOlsiUmVnaXN0ZXIiLCJsb2ciLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiY291bnRyaWVzIiwiY29uc29sZSIsImVtYWlsIiwic2V0RW1haWwiLCJ1c2VTdGF0ZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJuYW1lIiwic2V0TmFtZSIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhYmxlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1BLFFBQVEsR0FBRSxNQUFJO0FBQ2hCLFFBQU1DLEdBQUcsR0FBR0Msd0RBQVcsQ0FBQ0MsS0FBSyxJQUFJQSxLQUFLLENBQUNGLEdBQWhCLENBQXZCO0FBQ0EsUUFBTUcsU0FBUyxHQUFHRix3REFBVyxDQUFDQyxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsU0FBaEIsQ0FBN0I7QUFFQUMsU0FBTyxDQUFDSixHQUFSLENBQVlHLFNBQVo7QUFDQUMsU0FBTyxDQUFDSixHQUFSLENBQVlBLEdBQVo7QUFHQSxRQUFNO0FBQUEsT0FBQ0ssS0FBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JDLCtDQUFRLENBQUMsRUFBRCxDQUFoQztBQUNBLFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF5QkYsK0NBQVEsQ0FBQyxFQUFELENBQXZDO0FBQ0EsUUFBTTtBQUFBLE9BQUNHLElBQUQ7QUFBQSxPQUFNQztBQUFOLE1BQWlCSiwrQ0FBUSxDQUFDLEVBQUQsQ0FBL0I7O0FBRUEsUUFBTUssWUFBWSxHQUFHQyxDQUFELElBQUs7QUFDckJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBVixXQUFPLENBQUNXLEtBQVIsQ0FBY1YsS0FBZCxFQUFvQkcsUUFBcEIsRUFBNkJFLElBQTdCO0FBQ0gsR0FIRDs7QUFNQSxzQkFBUTtBQUFBLDRCQUNGO0FBQUssZUFBUyxFQUFDLHlDQUFmO0FBQUEsOEJBQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERSxlQUNHO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREgsZUFDUTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURSLGVBQ2E7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEYixlQUNrQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURsQixlQUVGO0FBQUksaUJBQVMsRUFBQyxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERSxlQUtSO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTFEsZUFNUjtBQUFLLGVBQVMsRUFBQyxxQ0FBZjtBQUFBLDhCQUNBO0FBQ1EsWUFBSSxFQUFDLE9BRGI7QUFFUSxpQkFBUyxFQUFDLHVCQUZsQjtBQUdRLGFBQUssRUFBRUEsSUFIZjtBQUlRLGdCQUFRLEVBQUdHLENBQUQsSUFBS0YsT0FBTyxDQUFDRSxDQUFDLENBQUNHLE1BQUYsQ0FBU0MsS0FBVixDQUo5QjtBQUtRLG1CQUFXLEVBQUM7QUFMcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEQSxlQVFJO0FBQ0ksWUFBSSxFQUFDLE9BRFQ7QUFFSSxpQkFBUyxFQUFDLHVCQUZkO0FBR0ksYUFBSyxFQUFFWixLQUhYO0FBSUksZ0JBQVEsRUFBR1EsQ0FBRCxJQUFLUCxRQUFRLENBQUNPLENBQUMsQ0FBQ0csTUFBRixDQUFTQyxLQUFWLENBSjNCO0FBS0ksbUJBQVcsRUFBQztBQUxoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJKLGVBZUk7QUFDSSxZQUFJLEVBQUMsVUFEVDtBQUVJLGlCQUFTLEVBQUMsdUJBRmQ7QUFHSSxhQUFLLEVBQUVULFFBSFg7QUFJSSxnQkFBUSxFQUFHSyxDQUFELElBQUtKLFdBQVcsQ0FBQ0ksQ0FBQyxDQUFDRyxNQUFGLENBQVNDLEtBQVYsQ0FKOUI7QUFLSSxtQkFBVyxFQUFDO0FBTGhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBZkosZUF1Qkk7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFzQixpQkFBUyxFQUFDLFFBQWhDO0FBQXlDLGVBQU8sRUFBRUwsWUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBdkJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFOUTtBQUFBLGtCQUFSO0FBZ0NILENBbEREOztBQW9EQSwrREFBZWIsUUFBZiIsImZpbGUiOiIuL3BhZ2VzL3JlZ2lzdGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5pbXBvcnQge3VzZVNlbGVjdG9yfSBmcm9tICdyZWFjdC1yZWR1eCdcblxuY29uc3QgUmVnaXN0ZXIgPSgpPT57XG4gICAgY29uc3QgbG9nID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUubG9nKVxuICAgIGNvbnN0IGNvdW50cmllcyA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmNvdW50cmllcylcblxuICAgIGNvbnNvbGUubG9nKGNvdW50cmllcylcbiAgICBjb25zb2xlLmxvZyhsb2cpXG5cblxuICAgIGNvbnN0IFtlbWFpbCxzZXRFbWFpbF09IHVzZVN0YXRlKFwiXCIpXG4gICAgY29uc3QgW3Bhc3N3b3JkLHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpXG4gICAgY29uc3QgW25hbWUsc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKVxuXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0oZSk9PntcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGNvbnNvbGUudGFibGUoZW1haWwscGFzc3dvcmQsbmFtZSlcbiAgICB9XG5cblxuICAgIHJldHVybiAoPD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImp1bWJvdHJvbiB0ZXh0LWNlbnRlciBiZy1wcmltYXJ5IHNxdWFyZVwiPlxuICAgICAgICA8YnIvPjxici8+PGJyLz48YnIvPjxici8+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ3aGl0ZVwiPiBSZWdpc3RlciBQYWdlPC9oMT5cbiAgICA8L2Rpdj5cbiAgICA8YnIvPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNvbC1tZC00IG9mZnNldC1tZC00IHBiLTVcIj5cbiAgICA8aW5wdXQgXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIG1iLTQgcC00XCJcbiAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+c2V0TmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIG5hbWVcIlxuICAgICAgICAvPlxuICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIG1iLTQgcC00XCJcbiAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PnNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgZW1haWxcIlxuICAgICAgICAvPlxuICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIG1iLTQgcC00XCJcbiAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PnNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgcGFzc3dvcmRcIlxuICAgICAgICAvPlxuICAgICAgIFxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidXR0b25cIiBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9PlN1Ym1pdDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDwvPilcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/register.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/register.js"));
module.exports = __webpack_exports__;

})();