(self["webpackChunkSalon"] = self["webpackChunkSalon"] || []).push([["src_app_contactus_contactus_module_ts"],{

/***/ 38463:
/*!*******************************************************!*\
  !*** ./src/app/contactus/contactus-routing.module.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactusPageRoutingModule": function() { return /* binding */ ContactusPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _contactus_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contactus.page */ 38188);




const routes = [
    {
        path: '',
        component: _contactus_page__WEBPACK_IMPORTED_MODULE_0__.ContactusPage
    }
];
let ContactusPageRoutingModule = class ContactusPageRoutingModule {
};
ContactusPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ContactusPageRoutingModule);



/***/ }),

/***/ 58037:
/*!***********************************************!*\
  !*** ./src/app/contactus/contactus.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactusPageModule": function() { return /* binding */ ContactusPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _contactus_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contactus-routing.module */ 38463);
/* harmony import */ var _contactus_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contactus.page */ 38188);







let ContactusPageModule = class ContactusPageModule {
};
ContactusPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _contactus_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContactusPageRoutingModule
        ],
        declarations: [_contactus_page__WEBPACK_IMPORTED_MODULE_1__.ContactusPage]
    })
], ContactusPageModule);



/***/ }),

/***/ 38188:
/*!*********************************************!*\
  !*** ./src/app/contactus/contactus.page.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactusPage": function() { return /* binding */ ContactusPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_contactus_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./contactus.page.html */ 76878);
/* harmony import */ var _contactus_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contactus.page.scss */ 43031);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_Providers_Basic_basic_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/Providers/Basic/basic-api.service */ 92306);
/* harmony import */ var src_Providers_Local_local_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/Providers/Local/local-api.service */ 99068);
/* harmony import */ var src_Providers_Services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/Providers/Services/api.service */ 48158);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ 53760);
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ 64687);
/* harmony import */ var _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/email-composer/ngx */ 51535);














let ContactusPage = class ContactusPage {
    constructor(menuCtrl, apiService, basic, localApi, route, alertController, location, modalController, activatedRoute, platform, iab, callNumber, emailComposer) {
        this.menuCtrl = menuCtrl;
        this.apiService = apiService;
        this.basic = basic;
        this.localApi = localApi;
        this.route = route;
        this.alertController = alertController;
        this.location = location;
        this.modalController = modalController;
        this.activatedRoute = activatedRoute;
        this.platform = platform;
        this.iab = iab;
        this.callNumber = callNumber;
        this.emailComposer = emailComposer;
        this.postdata = {};
        this.pgtype = 'Contact Us';
        this.ipbroptions = {};
    }
    ngOnInit() {
        this.apnme = _environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.appname;
        this.pgtype = 'Contact Us';
        this.imgpath = _environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.imagepath;
        this.getallProducts();
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
            this.cnt = resp.data[0];
            setTimeout(() => {
                this.basic.dismissloader();
            }, 1000);
        }, (err) => {
            return false;
        });
    }
    acnfr(frwht, val) {
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
        if (frwht == 'address') {
            if (this.platform.is('android')) {
                const browser = this.iab.create('geo:0,0?q=' + val, '_system', this.ipbroptions);
            }
            else {
                const browser = this.iab.create('maps://?q=' + val, '_system', this.ipbroptions);
            }
        }
        if (frwht == 'website') {
            const browser = this.iab.create(val, '_blank', this.ipbroptions);
        }
        if (frwht == 'whatsapp') {
            const browser = this.iab.create('https://api.whatsapp.com/send?phone=' + _environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.mobileprefix + val, '_system', this.ipbroptions);
        }
        if (frwht == 'call') {
            this.callNumber.callNumber(val, true);
        }
        if (frwht == 'email') {
            let email = {
                to: val,
                subject: 'Enquiry from V1 Salon',
                body: '',
                isHtml: true
            };
            this.emailComposer.open(email);
        }
    }
};
ContactusPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.MenuController },
    { type: src_Providers_Services_api_service__WEBPACK_IMPORTED_MODULE_4__.ApiService },
    { type: src_Providers_Basic_basic_api_service__WEBPACK_IMPORTED_MODULE_2__.BasicApiService },
    { type: src_Providers_Local_local_api_service__WEBPACK_IMPORTED_MODULE_3__.LocalApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_11__.Location },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.Platform },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__.InAppBrowser },
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_7__.CallNumber },
    { type: _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_8__.EmailComposer }
];
ContactusPage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-contactus',
        template: _raw_loader_contactus_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_contactus_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ContactusPage);



/***/ }),

