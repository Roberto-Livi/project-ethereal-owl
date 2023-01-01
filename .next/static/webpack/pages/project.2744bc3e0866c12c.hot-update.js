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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _helpers_mongodb_NotificationCallCenter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/mongodb/NotificationCallCenter */ \"./helpers/mongodb/NotificationCallCenter.js\");\n/* harmony import */ var _helpers_users_users__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/users/users */ \"./helpers/users/users.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _utilities_ModalMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utilities/ModalMessage */ \"./components/utilities/ModalMessage.jsx\");\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar JoinRequest = function(param) {\n    var projectData = param.projectData, projectId = param.projectId, projectName = param.projectName, members = param.members;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), hideError = ref[0], setHideError = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), transactionPending = ref1[0], setTransactionPending = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), openModal = ref2[0], setOpenModal = ref2[1];\n    var walletAddress = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function(state) {\n        return state.manageData.walletAddress;\n    });\n    var userInfo = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function(state) {\n        return state.manageData.userInfo;\n    });\n    var joinRequest = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(function() {\n            var resp;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        setTransactionPending(true);\n                        if (!userInfo) return [\n                            3,\n                            2\n                        ];\n                        return [\n                            4,\n                            (0,_helpers_users_users__WEBPACK_IMPORTED_MODULE_4__.makeJoinRequest)(walletAddress, projectId)\n                        ];\n                    case 1:\n                        resp = _state.sent();\n                        setHideError(true);\n                        if (resp) {\n                            sendNotificationsToMembers(members);\n                            setOpenModal(true);\n                        }\n                        return [\n                            3,\n                            3\n                        ];\n                    case 2:\n                        setHideError(false);\n                        _state.label = 3;\n                    case 3:\n                        setTransactionPending(false);\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function joinRequest() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var sendNotificationsToMembers = function(members) {\n        members.map(function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(function(member) {\n                var mongoUser, notification, updatedNotifications;\n                return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            if (!!lodash__WEBPACK_IMPORTED_MODULE_5___default().isEqual(member.mongoNotificationsId, \"0\")) return [\n                                3,\n                                2\n                            ];\n                            return [\n                                4,\n                                (0,_helpers_mongodb_NotificationCallCenter__WEBPACK_IMPORTED_MODULE_3__.getUsersNotifications)(member.mongoNotificationsId)\n                            ];\n                        case 1:\n                            mongoUser = _state.sent();\n                            if (mongoUser.successfulResponse) {\n                                notification = {\n                                    message: \"\".concat(userInfo.codename, \" has requested to join \").concat(projectName)\n                                };\n                                updatedNotifications = [\n                                    notification\n                                ].concat((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(mongoUser.data));\n                                (0,_helpers_mongodb_NotificationCallCenter__WEBPACK_IMPORTED_MODULE_3__.addNotification)(member.mongoNotificationsId, updatedNotifications);\n                            }\n                            _state.label = 2;\n                        case 2:\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return function(member) {\n                return _ref.apply(this, arguments);\n            };\n        }());\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Button, {\n                loading: transactionPending,\n                color: \"violet\",\n                onClick: joinRequest,\n                children: \"Request to Join\"\n            }, void 0, false, {\n                fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/projects/JoinRequest.jsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_utilities_ModalMessage__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                header: \"Request Sent\",\n                message: \"You have successfully sent your request to join \".concat(projectName),\n                open: openModal,\n                closeModal: function() {\n                    return setOpenModal(false);\n                }\n            }, void 0, false, {\n                fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/projects/JoinRequest.jsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Message, {\n                hidden: hideError,\n                negative: true,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Message.Header, {\n                        children: \"Unable to send request\"\n                    }, void 0, false, {\n                        fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/projects/JoinRequest.jsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Please connect your wallet\"\n                    }, void 0, false, {\n                        fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/projects/JoinRequest.jsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/projects/JoinRequest.jsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/projects/JoinRequest.jsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, _this);\n};\n_s(JoinRequest, \"hHuko1FEKak4aJ3Qc5K4kQBLDXs=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = JoinRequest;\n/* harmony default export */ __webpack_exports__[\"default\"] = (JoinRequest);\nvar _c;\n$RefreshReg$(_c, \"JoinRequest\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQzs7Ozs7Ozs7WUFFTCxDQUFDOzRCQVhpQkgsTUFBTTs7O1lBV3RCO0lBQ0osQ0FBQztJQUVELHFCQUNFLDhEQUFDVSxLQUFHOzswQkFDRiw4REFBQ3BDLHNEQUFNO2dCQUFDcUMsT0FBTyxFQUFFdkIsa0JBQWtCO2dCQUFFd0IsS0FBSyxFQUFDLFFBQVE7Z0JBQUNDLE9BQU8sRUFBRWpCLFdBQVc7MEJBQUUsaUJBRTFFOzs7OztxQkFBUzswQkFDVCw4REFBQ2hCLCtEQUFZO2dCQUNYa0MsTUFBTSxFQUFDLGNBQWM7Z0JBQ3JCUCxPQUFPLEVBQUUsa0RBQWlELENBQWMsT0FBWnZCLFdBQVcsQ0FBRTtnQkFDekUrQixJQUFJLEVBQUV6QixTQUFTO2dCQUNmMEIsVUFBVSxFQUFFOzJCQUFNekIsWUFBWSxDQUFDLEtBQUssQ0FBQztpQkFBQTs7Ozs7cUJBQ3JDOzBCQUNGLDhEQUFDaEIsdURBQU87Z0JBQUMwQyxNQUFNLEVBQUUvQixTQUFTO2dCQUFFZ0MsUUFBUTs7a0NBQ2xDLDhEQUFDM0MsOERBQWM7a0NBQUMsd0JBQXNCOzs7Ozs2QkFBaUI7a0NBQ3ZELDhEQUFDNkMsR0FBQztrQ0FBQyw0QkFBMEI7Ozs7OzZCQUFJOzs7Ozs7cUJBQ3pCOzs7Ozs7YUFDTixDQUNOO0FBQ0osQ0FBQztHQXhES3ZDLFdBQVc7O1FBTU9SLG9EQUFXO1FBQ2hCQSxvREFBVzs7O0FBUHhCUSxLQUFBQSxXQUFXO0FBMERqQiwrREFBZUEsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcHJvamVjdHMvSm9pblJlcXVlc3QuanN4PzZhM2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgQnV0dG9uLCBNZXNzYWdlIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgeyBhZGROb3RpZmljYXRpb24gfSBmcm9tIFwiLi4vLi4vaGVscGVycy9tb25nb2RiL05vdGlmaWNhdGlvbkNhbGxDZW50ZXJcIjtcbmltcG9ydCB7IG1ha2VKb2luUmVxdWVzdCB9IGZyb20gXCIuLi8uLi9oZWxwZXJzL3VzZXJzL3VzZXJzXCI7XG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgeyBnZXRVc2Vyc05vdGlmaWNhdGlvbnMgfSBmcm9tIFwiLi4vLi4vaGVscGVycy9tb25nb2RiL05vdGlmaWNhdGlvbkNhbGxDZW50ZXJcIjtcbmltcG9ydCBNb2RhbE1lc3NhZ2UgZnJvbSBcIi4uL3V0aWxpdGllcy9Nb2RhbE1lc3NhZ2VcIjtcblxuXG5jb25zdCBKb2luUmVxdWVzdCA9ICh7IHByb2plY3REYXRhLCBwcm9qZWN0SWQsIHByb2plY3ROYW1lLCBtZW1iZXJzIH0pID0+IHtcblxuICBjb25zdCBbaGlkZUVycm9yLCBzZXRIaWRlRXJyb3JdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFt0cmFuc2FjdGlvblBlbmRpbmcsIHNldFRyYW5zYWN0aW9uUGVuZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtvcGVuTW9kYWwsIHNldE9wZW5Nb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgd2FsbGV0QWRkcmVzcyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUubWFuYWdlRGF0YS53YWxsZXRBZGRyZXNzKTtcbiAgY29uc3QgdXNlckluZm8gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLm1hbmFnZURhdGEudXNlckluZm8pO1xuXG4gIGNvbnN0IGpvaW5SZXF1ZXN0ID0gYXN5bmMoKSA9PiB7XG4gICAgc2V0VHJhbnNhY3Rpb25QZW5kaW5nKHRydWUpO1xuICAgIGlmKHVzZXJJbmZvKSB7XG4gICAgICBjb25zdCByZXNwID0gYXdhaXQgbWFrZUpvaW5SZXF1ZXN0KHdhbGxldEFkZHJlc3MsIHByb2plY3RJZCk7XG4gICAgICBzZXRIaWRlRXJyb3IodHJ1ZSk7XG4gICAgICBpZihyZXNwKSB7XG4gICAgICAgIHNlbmROb3RpZmljYXRpb25zVG9NZW1iZXJzKG1lbWJlcnMpO1xuICAgICAgICBzZXRPcGVuTW9kYWwodHJ1ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEhpZGVFcnJvcihmYWxzZSk7XG4gICAgfVxuICAgIHNldFRyYW5zYWN0aW9uUGVuZGluZyhmYWxzZSk7XG4gIH07XG5cbiAgY29uc3Qgc2VuZE5vdGlmaWNhdGlvbnNUb01lbWJlcnMgPSAobWVtYmVycykgPT4ge1xuICAgIG1lbWJlcnMubWFwKGFzeW5jKG1lbWJlcikgPT4ge1xuICAgICAgaWYoIV8uaXNFcXVhbChtZW1iZXIubW9uZ29Ob3RpZmljYXRpb25zSWQsIFwiMFwiKSkge1xuICAgICAgICBjb25zdCBtb25nb1VzZXIgPSBhd2FpdCBnZXRVc2Vyc05vdGlmaWNhdGlvbnMobWVtYmVyLm1vbmdvTm90aWZpY2F0aW9uc0lkKTtcbiAgICAgICAgaWYobW9uZ29Vc2VyLnN1Y2Nlc3NmdWxSZXNwb25zZSkge1xuICAgICAgICAgIGNvbnN0IG5vdGlmaWNhdGlvbiA9IHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IGAke3VzZXJJbmZvLmNvZGVuYW1lfSBoYXMgcmVxdWVzdGVkIHRvIGpvaW4gJHtwcm9qZWN0TmFtZX1gLFxuICAgICAgICAgIH07XG4gICAgICAgICAgY29uc3QgdXBkYXRlZE5vdGlmaWNhdGlvbnMgPSBbbm90aWZpY2F0aW9uLCAuLi5tb25nb1VzZXIuZGF0YV07XG4gICAgICAgICAgYWRkTm90aWZpY2F0aW9uKG1lbWJlci5tb25nb05vdGlmaWNhdGlvbnNJZCwgdXBkYXRlZE5vdGlmaWNhdGlvbnMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxCdXR0b24gbG9hZGluZz17dHJhbnNhY3Rpb25QZW5kaW5nfSBjb2xvcj1cInZpb2xldFwiIG9uQ2xpY2s9e2pvaW5SZXF1ZXN0fT5cbiAgICAgICAgUmVxdWVzdCB0byBKb2luXG4gICAgICA8L0J1dHRvbj5cbiAgICAgIDxNb2RhbE1lc3NhZ2VcbiAgICAgICAgaGVhZGVyPVwiUmVxdWVzdCBTZW50XCJcbiAgICAgICAgbWVzc2FnZT17YFlvdSBoYXZlIHN1Y2Nlc3NmdWxseSBzZW50IHlvdXIgcmVxdWVzdCB0byBqb2luICR7cHJvamVjdE5hbWV9YH1cbiAgICAgICAgb3Blbj17b3Blbk1vZGFsfVxuICAgICAgICBjbG9zZU1vZGFsPXsoKSA9PiBzZXRPcGVuTW9kYWwoZmFsc2UpfVxuICAgICAgLz5cbiAgICAgIDxNZXNzYWdlIGhpZGRlbj17aGlkZUVycm9yfSBuZWdhdGl2ZT5cbiAgICAgICAgPE1lc3NhZ2UuSGVhZGVyPlVuYWJsZSB0byBzZW5kIHJlcXVlc3Q8L01lc3NhZ2UuSGVhZGVyPlxuICAgICAgICA8cD5QbGVhc2UgY29ubmVjdCB5b3VyIHdhbGxldDwvcD5cbiAgICAgIDwvTWVzc2FnZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSm9pblJlcXVlc3Q7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VTZWxlY3RvciIsIkJ1dHRvbiIsIk1lc3NhZ2UiLCJhZGROb3RpZmljYXRpb24iLCJtYWtlSm9pblJlcXVlc3QiLCJfIiwiZ2V0VXNlcnNOb3RpZmljYXRpb25zIiwiTW9kYWxNZXNzYWdlIiwiSm9pblJlcXVlc3QiLCJwcm9qZWN0RGF0YSIsInByb2plY3RJZCIsInByb2plY3ROYW1lIiwibWVtYmVycyIsImhpZGVFcnJvciIsInNldEhpZGVFcnJvciIsInRyYW5zYWN0aW9uUGVuZGluZyIsInNldFRyYW5zYWN0aW9uUGVuZGluZyIsIm9wZW5Nb2RhbCIsInNldE9wZW5Nb2RhbCIsIndhbGxldEFkZHJlc3MiLCJzdGF0ZSIsIm1hbmFnZURhdGEiLCJ1c2VySW5mbyIsImpvaW5SZXF1ZXN0IiwicmVzcCIsInNlbmROb3RpZmljYXRpb25zVG9NZW1iZXJzIiwibWFwIiwibWVtYmVyIiwibW9uZ29Vc2VyIiwibm90aWZpY2F0aW9uIiwidXBkYXRlZE5vdGlmaWNhdGlvbnMiLCJpc0VxdWFsIiwibW9uZ29Ob3RpZmljYXRpb25zSWQiLCJzdWNjZXNzZnVsUmVzcG9uc2UiLCJtZXNzYWdlIiwiY29kZW5hbWUiLCJkYXRhIiwiZGl2IiwibG9hZGluZyIsImNvbG9yIiwib25DbGljayIsImhlYWRlciIsIm9wZW4iLCJjbG9zZU1vZGFsIiwiaGlkZGVuIiwibmVnYXRpdmUiLCJIZWFkZXIiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/projects/JoinRequest.jsx\n"));

/***/ })

});