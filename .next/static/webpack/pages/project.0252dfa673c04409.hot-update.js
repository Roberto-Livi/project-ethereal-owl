"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/project",{

/***/ "./pages/project.js":
/*!**************************!*\
  !*** ./pages/project.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_utilities_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/utilities/Layout */ \"./components/utilities/Layout.js\");\n/* harmony import */ var _helpers_users_users__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/users/users */ \"./helpers/users/users.js\");\n/* harmony import */ var _components_projects_JoinRequest__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/projects/JoinRequest */ \"./components/projects/JoinRequest.jsx\");\n/* harmony import */ var _components_projects_PendingRequests__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/projects/PendingRequests */ \"./components/projects/PendingRequests.jsx\");\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/actions */ \"./store/actions/index.js\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Project = function(param) {\n    var projectId = param.projectId;\n    _s();\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), recruited = ref[0], setRecruited = ref[1];\n    var walletAddress = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function(state) {\n        return state.manageData.walletAddress;\n    });\n    var projectData = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function(state) {\n        return state.manageData.currentProject;\n    });\n    var userInfo = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function(state) {\n        return state.manageData.userInfo;\n    });\n    var getProjectData = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(function() {\n            var data, recruitRequests;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        return [\n                            4,\n                            (0,_helpers_users_users__WEBPACK_IMPORTED_MODULE_4__.getProject)(walletAddress, projectId)\n                        ];\n                    case 1:\n                        data = _state.sent();\n                        dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_7__.updateCurrentProject)(data));\n                        if (!!_.isNull(userInfo)) return [\n                            3,\n                            3\n                        ];\n                        return [\n                            4,\n                            (0,_helpers_users_users__WEBPACK_IMPORTED_MODULE_4__.getUsersRecruitRequests)(walletAddress, userInfo.pendingRequestsCount)\n                        ];\n                    case 2:\n                        recruitRequests = _state.sent();\n                        alreadyRecruited(data, recruitRequests);\n                        _state.label = 3;\n                    case 3:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function getProjectData() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var alreadyRecruited = function(data, recruitRequests) {\n        var requestFound = recruitRequests.some(function(req) {\n            return _.isEqual(req.project.id, data.id);\n        });\n        console.log(requestFound);\n        setRecruited(requestFound);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        getProjectData();\n    }, [\n        walletAddress,\n        userInfo\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_utilities_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: projectData.project.name\n            }, void 0, false, {\n                fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/pages/project.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: [\n                    \"Project ID: \",\n                    projectId\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/pages/project.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ol\", {\n                children: projectData.members.map(function(member, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: member.codename\n                    }, index, false, {\n                        fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/pages/project.js\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/pages/project.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, _this),\n            projectData.loaded && (projectData.isMember ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_projects_PendingRequests__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                projectId: projectId,\n                projectData: projectData\n            }, void 0, false, {\n                fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/pages/project.js\",\n                lineNumber: 56,\n                columnNumber: 9\n            }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_projects_JoinRequest__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                projectId: projectId,\n                projectData: projectData,\n                alreadyRecruited: recruited\n            }, void 0, false, {\n                fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/pages/project.js\",\n                lineNumber: 61,\n                columnNumber: 9\n            }, _this))\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/pages/project.js\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, _this);\n};\n_s(Project, \"TMRAzqe2bkP4JBBZzts+tptGlwo=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = Project;\nProject.getInitialProps = function(props) {\n    return {\n        projectId: props.query.id\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Project);\nvar _c;\n$RefreshReg$(_c, \"Project\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVcsRUFBRUEsV0FBVzs7Ozs7cUJBQ3hCLGlCQUVGLDhEQUFDWCx3RUFBVztnQkFDVkksU0FBUyxFQUFFQSxTQUFTO2dCQUNwQk8sV0FBVyxFQUFFQSxXQUFXO2dCQUN4QlMsZ0JBQWdCLEVBQUVkLFNBQVM7Ozs7O3FCQUMzQixDQUNIOzs7Ozs7YUFFTSxDQUNUO0FBQ0osQ0FBQztHQTVES0gsT0FBTzs7UUFFTVIsb0RBQVc7UUFJTkMsb0RBQVc7UUFDYkEsb0RBQVc7UUFDZEEsb0RBQVc7OztBQVJ4Qk8sS0FBQUEsT0FBTztBQThEYkEsT0FBTyxDQUFDc0MsZUFBZSxHQUFHLFNBQUNDLEtBQUssRUFBSztJQUNuQyxPQUFPO1FBQUV0QyxTQUFTLEVBQUVzQyxLQUFLLENBQUNDLEtBQUssQ0FBQ2pCLEVBQUU7S0FBRSxDQUFDO0FBQ3ZDLENBQUMsQ0FBQztBQUVGLCtEQUFldkIsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb2plY3QuanM/NTE4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvdXRpbGl0aWVzL0xheW91dFwiO1xuaW1wb3J0IHsgZ2V0UHJvamVjdCwgZ2V0VXNlcnNSZWNydWl0UmVxdWVzdHMgfSBmcm9tIFwiLi4vaGVscGVycy91c2Vycy91c2Vyc1wiO1xuaW1wb3J0IEpvaW5SZXF1ZXN0IGZyb20gXCIuLi9jb21wb25lbnRzL3Byb2plY3RzL0pvaW5SZXF1ZXN0XCI7XG5pbXBvcnQgUGVuZGluZ1JlcXVlc3RzIGZyb20gXCIuLi9jb21wb25lbnRzL3Byb2plY3RzL1BlbmRpbmdSZXF1ZXN0c1wiO1xuaW1wb3J0IHsgdXBkYXRlQ3VycmVudFByb2plY3QgfSBmcm9tIFwiLi4vc3RvcmUvYWN0aW9uc1wiO1xuXG5cbmNvbnN0IFByb2plY3QgPSAoeyBwcm9qZWN0SWQgfSkgPT4ge1xuXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuICBjb25zdCBbcmVjcnVpdGVkLCBzZXRSZWNydWl0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHdhbGxldEFkZHJlc3MgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLm1hbmFnZURhdGEud2FsbGV0QWRkcmVzcyk7XG4gIGNvbnN0IHByb2plY3REYXRhID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5tYW5hZ2VEYXRhLmN1cnJlbnRQcm9qZWN0KTtcbiAgY29uc3QgdXNlckluZm8gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLm1hbmFnZURhdGEudXNlckluZm8pO1xuXG4gIGNvbnN0IGdldFByb2plY3REYXRhID0gYXN5bmMoKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldFByb2plY3Qod2FsbGV0QWRkcmVzcywgcHJvamVjdElkKTtcbiAgICBkaXNwYXRjaCh1cGRhdGVDdXJyZW50UHJvamVjdChkYXRhKSk7XG4gICAgaWYoIV8uaXNOdWxsKHVzZXJJbmZvKSkge1xuICAgICAgY29uc3QgcmVjcnVpdFJlcXVlc3RzID0gYXdhaXQgZ2V0VXNlcnNSZWNydWl0UmVxdWVzdHMoXG4gICAgICAgIHdhbGxldEFkZHJlc3MsXG4gICAgICAgIHVzZXJJbmZvLnBlbmRpbmdSZXF1ZXN0c0NvdW50XG4gICAgICApO1xuICAgICAgYWxyZWFkeVJlY3J1aXRlZChkYXRhLCByZWNydWl0UmVxdWVzdHMpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGFscmVhZHlSZWNydWl0ZWQgPSAoZGF0YSwgcmVjcnVpdFJlcXVlc3RzKSA9PiB7XG4gICAgY29uc3QgcmVxdWVzdEZvdW5kID0gcmVjcnVpdFJlcXVlc3RzLnNvbWUoKHJlcSkgPT5cbiAgICAgIF8uaXNFcXVhbChyZXEucHJvamVjdC5pZCwgZGF0YS5pZClcbiAgICApO1xuICAgIGNvbnNvbGUubG9nKHJlcXVlc3RGb3VuZClcbiAgICBzZXRSZWNydWl0ZWQocmVxdWVzdEZvdW5kKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldFByb2plY3REYXRhKCk7XG4gIH0sIFt3YWxsZXRBZGRyZXNzLCB1c2VySW5mb10pO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxoMT57cHJvamVjdERhdGEucHJvamVjdC5uYW1lfTwvaDE+XG4gICAgICA8aDI+UHJvamVjdCBJRDoge3Byb2plY3RJZH08L2gyPlxuXG4gICAgICA8b2w+XG4gICAgICAgIHtwcm9qZWN0RGF0YS5tZW1iZXJzLm1hcCgobWVtYmVyLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT57bWVtYmVyLmNvZGVuYW1lfTwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC9vbD5cbiAgICAgIHsgcHJvamVjdERhdGEubG9hZGVkICYmIChcbiAgICAgICAgcHJvamVjdERhdGEuaXNNZW1iZXIgPyAoXG4gICAgICAgIDxQZW5kaW5nUmVxdWVzdHNcbiAgICAgICAgICBwcm9qZWN0SWQ9e3Byb2plY3RJZH1cbiAgICAgICAgICBwcm9qZWN0RGF0YT17cHJvamVjdERhdGF9XG4gICAgICAgIC8+XG4gICAgICApIDogKFxuICAgICAgICA8Sm9pblJlcXVlc3RcbiAgICAgICAgICBwcm9qZWN0SWQ9e3Byb2plY3RJZH1cbiAgICAgICAgICBwcm9qZWN0RGF0YT17cHJvamVjdERhdGF9XG4gICAgICAgICAgYWxyZWFkeVJlY3J1aXRlZD17cmVjcnVpdGVkfVxuICAgICAgICAvPlxuICAgICAgKSlcbiAgICAgIH1cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cblxuUHJvamVjdC5nZXRJbml0aWFsUHJvcHMgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIHsgcHJvamVjdElkOiBwcm9wcy5xdWVyeS5pZCB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJMYXlvdXQiLCJnZXRQcm9qZWN0IiwiZ2V0VXNlcnNSZWNydWl0UmVxdWVzdHMiLCJKb2luUmVxdWVzdCIsIlBlbmRpbmdSZXF1ZXN0cyIsInVwZGF0ZUN1cnJlbnRQcm9qZWN0IiwiUHJvamVjdCIsInByb2plY3RJZCIsImRpc3BhdGNoIiwicmVjcnVpdGVkIiwic2V0UmVjcnVpdGVkIiwid2FsbGV0QWRkcmVzcyIsInN0YXRlIiwibWFuYWdlRGF0YSIsInByb2plY3REYXRhIiwiY3VycmVudFByb2plY3QiLCJ1c2VySW5mbyIsImdldFByb2plY3REYXRhIiwiZGF0YSIsInJlY3J1aXRSZXF1ZXN0cyIsIl8iLCJpc051bGwiLCJwZW5kaW5nUmVxdWVzdHNDb3VudCIsImFscmVhZHlSZWNydWl0ZWQiLCJyZXF1ZXN0Rm91bmQiLCJzb21lIiwicmVxIiwiaXNFcXVhbCIsInByb2plY3QiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJoMSIsIm5hbWUiLCJoMiIsIm9sIiwibWVtYmVycyIsIm1hcCIsIm1lbWJlciIsImluZGV4IiwibGkiLCJjb2RlbmFtZSIsImxvYWRlZCIsImlzTWVtYmVyIiwiZ2V0SW5pdGlhbFByb3BzIiwicHJvcHMiLCJxdWVyeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/project.js\n"));

/***/ })

});