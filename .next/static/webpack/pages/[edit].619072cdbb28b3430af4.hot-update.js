self["webpackHotUpdate_N_E"]("pages/[edit]",{

/***/ "./pages/[edit].js":
/*!*************************!*\
  !*** ./pages/[edit].js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var F_reduxtoolkit_toolkit_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_reducers_crudSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/reducers/crudSlice */ "./redux/reducers/crudSlice.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "F:\\reduxtoolkit\\toolkit\\pages\\[edit].js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,F_reduxtoolkit_toolkit_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





function Edit() {
  _s();

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  var ids = router.query.edit;
  var crud = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (state) {
    return state.crud.find(function (user) {
      return user.id === +ids;
    });
  });
  var stateuser = crud.username;
  var statecompany = crud.company;
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      error = _useState[0],
      setError = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    username: stateuser,
    company: statecompany
  }),
      data = _useState2[0],
      setData = _useState2[1];

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    var username = data.username;
    var company = data.company;
    console.log(data);

    if (data) {
      dispatch((0,_redux_reducers_crudSlice__WEBPACK_IMPORTED_MODULE_5__.userUpdate)({
        id: +ids,
        username: username,
        company: company
      }));
      router.push('/');
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "row",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "three columns",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
            children: "ADD FORM"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 25
          }, this), error ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
            style: {
              color: 'red'
            },
            children: "all Fileds required"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 32
          }, this) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("form", {
            onSubmit: handleSubmit,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("label", {
              htmlFor: "username",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
                children: "username"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 51
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
              type: "text",
              value: data.username,
              name: "username",
              onChange: function onChange(e) {
                return setData(_objectSpread(_objectSpread({}, data), {}, {
                  username: e.target.value
                }));
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("label", {
              htmlFor: "company",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
                children: "company"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 50
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
              type: "text",
              value: data.company,
              name: "company",
              onChange: function onChange(e) {
                return setData(_objectSpread(_objectSpread({}, data), {}, {
                  company: e.target.value
                }));
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
              type: "submit",
              value: "submit"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 20
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 20
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 16
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 12
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 9
  }, this);
}

_s(Edit, "9VJRyCw+O+2vyAG/C5szh64pwEc=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter, react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch];
});

_c = Edit;

var _c;

$RefreshReg$(_c, "Edit");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW2VkaXRdLmpzIl0sIm5hbWVzIjpbIkVkaXQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZHMiLCJxdWVyeSIsImVkaXQiLCJjcnVkIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImZpbmQiLCJ1c2VyIiwiaWQiLCJzdGF0ZXVzZXIiLCJ1c2VybmFtZSIsInN0YXRlY29tcGFueSIsImNvbXBhbnkiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU3RhdGUiLCJlcnJvciIsInNldEVycm9yIiwiZGF0YSIsInNldERhdGEiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwidXNlclVwZGF0ZSIsInB1c2giLCJjb2xvciIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFDM0IsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUNBLE1BQU1DLEdBQUcsR0FBR0YsTUFBTSxDQUFDRyxLQUFQLENBQWFDLElBQXpCO0FBQ0EsTUFBTUMsSUFBSSxHQUFHQyx3REFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFVQSxLQUFLLENBQUNGLElBQU4sQ0FBV0csSUFBWCxDQUFnQixVQUFDQyxJQUFEO0FBQUEsYUFBVUEsSUFBSSxDQUFDQyxFQUFMLEtBQVksQ0FBQ1IsR0FBdkI7QUFBQSxLQUFoQixDQUFWO0FBQUEsR0FBRCxDQUF4QjtBQUNBLE1BQUlTLFNBQVMsR0FBR04sSUFBSSxDQUFDTyxRQUFyQjtBQUNBLE1BQUlDLFlBQVksR0FBR1IsSUFBSSxDQUFDUyxPQUF4QjtBQUNBLE1BQU1DLFFBQVEsR0FBRUMsd0RBQVcsRUFBM0I7O0FBTjJCLGtCQVNGQywrQ0FBUSxDQUFDLEtBQUQsQ0FUTjtBQUFBLE1BU3BCQyxLQVRvQjtBQUFBLE1BU2RDLFFBVGM7O0FBQUEsbUJBVUpGLCtDQUFRLENBQUM7QUFDNUJMLFlBQVEsRUFBRUQsU0FEa0I7QUFFNUJHLFdBQU8sRUFBRUQ7QUFGbUIsR0FBRCxDQVZKO0FBQUEsTUFVcEJPLElBVm9CO0FBQUEsTUFVZkMsT0FWZTs7QUFjM0IsTUFBTUMsWUFBWSxHQUFDLFNBQWJBLFlBQWEsQ0FBQ0MsQ0FBRCxFQUFLO0FBQ3BCQSxLQUFDLENBQUNDLGNBQUY7QUFDQSxRQUFNWixRQUFRLEdBQUVRLElBQUksQ0FBQ1IsUUFBckI7QUFDQSxRQUFNRSxPQUFPLEdBQUVNLElBQUksQ0FBQ04sT0FBcEI7QUFDQVcsV0FBTyxDQUFDQyxHQUFSLENBQVlOLElBQVo7O0FBQ0EsUUFBR0EsSUFBSCxFQUFRO0FBQ0pMLGNBQVEsQ0FDSlkscUVBQVUsQ0FBQztBQUNQakIsVUFBRSxFQUFFLENBQUNSLEdBREU7QUFFUFUsZ0JBQVEsRUFBUkEsUUFGTztBQUdQRSxlQUFPLEVBQVBBO0FBSE8sT0FBRCxDQUROLENBQVI7QUFPQWQsWUFBTSxDQUFDNEIsSUFBUCxDQUFZLEdBQVo7QUFDSDtBQUVKLEdBaEJEOztBQWtCQSxzQkFDSTtBQUFBLDJCQUNHO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBQSw2QkFDSTtBQUFLLGlCQUFTLEVBQUMsS0FBZjtBQUFBLCtCQUNJO0FBQUssbUJBQVMsRUFBQyxlQUFmO0FBQUEsa0NBQ0s7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREwsRUFFTVYsS0FBSyxnQkFBQztBQUFHLGlCQUFLLEVBQUU7QUFBQ1csbUJBQUssRUFBQztBQUFQLGFBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQUQsR0FBa0QsSUFGN0QsZUFHQTtBQUFNLG9CQUFRLEVBQUVQLFlBQWhCO0FBQUEsb0NBQ0s7QUFBTyxxQkFBTyxFQUFDLFVBQWY7QUFBQSxxQ0FBMEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFETCxlQUVLO0FBQ0Esa0JBQUksRUFBQyxNQURMO0FBRUEsbUJBQUssRUFBRUYsSUFBSSxDQUFDUixRQUZaO0FBR0Esa0JBQUksRUFBQyxVQUhMO0FBSUEsc0JBQVEsRUFBRSxrQkFBQ1csQ0FBRDtBQUFBLHVCQUFPRixPQUFPLGlDQUFLRCxJQUFMO0FBQVdSLDBCQUFRLEVBQUNXLENBQUMsQ0FBQ08sTUFBRixDQUFTQztBQUE3QixtQkFBZDtBQUFBO0FBSlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGTCxlQVFLO0FBQU8scUJBQU8sRUFBQyxTQUFmO0FBQUEscUNBQXlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBUkwsZUFTSztBQUNBLGtCQUFJLEVBQUMsTUFETDtBQUVBLG1CQUFLLEVBQUVYLElBQUksQ0FBQ04sT0FGWjtBQUdBLGtCQUFJLEVBQUMsU0FITDtBQUlBLHNCQUFRLEVBQUUsa0JBQUFTLENBQUM7QUFBQSx1QkFBRUYsT0FBTyxpQ0FBS0QsSUFBTDtBQUFXTix5QkFBTyxFQUFDUyxDQUFDLENBQUNPLE1BQUYsQ0FBU0M7QUFBNUIsbUJBQVQ7QUFBQTtBQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBVEwsZUFjSztBQUFPLGtCQUFJLEVBQUMsUUFBWjtBQUFxQixtQkFBSyxFQUFDO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBZEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBNEJIOztHQTVEdUJoQyxJO1VBQ0xFLGtELEVBRUZLLG9ELEVBR0dVLG9EOzs7S0FOSWpCLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW2VkaXRdLjYxOTA3MmNkYmIyOGIzNDMwYWY0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyB1c2VyVXBkYXRlIH0gZnJvbSAnLi4vcmVkdXgvcmVkdWNlcnMvY3J1ZFNsaWNlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdCgpIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgaWRzID0gcm91dGVyLnF1ZXJ5LmVkaXQ7XHJcbiAgICBjb25zdCBjcnVkID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PnN0YXRlLmNydWQuZmluZCgodXNlcikgPT4gdXNlci5pZCA9PT0gK2lkcykpO1xyXG4gICAgbGV0IHN0YXRldXNlciA9IGNydWQudXNlcm5hbWVcclxuICAgIGxldCBzdGF0ZWNvbXBhbnkgPSBjcnVkLmNvbXBhbnlcclxuICAgIGNvbnN0IGRpc3BhdGNoID11c2VEaXNwYXRjaCgpO1xyXG5cclxuXHJcbiAgICBjb25zdCBbZXJyb3Isc2V0RXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2RhdGEsc2V0RGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgdXNlcm5hbWU6IHN0YXRldXNlcixcclxuICAgICAgICBjb21wYW55OiBzdGF0ZWNvbXBhbnlcclxuICAgIH0pXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQ9KGUpPT57XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IHVzZXJuYW1lPSBkYXRhLnVzZXJuYW1lXHJcbiAgICAgICAgY29uc3QgY29tcGFueT0gZGF0YS5jb21wYW55XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgaWYoZGF0YSl7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgICAgICAgICAgdXNlclVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6ICtpZHMsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgY29tcGFueSxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goJy8nKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRocmVlIGNvbHVtbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkFERCBGT1JNPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9yPzxwIHN0eWxlPXt7Y29sb3I6J3JlZCd9fT5hbGwgRmlsZWRzIHJlcXVpcmVkPC9wPjpudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlcm5hbWVcIj48aDI+dXNlcm5hbWU8L2gyPjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YS51c2VybmFtZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldERhdGEoey4uLmRhdGEsIHVzZXJuYW1lOmUudGFyZ2V0LnZhbHVlfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY29tcGFueVwiPjxoMj5jb21wYW55PC9oMj48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGEuY29tcGFueX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjb21wYW55XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2U9PnNldERhdGEoey4uLmRhdGEsIGNvbXBhbnk6ZS50YXJnZXQudmFsdWV9KX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cInN1Ym1pdFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9