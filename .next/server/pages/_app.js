"use strict";
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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./ethereum/web3.js":
/*!**************************!*\
  !*** ./ethereum/web3.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web3 */ \"web3\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);\n\nlet web3;\nif (false) {} else {\n    // We are on the server *OR* the user is not running metamask\n    const provider = new (web3__WEBPACK_IMPORTED_MODULE_0___default().providers.HttpProvider)(\"https://goerli.infura.io/v3/eb61db6460c142f099f2af67e35fee09\");\n    web3 = new (web3__WEBPACK_IMPORTED_MODULE_0___default())(provider);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (web3);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ldGhlcmV1bS93ZWIzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF3QjtBQUV4QixJQUFJQyxJQUFJO0FBRVIsSUFBSSxLQUF1RSxFQUFFLEVBSTVFLE1BQU07SUFDTCw2REFBNkQ7SUFDN0QsTUFBTUssUUFBUSxHQUFHLElBQUlOLG9FQUEyQixDQUM5Qyw4REFBOEQsQ0FDL0Q7SUFDREMsSUFBSSxHQUFHLElBQUlELDZDQUFJLENBQUNNLFFBQVEsQ0FBQyxDQUFDO0FBQzVCLENBQUM7QUFFRCxpRUFBZUwsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC1ldGhlcmVhbC1vd2wvLi9ldGhlcmV1bS93ZWIzLmpzPzk2N2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFdlYjMgZnJvbSBcIndlYjNcIjtcblxubGV0IHdlYjM7XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiB3aW5kb3cuZXRoZXJldW0gIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgLy8gV2UgYXJlIGluIHRoZSBicm93c2VyIGFuZCBtZXRhbWFzayBpcyBydW5uaW5nLlxuICB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogXCJldGhfcmVxdWVzdEFjY291bnRzXCIgfSk7XG4gIHdlYjMgPSBuZXcgV2ViMyh3aW5kb3cuZXRoZXJldW0pO1xufSBlbHNlIHtcbiAgLy8gV2UgYXJlIG9uIHRoZSBzZXJ2ZXIgKk9SKiB0aGUgdXNlciBpcyBub3QgcnVubmluZyBtZXRhbWFza1xuICBjb25zdCBwcm92aWRlciA9IG5ldyBXZWIzLnByb3ZpZGVycy5IdHRwUHJvdmlkZXIoXG4gICAgXCJodHRwczovL2dvZXJsaS5pbmZ1cmEuaW8vdjMvZWI2MWRiNjQ2MGMxNDJmMDk5ZjJhZjY3ZTM1ZmVlMDlcIlxuICApO1xuICB3ZWIzID0gbmV3IFdlYjMocHJvdmlkZXIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB3ZWIzO1xuIl0sIm5hbWVzIjpbIldlYjMiLCJ3ZWIzIiwid2luZG93IiwiZXRoZXJldW0iLCJyZXF1ZXN0IiwibWV0aG9kIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJIdHRwUHJvdmlkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./ethereum/web3.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/store */ \"./store/store.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/actions */ \"./store/actions/index.js\");\n\n\n\n\n\n\nconst MyApp = ({ Component , pageProps  })=>{\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    const connect = async ()=>{\n        const account = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__[\"default\"].eth.getAccounts();\n        if (account.length) {\n            dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_5__.connectWallet)(account[0]));\n        } else {\n            dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_5__.disconnect)());\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (window.ethereum) {\n            window.ethereum.on(\"chainChanged\", ()=>{\n                window.location.reload();\n            });\n            window.ethereum.on(\"accountsChanged\", ()=>{\n                window.location.reload();\n            });\n            connect();\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {\n            store: _store_store__WEBPACK_IMPORTED_MODULE_1__.store,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/robertolivi/Ethereal-Owl/project-ethereal-owl/pages/_app.js\",\n                lineNumber: 35,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/robertolivi/Ethereal-Owl/project-ethereal-owl/pages/_app.js\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_store_store__WEBPACK_IMPORTED_MODULE_1__.wrapper.withRedux(MyApp));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUE4QztBQUNNO0FBQ2xCO0FBQ0U7QUFDeUI7QUFFN0QsTUFBTVEsS0FBSyxHQUFHLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQUUsR0FBSztJQUUxQyxNQUFNQyxRQUFRLEdBQUdSLHdEQUFXLEVBQUU7SUFFOUIsTUFBTVMsT0FBTyxHQUFHLFVBQVk7UUFDMUIsTUFBTUMsT0FBTyxHQUFHLE1BQU1SLHNFQUFvQixFQUFFO1FBQzVDLElBQUdRLE9BQU8sQ0FBQ0csTUFBTSxFQUFDO1lBQ2hCTCxRQUFRLENBQUNMLDZEQUFhLENBQUNPLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEMsT0FBTztZQUNMRixRQUFRLENBQUNKLDBEQUFVLEVBQUUsQ0FBQyxDQUFDO1FBQ3pCLENBQUM7SUFDSCxDQUFDO0lBRURILGdEQUFTLENBQUMsSUFBTTtRQUNkLElBQUdhLE1BQU0sQ0FBQ0MsUUFBUSxFQUFFO1lBQ2xCRCxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsRUFBRSxDQUFDLGNBQWMsRUFBRSxJQUFNO2dCQUN2Q0YsTUFBTSxDQUFDRyxRQUFRLENBQUNDLE1BQU0sRUFBRSxDQUFDO1lBQzNCLENBQUMsQ0FBQztZQUNGSixNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsRUFBRSxDQUFDLGlCQUFpQixFQUFFLElBQU07Z0JBQzFDRixNQUFNLENBQUNHLFFBQVEsQ0FBQ0MsTUFBTSxFQUFFLENBQUM7WUFDM0IsQ0FBQyxDQUFDO1lBQ0ZULE9BQU8sRUFBRSxDQUFDO1FBQ1osQ0FBQztJQUNILENBQUMsQ0FBQztJQUVGLHFCQUNFO2tCQUNFLDRFQUFDVixpREFBUTtZQUFDRCxLQUFLLEVBQUVBLCtDQUFLO3NCQUNwQiw0RUFBQ1EsU0FBUztnQkFBRSxHQUFHQyxTQUFTOzs7Ozt5QkFBSTs7Ozs7cUJBQ25CO3FCQUNWLENBQ0g7QUFDSixDQUFDO0FBRUQsaUVBQWVWLDJEQUFpQixDQUFDUSxLQUFLLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtZXRoZXJlYWwtb3dsLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7d3JhcHBlciwgc3RvcmV9IGZyb20gXCIuLi9zdG9yZS9zdG9yZVwiO1xuaW1wb3J0IHsgUHJvdmlkZXIsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB3ZWIzIGZyb20gXCIuLi9ldGhlcmV1bS93ZWIzXCI7XG5pbXBvcnQgeyBjb25uZWN0V2FsbGV0LCBkaXNjb25uZWN0IH0gZnJvbSBcIi4uL3N0b3JlL2FjdGlvbnNcIjtcblxuY29uc3QgTXlBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XG5cbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuXG4gIGNvbnN0IGNvbm5lY3QgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgYWNjb3VudCA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XG4gICAgaWYoYWNjb3VudC5sZW5ndGgpe1xuICAgICAgZGlzcGF0Y2goY29ubmVjdFdhbGxldChhY2NvdW50WzBdKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRpc3BhdGNoKGRpc2Nvbm5lY3QoKSk7XG4gICAgfVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZih3aW5kb3cuZXRoZXJldW0pIHtcbiAgICAgIHdpbmRvdy5ldGhlcmV1bS5vbignY2hhaW5DaGFuZ2VkJywgKCkgPT4ge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICB9KVxuICAgICAgd2luZG93LmV0aGVyZXVtLm9uKCdhY2NvdW50c0NoYW5nZWQnLCAoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgIH0pXG4gICAgICBjb25uZWN0KCk7XG4gICAgfVxuICB9KVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L1Byb3ZpZGVyPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChNeUFwcCk7XG4iXSwibmFtZXMiOlsid3JhcHBlciIsInN0b3JlIiwiUHJvdmlkZXIiLCJ1c2VEaXNwYXRjaCIsInVzZUVmZmVjdCIsIndlYjMiLCJjb25uZWN0V2FsbGV0IiwiZGlzY29ubmVjdCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiZGlzcGF0Y2giLCJjb25uZWN0IiwiYWNjb3VudCIsImV0aCIsImdldEFjY291bnRzIiwibGVuZ3RoIiwid2luZG93IiwiZXRoZXJldW0iLCJvbiIsImxvY2F0aW9uIiwicmVsb2FkIiwid2l0aFJlZHV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./store/actions/index.js":
