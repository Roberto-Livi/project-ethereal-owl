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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _helpers_users_users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/users/users */ \"./helpers/users/users.js\");\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar ProfileCard = function(param) {\n    var profileCardAddress = param.profileCardAddress;\n    _s();\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(useState(null), 2), userData = ref[0], setUserData = ref[1];\n    var walletAddress = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function(state) {\n        return state.manageData.walletAddress;\n    });\n    var userProfile = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function(state) {\n        return state.manageData.userProfileCard;\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(/*#__PURE__*/ (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(function() {\n        return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    return [\n                        4,\n                        setUserData((0,_helpers_users_users__WEBPACK_IMPORTED_MODULE_3__.getUserData)(profileCardAddress))\n                    ];\n                case 1:\n                    _state.sent();\n                    return [\n                        2\n                    ];\n            }\n        });\n    }), []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Profile Card\"\n            }, void 0, false, {\n                fileName: \"/Users/robertolivi/Ethereal-Owl/project-ethereal-owl/components/profile/ProfileCard.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: userData.codename\n                    }, void 0, false, {\n                        fileName: \"/Users/robertolivi/Ethereal-Owl/project-ethereal-owl/components/profile/ProfileCard.js\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: userData.userAddress\n                    }, void 0, false, {\n                        fileName: \"/Users/robertolivi/Ethereal-Owl/project-ethereal-owl/components/profile/ProfileCard.js\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: userData.profession\n                    }, void 0, false, {\n                        fileName: \"/Users/robertolivi/Ethereal-Owl/project-ethereal-owl/components/profile/ProfileCard.js\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: userData.description\n                    }, void 0, false, {\n                        fileName: \"/Users/robertolivi/Ethereal-Owl/project-ethereal-owl/components/profile/ProfileCard.js\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/robertolivi/Ethereal-Owl/project-ethereal-owl/components/profile/ProfileCard.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/robertolivi/Ethereal-Owl/project-ethereal-owl/components/profile/ProfileCard.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, _this);\n};\n_s(ProfileCard, \"D5T6PYAQQq7oKIToW3JirCrh2aQ=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = ProfileCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProfileCard);\nvar _c;\n$RefreshReg$(_c, \"ProfileCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb2ZpbGUvUHJvZmlsZUNhcmQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7QUFBeUM7QUFDYztBQUNDO0FBR3hELElBQU1LLFdBQVcsR0FBRyxnQkFBMEI7UUFBeEJDLGtCQUFrQixTQUFsQkEsa0JBQWtCOztJQUV0QyxJQUFNQyxRQUFRLEdBQUdKLHdEQUFXLEVBQUU7SUFFOUIsSUFBZ0NLLEdBQWMsb0ZBQWRBLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBdkNDLFFBQVEsR0FBaUJELEdBQWMsR0FBL0IsRUFBRUUsV0FBVyxHQUFJRixHQUFjLEdBQWxCO0lBRTVCLElBQU1HLGFBQWEsR0FBR1Qsd0RBQVcsQ0FBQyxTQUFDVSxLQUFLO2VBQUtBLEtBQUssQ0FBQ0MsVUFBVSxDQUFDRixhQUFhO0tBQUEsQ0FBQztJQUM1RSxJQUFNRyxXQUFXLEdBQUdaLHdEQUFXLENBQUMsU0FBQ1UsS0FBSztlQUFLQSxLQUFLLENBQUNDLFVBQVUsQ0FBQ0UsZUFBZTtLQUFBLENBQUM7SUFFNUVkLGdEQUFTLGVBQUMsK0ZBQVc7Ozs7b0JBQ25COzt3QkFBTVMsV0FBVyxDQUFDTixpRUFBVyxDQUFDRSxrQkFBa0IsQ0FBQyxDQUFDO3NCQUFBOztvQkFBbEQsYUFBa0QsQ0FBQzs7Ozs7O0lBQ3JELENBQUMsR0FBRSxFQUFFLENBQUMsQ0FBQztJQUVQLHFCQUNFLDhEQUFDVSxLQUFHOzswQkFDRiw4REFBQ0MsSUFBRTswQkFBQyxjQUFZOzs7OztxQkFBSzswQkFDckIsOERBQUNDLElBQUU7O2tDQUNELDhEQUFDQyxJQUFFO2tDQUFFVixRQUFRLENBQUNXLFFBQVE7Ozs7OzZCQUFNO2tDQUM1Qiw4REFBQ0QsSUFBRTtrQ0FBRVYsUUFBUSxDQUFDWSxXQUFXOzs7Ozs2QkFBTTtrQ0FDL0IsOERBQUNGLElBQUU7a0NBQUVWLFFBQVEsQ0FBQ2EsVUFBVTs7Ozs7NkJBQU07a0NBQzlCLDhEQUFDSCxJQUFFO2tDQUFFVixRQUFRLENBQUNjLFdBQVc7Ozs7OzZCQUFNOzs7Ozs7cUJBQzVCOzs7Ozs7YUFDRCxDQUNOO0FBQ0osQ0FBQztHQXhCS2xCLFdBQVc7O1FBRUVGLG9EQUFXO1FBSU5ELG9EQUFXO1FBQ2JBLG9EQUFXOzs7QUFQM0JHLEtBQUFBLFdBQVc7QUEwQmpCLCtEQUFlQSxXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9maWxlL1Byb2ZpbGVDYXJkLmpzP2RkMmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBnZXRVc2VyRGF0YSB9IGZyb20gXCIuLi8uLi9oZWxwZXJzL3VzZXJzL3VzZXJzXCI7XG5cblxuY29uc3QgUHJvZmlsZUNhcmQgPSAoe3Byb2ZpbGVDYXJkQWRkcmVzc30pID0+IHtcblxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgY29uc3QgW3VzZXJEYXRhLCBzZXRVc2VyRGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCB3YWxsZXRBZGRyZXNzID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5tYW5hZ2VEYXRhLndhbGxldEFkZHJlc3MpO1xuICBjb25zdCB1c2VyUHJvZmlsZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUubWFuYWdlRGF0YS51c2VyUHJvZmlsZUNhcmQpO1xuXG4gIHVzZUVmZmVjdChhc3luYygpID0+IHtcbiAgICBhd2FpdCBzZXRVc2VyRGF0YShnZXRVc2VyRGF0YShwcm9maWxlQ2FyZEFkZHJlc3MpKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5Qcm9maWxlIENhcmQ8L2gxPlxuICAgICAgPHVsPlxuICAgICAgICA8bGk+e3VzZXJEYXRhLmNvZGVuYW1lfTwvbGk+XG4gICAgICAgIDxsaT57dXNlckRhdGEudXNlckFkZHJlc3N9PC9saT5cbiAgICAgICAgPGxpPnt1c2VyRGF0YS5wcm9mZXNzaW9ufTwvbGk+XG4gICAgICAgIDxsaT57dXNlckRhdGEuZGVzY3JpcHRpb259PC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGVDYXJkOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVNlbGVjdG9yIiwidXNlRGlzcGF0Y2giLCJnZXRVc2VyRGF0YSIsIlByb2ZpbGVDYXJkIiwicHJvZmlsZUNhcmRBZGRyZXNzIiwiZGlzcGF0Y2giLCJ1c2VTdGF0ZSIsInVzZXJEYXRhIiwic2V0VXNlckRhdGEiLCJ3YWxsZXRBZGRyZXNzIiwic3RhdGUiLCJtYW5hZ2VEYXRhIiwidXNlclByb2ZpbGUiLCJ1c2VyUHJvZmlsZUNhcmQiLCJkaXYiLCJoMSIsInVsIiwibGkiLCJjb2RlbmFtZSIsInVzZXJBZGRyZXNzIiwicHJvZmVzc2lvbiIsImRlc2NyaXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/profile/ProfileCard.js\n"));

/***/ })

});