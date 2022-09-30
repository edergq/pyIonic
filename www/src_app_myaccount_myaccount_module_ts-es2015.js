(self["webpackChunkSalon"] = self["webpackChunkSalon"] || []).push([["src_app_myaccount_myaccount_module_ts"],{

/***/ 51084:
/*!*******************************************************!*\
  !*** ./src/app/myaccount/myaccount-routing.module.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyaccountPageRoutingModule": function() { return /* binding */ MyaccountPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _myaccount_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myaccount.page */ 96078);




const routes = [
    {
        path: '',
        component: _myaccount_page__WEBPACK_IMPORTED_MODULE_0__.MyaccountPage
    }
];
let MyaccountPageRoutingModule = class MyaccountPageRoutingModule {
};
MyaccountPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MyaccountPageRoutingModule);



/***/ }),

/***/ 48498:
/*!***********************************************!*\
  !*** ./src/app/myaccount/myaccount.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyaccountPageModule": function() { return /* binding */ MyaccountPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _myaccount_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myaccount-routing.module */ 51084);
/* harmony import */ var _myaccount_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./myaccount.page */ 96078);







let MyaccountPageModule = class MyaccountPageModule {
};
MyaccountPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _myaccount_routing_module__WEBPACK_IMPORTED_MODULE_0__.MyaccountPageRoutingModule
        ],
        declarations: [_myaccount_page__WEBPACK_IMPORTED_MODULE_1__.MyaccountPage]
    })
], MyaccountPageModule);



/***/ }),

/***/ 96078:
/*!*********************************************!*\
  !*** ./src/app/myaccount/myaccount.page.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyaccountPage": function() { return /* binding */ MyaccountPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_myaccount_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./myaccount.page.html */ 14698);
/* harmony import */ var _myaccount_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./myaccount.page.scss */ 80742);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_Providers_Basic_basic_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/Providers/Basic/basic-api.service */ 92306);
/* harmony import */ var src_Providers_Cart_cart_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/Providers/Cart/cart-api.service */ 65248);
/* harmony import */ var src_Providers_Local_local_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/Providers/Local/local-api.service */ 99068);
/* harmony import */ var src_Providers_Services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/Providers/Services/api.service */ 48158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app.component */ 55041);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _profileupdate_profileupdate_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../profileupdate/profileupdate.page */ 19943);














let MyaccountPage = class MyaccountPage {
    constructor(menuCtrl, apiService, basic, localApi, cart, route, alertController, location, modalController, activatedRoute, apCmp) {
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
        this.apCmp = apCmp;
        this.seting = {};
    }
    ngOnInit() {
        let getpage = this.activatedRoute.snapshot.paramMap.get('status');
        if (getpage == 'any') {
            this.title = 'My Acount';
            this.isMyacnt = 'YES';
        }
        else {
            this.title = 'Status';
            this.isMyacnt = '';
        }
        this.imgpath = _environments_environment__WEBPACK_IMPORTED_MODULE_7__.environment.imagepath;
        this.logeduser = this.localApi.getuser();
        this.getappsetng = this.localApi.getappseting();
        this.getallProducts();
    }
    doRefresh(event) {
        console.log('Begin async operation');
        setTimeout(() => {
            this.getallProducts();
            event.target.complete();
        }, 2000);
    }
    // 
    getallProducts() {
        this.logeduser = this.localApi.getuser();
        this.basic.presentLoading();
        this.apiService.postdata('getmyorders', this.logeduser.id).subscribe((resp) => {
            console.log('orders', resp);
            this.ords = resp.data;
            setTimeout(() => {
                this.basic.dismissloader();
            }, 1000);
        }, (err) => {
            return false;
        });
    }
    logout() {
        this.localApi.removeUser();
        this.apCmp.checklogin();
        this.route.navigate(['/homepage']);
    }
    viewmycart() {
        this.route.navigate(['/mycart']);
    }
    viewordertls(val) {
        this.route.navigate(['/orderdetails/' + val + '/old']);
    }
    goaddress() {
        this.route.navigate(['/addressbook/viewedit']);
    }
    goreview() {
        this.route.navigate(['/reviewandrating']);
    }
    opnprofileupdate() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _profileupdate_profileupdate_page__WEBPACK_IMPORTED_MODULE_8__.ProfileupdatePage,
                cssClass: 'my-custom-class',
                backdropDismiss: true
            });
            modal.onDidDismiss().then((data) => {
                console.log('data', data);
                if (data.data) {
                    this.basic.alert('Success!', 'Your profile succesfully updated.');
                    this.apCmp.checklogin();
                    this.logeduser = this.localApi.getuser();
                }
            });
            return yield modal.present();
        });
    }
    ionViewWillLeave() {
        console.log("console");
        this.dismissmodal();
    }
    dismissmodal() {
        this.modalController.dismiss({
            'dismissed': true
        });
    }
};
MyaccountPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.MenuController },
    { type: src_Providers_Services_api_service__WEBPACK_IMPORTED_MODULE_5__.ApiService },
    { type: src_Providers_Basic_basic_api_service__WEBPACK_IMPORTED_MODULE_2__.BasicApiService },
    { type: src_Providers_Local_local_api_service__WEBPACK_IMPORTED_MODULE_4__.LocalApiService },
    { type: src_Providers_Cart_cart_api_service__WEBPACK_IMPORTED_MODULE_3__.CartApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_12__.Location },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute },
    { type: _app_component__WEBPACK_IMPORTED_MODULE_6__.AppComponent }
];
MyaccountPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-myaccount',
        template: _raw_loader_myaccount_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_myaccount_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MyaccountPage);



