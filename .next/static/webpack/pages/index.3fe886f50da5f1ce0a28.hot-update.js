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
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "row",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "three columns form-head",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
            children: "ADD FORM"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 25
          }, _this), error ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
            style: {
              color: 'red'
            },
            children: "all Fileds required"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 32
          }, _this) : null]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "nine columns form-body",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("form", {
            onSubmit: handleSumbit,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("label", {
              htmlFor: "username",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
                children: "username"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 51
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
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
              lineNumber: 51,
              columnNumber: 25
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("label", {
              htmlFor: "company",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
                children: "company"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 50
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
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
              lineNumber: 58,
              columnNumber: 25
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
              type: "submit",
              value: "submit"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZGRGcm9tLmpzIl0sIm5hbWVzIjpbIkFkZEZyb20iLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiaW5pdGlhbCIsInVzZXJuYW1lIiwiY29tcGFueSIsInVzZVN0YXRlIiwidmFsdWVzIiwic2V0VmFsdWVzIiwiZXJyb3IiLCJzZXRFcnJvciIsInVzZXJzQW1vdW50IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImNydWQiLCJsZW5ndGgiLCJoYW5kbGVTdW1iaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJ1c2VyQWRkIiwiaWQiLCJjb25zb2xlIiwibG9nIiwiY29sb3IiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFFLFNBQVRBLE9BQVMsR0FBSztBQUFBOztBQUNoQixNQUFNQyxRQUFRLEdBQUdDLHdEQUFXLEVBQTVCO0FBQ0UsTUFBTUMsT0FBTyxHQUFHO0FBQ2RDLFlBQVEsRUFBRSxFQURJO0FBRWRDLFdBQU8sRUFBRTtBQUZLLEdBQWhCLENBRmMsQ0FNaEI7O0FBTmdCLGtCQU9XQywrQ0FBUSxDQUFDSCxPQUFELENBUG5CO0FBQUEsTUFPVEksTUFQUztBQUFBLE1BT0ZDLFNBUEU7O0FBQUEsbUJBUVNGLCtDQUFRLENBQUMsS0FBRCxDQVJqQjtBQUFBLE1BUVRHLEtBUlM7QUFBQSxNQVFIQyxRQVJHOztBQVVoQixNQUFNQyxXQUFXLEdBQUdDLHdEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBTixDQUFXQyxNQUF0QjtBQUFBLEdBQUQsQ0FBL0I7O0FBRUEsTUFBTUMsWUFBWSxHQUFDLFNBQWJBLFlBQWEsQ0FBQ0MsQ0FBRCxFQUFLO0FBQ3BCQSxLQUFDLENBQUNDLGNBQUY7QUFDQSxRQUFNZCxRQUFRLEdBQUVHLE1BQU0sQ0FBQ0gsUUFBdkI7QUFDQSxRQUFNQyxPQUFPLEdBQUVFLE1BQU0sQ0FBQ0YsT0FBdEI7O0FBQ0EsUUFBR0UsTUFBTSxDQUFDSCxRQUFQLElBQW1CRyxNQUFNLENBQUNGLE9BQTdCLEVBQXFDO0FBQ2pDSixjQUFRLENBQ0prQixrRUFBTyxDQUFDO0FBQ1JDLFVBQUUsRUFBRVQsV0FBVyxHQUFHLENBRFY7QUFFUlAsZ0JBQVEsRUFBUkEsUUFGUTtBQUdSQyxlQUFPLEVBQVBBO0FBSFEsT0FBRCxDQURILENBQVI7QUFNRWdCLGFBQU8sQ0FBQ0MsR0FBUixDQUFZZixNQUFaO0FBQ0ZjLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVo7QUFDQVosY0FBUSxDQUFDLEtBQUQsQ0FBUjtBQUNILEtBVkQsTUFVSztBQUNEQSxjQUFRLENBQUMsSUFBRCxDQUFSO0FBQ0g7O0FBQ0RGLGFBQVMsQ0FBQztBQUFDSixjQUFRLEVBQUUsRUFBWDtBQUNWQyxhQUFPLEVBQUU7QUFEQyxLQUFELENBQVQ7QUFHSCxHQXBCRDs7QUFxQkEsc0JBQ0k7QUFBQSwyQkFDSTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsNkJBQ0k7QUFBSyxpQkFBUyxFQUFDLEtBQWY7QUFBQSxnQ0FDSTtBQUFLLG1CQUFTLEVBQUMseUJBQWY7QUFBQSxrQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixFQUVLSSxLQUFLLGdCQUFDO0FBQUcsaUJBQUssRUFBRTtBQUFDYyxtQkFBSyxFQUFDO0FBQVAsYUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBRCxHQUFrRCxJQUY1RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFPSTtBQUFLLG1CQUFTLEVBQUMsd0JBQWY7QUFBQSxpQ0FDSTtBQUFNLG9CQUFRLEVBQUVQLFlBQWhCO0FBQUEsb0NBQ0E7QUFBTyxxQkFBTyxFQUFDLFVBQWY7QUFBQSxxQ0FBMEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEQSxlQUVBO0FBQ0Esa0JBQUksRUFBQyxNQURMO0FBRUEsbUJBQUssRUFBRVQsTUFBTSxDQUFDSCxRQUZkO0FBR0Esa0JBQUksRUFBQyxVQUhMO0FBSUEsc0JBQVEsRUFBRSxrQkFBQ2EsQ0FBRDtBQUFBLHVCQUFPVCxTQUFTLGlDQUFLRCxNQUFMO0FBQWFILDBCQUFRLEVBQUNhLENBQUMsQ0FBQ08sTUFBRixDQUFTQztBQUEvQixtQkFBaEI7QUFBQTtBQUpWO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkEsZUFRQTtBQUFPLHFCQUFPLEVBQUMsU0FBZjtBQUFBLHFDQUF5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVJBLGVBU0E7QUFDQSxrQkFBSSxFQUFDLE1BREw7QUFFQSxtQkFBSyxFQUFFbEIsTUFBTSxDQUFDRixPQUZkO0FBR0Esa0JBQUksRUFBQyxTQUhMO0FBSUEsc0JBQVEsRUFBRSxrQkFBQVksQ0FBQztBQUFBLHVCQUFFVCxTQUFTLGlDQUFLRCxNQUFMO0FBQWFGLHlCQUFPLEVBQUNZLENBQUMsQ0FBQ08sTUFBRixDQUFTQztBQUE5QixtQkFBWDtBQUFBO0FBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFUQSxlQWNBO0FBQU8sa0JBQUksRUFBQyxRQUFaO0FBQXFCLG1CQUFLLEVBQUM7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFkQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFpQ0gsQ0FsRUQ7O0dBQU16QixPO1VBQ2VFLG9ELEVBU0dVLG9EOzs7S0FWbEJaLE87QUFtRU4sK0RBQWVBLE9BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguM2ZlODg2ZjUwZGE1ZjFjZTBhMjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgdXNlckFkZCB9IGZyb20gJy4uL3JlZHV4L3JlZHVjZXJzL2NydWRTbGljZSdcclxuXHJcbmNvbnN0IEFkZEZyb20gPSgpPT4ge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcbiAgICAgIGNvbnN0IGluaXRpYWwgPSB7XHJcbiAgICAgICAgdXNlcm5hbWU6ICcnLFxyXG4gICAgICAgIGNvbXBhbnk6ICcnXHJcbiAgICAgIH07XHJcbiAgICAvLyBjb25zdCBbZGF0YSxzZXREYXRhXSA9IHVzZVN0YXRlKGluaXRpYWxTdGF0ZSk7XHJcbiAgICBjb25zdCBbdmFsdWVzLHNldFZhbHVlc10gPSB1c2VTdGF0ZShpbml0aWFsKTtcclxuICAgIGNvbnN0IFtlcnJvcixzZXRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgdXNlcnNBbW91bnQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmNydWQubGVuZ3RoKTtcclxuICAgIFxyXG4gICAgY29uc3QgaGFuZGxlU3VtYml0PShlKT0+e1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCB1c2VybmFtZT0gdmFsdWVzLnVzZXJuYW1lXHJcbiAgICAgICAgY29uc3QgY29tcGFueT0gdmFsdWVzLmNvbXBhbnlcclxuICAgICAgICBpZih2YWx1ZXMudXNlcm5hbWUgJiYgdmFsdWVzLmNvbXBhbnkpe1xyXG4gICAgICAgICAgICBkaXNwYXRjaChcclxuICAgICAgICAgICAgICAgIHVzZXJBZGQoe1xyXG4gICAgICAgICAgICAgICAgaWQ6IHVzZXJzQW1vdW50ICsgMSxcclxuICAgICAgICAgICAgICAgIHVzZXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgY29tcGFueSxcclxuICAgICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZXMpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3VjY2Vzc1wiKVxyXG4gICAgICAgICAgICBzZXRFcnJvcihmYWxzZSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgc2V0RXJyb3IodHJ1ZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0VmFsdWVzKHt1c2VybmFtZTogJycsXHJcbiAgICAgICAgY29tcGFueTogJyd9KVxyXG4gICAgXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGhyZWUgY29sdW1ucyBmb3JtLWhlYWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkFERCBGT1JNPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9yPzxwIHN0eWxlPXt7Y29sb3I6J3JlZCd9fT5hbGwgRmlsZWRzIHJlcXVpcmVkPC9wPjpudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuaW5lIGNvbHVtbnMgZm9ybS1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdW1iaXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXJuYW1lXCI+PGgyPnVzZXJuYW1lPC9oMj48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy51c2VybmFtZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFZhbHVlcyh7Li4udmFsdWVzLCB1c2VybmFtZTplLnRhcmdldC52YWx1ZX0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNvbXBhbnlcIj48aDI+Y29tcGFueTwvaDI+PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuY29tcGFueX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjb21wYW55XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2U9PnNldFZhbHVlcyh7Li4udmFsdWVzLCBjb21wYW55OmUudGFyZ2V0LnZhbHVlfSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJzdWJtaXRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBBZGRGcm9tIl0sInNvdXJjZVJvb3QiOiIifQ==