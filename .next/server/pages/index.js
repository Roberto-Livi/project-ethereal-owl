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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../routes */ \"./routes.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst Header = ()=>{\n    const walletConnected = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.manageData.connected);\n    const onClickConnect = async ()=>{\n        try {\n            // Will open the MetaMask UI\n            // You should disable this button while the request is pending!\n            await ethereum.request({\n                method: \"eth_requestAccounts\"\n            });\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Menu, {\n        style: {\n            marginTop: \"10px\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_4__.Link, {\n                route: \"/\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"item\",\n                    children: \"Ethereal Owl\"\n                }, void 0, false, {\n                    fileName: \"/Users/robertolivi/Ethereal-Owl/project-ethereal-owl/components/Header.js\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/robertolivi/Ethereal-Owl/project-ethereal-owl/components/Header.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Menu.Menu, {\n                position: \"right\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_4__.Link, {\n                        route: \"/projects\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: \"item\",\n                            children: \"Projects\"\n                        }, void 0, false, {\n                            fileName: \"/Users/robertolivi/Ethereal-Owl/project-ethereal-owl/components/Header.js\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/robertolivi/Ethereal-Owl/project-ethereal-owl/components/Header.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, undefined),\n                    walletConnected ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_4__.Link, {\n                        route: \"/\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: \"item\",\n                            children: \"+\"\n                        }, void 0, false, {\n                            fileName: \"/Users/robertolivi/Ethereal-Owl/project-ethereal-owl/components/Header.js\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/robertolivi/Ethereal-Owl/project-ethereal-owl/components/Header.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Menu.Item, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                            color: \"violet\",\n                            onClick: onClickConnect,\n                            children: \"Connect Wallet\"\n                        }, void 0, false, {\n                            fileName: \"/Users/robertolivi/Ethereal-Owl/project-ethereal-owl/components/Header.js\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/robertolivi/Ethereal-Owl/project-ethereal-owl/components/Header.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/robertolivi/Ethereal-Owl/project-ethereal-owl/components/Header.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/robertolivi/Ethereal-Owl/project-ethereal-owl/components/Header.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQXdDO0FBQ0U7QUFDTztBQUNoQjtBQUVqQyxNQUFNTSxNQUFNLEdBQUcsSUFBTTtJQUVuQixNQUFNQyxlQUFlLEdBQUdMLHdEQUFXLENBQUMsQ0FBQ00sS0FBSyxHQUFLQSxLQUFLLENBQUNDLFVBQVUsQ0FBQ0MsU0FBUyxDQUFDO0lBRTFFLE1BQU1DLGNBQWMsR0FBRyxVQUFZO1FBQ2pDLElBQUk7WUFDRiw0QkFBNEI7WUFDNUIsK0RBQStEO1lBQy9ELE1BQU1DLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDO2dCQUFFQyxNQUFNLEVBQUUscUJBQXFCO2FBQUUsQ0FBQyxDQUFDO1FBQzVELEVBQUUsT0FBT0MsS0FBSyxFQUFFO1lBQ2RDLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDQSxLQUFLLENBQUMsQ0FBQztRQUN2QixDQUFDO0lBQ0gsQ0FBQztJQUVELHFCQUNFLDhEQUFDWixtREFBSTtRQUFDYyxLQUFLLEVBQUU7WUFBRUMsU0FBUyxFQUFFLE1BQU07U0FBRTs7MEJBQ2hDLDhEQUFDYix5Q0FBSTtnQkFBQ2MsS0FBSyxFQUFDLEdBQUc7MEJBQ2IsNEVBQUNDLEdBQUM7b0JBQUNDLFNBQVMsRUFBQyxNQUFNOzhCQUFDLGNBQVk7Ozs7OzZCQUFJOzs7Ozt5QkFDL0I7MEJBRVAsOERBQUNsQix3REFBUztnQkFBQ21CLFFBQVEsRUFBQyxPQUFPOztrQ0FDekIsOERBQUNqQix5Q0FBSTt3QkFBQ2MsS0FBSyxFQUFDLFdBQVc7a0NBQ3JCLDRFQUFDQyxHQUFDOzRCQUFDQyxTQUFTLEVBQUMsTUFBTTtzQ0FBQyxVQUFROzs7OztxQ0FBSTs7Ozs7aUNBQzNCO29CQUNMZCxlQUFlLGlCQUNqQiw4REFBQ0YseUNBQUk7d0JBQUNjLEtBQUssRUFBQyxHQUFHO2tDQUNiLDRFQUFDQyxHQUFDOzRCQUFDQyxTQUFTLEVBQUMsTUFBTTtzQ0FBQyxHQUFDOzs7OztxQ0FBSTs7Ozs7aUNBQ3BCLGlCQUVQLDhEQUFDbEIsd0RBQVM7a0NBQ1IsNEVBQUNDLHFEQUFNOzRCQUNMb0IsS0FBSyxFQUFDLFFBQVE7NEJBQ2RDLE9BQU8sRUFBRWQsY0FBYztzQ0FDeEIsZ0JBRUQ7Ozs7O3FDQUFTOzs7OztpQ0FDQzs7Ozs7O3lCQUVGOzs7Ozs7aUJBQ1AsQ0FDUDtBQUNKLENBQUM7QUFFRCxpRUFBZUwsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC1ldGhlcmVhbC1vd2wvLi9jb21wb25lbnRzL0hlYWRlci5qcz80ZGJiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IE1lbnUsIEJ1dHRvbiB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCIuLi9yb3V0ZXNcIjtcblxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuXG4gIGNvbnN0IHdhbGxldENvbm5lY3RlZCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUubWFuYWdlRGF0YS5jb25uZWN0ZWQpO1xuXG4gIGNvbnN0IG9uQ2xpY2tDb25uZWN0ID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAvLyBXaWxsIG9wZW4gdGhlIE1ldGFNYXNrIFVJXG4gICAgICAvLyBZb3Ugc2hvdWxkIGRpc2FibGUgdGhpcyBidXR0b24gd2hpbGUgdGhlIHJlcXVlc3QgaXMgcGVuZGluZyFcbiAgICAgIGF3YWl0IGV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6IFwiZXRoX3JlcXVlc3RBY2NvdW50c1wiIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TWVudSBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMTBweFwiIH19PlxuICAgICAgPExpbmsgcm91dGU9XCIvXCI+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cIml0ZW1cIj5FdGhlcmVhbCBPd2w8L2E+XG4gICAgICA8L0xpbms+XG5cbiAgICAgIDxNZW51Lk1lbnUgcG9zaXRpb249XCJyaWdodFwiPlxuICAgICAgICA8TGluayByb3V0ZT1cIi9wcm9qZWN0c1wiPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIml0ZW1cIj5Qcm9qZWN0czwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICB7IHdhbGxldENvbm5lY3RlZCA/XG4gICAgICAgIDxMaW5rIHJvdXRlPVwiL1wiPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIml0ZW1cIj4rPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDpcbiAgICAgICAgPE1lbnUuSXRlbT5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBjb2xvcj1cInZpb2xldFwiXG4gICAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrQ29ubmVjdH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBDb25uZWN0IFdhbGxldFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgfVxuICAgICAgPC9NZW51Lk1lbnU+XG4gICAgPC9NZW51PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VTZWxlY3RvciIsIk1lbnUiLCJCdXR0b24iLCJMaW5rIiwiSGVhZGVyIiwid2FsbGV0Q29ubmVjdGVkIiwic3RhdGUiLCJtYW5hZ2VEYXRhIiwiY29ubmVjdGVkIiwib25DbGlja0Nvbm5lY3QiLCJldGhlcmV1bSIsInJlcXVlc3QiLCJtZXRob2QiLCJlcnJvciIsImNvbnNvbGUiLCJzdHlsZSIsIm1hcmdpblRvcCIsInJvdXRlIiwiYSIsImNsYXNzTmFtZSIsInBvc2l0aW9uIiwiSXRlbSIsImNvbG9yIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header.js\n");

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ \"./components/Header.js\");\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ \"./node_modules/semantic-ui-css/semantic.min.css\");\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst Layout = (props)=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Container, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/robertolivi/Ethereal-Owl/project-ethereal-owl/components/Layout.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, undefined),\n            props.children\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/robertolivi/Ethereal-Owl/project-ethereal-owl/components/Layout.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFBMEI7QUFDb0I7QUFDaEI7QUFDWTtBQUUxQyxNQUFNRyxNQUFNLEdBQUcsQ0FBQ0MsS0FBSyxHQUFLO0lBQ3hCLHFCQUNFLDhEQUFDSCx3REFBUzs7MEJBQ1IsOERBQUNDLCtDQUFNOzs7O3lCQUFHO1lBQ1RFLEtBQUssQ0FBQ0MsUUFBUTs7Ozs7O2lCQUNMLENBQ1o7QUFDSixDQUFDO0FBRUQsaUVBQWVGLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtZXRoZXJlYWwtb3dsLy4vY29tcG9uZW50cy9MYXlvdXQuanM/NTE1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XG5pbXBvcnQgXCJzZW1hbnRpYy11aS1jc3Mvc2VtYW50aWMubWluLmNzc1wiO1xuXG5jb25zdCBMYXlvdXQgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPEhlYWRlciAvPlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29udGFpbmVyIiwiSGVhZGVyIiwiTGF5b3V0IiwicHJvcHMiLCJjaGlsZHJlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Layout.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n\n\n\nconst EtherealOwlIndex = ()=>{\n    // const hootBalance = useSelector((state) => state.manageData.hootBalance);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: \"Welcome to Ethereal Owl\"\n    }, void 0, false, {\n        fileName: \"/Users/robertolivi/Ethereal-Owl/project-ethereal-owl/pages/index.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, undefined);\n};\n// EtherealOwlIndex.getInitialProps = async () => {\n//   // const address = await web3.eth.getAccounts();\n//   // console.log(address)\n//   return { stars: 2, address };\n// };\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EtherealOwlIndex);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUEwQjtBQUNnQjtBQUUxQyxNQUFNRSxnQkFBZ0IsR0FBRyxJQUFNO0lBRTdCLDRFQUE0RTtJQUU1RSxxQkFDRSw4REFBQ0QsMERBQU07a0JBQUMseUJBRVI7Ozs7O2lCQUFTLENBQ1Y7QUFDSCxDQUFDO0FBRUQsbURBQW1EO0FBQ25ELHFEQUFxRDtBQUNyRCw0QkFBNEI7QUFDNUIsa0NBQWtDO0FBQ2xDLEtBQUs7QUFFTCxpRUFBZUMsZ0JBQWdCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LWV0aGVyZWFsLW93bC8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcblxuY29uc3QgRXRoZXJlYWxPd2xJbmRleCA9ICgpID0+IHtcblxuICAvLyBjb25zdCBob290QmFsYW5jZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUubWFuYWdlRGF0YS5ob290QmFsYW5jZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgV2VsY29tZSB0byBFdGhlcmVhbCBPd2xcbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG4vLyBFdGhlcmVhbE93bEluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcbi8vICAgLy8gY29uc3QgYWRkcmVzcyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XG4vLyAgIC8vIGNvbnNvbGUubG9nKGFkZHJlc3MpXG4vLyAgIHJldHVybiB7IHN0YXJzOiAyLCBhZGRyZXNzIH07XG4vLyB9O1xuXG5leHBvcnQgZGVmYXVsdCBFdGhlcmVhbE93bEluZGV4OyJdLCJuYW1lcyI6WyJSZWFjdCIsIkxheW91dCIsIkV0aGVyZWFsT3dsSW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nconst routes = __webpack_require__(/*! next-routes */ \"next-routes\")();\nroutes.add(\"/projects\", \"/projects\");\n// .add(\"/campaigns/:address\", \"/campaigns/show\")\n// .add(\"/campaigns/:address/requests\", \"campaigns/requests/index\")\n// .add(\"/campaigns/:address/requests/new\", \"/campaigns/requests/new\");\nmodule.exports = routes;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yb3V0ZXMuanMuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFNQSxNQUFNLEdBQUdDLG1CQUFPLENBQUMsZ0NBQWEsQ0FBQyxFQUFFO0FBRXZDRCxNQUFNLENBQ0hFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDO0FBQzlCLGlEQUFpRDtBQUNqRCxtRUFBbUU7QUFDbkUsdUVBQXVFO0FBRXpFQyxNQUFNLENBQUNDLE9BQU8sR0FBR0osTUFBTSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC1ldGhlcmVhbC1vd2wvLi9yb3V0ZXMuanM/YjA0MiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByb3V0ZXMgPSByZXF1aXJlKFwibmV4dC1yb3V0ZXNcIikoKTtcblxucm91dGVzXG4gIC5hZGQoXCIvcHJvamVjdHNcIiwgXCIvcHJvamVjdHNcIilcbiAgLy8gLmFkZChcIi9jYW1wYWlnbnMvOmFkZHJlc3NcIiwgXCIvY2FtcGFpZ25zL3Nob3dcIilcbiAgLy8gLmFkZChcIi9jYW1wYWlnbnMvOmFkZHJlc3MvcmVxdWVzdHNcIiwgXCJjYW1wYWlnbnMvcmVxdWVzdHMvaW5kZXhcIilcbiAgLy8gLmFkZChcIi9jYW1wYWlnbnMvOmFkZHJlc3MvcmVxdWVzdHMvbmV3XCIsIFwiL2NhbXBhaWducy9yZXF1ZXN0cy9uZXdcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gcm91dGVzO1xuIl0sIm5hbWVzIjpbInJvdXRlcyIsInJlcXVpcmUiLCJhZGQiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./routes.js\n");

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