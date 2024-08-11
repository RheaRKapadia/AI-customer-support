"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.js":
/*!*********************!*\
  !*** ./app/page.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Stack,TextField!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Stack,TextField!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Stack/Stack.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Stack,TextField!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/TextField/TextField.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Stack,TextField!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            role: \"assistant\",\n            content: \"Hi I'm the Headstarter Support Agent, how can I assist you today?\"\n        }\n    ]);\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    // Function to send a message\n    const sendMessage = async ()=>{\n        setMessage(\"\");\n        setMessages((messages)=>[\n                ...messages,\n                {\n                    role: \"user\",\n                    content: message\n                },\n                {\n                    role: \"assistant\",\n                    content: \"\"\n                }\n            ]);\n        const response = await fetch(\"/api/chat\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify([\n                {\n                    role: \"user\",\n                    content: message\n                }\n            ])\n        });\n        if (response.ok) {\n            const reader = response.body.getReader();\n            const decoder = new TextDecoder();\n            let done = false;\n            let text = \"\";\n            while(!done){\n                const { value, done: readerDone } = await reader.read();\n                done = readerDone;\n                if (value) {\n                    text += decoder.decode(value, {\n                        stream: true\n                    });\n                    setMessages((messages)=>{\n                        const lastMessage = messages[messages.length - 1];\n                        const otherMessages = messages.slice(0, messages.length - 1);\n                        return [\n                            ...otherMessages,\n                            {\n                                ...lastMessage,\n                                content: lastMessage.content + text\n                            }\n                        ];\n                    });\n                }\n            }\n        } else {\n            console.error(\"Error:\", response.status);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        width: \"100vw\",\n        height: \"100vh\",\n        display: \"flex\",\n        flexDirection: \"column\",\n        justifyContent: \"center\",\n        alignItems: \"center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            direction: \"column\",\n            width: \"600px\",\n            height: \"700px\",\n            border: \"1px solid black\",\n            p: 2,\n            spacing: 3,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    direction: \"column\",\n                    spacing: 2,\n                    flexGrow: 1,\n                    overflow: \"auto\",\n                    maxHeight: \"100%\",\n                    children: messages.map((message, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            display: \"flex\",\n                            justifyContent: message.role === \"assistant\" ? \"flex-start\" : \"flex-end\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                bgcolor: message.role === \"assistant\" ? \"primary.main\" : \"secondary.main\",\n                                color: \"white\",\n                                borderRadius: 16,\n                                p: 3,\n                                children: [\n                                    message.content,\n                                    message.role === \"assistant\" && message.content === \"\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"typing-indicator\",\n                                        children: \"...\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ctala\\\\AISupportChat_HP3\\\\AI-customer-support\\\\app\\\\page.js\",\n                                        lineNumber: 88,\n                                        columnNumber: 19\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\ctala\\\\AISupportChat_HP3\\\\AI-customer-support\\\\app\\\\page.js\",\n                                lineNumber: 80,\n                                columnNumber: 15\n                            }, this)\n                        }, index, false, {\n                            fileName: \"C:\\\\Users\\\\ctala\\\\AISupportChat_HP3\\\\AI-customer-support\\\\app\\\\page.js\",\n                            lineNumber: 75,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ctala\\\\AISupportChat_HP3\\\\AI-customer-support\\\\app\\\\page.js\",\n                    lineNumber: 73,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    direction: \"row\",\n                    spacing: 2,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            label: \"message\",\n                            fullWidth: true,\n                            value: message,\n                            onChange: (e)=>setMessage(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ctala\\\\AISupportChat_HP3\\\\AI-customer-support\\\\app\\\\page.js\",\n                            lineNumber: 95,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            variant: \"contained\",\n                            onClick: sendMessage,\n                            children: \"Send\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ctala\\\\AISupportChat_HP3\\\\AI-customer-support\\\\app\\\\page.js\",\n                            lineNumber: 101,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ctala\\\\AISupportChat_HP3\\\\AI-customer-support\\\\app\\\\page.js\",\n                    lineNumber: 94,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\ctala\\\\AISupportChat_HP3\\\\AI-customer-support\\\\app\\\\page.js\",\n            lineNumber: 72,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ctala\\\\AISupportChat_HP3\\\\AI-customer-support\\\\app\\\\page.js\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"YwOOkYIG1oxAQmTKnTjHcgfujM4=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qiw4REFBQzdDLHNHQUFTQTs0QkFDUndELE9BQU07NEJBQ05DLFNBQVM7NEJBQ1RqQyxPQUFPakI7NEJBQ1BtRCxVQUFVLENBQUNDLElBQU1uRCxXQUFXbUQsRUFBRUMsTUFBTSxDQUFDcEMsS0FBSzs7Ozs7O3NDQUU1Qyw4REFBQzFCLHNHQUFNQTs0QkFBQytELFNBQVE7NEJBQVlDLFNBQVNyRDtzQ0FBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPNUQ7R0F2R3dCUDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS5qcz9iZTY3Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuaW1wb3J0IHsgQm94LCBCdXR0b24sIFN0YWNrLCBUZXh0RmllbGQgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGUoW1xyXG4gICAge1xyXG4gICAgICByb2xlOiAnYXNzaXN0YW50JyxcclxuICAgICAgY29udGVudDogXCJIaSBJJ20gdGhlIEhlYWRzdGFydGVyIFN1cHBvcnQgQWdlbnQsIGhvdyBjYW4gSSBhc3Npc3QgeW91IHRvZGF5P1wiLFxyXG4gICAgfSxcclxuICBdKTtcclxuXHJcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICAvLyBGdW5jdGlvbiB0byBzZW5kIGEgbWVzc2FnZVxyXG4gIGNvbnN0IHNlbmRNZXNzYWdlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgc2V0TWVzc2FnZSgnJyk7XHJcbiAgICBzZXRNZXNzYWdlcygobWVzc2FnZXMpID0+IFtcclxuICAgICAgLi4ubWVzc2FnZXMsXHJcbiAgICAgIHsgcm9sZTogJ3VzZXInLCBjb250ZW50OiBtZXNzYWdlIH0sXHJcbiAgICAgIHsgcm9sZTogJ2Fzc2lzdGFudCcsIGNvbnRlbnQ6ICcnIH0sXHJcbiAgICBdKTtcclxuXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2NoYXQnLCB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoW3sgcm9sZTogJ3VzZXInLCBjb250ZW50OiBtZXNzYWdlIH1dKSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICBjb25zdCByZWFkZXIgPSByZXNwb25zZS5ib2R5LmdldFJlYWRlcigpO1xyXG4gICAgICBjb25zdCBkZWNvZGVyID0gbmV3IFRleHREZWNvZGVyKCk7XHJcblxyXG4gICAgICBsZXQgZG9uZSA9IGZhbHNlO1xyXG4gICAgICBsZXQgdGV4dCA9ICcnO1xyXG5cclxuICAgICAgd2hpbGUgKCFkb25lKSB7XHJcbiAgICAgICAgY29uc3QgeyB2YWx1ZSwgZG9uZTogcmVhZGVyRG9uZSB9ID0gYXdhaXQgcmVhZGVyLnJlYWQoKTtcclxuICAgICAgICBkb25lID0gcmVhZGVyRG9uZTtcclxuXHJcbiAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICB0ZXh0ICs9IGRlY29kZXIuZGVjb2RlKHZhbHVlLCB7IHN0cmVhbTogdHJ1ZSB9KTtcclxuICAgICAgICAgIHNldE1lc3NhZ2VzKChtZXNzYWdlcykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBsYXN0TWVzc2FnZSA9IG1lc3NhZ2VzW21lc3NhZ2VzLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgICAgICBjb25zdCBvdGhlck1lc3NhZ2VzID0gbWVzc2FnZXMuc2xpY2UoMCwgbWVzc2FnZXMubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgLi4ub3RoZXJNZXNzYWdlcyxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAuLi5sYXN0TWVzc2FnZSxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGxhc3RNZXNzYWdlLmNvbnRlbnQgKyB0ZXh0LFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIHJlc3BvbnNlLnN0YXR1cyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3hcclxuICAgICAgd2lkdGg9XCIxMDB2d1wiXHJcbiAgICAgIGhlaWdodD1cIjEwMHZoXCJcclxuICAgICAgZGlzcGxheT1cImZsZXhcIlxyXG4gICAgICBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcclxuICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxyXG4gICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcclxuICAgID5cclxuICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cImNvbHVtblwiIHdpZHRoPVwiNjAwcHhcIiBoZWlnaHQ9XCI3MDBweFwiIGJvcmRlcj1cIjFweCBzb2xpZCBibGFja1wiIHA9ezJ9IHNwYWNpbmc9ezN9PlxyXG4gICAgICAgIDxTdGFjayBkaXJlY3Rpb249XCJjb2x1bW5cIiBzcGFjaW5nPXsyfSBmbGV4R3Jvdz17MX0gb3ZlcmZsb3c9XCJhdXRvXCIgbWF4SGVpZ2h0PVwiMTAwJVwiPlxyXG4gICAgICAgICAge21lc3NhZ2VzLm1hcCgobWVzc2FnZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxyXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PXttZXNzYWdlLnJvbGUgPT09ICdhc3Npc3RhbnQnID8gJ2ZsZXgtc3RhcnQnIDogJ2ZsZXgtZW5kJ31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICAgIGJnY29sb3I9e21lc3NhZ2Uucm9sZSA9PT0gJ2Fzc2lzdGFudCcgPyAncHJpbWFyeS5tYWluJyA6ICdzZWNvbmRhcnkubWFpbid9XHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1cz17MTZ9XHJcbiAgICAgICAgICAgICAgICBwPXszfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHttZXNzYWdlLmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICB7bWVzc2FnZS5yb2xlID09PSAnYXNzaXN0YW50JyAmJiBtZXNzYWdlLmNvbnRlbnQgPT09ICcnICYmIChcclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidHlwaW5nLWluZGljYXRvclwiPi4uLjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPVwicm93XCIgc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIGxhYmVsPVwibWVzc2FnZVwiXHJcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICB2YWx1ZT17bWVzc2FnZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBvbkNsaWNrPXtzZW5kTWVzc2FnZX0+XHJcbiAgICAgICAgICAgIFNlbmRcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvU3RhY2s+XHJcbiAgICAgIDwvU3RhY2s+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJCb3giLCJCdXR0b24iLCJTdGFjayIsIlRleHRGaWVsZCIsInVzZVN0YXRlIiwiSG9tZSIsIm1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJyb2xlIiwiY29udGVudCIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwic2VuZE1lc3NhZ2UiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwib2siLCJyZWFkZXIiLCJnZXRSZWFkZXIiLCJkZWNvZGVyIiwiVGV4dERlY29kZXIiLCJkb25lIiwidGV4dCIsInZhbHVlIiwicmVhZGVyRG9uZSIsInJlYWQiLCJkZWNvZGUiLCJzdHJlYW0iLCJsYXN0TWVzc2FnZSIsImxlbmd0aCIsIm90aGVyTWVzc2FnZXMiLCJzbGljZSIsImNvbnNvbGUiLCJlcnJvciIsInN0YXR1cyIsIndpZHRoIiwiaGVpZ2h0IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJkaXJlY3Rpb24iLCJib3JkZXIiLCJwIiwic3BhY2luZyIsImZsZXhHcm93Iiwib3ZlcmZsb3ciLCJtYXhIZWlnaHQiLCJtYXAiLCJpbmRleCIsImJnY29sb3IiLCJjb2xvciIsImJvcmRlclJhZGl1cyIsInNwYW4iLCJjbGFzc05hbWUiLCJsYWJlbCIsImZ1bGxXaWR0aCIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhcmlhbnQiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});