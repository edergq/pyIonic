(self["webpackChunkSalon"] = self["webpackChunkSalon"] || []).push([["src_app_ourteam_ourteam_module_ts"],{

/***/ 61090:
/*!***************************************************!*\
  !*** ./src/app/ourteam/ourteam-routing.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OurteamPageRoutingModule": function() { return /* binding */ OurteamPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ourteam_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ourteam.page */ 90168);




const routes = [
    {
        path: '',
        component: _ourteam_page__WEBPACK_IMPORTED_MODULE_0__.OurteamPage
    }
];
let OurteamPageRoutingModule = class OurteamPageRoutingModule {
};
OurteamPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OurteamPageRoutingModule);



/***/ }),

/***/ 16962:
/*!*******************************************!*\
  !*** ./src/app/ourteam/ourteam.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OurteamPageModule": function() { return /* binding */ OurteamPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ourteam_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ourteam-routing.module */ 61090);
/* harmony import */ var _ourteam_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ourteam.page */ 90168);







let OurteamPageModule = class OurteamPageModule {
};
OurteamPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ourteam_routing_module__WEBPACK_IMPORTED_MODULE_0__.OurteamPageRoutingModule
        ],
        declarations: [_ourteam_page__WEBPACK_IMPORTED_MODULE_1__.OurteamPage]
    })
], OurteamPageModule);



/***/ }),

/***/ 90168:
/*!*****************************************!*\
  !*** ./src/app/ourteam/ourteam.page.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OurteamPage": function() { return /* binding */ OurteamPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_ourteam_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./ourteam.page.html */ 29442);
/* harmony import */ var _ourteam_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ourteam.page.scss */ 35077);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_Providers_Basic_basic_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/Providers/Basic/basic-api.service */ 92306);
/* harmony import */ var src_Providers_Local_local_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/Providers/Local/local-api.service */ 99068);
/* harmony import */ var src_Providers_Services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/Providers/Services/api.service */ 48158);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ 92340);











let OurteamPage = class OurteamPage {
    constructor(menuCtrl, apiService, basic, localApi, route, alertController, location, modalController, activatedRoute) {
        this.menuCtrl = menuCtrl;
        this.apiService = apiService;
        this.basic = basic;
        this.localApi = localApi;
        this.route = route;
        this.alertController = alertController;
        this.location = location;
        this.modalController = modalController;
        this.activatedRoute = activatedRoute;
        this.postdata = {};
    }
    ngOnInit() {
        this.pgtype = this.activatedRoute.snapshot.paramMap.get('pgtype');
        this.imgpath = _environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.imagepath;
        this.getallProducts();
        this.brndane = _environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.appname;
    }
    doRefresh(event) {
        setTimeout(() => {
            this.getallProducts();
            event.target.complete();
        }, 2000);
    }
    getallProducts() {
        this.postdata.pgtype = this.pgtype;
        this.postdata.about = 'OK';
        this.basic.presentLoading();
        this.apiService.postdata('getallcms', this.postdata).subscribe((resp) => {
            if (this.pgtype == 'Social Media') {
                this.allProducts = resp.data[0];
            }
            else {
                this.allProducts = resp.data;
            }
            setTimeout(() => {
                this.basic.dismissloader();
            }, 1000);
        }, (err) => {
            return false;
        });
    }
};
OurteamPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.MenuController },
    { type: src_Providers_Services_api_service__WEBPACK_IMPORTED_MODULE_4__.ApiService },
    { type: src_Providers_Basic_basic_api_service__WEBPACK_IMPORTED_MODULE_2__.BasicApiService },
    { type: src_Providers_Local_local_api_service__WEBPACK_IMPORTED_MODULE_3__.LocalApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__.Location },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute }
];
OurteamPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-ourteam',
        template: _raw_loader_ourteam_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_ourteam_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], OurteamPage);



/***/ }),

