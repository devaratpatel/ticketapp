"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"b0ae202297d7\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzPzRiODQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJiMGFlMjAyMjk3ZDdcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/ToggleMode.tsx":
/*!***********************************!*\
  !*** ./components/ToggleMode.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Moon_Sun_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Moon,Sun!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/sun.js\");\n/* harmony import */ var _barrel_optimize_names_Moon_Sun_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Moon,Sun!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/moon.js\");\n/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst ToggleMode = ()=>{\n    _s();\n    const { theme, setTheme } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [mounted, setMounted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setMounted(true);\n    }, []);\n    if (!mounted) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n            variant: \"outline\",\n            size: \"icon\",\n            disabled: true\n        }, void 0, false, {\n            fileName: \"/Users/devaratpatel/Desktop/ticketapp/components/ToggleMode.tsx\",\n            lineNumber: 17,\n            columnNumber: 12\n        }, undefined);\n    }\n    const dark = theme === \"dark\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n        variant: \"outline\",\n        size: \"icon\",\n        onClick: ()=>setTheme(\"\".concat(dark ? \"light\" : \"dark\")),\n        children: dark ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Moon_Sun_lucide_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            className: \"hover:cursor-pointer hover:text-primary\"\n        }, void 0, false, {\n            fileName: \"/Users/devaratpatel/Desktop/ticketapp/components/ToggleMode.tsx\",\n            lineNumber: 24,\n            columnNumber: 15\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Moon_Sun_lucide_react__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            className: \"hover:cursor-pointer hover:text-primary\"\n        }, void 0, false, {\n            fileName: \"/Users/devaratpatel/Desktop/ticketapp/components/ToggleMode.tsx\",\n            lineNumber: 24,\n            columnNumber: 77\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/devaratpatel/Desktop/ticketapp/components/ToggleMode.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ToggleMode, \"6mP48bh2OsgStU7v0PHqs05jTSk=\");\n_c = ToggleMode;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ToggleMode);\nvar _c;\n$RefreshReg$(_c, \"ToggleMode\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvVG9nZ2xlTW9kZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRTRDO0FBRUg7QUFDSjtBQUVyQyxNQUFNSyxhQUFhOztJQUNqQixNQUFNLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFLEdBQUdQLCtDQUFRQTtJQUNwQyxNQUFNLENBQUNRLFNBQVNDLFdBQVcsR0FBR1QsK0NBQVFBLENBQUM7SUFFdkNDLGdEQUFTQSxDQUFDO1FBQ1JRLFdBQVc7SUFDYixHQUFHLEVBQUU7SUFFTCxJQUFJLENBQUNELFNBQVM7UUFDWixxQkFBTyw4REFBQ0osOENBQU1BO1lBQUNNLFNBQVE7WUFBVUMsTUFBSztZQUFPQyxVQUFVOzs7Ozs7SUFDekQ7SUFFQSxNQUFNQyxPQUFPUCxVQUFVO0lBRXZCLHFCQUNFLDhEQUFDRiw4Q0FBTUE7UUFBQ00sU0FBUTtRQUFVQyxNQUFLO1FBQU9HLFNBQVMsSUFBTVAsU0FBUyxHQUEyQixPQUF4Qk0sT0FBTyxVQUFVO2tCQUMvRUEscUJBQU8sOERBQUNWLG9GQUFHQTtZQUFDWSxXQUFVOzs7OztzQ0FBK0MsOERBQUNiLG9GQUFJQTtZQUFDYSxXQUFVOzs7Ozs7Ozs7OztBQUc1RjtHQW5CTVY7S0FBQUE7QUFxQk4sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ub2dnbGVNb2RlLnRzeD9lODA5Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnbmV4dC10aGVtZXMnO1xuaW1wb3J0IHsgTW9vbiwgU3VuIH0gZnJvbSAnbHVjaWRlLXJlYWN0JztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4vdWkvYnV0dG9uJztcblxuY29uc3QgVG9nZ2xlTW9kZSA9ICgpID0+IHtcbiAgY29uc3QgeyB0aGVtZSwgc2V0VGhlbWUgfSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFttb3VudGVkLCBzZXRNb3VudGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldE1vdW50ZWQodHJ1ZSk7XG4gIH0sIFtdKTtcblxuICBpZiAoIW1vdW50ZWQpIHtcbiAgICByZXR1cm4gPEJ1dHRvbiB2YXJpYW50PSdvdXRsaW5lJyBzaXplPSdpY29uJyBkaXNhYmxlZD17dHJ1ZX0+PC9CdXR0b24+O1xuICB9XG5cbiAgY29uc3QgZGFyayA9IHRoZW1lID09PSAnZGFyayc7XG5cbiAgcmV0dXJuIChcbiAgICA8QnV0dG9uIHZhcmlhbnQ9J291dGxpbmUnIHNpemU9J2ljb24nIG9uQ2xpY2s9eygpID0+IHNldFRoZW1lKGAke2RhcmsgPyAnbGlnaHQnIDogJ2RhcmsnfWApfT5cbiAgICAgIHtkYXJrID8gPFN1biBjbGFzc05hbWU9J2hvdmVyOmN1cnNvci1wb2ludGVyIGhvdmVyOnRleHQtcHJpbWFyeScgLz4gOiA8TW9vbiBjbGFzc05hbWU9J2hvdmVyOmN1cnNvci1wb2ludGVyIGhvdmVyOnRleHQtcHJpbWFyeScgLz59XG4gICAgPC9CdXR0b24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb2dnbGVNb2RlO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTW9vbiIsIlN1biIsIkJ1dHRvbiIsIlRvZ2dsZU1vZGUiLCJ0aGVtZSIsInNldFRoZW1lIiwibW91bnRlZCIsInNldE1vdW50ZWQiLCJ2YXJpYW50Iiwic2l6ZSIsImRpc2FibGVkIiwiZGFyayIsIm9uQ2xpY2siLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ToggleMode.tsx\n"));

/***/ })

});