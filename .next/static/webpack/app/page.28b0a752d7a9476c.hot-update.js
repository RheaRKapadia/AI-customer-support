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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Stack,TextField!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Stack,TextField!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Stack/Stack.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Stack,TextField!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/TextField/TextField.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Stack,TextField!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    // useState is a hook in React that allos us to create messages variable and function update variable \n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            role: \"assistant\",\n            content: \"Hi I'm the Headstarter Support Agent, how can I assist you today?\"\n        }\n    ]);\n    // message ill be hat the user is sending. \n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const sendMessage = async ()=>{\n        setMessage(\"\");\n        setMessages((messages)=>[\n                ...messages,\n                {\n                    role: \"user\",\n                    content: message\n                },\n                {\n                    role: \"assistant\",\n                    content: \"\"\n                }\n            ]);\n        const response = fetch(\"/api/chat\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify([\n                {\n                    role: \"user\",\n                    content: message\n                }\n            ])\n        }).then(async (res)=>{\n            const reader = res.body.getReader();\n            const decoder = new TextDecoder();\n            let result = \"\";\n            return reader.read().then(function processText(param) {\n                let { done, value } = param;\n                if (done) {\n                    return result;\n                }\n                const text = decoder.decode(value || new Int8Array(), {\n                    stream: true\n                });\n                setMessages((messages)=>{\n                    let lastMessage = messages[messages.length - 1];\n                    let otherMessages = messages.slice(0, messages.length - 1);\n                    return [\n                        ...otherMessages,\n                        {\n                            ...lastMessage,\n                            content: lastMessage.content + text\n                        }\n                    ];\n                });\n                return reader.read().then(processText);\n            });\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        width: \"100vw\",\n        height: \"100vh\",\n        display: \"flex\",\n        flexDirection: \"column\",\n        justifyContent: \"center\",\n        alignItems: \"center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            direction: \"column\",\n            width: \"600px\",\n            height: \"700px\",\n            border: \"1px solid black\",\n            p: 2,\n            spacing: 3,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    direction: \"column\",\n                    spacing: 2,\n                    flexGrow: 1,\n                    overflow: \"auto\",\n                    maxHeight: \"100%\",\n                    children: messages.map((message, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            display: \"flex\",\n                            justifyContent: message.role === \"assistant\" ? \"flex-start\" : \"flex-end\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                bgcolor: message.role === \"assistant\" ? \"primary.main\" : \"secondary.main\",\n                                color: \"white\",\n                                borderRadius: 16,\n                                p: 3,\n                                children: message.content\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ctala\\\\AISupportChat_HP3\\\\AI-customer-support\\\\app\\\\page.js\",\n                                lineNumber: 64,\n                                columnNumber: 23\n                            }, this)\n                        }, index, false, {\n                            fileName: \"C:\\\\Users\\\\ctala\\\\AISupportChat_HP3\\\\AI-customer-support\\\\app\\\\page.js\",\n                            lineNumber: 63,\n                            columnNumber: 21\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ctala\\\\AISupportChat_HP3\\\\AI-customer-support\\\\app\\\\page.js\",\n                    lineNumber: 60,\n                    columnNumber: 15\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    direction: \"row\",\n                    spacing: 2,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            label: \"message\",\n                            fullWidth: true,\n                            value: message,\n                            onChange: (e)=>setMessage(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ctala\\\\AISupportChat_HP3\\\\AI-customer-support\\\\app\\\\page.js\",\n                            lineNumber: 72,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            variant: \"contained\",\n                            onClick: sendMessage,\n                            children: \"Send\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ctala\\\\AISupportChat_HP3\\\\AI-customer-support\\\\app\\\\page.js\",\n                            lineNumber: 73,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ctala\\\\AISupportChat_HP3\\\\AI-customer-support\\\\app\\\\page.js\",\n                    lineNumber: 71,\n                    columnNumber: 15\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\ctala\\\\AISupportChat_HP3\\\\AI-customer-support\\\\app\\\\page.js\",\n            lineNumber: 59,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ctala\\\\AISupportChat_HP3\\\\AI-customer-support\\\\app\\\\page.js\",\n        lineNumber: 58,\n        columnNumber: 10\n    }, this);\n}\n_s(Home, \"ae9KVWxvKKGBLJWjBYD3BxbeWQw=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RCxFQUFFQyxNQUFNLENBQUMvQixLQUFLOzs7Ozs7c0NBQy9GLDhEQUFDN0Isc0dBQU1BOzRCQUFDNkQsU0FBUTs0QkFBWUMsU0FBU25EO3NDQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlsRTtHQXZFd0JQO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLmpzP2JlNjciXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcbmltcG9ydCB7IEJveCwgQnV0dG9uLCBTdGFjaywgVGV4dEZpZWxkIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcclxuXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIC8vIHVzZVN0YXRlIGlzIGEgaG9vayBpbiBSZWFjdCB0aGF0IGFsbG9zIHVzIHRvIGNyZWF0ZSBtZXNzYWdlcyB2YXJpYWJsZSBhbmQgZnVuY3Rpb24gdXBkYXRlIHZhcmlhYmxlIFxyXG4gIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGUoW3tcclxuICAgIHJvbGU6J2Fzc2lzdGFudCcsIC8vIHJvbGUgb2Ygc2VuZGVyLiBtZXNzYWdlIGlzIHNlbnQgYnkgc3VwcG9ydCBhZ2VudCBcclxuICAgIGNvbnRlbnQ6IGBIaSBJJ20gdGhlIEhlYWRzdGFydGVyIFN1cHBvcnQgQWdlbnQsIGhvdyBjYW4gSSBhc3Npc3QgeW91IHRvZGF5P2BcclxuICB9XSlcclxuXHJcbiAgLy8gbWVzc2FnZSBpbGwgYmUgaGF0IHRoZSB1c2VyIGlzIHNlbmRpbmcuIFxyXG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKVxyXG5cclxuICBjb25zdCBzZW5kTWVzc2FnZSA9IGFzeW5jKCk9PntcclxuICAgIHNldE1lc3NhZ2UoJycpXHJcbiAgICBzZXRNZXNzYWdlcygobWVzc2FnZXMpPT5bXHJcbiAgICAgIC4uLm1lc3NhZ2VzLFxyXG4gICAgICB7cm9sZTondXNlcicsIGNvbnRlbnQ6bWVzc2FnZX0sXHJcbiAgICAgIHtyb2xlOidhc3Npc3RhbnQnLCBjb250ZW50OiAnJ30sXHJcbiAgICBdKVxyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gZmV0Y2goJy9hcGkvY2hhdCcsIHtcclxuICAgICAgbWV0aG9kOidQT1NUJyxcclxuICAgICAgaGVhZGVyczp7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICB9LFxyXG4gICAgICBcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoW3tyb2xlOiAndXNlcicsIGNvbnRlbnQ6IG1lc3NhZ2V9XSksXHJcblxyXG4gICAgfSkudGhlbihhc3luYyAocmVzKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlYWRlciA9IHJlcy5ib2R5LmdldFJlYWRlcigpXHJcbiAgICAgIGNvbnN0IGRlY29kZXIgPSBuZXcgVGV4dERlY29kZXIoKVxyXG5cclxuICAgICAgbGV0IHJlc3VsdCA9ICcnXHJcbiAgICAgIHJldHVybiByZWFkZXIucmVhZCgpLnRoZW4oZnVuY3Rpb24gcHJvY2Vzc1RleHQoe2RvbmUsIHZhbHVlfSl7XHJcbiAgICAgICAgaWYgKGRvbmUpe1xyXG4gICAgICAgICAgcmV0dXJuIHJlc3VsdFxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB0ZXh0ID0gZGVjb2Rlci5kZWNvZGUodmFsdWUgfHwgbmV3IEludDhBcnJheSgpLCB7c3RyZWFtOnRydWV9KVxyXG4gICAgICAgIHNldE1lc3NhZ2VzKChtZXNzYWdlcyk9PntcclxuICAgICAgICAgIGxldCBsYXN0TWVzc2FnZSA9IG1lc3NhZ2VzW21lc3NhZ2VzLmxlbmd0aC0xXVxyXG4gICAgICAgICAgbGV0IG90aGVyTWVzc2FnZXMgPSBtZXNzYWdlcy5zbGljZSgwLCBtZXNzYWdlcy5sZW5ndGgtMSlcclxuICAgICAgICAgIHJldHVybltcclxuICAgICAgICAgICAgLi4ub3RoZXJNZXNzYWdlcyxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIC4uLmxhc3RNZXNzYWdlLFxyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IGxhc3RNZXNzYWdlLmNvbnRlbnQgKyB0ZXh0XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gcmVhZGVyLnJlYWQoKS50aGVuKHByb2Nlc3NUZXh0KVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9XHJcbiAgXHJcbiAgcmV0dXJuIDxCb3ggd2lkdGggPSBcIjEwMHZ3XCIgaGVpZ2h0PScxMDB2aCcgZGlzcGxheT0nZmxleCcgZmxleERpcmVjdGlvbj0nY29sdW1uJyBqdXN0aWZ5Q29udGVudD0nY2VudGVyJyBhbGlnbkl0ZW1zPSdjZW50ZXInPlxyXG4gICAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uID0gJ2NvbHVtbicgd2lkdGg9JzYwMHB4JyBoZWlnaHQ9JzcwMHB4JyBib3JkZXI9JzFweCBzb2xpZCBibGFjaycgcD17Mn0gc3BhY2luZz17M30+XHJcbiAgICAgICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbiA9J2NvbHVtbicgc3BhY2luZz17Mn0gZmxleEdyb3c9ezF9IG92ZXJmbG93ID0gJ2F1dG8nIG1heEhlaWdodCA9ICcxMDAlJz5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgbWVzc2FnZXMubWFwKChtZXNzYWdlLCBpbmRleCk9PihcclxuICAgICAgICAgICAgICAgICAgICA8Qm94IGtleSA9IHtpbmRleH0gZGlzcGxheSA9ICdmbGV4JyBqdXN0aWZ5Q29udGVudD17IG1lc3NhZ2Uucm9sZSA9PT0gJ2Fzc2lzdGFudCcgPyAnZmxleC1zdGFydCc6ICdmbGV4LWVuZCcgfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxCb3ggYmdjb2xvcj17IG1lc3NhZ2Uucm9sZSA9PT0gJ2Fzc2lzdGFudCcgPyAncHJpbWFyeS5tYWluJzogJ3NlY29uZGFyeS5tYWluJyB9IGNvbG9yPSd3aGl0ZScgYm9yZGVyUmFkaXVzPXsxNn0gcD17M30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHttZXNzYWdlLmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgICAgICAgIDxTdGFjayBkaXJlY3Rpb24gPSAncm93JyBzcGFjaW5nID0gezJ9PlxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZCBsYWJlbD0nbWVzc2FnZScgZnVsbFdpZHRoIHZhbHVlPXttZXNzYWdlfSBvbkNoYW5nZT17KGUpID0+IHNldE1lc3NhZ2UoZS50YXJnZXQudmFsdWUpfS8+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBvbkNsaWNrPXtzZW5kTWVzc2FnZX0+U2VuZDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgICA8L0JveD5cclxufVxyXG4iXSwibmFtZXMiOlsiQm94IiwiQnV0dG9uIiwiU3RhY2siLCJUZXh0RmllbGQiLCJ1c2VTdGF0ZSIsIkhvbWUiLCJtZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwicm9sZSIsImNvbnRlbnQiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsInNlbmRNZXNzYWdlIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXMiLCJyZWFkZXIiLCJnZXRSZWFkZXIiLCJkZWNvZGVyIiwiVGV4dERlY29kZXIiLCJyZXN1bHQiLCJyZWFkIiwicHJvY2Vzc1RleHQiLCJkb25lIiwidmFsdWUiLCJ0ZXh0IiwiZGVjb2RlIiwiSW50OEFycmF5Iiwic3RyZWFtIiwibGFzdE1lc3NhZ2UiLCJsZW5ndGgiLCJvdGhlck1lc3NhZ2VzIiwic2xpY2UiLCJ3aWR0aCIsImhlaWdodCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiZGlyZWN0aW9uIiwiYm9yZGVyIiwicCIsInNwYWNpbmciLCJmbGV4R3JvdyIsIm92ZXJmbG93IiwibWF4SGVpZ2h0IiwibWFwIiwiaW5kZXgiLCJiZ2NvbG9yIiwiY29sb3IiLCJib3JkZXJSYWRpdXMiLCJsYWJlbCIsImZ1bGxXaWR0aCIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhcmlhbnQiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});