/*!********************************!*\
  !*** ./store/actions/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"connectWallet\": () => (/* binding */ connectWallet),\n/* harmony export */   \"disconnect\": () => (/* binding */ disconnect)\n/* harmony export */ });\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ \"./store/actions/types.js\");\n\nconst connectWallet = (walletAddress)=>(dispatch)=>{\n        dispatch({\n            type: _types__WEBPACK_IMPORTED_MODULE_0__.CONNECT_WALLET,\n            payload: walletAddress\n        });\n    };\nconst disconnect = ()=>(dispatch)=>{\n        dispatch({\n            type: _types__WEBPACK_IMPORTED_MODULE_0__.DISCONNECT\n        });\n    };\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9hY3Rpb25zL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFxRDtBQUU5QyxNQUFNRSxhQUFhLEdBQUcsQ0FBQ0MsYUFBYSxHQUFLQyxDQUFBQSxRQUFRLEdBQUk7UUFDMURBLFFBQVEsQ0FBQztZQUFFQyxJQUFJLEVBQUVMLGtEQUFjO1lBQUVNLE9BQU8sRUFBRUgsYUFBYTtTQUFFLENBQUMsQ0FBQztJQUM3RCxDQUFDO0FBRU0sTUFBTUksVUFBVSxHQUFHLElBQU1ILENBQUFBLFFBQVEsR0FBSTtRQUMxQ0EsUUFBUSxDQUFDO1lBQUVDLElBQUksRUFBRUosOENBQVU7U0FBRSxDQUFDLENBQUM7SUFDakMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtZXRoZXJlYWwtb3dsLy4vc3RvcmUvYWN0aW9ucy9pbmRleC5qcz9hNTA5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENPTk5FQ1RfV0FMTEVULCBESVNDT05ORUNUIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IGNvbm5lY3RXYWxsZXQgPSAod2FsbGV0QWRkcmVzcykgPT4gZGlzcGF0Y2ggPT4ge1xuICBkaXNwYXRjaCh7IHR5cGU6IENPTk5FQ1RfV0FMTEVULCBwYXlsb2FkOiB3YWxsZXRBZGRyZXNzIH0pO1xufVxuXG5leHBvcnQgY29uc3QgZGlzY29ubmVjdCA9ICgpID0+IGRpc3BhdGNoID0+IHtcbiAgZGlzcGF0Y2goeyB0eXBlOiBESVNDT05ORUNUIH0pO1xufSJdLCJuYW1lcyI6WyJDT05ORUNUX1dBTExFVCIsIkRJU0NPTk5FQ1QiLCJjb25uZWN0V2FsbGV0Iiwid2FsbGV0QWRkcmVzcyIsImRpc3BhdGNoIiwidHlwZSIsInBheWxvYWQiLCJkaXNjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/actions/index.js\n");

