(self["webpackChunkSalon"] = self["webpackChunkSalon"] || []).push([["src_app_booknow_booknow_module_ts"],{

/***/ 65337:
/*!***************************************************!*\
  !*** ./src/app/booknow/booknow-routing.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BooknowPageRoutingModule": function() { return /* binding */ BooknowPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _booknow_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./booknow.page */ 63793);




const routes = [
    {
        path: '',
        component: _booknow_page__WEBPACK_IMPORTED_MODULE_0__.BooknowPage
    }
];
let BooknowPageRoutingModule = class BooknowPageRoutingModule {
};
BooknowPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BooknowPageRoutingModule);



/***/ }),

/***/ 78534:
/*!*******************************************!*\
  !*** ./src/app/booknow/booknow.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BooknowPageModule": function() { return /* binding */ BooknowPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _booknow_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./booknow-routing.module */ 65337);
/* harmony import */ var _booknow_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./booknow.page */ 63793);







let BooknowPageModule = class BooknowPageModule {
};
BooknowPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _booknow_routing_module__WEBPACK_IMPORTED_MODULE_0__.BooknowPageRoutingModule
        ],
        declarations: [_booknow_page__WEBPACK_IMPORTED_MODULE_1__.BooknowPage]
    })
], BooknowPageModule);



/***/ }),

/***/ 63793:
/*!*****************************************!*\
  !*** ./src/app/booknow/booknow.page.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BooknowPage": function() { return /* binding */ BooknowPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_booknow_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./booknow.page.html */ 9771);
/* harmony import */ var _booknow_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./booknow.page.scss */ 6324);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_Providers_Services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/Providers/Services/api.service */ 48158);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_Providers_Basic_basic_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/Providers/Basic/basic-api.service */ 92306);
/* harmony import */ var src_Providers_Local_local_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/Providers/Local/local-api.service */ 99068);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ 53760);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ 91704);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_Providers_Cart_cart_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/Providers/Cart/cart-api.service */ 65248);
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ 4329);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var _loginpage_loginpage_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../loginpage/loginpage.page */ 42985);
















