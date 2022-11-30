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
exports.id = "pages/projects";
exports.ids = ["pages/projects"];
exports.modules = {

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../routes */ \"./routes.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst Header = ()=>{\n    const { 0: connecting , 1: setConnecting  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const address = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.manageData.walletAddress);\n    const walletConnected = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.manageData.connected);\n    const onClickConnect = async ()=>{\n        try {\n            setConnecting(true);\n            // Will open the MetaMask UI\n            // You should disable this button while the request is pending!\n            await ethereum.request({\n                method: \"eth_requestAccounts\"\n            });\n        } catch (error) {\n            console.error(error);\n        }\n        setConnecting(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Menu, {\n        style: {\n            marginTop: \"10px\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_4__.Link, {\n                route: \"/\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"item\",\n                    children: \"Ethereal Owl\"\n                }, void 0, false, {\n                    fileName: \"/Users/robertolivi/Ethereal-Owl/project-ethereal-owl/components/Header.js\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/robertolivi/Ethereal-Owl/project-ethereal-owl/components/Header.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Menu.Menu, {\n                position: \"right\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_4__.Link, {\n                        route: `/users/${address}`,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: \"item\",\n                            children: \"Profile\"\n                        }, void 0, false, {\n                            fileName: \"/Users/robertolivi/Ethereal-Owl/project-ethereal-owl/components/Header.js\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/robertolivi/Ethereal-Owl/project-ethereal-owl/components/Header.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_4__.Link, {\n                        route: \"/projects\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: \"item\",\n                            children: \"Projects\"\n                        }, void 0, false, {\n                            fileName: \"/Users/robertolivi/Ethereal-Owl/project-ethereal-owl/components/Header.js\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/robertolivi/Ethereal-Owl/project-ethereal-owl/components/Header.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, undefined),\n                    walletConnected && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_4__.Link, {\n                        route: \"/\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: \"item\",\n                            children: \"+\"\n                        }, void 0, false, {\n                            fileName: \"/Users/robertolivi/Ethereal-Owl/project-ethereal-owl/components/Header.js\",\n                            lineNumber: 40,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/robertolivi/Ethereal-Owl/project-ethereal-owl/components/Header.js\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Menu.Item, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                            color: \"violet\",\n                            onClick: onClickConnect,\n                            disabled: walletConnected,\n                            loading: connecting,\n                            children: walletConnected ? \"Wallet Connected\" : \"Connect Wallet\"\n                        }, void 0, false, {\n                            fileName: \"/Users/robertolivi/Ethereal-Owl/project-ethereal-owl/components/Header.js\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/robertolivi/Ethereal-Owl/project-ethereal-owl/components/Header.js\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/robertolivi/Ethereal-Owl/project-ethereal-owl/components/Header.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/robertolivi/Ethereal-Owl/project-ethereal-owl/components/Header.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQXdDO0FBQ0U7QUFDTztBQUNoQjtBQUVqQyxNQUFNTSxNQUFNLEdBQUcsSUFBTTtJQUVuQixNQUFNLEtBQUNDLFVBQVUsTUFBRUMsYUFBYSxNQUFJUCwrQ0FBUSxDQUFDLEtBQUssQ0FBQztJQUVuRCxNQUFNUSxPQUFPLEdBQUdQLHdEQUFXLENBQUMsQ0FBQ1EsS0FBSyxHQUFLQSxLQUFLLENBQUNDLFVBQVUsQ0FBQ0MsYUFBYSxDQUFDO0lBQ3RFLE1BQU1DLGVBQWUsR0FBR1gsd0RBQVcsQ0FBQyxDQUFDUSxLQUFLLEdBQUtBLEtBQUssQ0FBQ0MsVUFBVSxDQUFDRyxTQUFTLENBQUM7SUFFMUUsTUFBTUMsY0FBYyxHQUFHLFVBQVk7UUFDakMsSUFBSTtZQUNGUCxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDcEIsNEJBQTRCO1lBQzVCLCtEQUErRDtZQUMvRCxNQUFNUSxRQUFRLENBQUNDLE9BQU8sQ0FBQztnQkFBRUMsTUFBTSxFQUFFLHFCQUFxQjthQUFFLENBQUMsQ0FBQztRQUM1RCxFQUFFLE9BQU9DLEtBQUssRUFBRTtZQUNkQyxPQUFPLENBQUNELEtBQUssQ0FBQ0EsS0FBSyxDQUFDLENBQUM7UUFDdkIsQ0FBQztRQUNEWCxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUVELHFCQUNFLDhEQUFDTCxtREFBSTtRQUFDa0IsS0FBSyxFQUFFO1lBQUVDLFNBQVMsRUFBRSxNQUFNO1NBQUU7OzBCQUNoQyw4REFBQ2pCLHlDQUFJO2dCQUFDa0IsS0FBSyxFQUFDLEdBQUc7MEJBQ2IsNEVBQUNDLEdBQUM7b0JBQUNDLFNBQVMsRUFBQyxNQUFNOzhCQUFDLGNBQVk7Ozs7OzZCQUFJOzs7Ozt5QkFDL0I7MEJBRVAsOERBQUN0Qix3REFBUztnQkFBQ3VCLFFBQVEsRUFBQyxPQUFPOztrQ0FDekIsOERBQUNyQix5Q0FBSTt3QkFBQ2tCLEtBQUssRUFBRSxDQUFDLE9BQU8sRUFBRWQsT0FBTyxDQUFDLENBQUM7a0NBQzlCLDRFQUFDZSxHQUFDOzRCQUFDQyxTQUFTLEVBQUMsTUFBTTtzQ0FBQyxTQUFPOzs7OztxQ0FBSTs7Ozs7aUNBQzFCO2tDQUNQLDhEQUFDcEIseUNBQUk7d0JBQUNrQixLQUFLLEVBQUMsV0FBVztrQ0FDckIsNEVBQUNDLEdBQUM7NEJBQUNDLFNBQVMsRUFBQyxNQUFNO3NDQUFDLFVBQVE7Ozs7O3FDQUFJOzs7OztpQ0FDM0I7b0JBQ05aLGVBQWUsa0JBQ2QsOERBQUNSLHlDQUFJO3dCQUFDa0IsS0FBSyxFQUFDLEdBQUc7a0NBQ2IsNEVBQUNDLEdBQUM7NEJBQUNDLFNBQVMsRUFBQyxNQUFNO3NDQUFDLEdBQUM7Ozs7O3FDQUFJOzs7OztpQ0FDcEI7a0NBRVQsOERBQUN0Qix3REFBUztrQ0FDUiw0RUFBQ0MscURBQU07NEJBQ0x3QixLQUFLLEVBQUMsUUFBUTs0QkFDZEMsT0FBTyxFQUFFZCxjQUFjOzRCQUN2QmUsUUFBUSxFQUFFakIsZUFBZTs0QkFDekJrQixPQUFPLEVBQUV4QixVQUFVO3NDQUVsQk0sZUFBZSxHQUFHLGtCQUFrQixHQUFHLGdCQUFnQjs7Ozs7cUNBQ2pEOzs7OztpQ0FDQzs7Ozs7O3lCQUNGOzs7Ozs7aUJBQ1AsQ0FDUDtBQUNKLENBQUM7QUFFRCxpRUFBZVAsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC1ldGhlcmVhbC1vd2wvLi9jb21wb25lbnRzL0hlYWRlci5qcz80ZGJiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IE1lbnUsIEJ1dHRvbiB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCIuLi9yb3V0ZXNcIjtcblxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuXG4gIGNvbnN0IFtjb25uZWN0aW5nLCBzZXRDb25uZWN0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBhZGRyZXNzID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5tYW5hZ2VEYXRhLndhbGxldEFkZHJlc3MpO1xuICBjb25zdCB3YWxsZXRDb25uZWN0ZWQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLm1hbmFnZURhdGEuY29ubmVjdGVkKTtcblxuICBjb25zdCBvbkNsaWNrQ29ubmVjdCA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgc2V0Q29ubmVjdGluZyh0cnVlKTtcbiAgICAgIC8vIFdpbGwgb3BlbiB0aGUgTWV0YU1hc2sgVUlcbiAgICAgIC8vIFlvdSBzaG91bGQgZGlzYWJsZSB0aGlzIGJ1dHRvbiB3aGlsZSB0aGUgcmVxdWVzdCBpcyBwZW5kaW5nIVxuICAgICAgYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogXCJldGhfcmVxdWVzdEFjY291bnRzXCIgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgICBzZXRDb25uZWN0aW5nKGZhbHNlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxNZW51IHN0eWxlPXt7IG1hcmdpblRvcDogXCIxMHB4XCIgfX0+XG4gICAgICA8TGluayByb3V0ZT1cIi9cIj5cbiAgICAgICAgPGEgY2xhc3NOYW1lPVwiaXRlbVwiPkV0aGVyZWFsIE93bDwvYT5cbiAgICAgIDwvTGluaz5cblxuICAgICAgPE1lbnUuTWVudSBwb3NpdGlvbj1cInJpZ2h0XCI+XG4gICAgICAgIDxMaW5rIHJvdXRlPXtgL3VzZXJzLyR7YWRkcmVzc31gfT5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJpdGVtXCI+UHJvZmlsZTwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayByb3V0ZT1cIi9wcm9qZWN0c1wiPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIml0ZW1cIj5Qcm9qZWN0czwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICB7d2FsbGV0Q29ubmVjdGVkICYmIChcbiAgICAgICAgICA8TGluayByb3V0ZT1cIi9cIj5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIml0ZW1cIj4rPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgKX1cbiAgICAgICAgPE1lbnUuSXRlbT5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBjb2xvcj1cInZpb2xldFwiXG4gICAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrQ29ubmVjdH1cbiAgICAgICAgICAgIGRpc2FibGVkPXt3YWxsZXRDb25uZWN0ZWR9XG4gICAgICAgICAgICBsb2FkaW5nPXtjb25uZWN0aW5nfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt3YWxsZXRDb25uZWN0ZWQgPyBcIldhbGxldCBDb25uZWN0ZWRcIiA6IFwiQ29ubmVjdCBXYWxsZXRcIn1cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICA8L01lbnUuTWVudT5cbiAgICA8L01lbnU+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVNlbGVjdG9yIiwiTWVudSIsIkJ1dHRvbiIsIkxpbmsiLCJIZWFkZXIiLCJjb25uZWN0aW5nIiwic2V0Q29ubmVjdGluZyIsImFkZHJlc3MiLCJzdGF0ZSIsIm1hbmFnZURhdGEiLCJ3YWxsZXRBZGRyZXNzIiwid2FsbGV0Q29ubmVjdGVkIiwiY29ubmVjdGVkIiwib25DbGlja0Nvbm5lY3QiLCJldGhlcmV1bSIsInJlcXVlc3QiLCJtZXRob2QiLCJlcnJvciIsImNvbnNvbGUiLCJzdHlsZSIsIm1hcmdpblRvcCIsInJvdXRlIiwiYSIsImNsYXNzTmFtZSIsInBvc2l0aW9uIiwiSXRlbSIsImNvbG9yIiwib25DbGljayIsImRpc2FibGVkIiwibG9hZGluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header.js\n");

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ \"./components/Header.js\");\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ \"./node_modules/semantic-ui-css/semantic.min.css\");\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst Layout = (props)=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Container, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/robertolivi/Ethereal-Owl/project-ethereal-owl/components/Layout.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, undefined),\n            props.children\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/robertolivi/Ethereal-Owl/project-ethereal-owl/components/Layout.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFBMEI7QUFDb0I7QUFDaEI7QUFDWTtBQUUxQyxNQUFNRyxNQUFNLEdBQUcsQ0FBQ0MsS0FBSyxHQUFLO0lBQ3hCLHFCQUNFLDhEQUFDSCx3REFBUzs7MEJBQ1IsOERBQUNDLCtDQUFNOzs7O3lCQUFHO1lBQ1RFLEtBQUssQ0FBQ0MsUUFBUTs7Ozs7O2lCQUNMLENBQ1o7QUFDSixDQUFDO0FBRUQsaUVBQWVGLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtZXRoZXJlYWwtb3dsLy4vY29tcG9uZW50cy9MYXlvdXQuanM/NTE1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XG5pbXBvcnQgXCJzZW1hbnRpYy11aS1jc3Mvc2VtYW50aWMubWluLmNzc1wiO1xuXG5jb25zdCBMYXlvdXQgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPEhlYWRlciAvPlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29udGFpbmVyIiwiSGVhZGVyIiwiTGF5b3V0IiwicHJvcHMiLCJjaGlsZHJlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Layout.js\n");

