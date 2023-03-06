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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _Scrumboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Scrumboard */ \"./components/scrum/Scrumboard.jsx\");\n/* harmony import */ var _Backlog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Backlog */ \"./components/scrum/Backlog.jsx\");\n/* harmony import */ var _helpers_mongodb_ScrumCallCenter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/mongodb/ScrumCallCenter */ \"./helpers/mongodb/ScrumCallCenter.js\");\n/* harmony import */ var _helpers_mongodb_UsersCallCenter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/mongodb/UsersCallCenter */ \"./helpers/mongodb/UsersCallCenter.js\");\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/actions */ \"./store/actions/index.js\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar SubTabs = function(param) {\n    var projectId = param.projectId;\n    _s();\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), codenames = ref[0], setCodenames = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), storyCards = ref1[0], setStoryCards = ref1[1];\n    var getData = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(function() {\n            var scrumData, users;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        return [\n                            4,\n                            (0,_helpers_mongodb_ScrumCallCenter__WEBPACK_IMPORTED_MODULE_5__.getScrumboardByProjectId)(projectId)\n                        ];\n                    case 1:\n                        scrumData = _state.sent();\n                        dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_7__.setScrumData)(scrumData.data));\n                        return [\n                            4,\n                            (0,_helpers_mongodb_UsersCallCenter__WEBPACK_IMPORTED_MODULE_6__.getScrumUsers)(scrumData.data.users)\n                        ];\n                    case 2:\n                        users = _state.sent();\n                        setCodenames(users.map(function(user) {\n                            return user.codename;\n                        }));\n                        setStoryCards(scrumData.data.backlog.filter(function(story) {\n                            return story.sprintStatus === \"current sprint\";\n                        }));\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function getData() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var panes = [\n        {\n            menuItem: \"Scrum Board\",\n            render: function() {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Tab.Pane, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Scrumboard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        initialCards: [\n                            {\n                                id: \"2\",\n                                title: \"Task 1\",\n                                description: \"desc test\",\n                                acceptanceCriteria: \"Task AC test\",\n                                storyPoints: 2,\n                                taskedTo: \"Ron Stoppable\",\n                                createdBy: \"Me\",\n                                status: \"In Progress\",\n                                sprintNum: \"next\"\n                            }\n                        ]\n                    }, void 0, false, {\n                        fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/scrum/ScrumTabs.jsx\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/scrum/ScrumTabs.jsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, _this);\n            }\n        },\n        {\n            menuItem: \"Backlog\",\n            render: function() {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Tab.Pane, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Backlog__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        projectId: projectId,\n                        codenames: codenames\n                    }, void 0, false, {\n                        fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/scrum/ScrumTabs.jsx\",\n                        lineNumber: 54,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/scrum/ScrumTabs.jsx\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, _this);\n            }\n        }, \n    ];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), activeIndex = ref2[0], setActiveIndex = ref2[1];\n    var handleTabChange = function(e, param) {\n        var activeIndex = param.activeIndex;\n        return setActiveIndex(activeIndex);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        getData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Tab, {\n            panes: panes,\n            activeIndex: activeIndex,\n            onTabChange: handleTabChange\n        }, void 0, false, {\n            fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/scrum/ScrumTabs.jsx\",\n            lineNumber: 70,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/scrum/ScrumTabs.jsx\",\n        lineNumber: 69,\n        columnNumber: 5\n    }, _this);\n};\n_s(SubTabs, \"ee1pJMtCJLuq5rGhsJwOBW+AClE=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch\n    ];\n});\n_c = SubTabs;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SubTabs);\nvar _c;\n$RefreshReg$(_c, \"SubTabs\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Riw0RUFBQzFDLG1EQUFHO1lBQ0Z3QixLQUFLLEVBQUVBLEtBQUs7WUFDWmMsV0FBVyxFQUFFQSxXQUFXO1lBQ3hCSyxXQUFXLEVBQUVILGVBQWU7Ozs7O2lCQUM1Qjs7Ozs7YUFDRSxDQUNOO0FBQ0osQ0FBQztHQW5FS2xDLE9BQU87O1FBRU1QLG9EQUFXOzs7QUFGeEJPLEtBQUFBLE9BQU87QUFxRWIsK0RBQWVBLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3NjcnVtL1NjcnVtVGFicy5qc3g/ZTI5YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IFRhYiB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IFNjcnVtYm9hcmQgZnJvbSBcIi4vU2NydW1ib2FyZFwiO1xuaW1wb3J0IEJhY2tsb2cgZnJvbSBcIi4vQmFja2xvZ1wiO1xuaW1wb3J0IHsgZ2V0U2NydW1ib2FyZEJ5UHJvamVjdElkIH0gZnJvbSBcIi4uLy4uL2hlbHBlcnMvbW9uZ29kYi9TY3J1bUNhbGxDZW50ZXJcIjtcbmltcG9ydCB7IGdldFNjcnVtVXNlcnMgfSBmcm9tIFwiLi4vLi4vaGVscGVycy9tb25nb2RiL1VzZXJzQ2FsbENlbnRlclwiO1xuaW1wb3J0IHsgc2V0U2NydW1EYXRhIH0gZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnNcIjtcblxuY29uc3QgU3ViVGFicyA9ICh7IHByb2plY3RJZCB9KSA9PiB7XG5cbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuXG4gIGNvbnN0IFtjb2RlbmFtZXMsIHNldENvZGVuYW1lc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtzdG9yeUNhcmRzLCBzZXRTdG9yeUNhcmRzXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBnZXREYXRhID0gYXN5bmMoKSA9PiB7XG4gICAgY29uc3Qgc2NydW1EYXRhID0gYXdhaXQgZ2V0U2NydW1ib2FyZEJ5UHJvamVjdElkKHByb2plY3RJZCk7XG4gICAgZGlzcGF0Y2goc2V0U2NydW1EYXRhKHNjcnVtRGF0YS5kYXRhKSk7XG4gICAgY29uc3QgdXNlcnMgPSBhd2FpdCBnZXRTY3J1bVVzZXJzKHNjcnVtRGF0YS5kYXRhLnVzZXJzKTtcbiAgICBzZXRDb2RlbmFtZXModXNlcnMubWFwKCh1c2VyKSA9PiB1c2VyLmNvZGVuYW1lKSk7XG4gICAgc2V0U3RvcnlDYXJkcyhcbiAgICAgIHNjcnVtRGF0YS5kYXRhLmJhY2tsb2cuZmlsdGVyKFxuICAgICAgICAoc3RvcnkpID0+IHN0b3J5LnNwcmludFN0YXR1cyA9PT0gXCJjdXJyZW50IHNwcmludFwiXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0IHBhbmVzID0gW1xuICAgIHtcbiAgICAgIG1lbnVJdGVtOiBcIlNjcnVtIEJvYXJkXCIsXG4gICAgICByZW5kZXI6ICgpID0+IChcbiAgICAgICAgPFRhYi5QYW5lPlxuICAgICAgICAgIDxTY3J1bWJvYXJkXG4gICAgICAgICAgICBpbml0aWFsQ2FyZHM9e1t7XG4gICAgICAgICAgICAgIGlkOiBcIjJcIixcbiAgICAgICAgICAgICAgdGl0bGU6IFwiVGFzayAxXCIsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcImRlc2MgdGVzdFwiLFxuICAgICAgICAgICAgICBhY2NlcHRhbmNlQ3JpdGVyaWE6IFwiVGFzayBBQyB0ZXN0XCIsXG4gICAgICAgICAgICAgIHN0b3J5UG9pbnRzOiAyLFxuICAgICAgICAgICAgICB0YXNrZWRUbzogXCJSb24gU3RvcHBhYmxlXCIsXG4gICAgICAgICAgICAgIGNyZWF0ZWRCeTogXCJNZVwiLFxuICAgICAgICAgICAgICBzdGF0dXM6IFwiSW4gUHJvZ3Jlc3NcIixcbiAgICAgICAgICAgICAgc3ByaW50TnVtOiBcIm5leHRcIixcbiAgICAgICAgICAgIH1dfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvVGFiLlBhbmU+XG4gICAgICApLFxuICAgIH0sXG4gICAge1xuICAgICAgbWVudUl0ZW06IFwiQmFja2xvZ1wiLFxuICAgICAgcmVuZGVyOiAoKSA9PiAoXG4gICAgICAgIDxUYWIuUGFuZT5cbiAgICAgICAgICA8QmFja2xvZyBwcm9qZWN0SWQ9e3Byb2plY3RJZH0gY29kZW5hbWVzPXtjb2RlbmFtZXN9IC8+XG4gICAgICAgIDwvVGFiLlBhbmU+XG4gICAgICApLFxuICAgIH0sXG4gIF07XG5cbiAgY29uc3QgW2FjdGl2ZUluZGV4LCBzZXRBY3RpdmVJbmRleF0gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCBoYW5kbGVUYWJDaGFuZ2UgPSAoZSwgeyBhY3RpdmVJbmRleCB9KSA9PiBzZXRBY3RpdmVJbmRleChhY3RpdmVJbmRleCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXREYXRhKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8VGFiXG4gICAgICAgIHBhbmVzPXtwYW5lc31cbiAgICAgICAgYWN0aXZlSW5kZXg9e2FjdGl2ZUluZGV4fVxuICAgICAgICBvblRhYkNoYW5nZT17aGFuZGxlVGFiQ2hhbmdlfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN1YlRhYnM7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZURpc3BhdGNoIiwiVGFiIiwiU2NydW1ib2FyZCIsIkJhY2tsb2ciLCJnZXRTY3J1bWJvYXJkQnlQcm9qZWN0SWQiLCJnZXRTY3J1bVVzZXJzIiwic2V0U2NydW1EYXRhIiwiU3ViVGFicyIsInByb2plY3RJZCIsImRpc3BhdGNoIiwiY29kZW5hbWVzIiwic2V0Q29kZW5hbWVzIiwic3RvcnlDYXJkcyIsInNldFN0b3J5Q2FyZHMiLCJnZXREYXRhIiwic2NydW1EYXRhIiwidXNlcnMiLCJkYXRhIiwibWFwIiwidXNlciIsImNvZGVuYW1lIiwiYmFja2xvZyIsImZpbHRlciIsInN0b3J5Iiwic3ByaW50U3RhdHVzIiwicGFuZXMiLCJtZW51SXRlbSIsInJlbmRlciIsIlBhbmUiLCJpbml0aWFsQ2FyZHMiLCJpZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJhY2NlcHRhbmNlQ3JpdGVyaWEiLCJzdG9yeVBvaW50cyIsInRhc2tlZFRvIiwiY3JlYXRlZEJ5Iiwic3RhdHVzIiwic3ByaW50TnVtIiwiYWN0aXZlSW5kZXgiLCJzZXRBY3RpdmVJbmRleCIsImhhbmRsZVRhYkNoYW5nZSIsImUiLCJkaXYiLCJvblRhYkNoYW5nZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/scrum/ScrumTabs.jsx\n"));

/***/ })

});