/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./redux/actions/logActions.js":
/*!*************************************!*\
  !*** ./redux/actions/logActions.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toggleStatus\": function() { return /* binding */ toggleStatus; },\n/* harmony export */   \"startPostCust\": function() { return /* binding */ startPostCust; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar login = function login() {\n  return {\n    type: 'TOGGLE_STATE'\n  };\n};\n\nvar toggleStatus = function toggleStatus() {\n  return {\n    type: 'TOGGLE_STATE'\n  };\n};\n\nvar addCust = function addCust(cust) {\n  return {\n    type: 'ADD_CUST',\n    payload: cust\n  };\n};\n\nvar startPostCust = function startPostCust(cust) {\n  return function (dispatch) {\n    axios__WEBPACK_IMPORTED_MODULE_0___default().post('/customers', cust, {\n      headers: {\n        'Authorization': \"Bearer \".concat(localStorage.getItem('token'))\n      }\n    }).then(function (response) {\n      var result = response.data;\n\n      if (result.hasOwnProperty('errors')) {\n        alert(result.errors);\n      } else {\n        dispatch(addCust(result));\n      }\n    })[\"catch\"](function (err) {\n      alert(err.message);\n    });\n  };\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvYWN0aW9ucy9sb2dBY3Rpb25zLmpzPzRkOGMiXSwibmFtZXMiOlsibG9naW4iLCJ0eXBlIiwidG9nZ2xlU3RhdHVzIiwiYWRkQ3VzdCIsImN1c3QiLCJwYXlsb2FkIiwic3RhcnRQb3N0Q3VzdCIsImRpc3BhdGNoIiwiYXhpb3MiLCJoZWFkZXJzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInRoZW4iLCJyZXNwb25zZSIsInJlc3VsdCIsImRhdGEiLCJoYXNPd25Qcm9wZXJ0eSIsImFsZXJ0IiwiZXJyb3JzIiwiZXJyIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFHQSxJQUFNQSxLQUFLLEdBQUUsU0FBUEEsS0FBTyxHQUFLO0FBQ2QsU0FBTztBQUFDQyxRQUFJLEVBQUc7QUFBUixHQUFQO0FBQ0gsQ0FGRDs7QUFLTyxJQUFNQyxZQUFZLEdBQUMsU0FBYkEsWUFBYSxHQUFJO0FBQzFCLFNBQU87QUFBQ0QsUUFBSSxFQUFHO0FBQVIsR0FBUDtBQUNILENBRk07O0FBS1AsSUFBTUUsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsSUFBRCxFQUFVO0FBQ3RCLFNBQU87QUFDSEgsUUFBSSxFQUFFLFVBREg7QUFFSEksV0FBTyxFQUFFRDtBQUZOLEdBQVA7QUFJSCxDQUxEOztBQVFPLElBQU1FLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0YsSUFBRCxFQUFVO0FBQ25DLFNBQU8sVUFBQ0csUUFBRCxFQUFjO0FBQ2pCQyxxREFBQSxDQUFXLFlBQVgsRUFBd0JKLElBQXhCLEVBQTZCO0FBQ3pCSyxhQUFPLEVBQUU7QUFDTCwwQ0FBMkJDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixPQUFyQixDQUEzQjtBQURLO0FBRGdCLEtBQTdCLEVBS0NDLElBTEQsQ0FLTSxVQUFDQyxRQUFELEVBQWM7QUFDaEIsVUFBTUMsTUFBTSxHQUFHRCxRQUFRLENBQUNFLElBQXhCOztBQUNBLFVBQUdELE1BQU0sQ0FBQ0UsY0FBUCxDQUFzQixRQUF0QixDQUFILEVBQW9DO0FBQ2hDQyxhQUFLLENBQUNILE1BQU0sQ0FBQ0ksTUFBUixDQUFMO0FBQ0gsT0FGRCxNQUVPO0FBQ0hYLGdCQUFRLENBQUNKLE9BQU8sQ0FBQ1csTUFBRCxDQUFSLENBQVI7QUFDSDtBQUNKLEtBWkQsV0FhTyxVQUFDSyxHQUFELEVBQVM7QUFDWkYsV0FBSyxDQUFDRSxHQUFHLENBQUNDLE9BQUwsQ0FBTDtBQUNILEtBZkQ7QUFnQkgsR0FqQkQ7QUFrQkgsQ0FuQk0iLCJmaWxlIjoiLi9yZWR1eC9hY3Rpb25zL2xvZ0FjdGlvbnMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cblxuY29uc3QgbG9naW4gPSgpID0+e1xuICAgIHJldHVybiB7dHlwZSA6ICdUT0dHTEVfU1RBVEUnfVxufVxuXG5cbmV4cG9ydCBjb25zdCB0b2dnbGVTdGF0dXM9KCk9PntcbiAgICByZXR1cm4ge3R5cGUgOiAnVE9HR0xFX1NUQVRFJ31cbn1cblxuXG5jb25zdCBhZGRDdXN0ID0gKGN1c3QpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAnQUREX0NVU1QnLFxuICAgICAgICBwYXlsb2FkOiBjdXN0XG4gICAgfVxufVxuXG5cbmV4cG9ydCBjb25zdCBzdGFydFBvc3RDdXN0ID0gKGN1c3QpID0+IHtcbiAgICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgICAgIGF4aW9zLnBvc3QoJy9jdXN0b21lcnMnLGN1c3Qse1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke2xvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpfWBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSByZXNwb25zZS5kYXRhXG4gICAgICAgICAgICBpZihyZXN1bHQuaGFzT3duUHJvcGVydHkoJ2Vycm9ycycpKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQocmVzdWx0LmVycm9ycylcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goYWRkQ3VzdChyZXN1bHQpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgYWxlcnQoZXJyLm1lc3NhZ2UpXG4gICAgICAgIH0pXG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./redux/actions/logActions.js\n");

/***/ })

});