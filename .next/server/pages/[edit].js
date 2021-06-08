(function() {
var exports = {};
exports.id = "pages/[edit]";
exports.ids = ["pages/[edit]"];
exports.modules = {

/***/ "./pages/[edit].js":
/*!*************************!*\
  !*** ./pages/[edit].js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_reducers_crudSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/reducers/crudSlice */ "./redux/reducers/crudSlice.js");

var _jsxFileName = "F:\\reduxtoolkit\\toolkit\\pages\\[edit].js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function Edit() {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const ids = router.query.edit;
  const crud = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.crud.find(user => user.id === +ids));
  let stateuser = crud.username;
  let statecompany = crud.company;
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  const {
    0: error,
    1: setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: data,
    1: setData
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    username: stateuser,
    company: statecompany
  });

  const handleSubmit = e => {
    e.preventDefault();
    const username = data.username;
    const company = data.company;
    console.log(data);

    if (username && company) {
      dispatch((0,_redux_reducers_crudSlice__WEBPACK_IMPORTED_MODULE_4__.userUpdate)({
        id: +ids,
        username,
        company
      }));
      router.push('/');
      setError(false);
    } else {
      setError(true);
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "row",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "three columns",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
            children: "Edit FORM"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 25
          }, this), error ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            style: {
              color: 'red'
            },
            children: "all Fileds required"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 32
          }, this) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
            onSubmit: handleSubmit,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "username",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                children: "username"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 51
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              type: "text",
              value: data.username,
              name: "username",
              onChange: e => setData(_objectSpread(_objectSpread({}, data), {}, {
                username: e.target.value
              }))
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "company",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                children: "company"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 50
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              type: "text",
              value: data.company,
              name: "company",
              onChange: e => setData(_objectSpread(_objectSpread({}, data), {}, {
                company: e.target.value
              }))
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              type: "button",
              value: "back",
              onClick: () => router.push('/')
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              type: "submit",
              value: "submit"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 20
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 20
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 16
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 12
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 9
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

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["redux_reducers_crudSlice_js"], function() { return __webpack_exec__("./pages/[edit].js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b29sa2l0Ly4vcGFnZXMvW2VkaXRdLmpzIiwid2VicGFjazovL3Rvb2xraXQvZXh0ZXJuYWwgXCJAcmVkdXhqcy90b29sa2l0XCIiLCJ3ZWJwYWNrOi8vdG9vbGtpdC9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vdG9vbGtpdC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vdG9vbGtpdC9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vdG9vbGtpdC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkVkaXQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZHMiLCJxdWVyeSIsImVkaXQiLCJjcnVkIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImZpbmQiLCJ1c2VyIiwiaWQiLCJzdGF0ZXVzZXIiLCJ1c2VybmFtZSIsInN0YXRlY29tcGFueSIsImNvbXBhbnkiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiZXJyb3IiLCJzZXRFcnJvciIsInVzZVN0YXRlIiwiZGF0YSIsInNldERhdGEiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwidXNlclVwZGF0ZSIsInB1c2giLCJjb2xvciIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUMzQixRQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBQ0EsUUFBTUMsR0FBRyxHQUFHRixNQUFNLENBQUNHLEtBQVAsQ0FBYUMsSUFBekI7QUFDQSxRQUFNQyxJQUFJLEdBQUdDLHdEQUFXLENBQUVDLEtBQUQsSUFBVUEsS0FBSyxDQUFDRixJQUFOLENBQVdHLElBQVgsQ0FBaUJDLElBQUQsSUFBVUEsSUFBSSxDQUFDQyxFQUFM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UUFBWjtBQUFxQixtQkFBSyxFQUFDO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBZkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBNkJILEM7Ozs7Ozs7Ozs7O0FDbkVELDhDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL1tlZGl0XS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHVzZXJVcGRhdGUgfSBmcm9tICcuLi9yZWR1eC9yZWR1Y2Vycy9jcnVkU2xpY2UnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFZGl0KCkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBpZHMgPSByb3V0ZXIucXVlcnkuZWRpdDtcclxuICAgIGNvbnN0IGNydWQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+c3RhdGUuY3J1ZC5maW5kKCh1c2VyKSA9PiB1c2VyLmlkID09PSAraWRzKSk7XHJcbiAgICBsZXQgc3RhdGV1c2VyID0gY3J1ZC51c2VybmFtZVxyXG4gICAgbGV0IHN0YXRlY29tcGFueSA9IGNydWQuY29tcGFueVxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPXVzZURpc3BhdGNoKCk7XHJcblxyXG5cclxuICAgIGNvbnN0IFtlcnJvcixzZXRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZGF0YSxzZXREYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICB1c2VybmFtZTogc3RhdGV1c2VyLFxyXG4gICAgICAgIGNvbXBhbnk6IHN0YXRlY29tcGFueVxyXG4gICAgfSlcclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdD0oZSk9PntcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgdXNlcm5hbWU9IGRhdGEudXNlcm5hbWVcclxuICAgICAgICBjb25zdCBjb21wYW55PSBkYXRhLmNvbXBhbnlcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICBpZih1c2VybmFtZSAmJiBjb21wYW55KXtcclxuICAgICAgICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgICAgICAgICB1c2VyVXBkYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogK2lkcyxcclxuICAgICAgICAgICAgICAgICAgICB1c2VybmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBjb21wYW55LFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnLycpXHJcbiAgICAgICAgICAgIHNldEVycm9yKGZhbHNlKVxyXG4gICAgICAgIH1lbHNle3NldEVycm9yKHRydWUpfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGhyZWUgY29sdW1uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+RWRpdCBGT1JNPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9yPzxwIHN0eWxlPXt7Y29sb3I6J3JlZCd9fT5hbGwgRmlsZWRzIHJlcXVpcmVkPC9wPjpudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlcm5hbWVcIj48aDI+dXNlcm5hbWU8L2gyPjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YS51c2VybmFtZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldERhdGEoey4uLmRhdGEsIHVzZXJuYW1lOmUudGFyZ2V0LnZhbHVlfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY29tcGFueVwiPjxoMj5jb21wYW55PC9oMj48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGEuY29tcGFueX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjb21wYW55XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2U9PnNldERhdGEoey4uLmRhdGEsIGNvbXBhbnk6ZS50YXJnZXQudmFsdWV9KX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cImJhY2tcIiBvbkNsaWNrPXsoKT0+KHJvdXRlci5wdXNoKCcvJykpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwic3VibWl0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByZWR1eGpzL3Rvb2xraXRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==