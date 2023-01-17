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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _helpers_mongodb_NotificationCallCenter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/mongodb/NotificationCallCenter */ \"./helpers/mongodb/NotificationCallCenter.js\");\n/* harmony import */ var _helpers_users_users__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/users/users */ \"./helpers/users/users.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _utilities_ModalMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utilities/ModalMessage */ \"./components/utilities/ModalMessage.jsx\");\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar JoinRequest = function(param) {\n    var projectData = param.projectData, projectId = param.projectId;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), hideError = ref[0], setHideError = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), transactionPending = ref1[0], setTransactionPending = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), openModal = ref2[0], setOpenModal = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        label: \"Request to Join\",\n        disabled: false\n    }), requestButton = ref3[0], setRequestButton = ref3[1];\n    var walletAddress = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function(state) {\n        return state.manageData.walletAddress;\n    });\n    var userInfo = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function(state) {\n        return state.manageData.userInfo;\n    });\n    var joinRequest = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(function() {\n            var resp;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        setTransactionPending(true);\n                        if (!userInfo) return [\n                            3,\n                            2\n                        ];\n                        return [\n                            4,\n                            (0,_helpers_users_users__WEBPACK_IMPORTED_MODULE_4__.makeJoinRequest)(walletAddress, projectId)\n                        ];\n                    case 1:\n                        resp = _state.sent();\n                        setHideError(true);\n                        if (resp) {\n                            sendNotificationsToMembers(projectData.members);\n                            setOpenModal(true);\n                            isRequestPending();\n                        }\n                        return [\n                            3,\n                            3\n                        ];\n                    case 2:\n                        setHideError(false);\n                        _state.label = 3;\n                    case 3:\n                        setTransactionPending(false);\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function joinRequest() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var sendNotificationsToMembers = function(members) {\n        members.map(function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(function(member) {\n                var mongoUser, notification, updatedUser;\n                return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            if (!!lodash__WEBPACK_IMPORTED_MODULE_5___default().isEqual(member.mongoNotificationsId, \"0\")) return [\n                                3,\n                                2\n                            ];\n                            return [\n                                4,\n                                (0,_helpers_mongodb_NotificationCallCenter__WEBPACK_IMPORTED_MODULE_3__.getUsersNotifications)(member.mongoNotificationsId)\n                            ];\n                        case 1:\n                            mongoUser = _state.sent();\n                            if (mongoUser.successfulResponse) {\n                                notification = {\n                                    message: \"\".concat(userInfo.codename, \" has requested to join \").concat(projectData.project.name),\n                                    seen: false\n                                };\n                                updatedUser = {\n                                    notifications: [\n                                        notification\n                                    ].concat((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(mongoUser.data.notifications))\n                                };\n                                (0,_helpers_mongodb_NotificationCallCenter__WEBPACK_IMPORTED_MODULE_3__.updateNotification)(member.mongoNotificationsId, updatedUser);\n                            }\n                            _state.label = 2;\n                        case 2:\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return function(member) {\n                return _ref.apply(this, arguments);\n            };\n        }());\n    };\n    var isRequestPending = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(function() {\n            var resp, pending;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        if (!(userInfo && !projectData.isMember)) return [\n                            3,\n                            3\n                        ];\n                        return [\n                            4,\n                            (0,_helpers_users_users__WEBPACK_IMPORTED_MODULE_4__.getPendingRequestsAfterJoinRequest)(projectData.project.id)\n                        ];\n                    case 1:\n                        resp = _state.sent();\n                        return [\n                            4,\n                            resp.some(function(request) {\n                                return lodash__WEBPACK_IMPORTED_MODULE_5___default().isEqual(request.user.userAddress, userInfo.userAddress);\n                            })\n                        ];\n                    case 2:\n                        pending = _state.sent();\n                        if (pending) {\n                            setRequestButton({\n                                label: \"Request Pending\",\n                                disabled: true\n                            });\n                        }\n                        _state.label = 3;\n                    case 3:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function isRequestPending() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var alreadyRecruited = function(data, recruitRequests) {\n        var requestFound = recruitRequests.some(function(req) {\n            return lodash__WEBPACK_IMPORTED_MODULE_5___default().isEqual(req.project.id, data.id);\n        });\n        return requestFound;\n    };\n    var alreadyRecruitedSetup = function() {\n        setRequestButton({\n            label: \"Already Recruited\",\n            disabled: true\n        });\n    };\n    var getRequests = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(function() {\n            var recruitRequests;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        return [\n                            4,\n                            (0,_helpers_users_users__WEBPACK_IMPORTED_MODULE_4__.getUsersRecruitRequests)(walletAddress, userInfo.pendingRequestsCount)\n                        ];\n                    case 1:\n                        recruitRequests = _state.sent();\n                        return [\n                            2,\n                            recruitRequests\n                        ];\n                }\n            });\n        });\n        return function getRequests() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        console.log(projectData.project);\n        alreadyRecruited(projectData.project, getRequests()) ? alreadyRecruitedSetup() : isRequestPending();\n    }, [\n        userInfo,\n        projectData.project,\n        projectData.isMember\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Button, {\n                disabled: requestButton.disabled,\n                loading: transactionPending,\n                color: \"violet\",\n                onClick: joinRequest,\n                children: requestButton.label\n            }, void 0, false, {\n                fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/projects/JoinRequest.jsx\",\n                lineNumber: 93,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_utilities_ModalMessage__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                header: \"Request Sent\",\n                message: \"You have successfully sent your request to join \".concat(projectData.project.name),\n                open: openModal,\n                closeModal: function() {\n                    return setOpenModal(false);\n                }\n            }, void 0, false, {\n                fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/projects/JoinRequest.jsx\",\n                lineNumber: 96,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Message, {\n                hidden: hideError,\n                negative: true,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Message.Header, {\n                        children: \"Unable to send request\"\n                    }, void 0, false, {\n                        fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/projects/JoinRequest.jsx\",\n                        lineNumber: 103,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Please connect your wallet or create a user profile\"\n                    }, void 0, false, {\n                        fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/projects/JoinRequest.jsx\",\n                        lineNumber: 104,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/projects/JoinRequest.jsx\",\n                lineNumber: 102,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/projects/JoinRequest.jsx\",\n        lineNumber: 92,\n        columnNumber: 5\n    }, _this);\n};\n_s(JoinRequest, \"YfXkuklTOO8cF3KIL6lJcrvqq30=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = JoinRequest;\n/* harmony default export */ __webpack_exports__[\"default\"] = (JoinRequest);\nvar _c;\n$RefreshReg$(_c, \"JoinRequest\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb2plY3RzL0pvaW5SZXF1ZXN0LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBQW1EO0FBQ1Q7QUFDVTtBQUM4QjtBQUN1QztBQUNsRztBQUM4RDtBQUNoQztBQUdyRCxJQUFNYSxXQUFXLEdBQUcsZ0JBQWdDO1FBQTdCQyxXQUFXLFNBQVhBLFdBQVcsRUFBRUMsU0FBUyxTQUFUQSxTQUFTOztJQUUzQyxJQUFrQ2IsR0FBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksQ0FBQyxFQUF6Q2MsU0FBUyxHQUFrQmQsR0FBYyxHQUFoQyxFQUFFZSxZQUFZLEdBQUlmLEdBQWMsR0FBbEI7SUFDOUIsSUFBb0RBLElBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFBNURnQixrQkFBa0IsR0FBMkJoQixJQUFlLEdBQTFDLEVBQUVpQixxQkFBcUIsR0FBSWpCLElBQWUsR0FBbkI7SUFDaEQsSUFBa0NBLElBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFBMUNrQixTQUFTLEdBQWtCbEIsSUFBZSxHQUFqQyxFQUFFbUIsWUFBWSxHQUFJbkIsSUFBZSxHQUFuQjtJQUM5QixJQUEwQ0EsSUFBdUQsR0FBdkRBLCtDQUFRLENBQUM7UUFBRW9CLEtBQUssRUFBRSxpQkFBaUI7UUFBRUMsUUFBUSxFQUFFLEtBQUs7S0FBRSxDQUFDLEVBQTFGQyxhQUFhLEdBQXNCdEIsSUFBdUQsR0FBN0UsRUFBRXVCLGdCQUFnQixHQUFJdkIsSUFBdUQsR0FBM0Q7SUFFdEMsSUFBTXdCLGFBQWEsR0FBR3ZCLHdEQUFXLENBQUMsU0FBQ3dCLEtBQUs7ZUFBS0EsS0FBSyxDQUFDQyxVQUFVLENBQUNGLGFBQWE7S0FBQSxDQUFDO0lBQzVFLElBQU1HLFFBQVEsR0FBRzFCLHdEQUFXLENBQUMsU0FBQ3dCLEtBQUs7ZUFBS0EsS0FBSyxDQUFDQyxVQUFVLENBQUNDLFFBQVE7S0FBQSxDQUFDO0lBRWxFLElBQU1DLFdBQVc7bUJB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QUFDRixLQUFLOzs7OztxQkFDYjswQkFDVCw4REFBQ1YsK0RBQVk7Z0JBQ1gwRCxNQUFNLEVBQUMsY0FBYztnQkFDckIzQixPQUFPLEVBQUUsa0RBQWlELENBQTJCLE9BQXpCN0IsV0FBVyxDQUFDK0IsT0FBTyxDQUFDQyxJQUFJLENBQUU7Z0JBQ3RGeUIsSUFBSSxFQUFFbkQsU0FBUztnQkFDZm9ELFVBQVUsRUFBRTsyQkFBTW5ELFlBQVksQ0FBQyxLQUFLLENBQUM7aUJBQUE7Ozs7O3FCQUNyQzswQkFDRiw4REFBQ2hCLHVEQUFPO2dCQUFDb0UsTUFBTSxFQUFFekQsU0FBUztnQkFBRTBELFFBQVE7O2tDQUNsQyw4REFBQ3JFLDhEQUFjO2tDQUFDLHdCQUFzQjs7Ozs7NkJBQWlCO2tDQUN2RCw4REFBQ3VFLEdBQUM7a0NBQUMscURBQW1EOzs7Ozs2QkFBSTs7Ozs7O3FCQUNsRDs7Ozs7O2FBQ04sQ0FDTjtBQUNKLENBQUM7R0FqR0svRCxXQUFXOztRQU9PVixvREFBVztRQUNoQkEsb0RBQVc7OztBQVJ4QlUsS0FBQUEsV0FBVztBQW1HakIsK0RBQWVBLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3Byb2plY3RzL0pvaW5SZXF1ZXN0LmpzeD82YTNjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgQnV0dG9uLCBNZXNzYWdlIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgeyB1cGRhdGVOb3RpZmljYXRpb24gfSBmcm9tIFwiLi4vLi4vaGVscGVycy9tb25nb2RiL05vdGlmaWNhdGlvbkNhbGxDZW50ZXJcIjtcbmltcG9ydCB7IG1ha2VKb2luUmVxdWVzdCwgZ2V0UGVuZGluZ1JlcXVlc3RzQWZ0ZXJKb2luUmVxdWVzdCwgZ2V0VXNlcnNSZWNydWl0UmVxdWVzdHMgfSBmcm9tIFwiLi4vLi4vaGVscGVycy91c2Vycy91c2Vyc1wiO1xuaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IHsgZ2V0VXNlcnNOb3RpZmljYXRpb25zIH0gZnJvbSBcIi4uLy4uL2hlbHBlcnMvbW9uZ29kYi9Ob3RpZmljYXRpb25DYWxsQ2VudGVyXCI7XG5pbXBvcnQgTW9kYWxNZXNzYWdlIGZyb20gXCIuLi91dGlsaXRpZXMvTW9kYWxNZXNzYWdlXCI7XG5cblxuY29uc3QgSm9pblJlcXVlc3QgPSAoeyBwcm9qZWN0RGF0YSwgcHJvamVjdElkIH0pID0+IHtcblxuICBjb25zdCBbaGlkZUVycm9yLCBzZXRIaWRlRXJyb3JdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFt0cmFuc2FjdGlvblBlbmRpbmcsIHNldFRyYW5zYWN0aW9uUGVuZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtvcGVuTW9kYWwsIHNldE9wZW5Nb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtyZXF1ZXN0QnV0dG9uLCBzZXRSZXF1ZXN0QnV0dG9uXSA9IHVzZVN0YXRlKHsgbGFiZWw6IFwiUmVxdWVzdCB0byBKb2luXCIsIGRpc2FibGVkOiBmYWxzZSB9KTtcblxuICBjb25zdCB3YWxsZXRBZGRyZXNzID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5tYW5hZ2VEYXRhLndhbGxldEFkZHJlc3MpO1xuICBjb25zdCB1c2VySW5mbyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUubWFuYWdlRGF0YS51c2VySW5mbyk7XG5cbiAgY29uc3Qgam9pblJlcXVlc3QgPSBhc3luYygpID0+IHtcbiAgICBzZXRUcmFuc2FjdGlvblBlbmRpbmcodHJ1ZSk7XG4gICAgaWYodXNlckluZm8pIHtcbiAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBtYWtlSm9pblJlcXVlc3Qod2FsbGV0QWRkcmVzcywgcHJvamVjdElkKTtcbiAgICAgIHNldEhpZGVFcnJvcih0cnVlKTtcbiAgICAgIGlmKHJlc3ApIHtcbiAgICAgICAgc2VuZE5vdGlmaWNhdGlvbnNUb01lbWJlcnMocHJvamVjdERhdGEubWVtYmVycyk7XG4gICAgICAgIHNldE9wZW5Nb2RhbCh0cnVlKTtcbiAgICAgICAgaXNSZXF1ZXN0UGVuZGluZygpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRIaWRlRXJyb3IoZmFsc2UpO1xuICAgIH1cbiAgICBzZXRUcmFuc2FjdGlvblBlbmRpbmcoZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IHNlbmROb3RpZmljYXRpb25zVG9NZW1iZXJzID0gKG1lbWJlcnMpID0+IHtcbiAgICBtZW1iZXJzLm1hcChhc3luYyhtZW1iZXIpID0+IHtcbiAgICAgIGlmKCFfLmlzRXF1YWwobWVtYmVyLm1vbmdvTm90aWZpY2F0aW9uc0lkLCBcIjBcIikpIHtcbiAgICAgICAgY29uc3QgbW9uZ29Vc2VyID0gYXdhaXQgZ2V0VXNlcnNOb3RpZmljYXRpb25zKG1lbWJlci5tb25nb05vdGlmaWNhdGlvbnNJZCk7XG4gICAgICAgIGlmKG1vbmdvVXNlci5zdWNjZXNzZnVsUmVzcG9uc2UpIHtcbiAgICAgICAgICBjb25zdCBub3RpZmljYXRpb24gPSB7XG4gICAgICAgICAgICBtZXNzYWdlOiBgJHt1c2VySW5mby5jb2RlbmFtZX0gaGFzIHJlcXVlc3RlZCB0byBqb2luICR7cHJvamVjdERhdGEucHJvamVjdC5uYW1lfWAsXG4gICAgICAgICAgICBzZWVuOiBmYWxzZVxuICAgICAgICAgIH07XG4gICAgICAgICAgY29uc3QgdXBkYXRlZFVzZXIgPSB7XG4gICAgICAgICAgICBub3RpZmljYXRpb25zOiBbbm90aWZpY2F0aW9uLCAuLi5tb25nb1VzZXIuZGF0YS5ub3RpZmljYXRpb25zXVxuICAgICAgICAgIH07XG4gICAgICAgICAgdXBkYXRlTm90aWZpY2F0aW9uKG1lbWJlci5tb25nb05vdGlmaWNhdGlvbnNJZCwgdXBkYXRlZFVzZXIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IGlzUmVxdWVzdFBlbmRpbmcgPSBhc3luYygpID0+IHtcbiAgICBpZih1c2VySW5mbyAmJiAhcHJvamVjdERhdGEuaXNNZW1iZXIpIHtcbiAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBnZXRQZW5kaW5nUmVxdWVzdHNBZnRlckpvaW5SZXF1ZXN0KHByb2plY3REYXRhLnByb2plY3QuaWQpO1xuICAgICAgY29uc3QgcGVuZGluZyA9IGF3YWl0IHJlc3Auc29tZSgocmVxdWVzdCkgPT5cbiAgICAgICAgXy5pc0VxdWFsKHJlcXVlc3QudXNlci51c2VyQWRkcmVzcywgdXNlckluZm8udXNlckFkZHJlc3MpXG4gICAgICApO1xuICAgICAgaWYgKHBlbmRpbmcpIHtcbiAgICAgICAgc2V0UmVxdWVzdEJ1dHRvbih7IGxhYmVsOiBcIlJlcXVlc3QgUGVuZGluZ1wiLCBkaXNhYmxlZDogdHJ1ZSB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBhbHJlYWR5UmVjcnVpdGVkID0gKGRhdGEsIHJlY3J1aXRSZXF1ZXN0cykgPT4ge1xuICAgIGNvbnN0IHJlcXVlc3RGb3VuZCA9IHJlY3J1aXRSZXF1ZXN0cy5zb21lKChyZXEpID0+XG4gICAgICBfLmlzRXF1YWwocmVxLnByb2plY3QuaWQsIGRhdGEuaWQpXG4gICAgKTtcbiAgICByZXR1cm4gcmVxdWVzdEZvdW5kO1xuICB9O1xuXG4gIGNvbnN0IGFscmVhZHlSZWNydWl0ZWRTZXR1cCA9ICgpID0+IHtcbiAgICBzZXRSZXF1ZXN0QnV0dG9uKHsgbGFiZWw6IFwiQWxyZWFkeSBSZWNydWl0ZWRcIiwgZGlzYWJsZWQ6IHRydWUgfSk7XG4gIH1cblxuICBjb25zdCBnZXRSZXF1ZXN0cyA9IGFzeW5jKCkgPT4ge1xuICAgIGNvbnN0IHJlY3J1aXRSZXF1ZXN0cyA9IGF3YWl0IGdldFVzZXJzUmVjcnVpdFJlcXVlc3RzKFxuICAgICAgd2FsbGV0QWRkcmVzcyxcbiAgICAgIHVzZXJJbmZvLnBlbmRpbmdSZXF1ZXN0c0NvdW50XG4gICAgKTtcbiAgICByZXR1cm4gcmVjcnVpdFJlcXVlc3RzO1xuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0RGF0YS5wcm9qZWN0KVxuICAgIGFscmVhZHlSZWNydWl0ZWQocHJvamVjdERhdGEucHJvamVjdCwgZ2V0UmVxdWVzdHMoKSkgPyBhbHJlYWR5UmVjcnVpdGVkU2V0dXAoKSA6IGlzUmVxdWVzdFBlbmRpbmcoKTtcbiAgfSwgW3VzZXJJbmZvLCBwcm9qZWN0RGF0YS5wcm9qZWN0LCBwcm9qZWN0RGF0YS5pc01lbWJlcl0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxCdXR0b24gZGlzYWJsZWQ9e3JlcXVlc3RCdXR0b24uZGlzYWJsZWR9IGxvYWRpbmc9e3RyYW5zYWN0aW9uUGVuZGluZ30gY29sb3I9XCJ2aW9sZXRcIiBvbkNsaWNrPXtqb2luUmVxdWVzdH0+XG4gICAgICAgIHtyZXF1ZXN0QnV0dG9uLmxhYmVsfVxuICAgICAgPC9CdXR0b24+XG4gICAgICA8TW9kYWxNZXNzYWdlXG4gICAgICAgIGhlYWRlcj1cIlJlcXVlc3QgU2VudFwiXG4gICAgICAgIG1lc3NhZ2U9e2BZb3UgaGF2ZSBzdWNjZXNzZnVsbHkgc2VudCB5b3VyIHJlcXVlc3QgdG8gam9pbiAke3Byb2plY3REYXRhLnByb2plY3QubmFtZX1gfVxuICAgICAgICBvcGVuPXtvcGVuTW9kYWx9XG4gICAgICAgIGNsb3NlTW9kYWw9eygpID0+IHNldE9wZW5Nb2RhbChmYWxzZSl9XG4gICAgICAvPlxuICAgICAgPE1lc3NhZ2UgaGlkZGVuPXtoaWRlRXJyb3J9IG5lZ2F0aXZlPlxuICAgICAgICA8TWVzc2FnZS5IZWFkZXI+VW5hYmxlIHRvIHNlbmQgcmVxdWVzdDwvTWVzc2FnZS5IZWFkZXI+XG4gICAgICAgIDxwPlBsZWFzZSBjb25uZWN0IHlvdXIgd2FsbGV0IG9yIGNyZWF0ZSBhIHVzZXIgcHJvZmlsZTwvcD5cbiAgICAgIDwvTWVzc2FnZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSm9pblJlcXVlc3Q7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VTZWxlY3RvciIsIkJ1dHRvbiIsIk1lc3NhZ2UiLCJ1cGRhdGVOb3RpZmljYXRpb24iLCJtYWtlSm9pblJlcXVlc3QiLCJnZXRQZW5kaW5nUmVxdWVzdHNBZnRlckpvaW5SZXF1ZXN0IiwiZ2V0VXNlcnNSZWNydWl0UmVxdWVzdHMiLCJfIiwiZ2V0VXNlcnNOb3RpZmljYXRpb25zIiwiTW9kYWxNZXNzYWdlIiwiSm9pblJlcXVlc3QiLCJwcm9qZWN0RGF0YSIsInByb2plY3RJZCIsImhpZGVFcnJvciIsInNldEhpZGVFcnJvciIsInRyYW5zYWN0aW9uUGVuZGluZyIsInNldFRyYW5zYWN0aW9uUGVuZGluZyIsIm9wZW5Nb2RhbCIsInNldE9wZW5Nb2RhbCIsImxhYmVsIiwiZGlzYWJsZWQiLCJyZXF1ZXN0QnV0dG9uIiwic2V0UmVxdWVzdEJ1dHRvbiIsIndhbGxldEFkZHJlc3MiLCJzdGF0ZSIsIm1hbmFnZURhdGEiLCJ1c2VySW5mbyIsImpvaW5SZXF1ZXN0IiwicmVzcCIsInNlbmROb3RpZmljYXRpb25zVG9NZW1iZXJzIiwibWVtYmVycyIsImlzUmVxdWVzdFBlbmRpbmciLCJtYXAiLCJtZW1iZXIiLCJtb25nb1VzZXIiLCJub3RpZmljYXRpb24iLCJ1cGRhdGVkVXNlciIsImlzRXF1YWwiLCJtb25nb05vdGlmaWNhdGlvbnNJZCIsInN1Y2Nlc3NmdWxSZXNwb25zZSIsIm1lc3NhZ2UiLCJjb2RlbmFtZSIsInByb2plY3QiLCJuYW1lIiwic2VlbiIsIm5vdGlmaWNhdGlvbnMiLCJkYXRhIiwicGVuZGluZyIsImlzTWVtYmVyIiwiaWQiLCJzb21lIiwicmVxdWVzdCIsInVzZXIiLCJ1c2VyQWRkcmVzcyIsImFscmVhZHlSZWNydWl0ZWQiLCJyZWNydWl0UmVxdWVzdHMiLCJyZXF1ZXN0Rm91bmQiLCJyZXEiLCJhbHJlYWR5UmVjcnVpdGVkU2V0dXAiLCJnZXRSZXF1ZXN0cyIsInBlbmRpbmdSZXF1ZXN0c0NvdW50IiwiY29uc29sZSIsImxvZyIsImRpdiIsImxvYWRpbmciLCJjb2xvciIsIm9uQ2xpY2siLCJoZWFkZXIiLCJvcGVuIiwiY2xvc2VNb2RhbCIsImhpZGRlbiIsIm5lZ2F0aXZlIiwiSGVhZGVyIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/projects/JoinRequest.jsx\n"));

/***/ })

});