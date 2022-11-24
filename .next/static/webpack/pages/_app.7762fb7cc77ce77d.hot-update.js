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

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/store */ \"./store/store.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/actions */ \"./store/actions/index.js\");\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar MyApp = function(param) {\n    var Component = param.Component, pageProps = param.pageProps;\n    _s();\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    var walletConnected = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function(state) {\n        return state.manageData.connected;\n    });\n    var walletAddress = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function(state) {\n        return state.manageData.walletAddress;\n    });\n    var connect = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(function() {\n            var account;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        return [\n                            4,\n                            _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__[\"default\"].eth.getAccounts()\n                        ];\n                    case 1:\n                        account = _state.sent();\n                        if (account.length) {\n                            dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_5__.connectWallet)(account[0]));\n                        } else {\n                            dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_5__.disconnect)());\n                        }\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function connect() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        console.log(walletConnected);\n        if (window.ethereum) {\n            window.ethereum.on(\"chainChanged\", function() {\n                window.location.reload();\n            });\n            window.ethereum.on(\"accountsChanged\", function() {\n                window.location.reload();\n            });\n            connect();\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {\n            store: _store_store__WEBPACK_IMPORTED_MODULE_1__.store,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({}, pageProps), void 0, false, {\n                fileName: \"/Users/robertolivi/Ethereal-Owl/project-ethereal-owl/pages/_app.js\",\n                lineNumber: 39,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/robertolivi/Ethereal-Owl/project-ethereal-owl/pages/_app.js\",\n            lineNumber: 38,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_s(MyApp, \"1u/Qb89GGSoYPBnow8c0QrILsLw=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c1 = _store_store__WEBPACK_IMPORTED_MODULE_1__.wrapper.withRedux(MyApp));\nvar _c, _c1;\n$RefreshReg$(_c, \"MyApp\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7QUFBOEM7QUFDbUI7QUFDL0I7QUFDRTtBQUN5QjtBQUU3RCxJQUFNUyxLQUFLLEdBQUcsZ0JBQThCO1FBQTNCQyxTQUFTLFNBQVRBLFNBQVMsRUFBRUMsU0FBUyxTQUFUQSxTQUFTOztJQUVuQyxJQUFNQyxRQUFRLEdBQUdULHdEQUFXLEVBQUU7SUFFOUIsSUFBTVUsZUFBZSxHQUFHVCx3REFBVyxDQUFDLFNBQUNVLEtBQUs7ZUFBS0EsS0FBSyxDQUFDQyxVQUFVLENBQUNDLFNBQVM7S0FBQSxDQUFDO0lBQzFFLElBQU1DLGFBQWEsR0FBR2Isd0RBQVcsQ0FBQyxTQUFDVSxLQUFLO2VBQUtBLEtBQUssQ0FBQ0MsVUFBVSxDQUFDRSxhQUFhO0tBQUEsQ0FBQztJQUU1RSxJQUFNQyxPQUFPO21CQUFHLCtGQUFZO2dCQUNwQkMsT0FBTzs7Ozt3QkFBRzs7NEJBQU1iLHNFQUFvQixFQUFFOzBCQUFBOzt3QkFBdENhLE9BQU8sR0FBRyxhQUE0Qjt3QkFDNUMsSUFBR0EsT0FBTyxDQUFDRyxNQUFNLEVBQUM7NEJBQ2hCVixRQUFRLENBQUNMLDZEQUFhLENBQUNZLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3RDLE9BQU87NEJBQ0xQLFFBQVEsQ0FBQ0osMERBQVUsRUFBRSxDQUFDLENBQUM7d0JBQ3pCLENBQUM7Ozs7OztRQUNILENBQUM7d0JBUEtVLE9BQU87OztPQU9aO0lBRURiLGdEQUFTLENBQUMsV0FBTTtRQUNka0IsT0FBTyxDQUFDQyxHQUFHLENBQUNYLGVBQWUsQ0FBQztRQUM1QixJQUFHWSxNQUFNLENBQUNDLFFBQVEsRUFBRTtZQUNsQkQsTUFBTSxDQUFDQyxRQUFRLENBQUNDLEVBQUUsQ0FBQyxjQUFjLEVBQUUsV0FBTTtnQkFDdkNGLE1BQU0sQ0FBQ0csUUFBUSxDQUFDQyxNQUFNLEVBQUUsQ0FBQztZQUMzQixDQUFDLENBQUM7WUFDRkosTUFBTSxDQUFDQyxRQUFRLENBQUNDLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxXQUFNO2dCQUMxQ0YsTUFBTSxDQUFDRyxRQUFRLENBQUNDLE1BQU0sRUFBRSxDQUFDO1lBQzNCLENBQUMsQ0FBQztZQUNGWCxPQUFPLEVBQUUsQ0FBQztRQUNaLENBQUM7SUFDSCxDQUFDLENBQUM7SUFFRixxQkFDRTtrQkFDRSw0RUFBQ2hCLGlEQUFRO1lBQUNELEtBQUssRUFBRUEsK0NBQUs7c0JBQ3BCLDRFQUFDUyxTQUFTLHFGQUFLQyxTQUFTOzs7O3FCQUFJOzs7OztpQkFDbkI7cUJBQ1YsQ0FDSDtBQUNKLENBQUM7R0FwQ0tGLEtBQUs7O1FBRVFOLG9EQUFXO1FBRUpDLG9EQUFXO1FBQ2JBLG9EQUFXOzs7QUFMN0JLLEtBQUFBLEtBQUs7QUFzQ1gsK0RBQWVULE1BQUFBLDJEQUFpQixDQUFDUyxLQUFLLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt3cmFwcGVyLCBzdG9yZX0gZnJvbSBcIi4uL3N0b3JlL3N0b3JlXCI7XG5pbXBvcnQgeyBQcm92aWRlciwgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB3ZWIzIGZyb20gXCIuLi9ldGhlcmV1bS93ZWIzXCI7XG5pbXBvcnQgeyBjb25uZWN0V2FsbGV0LCBkaXNjb25uZWN0IH0gZnJvbSBcIi4uL3N0b3JlL2FjdGlvbnNcIjtcblxuY29uc3QgTXlBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XG5cbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuXG4gIGNvbnN0IHdhbGxldENvbm5lY3RlZCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUubWFuYWdlRGF0YS5jb25uZWN0ZWQpO1xuICBjb25zdCB3YWxsZXRBZGRyZXNzID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5tYW5hZ2VEYXRhLndhbGxldEFkZHJlc3MpO1xuXG4gIGNvbnN0IGNvbm5lY3QgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgYWNjb3VudCA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XG4gICAgaWYoYWNjb3VudC5sZW5ndGgpe1xuICAgICAgZGlzcGF0Y2goY29ubmVjdFdhbGxldChhY2NvdW50WzBdKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRpc3BhdGNoKGRpc2Nvbm5lY3QoKSk7XG4gICAgfVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyh3YWxsZXRDb25uZWN0ZWQpXG4gICAgaWYod2luZG93LmV0aGVyZXVtKSB7XG4gICAgICB3aW5kb3cuZXRoZXJldW0ub24oJ2NoYWluQ2hhbmdlZCcsICgpID0+IHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgfSlcbiAgICAgIHdpbmRvdy5ldGhlcmV1bS5vbignYWNjb3VudHNDaGFuZ2VkJywgKCkgPT4ge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICB9KVxuICAgICAgY29ubmVjdCgpO1xuICAgIH1cbiAgfSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9Qcm92aWRlcj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoTXlBcHApO1xuIl0sIm5hbWVzIjpbIndyYXBwZXIiLCJzdG9yZSIsIlByb3ZpZGVyIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInVzZUVmZmVjdCIsIndlYjMiLCJjb25uZWN0V2FsbGV0IiwiZGlzY29ubmVjdCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiZGlzcGF0Y2giLCJ3YWxsZXRDb25uZWN0ZWQiLCJzdGF0ZSIsIm1hbmFnZURhdGEiLCJjb25uZWN0ZWQiLCJ3YWxsZXRBZGRyZXNzIiwiY29ubmVjdCIsImFjY291bnQiLCJldGgiLCJnZXRBY2NvdW50cyIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJ3aW5kb3ciLCJldGhlcmV1bSIsIm9uIiwibG9jYXRpb24iLCJyZWxvYWQiLCJ3aXRoUmVkdXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});