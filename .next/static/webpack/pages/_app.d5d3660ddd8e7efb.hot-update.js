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

/***/ "./store/reducers/manageData.js":
/*!**************************************!*\
  !*** ./store/reducers/manageData.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ \"./store/actions/types.js\");\n\n\n\nvar initialState = {\n    admin: false,\n    connected: false,\n    walletAddress: \"\",\n    userInfo: null,\n    userProfileCard: null,\n    hootBalance: 100,\n    profileSearch: {\n        results: [],\n        loading: false\n    }\n};\nvar manageData = function() {\n    var state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : initialState, action = arguments.length > 1 ? arguments[1] : void 0;\n    switch(action.type){\n        case _actions_types__WEBPACK_IMPORTED_MODULE_0__.CONNECT_WALLET:\n            return (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({}, state), {\n                connected: true,\n                walletAddress: action.walletAddress,\n                userInfo: action.userInfo\n            });\n        case _actions_types__WEBPACK_IMPORTED_MODULE_0__.DISCONNECT:\n            return initialState;\n        case _actions_types__WEBPACK_IMPORTED_MODULE_0__.GET_ADMIN_ROLE:\n            return (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({}, state), {\n                admin: true\n            });\n        case _actions_types__WEBPACK_IMPORTED_MODULE_0__.UPDATE_USER_INFO:\n            return (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({}, state), {\n                userInfo: action.userInfo\n            });\n        case _actions_types__WEBPACK_IMPORTED_MODULE_0__.UPDATE_PROFILE_CARD_ADDRESS:\n            return (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({}, state), {\n                userProfileCard: action.payload\n            });\n        case _actions_types__WEBPACK_IMPORTED_MODULE_0__.UPDATE_PROFILE_SEARCH_REQUEST:\n            return (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({}, state), {\n                profileSearch: {\n                    results: [],\n                    loading: true\n                }\n            });\n        case _actions_types__WEBPACK_IMPORTED_MODULE_0__.UPDATE_PROFILE_SEARCH:\n            return (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({}, state), {\n                profileSearch: action.payload\n            });\n        default:\n            return state;\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (manageData);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9yZWR1Y2Vycy9tYW5hZ2VEYXRhLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7QUFRMEI7QUFFMUIsSUFBTU8sWUFBWSxHQUFHO0lBQ25CQyxLQUFLLEVBQUUsS0FBSztJQUNaQyxTQUFTLEVBQUUsS0FBSztJQUNoQkMsYUFBYSxFQUFFLEVBQUU7SUFDakJDLFFBQVEsRUFBRSxJQUFJO0lBQ2RDLGVBQWUsRUFBRSxJQUFJO0lBQ3JCQyxXQUFXLEVBQUUsR0FBRztJQUNoQkMsYUFBYSxFQUFFO1FBQ2JDLE9BQU8sRUFBRSxFQUFFO1FBQ1hDLE9BQU8sRUFBRSxLQUFLO0tBQ2Y7Q0FDRjtBQUVELElBQU1DLFVBQVUsR0FBRyxXQUFrQztRQUFqQ0MsS0FBSyxvRUFBR1gsWUFBWSxFQUFFWSxNQUFNO0lBQzlDLE9BQVFBLE1BQU0sQ0FBQ0MsSUFBSTtRQUNqQixLQUFLcEIsMERBQWM7WUFDakIsT0FBTyx3S0FBS2tCLEtBQUs7Z0JBQUVULFNBQVMsRUFBRSxJQUFJO2dCQUFFQyxhQUFhLEVBQUVTLE1BQU0sQ0FBQ1QsYUFBYTtnQkFBRUMsUUFBUSxFQUFFUSxNQUFNLENBQUNSLFFBQVE7Y0FBRSxDQUFDO1FBQ3ZHLEtBQUtWLHNEQUFVO1lBQ2IsT0FBT00sWUFBWSxDQUFDO1FBQ3RCLEtBQUtGLDBEQUFjO1lBQ2pCLE9BQU8sd0tBQUthLEtBQUs7Z0JBQUVWLEtBQUssRUFBRSxJQUFJO2NBQUUsQ0FBQztRQUNuQyxLQUFLTiw0REFBZ0I7WUFDbkIsT0FBTyx3S0FBS2dCLEtBQUs7Z0JBQUVQLFFBQVEsRUFBRVEsTUFBTSxDQUFDUixRQUFRO2NBQUUsQ0FBQztRQUNqRCxLQUFLUix1RUFBMkI7WUFDOUIsT0FBTyx3S0FBS2UsS0FBSztnQkFBRU4sZUFBZSxFQUFFTyxNQUFNLENBQUNFLE9BQU87Y0FBRSxDQUFDO1FBQ3ZELEtBQUtmLHlFQUE2QjtZQUNoQyxPQUFPLHdLQUFLWSxLQUFLO2dCQUFFSixhQUFhLEVBQUU7b0JBQUNDLE9BQU8sRUFBRSxFQUFFO29CQUFFQyxPQUFPLEVBQUUsSUFBSTtpQkFBQztjQUFDLENBQUM7UUFDbEUsS0FBS1osaUVBQXFCO1lBQ3hCLE9BQU8sd0tBQUtjLEtBQUs7Z0JBQUVKLGFBQWEsRUFBRUssTUFBTSxDQUFDRSxPQUFPO2NBQUUsQ0FBQztRQUNyRDtZQUNFLE9BQU9ILEtBQUssQ0FBQztLQUNoQjtBQUNILENBQUM7QUFFRCwrREFBZUQsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0b3JlL3JlZHVjZXJzL21hbmFnZURhdGEuanM/MTVmYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDT05ORUNUX1dBTExFVCxcbiAgRElTQ09OTkVDVCxcbiAgVVBEQVRFX1VTRVJfSU5GTyxcbiAgVVBEQVRFX1BST0ZJTEVfQ0FSRF9BRERSRVNTLFxuICBVUERBVEVfUFJPRklMRV9TRUFSQ0gsXG4gIEdFVF9BRE1JTl9ST0xFLFxuICBVUERBVEVfUFJPRklMRV9TRUFSQ0hfUkVRVUVTVFxufSBmcm9tIFwiLi4vYWN0aW9ucy90eXBlc1wiO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGFkbWluOiBmYWxzZSxcbiAgY29ubmVjdGVkOiBmYWxzZSxcbiAgd2FsbGV0QWRkcmVzczogXCJcIixcbiAgdXNlckluZm86IG51bGwsXG4gIHVzZXJQcm9maWxlQ2FyZDogbnVsbCxcbiAgaG9vdEJhbGFuY2U6IDEwMCxcbiAgcHJvZmlsZVNlYXJjaDoge1xuICAgIHJlc3VsdHM6IFtdLFxuICAgIGxvYWRpbmc6IGZhbHNlXG4gIH1cbn07XG5cbmNvbnN0IG1hbmFnZURhdGEgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBDT05ORUNUX1dBTExFVDpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjb25uZWN0ZWQ6IHRydWUsIHdhbGxldEFkZHJlc3M6IGFjdGlvbi53YWxsZXRBZGRyZXNzLCB1c2VySW5mbzogYWN0aW9uLnVzZXJJbmZvIH07XG4gICAgY2FzZSBESVNDT05ORUNUOlxuICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcbiAgICBjYXNlIEdFVF9BRE1JTl9ST0xFOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGFkbWluOiB0cnVlIH07XG4gICAgY2FzZSBVUERBVEVfVVNFUl9JTkZPOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHVzZXJJbmZvOiBhY3Rpb24udXNlckluZm8gfTtcbiAgICBjYXNlIFVQREFURV9QUk9GSUxFX0NBUkRfQUREUkVTUzpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB1c2VyUHJvZmlsZUNhcmQ6IGFjdGlvbi5wYXlsb2FkIH07XG4gICAgY2FzZSBVUERBVEVfUFJPRklMRV9TRUFSQ0hfUkVRVUVTVDpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBwcm9maWxlU2VhcmNoOiB7cmVzdWx0czogW10sIGxvYWRpbmc6IHRydWV9fTtcbiAgICBjYXNlIFVQREFURV9QUk9GSUxFX1NFQVJDSDpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBwcm9maWxlU2VhcmNoOiBhY3Rpb24ucGF5bG9hZCB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1hbmFnZURhdGE7XG4iXSwibmFtZXMiOlsiQ09OTkVDVF9XQUxMRVQiLCJESVNDT05ORUNUIiwiVVBEQVRFX1VTRVJfSU5GTyIsIlVQREFURV9QUk9GSUxFX0NBUkRfQUREUkVTUyIsIlVQREFURV9QUk9GSUxFX1NFQVJDSCIsIkdFVF9BRE1JTl9ST0xFIiwiVVBEQVRFX1BST0ZJTEVfU0VBUkNIX1JFUVVFU1QiLCJpbml0aWFsU3RhdGUiLCJhZG1pbiIsImNvbm5lY3RlZCIsIndhbGxldEFkZHJlc3MiLCJ1c2VySW5mbyIsInVzZXJQcm9maWxlQ2FyZCIsImhvb3RCYWxhbmNlIiwicHJvZmlsZVNlYXJjaCIsInJlc3VsdHMiLCJsb2FkaW5nIiwibWFuYWdlRGF0YSIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/reducers/manageData.js\n"));

/***/ })

});