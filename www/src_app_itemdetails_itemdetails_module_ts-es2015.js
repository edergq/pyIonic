(self["webpackChunkSalon"] = self["webpackChunkSalon"] || []).push([["src_app_itemdetails_itemdetails_module_ts"],{

/***/ 81516:
/*!***********************************************************!*\
  !*** ./src/app/itemdetails/itemdetails-routing.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemdetailsPageRoutingModule": function() { return /* binding */ ItemdetailsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _itemdetails_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./itemdetails.page */ 48979);




const routes = [
    {
        path: '',
        component: _itemdetails_page__WEBPACK_IMPORTED_MODULE_0__.ItemdetailsPage
    }
];
let ItemdetailsPageRoutingModule = class ItemdetailsPageRoutingModule {
};
ItemdetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ItemdetailsPageRoutingModule);



/***/ }),

/***/ 55445:
/*!***************************************************!*\
  !*** ./src/app/itemdetails/itemdetails.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemdetailsPageModule": function() { return /* binding */ ItemdetailsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _itemdetails_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./itemdetails-routing.module */ 81516);
/* harmony import */ var _itemdetails_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./itemdetails.page */ 48979);







let ItemdetailsPageModule = class ItemdetailsPageModule {
};
ItemdetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _itemdetails_routing_module__WEBPACK_IMPORTED_MODULE_0__.ItemdetailsPageRoutingModule
        ],
        declarations: [_itemdetails_page__WEBPACK_IMPORTED_MODULE_1__.ItemdetailsPage]
    })
], ItemdetailsPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_itemdetails_itemdetails_module_ts-es2015.js.map