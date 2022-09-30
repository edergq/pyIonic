(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkSalon"] = self["webpackChunkSalon"] || []).push([["src_app_subcategory_subcategory_module_ts"], {
    /***/
    81964: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SubcategoryPageRoutingModule": function SubcategoryPageRoutingModule() {
          return (
            /* binding */
            _SubcategoryPageRoutingModule
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


      var _subcategory_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./subcategory.page */
      78844);

      var routes = [{
        path: '',
        component: _subcategory_page__WEBPACK_IMPORTED_MODULE_0__.SubcategoryPage
      }];

      var _SubcategoryPageRoutingModule = function SubcategoryPageRoutingModule() {
        _classCallCheck(this, SubcategoryPageRoutingModule);
      };

      _SubcategoryPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _SubcategoryPageRoutingModule);
      /***/
    },

    /***/
    36884: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SubcategoryPageModule": function SubcategoryPageModule() {
          return (
            /* binding */
            _SubcategoryPageModule
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


      var _subcategory_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./subcategory-routing.module */
      81964);
      /* harmony import */


      var _subcategory_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./subcategory.page */
      78844);

      var _SubcategoryPageModule = function SubcategoryPageModule() {
        _classCallCheck(this, SubcategoryPageModule);
      };

      _SubcategoryPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _subcategory_routing_module__WEBPACK_IMPORTED_MODULE_0__.SubcategoryPageRoutingModule],
        declarations: [_subcategory_page__WEBPACK_IMPORTED_MODULE_1__.SubcategoryPage]
      })], _SubcategoryPageModule);
      /***/
    },

    /***/
    78844: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SubcategoryPage": function SubcategoryPage() {
          return (
            /* binding */
            _SubcategoryPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_subcategory_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./subcategory.page.html */
      97798);
      /* harmony import */


      var _subcategory_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./subcategory.page.scss */
      6897);
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      38583);

      var _SubcategoryPage = /*#__PURE__*/function () {
        function SubcategoryPage(menuCtrl, apiService, basic, localApi, cart, route, alertController, location, modalController, activatedRoute) {
          _classCallCheck(this, SubcategoryPage);

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
        }

        _createClass(SubcategoryPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.imgpath = _environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.imagepath;
            this.category_id = this.activatedRoute.snapshot.paramMap.get('categoryid');
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
          key: "getallProducts",
          value: function getallProducts() {
            var _this2 = this;

            this.postdata.category_id = this.category_id;
            this.basic.presentLoading();
            this.apiService.postdata('getsubcategory', this.postdata).subscribe(function (resp) {
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
            this.route.navigate(['/products/' + this.category_id + '/' + item.id + '/' + item.name]);
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.mycart = this.cart.getcart();
            this.carttotal = this.cart.getTotalCart();
            this.cartcount = this.mycart.length;
          }
        }, {
          key: "viewmycart",
          value: function viewmycart() {
            this.route.navigate(['/booknow']);
          }
        }]);

        return SubcategoryPage;
      }();

      _SubcategoryPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.MenuController
        }, {
          type: src_Providers_Services_api_service__WEBPACK_IMPORTED_MODULE_5__.ApiService
        }, {
          type: src_Providers_Basic_basic_api_service__WEBPACK_IMPORTED_MODULE_2__.BasicApiService
        }, {
          type: src_Providers_Local_local_api_service__WEBPACK_IMPORTED_MODULE_4__.LocalApiService
        }, {
          type: src_Providers_Cart_cart_api_service__WEBPACK_IMPORTED_MODULE_3__.CartApiService
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
        }];
      };

      _SubcategoryPage = (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-subcategory',
        template: _raw_loader_subcategory_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_subcategory_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _SubcategoryPage);
      /***/
    },

    /***/
    6897: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".categorylists {\n  width: 100%;\n  height: auto;\n  padding: 0;\n  position: relative;\n  background: #fff;\n  margin-bottom: 5px;\n  font-size: 12px;\n  text-transform: uppercase;\n  --padding-start: 3px;\n}\n.categorylists br {\n  content: \"A\" !important;\n  display: block !important;\n  margin-bottom: 3px !important;\n}\n.categorylists span {\n  font-size: 12px;\n  text-transform: none;\n  color: #828282;\n}\n.categorylists .catimg {\n  width: 60px;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 8px;\n  display: table;\n  /* vertical-align: middle; */\n  text-align: center;\n  /* margin-top: 12px; */\n  overflow: hidden;\n}\n.categorylists .catimg span {\n  display: table-cell;\n  vertical-align: middle;\n  text-align: center;\n  height: 100%;\n}\n.categorylists .catimg img {\n  width: 100%;\n  border: solid 1px #CCC;\n  border-radius: 3px;\n  vertical-align: middle;\n  display: table-cell;\n}\n.item-native {\n  padding: 0;\n  padding-left: 10px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1YmNhdGVnb3J5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLFdBQUE7RUFDRyxZQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0FBQ0o7QUFBQztFQUNDLHVCQUFBO0VBQ0UseUJBQUE7RUFDQSw2QkFBQTtBQUVKO0FBQ0M7RUFDQyxlQUFBO0VBQ0csb0JBQUE7RUFDQSxjQUFBO0FBQ0w7QUFDQztFQUNDLFdBQUE7RUFDRyxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQUNMO0FBQUs7RUFDQyxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBRU47QUFBSztFQUNGLFdBQUE7RUFDRyxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUVOO0FBR0E7RUFDQyxVQUFBO0VBQ0EsNkJBQUE7QUFBRCIsImZpbGUiOiJzdWJjYXRlZ29yeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2F0ZWdvcnlsaXN0c3tcblx0d2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIC0tcGFkZGluZy1zdGFydDogM3B4O1xuXHRicntcblx0XHRjb250ZW50OiBcIkFcIiAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogM3B4ICFpbXBvcnRhbnQ7XG5cdH1cblx0XG5cdHNwYW57XG5cdFx0Zm9udC1zaXplOiAxMnB4O1xuXHQgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG5cdCAgICBjb2xvcjogIzgyODI4Mjtcblx0fVxuXHQuY2F0aW1ne1xuXHRcdHdpZHRoOiA2MHB4O1xuXHQgICAgaGVpZ2h0OiAxMDAlO1xuXHQgICAgcG9zaXRpb246IGFic29sdXRlO1xuXHQgICAgdG9wOiAwO1xuXHQgICAgbGVmdDogOHB4O1xuXHQgICAgZGlzcGxheTogdGFibGU7XG5cdCAgICAvKiB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAqL1xuXHQgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXHQgICAgLyogbWFyZ2luLXRvcDogMTJweDsgKi9cblx0ICAgIG92ZXJmbG93OiBoaWRkZW47XG5cdCAgICBzcGFue1xuXHQgICAgXHRkaXNwbGF5OiB0YWJsZS1jZWxsO1xuXHRcdCAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXHRcdCAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0ICAgIGhlaWdodDogMTAwJTtcblx0ICAgIH1cblx0ICAgIGltZ3tcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdCAgICBib3JkZXI6IHNvbGlkIDFweCAjQ0NDO1xuXHRcdCAgICBib3JkZXItcmFkaXVzOiAzcHg7XG5cdFx0ICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cdFx0ICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG5cdFx0fVxuXHR9XG59XG5cbi5pdGVtLW5hdGl2ZXtcblx0cGFkZGluZzogMDtcblx0cGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG59Il19 */";
      /***/
    },

    /***/
    97798: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"header-background-color\">\n  \t<!-- <ion-back-button slot=\"start\"></ion-back-button> -->\n    <ion-menu-button slot=\"start\"></ion-menu-button>\n    <ion-title class=\"heaerfont\">{{title}}</ion-title>\n    <ion-buttons slot=\"end\" (click)='viewmycart()'>\n    \t<div class=\"cartcount\" *ngIf='cartcount'>\n    \t\t{{cartcount}}\n    \t</div>\n      <ion-icon name=\"cart-outline\" class='headerrighticon'></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n\t  <ion-refresher-content></ion-refresher-content>\n\t</ion-refresher>\n\n\t<div class=\"padcontr\">\n    <ion-card lines=\"none\" *ngFor=\"let item of allProducts\" (click)='gonext(item)' style=\"margin-inline: 0px; margin: 0px 0px 8px 0px; border-radius: 8px !important;\">\n      <img src=\"{{imgpath}}subcategory/{{item.icon}}\" style=\"height: 150px; width: 96%; object-fit: cover; border-radius: 7px; margin-left: 2%; margin-top: 2%; border-radius: 8px !important;\">\n      <ion-card-header>\n        <ion-card-subtitle style=\"font-size: 16px; text-transform: uppercase; color: #ff4181;\">{{item.name}}</ion-card-subtitle>\n      </ion-card-header>\n    </ion-card>\n\t</div>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_subcategory_subcategory_module_ts-es5.js.map