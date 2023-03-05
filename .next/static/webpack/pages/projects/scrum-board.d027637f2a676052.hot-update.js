"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/projects/scrum-board",{

/***/ "./components/scrum/Scrumboard.jsx":
/*!*****************************************!*\
  !*** ./components/scrum/Scrumboard.jsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Column__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Column */ \"./components/scrum/Column.jsx\");\n/* harmony import */ var _FilterBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FilterBar */ \"./components/scrum/FilterBar.jsx\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar ScrumBoard = function(param) {\n    var initialCards = param.initialCards;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), selectedFilter = ref[0], setSelectedFilter = ref[1];\n    var filters = Array.from(new Set(initialCards.map(function(story) {\n        return story.taskedTo;\n    })));\n    var handleFilterClick = function(filter) {\n        setSelectedFilter(filter);\n    };\n    var handleDragStart = function(e, index, status) {\n        console.log(\"Drag start:\", index);\n        e.dataTransfer.setData(\"text\", index);\n        e.dataTransfer.setData(\"status\", status);\n    };\n    var handleDragOver = function(e) {\n        console.log(\"Drag over\");\n        e.preventDefault();\n    };\n    var handleDrop = function(e, status) {\n        e.preventDefault();\n        var id = e.dataTransfer.getData(\"text/plain\");\n        var updatedStoryCards = storyCards.map(function(storyCard) {\n            if (storyCard.id === id) {\n                return (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({}, storyCard), {\n                    status: status\n                });\n            } else {\n                return storyCard;\n            }\n        });\n        setStoryCards(updatedStoryCards);\n    };\n    var columns = [\n        {\n            title: \"Ready\",\n            status: \"Ready\"\n        },\n        {\n            title: \"In Progress\",\n            status: \"In Progress\"\n        },\n        {\n            title: \"Review\",\n            status: \"Review\"\n        },\n        {\n            title: \"Done\",\n            status: \"Done\"\n        }, \n    ];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialCards), storyCards = ref1[0], setStoryCards = ref1[1];\n    var handleReset = function() {\n        setStoryCards(initialCards);\n        setSelectedFilter(null);\n        console.log(\"Sprint Summary:\");\n        console.log(\"Total stories:\", storyCards.length);\n        console.log(\"Stories completed:\", storyCards.filter(function(story) {\n            return story.status === \"Done\";\n        }).length);\n        console.log(\"Stories in progress:\", storyCards.filter(function(story) {\n            return story.status === \"In Progress\";\n        }).length);\n        console.log(\"Stories in review:\", storyCards.filter(function(story) {\n            return story.status === \"Review\";\n        }).length);\n        console.log(\"Stories not started:\", storyCards.filter(function(story) {\n            return story.status === \"Ready\";\n        }).length);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"scrum-board-container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                filters: (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(filters).concat([\n                    \"All\"\n                ]),\n                selectedFilter: selectedFilter,\n                handleFilterClick: handleFilterClick\n            }, void 0, false, {\n                fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/scrum/Scrumboard.jsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"scrum-board\",\n                children: columns.map(function(column, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Column__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        title: column.title,\n                        status: column.status,\n                        storyCards: storyCards,\n                        selectedFilter: selectedFilter,\n                        handleDragStart: handleDragStart,\n                        handleDragOver: handleDragOver,\n                        handleDrop: handleDrop\n                    }, index, false, {\n                        fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/scrum/Scrumboard.jsx\",\n                        lineNumber: 84,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/scrum/Scrumboard.jsx\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                color: \"green\",\n                size: \"large\",\n                onClick: handleReset,\n                children: \"Close Sprint\"\n            }, void 0, false, {\n                fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/scrum/Scrumboard.jsx\",\n                lineNumber: 96,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/robertolivi/Projects/project-ethereal-owl/components/scrum/Scrumboard.jsx\",\n        lineNumber: 76,\n        columnNumber: 5\n    }, _this);\n};\n_s(ScrumBoard, \"bkCr/VnWQhqW6jYwu6c9z4OBM+c=\");\n_c = ScrumBoard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScrumBoard);\nvar _c;\n$RefreshReg$(_c, \"ScrumBoard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FDekIsOERBQUNsQiwrQ0FBTTt3QkFFTGtDLEtBQUssRUFBRUssTUFBTSxDQUFDTCxLQUFLO3dCQUNuQmYsTUFBTSxFQUFFb0IsTUFBTSxDQUFDcEIsTUFBTTt3QkFDckJXLFVBQVUsRUFBRUEsVUFBVTt3QkFDdEJ6QixjQUFjLEVBQUVBLGNBQWM7d0JBQzlCVyxlQUFlLEVBQUVBLGVBQWU7d0JBQ2hDUSxjQUFjLEVBQUVBLGNBQWM7d0JBQzlCRSxVQUFVLEVBQUVBLFVBQVU7dUJBUGpCUixLQUFLOzs7OzZCQVFWO2lCQUNILENBQUM7Ozs7O3FCQUNFOzBCQUNOLDhEQUFDaEIscURBQU07Z0JBQUNzQyxLQUFLLEVBQUMsT0FBTztnQkFBQ0MsSUFBSSxFQUFDLE9BQU87Z0JBQUNDLE9BQU8sRUFBRVAsV0FBVzswQkFBRSxjQUV6RDs7Ozs7cUJBQVM7Ozs7OzthQUNMLENBQ047QUFDSixDQUFDO0dBOUZLaEMsVUFBVTtBQUFWQSxLQUFBQSxVQUFVO0FBZ0doQiwrREFBZUEsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvc2NydW0vU2NydW1ib2FyZC5qc3g/Y2IzZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDb2x1bW4gZnJvbSBcIi4vQ29sdW1uXCI7XG5pbXBvcnQgRmlsdGVyQmFyIGZyb20gXCIuL0ZpbHRlckJhclwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5cblxuY29uc3QgU2NydW1Cb2FyZCA9ICh7IGluaXRpYWxDYXJkcyB9KSA9PiB7XG4gIGNvbnN0IFtzZWxlY3RlZEZpbHRlciwgc2V0U2VsZWN0ZWRGaWx0ZXJdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3QgZmlsdGVycyA9IEFycmF5LmZyb20oXG4gICAgbmV3IFNldChpbml0aWFsQ2FyZHMubWFwKChzdG9yeSkgPT4gc3RvcnkudGFza2VkVG8pKVxuICApO1xuXG4gIGNvbnN0IGhhbmRsZUZpbHRlckNsaWNrID0gKGZpbHRlcikgPT4ge1xuICAgIHNldFNlbGVjdGVkRmlsdGVyKGZpbHRlcik7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRHJhZ1N0YXJ0ID0gKGUsIGluZGV4LCBzdGF0dXMpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIkRyYWcgc3RhcnQ6XCIsIGluZGV4KTtcbiAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKFwidGV4dFwiLCBpbmRleCk7XG4gICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YShcInN0YXR1c1wiLCBzdGF0dXMpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZURyYWdPdmVyID0gKGUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIkRyYWcgb3ZlclwiKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRHJvcCA9IChlLCBzdGF0dXMpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgaWQgPSBlLmRhdGFUcmFuc2Zlci5nZXREYXRhKFwidGV4dC9wbGFpblwiKTtcbiAgICBjb25zdCB1cGRhdGVkU3RvcnlDYXJkcyA9IHN0b3J5Q2FyZHMubWFwKChzdG9yeUNhcmQpID0+IHtcbiAgICAgIGlmIChzdG9yeUNhcmQuaWQgPT09IGlkKSB7XG4gICAgICAgIHJldHVybiB7IC4uLnN0b3J5Q2FyZCwgc3RhdHVzIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gc3RvcnlDYXJkO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHNldFN0b3J5Q2FyZHModXBkYXRlZFN0b3J5Q2FyZHMpO1xuICB9O1xuXG4gIGNvbnN0IGNvbHVtbnMgPSBbXG4gICAgeyB0aXRsZTogXCJSZWFkeVwiLCBzdGF0dXM6IFwiUmVhZHlcIiB9LFxuICAgIHsgdGl0bGU6IFwiSW4gUHJvZ3Jlc3NcIiwgc3RhdHVzOiBcIkluIFByb2dyZXNzXCIgfSxcbiAgICB7IHRpdGxlOiBcIlJldmlld1wiLCBzdGF0dXM6IFwiUmV2aWV3XCIgfSxcbiAgICB7IHRpdGxlOiBcIkRvbmVcIiwgc3RhdHVzOiBcIkRvbmVcIiB9LFxuICBdO1xuXG4gIGNvbnN0IFtzdG9yeUNhcmRzLCBzZXRTdG9yeUNhcmRzXSA9IHVzZVN0YXRlKGluaXRpYWxDYXJkcyk7XG5cbiAgY29uc3QgaGFuZGxlUmVzZXQgPSAoKSA9PiB7XG4gICAgc2V0U3RvcnlDYXJkcyhpbml0aWFsQ2FyZHMpO1xuICAgIHNldFNlbGVjdGVkRmlsdGVyKG51bGwpO1xuICAgIGNvbnNvbGUubG9nKFwiU3ByaW50IFN1bW1hcnk6XCIpO1xuICAgIGNvbnNvbGUubG9nKFwiVG90YWwgc3RvcmllczpcIiwgc3RvcnlDYXJkcy5sZW5ndGgpO1xuICAgIGNvbnNvbGUubG9nKFxuICAgICAgXCJTdG9yaWVzIGNvbXBsZXRlZDpcIixcbiAgICAgIHN0b3J5Q2FyZHMuZmlsdGVyKChzdG9yeSkgPT4gc3Rvcnkuc3RhdHVzID09PSBcIkRvbmVcIikubGVuZ3RoXG4gICAgKTtcbiAgICBjb25zb2xlLmxvZyhcbiAgICAgIFwiU3RvcmllcyBpbiBwcm9ncmVzczpcIixcbiAgICAgIHN0b3J5Q2FyZHMuZmlsdGVyKChzdG9yeSkgPT4gc3Rvcnkuc3RhdHVzID09PSBcIkluIFByb2dyZXNzXCIpXG4gICAgICAgIC5sZW5ndGhcbiAgICApO1xuICAgIGNvbnNvbGUubG9nKFxuICAgICAgXCJTdG9yaWVzIGluIHJldmlldzpcIixcbiAgICAgIHN0b3J5Q2FyZHMuZmlsdGVyKChzdG9yeSkgPT4gc3Rvcnkuc3RhdHVzID09PSBcIlJldmlld1wiKS5sZW5ndGhcbiAgICApO1xuICAgIGNvbnNvbGUubG9nKFxuICAgICAgXCJTdG9yaWVzIG5vdCBzdGFydGVkOlwiLFxuICAgICAgc3RvcnlDYXJkcy5maWx0ZXIoKHN0b3J5KSA9PiBzdG9yeS5zdGF0dXMgPT09IFwiUmVhZHlcIikubGVuZ3RoXG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2NydW0tYm9hcmQtY29udGFpbmVyXCI+XG4gICAgICA8RmlsdGVyQmFyXG4gICAgICAgIGZpbHRlcnM9e1suLi5maWx0ZXJzLCBcIkFsbFwiXX1cbiAgICAgICAgc2VsZWN0ZWRGaWx0ZXI9e3NlbGVjdGVkRmlsdGVyfVxuICAgICAgICBoYW5kbGVGaWx0ZXJDbGljaz17aGFuZGxlRmlsdGVyQ2xpY2t9XG4gICAgICAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY3J1bS1ib2FyZFwiPlxuICAgICAgICB7Y29sdW1ucy5tYXAoKGNvbHVtbiwgaW5kZXgpID0+IChcbiAgICAgICAgICA8Q29sdW1uXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgdGl0bGU9e2NvbHVtbi50aXRsZX1cbiAgICAgICAgICAgIHN0YXR1cz17Y29sdW1uLnN0YXR1c31cbiAgICAgICAgICAgIHN0b3J5Q2FyZHM9e3N0b3J5Q2FyZHN9XG4gICAgICAgICAgICBzZWxlY3RlZEZpbHRlcj17c2VsZWN0ZWRGaWx0ZXJ9XG4gICAgICAgICAgICBoYW5kbGVEcmFnU3RhcnQ9e2hhbmRsZURyYWdTdGFydH1cbiAgICAgICAgICAgIGhhbmRsZURyYWdPdmVyPXtoYW5kbGVEcmFnT3Zlcn1cbiAgICAgICAgICAgIGhhbmRsZURyb3A9e2hhbmRsZURyb3B9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxCdXR0b24gY29sb3I9XCJncmVlblwiIHNpemU9XCJsYXJnZVwiIG9uQ2xpY2s9e2hhbmRsZVJlc2V0fT5cbiAgICAgICAgQ2xvc2UgU3ByaW50XG4gICAgICA8L0J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNjcnVtQm9hcmQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkNvbHVtbiIsIkZpbHRlckJhciIsIkJ1dHRvbiIsIlNjcnVtQm9hcmQiLCJpbml0aWFsQ2FyZHMiLCJzZWxlY3RlZEZpbHRlciIsInNldFNlbGVjdGVkRmlsdGVyIiwiZmlsdGVycyIsIkFycmF5IiwiZnJvbSIsIlNldCIsIm1hcCIsInN0b3J5IiwidGFza2VkVG8iLCJoYW5kbGVGaWx0ZXJDbGljayIsImZpbHRlciIsImhhbmRsZURyYWdTdGFydCIsImUiLCJpbmRleCIsInN0YXR1cyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhVHJhbnNmZXIiLCJzZXREYXRhIiwiaGFuZGxlRHJhZ092ZXIiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZURyb3AiLCJpZCIsImdldERhdGEiLCJ1cGRhdGVkU3RvcnlDYXJkcyIsInN0b3J5Q2FyZHMiLCJzdG9yeUNhcmQiLCJzZXRTdG9yeUNhcmRzIiwiY29sdW1ucyIsInRpdGxlIiwiaGFuZGxlUmVzZXQiLCJsZW5ndGgiLCJkaXYiLCJjbGFzc05hbWUiLCJjb2x1bW4iLCJjb2xvciIsInNpemUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/scrum/Scrumboard.jsx\n"));

/***/ })

});