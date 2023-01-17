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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _helpers_mongodb_NotificationCallCenter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/mongodb/NotificationCallCenter */ \"./helpers/mongodb/NotificationCallCenter.js\");\n/* harmony import */ var _helpers_users_users__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/users/users */ \"./helpers/users/users.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _utilities_ModalMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utilities/ModalMessage */ \"./components/utilities/ModalMessage.jsx\");\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar JoinRequest = function(param) {\n    var projectData = param.projectData, projectId = param.projectId, alreadyRecruited = param.alreadyRecruited;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), hideError = ref[0], setHideError = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), transactionPending = ref1[0], setTransactionPending = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), openModal = ref2[0], setOpenModal = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        label: \"Request to Join\",\n        disabled: false\n    }), requestButton = ref3[0], setRequestButton = ref3[1];\n    var walletAddress = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function(state) {\n        return state.manageData.walletAddress;\n    });\n    var userInfo = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function(state) {\n        return state.manageData.userInfo;\n    });\n    var joinRequest = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(function() {\n            var resp;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        setTransactionPending(true);\n                        if (!userInfo) return [\n                            3,\n                            2\n                        ];\n                        return [\n                            4,\n                            (0,_helpers_users_users__WEBPACK_IMPORTED_MODULE_4__.makeJoinRequest)(walletAddress, projectId)\n                        ];\n                    case 1:\n                        resp = _state.sent();\n                        setHideError(true);\n                        if (resp) {\n                            sendNotificationsToMembers(projectData.members);\n                            setOpenModal(true);\n                            isRequestPending();\n                        }\n                        return [\n                            3,\n                            3\n                        ];\n                    case 2:\n                        setHideError(false);\n                        _state.label = 3;\n                    case 3:\n                        setTransactionPending(false);\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function joinRequest() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var sendNotificationsToMembers = function(members) {\n        members.map(function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(function(member) {\n                var mongoUser, notification, updatedUser;\n                return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            if (!!lodash__WEBPACK_IMPORTED_MODULE_5___default().isEqual(member.mongoNotificationsId, \"0\")) return [\n                                3,\n                                2\n                            ];\n                            return [\n                                4,\n                                (0,_helpers_mongodb_NotificationCallCenter__WEBPACK_IMPORTED_MODULE_3__.getUsersNotifications)(member.mongoNotificationsId)\n                            ];\n                        case 1:\n                            mongoUser = _state.sent();\n                            if (mongoUser.successfulResponse) {\n                                notification = {\n                                    message: \"\".concat(userInfo.codename, \" has requested to join \").concat(projectData.project.name),\n                                    seen: false\n                                };\n                                updatedUser = {\n                                    notifications: [\n                                        notification\n                                    ].concat((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(mongoUser.data.notifications))\n                                };\n                                (0,_helpers_mongodb_NotificationCallCenter__WEBPACK_IMPORTED_MODULE_3__.updateNotification)(member.mongoNotificationsId, updatedUser);\n                            }\n                            _state.label = 2;\n                        case 2:\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return function(member) {\n                return _ref.apply(this, arguments);\n            };\n        }());\n    };\n    var isRequestPending = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(function() {\n            var resp, pending;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        if (!(userInfo && !projectData.isMember)) return [\n                            3,\n                            3\n                        ];\n                        return [\n                            4,\n                            (0,_helpers_users_users__WEBPACK_IMPORTED_MODULE_4__.getPendingRequestsAfterJoinRequest)(projectData.project.id)\n                        ];\n                    case 1:\n                        resp = _state.sent();\n                        return [\n                            4,\n                            resp.some(function(request) {\n                                return lodash__WEBPACK_IMPORTED_MODULE_5___default().isEqual(request.user.userAddress, userInfo.userAddress);\n                            })\n                        ];\n                    case 2:\n                        pending = _state.sent();\n                        if (pending) {\n                            setRequestButton({\n                                label: \"Request Pending\",\n                                disabled: true\n                            });\n                        }\n                        _state.label = 3;\n                    case 3:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function isRequestPending() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var alreadyRecruitedSetup = function() {\n        setRequestButton({\n            label: \"Already Recruited\",\n            disabled: true\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        alreadyRecruited ? alreadyRecruitedSetup() : isRequestPending();\n    }, [\n        userInfo,\n        projectData.project,\n        projectData.isMember,\n        alreadyRecruited\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Button, {\n                disabled: requestButton.disabled,\n                loading: transactionPending,\n                color: \"violet\",\n                onClick: joinRequest,\n                children: requestButton.label\n            }, void 0, false, {\n                fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/projects/JoinRequest.jsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_utilities_ModalMessage__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                header: \"Request Sent\",\n                message: \"You have successfully sent your request to join \".concat(projectData.project.name),\n                open: openModal,\n                closeModal: function() {\n                    return setOpenModal(false);\n                }\n            }, void 0, false, {\n                fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/projects/JoinRequest.jsx\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Message, {\n                hidden: hideError,\n                negative: true,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Message.Header, {\n                        children: \"Unable to send request\"\n                    }, void 0, false, {\n                        fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/projects/JoinRequest.jsx\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Please connect your wallet or create a user profile\"\n                    }, void 0, false, {\n                        fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/projects/JoinRequest.jsx\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/projects/JoinRequest.jsx\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/projects/JoinRequest.jsx\",\n        lineNumber: 76,\n        columnNumber: 5\n    }, _this);\n};\n_s(JoinRequest, \"YfXkuklTOO8cF3KIL6lJcrvqq30=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = JoinRequest;\n/* harmony default export */ __webpack_exports__[\"default\"] = (JoinRequest);\nvar _c;\n$RefreshReg$(_c, \"JoinRequest\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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K0RBQWVBLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3Byb2plY3RzL0pvaW5SZXF1ZXN0LmpzeD82YTNjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgQnV0dG9uLCBNZXNzYWdlIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgeyB1cGRhdGVOb3RpZmljYXRpb24gfSBmcm9tIFwiLi4vLi4vaGVscGVycy9tb25nb2RiL05vdGlmaWNhdGlvbkNhbGxDZW50ZXJcIjtcbmltcG9ydCB7IG1ha2VKb2luUmVxdWVzdCwgZ2V0UGVuZGluZ1JlcXVlc3RzQWZ0ZXJKb2luUmVxdWVzdCwgZ2V0VXNlcnNSZWNydWl0UmVxdWVzdHMgfSBmcm9tIFwiLi4vLi4vaGVscGVycy91c2Vycy91c2Vyc1wiO1xuaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IHsgZ2V0VXNlcnNOb3RpZmljYXRpb25zIH0gZnJvbSBcIi4uLy4uL2hlbHBlcnMvbW9uZ29kYi9Ob3RpZmljYXRpb25DYWxsQ2VudGVyXCI7XG5pbXBvcnQgTW9kYWxNZXNzYWdlIGZyb20gXCIuLi91dGlsaXRpZXMvTW9kYWxNZXNzYWdlXCI7XG5cblxuY29uc3QgSm9pblJlcXVlc3QgPSAoeyBwcm9qZWN0RGF0YSwgcHJvamVjdElkLCBhbHJlYWR5UmVjcnVpdGVkIH0pID0+IHtcblxuICBjb25zdCBbaGlkZUVycm9yLCBzZXRIaWRlRXJyb3JdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFt0cmFuc2FjdGlvblBlbmRpbmcsIHNldFRyYW5zYWN0aW9uUGVuZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtvcGVuTW9kYWwsIHNldE9wZW5Nb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtyZXF1ZXN0QnV0dG9uLCBzZXRSZXF1ZXN0QnV0dG9uXSA9IHVzZVN0YXRlKHsgbGFiZWw6IFwiUmVxdWVzdCB0byBKb2luXCIsIGRpc2FibGVkOiBmYWxzZSB9KTtcblxuICBjb25zdCB3YWxsZXRBZGRyZXNzID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5tYW5hZ2VEYXRhLndhbGxldEFkZHJlc3MpO1xuICBjb25zdCB1c2VySW5mbyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUubWFuYWdlRGF0YS51c2VySW5mbyk7XG5cbiAgY29uc3Qgam9pblJlcXVlc3QgPSBhc3luYygpID0+IHtcbiAgICBzZXRUcmFuc2FjdGlvblBlbmRpbmcodHJ1ZSk7XG4gICAgaWYodXNlckluZm8pIHtcbiAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBtYWtlSm9pblJlcXVlc3Qod2FsbGV0QWRkcmVzcywgcHJvamVjdElkKTtcbiAgICAgIHNldEhpZGVFcnJvcih0cnVlKTtcbiAgICAgIGlmKHJlc3ApIHtcbiAgICAgICAgc2VuZE5vdGlmaWNhdGlvbnNUb01lbWJlcnMocHJvamVjdERhdGEubWVtYmVycyk7XG4gICAgICAgIHNldE9wZW5Nb2RhbCh0cnVlKTtcbiAgICAgICAgaXNSZXF1ZXN0UGVuZGluZygpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRIaWRlRXJyb3IoZmFsc2UpO1xuICAgIH1cbiAgICBzZXRUcmFuc2FjdGlvblBlbmRpbmcoZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IHNlbmROb3RpZmljYXRpb25zVG9NZW1iZXJzID0gKG1lbWJlcnMpID0+IHtcbiAgICBtZW1iZXJzLm1hcChhc3luYyhtZW1iZXIpID0+IHtcbiAgICAgIGlmKCFfLmlzRXF1YWwobWVtYmVyLm1vbmdvTm90aWZpY2F0aW9uc0lkLCBcIjBcIikpIHtcbiAgICAgICAgY29uc3QgbW9uZ29Vc2VyID0gYXdhaXQgZ2V0VXNlcnNOb3RpZmljYXRpb25zKG1lbWJlci5tb25nb05vdGlmaWNhdGlvbnNJZCk7XG4gICAgICAgIGlmKG1vbmdvVXNlci5zdWNjZXNzZnVsUmVzcG9uc2UpIHtcbiAgICAgICAgICBjb25zdCBub3RpZmljYXRpb24gPSB7XG4gICAgICAgICAgICBtZXNzYWdlOiBgJHt1c2VySW5mby5jb2RlbmFtZX0gaGFzIHJlcXVlc3RlZCB0byBqb2luICR7cHJvamVjdERhdGEucHJvamVjdC5uYW1lfWAsXG4gICAgICAgICAgICBzZWVuOiBmYWxzZVxuICAgICAgICAgIH07XG4gICAgICAgICAgY29uc3QgdXBkYXRlZFVzZXIgPSB7XG4gICAgICAgICAgICBub3RpZmljYXRpb25zOiBbbm90aWZpY2F0aW9uLCAuLi5tb25nb1VzZXIuZGF0YS5ub3RpZmljYXRpb25zXVxuICAgICAgICAgIH07XG4gICAgICAgICAgdXBkYXRlTm90aWZpY2F0aW9uKG1lbWJlci5tb25nb05vdGlmaWNhdGlvbnNJZCwgdXBkYXRlZFVzZXIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IGlzUmVxdWVzdFBlbmRpbmcgPSBhc3luYygpID0+IHtcbiAgICBpZih1c2VySW5mbyAmJiAhcHJvamVjdERhdGEuaXNNZW1iZXIpIHtcbiAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBnZXRQZW5kaW5nUmVxdWVzdHNBZnRlckpvaW5SZXF1ZXN0KHByb2plY3REYXRhLnByb2plY3QuaWQpO1xuICAgICAgY29uc3QgcGVuZGluZyA9IGF3YWl0IHJlc3Auc29tZSgocmVxdWVzdCkgPT5cbiAgICAgICAgXy5pc0VxdWFsKHJlcXVlc3QudXNlci51c2VyQWRkcmVzcywgdXNlckluZm8udXNlckFkZHJlc3MpXG4gICAgICApO1xuICAgICAgaWYgKHBlbmRpbmcpIHtcbiAgICAgICAgc2V0UmVxdWVzdEJ1dHRvbih7IGxhYmVsOiBcIlJlcXVlc3QgUGVuZGluZ1wiLCBkaXNhYmxlZDogdHJ1ZSB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBhbHJlYWR5UmVjcnVpdGVkU2V0dXAgPSAoKSA9PiB7XG4gICAgc2V0UmVxdWVzdEJ1dHRvbih7IGxhYmVsOiBcIkFscmVhZHkgUmVjcnVpdGVkXCIsIGRpc2FibGVkOiB0cnVlIH0pO1xuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhbHJlYWR5UmVjcnVpdGVkID8gYWxyZWFkeVJlY3J1aXRlZFNldHVwKCkgOiBpc1JlcXVlc3RQZW5kaW5nKCk7XG4gIH0sIFt1c2VySW5mbywgcHJvamVjdERhdGEucHJvamVjdCwgcHJvamVjdERhdGEuaXNNZW1iZXIsIGFscmVhZHlSZWNydWl0ZWRdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8QnV0dG9uIGRpc2FibGVkPXtyZXF1ZXN0QnV0dG9uLmRpc2FibGVkfSBsb2FkaW5nPXt0cmFuc2FjdGlvblBlbmRpbmd9IGNvbG9yPVwidmlvbGV0XCIgb25DbGljaz17am9pblJlcXVlc3R9PlxuICAgICAgICB7cmVxdWVzdEJ1dHRvbi5sYWJlbH1cbiAgICAgIDwvQnV0dG9uPlxuICAgICAgPE1vZGFsTWVzc2FnZVxuICAgICAgICBoZWFkZXI9XCJSZXF1ZXN0IFNlbnRcIlxuICAgICAgICBtZXNzYWdlPXtgWW91IGhhdmUgc3VjY2Vzc2Z1bGx5IHNlbnQgeW91ciByZXF1ZXN0IHRvIGpvaW4gJHtwcm9qZWN0RGF0YS5wcm9qZWN0Lm5hbWV9YH1cbiAgICAgICAgb3Blbj17b3Blbk1vZGFsfVxuICAgICAgICBjbG9zZU1vZGFsPXsoKSA9PiBzZXRPcGVuTW9kYWwoZmFsc2UpfVxuICAgICAgLz5cbiAgICAgIDxNZXNzYWdlIGhpZGRlbj17aGlkZUVycm9yfSBuZWdhdGl2ZT5cbiAgICAgICAgPE1lc3NhZ2UuSGVhZGVyPlVuYWJsZSB0byBzZW5kIHJlcXVlc3Q8L01lc3NhZ2UuSGVhZGVyPlxuICAgICAgICA8cD5QbGVhc2UgY29ubmVjdCB5b3VyIHdhbGxldCBvciBjcmVhdGUgYSB1c2VyIHByb2ZpbGU8L3A+XG4gICAgICA8L01lc3NhZ2U+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEpvaW5SZXF1ZXN0OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlU2VsZWN0b3IiLCJCdXR0b24iLCJNZXNzYWdlIiwidXBkYXRlTm90aWZpY2F0aW9uIiwibWFrZUpvaW5SZXF1ZXN0IiwiZ2V0UGVuZGluZ1JlcXVlc3RzQWZ0ZXJKb2luUmVxdWVzdCIsImdldFVzZXJzUmVjcnVpdFJlcXVlc3RzIiwiXyIsImdldFVzZXJzTm90aWZpY2F0aW9ucyIsIk1vZGFsTWVzc2FnZSIsIkpvaW5SZXF1ZXN0IiwicHJvamVjdERhdGEiLCJwcm9qZWN0SWQiLCJhbHJlYWR5UmVjcnVpdGVkIiwiaGlkZUVycm9yIiwic2V0SGlkZUVycm9yIiwidHJhbnNhY3Rpb25QZW5kaW5nIiwic2V0VHJhbnNhY3Rpb25QZW5kaW5nIiwib3Blbk1vZGFsIiwic2V0T3Blbk1vZGFsIiwibGFiZWwiLCJkaXNhYmxlZCIsInJlcXVlc3RCdXR0b24iLCJzZXRSZXF1ZXN0QnV0dG9uIiwid2FsbGV0QWRkcmVzcyIsInN0YXRlIiwibWFuYWdlRGF0YSIsInVzZXJJbmZvIiwiam9pblJlcXVlc3QiLCJyZXNwIiwic2VuZE5vdGlmaWNhdGlvbnNUb01lbWJlcnMiLCJtZW1iZXJzIiwiaXNSZXF1ZXN0UGVuZGluZyIsIm1hcCIsIm1lbWJlciIsIm1vbmdvVXNlciIsIm5vdGlmaWNhdGlvbiIsInVwZGF0ZWRVc2VyIiwiaXNFcXVhbCIsIm1vbmdvTm90aWZpY2F0aW9uc0lkIiwic3VjY2Vzc2Z1bFJlc3BvbnNlIiwibWVzc2FnZSIsImNvZGVuYW1lIiwicHJvamVjdCIsIm5hbWUiLCJzZWVuIiwibm90aWZpY2F0aW9ucyIsImRhdGEiLCJwZW5kaW5nIiwiaXNNZW1iZXIiLCJpZCIsInNvbWUiLCJyZXF1ZXN0IiwidXNlciIsInVzZXJBZGRyZXNzIiwiYWxyZWFkeVJlY3J1aXRlZFNldHVwIiwiZGl2IiwibG9hZGluZyIsImNvbG9yIiwib25DbGljayIsImhlYWRlciIsIm9wZW4iLCJjbG9zZU1vZGFsIiwiaGlkZGVuIiwibmVnYXRpdmUiLCJIZWFkZXIiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/projects/JoinRequest.jsx\n"));

/***/ })

});