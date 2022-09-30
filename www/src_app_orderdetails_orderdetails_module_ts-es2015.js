(self["webpackChunkSalon"] = self["webpackChunkSalon"] || []).push([["src_app_orderdetails_orderdetails_module_ts"],{

/***/ 2710:
/*!*************************************************************!*\
  !*** ./src/app/orderdetails/orderdetails-routing.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderdetailsPageRoutingModule": function() { return /* binding */ OrderdetailsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _orderdetails_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orderdetails.page */ 76267);




const routes = [
    {
        path: '',
        component: _orderdetails_page__WEBPACK_IMPORTED_MODULE_0__.OrderdetailsPage
    }
];
let OrderdetailsPageRoutingModule = class OrderdetailsPageRoutingModule {
};
OrderdetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OrderdetailsPageRoutingModule);



/***/ }),

/***/ 81195:
/*!*****************************************************!*\
  !*** ./src/app/orderdetails/orderdetails.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderdetailsPageModule": function() { return /* binding */ OrderdetailsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _orderdetails_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orderdetails-routing.module */ 2710);
/* harmony import */ var _orderdetails_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orderdetails.page */ 76267);







let OrderdetailsPageModule = class OrderdetailsPageModule {
};
OrderdetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _orderdetails_routing_module__WEBPACK_IMPORTED_MODULE_0__.OrderdetailsPageRoutingModule
        ],
        declarations: [_orderdetails_page__WEBPACK_IMPORTED_MODULE_1__.OrderdetailsPage]
    })
], OrderdetailsPageModule);



/***/ }),

/***/ 76267:
/*!***************************************************!*\
  !*** ./src/app/orderdetails/orderdetails.page.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderdetailsPage": function() { return /* binding */ OrderdetailsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_orderdetails_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./orderdetails.page.html */ 67055);
/* harmony import */ var _orderdetails_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orderdetails.page.scss */ 51125);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_Providers_Basic_basic_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/Providers/Basic/basic-api.service */ 92306);
/* harmony import */ var src_Providers_Cart_cart_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/Providers/Cart/cart-api.service */ 65248);
/* harmony import */ var src_Providers_Local_local_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/Providers/Local/local-api.service */ 99068);
/* harmony import */ var src_Providers_Services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/Providers/Services/api.service */ 48158);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../environments/environment */ 92340);











let OrderdetailsPage = class OrderdetailsPage {
    constructor(menuCtrl, apiService, basic, localApi, cart, route, alertController, modalController, activatedRoute) {
        this.menuCtrl = menuCtrl;
        this.apiService = apiService;
        this.basic = basic;
        this.localApi = localApi;
        this.cart = cart;
        this.route = route;
        this.alertController = alertController;
        this.modalController = modalController;
        this.activatedRoute = activatedRoute;
        this.ordlr = {};
        this.isNeword = false;
    }
    ngOnInit() {
        this.getappsetng = this.localApi.getappseting();
        this.logedUser = this.localApi.getuser();
        console.log('kk', this.logedUser.name);
    }
    BackButtonAction() {
        this.pagetype = this.activatedRoute.snapshot.paramMap.get('pagetype');
        if (this.pagetype == 'New') {
            this.route.navigate(['/home']);
        }
    }
    ionViewWillEnter() {
        this.imgpath = _environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.imagepath;
        this.orderid = this.activatedRoute.snapshot.paramMap.get('orderid');
        this.pagetype = this.activatedRoute.snapshot.paramMap.get('pagetype');
        if (this.pagetype == 'New') {
            this.localApi.removedeladrs();
            this.localApi.removedelcost();
            this.localApi.removextrnt();
            this.localApi.removeapplyedofr();
            this.cart.removeCart();
            this.localApi.removeordertype();
            this.localApi.removedeltime();
            this.isNeword = true;
        }
        this.ordlr.ordid = this.orderid;
        this.basic.presentLoading();
        this.apiService.postdata('getorderdetails', this.ordlr).subscribe((resp) => {
            console.log('User', resp);
            this.ordltls = resp.data;
            if (this.ordltls.order_type == 'Delivery') {
                if (this.ordltls.delivery_cost > 0) {
                    this.del_sct = this.getappsetng.currency_symbol + this.ordltls.delivery_cost;
                }
                else {
                    this.del_sct = 'FREE';
                }
            }
            else {
                this.del_sct = '';
            }
            if (this.ordltls.usewallet == 'YES') {
                if (this.ordltls.pay_amount_wallet_use == '0.00') {
                    this.iswaltpayamount = 'FREE';
                }
                else {
                    this.iswaltpayamount = this.getappsetng.currency_symbol + this.ordltls.pay_amount_wallet_use;
                }
            }
            setTimeout(() => {
                this.basic.dismissloader();
            }, 1000);
        }, (err) => {
            return false;
        });
    }
    doRefresh(event) {
        console.log('Begin async operation');
        setTimeout(() => {
            this.ionViewWillEnter();
            event.target.complete();
        }, 2000);
    }
    done() {
        this.route.navigate(['/myaccount/any']);
    }
};
OrderdetailsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.MenuController },
    { type: src_Providers_Services_api_service__WEBPACK_IMPORTED_MODULE_5__.ApiService },
    { type: src_Providers_Basic_basic_api_service__WEBPACK_IMPORTED_MODULE_2__.BasicApiService },
    { type: src_Providers_Local_local_api_service__WEBPACK_IMPORTED_MODULE_4__.LocalApiService },
    { type: src_Providers_Cart_cart_api_service__WEBPACK_IMPORTED_MODULE_3__.CartApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute }
];
OrderdetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-orderdetails',
        template: _raw_loader_orderdetails_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_orderdetails_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], OrderdetailsPage);



