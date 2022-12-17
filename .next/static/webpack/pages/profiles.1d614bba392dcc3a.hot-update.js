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

/***/ "./components/profiles/CodenameSearch.jsx":
/*!************************************************!*\
  !*** ./components/profiles/CodenameSearch.jsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _helpers_users_users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/users/users */ \"./helpers/users/users.js\");\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/actions */ \"./store/actions/index.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar CodenameSearch = function() {\n    _s();\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    var onSubmit = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(function(event) {\n            var user, results, users;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        event.preventDefault();\n                        return [\n                            4,\n                            (0,_helpers_users_users__WEBPACK_IMPORTED_MODULE_3__.getUserByCodename)(event.target[0].value)\n                        ];\n                    case 1:\n                        user = _state.sent();\n                        if (!(lodash__WEBPACK_IMPORTED_MODULE_5___default().isEmpty(user.codename) || lodash__WEBPACK_IMPORTED_MODULE_5___default().isEmpty(event.target[0].value))) return [\n                            3,\n                            3\n                        ];\n                        return [\n                            4,\n                            (0,_helpers_users_users__WEBPACK_IMPORTED_MODULE_3__.getFiveUsers)()\n                        ];\n                    case 2:\n                        users = _state.sent();\n                        results = users.map(function(user) {\n                            return {\n                                header: user.codename,\n                                address: user.userAddress,\n                                meta: user.profession,\n                                description: user.description\n                            };\n                        });\n                        return [\n                            3,\n                            4\n                        ];\n                    case 3:\n                        results = [\n                            {\n                                header: user.codename,\n                                address: user.userAddress,\n                                meta: user.profession,\n                                description: user.description\n                            }, \n                        ];\n                        _state.label = 4;\n                    case 4:\n                        // const results =\n                        //   _.isEmpty(user.codename) || _.isEmpty(event.target[0].value) ? [] : items;\n                        dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_4__.updateProfileSearch)(results));\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function onSubmit(event) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            marginBottom: \"20px\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Form, {\n            onSubmit: onSubmit,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Input, {\n                fluid: true,\n                icon: \"search\",\n                placeholder: \"Search...\"\n            }, void 0, false, {\n                fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/profiles/CodenameSearch.jsx\",\n                lineNumber: 57,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/profiles/CodenameSearch.jsx\",\n            lineNumber: 56,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/profiles/CodenameSearch.jsx\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, _this);\n};\n_s(CodenameSearch, \"rgTLoBID190wEKCp9+G8W6F7A5M=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch\n    ];\n});\n_c = CodenameSearch;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CodenameSearch);\nvar _c;\n$RefreshReg$(_c, \"CodenameSearch\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb2ZpbGVzL0NvZGVuYW1lU2VhcmNoLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7O0FBQTBCO0FBQ2dCO0FBQ007QUFDYztBQUNKO0FBQ25DO0FBQ2tDO0FBR3pELElBQU1RLGNBQWMsR0FBRyxXQUFNOztJQUUzQixJQUFNQyxRQUFRLEdBQUdSLHdEQUFXLEVBQUU7SUFFOUIsSUFBTVMsUUFBUTttQkFBRyw2RkFBT0MsS0FBSyxFQUFLO2dCQUUxQkMsSUFBSSxFQUNOQyxPQUFPLEVBV0hDLEtBQUs7Ozs7d0JBYmJILEtBQUssQ0FBQ0ksY0FBYyxFQUFFLENBQUM7d0JBQ1Y7OzRCQUFNWCx1RUFBaUIsQ0FBQ08sS0FBSyxDQUFDSyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUNDLEtBQUssQ0FBQzswQkFBQTs7d0JBQXJETCxJQUFJLEdBQUcsYUFBOEM7NkJBV3hETixDQUFBQSxxREFBUyxDQUFDTSxJQUFJLENBQUNPLFFBQVEsQ0FBQyxJQUFJYixxREFBUyxDQUFDSyxLQUFLLENBQUNLLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsS0FBSyxDQUFDLEdBQTVEWDs7OzBCQUE0RDt3QkFDL0M7OzRCQUFNQyxrRUFBWSxFQUFFOzBCQUFBOzt3QkFBNUJPLEtBQUssR0FBRyxhQUFvQjt3QkFDbENELE9BQU8sR0FBR0MsS0FBSyxDQUFDTSxHQUFHLENBQUMsU0FBQ1IsSUFBSSxFQUFLOzRCQUM1QixPQUFPO2dDQUNMUyxNQUFNLEVBQUVULElBQUksQ0FBQ08sUUFBUTtnQ0FDckJHLE9BQU8sRUFBRVYsSUFBSSxDQUFDVyxXQUFXO2dDQUN6QkMsSUFBSSxFQUFFWixJQUFJLENBQUNhLFVBQVU7Z0NBQ3JCQyxXQUFXLEVBQUVkLElBQUksQ0FBQ2MsV0FBVzs2QkFDOUIsQ0FBQzt3QkFDSixDQUFDLENBQUMsQ0FBQzs7Ozs7O3dCQUVIYixPQUFPLEdBQUc7NEJBQ1I7Z0NBQ0VRLE1BQU0sRUFBRVQsSUFBSSxDQUFDTyxRQUFRO2dDQUNyQkcsT0FBTyxFQUFFVixJQUFJLENBQUNXLFdBQVc7Z0NBQ3pCQyxJQUFJLEVBQUVaLElBQUksQ0FBQ2EsVUFBVTtnQ0FDckJDLFdBQVcsRUFBRWQsSUFBSSxDQUFDYyxXQUFXOzZCQUM5Qjt5QkFDRixDQUFDOzs7d0JBR0osa0JBQWtCO3dCQUNsQiwrRUFBK0U7d0JBRS9FakIsUUFBUSxDQUFDSixtRUFBbUIsQ0FBQ1EsT0FBTyxDQUFDLENBQUMsQ0FBQzs7Ozs7O1FBQ3pDLENBQUM7d0JBdENLSCxRQUFRLENBQVVDLEtBQUs7OztPQXNDNUI7SUFFRCxxQkFDRSw4REFBQ2dCLEtBQUc7UUFBQ0MsS0FBSyxFQUFFO1lBQUVDLFlBQVksRUFBRSxNQUFNO1NBQUU7a0JBQ2xDLDRFQUFDM0IsbURBQUk7WUFBQ1EsUUFBUSxFQUFFQSxRQUFRO3NCQUN0Qiw0RUFBQ1Asb0RBQUs7Z0JBQ0oyQixLQUFLO2dCQUNMQyxJQUFJLEVBQUMsUUFBUTtnQkFDYkMsV0FBVyxFQUFDLFdBQVc7Ozs7O3FCQUN2Qjs7Ozs7aUJBQ0c7Ozs7O2FBQ0gsQ0FDTjtBQUNKLENBQUM7R0F2REt4QixjQUFjOztRQUVEUCxvREFBVzs7O0FBRnhCTyxLQUFBQSxjQUFjO0FBeURwQiwrREFBZUEsY0FBYyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcHJvZmlsZXMvQ29kZW5hbWVTZWFyY2guanN4P2U1MDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IEZvcm0sIElucHV0IH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgeyBnZXRVc2VyQnlDb2RlbmFtZSB9IGZyb20gXCIuLi8uLi9oZWxwZXJzL3VzZXJzL3VzZXJzXCI7XG5pbXBvcnQgeyB1cGRhdGVQcm9maWxlU2VhcmNoIH0gZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnNcIjtcbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCB7IGdldEZpdmVVc2VycyB9IGZyb20gXCIuLi8uLi9oZWxwZXJzL3VzZXJzL3VzZXJzXCI7XG5cblxuY29uc3QgQ29kZW5hbWVTZWFyY2ggPSAoKSA9PiB7XG5cbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuXG4gIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgZ2V0VXNlckJ5Q29kZW5hbWUoZXZlbnQudGFyZ2V0WzBdLnZhbHVlKTtcbiAgICBsZXQgcmVzdWx0cztcbiAgICAvLyBjb25zdCBpdGVtcyA9IFtcbiAgICAvLyAgIHtcbiAgICAvLyAgICAgaGVhZGVyOiB1c2VyLmNvZGVuYW1lLFxuICAgIC8vICAgICBhZGRyZXNzOiB1c2VyLnVzZXJBZGRyZXNzLFxuICAgIC8vICAgICBtZXRhOiB1c2VyLnByb2Zlc3Npb24sXG4gICAgLy8gICAgIGRlc2NyaXB0aW9uOiB1c2VyLmRlc2NyaXB0aW9uXG4gICAgLy8gICB9XG4gICAgLy8gXTtcblxuICAgIGlmKF8uaXNFbXB0eSh1c2VyLmNvZGVuYW1lKSB8fCBfLmlzRW1wdHkoZXZlbnQudGFyZ2V0WzBdLnZhbHVlKSkge1xuICAgICAgY29uc3QgdXNlcnMgPSBhd2FpdCBnZXRGaXZlVXNlcnMoKTtcbiAgICAgIHJlc3VsdHMgPSB1c2Vycy5tYXAoKHVzZXIpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBoZWFkZXI6IHVzZXIuY29kZW5hbWUsXG4gICAgICAgICAgYWRkcmVzczogdXNlci51c2VyQWRkcmVzcyxcbiAgICAgICAgICBtZXRhOiB1c2VyLnByb2Zlc3Npb24sXG4gICAgICAgICAgZGVzY3JpcHRpb246IHVzZXIuZGVzY3JpcHRpb24sXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0cyA9IFtcbiAgICAgICAge1xuICAgICAgICAgIGhlYWRlcjogdXNlci5jb2RlbmFtZSxcbiAgICAgICAgICBhZGRyZXNzOiB1c2VyLnVzZXJBZGRyZXNzLFxuICAgICAgICAgIG1ldGE6IHVzZXIucHJvZmVzc2lvbixcbiAgICAgICAgICBkZXNjcmlwdGlvbjogdXNlci5kZXNjcmlwdGlvbixcbiAgICAgICAgfSxcbiAgICAgIF07XG4gICAgfVxuXG4gICAgLy8gY29uc3QgcmVzdWx0cyA9XG4gICAgLy8gICBfLmlzRW1wdHkodXNlci5jb2RlbmFtZSkgfHwgXy5pc0VtcHR5KGV2ZW50LnRhcmdldFswXS52YWx1ZSkgPyBbXSA6IGl0ZW1zO1xuXG4gICAgZGlzcGF0Y2godXBkYXRlUHJvZmlsZVNlYXJjaChyZXN1bHRzKSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIyMHB4XCIgfX0+XG4gICAgICA8Rm9ybSBvblN1Ym1pdD17b25TdWJtaXR9PlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICBmbHVpZFxuICAgICAgICAgIGljb249XCJzZWFyY2hcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoLi4uXCJcbiAgICAgICAgLz5cbiAgICAgIDwvRm9ybT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29kZW5hbWVTZWFyY2g7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRGlzcGF0Y2giLCJGb3JtIiwiSW5wdXQiLCJnZXRVc2VyQnlDb2RlbmFtZSIsInVwZGF0ZVByb2ZpbGVTZWFyY2giLCJfIiwiZ2V0Rml2ZVVzZXJzIiwiQ29kZW5hbWVTZWFyY2giLCJkaXNwYXRjaCIsIm9uU3VibWl0IiwiZXZlbnQiLCJ1c2VyIiwicmVzdWx0cyIsInVzZXJzIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImlzRW1wdHkiLCJjb2RlbmFtZSIsIm1hcCIsImhlYWRlciIsImFkZHJlc3MiLCJ1c2VyQWRkcmVzcyIsIm1ldGEiLCJwcm9mZXNzaW9uIiwiZGVzY3JpcHRpb24iLCJkaXYiLCJzdHlsZSIsIm1hcmdpbkJvdHRvbSIsImZsdWlkIiwiaWNvbiIsInBsYWNlaG9sZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/profiles/CodenameSearch.jsx\n"));

/***/ })

});