/***/ 35077:
/*!*******************************************!*\
  !*** ./src/app/ourteam/ourteam.page.scss ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".offerbox {\n  width: 100%;\n  height: auto;\n  background-color: #fff;\n  border-radius: 3px;\n  box-shadow: 0 1px 2px #CCC;\n  margin-bottom: 10px;\n}\n.offerbox .offer_img {\n  width: 100%;\n  height: auto;\n  position: relative;\n  text-align: center;\n}\n.offerbox .offer_img img {\n  width: 50%;\n  border-radius: 50%;\n}\n.offerbox .offer_img .laybtn {\n  width: 100%;\n  height: auto;\n  position: absolute;\n  top: 40%;\n  text-align: center;\n}\n.offerbox .offer_img .laybtn img {\n  width: 66px;\n  box-shadow: none;\n  border-radius: 0;\n  overflow: hidden;\n}\n.offerbox .offercode {\n  width: 100%;\n  height: auto;\n  position: relative;\n  font-size: 14px;\n  font-weight: bold;\n  padding: 0 15px;\n  margin-top: 10px;\n}\n.offerbox .offercode img {\n  height: 13px;\n  margin-right: 5px;\n}\n.offerbox .offercode span {\n  float: right;\n  font-size: 14px;\n  color: #ecba26;\n  font-weight: normal;\n  text-transform: uppercase;\n}\n.offerbox .offerhead {\n  font-size: 13px;\n  line-height: 22px;\n  border-bottom: solid 1px #f1f1f1;\n  margin: 7px 0;\n  padding: 0 15px;\n  padding-bottom: 3px;\n  font-weight: bold;\n  text-align: center;\n}\n.offerbox .offerhead span {\n  font-weight: normal;\n}\n.offerbox .offerdescription {\n  width: 100%;\n  height: auto;\n  font-size: 12px;\n  padding: 0 15px 10px 15px;\n  text-align: center;\n}\n.offerbox .socialicon {\n  width: 100%;\n  height: auto;\n  font-size: 20px;\n  padding: 0 15px 10px 15px;\n}\n.offerbox .socialicon ion-icon {\n  margin-right: 7px;\n}\n.offerbox .socialicon .facebook {\n  color: #4267B2;\n}\n.offerbox .socialicon .twitter {\n  color: #00acee;\n}\n.offerbox .socialicon .instagram {\n  color: #9f338c;\n}\n.offerbox .socialicon .youtube {\n  color: #FF0000;\n}\n.clear {\n  clear: both;\n}\n.socialleft {\n  width: 48%;\n  height: auto;\n  background-color: #fff;\n  text-align: center;\n  float: left;\n  margin: 7px 4% 7px 0;\n  border-radius: 3px;\n  font-size: 12px;\n  font-weight: bold;\n  box-shadow: 0 1px 4px #ccc;\n}\n.socialleft img {\n  height: 100px;\n}\n.socialleft .facebook {\n  color: #3b5998;\n}\n.socialleft .pinterest {\n  color: #cb2026;\n}\n.socialleft .trustpilot {\n  color: #01b67b;\n}\n.socialleft .twitter {\n  color: #56acee;\n}\n.socialright {\n  width: 48%;\n  height: auto;\n  background-color: #fff;\n  text-align: center;\n  float: left;\n  margin: 7px auto 7px auto;\n  border-radius: 3px;\n  font-size: 12px;\n  font-weight: bold;\n  box-shadow: 0 1px 4px #ccc;\n}\n.socialright img {\n  height: 100px;\n}\n.socialright .instagram {\n  color: #ee539e;\n}\n.socialright .linkedin {\n  color: #017ab9;\n}\n.socialright .tripadvisor {\n  color: #258602;\n}\n.contactlist {\n  width: 100%;\n  height: auto;\n}\n.contactlist ul {\n  margin: 0;\n  padding: 0;\n}\n.contactlist ul li {\n  list-style: none;\n  padding: 15px 10px;\n  background-color: #fff;\n  margin-bottom: 10px;\n  position: relative;\n  padding-left: 45px;\n  font-size: 15px;\n}\n.contactlist ul li ion-icon {\n  position: absolute;\n  left: 12px;\n  top: 14px;\n  font-size: 18px;\n}\n.contactlist ul li img {\n  position: absolute;\n  left: 7px;\n  top: 10px;\n  font-size: 18px;\n  height: 30px;\n}\n.contactlist ul .facebook {\n  color: #3b5998;\n}\n.contactlist ul .pinterest {\n  color: #cb2026;\n}\n.contactlist ul .trustpilot {\n  color: #01b67b;\n}\n.contactlist ul .twitter {\n  color: #56acee;\n}\n.contactlist ul .instagram {\n  color: #ee539e;\n}\n.contactlist ul .linkedin {\n  color: #017ab9;\n}\n.contactlist ul .tripadvisor {\n  color: #258602;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm91cnRlYW0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtBQUNEO0FBQUM7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFFRjtBQURFO0VBQ0MsVUFBQTtFQUNHLGtCQUFBO0FBR047QUFERTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7QUFHSDtBQUZHO0VBQ0MsV0FBQTtFQUNBLGdCQUFBO0VBQ0csZ0JBQUE7RUFDQSxnQkFBQTtBQUlQO0FBQUM7RUFDQyxXQUFBO0VBQ0csWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBRUw7QUFERTtFQUNDLFlBQUE7RUFDRyxpQkFBQTtBQUdOO0FBREU7RUFDQyxZQUFBO0VBQ0csZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBR047QUFDQztFQUNDLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0VBQ0csYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0gsa0JBQUE7QUFDRjtBQUFLO0VBQ0MsbUJBQUE7QUFFTjtBQUNDO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQUNGO0FBRUM7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQUFGO0FBQ0U7RUFDQyxpQkFBQTtBQUNIO0FBQ0U7RUFDQyxjQUFBO0FBQ0g7QUFDRTtFQUNDLGNBQUE7QUFDSDtBQUNFO0VBQ0MsY0FBQTtBQUNIO0FBQ0U7RUFDQyxjQUFBO0FBQ0g7QUFJQTtFQUNDLFdBQUE7QUFERDtBQUdBO0VBQ0MsVUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtBQUFEO0FBQ0M7RUFDQyxhQUFBO0FBQ0Y7QUFDQztFQUNDLGNBQUE7QUFDRjtBQUNDO0VBQ0MsY0FBQTtBQUNGO0FBQ0M7RUFDQyxjQUFBO0FBQ0Y7QUFDQztFQUNDLGNBQUE7QUFDRjtBQUVBO0VBQ0MsVUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtBQUNEO0FBQUM7RUFDQyxhQUFBO0FBRUY7QUFBQztFQUNDLGNBQUE7QUFFRjtBQUFDO0VBQ0MsY0FBQTtBQUVGO0FBQUM7RUFDQyxjQUFBO0FBRUY7QUFFQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0FBQ0Q7QUFBQztFQUNDLFNBQUE7RUFDQSxVQUFBO0FBRUY7QUFERTtFQUNDLGdCQUFBO0VBQ0csa0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFHTjtBQUZHO0VBQ0Msa0JBQUE7RUFDRyxVQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFJUDtBQUZHO0VBQ0Msa0JBQUE7RUFDRyxTQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBSVA7QUFERTtFQUNDLGNBQUE7QUFHSDtBQURFO0VBQ0MsY0FBQTtBQUdIO0FBREU7RUFDQyxjQUFBO0FBR0g7QUFERTtFQUNDLGNBQUE7QUFHSDtBQURFO0VBQ0MsY0FBQTtBQUdIO0FBREU7RUFDQyxjQUFBO0FBR0g7QUFERTtFQUNDLGNBQUE7QUFHSCIsImZpbGUiOiJvdXJ0ZWFtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vZmZlcmJveHtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogYXV0bztcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblx0Ym9yZGVyLXJhZGl1czogM3B4O1xuXHRib3gtc2hhZG93OiAwIDFweCAycHggI0NDQztcblx0bWFyZ2luLWJvdHRvbTogMTBweDtcblx0Lm9mZmVyX2ltZ3tcblx0XHR3aWR0aDogMTAwJTtcblx0XHRoZWlnaHQ6IGF1dG87XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRpbWd7XG5cdFx0XHR3aWR0aDogNTAlO1xuICAgIFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0fVxuXHRcdC5sYXlidG57XG5cdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdGhlaWdodDogYXV0bztcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdHRvcDogNDAlO1xuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0aW1ne1xuXHRcdFx0XHR3aWR0aDogNjZweDtcblx0XHRcdFx0Ym94LXNoYWRvdzogbm9uZTtcblx0XHRcdCAgICBib3JkZXItcmFkaXVzOiAwO1xuXHRcdFx0ICAgIG92ZXJmbG93OiBoaWRkZW47XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdC5vZmZlcmNvZGV7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdCAgICBoZWlnaHQ6IGF1dG87XG5cdCAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cdCAgICBmb250LXNpemU6IDE0cHg7XG5cdCAgICBmb250LXdlaWdodDogYm9sZDtcblx0ICAgIHBhZGRpbmc6IDAgMTVweDtcblx0ICAgIG1hcmdpbi10b3A6IDEwcHg7XG5cdFx0aW1ne1xuXHRcdFx0aGVpZ2h0OiAxM3B4O1xuICAgIFx0XHRtYXJnaW4tcmlnaHQ6IDVweDtcblx0XHR9XG5cdFx0c3Bhbntcblx0XHRcdGZsb2F0OiByaWdodDtcblx0XHQgICAgZm9udC1zaXplOiAxNHB4O1xuXHRcdCAgICBjb2xvcjogI2VjYmEyNjtcblx0XHQgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcblx0XHQgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHR9XG5cblx0fVxuXHQub2ZmZXJoZWFke1xuXHRcdGZvbnQtc2l6ZTogMTNweDtcblx0XHRsaW5lLWhlaWdodDogMjJweDtcblx0XHRib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2YxZjFmMTtcblx0ICAgIG1hcmdpbjogN3B4IDA7XG5cdCAgICBwYWRkaW5nOiAwIDE1cHg7XG5cdCAgICBwYWRkaW5nLWJvdHRvbTogM3B4O1xuXHQgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHQgICAgc3Bhbntcblx0ICAgIFx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcblx0ICAgIH1cblx0fVxuXHQub2ZmZXJkZXNjcmlwdGlvbntcblx0XHR3aWR0aDogMTAwJTtcblx0XHRoZWlnaHQ6IGF1dG87XG5cdFx0Zm9udC1zaXplOiAxMnB4O1xuXHRcdHBhZGRpbmc6IDAgMTVweCAxMHB4IDE1cHg7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR9XG5cblx0LnNvY2lhbGljb257XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0aGVpZ2h0OiBhdXRvO1xuXHRcdGZvbnQtc2l6ZTogMjBweDtcblx0XHRwYWRkaW5nOiAwIDE1cHggMTBweCAxNXB4O1xuXHRcdGlvbi1pY29ue1xuXHRcdFx0bWFyZ2luLXJpZ2h0OiA3cHg7XG5cdFx0fVxuXHRcdC5mYWNlYm9va3tcblx0XHRcdGNvbG9yOiAjNDI2N0IyO1xuXHRcdH1cblx0XHQudHdpdHRlcntcblx0XHRcdGNvbG9yOiAjMDBhY2VlO1xuXHRcdH1cblx0XHQuaW5zdGFncmFte1xuXHRcdFx0Y29sb3I6ICM5ZjMzOGM7XG5cdFx0fVxuXHRcdC55b3V0dWJle1xuXHRcdFx0Y29sb3I6ICNGRjAwMDA7XG5cdFx0fVxuXHR9XG59XG5cbi5jbGVhcntcblx0Y2xlYXI6IGJvdGg7XG59XG4uc29jaWFsbGVmdHtcblx0d2lkdGg6IDQ4JTtcblx0aGVpZ2h0OiBhdXRvO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGZsb2F0OiBsZWZ0O1xuXHRtYXJnaW46IDdweCA0JSA3cHggMDtcblx0Ym9yZGVyLXJhZGl1czogM3B4O1xuXHRmb250LXNpemU6IDEycHg7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRib3gtc2hhZG93OiAwIDFweCA0cHggI2NjYztcblx0aW1ne1xuXHRcdGhlaWdodDogMTAwcHg7XG5cdH1cblx0LmZhY2Vib29re1xuXHRcdGNvbG9yOiAjM2I1OTk4O1xuXHR9XG5cdC5waW50ZXJlc3R7XG5cdFx0Y29sb3I6ICNjYjIwMjY7XG5cdH1cblx0LnRydXN0cGlsb3R7XG5cdFx0Y29sb3I6ICMwMWI2N2I7XG5cdH1cblx0LnR3aXR0ZXJ7XG5cdFx0Y29sb3I6ICM1NmFjZWU7XG5cdH1cbn1cbi5zb2NpYWxyaWdodHtcblx0d2lkdGg6IDQ4JTtcblx0aGVpZ2h0OiBhdXRvO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGZsb2F0OiBsZWZ0O1xuXHRtYXJnaW46IDdweCBhdXRvIDdweCBhdXRvO1xuXHRib3JkZXItcmFkaXVzOiAzcHg7XG5cdGZvbnQtc2l6ZTogMTJweDtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdGJveC1zaGFkb3c6IDAgMXB4IDRweCAjY2NjO1xuXHRpbWd7XG5cdFx0aGVpZ2h0OiAxMDBweDtcblx0fVxuXHQuaW5zdGFncmFte1xuXHRcdGNvbG9yOiAjZWU1MzllO1xuXHR9XG5cdC5saW5rZWRpbntcblx0XHRjb2xvcjogIzAxN2FiOTtcblx0fVxuXHQudHJpcGFkdmlzb3J7XG5cdFx0Y29sb3I6ICMyNTg2MDI7XG5cdH1cbn1cblxuLmNvbnRhY3RsaXN0e1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiBhdXRvO1xuXHR1bHtcblx0XHRtYXJnaW46IDA7XG5cdFx0cGFkZGluZzogMDtcblx0XHRsaXtcblx0XHRcdGxpc3Qtc3R5bGU6IG5vbmU7XG5cdFx0ICAgIHBhZGRpbmc6IDE1cHggMTBweDtcblx0XHQgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblx0XHQgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcblx0XHQgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdCAgICBwYWRkaW5nLWxlZnQ6IDQ1cHg7XG5cdFx0ICAgIGZvbnQtc2l6ZTogMTVweDtcblx0XHRcdGlvbi1pY29ue1xuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHQgICAgbGVmdDogMTJweDtcblx0XHRcdCAgICB0b3A6IDE0cHg7XG5cdFx0XHQgICAgZm9udC1zaXplOiAxOHB4O1xuXHRcdFx0fVxuXHRcdFx0aW1ne1xuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHQgICAgbGVmdDogN3B4O1xuXHRcdFx0ICAgIHRvcDogMTBweDtcblx0XHRcdCAgICBmb250LXNpemU6IDE4cHg7XG5cdFx0XHQgICAgaGVpZ2h0OiAzMHB4O1xuXHRcdFx0fVxuXHRcdH1cblx0XHQuZmFjZWJvb2t7XG5cdFx0XHRjb2xvcjogIzNiNTk5ODtcblx0XHR9XG5cdFx0LnBpbnRlcmVzdHtcblx0XHRcdGNvbG9yOiAjY2IyMDI2O1xuXHRcdH1cblx0XHQudHJ1c3RwaWxvdHtcblx0XHRcdGNvbG9yOiAjMDFiNjdiO1xuXHRcdH1cblx0XHQudHdpdHRlcntcblx0XHRcdGNvbG9yOiAjNTZhY2VlO1xuXHRcdH1cblx0XHQuaW5zdGFncmFte1xuXHRcdFx0Y29sb3I6ICNlZTUzOWU7XG5cdFx0fVxuXHRcdC5saW5rZWRpbntcblx0XHRcdGNvbG9yOiAjMDE3YWI5O1xuXHRcdH1cblx0XHQudHJpcGFkdmlzb3J7XG5cdFx0XHRjb2xvcjogIzI1ODYwMjtcblx0XHR9XG5cdH1cbn0iXX0= */");