/***/ }),

/***/ "./store/actions/types.js":
/*!********************************!*\
  !*** ./store/actions/types.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CONNECT_WALLET\": () => (/* binding */ CONNECT_WALLET),\n/* harmony export */   \"DISCONNECT\": () => (/* binding */ DISCONNECT)\n/* harmony export */ });\nconst CONNECT_WALLET = \"CONNECT_WALLET\";\nconst DISCONNECT = \"DISCONNECT\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9hY3Rpb25zL3R5cGVzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQU8sTUFBTUEsY0FBYyxHQUFHLGdCQUFnQixDQUFDO0FBQ3hDLE1BQU1DLFVBQVUsR0FBRyxZQUFZLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LWV0aGVyZWFsLW93bC8uL3N0b3JlL2FjdGlvbnMvdHlwZXMuanM/MDdmMSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgQ09OTkVDVF9XQUxMRVQgPSBcIkNPTk5FQ1RfV0FMTEVUXCI7XG5leHBvcnQgY29uc3QgRElTQ09OTkVDVCA9IFwiRElTQ09OTkVDVFwiOyJdLCJuYW1lcyI6WyJDT05ORUNUX1dBTExFVCIsIkRJU0NPTk5FQ1QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/actions/types.js\n");

/***/ }),

/***/ "./store/reducers/index.js":
/*!*********************************!*\
  !*** ./store/reducers/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _manageData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manageData */ \"./store/reducers/manageData.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({\n    manageData: _manageData__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9yZWR1Y2Vycy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXdDO0FBQ0Y7QUFFdEMsaUVBQWVBLHNEQUFlLENBQUM7SUFDN0JDLFVBQVU7Q0FDWCxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LWV0aGVyZWFsLW93bC8uL3N0b3JlL3JlZHVjZXJzL2luZGV4LmpzP2IyNDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgbWFuYWdlRGF0YSBmcm9tIFwiLi9tYW5hZ2VEYXRhXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIG1hbmFnZURhdGFcbn0pO1xuIl0sIm5hbWVzIjpbImNvbWJpbmVSZWR1Y2VycyIsIm1hbmFnZURhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/reducers/index.js\n");

