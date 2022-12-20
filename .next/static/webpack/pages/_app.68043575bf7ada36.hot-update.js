"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./store/actions/index.js":
/*!********************************!*\
  !*** ./store/actions/index.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"connectWallet\": function() { return /* binding */ connectWallet; },\n/* harmony export */   \"disconnect\": function() { return /* binding */ disconnect; },\n/* harmony export */   \"getAdminRole\": function() { return /* binding */ getAdminRole; },\n/* harmony export */   \"updateProfileSearch\": function() { return /* binding */ updateProfileSearch; },\n/* harmony export */   \"updateUserInfo\": function() { return /* binding */ updateUserInfo; },\n/* harmony export */   \"updateUserProfileCard\": function() { return /* binding */ updateUserProfileCard; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ \"./store/actions/types.js\");\n/* harmony import */ var _ethereum_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ethereum/users */ \"./ethereum/users.js\");\n/* harmony import */ var _helpers_users_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/users/users */ \"./helpers/users/users.js\");\n\n\n\n\n\nvar connectWallet = function(walletAddress) {\n    var userInfo = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;\n    return function(dispatch) {\n        dispatch({\n            type: _types__WEBPACK_IMPORTED_MODULE_0__.CONNECT_WALLET,\n            walletAddress: walletAddress,\n            userInfo: userInfo\n        });\n    };\n};\nvar disconnect = function() {\n    return function(dispatch) {\n        dispatch({\n            type: _types__WEBPACK_IMPORTED_MODULE_0__.DISCONNECT\n        });\n    };\n};\nvar updateUserInfo = function(user) {\n    return function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function(dispatch) {\n            var userData;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        return [\n                            4,\n                            user\n                        ];\n                    case 1:\n                        userData = _state.sent();\n                        dispatch({\n                            type: _types__WEBPACK_IMPORTED_MODULE_0__.UPDATE_USER_INFO,\n                            userInfo: {\n                                codename: userData.codename,\n                                profession: userData.profession,\n                                description: userData.description\n                            }\n                        });\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function(dispatch) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n};\nvar updateUserProfileCard = function(address) {\n    return function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function(dispatch) {\n            var user;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        return [\n                            4,\n                            _ethereum_users__WEBPACK_IMPORTED_MODULE_1__[\"default\"].methods.users(address).call()\n                        ];\n                    case 1:\n                        user = _state.sent();\n                        dispatch({\n                            type: _types__WEBPACK_IMPORTED_MODULE_0__.UPDATE_PROFILE_CARD_ADDRESS,\n                            payload: user\n                        });\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function(dispatch) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n};\nvar updateProfileSearch = function(results) {\n    return function(dispatch) {\n        var searchResults = {\n            results: results,\n            loading: false\n        };\n        dispatch({\n            type: _types__WEBPACK_IMPORTED_MODULE_0__.UPDATE_PROFILE_SEARCH,\n            payload: searchResults\n        });\n    };\n};\nvar getAdminRole = function() {\n    return function(dispatch) {\n        dispatch({\n            type: _types__WEBPACK_IMPORTED_MODULE_0__.GET_ADMIN_ROLE\n        });\n    };\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9hY3Rpb25zL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBT2lCO0FBQ3dCO0FBQ1c7QUFFN0MsSUFBTVEsYUFBYSxHQUFHLFNBQUNDLGFBQWE7UUFBRUMsUUFBUSxvRUFBRyxJQUFJO1dBQUtDLFNBQUFBLFFBQVEsRUFBSTtRQUMzRUEsUUFBUSxDQUFDO1lBQUVDLElBQUksRUFBRVosa0RBQWM7WUFBRVMsYUFBYSxFQUFiQSxhQUFhO1lBQUVDLFFBQVEsRUFBUkEsUUFBUTtTQUFFLENBQUMsQ0FBQztJQUM5RCxDQUFDO0NBQUE7QUFFTSxJQUFNRyxVQUFVLEdBQUc7V0FBTUYsU0FBQUEsUUFBUSxFQUFJO1FBQzFDQSxRQUFRLENBQUM7WUFBRUMsSUFBSSxFQUFFWCw4Q0FBVTtTQUFFLENBQUMsQ0FBQztJQUNqQyxDQUFDO0NBQUE7QUFFTSxJQUFNYSxjQUFjLEdBQUcsU0FBQ0MsSUFBSTs7bUJBQUssNkZBQU1KLFFBQVEsRUFBSTtnQkFDbERLLFFBQVE7Ozs7d0JBQUc7OzRCQUFNRCxJQUFJOzBCQUFBOzt3QkFBckJDLFFBQVEsR0FBRyxhQUFVO3dCQUMzQkwsUUFBUSxDQUFDOzRCQUFFQyxJQUFJLEVBQUVWLG9EQUFnQjs0QkFBRVEsUUFBUSxFQUFFO2dDQUMzQ08sUUFBUSxFQUFFRCxRQUFRLENBQUNDLFFBQVE7Z0NBQzNCQyxVQUFVLEVBQUVGLFFBQVEsQ0FBQ0UsVUFBVTtnQ0FDL0JDLFdBQVcsRUFBRUgsUUFBUSxDQUFDRyxXQUFXOzZCQUNsQzt5QkFBRSxDQUFDLENBQUM7Ozs7OztRQUNQLENBQUM7d0JBUDZDUixRQUFROzs7O0NBT3JEO0FBRU0sSUFBTVMscUJBQXFCLEdBQUcsU0FBQ0MsT0FBTzs7bUJBQUssNkZBQU1WLFFBQVEsRUFBSTtnQkFDNURJLElBQUk7Ozs7d0JBQUc7OzRCQUFNVCxxRUFBbUIsQ0FBQ2UsT0FBTyxDQUFDLENBQUNFLElBQUksRUFBRTswQkFBQTs7d0JBQWhEUixJQUFJLEdBQUcsYUFBeUM7d0JBQ3RESixRQUFRLENBQUM7NEJBQUVDLElBQUksRUFBRVQsK0RBQTJCOzRCQUFFcUIsT0FBTyxFQUFFVCxJQUFJO3lCQUFFLENBQUMsQ0FBQzs7Ozs7O1FBQ2pFLENBQUM7d0JBSHVESixRQUFROzs7O0NBRy9EO0FBRU0sSUFBTWMsbUJBQW1CLEdBQUcsU0FBQ0MsT0FBTztXQUFLZixTQUFBQSxRQUFRLEVBQUk7UUFDMUQsSUFBTWdCLGFBQWEsR0FBRztZQUFFRCxPQUFPLEVBQVBBLE9BQU87WUFBRUUsT0FBTyxFQUFFLEtBQUs7U0FBQztRQUNoRGpCLFFBQVEsQ0FBQztZQUFFQyxJQUFJLEVBQUVSLHlEQUFxQjtZQUFFb0IsT0FBTyxFQUFFRyxhQUFhO1NBQUUsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7Q0FBQTtBQUVNLElBQU1FLFlBQVksR0FBRztXQUFNbEIsU0FBQUEsUUFBUSxFQUFJO1FBQzVDQSxRQUFRLENBQUM7WUFBRUMsSUFBSSxFQUFFUCxrREFBYztTQUFFLENBQUMsQ0FBQztJQUNyQyxDQUFDO0NBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvYWN0aW9ucy9pbmRleC5qcz9hNTA5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENPTk5FQ1RfV0FMTEVULFxuICBESVNDT05ORUNULFxuICBVUERBVEVfVVNFUl9JTkZPLFxuICBVUERBVEVfUFJPRklMRV9DQVJEX0FERFJFU1MsXG4gIFVQREFURV9QUk9GSUxFX1NFQVJDSCxcbiAgR0VUX0FETUlOX1JPTEVcbn0gZnJvbSBcIi4vdHlwZXNcIjtcbmltcG9ydCB1c2VycyBmcm9tIFwiLi4vLi4vZXRoZXJldW0vdXNlcnNcIjtcbmltcG9ydCB7IGlzQWRtaW4gfSBmcm9tIFwiLi4vLi4vaGVscGVycy91c2Vycy91c2Vyc1wiO1xuXG5leHBvcnQgY29uc3QgY29ubmVjdFdhbGxldCA9ICh3YWxsZXRBZGRyZXNzLCB1c2VySW5mbyA9IG51bGwpID0+IGRpc3BhdGNoID0+IHtcbiAgZGlzcGF0Y2goeyB0eXBlOiBDT05ORUNUX1dBTExFVCwgd2FsbGV0QWRkcmVzcywgdXNlckluZm8gfSk7XG59XG5cbmV4cG9ydCBjb25zdCBkaXNjb25uZWN0ID0gKCkgPT4gZGlzcGF0Y2ggPT4ge1xuICBkaXNwYXRjaCh7IHR5cGU6IERJU0NPTk5FQ1QgfSk7XG59XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVVc2VySW5mbyA9ICh1c2VyKSA9PiBhc3luYyBkaXNwYXRjaCA9PiB7XG4gIGNvbnN0IHVzZXJEYXRhID0gYXdhaXQgdXNlcjtcbiAgZGlzcGF0Y2goeyB0eXBlOiBVUERBVEVfVVNFUl9JTkZPLCB1c2VySW5mbzoge1xuICAgIGNvZGVuYW1lOiB1c2VyRGF0YS5jb2RlbmFtZSxcbiAgICBwcm9mZXNzaW9uOiB1c2VyRGF0YS5wcm9mZXNzaW9uLFxuICAgIGRlc2NyaXB0aW9uOiB1c2VyRGF0YS5kZXNjcmlwdGlvblxuICB9IH0pO1xufVxuXG5leHBvcnQgY29uc3QgdXBkYXRlVXNlclByb2ZpbGVDYXJkID0gKGFkZHJlc3MpID0+IGFzeW5jIGRpc3BhdGNoID0+IHtcbiAgY29uc3QgdXNlciA9IGF3YWl0IHVzZXJzLm1ldGhvZHMudXNlcnMoYWRkcmVzcykuY2FsbCgpO1xuICBkaXNwYXRjaCh7IHR5cGU6IFVQREFURV9QUk9GSUxFX0NBUkRfQUREUkVTUywgcGF5bG9hZDogdXNlciB9KTtcbn1cblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVByb2ZpbGVTZWFyY2ggPSAocmVzdWx0cykgPT4gZGlzcGF0Y2ggPT4ge1xuICBjb25zdCBzZWFyY2hSZXN1bHRzID0geyByZXN1bHRzLCBsb2FkaW5nOiBmYWxzZX1cbiAgZGlzcGF0Y2goeyB0eXBlOiBVUERBVEVfUFJPRklMRV9TRUFSQ0gsIHBheWxvYWQ6IHNlYXJjaFJlc3VsdHMgfSk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRBZG1pblJvbGUgPSAoKSA9PiBkaXNwYXRjaCA9PiB7XG4gIGRpc3BhdGNoKHsgdHlwZTogR0VUX0FETUlOX1JPTEUgfSk7XG59Il0sIm5hbWVzIjpbIkNPTk5FQ1RfV0FMTEVUIiwiRElTQ09OTkVDVCIsIlVQREFURV9VU0VSX0lORk8iLCJVUERBVEVfUFJPRklMRV9DQVJEX0FERFJFU1MiLCJVUERBVEVfUFJPRklMRV9TRUFSQ0giLCJHRVRfQURNSU5fUk9MRSIsInVzZXJzIiwiaXNBZG1pbiIsImNvbm5lY3RXYWxsZXQiLCJ3YWxsZXRBZGRyZXNzIiwidXNlckluZm8iLCJkaXNwYXRjaCIsInR5cGUiLCJkaXNjb25uZWN0IiwidXBkYXRlVXNlckluZm8iLCJ1c2VyIiwidXNlckRhdGEiLCJjb2RlbmFtZSIsInByb2Zlc3Npb24iLCJkZXNjcmlwdGlvbiIsInVwZGF0ZVVzZXJQcm9maWxlQ2FyZCIsImFkZHJlc3MiLCJtZXRob2RzIiwiY2FsbCIsInBheWxvYWQiLCJ1cGRhdGVQcm9maWxlU2VhcmNoIiwicmVzdWx0cyIsInNlYXJjaFJlc3VsdHMiLCJsb2FkaW5nIiwiZ2V0QWRtaW5Sb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/actions/index.js\n"));

/***/ })

});