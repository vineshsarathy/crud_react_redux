(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/addFrom.js":
/*!*******************************!*\
  !*** ./components/addFrom.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_reducers_crudSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/reducers/crudSlice */ "./redux/reducers/crudSlice.js");

var _jsxFileName = "F:\\reduxtoolkit\\toolkit\\components\\addFrom.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const AddFrom = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  const initial = {
    username: '',
    company: ''
  }; // const [data,setData] = useState(initialState);

  const {
    0: values,
    1: setValues
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initial);
  const {
    0: error,
    1: setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const usersAmount = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.crud.length);

  const handleSumbit = e => {
    e.preventDefault();
    const username = values.username;
    const company = values.company;

    if (values.username && values.company) {
      dispatch((0,_redux_reducers_crudSlice__WEBPACK_IMPORTED_MODULE_3__.userAdd)({
        id: usersAmount + 1,
        username,
        company
      }));
      console.log(values);
      console.log("success");
      setError(false);
    } else {
      setError(true);
    }

    setValues({
      username: '',
      company: ''
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "form-body",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: "ADD FORM"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 25
      }, undefined), error ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        style: {
          color: 'red'
        },
        children: "all Fileds required"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 32
      }, undefined) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
        onSubmit: handleSumbit,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "username",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
            children: "username"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 51
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 25
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "text",
          value: values.username,
          name: "username",
          onChange: e => setValues(_objectSpread(_objectSpread({}, values), {}, {
            username: e.target.value
          }))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 25
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "company",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
            children: "company"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 50
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 25
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "text",
          value: values.company,
          name: "company",
          onChange: e => setValues(_objectSpread(_objectSpread({}, values), {}, {
            company: e.target.value
          }))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 25
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "submit",
          value: "submit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 25
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 25
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 21
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (AddFrom);

/***/ }),

/***/ "./components/list.js":
/*!****************************!*\
  !*** ./components/list.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ List; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_reducers_crudSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/reducers/crudSlice */ "./redux/reducers/crudSlice.js");

var _jsxFileName = "F:\\reduxtoolkit\\toolkit\\components\\list.js";




function List() {
  const crud = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.crud);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();

  const handleDelete = id => {
    dispatch((0,_redux_reducers_crudSlice__WEBPACK_IMPORTED_MODULE_4__.userDelete)({
      id
    }));
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
      class: "u-full-width",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("thead", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
            children: "id"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 33
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
            children: "username"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 33
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
            children: "company"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 33
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
            children: "button"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 33
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 33
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 29
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
        children: crud.length === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "NO Data Found"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 45
        }, this) : crud.map(({
          id,
          username,
          company
        }, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: id
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 33
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: username
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 33
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: company
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 33
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
              href: `/${id}`,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                class: "button",
                children: "Edit"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 36,
                columnNumber: 37
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 37
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              class: "button button-primary",
              onClick: () => handleDelete({
                id
              }),
              children: "Delete"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 33
          }, this)]
        }, i, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 33
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 29
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 21
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_addFrom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/addFrom */ "./components/addFrom.js");
/* harmony import */ var _components_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/list */ "./components/list.js");

var _jsxFileName = "F:\\reduxtoolkit\\toolkit\\pages\\index.js";


