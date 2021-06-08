self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/addFrom.js":
/*!*******************************!*\
  !*** ./components/addFrom.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var F_reduxtoolkit_toolkit_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_reducers_crudSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/reducers/crudSlice */ "./redux/reducers/crudSlice.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "F:\\reduxtoolkit\\toolkit\\components\\addFrom.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,F_reduxtoolkit_toolkit_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var AddFrom = function AddFrom() {
  _s();

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  var initial = {
    username: '',
    company: ''
  }; // const [data,setData] = useState(initialState);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(initial),
      values = _useState[0],
      setValues = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      error = _useState2[0],
      setError = _useState2[1];

  var usersAmount = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (state) {
    return state.crud.length;
  });

  var handleSumbit = function handleSumbit(e) {
    e.preventDefault();
    var username = values.username;
    var company = values.company;

    if (values.username && values.company) {
      dispatch((0,_redux_reducers_crudSlice__WEBPACK_IMPORTED_MODULE_4__.userAdd)({
        id: usersAmount + 1,
        username: username,
        company: company
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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "form-body",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
        children: "ADD FORM"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 25
      }, _this), error ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
        style: {
          color: 'red'
        },
        children: "all Fileds required"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 32
      }, _this) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("form", {
        onSubmit: handleSumbit,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("label", {
          htmlFor: "username",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h5", {
            children: "username"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 51
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 25
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
          type: "text",
          value: values.username,
          name: "username",
          onChange: function onChange(e) {
            return setValues(_objectSpread(_objectSpread({}, values), {}, {
              username: e.target.value
            }));
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 25
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("label", {
          htmlFor: "company",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h5", {
            children: "company"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 50
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 25
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
          type: "text",
          value: values.company,
          name: "company",
          onChange: function onChange(e) {
            return setValues(_objectSpread(_objectSpread({}, values), {}, {
              company: e.target.value
            }));
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 25
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
          type: "submit",
          value: "submit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 25
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 25
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 21
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 9
  }, _this);
};

_s(AddFrom, "apvZr+cOKALsE+Y3xjgk4jxh6zM=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch, react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector];
});

_c = AddFrom;
/* harmony default export */ __webpack_exports__["default"] = (AddFrom);

var _c;

$RefreshReg$(_c, "AddFrom");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/list.js":
/*!****************************!*\
  !*** ./components/list.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ List; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_reducers_crudSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/reducers/crudSlice */ "./redux/reducers/crudSlice.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "F:\\reduxtoolkit\\toolkit\\components\\list.js",
    _s = $RefreshSig$();





function List() {
  _s();

  var _this = this;

  var crud = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (state) {
    return state.crud;
  });
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();

  var handleDelete = function handleDelete(id) {
    dispatch((0,_redux_reducers_crudSlice__WEBPACK_IMPORTED_MODULE_4__.userDelete)({
      id: id
    }));
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
      "class": "u-full-width",
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
        children: crud.map(function (_ref, i) {
          var id = _ref.id,
              username = _ref.username,
              company = _ref.company;
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: id
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 33
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: username
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 33
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: company
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 33
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "/".concat(id),
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  "class": "button",
                  children: "Edit"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 36,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 35,
                columnNumber: 37
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                "class": "button button-primary",
                onClick: function onClick() {
                  return handleDelete({
                    id: id
                  });
                },
                children: "Delete"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 38,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 33
            }, _this)]
          }, i, true, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 33
          }, _this);
        })
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

_s(List, "1JqJvsnT11NzxCawIW7sMCRQ1gA=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch];
});

_c = List;

var _c;