/***/ }),

/***/ "./store/reducers/manageData.js":
/*!**************************************!*\
  !*** ./store/reducers/manageData.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ \"./store/actions/types.js\");\n\nconst initialState = {\n    connected: false,\n    walletAddress: \"\",\n    hootBalance: 100\n};\nconst manageData = (state = initialState, action)=>{\n    switch(action.type){\n        case _actions_types__WEBPACK_IMPORTED_MODULE_0__.CONNECT_WALLET:\n            return {\n                ...state,\n                connected: true,\n                walletAddress: action.payload\n            };\n        case _actions_types__WEBPACK_IMPORTED_MODULE_0__.DISCONNECT:\n            return {\n                ...state,\n                connected: false,\n                walletAddress: \"\"\n            };\n        default:\n            return state;\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (manageData);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9yZWR1Y2Vycy9tYW5hZ2VEYXRhLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQThEO0FBRTlELE1BQU1FLFlBQVksR0FBRztJQUNuQkMsU0FBUyxFQUFFLEtBQUs7SUFDaEJDLGFBQWEsRUFBRSxFQUFFO0lBQ2pCQyxXQUFXLEVBQUUsR0FBRztDQUNqQjtBQUVELE1BQU1DLFVBQVUsR0FBRyxDQUFDQyxLQUFLLEdBQUdMLFlBQVksRUFBRU0sTUFBTSxHQUFLO0lBQ25ELE9BQVFBLE1BQU0sQ0FBQ0MsSUFBSTtRQUNqQixLQUFLVCwwREFBYztZQUNqQixPQUFPO2dCQUFFLEdBQUdPLEtBQUs7Z0JBQUVKLFNBQVMsRUFBRSxJQUFJO2dCQUFFQyxhQUFhLEVBQUVJLE1BQU0sQ0FBQ0UsT0FBTzthQUFFLENBQUM7UUFDdEUsS0FBS1Qsc0RBQVU7WUFDYixPQUFPO2dCQUFFLEdBQUdNLEtBQUs7Z0JBQUVKLFNBQVMsRUFBRSxLQUFLO2dCQUFFQyxhQUFhLEVBQUUsRUFBRTthQUFFLENBQUM7UUFDM0Q7WUFDRSxPQUFPRyxLQUFLLENBQUM7S0FDaEI7QUFDSCxDQUFDO0FBRUQsaUVBQWVELFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtZXRoZXJlYWwtb3dsLy4vc3RvcmUvcmVkdWNlcnMvbWFuYWdlRGF0YS5qcz8xNWZhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENPTk5FQ1RfV0FMTEVULCBESVNDT05ORUNUIH0gZnJvbSBcIi4uL2FjdGlvbnMvdHlwZXNcIjtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBjb25uZWN0ZWQ6IGZhbHNlLFxuICB3YWxsZXRBZGRyZXNzOiBcIlwiLFxuICBob290QmFsYW5jZTogMTAwXG59O1xuXG5jb25zdCBtYW5hZ2VEYXRhID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQ09OTkVDVF9XQUxMRVQ6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgY29ubmVjdGVkOiB0cnVlLCB3YWxsZXRBZGRyZXNzOiBhY3Rpb24ucGF5bG9hZCB9O1xuICAgIGNhc2UgRElTQ09OTkVDVDpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjb25uZWN0ZWQ6IGZhbHNlLCB3YWxsZXRBZGRyZXNzOiBcIlwiIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbWFuYWdlRGF0YTtcbiJdLCJuYW1lcyI6WyJDT05ORUNUX1dBTExFVCIsIkRJU0NPTk5FQ1QiLCJpbml0aWFsU3RhdGUiLCJjb25uZWN0ZWQiLCJ3YWxsZXRBZGRyZXNzIiwiaG9vdEJhbGFuY2UiLCJtYW5hZ2VEYXRhIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicGF5bG9hZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/reducers/manageData.js\n");

/***/ }),

