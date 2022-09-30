(self["webpackChunkSalon"] = self["webpackChunkSalon"] || []).push([["src_app_products_products_module_ts"],{

/***/ 986:
/*!*****************************************************!*\
  !*** ./src/app/products/products-routing.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsPageRoutingModule": function() { return /* binding */ ProductsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _products_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products.page */ 43854);




const routes = [
    {
        path: '',
        component: _products_page__WEBPACK_IMPORTED_MODULE_0__.ProductsPage
    }
];
let ProductsPageRoutingModule = class ProductsPageRoutingModule {
};
ProductsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProductsPageRoutingModule);



/***/ }),

/***/ 88980:
/*!*********************************************!*\
  !*** ./src/app/products/products.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsPageModule": function() { return /* binding */ ProductsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _products_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products-routing.module */ 986);
/* harmony import */ var _products_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products.page */ 43854);







let ProductsPageModule = class ProductsPageModule {
};
ProductsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _products_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductsPageRoutingModule
        ],
        declarations: [_products_page__WEBPACK_IMPORTED_MODULE_1__.ProductsPage]
    })
], ProductsPageModule);



/***/ }),

/***/ 43854:
/*!*******************************************!*\
  !*** ./src/app/products/products.page.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsPage": function() { return /* binding */ ProductsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_products_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./products.page.html */ 75974);
/* harmony import */ var _products_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products.page.scss */ 27451);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_Providers_Basic_basic_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/Providers/Basic/basic-api.service */ 92306);
/* harmony import */ var src_Providers_Cart_cart_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/Providers/Cart/cart-api.service */ 65248);
/* harmony import */ var src_Providers_Local_local_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/Providers/Local/local-api.service */ 99068);
/* harmony import */ var src_Providers_Services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/Providers/Services/api.service */ 48158);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery */ 91704);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _itemdetails_itemdetails_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../itemdetails/itemdetails.page */ 48979);














let ProductsPage = class ProductsPage {
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
        this.isPrd = true;
    }
    ngOnInit() {
        this.getappsetng = this.localApi.getappseting();
        this.imgpath = _environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.imagepath;
        this.category_id = this.activatedRoute.snapshot.paramMap.get('category');
        this.sub_category_id = this.activatedRoute.snapshot.paramMap.get('subcategory');
        this.title = this.activatedRoute.snapshot.paramMap.get('title');
        this.getallProducts();
    }
    doRefresh(event) {
        setTimeout(() => {
            this.getallProducts();
            event.target.complete();
        }, 2000);
    }
    ionViewWillEnter() {
        this.totlaofcart();
        this.mycart = this.cart.getcart();
        this.carttotal = this.cart.getTotalCart();
        this.cartcount = this.mycart.length;
        this.basic.getObservable().subscribe((data) => {
            this.totlaofcart();
        });
    }
    totlaofcart() {
        this.mycart = this.cart.getcart();
        this.carttotal = this.cart.getTotalCart();
        this.cartcount = this.mycart.length;
    }
    getallProducts() {
        this.totlaofcart();
        this.postdata.category_id = this.category_id;
        this.postdata.sub_category_id = this.sub_category_id;
        this.basic.presentLoading();
        this.apiService.postdata('getproducts', this.postdata).subscribe((resp) => {
            this.allProducts = resp.data;
            if (this.allProducts.length > 0) {
                this.isPrd = true;
            }
            else {
                this.isPrd = false;
            }
            for (let i = 0; i < this.allProducts.length; i++) {
                let single = this.allProducts[i];
                let qty = this.cart.getSingleQty(single.id);
                this.allProducts[i].qty = qty;
                this.allProducts[i].crtbtn = 'Select';
                if (this.allProducts[i].hours_time) {
                    this.allProducts[i].corner_text = this.allProducts[i].hours_time + ' Hour';
                }
                if (this.allProducts[i].minutes_time) {
                    this.allProducts[i].corner_text = this.allProducts[i].minutes_time + ' Minutes';
                }
                if (this.allProducts[i].hours_time && this.allProducts[i].minutes_time) {
                    this.allProducts[i].corner_text = this.allProducts[i].hours_time + ' Hour ' + this.allProducts[i].minutes_time + ' Minutes';
                }
            }
            setTimeout(() => {
                this.basic.dismissloader();
            }, 1000);
        }, (err) => {
            return false;
        });
    }
    addtoCart(itm) {
        jquery__WEBPACK_IMPORTED_MODULE_7__('#addcartbtn_' + itm.id).hide();
        jquery__WEBPACK_IMPORTED_MODULE_7__('#qtycartbtn_' + itm.id).show();
        jquery__WEBPACK_IMPORTED_MODULE_7__('#itmqty_' + itm.id).html('1');
        this.cart.addcart(itm, '', '', '');
        this.totlaofcart();
    }
    minusqty(itm) {
        this.nowqty = '';
        this.nowval = '';
        this.nowqty = jquery__WEBPACK_IMPORTED_MODULE_7__('#itmqty_' + itm.id).html();
        if (this.nowqty == 1) {
            jquery__WEBPACK_IMPORTED_MODULE_7__('#addcartbtn_' + itm.id).show();
            jquery__WEBPACK_IMPORTED_MODULE_7__('#qtycartbtn_' + itm.id).hide();
        }
        this.nowval = parseInt(this.nowqty) - 1;
        jquery__WEBPACK_IMPORTED_MODULE_7__('#itmqty_' + itm.id).html(this.nowval);
        this.cart.minusqntyfrmprod(itm);
        this.totlaofcart();
    }
    addqty(itm) {
        this.nowqty = '';
        this.nowval = '';
        this.nowqty = jquery__WEBPACK_IMPORTED_MODULE_7__('#itmqty_' + itm.id).html();
        this.nowval = parseInt(this.nowqty) + 1;
        jquery__WEBPACK_IMPORTED_MODULE_7__('#itmqty_' + itm.id).html(this.nowval);
        this.cart.plusqnty(itm);
        this.totlaofcart();
    }
    openDetailsItem(itm) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _itemdetails_itemdetails_page__WEBPACK_IMPORTED_MODULE_8__.ItemdetailsPage,
                cssClass: 'my-custom-class',
                componentProps: {
                    'item': itm,
                },
                backdropDismiss: true
            });
            return yield modal.present();
        });
    }
    viewmycart() {
        this.route.navigate(['/booknow']);
    }
    backmenu() {
        this.location.back();
    }
    openAlergyInfo(val) {
        if (val.allergy_info) {
            this.basic.alert('Allergy Info:', val.allergy_info);
        }
    }
};
ProductsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.MenuController },
    { type: src_Providers_Services_api_service__WEBPACK_IMPORTED_MODULE_5__.ApiService },
    { type: src_Providers_Basic_basic_api_service__WEBPACK_IMPORTED_MODULE_2__.BasicApiService },
    { type: src_Providers_Local_local_api_service__WEBPACK_IMPORTED_MODULE_4__.LocalApiService },
    { type: src_Providers_Cart_cart_api_service__WEBPACK_IMPORTED_MODULE_3__.CartApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_12__.Location },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute }
];
ProductsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-products',
        template: _raw_loader_products_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_products_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProductsPage);



