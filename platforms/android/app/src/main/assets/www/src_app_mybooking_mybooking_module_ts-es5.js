(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkSalon"] = self["webpackChunkSalon"] || []).push([["src_app_mybooking_mybooking_module_ts"], {
    /***/
    46738: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MybookingPageRoutingModule": function MybookingPageRoutingModule() {
          return (
            /* binding */
            _MybookingPageRoutingModule
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


      var _mybooking_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./mybooking.page */
      86484);

      var routes = [{
        path: '',
        component: _mybooking_page__WEBPACK_IMPORTED_MODULE_0__.MybookingPage
      }];

      var _MybookingPageRoutingModule = function MybookingPageRoutingModule() {
        _classCallCheck(this, MybookingPageRoutingModule);
      };

      _MybookingPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _MybookingPageRoutingModule);
      /***/
    },

    /***/
    24096: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MybookingPageModule": function MybookingPageModule() {
          return (
            /* binding */
            _MybookingPageModule
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


      var _mybooking_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./mybooking-routing.module */
      46738);
      /* harmony import */


      var _mybooking_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./mybooking.page */
      86484);

      var _MybookingPageModule = function MybookingPageModule() {
        _classCallCheck(this, MybookingPageModule);
      };

      _MybookingPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _mybooking_routing_module__WEBPACK_IMPORTED_MODULE_0__.MybookingPageRoutingModule],
        declarations: [_mybooking_page__WEBPACK_IMPORTED_MODULE_1__.MybookingPage]
      })], _MybookingPageModule);
      /***/
    },

    /***/
    86484: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MybookingPage": function MybookingPage() {
          return (
            /* binding */
            _MybookingPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_mybooking_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./mybooking.page.html */
      60800);
      /* harmony import */


      var _mybooking_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./mybooking.page.scss */
      15360);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/in-app-browser/ngx */
      53760);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
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


      var src_Providers_Services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/Providers/Services/api.service */
      48158);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../environments/environment */
      92340);

      var _MybookingPage = /*#__PURE__*/function () {
        function MybookingPage(menuCtrl, apiService, basic, localApi, route, iab, alertController) {
          _classCallCheck(this, MybookingPage);

          this.menuCtrl = menuCtrl;
          this.apiService = apiService;
          this.basic = basic;
          this.localApi = localApi;
          this.route = route;
          this.iab = iab;
          this.alertController = alertController;
          this.data = {};
          this.postdata = {};
          this.deltimelist = [];
          this.ipbroptions = {};
        }

        _createClass(MybookingPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getappsetng = this.localApi.getappseting();
            console.log("this.getappsetng", this.getappsetng);
          }
        }, {
          key: "opendatetimedel",
          value: function opendatetimedel() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        cssClass: 'freeddelmessage',
                        header: 'Select date',
                        inputs: [{
                          name: 'del_date',
                          type: 'date',
                          placeholder: 'Select a date'
                        }],
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler() {
                            console.log('Confirm Cancel');
                          }
                        }, {
                          text: 'OK',
                          handler: function handler(val) {
                            if (!val.del_date) {
                              _this.basic.alert('Error', 'Please choose a date');

                              return false;
                            } else {
                              _this.getdeltimes(val.del_date);

                              return true;
                              console.log(val);
                            }
                          }
                        }]
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "getdeltimes",
          value: function getdeltimes(date) {
            var _this2 = this;

            this.postdata.snddate = date;
            this.basic.presentLoading();
            this.apiService.postdata('getdeltimebreak', this.postdata).subscribe(function (resp) {
              var timesdel = resp.data;
              console.log(timesdel.status);

              if (timesdel.status == 'Close') {
                _this2.basic.alert('Info:', timesdel.message);
              } else {
                var theNewInputs = [];

                for (var i = 0; i < timesdel.length; i++) {
                  theNewInputs.push({
                    name: 'deltimmy',
                    type: 'radio',
                    value: timesdel[i].datename + ' - ' + timesdel[i].value + ' - ' + date,
                    checked: false,
                    label: timesdel[i].datename + ' - ' + timesdel[i].value
                  });
                }

                _this2.deltimelist = theNewInputs;
              }

              setTimeout(function () {
                _this2.basic.dismissloader();

                if (timesdel.status != 'Close') {
                  _this2.opndeltimelist();
                }
              }, 1000);
            }, function (err) {
              _this2.basic.dismissloader();

              return false;
            });
          }
        }, {
          key: "opndeltimelist",
          value: function opndeltimelist() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this3 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertController.create({
                        cssClass: 'freeddelmessages',
                        header: 'Select a time',
                        inputs: this.deltimelist,
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler() {
                            console.log('Confirm Cancel');
                          }
                        }, {
                          text: 'OK',
                          handler: function handler(val) {
                            if (val) {
                              if (val == 'future') {
                                _this3.opendatetimedel();
                              } else {
                                console.log("val", val);

                                _this3.localApi.setdeltime(val);

                                var delday = val.split(' -')[0];
                                var deltm = val.split(' -')[1];
                                _this3.chsdeltime = delday + ' - ' + deltm;
                                _this3.datetime = val;
                              }
                            }
                          }
                        }]
                      });

                    case 2:
                      alert = _context2.sent;
                      _context2.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "booknow",
          value: function booknow() {
            this.data.date = this.datetime;
            this.data.pay_amount = this.getappsetng.deposit_amount;

            if (!this.data.fullname) {
              this.basic.alert('Info:', 'Enter your full name');
            } else if (!this.data.mobile) {
              this.basic.alert('Info:', 'Enter your contact number');
            } else if (!this.data.email) {
              this.basic.alert('Info:', 'Enter your email');
            } else if (!this.chsdeltime) {
              this.basic.alert('Info:', 'Enter a date and time');
            } else {
              this.openpayform(this.data);
            }
          }
        }, {
          key: "openpayform",
          value: function openpayform(data) {
            var _this4 = this;

            console.log("data", data);
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
            var browser = this.iab.create(_environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.baseurl + 'restapi/stripe_payment/' + data.pay_amount + '/' + data.email, '_blank', this.ipbroptions);
            browser.on('loadstop').subscribe(function (event) {
              console.log(event);

              if (event.url == _environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.baseurl + 'restapi/thankyou/') {
                browser.close();

                _this4.basic.presentLoading();

                _this4.apiService.postdata('savecateringenq', data).subscribe(function (resp) {
                  setTimeout(function () {
                    _this4.basic.dismissloader();

                    _this4.basic.alert('Thanks!', resp.thnk_msg);

                    _this4.data = {};
                  }, 1000);
                }, function (err) {
                  return false;
                });
              }

              if (event.url == _environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.baseurl + 'restapi/failedpayment/') {
                browser.close();

                _this4.basic.alert('Payment Error:', 'There was a problem processing your payment. Please check the details and try again. If you still have issues please speak to your card issuer.');
              }
            });
          }
        }]);

        return MybookingPage;
      }();

      _MybookingPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.MenuController
        }, {
          type: src_Providers_Services_api_service__WEBPACK_IMPORTED_MODULE_5__.ApiService
        }, {
          type: src_Providers_Basic_basic_api_service__WEBPACK_IMPORTED_MODULE_3__.BasicApiService
        }, {
          type: src_Providers_Local_local_api_service__WEBPACK_IMPORTED_MODULE_4__.LocalApiService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
        }, {
          type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__.InAppBrowser
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController
        }];
      };

      _MybookingPage = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-mybooking',
        template: _raw_loader_mybooking_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_mybooking_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _MybookingPage);
      /***/
    },

    /***/
    15360: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".loginmobilefieldreg {\n  width: 100%;\n  height: auto;\n  padding: 10px 15px;\n  position: relative;\n}\n.loginmobilefieldreg label {\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  color: black;\n}\n.loginmobilefieldreg input {\n  width: 100%;\n  height: 30px;\n  border: none;\n  background-color: transparent;\n  outline: none;\n  border-bottom: solid 1px #ff4181;\n  font-size: 14px;\n}\n.continuebtn {\n  width: 100%;\n  height: 40px;\n  padding: 13px 15px;\n  text-transform: uppercase;\n  font-size: 14px;\n  background-color: #ff4181;\n  color: #fff;\n  text-align: center;\n  margin: 0 auto;\n  position: fixed;\n  bottom: 0;\n}\n.appcoupncd {\n  width: 100%;\n  height: auto;\n  padding: 15px 10px 15px 49px;\n  background-color: #fff;\n  position: relative;\n  margin: 10px auto;\n  font-size: 13px;\n  font-weight: bold;\n  line-height: 12px;\n}\n.appcoupncd img {\n  position: absolute;\n  height: 26px;\n  left: 12px;\n  top: 10px;\n}\n.appcoupncd span {\n  float: right;\n}\n.appcoupncd b {\n  color: #267d45;\n  font-size: 10px;\n  font-weight: normal;\n}\n.appcoupncdone {\n  width: 100%;\n  height: auto;\n  padding: 5px 10px 5px 10px;\n  background-color: #fff;\n  position: relative;\n  margin: 0px auto;\n  font-size: 15px;\n  text-align: justify;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15Ym9va2luZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFDRDtBQUFDO0VBQ0MsZUFBQTtFQUNHLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBRUw7QUFBQztFQUNDLFdBQUE7RUFDRyxZQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtBQUVMO0FBRUE7RUFDQyxXQUFBO0VBQ0csWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0gsZUFBQTtFQUNHLFNBQUE7QUFDSjtBQUVBO0VBQ0MsV0FBQTtFQUNHLFlBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBQ0o7QUFBQztFQUNDLGtCQUFBO0VBQ0csWUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBRUw7QUFBQztFQUNDLFlBQUE7QUFFRjtBQUFDO0VBQ0MsY0FBQTtFQUNHLGVBQUE7RUFDQSxtQkFBQTtBQUVMO0FBRUE7RUFDQyxXQUFBO0VBQ0csWUFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUVILG1CQUFBO0FBQUQiLCJmaWxlIjoibXlib29raW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbm1vYmlsZWZpZWxkcmVne1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiBhdXRvO1xuXHRwYWRkaW5nOiAxMHB4IDE1cHg7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0bGFiZWx7XG5cdFx0Zm9udC1zaXplOiAxMnB4O1xuXHQgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0ICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG5cdCAgICBjb2xvcjogYmxhY2s7XG5cdH1cblx0aW5wdXR7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdCAgICBoZWlnaHQ6IDMwcHg7XG5cdCAgICBib3JkZXI6IG5vbmU7XG5cdCAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcblx0ICAgIG91dGxpbmU6IG5vbmU7XG5cdCAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2ZmNDE4MTtcblx0ICAgIGZvbnQtc2l6ZTogMTRweDtcblx0fVxufVxuXG4uY29udGludWVidG57XG5cdHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDBweDtcbiAgICBwYWRkaW5nOiAxM3B4IDE1cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNDE4MTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwIGF1dG87XG5cdHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDA7XG59XG5cbi5hcHBjb3VwbmNke1xuXHR3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzogMTVweCAxMHB4IDE1cHggNDlweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDEwcHggYXV0bztcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbGluZS1oZWlnaHQ6IDEycHg7XG5cdGltZ3tcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdCAgICBoZWlnaHQ6IDI2cHg7XG5cdCAgICBsZWZ0OiAxMnB4O1xuXHQgICAgdG9wOiAxMHB4O1xuXHR9XG5cdHNwYW57XG5cdFx0ZmxvYXQ6IHJpZ2h0O1xuXHR9XG5cdGJ7XG5cdFx0Y29sb3I6ICMyNjdkNDU7XG5cdCAgICBmb250LXNpemU6IDEwcHg7XG5cdCAgICBmb250LXdlaWdodDogbm9ybWFsO1xuXHR9XG59XG5cbi5hcHBjb3VwbmNkb25le1xuXHR3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgLy8gbGluZS1oZWlnaHQ6IDEycHg7XG5cdHRleHQtYWxpZ246IGp1c3RpZnk7XG59Il19 */";
      /***/
    },

    /***/
    60800: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-menu-button slot=\"start\"></ion-menu-button>\n    <ion-title>Appointment</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <img style=\"width: 70%; height: 120px; margin: 0px 15%;\" src=\"../../assets/images/logo.png\"/>\n  <div class=\"loginmobilefieldreg\">\n    <label>Your full name</label>\n    <input type=\"text\" [(ngModel)]=\"data.fullname\">\n  </div>\n  <div class=\"loginmobilefieldreg\">\n    <label>Your email</label>\n    <input type=\"email\" [(ngModel)]=\"data.email\">\n  </div>\n  <div class=\"loginmobilefieldreg\">\n    <label>Mobile Number</label>\n    <input type=\"tel\" [(ngModel)]=\"data.mobile\" maxlength=\"11\">\n  </div>\n  <div class=\"loginmobilefieldreg\">\n    <label>Message</label>\n    <input type=\"text\" [(ngModel)]=\"data.descriptions\">\n  </div>\n  <div class=\"loginmobilefieldreg\">\n    <label>Select Date and Time</label>\n    <div class=\"appcoupncd\" (click)='opendatetimedel()' *ngIf='!chsdeltime'>\n      <ion-icon name=\"calendar-outline\" style=\"position: absolute; left: 15px; top: 13px; font-size: 18px; color: #8a8989;\"></ion-icon> Select Date\n      <span><ion-icon name=\"chevron-forward-outline\"></ion-icon></span>\n    </div>\n    <div class=\"appcoupncd\" (click)='opendatetimedel()' *ngIf='chsdeltime'>\n      <ion-icon name=\"calendar-outline\" style=\"position: absolute; left: 15px; top: 13px; font-size: 18px; color: #8a8989;\"></ion-icon> Select Time:  {{chsdeltime}}\n      <span><ion-icon name=\"pencil-outline\"></ion-icon></span>\n    </div>\n  </div>\n  <div style=\"padding: 5px 15px;\">\n    <label>Deposit Amount <span style=\"float: right;\"><b>{{getappsetng.currency_symbol}}{{getappsetng.deposit_amount}}</b></span></label>\n  </div>\n  <div class=\"loginmobilefieldreg\">\n    <div class=\"appcoupncdone\" *ngIf='getappsetng.deposit_required == \"YES\"'>\n        <p>{{getappsetng.deposit_text}}</p>\n    </div>\n  </div>\n  \n  <div class=\"continuebtn\" (click)='booknow()'>\n    Pay Deposit & Book Appointment\n  </div>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_mybooking_mybooking_module_ts-es5.js.map