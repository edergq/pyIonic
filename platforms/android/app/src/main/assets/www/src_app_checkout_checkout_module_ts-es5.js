(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkSalon"] = self["webpackChunkSalon"] || []).push([["src_app_checkout_checkout_module_ts"], {
    /***/
    2290: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CheckoutPageRoutingModule": function CheckoutPageRoutingModule() {
          return (
            /* binding */
            _CheckoutPageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _checkout_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./checkout.page */
      45247);

      var routes = [{
        path: '',
        component: _checkout_page__WEBPACK_IMPORTED_MODULE_0__.CheckoutPage
      }];

      var _CheckoutPageRoutingModule = function CheckoutPageRoutingModule() {
        _classCallCheck(this, CheckoutPageRoutingModule);
      };

      _CheckoutPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _CheckoutPageRoutingModule);
      /***/
    },

    /***/
    28400: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CheckoutPageModule": function CheckoutPageModule() {
          return (
            /* binding */
            _CheckoutPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _checkout_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./checkout-routing.module */
      2290);
      /* harmony import */


      var _checkout_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./checkout.page */
      45247);

      var _CheckoutPageModule = function CheckoutPageModule() {
        _classCallCheck(this, CheckoutPageModule);
      };

      _CheckoutPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _checkout_routing_module__WEBPACK_IMPORTED_MODULE_0__.CheckoutPageRoutingModule],
        declarations: [_checkout_page__WEBPACK_IMPORTED_MODULE_1__.CheckoutPage]
      })], _CheckoutPageModule);
      /***/
    },

    /***/
    45247: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CheckoutPage": function CheckoutPage() {
          return (
            /* binding */
            _CheckoutPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_checkout_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./checkout.page.html */
      66646);
      /* harmony import */


      var _checkout_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./checkout.page.scss */
      5554);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_Providers_Services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/Providers/Services/api.service */
      48158);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_Providers_Basic_basic_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/Providers/Basic/basic-api.service */
      92306);
      /* harmony import */


      var src_Providers_Local_local_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/Providers/Local/local-api.service */
      99068);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/in-app-browser/ngx */
      53760);
      /* harmony import */


      var src_Providers_Cart_cart_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/Providers/Cart/cart-api.service */
      65248);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../environments/environment */
      92340);

      var _CheckoutPage = /*#__PURE__*/function () {
        function CheckoutPage(menuCtrl, apiService, basic, localApi, cart, route, alertController, location, modalController, activatedRoute, actionSheetController, iab, platform) {
          _classCallCheck(this, CheckoutPage);

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
          this.postdata = {};
          this.ipbroptions = {};
          this.ordervalue = {};
          this.shipping = {};
          this.shippingcost = {};
          this.pay_amount = 0;
          this.offer_text = '';
          this.isDeliveryOrd = true;
        }

        _createClass(CheckoutPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.imgpath = _environments_environment__WEBPACK_IMPORTED_MODULE_7__.environment.imagepath;
          }
        }, {
          key: "editcart",
          value: function editcart() {
            this.route.navigate(['/booknow']);
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var chsdeltime = this.localApi.getdeltime();
            var delday = chsdeltime.split(' -')[0];
            var deltm = chsdeltime.split(' -')[1];
            this.chsdeltime = delday + ' - ' + deltm;
            this.order_type = this.localApi.getordertype();

            if (this.order_type == 'Delivery') {
              this.isDeliveryOrd = true;
            } else {
              this.isDeliveryOrd = false;
            }

            this.getappsetng = this.localApi.getappseting();

            if (this.getappsetng.pay_getaway == 'stripe') {
              this.pgtawurl = 'stripe_payment';
            }

            if (this.getappsetng.pay_getaway == 'squareup') {
              this.pgtawurl = 'squarepayment';
            }

            var totaladditional = parseFloat(this.getappsetng.additional_one_value) + parseFloat(this.getappsetng.additional_two_value) + parseFloat(this.getappsetng.additional_three_value);
            this.totaladditional = totaladditional.toFixed(2);
            this.imgpath = this.basic.imagepas();
            this.logedUser = this.localApi.getuser();
            this.extrnote = this.localApi.getxtrnt();
            this.getallProducts();
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            var _this = this;

            console.log('Begin async operation');
            setTimeout(function () {
              _this.getallProducts();

              event.target.complete();
            }, 2000);
          }
        }, {
          key: "BackButtonAction",
          value: function BackButtonAction() {
            if (this.order_type == 'Collect') {
              this.route.navigate(['/mycart']);
            }
          }
        }, {
          key: "getallProducts",
          value: function getallProducts() {
            this.order_type = this.localApi.getordertype();
            this.mycart = this.cart.getcart();
            var preord = [];
            var nrmord = [];

            for (var i = 0; i < this.mycart.length; i++) {
              if (this.mycart[i].preorder == 'Yes') {
                preord.push(this.mycart[i]);
              } else {
                nrmord.push(this.mycart[i]);
              }
            }

            console.log('preord', preord);
            console.log('Nor_preord', nrmord);
            console.log('My Cart', this.mycart);

            if (preord.length > 0 && nrmord.length > 0) {
              this.preord = preord;
            } else {
              this.preord = [];
            }

            this.carttotal = this.cart.getTotalCart();
            this.cartcount = this.mycart.length;

            if (this.order_type == 'Delivery') {
              this.shippingcost = this.localApi.getdelcost();
              this.shipping = this.localApi.getdeladrs();

              if (this.shippingcost.price > 0) {
                this.delvrxtx = '+ ' + this.getappsetng.currency_symbol + this.shippingcost.price;
              } else {
                this.delvrxtx = 'FREE';
              }
            } else {
              this.shippingcost.price = '0.00';
              this.shipping.id = '0';
            }

            this.apldofrs = this.localApi.getapplyedofr();

            if (this.getappsetng.tax_lebel) {
              var taxvalue = parseFloat(this.carttotal) * parseFloat(this.getappsetng.tax_value) / 100;
              this.taxvalue = taxvalue.toFixed(2);
            } else {
              this.taxvalue = '0.00';
            }

            if (this.apldofrs) {
              if (this.apldofrs.off_type == 'Flat') {
                this.offer_text = 'Flat ' + this.getappsetng.currency_symbol + this.apldofrs.off_value + ' diccount applied';
                this.off_amount = this.apldofrs.off_value;
              } else {
                this.offer_text = this.apldofrs.off_value + '% diccount applied';
                this.dicuctamnt = this.carttotal * this.apldofrs.off_value / 100;
                this.off_amount = this.dicuctamnt.toFixed(2);
              }

              this.pay_amt_flt = parseFloat(this.carttotal) - parseFloat(this.off_amount) + parseFloat(this.shippingcost.price);

              if (this.preord.length > 0) {
                if (this.order_type == 'Delivery') {
                  this.prord_price = this.shippingcost.price;
                } else {
                  this.prord_price = '0.00';
                }

                this.aftrpreord = parseFloat(this.pay_amt_flt) + parseFloat(this.prord_price) + parseFloat(this.taxvalue) + parseFloat(this.totaladditional);
                this.pay_amount = this.aftrpreord.toFixed(2);
              } else {
                var pay_amt_flt = parseFloat(this.pay_amt_flt) + parseFloat(this.taxvalue) + parseFloat(this.totaladditional);
                this.pay_amount = pay_amt_flt.toFixed(2);
              }
            } else {
              if (this.preord.length > 0) {
                if (this.order_type == 'Delivery') {
                  this.prord_price = this.shippingcost.price;
                } else {
                  this.prord_price = '0.00';
                }

                this.pay_amt_flt = parseFloat(this.carttotal) + parseFloat(this.shippingcost.price) + parseFloat(this.prord_price) + parseFloat(this.taxvalue) + parseFloat(this.totaladditional);
                this.pay_amount = this.pay_amt_flt.toFixed(2);
              } else {
                this.pay_amt_flt = parseFloat(this.carttotal) + parseFloat(this.shippingcost.price) + parseFloat(this.taxvalue) + parseFloat(this.totaladditional);
                this.pay_amount = this.pay_amt_flt.toFixed(2);
              }
            }
          }
        }, {
          key: "gohome",
          value: function gohome() {
            this.route.navigate(['/home']);
          }
        }, {
          key: "continueShp",
          value: function continueShp() {
            // this.location.back();
            this.route.navigate(['/addressbook/checkout']);
          }
        }, {
          key: "viewpayoption",
          value: function viewpayoption() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var actionSheet;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.actionSheetController.create({
                        header: 'Please choose a payment option:',
                        cssClass: 'ordtypewrapper',
                        buttons: [{
                          text: "Pay by Card",
                          handler: function handler() {
                            _this2.unpaidorder('Card');
                          }
                        }, {
                          text: "Pay by Cash",
                          handler: function handler() {
                            _this2.paymentaccepted('Cash');
                          }
                        }, {
                          text: 'Cancel',
                          icon: 'close',
                          role: 'cancel',
                          handler: function handler() {
                            console.log('Cancel clicked');
                          }
                        }]
                      });

                    case 2:
                      actionSheet = _context.sent;
                      _context.next = 5;
                      return actionSheet.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          } // PAYMENT AND PLACE ORDER===================

        }, {
          key: "openpayform",
          value: function openpayform(payby) {
            var _this3 = this;

            this.logedUser = this.localApi.getuser();
            this.ipbroptions = {
              location: 'no',
              hardwareback: 'yes',
              hidenavigationbuttons: 'no',
              hideurlbar: 'yes',
              fullscreen: 'yes',
              zoom: 'no',
              clearcache: 'yes',
              toolbar: 'yes',
              usewkwebview: 'yes'
            };
            var browser = this.iab.create(_environments_environment__WEBPACK_IMPORTED_MODULE_7__.environment.baseurl + 'restapi/stripe_payment/' + this.pay_amount + '/' + this.logedUser.email, '_blank', this.ipbroptions);
            browser.on('loadstop').subscribe(function (event) {
              console.log(event);

              if (event.url == _environments_environment__WEBPACK_IMPORTED_MODULE_7__.environment.baseurl + 'restapi/thankyou/') {
                browser.close();

                _this3.paymentaccepted(payby);
              }

              if (event.url == _environments_environment__WEBPACK_IMPORTED_MODULE_7__.environment.baseurl + 'restapi/failedpayment/') {
                browser.close();

                _this3.basic.alert('Payment Error:', 'There was a problem processing your payment. Please check the details and try again. If you still have issues please speak to your card issuer.');
              }
            });
          }
        }, {
          key: "unpaidorder",
          value: function unpaidorder(payby) {
            var _this4 = this;

            this.logedUser = this.localApi.getuser();
            this.mycart = this.cart.getcart();
            this.ordervalue.user_id = this.logedUser.id;
            this.ordervalue.order_type = this.order_type;
            this.ordervalue.pay_amount = this.pay_amount;
            this.ordervalue.cart_total = this.carttotal;
            this.ordervalue.items = this.mycart;
            this.ordervalue.delivery_cost = this.shippingcost.price;
            this.ordervalue.extra_note = this.extrnote;
            this.ordervalue.delivery_id = this.shipping.id;
            this.ordervalue.payby = payby;

            if (this.platform.is('android')) {
              this.ordervalue.device = 'Android';
            } else {
              this.ordervalue.device = 'iOS';
            }

            var deltime = this.localApi.getdeltime();
            this.ordervalue.deltime = deltime.split('- ')[1];
            this.ordervalue.deldate = deltime.substring(0, 3);

            if (this.apldofrs) {
              this.ordervalue.offer_text = this.offer_text;
              this.ordervalue.offer_type = this.apldofrs.off_type;
              this.ordervalue.offer_amount = this.off_amount;
              this.ordervalue.offer_code = this.apldofrs.offer_code;
            }

            this.ordervalue.pre_order_delivery = this.prord_price;

            if (this.getappsetng.tax_lebel) {
              this.ordervalue.tax_lebel = this.getappsetng.tax_lebel + ' (' + this.getappsetng.tax_value + '%)';
              this.ordervalue.tax_value = this.taxvalue;
            }

            this.basic.presentLoading();
            this.apiService.postdata('placemyorderunpaid', this.ordervalue).subscribe(function (resp) {
              console.log('User', resp);
              setTimeout(function () {
                _this4.basic.dismissloader();

                _this4.openpayform(payby);
              }, 1000);
            }, function (err) {
              return false;
            });
          }
        }, {
          key: "gotncpg",
          value: function gotncpg(val) {
            if (val == 'tnc') {
              this.route.navigate(['aboutus/Terms and Conditions']);
            }

            if (val == 'pvp') {
              this.route.navigate(['aboutus/Privacy Policy']);
            }
          }
        }, {
          key: "paymentaccepted",
          value: function paymentaccepted(payby) {
            var _this5 = this;

            this.logedUser = this.localApi.getuser();
            this.mycart = this.cart.getcart();
            this.ordervalue.user_id = this.logedUser.id;
            this.ordervalue.order_type = this.order_type;
            this.ordervalue.pay_amount = this.pay_amount;
            this.ordervalue.cart_total = this.carttotal;
            this.ordervalue.items = this.mycart;
            this.ordervalue.delivery_cost = this.shippingcost.price;
            this.ordervalue.extra_note = this.extrnote;
            this.ordervalue.delivery_id = this.shipping.id;
            this.ordervalue.payby = payby;

            if (this.platform.is('android')) {
              this.ordervalue.device = 'Android';
            } else {
              this.ordervalue.device = 'iOS';
            }

            if (payby == 'Card') {
              this.ordervalue.pay_status = 'Paid';
            } else {
              this.ordervalue.pay_status = 'Unpaid';
            }

            var deltime = this.localApi.getdeltime();
            this.ordervalue.deltime = deltime.split(' -')[1];
            this.ordervalue.deldate = deltime.split(' -')[0];
            this.ordervalue.deldt = deltime.split(' -')[2];

            if (this.apldofrs) {
              this.ordervalue.offer_text = this.offer_text;
              this.ordervalue.offer_type = this.apldofrs.off_type;
              this.ordervalue.offer_amount = this.off_amount;
              this.ordervalue.offer_code = this.apldofrs.offer_code;
            }

            this.ordervalue.pre_order_delivery = this.prord_price;

            if (this.getappsetng.tax_lebel) {
              this.ordervalue.tax_lebel = this.getappsetng.tax_lebel + ' (' + this.getappsetng.tax_value + '%)';
              this.ordervalue.tax_value = this.taxvalue;
            }

            this.basic.presentLoading();
            this.apiService.postdata('placemyorder', this.ordervalue).subscribe(function (resp) {
              console.log('Orders', resp);
              setTimeout(function () {
                _this5.basic.dismissloader();

                _this5.localApi.removedeladrs();

                _this5.localApi.removedelcost();

                _this5.localApi.removextrnt();

                _this5.localApi.removeapplyedofr();

                _this5.cart.removeCart();

                _this5.localApi.removeordertype();

                _this5.localApi.removedeltime();

                _this5.route.navigate(['/orderdetails/' + resp.data + '/New']);
              }, 1000);
            }, function (err) {
              return false;
            });
          }
        }]);

        return CheckoutPage;
      }();

      _CheckoutPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.MenuController
        }, {
          type: src_Providers_Services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService
        }, {
          type: src_Providers_Basic_basic_api_service__WEBPACK_IMPORTED_MODULE_3__.BasicApiService
        }, {
          type: src_Providers_Local_local_api_service__WEBPACK_IMPORTED_MODULE_4__.LocalApiService
        }, {
          type: src_Providers_Cart_cart_api_service__WEBPACK_IMPORTED_MODULE_6__.CartApiService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_11__.Location
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ActionSheetController
        }, {
          type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__.InAppBrowser
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.Platform
        }];
      };

      _CheckoutPage = (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-checkout',
        template: _raw_loader_checkout_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_checkout_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _CheckoutPage);
      /***/
    },

    /***/
    5554: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".itemlists {\n  padding: 10px 10px 5px 10px;\n  background-color: #fff;\n  border-bottom: solid 1px #efebeb;\n  position: relative;\n}\n\n.nameanddesc {\n  width: 75%;\n  height: auto;\n  float: left;\n  font-size: 13px;\n  line-height: 14px;\n}\n\n.nameanddesc span {\n  font-size: 11px;\n  color: #717171;\n}\n\n.qtybox {\n  width: 25%;\n  height: auto;\n  float: left;\n  text-align: center;\n  border: solid 1px #dcdcdc;\n  line-height: 29px;\n  position: relative;\n  font-size: 14px;\n}\n\n.qtybox .minusbtn {\n  color: #ff4181;\n  position: absolute;\n  left: 0;\n  top: 0;\n  font-size: 19px;\n  padding: 0 4px;\n  padding-top: 5px;\n  line-height: 19px;\n}\n\n.qtybox .qtyvalue {\n  color: #ff4181;\n}\n\n.qtybox .plsvalue {\n  color: #ff4181;\n  position: absolute;\n  right: 0;\n  top: 0;\n  font-size: 19px;\n  padding: 0 4px;\n  padding-top: 5px;\n  line-height: 19px;\n}\n\n.totalitm {\n  width: 25%;\n  height: auto;\n  float: right;\n  text-align: right;\n  line-height: 30px;\n  font-size: 14px;\n}\n\n.ifanythonote {\n  width: 100%;\n  height: auto;\n  padding: 10px 10px 10px 50px;\n  background-color: #fff;\n  position: relative;\n  font-size: 12px;\n  padding-top: 18px;\n}\n\n.ifanythonote input {\n  width: 100%;\n  font-size: 12px;\n  height: 30px;\n  border: none;\n  background-color: transparent;\n  outline: none;\n}\n\n.ifanythonote ion-icon {\n  position: absolute;\n  left: 15px;\n  top: 13px;\n  font-size: 22px;\n  color: #8a8989;\n}\n\n.appcoupncd {\n  width: 100%;\n  height: auto;\n  padding: 15px 10px 15px 49px;\n  background-color: #fff;\n  position: relative;\n  margin: 10px auto;\n  font-size: 13px;\n  font-weight: bold;\n}\n\n.appcoupncd img {\n  position: absolute;\n  height: 26px;\n  left: 12px;\n  top: 10px;\n}\n\n.appcoupncd span {\n  float: right;\n}\n\n.billdeatils {\n  width: 100%;\n  height: auto;\n  padding: 15px 10px;\n  background-color: #fff;\n  position: relative;\n  margin: 5px auto;\n  font-size: 13px;\n}\n\n.billdeatils .head {\n  font-size: 13px;\n  margin-bottom: 10px;\n  font-weight: bold;\n}\n\n.billdeatils .head span {\n  float: right;\n}\n\n.billdeatils ul {\n  margin: 0;\n  padding: 0;\n}\n\n.billdeatils ul li {\n  list-style: none;\n  font-size: 12px;\n  padding: 7px 0;\n  border-bottom: solid 1px #ececec;\n}\n\n.billdeatils ul li span {\n  float: right;\n}\n\n.billdeatils ul .topay {\n  font-weight: bold;\n}\n\n.crtfooter {\n  width: 100%;\n  height: auto;\n  background-color: transparent;\n  font-size: 12px;\n}\n\n.crtfooter .leftsidehalf {\n  width: 50%;\n  height: auto;\n  float: left;\n  background-color: #F00;\n  text-align: center;\n  line-height: 50px;\n  text-transform: uppercase;\n  color: #fff;\n}\n\n.crtfooter .rightsidehlf {\n  width: 50%;\n  height: auto;\n  float: left;\n  background-color: #000;\n  text-align: center;\n  line-height: 50px;\n  text-transform: uppercase;\n  color: #fff;\n}\n\n.crtfooter .makepaymentbtn {\n  width: 100%;\n  height: auto;\n  background-color: #ff4181;\n  text-align: center;\n  line-height: 50px;\n  text-transform: uppercase;\n  color: #fff;\n  font-size: 15px;\n  font-weight: bold;\n}\n\n.onlytxt {\n  font-size: 13px;\n  background: #fff;\n  padding: 15px;\n  line-height: 21px;\n}\n\n.onlytxt span {\n  color: #4263de;\n  font-weight: bold;\n}\n\n.notcartitm {\n  width: 100%;\n  height: auto;\n  text-align: center;\n  margin: 20% auto;\n}\n\n.notcartitm img {\n  width: 100%;\n}\n\n.preorder {\n  float: none;\n  font-size: 8px !important;\n  font-weight: bold;\n  color: #f00 !important;\n}\n\n.xtrascss {\n  width: 85%;\n  color: #ff4181;\n}\n\n.xtrascss span {\n  color: #ff4181;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNrb3V0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0FBQ0Q7O0FBRUE7RUFDQyxVQUFBO0VBQ0csWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFBQztFQUNDLGVBQUE7RUFDQSxjQUFBO0FBRUY7O0FBQ0E7RUFDQyxVQUFBO0VBQ0csWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFFSjs7QUFEQztFQUNDLGNBQUE7RUFDRyxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBR0w7O0FBREM7RUFDQyxjQUFBO0FBR0Y7O0FBREM7RUFDQyxjQUFBO0VBQ0csa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUdMOztBQUFBO0VBQ0MsVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFHRDs7QUFEQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNHLGlCQUFBO0FBSUo7O0FBSEM7RUFDQyxXQUFBO0VBQ0csZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0FBS0w7O0FBSEM7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFLTDs7QUFGQTtFQUNDLFdBQUE7RUFDRyxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFLSjs7QUFKQztFQUNDLGtCQUFBO0VBQ0csWUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBTUw7O0FBSkM7RUFDQyxZQUFBO0FBTUY7O0FBSEE7RUFDQyxXQUFBO0VBQ0csWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQU1KOztBQUxJO0VBQ0MsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFPTDs7QUFOSztFQUNDLFlBQUE7QUFRTjs7QUFMSTtFQUNDLFNBQUE7RUFDQSxVQUFBO0FBT0w7O0FBTks7RUFDQyxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0NBQUE7QUFRTjs7QUFQTTtFQUNDLFlBQUE7QUFTUDs7QUFOSztFQUNDLGlCQUFBO0FBUU47O0FBSEE7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtBQU1EOztBQUxDO0VBQ0MsVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FBT0Y7O0FBTEM7RUFDQyxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUFPRjs7QUFMQztFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNHLGlCQUFBO0FBT0w7O0FBSkE7RUFDQyxlQUFBO0VBQ0csZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFPSjs7QUFOQztFQUNDLGNBQUE7RUFDRyxpQkFBQTtBQVFMOztBQUpBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBT0Q7O0FBTkM7RUFDQyxXQUFBO0FBUUY7O0FBTEE7RUFDQyxXQUFBO0VBQ0cseUJBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0FBUUo7O0FBTkE7RUFDQyxVQUFBO0VBQ0EsY0FBQTtBQVNEOztBQVJDO0VBQ0MsY0FBQTtBQVVGIiwiZmlsZSI6ImNoZWNrb3V0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pdGVtbGlzdHN7XG5cdHBhZGRpbmc6IDEwcHggMTBweCA1cHggMTBweDs7XG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cdGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjZWZlYmViO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5uYW1lYW5kZGVzY3tcblx0d2lkdGg6IDc1JTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xuXHRzcGFue1xuXHRcdGZvbnQtc2l6ZTogMTFweDtcblx0XHRjb2xvcjogIzcxNzE3MTtcblx0fVxufVxuLnF0eWJveHtcblx0d2lkdGg6IDI1JTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlcjogc29saWQgMXB4ICNkY2RjZGM7XG4gICAgbGluZS1oZWlnaHQ6IDI5cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcblx0Lm1pbnVzYnRue1xuXHRcdGNvbG9yOiAjZmY0MTgxO1xuXHQgICAgcG9zaXRpb246IGFic29sdXRlO1xuXHQgICAgbGVmdDogMDtcblx0ICAgIHRvcDogMDtcblx0ICAgIGZvbnQtc2l6ZTogMTlweDtcblx0ICAgIHBhZGRpbmc6IDAgNHB4O1xuXHQgICAgcGFkZGluZy10b3A6IDVweDtcblx0ICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xuXHR9XG5cdC5xdHl2YWx1ZXtcblx0XHRjb2xvcjogI2ZmNDE4MTtcblx0fVxuXHQucGxzdmFsdWV7XG5cdFx0Y29sb3I6ICNmZjQxODE7XG5cdCAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cdCAgICByaWdodDogMDtcblx0ICAgIHRvcDogMDtcblx0ICAgIGZvbnQtc2l6ZTogMTlweDtcblx0ICAgIHBhZGRpbmc6IDAgNHB4O1xuXHQgICAgcGFkZGluZy10b3A6IDVweDtcblx0ICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xuXHR9XG59XG4udG90YWxpdG17XG5cdHdpZHRoOiAyNSU7XG5cdGhlaWdodDogYXV0bztcblx0ZmxvYXQ6IHJpZ2h0O1xuXHR0ZXh0LWFsaWduOiByaWdodDtcblx0bGluZS1oZWlnaHQ6IDMwcHg7XG5cdGZvbnQtc2l6ZTogMTRweDtcbn1cbi5pZmFueXRob25vdGV7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IGF1dG87XG5cdHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDUwcHg7XG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0Zm9udC1zaXplOiAxMnB4O1xuICAgIHBhZGRpbmctdG9wOiAxOHB4O1xuXHRpbnB1dHtcblx0XHR3aWR0aDogMTAwJTtcblx0ICAgIGZvbnQtc2l6ZTogMTJweDtcblx0ICAgIGhlaWdodDogMzBweDtcblx0ICAgIGJvcmRlcjogbm9uZTtcblx0ICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXHQgICAgb3V0bGluZTogbm9uZTtcblx0fVxuXHRpb24taWNvbntcblx0ICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0ICAgIGxlZnQ6IDE1cHg7XG5cdCAgICB0b3A6IDEzcHg7XG5cdCAgICBmb250LXNpemU6IDIycHg7XG5cdCAgICBjb2xvcjogIzhhODk4OTtcblx0fVxufVxuLmFwcGNvdXBuY2R7XG5cdHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nOiAxNXB4IDEwcHggMTVweCA0OXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogMTBweCBhdXRvO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcblx0aW1ne1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0ICAgIGhlaWdodDogMjZweDtcblx0ICAgIGxlZnQ6IDEycHg7XG5cdCAgICB0b3A6IDEwcHg7XG5cdH1cblx0c3Bhbntcblx0XHRmbG9hdDogcmlnaHQ7XG5cdH1cbn1cbi5iaWxsZGVhdGlsc3tcblx0d2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmc6IDE1cHggMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDVweCBhdXRvO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAuaGVhZHtcbiAgICBcdGZvbnQtc2l6ZTogMTNweDtcbiAgICBcdG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgXHRmb250LXdlaWdodDogYm9sZDtcbiAgICBcdHNwYW57XG4gICAgXHRcdGZsb2F0OiByaWdodDtcbiAgICBcdH1cbiAgICB9XG4gICAgdWx7XG4gICAgXHRtYXJnaW46IDA7XG4gICAgXHRwYWRkaW5nOiAwO1xuICAgIFx0bGl7XG4gICAgXHRcdGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgXHRcdGZvbnQtc2l6ZTogMTJweDtcbiAgICBcdFx0cGFkZGluZzogN3B4IDA7XG4gICAgXHRcdGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjZWNlY2VjO1xuICAgIFx0XHRzcGFue1xuICAgIFx0XHRcdGZsb2F0OiByaWdodDtcbiAgICBcdFx0fVxuICAgIFx0fVxuICAgIFx0LnRvcGF5e1xuICAgIFx0XHRmb250LXdlaWdodDogYm9sZDtcbiAgICBcdH1cbiAgICB9XG59XG5cbi5jcnRmb290ZXJ7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IGF1dG87XG5cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXHRmb250LXNpemU6IDEycHg7XG5cdC5sZWZ0c2lkZWhhbGZ7XG5cdFx0d2lkdGg6IDUwJTtcblx0XHRoZWlnaHQ6IGF1dG87XG5cdFx0ZmxvYXQ6IGxlZnQ7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0YwMDtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0bGluZS1oZWlnaHQ6IDUwcHg7XG5cdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHRjb2xvcjogI2ZmZjtcblx0fVxuXHQucmlnaHRzaWRlaGxme1xuXHRcdHdpZHRoOiA1MCU7XG5cdFx0aGVpZ2h0OiBhdXRvO1xuXHRcdGZsb2F0OiBsZWZ0O1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdGxpbmUtaGVpZ2h0OiA1MHB4O1xuXHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdFx0Y29sb3I6ICNmZmY7XG5cdH1cblx0Lm1ha2VwYXltZW50YnRue1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdGhlaWdodDogYXV0bztcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0MTgxO1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRsaW5lLWhlaWdodDogNTBweDtcblx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRcdGNvbG9yOiAjZmZmO1xuXHRcdGZvbnQtc2l6ZTogMTVweDtcbiAgICBcdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHR9XG59XG4ub25seXR4dHtcblx0Zm9udC1zaXplOiAxM3B4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBsaW5lLWhlaWdodDogMjFweDtcblx0c3Bhbntcblx0XHRjb2xvcjogIzQyNjNkZTtcbiAgICBcdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHR9XG59XG5cbi5ub3RjYXJ0aXRte1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiBhdXRvO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdG1hcmdpbjogMjAlIGF1dG87XG5cdGltZ3tcblx0XHR3aWR0aDogMTAwJTtcblx0fVxufVxuLnByZW9yZGVye1xuXHRmbG9hdDogbm9uZTtcbiAgICBmb250LXNpemU6IDhweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjZjAwICFpbXBvcnRhbnQ7XG59XG4ueHRyYXNjc3N7XG5cdHdpZHRoOiA4NSU7XG5cdGNvbG9yOiAjZmY0MTgxO1xuXHRzcGFue1xuXHRcdGNvbG9yOiAjZmY0MTgxO1xuXHR9XG59XG5cbiJdfQ== */";
      /***/
    },

    /***/
    66646: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"header-background-color\">\n    <!-- <ion-back-button slot=\"start\"></ion-back-button> --><ion-menu-button slot=\"start\"></ion-menu-button>\n    <ion-title class=\"heaerfont\">Checkout</ion-title>\n    <ion-buttons slot=\"end\" (click)='editcart()'>\n    \t<ion-icon name=\"create-outline\" class='headerrighticon'></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n\t    <ion-refresher-content></ion-refresher-content>\n\t </ion-refresher>\n\t <div *ngIf='!cartcount' class=\"notcartitm\">\n\t \t<img src=\"assets/shoppingEmpty.png\">\n\t </div>\n\t<div class=\"padcontr\" *ngIf='cartcount'>\n\t\t<div class=\"itemlists\" *ngFor=\"let item of mycart\">\n\t\t\t<div class=\"nameanddesc {{item.xtras}}\">\n        \t\tTotal Time : {{item.corner_text}}<br>\n\t\t\t\t{{item.name}} - <code [innerHTML]='getappsetng?.currency_symbol'></code>{{item.itmOnly}}<br><span [innerHTML]='item.productDesc'></span>\n\t\t\t\t<span class=\"preorder\" *ngIf=\"item.preorder\"><br>This is a Pre-Order Item ({{item.pre_time}})</span>\n\t\t\t</div>\n\t\t\t<div class=\"totalitm\">\n\t\t\t\t<code [innerHTML]='getappsetng?.currency_symbol'></code>{{item.item_sub_total}}\n\t\t\t</div>\n\t\t\t<div class=\"clear\"></div>\n\t\t</div>\n\t\t<div class=\"appcoupncd\">\n\t\t\t<ion-icon name=\"calendar-outline\" style=\"position: absolute; left: 15px; top: 13px; font-size: 18px; color: #8a8989;\"></ion-icon> Date and Time:  {{chsdeltime}}<span><ion-icon name=\"chevron-forward-outline\"></ion-icon></span>\n\t\t</div>\n\t\t\n\t\t<div class=\"billdeatils\">\n\t\t\t<div class=\"head\">Bill Details</div>\n\t\t\t<ul>\n\t\t\t\t<li>Item Total <span><code [innerHTML]='getappsetng?.currency_symbol'></code>{{carttotal}}</span></li>\n\t\t\t\t<li *ngIf='apldofrs'>{{offer_text}} <span>- <code [innerHTML]='getappsetng?.currency_symbol'></code>{{off_amount}}</span></li>\n\t\t\t\t<li *ngIf='getappsetng.tax_lebel'>{{getappsetng.tax_lebel}} ({{getappsetng.tax_value}}%) <span>+ <code [innerHTML]='getappsetng?.currency_symbol'></code>{{taxvalue}}</span></li>\n\t\t\t\t<li class=\"topay\">To Pay <span><code [innerHTML]='getappsetng?.currency_symbol'></code>{{pay_amount}}</span></li>\n\t\t\t</ul>\n\t\t</div>\n\n\t\t<div class=\"billdeatils\" *ngIf='isDeliveryOrd'>\n\t\t\t<div class=\"head\">Delivery address <span (click)='continueShp()'><ion-icon name=\"create-outline\"></ion-icon> Change</span></div>\n\t\t\t<ul>\n\t\t\t\t<li>{{shipping.address_type}}<br>{{shipping.address_line_one}} {{shipping.address_line_two}} {{shipping.postcode}}</li>\n\t\t\t</ul>\n\t\t</div>\n\t\t<div class=\"onlytxt\">\n\t\t\tBy confirming your order, you acknowledge that you have read the relevant allergy information and advice and that you agree to our <span (click)=\"gotncpg('tnc')\">Terms & Conditions</span> and our <span (click)=\"gotncpg('pvp')\">Privacy Policy</span>. \n\t\t</div>\n\t</div>\n\t\n</ion-content>\n<ion-footer class=\"ion-no-border crtfooter\" *ngIf='cartcount'>\n\t<div class=\"makepaymentbtn\" (click)='viewpayoption()'>\n\t\tConfirm Booking\n\t</div>\n\t<div class=\"clear\"></div>\n</ion-footer>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_checkout_checkout_module_ts-es5.js.map