(self["webpackChunkSalon"] = self["webpackChunkSalon"] || []).push([["src_app_offerdetails_offerdetails_module_ts"],{

/***/ 48065:
/*!*************************************************************!*\
  !*** ./src/app/offerdetails/offerdetails-routing.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OfferdetailsPageRoutingModule": function() { return /* binding */ OfferdetailsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _offerdetails_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./offerdetails.page */ 6478);




const routes = [
    {
        path: '',
        component: _offerdetails_page__WEBPACK_IMPORTED_MODULE_0__.OfferdetailsPage
    }
];
let OfferdetailsPageRoutingModule = class OfferdetailsPageRoutingModule {
};
OfferdetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OfferdetailsPageRoutingModule);



/***/ }),

/***/ 95190:
/*!*****************************************************!*\
  !*** ./src/app/offerdetails/offerdetails.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OfferdetailsPageModule": function() { return /* binding */ OfferdetailsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _offerdetails_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./offerdetails-routing.module */ 48065);
/* harmony import */ var _offerdetails_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./offerdetails.page */ 6478);







let OfferdetailsPageModule = class OfferdetailsPageModule {
};
OfferdetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _offerdetails_routing_module__WEBPACK_IMPORTED_MODULE_0__.OfferdetailsPageRoutingModule
        ],
        declarations: [_offerdetails_page__WEBPACK_IMPORTED_MODULE_1__.OfferdetailsPage]
    })
], OfferdetailsPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_offerdetails_offerdetails_module_ts-es2015.js.map