/***/ "./store/store.js":
/*!************************!*\
  !*** ./store/store.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"store\": () => (/* binding */ store),\n/* harmony export */   \"wrapper\": () => (/* binding */ wrapper)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _reducers_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducers/index */ \"./store/reducers/index.js\");\n\n\n\n\n\n// initial states here\nconst initalState = {};\n// middleware\nconst middleware = [\n    (redux_thunk__WEBPACK_IMPORTED_MODULE_1___default())\n];\n// creating store\nconst store = (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(_reducers_index__WEBPACK_IMPORTED_MODULE_4__[\"default\"], initalState, (0,redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__.composeWithDevTools)((0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)(...middleware)));\n// assigning store to next wrapper\nconst makeStore = ()=>store;\nconst wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__.createWrapper)(makeStore);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9zdG9yZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFxRDtBQUNyQjtBQUMrQjtBQUNaO0FBQ1I7QUFFM0Msc0JBQXNCO0FBQ3RCLE1BQU1NLFdBQVcsR0FBRyxFQUFFO0FBRXRCLGFBQWE7QUFDYixNQUFNQyxVQUFVLEdBQUc7SUFBQ0wsb0RBQUs7Q0FBQztBQUUxQixpQkFBaUI7QUFDVixNQUFNTSxLQUFLLEdBQUdSLGtEQUFXLENBQzlCSyx1REFBVyxFQUNYQyxXQUFXLEVBQ1hILDZFQUFtQixDQUFDRixzREFBZSxJQUFJTSxVQUFVLENBQUMsQ0FBQyxDQUNwRCxDQUFDO0FBRUYsa0NBQWtDO0FBQ2xDLE1BQU1FLFNBQVMsR0FBRyxJQUFNRCxLQUFLO0FBRXRCLE1BQU1FLE9BQU8sR0FBR04saUVBQWEsQ0FBQ0ssU0FBUyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LWV0aGVyZWFsLW93bC8uL3N0b3JlL3N0b3JlLmpzPzM2NjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IHRodW5rIGZyb20gXCJyZWR1eC10aHVua1wiO1xuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIjtcbmltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSBcIi4vcmVkdWNlcnMvaW5kZXhcIjtcblxuLy8gaW5pdGlhbCBzdGF0ZXMgaGVyZVxuY29uc3QgaW5pdGFsU3RhdGUgPSB7fTtcblxuLy8gbWlkZGxld2FyZVxuY29uc3QgbWlkZGxld2FyZSA9IFt0aHVua107XG5cbi8vIGNyZWF0aW5nIHN0b3JlXG5leHBvcnQgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShcbiAgcm9vdFJlZHVjZXIsXG4gIGluaXRhbFN0YXRlLFxuICBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlKSlcbik7XG5cbi8vIGFzc2lnbmluZyBzdG9yZSB0byBuZXh0IHdyYXBwZXJcbmNvbnN0IG1ha2VTdG9yZSA9ICgpID0+IHN0b3JlO1xuXG5leHBvcnQgY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIobWFrZVN0b3JlKTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVTdG9yZSIsImFwcGx5TWlkZGxld2FyZSIsInRodW5rIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImNyZWF0ZVdyYXBwZXIiLCJyb290UmVkdWNlciIsImluaXRhbFN0YXRlIiwibWlkZGxld2FyZSIsInN0b3JlIiwibWFrZVN0b3JlIiwid3JhcHBlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/store.js\n");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("redux-thunk");

/***/ }),

/***/ "web3":
/*!***********************!*\
  !*** external "web3" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("web3");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();