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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _helpers_mongodb_NotificationCallCenter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/mongodb/NotificationCallCenter */ \"./helpers/mongodb/NotificationCallCenter.js\");\n/* harmony import */ var _helpers_users_users__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/users/users */ \"./helpers/users/users.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _utilities_ModalMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utilities/ModalMessage */ \"./components/utilities/ModalMessage.jsx\");\n\n\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar JoinRequest = function(param) {\n    var projectData = param.projectData, projectId = param.projectId;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), hideError = ref[0], setHideError = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), transactionPending = ref1[0], setTransactionPending = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), openModal = ref2[0], setOpenModal = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        label: \"Request to Join\",\n        disabled: false\n    }), requestButton = ref3[0], setRequestButton = ref3[1];\n    var walletAddress = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function(state) {\n        return state.manageData.walletAddress;\n    });\n    var userInfo = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function(state) {\n        return state.manageData.userInfo;\n    });\n    var joinRequest = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(function() {\n            var resp;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        setTransactionPending(true);\n                        if (!userInfo) return [\n                            3,\n                            2\n                        ];\n                        return [\n                            4,\n                            (0,_helpers_users_users__WEBPACK_IMPORTED_MODULE_4__.makeJoinRequest)(walletAddress, projectId)\n                        ];\n                    case 1:\n                        resp = _state.sent();\n                        setHideError(true);\n                        if (resp) {\n                            sendNotificationsToMembers(projectData.members);\n                            setOpenModal(true);\n                            isRequestPending();\n                        }\n                        return [\n                            3,\n                            3\n                        ];\n                    case 2:\n                        setHideError(false);\n                        _state.label = 3;\n                    case 3:\n                        setTransactionPending(false);\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function joinRequest() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var sendNotificationsToMembers = function(members) {\n        members.map(function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(function(member) {\n                var mongoUser, notification, updatedNotifications, updatedUser;\n                return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            if (!!lodash__WEBPACK_IMPORTED_MODULE_5___default().isEqual(member.mongoNotificationsId, \"0\")) return [\n                                3,\n                                2\n                            ];\n                            return [\n                                4,\n                                (0,_helpers_mongodb_NotificationCallCenter__WEBPACK_IMPORTED_MODULE_3__.getUsersNotifications)(member.mongoNotificationsId)\n                            ];\n                        case 1:\n                            mongoUser = _state.sent();\n                            if (mongoUser.successfulResponse) {\n                                notification = {\n                                    message: \"\".concat(userInfo.codename, \" has requested to join \").concat(projectData.project.name)\n                                };\n                                updatedNotifications = [\n                                    notification\n                                ].concat((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(mongoUser.data.notifications));\n                                updatedUser = (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"])({}, mongoUser.data), {\n                                    notification: [\n                                        notification\n                                    ].concat((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(mongoUser.data.notifications))\n                                });\n                                (0,_helpers_mongodb_NotificationCallCenter__WEBPACK_IMPORTED_MODULE_3__.addNotification)(member.mongoNotificationsId, updatedUser);\n                            }\n                            _state.label = 2;\n                        case 2:\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return function(member) {\n                return _ref.apply(this, arguments);\n            };\n        }());\n    };\n    var isRequestPending = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(function() {\n            var resp, pending;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        if (!(userInfo && !projectData.isMember)) return [\n                            3,\n                            3\n                        ];\n                        return [\n                            4,\n                            (0,_helpers_users_users__WEBPACK_IMPORTED_MODULE_4__.getPendingRequestsAfterJoinRequest)(projectData.project.id)\n                        ];\n                    case 1:\n                        resp = _state.sent();\n                        return [\n                            4,\n                            resp.some(function(request) {\n                                return lodash__WEBPACK_IMPORTED_MODULE_5___default().isEqual(request.user.userAddress, userInfo.userAddress);\n                            })\n                        ];\n                    case 2:\n                        pending = _state.sent();\n                        if (pending) {\n                            setRequestButton({\n                                label: \"Request Pending\",\n                                disabled: true\n                            });\n                        }\n                        _state.label = 3;\n                    case 3:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function isRequestPending() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        isRequestPending();\n    }, [\n        userInfo,\n        projectData.project,\n        projectData.isMember\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.Button, {\n                disabled: requestButton.disabled,\n                loading: transactionPending,\n                color: \"violet\",\n                onClick: joinRequest,\n                children: requestButton.label\n            }, void 0, false, {\n                fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/projects/JoinRequest.jsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_utilities_ModalMessage__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                header: \"Request Sent\",\n                message: \"You have successfully sent your request to join \".concat(projectData.project.name),\n                open: openModal,\n                closeModal: function() {\n                    return setOpenModal(false);\n                }\n            }, void 0, false, {\n                fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/projects/JoinRequest.jsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.Message, {\n                hidden: hideError,\n                negative: true,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.Message.Header, {\n                        children: \"Unable to send request\"\n                    }, void 0, false, {\n                        fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/projects/JoinRequest.jsx\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Please connect your wallet or create a user profile\"\n                    }, void 0, false, {\n                        fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/projects/JoinRequest.jsx\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/projects/JoinRequest.jsx\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/projects/JoinRequest.jsx\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, _this);\n};\n_s(JoinRequest, \"YfXkuklTOO8cF3KIL6lJcrvqq30=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = JoinRequest;\n/* harmony default export */ __webpack_exports__[\"default\"] = (JoinRequest);\nvar _c;\n$RefreshReg$(_c, \"JoinRequest\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb2plY3RzL0pvaW5SZXF1ZXN0LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7OztBQUFtRDtBQUNUO0FBQ1U7QUFDMkI7QUFDaUI7QUFDekU7QUFDOEQ7QUFDaEM7QUFHckQsSUFBTVksV0FBVyxHQUFHLGdCQUFnQztRQUE3QkMsV0FBVyxTQUFYQSxXQUFXLEVBQUVDLFNBQVMsU0FBVEEsU0FBUzs7SUFFM0MsSUFBa0NaLEdBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLENBQUMsRUFBekNhLFNBQVMsR0FBa0JiLEdBQWMsR0FBaEMsRUFBRWMsWUFBWSxHQUFJZCxHQUFjLEdBQWxCO0lBQzlCLElBQW9EQSxJQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBQTVEZSxrQkFBa0IsR0FBMkJmLElBQWUsR0FBMUMsRUFBRWdCLHFCQUFxQixHQUFJaEIsSUFBZSxHQUFuQjtJQUNoRCxJQUFrQ0EsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQUExQ2lCLFNBQVMsR0FBa0JqQixJQUFlLEdBQWpDLEVBQUVrQixZQUFZLEdBQUlsQixJQUFlLEdBQW5CO0lBQzlCLElBQTBDQSxJQUF1RCxHQUF2REEsK0NBQVEsQ0FBQztRQUFFbUIsS0FBSyxFQUFFLGlCQUFpQjtRQUFFQyxRQUFRLEVBQUUsS0FBSztLQUFFLENBQUMsRUFBMUZDLGFBQWEsR0FBc0JyQixJQUF1RCxHQUE3RSxFQUFFc0IsZ0JBQWdCLEdBQUl0QixJQUF1RCxHQUEzRDtJQUV0QyxJQUFNdUIsYUFBYSxHQUFHdEIsd0RBQVcsQ0FBQyxTQUFDdUIsS0FBSztlQUFLQSxLQUFLLENBQUNDLFVBQVUsQ0FBQ0YsYUFBYTtLQUFBLENBQUM7SUFDNUUsSUFBTUcsUUFBUSxHQUFHekIsd0RBQVcsQ0FBQyxTQUFDdUIsS0FBSztlQUFLQSxLQUFLLENBQUNDLFVBQVUsQ0FBQ0MsUUFBUTtLQUFBLENBQUM7SUFFbEUsSUFBTUMsV0FBVztt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PzZhM2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBCdXR0b24sIE1lc3NhZ2UgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCB7IGFkZE5vdGlmaWNhdGlvbiB9IGZyb20gXCIuLi8uLi9oZWxwZXJzL21vbmdvZGIvTm90aWZpY2F0aW9uQ2FsbENlbnRlclwiO1xuaW1wb3J0IHsgbWFrZUpvaW5SZXF1ZXN0LCBnZXRQZW5kaW5nUmVxdWVzdHNBZnRlckpvaW5SZXF1ZXN0IH0gZnJvbSBcIi4uLy4uL2hlbHBlcnMvdXNlcnMvdXNlcnNcIjtcbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCB7IGdldFVzZXJzTm90aWZpY2F0aW9ucyB9IGZyb20gXCIuLi8uLi9oZWxwZXJzL21vbmdvZGIvTm90aWZpY2F0aW9uQ2FsbENlbnRlclwiO1xuaW1wb3J0IE1vZGFsTWVzc2FnZSBmcm9tIFwiLi4vdXRpbGl0aWVzL01vZGFsTWVzc2FnZVwiO1xuXG5cbmNvbnN0IEpvaW5SZXF1ZXN0ID0gKHsgcHJvamVjdERhdGEsIHByb2plY3RJZCB9KSA9PiB7XG5cbiAgY29uc3QgW2hpZGVFcnJvciwgc2V0SGlkZUVycm9yXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbdHJhbnNhY3Rpb25QZW5kaW5nLCBzZXRUcmFuc2FjdGlvblBlbmRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbb3Blbk1vZGFsLCBzZXRPcGVuTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbcmVxdWVzdEJ1dHRvbiwgc2V0UmVxdWVzdEJ1dHRvbl0gPSB1c2VTdGF0ZSh7IGxhYmVsOiBcIlJlcXVlc3QgdG8gSm9pblwiLCBkaXNhYmxlZDogZmFsc2UgfSk7XG5cbiAgY29uc3Qgd2FsbGV0QWRkcmVzcyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUubWFuYWdlRGF0YS53YWxsZXRBZGRyZXNzKTtcbiAgY29uc3QgdXNlckluZm8gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLm1hbmFnZURhdGEudXNlckluZm8pO1xuXG4gIGNvbnN0IGpvaW5SZXF1ZXN0ID0gYXN5bmMoKSA9PiB7XG4gICAgc2V0VHJhbnNhY3Rpb25QZW5kaW5nKHRydWUpO1xuICAgIGlmKHVzZXJJbmZvKSB7XG4gICAgICBjb25zdCByZXNwID0gYXdhaXQgbWFrZUpvaW5SZXF1ZXN0KHdhbGxldEFkZHJlc3MsIHByb2plY3RJZCk7XG4gICAgICBzZXRIaWRlRXJyb3IodHJ1ZSk7XG4gICAgICBpZihyZXNwKSB7XG4gICAgICAgIHNlbmROb3RpZmljYXRpb25zVG9NZW1iZXJzKHByb2plY3REYXRhLm1lbWJlcnMpO1xuICAgICAgICBzZXRPcGVuTW9kYWwodHJ1ZSk7XG4gICAgICAgIGlzUmVxdWVzdFBlbmRpbmcoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc2V0SGlkZUVycm9yKGZhbHNlKTtcbiAgICB9XG4gICAgc2V0VHJhbnNhY3Rpb25QZW5kaW5nKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBzZW5kTm90aWZpY2F0aW9uc1RvTWVtYmVycyA9IChtZW1iZXJzKSA9PiB7XG4gICAgbWVtYmVycy5tYXAoYXN5bmMobWVtYmVyKSA9PiB7XG4gICAgICBpZighXy5pc0VxdWFsKG1lbWJlci5tb25nb05vdGlmaWNhdGlvbnNJZCwgXCIwXCIpKSB7XG4gICAgICAgIGNvbnN0IG1vbmdvVXNlciA9IGF3YWl0IGdldFVzZXJzTm90aWZpY2F0aW9ucyhtZW1iZXIubW9uZ29Ob3RpZmljYXRpb25zSWQpO1xuICAgICAgICBpZihtb25nb1VzZXIuc3VjY2Vzc2Z1bFJlc3BvbnNlKSB7XG4gICAgICAgICAgY29uc3Qgbm90aWZpY2F0aW9uID0ge1xuICAgICAgICAgICAgbWVzc2FnZTogYCR7dXNlckluZm8uY29kZW5hbWV9IGhhcyByZXF1ZXN0ZWQgdG8gam9pbiAke3Byb2plY3REYXRhLnByb2plY3QubmFtZX1gLFxuICAgICAgICAgIH07XG4gICAgICAgICAgY29uc3QgdXBkYXRlZE5vdGlmaWNhdGlvbnMgPSBbbm90aWZpY2F0aW9uLCAuLi5tb25nb1VzZXIuZGF0YS5ub3RpZmljYXRpb25zXTtcbiAgICAgICAgICBjb25zdCB1cGRhdGVkVXNlciA9IHsgLi4ubW9uZ29Vc2VyLmRhdGEsIG5vdGlmaWNhdGlvbjogW25vdGlmaWNhdGlvbiwgLi4ubW9uZ29Vc2VyLmRhdGEubm90aWZpY2F0aW9uc119O1xuICAgICAgICAgIGFkZE5vdGlmaWNhdGlvbihtZW1iZXIubW9uZ29Ob3RpZmljYXRpb25zSWQsIHVwZGF0ZWRVc2VyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBjb25zdCBpc1JlcXVlc3RQZW5kaW5nID0gYXN5bmMoKSA9PiB7XG4gICAgaWYodXNlckluZm8gJiYgIXByb2plY3REYXRhLmlzTWVtYmVyKSB7XG4gICAgICBjb25zdCByZXNwID0gYXdhaXQgZ2V0UGVuZGluZ1JlcXVlc3RzQWZ0ZXJKb2luUmVxdWVzdChwcm9qZWN0RGF0YS5wcm9qZWN0LmlkKTtcbiAgICAgIGNvbnN0IHBlbmRpbmcgPSBhd2FpdCByZXNwLnNvbWUoKHJlcXVlc3QpID0+XG4gICAgICAgIF8uaXNFcXVhbChyZXF1ZXN0LnVzZXIudXNlckFkZHJlc3MsIHVzZXJJbmZvLnVzZXJBZGRyZXNzKVxuICAgICAgKTtcbiAgICAgIGlmIChwZW5kaW5nKSB7XG4gICAgICAgIHNldFJlcXVlc3RCdXR0b24oeyBsYWJlbDogXCJSZXF1ZXN0IFBlbmRpbmdcIiwgZGlzYWJsZWQ6IHRydWUgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpc1JlcXVlc3RQZW5kaW5nKCk7XG4gIH0sIFt1c2VySW5mbywgcHJvamVjdERhdGEucHJvamVjdCwgcHJvamVjdERhdGEuaXNNZW1iZXJdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8QnV0dG9uIGRpc2FibGVkPXtyZXF1ZXN0QnV0dG9uLmRpc2FibGVkfSBsb2FkaW5nPXt0cmFuc2FjdGlvblBlbmRpbmd9IGNvbG9yPVwidmlvbGV0XCIgb25DbGljaz17am9pblJlcXVlc3R9PlxuICAgICAgICB7cmVxdWVzdEJ1dHRvbi5sYWJlbH1cbiAgICAgIDwvQnV0dG9uPlxuICAgICAgPE1vZGFsTWVzc2FnZVxuICAgICAgICBoZWFkZXI9XCJSZXF1ZXN0IFNlbnRcIlxuICAgICAgICBtZXNzYWdlPXtgWW91IGhhdmUgc3VjY2Vzc2Z1bGx5IHNlbnQgeW91ciByZXF1ZXN0IHRvIGpvaW4gJHtwcm9qZWN0RGF0YS5wcm9qZWN0Lm5hbWV9YH1cbiAgICAgICAgb3Blbj17b3Blbk1vZGFsfVxuICAgICAgICBjbG9zZU1vZGFsPXsoKSA9PiBzZXRPcGVuTW9kYWwoZmFsc2UpfVxuICAgICAgLz5cbiAgICAgIDxNZXNzYWdlIGhpZGRlbj17aGlkZUVycm9yfSBuZWdhdGl2ZT5cbiAgICAgICAgPE1lc3NhZ2UuSGVhZGVyPlVuYWJsZSB0byBzZW5kIHJlcXVlc3Q8L01lc3NhZ2UuSGVhZGVyPlxuICAgICAgICA8cD5QbGVhc2UgY29ubmVjdCB5b3VyIHdhbGxldCBvciBjcmVhdGUgYSB1c2VyIHByb2ZpbGU8L3A+XG4gICAgICA8L01lc3NhZ2U+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEpvaW5SZXF1ZXN0OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlU2VsZWN0b3IiLCJCdXR0b24iLCJNZXNzYWdlIiwiYWRkTm90aWZpY2F0aW9uIiwibWFrZUpvaW5SZXF1ZXN0IiwiZ2V0UGVuZGluZ1JlcXVlc3RzQWZ0ZXJKb2luUmVxdWVzdCIsIl8iLCJnZXRVc2Vyc05vdGlmaWNhdGlvbnMiLCJNb2RhbE1lc3NhZ2UiLCJKb2luUmVxdWVzdCIsInByb2plY3REYXRhIiwicHJvamVjdElkIiwiaGlkZUVycm9yIiwic2V0SGlkZUVycm9yIiwidHJhbnNhY3Rpb25QZW5kaW5nIiwic2V0VHJhbnNhY3Rpb25QZW5kaW5nIiwib3Blbk1vZGFsIiwic2V0T3Blbk1vZGFsIiwibGFiZWwiLCJkaXNhYmxlZCIsInJlcXVlc3RCdXR0b24iLCJzZXRSZXF1ZXN0QnV0dG9uIiwid2FsbGV0QWRkcmVzcyIsInN0YXRlIiwibWFuYWdlRGF0YSIsInVzZXJJbmZvIiwiam9pblJlcXVlc3QiLCJyZXNwIiwic2VuZE5vdGlmaWNhdGlvbnNUb01lbWJlcnMiLCJtZW1iZXJzIiwiaXNSZXF1ZXN0UGVuZGluZyIsIm1hcCIsIm1lbWJlciIsIm1vbmdvVXNlciIsIm5vdGlmaWNhdGlvbiIsInVwZGF0ZWROb3RpZmljYXRpb25zIiwidXBkYXRlZFVzZXIiLCJpc0VxdWFsIiwibW9uZ29Ob3RpZmljYXRpb25zSWQiLCJzdWNjZXNzZnVsUmVzcG9uc2UiLCJtZXNzYWdlIiwiY29kZW5hbWUiLCJwcm9qZWN0IiwibmFtZSIsImRhdGEiLCJub3RpZmljYXRpb25zIiwicGVuZGluZyIsImlzTWVtYmVyIiwiaWQiLCJzb21lIiwicmVxdWVzdCIsInVzZXIiLCJ1c2VyQWRkcmVzcyIsImRpdiIsImxvYWRpbmciLCJjb2xvciIsIm9uQ2xpY2siLCJoZWFkZXIiLCJvcGVuIiwiY2xvc2VNb2RhbCIsImhpZGRlbiIsIm5lZ2F0aXZlIiwiSGVhZGVyIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/projects/JoinRequest.jsx\n"));

/***/ })

});