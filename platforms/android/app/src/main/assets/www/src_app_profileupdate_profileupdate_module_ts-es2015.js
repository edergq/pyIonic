(self["webpackChunkSalon"] = self["webpackChunkSalon"] || []).push([["src_app_profileupdate_profileupdate_module_ts"],{

/***/ 41231:
/*!***************************************************************!*\
  !*** ./src/app/profileupdate/profileupdate-routing.module.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileupdatePageRoutingModule": function() { return /* binding */ ProfileupdatePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _profileupdate_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profileupdate.page */ 19943);




const routes = [
    {
        path: '',
        component: _profileupdate_page__WEBPACK_IMPORTED_MODULE_0__.ProfileupdatePage
    }
];
let ProfileupdatePageRoutingModule = class ProfileupdatePageRoutingModule {
};
ProfileupdatePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfileupdatePageRoutingModule);



/***/ }),

/***/ 60149:
/*!*******************************************************!*\
  !*** ./src/app/profileupdate/profileupdate.module.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileupdatePageModule": function() { return /* binding */ ProfileupdatePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _profileupdate_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profileupdate-routing.module */ 41231);
/* harmony import */ var _profileupdate_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profileupdate.page */ 19943);







let ProfileupdatePageModule = class ProfileupdatePageModule {
};
ProfileupdatePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _profileupdate_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfileupdatePageRoutingModule
        ],
        declarations: [_profileupdate_page__WEBPACK_IMPORTED_MODULE_1__.ProfileupdatePage]
    })
], ProfileupdatePageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_profileupdate_profileupdate_module_ts-es2015.js.map