(self["webpackChunkSalon"] = self["webpackChunkSalon"] || []).push([["src_app_aboutus_aboutus_module_ts"],{

/***/ 40805:
/*!***************************************************!*\
  !*** ./src/app/aboutus/aboutus-routing.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutusPageRoutingModule": function() { return /* binding */ AboutusPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _aboutus_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aboutus.page */ 7552);




const routes = [
    {
        path: '',
        component: _aboutus_page__WEBPACK_IMPORTED_MODULE_0__.AboutusPage
    }
];
let AboutusPageRoutingModule = class AboutusPageRoutingModule {
};
AboutusPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AboutusPageRoutingModule);



/***/ }),

/***/ 76202:
/*!*******************************************!*\
  !*** ./src/app/aboutus/aboutus.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutusPageModule": function() { return /* binding */ AboutusPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _aboutus_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aboutus-routing.module */ 40805);
/* harmony import */ var _aboutus_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aboutus.page */ 7552);







let AboutusPageModule = class AboutusPageModule {
};
AboutusPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _aboutus_routing_module__WEBPACK_IMPORTED_MODULE_0__.AboutusPageRoutingModule
        ],
        declarations: [_aboutus_page__WEBPACK_IMPORTED_MODULE_1__.AboutusPage]
    })
], AboutusPageModule);



/***/ }),

/***/ 7552:
/*!*****************************************!*\
  !*** ./src/app/aboutus/aboutus.page.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutusPage": function() { return /* binding */ AboutusPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_aboutus_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./aboutus.page.html */ 28110);
/* harmony import */ var _aboutus_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aboutus.page.scss */ 43098);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_Providers_Basic_basic_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/Providers/Basic/basic-api.service */ 92306);
/* harmony import */ var src_Providers_Cart_cart_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/Providers/Cart/cart-api.service */ 65248);
/* harmony import */ var src_Providers_Local_local_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/Providers/Local/local-api.service */ 99068);
/* harmony import */ var src_Providers_Services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/Providers/Services/api.service */ 48158);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 38583);












let AboutusPage = class AboutusPage {
    constructor(menuCtrl, apiService, basic, localApi, cart, route, alertController, location, modalController, activatedRoute) {
        this.menuCtrl = menuCtrl;
        this.apiService = apiService;
        this.basic = basic;
        this.localApi = localApi;
        this.cart = cart;
        this.route = route;
        this.alertController = alertController;
        this.location = location;
        this.modalController = modalController;
        this.activatedRoute = activatedRoute;
        this.postdata = {};
        this.ipbroptions = {};
        this.isOpeningtime = false;
    }
    ngOnInit() {
        this.imgpath = _environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.imagepath;
        this.pgtype = this.activatedRoute.snapshot.paramMap.get('pgtype');
        this.getallProducts();
    }
    doRefresh(event) {
        setTimeout(() => {
            this.getallProducts();
            event.target.complete();
        }, 2000);
    }
    getallProducts() {
        this.postdata.pgtype = this.pgtype;
        this.basic.presentLoading();
        this.apiService.postdata('getallcms', this.postdata).subscribe((resp) => {
            this.allProducts = resp.data;
            setTimeout(() => {
                this.basic.dismissloader();
            }, 1000);
        }, (err) => {
            return false;
        });
    }
};
AboutusPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.MenuController },
    { type: src_Providers_Services_api_service__WEBPACK_IMPORTED_MODULE_5__.ApiService },
    { type: src_Providers_Basic_basic_api_service__WEBPACK_IMPORTED_MODULE_2__.BasicApiService },
    { type: src_Providers_Local_local_api_service__WEBPACK_IMPORTED_MODULE_4__.LocalApiService },
    { type: src_Providers_Cart_cart_api_service__WEBPACK_IMPORTED_MODULE_3__.CartApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__.Location },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute }
];
AboutusPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-aboutus',
        template: _raw_loader_aboutus_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_aboutus_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AboutusPage);



/***/ }),

