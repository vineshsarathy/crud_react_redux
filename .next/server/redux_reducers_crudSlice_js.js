exports.id = "redux_reducers_crudSlice_js";
exports.ids = ["redux_reducers_crudSlice_js"];
exports.modules = {

/***/ "./redux/reducers/crudSlice.js":
/*!*************************************!*\
  !*** ./redux/reducers/crudSlice.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "crudSlice": function() { return /* binding */ crudSlice; },
/* harmony export */   "userAdd": function() { return /* binding */ userAdd; },
/* harmony export */   "userUpdate": function() { return /* binding */ userUpdate; },
/* harmony export */   "userDelete": function() { return /* binding */ userDelete; }
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = [{
  id: 1,
  username: "Dave_Patrick",
  company: "Google"
}, {
  id: 2,
  username: "Hank_Gluhwein",
  company: "Facebook"
}];
const crudSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: "crud",
  initialState,
  reducers: {
    userAdd(state, action) {
      state.push(action.payload);
    },

    userUpdate(state, action) {
      const {
        id,
        username,
        company
      } = action.payload;
      const existingUser = state.find(user => user.id === id);

      if (existingUser) {
        existingUser.username = username;
        existingUser.company = company;
      }
    },

    userDelete(state, action) {
      const {
        id
      } = action.payload;
      const ids = id.id;
      console.log(ids);
      return state.filter(i => i.id !== ids);
    }

  }
});
const {
  userAdd,
  userUpdate,
  userDelete
} = crudSlice.actions;
/* harmony default export */ __webpack_exports__["default"] = (crudSlice.reducer);

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b29sa2l0Ly4vcmVkdXgvcmVkdWNlcnMvY3J1ZFNsaWNlLmpzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsImlkIiwidXNlcm5hbWUiLCJjb21wYW55IiwiY3J1ZFNsaWNlIiwiY3JlYXRlU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJ1c2VyQWRkIiwic3RhdGUiLCJhY3Rpb24iLCJwdXNoIiwicGF5bG9hZCIsInVzZXJVcGRhdGUiLCJleGlzdGluZ1VzZXIiLCJmaW5kIiwidXNlciIsInVzZXJEZWxldGUiLCJpZHMiLCJjb25zb2xlIiwibG9nIiwiZmlsdGVyIiwiaSIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsTUFBTUEsWUFBWSxHQUFHLENBQ2pCO0FBQUVDLElBQUUsRUFBRSxDQUFOO0FBQVNDLFVBQVEsRUFBRSxjQUFuQjtBQUFtQ0MsU0FBTyxFQUFFO0FBQTVDLENBRGlCLEVBRWpCO0FBQUVGLElBQUUsRUFBRSxDQUFOO0FBQVNDLFVBQVEsRUFBRSxlQUFuQjtBQUFvQ0MsU0FBTyxFQUFFO0FBQTdDLENBRmlCLENBQXJCO0FBSVEsTUFBTUMsU0FBUyxHQUFHQyw2REFBVyxDQUFDO0FBQ2xDQyxNQUFJLEVBQUMsTUFENkI7QUFFbENOLGNBRmtDO0FBR2xDTyxVQUFRLEVBQUU7QUFDTkMsV0FBTyxDQUFDQyxLQUFELEVBQVFDLE1BQVIsRUFBZ0I7QUFDckJELFdBQUssQ0FBQ0UsSUFBTixDQUFXRCxNQUFNLENBQUNFLE9BQWxCO0FBQ0QsS0FISzs7QUFJTkMsY0FBVSxDQUFDSixLQUFELEVBQVFDLE1BQVIsRUFBZ0I7QUFDdEIsWUFBTTtBQUFFVCxVQUFGO0FBQU1DLGdCQUFOO0FBQWdCQztBQUFoQixVQUE0Qk8sTUFBTSxDQUFDRSxPQUF6QztBQUNBLFlBQU1FLFlBQVksR0FBR0wsS0FBSyxDQUFDTSxJQUFOLENBQVlDLElBQUQsSUFBVUEsSUFBSSxDQUFDZixFQUFMLEtBQVlBLEVBQWpDLENBQXJCOztBQUNBLFVBQUlhLFlBQUosRUFBa0I7QUFDaEJBLG9CQUFZLENBQUNaLFFBQWIsR0FBd0JBLFFBQXhCO0FBQ0FZLG9CQUFZLENBQUNYLE9BQWIsR0FBdUJBLE9BQXZCO0FBQ0Q7QUFDSixLQVhLOztBQVlOYyxjQUFVLENBQUNSLEtBQUQsRUFBT0MsTUFBUCxFQUFjO0FBQ3BCLFlBQU07QUFBQ1Q7QUFBRCxVQUFPUyxNQUFNLENBQUNFLE9BQXBCO0FBQ0EsWUFBTU0sR0FBRyxHQUFHakIsRUFBRSxDQUFDQSxFQUFmO0FBQ0FrQixhQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNBLGFBQU9ULEtBQUssQ0FBQ1ksTUFBTixDQUFjQyxDQUFELElBQU1BLENBQUMsQ0FBQ3JCLEVBQUYsS0FBU2lCLEdBQTVCLENBQVA7QUFDSDs7QUFqQks7QUFId0IsQ0FBRCxDQUE3QjtBQXVCRCxNQUFNO0FBQUVWLFNBQUY7QUFBVUssWUFBVjtBQUFxQkk7QUFBckIsSUFBb0NiLFNBQVMsQ0FBQ21CLE9BQXBEO0FBRVAsK0RBQWVuQixTQUFTLENBQUNvQixPQUF6QixFIiwiZmlsZSI6InJlZHV4X3JlZHVjZXJzX2NydWRTbGljZV9qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIlxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0gW1xyXG4gICAgeyBpZDogMSwgdXNlcm5hbWU6IFwiRGF2ZV9QYXRyaWNrXCIsIGNvbXBhbnk6IFwiR29vZ2xlXCIgfSxcclxuICAgIHsgaWQ6IDIsIHVzZXJuYW1lOiBcIkhhbmtfR2x1aHdlaW5cIiwgY29tcGFueTogXCJGYWNlYm9va1wiIH0sXHJcbiAgXTtcclxuZXhwb3J0ICBjb25zdCBjcnVkU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgICBuYW1lOlwiY3J1ZFwiLFxyXG4gICAgaW5pdGlhbFN0YXRlLFxyXG4gICAgcmVkdWNlcnM6IHtcclxuICAgICAgICB1c2VyQWRkKHN0YXRlLCBhY3Rpb24pIHtcclxuICAgICAgICAgIHN0YXRlLnB1c2goYWN0aW9uLnBheWxvYWQpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdXNlclVwZGF0ZShzdGF0ZSwgYWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgaWQsIHVzZXJuYW1lLCBjb21wYW55IH0gPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdVc2VyID0gc3RhdGUuZmluZCgodXNlcikgPT4gdXNlci5pZCA9PT0gaWQpO1xyXG4gICAgICAgICAgICBpZiAoZXhpc3RpbmdVc2VyKSB7XHJcbiAgICAgICAgICAgICAgZXhpc3RpbmdVc2VyLnVzZXJuYW1lID0gdXNlcm5hbWU7XHJcbiAgICAgICAgICAgICAgZXhpc3RpbmdVc2VyLmNvbXBhbnkgPSBjb21wYW55O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB1c2VyRGVsZXRlKHN0YXRlLGFjdGlvbil7XHJcbiAgICAgICAgICAgIGNvbnN0IHtpZH0gPSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgICBjb25zdCBpZHMgPSBpZC5pZDtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coaWRzKVxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGUuZmlsdGVyKChpKT0+IGkuaWQgIT09IGlkcylcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxufSlcclxuZXhwb3J0IGNvbnN0IHsgdXNlckFkZCx1c2VyVXBkYXRlLHVzZXJEZWxldGUgfSA9IGNydWRTbGljZS5hY3Rpb25zO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3J1ZFNsaWNlLnJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9