/***/ 43031:
/*!***********************************************!*\
  !*** ./src/app/contactus/contactus.page.scss ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cateringlogo {\n  width: 100%;\n  height: auto;\n  text-align: center;\n}\n.cateringlogo img {\n  width: 70%;\n  margin: 10px auto;\n}\n.contactlist {\n  width: 100%;\n  height: auto;\n}\n.contactlist ul {\n  margin: 0;\n  padding: 0;\n}\n.contactlist ul li {\n  list-style: none;\n  padding: 15px 10px;\n  background-color: #fff;\n  margin-bottom: 10px;\n  position: relative;\n  padding-left: 45px;\n  font-size: 15px;\n}\n.contactlist ul li ion-icon {\n  position: absolute;\n  left: 12px;\n  top: 14px;\n  font-size: 18px;\n}\n.contactlist ul li img {\n  position: absolute;\n  left: 7px;\n  top: 10px;\n  font-size: 18px;\n  height: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3R1cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQ0Q7QUFBQztFQUNDLFVBQUE7RUFDQSxpQkFBQTtBQUVGO0FBRUE7RUFDQyxXQUFBO0VBQ0EsWUFBQTtBQUNEO0FBQUM7RUFDQyxTQUFBO0VBQ0EsVUFBQTtBQUVGO0FBREU7RUFDQyxnQkFBQTtFQUNHLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBR047QUFGRztFQUNDLGtCQUFBO0VBQ0csVUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FBSVA7QUFGRztFQUNDLGtCQUFBO0VBQ0csU0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUlQIiwiZmlsZSI6ImNvbnRhY3R1cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2F0ZXJpbmdsb2dve1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiBhdXRvO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGltZ3tcblx0XHR3aWR0aDogNzAlO1xuXHRcdG1hcmdpbjogMTBweCBhdXRvO1xuXHR9XG59XG5cbi5jb250YWN0bGlzdHtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogYXV0bztcblx0dWx7XG5cdFx0bWFyZ2luOiAwO1xuXHRcdHBhZGRpbmc6IDA7XG5cdFx0bGl7XG5cdFx0XHRsaXN0LXN0eWxlOiBub25lO1xuXHRcdCAgICBwYWRkaW5nOiAxNXB4IDEwcHg7XG5cdFx0ICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cdFx0ICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG5cdFx0ICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHQgICAgcGFkZGluZy1sZWZ0OiA0NXB4O1xuXHRcdCAgICBmb250LXNpemU6IDE1cHg7XG5cdFx0XHRpb24taWNvbntcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0ICAgIGxlZnQ6IDEycHg7XG5cdFx0XHQgICAgdG9wOiAxNHB4O1xuXHRcdFx0ICAgIGZvbnQtc2l6ZTogMThweDtcblx0XHRcdH1cblx0XHRcdGltZ3tcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0ICAgIGxlZnQ6IDdweDtcblx0XHRcdCAgICB0b3A6IDEwcHg7XG5cdFx0XHQgICAgZm9udC1zaXplOiAxOHB4O1xuXHRcdFx0ICAgIGhlaWdodDogMzBweDtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn0iXX0= */");

/***/ }),

/***/ 76878:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contactus/contactus.page.html ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-menu-button slot=\"start\"></ion-menu-button>\n    <ion-title class=\"heaerfont\">Contact Us</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n\t  <ion-refresher-content></ion-refresher-content>\n\t</ion-refresher>\n\t<div class=\"padcontr\">\n\t \t<div class=\"cateringlogo\">\n\t\t \t<img src=\"assets/icon/logo.png\">\n\t\t</div>\n\n\t\t<div class=\"contactlist\">\n\t\t \t<ul>\n\t\t \t\t<li *ngIf='cnt?.address' (click)=\"acnfr('address', cnt?.address)\"><img src=\"assets/icon/social/address.png\"> {{cnt?.address}}</li>\n\t\t\t \t<li *ngIf='cnt?.email' (click)=\"acnfr('email', cnt?.email)\"><img src=\"assets/icon/social/email.png\"> {{cnt?.email}}</li>\n\t\t\t \t<li *ngIf='cnt?.mobile' (click)=\"acnfr('call', cnt?.mobile)\"><img src=\"assets/icon/social/phone.png\"> {{cnt?.mobile}}</li>\n\t\t\t \t<li *ngIf='cnt?.phone' (click)=\"acnfr('call', cnt?.phone)\"><img src=\"assets/icon/social/phone.png\"> {{cnt?.phone}}</li>\n\t\t\t \t<li *ngIf='cnt?.whatsapp' (click)=\"acnfr('whatsapp', cnt?.whatsapp)\"><img src=\"assets/icon/social/whatsapp.png\"> Send us a Whatsapp Message</li>\n\t\t\t \t<li *ngIf='cnt?.website' (click)=\"acnfr('website', cnt?.website)\"><img src=\"assets/icon/social/website.png\"> Website</li>\n\t\t\t \t<li *ngIf='cnt?.facebook' (click)=\"acnfr('website', cnt?.facebook)\"><img src=\"assets/icon/social/facebook.png\"> {{apnme}}/facebook</li>\n\t\t\t \t<li *ngIf='cnt?.twitter' (click)=\"acnfr('website', cnt?.twitter)\"><img src=\"assets/icon/social/twitter.png\"> {{apnme}}/twitter</li>\n\t\t\t \t<li *ngIf='cnt?.instagram' (click)=\"acnfr('website', cnt?.instagram)\"><img src=\"assets/icon/social/instagram.png\"> {{apnme}}/instagram</li>\n\t\t\t \t<li *ngIf='cnt?.linkedln' (click)=\"acnfr('website', cnt?.linkedln)\"><img src=\"assets/icon/social/linkedin.png\"> {{apnme}}/Linkedln</li>\n\t\t\t \t<li *ngIf='cnt?.pinterest' (click)=\"acnfr('website', cnt?.linkedln)\"><img src=\"assets/icon/social/pinterest.png\"> {{apnme}}/pinterest</li>\n\t\t\t \t<li *ngIf='cnt?.trustpilot' (click)=\"acnfr('website', cnt?.trustpilot)\"><img src=\"assets/icon/social/trustpilot.png\"> {{apnme}}/TrustPilot</li>\n\t\t\t \t<li *ngIf='cnt?.trip_advisor' (click)=\"acnfr('website', cnt?.trip_advisor)\"><img src=\"assets/icon/social/tripadvisor.png\"> {{apnme}}/TripAdvisor</li>\n\t\t\t \t<li *ngIf='cnt?.google_mybusiness' (click)=\"acnfr('website', cnt?.google_mybusiness)\"><img src=\"assets/icon/social/googlemybusiness.png\"> {{apnme}}/GoogleMyBusiness</li>\n\t\t \t</ul>\n\t\t</div>\n\t</div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_contactus_contactus_module_ts-es2015.js.map