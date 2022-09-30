(self["webpackChunkSalon"] = self["webpackChunkSalon"] || []).push([["src_app_videogallery_videogallery_module_ts"],{

/***/ 16615:
/*!*************************************************************!*\
  !*** ./src/app/videogallery/videogallery-routing.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VideogalleryPageRoutingModule": function() { return /* binding */ VideogalleryPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _videogallery_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./videogallery.page */ 42619);




const routes = [
    {
        path: '',
        component: _videogallery_page__WEBPACK_IMPORTED_MODULE_0__.VideogalleryPage
    }
];
let VideogalleryPageRoutingModule = class VideogalleryPageRoutingModule {
};
VideogalleryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VideogalleryPageRoutingModule);



/***/ }),

/***/ 42091:
/*!*****************************************************!*\
  !*** ./src/app/videogallery/videogallery.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VideogalleryPageModule": function() { return /* binding */ VideogalleryPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _videogallery_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./videogallery-routing.module */ 16615);
/* harmony import */ var _videogallery_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./videogallery.page */ 42619);







let VideogalleryPageModule = class VideogalleryPageModule {
};
VideogalleryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _videogallery_routing_module__WEBPACK_IMPORTED_MODULE_0__.VideogalleryPageRoutingModule
        ],
        declarations: [_videogallery_page__WEBPACK_IMPORTED_MODULE_1__.VideogalleryPage]
    })
], VideogalleryPageModule);



/***/ }),

/***/ 42619:
/*!***************************************************!*\
  !*** ./src/app/videogallery/videogallery.page.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VideogalleryPage": function() { return /* binding */ VideogalleryPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_videogallery_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./videogallery.page.html */ 25444);
/* harmony import */ var _videogallery_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./videogallery.page.scss */ 82220);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_native_youtube_video_player_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/youtube-video-player/ngx */ 64542);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_Providers_Basic_basic_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/Providers/Basic/basic-api.service */ 92306);
/* harmony import */ var src_Providers_Services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/Providers/Services/api.service */ 48158);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ 92340);










let VideogalleryPage = class VideogalleryPage {
    constructor(menuCtrl, apiService, basic, route, activatedRoute, youtube, platform) {
        this.menuCtrl = menuCtrl;
        this.apiService = apiService;
        this.basic = basic;
        this.route = route;
        this.activatedRoute = activatedRoute;
        this.youtube = youtube;
        this.platform = platform;
        this.postdata = {};
        this.ipbroptions = {};
    }
    ngOnInit() {
        this.pgtype = this.activatedRoute.snapshot.paramMap.get('pgtype');
        this.imgpath = _environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.imagepath;
        this.getallProducts();
        this.brndane = _environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.appname;
    }
    doRefresh(event) {
        console.log('Begin async operation');
        setTimeout(() => {
            this.getallProducts();
            event.target.complete();
        }, 2000);
    }
    getallProducts() {
        this.postdata.pgtype = this.pgtype;
        this.postdata.about = 'OK';
        this.basic.presentLoading();
        this.apiService.postdata('getallcms', this.postdata).subscribe((resp) => {
            this.allProducts = resp.data;
            console.log('HELLO', this.allProducts);
            setTimeout(() => {
                this.basic.dismissloader();
            }, 1000);
        }, (err) => {
            return false;
        });
    }
    helovid(val) {
        this.link = 'https://img.youtube.com/vi/' + val + '/0.jpg';
        console.log("imagelink", this.link);
        console.log("this.link", val);
        this.platform.ready().then(() => {
            this.youtube.openVideo(val);
        });
    }
};
VideogalleryPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.MenuController },
    { type: src_Providers_Services_api_service__WEBPACK_IMPORTED_MODULE_4__.ApiService },
    { type: src_Providers_Basic_basic_api_service__WEBPACK_IMPORTED_MODULE_3__.BasicApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _ionic_native_youtube_video_player_ngx__WEBPACK_IMPORTED_MODULE_2__.YoutubeVideoPlayer },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform }
];
VideogalleryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-videogallery',
        template: _raw_loader_videogallery_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_videogallery_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], VideogalleryPage);



/***/ }),