/***/ }),

/***/ "./pages/projects.js":
/*!***************************!*\
  !*** ./pages/projects.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n\n\n\nconst Projects = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: \"Projects\"\n    }, void 0, false, {\n        fileName: \"/Users/robertolivi/Ethereal-Owl/project-ethereal-owl/pages/projects.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Projects);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9qZWN0cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUEwQjtBQUNnQjtBQUUxQyxNQUFNRSxRQUFRLEdBQUcsSUFBTTtJQUNyQixxQkFDRSw4REFBQ0QsMERBQU07a0JBQUMsVUFFUjs7Ozs7aUJBQVMsQ0FDVjtBQUNILENBQUM7QUFFRCxpRUFBZUMsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC1ldGhlcmVhbC1vd2wvLi9wYWdlcy9wcm9qZWN0cy5qcz8yNWNlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5cbmNvbnN0IFByb2plY3RzID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICBQcm9qZWN0c1xuICAgIDwvTGF5b3V0PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzOyJdLCJuYW1lcyI6WyJSZWFjdCIsIkxheW91dCIsIlByb2plY3RzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/projects.js\n");

/***/ }),

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nconst routes = __webpack_require__(/*! next-routes */ \"next-routes\")();\nroutes.add(\"/projects\", \"/projects\").add(\"/users/:address\", \"/profile\");\n// .add(\"/campaigns/:address\", \"/campaigns/show\")\n// .add(\"/campaigns/:address/requests\", \"campaigns/requests/index\")\n// .add(\"/campaigns/:address/requests/new\", \"/campaigns/requests/new\");\nmodule.exports = routes;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yb3V0ZXMuanMuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFNQSxNQUFNLEdBQUdDLG1CQUFPLENBQUMsZ0NBQWEsQ0FBQyxFQUFFO0FBRXZDRCxNQUFNLENBQ0hFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDLENBQzdCQSxHQUFHLENBQUMsaUJBQWlCLEVBQUUsVUFBVSxDQUFDO0FBQ25DLGlEQUFpRDtBQUNqRCxtRUFBbUU7QUFDbkUsdUVBQXVFO0FBRXpFQyxNQUFNLENBQUNDLE9BQU8sR0FBR0osTUFBTSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC1ldGhlcmVhbC1vd2wvLi9yb3V0ZXMuanM/YjA0MiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByb3V0ZXMgPSByZXF1aXJlKFwibmV4dC1yb3V0ZXNcIikoKTtcblxucm91dGVzXG4gIC5hZGQoXCIvcHJvamVjdHNcIiwgXCIvcHJvamVjdHNcIilcbiAgLmFkZChcIi91c2Vycy86YWRkcmVzc1wiLCBcIi9wcm9maWxlXCIpXG4gIC8vIC5hZGQoXCIvY2FtcGFpZ25zLzphZGRyZXNzXCIsIFwiL2NhbXBhaWducy9zaG93XCIpXG4gIC8vIC5hZGQoXCIvY2FtcGFpZ25zLzphZGRyZXNzL3JlcXVlc3RzXCIsIFwiY2FtcGFpZ25zL3JlcXVlc3RzL2luZGV4XCIpXG4gIC8vIC5hZGQoXCIvY2FtcGFpZ25zLzphZGRyZXNzL3JlcXVlc3RzL25ld1wiLCBcIi9jYW1wYWlnbnMvcmVxdWVzdHMvbmV3XCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlcztcbiJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./routes.js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/projects.js"));
module.exports = __webpack_exports__;

})();