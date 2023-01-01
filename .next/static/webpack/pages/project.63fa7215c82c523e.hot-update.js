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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _helpers_mongodb_NotificationCallCenter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/mongodb/NotificationCallCenter */ \"./helpers/mongodb/NotificationCallCenter.js\");\n/* harmony import */ var _helpers_users_users__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/users/users */ \"./helpers/users/users.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _utilities_ModalMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utilities/ModalMessage */ \"./components/utilities/ModalMessage.jsx\");\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar JoinRequest = function(param) {\n    var projectData = param.projectData, projectId = param.projectId;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), hideError = ref[0], setHideError = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), transactionPending = ref1[0], setTransactionPending = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), openModal = ref2[0], setOpenModal = ref2[1];\n    var walletAddress = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function(state) {\n        return state.manageData.walletAddress;\n    });\n    var userInfo = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function(state) {\n        return state.manageData.userInfo;\n    });\n    var joinRequest = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(function() {\n            var resp;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        setTransactionPending(true);\n                        if (!userInfo) return [\n                            3,\n                            2\n                        ];\n                        return [\n                            4,\n                            (0,_helpers_users_users__WEBPACK_IMPORTED_MODULE_4__.makeJoinRequest)(walletAddress, projectId)\n                        ];\n                    case 1:\n                        resp = _state.sent();\n                        setHideError(true);\n                        if (resp) {\n                            sendNotificationsToMembers(projectData.members);\n                            setOpenModal(true);\n                        }\n                        return [\n                            3,\n                            3\n                        ];\n                    case 2:\n                        setHideError(false);\n                        _state.label = 3;\n                    case 3:\n                        setTransactionPending(false);\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function joinRequest() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var sendNotificationsToMembers = function(members) {\n        members.map(function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(function(member) {\n                var mongoUser, notification, updatedNotifications;\n                return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            if (!!lodash__WEBPACK_IMPORTED_MODULE_5___default().isEqual(member.mongoNotificationsId, \"0\")) return [\n                                3,\n                                2\n                            ];\n                            return [\n                                4,\n                                (0,_helpers_mongodb_NotificationCallCenter__WEBPACK_IMPORTED_MODULE_3__.getUsersNotifications)(member.mongoNotificationsId)\n                            ];\n                        case 1:\n                            mongoUser = _state.sent();\n                            if (mongoUser.successfulResponse) {\n                                notification = {\n                                    message: \"\".concat(userInfo.codename, \" has requested to join \").concat(projectData.project.name)\n                                };\n                                updatedNotifications = [\n                                    notification\n                                ].concat((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(mongoUser.data));\n                                (0,_helpers_mongodb_NotificationCallCenter__WEBPACK_IMPORTED_MODULE_3__.addNotification)(member.mongoNotificationsId, updatedNotifications);\n                            }\n                            _state.label = 2;\n                        case 2:\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return function(member) {\n                return _ref.apply(this, arguments);\n            };\n        }());\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Button, {\n                loading: transactionPending,\n                color: \"violet\",\n                onClick: joinRequest,\n                children: \"Request to Join\"\n            }, void 0, false, {\n                fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/projects/JoinRequest.jsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_utilities_ModalMessage__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                header: \"Request Sent\",\n                message: \"You have successfully sent your request to join \".concat(projectData.project.name),\n                open: openModal,\n                closeModal: function() {\n                    return setOpenModal(false);\n                }\n            }, void 0, false, {\n                fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/projects/JoinRequest.jsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Message, {\n                hidden: hideError,\n                negative: true,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Message.Header, {\n                        children: \"Unable to send request\"\n                    }, void 0, false, {\n                        fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/projects/JoinRequest.jsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Please connect your wallet\"\n                    }, void 0, false, {\n                        fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/projects/JoinRequest.jsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/projects/JoinRequest.jsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/projects/JoinRequest.jsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, _this);\n};\n_s(JoinRequest, \"hHuko1FEKak4aJ3Qc5K4kQBLDXs=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = JoinRequest;\n/* harmony default export */ __webpack_exports__[\"default\"] = (JoinRequest);\nvar _c;\n$RefreshReg$(_c, \"JoinRequest\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb2plY3RzL0pvaW5SZXF1ZXN0LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBQXdDO0FBQ0U7QUFDVTtBQUMyQjtBQUNuQjtBQUNyQztBQUM4RDtBQUNoQztBQUdyRCxJQUFNVSxXQUFXLEdBQUcsZ0JBQWdDO1FBQTdCQyxXQUFXLFNBQVhBLFdBQVcsRUFBRUMsU0FBUyxTQUFUQSxTQUFTOztJQUUzQyxJQUFrQ1gsR0FBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksQ0FBQyxFQUF6Q1ksU0FBUyxHQUFrQlosR0FBYyxHQUFoQyxFQUFFYSxZQUFZLEdBQUliLEdBQWMsR0FBbEI7SUFDOUIsSUFBb0RBLElBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFBNURjLGtCQUFrQixHQUEyQmQsSUFBZSxHQUExQyxFQUFFZSxxQkFBcUIsR0FBSWYsSUFBZSxHQUFuQjtJQUNoRCxJQUFrQ0EsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQUExQ2dCLFNBQVMsR0FBa0JoQixJQUFlLEdBQWpDLEVBQUVpQixZQUFZLEdBQUlqQixJQUFlLEdBQW5CO0lBRTlCLElBQU1rQixhQUFhLEdBQUdqQix3REFBVyxDQUFDLFNBQUNrQixLQUFLO2VBQUtBLEtBQUssQ0FBQ0MsVUFBVSxDQUFDRixhQUFhO0tBQUEsQ0FBQztJQUM1RSxJQUFNRyxRQUFRLEdBQUdwQix3REFBVyxDQUFDLFNBQUNrQixLQUFLO2VBQUtBLEtBQUssQ0FBQ0MsVUFBVSxDQUFDQyxRQUFRO0tBQUEsQ0FBQztJQUVsRSxJQUFNQyxXQUFXO21CQUFHLCtGQUFXO2dCQUdyQkMsSUFBSTs7Ozt3QkFGWlIscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUM7NkJBQ3pCTSxRQUFRLEVBQVJBOzs7MEJBQVE7d0JBQ0k7OzRCQUFNaEIscUVBQWUsQ0FBQ2EsYUFBYSxFQUFFUCxTQUFTLENBQUM7MEJBQUE7O3dCQUF0RFksSUFBSSxHQUFHLGFBQStDO3dCQUM1RFYsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNuQixJQUFHVSxJQUFJLEVBQUU7NEJBQ1BDLDBCQUEwQixDQUFDZCxXQUFXLENBQUNlLE9BQU8sQ0FBQyxDQUFDOzRCQUNoRFIsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNyQixDQUFDOzs7Ozs7d0JBRURKLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQzs7O3dCQUV0QkUscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7Ozs7OztRQUMvQixDQUFDO3dCQWJLTyxXQUFXOzs7T0FhaEI7SUFFRCxJQUFNRSwwQkFBMEIsR0FBRyxTQUFDQyxPQUFPLEVBQUs7UUFDOUNBLE9BQU8sQ0FBQ0MsR0FBRzt1QkFBQyw2RkFBTUMsTUFBTSxFQUFLO29CQUVuQkMsU0FBUyxFQUVQQyxZQUFZLEVBR1pDLG9CQUFvQjs7OztpQ0FOM0IsQ0FBQ3hCLHFEQUFTLENBQUNxQixNQUFNLENBQUNLLG9CQUFvQixFQUFFLEdBQUcsQ0FBQyxFQUE1Qzs7OzhCQUE0Qzs0QkFDM0I7O2dDQUFNekIsOEZBQXFCLENBQUNvQixNQUFNLENBQUNLLG9CQUFvQixDQUFDOzhCQUFBOzs0QkFBcEVKLFNBQVMsR0FBRyxhQUF3RDs0QkFDMUUsSUFBR0EsU0FBUyxDQUFDSyxrQkFBa0IsRUFBRTtnQ0FDekJKLFlBQVksR0FBRztvQ0FDbkJLLE9BQU8sRUFBRSxFQUFDLENBQTZDeEIsTUFBd0IsQ0FBbkVXLFFBQVEsQ0FBQ2MsUUFBUSxFQUFDLHlCQUF1QixDQUEyQixRQUF6QnpCLFdBQVcsQ0FBQzBCLE9BQU8sQ0FBQ0MsSUFBSSxDQUFFO2lDQUNsRixDQUFDO2dDQUNJUCxvQkFBb0IsR0FBRztvQ0FBQ0QsWUFBWTtrQ0FBYixNQUFpQyxDQUFsQixxRkFBR0QsU0FBUyxDQUFDVSxJQUFJLENBQWRWLENBQWUsQ0FBQztnQ0FDL0R4Qix3RkFBZSxDQUFDdUIsTUFBTSxDQUFDSyxvQkFBb0IsRUFBRUYsb0JBQW9CLENBQUMsQ0FBQzs0QkFDckUsQ0FBQzs7Ozs7Ozs7WUFFTCxDQUFDOzRCQVhpQkgsTUFBTTs7O1lBV3RCO0lBQ0osQ0FBQztJQUVELHFCQUNFLDhEQUFDWSxLQUFHOzswQkFDRiw4REFBQ3JDLHNEQUFNO2dCQUFDc0MsT0FBTyxFQUFFMUIsa0JBQWtCO2dCQUFFMkIsS0FBSyxFQUFDLFFBQVE7Z0JBQUNDLE9BQU8sRUFBRXBCLFdBQVc7MEJBQUUsaUJBRTFFOzs7OztxQkFBUzswQkFDVCw4REFBQ2QsK0RBQVk7Z0JBQ1htQyxNQUFNLEVBQUMsY0FBYztnQkFDckJULE9BQU8sRUFBRSxrREFBaUQsQ0FBMkIsT0FBekJ4QixXQUFXLENBQUMwQixPQUFPLENBQUNDLElBQUksQ0FBRTtnQkFDdEZPLElBQUksRUFBRTVCLFNBQVM7Z0JBQ2Y2QixVQUFVLEVBQUU7MkJBQU01QixZQUFZLENBQUMsS0FBSyxDQUFDO2lCQUFBOzs7OztxQkFDckM7MEJBQ0YsOERBQUNkLHVEQUFPO2dCQUFDMkMsTUFBTSxFQUFFbEMsU0FBUztnQkFBRW1DLFFBQVE7O2tDQUNsQyw4REFBQzVDLDhEQUFjO2tDQUFDLHdCQUFzQjs7Ozs7NkJBQWlCO2tDQUN2RCw4REFBQzhDLEdBQUM7a0NBQUMsNEJBQTBCOzs7Ozs2QkFBSTs7Ozs7O3FCQUN6Qjs7Ozs7O2FBQ04sQ0FDTjtBQUNKLENBQUM7R0F4REt4QyxXQUFXOztRQU1PUixvREFBVztRQUNoQkEsb0RBQVc7OztBQVB4QlEsS0FBQUEsV0FBVztBQTBEakIsK0RBQWVBLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3Byb2plY3RzL0pvaW5SZXF1ZXN0LmpzeD82YTNjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IEJ1dHRvbiwgTWVzc2FnZSB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IHsgYWRkTm90aWZpY2F0aW9uIH0gZnJvbSBcIi4uLy4uL2hlbHBlcnMvbW9uZ29kYi9Ob3RpZmljYXRpb25DYWxsQ2VudGVyXCI7XG5pbXBvcnQgeyBtYWtlSm9pblJlcXVlc3QgfSBmcm9tIFwiLi4vLi4vaGVscGVycy91c2Vycy91c2Vyc1wiO1xuaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IHsgZ2V0VXNlcnNOb3RpZmljYXRpb25zIH0gZnJvbSBcIi4uLy4uL2hlbHBlcnMvbW9uZ29kYi9Ob3RpZmljYXRpb25DYWxsQ2VudGVyXCI7XG5pbXBvcnQgTW9kYWxNZXNzYWdlIGZyb20gXCIuLi91dGlsaXRpZXMvTW9kYWxNZXNzYWdlXCI7XG5cblxuY29uc3QgSm9pblJlcXVlc3QgPSAoeyBwcm9qZWN0RGF0YSwgcHJvamVjdElkIH0pID0+IHtcblxuICBjb25zdCBbaGlkZUVycm9yLCBzZXRIaWRlRXJyb3JdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFt0cmFuc2FjdGlvblBlbmRpbmcsIHNldFRyYW5zYWN0aW9uUGVuZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtvcGVuTW9kYWwsIHNldE9wZW5Nb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgd2FsbGV0QWRkcmVzcyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUubWFuYWdlRGF0YS53YWxsZXRBZGRyZXNzKTtcbiAgY29uc3QgdXNlckluZm8gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLm1hbmFnZURhdGEudXNlckluZm8pO1xuXG4gIGNvbnN0IGpvaW5SZXF1ZXN0ID0gYXN5bmMoKSA9PiB7XG4gICAgc2V0VHJhbnNhY3Rpb25QZW5kaW5nKHRydWUpO1xuICAgIGlmKHVzZXJJbmZvKSB7XG4gICAgICBjb25zdCByZXNwID0gYXdhaXQgbWFrZUpvaW5SZXF1ZXN0KHdhbGxldEFkZHJlc3MsIHByb2plY3RJZCk7XG4gICAgICBzZXRIaWRlRXJyb3IodHJ1ZSk7XG4gICAgICBpZihyZXNwKSB7XG4gICAgICAgIHNlbmROb3RpZmljYXRpb25zVG9NZW1iZXJzKHByb2plY3REYXRhLm1lbWJlcnMpO1xuICAgICAgICBzZXRPcGVuTW9kYWwodHJ1ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEhpZGVFcnJvcihmYWxzZSk7XG4gICAgfVxuICAgIHNldFRyYW5zYWN0aW9uUGVuZGluZyhmYWxzZSk7XG4gIH07XG5cbiAgY29uc3Qgc2VuZE5vdGlmaWNhdGlvbnNUb01lbWJlcnMgPSAobWVtYmVycykgPT4ge1xuICAgIG1lbWJlcnMubWFwKGFzeW5jKG1lbWJlcikgPT4ge1xuICAgICAgaWYoIV8uaXNFcXVhbChtZW1iZXIubW9uZ29Ob3RpZmljYXRpb25zSWQsIFwiMFwiKSkge1xuICAgICAgICBjb25zdCBtb25nb1VzZXIgPSBhd2FpdCBnZXRVc2Vyc05vdGlmaWNhdGlvbnMobWVtYmVyLm1vbmdvTm90aWZpY2F0aW9uc0lkKTtcbiAgICAgICAgaWYobW9uZ29Vc2VyLnN1Y2Nlc3NmdWxSZXNwb25zZSkge1xuICAgICAgICAgIGNvbnN0IG5vdGlmaWNhdGlvbiA9IHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IGAke3VzZXJJbmZvLmNvZGVuYW1lfSBoYXMgcmVxdWVzdGVkIHRvIGpvaW4gJHtwcm9qZWN0RGF0YS5wcm9qZWN0Lm5hbWV9YCxcbiAgICAgICAgICB9O1xuICAgICAgICAgIGNvbnN0IHVwZGF0ZWROb3RpZmljYXRpb25zID0gW25vdGlmaWNhdGlvbiwgLi4ubW9uZ29Vc2VyLmRhdGFdO1xuICAgICAgICAgIGFkZE5vdGlmaWNhdGlvbihtZW1iZXIubW9uZ29Ob3RpZmljYXRpb25zSWQsIHVwZGF0ZWROb3RpZmljYXRpb25zKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8QnV0dG9uIGxvYWRpbmc9e3RyYW5zYWN0aW9uUGVuZGluZ30gY29sb3I9XCJ2aW9sZXRcIiBvbkNsaWNrPXtqb2luUmVxdWVzdH0+XG4gICAgICAgIFJlcXVlc3QgdG8gSm9pblxuICAgICAgPC9CdXR0b24+XG4gICAgICA8TW9kYWxNZXNzYWdlXG4gICAgICAgIGhlYWRlcj1cIlJlcXVlc3QgU2VudFwiXG4gICAgICAgIG1lc3NhZ2U9e2BZb3UgaGF2ZSBzdWNjZXNzZnVsbHkgc2VudCB5b3VyIHJlcXVlc3QgdG8gam9pbiAke3Byb2plY3REYXRhLnByb2plY3QubmFtZX1gfVxuICAgICAgICBvcGVuPXtvcGVuTW9kYWx9XG4gICAgICAgIGNsb3NlTW9kYWw9eygpID0+IHNldE9wZW5Nb2RhbChmYWxzZSl9XG4gICAgICAvPlxuICAgICAgPE1lc3NhZ2UgaGlkZGVuPXtoaWRlRXJyb3J9IG5lZ2F0aXZlPlxuICAgICAgICA8TWVzc2FnZS5IZWFkZXI+VW5hYmxlIHRvIHNlbmQgcmVxdWVzdDwvTWVzc2FnZS5IZWFkZXI+XG4gICAgICAgIDxwPlBsZWFzZSBjb25uZWN0IHlvdXIgd2FsbGV0PC9wPlxuICAgICAgPC9NZXNzYWdlPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBKb2luUmVxdWVzdDsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVNlbGVjdG9yIiwiQnV0dG9uIiwiTWVzc2FnZSIsImFkZE5vdGlmaWNhdGlvbiIsIm1ha2VKb2luUmVxdWVzdCIsIl8iLCJnZXRVc2Vyc05vdGlmaWNhdGlvbnMiLCJNb2RhbE1lc3NhZ2UiLCJKb2luUmVxdWVzdCIsInByb2plY3REYXRhIiwicHJvamVjdElkIiwiaGlkZUVycm9yIiwic2V0SGlkZUVycm9yIiwidHJhbnNhY3Rpb25QZW5kaW5nIiwic2V0VHJhbnNhY3Rpb25QZW5kaW5nIiwib3Blbk1vZGFsIiwic2V0T3Blbk1vZGFsIiwid2FsbGV0QWRkcmVzcyIsInN0YXRlIiwibWFuYWdlRGF0YSIsInVzZXJJbmZvIiwiam9pblJlcXVlc3QiLCJyZXNwIiwic2VuZE5vdGlmaWNhdGlvbnNUb01lbWJlcnMiLCJtZW1iZXJzIiwibWFwIiwibWVtYmVyIiwibW9uZ29Vc2VyIiwibm90aWZpY2F0aW9uIiwidXBkYXRlZE5vdGlmaWNhdGlvbnMiLCJpc0VxdWFsIiwibW9uZ29Ob3RpZmljYXRpb25zSWQiLCJzdWNjZXNzZnVsUmVzcG9uc2UiLCJtZXNzYWdlIiwiY29kZW5hbWUiLCJwcm9qZWN0IiwibmFtZSIsImRhdGEiLCJkaXYiLCJsb2FkaW5nIiwiY29sb3IiLCJvbkNsaWNrIiwiaGVhZGVyIiwib3BlbiIsImNsb3NlTW9kYWwiLCJoaWRkZW4iLCJuZWdhdGl2ZSIsIkhlYWRlciIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/projects/JoinRequest.jsx\n"));

/***/ })

});