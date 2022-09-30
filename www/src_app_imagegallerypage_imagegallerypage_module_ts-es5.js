(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkSalon"] = self["webpackChunkSalon"] || []).push([["src_app_imagegallerypage_imagegallerypage_module_ts"], {
    /***/
    66355: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ImagegallerypagePageRoutingModule": function ImagegallerypagePageRoutingModule() {
          return (
            /* binding */
            _ImagegallerypagePageRoutingModule
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


      var _imagegallerypage_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./imagegallerypage.page */
      20002);

      var routes = [{
        path: '',
        component: _imagegallerypage_page__WEBPACK_IMPORTED_MODULE_0__.ImagegallerypagePage
      }];

      var _ImagegallerypagePageRoutingModule = function ImagegallerypagePageRoutingModule() {
        _classCallCheck(this, ImagegallerypagePageRoutingModule);
      };

      _ImagegallerypagePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ImagegallerypagePageRoutingModule);
      /***/
    },

    /***/
    31165: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ImagegallerypagePageModule": function ImagegallerypagePageModule() {
          return (
            /* binding */
            _ImagegallerypagePageModule
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


      var _imagegallerypage_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./imagegallerypage-routing.module */
      66355);
      /* harmony import */


      var _imagegallerypage_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./imagegallerypage.page */
      20002);

      var _ImagegallerypagePageModule = function ImagegallerypagePageModule() {
        _classCallCheck(this, ImagegallerypagePageModule);
      };

      _ImagegallerypagePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _imagegallerypage_routing_module__WEBPACK_IMPORTED_MODULE_0__.ImagegallerypagePageRoutingModule],
        declarations: [_imagegallerypage_page__WEBPACK_IMPORTED_MODULE_1__.ImagegallerypagePage]
      })], _ImagegallerypagePageModule);
      /***/
    },

    /***/
    20002: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ImagegallerypagePage": function ImagegallerypagePage() {
          return (
            /* binding */
            _ImagegallerypagePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_imagegallerypage_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./imagegallerypage.page.html */
      45796);
      /* harmony import */


      var _imagegallerypage_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./imagegallerypage.page.scss */
      69162);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../environments/environment */
      92340);

      var _ImagegallerypagePage = /*#__PURE__*/function () {
        function ImagegallerypagePage(menuCtrl, apiService, basic, localApi, route, alertController, location, modalController, activatedRoute) {
          _classCallCheck(this, ImagegallerypagePage);

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

        _createClass(ImagegallerypagePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.pgtype = this.activatedRoute.snapshot.paramMap.get('pgtype');
            this.imgpath = _environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.imagepath;
            this.brndane = _environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.appname;
            this.getallProducts();
          }
        }, {
          key: "getallProducts",
          value: function getallProducts() {
            var _this = this;

            this.postdata.pgtype = this.pgtype;
            this.postdata.about = 'OK';
            this.basic.presentLoading();
            this.apiService.postdata('getallcms', this.postdata).subscribe(function (resp) {
              _this.allProducts = resp.data;
              console.log("this.allProducts", _this.allProducts);
              console.log("this.pgtype", _this.pgtype);
              setTimeout(function () {
                _this.basic.dismissloader();
              }, 1000);
            }, function (err) {
              return false;
            });
          }
        }]);

        return ImagegallerypagePage;
      }();

      _ImagegallerypagePage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.MenuController
        }, {
          type: src_Providers_Services_api_service__WEBPACK_IMPORTED_MODULE_4__.ApiService
        }, {
          type: src_Providers_Basic_basic_api_service__WEBPACK_IMPORTED_MODULE_2__.BasicApiService
        }, {
          type: src_Providers_Local_local_api_service__WEBPACK_IMPORTED_MODULE_3__.LocalApiService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_8__.Location
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
        }];
      };

      _ImagegallerypagePage = (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-imagegallerypage',
        template: _raw_loader_imagegallerypage_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_imagegallerypage_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ImagegallerypagePage);
      /***/
    },

    /***/
    69162: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "img {\n  max-width: 100%;\n  display: block;\n}\n\nfigure {\n  margin: 0;\n  display: grid;\n  grid-template-rows: 1fr auto;\n  margin: 3px 0px 3px 0px;\n  page-break-inside: avoid;\n  -moz-column-break-inside: avoid;\n       break-inside: avoid;\n}\n\nfigure > img {\n  grid-row: 1/-1;\n  grid-column: 1;\n}\n\n.container {\n  -moz-column-count: 2;\n       column-count: 2;\n  grid-column-gap: 10px;\n  -moz-column-gap: 10px;\n       column-gap: 10px;\n  padding: 10px 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltYWdlZ2FsbGVyeXBhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLFNBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0VBQUEsK0JBQUE7T0FBQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLG9CQUFBO09BQUEsZUFBQTtFQUNBLHFCQUFBO0VBQUEscUJBQUE7T0FBQSxnQkFBQTtFQUNBLGdCQUFBO0FBQ0oiLCJmaWxlIjoiaW1hZ2VnYWxsZXJ5cGFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuZmlndXJlIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBhdXRvO1xuICAgIG1hcmdpbjogM3B4IDBweCAzcHggMHB4O1xuICAgIGJyZWFrLWluc2lkZTogYXZvaWQ7XG59XG5cbmZpZ3VyZSA+IGltZyB7XG4gICAgZ3JpZC1yb3c6IDEgLyAtMTtcbiAgICBncmlkLWNvbHVtbjogMTtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgY29sdW1uLWNvdW50OiAyO1xuICAgIGNvbHVtbi1nYXA6IDEwcHg7XG4gICAgcGFkZGluZzogMTBweCAyJTtcbn0iXX0= */";
      /***/
    },

    /***/
    45796: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{pgtype}}</ion-title>\n    <ion-menu-button slot=\"start\"></ion-menu-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"container\">\n      <figure *ngFor=\"let item of allProducts\">\n        <img src=\"{{imgpath}}photo_gallery/{{item.image}}\" />\n      </figure>\n    </div>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_imagegallerypage_imagegallerypage_module_ts-es5.js.map