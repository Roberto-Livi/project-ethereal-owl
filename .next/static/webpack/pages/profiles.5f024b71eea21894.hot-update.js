"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/profiles",{

/***/ "./helpers/users/users.js":
/*!********************************!*\
  !*** ./helpers/users/users.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createUser\": function() { return /* binding */ createUser; },\n/* harmony export */   \"getAccount\": function() { return /* binding */ getAccount; },\n/* harmony export */   \"getUserData\": function() { return /* binding */ getUserData; },\n/* harmony export */   \"getUserFromAllUsers\": function() { return /* binding */ getUserFromAllUsers; },\n/* harmony export */   \"getUsers\": function() { return /* binding */ getUsers; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var _ethereum_users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ethereum/users */ \"./ethereum/users.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ \"./helpers/users/helpers.js\");\n\n\n\n\n\nvar getAccount = function() {\n    var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function() {\n        var accounts;\n        return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    return [\n                        4,\n                        _ethereum_web3__WEBPACK_IMPORTED_MODULE_1__[\"default\"].eth.getAccounts()\n                    ];\n                case 1:\n                    accounts = _state.sent();\n                    return [\n                        2,\n                        accounts[0]\n                    ];\n            }\n        });\n    });\n    return function getAccount() {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar getUserData = function() {\n    var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function() {\n        var account, user, _tmp;\n        return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    return [\n                        4,\n                        _ethereum_web3__WEBPACK_IMPORTED_MODULE_1__[\"default\"].eth.getAccounts()\n                    ];\n                case 1:\n                    account = _state.sent();\n                    _tmp = account.length;\n                    if (!_tmp) return [\n                        3,\n                        3\n                    ];\n                    return [\n                        4,\n                        _ethereum_users__WEBPACK_IMPORTED_MODULE_0__[\"default\"].methods.users(account[0]).call()\n                    ];\n                case 2:\n                    _tmp = _state.sent();\n                    _state.label = 3;\n                case 3:\n                    user = _tmp;\n                    return [\n                        2,\n                        user\n                    ];\n            }\n        });\n    });\n    return function getUserData() {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar getUserFromAllUsers = function() {\n    var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function(index) {\n        var user;\n        return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    return [\n                        4,\n                        _ethereum_users__WEBPACK_IMPORTED_MODULE_0__[\"default\"].methods.allUsers(index).call()\n                    ];\n                case 1:\n                    user = _state.sent();\n                    return [\n                        2,\n                        user\n                    ];\n            }\n        });\n    });\n    return function getUserFromAllUsers(index) {\n        return _ref.apply(this, arguments);\n    };\n}();\n// export const getOtherUser = async (address) => {\n//   const user = account.length && (await users.methods.users(address).call());\n//   return user;\n// };\nvar createUser = function() {\n    var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function(userInfo) {\n        var accounts;\n        return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    return [\n                        4,\n                        _ethereum_web3__WEBPACK_IMPORTED_MODULE_1__[\"default\"].eth.getAccounts()\n                    ];\n                case 1:\n                    accounts = _state.sent();\n                    return [\n                        4,\n                        _ethereum_users__WEBPACK_IMPORTED_MODULE_0__[\"default\"].methods.createUser(accounts[0], userInfo.codename, userInfo.profession, userInfo.description).send({\n                            from: accounts[0]\n                        })\n                    ];\n                case 2:\n                    _state.sent();\n                    return [\n                        2\n                    ];\n            }\n        });\n    });\n    return function createUser(userInfo) {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar getUsers = function() {\n    var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function(profession) {\n        var usersCount, maxResultsCount, results, userIds, profNumberCount, resultsReqCount, i;\n        return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    return [\n                        4,\n                        _ethereum_users__WEBPACK_IMPORTED_MODULE_0__[\"default\"].methods.usersCount().call()\n                    ];\n                case 1:\n                    usersCount = _state.sent();\n                    maxResultsCount = 5;\n                    results = [];\n                    userIds = [];\n                    return [\n                        4,\n                        _ethereum_users__WEBPACK_IMPORTED_MODULE_0__[\"default\"].methods.profCount(profession).call()\n                    ];\n                case 2:\n                    profNumberCount = _state.sent();\n                    if (profNumberCount) {\n                        resultsReqCount = profNumberCount <= maxResultsCount ? profNumberCount : maxResultsCount;\n                    } else {\n                        resultsReqCount = 0;\n                    }\n                    for(i = 0; i < resultsReqCount; i++){\n                        (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.getUniqueUser)(results, userIds, usersCount, profession);\n                    }\n                    console.log(allUsers);\n                    return [\n                        2,\n                        allUsers\n                    ];\n            }\n        });\n    });\n    return function getUsers(profession) {\n        return _ref.apply(this, arguments);\n    };\n}();\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFQyxPQUFPLEVBQUVILFVBQVUsRUFBRUwsVUFBVSxDQUFDLENBQUM7b0JBQzFELENBQUM7b0JBRURhLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDbEIsUUFBUSxDQUFDLENBQUM7b0JBQ3RCOzt3QkFBT0EsUUFBUTtzQkFBQzs7O0lBQ2xCLENBQUM7b0JBdEJZUSxRQUFRLENBQVVKLFVBQVU7OztHQXNCeEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaGVscGVycy91c2Vycy91c2Vycy5qcz84YTg4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VycyBmcm9tIFwiLi4vLi4vZXRoZXJldW0vdXNlcnNcIjtcbmltcG9ydCB3ZWIzIGZyb20gXCIuLi8uLi9ldGhlcmV1bS93ZWIzXCI7XG5pbXBvcnQgeyBnZXRVbmlxdWVVc2VyIH0gZnJvbSBcIi4vaGVscGVyc1wiO1xuXG5leHBvcnQgY29uc3QgZ2V0QWNjb3VudCA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuICByZXR1cm4gYWNjb3VudHNbMF07XG59XG5cbmV4cG9ydCBjb25zdCBnZXRVc2VyRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgYWNjb3VudCA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XG4gIGNvbnN0IHVzZXIgPSBhY2NvdW50Lmxlbmd0aCAmJiAoYXdhaXQgdXNlcnMubWV0aG9kcy51c2VycyhhY2NvdW50WzBdKS5jYWxsKCkpO1xuICByZXR1cm4gdXNlcjtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFVzZXJGcm9tQWxsVXNlcnMgPSBhc3luYyAoaW5kZXgpID0+IHtcbiAgY29uc3QgdXNlciA9IGF3YWl0IHVzZXJzLm1ldGhvZHMuYWxsVXNlcnMoaW5kZXgpLmNhbGwoKTtcbiAgcmV0dXJuIHVzZXI7XG59XG5cbi8vIGV4cG9ydCBjb25zdCBnZXRPdGhlclVzZXIgPSBhc3luYyAoYWRkcmVzcykgPT4ge1xuLy8gICBjb25zdCB1c2VyID0gYWNjb3VudC5sZW5ndGggJiYgKGF3YWl0IHVzZXJzLm1ldGhvZHMudXNlcnMoYWRkcmVzcykuY2FsbCgpKTtcbi8vICAgcmV0dXJuIHVzZXI7XG4vLyB9O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlVXNlciA9IGFzeW5jICh1c2VySW5mbykgPT4ge1xuICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XG4gIGF3YWl0IHVzZXJzLm1ldGhvZHNcbiAgICAuY3JlYXRlVXNlcihhY2NvdW50c1swXSwgdXNlckluZm8uY29kZW5hbWUsIHVzZXJJbmZvLnByb2Zlc3Npb24sIHVzZXJJbmZvLmRlc2NyaXB0aW9uKVxuICAgIC5zZW5kKHtcbiAgICAgIGZyb206IGFjY291bnRzWzBdXG4gICAgfSk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRVc2VycyA9IGFzeW5jIChwcm9mZXNzaW9uKSA9PiB7XG4gIGNvbnN0IHVzZXJzQ291bnQgPSBhd2FpdCB1c2Vycy5tZXRob2RzLnVzZXJzQ291bnQoKS5jYWxsKCk7XG4gIGNvbnN0IG1heFJlc3VsdHNDb3VudCA9IDU7XG4gIGxldCByZXN1bHRzID0gW107XG4gIGxldCB1c2VySWRzID0gW107XG5cbiAgY29uc3QgcHJvZk51bWJlckNvdW50ID0gYXdhaXQgdXNlcnMubWV0aG9kcy5wcm9mQ291bnQocHJvZmVzc2lvbikuY2FsbCgpO1xuXG4gIGxldCByZXN1bHRzUmVxQ291bnQ7XG5cbiAgaWYocHJvZk51bWJlckNvdW50KXtcbiAgICByZXN1bHRzUmVxQ291bnQgPSBwcm9mTnVtYmVyQ291bnQgPD0gbWF4UmVzdWx0c0NvdW50ID8gcHJvZk51bWJlckNvdW50IDogbWF4UmVzdWx0c0NvdW50O1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdHNSZXFDb3VudCA9IDA7XG4gIH1cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdHNSZXFDb3VudDsgaSsrKSB7XG4gICAgZ2V0VW5pcXVlVXNlcihyZXN1bHRzLCB1c2VySWRzLCB1c2Vyc0NvdW50LCBwcm9mZXNzaW9uKTtcbiAgfVxuXG4gIGNvbnNvbGUubG9nKGFsbFVzZXJzKTtcbiAgcmV0dXJuIGFsbFVzZXJzO1xufSJdLCJuYW1lcyI6WyJ1c2VycyIsIndlYjMiLCJnZXRVbmlxdWVVc2VyIiwiZ2V0QWNjb3VudCIsImFjY291bnRzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJnZXRVc2VyRGF0YSIsImFjY291bnQiLCJ1c2VyIiwibGVuZ3RoIiwibWV0aG9kcyIsImNhbGwiLCJnZXRVc2VyRnJvbUFsbFVzZXJzIiwiaW5kZXgiLCJhbGxVc2VycyIsImNyZWF0ZVVzZXIiLCJ1c2VySW5mbyIsImNvZGVuYW1lIiwicHJvZmVzc2lvbiIsImRlc2NyaXB0aW9uIiwic2VuZCIsImZyb20iLCJnZXRVc2VycyIsInVzZXJzQ291bnQiLCJtYXhSZXN1bHRzQ291bnQiLCJyZXN1bHRzIiwidXNlcklkcyIsInByb2ZOdW1iZXJDb3VudCIsInJlc3VsdHNSZXFDb3VudCIsImkiLCJwcm9mQ291bnQiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./helpers/users/users.js\n"));

/***/ })

});