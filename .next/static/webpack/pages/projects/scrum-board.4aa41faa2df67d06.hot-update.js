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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _Scrumboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Scrumboard */ \"./components/scrum/Scrumboard.jsx\");\n/* harmony import */ var _Backlog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Backlog */ \"./components/scrum/Backlog.jsx\");\n/* harmony import */ var _helpers_mongodb_ScrumCallCenter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/mongodb/ScrumCallCenter */ \"./helpers/mongodb/ScrumCallCenter.js\");\n/* harmony import */ var _helpers_mongodb_UsersCallCenter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/mongodb/UsersCallCenter */ \"./helpers/mongodb/UsersCallCenter.js\");\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/actions */ \"./store/actions/index.js\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar SubTabs = function(param) {\n    var projectId = param.projectId;\n    _s();\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), codenames = ref[0], setCodenames = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), storyCards = ref1[0], setStoryCards = ref1[1];\n    var data = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function(state) {\n        return state.manageData.scrumData;\n    });\n    var getData = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(function() {\n            var scrumDat, users;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        return [\n                            4,\n                            (0,_helpers_mongodb_ScrumCallCenter__WEBPACK_IMPORTED_MODULE_5__.getScrumboardByProjectId)(projectId)\n                        ];\n                    case 1:\n                        scrumDat = _state.sent();\n                        dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_7__.setScrumData)(scrumDat.data));\n                        return [\n                            4,\n                            (0,_helpers_mongodb_UsersCallCenter__WEBPACK_IMPORTED_MODULE_6__.getScrumUsers)(scrumDat.data.users)\n                        ];\n                    case 2:\n                        users = _state.sent();\n                        setCodenames(users.map(function(user) {\n                            return user.codename;\n                        }));\n                        setStoryCards(scrumDat.data.backlog.filter(function(story) {\n                            return story.sprintStatus === \"Current Sprint\";\n                        }));\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function getData() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var panes = [\n        {\n            menuItem: \"Scrum Board\",\n            render: function() {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Tab.Pane, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Scrumboard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        projectId: projectId,\n                        initialCards: storyCards\n                    }, void 0, false, {\n                        fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/scrum/ScrumTabs.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/scrum/ScrumTabs.jsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, _this);\n            }\n        },\n        {\n            menuItem: \"Backlog\",\n            render: function() {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Tab.Pane, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Backlog__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        projectId: projectId,\n                        codenames: codenames\n                    }, void 0, false, {\n                        fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/scrum/ScrumTabs.jsx\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/scrum/ScrumTabs.jsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, _this);\n            }\n        }, \n    ];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), activeIndex = ref2[0], setActiveIndex = ref2[1];\n    var handleTabChange = function(e, param) {\n        var activeIndex = param.activeIndex;\n        return setActiveIndex(activeIndex);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (data) {\n            getData();\n        }\n    }, [\n        data\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Tab, {\n            panes: panes,\n            activeIndex: activeIndex,\n            onTabChange: handleTabChange\n        }, void 0, false, {\n            fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/scrum/ScrumTabs.jsx\",\n            lineNumber: 65,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/scrum/ScrumTabs.jsx\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, _this);\n};\n_s(SubTabs, \"Ptb860vZdBi9cy4FvRomWyDGtD8=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = SubTabs;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SubTabs);\nvar _c;\n$RefreshReg$(_c, \"SubTabs\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FBVztZQUN4QkssV0FBVyxFQUFFSCxlQUFlOzs7OztpQkFDNUI7Ozs7O2FBQ0UsQ0FDTjtBQUNKLENBQUM7R0E5REs1QixPQUFPOztRQUVNUixvREFBVztRQUtmQyxvREFBVzs7O0FBUHBCTyxLQUFBQSxPQUFPO0FBZ0ViLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zY3J1bS9TY3J1bVRhYnMuanN4P2UyOWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgVGFiIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgU2NydW1ib2FyZCBmcm9tIFwiLi9TY3J1bWJvYXJkXCI7XG5pbXBvcnQgQmFja2xvZyBmcm9tIFwiLi9CYWNrbG9nXCI7XG5pbXBvcnQgeyBnZXRTY3J1bWJvYXJkQnlQcm9qZWN0SWQgfSBmcm9tIFwiLi4vLi4vaGVscGVycy9tb25nb2RiL1NjcnVtQ2FsbENlbnRlclwiO1xuaW1wb3J0IHsgZ2V0U2NydW1Vc2VycyB9IGZyb20gXCIuLi8uLi9oZWxwZXJzL21vbmdvZGIvVXNlcnNDYWxsQ2VudGVyXCI7XG5pbXBvcnQgeyBzZXRTY3J1bURhdGEgfSBmcm9tIFwiLi4vLi4vc3RvcmUvYWN0aW9uc1wiO1xuXG5jb25zdCBTdWJUYWJzID0gKHsgcHJvamVjdElkIH0pID0+IHtcblxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgY29uc3QgW2NvZGVuYW1lcywgc2V0Q29kZW5hbWVzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3N0b3J5Q2FyZHMsIHNldFN0b3J5Q2FyZHNdID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IGRhdGEgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLm1hbmFnZURhdGEuc2NydW1EYXRhKTtcblxuICBjb25zdCBnZXREYXRhID0gYXN5bmMoKSA9PiB7XG4gICAgY29uc3Qgc2NydW1EYXQgPSBhd2FpdCBnZXRTY3J1bWJvYXJkQnlQcm9qZWN0SWQocHJvamVjdElkKTtcbiAgICBkaXNwYXRjaChzZXRTY3J1bURhdGEoc2NydW1EYXQuZGF0YSkpO1xuICAgIGNvbnN0IHVzZXJzID0gYXdhaXQgZ2V0U2NydW1Vc2VycyhzY3J1bURhdC5kYXRhLnVzZXJzKTtcbiAgICBzZXRDb2RlbmFtZXModXNlcnMubWFwKCh1c2VyKSA9PiB1c2VyLmNvZGVuYW1lKSk7XG4gICAgc2V0U3RvcnlDYXJkcyhcbiAgICAgIHNjcnVtRGF0LmRhdGEuYmFja2xvZy5maWx0ZXIoXG4gICAgICAgIChzdG9yeSkgPT4gc3Rvcnkuc3ByaW50U3RhdHVzID09PSBcIkN1cnJlbnQgU3ByaW50XCJcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgY29uc3QgcGFuZXMgPSBbXG4gICAge1xuICAgICAgbWVudUl0ZW06IFwiU2NydW0gQm9hcmRcIixcbiAgICAgIHJlbmRlcjogKCkgPT4gKFxuICAgICAgICA8VGFiLlBhbmU+XG4gICAgICAgICAgPFNjcnVtYm9hcmRcbiAgICAgICAgICAgIHByb2plY3RJZD17cHJvamVjdElkfVxuICAgICAgICAgICAgaW5pdGlhbENhcmRzPXtzdG9yeUNhcmRzfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvVGFiLlBhbmU+XG4gICAgICApLFxuICAgIH0sXG4gICAge1xuICAgICAgbWVudUl0ZW06IFwiQmFja2xvZ1wiLFxuICAgICAgcmVuZGVyOiAoKSA9PiAoXG4gICAgICAgIDxUYWIuUGFuZT5cbiAgICAgICAgICA8QmFja2xvZyBwcm9qZWN0SWQ9e3Byb2plY3RJZH0gY29kZW5hbWVzPXtjb2RlbmFtZXN9IC8+XG4gICAgICAgIDwvVGFiLlBhbmU+XG4gICAgICApLFxuICAgIH0sXG4gIF07XG5cbiAgY29uc3QgW2FjdGl2ZUluZGV4LCBzZXRBY3RpdmVJbmRleF0gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCBoYW5kbGVUYWJDaGFuZ2UgPSAoZSwgeyBhY3RpdmVJbmRleCB9KSA9PiBzZXRBY3RpdmVJbmRleChhY3RpdmVJbmRleCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZihkYXRhKSB7XG4gICAgICBnZXREYXRhKCk7XG4gICAgfVxuICB9LCBbZGF0YV0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxUYWJcbiAgICAgICAgcGFuZXM9e3BhbmVzfVxuICAgICAgICBhY3RpdmVJbmRleD17YWN0aXZlSW5kZXh9XG4gICAgICAgIG9uVGFiQ2hhbmdlPXtoYW5kbGVUYWJDaGFuZ2V9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3ViVGFicztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsIlRhYiIsIlNjcnVtYm9hcmQiLCJCYWNrbG9nIiwiZ2V0U2NydW1ib2FyZEJ5UHJvamVjdElkIiwiZ2V0U2NydW1Vc2VycyIsInNldFNjcnVtRGF0YSIsIlN1YlRhYnMiLCJwcm9qZWN0SWQiLCJkaXNwYXRjaCIsImNvZGVuYW1lcyIsInNldENvZGVuYW1lcyIsInN0b3J5Q2FyZHMiLCJzZXRTdG9yeUNhcmRzIiwiZGF0YSIsInN0YXRlIiwibWFuYWdlRGF0YSIsInNjcnVtRGF0YSIsImdldERhdGEiLCJzY3J1bURhdCIsInVzZXJzIiwibWFwIiwidXNlciIsImNvZGVuYW1lIiwiYmFja2xvZyIsImZpbHRlciIsInN0b3J5Iiwic3ByaW50U3RhdHVzIiwicGFuZXMiLCJtZW51SXRlbSIsInJlbmRlciIsIlBhbmUiLCJpbml0aWFsQ2FyZHMiLCJhY3RpdmVJbmRleCIsInNldEFjdGl2ZUluZGV4IiwiaGFuZGxlVGFiQ2hhbmdlIiwiZSIsImRpdiIsIm9uVGFiQ2hhbmdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/scrum/ScrumTabs.jsx\n"));

/***/ })

});