let BooknowPage = class BooknowPage {
    constructor(menuCtrl, apiService, basic, localApi, cart, route, alertController, location, modalController, activatedRoute, actionSheetController, iab, platform, keyboard) {
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
        this.actionSheetController = actionSheetController;
        this.iab = iab;
        this.platform = platform;
        this.keyboard = keyboard;
        this.postdata = {};
        this.ipbroptions = {};
        this.ordervalue = {};
        this.extranotes = '';
        this.pay_amount = 0;
        this.offer_text = '';
        this.isRestricktn = false;
        this.deltimelist = [];
        this.isShopclose = false;
        this.isKeyboardHide = false;
        this.isordertomorrow = false;
    }
    ngOnInit() {
        this.localApi.removeapplyedofr();
        this.logedUser = this.localApi.getuser();
        if (this.logedUser) {
            if (!this.logedUser.device || !this.logedUser.token) {
                this.updateuserdetails();
            }
        }
    }
    ionViewWillEnter() {
        localStorage.setItem(_environments_environment__WEBPACK_IMPORTED_MODULE_9__.environment.storage_prefix + "bktohome", 'OK');
        this.imgpath = _environments_environment__WEBPACK_IMPORTED_MODULE_9__.environment.imagepath;
        this.logedUser = this.localApi.getuser();
        this.getappsetng = this.localApi.getappseting();
        if (this.getappsetng.timeslot[0].datename != 'Today') {
            this.isordertomorrow = true;
            this.nextdeday = this.getdayfullname(this.getappsetng.timeslot[0].datename);
            this.nexttime = this.tConv24(this.getappsetng.timeslot[0].value);
        }
        if (this.getappsetng.restrictions_label) {
            this.restrictns_lbl = this.getappsetng.restrictions_label;
            this.restrictns_txt = this.getappsetng.restrictions_text;
        }
        this.localApi.removedeladrs();
        this.localApi.removedelcost();
        this.localApi.removextrnt();
        var totaladditional = parseFloat(this.getappsetng.additional_one_value) + parseFloat(this.getappsetng.additional_two_value) + parseFloat(this.getappsetng.additional_three_value);
        this.totaladditional = totaladditional.toFixed(2);
        var chsdeltime = this.localApi.getdeltime();
        if (chsdeltime) {
            var delday = chsdeltime.split(' -')[0];
            var deltm = chsdeltime.split(' -')[1];
            this.chsdeltime = delday + ' - ' + deltm;
        }
        this.getallProducts();
        this.keyboard.onKeyboardWillShow().subscribe(() => {
            this.isKeyboardHide = false;
        });
        this.keyboard.onKeyboardWillHide().subscribe(() => {
            this.isKeyboardHide = true;
        });
    }
    tConv24(time24) {
        var ts = time24;
        this.hrsfr = +ts.substr(0, 2);
        this.hrert = (this.hrsfr % 12) || 12;
        this.hrert = (this.hrert < 10) ? ("0" + this.hrert) : this.hrert; // leading 0 at the left for 1 digit hours
        var ampm = this.hrsfr < 12 ? " AM" : " PM";
        ts = this.hrert + ts.substr(2, 3) + ampm;
        return ts;
    }
    clearmycart() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            let alert = yield this.alertController.create({
                header: 'Attention!',
                message: 'This will clear all services in your cart. Do you wish to continue?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'OK',
                        handler: () => {
                            this.cart.removeCart();
                            this.ionViewWillEnter();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    getdayfullname(name) {
        var dayname = {
            'Mon': 'Monday',
            'Tue': 'Tuesday',
            'Wed': 'Wednesday',
            'Thu': 'Thursday',
            'Fri': 'Friday',
            'Sat': 'Saturday',
            'Sun': 'Sunday',
        };
        return dayname[name];
    }
    updateuserdetails() {
        this.logedUser = this.localApi.getuser();
        if (this.logedUser) {
            this.logedUser.token = localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_9__.environment.storage_prefix + 'userdevicetoken');
            if (this.platform.is('android')) {
                this.logedUser.device_type = 'Android';
            }
            else {
                this.logedUser.device_type = 'iOS';
            }
            this.apiService.postdata('userfoceupdate', this.logedUser).subscribe((resp) => {
                this.localApi.setuser(resp.data);
                this.logedUser = this.localApi.getuser();
            }, (err) => {
                return false;
            });
        }
    }
    cancelcpn() {
        this.localApi.removeapplyedofr();
        this.ionViewWillEnter();
    }
    doRefresh(event) {
        console.log('Begin async operation');
        setTimeout(() => {
            this.getallProducts();
            event.target.complete();
        }, 2000);
    }
    checkshopstatus() {
        if (this.getappsetng.opentime.toDayShop == 'CLOSE') {
            this.isShopclose = true;
            this.closetxt = this.getappsetng.opentime;
        }
        else {
            // this.getdeltimes();
        }
    }
    noshopping() {
        this.isShopclose = false;
        // this.getdeltimes();
    }
    getallProducts() {
        this.getappsetng = this.localApi.getappseting();
        console.log("this.getappsetng", this.getappsetng);
        this.mycart = this.cart.getcart();
        this.carttotal = this.cart.getTotalCart();
        this.cartcount = this.mycart.length;
        if (this.cartcount > 0) {
            this.isKeyboardHide = true;
        }
        else {
            this.isKeyboardHide = true;
        }
        if (this.getappsetng.tax_lebel) {
            var taxvalue = parseFloat(this.carttotal) * parseFloat(this.getappsetng.tax_value) / 100;
            this.taxvalue = taxvalue.toFixed(2);
        }
        else {
            this.taxvalue = '0.00';
        }
        this.apldofrs = this.localApi.getapplyedofr();
        if (this.apldofrs) {
            if (this.apldofrs.off_type == 'Flat') {
                this.offer_text = 'Flat ' + this.getappsetng.currency_symbol + this.apldofrs.off_value + ' diccount applied';
                this.off_amount = this.apldofrs.off_value;
            }
            else {
                this.offer_text = this.apldofrs.off_value + '% discount applied';
                this.dicuctamnt = (this.carttotal * this.apldofrs.off_value) / 100;
                this.off_amount = this.dicuctamnt.toFixed(2);
            }
            this.payamuntcalc = parseFloat(this.carttotal) - parseFloat(this.off_amount);
            var pay_amount = parseFloat(this.payamuntcalc) + parseFloat(this.taxvalue) + parseFloat(this.totaladditional);
            this.pay_amount = pay_amount.toFixed(2);
            // this.pay_amount = this.carttotal;
        }
        else {
            var pay_amount = parseFloat(this.carttotal) + parseFloat(this.taxvalue) + parseFloat(this.totaladditional);
            this.pay_amount = pay_amount.toFixed(2);
        }
        if (this.getappsetng.delivery_free > this.carttotal) {
            var restfredelprx = parseFloat(this.getappsetng.delivery_free) - parseFloat(this.carttotal);
            this.restfredelprx = restfredelprx.toFixed(2);
            this.mrprcfrdelfree = 'Get FREE.Add another ' + this.getappsetng.currency_symbol + this.restfredelprx;
        }
        else {
            this.mrprcfrdelfree = '';
        }
    }
    getdeltimes(date) {
        this.postdata.snddate = date;
        this.basic.presentLoading();
        this.apiService.postdata('getdeltimebreak', this.postdata).subscribe((resp) => {
            let timesdel = resp.data;
            if (timesdel.status == 'Close') {
                this.basic.alert('Info:', timesdel.message);
            }
            else {
                let theNewInputs = [];
                for (let i = 0; i < timesdel.length; i++) {
                    theNewInputs.push({
                        name: 'deltimmy',
                        type: 'radio',
                        value: timesdel[i].datename + ' - ' + timesdel[i].value + ' - ' + date,
                        checked: false,
                        label: timesdel[i].datename + ' - ' + timesdel[i].value
                    });
                }
                this.deltimelist = theNewInputs;
            }
            setTimeout(() => {
                this.basic.dismissloader();
                if (timesdel.status != 'Close') {
                    this.opndeltimelist();
                }
            }, 1000);
        }, (err) => {
            this.basic.dismissloader();
            return false;
        });
    }
    opndeltimelist() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'freeddelmessages',
                header: 'Select time',
                subHeader: this.mrprcfrdelfree,
                inputs: this.deltimelist,
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel');
                        }
                    }, {
                        text: 'OK',
                        handler: (val) => {
                            if (val) {
                                if (val == 'future') {
                                    this.opendatetimedel();
                                }
                                else {
                                    this.localApi.setdeltime(val);
                                    var delday = val.split(' -')[0];
                                    var deltm = val.split(' -')[1];
                                    this.chsdeltime = delday + ' - ' + deltm;
                                }
                            }
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    opendatetimedel() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'freeddelmessage',
                header: 'Select date',
                subHeader: this.mrprcfrdelfree,
                inputs: [
                    {
                        name: 'del_date',
                        type: 'date',
                        placeholder: 'Select a date'
                    }
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel');
                        }
                    }, {
                        text: 'OK',
                        handler: (val) => {
                            if (!val.del_date) {
                                this.basic.alert('Error', 'Please choose a date');
                                return false;
                            }
                            else {
                                this.getdeltimes(val.del_date);
                                return true;
                            }
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    addqty(itm) {
        this.cancelcpn();
        this.nowqty = '';
        this.nowval = '';
        this.nowqty = jquery__WEBPACK_IMPORTED_MODULE_6__('#itmqtyval_' + itm.id).html();
        this.nowval = parseInt(this.nowqty) + 1;
        jquery__WEBPACK_IMPORTED_MODULE_6__('#itmqtyval_' + itm.id).html(this.nowval);
        this.cart.plusqnty(itm);
        this.getallProducts();
    }
    munisqty(itm) {
        this.cancelcpn();
        this.nowqty = '';
        this.nowval = '';
        this.nowqty = jquery__WEBPACK_IMPORTED_MODULE_6__('#itmqtyval_' + itm.id).html();
        this.nowval = parseInt(this.nowqty) - 1;
        jquery__WEBPACK_IMPORTED_MODULE_6__('#itmqtyval_' + itm.id).html(this.nowval);
        this.cart.minusqntyfrmprod(itm);
        this.getallProducts();
    }
    continueShp() {
        this.location.back();
    }
    alrestclose() {
        this.isRestricktn = false;
        this.isordertomorrow = false;
    }
    callforprocessd() {
        console.log("this.getappsetng", this.getappsetng);
        if (this.getappsetng.restrictions_label) {
            this.isRestricktn = true;
        }
        else if (!this.chsdeltime) {
            this.basic.alert('Select Date and Time:', 'Please choose date and time');
        }
        else {
            this.processed();
        }
    }
    procesingtime() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Cooking Times:',
                message: this.getappsetng.preparation_time,
                buttons: [{
                        text: 'OK',
                        handler: () => {
                            this.processed();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    processed() {
        var chsdeltime = this.localApi.getdeltime();
        if (!chsdeltime) {
            this.basic.alert('Error:', 'Please chhose date and time');
        }
        else {
            this.logedUser = this.localApi.getuser();
            if (this.logedUser) {
                var carttotal = parseFloat(this.carttotal);
                var min_amount_checkout = parseFloat(this.getappsetng.min_amount_checkout);
                if (carttotal < min_amount_checkout) {
                    var morePr = parseFloat(this.getappsetng.min_amount_checkout) - parseFloat(this.carttotal);
                    this.basic.alert('Info:', 'Minimum Booking Value is ' + this.getappsetng.currency_symbol + this.getappsetng.min_amount_checkout + ', Please add another ' + this.getappsetng.currency_symbol + morePr.toFixed(2) + ' worth of services');
                }
                else {
                    this.openorderoption();
                }
            }
            else {
                this.openloginpanel();
            }
        }
    }
    openloginpanel() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            console.log('OK');
            const modal = yield this.modalController.create({
                component: _loginpage_loginpage_page__WEBPACK_IMPORTED_MODULE_10__.LoginpagePage,
                cssClass: 'my-custom-class',
                backdropDismiss: true
            });
            modal.onDidDismiss().then((data) => {
                console.log('data', data);
                if (data.data) {
                    this.processed();
                }
            });
            return yield modal.present();
        });
    }
    openorderoption() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.route.navigate(['/checkout']);
        });
    }
    gofers() {
        this.logedUser = this.localApi.getuser();
        if (this.logedUser) {
            this.route.navigate(['/offer/apply']);
        }
        else {
            this.openlogforofr();
        }
    }
    openlogforofr() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _loginpage_loginpage_page__WEBPACK_IMPORTED_MODULE_10__.LoginpagePage,
                cssClass: 'my-custom-class',
                backdropDismiss: true
            });
            modal.onDidDismiss().then((data) => {
                console.log('data', data);
                if (data.data) {
                    this.route.navigate(['/offer/apply']);
                }
            });
            return yield modal.present();
        });
    }
    homego() {
        this.route.navigate(['/homepage']);
    }
    removeXtrs(item) {
        this.cart.deleteProduct(item);
        this.ionViewWillEnter();
    }
};
BooknowPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.MenuController },
    { type: src_Providers_Services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: src_Providers_Basic_basic_api_service__WEBPACK_IMPORTED_MODULE_3__.BasicApiService },
    { type: src_Providers_Local_local_api_service__WEBPACK_IMPORTED_MODULE_4__.LocalApiService },
    { type: src_Providers_Cart_cart_api_service__WEBPACK_IMPORTED_MODULE_7__.CartApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.AlertController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_14__.Location },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ActionSheetController },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__.InAppBrowser },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.Platform },
    { type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_8__.Keyboard }
];
BooknowPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
        selector: 'app-booknow',
        template: _raw_loader_booknow_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_booknow_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], BooknowPage);