$RefreshReg$(_c, "List");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZGRGcm9tLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xpc3QuanMiXSwibmFtZXMiOlsiQWRkRnJvbSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJpbml0aWFsIiwidXNlcm5hbWUiLCJjb21wYW55IiwidXNlU3RhdGUiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJlcnJvciIsInNldEVycm9yIiwidXNlcnNBbW91bnQiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiY3J1ZCIsImxlbmd0aCIsImhhbmRsZVN1bWJpdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInVzZXJBZGQiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJjb2xvciIsInRhcmdldCIsInZhbHVlIiwiTGlzdCIsImhhbmRsZURlbGV0ZSIsInVzZXJEZWxldGUiLCJtYXAiLCJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUUsU0FBVEEsT0FBUyxHQUFLO0FBQUE7O0FBQ2hCLE1BQU1DLFFBQVEsR0FBR0Msd0RBQVcsRUFBNUI7QUFDRSxNQUFNQyxPQUFPLEdBQUc7QUFDZEMsWUFBUSxFQUFFLEVBREk7QUFFZEMsV0FBTyxFQUFFO0FBRkssR0FBaEIsQ0FGYyxDQU1oQjs7QUFOZ0Isa0JBT1dDLCtDQUFRLENBQUNILE9BQUQsQ0FQbkI7QUFBQSxNQU9USSxNQVBTO0FBQUEsTUFPRkMsU0FQRTs7QUFBQSxtQkFRU0YsK0NBQVEsQ0FBQyxLQUFELENBUmpCO0FBQUEsTUFRVEcsS0FSUztBQUFBLE1BUUhDLFFBUkc7O0FBVWhCLE1BQU1DLFdBQVcsR0FBR0Msd0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFOLENBQVdDLE1BQXRCO0FBQUEsR0FBRCxDQUEvQjs7QUFFQSxNQUFNQyxZQUFZLEdBQUMsU0FBYkEsWUFBYSxDQUFDQyxDQUFELEVBQUs7QUFDcEJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBLFFBQU1kLFFBQVEsR0FBRUcsTUFBTSxDQUFDSCxRQUF2QjtBQUNBLFFBQU1DLE9BQU8sR0FBRUUsTUFBTSxDQUFDRixPQUF0Qjs7QUFDQSxRQUFHRSxNQUFNLENBQUNILFFBQVAsSUFBbUJHLE1BQU0sQ0FBQ0YsT0FBN0IsRUFBcUM7QUFDakNKLGNBQVEsQ0FDSmtCLGtFQUFPLENBQUM7QUFDUkMsVUFBRSxFQUFFVCxXQUFXLEdBQUcsQ0FEVjtBQUVSUCxnQkFBUSxFQUFSQSxRQUZRO0FBR1JDLGVBQU8sRUFBUEE7QUFIUSxPQUFELENBREgsQ0FBUjtBQU1FZ0IsYUFBTyxDQUFDQyxHQUFSLENBQVlmLE1BQVo7QUFDRmMsYUFBTyxDQUFDQyxHQUFSLENBQVksU0FBWjtBQUNBWixjQUFRLENBQUMsS0FBRCxDQUFSO0FBQ0gsS0FWRCxNQVVLO0FBQ0RBLGNBQVEsQ0FBQyxJQUFELENBQVI7QUFDSDs7QUFDREYsYUFBUyxDQUFDO0FBQUNKLGNBQVEsRUFBRSxFQUFYO0FBQ1ZDLGFBQU8sRUFBRTtBQURDLEtBQUQsQ0FBVDtBQUdILEdBcEJEOztBQXFCQSxzQkFDSTtBQUFBLDJCQUNZO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBQSw4QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLEVBRUtJLEtBQUssZ0JBQUM7QUFBRyxhQUFLLEVBQUU7QUFBQ2MsZUFBSyxFQUFDO0FBQVAsU0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFELEdBQWtELElBRjVELGVBR0k7QUFBTSxnQkFBUSxFQUFFUCxZQUFoQjtBQUFBLGdDQUNBO0FBQU8saUJBQU8sRUFBQyxVQUFmO0FBQUEsaUNBQTBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREEsZUFFQTtBQUNBLGNBQUksRUFBQyxNQURMO0FBRUEsZUFBSyxFQUFFVCxNQUFNLENBQUNILFFBRmQ7QUFHQSxjQUFJLEVBQUMsVUFITDtBQUlBLGtCQUFRLEVBQUUsa0JBQUNhLENBQUQ7QUFBQSxtQkFBT1QsU0FBUyxpQ0FBS0QsTUFBTDtBQUFhSCxzQkFBUSxFQUFDYSxDQUFDLENBQUNPLE1BQUYsQ0FBU0M7QUFBL0IsZUFBaEI7QUFBQTtBQUpWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkEsZUFRQTtBQUFPLGlCQUFPLEVBQUMsU0FBZjtBQUFBLGlDQUF5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVJBLGVBU0E7QUFDQSxjQUFJLEVBQUMsTUFETDtBQUVBLGVBQUssRUFBRWxCLE1BQU0sQ0FBQ0YsT0FGZDtBQUdBLGNBQUksRUFBQyxTQUhMO0FBSUEsa0JBQVEsRUFBRSxrQkFBQVksQ0FBQztBQUFBLG1CQUFFVCxTQUFTLGlDQUFLRCxNQUFMO0FBQWFGLHFCQUFPLEVBQUNZLENBQUMsQ0FBQ08sTUFBRixDQUFTQztBQUE5QixlQUFYO0FBQUE7QUFKWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVRBLGVBY0E7QUFBTyxjQUFJLEVBQUMsUUFBWjtBQUFxQixlQUFLLEVBQUM7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFkQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUF5QkgsQ0ExREQ7O0dBQU16QixPO1VBQ2VFLG9ELEVBU0dVLG9EOzs7S0FWbEJaLE87QUEyRE4sK0RBQWVBLE9BQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0RBO0FBQ0E7QUFDQTtBQUNBO0FBR2UsU0FBUzBCLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTs7QUFDM0IsTUFBTVosSUFBSSxHQUFHRix3REFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQWpCO0FBQUEsR0FBRCxDQUF4QjtBQUNBLE1BQU1iLFFBQVEsR0FBR0Msd0RBQVcsRUFBNUI7O0FBQ0EsTUFBTXlCLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNQLEVBQUQsRUFBUTtBQUN6Qm5CLFlBQVEsQ0FBQzJCLHFFQUFVLENBQUM7QUFBRVIsUUFBRSxFQUFGQTtBQUFGLEtBQUQsQ0FBWCxDQUFSO0FBQ0QsR0FGSDs7QUFJQSxzQkFFSTtBQUFBLDJCQUVZO0FBQU8sZUFBTSxjQUFiO0FBQUEsOEJBQ1E7QUFBQSwrQkFDSTtBQUFBLGtDQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURBLGVBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkEsZUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFIQSxlQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEUixlQVNRO0FBQUEsa0JBQ0hOLElBQUksQ0FBQ2UsR0FBTCxDQUFTLGdCQUE0QkMsQ0FBNUI7QUFBQSxjQUFHVixFQUFILFFBQUdBLEVBQUg7QUFBQSxjQUFPaEIsUUFBUCxRQUFPQSxRQUFQO0FBQUEsY0FBaUJDLE9BQWpCLFFBQWlCQSxPQUFqQjtBQUFBLDhCQUVGO0FBQUEsb0NBQ0E7QUFBQSx3QkFBS2U7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURBLGVBRUE7QUFBQSx3QkFBS2hCO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGQSxlQUdBO0FBQUEsd0JBQUtDO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFIQSxlQUlBO0FBQUEsc0NBQ0ksOERBQUMsa0RBQUQ7QUFBTyxvQkFBSSxhQUFNZSxFQUFOLENBQVg7QUFBQSx1Q0FDQTtBQUFHLDJCQUFNLFFBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLGVBSUE7QUFBUSx5QkFBTSx1QkFBZDtBQUNBLHVCQUFPLEVBQUU7QUFBQSx5QkFBS08sWUFBWSxDQUFDO0FBQUNQLHNCQUFFLEVBQUZBO0FBQUQsbUJBQUQsQ0FBakI7QUFBQSxpQkFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkE7QUFBQSxhQUFTVSxDQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkU7QUFBQSxTQUFUO0FBREc7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVRSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFGSjtBQW9DSDs7R0EzQ3VCSixJO1VBQ1BkLG9ELEVBQ0lWLG9EOzs7S0FGR3dCLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDQ5NDU3ZjMyMjRkNThlNDA1Y2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgdXNlckFkZCB9IGZyb20gJy4uL3JlZHV4L3JlZHVjZXJzL2NydWRTbGljZSdcclxuXHJcbmNvbnN0IEFkZEZyb20gPSgpPT4ge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcbiAgICAgIGNvbnN0IGluaXRpYWwgPSB7XHJcbiAgICAgICAgdXNlcm5hbWU6ICcnLFxyXG4gICAgICAgIGNvbXBhbnk6ICcnXHJcbiAgICAgIH07XHJcbiAgICAvLyBjb25zdCBbZGF0YSxzZXREYXRhXSA9IHVzZVN0YXRlKGluaXRpYWxTdGF0ZSk7XHJcbiAgICBjb25zdCBbdmFsdWVzLHNldFZhbHVlc10gPSB1c2VTdGF0ZShpbml0aWFsKTtcclxuICAgIGNvbnN0IFtlcnJvcixzZXRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgdXNlcnNBbW91bnQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmNydWQubGVuZ3RoKTtcclxuICAgIFxyXG4gICAgY29uc3QgaGFuZGxlU3VtYml0PShlKT0+e1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCB1c2VybmFtZT0gdmFsdWVzLnVzZXJuYW1lXHJcbiAgICAgICAgY29uc3QgY29tcGFueT0gdmFsdWVzLmNvbXBhbnlcclxuICAgICAgICBpZih2YWx1ZXMudXNlcm5hbWUgJiYgdmFsdWVzLmNvbXBhbnkpe1xyXG4gICAgICAgICAgICBkaXNwYXRjaChcclxuICAgICAgICAgICAgICAgIHVzZXJBZGQoe1xyXG4gICAgICAgICAgICAgICAgaWQ6IHVzZXJzQW1vdW50ICsgMSxcclxuICAgICAgICAgICAgICAgIHVzZXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgY29tcGFueSxcclxuICAgICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZXMpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3VjY2Vzc1wiKVxyXG4gICAgICAgICAgICBzZXRFcnJvcihmYWxzZSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgc2V0RXJyb3IodHJ1ZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0VmFsdWVzKHt1c2VybmFtZTogJycsXHJcbiAgICAgICAgY29tcGFueTogJyd9KVxyXG4gICAgXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+ICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5BREQgRk9STTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvcj88cCBzdHlsZT17e2NvbG9yOidyZWQnfX0+YWxsIEZpbGVkcyByZXF1aXJlZDwvcD46bnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1bWJpdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlcm5hbWVcIj48aDU+dXNlcm5hbWU8L2g1PjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLnVzZXJuYW1lfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VmFsdWVzKHsuLi52YWx1ZXMsIHVzZXJuYW1lOmUudGFyZ2V0LnZhbHVlfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY29tcGFueVwiPjxoNT5jb21wYW55PC9oNT48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5jb21wYW55fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNvbXBhbnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZT0+c2V0VmFsdWVzKHsuLi52YWx1ZXMsIGNvbXBhbnk6ZS50YXJnZXQudmFsdWV9KX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cInN1Ym1pdFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQWRkRnJvbSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyB1c2VTZWxlY3Rvcix1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQge3VzZXJEZWxldGV9IGZyb20gJy4uL3JlZHV4L3JlZHVjZXJzL2NydWRTbGljZSdcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMaXN0KCkge1xyXG4gICAgY29uc3QgY3J1ZCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuY3J1ZClcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG4gICAgY29uc3QgaGFuZGxlRGVsZXRlID0gKGlkKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2godXNlckRlbGV0ZSh7IGlkfSkpO1xyXG4gICAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgIDxkaXY+XHJcbiBcclxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ1LWZ1bGwtd2lkdGhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPmlkPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+dXNlcm5hbWU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5jb21wYW55PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+YnV0dG9uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NydWQubWFwKCh7IGlkLCB1c2VybmFtZSwgY29tcGFueSB9LCBpKT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntpZH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57dXNlcm5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2NvbXBhbnl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rICBocmVmPXtgLyR7aWR9YH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImJ1dHRvblwiID5FZGl0PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBidXR0b24tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCk9PiBoYW5kbGVEZWxldGUoe2lkfSl9PkRlbGV0ZTwvYnV0dG9uPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=