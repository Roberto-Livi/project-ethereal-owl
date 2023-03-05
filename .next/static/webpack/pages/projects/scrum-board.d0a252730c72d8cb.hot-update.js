"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/projects/scrum-board",{

/***/ "./components/scrum/ScrumTabs.jsx":
/*!****************************************!*\
  !*** ./components/scrum/ScrumTabs.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _Scrumboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Scrumboard */ \"./components/scrum/Scrumboard.jsx\");\n/* harmony import */ var _Backlog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Backlog */ \"./components/scrum/Backlog.jsx\");\n/* harmony import */ var _helpers_mongodb_ScrumCallCenter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/mongodb/ScrumCallCenter */ \"./helpers/mongodb/ScrumCallCenter.js\");\n/* harmony import */ var _helpers_mongodb_UsersCallCenter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/mongodb/UsersCallCenter */ \"./helpers/mongodb/UsersCallCenter.js\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar SubTabs = function(param) {\n    var projectId = param.projectId;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), stories = ref[0], setStories = ref[1];\n    var getData = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(function() {\n            var scrumData, users;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        return [\n                            4,\n                            (0,_helpers_mongodb_ScrumCallCenter__WEBPACK_IMPORTED_MODULE_4__.getScrumboardByProjectId)(projectId)\n                        ];\n                    case 1:\n                        scrumData = _state.sent();\n                        return [\n                            4,\n                            (0,_helpers_mongodb_UsersCallCenter__WEBPACK_IMPORTED_MODULE_5__.getScrumUsers)(scrumData.data.users)\n                        ];\n                    case 2:\n                        users = _state.sent();\n                        console.log(users);\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function getData() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var panes = [\n        {\n            menuItem: \"Scrum Board\",\n            render: function() {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Tab.Pane, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Scrumboard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        initialCards: [\n                            {\n                                id: \"1\",\n                                title: \"Task 1\",\n                                desc: \"desc test\",\n                                acceptanceCriteria: \"Task AC test\",\n                                storyPoints: 2,\n                                taskedTo: \"Ron Stoppable\",\n                                createdBy: \"Me\",\n                                status: \"In Progress\",\n                                sprintNum: 1\n                            },\n                            {\n                                id: \"2\",\n                                title: \"Task 2\",\n                                desc: \"desc test\",\n                                acceptanceCriteria: \"Task AC test\",\n                                storyPoints: 2,\n                                taskedTo: \"Ken Shimura\",\n                                createdBy: \"Me\",\n                                status: \"Ready\",\n                                sprintNum: 1\n                            },\n                            {\n                                id: \"3\",\n                                title: \"Task 3\",\n                                desc: \"desc test\",\n                                acceptanceCriteria: \"Task AC test\",\n                                storyPoints: 3,\n                                taskedTo: \"Ron Stoppable\",\n                                createdBy: \"Me\",\n                                status: \"Ready\",\n                                sprintNum: 1\n                            }, \n                        ]\n                    }, void 0, false, {\n                        fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/scrum/ScrumTabs.jsx\",\n                        lineNumber: 23,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/scrum/ScrumTabs.jsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, _this);\n            }\n        },\n        {\n            menuItem: \"Backlog\",\n            render: function() {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Tab.Pane, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Backlog__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        projectId: projectId\n                    }, void 0, false, {\n                        fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/scrum/ScrumTabs.jsx\",\n                        lineNumber: 67,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/scrum/ScrumTabs.jsx\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, _this);\n            }\n        }, \n    ];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), activeIndex = ref1[0], setActiveIndex = ref1[1];\n    var handleTabChange = function(e, param) {\n        var activeIndex = param.activeIndex;\n        return setActiveIndex(activeIndex);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        getData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Tab, {\n            panes: panes,\n            activeIndex: activeIndex,\n            onTabChange: handleTabChange\n        }, void 0, false, {\n            fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/scrum/ScrumTabs.jsx\",\n            lineNumber: 83,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/scrum/ScrumTabs.jsx\",\n        lineNumber: 82,\n        columnNumber: 5\n    }, _this);\n};\n_s(SubTabs, \"DE7JtGNpSRLmzKOxWAHDsA8vHVU=\");\n_c = SubTabs;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SubTabs);\nvar _c;\n$RefreshReg$(_c, \"SubTabs\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3dCLEtBQUc7a0JBQ0YsNEVBQUNqQyxrREFBRztZQUNGZSxLQUFLLEVBQUVBLEtBQUs7WUFDWmMsV0FBVyxFQUFFQSxXQUFXO1lBQ3hCSyxXQUFXLEVBQUVILGVBQWU7Ozs7O2lCQUM1Qjs7Ozs7YUFDRSxDQUNOO0FBQ0osQ0FBQztHQWxGSzFCLE9BQU87QUFBUEEsS0FBQUEsT0FBTztBQW9GYiwrREFBZUEsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvc2NydW0vU2NydW1UYWJzLmpzeD9lMjlhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUYWIgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCBTY3J1bWJvYXJkIGZyb20gXCIuL1NjcnVtYm9hcmRcIjtcbmltcG9ydCBCYWNrbG9nIGZyb20gXCIuL0JhY2tsb2dcIjtcbmltcG9ydCB7IGdldFNjcnVtYm9hcmRCeVByb2plY3RJZCB9IGZyb20gXCIuLi8uLi9oZWxwZXJzL21vbmdvZGIvU2NydW1DYWxsQ2VudGVyXCI7XG5pbXBvcnQgeyBnZXRTY3J1bVVzZXJzIH0gZnJvbSBcIi4uLy4uL2hlbHBlcnMvbW9uZ29kYi9Vc2Vyc0NhbGxDZW50ZXJcIjtcblxuY29uc3QgU3ViVGFicyA9ICh7IHByb2plY3RJZCB9KSA9PiB7XG5cbiAgY29uc3QgW3N0b3JpZXMsIHNldFN0b3JpZXNdID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IGdldERhdGEgPSBhc3luYygpID0+IHtcbiAgICBjb25zdCBzY3J1bURhdGEgPSBhd2FpdCBnZXRTY3J1bWJvYXJkQnlQcm9qZWN0SWQocHJvamVjdElkKTtcbiAgICBjb25zdCB1c2VycyA9IGF3YWl0IGdldFNjcnVtVXNlcnMoc2NydW1EYXRhLmRhdGEudXNlcnMpO1xuICAgIGNvbnNvbGUubG9nKHVzZXJzKTtcbiAgfVxuXG4gIGNvbnN0IHBhbmVzID0gW1xuICAgIHtcbiAgICAgIG1lbnVJdGVtOiBcIlNjcnVtIEJvYXJkXCIsXG4gICAgICByZW5kZXI6ICgpID0+IChcbiAgICAgICAgPFRhYi5QYW5lPlxuICAgICAgICAgIDxTY3J1bWJvYXJkXG4gICAgICAgICAgICBpbml0aWFsQ2FyZHM9e1tcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiBcIjFcIixcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJUYXNrIDFcIixcbiAgICAgICAgICAgICAgICBkZXNjOiBcImRlc2MgdGVzdFwiLFxuICAgICAgICAgICAgICAgIGFjY2VwdGFuY2VDcml0ZXJpYTogXCJUYXNrIEFDIHRlc3RcIixcbiAgICAgICAgICAgICAgICBzdG9yeVBvaW50czogMixcbiAgICAgICAgICAgICAgICB0YXNrZWRUbzogXCJSb24gU3RvcHBhYmxlXCIsXG4gICAgICAgICAgICAgICAgY3JlYXRlZEJ5OiBcIk1lXCIsXG4gICAgICAgICAgICAgICAgc3RhdHVzOiBcIkluIFByb2dyZXNzXCIsXG4gICAgICAgICAgICAgICAgc3ByaW50TnVtOiAxLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiMlwiLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlRhc2sgMlwiLFxuICAgICAgICAgICAgICAgIGRlc2M6IFwiZGVzYyB0ZXN0XCIsXG4gICAgICAgICAgICAgICAgYWNjZXB0YW5jZUNyaXRlcmlhOiBcIlRhc2sgQUMgdGVzdFwiLFxuICAgICAgICAgICAgICAgIHN0b3J5UG9pbnRzOiAyLFxuICAgICAgICAgICAgICAgIHRhc2tlZFRvOiBcIktlbiBTaGltdXJhXCIsXG4gICAgICAgICAgICAgICAgY3JlYXRlZEJ5OiBcIk1lXCIsXG4gICAgICAgICAgICAgICAgc3RhdHVzOiBcIlJlYWR5XCIsXG4gICAgICAgICAgICAgICAgc3ByaW50TnVtOiAxLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiM1wiLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlRhc2sgM1wiLFxuICAgICAgICAgICAgICAgIGRlc2M6IFwiZGVzYyB0ZXN0XCIsXG4gICAgICAgICAgICAgICAgYWNjZXB0YW5jZUNyaXRlcmlhOiBcIlRhc2sgQUMgdGVzdFwiLFxuICAgICAgICAgICAgICAgIHN0b3J5UG9pbnRzOiAzLFxuICAgICAgICAgICAgICAgIHRhc2tlZFRvOiBcIlJvbiBTdG9wcGFibGVcIixcbiAgICAgICAgICAgICAgICBjcmVhdGVkQnk6IFwiTWVcIixcbiAgICAgICAgICAgICAgICBzdGF0dXM6IFwiUmVhZHlcIixcbiAgICAgICAgICAgICAgICBzcHJpbnROdW06IDEsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvVGFiLlBhbmU+XG4gICAgICApLFxuICAgIH0sXG4gICAge1xuICAgICAgbWVudUl0ZW06IFwiQmFja2xvZ1wiLFxuICAgICAgcmVuZGVyOiAoKSA9PiAoXG4gICAgICAgIDxUYWIuUGFuZT5cbiAgICAgICAgICA8QmFja2xvZyBwcm9qZWN0SWQ9e3Byb2plY3RJZH0gLz5cbiAgICAgICAgPC9UYWIuUGFuZT5cbiAgICAgICksXG4gICAgfSxcbiAgXTtcblxuICBjb25zdCBbYWN0aXZlSW5kZXgsIHNldEFjdGl2ZUluZGV4XSA9IHVzZVN0YXRlKDApO1xuXG4gIGNvbnN0IGhhbmRsZVRhYkNoYW5nZSA9IChlLCB7IGFjdGl2ZUluZGV4IH0pID0+IHNldEFjdGl2ZUluZGV4KGFjdGl2ZUluZGV4KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldERhdGEoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxUYWJcbiAgICAgICAgcGFuZXM9e3BhbmVzfVxuICAgICAgICBhY3RpdmVJbmRleD17YWN0aXZlSW5kZXh9XG4gICAgICAgIG9uVGFiQ2hhbmdlPXtoYW5kbGVUYWJDaGFuZ2V9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3ViVGFicztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiVGFiIiwiU2NydW1ib2FyZCIsIkJhY2tsb2ciLCJnZXRTY3J1bWJvYXJkQnlQcm9qZWN0SWQiLCJnZXRTY3J1bVVzZXJzIiwiU3ViVGFicyIsInByb2plY3RJZCIsInN0b3JpZXMiLCJzZXRTdG9yaWVzIiwiZ2V0RGF0YSIsInNjcnVtRGF0YSIsInVzZXJzIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJwYW5lcyIsIm1lbnVJdGVtIiwicmVuZGVyIiwiUGFuZSIsImluaXRpYWxDYXJkcyIsImlkIiwidGl0bGUiLCJkZXNjIiwiYWNjZXB0YW5jZUNyaXRlcmlhIiwic3RvcnlQb2ludHMiLCJ0YXNrZWRUbyIsImNyZWF0ZWRCeSIsInN0YXR1cyIsInNwcmludE51bSIsImFjdGl2ZUluZGV4Iiwic2V0QWN0aXZlSW5kZXgiLCJoYW5kbGVUYWJDaGFuZ2UiLCJlIiwiZGl2Iiwib25UYWJDaGFuZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/scrum/ScrumTabs.jsx\n"));

/***/ })

});