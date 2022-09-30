(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkSalon"] = self["webpackChunkSalon"] || []).push([["src_app_listviews_listviews_module_ts"], {
    /***/
    21449: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ListviewsPageRoutingModule": function ListviewsPageRoutingModule() {
          return (
            /* binding */
            _ListviewsPageRoutingModule
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


      var _listviews_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./listviews.page */
      83191);

      var routes = [{
        path: '',
        component: _listviews_page__WEBPACK_IMPORTED_MODULE_0__.ListviewsPage
      }];

      var _ListviewsPageRoutingModule = function ListviewsPageRoutingModule() {
        _classCallCheck(this, ListviewsPageRoutingModule);
      };

      _ListviewsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ListviewsPageRoutingModule);
      /***/
    },

    /***/
    36295: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ListviewsPageModule": function ListviewsPageModule() {
          return (
            /* binding */
            _ListviewsPageModule
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


      var _listviews_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./listviews-routing.module */
      21449);
      /* harmony import */


      var _listviews_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./listviews.page */
      83191);

      var _ListviewsPageModule = function ListviewsPageModule() {
        _classCallCheck(this, ListviewsPageModule);
      };

      _ListviewsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _listviews_routing_module__WEBPACK_IMPORTED_MODULE_0__.ListviewsPageRoutingModule],
        declarations: [_listviews_page__WEBPACK_IMPORTED_MODULE_1__.ListviewsPage]
      })], _ListviewsPageModule);
      /***/
    },

    /***/
    83191: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ListviewsPage": function ListviewsPage() {
          return (
            /* binding */
            _ListviewsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_listviews_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./listviews.page.html */
      55545);
      /* harmony import */


      var _listviews_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./listviews.page.scss */
      86407);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_Providers_Basic_basic_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/Providers/Basic/basic-api.service */
      92306);
      /* harmony import */


      var src_Providers_Cart_cart_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/Providers/Cart/cart-api.service */
      65248);
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
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _ionic_native_app_rate_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/app-rate/ngx */
      13553);
      /* harmony import */


      var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/in-app-browser/ngx */
      53760);
      /* harmony import */


      var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/social-sharing/ngx */
      24276);
      /* harmony import */


      var _openinghours_openinghours_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../openinghours/openinghours.page */
      82136);
      /* harmony import */


      var _ionic_native_touch_id_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic-native/touch-id/ngx */
      5945);
      /* eslint-disable prefer-arrow/prefer-arrow-functions */

      /* eslint-disable object-shorthand */

      /* eslint-disable arrow-body-style */

      /* eslint-disable @typescript-eslint/prefer-for-of */

      /* eslint-disable @typescript-eslint/quotes */


      var _ListviewsPage = /*#__PURE__*/function () {
        function ListviewsPage(apiService, basic, localApi, cart, route, alertController, location, modalController, activatedRoute, socialSharing, platform, appRate, touchId, iab) {
          _classCallCheck(this, ListviewsPage);

          this.apiService = apiService;
          this.basic = basic;
          this.localApi = localApi;
          this.cart = cart;
          this.route = route;
          this.alertController = alertController;
          this.location = location;
          this.modalController = modalController;
          this.activatedRoute = activatedRoute;
          this.socialSharing = socialSharing;
          this.platform = platform;
          this.appRate = appRate;
          this.touchId = touchId;
          this.iab = iab;
          this.seting = {};
          this.isTouchidDevice = false;
          this.dataone = [];
        }

        _createClass(ListviewsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.isdeviceuser = this.localApi.getuserdevice();
            this.touchId.isAvailable().then(function (res) {
              if (_this.isdeviceuser) {
                _this.isTouchidDevice = true;
              }
            }, function (err) {
              console.error('TouchID is not available', err);
            });
            this.imgpath = _environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.imagepath;
            this.pgtype = this.activatedRoute.snapshot.paramMap.get('pgtype');
            this.getallProducts();
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            var _this2 = this;

            setTimeout(function () {
              _this2.getallProducts();

              event.target.complete();
            }, 2000);
          }
        }, {
          key: "getallProducts",
          value: function getallProducts() {
            var _this3 = this;

            this.seting = this.localApi.getpushfaceset();

            if (this.pgtype === 'About Us') {
              this.allProducts = [{
                name: 'About Us',
                url: '/aboutus/About Us'
              }, {
                name: 'Our Team',
                url: '/ourteam/Our Team'
              }, {
                name: 'Photo Gallery',
                url: '/imagegallerypage/Photo Gallery'
              }, {
                name: 'Video Gallery',
                url: '/videogallery/Video Gallery'
              }];
            }

            if (this.pgtype === 'Help and Info') {
              this.basic.presentLoading();
              this.apiService.getdata('getallcontent', '').subscribe(function (resp) {
                for (var i = 0; i < resp.data.length; i++) {
                  console.log("i", resp.data[i].menu);

                  _this3.dataone.push({
                    name: resp.data[i].menu,
                    url: '/aboutus/' + resp.data[i].menu
                  });
                }

                _this3.allProducts = [{
                  name: 'Opening Hours',
                  url: 'openinghours'
                }, {
                  name: 'Contact Us',
                  url: 'contactus'
                }];
                _this3.allProducts = _this3.allProducts.concat(_this3.dataone);
                setTimeout(function () {
                  _this3.basic.dismissloader();
                }, 1000);
              }, function (err) {
                return false;
              });
            }

            if (this.pgtype === 'Settings') {
              this.allProducts = [{
                name: 'Share App',
                url: 'shareapp'
              }, {
                name: 'Rate App',
                url: 'rateapp'
              }];
            }
          }
        }, {
          key: "gonext",
          value: function gonext(item) {
            if (item.url) {
              if (item.url === 'shareapp') {
                this.shareapp();
              } else if (item.url === 'rateapp') {
                this.rateapp();
              } else if (item.url === 'openinghours') {
                this.openinghours();
              } else {
                this.route.navigate([item.url]);
              }
            }
          }
        }, {
          key: "rateapp",
          value: function rateapp() {
            this.appRate.preferences.storeAppURL = {
              ios: _environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.iosappid,
              android: 'market://details?id=' + _environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.androidappid
            };
            this.appRate.promptForRating(true);
          }
        }, {
          key: "shareapp",
          value: function shareapp() {
            if (this.platform.is('android')) {
              this.socialSharing.share(_environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.app_share_text, null, null, _environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.playstore);
            } else {
              console.log("socialSharing");
              this.socialSharing.share(_environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.app_share_text, null, null, _environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.appstore);
            }
          }
        }, {
          key: "seingcnge",
          value: function seingcnge(val) {
            this.logedUser = this.localApi.getuser();

            if (val === 'touchface') {
              if (this.logedUser) {
                this.seting.face = true;
              } else {
                this.openloginpanel();
                this.seting.face = false;
              }

              this.localApi.setpushfaceset(this.seting);
            } else {
              this.localApi.setpushfaceset(this.seting);
            }
          }
        }, {
          key: "openinghours",
          value: function openinghours() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalController.create({
                        component: _openinghours_openinghours_page__WEBPACK_IMPORTED_MODULE_10__.OpeninghoursPage,
                        cssClass: 'OpeninghoursPage',
                        backdropDismiss: true
                      });

                    case 2:
                      modal = _context.sent;
                      _context.next = 5;
                      return modal.present();

                    case 5:
                      return _context.abrupt("return", _context.sent);

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "openloginpanel",
          value: function openloginpanel() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            }));
          }
        }, {
          key: "viewmycart",
          value: function viewmycart() {
            this.route.navigate(['/mycart']);
          }
        }]);

        return ListviewsPage;
      }();

      _ListviewsPage.ctorParameters = function () {
        return [{
          type: src_Providers_Services_api_service__WEBPACK_IMPORTED_MODULE_5__.ApiService
        }, {
          type: src_Providers_Basic_basic_api_service__WEBPACK_IMPORTED_MODULE_2__.BasicApiService
        }, {
          type: src_Providers_Local_local_api_service__WEBPACK_IMPORTED_MODULE_4__.LocalApiService
        }, {
          type: src_Providers_Cart_cart_api_service__WEBPACK_IMPORTED_MODULE_3__.CartApiService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.AlertController
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_15__.Location
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.ModalController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute
        }, {
          type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_9__.SocialSharing
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.Platform
        }, {
          type: _ionic_native_app_rate_ngx__WEBPACK_IMPORTED_MODULE_7__.AppRate
        }, {
          type: _ionic_native_touch_id_ngx__WEBPACK_IMPORTED_MODULE_11__.TouchID
        }, {
          type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__.InAppBrowser
        }];
      };

      _ListviewsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_16__.Component)({
        selector: 'app-listviews',
        template: _raw_loader_listviews_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_listviews_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ListviewsPage);
      /***/
    },

    /***/
    86407: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".categorylists {\n  width: 100%;\n  height: auto;\n  padding: 10px 10px;\n  position: relative;\n  background: #fff;\n  margin-bottom: 5px;\n  font-size: 12px;\n  text-transform: uppercase;\n}\n.categorylists span {\n  float: right;\n}\n.categorylists ion-toggle {\n  padding: 0;\n}\n.categoryliststngs {\n  width: 100%;\n  height: auto;\n  padding: 15px 10px;\n  position: relative;\n  background: #fff;\n  margin-bottom: 5px;\n  font-size: 12px;\n  text-transform: uppercase;\n  position: relative;\n}\n.categoryliststngs span {\n  position: absolute;\n  right: 10px;\n  top: 7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3R2aWV3cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxXQUFBO0VBQ0csWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBQ0o7QUFBQztFQUNDLFlBQUE7QUFFRjtBQUFDO0VBQ0MsVUFBQTtBQUVGO0FBRUE7RUFDQyxXQUFBO0VBQ0csWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUFDO0VBQ0Msa0JBQUE7RUFDQSxXQUFBO0VBQ0csUUFBQTtBQUVMIiwiZmlsZSI6Imxpc3R2aWV3cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2F0ZWdvcnlsaXN0c3tcblx0d2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdHNwYW57XG5cdFx0ZmxvYXQ6IHJpZ2h0O1xuXHR9XG5cdGlvbi10b2dnbGV7XG5cdFx0cGFkZGluZzogMDtcblx0fVxufVxuXG4uY2F0ZWdvcnlsaXN0c3RuZ3N7XG5cdHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nOiAxNXB4IDEwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0c3Bhbntcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0cmlnaHQ6IDEwcHg7XG4gICAgXHR0b3A6IDdweDtcblx0fVxufSJdfQ== */";
      /***/
    },

    /***/
    55545: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"header-background-color\">\n    <ion-menu-button slot=\"start\"></ion-menu-button>\n    <ion-title class=\"heaerfont\">{{pgtype}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n\t    <ion-refresher-content></ion-refresher-content>\n\t </ion-refresher>\n\n\t <div class=\"padcontr\">\n\t \t<div *ngIf=\"pgtype == 'Settings'\">\n\t \t\t<div class=\"categoryliststngs\">\n\t\t \t\tPush Notifications <span><ion-toggle [(ngModel)]=\"seting.push\" (ionChange)=\"seingcnge('')\"></ion-toggle></span>\n\t\t \t\t<div class=\"clear\"></div>\n\t\t \t</div>\n\t\t \t<div class=\"categoryliststngs\" *ngIf='isTouchidDevice'>\n\t\t \t\tFace ID / Touch ID <span><ion-toggle [(ngModel)]=\"seting.face\" (ionChange)=\"seingcnge('touchface')\"></ion-toggle></span>\n\t\t \t\t<div class=\"clear\"></div>\n\t\t \t</div>\n\t\t \t<div class=\"categorylists\" *ngFor=\"let item of allProducts\" (click)='gonext(item)'>\n\t\t \t\t{{item.name}} <span><ion-icon name=\"chevron-forward-outline\"></ion-icon></span>\n\t\t \t</div>\n\t \t</div>\n\t \t\n\t \t<div *ngIf=\"pgtype != 'Settings'\">\n\t \t\t<div class=\"categorylists\" *ngFor=\"let item of allProducts\" (click)='gonext(item)'>\n\t\t \t\t{{item.name}} <span><ion-icon name=\"chevron-forward-outline\"></ion-icon></span>\n\t\t \t</div>\n\t \t</div>\n\t </div>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_listviews_listviews_module_ts-es5.js.map