/***/ 43098:
/*!*******************************************!*\
  !*** ./src/app/aboutus/aboutus.page.scss ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css2?family=Fredericka+the+Great&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Cabin+Sketch:wght@400;700&display=swap\");\n.cmsdesc {\n  width: 100%;\n  height: auto;\n  padding: 10px 15px;\n  font-size: 13px;\n  text-align: justify;\n}\nh2 {\n  font-size: 15px !important;\n}\n.viewalergy {\n  width: 100%;\n  height: auto;\n  padding: 10px 0;\n  text-align: center;\n  background-color: #568694;\n  font-size: 14px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  font-weight: bold;\n  padding-bottom: 20px;\n}\n.bfasthead {\n  border-right: solid 1px #ccc;\n}\n.lnchhead {\n  border-right: solid 1px #ccc;\n}\n.dnrhead {\n  /*font-size: 12px;\n  background: #eaeaea;*/\n}\n.timehead {\n  font-size: 10px;\n  background: #eaeaea;\n  text-transform: uppercase;\n  font-weight: bold;\n  text-align: center;\n}\n.timedesc {\n  font-size: 10px;\n  background: #f7f7f7;\n  text-transform: uppercase;\n  text-align: center;\n  border-top: solid 1px #e8e8e8;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.colopentxt {\n  color: #138446;\n}\n.colclosetxt {\n  color: #f00;\n}\n.daysnamelp {\n  font-size: 23px;\n  margin-bottom: 20px;\n}\n.timesopncls {\n  font-size: 15px;\n}\n.timesopncls ul {\n  margin: 0;\n  padding: 0;\n}\n.timesopncls ul li {\n  list-style: none;\n  padding: 5px 0;\n  margin: 0;\n}\n.dayname {\n  /*font-size: 12px;*/\n  border-right: solid 1px #ccc;\n  font-weight: bold;\n}\n.bfasttime {\n  /*font-size: 12px;*/\n  border-right: solid 1px #e8e8e8;\n}\n.lnchtime {\n  /*font-size: 12px;*/\n  border-right: solid 1px #e8e8e8;\n}\n.dnrtime {\n  /*font-size: 12px;*/\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0dXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLHlGQUFBO0FBQ0EsOEZBQUE7QUFDUjtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFDRDtBQUNBO0VBQ0MsMEJBQUE7QUFFRDtBQUFBO0VBQ0MsV0FBQTtFQUNHLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQUdKO0FBREE7RUFDSSw0QkFBQTtBQUlKO0FBRkE7RUFDSSw0QkFBQTtBQUtKO0FBSEE7RUFDSTt1QkFBQTtBQU9KO0FBSkE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFPSjtBQUpBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFPSjtBQUxBO0VBQ0ksY0FBQTtBQVFKO0FBTkE7RUFDSSxXQUFBO0FBU0o7QUFOQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQVNKO0FBUEE7RUFDSSxlQUFBO0FBVUo7QUFUSTtFQUNJLFNBQUE7RUFDQSxVQUFBO0FBV1I7QUFWUTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QUFZWjtBQVBBO0VBQ0ksbUJBQUE7RUFDQSw0QkFBQTtFQUNBLGlCQUFBO0FBVUo7QUFSQTtFQUNJLG1CQUFBO0VBQ0EsK0JBQUE7QUFXSjtBQVRBO0VBQ0ksbUJBQUE7RUFDQSwrQkFBQTtBQVlKO0FBVkE7RUFDSSxtQkFBQTtBQWFKIiwiZmlsZSI6ImFib3V0dXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RnJlZGVyaWNrYSt0aGUrR3JlYXQmZGlzcGxheT1zd2FwJyk7XG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1DYWJpbitTa2V0Y2g6d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xuLmNtc2Rlc2N7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IGF1dG87XG5cdHBhZGRpbmc6IDEwcHggMTVweDtcblx0Zm9udC1zaXplOiAxM3B4O1xuXHR0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuaDJ7XG5cdGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xufVxuLnZpZXdhbGVyZ3l7XG5cdHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1Njg2OTQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cbi5iZmFzdGhlYWR7XG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggI2NjYztcbn1cbi5sbmNoaGVhZHtcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCAjY2NjO1xufVxuLmRucmhlYWR7XG4gICAgLypmb250LXNpemU6IDEycHg7XG4gICAgYmFja2dyb3VuZDogI2VhZWFlYTsqL1xufVxuLnRpbWVoZWFke1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZWFlYWVhO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGltZWRlc2N7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXRvcDogc29saWQgMXB4ICNlOGU4ZTg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmNvbG9wZW50eHR7XG4gICAgY29sb3I6ICMxMzg0NDY7XG59XG4uY29sY2xvc2V0eHR7XG4gICAgY29sb3I6ICNmMDA7XG59XG5cbi5kYXlzbmFtZWxwe1xuICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLnRpbWVzb3BuY2xze1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB1bHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBsaXtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmRheW5hbWV7XG4gICAgLypmb250LXNpemU6IDEycHg7Ki9cbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCAjY2NjO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmJmYXN0dGltZXtcbiAgICAvKmZvbnQtc2l6ZTogMTJweDsqL1xuICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4ICNlOGU4ZTg7XG59XG4ubG5jaHRpbWV7XG4gICAgLypmb250LXNpemU6IDEycHg7Ki9cbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCAjZThlOGU4O1xufVxuLmRucnRpbWV7XG4gICAgLypmb250LXNpemU6IDEycHg7Ki9cbn0iXX0= */");

/***/ }),

/***/ 28110:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/aboutus/aboutus.page.html ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t<ion-toolbar class=\"header-background-color\">\n\t\t <!-- <ion-back-button slot=\"start\"></ion-back-button> --><ion-menu-button slot=\"start\"></ion-menu-button>\n\t  \t<ion-title class=\"heaerfont\">{{allProducts?.heading}}</ion-title>\n\t</ion-toolbar>\n</ion-header>\n  \n<ion-content>\n\t<ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n\t\t<ion-refresher-content></ion-refresher-content>\n\t</ion-refresher>\n  \n\t<div class=\"cmsdesc\" [innerHTML]='allProducts?.description'></div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_aboutus_aboutus_module_ts-es2015.js.map