/***/ }),

/***/ 51125:
/*!*****************************************************!*\
  !*** ./src/app/orderdetails/orderdetails.page.scss ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tyanksnew {\n  width: 95%;\n  height: auto;\n  padding: 30px 0;\n  text-align: center;\n  font-weight: bold;\n  font-size: 20px;\n  margin: 0 auto;\n}\n\n.ordersummry {\n  width: 95%;\n  height: auto;\n  margin: 0 auto;\n  font-size: 12px;\n  margin-top: 10px;\n}\n\n.ordersummry .summryleft {\n  width: 50%;\n  float: left;\n  padding: 2px;\n}\n\n.ordersummry .summryleft ul {\n  margin: 0;\n  padding: 0;\n  font-weight: bold;\n  text-transform: uppercase;\n  line-height: 24px;\n}\n\n.ordersummry .summryleft ul li {\n  list-style: none;\n  font-weight: normal;\n  text-transform: none;\n  padding: 2px 0;\n  line-height: 14px;\n}\n\n.ordersummry .summryleft ul li span {\n  float: right;\n}\n\n.ordersummry .summryright {\n  width: 50%;\n  float: right;\n  padding: 2px;\n}\n\n.ordersummry .summryright ul {\n  margin: 0;\n  padding: 0;\n  font-weight: bold;\n  text-transform: uppercase;\n  line-height: 24px;\n  text-align: right;\n}\n\n.ordersummry .summryright ul li {\n  list-style: none;\n  font-weight: normal;\n  text-transform: none;\n  padding: 2px 0;\n  line-height: 14px;\n}\n\n.ordersummry .summryright ul li span {\n  float: right;\n}\n\n.productheadlist {\n  width: 95%;\n  height: auto;\n  margin: 0 auto;\n  font-size: 12px;\n  padding: 7px 10px;\n  margin: 15px auto 0 auto;\n  font-weight: bold;\n  text-transform: uppercase;\n}\n\n.productheadlist ul {\n  margin: 0;\n  padding: 0;\n  font-weight: bold;\n  text-transform: uppercase;\n  line-height: 24px;\n}\n\n.productheadlist ul li {\n  list-style: none;\n  text-transform: none;\n  padding: 2px 0;\n  line-height: 14px;\n  float: left;\n}\n\n.productheadlist ul li span {\n  float: right;\n}\n\n.productheadlist ul .item {\n  width: 60%;\n}\n\n.productheadlist ul .qty {\n  width: 20%;\n  text-align: center;\n}\n\n.productheadlist ul .price {\n  width: 20%;\n  text-align: right;\n}\n\n.producdesclist {\n  width: 95%;\n  height: auto;\n  margin: 0 auto;\n  font-size: 12px;\n  padding: 7px 4px;\n}\n\n.producdesclist ul {\n  margin: 0;\n  padding: 0;\n  font-weight: bold;\n  text-transform: uppercase;\n  line-height: 24px;\n  border-bottom: solid 1px #f1f1f1;\n  padding: 5px 0;\n}\n\n.producdesclist ul li {\n  list-style: none;\n  font-weight: normal;\n  text-transform: none;\n  padding: 2px 0;\n  line-height: 14px;\n  float: left;\n}\n\n.producdesclist ul li span {\n  float: right;\n}\n\n.producdesclist ul .item {\n  width: 60%;\n}\n\n.producdesclist ul .qty {\n  width: 20%;\n  text-align: center;\n}\n\n.producdesclist ul .price {\n  width: 20%;\n  text-align: right;\n}\n\n.pricecalc {\n  width: 95%;\n  height: auto;\n  margin: 0 auto;\n  font-size: 12px;\n}\n\n.pricecalc ul {\n  margin: 0;\n  padding: 0;\n}\n\n.pricecalc ul li {\n  margin: 0;\n  list-style: none;\n  padding: 4px 0;\n  padding-right: 52px;\n  text-align: right;\n  font-size: 14px;\n}\n\n.pricecalc span {\n  position: absolute;\n  right: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxVQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFDRDs7QUFDQTtFQUNDLFVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUlBLGVBQUE7RUFDQSxnQkFBQTtBQUREOztBQUVDO0VBQ0MsVUFBQTtFQUNBLFdBQUE7RUFFQSxZQUFBO0FBREY7O0FBR0U7RUFDQyxTQUFBO0VBQ0csVUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQUROOztBQUVHO0VBQ0MsZ0JBQUE7RUFDRyxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBQVA7O0FBQ0k7RUFDQyxZQUFBO0FBQ0w7O0FBSUM7RUFDQyxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFGRjs7QUFHRTtFQUNDLFNBQUE7RUFDRyxVQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ00saUJBQUE7QUFEWjs7QUFFRztFQUNDLGdCQUFBO0VBQ0csbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUFQOztBQUNJO0VBQ0MsWUFBQTtBQUNMOztBQU1BO0VBQ0MsVUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBR0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FBTEQ7O0FBT0M7RUFDRSxTQUFBO0VBQ0csVUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQUxOOztBQU1HO0VBQ0MsZ0JBQUE7RUFDRyxvQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFKUDs7QUFLSTtFQUNDLFlBQUE7QUFITDs7QUFNRztFQUNDLFVBQUE7QUFKSjs7QUFNRztFQUNDLFVBQUE7RUFDQSxrQkFBQTtBQUpKOztBQU1HO0VBQ0MsVUFBQTtFQUNBLGlCQUFBO0FBSko7O0FBWUE7RUFDQyxVQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFURDs7QUFVQztFQUNFLFNBQUE7RUFDRyxVQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxjQUFBO0FBUk47O0FBU0c7RUFDQyxnQkFBQTtFQUNHLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBUFA7O0FBUUk7RUFDQyxZQUFBO0FBTkw7O0FBU0c7RUFDQyxVQUFBO0FBUEo7O0FBU0c7RUFDQyxVQUFBO0VBQ0Esa0JBQUE7QUFQSjs7QUFTRztFQUNDLFVBQUE7RUFDQSxpQkFBQTtBQVBKOztBQVlBO0VBQ0MsVUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQVREOztBQVdDO0VBQ0MsU0FBQTtFQUNBLFVBQUE7QUFURjs7QUFVRTtFQUNDLFNBQUE7RUFDRyxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQVJOOztBQVdDO0VBQ0Msa0JBQUE7RUFDRyxXQUFBO0FBVEwiLCJmaWxlIjoib3JkZXJkZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50eWFua3NuZXd7XG5cdHdpZHRoOiA5NSU7XG5cdGhlaWdodDogYXV0bztcblx0cGFkZGluZzogMzBweCAwO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRmb250LXNpemU6IDIwcHg7XG5cdG1hcmdpbjogMCBhdXRvO1xufVxuLm9yZGVyc3VtbXJ5e1xuXHR3aWR0aDogOTUlO1xuXHRoZWlnaHQ6IGF1dG87XG5cdG1hcmdpbjogMCBhdXRvO1xuXHQvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICAgIC8vIGJvcmRlcjogc29saWQgMXB4ICNlNGU0ZTQ7XG5cdC8vIGJvcmRlci1yYWRpdXM6IDNweDtcblx0Zm9udC1zaXplOiAxMnB4O1xuXHRtYXJnaW4tdG9wOiAxMHB4O1xuXHQuc3VtbXJ5bGVmdHtcblx0XHR3aWR0aDogNTAlO1xuXHRcdGZsb2F0OiBsZWZ0O1xuXHRcdC8vIGJvcmRlci1yaWdodDogc29saWQgMXB4ICNDQ0M7XG5cdFx0cGFkZGluZzogMnB4O1xuXHRcdFxuXHRcdHVse1xuXHRcdFx0bWFyZ2luOiAwO1xuXHRcdCAgICBwYWRkaW5nOiAwO1xuXHRcdCAgICBmb250LXdlaWdodDogYm9sZDtcblx0XHQgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHQgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG5cdFx0XHRsaXtcblx0XHRcdFx0bGlzdC1zdHlsZTogbm9uZTtcblx0XHRcdCAgICBmb250LXdlaWdodDogbm9ybWFsO1xuXHRcdFx0ICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuXHRcdFx0ICAgIHBhZGRpbmc6IDJweCAwO1xuXHRcdFx0ICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xuXHRcdFx0XHRzcGFue1xuXHRcdFx0XHRcdGZsb2F0OiByaWdodDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHQuc3VtbXJ5cmlnaHR7XG5cdFx0d2lkdGg6IDUwJTtcblx0XHRmbG9hdDogcmlnaHQ7XG5cdFx0cGFkZGluZzogMnB4O1xuXHRcdHVse1xuXHRcdFx0bWFyZ2luOiAwO1xuXHRcdCAgICBwYWRkaW5nOiAwO1xuXHRcdCAgICBmb250LXdlaWdodDogYm9sZDtcblx0XHQgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHQgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcblx0XHRcdGxpe1xuXHRcdFx0XHRsaXN0LXN0eWxlOiBub25lO1xuXHRcdFx0ICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG5cdFx0XHQgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG5cdFx0XHQgICAgcGFkZGluZzogMnB4IDA7XG5cdFx0XHQgICAgbGluZS1oZWlnaHQ6IDE0cHg7XG5cdFx0XHRcdHNwYW57XG5cdFx0XHRcdFx0ZmxvYXQ6IHJpZ2h0O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbi5wcm9kdWN0aGVhZGxpc3R7XG5cdHdpZHRoOiA5NSU7XG5cdGhlaWdodDogYXV0bztcblx0bWFyZ2luOiAwIGF1dG87XG5cdC8vIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gICAgLy8gYm9yZGVyOiBzb2xpZCAxcHggI2U0ZTRlNDtcblx0Zm9udC1zaXplOiAxMnB4O1xuXHRwYWRkaW5nOiA3cHggMTBweDtcblx0bWFyZ2luOiAxNXB4IGF1dG8gMCBhdXRvO1xuXHRmb250LXdlaWdodDogYm9sZDtcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBcblx0dWx7XG5cdFx0XHRtYXJnaW46IDA7XG5cdFx0ICAgIHBhZGRpbmc6IDA7XG5cdFx0ICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRcdCAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRcdCAgICBsaW5lLWhlaWdodDogMjRweDtcblx0XHRcdGxpe1xuXHRcdFx0XHRsaXN0LXN0eWxlOiBub25lO1xuXHRcdFx0ICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuXHRcdFx0ICAgIHBhZGRpbmc6IDJweCAwO1xuXHRcdFx0ICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xuXHRcdFx0ICAgIGZsb2F0OiBsZWZ0O1xuXHRcdFx0XHRzcGFue1xuXHRcdFx0XHRcdGZsb2F0OiByaWdodDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Lml0ZW17XG5cdFx0XHRcdHdpZHRoOiA2MCU7XG5cdFx0XHR9XG5cdFx0XHQucXR5e1xuXHRcdFx0XHR3aWR0aDogMjAlO1xuXHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHR9XG5cdFx0XHQucHJpY2V7XG5cdFx0XHRcdHdpZHRoOiAyMCU7XG5cdFx0XHRcdHRleHQtYWxpZ246IHJpZ2h0O1xuXHRcdFx0fVxuXHRcdH1cbn1cblxuXG5cblxuLnByb2R1Y2Rlc2NsaXN0e1xuXHR3aWR0aDogOTUlO1xuXHRoZWlnaHQ6IGF1dG87XG5cdG1hcmdpbjogMCBhdXRvO1xuXHRmb250LXNpemU6IDEycHg7XG5cdHBhZGRpbmc6IDdweCA0cHg7XG5cdHVse1xuXHRcdFx0bWFyZ2luOiAwO1xuXHRcdCAgICBwYWRkaW5nOiAwO1xuXHRcdCAgICBmb250LXdlaWdodDogYm9sZDtcblx0XHQgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHQgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG5cdFx0ICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjZjFmMWYxO1xuICAgIFx0XHRwYWRkaW5nOiA1cHggMDtcblx0XHRcdGxpe1xuXHRcdFx0XHRsaXN0LXN0eWxlOiBub25lO1xuXHRcdFx0ICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG5cdFx0XHQgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG5cdFx0XHQgICAgcGFkZGluZzogMnB4IDA7XG5cdFx0XHQgICAgbGluZS1oZWlnaHQ6IDE0cHg7XG5cdFx0XHQgICAgZmxvYXQ6IGxlZnQ7XG5cdFx0XHRcdHNwYW57XG5cdFx0XHRcdFx0ZmxvYXQ6IHJpZ2h0O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQuaXRlbXtcblx0XHRcdFx0d2lkdGg6IDYwJTtcblx0XHRcdH1cblx0XHRcdC5xdHl7XG5cdFx0XHRcdHdpZHRoOiAyMCU7XG5cdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdH1cblx0XHRcdC5wcmljZXtcblx0XHRcdFx0d2lkdGg6IDIwJTtcblx0XHRcdFx0dGV4dC1hbGlnbjogcmlnaHQ7XG5cdFx0XHR9XG5cdFx0fVxufVxuXG4ucHJpY2VjYWxje1xuXHR3aWR0aDogOTUlO1xuXHRoZWlnaHQ6IGF1dG87XG5cdG1hcmdpbjogMCBhdXRvO1xuXHRmb250LXNpemU6IDEycHg7XG5cdC8vIHBhZGRpbmc6IDdweCA0cHg7XG5cdHVse1xuXHRcdG1hcmdpbjogMDtcblx0XHRwYWRkaW5nOiAwO1xuXHRcdGxpe1xuXHRcdFx0bWFyZ2luOiAwO1xuXHRcdCAgICBsaXN0LXN0eWxlOiBub25lO1xuXHRcdCAgICBwYWRkaW5nOiA0cHggMDtcblx0XHQgICAgcGFkZGluZy1yaWdodDogNTJweDtcblx0XHQgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG5cdFx0ICAgIGZvbnQtc2l6ZTogMTRweDtcblx0XHR9XG5cdH1cblx0c3Bhbntcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgXHRyaWdodDogMTVweDtcblx0fVxufSJdfQ== */");

