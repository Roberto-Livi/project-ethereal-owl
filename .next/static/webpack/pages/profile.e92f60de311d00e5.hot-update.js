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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar ProfileCard = function(param) {\n    var profileCardAddress = param.profileCardAddress;\n    _s();\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    var walletAddress = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function(state) {\n        return state.manageData.walletAddress;\n    });\n    var userProfile = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function(state) {\n        return state.manageData.userProfileCard;\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        dispatch(updateUserProfileCard(profileCardAddress || walletAddress));\n    }, [\n        dispatch,\n        profileCardAddress\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Profile Card\"\n            }, void 0, false, {\n                fileName: \"/Users/robertolivi/Ethereal-Owl/project-ethereal-owl/components/profile/ProfileCard.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: userProfile.codename\n                    }, void 0, false, {\n                        fileName: \"/Users/robertolivi/Ethereal-Owl/project-ethereal-owl/components/profile/ProfileCard.js\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: userProfile.userAddress\n                    }, void 0, false, {\n                        fileName: \"/Users/robertolivi/Ethereal-Owl/project-ethereal-owl/components/profile/ProfileCard.js\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: userProfile.profession\n                    }, void 0, false, {\n                        fileName: \"/Users/robertolivi/Ethereal-Owl/project-ethereal-owl/components/profile/ProfileCard.js\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: userProfile.description\n                    }, void 0, false, {\n                        fileName: \"/Users/robertolivi/Ethereal-Owl/project-ethereal-owl/components/profile/ProfileCard.js\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/robertolivi/Ethereal-Owl/project-ethereal-owl/components/profile/ProfileCard.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/robertolivi/Ethereal-Owl/project-ethereal-owl/components/profile/ProfileCard.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, _this);\n};\n_s(ProfileCard, \"d77uubUBDXN0UBb3OT/QKMjzbPI=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = ProfileCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProfileCard);\nvar _c;\n$RefreshReg$(_c, \"ProfileCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb2ZpbGUvUHJvZmlsZUNhcmQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7OztBQUF5QztBQUNjO0FBR3ZELElBQU1JLFdBQVcsR0FBRyxnQkFBMEI7UUFBeEJDLGtCQUFrQixTQUFsQkEsa0JBQWtCOztJQUV0QyxJQUFNQyxRQUFRLEdBQUdILHdEQUFXLEVBQUU7SUFFOUIsSUFBTUksYUFBYSxHQUFHTCx3REFBVyxDQUFDLFNBQUNNLEtBQUs7ZUFBS0EsS0FBSyxDQUFDQyxVQUFVLENBQUNGLGFBQWE7S0FBQSxDQUFDO0lBQzVFLElBQU1HLFdBQVcsR0FBR1Isd0RBQVcsQ0FBQyxTQUFDTSxLQUFLO2VBQUtBLEtBQUssQ0FBQ0MsVUFBVSxDQUFDRSxlQUFlO0tBQUEsQ0FBQztJQUU1RVYsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2RLLFFBQVEsQ0FBQ00scUJBQXFCLENBQUNQLGtCQUFrQixJQUFJRSxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQ3ZFLENBQUMsRUFBRTtRQUFDRCxRQUFRO1FBQUVELGtCQUFrQjtLQUFDLENBQUMsQ0FBQztJQUVuQyxxQkFDRSw4REFBQ1EsS0FBRzs7MEJBQ0YsOERBQUNDLElBQUU7MEJBQUMsY0FBWTs7Ozs7cUJBQUs7MEJBQ3JCLDhEQUFDQyxJQUFFOztrQ0FDRCw4REFBQ0MsSUFBRTtrQ0FBRU4sV0FBVyxDQUFDTyxRQUFROzs7Ozs2QkFBTTtrQ0FDL0IsOERBQUNELElBQUU7a0NBQUVOLFdBQVcsQ0FBQ1EsV0FBVzs7Ozs7NkJBQU07a0NBQ2xDLDhEQUFDRixJQUFFO2tDQUFFTixXQUFXLENBQUNTLFVBQVU7Ozs7OzZCQUFNO2tDQUNqQyw4REFBQ0gsSUFBRTtrQ0FBRU4sV0FBVyxDQUFDVSxXQUFXOzs7Ozs2QkFBTTs7Ozs7O3FCQUMvQjs7Ozs7O2FBQ0QsQ0FDTjtBQUNKLENBQUM7R0F0QktoQixXQUFXOztRQUVFRCxvREFBVztRQUVORCxvREFBVztRQUNiQSxvREFBVzs7O0FBTDNCRSxLQUFBQSxXQUFXO0FBd0JqQiwrREFBZUEsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcHJvZmlsZS9Qcm9maWxlQ2FyZC5qcz9kZDJhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuXG5cbmNvbnN0IFByb2ZpbGVDYXJkID0gKHtwcm9maWxlQ2FyZEFkZHJlc3N9KSA9PiB7XG5cbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuXG4gIGNvbnN0IHdhbGxldEFkZHJlc3MgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLm1hbmFnZURhdGEud2FsbGV0QWRkcmVzcyk7XG4gIGNvbnN0IHVzZXJQcm9maWxlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5tYW5hZ2VEYXRhLnVzZXJQcm9maWxlQ2FyZCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaCh1cGRhdGVVc2VyUHJvZmlsZUNhcmQocHJvZmlsZUNhcmRBZGRyZXNzIHx8IHdhbGxldEFkZHJlc3MpKTtcbiAgfSwgW2Rpc3BhdGNoLCBwcm9maWxlQ2FyZEFkZHJlc3NdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+UHJvZmlsZSBDYXJkPC9oMT5cbiAgICAgIDx1bD5cbiAgICAgICAgPGxpPnt1c2VyUHJvZmlsZS5jb2RlbmFtZX08L2xpPlxuICAgICAgICA8bGk+e3VzZXJQcm9maWxlLnVzZXJBZGRyZXNzfTwvbGk+XG4gICAgICAgIDxsaT57dXNlclByb2ZpbGUucHJvZmVzc2lvbn08L2xpPlxuICAgICAgICA8bGk+e3VzZXJQcm9maWxlLmRlc2NyaXB0aW9ufTwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlQ2FyZDsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTZWxlY3RvciIsInVzZURpc3BhdGNoIiwiUHJvZmlsZUNhcmQiLCJwcm9maWxlQ2FyZEFkZHJlc3MiLCJkaXNwYXRjaCIsIndhbGxldEFkZHJlc3MiLCJzdGF0ZSIsIm1hbmFnZURhdGEiLCJ1c2VyUHJvZmlsZSIsInVzZXJQcm9maWxlQ2FyZCIsInVwZGF0ZVVzZXJQcm9maWxlQ2FyZCIsImRpdiIsImgxIiwidWwiLCJsaSIsImNvZGVuYW1lIiwidXNlckFkZHJlc3MiLCJwcm9mZXNzaW9uIiwiZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/profile/ProfileCard.js\n"));

/***/ })

});