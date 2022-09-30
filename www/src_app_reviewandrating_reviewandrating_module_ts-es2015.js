(self["webpackChunkSalon"] = self["webpackChunkSalon"] || []).push([["src_app_reviewandrating_reviewandrating_module_ts"],{

/***/ 84199:
/*!*******************************************************************!*\
  !*** ./src/app/reviewandrating/reviewandrating-routing.module.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReviewandratingPageRoutingModule": function() { return /* binding */ ReviewandratingPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _reviewandrating_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reviewandrating.page */ 58172);




const routes = [
    {
        path: '',
        component: _reviewandrating_page__WEBPACK_IMPORTED_MODULE_0__.ReviewandratingPage
    }
];
let ReviewandratingPageRoutingModule = class ReviewandratingPageRoutingModule {
};
ReviewandratingPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ReviewandratingPageRoutingModule);



/***/ }),

/***/ 21646:
/*!***********************************************************!*\
  !*** ./src/app/reviewandrating/reviewandrating.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReviewandratingPageModule": function() { return /* binding */ ReviewandratingPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _reviewandrating_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reviewandrating-routing.module */ 84199);
/* harmony import */ var _reviewandrating_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reviewandrating.page */ 58172);







let ReviewandratingPageModule = class ReviewandratingPageModule {
};
ReviewandratingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _reviewandrating_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReviewandratingPageRoutingModule
        ],
        declarations: [_reviewandrating_page__WEBPACK_IMPORTED_MODULE_1__.ReviewandratingPage]
    })
], ReviewandratingPageModule);



/***/ }),

/***/ 58172:
/*!*********************************************************!*\
  !*** ./src/app/reviewandrating/reviewandrating.page.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReviewandratingPage": function() { return /* binding */ ReviewandratingPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_reviewandrating_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./reviewandrating.page.html */ 63055);
/* harmony import */ var _reviewandrating_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reviewandrating.page.scss */ 1964);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_Providers_Basic_basic_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/Providers/Basic/basic-api.service */ 92306);
/* harmony import */ var src_Providers_Local_local_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/Providers/Local/local-api.service */ 99068);
/* harmony import */ var src_Providers_Services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/Providers/Services/api.service */ 48158);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app.component */ 55041);
/* harmony import */ var _loginpage_loginpage_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../loginpage/loginpage.page */ 42985);
/* harmony import */ var _writereview_writereview_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../writereview/writereview.page */ 3775);













let ReviewandratingPage = class ReviewandratingPage {
    constructor(menuCtrl, apiService, basic, localApi, route, alertController, modalController, apCmp) {
        this.menuCtrl = menuCtrl;
        this.apiService = apiService;
        this.basic = basic;
        this.localApi = localApi;
        this.route = route;
        this.alertController = alertController;
        this.modalController = modalController;
        this.apCmp = apCmp;
        this.postdata = {};
    }
    ngOnInit() {
        this.logedUser = this.localApi.getuser();
        this.imgpath = _environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.imagepath;
        this.getallProducts();
    }
    doRefresh(event) {
        console.log('Begin async operation');
        setTimeout(() => {
            this.getallProducts();
            event.target.complete();
        }, 2000);
    }
    getallProducts() {
        this.basic.presentLoading();
        this.apiService.postdata('getreviews', this.postdata).subscribe((resp) => {
            this.allProducts = resp.data;
            console.log(this.allProducts);
            setTimeout(() => {
                this.basic.dismissloader();
            }, 1000);
        }, (err) => {
            return false;
        });
    }
    checkmyord() {
        this.basic.presentLoading();
        this.logedUser = this.localApi.getuser();
        if (this.logedUser) {
            this.apiService.postdata('myordnumber', this.logedUser.id).subscribe((resp) => {
                console.log(resp.data);
                if (resp.data.order <= 0) {
                    this.basic.alert('Sorry:', 'You need to have at least 1 order to be able to submit a review.');
                }
                else if (resp.data.review > 0) {
                    this.openwrite('Update', resp.data.reviews);
                }
                else {
                    this.openwrite('New', '');
                }
                setTimeout(() => {
                    this.basic.dismissloader();
                }, 1000);
            }, (err) => {
                return false;
            });
        }
    }
    createreviews() {
        this.logedUser = this.localApi.getuser();
        if (!this.logedUser) {
            this.openlogforofr();
        }
        else {
            this.checkmyord();
        }
    }
    openwrite(frwht, rvwdt) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _writereview_writereview_page__WEBPACK_IMPORTED_MODULE_8__.WritereviewPage,
                cssClass: 'my-custom-class',
                backdropDismiss: true,
                componentProps: {
                    'review': rvwdt,
                    'frwht': frwht,
                },
            });
            modal.onDidDismiss().then((data) => {
                console.log('data', data);
                if (data.data) {
                    this.ngOnInit();
                }
            });
            return yield modal.present();
        });
    }
    openlogforofr() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _loginpage_loginpage_page__WEBPACK_IMPORTED_MODULE_7__.LoginpagePage,
                cssClass: 'my-custom-class',
                backdropDismiss: true
            });
            modal.onDidDismiss().then((data) => {
                console.log('data', data);
                if (data.data) {
                    this.apCmp.checklogin();
                    this.createreviews();
                }
            });
            return yield modal.present();
        });
    }
};
ReviewandratingPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.MenuController },
    { type: src_Providers_Services_api_service__WEBPACK_IMPORTED_MODULE_4__.ApiService },
    { type: src_Providers_Basic_basic_api_service__WEBPACK_IMPORTED_MODULE_2__.BasicApiService },
    { type: src_Providers_Local_local_api_service__WEBPACK_IMPORTED_MODULE_3__.LocalApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController },
    { type: _app_component__WEBPACK_IMPORTED_MODULE_6__.AppComponent }
];
ReviewandratingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-reviewandrating',
        template: _raw_loader_reviewandrating_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_reviewandrating_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ReviewandratingPage);



