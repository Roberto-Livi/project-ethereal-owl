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

/***/ "./components/projects/PendingRequests.jsx":
/*!*************************************************!*\
  !*** ./components/projects/PendingRequests.jsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _helpers_users_users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/users/users */ \"./helpers/users/users.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _helpers_mongodb_NotificationCallCenter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/mongodb/NotificationCallCenter */ \"./helpers/mongodb/NotificationCallCenter.js\");\n/* harmony import */ var _utilities_ModalMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utilities/ModalMessage */ \"./components/utilities/ModalMessage.jsx\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/actions */ \"./store/actions/index.js\");\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar PendingRequests = function(param) {\n    var projectId = param.projectId;\n    _s();\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), transactionPending = ref[0], setTransactionPending = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), openModal = ref1[0], setOpenModal = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        header: \"\",\n        message: \"\"\n    }), modal = ref2[0], setModal = ref2[1];\n    var userInfo = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function(state) {\n        return state.manageData.userInfo;\n    });\n    var walletAddress = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function(state) {\n        return state.manageData.walletAddress;\n    });\n    var projectData = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function(state) {\n        return state.manageData.currentProject;\n    });\n    var answerRequest = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(function(user, requestId, approved) {\n            var response, data;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        setTransactionPending(true);\n                        return [\n                            4,\n                            (0,_helpers_users_users__WEBPACK_IMPORTED_MODULE_3__.answerJoinRequest)(user.userAddress, projectId, requestId, approved)\n                        ];\n                    case 1:\n                        response = _state.sent();\n                        if (!response) return [\n                            3,\n                            3\n                        ];\n                        if (!!lodash__WEBPACK_IMPORTED_MODULE_6___default().isEqual(user.mongoNotificationsId, \"0\")) return [\n                            3,\n                            3\n                        ];\n                        activateModal(user, approved);\n                        sendNotification(user.mongoNotificationsId, approved);\n                        return [\n                            4,\n                            (0,_helpers_users_users__WEBPACK_IMPORTED_MODULE_3__.getProject)(walletAddress, projectId)\n                        ];\n                    case 2:\n                        data = _state.sent();\n                        dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_7__.updateCurrentProject)(data));\n                        _state.label = 3;\n                    case 3:\n                        setTransactionPending(false);\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function answerRequest(user, requestId, approved) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var sendNotification = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(function(mongoId, approved) {\n            var approvedMessage, mongoUser, notification, updatedUser;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        approvedMessage = approved ? \"approved\" : \"rejected\";\n                        return [\n                            4,\n                            (0,_helpers_mongodb_NotificationCallCenter__WEBPACK_IMPORTED_MODULE_4__.getUsersNotifications)(mongoId)\n                        ];\n                    case 1:\n                        mongoUser = _state.sent();\n                        if (mongoUser.successfulResponse) {\n                            notification = {\n                                message: \"\".concat(userInfo.codename, \" has \").concat(approvedMessage, \" your request to join \").concat(projectData.project.name),\n                                seen: false\n                            };\n                            updatedUser = {\n                                notifications: [\n                                    notification\n                                ].concat((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(mongoUser.data.notifications))\n                            };\n                            (0,_helpers_mongodb_NotificationCallCenter__WEBPACK_IMPORTED_MODULE_4__.updateNotification)(mongoId, updatedUser);\n                        }\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function sendNotification(mongoId, approved) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var activateModal = function(user, approved) {\n        if (approved) {\n            setModal({\n                header: \"Approved Request\",\n                message: \"You have successfully approved \".concat(user.codename, \"'s request to join \").concat(projectData.project.name)\n            });\n        } else {\n            setModal({\n                header: \"Rejected Request\",\n                message: \"You have rejected \".concat(user.codename, \"'s request to join \").concat(projectData.project.name)\n            });\n        }\n        setOpenModal(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Pending Requests\"\n            }, void 0, false, {\n                fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/projects/PendingRequests.jsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, _this),\n            projectData.requests.map(function(request, index) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: request.user.codename\n                        }, void 0, false, {\n                            fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/projects/PendingRequests.jsx\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__.Button, {\n                            disabled: transactionPending,\n                            color: \"violet\",\n                            onClick: function() {\n                                return answerRequest(request.user, request.requestId, true);\n                            },\n                            children: \"Approve\"\n                        }, void 0, false, {\n                            fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/projects/PendingRequests.jsx\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__.Button, {\n                            disabled: transactionPending,\n                            color: \"red\",\n                            onClick: function() {\n                                return answerRequest(request.user, request.requestId, false);\n                            },\n                            children: \"Reject\"\n                        }, void 0, false, {\n                            fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/projects/PendingRequests.jsx\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_utilities_ModalMessage__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            header: modal.header,\n                            message: modal.message,\n                            open: openModal,\n                            closeModal: function() {\n                                return setOpenModal(false);\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/projects/PendingRequests.jsx\",\n                            lineNumber: 89,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, index, true, {\n                    fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/projects/PendingRequests.jsx\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, _this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/projects/PendingRequests.jsx\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, _this);\n};\n_s(PendingRequests, \"uFaXwvdzP1pONff9fqwTM+kdl1I=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = PendingRequests;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PendingRequests);\nvar _c;\n$RefreshReg$(_c, \"PendingRequests\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb2plY3RzL1BlbmRpbmdSZXF1ZXN0cy5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7QUFBd0M7QUFDZTtBQUNtQjtBQUMvQjtBQUM4RDtBQUNwRDtBQUM5QjtBQUNvQztBQUczRCxJQUFNWSxlQUFlLEdBQUcsZ0JBQW1CO1FBQWhCQyxTQUFTLFNBQVRBLFNBQVM7O0lBRWxDLElBQU1DLFFBQVEsR0FBR1gsd0RBQVcsRUFBRTtJQUU5QixJQUFvREYsR0FBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQUE1RGMsa0JBQWtCLEdBQTJCZCxHQUFlLEdBQTFDLEVBQUVlLHFCQUFxQixHQUFJZixHQUFlLEdBQW5CO0lBQ2hELElBQWtDQSxJQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBQTFDZ0IsU0FBUyxHQUFrQmhCLElBQWUsR0FBakMsRUFBRWlCLFlBQVksR0FBSWpCLElBQWUsR0FBbkI7SUFDOUIsSUFBMEJBLElBQW9DLEdBQXBDQSwrQ0FBUSxDQUFDO1FBQUVrQixNQUFNLEVBQUUsRUFBRTtRQUFFQyxPQUFPLEVBQUUsRUFBRTtLQUFDLENBQUMsRUFBdkRDLEtBQUssR0FBY3BCLElBQW9DLEdBQWxELEVBQUVxQixRQUFRLEdBQUlyQixJQUFvQyxHQUF4QztJQUV0QixJQUFNc0IsUUFBUSxHQUFHckIsd0RBQVcsQ0FBQyxTQUFDc0IsS0FBSztlQUFLQSxLQUFLLENBQUNDLFVBQVUsQ0FBQ0YsUUFBUTtLQUFBLENBQUM7SUFDbEUsSUFBTUcsYUFBYSxHQUFHeEIsd0RBQVcsQ0FBQyxTQUFDc0IsS0FBSztlQUFLQSxLQUFLLENBQUNDLFVBQVUsQ0FBQ0MsYUFBYTtLQUFBLENBQUM7SUFDNUUsSUFBTUMsV0FBVyxHQUFHekIsd0RBQVcsQ0FBQyxTQUFDc0IsS0FBSztlQUFLQSxLQUFLLENBQUNDLFVBQVUsQ0FBQ0csY0FBYztLQUFBLENBQUM7SUFFM0UsSUFBTUMsYUFBYTttQkFBRyw2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QztHQXhGSzVDLGVBQWU7O1FBRUZULG9EQUFXO1FBTVhELG9EQUFXO1FBQ05BLG9EQUFXO1FBQ2JBLG9EQUFXOzs7QUFWM0JVLEtBQUFBLGVBQWU7QUEwRnJCLCtEQUFlQSxlQUFlLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9qZWN0cy9QZW5kaW5nUmVxdWVzdHMuanN4Pzc5MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IGFuc3dlckpvaW5SZXF1ZXN0LCBnZXRQcm9qZWN0IH0gZnJvbSBcIi4uLy4uL2hlbHBlcnMvdXNlcnMvdXNlcnNcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IHsgdXBkYXRlTm90aWZpY2F0aW9uLCBnZXRVc2Vyc05vdGlmaWNhdGlvbnMgfSBmcm9tIFwiLi4vLi4vaGVscGVycy9tb25nb2RiL05vdGlmaWNhdGlvbkNhbGxDZW50ZXJcIjtcbmltcG9ydCBNb2RhbE1lc3NhZ2UgZnJvbSBcIi4uL3V0aWxpdGllcy9Nb2RhbE1lc3NhZ2VcIjtcbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCB7IHVwZGF0ZUN1cnJlbnRQcm9qZWN0IH0gZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnNcIjtcblxuXG5jb25zdCBQZW5kaW5nUmVxdWVzdHMgPSAoeyBwcm9qZWN0SWQgfSkgPT4ge1xuXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuICBjb25zdCBbdHJhbnNhY3Rpb25QZW5kaW5nLCBzZXRUcmFuc2FjdGlvblBlbmRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbb3Blbk1vZGFsLCBzZXRPcGVuTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbW9kYWwsIHNldE1vZGFsXSA9IHVzZVN0YXRlKHsgaGVhZGVyOiBcIlwiLCBtZXNzYWdlOiBcIlwifSk7XG5cbiAgY29uc3QgdXNlckluZm8gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLm1hbmFnZURhdGEudXNlckluZm8pO1xuICBjb25zdCB3YWxsZXRBZGRyZXNzID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5tYW5hZ2VEYXRhLndhbGxldEFkZHJlc3MpO1xuICBjb25zdCBwcm9qZWN0RGF0YSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUubWFuYWdlRGF0YS5jdXJyZW50UHJvamVjdCk7XG5cbiAgY29uc3QgYW5zd2VyUmVxdWVzdCA9IGFzeW5jKHVzZXIsIHJlcXVlc3RJZCwgYXBwcm92ZWQpID0+IHtcbiAgICBzZXRUcmFuc2FjdGlvblBlbmRpbmcodHJ1ZSk7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhbnN3ZXJKb2luUmVxdWVzdCh1c2VyLnVzZXJBZGRyZXNzLCBwcm9qZWN0SWQsIHJlcXVlc3RJZCwgYXBwcm92ZWQpO1xuICAgIGlmKHJlc3BvbnNlKSB7XG4gICAgICBpZighXy5pc0VxdWFsKHVzZXIubW9uZ29Ob3RpZmljYXRpb25zSWQsIFwiMFwiKSkge1xuICAgICAgICBhY3RpdmF0ZU1vZGFsKHVzZXIsIGFwcHJvdmVkKTtcbiAgICAgICAgc2VuZE5vdGlmaWNhdGlvbih1c2VyLm1vbmdvTm90aWZpY2F0aW9uc0lkLCBhcHByb3ZlZCk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRQcm9qZWN0KHdhbGxldEFkZHJlc3MsIHByb2plY3RJZCk7XG4gICAgICAgIGRpc3BhdGNoKHVwZGF0ZUN1cnJlbnRQcm9qZWN0KGRhdGEpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgc2V0VHJhbnNhY3Rpb25QZW5kaW5nKGZhbHNlKTtcbiAgfVxuXG4gIGNvbnN0IHNlbmROb3RpZmljYXRpb24gPSBhc3luYyhtb25nb0lkLCBhcHByb3ZlZCkgPT4ge1xuICAgIGNvbnN0IGFwcHJvdmVkTWVzc2FnZSA9IGFwcHJvdmVkID8gXCJhcHByb3ZlZFwiIDogXCJyZWplY3RlZFwiO1xuICAgIGNvbnN0IG1vbmdvVXNlciA9IGF3YWl0IGdldFVzZXJzTm90aWZpY2F0aW9ucyhtb25nb0lkKTtcbiAgICBpZihtb25nb1VzZXIuc3VjY2Vzc2Z1bFJlc3BvbnNlKSB7XG4gICAgICBjb25zdCBub3RpZmljYXRpb24gPSB7XG4gICAgICAgIG1lc3NhZ2U6IGAke3VzZXJJbmZvLmNvZGVuYW1lfSBoYXMgJHthcHByb3ZlZE1lc3NhZ2V9IHlvdXIgcmVxdWVzdCB0byBqb2luICR7cHJvamVjdERhdGEucHJvamVjdC5uYW1lfWAsXG4gICAgICAgIHNlZW46IGZhbHNlXG4gICAgICB9O1xuICAgICAgY29uc3QgdXBkYXRlZFVzZXIgPSB7XG4gICAgICAgIG5vdGlmaWNhdGlvbnM6IFtub3RpZmljYXRpb24sIC4uLm1vbmdvVXNlci5kYXRhLm5vdGlmaWNhdGlvbnNdLFxuICAgICAgfTtcbiAgICAgIHVwZGF0ZU5vdGlmaWNhdGlvbihtb25nb0lkLCB1cGRhdGVkVXNlcik7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgYWN0aXZhdGVNb2RhbCA9ICh1c2VyLCBhcHByb3ZlZCkgPT4ge1xuICAgIGlmKGFwcHJvdmVkKSB7XG4gICAgICBzZXRNb2RhbCh7XG4gICAgICAgIGhlYWRlcjogXCJBcHByb3ZlZCBSZXF1ZXN0XCIsXG4gICAgICAgIG1lc3NhZ2U6IGBZb3UgaGF2ZSBzdWNjZXNzZnVsbHkgYXBwcm92ZWQgJHt1c2VyLmNvZGVuYW1lfSdzIHJlcXVlc3QgdG8gam9pbiAke3Byb2plY3REYXRhLnByb2plY3QubmFtZX1gXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0TW9kYWwoe1xuICAgICAgICBoZWFkZXI6IFwiUmVqZWN0ZWQgUmVxdWVzdFwiLFxuICAgICAgICBtZXNzYWdlOiBgWW91IGhhdmUgcmVqZWN0ZWQgJHt1c2VyLmNvZGVuYW1lfSdzIHJlcXVlc3QgdG8gam9pbiAke3Byb2plY3REYXRhLnByb2plY3QubmFtZX1gXG4gICAgICB9KTtcbiAgICB9XG4gICAgc2V0T3Blbk1vZGFsKHRydWUpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgyPlBlbmRpbmcgUmVxdWVzdHM8L2gyPlxuICAgICAge3Byb2plY3REYXRhLnJlcXVlc3RzLm1hcCgocmVxdWVzdCwgaW5kZXgpID0+IChcbiAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cbiAgICAgICAgICA8aDM+e3JlcXVlc3QudXNlci5jb2RlbmFtZX08L2gzPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGRpc2FibGVkPXt0cmFuc2FjdGlvblBlbmRpbmd9XG4gICAgICAgICAgICBjb2xvcj1cInZpb2xldFwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhbnN3ZXJSZXF1ZXN0KHJlcXVlc3QudXNlciwgcmVxdWVzdC5yZXF1ZXN0SWQsIHRydWUpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEFwcHJvdmVcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBkaXNhYmxlZD17dHJhbnNhY3Rpb25QZW5kaW5nfVxuICAgICAgICAgICAgY29sb3I9XCJyZWRcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgYW5zd2VyUmVxdWVzdChyZXF1ZXN0LnVzZXIsIHJlcXVlc3QucmVxdWVzdElkLCBmYWxzZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBSZWplY3RcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8TW9kYWxNZXNzYWdlXG4gICAgICAgICAgICBoZWFkZXI9e21vZGFsLmhlYWRlcn1cbiAgICAgICAgICAgIG1lc3NhZ2U9e21vZGFsLm1lc3NhZ2V9XG4gICAgICAgICAgICBvcGVuPXtvcGVuTW9kYWx9XG4gICAgICAgICAgICBjbG9zZU1vZGFsPXsoKSA9PiBzZXRPcGVuTW9kYWwoZmFsc2UpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBlbmRpbmdSZXF1ZXN0czsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVNlbGVjdG9yIiwidXNlRGlzcGF0Y2giLCJhbnN3ZXJKb2luUmVxdWVzdCIsImdldFByb2plY3QiLCJCdXR0b24iLCJ1cGRhdGVOb3RpZmljYXRpb24iLCJnZXRVc2Vyc05vdGlmaWNhdGlvbnMiLCJNb2RhbE1lc3NhZ2UiLCJfIiwidXBkYXRlQ3VycmVudFByb2plY3QiLCJQZW5kaW5nUmVxdWVzdHMiLCJwcm9qZWN0SWQiLCJkaXNwYXRjaCIsInRyYW5zYWN0aW9uUGVuZGluZyIsInNldFRyYW5zYWN0aW9uUGVuZGluZyIsIm9wZW5Nb2RhbCIsInNldE9wZW5Nb2RhbCIsImhlYWRlciIsIm1lc3NhZ2UiLCJtb2RhbCIsInNldE1vZGFsIiwidXNlckluZm8iLCJzdGF0ZSIsIm1hbmFnZURhdGEiLCJ3YWxsZXRBZGRyZXNzIiwicHJvamVjdERhdGEiLCJjdXJyZW50UHJvamVjdCIsImFuc3dlclJlcXVlc3QiLCJ1c2VyIiwicmVxdWVzdElkIiwiYXBwcm92ZWQiLCJyZXNwb25zZSIsImRhdGEiLCJ1c2VyQWRkcmVzcyIsImlzRXF1YWwiLCJtb25nb05vdGlmaWNhdGlvbnNJZCIsImFjdGl2YXRlTW9kYWwiLCJzZW5kTm90aWZpY2F0aW9uIiwibW9uZ29JZCIsImFwcHJvdmVkTWVzc2FnZSIsIm1vbmdvVXNlciIsIm5vdGlmaWNhdGlvbiIsInVwZGF0ZWRVc2VyIiwic3VjY2Vzc2Z1bFJlc3BvbnNlIiwiY29kZW5hbWUiLCJwcm9qZWN0IiwibmFtZSIsInNlZW4iLCJub3RpZmljYXRpb25zIiwiZGl2IiwiaDIiLCJyZXF1ZXN0cyIsIm1hcCIsInJlcXVlc3QiLCJpbmRleCIsImgzIiwiZGlzYWJsZWQiLCJjb2xvciIsIm9uQ2xpY2siLCJvcGVuIiwiY2xvc2VNb2RhbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/projects/PendingRequests.jsx\n"));

/***/ })

});