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
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "twelve columns form-body",
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
          }, _this) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("form", {
            onSubmit: handleSumbit,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("label", {
              htmlFor: "username",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
                children: "username"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 51
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
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
              lineNumber: 47,
              columnNumber: 25
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("label", {
              htmlFor: "company",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
                children: "company"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 50
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
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
              lineNumber: 54,
              columnNumber: 25
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
              type: "submit",
              value: "submit"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZGRGcm9tLmpzIl0sIm5hbWVzIjpbIkFkZEZyb20iLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiaW5pdGlhbCIsInVzZXJuYW1lIiwiY29tcGFueSIsInVzZVN0YXRlIiwidmFsdWVzIiwic2V0VmFsdWVzIiwiZXJyb3IiLCJzZXRFcnJvciIsInVzZXJzQW1vdW50IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImNydWQiLCJsZW5ndGgiLCJoYW5kbGVTdW1iaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJ1c2VyQWRkIiwiaWQiLCJjb25zb2xlIiwibG9nIiwiY29sb3IiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFFLFNBQVRBLE9BQVMsR0FBSztBQUFBOztBQUNoQixNQUFNQyxRQUFRLEdBQUdDLHdEQUFXLEVBQTVCO0FBQ0UsTUFBTUMsT0FBTyxHQUFHO0FBQ2RDLFlBQVEsRUFBRSxFQURJO0FBRWRDLFdBQU8sRUFBRTtBQUZLLEdBQWhCLENBRmMsQ0FNaEI7O0FBTmdCLGtCQU9XQywrQ0FBUSxDQUFDSCxPQUFELENBUG5CO0FBQUEsTUFPVEksTUFQUztBQUFBLE1BT0ZDLFNBUEU7O0FBQUEsbUJBUVNGLCtDQUFRLENBQUMsS0FBRCxDQVJqQjtBQUFBLE1BUVRHLEtBUlM7QUFBQSxNQVFIQyxRQVJHOztBQVVoQixNQUFNQyxXQUFXLEdBQUdDLHdEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBTixDQUFXQyxNQUF0QjtBQUFBLEdBQUQsQ0FBL0I7O0FBRUEsTUFBTUMsWUFBWSxHQUFDLFNBQWJBLFlBQWEsQ0FBQ0MsQ0FBRCxFQUFLO0FBQ3BCQSxLQUFDLENBQUNDLGNBQUY7QUFDQSxRQUFNZCxRQUFRLEdBQUVHLE1BQU0sQ0FBQ0gsUUFBdkI7QUFDQSxRQUFNQyxPQUFPLEdBQUVFLE1BQU0sQ0FBQ0YsT0FBdEI7O0FBQ0EsUUFBR0UsTUFBTSxDQUFDSCxRQUFQLElBQW1CRyxNQUFNLENBQUNGLE9BQTdCLEVBQXFDO0FBQ2pDSixjQUFRLENBQ0prQixrRUFBTyxDQUFDO0FBQ1JDLFVBQUUsRUFBRVQsV0FBVyxHQUFHLENBRFY7QUFFUlAsZ0JBQVEsRUFBUkEsUUFGUTtBQUdSQyxlQUFPLEVBQVBBO0FBSFEsT0FBRCxDQURILENBQVI7QUFNRWdCLGFBQU8sQ0FBQ0MsR0FBUixDQUFZZixNQUFaO0FBQ0ZjLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVo7QUFDQVosY0FBUSxDQUFDLEtBQUQsQ0FBUjtBQUNILEtBVkQsTUFVSztBQUNEQSxjQUFRLENBQUMsSUFBRCxDQUFSO0FBQ0g7O0FBQ0RGLGFBQVMsQ0FBQztBQUFDSixjQUFRLEVBQUUsRUFBWDtBQUNWQyxhQUFPLEVBQUU7QUFEQyxLQUFELENBQVQ7QUFHSCxHQXBCRDs7QUFxQkEsc0JBQ0k7QUFBQSwyQkFDSTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsNkJBQ0k7QUFBSyxpQkFBUyxFQUFDLEtBQWY7QUFBQSwrQkFDSTtBQUFLLG1CQUFTLEVBQUMsMEJBQWY7QUFBQSxrQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixFQUVLSSxLQUFLLGdCQUFDO0FBQUcsaUJBQUssRUFBRTtBQUFDYyxtQkFBSyxFQUFDO0FBQVAsYUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBRCxHQUFrRCxJQUY1RCxlQUdJO0FBQU0sb0JBQVEsRUFBRVAsWUFBaEI7QUFBQSxvQ0FDQTtBQUFPLHFCQUFPLEVBQUMsVUFBZjtBQUFBLHFDQUEwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURBLGVBRUE7QUFDQSxrQkFBSSxFQUFDLE1BREw7QUFFQSxtQkFBSyxFQUFFVCxNQUFNLENBQUNILFFBRmQ7QUFHQSxrQkFBSSxFQUFDLFVBSEw7QUFJQSxzQkFBUSxFQUFFLGtCQUFDYSxDQUFEO0FBQUEsdUJBQU9ULFNBQVMsaUNBQUtELE1BQUw7QUFBYUgsMEJBQVEsRUFBQ2EsQ0FBQyxDQUFDTyxNQUFGLENBQVNDO0FBQS9CLG1CQUFoQjtBQUFBO0FBSlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGQSxlQVFBO0FBQU8scUJBQU8sRUFBQyxTQUFmO0FBQUEscUNBQXlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUkEsZUFTQTtBQUNBLGtCQUFJLEVBQUMsTUFETDtBQUVBLG1CQUFLLEVBQUVsQixNQUFNLENBQUNGLE9BRmQ7QUFHQSxrQkFBSSxFQUFDLFNBSEw7QUFJQSxzQkFBUSxFQUFFLGtCQUFBWSxDQUFDO0FBQUEsdUJBQUVULFNBQVMsaUNBQUtELE1BQUw7QUFBYUYseUJBQU8sRUFBQ1ksQ0FBQyxDQUFDTyxNQUFGLENBQVNDO0FBQTlCLG1CQUFYO0FBQUE7QUFKWDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVRBLGVBY0E7QUFBTyxrQkFBSSxFQUFDLFFBQVo7QUFBcUIsbUJBQUssRUFBQztBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQTZCSCxDQTlERDs7R0FBTXpCLE87VUFDZUUsb0QsRUFTR1Usb0Q7OztLQVZsQlosTztBQStETiwrREFBZUEsT0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40ODE4Y2Q3YWNjNjE5MDg0ZTAxMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyB1c2VyQWRkIH0gZnJvbSAnLi4vcmVkdXgvcmVkdWNlcnMvY3J1ZFNsaWNlJ1xyXG5cclxuY29uc3QgQWRkRnJvbSA9KCk9PiB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuICAgICAgY29uc3QgaW5pdGlhbCA9IHtcclxuICAgICAgICB1c2VybmFtZTogJycsXHJcbiAgICAgICAgY29tcGFueTogJydcclxuICAgICAgfTtcclxuICAgIC8vIGNvbnN0IFtkYXRhLHNldERhdGFdID0gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKTtcclxuICAgIGNvbnN0IFt2YWx1ZXMsc2V0VmFsdWVzXSA9IHVzZVN0YXRlKGluaXRpYWwpO1xyXG4gICAgY29uc3QgW2Vycm9yLHNldEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCB1c2Vyc0Ftb3VudCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuY3J1ZC5sZW5ndGgpO1xyXG4gICAgXHJcbiAgICBjb25zdCBoYW5kbGVTdW1iaXQ9KGUpPT57XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IHVzZXJuYW1lPSB2YWx1ZXMudXNlcm5hbWVcclxuICAgICAgICBjb25zdCBjb21wYW55PSB2YWx1ZXMuY29tcGFueVxyXG4gICAgICAgIGlmKHZhbHVlcy51c2VybmFtZSAmJiB2YWx1ZXMuY29tcGFueSl7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgICAgICAgICAgdXNlckFkZCh7XHJcbiAgICAgICAgICAgICAgICBpZDogdXNlcnNBbW91bnQgKyAxLFxyXG4gICAgICAgICAgICAgICAgdXNlcm5hbWUsXHJcbiAgICAgICAgICAgICAgICBjb21wYW55LFxyXG4gICAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbHVlcylcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdWNjZXNzXCIpXHJcbiAgICAgICAgICAgIHNldEVycm9yKGZhbHNlKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBzZXRFcnJvcih0cnVlKVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRWYWx1ZXMoe3VzZXJuYW1lOiAnJyxcclxuICAgICAgICBjb21wYW55OiAnJ30pXHJcbiAgICBcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0d2VsdmUgY29sdW1ucyBmb3JtLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkFERCBGT1JNPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9yPzxwIHN0eWxlPXt7Y29sb3I6J3JlZCd9fT5hbGwgRmlsZWRzIHJlcXVpcmVkPC9wPjpudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VtYml0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VybmFtZVwiPjxoMj51c2VybmFtZTwvaDI+PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMudXNlcm5hbWV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRWYWx1ZXMoey4uLnZhbHVlcywgdXNlcm5hbWU6ZS50YXJnZXQudmFsdWV9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb21wYW55XCI+PGgyPmNvbXBhbnk8L2gyPjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmNvbXBhbnl9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY29tcGFueVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlPT5zZXRWYWx1ZXMoey4uLnZhbHVlcywgY29tcGFueTplLnRhcmdldC52YWx1ZX0pfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwic3VibWl0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQWRkRnJvbSJdLCJzb3VyY2VSb290IjoiIn0=