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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _helpers_users_users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/users/users */ \"./helpers/users/users.js\");\n\n\n\nvar _s = $RefreshSig$();\n\n\n\nvar _this = undefined;\nvar ProfileCard = function() {\n    var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function(param) {\n        var profileCardAddress, dispatch, walletAddress, userProfile, userData;\n        return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    profileCardAddress = param.profileCardAddress;\n                    _s();\n                    dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n                    walletAddress = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function(state) {\n                        return state.manageData.walletAddress;\n                    });\n                    userProfile = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function(state) {\n                        return state.manageData.userProfileCard;\n                    });\n                    return [\n                        4,\n                        setUserData((0,_helpers_users_users__WEBPACK_IMPORTED_MODULE_3__.getUserData)(profileCardAddress || walletAddress))\n                    ];\n                case 1:\n                    userData = _state.sent();\n                    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n                        console.log(userData);\n                    }, []);\n                    return [\n                        2,\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    children: \"Profile Card\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/robertolivi/Ethereal-Owl/project-ethereal-owl/components/profile/ProfileCard.js\",\n                                    lineNumber: 23,\n                                    columnNumber: 7\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {}, void 0, false, {\n                                    fileName: \"/Users/robertolivi/Ethereal-Owl/project-ethereal-owl/components/profile/ProfileCard.js\",\n                                    lineNumber: 24,\n                                    columnNumber: 7\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/robertolivi/Ethereal-Owl/project-ethereal-owl/components/profile/ProfileCard.js\",\n                            lineNumber: 22,\n                            columnNumber: 5\n                        }, _this)\n                    ];\n            }\n        });\n    });\n    return function ProfileCard(_) {\n        return _ref.apply(this, arguments);\n    };\n}();\n_s(ProfileCard, \"d77uubUBDXN0UBb3OT/QKMjzbPI=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = ProfileCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProfileCard);\nvar _c;\n$RefreshReg$(_c, \"ProfileCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb2ZpbGUvUHJvZmlsZUNhcmQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7QUFBbUQ7QUFDSTtBQUNDOztBQUd4RCxJQUFNTSxXQUFXO2VBQUcsb0dBQStCO1lBQXhCQyxrQkFBa0IsRUFFckNDLFFBQVEsRUFFUkMsYUFBYSxFQUNiQyxXQUFXLEVBRVhDLFFBQVE7Ozs7b0JBUFdKLGtCQUFrQixTQUFsQkEsa0JBQWtCOztvQkFFckNDLFFBQVEsR0FBR0osd0RBQVcsRUFBRSxDQUFDO29CQUV6QkssYUFBYSxHQUFHTix3REFBVyxDQUFDLFNBQUNTLEtBQUs7K0JBQUtBLEtBQUssQ0FBQ0MsVUFBVSxDQUFDSixhQUFhO3FCQUFBLENBQUMsQ0FBQztvQkFDdkVDLFdBQVcsR0FBR1Asd0RBQVcsQ0FBQyxTQUFDUyxLQUFLOytCQUFLQSxLQUFLLENBQUNDLFVBQVUsQ0FBQ0MsZUFBZTtxQkFBQSxDQUFDLENBQUM7b0JBRTVEOzt3QkFBTUMsV0FBVyxDQUNoQ1YsaUVBQVcsQ0FBQ0Usa0JBQWtCLElBQUlFLGFBQWEsQ0FBQyxDQUNqRDtzQkFBQTs7b0JBRktFLFFBQVEsR0FBRyxhQUVoQjtvQkFFRFQsZ0RBQVMsQ0FBQyxXQUFNO3dCQUNkYyxPQUFPLENBQUNDLEdBQUcsQ0FBQ04sUUFBUSxDQUFDO29CQUN2QixDQUFDLEtBQUs7b0JBRU47O3NDQUNFLDhEQUFDTyxLQUFHOzs4Q0FDRiw4REFBQ0MsSUFBRTs4Q0FBQyxjQUFZOzs7Ozt5Q0FBSzs4Q0FDckIsOERBQUNDLElBQUU7Ozs7eUNBS0U7Ozs7OztpQ0FDRDtzQkFDTjs7O0lBQ0osQ0FBQztvQkExQktkLFdBQVc7OztHQTBCaEI7R0ExQktBLFdBQVc7O1FBRUVGLG9EQUFXO1FBRU5ELG9EQUFXO1FBQ2JBLG9EQUFXOzs7QUFMM0JHLEtBQUFBLFdBQVc7QUE0QmpCLCtEQUFlQSxXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9maWxlL1Byb2ZpbGVDYXJkLmpzP2RkMmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgZ2V0VXNlckRhdGEgfSBmcm9tIFwiLi4vLi4vaGVscGVycy91c2Vycy91c2Vyc1wiO1xuXG5cbmNvbnN0IFByb2ZpbGVDYXJkID0gYXN5bmMoe3Byb2ZpbGVDYXJkQWRkcmVzc30pID0+IHtcblxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgY29uc3Qgd2FsbGV0QWRkcmVzcyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUubWFuYWdlRGF0YS53YWxsZXRBZGRyZXNzKTtcbiAgY29uc3QgdXNlclByb2ZpbGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLm1hbmFnZURhdGEudXNlclByb2ZpbGVDYXJkKTtcblxuICBjb25zdCB1c2VyRGF0YSA9IGF3YWl0IHNldFVzZXJEYXRhKFxuICAgIGdldFVzZXJEYXRhKHByb2ZpbGVDYXJkQWRkcmVzcyB8fCB3YWxsZXRBZGRyZXNzKVxuICApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2codXNlckRhdGEpXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5Qcm9maWxlIENhcmQ8L2gxPlxuICAgICAgPHVsPlxuICAgICAgICB7LyogPGxpPnt1c2VyRGF0YS5jb2RlbmFtZX08L2xpPlxuICAgICAgICA8bGk+e3VzZXJEYXRhLnVzZXJBZGRyZXNzfTwvbGk+XG4gICAgICAgIDxsaT57dXNlckRhdGEucHJvZmVzc2lvbn08L2xpPlxuICAgICAgICA8bGk+e3VzZXJEYXRhLmRlc2NyaXB0aW9ufTwvbGk+ICovfVxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZUNhcmQ7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VTZWxlY3RvciIsInVzZURpc3BhdGNoIiwiZ2V0VXNlckRhdGEiLCJQcm9maWxlQ2FyZCIsInByb2ZpbGVDYXJkQWRkcmVzcyIsImRpc3BhdGNoIiwid2FsbGV0QWRkcmVzcyIsInVzZXJQcm9maWxlIiwidXNlckRhdGEiLCJzdGF0ZSIsIm1hbmFnZURhdGEiLCJ1c2VyUHJvZmlsZUNhcmQiLCJzZXRVc2VyRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJoMSIsInVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/profile/ProfileCard.js\n"));

/***/ })

});