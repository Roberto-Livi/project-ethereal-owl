"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/profile",{

/***/ "./components/profile/ProfileCard.js":
/*!*******************************************!*\
  !*** ./components/profile/ProfileCard.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _helpers_users_users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/users/users */ \"./helpers/users/users.js\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar ProfileCard = function(param) {\n    var profileCardAddress = param.profileCardAddress;\n    _s();\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), userData = ref[0], setUserData = ref[1];\n    var walletAddress = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function(state) {\n        return state.manageData.walletAddress;\n    });\n    var userProfile = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function(state) {\n        return state.manageData.userProfileCard;\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(/*#__PURE__*/ (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function() {\n        return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    return [\n                        4,\n                        setUserData((0,_helpers_users_users__WEBPACK_IMPORTED_MODULE_3__.getUserData)(profileCardAddress))\n                    ];\n                case 1:\n                    _state.sent();\n                    return [\n                        2\n                    ];\n            }\n        });\n    }), []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Profile Card\"\n            }, void 0, false, {\n                fileName: \"/Users/robertolivi/Ethereal-Owl/project-ethereal-owl/components/profile/ProfileCard.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: userData.codename\n                    }, void 0, false, {\n                        fileName: \"/Users/robertolivi/Ethereal-Owl/project-ethereal-owl/components/profile/ProfileCard.js\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: userData.userAddress\n                    }, void 0, false, {\n                        fileName: \"/Users/robertolivi/Ethereal-Owl/project-ethereal-owl/components/profile/ProfileCard.js\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: userData.profession\n                    }, void 0, false, {\n                        fileName: \"/Users/robertolivi/Ethereal-Owl/project-ethereal-owl/components/profile/ProfileCard.js\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: userData.description\n                    }, void 0, false, {\n                        fileName: \"/Users/robertolivi/Ethereal-Owl/project-ethereal-owl/components/profile/ProfileCard.js\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/robertolivi/Ethereal-Owl/project-ethereal-owl/components/profile/ProfileCard.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/robertolivi/Ethereal-Owl/project-ethereal-owl/components/profile/ProfileCard.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, _this);\n};\n_s(ProfileCard, \"gamQjHD7rnA00Wuv0gAxJODxuSo=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = ProfileCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProfileCard);\nvar _c;\n$RefreshReg$(_c, \"ProfileCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb2ZpbGUvUHJvZmlsZUNhcmQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7O0FBQW1EO0FBQ0k7QUFDQztBQUd4RCxJQUFNTSxXQUFXLEdBQUcsZ0JBQTBCO1FBQXhCQyxrQkFBa0IsU0FBbEJBLGtCQUFrQjs7SUFFdEMsSUFBTUMsUUFBUSxHQUFHSix3REFBVyxFQUFFO0lBRTlCLElBQWdDSCxHQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxDQUFDLEVBQXZDUSxRQUFRLEdBQWlCUixHQUFjLEdBQS9CLEVBQUVTLFdBQVcsR0FBSVQsR0FBYyxHQUFsQjtJQUU1QixJQUFNVSxhQUFhLEdBQUdSLHdEQUFXLENBQUMsU0FBQ1MsS0FBSztlQUFLQSxLQUFLLENBQUNDLFVBQVUsQ0FBQ0YsYUFBYTtLQUFBLENBQUM7SUFDNUUsSUFBTUcsV0FBVyxHQUFHWCx3REFBVyxDQUFDLFNBQUNTLEtBQUs7ZUFBS0EsS0FBSyxDQUFDQyxVQUFVLENBQUNFLGVBQWU7S0FBQSxDQUFDO0lBRTVFYixnREFBUyxlQUFDLCtGQUFXOzs7O29CQUNuQjs7d0JBQU1RLFdBQVcsQ0FBQ0wsaUVBQVcsQ0FBQ0Usa0JBQWtCLENBQUMsQ0FBQztzQkFBQTs7b0JBQWxELGFBQWtELENBQUM7Ozs7OztJQUNyRCxDQUFDLEdBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxxQkFDRSw4REFBQ1MsS0FBRzs7MEJBQ0YsOERBQUNDLElBQUU7MEJBQUMsY0FBWTs7Ozs7cUJBQUs7MEJBQ3JCLDhEQUFDQyxJQUFFOztrQ0FDRCw4REFBQ0MsSUFBRTtrQ0FBRVYsUUFBUSxDQUFDVyxRQUFROzs7Ozs2QkFBTTtrQ0FDNUIsOERBQUNELElBQUU7a0NBQUVWLFFBQVEsQ0FBQ1ksV0FBVzs7Ozs7NkJBQU07a0NBQy9CLDhEQUFDRixJQUFFO2tDQUFFVixRQUFRLENBQUNhLFVBQVU7Ozs7OzZCQUFNO2tDQUM5Qiw4REFBQ0gsSUFBRTtrQ0FBRVYsUUFBUSxDQUFDYyxXQUFXOzs7Ozs2QkFBTTs7Ozs7O3FCQUM1Qjs7Ozs7O2FBQ0QsQ0FDTjtBQUNKLENBQUM7R0F4QktqQixXQUFXOztRQUVFRixvREFBVztRQUlORCxvREFBVztRQUNiQSxvREFBVzs7O0FBUDNCRyxLQUFBQSxXQUFXO0FBMEJqQiwrREFBZUEsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcHJvZmlsZS9Qcm9maWxlQ2FyZC5qcz9kZDJhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IGdldFVzZXJEYXRhIH0gZnJvbSBcIi4uLy4uL2hlbHBlcnMvdXNlcnMvdXNlcnNcIjtcblxuXG5jb25zdCBQcm9maWxlQ2FyZCA9ICh7cHJvZmlsZUNhcmRBZGRyZXNzfSkgPT4ge1xuXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuICBjb25zdCBbdXNlckRhdGEsIHNldFVzZXJEYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnN0IHdhbGxldEFkZHJlc3MgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLm1hbmFnZURhdGEud2FsbGV0QWRkcmVzcyk7XG4gIGNvbnN0IHVzZXJQcm9maWxlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5tYW5hZ2VEYXRhLnVzZXJQcm9maWxlQ2FyZCk7XG5cbiAgdXNlRWZmZWN0KGFzeW5jKCkgPT4ge1xuICAgIGF3YWl0IHNldFVzZXJEYXRhKGdldFVzZXJEYXRhKHByb2ZpbGVDYXJkQWRkcmVzcykpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPlByb2ZpbGUgQ2FyZDwvaDE+XG4gICAgICA8dWw+XG4gICAgICAgIDxsaT57dXNlckRhdGEuY29kZW5hbWV9PC9saT5cbiAgICAgICAgPGxpPnt1c2VyRGF0YS51c2VyQWRkcmVzc308L2xpPlxuICAgICAgICA8bGk+e3VzZXJEYXRhLnByb2Zlc3Npb259PC9saT5cbiAgICAgICAgPGxpPnt1c2VyRGF0YS5kZXNjcmlwdGlvbn08L2xpPlxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZUNhcmQ7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VTZWxlY3RvciIsInVzZURpc3BhdGNoIiwiZ2V0VXNlckRhdGEiLCJQcm9maWxlQ2FyZCIsInByb2ZpbGVDYXJkQWRkcmVzcyIsImRpc3BhdGNoIiwidXNlckRhdGEiLCJzZXRVc2VyRGF0YSIsIndhbGxldEFkZHJlc3MiLCJzdGF0ZSIsIm1hbmFnZURhdGEiLCJ1c2VyUHJvZmlsZSIsInVzZXJQcm9maWxlQ2FyZCIsImRpdiIsImgxIiwidWwiLCJsaSIsImNvZGVuYW1lIiwidXNlckFkZHJlc3MiLCJwcm9mZXNzaW9uIiwiZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/profile/ProfileCard.js\n"));

/***/ })

});