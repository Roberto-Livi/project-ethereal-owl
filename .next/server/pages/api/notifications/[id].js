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
exports.id = "pages/api/notifications/[id]";
exports.ids = ["pages/api/notifications/[id]"];
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

/***/ "(api)/./pages/api/notifications/[id].js":
/*!*****************************************!*\
  !*** ./pages/api/notifications/[id].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getNotification\": () => (/* binding */ getNotification)\n/* harmony export */ });\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/mongodb */ \"(api)/./lib/mongodb.ts\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst getNotification = async (id)=>{\n    const mongoClient = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n    const data = await mongoClient.db(\"MetaLiberation\").collection(\"notifications\").findOne({\n        _id: new mongodb__WEBPACK_IMPORTED_MODULE_1__.ObjectId(id)\n    });\n    return data;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const { id  } = req.query;\n    if (req.method === \"PUT\") {\n        const mongoClient = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n        const data = await mongoClient.db(\"MetaLiberation\").collection(\"notifications\").updateOne({\n            _id: new mongodb__WEBPACK_IMPORTED_MODULE_1__.ObjectId(id)\n        }, {\n            $set: {\n                notifications: req.body.notifications\n            }\n        });\n        return res.status(200).json(data);\n    } else {\n        const data1 = await getNotification(new mongodb__WEBPACK_IMPORTED_MODULE_1__.ObjectId(id));\n        if (!data1) {\n            res.status(404).json(\"Notification not found\");\n        }\n        res.status(200).json({\n            notification: data1\n        });\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbm90aWZpY2F0aW9ucy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWlEO0FBQ2Q7QUFHNUIsTUFBTUUsZUFBZSxHQUFHLE9BQU1DLEVBQUUsR0FBSztJQUMxQyxNQUFNQyxXQUFXLEdBQUcsTUFBTUosb0RBQWE7SUFFdkMsTUFBTUssSUFBSSxHQUFHLE1BQU1ELFdBQVcsQ0FBQ0UsRUFBRSxDQUFDLGdCQUFnQixDQUFDLENBQUNDLFVBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQ0MsT0FBTyxDQUFDO1FBQUNDLEdBQUcsRUFBRSxJQUFJUiw2Q0FBUSxDQUFDRSxFQUFFLENBQUM7S0FBQyxDQUFDO0lBRWhILE9BQU9FLElBQUksQ0FBQztBQUNkLENBQUM7QUFFRCxpRUFBZSxPQUFNSyxHQUFHLEVBQUVDLEdBQUcsR0FBSztJQUNoQyxNQUFNLEVBQUVSLEVBQUUsR0FBRSxHQUFHTyxHQUFHLENBQUNFLEtBQUs7SUFDeEIsSUFBSUYsR0FBRyxDQUFDRyxNQUFNLEtBQUssS0FBSyxFQUFFO1FBQ3hCLE1BQU1ULFdBQVcsR0FBRyxNQUFNSixvREFBYTtRQUV2QyxNQUFNSyxJQUFJLEdBQUcsTUFBTUQsV0FBVyxDQUMzQkUsRUFBRSxDQUFDLGdCQUFnQixDQUFDLENBQ3BCQyxVQUFVLENBQUMsZUFBZSxDQUFDLENBQzNCTyxTQUFTLENBQUM7WUFBRUwsR0FBRyxFQUFFLElBQUlSLDZDQUFRLENBQUNFLEVBQUUsQ0FBQztTQUFFLEVBQUU7WUFBRVksSUFBSSxFQUFFO2dCQUFFQyxhQUFhLEVBQUVOLEdBQUcsQ0FBQ08sSUFBSSxDQUFDRCxhQUFhO2FBQUU7U0FBRSxDQUFDO1FBRTVGLE9BQU9MLEdBQUcsQ0FBQ08sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNkLElBQUksQ0FBQyxDQUFDO0lBQ3BDLE9BQU87UUFDTCxNQUFNQSxLQUFJLEdBQUcsTUFBTUgsZUFBZSxDQUFDLElBQUlELDZDQUFRLENBQUNFLEVBQUUsQ0FBQyxDQUFDO1FBRXBELElBQUksQ0FBQ0UsS0FBSSxFQUFFO1lBQ1RNLEdBQUcsQ0FBQ08sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUNqRCxDQUFDO1FBQ0RSLEdBQUcsQ0FBQ08sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUMsWUFBWSxFQUFFZixLQUFJO1NBQUUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC1ldGhlcmVhbC1vd2wvLi9wYWdlcy9hcGkvbm90aWZpY2F0aW9ucy9baWRdLmpzPzg5Y2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsaWVudFByb21pc2UgZnJvbSBcIi4uLy4uLy4uL2xpYi9tb25nb2RiXCI7XG5pbXBvcnQgeyBPYmplY3RJZCB9IGZyb20gXCJtb25nb2RiXCI7XG5cblxuZXhwb3J0IGNvbnN0IGdldE5vdGlmaWNhdGlvbiA9IGFzeW5jKGlkKSA9PiB7XG4gIGNvbnN0IG1vbmdvQ2xpZW50ID0gYXdhaXQgY2xpZW50UHJvbWlzZTtcblxuICBjb25zdCBkYXRhID0gYXdhaXQgbW9uZ29DbGllbnQuZGIoXCJNZXRhTGliZXJhdGlvblwiKS5jb2xsZWN0aW9uKFwibm90aWZpY2F0aW9uc1wiKS5maW5kT25lKHtfaWQ6IG5ldyBPYmplY3RJZChpZCl9KTtcblxuICByZXR1cm4gZGF0YTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMocmVxLCByZXMpID0+IHtcbiAgY29uc3QgeyBpZCB9ID0gcmVxLnF1ZXJ5O1xuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJQVVRcIikge1xuICAgIGNvbnN0IG1vbmdvQ2xpZW50ID0gYXdhaXQgY2xpZW50UHJvbWlzZTtcblxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBtb25nb0NsaWVudFxuICAgICAgLmRiKFwiTWV0YUxpYmVyYXRpb25cIilcbiAgICAgIC5jb2xsZWN0aW9uKFwibm90aWZpY2F0aW9uc1wiKVxuICAgICAgLnVwZGF0ZU9uZSh7IF9pZDogbmV3IE9iamVjdElkKGlkKSB9LCB7ICRzZXQ6IHsgbm90aWZpY2F0aW9uczogcmVxLmJvZHkubm90aWZpY2F0aW9ucyB9IH0pO1xuXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKGRhdGEpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXROb3RpZmljYXRpb24obmV3IE9iamVjdElkKGlkKSk7XG5cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHJlcy5zdGF0dXMoNDA0KS5qc29uKFwiTm90aWZpY2F0aW9uIG5vdCBmb3VuZFwiKTtcbiAgICB9XG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBub3RpZmljYXRpb246IGRhdGEgfSk7XG4gIH1cbn0iXSwibmFtZXMiOlsiY2xpZW50UHJvbWlzZSIsIk9iamVjdElkIiwiZ2V0Tm90aWZpY2F0aW9uIiwiaWQiLCJtb25nb0NsaWVudCIsImRhdGEiLCJkYiIsImNvbGxlY3Rpb24iLCJmaW5kT25lIiwiX2lkIiwicmVxIiwicmVzIiwicXVlcnkiLCJtZXRob2QiLCJ1cGRhdGVPbmUiLCIkc2V0Iiwibm90aWZpY2F0aW9ucyIsImJvZHkiLCJzdGF0dXMiLCJqc29uIiwibm90aWZpY2F0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/notifications/[id].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/notifications/[id].js"));
module.exports = __webpack_exports__;

})();