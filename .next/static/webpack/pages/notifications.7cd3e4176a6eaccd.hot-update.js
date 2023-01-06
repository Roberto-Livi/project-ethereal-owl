"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/notifications",{

/***/ "./components/notifications/Notifications.jsx":
/*!****************************************************!*\
  !*** ./components/notifications/Notifications.jsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar Notifications = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), notifications = ref[0], setNotifications = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), displayed = ref1[0], setDisplayed = ref1[1];\n    var mongoClient = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function(state) {\n        return state.manageData.mongoNotifications;\n    });\n    var showTen = function(startingNumber) {\n        var start = startingNumber * 10;\n        var end = start + 10;\n        return notifications.slice(start, end);\n    };\n    var displayPagination = function() {\n        var numberInRow = Math.ceil(mongoClient.notifications.length / 10);\n        for(var i = 0; i < numberInRow; i++){\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Menu.Item, {\n                as: \"a\",\n                children: i\n            }, void 0, false, {\n                fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/notifications/Notifications.jsx\",\n                lineNumber: 23,\n                columnNumber: 14\n            }, _this);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (!lodash__WEBPACK_IMPORTED_MODULE_3___default().isNull(mongoClient)) {\n            setNotifications(mongoClient.notifications);\n        }\n    }, [\n        mongoClient\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Table, {\n            celled: true,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Table.Header, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Table.Row, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Table.HeaderCell, {}, void 0, false, {\n                            fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/notifications/Notifications.jsx\",\n                            lineNumber: 38,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/notifications/Notifications.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/notifications/Notifications.jsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Table.Body, {\n                    children: notifications.map(function(notification, idx) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Table.Row, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Table.Cell, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Label, {\n                                    ribbon: true,\n                                    children: notification.message\n                                }, void 0, false, {\n                                    fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/notifications/Notifications.jsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 17\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/notifications/Notifications.jsx\",\n                                lineNumber: 45,\n                                columnNumber: 15\n                            }, _this)\n                        }, idx, false, {\n                            fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/notifications/Notifications.jsx\",\n                            lineNumber: 44,\n                            columnNumber: 13\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/notifications/Notifications.jsx\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Table.Footer, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Table.Row, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Table.HeaderCell, {\n                            colSpan: \"3\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Menu, {\n                                floated: \"right\",\n                                pagination: true,\n                                children: mongoClient.notifications && displayPagination()\n                            }, void 0, false, {\n                                fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/notifications/Notifications.jsx\",\n                                lineNumber: 55,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/notifications/Notifications.jsx\",\n                            lineNumber: 54,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/notifications/Notifications.jsx\",\n                        lineNumber: 53,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/notifications/Notifications.jsx\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/notifications/Notifications.jsx\",\n            lineNumber: 35,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/notifications/Notifications.jsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, _this);\n};\n_s(Notifications, \"rO1ON11dBd9wZ3ygk6IWWGigCng=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = Notifications;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Notifications);\nvar _c;\n$RefreshReg$(_c, \"Notifications\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL25vdGlmaWNhdGlvbnMvTm90aWZpY2F0aW9ucy5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7OztBQUFtRDtBQUNUO0FBQ21CO0FBQ3RDO0FBR3ZCLElBQU1TLGFBQWEsR0FBRyxXQUFNOztJQUUxQixJQUEwQ1IsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUEvQ1MsYUFBYSxHQUFzQlQsR0FBWSxHQUFsQyxFQUFFVSxnQkFBZ0IsR0FBSVYsR0FBWSxHQUFoQjtJQUN0QyxJQUFrQ0EsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUF2Q1csU0FBUyxHQUFrQlgsSUFBWSxHQUE5QixFQUFFWSxZQUFZLEdBQUlaLElBQVksR0FBaEI7SUFFOUIsSUFBTWEsV0FBVyxHQUFHWCx3REFBVyxDQUFDLFNBQUNZLEtBQUs7ZUFBS0EsS0FBSyxDQUFDQyxVQUFVLENBQUNDLGtCQUFrQjtLQUFBLENBQUM7SUFFL0UsSUFBTUMsT0FBTyxHQUFHLFNBQUNDLGNBQWMsRUFBSztRQUNsQyxJQUFNQyxLQUFLLEdBQUdELGNBQWMsR0FBRyxFQUFFO1FBQ2pDLElBQU1FLEdBQUcsR0FBR0QsS0FBSyxHQUFHLEVBQUU7UUFDdEIsT0FBT1YsYUFBYSxDQUFDWSxLQUFLLENBQUNGLEtBQUssRUFBRUMsR0FBRyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELElBQU1FLGlCQUFpQixHQUFHLFdBQU07UUFDOUIsSUFBTUMsV0FBVyxHQUFHQyxJQUFJLENBQUNDLElBQUksQ0FBQ1osV0FBVyxDQUFDSixhQUFhLENBQUNpQixNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ3BFLElBQUksSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHSixXQUFXLEVBQUVJLENBQUMsRUFBRSxDQUFDO1lBQ2xDLHFCQUFPLDhEQUFDdkIsd0RBQVM7Z0JBQUN5QixFQUFFLEVBQUMsR0FBRzswQkFBRUYsQ0FBQzs7Ozs7cUJBQWEsQ0FBQztRQUMzQyxDQUFDO0lBQ0gsQ0FBQztJQUVEMUIsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2QsSUFBRyxDQUFDTSxvREFBUSxDQUFDTSxXQUFXLENBQUMsRUFBRTtZQUN6QkgsZ0JBQWdCLENBQUNHLFdBQVcsQ0FBQ0osYUFBYSxDQUFDLENBQUM7UUFDOUMsQ0FBQztJQUNILENBQUMsRUFBRTtRQUFDSSxXQUFXO0tBQUMsQ0FBQyxDQUFDO0lBRWxCLHFCQUNFLDhEQUFDa0IsS0FBRztrQkFDRiw0RUFBQzVCLG9EQUFLO1lBQUM2QixNQUFNOzs4QkFDWCw4REFBQzdCLDJEQUFZOzhCQUNYLDRFQUFDQSx3REFBUztrQ0FDUiw0RUFBQ0EsK0RBQWdCOzs7O2lDQUFvQjs7Ozs7NkJBQzNCOzs7Ozt5QkFDQzs4QkFFZiw4REFBQ0EseURBQVU7OEJBQ1JNLGFBQWEsQ0FBQzRCLEdBQUcsQ0FBQyxTQUFDQyxZQUFZLEVBQUVDLEdBQUc7NkNBQ25DLDhEQUFDcEMsd0RBQVM7c0NBQ1IsNEVBQUNBLHlEQUFVOzBDQUNULDRFQUFDRSxvREFBSztvQ0FBQ29DLE1BQU07OENBQUVILFlBQVksQ0FBQ0ksT0FBTzs7Ozs7eUNBQVM7Ozs7O3FDQUNqQzsyQkFIQ0gsR0FBRzs7OztpQ0FJUDtxQkFDYixDQUFDOzs7Ozt5QkFDUzs4QkFFYiw4REFBQ3BDLDJEQUFZOzhCQUNYLDRFQUFDQSx3REFBUztrQ0FDUiw0RUFBQ0EsK0RBQWdCOzRCQUFDeUMsT0FBTyxFQUFDLEdBQUc7c0NBQzNCLDRFQUFDeEMsbURBQUk7Z0NBQUN5QyxPQUFPLEVBQUMsT0FBTztnQ0FBQ0MsVUFBVTswQ0FJN0JqQyxXQUFXLENBQUNKLGFBQWEsSUFBSWEsaUJBQWlCLEVBQUU7Ozs7O3FDQUk1Qzs7Ozs7aUNBQ1U7Ozs7OzZCQUNUOzs7Ozt5QkFDQzs7Ozs7O2lCQUNUOzs7OzthQUNKLENBQ047QUFDSixDQUFDO0dBL0RLZCxhQUFhOztRQUtHTixvREFBVzs7O0FBTDNCTSxLQUFBQSxhQUFhO0FBaUVuQiwrREFBZUEsYUFBYSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbm90aWZpY2F0aW9ucy9Ob3RpZmljYXRpb25zLmpzeD8xNmIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgVGFibGUsIE1lbnUsIExhYmVsLCBJY29uIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5cblxuY29uc3QgTm90aWZpY2F0aW9ucyA9ICgpID0+IHtcblxuICBjb25zdCBbbm90aWZpY2F0aW9ucywgc2V0Tm90aWZpY2F0aW9uc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtkaXNwbGF5ZWQsIHNldERpc3BsYXllZF0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgbW9uZ29DbGllbnQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLm1hbmFnZURhdGEubW9uZ29Ob3RpZmljYXRpb25zKTtcblxuICBjb25zdCBzaG93VGVuID0gKHN0YXJ0aW5nTnVtYmVyKSA9PiB7XG4gICAgY29uc3Qgc3RhcnQgPSBzdGFydGluZ051bWJlciAqIDEwO1xuICAgIGNvbnN0IGVuZCA9IHN0YXJ0ICsgMTA7XG4gICAgcmV0dXJuIG5vdGlmaWNhdGlvbnMuc2xpY2Uoc3RhcnQsIGVuZCk7XG4gIH1cblxuICBjb25zdCBkaXNwbGF5UGFnaW5hdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCBudW1iZXJJblJvdyA9IE1hdGguY2VpbChtb25nb0NsaWVudC5ub3RpZmljYXRpb25zLmxlbmd0aCAvIDEwKTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgbnVtYmVySW5Sb3c7IGkrKyl7XG4gICAgICByZXR1cm4gPE1lbnUuSXRlbSBhcz1cImFcIj57aX08L01lbnUuSXRlbT47XG4gICAgfVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZighXy5pc051bGwobW9uZ29DbGllbnQpKSB7XG4gICAgICBzZXROb3RpZmljYXRpb25zKG1vbmdvQ2xpZW50Lm5vdGlmaWNhdGlvbnMpO1xuICAgIH1cbiAgfSwgW21vbmdvQ2xpZW50XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPFRhYmxlIGNlbGxlZD5cbiAgICAgICAgPFRhYmxlLkhlYWRlcj5cbiAgICAgICAgICA8VGFibGUuUm93PlxuICAgICAgICAgICAgPFRhYmxlLkhlYWRlckNlbGw+PC9UYWJsZS5IZWFkZXJDZWxsPlxuICAgICAgICAgIDwvVGFibGUuUm93PlxuICAgICAgICA8L1RhYmxlLkhlYWRlcj5cblxuICAgICAgICA8VGFibGUuQm9keT5cbiAgICAgICAgICB7bm90aWZpY2F0aW9ucy5tYXAoKG5vdGlmaWNhdGlvbiwgaWR4KSA9PiAoXG4gICAgICAgICAgICA8VGFibGUuUm93IGtleT17aWR4fT5cbiAgICAgICAgICAgICAgPFRhYmxlLkNlbGw+XG4gICAgICAgICAgICAgICAgPExhYmVsIHJpYmJvbj57bm90aWZpY2F0aW9uLm1lc3NhZ2V9PC9MYWJlbD5cbiAgICAgICAgICAgICAgPC9UYWJsZS5DZWxsPlxuICAgICAgICAgICAgPC9UYWJsZS5Sb3c+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvVGFibGUuQm9keT5cblxuICAgICAgICA8VGFibGUuRm9vdGVyPlxuICAgICAgICAgIDxUYWJsZS5Sb3c+XG4gICAgICAgICAgICA8VGFibGUuSGVhZGVyQ2VsbCBjb2xTcGFuPVwiM1wiPlxuICAgICAgICAgICAgICA8TWVudSBmbG9hdGVkPVwicmlnaHRcIiBwYWdpbmF0aW9uPlxuICAgICAgICAgICAgICAgIHsvKiA8TWVudS5JdGVtIGFzPVwiYVwiIGljb24+XG4gICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwiY2hldnJvbiBsZWZ0XCIgLz5cbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT4gKi99XG4gICAgICAgICAgICAgICAge21vbmdvQ2xpZW50Lm5vdGlmaWNhdGlvbnMgJiYgZGlzcGxheVBhZ2luYXRpb24oKX1cbiAgICAgICAgICAgICAgICB7LyogPE1lbnUuSXRlbSBhcz1cImFcIiBpY29uPlxuICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT1cImNoZXZyb24gcmlnaHRcIiAvPlxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPiAqL31cbiAgICAgICAgICAgICAgPC9NZW51PlxuICAgICAgICAgICAgPC9UYWJsZS5IZWFkZXJDZWxsPlxuICAgICAgICAgIDwvVGFibGUuUm93PlxuICAgICAgICA8L1RhYmxlLkZvb3Rlcj5cbiAgICAgIDwvVGFibGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5vdGlmaWNhdGlvbnM7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VTZWxlY3RvciIsIlRhYmxlIiwiTWVudSIsIkxhYmVsIiwiSWNvbiIsIl8iLCJOb3RpZmljYXRpb25zIiwibm90aWZpY2F0aW9ucyIsInNldE5vdGlmaWNhdGlvbnMiLCJkaXNwbGF5ZWQiLCJzZXREaXNwbGF5ZWQiLCJtb25nb0NsaWVudCIsInN0YXRlIiwibWFuYWdlRGF0YSIsIm1vbmdvTm90aWZpY2F0aW9ucyIsInNob3dUZW4iLCJzdGFydGluZ051bWJlciIsInN0YXJ0IiwiZW5kIiwic2xpY2UiLCJkaXNwbGF5UGFnaW5hdGlvbiIsIm51bWJlckluUm93IiwiTWF0aCIsImNlaWwiLCJsZW5ndGgiLCJpIiwiSXRlbSIsImFzIiwiaXNOdWxsIiwiZGl2IiwiY2VsbGVkIiwiSGVhZGVyIiwiUm93IiwiSGVhZGVyQ2VsbCIsIkJvZHkiLCJtYXAiLCJub3RpZmljYXRpb24iLCJpZHgiLCJDZWxsIiwicmliYm9uIiwibWVzc2FnZSIsIkZvb3RlciIsImNvbFNwYW4iLCJmbG9hdGVkIiwicGFnaW5hdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/notifications/Notifications.jsx\n"));

/***/ })

});