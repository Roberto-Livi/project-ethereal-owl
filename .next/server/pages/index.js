/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../routes */ \"./routes.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst Header = ()=>{\n    const { 0: connecting , 1: setConnecting  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const address = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.manageData.walletAddress);\n    const walletConnected = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.manageData.connected);\n    const onClickConnect = async ()=>{\n        try {\n            setConnecting(true);\n            // Will open the MetaMask UI\n            // You should disable this button while the request is pending!\n            await ethereum.request({\n                method: \"eth_requestAccounts\"\n            });\n        } catch (error) {\n            console.error(error);\n        }\n        setConnecting(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Menu, {\n        style: {\n            marginTop: \"10px\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_4__.Link, {\n                route: \"/\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"item\",\n                    children: \"Zoukenverse\"\n                }, void 0, false, {\n                    fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/Header.js\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/Header.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Menu.Menu, {\n                position: \"right\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_4__.Link, {\n                        route: `/profiles`,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: \"item\",\n                            children: \"Profiles\"\n                        }, void 0, false, {\n                            fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/Header.js\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/Header.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_4__.Link, {\n                        route: \"/projects\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: \"item\",\n                            children: \"Projects\"\n                        }, void 0, false, {\n                            fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/Header.js\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/Header.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, undefined),\n                    walletConnected && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_4__.Link, {\n                        route: \"/\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: \"item\",\n                            children: \"+\"\n                        }, void 0, false, {\n                            fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/Header.js\",\n                            lineNumber: 40,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/Header.js\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Menu.Item, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                            color: \"violet\",\n                            onClick: onClickConnect,\n                            disabled: walletConnected,\n                            loading: connecting,\n                            children: walletConnected ? \"Wallet Connected\" : \"Connect Wallet\"\n                        }, void 0, false, {\n                            fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/Header.js\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/Header.js\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/Header.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/Header.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQXdDO0FBQ0U7QUFDTztBQUNoQjtBQUVqQyxNQUFNTSxNQUFNLEdBQUcsSUFBTTtJQUVuQixNQUFNLEtBQUNDLFVBQVUsTUFBRUMsYUFBYSxNQUFJUCwrQ0FBUSxDQUFDLEtBQUssQ0FBQztJQUVuRCxNQUFNUSxPQUFPLEdBQUdQLHdEQUFXLENBQUMsQ0FBQ1EsS0FBSyxHQUFLQSxLQUFLLENBQUNDLFVBQVUsQ0FBQ0MsYUFBYSxDQUFDO0lBQ3RFLE1BQU1DLGVBQWUsR0FBR1gsd0RBQVcsQ0FBQyxDQUFDUSxLQUFLLEdBQUtBLEtBQUssQ0FBQ0MsVUFBVSxDQUFDRyxTQUFTLENBQUM7SUFFMUUsTUFBTUMsY0FBYyxHQUFHLFVBQVk7UUFDakMsSUFBSTtZQUNGUCxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDcEIsNEJBQTRCO1lBQzVCLCtEQUErRDtZQUMvRCxNQUFNUSxRQUFRLENBQUNDLE9BQU8sQ0FBQztnQkFBRUMsTUFBTSxFQUFFLHFCQUFxQjthQUFFLENBQUMsQ0FBQztRQUM1RCxFQUFFLE9BQU9DLEtBQUssRUFBRTtZQUNkQyxPQUFPLENBQUNELEtBQUssQ0FBQ0EsS0FBSyxDQUFDLENBQUM7UUFDdkIsQ0FBQztRQUNEWCxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUVELHFCQUNFLDhEQUFDTCxtREFBSTtRQUFDa0IsS0FBSyxFQUFFO1lBQUVDLFNBQVMsRUFBRSxNQUFNO1NBQUU7OzBCQUNoQyw4REFBQ2pCLHlDQUFJO2dCQUFDa0IsS0FBSyxFQUFDLEdBQUc7MEJBQ2IsNEVBQUNDLEdBQUM7b0JBQUNDLFNBQVMsRUFBQyxNQUFNOzhCQUFDLGFBQVc7Ozs7OzZCQUFJOzs7Ozt5QkFDOUI7MEJBRVAsOERBQUN0Qix3REFBUztnQkFBQ3VCLFFBQVEsRUFBQyxPQUFPOztrQ0FDekIsOERBQUNyQix5Q0FBSTt3QkFBQ2tCLEtBQUssRUFBRSxDQUFDLFNBQVMsQ0FBQztrQ0FDdEIsNEVBQUNDLEdBQUM7NEJBQUNDLFNBQVMsRUFBQyxNQUFNO3NDQUFDLFVBQVE7Ozs7O3FDQUFJOzs7OztpQ0FDM0I7a0NBQ1AsOERBQUNwQix5Q0FBSTt3QkFBQ2tCLEtBQUssRUFBQyxXQUFXO2tDQUNyQiw0RUFBQ0MsR0FBQzs0QkFBQ0MsU0FBUyxFQUFDLE1BQU07c0NBQUMsVUFBUTs7Ozs7cUNBQUk7Ozs7O2lDQUMzQjtvQkFDTlosZUFBZSxrQkFDZCw4REFBQ1IseUNBQUk7d0JBQUNrQixLQUFLLEVBQUMsR0FBRztrQ0FDYiw0RUFBQ0MsR0FBQzs0QkFBQ0MsU0FBUyxFQUFDLE1BQU07c0NBQUMsR0FBQzs7Ozs7cUNBQUk7Ozs7O2lDQUNwQjtrQ0FFVCw4REFBQ3RCLHdEQUFTO2tDQUNSLDRFQUFDQyxxREFBTTs0QkFDTHdCLEtBQUssRUFBQyxRQUFROzRCQUNkQyxPQUFPLEVBQUVkLGNBQWM7NEJBQ3ZCZSxRQUFRLEVBQUVqQixlQUFlOzRCQUN6QmtCLE9BQU8sRUFBRXhCLFVBQVU7c0NBRWxCTSxlQUFlLEdBQUcsa0JBQWtCLEdBQUcsZ0JBQWdCOzs7OztxQ0FDakQ7Ozs7O2lDQUNDOzs7Ozs7eUJBQ0Y7Ozs7OztpQkFDUCxDQUNQO0FBQ0osQ0FBQztBQUVELGlFQUFlUCxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LWV0aGVyZWFsLW93bC8uL2NvbXBvbmVudHMvSGVhZGVyLmpzPzRkYmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgTWVudSwgQnV0dG9uIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcIi4uL3JvdXRlc1wiO1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG5cbiAgY29uc3QgW2Nvbm5lY3RpbmcsIHNldENvbm5lY3RpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGFkZHJlc3MgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLm1hbmFnZURhdGEud2FsbGV0QWRkcmVzcyk7XG4gIGNvbnN0IHdhbGxldENvbm5lY3RlZCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUubWFuYWdlRGF0YS5jb25uZWN0ZWQpO1xuXG4gIGNvbnN0IG9uQ2xpY2tDb25uZWN0ID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBzZXRDb25uZWN0aW5nKHRydWUpO1xuICAgICAgLy8gV2lsbCBvcGVuIHRoZSBNZXRhTWFzayBVSVxuICAgICAgLy8gWW91IHNob3VsZCBkaXNhYmxlIHRoaXMgYnV0dG9uIHdoaWxlIHRoZSByZXF1ZXN0IGlzIHBlbmRpbmchXG4gICAgICBhd2FpdCBldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiBcImV0aF9yZXF1ZXN0QWNjb3VudHNcIiB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfVxuICAgIHNldENvbm5lY3RpbmcoZmFsc2UpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPE1lbnUgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjEwcHhcIiB9fT5cbiAgICAgIDxMaW5rIHJvdXRlPVwiL1wiPlxuICAgICAgICA8YSBjbGFzc05hbWU9XCJpdGVtXCI+Wm91a2VudmVyc2U8L2E+XG4gICAgICA8L0xpbms+XG5cbiAgICAgIDxNZW51Lk1lbnUgcG9zaXRpb249XCJyaWdodFwiPlxuICAgICAgICA8TGluayByb3V0ZT17YC9wcm9maWxlc2B9PlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIml0ZW1cIj5Qcm9maWxlczwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayByb3V0ZT1cIi9wcm9qZWN0c1wiPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIml0ZW1cIj5Qcm9qZWN0czwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICB7d2FsbGV0Q29ubmVjdGVkICYmIChcbiAgICAgICAgICA8TGluayByb3V0ZT1cIi9cIj5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIml0ZW1cIj4rPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgKX1cbiAgICAgICAgPE1lbnUuSXRlbT5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBjb2xvcj1cInZpb2xldFwiXG4gICAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrQ29ubmVjdH1cbiAgICAgICAgICAgIGRpc2FibGVkPXt3YWxsZXRDb25uZWN0ZWR9XG4gICAgICAgICAgICBsb2FkaW5nPXtjb25uZWN0aW5nfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt3YWxsZXRDb25uZWN0ZWQgPyBcIldhbGxldCBDb25uZWN0ZWRcIiA6IFwiQ29ubmVjdCBXYWxsZXRcIn1cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICA8L01lbnUuTWVudT5cbiAgICA8L01lbnU+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVNlbGVjdG9yIiwiTWVudSIsIkJ1dHRvbiIsIkxpbmsiLCJIZWFkZXIiLCJjb25uZWN0aW5nIiwic2V0Q29ubmVjdGluZyIsImFkZHJlc3MiLCJzdGF0ZSIsIm1hbmFnZURhdGEiLCJ3YWxsZXRBZGRyZXNzIiwid2FsbGV0Q29ubmVjdGVkIiwiY29ubmVjdGVkIiwib25DbGlja0Nvbm5lY3QiLCJldGhlcmV1bSIsInJlcXVlc3QiLCJtZXRob2QiLCJlcnJvciIsImNvbnNvbGUiLCJzdHlsZSIsIm1hcmdpblRvcCIsInJvdXRlIiwiYSIsImNsYXNzTmFtZSIsInBvc2l0aW9uIiwiSXRlbSIsImNvbG9yIiwib25DbGljayIsImRpc2FibGVkIiwibG9hZGluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header.js\n");

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ \"./components/Header.js\");\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ \"./node_modules/semantic-ui-css/semantic.min.css\");\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst Layout = (props)=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Container, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/Layout.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, undefined),\n            props.children\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/Layout.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFBMEI7QUFDb0I7QUFDaEI7QUFDWTtBQUUxQyxNQUFNRyxNQUFNLEdBQUcsQ0FBQ0MsS0FBSyxHQUFLO0lBQ3hCLHFCQUNFLDhEQUFDSCx3REFBUzs7MEJBQ1IsOERBQUNDLCtDQUFNOzs7O3lCQUFHO1lBQ1RFLEtBQUssQ0FBQ0MsUUFBUTs7Ozs7O2lCQUNMLENBQ1o7QUFDSixDQUFDO0FBRUQsaUVBQWVGLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtZXRoZXJlYWwtb3dsLy4vY29tcG9uZW50cy9MYXlvdXQuanM/NTE1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XG5pbXBvcnQgXCJzZW1hbnRpYy11aS1jc3Mvc2VtYW50aWMubWluLmNzc1wiO1xuXG5jb25zdCBMYXlvdXQgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPEhlYWRlciAvPlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29udGFpbmVyIiwiSGVhZGVyIiwiTGF5b3V0IiwicHJvcHMiLCJjaGlsZHJlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Layout.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n\n\n\nconst ZoukenverseIndex = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: \"Welcome to Zoukenverse\"\n    }, void 0, false, {\n        fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/pages/index.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, undefined);\n};\n// Zoukenverse.getInitialProps = async () => {\n//   // const address = await web3.eth.getAccounts();\n//   // console.log(address)\n//   return { stars: 2, address };\n// };\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ZoukenverseIndex);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUEwQjtBQUNnQjtBQUUxQyxNQUFNRSxnQkFBZ0IsR0FBRyxJQUFNO0lBRTdCLHFCQUNFLDhEQUFDRCwwREFBTTtrQkFBQyx3QkFFUjs7Ozs7aUJBQVMsQ0FDVjtBQUNILENBQUM7QUFFRCw4Q0FBOEM7QUFDOUMscURBQXFEO0FBQ3JELDRCQUE0QjtBQUM1QixrQ0FBa0M7QUFDbEMsS0FBSztBQUVMLGlFQUFlQyxnQkFBZ0IsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtZXRoZXJlYWwtb3dsLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuXG5jb25zdCBab3VrZW52ZXJzZUluZGV4ID0gKCkgPT4ge1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIFdlbGNvbWUgdG8gWm91a2VudmVyc2VcbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG4vLyBab3VrZW52ZXJzZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4vLyAgIC8vIGNvbnN0IGFkZHJlc3MgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuLy8gICAvLyBjb25zb2xlLmxvZyhhZGRyZXNzKVxuLy8gICByZXR1cm4geyBzdGFyczogMiwgYWRkcmVzcyB9O1xuLy8gfTtcblxuZXhwb3J0IGRlZmF1bHQgWm91a2VudmVyc2VJbmRleDsiXSwibmFtZXMiOlsiUmVhY3QiLCJMYXlvdXQiLCJab3VrZW52ZXJzZUluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nconst routes = __webpack_require__(/*! next-routes */ \"next-routes\")();\nroutes.add(\"/projects\", \"/projects\").add(\"/profiles\", \"/profiles\").add(\"/profiles/:address\", \"/profile\");\n// .add(\"/campaigns/:address\", \"/campaigns/show\")\n// .add(\"/campaigns/:address/requests\", \"campaigns/requests/index\")\n// .add(\"/campaigns/:address/requests/new\", \"/campaigns/requests/new\");\nmodule.exports = routes;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yb3V0ZXMuanMuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFNQSxNQUFNLEdBQUdDLG1CQUFPLENBQUMsZ0NBQWEsQ0FBQyxFQUFFO0FBRXZDRCxNQUFNLENBQ0hFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDLENBQzdCQSxHQUFHLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxDQUM3QkEsR0FBRyxDQUFDLG9CQUFvQixFQUFFLFVBQVUsQ0FBQztBQUN0QyxpREFBaUQ7QUFDakQsbUVBQW1FO0FBQ25FLHVFQUF1RTtBQUV6RUMsTUFBTSxDQUFDQyxPQUFPLEdBQUdKLE1BQU0sQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtZXRoZXJlYWwtb3dsLy4vcm91dGVzLmpzP2IwNDIiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgcm91dGVzID0gcmVxdWlyZShcIm5leHQtcm91dGVzXCIpKCk7XG5cbnJvdXRlc1xuICAuYWRkKFwiL3Byb2plY3RzXCIsIFwiL3Byb2plY3RzXCIpXG4gIC5hZGQoXCIvcHJvZmlsZXNcIiwgXCIvcHJvZmlsZXNcIilcbiAgLmFkZChcIi9wcm9maWxlcy86YWRkcmVzc1wiLCBcIi9wcm9maWxlXCIpXG4gIC8vIC5hZGQoXCIvY2FtcGFpZ25zLzphZGRyZXNzXCIsIFwiL2NhbXBhaWducy9zaG93XCIpXG4gIC8vIC5hZGQoXCIvY2FtcGFpZ25zLzphZGRyZXNzL3JlcXVlc3RzXCIsIFwiY2FtcGFpZ25zL3JlcXVlc3RzL2luZGV4XCIpXG4gIC8vIC5hZGQoXCIvY2FtcGFpZ25zLzphZGRyZXNzL3JlcXVlc3RzL25ld1wiLCBcIi9jYW1wYWlnbnMvcmVxdWVzdHMvbmV3XCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlcztcbiJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./routes.js\n");

/***/ }),

/***/ "./node_modules/semantic-ui-css/semantic.min.css":
/*!*******************************************************!*\
  !*** ./node_modules/semantic-ui-css/semantic.min.css ***!
  \*******************************************************/
/***/ (() => {



/***/ }),

/***/ "next-routes":
/*!******************************!*\
  !*** external "next-routes" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-routes");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("semantic-ui-react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();