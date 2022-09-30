(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkSalon"] = self["webpackChunkSalon"] || []).push([["src_app_ourstylists_ourstylists_module_ts"], {
    /***/
    51219: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OurstylistsPageRoutingModule": function OurstylistsPageRoutingModule() {
          return (
            /* binding */
            _OurstylistsPageRoutingModule
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


      var _ourstylists_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./ourstylists.page */
      41936);

      var routes = [{
        path: '',
        component: _ourstylists_page__WEBPACK_IMPORTED_MODULE_0__.OurstylistsPage
      }];

      var _OurstylistsPageRoutingModule = function OurstylistsPageRoutingModule() {
        _classCallCheck(this, OurstylistsPageRoutingModule);
      };

      _OurstylistsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _OurstylistsPageRoutingModule);
      /***/
    },

    /***/
    7588: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OurstylistsPageModule": function OurstylistsPageModule() {
          return (
            /* binding */
            _OurstylistsPageModule
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


      var _ourstylists_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./ourstylists-routing.module */
      51219);
      /* harmony import */


      var _ourstylists_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./ourstylists.page */
      41936);

      var _OurstylistsPageModule = function OurstylistsPageModule() {
        _classCallCheck(this, OurstylistsPageModule);
      };

      _OurstylistsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _ourstylists_routing_module__WEBPACK_IMPORTED_MODULE_0__.OurstylistsPageRoutingModule],
        declarations: [_ourstylists_page__WEBPACK_IMPORTED_MODULE_1__.OurstylistsPage]
      })], _OurstylistsPageModule);
      /***/
    },

    /***/
    41936: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OurstylistsPage": function OurstylistsPage() {
          return (
            /* binding */
            _OurstylistsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_ourstylists_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./ourstylists.page.html */
      3310);
      /* harmony import */


      var _ourstylists_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./ourstylists.page.scss */
      86185);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_Providers_Basic_basic_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/Providers/Basic/basic-api.service */
      92306);
      /* harmony import */


      var src_Providers_Local_local_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/Providers/Local/local-api.service */
      99068);
      /* harmony import */


      var src_Providers_Services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/Providers/Services/api.service */
      48158);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../environments/environment */
      92340);
      /* harmony import */


      var src_Providers_Cart_cart_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/Providers/Cart/cart-api.service */
      65248);

      var _OurstylistsPage = /*#__PURE__*/function () {
        function OurstylistsPage(menuCtrl, apiService, basic, localApi, route, alertController, location, modalController, activatedRoute, cart) {
          _classCallCheck(this, OurstylistsPage);

          this.menuCtrl = menuCtrl;
          this.apiService = apiService;
          this.basic = basic;
          this.localApi = localApi;
          this.route = route;
          this.alertController = alertController;
          this.location = location;
          this.modalController = modalController;
          this.activatedRoute = activatedRoute;
          this.cart = cart;
          this.Servicesshow = true;
          this.Offersshow = false;
          this.Reviewshow = false;
          this.postdata = {};
        }

        _createClass(OurstylistsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.homepage = "Services";
            this.imgpath = _environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.imagepath;
            this.category_id = this.activatedRoute.snapshot.paramMap.get('category');
            this.title = this.activatedRoute.snapshot.paramMap.get('title');
            this.getallProducts();
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            var _this = this;

            setTimeout(function () {
              _this.getallProducts();

              event.target.complete();
            }, 2000);
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.mycart = this.cart.getcart();
            this.carttotal = this.cart.getTotalCart();
            this.cartcount = this.mycart.length;
          }
        }, {
          key: "getallProducts",
          value: function getallProducts() {
            var _this2 = this;

            this.postdata.category_id = this.category_id;
            this.basic.presentLoading();
            this.apiService.postdata('getcategory', this.postdata).subscribe(function (resp) {
              _this2.allProducts = resp.data;
              console.log("this.allProducts", _this2.allProducts);
              setTimeout(function () {
                _this2.basic.dismissloader();
              }, 1000);
            }, function (err) {
              return false;
            });
          }
        }, {
          key: "gonext",
          value: function gonext(item) {
            if (item.issubcategory) {
              this.route.navigate(['/subcategory/' + item.id + '/' + item.name]);
            } else {
              this.route.navigate(['/products/' + item.id + '/0/' + item.name]);
            }
          }
        }, {
          key: "segmentChanged",
          value: function segmentChanged(val) {
            if (val.detail.value == 'Services') {
              this.Servicesshow = true;
              this.Offersshow = false;
              this.Reviewshow = false;
            } else if (val.detail.value == 'Offers') {
              this.Offersshow = true;
              this.Servicesshow = false;
              this.Reviewshow = false;
            } else {
              this.Reviewshow = true;
              this.Servicesshow = false;
              this.Offersshow = false;
            }
          }
        }, {
          key: "viewmycart",
          value: function viewmycart() {
            this.route.navigate(['/booknow']);
          }
        }]);

        return OurstylistsPage;
      }();

      _OurstylistsPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.MenuController
        }, {
          type: src_Providers_Services_api_service__WEBPACK_IMPORTED_MODULE_4__.ApiService
        }, {
          type: src_Providers_Basic_basic_api_service__WEBPACK_IMPORTED_MODULE_2__.BasicApiService
        }, {
          type: src_Providers_Local_local_api_service__WEBPACK_IMPORTED_MODULE_3__.LocalApiService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_9__.Location
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute
        }, {
          type: src_Providers_Cart_cart_api_service__WEBPACK_IMPORTED_MODULE_6__.CartApiService
        }];
      };

      _OurstylistsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-ourstylists',
        template: _raw_loader_ourstylists_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_ourstylists_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _OurstylistsPage);
      /***/
    },

    /***/
    86185: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".classone {\n  text-align: center;\n  padding: 10px 0px 0px 0px;\n}\n.classone p {\n  padding-bottom: 10px;\n}\n.classtwo {\n  padding: 10px 5px;\n}\n.classtwo p {\n  padding-bottom: 5px;\n  font-size: 12px;\n  text-align: justify;\n}\n.classtwo img {\n  width: 100%;\n  height: 100%;\n}\nh2 {\n  color: #ff4181;\n  font-size: 20px;\n  padding-bottom: 10px;\n}\n.buttonone {\n  height: 2em;\n  background: #a6a9aa;\n  border-radius: 30px;\n  text-transform: uppercase;\n  color: white;\n  --border-style:none;\n  height: 35px;\n}\n.buttontwo {\n  height: 2em;\n  background: #5cc7f1;\n  border-radius: 30px;\n  text-transform: uppercase;\n  color: white;\n  --border-style:none;\n}\n.segment {\n  min-width: 100%;\n  margin-bottom: 10px;\n}\n.segment ion-label {\n  font-size: 16px;\n  text-align: center;\n  text-transform: capitalize;\n}\n.segment ion-segment-button {\n  color: #9e9e9e;\n}\n.categorylists {\n  width: 100%;\n  height: auto;\n  padding: 0;\n  position: relative;\n  background: #fff;\n  margin-bottom: 5px;\n  font-size: 12px;\n  text-transform: uppercase;\n  --padding-start: 3px;\n}\n.categorylists br {\n  content: \"A\" !important;\n  display: block !important;\n  margin-bottom: 3px !important;\n}\n.categorylists span {\n  font-size: 12px;\n  text-transform: none;\n  color: #828282;\n}\n.categorylists .catimg {\n  width: 60px;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 8px;\n  display: table;\n  /* vertical-align: middle; */\n  text-align: center;\n  /* margin-top: 12px; */\n  overflow: hidden;\n}\n.categorylists .catimg span {\n  display: table-cell;\n  vertical-align: middle;\n  text-align: center;\n  height: 100%;\n}\n.categorylists .catimg img {\n  width: 100%;\n  border: solid 1px #CCC;\n  border-radius: 3px;\n  vertical-align: middle;\n  display: table-cell;\n}\n.item-native {\n  padding: 0;\n  padding-left: 10px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm91cnN0eWxpc3RzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7QUFDSjtBQUFJO0VBQ0ksb0JBQUE7QUFFUjtBQUNBO0VBQ0ksaUJBQUE7QUFFSjtBQURJO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFHUjtBQURJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFHUjtBQUFBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQUdKO0FBR0E7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUFKO0FBR0E7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBQUo7QUFHQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQUFKO0FBQ0k7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtBQUNSO0FBQ0k7RUFDSSxjQUFBO0FBQ1I7QUFHQTtFQUNDLFdBQUE7RUFDRyxZQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0FBQUo7QUFDQztFQUNDLHVCQUFBO0VBQ0UseUJBQUE7RUFDQSw2QkFBQTtBQUNKO0FBRUM7RUFDQyxlQUFBO0VBQ0csb0JBQUE7RUFDQSxjQUFBO0FBQUw7QUFFQztFQUNDLFdBQUE7RUFDRyxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQUFMO0FBQ0s7RUFDQyxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBQ047QUFDSztFQUNGLFdBQUE7RUFDRyxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUNOO0FBSUE7RUFDQyxVQUFBO0VBQ0EsNkJBQUE7QUFERCIsImZpbGUiOiJvdXJzdHlsaXN0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2xhc3NvbmV7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHggMHB4IDBweCAwcHg7XG4gICAgcHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgfVxufVxuLmNsYXNzdHdve1xuICAgIHBhZGRpbmc6IDEwcHggNXB4O1xuICAgIHB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICB9XG4gICAgaW1ne1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbn1cbmgye1xuICAgIGNvbG9yOiAjZmY0MTgxO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi8vIGlvbi1pY29ue1xuLy8gICAgIGZvbnQtc2l6ZTogNTBweDtcbi8vICAgICAvLyBjb2xvcjogI2ZmNDE4MTtcbi8vIH1cbi5idXR0b25vbmV7XG4gICAgaGVpZ2h0OiAyZW07XG4gICAgYmFja2dyb3VuZDogI2E2YTlhYTtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIC0tYm9yZGVyLXN0eWxlOm5vbmU7XG4gICAgaGVpZ2h0OiAzNXB4O1xufVxuXG4uYnV0dG9udHdve1xuICAgIGhlaWdodDogMmVtO1xuICAgIGJhY2tncm91bmQ6ICM1Y2M3ZjE7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAtLWJvcmRlci1zdHlsZTpub25lO1xufVxuXG4uc2VnbWVudHtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBpb24tbGFiZWx7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICB9XG4gICAgaW9uLXNlZ21lbnQtYnV0dG9ue1xuICAgICAgICBjb2xvcjogIzllOWU5ZTtcbiAgICB9XG59XG5cbi5jYXRlZ29yeWxpc3Rze1xuXHR3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzogMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAzcHg7XG5cdGJye1xuXHRcdGNvbnRlbnQ6IFwiQVwiICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAzcHggIWltcG9ydGFudDtcblx0fVxuXHRcblx0c3Bhbntcblx0XHRmb250LXNpemU6IDEycHg7XG5cdCAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcblx0ICAgIGNvbG9yOiAjODI4MjgyO1xuXHR9XG5cdC5jYXRpbWd7XG5cdFx0d2lkdGg6IDYwcHg7XG5cdCAgICBoZWlnaHQ6IDEwMCU7XG5cdCAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cdCAgICB0b3A6IDA7XG5cdCAgICBsZWZ0OiA4cHg7XG5cdCAgICBkaXNwbGF5OiB0YWJsZTtcblx0ICAgIC8qIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7ICovXG5cdCAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdCAgICAvKiBtYXJnaW4tdG9wOiAxMnB4OyAqL1xuXHQgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblx0ICAgIHNwYW57XG5cdCAgICBcdGRpc3BsYXk6IHRhYmxlLWNlbGw7XG5cdFx0ICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cdFx0ICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHQgICAgaGVpZ2h0OiAxMDAlO1xuXHQgICAgfVxuXHQgICAgaW1ne1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0ICAgIGJvcmRlcjogc29saWQgMXB4ICNDQ0M7XG5cdFx0ICAgIGJvcmRlci1yYWRpdXM6IDNweDtcblx0XHQgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcblx0XHQgICAgZGlzcGxheTogdGFibGUtY2VsbDtcblx0XHR9XG5cdH1cbn1cblxuLml0ZW0tbmF0aXZle1xuXHRwYWRkaW5nOiAwO1xuXHRwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcbn1cblxuIl19 */";
      /***/
    },

    /***/
    3310: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Our Services</ion-title>\n    <ion-menu-button slot=\"start\"></ion-menu-button>\n    <ion-buttons slot=\"end\" (click)='viewmycart()'>\n    \t<div class=\"cartcount\" *ngIf='cartcount'>\n    \t\t{{cartcount}}\n    \t</div>\n      <ion-icon name=\"cart-outline\" class='headerrighticon'></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n\t  <ion-refresher-content></ion-refresher-content>\n\t</ion-refresher>\n\n\t<div class=\"padcontr\">\n    <ion-card lines=\"none\" *ngFor=\"let item of allProducts\" (click)='gonext(item)' style=\"margin-inline: 0px; margin: 0px 0px 8px 0px; border-radius: 8px !important;\">\n      <img src=\"{{imgpath}}category/{{item.icon}}\" style=\"height: 150px; width: 96%; object-fit: cover; border-radius: 7px; margin-left: 2%; margin-top: 2%; border-radius: 8px !important;\">\n      <ion-card-header>\n        <ion-card-subtitle style=\"font-size: 16px; text-transform: uppercase; color: #ff4181;\">{{item.name}}</ion-card-subtitle>\n      </ion-card-header>\n    \n      <ion-card-content>{{item.desc}}</ion-card-content>\n    </ion-card>\n\t</div>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_ourstylists_ourstylists_module_ts-es5.js.map