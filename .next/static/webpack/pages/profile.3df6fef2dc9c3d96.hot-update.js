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

/***/ "./pages/profile.js":
/*!**************************!*\
  !*** ./pages/profile.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_utilities_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/utilities/Layout */ \"./components/utilities/Layout.js\");\n/* harmony import */ var _components_profile_ProfileForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/profile/ProfileForm */ \"./components/profile/ProfileForm.js\");\n/* harmony import */ var _components_profile_ProfileCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/profile/ProfileCard */ \"./components/profile/ProfileCard.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar Profile = function(props) {\n    _s();\n    var userInfo = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function(state) {\n        return state.manageData.userInfo;\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_utilities_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: userInfo ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_profile_ProfileCard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            profileCardAddress: props.profileAddress\n        }, void 0, false, {\n            fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/pages/profile.js\",\n            lineNumber: 15,\n            columnNumber: 9\n        }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_profile_ProfileForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            profileAddress: props.profileAddress\n        }, void 0, false, {\n            fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/pages/profile.js\",\n            lineNumber: 17,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/pages/profile.js\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, _this);\n};\n_s(Profile, \"tzGlyXU4dnsWn8Vn67aZTyHOaHQ=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = Profile;\nProfile.getInitialProps = function(props) {\n    return {\n        profileAddress: props.query.address\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Profile);\nvar _c;\n$RefreshReg$(_c, \"Profile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9maWxlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7QUFBMEI7QUFDZ0I7QUFDVTtBQUNRO0FBQ0E7QUFHNUQsSUFBTUssT0FBTyxHQUFHLFNBQUNDLEtBQUssRUFBSzs7SUFFekIsSUFBTUMsUUFBUSxHQUFHTix3REFBVyxDQUFDLFNBQUNPLEtBQUs7ZUFBS0EsS0FBSyxDQUFDQyxVQUFVLENBQUNGLFFBQVE7S0FBQSxDQUFDO0lBRWxFLHFCQUNFLDhEQUFDTCxvRUFBTTtrQkFDSkssUUFBUSxpQkFDUCw4REFBQ0gsdUVBQVc7WUFBQ00sa0JBQWtCLEVBQUVKLEtBQUssQ0FBQ0ssY0FBYzs7Ozs7aUJBQUksaUJBRXpELDhEQUFDUix1RUFBVztZQUFDUSxjQUFjLEVBQUVMLEtBQUssQ0FBQ0ssY0FBYzs7Ozs7aUJBQUk7Ozs7O2FBRWhELENBQ1Q7QUFDSixDQUFDO0dBYktOLE9BQU87O1FBRU1KLG9EQUFXOzs7QUFGeEJJLEtBQUFBLE9BQU87QUFlYkEsT0FBTyxDQUFDTyxlQUFlLEdBQUcsU0FBQ04sS0FBSyxFQUFLO0lBQ25DLE9BQU87UUFBRUssY0FBYyxFQUFFTCxLQUFLLENBQUNPLEtBQUssQ0FBQ0MsT0FBTztLQUFFLENBQUM7QUFDakQsQ0FBQyxDQUFDO0FBRUYsK0RBQWVULE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9maWxlLmpzPzA4ZDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvdXRpbGl0aWVzL0xheW91dFwiO1xuaW1wb3J0IFByb2ZpbGVGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL3Byb2ZpbGUvUHJvZmlsZUZvcm1cIjtcbmltcG9ydCBQcm9maWxlQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9wcm9maWxlL1Byb2ZpbGVDYXJkXCI7XG5cblxuY29uc3QgUHJvZmlsZSA9IChwcm9wcykgPT4ge1xuXG4gIGNvbnN0IHVzZXJJbmZvID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5tYW5hZ2VEYXRhLnVzZXJJbmZvKTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICB7dXNlckluZm8gPyAoXG4gICAgICAgIDxQcm9maWxlQ2FyZCBwcm9maWxlQ2FyZEFkZHJlc3M9e3Byb3BzLnByb2ZpbGVBZGRyZXNzfSAvPlxuICAgICAgKSA6IChcbiAgICAgICAgPFByb2ZpbGVGb3JtIHByb2ZpbGVBZGRyZXNzPXtwcm9wcy5wcm9maWxlQWRkcmVzc30gLz5cbiAgICAgICl9XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG5cblByb2ZpbGUuZ2V0SW5pdGlhbFByb3BzID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiB7IHByb2ZpbGVBZGRyZXNzOiBwcm9wcy5xdWVyeS5hZGRyZXNzIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVNlbGVjdG9yIiwiTGF5b3V0IiwiUHJvZmlsZUZvcm0iLCJQcm9maWxlQ2FyZCIsIlByb2ZpbGUiLCJwcm9wcyIsInVzZXJJbmZvIiwic3RhdGUiLCJtYW5hZ2VEYXRhIiwicHJvZmlsZUNhcmRBZGRyZXNzIiwicHJvZmlsZUFkZHJlc3MiLCJnZXRJbml0aWFsUHJvcHMiLCJxdWVyeSIsImFkZHJlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/profile.js\n"));

/***/ })

});