/***/ 82220:
/*!*****************************************************!*\
  !*** ./src/app/videogallery/videogallery.page.scss ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".offerbox {\n  width: 100%;\n  height: auto;\n  background-color: #fff;\n  border-radius: 3px;\n  box-shadow: 0 1px 2px #CCC;\n  margin-bottom: 10px;\n}\n.offerbox .offer_img {\n  width: 100%;\n  height: auto;\n  position: relative;\n}\n.offerbox .offer_img img {\n  width: 100%;\n  border-radius: 3px 3px 0 0;\n}\n.offerbox .offer_img .laybtn {\n  width: 100%;\n  height: auto;\n  position: absolute;\n  top: 40%;\n  text-align: center;\n}\n.offerbox .offer_img .laybtn img {\n  width: 66px;\n  box-shadow: none;\n  border-radius: 0;\n  overflow: hidden;\n}\n.offerbox .offercode {\n  width: 100%;\n  height: auto;\n  position: relative;\n  font-size: 14px;\n  font-weight: bold;\n  padding: 0 15px;\n  margin-top: 10px;\n}\n.offerbox .offercode img {\n  height: 13px;\n  margin-right: 5px;\n}\n.offerbox .offercode span {\n  float: right;\n  font-size: 14px;\n  color: #ecba26;\n  font-weight: normal;\n  text-transform: uppercase;\n}\n.offerbox .offerhead {\n  font-size: 13px;\n  line-height: 22px;\n  border-bottom: solid 1px #f1f1f1;\n  margin: 7px 0;\n  padding: 0 15px;\n  padding-bottom: 3px;\n  font-weight: bold;\n}\n.offerbox .offerhead span {\n  font-weight: normal;\n}\n.offerbox .offerdescription {\n  width: 100%;\n  height: auto;\n  font-size: 12px;\n  padding: 0 15px 10px 15px;\n}\n.offerbox .socialicon {\n  width: 100%;\n  height: auto;\n  font-size: 20px;\n  padding: 0 15px 10px 15px;\n}\n.offerbox .socialicon ion-icon {\n  margin-right: 7px;\n}\n.offerbox .socialicon .facebook {\n  color: #4267B2;\n}\n.offerbox .socialicon .twitter {\n  color: #00acee;\n}\n.offerbox .socialicon .instagram {\n  color: #9f338c;\n}\n.offerbox .socialicon .youtube {\n  color: #FF0000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZGVvZ2FsbGVyeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0FBQ0Q7QUFBQztFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFFRjtBQURFO0VBQ0MsV0FBQTtFQUNBLDBCQUFBO0FBR0g7QUFERTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7QUFHSDtBQUZHO0VBQ0MsV0FBQTtFQUNBLGdCQUFBO0VBQ0csZ0JBQUE7RUFDQSxnQkFBQTtBQUlQO0FBQUM7RUFDQyxXQUFBO0VBQ0csWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBRUw7QUFERTtFQUNDLFlBQUE7RUFDRyxpQkFBQTtBQUdOO0FBREU7RUFDQyxZQUFBO0VBQ0csZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBR047QUFDQztFQUNDLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0VBQ0csYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBQ0w7QUFBSztFQUNDLG1CQUFBO0FBRU47QUFDQztFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBQ0Y7QUFFQztFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBQUY7QUFDRTtFQUNDLGlCQUFBO0FBQ0g7QUFDRTtFQUNDLGNBQUE7QUFDSDtBQUNFO0VBQ0MsY0FBQTtBQUNIO0FBQ0U7RUFDQyxjQUFBO0FBQ0g7QUFDRTtFQUNDLGNBQUE7QUFDSCIsImZpbGUiOiJ2aWRlb2dhbGxlcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9mZmVyYm94e1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiBhdXRvO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXHRib3JkZXItcmFkaXVzOiAzcHg7XG5cdGJveC1zaGFkb3c6IDAgMXB4IDJweCAjQ0NDO1xuXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xuXHQub2ZmZXJfaW1ne1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdGhlaWdodDogYXV0bztcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0aW1ne1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRib3JkZXItcmFkaXVzOiAzcHggM3B4IDAgMDtcblx0XHR9XG5cdFx0LmxheWJ0bntcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0aGVpZ2h0OiBhdXRvO1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0dG9wOiA0MCU7XG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRpbWd7XG5cdFx0XHRcdHdpZHRoOiA2NnB4O1xuXHRcdFx0XHRib3gtc2hhZG93OiBub25lO1xuXHRcdFx0ICAgIGJvcmRlci1yYWRpdXM6IDA7XG5cdFx0XHQgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0Lm9mZmVyY29kZXtcblx0XHR3aWR0aDogMTAwJTtcblx0ICAgIGhlaWdodDogYXV0bztcblx0ICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0ICAgIGZvbnQtc2l6ZTogMTRweDtcblx0ICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXHQgICAgcGFkZGluZzogMCAxNXB4O1xuXHQgICAgbWFyZ2luLXRvcDogMTBweDtcblx0XHRpbWd7XG5cdFx0XHRoZWlnaHQ6IDEzcHg7XG4gICAgXHRcdG1hcmdpbi1yaWdodDogNXB4O1xuXHRcdH1cblx0XHRzcGFue1xuXHRcdFx0ZmxvYXQ6IHJpZ2h0O1xuXHRcdCAgICBmb250LXNpemU6IDE0cHg7XG5cdFx0ICAgIGNvbG9yOiAjZWNiYTI2O1xuXHRcdCAgICBmb250LXdlaWdodDogbm9ybWFsO1xuXHRcdCAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRcdH1cblxuXHR9XG5cdC5vZmZlcmhlYWR7XG5cdFx0Zm9udC1zaXplOiAxM3B4O1xuXHRcdGxpbmUtaGVpZ2h0OiAyMnB4O1xuXHRcdGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjZjFmMWYxO1xuXHQgICAgbWFyZ2luOiA3cHggMDtcblx0ICAgIHBhZGRpbmc6IDAgMTVweDtcblx0ICAgIHBhZGRpbmctYm90dG9tOiAzcHg7XG5cdCAgICBmb250LXdlaWdodDogYm9sZDtcblx0ICAgIHNwYW57XG5cdCAgICBcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XG5cdCAgICB9XG5cdH1cblx0Lm9mZmVyZGVzY3JpcHRpb257XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0aGVpZ2h0OiBhdXRvO1xuXHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRwYWRkaW5nOiAwIDE1cHggMTBweCAxNXB4O1xuXHR9XG5cblx0LnNvY2lhbGljb257XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0aGVpZ2h0OiBhdXRvO1xuXHRcdGZvbnQtc2l6ZTogMjBweDtcblx0XHRwYWRkaW5nOiAwIDE1cHggMTBweCAxNXB4O1xuXHRcdGlvbi1pY29ue1xuXHRcdFx0bWFyZ2luLXJpZ2h0OiA3cHg7XG5cdFx0fVxuXHRcdC5mYWNlYm9va3tcblx0XHRcdGNvbG9yOiAjNDI2N0IyO1xuXHRcdH1cblx0XHQudHdpdHRlcntcblx0XHRcdGNvbG9yOiAjMDBhY2VlO1xuXHRcdH1cblx0XHQuaW5zdGFncmFte1xuXHRcdFx0Y29sb3I6ICM5ZjMzOGM7XG5cdFx0fVxuXHRcdC55b3V0dWJle1xuXHRcdFx0Y29sb3I6ICNGRjAwMDA7XG5cdFx0fVxuXHR9XG59XG5cbiJdfQ== */");

/***/ }),

/***/ 25444:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/videogallery/videogallery.page.html ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"header-background-color\">\n    <ion-title>{{pgtype}}</ion-title>\n    <ion-menu-button slot=\"start\"></ion-menu-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n\t  <ion-refresher-content></ion-refresher-content>\n\t</ion-refresher>\n\n\t<div *ngIf=\"pgtype == 'Video Gallery'\">\n\t\t<div class=\"padcontr\">\n\t\t\t<div class=\"offerbox\" *ngFor=\"let item of allProducts\">\n\t\t\t\t<div class=\"offer_img\" (click)='helovid(item.link)'>\n\t\t\t\t\t<div class=\"laybtn\">\n\t\t\t\t     <img src=\"assets/ytbplay.png\">\n\t\t\t\t   </div>\n\t\t\t\t\t<img src=\"https://img.youtube.com/vi/{{item.link}}/0.jpg\">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</ion-content>\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_videogallery_videogallery_module_ts-es2015.js.map