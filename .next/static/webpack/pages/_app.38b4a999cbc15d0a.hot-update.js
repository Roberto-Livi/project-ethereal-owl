"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./helpers/proj-token/proj-token.js":
/*!******************************************!*\
  !*** ./helpers/proj-token/proj-token.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"approveTokenContract\": function() { return /* binding */ approveTokenContract; },\n/* harmony export */   \"getTokenBalance\": function() { return /* binding */ getTokenBalance; },\n/* harmony export */   \"getTotalSupply\": function() { return /* binding */ getTotalSupply; },\n/* harmony export */   \"transferTokens\": function() { return /* binding */ transferTokens; },\n/* harmony export */   \"userApprovedTokenContract\": function() { return /* binding */ userApprovedTokenContract; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var _ethereum_ponToken_ponToken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ethereum/ponToken/ponToken */ \"./ethereum/ponToken/ponToken.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers */ \"./helpers/proj-token/helpers.js\");\n\n\n\n\n\n\nvar approveTokenContract = function() {\n    var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function() {\n        var successfulResponse, account, amount, spenderAmount;\n        return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    successfulResponse = false;\n                    return [\n                        4,\n                        _ethereum_web3__WEBPACK_IMPORTED_MODULE_0__[\"default\"].eth.getAccounts()\n                    ];\n                case 1:\n                    account = _state.sent();\n                    amount = 10000000 * Math.pow(10, 18);\n                    console.log(amount);\n                    spenderAmount = _ethereum_web3__WEBPACK_IMPORTED_MODULE_0__[\"default\"].utils.toBN(amount);\n                    console.log(spenderAmount);\n                    // try {\n                    //   const account = await web3.eth.getAccounts();\n                    //   const amount = 10000000 * (10 ** 18);\n                    //   const spenderAmount = await web3.utils.toBN(amount);\n                    //   console.log(spenderAmount)\n                    //   await ponToken.methods.approveTokenContract(account[0], spenderAmount).send({\n                    //     from: account[0]\n                    //   });\n                    //   successfulResponse = true;\n                    // } catch(err) {\n                    //   console.log(\"Error: \", err.message);\n                    // }\n                    return [\n                        2,\n                        successfulResponse\n                    ];\n            }\n        });\n    });\n    return function approveTokenContract() {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar getTokenBalance = function() {\n    var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function() {\n        var balance, account, err;\n        return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    balance = 0;\n                    _state.label = 1;\n                case 1:\n                    _state.trys.push([\n                        1,\n                        4,\n                        ,\n                        5\n                    ]);\n                    return [\n                        4,\n                        _ethereum_web3__WEBPACK_IMPORTED_MODULE_0__[\"default\"].eth.getAccounts()\n                    ];\n                case 2:\n                    account = _state.sent();\n                    return [\n                        4,\n                        _ethereum_ponToken_ponToken__WEBPACK_IMPORTED_MODULE_1__[\"default\"].methods.balanceOf(account[0]).call()\n                    ];\n                case 3:\n                    balance = _state.sent();\n                    return [\n                        3,\n                        5\n                    ];\n                case 4:\n                    err = _state.sent();\n                    console.log(\"Error: \", err.message);\n                    return [\n                        3,\n                        5\n                    ];\n                case 5:\n                    return [\n                        2,\n                        balance\n                    ];\n            }\n        });\n    });\n    return function getTokenBalance() {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar getTotalSupply = function() {\n    var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function() {\n        var supply;\n        return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    return [\n                        4,\n                        _ethereum_ponToken_ponToken__WEBPACK_IMPORTED_MODULE_1__[\"default\"].methods.totalSupply().call()\n                    ];\n                case 1:\n                    supply = _state.sent();\n                    return [\n                        2,\n                        supply\n                    ];\n            }\n        });\n    });\n    return function getTotalSupply() {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar transferTokens = function() {\n    var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function(to, amount) {\n        var successfulResponse, amountWithDecimals, account, convertedAmount, err;\n        return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    successfulResponse = false;\n                    _state.label = 1;\n                case 1:\n                    _state.trys.push([\n                        1,\n                        4,\n                        ,\n                        5\n                    ]);\n                    amountWithDecimals = amount * Math.pow(10, 18);\n                    return [\n                        4,\n                        _ethereum_web3__WEBPACK_IMPORTED_MODULE_0__[\"default\"].eth.getAccounts()\n                    ];\n                case 2:\n                    account = _state.sent();\n                    convertedAmount = _ethereum_web3__WEBPACK_IMPORTED_MODULE_0__[\"default\"].utils.toBN(amountWithDecimals);\n                    return [\n                        4,\n                        _ethereum_ponToken_ponToken__WEBPACK_IMPORTED_MODULE_1__[\"default\"].methods.transfer(to, convertedAmount).send({\n                            from: account[0]\n                        })\n                    ];\n                case 3:\n                    _state.sent();\n                    successfulResponse = true;\n                    return [\n                        3,\n                        5\n                    ];\n                case 4:\n                    err = _state.sent();\n                    console.log(\"Error: \", err.message);\n                    return [\n                        3,\n                        5\n                    ];\n                case 5:\n                    return [\n                        2,\n                        successfulResponse\n                    ];\n            }\n        });\n    });\n    return function transferTokens(to, amount) {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar userApprovedTokenContract = function() {\n    var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function(address) {\n        var approved, err;\n        return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    approved = false;\n                    _state.label = 1;\n                case 1:\n                    _state.trys.push([\n                        1,\n                        3,\n                        ,\n                        4\n                    ]);\n                    return [\n                        4,\n                        _ethereum_ponToken_ponToken__WEBPACK_IMPORTED_MODULE_1__[\"default\"].methods.contractApproved(address).call()\n                    ];\n                case 2:\n                    approved = _state.sent();\n                    return [\n                        3,\n                        4\n                    ];\n                case 3:\n                    err = _state.sent();\n                    console.log(\"Error: \", err.message);\n                    return [\n                        3,\n                        4\n                    ];\n                case 4:\n                    return [\n                        2,\n                        approved\n                    ];\n            }\n        });\n    });\n    return function userApprovedTokenContract(address) {\n        return _ref.apply(this, arguments);\n    };\n}();\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7b0JBQ3BCWSxHQUFHO29CQUNUTixPQUFPLENBQUNDLEdBQUcsQ0FBQyxTQUFTLEVBQUVLLEdBQUcsQ0FBQ0ksT0FBTyxDQUFDLENBQUM7Ozs7OztvQkFHdEM7O3dCQUFPaEIsa0JBQWtCO3NCQUFDOzs7SUFDNUIsQ0FBQztvQkFoQllvQixjQUFjLENBQVNDLEVBQUUsRUFBRW5CLE1BQU07OztHQWdCN0M7QUFFTSxJQUFNeUIseUJBQXlCO2VBQUcsNkZBQU1DLE9BQU8sRUFBSztZQUNyREMsUUFBUSxFQUlKakIsR0FBRzs7OztvQkFKUGlCLFFBQVEsR0FBRyxLQUFLLENBQUM7Ozs7Ozs7OztvQkFHUjs7d0JBQU1qQyw0RkFBaUMsQ0FBQ2dDLE9BQU8sQ0FBQyxDQUFDYixJQUFJLEVBQUU7c0JBQUE7O29CQUFsRWMsUUFBUSxHQUFHLGFBQXVELENBQUM7Ozs7OztvQkFDN0RqQixHQUFHO29CQUNUTixPQUFPLENBQUNDLEdBQUcsQ0FBQyxTQUFTLEVBQUVLLEdBQUcsQ0FBQ0ksT0FBTyxDQUFDLENBQUM7Ozs7OztvQkFHdEM7O3dCQUFPYSxRQUFRO3NCQUFDOzs7SUFDbEIsQ0FBQztvQkFWWUYseUJBQXlCLENBQVNDLE9BQU87OztHQVVyRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9oZWxwZXJzL3Byb2otdG9rZW4vcHJvai10b2tlbi5qcz9jMWU0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3ZWIzIGZyb20gXCIuLi8uLi9ldGhlcmV1bS93ZWIzXCI7XG5pbXBvcnQgcG9uVG9rZW4gZnJvbSBcIi4uLy4uL2V0aGVyZXVtL3BvblRva2VuL3BvblRva2VuXCI7XG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgeyBjb252ZXJ0VG9CaWdOdW1iZXIgfSBmcm9tIFwiLi9oZWxwZXJzXCI7XG5cbmV4cG9ydCBjb25zdCBhcHByb3ZlVG9rZW5Db250cmFjdCA9IGFzeW5jKCkgPT4ge1xuICBsZXQgc3VjY2Vzc2Z1bFJlc3BvbnNlID0gZmFsc2U7XG5cbiAgY29uc3QgYWNjb3VudCA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XG4gIGNvbnN0IGFtb3VudCA9ICgxMDAwMDAwMCAqICgxMCAqKiAxOCkpO1xuICBjb25zb2xlLmxvZyhhbW91bnQpXG4gIGNvbnN0IHNwZW5kZXJBbW91bnQgPSB3ZWIzLnV0aWxzLnRvQk4oYW1vdW50KTtcbiAgY29uc29sZS5sb2coc3BlbmRlckFtb3VudCk7XG5cbiAgLy8gdHJ5IHtcbiAgLy8gICBjb25zdCBhY2NvdW50ID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcbiAgLy8gICBjb25zdCBhbW91bnQgPSAxMDAwMDAwMCAqICgxMCAqKiAxOCk7XG4gIC8vICAgY29uc3Qgc3BlbmRlckFtb3VudCA9IGF3YWl0IHdlYjMudXRpbHMudG9CTihhbW91bnQpO1xuICAvLyAgIGNvbnNvbGUubG9nKHNwZW5kZXJBbW91bnQpXG4gIC8vICAgYXdhaXQgcG9uVG9rZW4ubWV0aG9kcy5hcHByb3ZlVG9rZW5Db250cmFjdChhY2NvdW50WzBdLCBzcGVuZGVyQW1vdW50KS5zZW5kKHtcbiAgLy8gICAgIGZyb206IGFjY291bnRbMF1cbiAgLy8gICB9KTtcbiAgLy8gICBzdWNjZXNzZnVsUmVzcG9uc2UgPSB0cnVlO1xuICAvLyB9IGNhdGNoKGVycikge1xuICAvLyAgIGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiLCBlcnIubWVzc2FnZSk7XG4gIC8vIH1cblxuICByZXR1cm4gc3VjY2Vzc2Z1bFJlc3BvbnNlO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0VG9rZW5CYWxhbmNlID0gYXN5bmMoKSA9PiB7XG4gIGxldCBiYWxhbmNlID0gMDtcblxuICB0cnkge1xuICAgIGNvbnN0IGFjY291bnQgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuICAgIGJhbGFuY2UgPSBhd2FpdCBwb25Ub2tlbi5tZXRob2RzLmJhbGFuY2VPZihhY2NvdW50WzBdKS5jYWxsKCk7XG4gIH0gY2F0Y2goZXJyKSB7XG4gICAgY29uc29sZS5sb2coXCJFcnJvcjogXCIsIGVyci5tZXNzYWdlKTtcbiAgfVxuXG4gIHJldHVybiBiYWxhbmNlO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0VG90YWxTdXBwbHkgPSBhc3luYygpID0+IHtcbiAgY29uc3Qgc3VwcGx5ID0gYXdhaXQgcG9uVG9rZW4ubWV0aG9kcy50b3RhbFN1cHBseSgpLmNhbGwoKTtcbiAgcmV0dXJuIHN1cHBseTtcbn1cblxuZXhwb3J0IGNvbnN0IHRyYW5zZmVyVG9rZW5zID0gYXN5bmModG8sIGFtb3VudCkgPT4ge1xuICBsZXQgc3VjY2Vzc2Z1bFJlc3BvbnNlID0gZmFsc2U7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBhbW91bnRXaXRoRGVjaW1hbHMgPSBhbW91bnQgKiAoMTAgKiogMTgpO1xuICAgIGNvbnN0IGFjY291bnQgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuICAgIGNvbnN0IGNvbnZlcnRlZEFtb3VudCA9IHdlYjMudXRpbHMudG9CTihhbW91bnRXaXRoRGVjaW1hbHMpO1xuICAgIGF3YWl0IHBvblRva2VuLm1ldGhvZHMudHJhbnNmZXIodG8sIGNvbnZlcnRlZEFtb3VudCkuc2VuZCh7XG4gICAgICBmcm9tOiBhY2NvdW50WzBdXG4gICAgfSk7XG4gICAgc3VjY2Vzc2Z1bFJlc3BvbnNlID0gdHJ1ZTtcbiAgfSBjYXRjaChlcnIpIHtcbiAgICBjb25zb2xlLmxvZyhcIkVycm9yOiBcIiwgZXJyLm1lc3NhZ2UpO1xuICB9XG5cbiAgcmV0dXJuIHN1Y2Nlc3NmdWxSZXNwb25zZTtcbn1cblxuZXhwb3J0IGNvbnN0IHVzZXJBcHByb3ZlZFRva2VuQ29udHJhY3QgPSBhc3luYyhhZGRyZXNzKSA9PiB7XG4gIGxldCBhcHByb3ZlZCA9IGZhbHNlO1xuXG4gIHRyeSB7XG4gICAgYXBwcm92ZWQgPSBhd2FpdCBwb25Ub2tlbi5tZXRob2RzLmNvbnRyYWN0QXBwcm92ZWQoYWRkcmVzcykuY2FsbCgpO1xuICB9IGNhdGNoKGVycikge1xuICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiLCBlcnIubWVzc2FnZSk7XG4gIH1cblxuICByZXR1cm4gYXBwcm92ZWQ7XG59Il0sIm5hbWVzIjpbIndlYjMiLCJwb25Ub2tlbiIsIl8iLCJjb252ZXJ0VG9CaWdOdW1iZXIiLCJhcHByb3ZlVG9rZW5Db250cmFjdCIsInN1Y2Nlc3NmdWxSZXNwb25zZSIsImFjY291bnQiLCJhbW91bnQiLCJzcGVuZGVyQW1vdW50IiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJjb25zb2xlIiwibG9nIiwidXRpbHMiLCJ0b0JOIiwiZ2V0VG9rZW5CYWxhbmNlIiwiYmFsYW5jZSIsImVyciIsIm1ldGhvZHMiLCJiYWxhbmNlT2YiLCJjYWxsIiwibWVzc2FnZSIsImdldFRvdGFsU3VwcGx5Iiwic3VwcGx5IiwidG90YWxTdXBwbHkiLCJ0cmFuc2ZlclRva2VucyIsInRvIiwiYW1vdW50V2l0aERlY2ltYWxzIiwiY29udmVydGVkQW1vdW50IiwidHJhbnNmZXIiLCJzZW5kIiwiZnJvbSIsInVzZXJBcHByb3ZlZFRva2VuQ29udHJhY3QiLCJhZGRyZXNzIiwiYXBwcm92ZWQiLCJjb250cmFjdEFwcHJvdmVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./helpers/proj-token/proj-token.js\n"));

/***/ })

});