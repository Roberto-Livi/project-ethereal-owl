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

/***/ "./components/projects/JoinRequest.jsx":
/*!*********************************************!*\
  !*** ./components/projects/JoinRequest.jsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _helpers_mongodb_NotificationCallCenter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/mongodb/NotificationCallCenter */ \"./helpers/mongodb/NotificationCallCenter.js\");\n/* harmony import */ var _helpers_users_users__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/users/users */ \"./helpers/users/users.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar JoinRequest = function(param) {\n    var projectId = param.projectId, projectName = param.projectName, members = param.members;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), hideError = ref[0], setHideError = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), transactionPending = ref1[0], setTransactionPending = ref1[1];\n    var walletAddress = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function(state) {\n        return state.manageData.walletAddress;\n    });\n    var userInfo = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function(state) {\n        return state.manageData.userInfo;\n    });\n    var mongoNotifications = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function(state) {\n        return state.manageData.mongoNotifications;\n    });\n    var joinRequest = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(function() {\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this, function(_state) {\n                setTransactionPending(true);\n                if (userInfo) {\n                    // const resp = await makeJoinRequest(walletAddress, projectId);\n                    // setHideError(true);\n                    if (true) {\n                        sendNotificationsToMembers(members);\n                    }\n                // if(resp && userInfo.mongoNotificationsId !== \"0\") {\n                //   const notification = {\n                //     message: \"first notification testing\"\n                //   }\n                //   const updated = [...mongoNotifications, notification];\n                //   addNotification(userInfo.mongoNotificationsId, updated);\n                // }\n                } else {\n                    setHideError(false);\n                }\n                setTransactionPending(false);\n                return [\n                    2\n                ];\n            });\n        });\n        return function joinRequest() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var sendNotificationsToMembers = function(members) {\n        members.map(function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(function(member) {\n                var mongoUser, notification, updatedNotifications;\n                return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            if (!!lodash__WEBPACK_IMPORTED_MODULE_5___default().isEqual(member.mongoNotificationsId, \"0\")) return [\n                                3,\n                                2\n                            ];\n                            return [\n                                4,\n                                (0,_helpers_mongodb_NotificationCallCenter__WEBPACK_IMPORTED_MODULE_3__.getUsersNotifications)(member.mongoNotificationsId)\n                            ];\n                        case 1:\n                            mongoUser = _state.sent();\n                            if (mongoUser.successfulResponse) {\n                                notification = {\n                                    message: \"\".concat(userInfo.codename, \" has requested to join \")\n                                };\n                                updatedNotifications = [\n                                    notification\n                                ].concat((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(mongoUser.data));\n                                (0,_helpers_mongodb_NotificationCallCenter__WEBPACK_IMPORTED_MODULE_3__.addNotification)();\n                            }\n                            _state.label = 2;\n                        case 2:\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return function(member) {\n                return _ref.apply(this, arguments);\n            };\n        }());\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Button, {\n                loading: transactionPending,\n                color: \"violet\",\n                onClick: joinRequest,\n                children: \"Request to Join\"\n            }, void 0, false, {\n                fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/projects/JoinRequest.jsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Message, {\n                hidden: hideError,\n                negative: true,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Message.Header, {\n                        children: \"Unable to send request\"\n                    }, void 0, false, {\n                        fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/projects/JoinRequest.jsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Please connect your wallet\"\n                    }, void 0, false, {\n                        fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/projects/JoinRequest.jsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/projects/JoinRequest.jsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/projects/JoinRequest.jsx\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, _this);\n};\n_s(JoinRequest, \"1nIXTFGK7wSEMbb1i9cBh5OGVrU=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = JoinRequest;\n/* harmony default export */ __webpack_exports__[\"default\"] = (JoinRequest);\nvar _c;\n$RefreshReg$(_c, \"JoinRequest\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSyxFQUFDLFFBQVE7Z0JBQUNDLE9BQU8sRUFBRWhCLFdBQVc7MEJBQUUsaUJBRTFFOzs7OztxQkFBUzswQkFDVCw4REFBQ2xCLHNEQUFPO2dCQUFDbUMsTUFBTSxFQUFFMUIsU0FBUztnQkFBRTJCLFFBQVE7O2tDQUNsQyw4REFBQ3BDLDZEQUFjO2tDQUFDLHdCQUVoQjs7Ozs7NkJBQWlCO2tDQUNqQiw4REFBQ3NDLEdBQUM7a0NBQUMsNEJBQTBCOzs7Ozs2QkFBSTs7Ozs7O3FCQUN6Qjs7Ozs7O2FBQ04sQ0FDTjtBQUNKLENBQUM7R0ExREtqQyxXQUFXOztRQUtPUCxvREFBVztRQUNoQkEsb0RBQVc7UUFDREEsb0RBQVc7OztBQVBsQ08sS0FBQUEsV0FBVztBQTREakIsK0RBQWVBLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3Byb2plY3RzL0pvaW5SZXF1ZXN0LmpzeD82YTNjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IEJ1dHRvbiwgTWVzc2FnZSB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IHsgYWRkTm90aWZpY2F0aW9uIH0gZnJvbSBcIi4uLy4uL2hlbHBlcnMvbW9uZ29kYi9Ob3RpZmljYXRpb25DYWxsQ2VudGVyXCI7XG5pbXBvcnQgeyBtYWtlSm9pblJlcXVlc3QgfSBmcm9tIFwiLi4vLi4vaGVscGVycy91c2Vycy91c2Vyc1wiO1xuaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IHsgZ2V0VXNlcnNOb3RpZmljYXRpb25zIH0gZnJvbSBcIi4uLy4uL2hlbHBlcnMvbW9uZ29kYi9Ob3RpZmljYXRpb25DYWxsQ2VudGVyXCI7XG5cblxuY29uc3QgSm9pblJlcXVlc3QgPSAoeyBwcm9qZWN0SWQsIHByb2plY3ROYW1lLCBtZW1iZXJzIH0pID0+IHtcblxuICBjb25zdCBbaGlkZUVycm9yLCBzZXRIaWRlRXJyb3JdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFt0cmFuc2FjdGlvblBlbmRpbmcsIHNldFRyYW5zYWN0aW9uUGVuZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgd2FsbGV0QWRkcmVzcyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUubWFuYWdlRGF0YS53YWxsZXRBZGRyZXNzKTtcbiAgY29uc3QgdXNlckluZm8gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLm1hbmFnZURhdGEudXNlckluZm8pO1xuICBjb25zdCBtb25nb05vdGlmaWNhdGlvbnMgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLm1hbmFnZURhdGEubW9uZ29Ob3RpZmljYXRpb25zKTtcblxuICBjb25zdCBqb2luUmVxdWVzdCA9IGFzeW5jKCkgPT4ge1xuICAgIHNldFRyYW5zYWN0aW9uUGVuZGluZyh0cnVlKTtcbiAgICBpZih1c2VySW5mbykge1xuICAgICAgLy8gY29uc3QgcmVzcCA9IGF3YWl0IG1ha2VKb2luUmVxdWVzdCh3YWxsZXRBZGRyZXNzLCBwcm9qZWN0SWQpO1xuICAgICAgLy8gc2V0SGlkZUVycm9yKHRydWUpO1xuICAgICAgaWYoMSA9PT0gMSkge1xuICAgICAgICBzZW5kTm90aWZpY2F0aW9uc1RvTWVtYmVycyhtZW1iZXJzKTtcbiAgICAgIH1cbiAgICAgIC8vIGlmKHJlc3AgJiYgdXNlckluZm8ubW9uZ29Ob3RpZmljYXRpb25zSWQgIT09IFwiMFwiKSB7XG4gICAgICAvLyAgIGNvbnN0IG5vdGlmaWNhdGlvbiA9IHtcbiAgICAgIC8vICAgICBtZXNzYWdlOiBcImZpcnN0IG5vdGlmaWNhdGlvbiB0ZXN0aW5nXCJcbiAgICAgIC8vICAgfVxuICAgICAgLy8gICBjb25zdCB1cGRhdGVkID0gWy4uLm1vbmdvTm90aWZpY2F0aW9ucywgbm90aWZpY2F0aW9uXTtcbiAgICAgIC8vICAgYWRkTm90aWZpY2F0aW9uKHVzZXJJbmZvLm1vbmdvTm90aWZpY2F0aW9uc0lkLCB1cGRhdGVkKTtcbiAgICAgIC8vIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc2V0SGlkZUVycm9yKGZhbHNlKTtcbiAgICB9XG4gICAgc2V0VHJhbnNhY3Rpb25QZW5kaW5nKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBzZW5kTm90aWZpY2F0aW9uc1RvTWVtYmVycyA9IChtZW1iZXJzKSA9PiB7XG4gICAgbWVtYmVycy5tYXAoYXN5bmMobWVtYmVyKSA9PiB7XG4gICAgICBpZighXy5pc0VxdWFsKG1lbWJlci5tb25nb05vdGlmaWNhdGlvbnNJZCwgXCIwXCIpKSB7XG4gICAgICAgIGNvbnN0IG1vbmdvVXNlciA9IGF3YWl0IGdldFVzZXJzTm90aWZpY2F0aW9ucyhtZW1iZXIubW9uZ29Ob3RpZmljYXRpb25zSWQpO1xuICAgICAgICBpZihtb25nb1VzZXIuc3VjY2Vzc2Z1bFJlc3BvbnNlKSB7XG4gICAgICAgICAgY29uc3Qgbm90aWZpY2F0aW9uID0ge1xuICAgICAgICAgICAgbWVzc2FnZTogYCR7dXNlckluZm8uY29kZW5hbWV9IGhhcyByZXF1ZXN0ZWQgdG8gam9pbiBgLFxuICAgICAgICAgIH07XG4gICAgICAgICAgY29uc3QgdXBkYXRlZE5vdGlmaWNhdGlvbnMgPSBbbm90aWZpY2F0aW9uLCAuLi5tb25nb1VzZXIuZGF0YV07XG4gICAgICAgICAgYWRkTm90aWZpY2F0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEJ1dHRvbiBsb2FkaW5nPXt0cmFuc2FjdGlvblBlbmRpbmd9IGNvbG9yPVwidmlvbGV0XCIgb25DbGljaz17am9pblJlcXVlc3R9PlxuICAgICAgICBSZXF1ZXN0IHRvIEpvaW5cbiAgICAgIDwvQnV0dG9uPlxuICAgICAgPE1lc3NhZ2UgaGlkZGVuPXtoaWRlRXJyb3J9IG5lZ2F0aXZlPlxuICAgICAgICA8TWVzc2FnZS5IZWFkZXI+XG4gICAgICAgICAgVW5hYmxlIHRvIHNlbmQgcmVxdWVzdFxuICAgICAgICA8L01lc3NhZ2UuSGVhZGVyPlxuICAgICAgICA8cD5QbGVhc2UgY29ubmVjdCB5b3VyIHdhbGxldDwvcD5cbiAgICAgIDwvTWVzc2FnZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSm9pblJlcXVlc3Q7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VTZWxlY3RvciIsIkJ1dHRvbiIsIk1lc3NhZ2UiLCJhZGROb3RpZmljYXRpb24iLCJtYWtlSm9pblJlcXVlc3QiLCJfIiwiZ2V0VXNlcnNOb3RpZmljYXRpb25zIiwiSm9pblJlcXVlc3QiLCJwcm9qZWN0SWQiLCJwcm9qZWN0TmFtZSIsIm1lbWJlcnMiLCJoaWRlRXJyb3IiLCJzZXRIaWRlRXJyb3IiLCJ0cmFuc2FjdGlvblBlbmRpbmciLCJzZXRUcmFuc2FjdGlvblBlbmRpbmciLCJ3YWxsZXRBZGRyZXNzIiwic3RhdGUiLCJtYW5hZ2VEYXRhIiwidXNlckluZm8iLCJtb25nb05vdGlmaWNhdGlvbnMiLCJqb2luUmVxdWVzdCIsInNlbmROb3RpZmljYXRpb25zVG9NZW1iZXJzIiwibWFwIiwibWVtYmVyIiwibW9uZ29Vc2VyIiwibm90aWZpY2F0aW9uIiwidXBkYXRlZE5vdGlmaWNhdGlvbnMiLCJpc0VxdWFsIiwibW9uZ29Ob3RpZmljYXRpb25zSWQiLCJzdWNjZXNzZnVsUmVzcG9uc2UiLCJtZXNzYWdlIiwiY29kZW5hbWUiLCJkYXRhIiwiZGl2IiwibG9hZGluZyIsImNvbG9yIiwib25DbGljayIsImhpZGRlbiIsIm5lZ2F0aXZlIiwiSGVhZGVyIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/projects/JoinRequest.jsx\n"));

/***/ })

});