/***/ }),

/***/ 27451:
/*!*********************************************!*\
  !*** ./src/app/products/products.page.scss ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".productlists {\n  width: 100%;\n  height: auto;\n  position: relative;\n  background: #fff;\n  padding: 10px;\n  border-radius: 10px;\n  margin-top: 30px;\n  float: left;\n  margin-bottom: 10px;\n}\n.productlists .outofstkstamp {\n  width: 100%;\n  height: auto;\n  text-align: center;\n  position: absolute;\n  z-index: 9;\n  top: 24px;\n  left: 0;\n  opacity: 0.8;\n}\n.productlists .outofstkstamp img {\n  width: 145px;\n}\n.productlists .itemimg {\n  width: 100%;\n  height: 100%;\n}\n.productlists .pro_img {\n  width: 100%;\n  overflow: hidden;\n}\n.productlists .prdimg {\n  width: 100%;\n  height: auto;\n  position: relative;\n  overflow: hidden;\n}\n.productlists .prdimg img {\n  width: 100%;\n}\n.productlists .prdimg .cornertxt {\n  width: 100px;\n  height: auto;\n  letter-spacing: 1px;\n  text-transform: capitalize;\n  background: #9fbd08;\n  color: #000;\n  padding: 3px 10px;\n  margin: 0 0 10px 0;\n  line-height: 13px;\n  position: absolute;\n  top: 54px;\n  left: -15px;\n  transform-origin: 0 0;\n  transform: rotate(315deg);\n  z-index: 99;\n  font-size: 8px;\n  text-align: center;\n  text-shadow: 0 1px 1px #292929;\n  box-shadow: 1px 1px 3px #404040;\n}\n.productlists .prdimg .hotdeal {\n  background: #F00;\n}\n.productlists .prdimg .bestdeal {\n  background: #f7b312;\n}\n.productlists .cardbtn {\n  width: 30%;\n  background-color: #353535;\n  font-size: 11px;\n  text-transform: uppercase;\n  color: #FFF;\n  text-align: right;\n  margin: 0 auto 0;\n  line-height: 24px;\n  position: relative;\n  padding-right: 8px;\n  float: right;\n  border-radius: 8px;\n}\n.productlists .cardbtn ion-icon {\n  background-color: #ff4181;\n  position: absolute;\n  font-size: 14px;\n  left: 0;\n  top: 0;\n  height: 24px;\n  padding: 0 7px;\n  border-top-left-radius: 8px;\n  border-bottom-left-radius: 8px;\n}\n.productlists .soldoutbtn {\n  width: 100%;\n  background-color: #353535;\n  font-size: 10px;\n  text-transform: uppercase;\n  color: #FFF;\n  text-align: center;\n  margin: 0 auto 0;\n  line-height: 24px;\n  position: relative;\n  padding-right: 4px;\n  font-weight: bold;\n}\n.productlists .soldoutbtn ion-icon {\n  background-color: #d71818;\n  position: absolute;\n  font-size: 12px;\n  left: 0;\n  top: 0;\n  height: 24px;\n  padding: 0 7px;\n}\n.productlists .cartbtn {\n  width: 100%;\n  background-color: #fff;\n  font-size: 14px;\n  text-transform: uppercase;\n  color: #000;\n  text-align: center;\n  margin: 0 auto 5px;\n  line-height: 24px;\n  position: relative;\n  margin-top: 5px;\n  display: none;\n}\n.productlists .cartbtn .minusbtn {\n  left: 0;\n  background-color: #353535;\n  position: absolute;\n  font-size: 20px;\n  top: 0;\n  height: 24px;\n  padding: 0 5px;\n  color: #FFF;\n  line-height: 30px;\n  border-radius: 3px;\n}\n.productlists .cartbtn .plusbtn {\n  right: 0;\n  background-color: #353535;\n  position: absolute;\n  font-size: 20px;\n  top: 0;\n  height: 24px;\n  padding: 0 5px;\n  color: #FFF;\n  line-height: 30px;\n  border-radius: 3px;\n}\n.productlists .itemcntnt {\n  width: 100%;\n  height: auto;\n}\n.productlists .itemcntnt img {\n  height: 21px;\n  margin-right: 6px;\n}\n.productlists .itemname {\n  width: 100%;\n  height: auto;\n  font-size: 14px;\n  font-weight: bold;\n  padding: 7px 0 0;\n  color: #ff4181;\n}\n.productlists .itemname img {\n  height: 10px;\n}\n.productlists .itemdesc {\n  width: 100%;\n  height: auto;\n  font-size: 12px;\n  color: #353535;\n}\n.productlists .itemdesc p {\n  margin: 5px 0px;\n}\n.itemprice {\n  width: 70%;\n  height: auto;\n  font-size: 20px;\n  font-weight: bold;\n  float: left;\n}\n.itemprice span {\n  font-size: 12px;\n  font-weight: normal;\n}\n.pro_img {\n  width: 100%;\n  height: 110px;\n  overflow: hidden;\n  text-align: center;\n}\n.pro_img img {\n  height: 100%;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n}\n.claer {\n  clear: both;\n}\n.leftnameandother {\n  width: 70%;\n  height: 100%;\n  float: left;\n  padding-right: 15px;\n}\n.rightimgsnaothr {\n  width: 30%;\n  height: 100%;\n  float: left;\n  margin-top: -35px;\n}\n/*# sourceMappingURL=data:application/json;base64,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QUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUhKO0FBSUk7RUFDSSxZQUFBO0VBRUEsMkJBQUE7RUFBQSxzQkFBQTtBQUhSO0FBTUE7RUFDSSxXQUFBO0FBSEo7QUFLQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBRko7QUFJQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBREoiLCJmaWxlIjoicHJvZHVjdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ucHJvZHVjdGxpc3Rze1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIC5vdXRvZnN0a3N0YW1we1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgei1pbmRleDogOTtcbiAgICAgICAgdG9wOiAyNHB4O1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICAgIGltZ3tcbiAgICAgICAgICAgIHdpZHRoOiAxNDVweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5pdGVtaW1ne1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbiAgICAucHJvX2ltZ3tcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxuICAgIC5wcmRpbWd7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgaW1ne1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgLmNvcm5lcnR4dHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM5ZmJkMDg7XG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDNweCAxMHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwIDAgMTBweCAwO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEzcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDU0cHg7XG4gICAgICAgICAgICBsZWZ0OiAtMTVweDtcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDMxNWRlZyk7XG4gICAgICAgICAgICB6LWluZGV4OiA5OTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMXB4IDFweCAjMjkyOTI5O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggIzQwNDA0MDtcbiAgICAgICAgfVxuICAgICAgICAuaG90ZGVhbHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGMDA7XG4gICAgICAgIH1cbiAgICAgICAgLmJlc3RkZWFse1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y3YjMxMjtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuY2FyZGJ0bntcbiAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM1MzUzNTtcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBjb2xvcjogI0ZGRjtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvIDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNDE4MTs7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMCA3cHg7XG4gICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA4cHg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA4cHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuc29sZG91dGJ0bntcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzNTM1MzU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgY29sb3I6ICNGRkY7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG8gMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgcGFkZGluZy1yaWdodDogNHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgaW9uLWljb257XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDcxODE4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgN3B4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmNhcnRidG57XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvIDVweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAubWludXNidG57XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM1MzUzNTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgNXB4O1xuICAgICAgICAgICAgY29sb3I6ICNGRkY7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgfVxuICAgICAgICAucGx1c2J0bntcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM1MzUzNTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgNXB4O1xuICAgICAgICAgICAgY29sb3I6ICNGRkY7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuaXRlbWNudG50e1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBpbWd7XG4gICAgICAgICAgICBoZWlnaHQ6IDIxcHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDZweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuaXRlbW5hbWV7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHBhZGRpbmc6IDdweCAwIDA7XG4gICAgICAgIGNvbG9yOiAjZmY0MTgxO1xuICAgICAgICBpbWd7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLml0ZW1kZXNje1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGNvbG9yOiAjMzUzNTM1O1xuICAgICAgICAvLyBwYWRkaW5nOiA3cHggMDtcbiAgICAgICAgcHtcbiAgICAgICAgICAgIG1hcmdpbjogNXB4IDBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cbi5pdGVtcHJpY2V7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHNwYW57XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICB9XG59XG5cbi5wcm9faW1ne1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTEwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaW1ne1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIC8vIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICAgIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgfVxufVxuLmNsYWVye1xuICAgIGNsZWFyOiBib3RoO1xufVxuLmxlZnRuYW1lYW5kb3RoZXJ7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cbi5yaWdodGltZ3NuYW90aHJ7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luLXRvcDogLTM1cHg7XG59Il19 */");

