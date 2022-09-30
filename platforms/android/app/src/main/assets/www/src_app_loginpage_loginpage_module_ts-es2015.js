(self["webpackChunkSalon"] = self["webpackChunkSalon"] || []).push([["src_app_loginpage_loginpage_module_ts"],{

/***/ 12295:
/*!*******************************************************!*\
  !*** ./src/app/loginpage/loginpage-routing.module.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginpagePageRoutingModule": function() { return /* binding */ LoginpagePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _loginpage_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loginpage.page */ 42985);




const routes = [
    {
        path: '',
        component: _loginpage_page__WEBPACK_IMPORTED_MODULE_0__.LoginpagePage
    }
];
let LoginpagePageRoutingModule = class LoginpagePageRoutingModule {
};
LoginpagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginpagePageRoutingModule);



/***/ }),

/***/ 38828:
/*!***********************************************!*\
  !*** ./src/app/loginpage/loginpage.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginpagePageModule": function() { return /* binding */ LoginpagePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _loginpage_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loginpage-routing.module */ 12295);
/* harmony import */ var _loginpage_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loginpage.page */ 42985);







let LoginpagePageModule = class LoginpagePageModule {
};
LoginpagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _loginpage_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginpagePageRoutingModule
        ],
        declarations: [_loginpage_page__WEBPACK_IMPORTED_MODULE_1__.LoginpagePage]
    })
], LoginpagePageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_loginpage_loginpage_module_ts-es2015.js.map