/***/ }),

/***/ 1964:
/*!***********************************************************!*\
  !*** ./src/app/reviewandrating/reviewandrating.page.scss ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".reviewvid {\n  width: 100%;\n  height: auto;\n  padding: 10px;\n  background-color: #fff;\n  font-size: 13px;\n  margin-bottom: 20px;\n}\n.reviewvid .reviername {\n  font-size: 12px;\n  font-weight: bold;\n}\n.reviewvid .reviername ion-icon {\n  color: #ffd500;\n  margin-right: 3px;\n}\n.reviewvid .reviername .timeago {\n  float: right;\n  font-weight: normal;\n  color: #9c9c9c;\n}\n.reviewvid .reviewdesc {\n  padding: 10px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJldmlld2FuZHJhdGluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUNEO0FBQUM7RUFDQyxlQUFBO0VBQ0EsaUJBQUE7QUFFRjtBQURFO0VBQ0MsY0FBQTtFQUNBLGlCQUFBO0FBR0g7QUFERTtFQUNDLFlBQUE7RUFDRyxtQkFBQTtFQUNBLGNBQUE7QUFHTjtBQUNDO0VBQ0MsZUFBQTtBQUNGIiwiZmlsZSI6InJldmlld2FuZHJhdGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmV2aWV3dmlke1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiBhdXRvO1xuXHRwYWRkaW5nOiAxMHB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXHRmb250LXNpemU6IDEzcHg7XG5cdG1hcmdpbi1ib3R0b206IDIwcHg7XG5cdC5yZXZpZXJuYW1le1xuXHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRmb250LXdlaWdodDogYm9sZDtcblx0XHRpb24taWNvbntcblx0XHRcdGNvbG9yOiAjZmZkNTAwO1xuXHRcdFx0bWFyZ2luLXJpZ2h0OiAzcHg7XG5cdFx0fVxuXHRcdC50aW1lYWdve1xuXHRcdFx0ZmxvYXQ6IHJpZ2h0O1xuXHRcdCAgICBmb250LXdlaWdodDogbm9ybWFsO1xuXHRcdCAgICBjb2xvcjogIzljOWM5Yztcblx0XHR9XG5cblx0fVxuXHQucmV2aWV3ZGVzY3tcblx0XHRwYWRkaW5nOiAxMHB4IDA7XG5cdH1cbn0iXX0= */");

/***/ }),

/***/ 63055:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reviewandrating/reviewandrating.page.html ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-menu-button slot=\"start\"></ion-menu-button>\n    <ion-title class=\"heaerfont\">Reviews / Ratings</ion-title>\n    <ion-buttons slot=\"end\" (click)='createreviews()'>\n      <ion-icon name=\"create-outline\" class='headerrighticon'></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n\t  <ion-refresher-content></ion-refresher-content>\n\t</ion-refresher>\n\n  <div class=\"padcontr\">\n    <div class=\"reviewvid\" *ngFor=\"let item of allProducts\">\n      <div class=\"reviername\">\n        {{item.name}} <span *ngFor=\"let rtn of item.rtngs\"><ion-icon name=\"{{rtn}}\"></ion-icon></span> <span class=\"timeago\">{{item.timeago}}</span>\n      </div>\n      <div class=\"reviewdesc\">\n        {{item.reviews}}\n      </div>\n    </div>\n  </div>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_reviewandrating_reviewandrating_module_ts-es2015.js.map