/***/ }),

/***/ 80742:
/*!***********************************************!*\
  !*** ./src/app/myaccount/myaccount.page.scss ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sectiondiv {\n  width: 100%;\n  height: auto;\n  padding: 10px 15px;\n  background-color: #FFF;\n  font-size: 13px;\n  margin-bottom: 10px;\n  position: relative;\n}\n.sectiondiv ion-icon {\n  position: absolute;\n  right: 10px;\n  top: 21px;\n}\n.sectiondiv .sechead {\n  font-weight: bold;\n  margin-bottom: 4px;\n}\n.sectiondiv .sechead span {\n  float: right;\n  color: #ff4181;\n  text-transform: uppercase;\n}\n.sectiondiv .secdesc {\n  color: #989696;\n}\n.sectiondiv .secordprice {\n  color: #585656;\n  border-top: dashed 1px #ccc;\n  position: relative;\n  padding: 5px 0;\n  margin-top: 10px;\n}\n.sectiondiv .secordprice b {\n  font-weight: normal;\n}\n.sectiondiv .secordprice .deliverdgreen {\n  position: absolute;\n  right: 10px;\n  top: 0;\n  font-size: 11px;\n}\n.sectiondiv .secordprice .deliverdgreen ion-icon {\n  background-color: #3a8840;\n  color: #fff;\n}\n.sectiondiv .secordprice span {\n  color: #9a9a9a;\n  font-size: 11px;\n}\n.sectiondiv .secordprice .deliverdgreen {\n  position: absolute;\n  right: 2px;\n  top: auto;\n  font-size: 10px;\n  bottom: 7px;\n}\n.sectiondiv .secordprice .deliverdgreen ion-icon {\n  position: relative;\n  right: -3px;\n  top: 2px;\n  border-radius: 100%;\n  padding: 2px;\n  font-size: 8px;\n}\n.sectiondiv .secordprice .pricespn {\n  color: #000;\n  font-size: 14px;\n  margin: 6px 0;\n}\n.sectiondiv .secordprice .reorderbtn {\n  width: 100%;\n  height: auto;\n  margin-top: 13px;\n}\n.sectiondiv .secordprice .reorderbtn span {\n  border: solid 1px #8eadc3;\n  padding: 5px 12px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  font-size: 10px;\n  color: #8eadc3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15YWNjb3VudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUNEO0FBQUM7RUFDQyxrQkFBQTtFQUNHLFdBQUE7RUFDQSxTQUFBO0FBRUw7QUFBQztFQUNDLGlCQUFBO0VBQ0Esa0JBQUE7QUFFRjtBQURFO0VBQ0MsWUFBQTtFQUNHLGNBQUE7RUFDQSx5QkFBQTtBQUdOO0FBQUM7RUFDQyxjQUFBO0FBRUY7QUFBQztFQUNDLGNBQUE7RUFDRywyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBRUw7QUFESztFQUNDLG1CQUFBO0FBR047QUFERTtFQUNDLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxlQUFBO0FBR0g7QUFGRztFQUNDLHlCQUFBO0VBQ0csV0FBQTtBQUlQO0FBREU7RUFDQyxjQUFBO0VBQ0csZUFBQTtBQUdOO0FBREU7RUFDQyxrQkFBQTtFQUNHLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFHTjtBQUZHO0VBQ0Msa0JBQUE7RUFDRyxXQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFJUDtBQURFO0VBQ0MsV0FBQTtFQUNHLGVBQUE7RUFDQSxhQUFBO0FBR047QUFERTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFHSDtBQUZHO0VBQ0MseUJBQUE7RUFDRyxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUlQIiwiZmlsZSI6Im15YWNjb3VudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbmRpdntcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogYXV0bztcblx0cGFkZGluZzogMTBweCAxNXB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuXHRmb250LXNpemU6IDEzcHg7XG5cdG1hcmdpbi1ib3R0b206IDEwcHg7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0aW9uLWljb257XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHQgICAgcmlnaHQ6IDEwcHg7XG5cdCAgICB0b3A6IDIxcHg7XG5cdH1cblx0LnNlY2hlYWR7XG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdFx0bWFyZ2luLWJvdHRvbTogNHB4O1xuXHRcdHNwYW57XG5cdFx0XHRmbG9hdDogcmlnaHQ7XG5cdFx0ICAgIGNvbG9yOiAjZmY0MTgxO1xuXHRcdCAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRcdH1cblx0fVxuXHQuc2VjZGVzY3tcblx0XHRjb2xvcjogIzk4OTY5Njtcblx0fVxuXHQuc2Vjb3JkcHJpY2V7XG5cdFx0Y29sb3I6ICM1ODU2NTY7XG5cdCAgICBib3JkZXItdG9wOiBkYXNoZWQgMXB4ICNjY2M7XG5cdCAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cdCAgICBwYWRkaW5nOiA1cHggMDtcblx0ICAgIG1hcmdpbi10b3A6IDEwcHg7XG5cdCAgICBie1xuXHQgICAgXHRmb250LXdlaWdodDogbm9ybWFsO1xuXHQgICAgfVxuXHRcdC5kZWxpdmVyZGdyZWVue1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0cmlnaHQ6IDEwcHg7XG5cdFx0XHR0b3A6IDA7XG5cdFx0XHRmb250LXNpemU6IDExcHg7XG5cdFx0XHRpb24taWNvbntcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogIzNhODg0MDtcbiAgICBcdFx0XHRjb2xvcjogI2ZmZjtcblx0XHRcdH1cblx0XHR9XG5cdFx0c3Bhbntcblx0XHRcdGNvbG9yOiAjOWE5YTlhO1xuICAgIFx0XHRmb250LXNpemU6IDExcHg7XG5cdFx0fVxuXHRcdC5kZWxpdmVyZGdyZWVue1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdCAgICByaWdodDogMnB4O1xuXHRcdCAgICB0b3A6IGF1dG87XG5cdFx0ICAgIGZvbnQtc2l6ZTogMTBweDtcblx0XHQgICAgYm90dG9tOiA3cHg7XG5cdFx0XHRpb24taWNvbntcblx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0ICAgIHJpZ2h0OiAtM3B4O1xuXHRcdFx0ICAgIHRvcDogMnB4O1xuXHRcdFx0ICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG5cdFx0XHQgICAgcGFkZGluZzogMnB4O1xuXHRcdFx0ICAgIGZvbnQtc2l6ZTogOHB4O1xuXHRcdFx0fVxuXHRcdH1cblx0XHQucHJpY2VzcG57XG5cdFx0XHRjb2xvcjogIzAwMDtcbiAgICBcdFx0Zm9udC1zaXplOiAxNHB4O1xuICAgIFx0XHRtYXJnaW46IDZweCAwO1xuXHRcdH1cblx0XHQucmVvcmRlcmJ0bntcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0aGVpZ2h0OiBhdXRvO1xuXHRcdFx0bWFyZ2luLXRvcDogMTNweDtcblx0XHRcdHNwYW57XG5cdFx0XHRcdGJvcmRlcjogc29saWQgMXB4ICM4ZWFkYzM7XG5cdFx0XHQgICAgcGFkZGluZzogNXB4IDEycHg7XG5cdFx0XHQgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHRcdCAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuXHRcdFx0ICAgIGZvbnQtc2l6ZTogMTBweDtcblx0XHRcdCAgICBjb2xvcjogIzhlYWRjMztcblx0XHRcdH1cblx0XHR9XG5cdH1cblxufSJdfQ== */");