/***/ }),

/***/ 75974:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/products.page.html ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"header-background-color\">\n  \t <!-- <ion-back-button slot=\"start\"></ion-back-button> --><ion-menu-button slot=\"start\"></ion-menu-button>\n    <ion-title class=\"heaerfont\">{{title}}</ion-title>\n    <ion-buttons slot=\"end\" (click)='viewmycart()'>\n    \t<div class=\"cartcount\" *ngIf='cartcount'>\n    \t\t{{cartcount}}\n    \t</div>\n      <ion-icon name=\"cart-outline\" class='headerrighticon'></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n\t    <ion-refresher-content></ion-refresher-content>\n\t </ion-refresher>\n   \n   <div class=\"padcontr\">\n    <div class=\"notcartitm\" *ngIf='!isPrd'>\n      <img src=\"assets/shoppingEmpty.png\"><p><span>There is no item for this category</span></p>\n      <div class=\"brwsmenu\" (click)='backmenu()'><span>Browse Menu</span></div>\n    </div>\n    <div *ngIf='isPrd'>\n      <div class=\"productlists\" *ngFor=\"let item of allProducts\">\n        <div>\n          <div class=\"leftnameandother\">\n            <div class=\"itemname\" (click)=\"openDetailsItem(item)\">\n              {{item.name}}\n            </div>\n            <div class=\"itemdesc\" (click)=\"openDetailsItem(item)\" [innerHTML]='item.description'>\n              <!-- <span [innerHTML]='item.description'></span> -->\n            </div>\n          </div>\n          <div class=\"rightimgsnaothr\">\n            <div class=\"itemimg\">\n              <div class=\"prdimg\">\n                <div class=\"pro_img\">\n                  <img src=\"{{imgpath}}products/{{item.imgs[0]}}\" style=\"border-radius: 8px; width: 100%; height: 100%; object-fit: cover;\" (click)=\"openDetailsItem(item)\">\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"claer\"></div>\n          <div style=\"margin-top: 2px;\">\n            <div class=\"itemprice\">\n              <span><code [innerHTML]='getappsetng?.currency_symbol'></code></span>{{item.price}}\n            </div>\n            <div [style.display]=\"item.qty?'none':'inherit'\" id=\"addcartbtn_{{item.id}}\" class=\"cardbtn\" (click)=\"addtoCart(item)\">\n              <ion-icon name=\"cart-outline\"></ion-icon> {{item.crtbtn}}\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"claer\"></div>\n  </div>\n</ion-content>\n\n<ion-footer class=\"ion-no-border myfootercart\" *ngIf='cartcount'>\n  <div class=\"leftprice\">\n    {{cartcount}} Service(s) | <code [innerHTML]='getappsetng?.currency_symbol'></code>{{carttotal}}<br>\n    \n  </div>\n  <div class=\"viewcardbtn\" (click)='viewmycart()'>\n    View Cart <ion-icon name=\"cart-outline\"></ion-icon>\n  </div>\n  <div class=\"clear\"></div>\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_products_products_module_ts-es2015.js.map