function Home() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "row wrapper",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "three columns",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_addFrom__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 12
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "nine columns",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_list__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 12
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@reduxjs/toolkit");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","redux_reducers_crudSlice_js"], function() { return __webpack_exec__("./pages/index.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b29sa2l0Ly4vY29tcG9uZW50cy9hZGRGcm9tLmpzIiwid2VicGFjazovL3Rvb2xraXQvLi9jb21wb25lbnRzL2xpc3QuanMiLCJ3ZWJwYWNrOi8vdG9vbGtpdC8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL3Rvb2xraXQvZXh0ZXJuYWwgXCJAcmVkdXhqcy90b29sa2l0XCIiLCJ3ZWJwYWNrOi8vdG9vbGtpdC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly90b29sa2l0L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL3Rvb2xraXQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3Rvb2xraXQvZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL3Rvb2xraXQvZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovL3Rvb2xraXQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly90b29sa2l0L2lnbm9yZWR8RjpcXHJlZHV4dG9vbGtpdFxcdG9vbGtpdFxcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxuZXh0LXNlcnZlclxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbIkFkZEZyb20iLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiaW5pdGlhbCIsInVzZXJuYW1lIiwiY29tcGFueSIsInZhbHVlcyIsInNldFZhbHVlcyIsInVzZVN0YXRlIiwiZXJyb3IiLCJzZXRFcnJvciIsInVzZXJzQW1vdW50IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImNydWQiLCJsZW5ndGgiLCJoYW5kbGVTdW1iaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJ1c2VyQWRkIiwiaWQiLCJjb25zb2xlIiwibG9nIiwiY29sb3IiLCJ0YXJnZXQiLCJ2YWx1ZSIsIkxpc3QiLCJoYW5kbGVEZWxldGUiLCJ1c2VyRGVsZXRlIiwibWFwIiwiaSIsIkhvbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxPQUFPLEdBQUUsTUFBSztBQUNoQixRQUFNQyxRQUFRLEdBQUdDLHdEQUFXLEVBQTVCO0FBQ0UsUUFBTUMsT0FBTyxHQUFHO0FBQ2RDLFlBQVEsRUFBRSxFQURJO0FBRWRDLFdBQU8sRUFBRTtBQUZLLEdBQWhCLENBRmMsQ0FNaEI7O0FBQ0EsUUFBTTtBQUFBLE9BQUNDLE1BQUQ7QUFBQSxPQUFRQztBQUFSLE1BQXFCQywrQ0FBUSxDQUFDTCxPQUFELENBQW5DO0FBQ0EsUUFBTTtBQUFBLE9BQUNNLEtBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQW1CRiwrQ0FBUSxDQUFDLEtBQUQsQ0FBakM7QUFFQSxRQUFNRyxXQUFXLEdBQUdDLHdEQUFXLENBQUVDLEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxJQUFOLENBQVdDLE1BQXZCLENBQS9COztBQUVBLFFBQU1DLFlBQVksR0FBRUMsQ0FBRCxJQUFLO0FBQ3BCQSxLQUFDLENBQUNDLGNBQUY7QUFDQSxVQUFNZCxRQUFRLEdBQUVFLE1BQU0sQ0FBQ0YsUUFBdkI7QUFDQSxVQUFNQyxPQUFPLEdBQUVDLE1BQU0sQ0FBQ0QsT0FBdEI7O0FBQ0EsUUFBR0MsTUFBTSxDQUFDRixRQUFQLElBQW1CRSxNQUFNLENBQUNELE9BQTdCLEVBQXFDO0FBQ2pDSixjQUFRLENBQ0prQixrRUFBTyxDQUFDO0FBQ1JDLFVBQUUsRUFBRVQsV0FBVyxHQUFHLENBRFY7QUFFUlAsZ0JBRlE7QUFHUkM7QUFIUSxPQUFELENBREgsQ0FBUjtBQU1FZ0IsYUFBTyxDQUFDQyxHQUFSLENBQVloQixNQUFaO0FBQ0ZlLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVo7QUFDQVosY0FB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QUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBSUU7QUFBSyxtQkFBUyxFQUFDLGNBQWY7QUFBQSxpQ0FDQyw4REFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZ0JELEM7Ozs7Ozs7Ozs7O0FDcEJELDhDOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBLGlHOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7O0FDQUEsZSIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgdXNlckFkZCB9IGZyb20gJy4uL3JlZHV4L3JlZHVjZXJzL2NydWRTbGljZSdcclxuXHJcbmNvbnN0IEFkZEZyb20gPSgpPT4ge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcbiAgICAgIGNvbnN0IGluaXRpYWwgPSB7XHJcbiAgICAgICAgdXNlcm5hbWU6ICcnLFxyXG4gICAgICAgIGNvbXBhbnk6ICcnXHJcbiAgICAgIH07XHJcbiAgICAvLyBjb25zdCBbZGF0YSxzZXREYXRhXSA9IHVzZVN0YXRlKGluaXRpYWxTdGF0ZSk7XHJcbiAgICBjb25zdCBbdmFsdWVzLHNldFZhbHVlc10gPSB1c2VTdGF0ZShpbml0aWFsKTtcclxuICAgIGNvbnN0IFtlcnJvcixzZXRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgdXNlcnNBbW91bnQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmNydWQubGVuZ3RoKTtcclxuICAgIFxyXG4gICAgY29uc3QgaGFuZGxlU3VtYml0PShlKT0+e1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCB1c2VybmFtZT0gdmFsdWVzLnVzZXJuYW1lXHJcbiAgICAgICAgY29uc3QgY29tcGFueT0gdmFsdWVzLmNvbXBhbnlcclxuICAgICAgICBpZih2YWx1ZXMudXNlcm5hbWUgJiYgdmFsdWVzLmNvbXBhbnkpe1xyXG4gICAgICAgICAgICBkaXNwYXRjaChcclxuICAgICAgICAgICAgICAgIHVzZXJBZGQoe1xyXG4gICAgICAgICAgICAgICAgaWQ6IHVzZXJzQW1vdW50ICsgMSxcclxuICAgICAgICAgICAgICAgIHVzZXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgY29tcGFueSxcclxuICAgICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZXMpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3VjY2Vzc1wiKVxyXG4gICAgICAgICAgICBzZXRFcnJvcihmYWxzZSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgc2V0RXJyb3IodHJ1ZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0VmFsdWVzKHt1c2VybmFtZTogJycsXHJcbiAgICAgICAgY29tcGFueTogJyd9KVxyXG4gICAgXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+ICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5BREQgRk9STTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvcj88cCBzdHlsZT17e2NvbG9yOidyZWQnfX0+YWxsIEZpbGVkcyByZXF1aXJlZDwvcD46bnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1bWJpdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlcm5hbWVcIj48aDU+dXNlcm5hbWU8L2g1PjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLnVzZXJuYW1lfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VmFsdWVzKHsuLi52YWx1ZXMsIHVzZXJuYW1lOmUudGFyZ2V0LnZhbHVlfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY29tcGFueVwiPjxoNT5jb21wYW55PC9oNT48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5jb21wYW55fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNvbXBhbnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZT0+c2V0VmFsdWVzKHsuLi52YWx1ZXMsIGNvbXBhbnk6ZS50YXJnZXQudmFsdWV9KX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cInN1Ym1pdFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQWRkRnJvbSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyB1c2VTZWxlY3Rvcix1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQge3VzZXJEZWxldGV9IGZyb20gJy4uL3JlZHV4L3JlZHVjZXJzL2NydWRTbGljZSdcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMaXN0KCkge1xyXG4gICAgY29uc3QgY3J1ZCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuY3J1ZClcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG4gICAgY29uc3QgaGFuZGxlRGVsZXRlID0gKGlkKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2godXNlckRlbGV0ZSh7IGlkfSkpO1xyXG4gICAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgIDxkaXY+XHJcbiBcclxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ1LWZ1bGwtd2lkdGhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPmlkPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+dXNlcm5hbWU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5jb21wYW55PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+YnV0dG9uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NydWQubGVuZ3RoID09PSAwID88cD5OTyBEYXRhIEZvdW5kPC9wPiA6IGNydWQubWFwKCh7IGlkLCB1c2VybmFtZSwgY29tcGFueSB9LCBpKT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntpZH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57dXNlcm5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2NvbXBhbnl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rICBocmVmPXtgLyR7aWR9YH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImJ1dHRvblwiID5FZGl0PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBidXR0b24tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCk9PiBoYW5kbGVEZWxldGUoe2lkfSl9PkRlbGV0ZTwvYnV0dG9uPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCBBZGRGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvYWRkRnJvbSdcbmltcG9ydCBMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvbGlzdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgd3JhcHBlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGhyZWUgY29sdW1uc1wiPlxuICAgICAgICAgICA8QWRkRm9ybS8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuaW5lIGNvbHVtbnNcIj5cbiAgICAgICAgICAgPExpc3QvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgXG4gICAgICBcbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJlZHV4anMvdG9vbGtpdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9