/***/ }),

/***/ 67055:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/orderdetails/orderdetails.page.html ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"header-background-color\">\n  \t<ion-menu-button slot=\"start\"></ion-menu-button>\n    <ion-title class=\"heaerfont\">Booking Details</ion-title>\n\t<ion-buttons slot=\"end\" (click)='done()'>\n    \t<ion-icon name=\"checkmark-done-outline\" class='headerrighticon'></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n\t    <ion-refresher-content></ion-refresher-content>\n\t </ion-refresher>\n\t<div class=\"tyanksnew\" *ngIf=\"isNeword\">\n\t\tThank you for your booking\n\t</div>\n\t<div class=\"ordersummry\">\n\t\t<div class=\"summryleft\">\n\t\t\t<ul>\n\t\t\t\tSummary\n\t\t\t\t<li>Booking # <span>{{ordltls?.orderid}}</span></li>\n\t\t\t\t<li>Date <span>{{ordltls?.order_date}}</span></li>\n\t\t\t\t<li *ngIf='ordltls?.del_date'>Booking Date <span>{{ordltls?.del_date}}</span></li>\n\t\t\t\t<li>Booking Time <span>{{ordltls?.order_time}}</span></li>\n\t\t\t\t<li>Total  <span><code [innerHTML]='getappsetng?.currency_symbol'></code>{{ordltls?.total_pay}}</span></li>\n\t\t\t</ul>\n\t\t</div>\n\t\t<div class=\"summryright\">\n\t\t\t<ul>\n\t\t\t\t{{ordltls?.ttxtsmry}}\n\t\t\t\t<li>{{logedUser.name}}</li>\n\t\t\t\t<li>{{logedUser.mobile}}</li>\n\t\t\t\t<li>{{ordltls?.blspaddress}}</li>\n\n\t\t\t</ul>\n\t\t</div>\n\t\t<div class=\"clear\"></div>\n\t</div>\n\n\t<div class=\"productheadlist\">\n\t\t<ul>\n\t\t\t<li class=\"item\">Item</li>\n\t\t\t<li class=\"qty\">Price</li>\n\t\t\t<li class=\"price\">Total</li>\n\t\t\t<div class=\"clear\"></div>\n\t\t</ul>\n\t</div>\n\t<div class=\"producdesclist\">\n\t\t<ul *ngFor=\"let item of ordltls?.products\">\n\t\t\t<li class=\"item\">{{item.qty}} x {{item.item_name}}\n\t\t\t\t<div style=\"padding-left: 19px; color: #382fbb;\" class=\"optnitm\" *ngFor=\"let optn of item.options\">{{optn.name}} (<code [innerHTML]='getappsetng?.currency_symbol'></code>{{optn.total}})</div>\n\t\t\t\t<div style=\"padding-left: 19px; color: #382fbb;\" class=\"optnitm\" *ngFor=\"let mld of item.mealdeal\">{{mld.name}} (<code [innerHTML]='getappsetng?.currency_symbol'></code>{{mld.total}})</div>\n\t\t\t</li>\n\t\t\t<li class=\"qty\"><code [innerHTML]='getappsetng?.currency_symbol'></code>{{item.item_price}}</li>\n\t\t\t<li class=\"price\"><code [innerHTML]='getappsetng?.currency_symbol'></code>{{item.itm_final_total}}\n\t\t\t\t\n\t\t\t</li>\n\t\t\t<div class=\"clear\"></div>\n\t\t</ul>\n\t</div>\n\n\t<div class=\"pricecalc\">\n\t\t<ul>\n\t\t\t<li>Sub total &nbsp; <span><code [innerHTML]='getappsetng?.currency_symbol'></code>{{ordltls?.cart_total}}</span></li>\n\t\t\t<li *ngIf='ordltls?.offer_text'>{{ordltls?.offer_text}} <span><code [innerHTML]='getappsetng?.currency_symbol'></code>{{ordltls?.offer_amount}}</span></li>\n\t\t\t<li *ngIf=\"ordltls?.tax_lebel\">{{ordltls?.tax_lebel}} &nbsp; <span><code [innerHTML]='getappsetng?.currency_symbol'></code>{{ordltls?.tax_value}}</span></li>\n\t\t\t<li>Total &nbsp; <span><code [innerHTML]='getappsetng?.currency_symbol'></code>{{ordltls?.total_pay}}</span></li>\n\t\t\t<li *ngIf=\"ordltls?.usewallet == 'YES'\">Total Pay <span>{{iswaltpayamount}}</span></li>\n\t\t</ul>\n\t</div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_orderdetails_orderdetails_module_ts-es2015.js.map