/***/ }),

/***/ 6324:
/*!*******************************************!*\
  !*** ./src/app/booknow/booknow.page.scss ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".itemlists {\n  padding: 10px 10px 5px 10px;\n  background-color: #fff;\n  border-bottom: solid 1px #efebeb;\n  position: relative;\n}\n\n.nameanddesc {\n  width: 75%;\n  height: auto;\n  float: left;\n  font-size: 13px;\n  line-height: 14px;\n}\n\n.nameanddesc span {\n  font-size: 11px;\n  color: #717171;\n}\n\n.chopclosenow {\n  width: 100%;\n  height: 100%;\n  padding: 0 20px;\n  position: fixed;\n  z-index: 999;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: table;\n  text-align: center;\n  color: #fff;\n}\n\n.chopclosenow span {\n  display: table-cell;\n  vertical-align: middle;\n}\n\n.chopclosenow .okbtnforrevoew {\n  width: 100%;\n  height: auto;\n  text-align: center;\n}\n\n.chopclosenow .okbtnforrevoew span {\n  background-color: #6780c5;\n  display: inline-block;\n  padding: 6px 40px;\n  text-transform: uppercase;\n  border-radius: 3px;\n}\n\n.qtybox {\n  width: 25%;\n  height: auto;\n  float: left;\n  text-align: center;\n  border: solid 1px #dcdcdc;\n  line-height: 29px;\n  position: relative;\n  font-size: 14px;\n}\n\n.qtybox .minusbtn {\n  color: #ff4181;\n  position: absolute;\n  left: 0;\n  top: 0;\n  font-size: 19px;\n  padding: 0 4px;\n  padding-top: 5px;\n  line-height: 19px;\n}\n\n.qtybox .qtyvalue {\n  color: #ff4181;\n}\n\n.qtybox .plsvalue {\n  color: #ff4181;\n  position: absolute;\n  right: 0;\n  top: 0;\n  font-size: 19px;\n  padding: 0 4px;\n  padding-top: 5px;\n  line-height: 19px;\n}\n\n.totalitm {\n  width: 25%;\n  height: auto;\n  float: right;\n  text-align: right;\n  line-height: 30px;\n  font-size: 14px;\n}\n\n.ifanythonote {\n  width: 100%;\n  height: auto;\n  position: relative;\n  padding: 10px 10px 10px 50px;\n  background-color: #fff;\n  position: relative;\n}\n\n.ifanythonote input {\n  width: 100%;\n  font-size: 12px;\n  border: none;\n  background-color: transparent;\n  outline: none;\n}\n\n.ifanythonote ion-icon {\n  position: absolute;\n  left: 15px;\n  top: 13px;\n  font-size: 18px;\n  color: #8a8989;\n}\n\n.appcoupncd {\n  width: 100%;\n  height: auto;\n  padding: 15px 10px 15px 49px;\n  background-color: #fff;\n  position: relative;\n  margin: 10px auto;\n  font-size: 13px;\n  font-weight: bold;\n  line-height: 12px;\n}\n\n.appcoupncd img {\n  position: absolute;\n  height: 24px;\n  left: 12px;\n  top: 10px;\n}\n\n.appcoupncd span {\n  float: right;\n}\n\n.appcoupncd b {\n  color: #ff4181;\n  font-size: 10px;\n  font-weight: normal;\n}\n\n.billdeatils {\n  width: 100%;\n  height: auto;\n  padding: 15px 10px;\n  background-color: #fff;\n  position: relative;\n  margin: 5px auto;\n  font-size: 13px;\n}\n\n.billdeatils .head {\n  font-size: 13px;\n  margin-bottom: 10px;\n  font-weight: bold;\n}\n\n.billdeatils ul {\n  margin: 0;\n  padding: 0;\n}\n\n.billdeatils ul li {\n  list-style: none;\n  font-size: 12px;\n  padding: 7px 0;\n  border-bottom: solid 1px #ececec;\n}\n\n.billdeatils ul li span {\n  float: right;\n}\n\n.billdeatils ul .topay {\n  font-weight: bold;\n}\n\n.crtfooter {\n  width: 100%;\n  height: auto;\n  background-color: transparent;\n  font-size: 12px;\n}\n\n.crtfooter .leftsidehalf {\n  width: 50%;\n  height: auto;\n  float: left;\n  background-color: #ff4181;\n  text-align: center;\n  line-height: 50px;\n  text-transform: uppercase;\n  color: #fff;\n}\n\n.crtfooter .rightsidehlf {\n  width: 50%;\n  height: auto;\n  float: left;\n  background-color: #000;\n  text-align: center;\n  line-height: 50px;\n  text-transform: uppercase;\n  color: #fff;\n}\n\n.preorder {\n  float: none;\n  font-size: 8px !important;\n  font-weight: bold;\n  color: #f00 !important;\n}\n\n::-moz-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #d47906;\n  opacity: 1;\n  /* Firefox */\n}\n\n::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #d47906;\n  opacity: 1;\n  /* Firefox */\n}\n\n:-ms-input-placeholder {\n  /* Internet Explorer 10-11 */\n  color: #d47906;\n}\n\n::-ms-input-placeholder {\n  /* Microsoft Edge */\n  color: #d47906;\n}\n\n.xtrascss {\n  width: 85%;\n  color: #ff4181;\n}\n\n.xtrascss span {\n  color: #ff4181;\n}\n\n.xtrasremove {\n  position: absolute;\n  right: 0;\n  top: 0;\n  color: #f00;\n  width: 38px;\n  text-align: right;\n  height: 33px;\n}\n\n.highdemandbanner {\n  width: 100%;\n  height: auto;\n  padding: 10px 10px;\n  background: #da2a2c;\n  font-size: 11px;\n  font-weight: bold;\n  color: #fff;\n  position: relative;\n  padding-left: 50px;\n  margin-top: 8px;\n}\n\n.highdemandbanner ion-icon {\n  position: absolute;\n  left: 12px;\n  color: #fff;\n  font-size: 24px;\n}\n\n.blinking {\n  animation: blinkingText 1s infinite;\n}\n\n@keyframes blinkingText {\n  0% {\n    color: #dace2a;\n  }\n  /*49%{  color: #2d3dff; }*/\n  50% {\n    color: #fff;\n  }\n  /*99%{  color:#fb01ff;  }*/\n  100% {\n    color: #dace2a;\n  }\n}\n\n.minusbtn {\n  color: #ff4181;\n  left: 0;\n  top: 0;\n  font-size: 19px;\n  padding: 0 4px;\n  padding-top: 5px;\n  line-height: 19px;\n}\n/*# sourceMappingURL=data:application/json;base64,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QUE7QUFRSjs7QUFOQTtFQUFnQix5Q0FBQTtFQUNkLGNBQUE7RUFDQSxVQUFBO0VBQVksWUFBQTtBQVdkOztBQWJBO0VBQWdCLHlDQUFBO0VBQ2QsY0FBQTtFQUNBLFVBQUE7RUFBWSxZQUFBO0FBV2Q7O0FBUkE7RUFBeUIsNEJBQUE7RUFDdkIsY0FBQTtBQVlGOztBQVRBO0VBQTBCLG1CQUFBO0VBQ3hCLGNBQUE7QUFhRjs7QUFYQTtFQUNDLFVBQUE7RUFDQSxjQUFBO0FBY0Q7O0FBYkM7RUFDQyxjQUFBO0FBZUY7O0FBWEE7RUFDQyxrQkFBQTtFQUNHLFFBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFjSjs7QUFYQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQWNGOztBQWJFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFlSjs7QUFaQTtFQUNFLG1DQUFBO0FBZUY7O0FBYkE7RUFDRTtJQUFNLGNBQUE7RUFpQk47RUFoQkEsMEJBQUE7RUFDQTtJQUFNLFdBQUE7RUFtQk47RUFsQkEsMEJBQUE7RUFDQTtJQUFNLGNBQUE7RUFxQk47QUFDRjs7QUFuQkE7RUFDQyxjQUFBO0VBRUEsT0FBQTtFQUNBLE1BQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFvQkQiLCJmaWxlIjoiYm9va25vdy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbWxpc3Rze1xuXHRwYWRkaW5nOiAxMHB4IDEwcHggNXB4IDEwcHg7O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXHRib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2VmZWJlYjtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm5hbWVhbmRkZXNje1xuXHR3aWR0aDogNzUlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBmbG9hdDogbGVmdDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDE0cHg7XG5cdHNwYW57XG5cdFx0Zm9udC1zaXplOiAxMXB4O1xuXHRcdGNvbG9yOiAjNzE3MTcxO1xuXHR9XG59XG4uY2hvcGNsb3Nlbm93e1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiAxMDAlO1xuXHRwYWRkaW5nOiAwIDIwcHg7XG5cdHBvc2l0aW9uOiBmaXhlZDtcblx0ei1pbmRleDogOTk5O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7XG5cdGRpc3BsYXk6IHRhYmxlO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGNvbG9yOiAjZmZmO1xuXHRzcGFue1xuXHRcdGRpc3BsYXk6IHRhYmxlLWNlbGw7XG5cdFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcblx0fVxuXHQub2tidG5mb3JyZXZvZXd7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0aGVpZ2h0OiBhdXRvO1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRzcGFue1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogIzY3ODBjNTtcblx0XHQgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdCAgICBwYWRkaW5nOiA2cHggNDBweDtcblx0XHQgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHQgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuXHRcdH1cblx0fVxufVxuLnF0eWJveHtcblx0d2lkdGg6IDI1JTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlcjogc29saWQgMXB4ICNkY2RjZGM7XG4gICAgbGluZS1oZWlnaHQ6IDI5cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcblx0Lm1pbnVzYnRue1xuXHRcdGNvbG9yOiAjZmY0MTgxO1xuXHQgICAgcG9zaXRpb246IGFic29sdXRlO1xuXHQgICAgbGVmdDogMDtcblx0ICAgIHRvcDogMDtcblx0ICAgIGZvbnQtc2l6ZTogMTlweDtcblx0ICAgIHBhZGRpbmc6IDAgNHB4O1xuXHQgICAgcGFkZGluZy10b3A6IDVweDtcblx0ICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xuXHR9XG5cdC5xdHl2YWx1ZXtcblx0XHRjb2xvcjogI2ZmNDE4MTtcblx0fVxuXHQucGxzdmFsdWV7XG5cdFx0Y29sb3I6ICNmZjQxODE7XG5cdCAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cdCAgICByaWdodDogMDtcblx0ICAgIHRvcDogMDtcblx0ICAgIGZvbnQtc2l6ZTogMTlweDtcblx0ICAgIHBhZGRpbmc6IDAgNHB4O1xuXHQgICAgcGFkZGluZy10b3A6IDVweDtcblx0ICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xuXHR9XG59XG4udG90YWxpdG17XG5cdHdpZHRoOiAyNSU7XG5cdGhlaWdodDogYXV0bztcblx0ZmxvYXQ6IHJpZ2h0O1xuXHR0ZXh0LWFsaWduOiByaWdodDtcblx0bGluZS1oZWlnaHQ6IDMwcHg7XG5cdGZvbnQtc2l6ZTogMTRweDtcbn1cbi5pZmFueXRob25vdGV7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IGF1dG87XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0cGFkZGluZzogMTBweCAxMHB4IDEwcHggNTBweDtcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRpbnB1dHtcblx0XHR3aWR0aDogMTAwJTtcblx0ICAgIGZvbnQtc2l6ZTogMTJweDtcblx0ICAgIC8vIGhlaWdodDogMzBweDtcblx0ICAgIGJvcmRlcjogbm9uZTtcblx0ICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXHQgICAgb3V0bGluZTogbm9uZTtcblx0fVxuXHRpb24taWNvbntcblx0ICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0ICAgIGxlZnQ6IDE1cHg7XG5cdCAgICB0b3A6IDEzcHg7XG5cdCAgICBmb250LXNpemU6IDE4cHg7XG5cdCAgICBjb2xvcjogIzhhODk4OTtcblx0fVxufVxuLmFwcGNvdXBuY2R7XG5cdHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nOiAxNXB4IDEwcHggMTVweCA0OXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogMTBweCBhdXRvO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBsaW5lLWhlaWdodDogMTJweDtcblx0aW1ne1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0ICAgIGhlaWdodDogMjRweDtcblx0ICAgIGxlZnQ6IDEycHg7XG5cdCAgICB0b3A6IDEwcHg7XG5cdH1cblx0c3Bhbntcblx0XHRmbG9hdDogcmlnaHQ7XG5cdH1cblx0Yntcblx0XHRjb2xvcjogI2ZmNDE4MTtcblx0ICAgIGZvbnQtc2l6ZTogMTBweDtcblx0ICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG5cdH1cbn1cbi5iaWxsZGVhdGlsc3tcblx0d2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmc6IDE1cHggMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDVweCBhdXRvO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAuaGVhZHtcbiAgICBcdGZvbnQtc2l6ZTogMTNweDtcbiAgICBcdG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgXHRmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gICAgdWx7XG4gICAgXHRtYXJnaW46IDA7XG4gICAgXHRwYWRkaW5nOiAwO1xuICAgIFx0bGl7XG4gICAgXHRcdGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgXHRcdGZvbnQtc2l6ZTogMTJweDtcbiAgICBcdFx0cGFkZGluZzogN3B4IDA7XG4gICAgXHRcdGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjZWNlY2VjO1xuICAgIFx0XHRzcGFue1xuICAgIFx0XHRcdGZsb2F0OiByaWdodDtcbiAgICBcdFx0fVxuICAgIFx0fVxuICAgIFx0LnRvcGF5e1xuICAgIFx0XHRmb250LXdlaWdodDogYm9sZDtcbiAgICBcdH1cbiAgICB9XG59XG5cbi5jcnRmb290ZXJ7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IGF1dG87XG5cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXHRmb250LXNpemU6IDEycHg7XG5cdC5sZWZ0c2lkZWhhbGZ7XG5cdFx0d2lkdGg6IDUwJTtcblx0XHRoZWlnaHQ6IGF1dG87XG5cdFx0ZmxvYXQ6IGxlZnQ7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmNDE4MTtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0bGluZS1oZWlnaHQ6IDUwcHg7XG5cdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHRjb2xvcjogI2ZmZjtcblx0fVxuXHQucmlnaHRzaWRlaGxme1xuXHRcdHdpZHRoOiA1MCU7XG5cdFx0aGVpZ2h0OiBhdXRvO1xuXHRcdGZsb2F0OiBsZWZ0O1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdGxpbmUtaGVpZ2h0OiA1MHB4O1xuXHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdFx0Y29sb3I6ICNmZmY7XG5cdH1cbn1cbi5wcmVvcmRlcntcblx0ZmxvYXQ6IG5vbmU7XG4gICAgZm9udC1zaXplOiA4cHggIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogI2YwMCAhaW1wb3J0YW50O1xufVxuOjpwbGFjZWhvbGRlciB7IC8qIENocm9tZSwgRmlyZWZveCwgT3BlcmEsIFNhZmFyaSAxMC4xKyAqL1xuICBjb2xvcjogI2Q0NzkwNjtcbiAgb3BhY2l0eTogMTsgLyogRmlyZWZveCAqL1xufVxuXG46LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTAtMTEgKi9cbiAgY29sb3I6ICNkNDc5MDY7XG59XG5cbjo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgLyogTWljcm9zb2Z0IEVkZ2UgKi9cbiAgY29sb3I6ICNkNDc5MDY7XG59XG4ueHRyYXNjc3N7XG5cdHdpZHRoOiA4NSU7XG5cdGNvbG9yOiAjZmY0MTgxO1xuXHRzcGFue1xuXHRcdGNvbG9yOiAjZmY0MTgxO1xuXHR9XG59XG5cbi54dHJhc3JlbW92ZXtcblx0cG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgICBjb2xvcjogI2YwMDtcbiAgICB3aWR0aDogMzhweDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBoZWlnaHQ6IDMzcHg7XG59XG5cbi5oaWdoZGVtYW5kYmFubmVye1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNkYTJhMmM7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjZmZmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogNTBweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBpb24taWNvbntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMTJweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gIH1cbn1cbi5ibGlua2luZ3tcbiAgYW5pbWF0aW9uOmJsaW5raW5nVGV4dCAxcyBpbmZpbml0ZTtcbn1cbkBrZXlmcmFtZXMgYmxpbmtpbmdUZXh0e1xuICAwJXsgICBjb2xvcjogI2RhY2UyYTsgIH1cbiAgLyo0OSV7ICBjb2xvcjogIzJkM2RmZjsgfSovXG4gIDUwJXsgIGNvbG9yOiAjZmZmOyB9XG4gIC8qOTkleyAgY29sb3I6I2ZiMDFmZjsgIH0qL1xuICAxMDAleyBjb2xvcjogI2RhY2UyYTsgIH1cbn1cblxuLm1pbnVzYnRue1xuXHRjb2xvcjogI2ZmNDE4MTtcblx0Ly8gcG9zaXRpb246IGFic29sdXRlO1xuXHRsZWZ0OiAwO1xuXHR0b3A6IDA7XG5cdGZvbnQtc2l6ZTogMTlweDtcblx0cGFkZGluZzogMCA0cHg7XG5cdHBhZGRpbmctdG9wOiA1cHg7XG5cdGxpbmUtaGVpZ2h0OiAxOXB4O1xufSJdfQ== */");