/***/ }),

/***/ 14698:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/myaccount/myaccount.page.html ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t<ion-toolbar>\n\t\t<!-- <ion-back-button slot=\"start\"></ion-back-button> --><ion-menu-button slot=\"start\"></ion-menu-button>\n\t\t<ion-title>{{title}}</ion-title>\n\t\t<ion-buttons slot=\"end\" (click)='logout()'>\n\t\t\t<ion-icon name=\"log-out-outline\" style=\"font-size: 30px; color: white;\"></ion-icon>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n\t\t<ion-refresher-content></ion-refresher-content>\n\t</ion-refresher>\n\t<div class=\"padcontr\">\n\t\t<div class=\"sectiondiv\" (click)='opnprofileupdate()' *ngIf=\"isMyacnt\">\n\t\t\t<div class=\"sechead\">\n\t\t\t\t{{logeduser.name}} <span>Edit</span>\n\t\t\t</div>\n\t\t\t<div class=\"secdesc\">\n\t\t\t\t{{logeduser.mobile}} {{logeduser.email}}\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"sectiondiv\">\n\t\t\t<div class=\"sechead\">\n\t\t\t\tMy Booking(s)\n\t\t\t</div>\n\t\t\t<div class=\"secordprice\" *ngFor=\"let ord of ords\">\n\t\t\t\t<span class=\"deliverdgreen\">{{ord.order_status}}<ion-icon *ngIf=\"ord.order_status == 'Delivered'\"\n\t\t\t\t\t\tname=\"checkmark-outline\"></ion-icon></span>\n\t\t\t\t<b *ngFor=\"let itm of ord.prd\" (click)='viewordertls(ord.orderid)'>{{itm.item_name}} x {{itm.qty}},\n\t\t\t\t</b><br>\n\t\t\t\t<span>{{ord.orddate}}, {{ord.ordtime}}</span><br>\n\t\t\t\t<div class=\"pricespn\"><code [innerHTML]='getappsetng?.currency_symbol'></code>{{ord.total_pay}}</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"sectiondiv\">\n\t\t\t<div class=\"sechead\" (click)='goreview()'>\n\t\t\t\tReviews / Ratings\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_myaccount_myaccount_module_ts-es2015.js.map