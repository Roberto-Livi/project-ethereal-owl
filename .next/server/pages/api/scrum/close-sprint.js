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
exports.id = "pages/api/scrum/close-sprint";
exports.ids = ["pages/api/scrum/close-sprint"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./lib/mongodb.ts":
/*!************************!*\
  !*** ./lib/mongodb.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nif (false) {}\nconst uri = \"mongodb+srv://roblivi:sI2rEiJe3V1n0Jav@cluster0.zkpln8x.mongodb.net/test?retryWrites=true&w=majority\";\nconst options = {};\nlet client;\nlet clientPromise;\nif (true) {\n    // In development mode, use a global variable so that the value\n    // is preserved across module reloads caused by HMR (Hot Module Replacement).\n    if (!global._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        global._mongoClientPromise = client.connect();\n    }\n    clientPromise = global._mongoClientPromise;\n} else {}\n// Export a module-scoped MongoClient promise. By doing this in a\n// separate module, the client can be shared across functions.\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ29kYi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBcUM7QUFFckMsSUFBSSxLQUF1QixFQUFFLEVBRTVCO0FBRUQsTUFBTUssR0FBRyxHQUFHSixzR0FBc0I7QUFDbEMsTUFBTUssT0FBTyxHQUFHLEVBQUU7QUFFbEIsSUFBSUMsTUFBTTtBQUNWLElBQUlDLGFBQWE7QUFFakIsSUFBSVAsSUFBc0MsRUFBRTtJQUMxQywrREFBK0Q7SUFDL0QsNkVBQTZFO0lBQzdFLElBQUksQ0FBQ1EsTUFBTSxDQUFDQyxtQkFBbUIsRUFBRTtRQUMvQkgsTUFBTSxHQUFHLElBQUlQLGdEQUFXLENBQUNLLEdBQUcsRUFBRUMsT0FBTyxDQUFDO1FBQ3RDRyxNQUFNLENBQUNDLG1CQUFtQixHQUFHSCxNQUFNLENBQUNJLE9BQU8sRUFBRTtJQUMvQyxDQUFDO0lBQ0RILGFBQWEsR0FBR0MsTUFBTSxDQUFDQyxtQkFBbUI7QUFDNUMsT0FBTyxFQUlOO0FBRUQsaUVBQWlFO0FBQ2pFLDhEQUE4RDtBQUM5RCxpRUFBZUYsYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtZXRoZXJlYWwtb3dsLy4vbGliL21vbmdvZGIudHM/MDViZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gJ21vbmdvZGInXG5cbmlmICghcHJvY2Vzcy5lbnYubW9uZ29kYlVyaSkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQvTWlzc2luZyBlbnZpcm9ubWVudCB2YXJpYWJsZTogXCJNT05HT0RCX1VSSVwiJylcbn1cblxuY29uc3QgdXJpID0gcHJvY2Vzcy5lbnYubW9uZ29kYlVyaVxuY29uc3Qgb3B0aW9ucyA9IHt9XG5cbmxldCBjbGllbnRcbmxldCBjbGllbnRQcm9taXNlOiBQcm9taXNlPE1vbmdvQ2xpZW50PlxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgLy8gSW4gZGV2ZWxvcG1lbnQgbW9kZSwgdXNlIGEgZ2xvYmFsIHZhcmlhYmxlIHNvIHRoYXQgdGhlIHZhbHVlXG4gIC8vIGlzIHByZXNlcnZlZCBhY3Jvc3MgbW9kdWxlIHJlbG9hZHMgY2F1c2VkIGJ5IEhNUiAoSG90IE1vZHVsZSBSZXBsYWNlbWVudCkuXG4gIGlmICghZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2UpIHtcbiAgICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKVxuICAgIGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlID0gY2xpZW50LmNvbm5lY3QoKVxuICB9XG4gIGNsaWVudFByb21pc2UgPSBnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZVxufSBlbHNlIHtcbiAgLy8gSW4gcHJvZHVjdGlvbiBtb2RlLCBpdCdzIGJlc3QgdG8gbm90IHVzZSBhIGdsb2JhbCB2YXJpYWJsZS5cbiAgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSwgb3B0aW9ucylcbiAgY2xpZW50UHJvbWlzZSA9IGNsaWVudC5jb25uZWN0KClcbn1cblxuLy8gRXhwb3J0IGEgbW9kdWxlLXNjb3BlZCBNb25nb0NsaWVudCBwcm9taXNlLiBCeSBkb2luZyB0aGlzIGluIGFcbi8vIHNlcGFyYXRlIG1vZHVsZSwgdGhlIGNsaWVudCBjYW4gYmUgc2hhcmVkIGFjcm9zcyBmdW5jdGlvbnMuXG5leHBvcnQgZGVmYXVsdCBjbGllbnRQcm9taXNlXG4iXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJwcm9jZXNzIiwiZW52IiwibW9uZ29kYlVyaSIsIkVycm9yIiwidXJpIiwib3B0aW9ucyIsImNsaWVudCIsImNsaWVudFByb21pc2UiLCJnbG9iYWwiLCJfbW9uZ29DbGllbnRQcm9taXNlIiwiY29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/mongodb.ts\n");

/***/ }),