/***/ }),

/***/ 29442:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ourteam/ourteam.page.html ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"header-background-color\">\n  \t <!-- <ion-back-button slot=\"start\"></ion-back-button> --><ion-menu-button slot=\"start\"></ion-menu-button>\n    <ion-title class=\"heaerfont\">{{pgtype}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n\t    <ion-refresher-content></ion-refresher-content>\n\t </ion-refresher>\n\t <div *ngIf=\"pgtype == 'Our Team'\">\n\t\t<div class=\"padcontr\">\n\t\t\t<div class=\"offerbox\" *ngFor=\"let item of allProducts\">\n\t\t\t\t<div class=\"offer_img\">\n\t\t\t\t\t<img src=\"{{imgpath}}team/{{item.image}}\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"offercode\">\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t\t<div class=\"offerhead\">\n\t\t\t\t\t{{item.name}} <span> - {{item.role}}</span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"offerdescription\" [innerHTML]='item.about_me'></div>\n\n\t\t\t\t<div class=\"socialicon\">\n\t\t\t\t\t<span class=\"facebook\" *ngIf='item.facebook'><ion-icon name=\"logo-facebook\"></ion-icon></span>\n\t\t\t\t\t<span class=\"twitter\" *ngIf='item.twitter'><ion-icon name=\"logo-twitter\"></ion-icon></span>\n\t\t\t\t\t<span class=\"instagram\" *ngIf='item.instagram'><ion-icon name=\"logo-instagram\"></ion-icon></span>\n\t\t\t\t\t<span class=\"youtube\" *ngIf='item.youtube'><ion-icon name=\"logo-youtube\"></ion-icon></span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</ion-content>\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_ourteam_ourteam_module_ts-es2015.js.map