/***/ }),

/***/ 9771:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/booknow/booknow.page.html ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"chopclosenow\" *ngIf='isRestricktn'>\n\t<span>\n\t\t<h1>{{restrictns_lbl}}</h1>\n      \t<p>{{restrictns_txt}}</p>\n      \t<div class=\"okbtnforrevoew\" (click)='alrestclose()'><span>Ok</span></div>\n\t</span>\n</div>\n\n<div class=\"chopclosenow\" *ngIf='isordertomorrow'>\n\t<span>\n\t\t<h1>We are closed now</h1>\n      \t<p>Order will be delivered when we reopen on<br><strong>{{nextdeday}}</strong><strong> {{nexttime}}</strong>. </p>\n      \t<p>Please click ok if you wish to PRE-ORDER</p>\n      \t<div class=\"okbtnforrevoew\" (click)='alrestclose()'><span>Ok</span></div>\n\t</span>\n</div>\n\n<div class=\"chopclosenow\" *ngIf='isShopclose'>\n\t<span>\n\t\t<h1>{{closetxt.openTimeTxt}}</h1>\n      \t<p [innerHTML]='closetxt.openTimeToday'></p>\n      \t<div class=\"okbtnforrevoew\" (click)='noshopping()'><span>Ok</span></div>\n\t</span>\n</div>\n\n<ion-header>\n  <ion-toolbar class=\"header-background-color\">\n  \t<!-- <ion-back-button slot=\"start\"></ion-back-button> --><ion-menu-button slot=\"start\"></ion-menu-button>\n    <ion-title class=\"heaerfont\">My Cart</ion-title>\n    <ion-buttons slot=\"end\" (click)='clearmycart()' style='color: #FFF;font-size: 11px;font-weight: bold;text-transform: uppercase;'>\n    \tClear Cart\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n\t  <ion-refresher-content></ion-refresher-content>\n\t</ion-refresher>\n  <div *ngIf='!cartcount' class=\"notcartitm\">\n    <img src=\"assets/shoppingEmpty.png\"><p>v1 Salon Provide Good Services<br><span>Your cart is empty. Add something from the menu</span></p>\n    <div class=\"brwsmenu\" (click)='homego()'><span>Browse Menu</span></div>\n  </div>\n\t<div class=\"padcontr\" *ngIf='cartcount'>\n\t\t<div class=\"itemlists\" *ngFor=\"let item of mycart; let i = index\">\n\t\t\t<div class=\"nameanddesc\">\n        \t\tTotal Time : {{item.corner_text}}<br>\n\t\t\t\t{{item.name}} - <code [innerHTML]='getappsetng?.currency_symbol'></code>{{item.itmOnly}}<br><span [innerHTML]=\"item.productDesc\"></span>\n\t\t\t</div>\n\t\t\t<div class=\"totalitm\">\n\t\t\t\t<span class=\"minusbtn\" (click)='munisqty(item)'><ion-icon name=\"trash\"></ion-icon></span><br>\n\t\t\t\t<code [innerHTML]='getappsetng?.currency_symbol'></code>{{item.item_sub_total}}\n\t\t\t</div>\n\t\t\t<div class=\"clear\"></div>\n\t\t</div>\n\n\t\t<div class=\"ifanythonote\">\n\t\t\t<ion-icon name=\"newspaper-outline\"></ion-icon> <input type=\"text\" [(ngModel)]=\"extranotes\" placeholder=\"Any requests?\">\n\t\t</div>\n\n\t\t<div class=\"appcoupncd\" (click)='opendatetimedel()' *ngIf='!chsdeltime'>\n      \t\t<ion-icon name=\"calendar-outline\" style=\"position: absolute; left: 15px; top: 13px; font-size: 18px; color: #8a8989;\"></ion-icon> Select Date\n\t\t\t<span><ion-icon name=\"chevron-forward-outline\"></ion-icon></span>\n\t\t</div>\n\t\t<div class=\"appcoupncd\" (click)='opendatetimedel()' *ngIf='chsdeltime'>\n\t\t\t<ion-icon name=\"calendar-outline\" style=\"position: absolute; left: 15px; top: 13px; font-size: 18px; color: #8a8989;\"></ion-icon> Select Time:  {{chsdeltime}}\n\t\t\t<span><ion-icon name=\"pencil-outline\"></ion-icon></span>\n\t\t</div>\n\n\t\t<div class=\"appcoupncd\" *ngIf='!apldofrs' (click)='gofers();'>\n\t\t\t<img src=\"assets/offeriCon.png\"> Apply Discount / Coupon Code <span><ion-icon name=\"chevron-forward-outline\"></ion-icon></span>\n\t\t</div>\n\t\t<div class=\"appcoupncd\" *ngIf='apldofrs'>\n\t\t\t<img src=\"assets/offeriCon.png\"> Coupon applied - <strong>{{apldofrs.offer_code}}</strong> <span (click)='cancelcpn();'><ion-icon name=\"close-outline\"></ion-icon></span>\n\t\t</div>\n\n\t\t<div class=\"billdeatils\">\n\t\t\t<div class=\"head\">Book Details</div>\n\t\t\t<ul>\n\t\t\t\t<li>Service(s) Total <span><code [innerHTML]='getappsetng?.currency_symbol'></code>{{carttotal}}</span></li>\n\t\t\t\t<li *ngIf='apldofrs'>{{offer_text}} <span>- <code [innerHTML]='getappsetng?.currency_symbol'></code>{{off_amount}}</span></li>\n\t\t\t\t<li *ngIf='getappsetng.tax_lebel'>{{getappsetng.tax_lebel}} ({{getappsetng.tax_value}}%) <span>+ <code [innerHTML]='getappsetng?.currency_symbol'></code>{{taxvalue}}</span></li>\n\t\t\t\t<li class=\"topay\">To Pay <span><code [innerHTML]='getappsetng?.currency_symbol'></code>{{pay_amount}}</span></li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n</ion-content>\n<ion-footer class=\"ion-no-border crtfooter\" *ngIf='isKeyboardHide'>\n\t<div class=\"leftsidehalf\" (click)='continueShp()'>\n\t\tAdd More Services\n\t</div>\n\t<div class=\"rightsidehlf\" (click)='callforprocessd()'>\n\t\tProceed\n\t</div>\n\t<div class=\"clear\"></div>\n</ion-footer>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_booknow_booknow_module_ts-es2015.js.map