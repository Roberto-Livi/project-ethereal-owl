"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/projects/scrum-board",{

/***/ "./helpers/mongodb/UsersCallCenter.js":
/*!********************************************!*\
  !*** ./helpers/mongodb/UsersCallCenter.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createMongoUserObj\": function() { return /* binding */ createMongoUserObj; },\n/* harmony export */   \"getScrumUsers\": function() { return /* binding */ getScrumUsers; },\n/* harmony export */   \"searchMongoCodename\": function() { return /* binding */ searchMongoCodename; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n\nvar localUrl = \"http://localhost:3000\";\nvar createMongoUserObj = function() {\n    var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function(codename, address) {\n        var successfulResponse, response, err;\n        return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    successfulResponse = false;\n                    _state.label = 1;\n                case 1:\n                    _state.trys.push([\n                        1,\n                        3,\n                        ,\n                        4\n                    ]);\n                    return [\n                        4,\n                        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"\".concat(localUrl, \"/api/users/new\"), {\n                            codename: codename,\n                            address: address\n                        })\n                    ];\n                case 2:\n                    response = _state.sent();\n                    if (response) {\n                        successfulResponse = true;\n                    }\n                    return [\n                        3,\n                        4\n                    ];\n                case 3:\n                    err = _state.sent();\n                    console.log(\"Error: \", err.message);\n                    return [\n                        3,\n                        4\n                    ];\n                case 4:\n                    return [\n                        2,\n                        successfulResponse\n                    ];\n            }\n        });\n    });\n    return function createMongoUserObj(codename, address) {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar searchMongoCodename = function() {\n    var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function(searchTerm) {\n        var users, response, err;\n        return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    users = [];\n                    _state.label = 1;\n                case 1:\n                    _state.trys.push([\n                        1,\n                        3,\n                        ,\n                        4\n                    ]);\n                    return [\n                        4,\n                        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"\".concat(localUrl, \"/api/users/search\"), {\n                            params: {\n                                searchTerm: searchTerm\n                            }\n                        })\n                    ];\n                case 2:\n                    response = _state.sent();\n                    users = response.data.users;\n                    return [\n                        3,\n                        4\n                    ];\n                case 3:\n                    err = _state.sent();\n                    console.log(\"Error: \", err.message);\n                    return [\n                        3,\n                        4\n                    ];\n                case 4:\n                    return [\n                        2,\n                        users\n                    ];\n            }\n        });\n    });\n    return function searchMongoCodename(searchTerm) {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar getScrumUsers = function() {\n    var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function(addresses) {\n        var response, err;\n        return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    console.log(addresses[0]);\n                    _state.label = 1;\n                case 1:\n                    _state.trys.push([\n                        1,\n                        3,\n                        ,\n                        4\n                    ]);\n                    return [\n                        4,\n                        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"\".concat(localUrl, \"/api/users/scrum-users\"), addresses)\n                    ];\n                case 2:\n                    response = _state.sent();\n                    return [\n                        2,\n                        response.data.users\n                    ];\n                case 3:\n                    err = _state.sent();\n                    console.log(\"Error: \", err.message);\n                    return [\n                        2,\n                        []\n                    ];\n                case 4:\n                    return [\n                        2\n                    ];\n            }\n        });\n    });\n    return function getScrumUsers(addresses) {\n        return _ref.apply(this, arguments);\n    };\n}();\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9oZWxwZXJzL21vbmdvZGIvVXNlcnNDYWxsQ2VudGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTBCO0FBQ1E7QUFFbEMsSUFBTUUsUUFBUSxHQUFHLHVCQUF1QjtBQUVqQyxJQUFNQyxrQkFBa0I7ZUFBRyw2RkFBT0MsUUFBUSxFQUFFQyxPQUFPLEVBQUs7WUFDekRDLGtCQUFrQixFQUdkQyxRQUFRLEVBSVBDLEdBQUc7Ozs7b0JBUFJGLGtCQUFrQixHQUFHLEtBQUssQ0FBQzs7Ozs7Ozs7O29CQUdaOzt3QkFBTU4sa0RBQVUsQ0FBQyxFQUFDLENBQVcsTUFBYyxDQUF2QkUsUUFBUSxFQUFDLGdCQUFjLENBQUMsRUFBRTs0QkFBRUUsUUFBUSxFQUFSQSxRQUFROzRCQUFFQyxPQUFPLEVBQVBBLE9BQU87eUJBQUUsQ0FBQztzQkFBQTs7b0JBQS9FRSxRQUFRLEdBQUcsYUFBb0U7b0JBQ3JGLElBQUdBLFFBQVEsRUFBRTt3QkFDWEQsa0JBQWtCLEdBQUcsSUFBSSxDQUFDO29CQUM1QixDQUFDOzs7Ozs7b0JBQ01FLEdBQUc7b0JBQ1ZFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsRUFBRUgsR0FBRyxDQUFDSSxPQUFPLENBQUMsQ0FBQzs7Ozs7O29CQUd0Qzs7d0JBQU9OLGtCQUFrQjtzQkFBQzs7O0lBQzVCLENBQUM7b0JBYllILGtCQUFrQixDQUFVQyxRQUFRLEVBQUVDLE9BQU87OztHQWF6RCxDQUFDO0FBRUssSUFBTVEsbUJBQW1CO2VBQUcsNkZBQU1DLFVBQVUsRUFBSztZQUNsREMsS0FBSyxFQUdEUixRQUFRLEVBSVJDLEdBQUc7Ozs7b0JBUFBPLEtBQUssS0FBSyxDQUFDOzs7Ozs7Ozs7b0JBR0k7O3dCQUFNZixpREFBUyxDQUM5QixFQUFDLENBQVcsTUFBaUIsQ0FBMUJFLFFBQVEsRUFBQyxtQkFBaUIsQ0FBQyxFQUFFOzRCQUFFZSxNQUFNLEVBQUU7Z0NBQUVILFVBQVUsRUFBVkEsVUFBVTs2QkFBRTt5QkFBRSxDQUMzRDtzQkFBQTs7b0JBRktQLFFBQVEsR0FBRyxhQUVoQjtvQkFDRFEsS0FBSyxHQUFHUixRQUFRLENBQUNXLElBQUksQ0FBQ0gsS0FBSyxDQUFDOzs7Ozs7b0JBQ3RCUCxHQUFHO29CQUNURSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxTQUFTLEVBQUVILEdBQUcsQ0FBQ0ksT0FBTyxDQUFDLENBQUM7Ozs7OztvQkFHdEM7O3dCQUFPRyxLQUFLO3NCQUFDOzs7SUFDZixDQUFDO29CQWJZRixtQkFBbUIsQ0FBU0MsVUFBVTs7O0dBYWxEO0FBRU0sSUFBTUssYUFBYTtlQUFHLDZGQUFPQyxTQUFTLEVBQUs7WUFHeENiLFFBQVEsRUFJUEMsR0FBRzs7OztvQkFOWkUsT0FBTyxDQUFDQyxHQUFHLENBQUNTLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7O29CQUVOOzt3QkFBTXBCLGlEQUFTLENBQUMsRUFBQyxDQUFXLE1BQXNCLENBQS9CRSxRQUFRLEVBQUMsd0JBQXNCLENBQUMsRUFDbEVrQixTQUFTLENBQ1Y7c0JBQUE7O29CQUZLYixRQUFRLEdBQUcsYUFFaEI7b0JBQ0Q7O3dCQUFPQSxRQUFRLENBQUNXLElBQUksQ0FBQ0gsS0FBSztzQkFBQzs7b0JBQ3BCUCxHQUFHO29CQUNWRSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxTQUFTLEVBQUVILEdBQUcsQ0FBQ0ksT0FBTyxDQUFDLENBQUM7b0JBQ3BDOzs7c0JBQVU7Ozs7Ozs7SUFFZCxDQUFDO29CQVhZTyxhQUFhLENBQVVDLFNBQVM7OztHQVc1QyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2hlbHBlcnMvbW9uZ29kYi9Vc2Vyc0NhbGxDZW50ZXIuanM/MGIxMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gXCJsb2Rhc2hcIjtcblxuY29uc3QgbG9jYWxVcmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlTW9uZ29Vc2VyT2JqID0gYXN5bmMgKGNvZGVuYW1lLCBhZGRyZXNzKSA9PiB7XG4gIGxldCBzdWNjZXNzZnVsUmVzcG9uc2UgPSBmYWxzZTtcblxuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChgJHtsb2NhbFVybH0vYXBpL3VzZXJzL25ld2AsIHsgY29kZW5hbWUsIGFkZHJlc3MgfSk7XG4gICAgaWYocmVzcG9uc2UpIHtcbiAgICAgIHN1Y2Nlc3NmdWxSZXNwb25zZSA9IHRydWU7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmxvZyhcIkVycm9yOiBcIiwgZXJyLm1lc3NhZ2UpO1xuICB9XG5cbiAgcmV0dXJuIHN1Y2Nlc3NmdWxSZXNwb25zZTtcbn07XG5cbmV4cG9ydCBjb25zdCBzZWFyY2hNb25nb0NvZGVuYW1lID0gYXN5bmMoc2VhcmNoVGVybSkgPT4ge1xuICBsZXQgdXNlcnMgPSBbXTtcblxuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgICAgYCR7bG9jYWxVcmx9L2FwaS91c2Vycy9zZWFyY2hgLCB7IHBhcmFtczogeyBzZWFyY2hUZXJtIH0gfVxuICAgICk7XG4gICAgdXNlcnMgPSByZXNwb25zZS5kYXRhLnVzZXJzO1xuICB9IGNhdGNoKGVycikge1xuICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiLCBlcnIubWVzc2FnZSk7XG4gIH1cblxuICByZXR1cm4gdXNlcnM7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTY3J1bVVzZXJzID0gYXN5bmMgKGFkZHJlc3NlcykgPT4ge1xuICBjb25zb2xlLmxvZyhhZGRyZXNzZXNbMF0pXG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYCR7bG9jYWxVcmx9L2FwaS91c2Vycy9zY3J1bS11c2Vyc2AsXG4gICAgICBhZGRyZXNzZXNcbiAgICApO1xuICAgIHJldHVybiByZXNwb25zZS5kYXRhLnVzZXJzO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmxvZyhcIkVycm9yOiBcIiwgZXJyLm1lc3NhZ2UpO1xuICAgIHJldHVybiBbXTtcbiAgfVxufTtcbiJdLCJuYW1lcyI6WyJheGlvcyIsImRlYm91bmNlIiwibG9jYWxVcmwiLCJjcmVhdGVNb25nb1VzZXJPYmoiLCJjb2RlbmFtZSIsImFkZHJlc3MiLCJzdWNjZXNzZnVsUmVzcG9uc2UiLCJyZXNwb25zZSIsImVyciIsInBvc3QiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsInNlYXJjaE1vbmdvQ29kZW5hbWUiLCJzZWFyY2hUZXJtIiwidXNlcnMiLCJnZXQiLCJwYXJhbXMiLCJkYXRhIiwiZ2V0U2NydW1Vc2VycyIsImFkZHJlc3NlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./helpers/mongodb/UsersCallCenter.js\n"));

/***/ })

});