/***/ "(api)/./pages/api/scrum/close-sprint.js":
/*!*****************************************!*\
  !*** ./pages/api/scrum/close-sprint.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/mongodb */ \"(api)/./lib/mongodb.ts\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const { projectId , storyIds  } = req.body;\n    try {\n        const mongoClient = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n        const result = await mongoClient.db(\"MetaLiberation\").collection(\"scrum\").updateOne({\n            projectId\n        }, {\n            $pull: {\n                backlog: {\n                    id: {\n                        $in: storyIds\n                    }\n                }\n            }\n        });\n        if (result.modifiedCount >= 1) {\n            return res.status(200).json({\n                success: true\n            });\n        } else {\n            return res.status(404).json({\n                success: false,\n                message: \"Project or stories not found\"\n            });\n        }\n    } catch (err) {\n        console.log(err.message);\n        return res.status(500).json({\n            success: false\n        });\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2NydW0vY2xvc2Utc3ByaW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWlEO0FBRWpELGlFQUFlLE9BQU9DLEdBQUcsRUFBRUMsR0FBRyxHQUFLO0lBQ2pDLE1BQU0sRUFBRUMsU0FBUyxHQUFFQyxRQUFRLEdBQUUsR0FBR0gsR0FBRyxDQUFDSSxJQUFJO0lBRXhDLElBQUk7UUFDRixNQUFNQyxXQUFXLEdBQUcsTUFBTU4sb0RBQWE7UUFFdkMsTUFBTU8sTUFBTSxHQUFHLE1BQU1ELFdBQVcsQ0FDN0JFLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUNwQkMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUNuQkMsU0FBUyxDQUNSO1lBQUVQLFNBQVM7U0FBRSxFQUNiO1lBQUVRLEtBQUssRUFBRTtnQkFBRUMsT0FBTyxFQUFFO29CQUFFQyxFQUFFLEVBQUU7d0JBQUVDLEdBQUcsRUFBRVYsUUFBUTtxQkFBRTtpQkFBRTthQUFFO1NBQUUsQ0FDbEQ7UUFFSCxJQUFJRyxNQUFNLENBQUNRLGFBQWEsSUFBSSxDQUFDLEVBQUU7WUFDN0IsT0FBT2IsR0FBRyxDQUFDYyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFBRUMsT0FBTyxFQUFFLElBQUk7YUFBRSxDQUFDLENBQUM7UUFDakQsT0FBTztZQUNMLE9BQU9oQixHQUFHLENBQ1BjLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FDWEMsSUFBSSxDQUFDO2dCQUFFQyxPQUFPLEVBQUUsS0FBSztnQkFBRUMsT0FBTyxFQUFFLDhCQUE4QjthQUFFLENBQUMsQ0FBQztRQUN2RSxDQUFDO0lBQ0gsRUFBRSxPQUFPQyxHQUFHLEVBQUU7UUFDWkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEdBQUcsQ0FBQ0QsT0FBTyxDQUFDLENBQUM7UUFDekIsT0FBT2pCLEdBQUcsQ0FBQ2MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUMsT0FBTyxFQUFFLEtBQUs7U0FBRSxDQUFDLENBQUM7SUFDbEQsQ0FBQztBQUNILENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtZXRoZXJlYWwtb3dsLy4vcGFnZXMvYXBpL3NjcnVtL2Nsb3NlLXNwcmludC5qcz83NjY4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGllbnRQcm9taXNlIGZyb20gXCIuLi8uLi8uLi9saWIvbW9uZ29kYlwiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgY29uc3QgeyBwcm9qZWN0SWQsIHN0b3J5SWRzIH0gPSByZXEuYm9keTtcblxuICB0cnkge1xuICAgIGNvbnN0IG1vbmdvQ2xpZW50ID0gYXdhaXQgY2xpZW50UHJvbWlzZTtcblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG1vbmdvQ2xpZW50XG4gICAgICAuZGIoXCJNZXRhTGliZXJhdGlvblwiKVxuICAgICAgLmNvbGxlY3Rpb24oXCJzY3J1bVwiKVxuICAgICAgLnVwZGF0ZU9uZShcbiAgICAgICAgeyBwcm9qZWN0SWQgfSxcbiAgICAgICAgeyAkcHVsbDogeyBiYWNrbG9nOiB7IGlkOiB7ICRpbjogc3RvcnlJZHMgfSB9IH0gfVxuICAgICAgKTtcblxuICAgIGlmIChyZXN1bHQubW9kaWZpZWRDb3VudCA+PSAxKSB7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzXG4gICAgICAgIC5zdGF0dXMoNDA0KVxuICAgICAgICAuanNvbih7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIlByb2plY3Qgb3Igc3RvcmllcyBub3QgZm91bmRcIiB9KTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKTtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSB9KTtcbiAgfVxufTtcbiJdLCJuYW1lcyI6WyJjbGllbnRQcm9taXNlIiwicmVxIiwicmVzIiwicHJvamVjdElkIiwic3RvcnlJZHMiLCJib2R5IiwibW9uZ29DbGllbnQiLCJyZXN1bHQiLCJkYiIsImNvbGxlY3Rpb24iLCJ1cGRhdGVPbmUiLCIkcHVsbCIsImJhY2tsb2ciLCJpZCIsIiRpbiIsIm1vZGlmaWVkQ291bnQiLCJzdGF0dXMiLCJqc29uIiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJlcnIiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/scrum/close-sprint.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/scrum/close-sprint.js"));
module.exports = __webpack_exports__;

})();