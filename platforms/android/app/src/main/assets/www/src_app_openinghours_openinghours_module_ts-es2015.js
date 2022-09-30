(self["webpackChunkSalon"] = self["webpackChunkSalon"] || []).push([["src_app_openinghours_openinghours_module_ts"],{

/***/ 84748:
/*!*************************************************************!*\
  !*** ./src/app/openinghours/openinghours-routing.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OpeninghoursPageRoutingModule": function() { return /* binding */ OpeninghoursPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _openinghours_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./openinghours.page */ 82136);




const routes = [
    {
        path: '',
        component: _openinghours_page__WEBPACK_IMPORTED_MODULE_0__.OpeninghoursPage
    }
];
let OpeninghoursPageRoutingModule = class OpeninghoursPageRoutingModule {
};
OpeninghoursPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OpeninghoursPageRoutingModule);



/***/ }),

/***/ 16059:
/*!*****************************************************!*\
  !*** ./src/app/openinghours/openinghours.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OpeninghoursPageModule": function() { return /* binding */ OpeninghoursPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _openinghours_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./openinghours-routing.module */ 84748);
/* harmony import */ var _openinghours_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./openinghours.page */ 82136);







let OpeninghoursPageModule = class OpeninghoursPageModule {
};
OpeninghoursPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _openinghours_routing_module__WEBPACK_IMPORTED_MODULE_0__.OpeninghoursPageRoutingModule
        ],
        declarations: [_openinghours_page__WEBPACK_IMPORTED_MODULE_1__.OpeninghoursPage]
    })
], OpeninghoursPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_openinghours_openinghours_module_ts-es2015.js.map