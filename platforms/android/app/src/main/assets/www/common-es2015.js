(self["webpackChunkSalon"] = self["webpackChunkSalon"] || []).push([["common"],{

/***/ 68225:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-d4bd4f74.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": function() { return /* binding */ createButtonActiveGesture; }
/* harmony export */ });
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ 23150);
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./haptic-27b3f981.js */ 52954);
/* harmony import */ var _index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-34cb2743.js */ 39461);




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    (0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    (0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return (0,_index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__.createGesture)({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.a),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.b),
    onEnd: () => {
      clearActiveButton(true);
      (0,_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.h)();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ 27069:
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-94e770cc.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": function() { return /* binding */ attachComponent; },
/* harmony export */   "d": function() { return /* binding */ detachComponent; }
/* harmony export */ });
/* harmony import */ var _helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-1457892a.js */ 71567);


const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  await new Promise(resolve => (0,_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_0__.c)(el, resolve));
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ 52954:
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": function() { return /* binding */ hapticSelectionStart; },
/* harmony export */   "b": function() { return /* binding */ hapticSelectionChanged; },
/* harmony export */   "c": function() { return /* binding */ hapticSelection; },
/* harmony export */   "d": function() { return /* binding */ hapticImpact; },
/* harmony export */   "h": function() { return /* binding */ hapticSelectionEnd; }
/* harmony export */ });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ }),

/***/ 60408:
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": function() { return /* binding */ SPINNERS; }
/* harmony export */ });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ 61269:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": function() { return /* binding */ createColorClasses; },
/* harmony export */   "g": function() { return /* binding */ getClassMap; },
/* harmony export */   "h": function() { return /* binding */ hostContext; },
/* harmony export */   "o": function() { return /* binding */ openURL; }
/* harmony export */ });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ 48979:
/*!*************************************************!*\
  !*** ./src/app/itemdetails/itemdetails.page.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemdetailsPage": function() { return /* binding */ ItemdetailsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_itemdetails_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./itemdetails.page.html */ 84257);
/* harmony import */ var _itemdetails_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./itemdetails.page.scss */ 71689);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_Providers_Basic_basic_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/Providers/Basic/basic-api.service */ 92306);
/* harmony import */ var src_Providers_Local_local_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/Providers/Local/local-api.service */ 99068);
/* harmony import */ var src_Providers_Services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/Providers/Services/api.service */ 48158);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ 92340);











let ItemdetailsPage = class ItemdetailsPage {
    constructor(menuCtrl, apiService, basic, localApi, route, alertController, location, modalController) {
        this.menuCtrl = menuCtrl;
        this.apiService = apiService;
        this.basic = basic;
        this.localApi = localApi;
        this.route = route;
        this.alertController = alertController;
        this.location = location;
        this.modalController = modalController;
        this.slideOpts = {
            initialSlide: 0,
            autoplay: true,
            loop: true,
            speed: 1000,
            effect: 'fade',
            pagination: {
                el: '.swiper-pagination',
                modifierClass: 'nameyourspecialclass'
            }
        };
    }
    ngOnInit() {
        this.getappsetng = this.localApi.getappseting();
        this.imgpath = _environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.imagepath;
    }
};
ItemdetailsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.MenuController },
    { type: src_Providers_Services_api_service__WEBPACK_IMPORTED_MODULE_4__.ApiService },
    { type: src_Providers_Basic_basic_api_service__WEBPACK_IMPORTED_MODULE_2__.BasicApiService },
    { type: src_Providers_Local_local_api_service__WEBPACK_IMPORTED_MODULE_3__.LocalApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__.Location },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController }
];
ItemdetailsPage.propDecorators = {
    item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }]
};
ItemdetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-itemdetails',
        template: _raw_loader_itemdetails_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_itemdetails_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ItemdetailsPage);



/***/ }),

/***/ 6478:
/*!***************************************************!*\
  !*** ./src/app/offerdetails/offerdetails.page.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OfferdetailsPage": function() { return /* binding */ OfferdetailsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_offerdetails_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./offerdetails.page.html */ 87160);
/* harmony import */ var _offerdetails_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./offerdetails.page.scss */ 29988);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_Providers_Basic_basic_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/Providers/Basic/basic-api.service */ 92306);
/* harmony import */ var src_Providers_Local_local_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/Providers/Local/local-api.service */ 99068);
/* harmony import */ var src_Providers_Services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/Providers/Services/api.service */ 48158);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ 92340);











let OfferdetailsPage = class OfferdetailsPage {
    constructor(menuCtrl, apiService, basic, localApi, route, alertController, location) {
        this.menuCtrl = menuCtrl;
        this.apiService = apiService;
        this.basic = basic;
        this.localApi = localApi;
        this.route = route;
        this.alertController = alertController;
        this.location = location;
    }
    ngOnInit() {
        console.log("item", this.item);
        this.getappsetng = this.localApi.getappseting();
        this.imgpath = _environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.imagepath;
    }
};
OfferdetailsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.MenuController },
    { type: src_Providers_Services_api_service__WEBPACK_IMPORTED_MODULE_4__.ApiService },
    { type: src_Providers_Basic_basic_api_service__WEBPACK_IMPORTED_MODULE_2__.BasicApiService },
    { type: src_Providers_Local_local_api_service__WEBPACK_IMPORTED_MODULE_3__.LocalApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__.Location }
];
OfferdetailsPage.propDecorators = {
    item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }]
};
OfferdetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-offerdetails',
        template: _raw_loader_offerdetails_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_offerdetails_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], OfferdetailsPage);



/***/ }),

/***/ 82136:
/*!***************************************************!*\
  !*** ./src/app/openinghours/openinghours.page.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OpeninghoursPage": function() { return /* binding */ OpeninghoursPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_openinghours_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./openinghours.page.html */ 31307);
/* harmony import */ var _openinghours_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./openinghours.page.scss */ 23042);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_Providers_Basic_basic_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/Providers/Basic/basic-api.service */ 92306);
/* harmony import */ var src_Providers_Local_local_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/Providers/Local/local-api.service */ 99068);
/* harmony import */ var src_Providers_Services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/Providers/Services/api.service */ 48158);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ 92340);











let OpeninghoursPage = class OpeninghoursPage {
    constructor(menuCtrl, apiService, basic, localApi, route, alertController, location) {
        this.menuCtrl = menuCtrl;
        this.apiService = apiService;
        this.basic = basic;
        this.localApi = localApi;
        this.route = route;
        this.alertController = alertController;
        this.location = location;
        this.isOpeningtime = false;
    }
    ngOnInit() {
        this.basic.presentLoading();
        this.apiService.getdata('getalldayopentime', '').subscribe((resp) => {
            this.opntimem = resp.data;
            setTimeout(() => {
                this.basic.dismissloader();
                this.isOpeningtime = true;
            }, 1000);
        }, (err) => {
            return false;
        });
        this.imgpath = _environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.imagepath;
    }
};
OpeninghoursPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.MenuController },
    { type: src_Providers_Services_api_service__WEBPACK_IMPORTED_MODULE_4__.ApiService },
    { type: src_Providers_Basic_basic_api_service__WEBPACK_IMPORTED_MODULE_2__.BasicApiService },
    { type: src_Providers_Local_local_api_service__WEBPACK_IMPORTED_MODULE_3__.LocalApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__.Location }
];
OpeninghoursPage.propDecorators = {
    item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }]
};
OpeninghoursPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-openinghours',
        template: _raw_loader_openinghours_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_openinghours_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], OpeninghoursPage);



/***/ }),

/***/ 19943:
/*!*****************************************************!*\
  !*** ./src/app/profileupdate/profileupdate.page.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileupdatePage": function() { return /* binding */ ProfileupdatePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_profileupdate_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./profileupdate.page.html */ 55540);
/* harmony import */ var _profileupdate_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profileupdate.page.scss */ 10627);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_native_touch_id_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/touch-id/ngx */ 5945);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_Providers_Basic_basic_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/Providers/Basic/basic-api.service */ 92306);
/* harmony import */ var src_Providers_Cart_cart_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/Providers/Cart/cart-api.service */ 65248);
/* harmony import */ var src_Providers_Local_local_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/Providers/Local/local-api.service */ 99068);
/* harmony import */ var src_Providers_Services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/Providers/Services/api.service */ 48158);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 38583);












let ProfileupdatePage = class ProfileupdatePage {
    constructor(menuCtrl, apiService, basic, localApi, cart, route, alertController, location, modalController, activatedRoute, touchId) {
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
        this.touchId = touchId;
        this.logineduser = {};
        this.passwrd = {};
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.logineduser = this.localApi.getuser();
    }
    updateprofile() {
        if (!this.logineduser.name) {
            this.basic.alert('Error:', 'Enter your full name');
        }
        else if (!this.logineduser.email) {
            this.basic.alert('Error:', 'Enter your email');
        }
        else if (!this.logineduser.address_line_one) {
            this.basic.alert('Error:', 'Enter address line 1');
        }
        else if (!this.logineduser.postcode) {
            this.basic.alert('Error:', 'Enter postcode');
        }
        else {
            this.basic.presentLoading();
            this.apiService.postdata('updateprofile', this.logineduser).subscribe((resp) => {
                if (resp.data == false) {
                    this.basic.alert('Error:', 'Something went wrong. Please try again');
                }
                else {
                    this.localApi.setuser(resp.data);
                }
                setTimeout(() => {
                    this.basic.dismissloader();
                    this.dismissmodal();
                }, 1000);
            }, (err) => {
                return false;
            });
        }
    }
    dismissmodal() {
        this.modalController.dismiss({
            'dismissed': true
        });
    }
};
ProfileupdatePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.MenuController },
    { type: src_Providers_Services_api_service__WEBPACK_IMPORTED_MODULE_6__.ApiService },
    { type: src_Providers_Basic_basic_api_service__WEBPACK_IMPORTED_MODULE_3__.BasicApiService },
    { type: src_Providers_Local_local_api_service__WEBPACK_IMPORTED_MODULE_5__.LocalApiService },
    { type: src_Providers_Cart_cart_api_service__WEBPACK_IMPORTED_MODULE_4__.CartApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__.Location },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: _ionic_native_touch_id_ngx__WEBPACK_IMPORTED_MODULE_2__.TouchID }
];
ProfileupdatePage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-profileupdate',
        template: _raw_loader_profileupdate_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_profileupdate_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProfileupdatePage);



/***/ }),

/***/ 3775:
/*!*************************************************!*\
  !*** ./src/app/writereview/writereview.page.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WritereviewPage": function() { return /* binding */ WritereviewPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_writereview_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./writereview.page.html */ 62070);
/* harmony import */ var _writereview_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./writereview.page.scss */ 55848);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_Providers_Basic_basic_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/Providers/Basic/basic-api.service */ 92306);
/* harmony import */ var src_Providers_Cart_cart_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/Providers/Cart/cart-api.service */ 65248);
/* harmony import */ var src_Providers_Local_local_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/Providers/Local/local-api.service */ 99068);
/* harmony import */ var src_Providers_Services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/Providers/Services/api.service */ 48158);










let WritereviewPage = class WritereviewPage {
    constructor(menuCtrl, apiService, basic, localApi, cart, route, alertController, modalController) {
        this.menuCtrl = menuCtrl;
        this.apiService = apiService;
        this.basic = basic;
        this.localApi = localApi;
        this.cart = cart;
        this.route = route;
        this.alertController = alertController;
        this.modalController = modalController;
        this.postdata = {};
        this.allstar = [];
        this.updbtn = 'Submit';
    }
    ngOnInit() {
        this.logeduser = this.localApi.getuser();
        this.allstar = [
            {
                icon: 'star-outline',
                value: '1'
            },
            {
                icon: 'star-outline',
                value: '2'
            },
            {
                icon: 'star-outline',
                value: '3'
            },
            {
                icon: 'star-outline',
                value: '4'
            },
            {
                icon: 'star-outline',
                value: '5'
            }
        ];
        if (this.frwht == 'Update') {
            for (let i = 0; i < this.allstar.length; i++) {
                if (this.allstar[i].value <= this.review.ratings) {
                    this.allstar[i].icon = 'star';
                }
                else {
                    this.allstar[i].icon = 'star-outline';
                }
            }
            this.allratings = this.review.ratings;
            this.reviewtxt = this.review.reviews;
            this.updbtn = 'Update';
        }
    }
    getnowrate(val) {
        for (let i = 0; i < this.allstar.length; i++) {
            if (this.allstar[i].value <= val.value) {
                this.allstar[i].icon = 'star';
            }
            else {
                this.allstar[i].icon = 'star-outline';
            }
        }
        this.allratings = val.value;
    }
    btnfrewview() {
        if (!this.reviewtxt) {
            this.basic.alert('Error:', 'Please type your review');
        }
        else {
            this.basic.presentLoading();
            this.postdata.user_id = this.logeduser.id;
            this.postdata.name = this.logeduser.name;
            this.postdata.reviews = this.reviewtxt;
            this.postdata.ratings = this.allratings;
            this.postdata.frwht = this.frwht;
            this.apiService.postdata('writemyreview', this.postdata).subscribe((resp) => {
                setTimeout(() => {
                    this.basic.dismissloader();
                    this.dismissmodal();
                }, 1000);
            }, (err) => {
                return false;
            });
        }
    }
    dismissmodal() {
        this.modalController.dismiss({
            'dismissed': true
        });
    }
};
WritereviewPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.MenuController },
    { type: src_Providers_Services_api_service__WEBPACK_IMPORTED_MODULE_5__.ApiService },
    { type: src_Providers_Basic_basic_api_service__WEBPACK_IMPORTED_MODULE_2__.BasicApiService },
    { type: src_Providers_Local_local_api_service__WEBPACK_IMPORTED_MODULE_4__.LocalApiService },
    { type: src_Providers_Cart_cart_api_service__WEBPACK_IMPORTED_MODULE_3__.CartApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController }
];
WritereviewPage.propDecorators = {
    review: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }],
    frwht: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }]
};
WritereviewPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-writereview',
        template: _raw_loader_writereview_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_writereview_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], WritereviewPage);



/***/ }),

/***/ 71689:
/*!***************************************************!*\
  !*** ./src/app/itemdetails/itemdetails.page.scss ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".imageitm {\n  width: 100%;\n  height: auto;\n  padding: 15px;\n  overflow: hidden;\n  margin-bottom: 10px img;\n  margin-bottom-width: 100%;\n  margin-bottom-object-fit: cover;\n}\n\n.conainfood {\n  width: 100%;\n  height: auto;\n  padding: 10px 15px;\n}\n\n.conainfood img {\n  height: 30px;\n  margin-right: 10px;\n}\n\n.temname {\n  width: 100%;\n  height: auto;\n  padding: 2px 15px;\n  font-size: 14px;\n  font-weight: bold;\n}\n\n.temname img {\n  height: 10px;\n}\n\n.temdesc {\n  width: 100%;\n  height: auto;\n  padding: 2px 15px;\n  font-size: 13px;\n}\n\n.temdescinfo {\n  width: 100%;\n  height: auto;\n  padding: 9px 15px;\n  font-size: 11px;\n}\n\n.priceandvegicn {\n  width: 100%;\n  height: auto;\n  padding: 2px 15px;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.priceandvegicn span {\n  font-size: 14px;\n  font-weight: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUVBLGdCQUFBO0VBQ0EsdUJBQUE7RUFFSSx5QkFBQTtFQUNBLCtCQUFBO0FBRFI7O0FBSUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBREo7O0FBRUk7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUFBUjs7QUFHQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFDSTtFQUNJLFlBQUE7QUFDUjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBQ0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUVKOztBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUdKOztBQUZJO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FBSVIiLCJmaWxlIjoiaXRlbWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdlaXRte1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIC8vbWF4LWhlaWdodDogMjUwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4XG4gICAgaW1ne1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgfVxufVxuLmNvbmFpbmZvb2R7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICBpbWd7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIH1cbn1cbi50ZW1uYW1le1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nOiAycHggMTVweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgaW1ne1xuICAgICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgfVxufVxuLnRlbWRlc2N7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmc6IDJweCAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbn1cbi50ZW1kZXNjaW5mb3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzogOXB4IDE1cHg7XG4gICAgZm9udC1zaXplOiAxMXB4O1xufVxuLnByaWNlYW5kdmVnaWNue1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nOiAycHggMTVweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgc3BhbntcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ 29988:
/*!*****************************************************!*\
  !*** ./src/app/offerdetails/offerdetails.page.scss ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".imageitm {\n  width: 100%;\n  height: auto;\n  padding: 15px;\n  overflow: hidden;\n  margin-bottom: 10px;\n}\n.imageitm img {\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.conainfood {\n  width: 100%;\n  height: auto;\n  padding: 10px 15px;\n}\n.conainfood img {\n  height: 30px;\n  margin-right: 10px;\n}\n.temname {\n  width: 100%;\n  height: auto;\n  padding: 2px 15px;\n  font-size: 14px;\n  font-weight: bold;\n}\n.temname img {\n  height: 10px;\n}\n.temdesc {\n  width: 100%;\n  height: auto;\n  padding: 2px 15px;\n  font-size: 13px;\n}\n.temdescinfo {\n  width: 100%;\n  height: auto;\n  padding: 9px 15px;\n  font-size: 11px;\n}\n.priceandvegicn {\n  width: 100%;\n  height: auto;\n  padding: 2px 15px;\n  font-size: 18px;\n  font-weight: bold;\n}\n.priceandvegicn span {\n  font-size: 14px;\n  font-weight: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9mZmVyZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFFQSxnQkFBQTtFQUNBLG1CQUFBO0FBQUo7QUFDSTtFQUNJLFdBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FBQ1I7QUFFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUFJO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FBRVI7QUFDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFFSjtBQURJO0VBQ0ksWUFBQTtBQUdSO0FBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUdKO0FBREE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUlKO0FBRkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBS0o7QUFKSTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQU1SIiwiZmlsZSI6Im9mZmVyZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2VpdG17XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgLy8gbWF4LWhlaWdodDogMjUwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGltZ3tcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIH1cbn1cbi5jb25haW5mb29ke1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgaW1ne1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB9XG59XG4udGVtbmFtZXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzogMnB4IDE1cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGltZ3tcbiAgICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgIH1cbn1cbi50ZW1kZXNje1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nOiAycHggMTVweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG59XG4udGVtZGVzY2luZm97XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmc6IDlweCAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbn1cbi5wcmljZWFuZHZlZ2ljbntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzogMnB4IDE1cHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHNwYW57XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICB9XG59XG5cbiJdfQ== */");

/***/ }),

/***/ 23042:
/*!*****************************************************!*\
  !*** ./src/app/openinghours/openinghours.page.scss ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcGVuaW5naG91cnMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 10627:
/*!*******************************************************!*\
  !*** ./src/app/profileupdate/profileupdate.page.scss ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".almosttherehead {\n  width: 100%;\n  height: auto;\n  padding: 10px 15px;\n  font-size: 15px;\n  font-weight: bold;\n  text-transform: uppercase;\n}\n.almosttherehead span {\n  font-size: 12px;\n  font-weight: normal;\n  color: #000;\n  text-transform: none;\n}\n.loginmobilefield {\n  width: 100%;\n  height: auto;\n  padding: 10px 15px;\n  position: relative;\n}\n.loginmobilefield label {\n  font-size: 10px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  color: #8c8c8c;\n}\n.loginmobilefield input {\n  width: 100%;\n  height: 30px;\n  border: none;\n  background-color: transparent;\n  outline: none;\n  border-bottom: solid 1px #ff4181;\n  padding-left: 47px;\n  font-size: 14px;\n}\n.loginmobilefield span {\n  position: absolute;\n  left: 17px;\n  top: 36px;\n  font-size: 14px;\n  border-right: solid 1px #CCC;\n  padding-right: 10px;\n}\n.loginmobilefieldreg {\n  width: 100%;\n  height: auto;\n  padding: 10px 15px;\n  position: relative;\n}\n.loginmobilefieldreg label {\n  font-size: 10px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  color: #8c8c8c;\n}\n.loginmobilefieldreg input {\n  width: 100%;\n  height: 30px;\n  border: none;\n  background-color: transparent;\n  outline: none;\n  border-bottom: solid 1px #ff4181;\n  font-size: 14px;\n}\n.continuebtn {\n  width: 92%;\n  height: auto;\n  padding: 10px 15px;\n  text-transform: uppercase;\n  font-size: 12px;\n  background-color: #ff4181;\n  color: #fff;\n  text-align: center;\n  margin: 0 auto;\n}\n.fldheading {\n  width: 92%;\n  height: auto;\n  padding: 0 0;\n  text-transform: uppercase;\n  font-size: 11px;\n  color: #0a0a0a;\n  margin: 10px auto 0 auto;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGV1cGRhdGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FBQ0Q7QUFBQztFQUNDLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtBQUVGO0FBQ0E7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFFRDtBQURDO0VBQ0MsZUFBQTtFQUNHLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBR0w7QUFEQztFQUNDLFdBQUE7RUFDRyxZQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBR0w7QUFEQztFQUNDLGtCQUFBO0VBQ0csVUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtBQUdMO0FBRUE7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFDRDtBQUFDO0VBQ0MsZUFBQTtFQUNHLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBRUw7QUFBQztFQUNDLFdBQUE7RUFDRyxZQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtBQUVMO0FBRUE7RUFDQyxVQUFBO0VBQ0csWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBQ0o7QUFDQTtFQUNDLFVBQUE7RUFDRyxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0FBRUoiLCJmaWxlIjoicHJvZmlsZXVwZGF0ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxtb3N0dGhlcmVoZWFke1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiBhdXRvO1xuXHRwYWRkaW5nOiAxMHB4IDE1cHg7XG5cdGZvbnQtc2l6ZTogMTVweDtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdHNwYW57XG5cdFx0Zm9udC1zaXplOiAxMnB4O1xuXHRcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XG5cdFx0Y29sb3I6ICMwMDA7XG5cdFx0dGV4dC10cmFuc2Zvcm06IG5vbmU7XG5cdH1cbn1cbi5sb2dpbm1vYmlsZWZpZWxke1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiBhdXRvO1xuXHRwYWRkaW5nOiAxMHB4IDE1cHg7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0bGFiZWx7XG5cdFx0Zm9udC1zaXplOiAxMHB4O1xuXHQgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0ICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG5cdCAgICBjb2xvcjogIzhjOGM4Yztcblx0fVxuXHRpbnB1dHtcblx0XHR3aWR0aDogMTAwJTtcblx0ICAgIGhlaWdodDogMzBweDtcblx0ICAgIGJvcmRlcjogbm9uZTtcblx0ICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXHQgICAgb3V0bGluZTogbm9uZTtcblx0ICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjZmY0MTgxO1xuXHQgICAgcGFkZGluZy1sZWZ0OiA0N3B4O1xuXHQgICAgZm9udC1zaXplOiAxNHB4O1xuXHR9XG5cdHNwYW57XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHQgICAgbGVmdDogMTdweDtcblx0ICAgIHRvcDogMzZweDtcblx0ICAgIGZvbnQtc2l6ZTogMTRweDtcblx0ICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4ICNDQ0M7XG5cdCAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuXHR9XG59XG5cblxuLmxvZ2lubW9iaWxlZmllbGRyZWd7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IGF1dG87XG5cdHBhZGRpbmc6IDEwcHggMTVweDtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRsYWJlbHtcblx0XHRmb250LXNpemU6IDEwcHg7XG5cdCAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHQgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcblx0ICAgIGNvbG9yOiAjOGM4YzhjO1xuXHR9XG5cdGlucHV0e1xuXHRcdHdpZHRoOiAxMDAlO1xuXHQgICAgaGVpZ2h0OiAzMHB4O1xuXHQgICAgYm9yZGVyOiBub25lO1xuXHQgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cdCAgICBvdXRsaW5lOiBub25lO1xuXHQgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNmZjQxODE7XG5cdCAgICBmb250LXNpemU6IDE0cHg7XG5cdH1cbn1cblxuLmNvbnRpbnVlYnRue1xuXHR3aWR0aDogOTIlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNDE4MTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG4uZmxkaGVhZGluZ3tcblx0d2lkdGg6IDkyJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzogMCAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGNvbG9yOiAjMGEwYTBhO1xuICAgIG1hcmdpbjogMTBweCBhdXRvIDAgYXV0bztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */");

/***/ }),

/***/ 55848:
/*!***************************************************!*\
  !*** ./src/app/writereview/writereview.page.scss ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".almosttherehead {\n  width: 100%;\n  height: auto;\n  padding: 10px 15px;\n  font-size: 15px;\n  font-weight: bold;\n  text-transform: uppercase;\n}\n.almosttherehead span {\n  font-size: 12px;\n  font-weight: normal;\n  color: #000;\n  text-transform: none;\n}\n.loginmobilefield {\n  width: 100%;\n  height: auto;\n  padding: 10px 15px;\n  position: relative;\n}\n.loginmobilefield label {\n  font-size: 10px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  color: #8c8c8c;\n}\n.loginmobilefield input {\n  width: 100%;\n  height: 30px;\n  border: none;\n  background-color: transparent;\n  outline: none;\n  border-bottom: solid 1px #6d9dc1;\n  padding-left: 47px;\n  font-size: 14px;\n}\n.loginmobilefield span {\n  position: absolute;\n  left: 17px;\n  top: 36px;\n  font-size: 14px;\n  border-right: solid 1px #CCC;\n  padding-right: 10px;\n}\n.loginmobilefieldreg {\n  width: 100%;\n  height: auto;\n  padding: 10px 15px;\n  position: relative;\n}\n.loginmobilefieldreg label {\n  font-size: 10px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  color: #8c8c8c;\n}\n.loginmobilefieldreg input {\n  width: 100%;\n  height: 30px;\n  border: none;\n  background-color: transparent;\n  outline: none;\n  border-bottom: solid 1px #6d9dc1;\n  font-size: 14px;\n}\n.continuebtn {\n  width: 92%;\n  height: auto;\n  padding: 10px 15px;\n  text-transform: uppercase;\n  font-size: 12px;\n  background-color: #628896;\n  color: #fff;\n  text-align: center;\n  margin: 0 auto;\n}\n.ratngstar {\n  width: 100%;\n  height: auto;\n  margin: 20px 0;\n  text-align: center;\n}\n.ratngstar span {\n  font-size: 40px;\n  color: #ffd500;\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndyaXRlcmV2aWV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQUNEO0FBQUM7RUFDQyxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QUFFRjtBQUNBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBRUQ7QUFEQztFQUNDLGVBQUE7RUFDRyx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUdMO0FBREM7RUFDQyxXQUFBO0VBQ0csWUFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUdMO0FBREM7RUFDQyxrQkFBQTtFQUNHLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7QUFHTDtBQUVBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQ0Q7QUFBQztFQUNDLGVBQUE7RUFDRyx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUVMO0FBQUM7RUFDQyxXQUFBO0VBQ0csWUFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7QUFFTDtBQUVBO0VBQ0MsVUFBQTtFQUNHLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUNKO0FBRUE7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUNEO0FBQUM7RUFDQyxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBRUYiLCJmaWxlIjoid3JpdGVyZXZpZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsbW9zdHRoZXJlaGVhZHtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogYXV0bztcblx0cGFkZGluZzogMTBweCAxNXB4O1xuXHRmb250LXNpemU6IDE1cHg7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRzcGFue1xuXHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRmb250LXdlaWdodDogbm9ybWFsO1xuXHRcdGNvbG9yOiAjMDAwO1xuXHRcdHRleHQtdHJhbnNmb3JtOiBub25lO1xuXHR9XG59XG4ubG9naW5tb2JpbGVmaWVsZHtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogYXV0bztcblx0cGFkZGluZzogMTBweCAxNXB4O1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGxhYmVse1xuXHRcdGZvbnQtc2l6ZTogMTBweDtcblx0ICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdCAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuXHQgICAgY29sb3I6ICM4YzhjOGM7XG5cdH1cblx0aW5wdXR7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdCAgICBoZWlnaHQ6IDMwcHg7XG5cdCAgICBib3JkZXI6IG5vbmU7XG5cdCAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcblx0ICAgIG91dGxpbmU6IG5vbmU7XG5cdCAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggIzZkOWRjMTtcblx0ICAgIHBhZGRpbmctbGVmdDogNDdweDtcblx0ICAgIGZvbnQtc2l6ZTogMTRweDtcblx0fVxuXHRzcGFue1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0ICAgIGxlZnQ6IDE3cHg7XG5cdCAgICB0b3A6IDM2cHg7XG5cdCAgICBmb250LXNpemU6IDE0cHg7XG5cdCAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCAjQ0NDO1xuXHQgICAgcGFkZGluZy1yaWdodDogMTBweDtcblx0fVxufVxuXG5cbi5sb2dpbm1vYmlsZWZpZWxkcmVne1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiBhdXRvO1xuXHRwYWRkaW5nOiAxMHB4IDE1cHg7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0bGFiZWx7XG5cdFx0Zm9udC1zaXplOiAxMHB4O1xuXHQgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0ICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG5cdCAgICBjb2xvcjogIzhjOGM4Yztcblx0fVxuXHRpbnB1dHtcblx0XHR3aWR0aDogMTAwJTtcblx0ICAgIGhlaWdodDogMzBweDtcblx0ICAgIGJvcmRlcjogbm9uZTtcblx0ICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXHQgICAgb3V0bGluZTogbm9uZTtcblx0ICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjNmQ5ZGMxO1xuXHQgICAgZm9udC1zaXplOiAxNHB4O1xuXHR9XG59XG5cbi5jb250aW51ZWJ0bntcblx0d2lkdGg6IDkyJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2Mjg4OTY7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuXG4ucmF0bmdzdGFye1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiBhdXRvO1xuXHRtYXJnaW46IDIwcHggMDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRzcGFue1xuXHRcdGZvbnQtc2l6ZTogNDBweDtcblx0XHRjb2xvcjogI2ZmZDUwMDtcblx0XHRtYXJnaW4tcmlnaHQ6IDEwcHg7XG5cdH1cbn0iXX0= */");

/***/ }),

/***/ 84257:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/itemdetails/itemdetails.page.html ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content no-bounce has-bouncing=\"false\" forceOverscroll=\"false\">\n\t<div class=\"imageitm\">\n\t\t\n\t\t\t\t<img src=\"{{item.imageDesc}}\">\n\t\t\n\t</div>\n\t\n\t\n\n</ion-content>\n");

/***/ }),

/***/ 87160:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/offerdetails/offerdetails.page.html ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content no-bounce has-bouncing=\"false\" forceOverscroll=\"false\">\n\t<div class=\"imageitm\">\n\t\t<img style=\"width: 100%;\" src=\"{{imgpath}}offers/{{item.image}}\">\n\t</div>\n\t<div class=\"temname\">\n\t\t{{item.heading}}\n\t</div>\n\t\n\t<div class=\"temdesc\" style=\"text-align: justify;\" [innerHTML]='item.longdesc'>\n\t</div>\n\t<div class=\"priceandvegicn\">\n\t\t<img style=\"width: 35px; position: relative; margin-top: 10px; top: 10px;\" src=\"assets/offeriCon.png\"> {{item.offer_code}}\n\t</div>\n</ion-content>");

/***/ }),

/***/ 31307:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/openinghours/openinghours.page.html ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content no-bounce has-bouncing=\"false\" forceOverscroll=\"false\">\n\t<div class=\"imageitm\">\n\t\t<ion-slides>\n            <ion-slide style=\"display: block;\" *ngFor=\"let item of opntimem;let i = index;\">\n                <div style=\"width: 80%; border-bottom-style: double; margin: 0 10%; float: left; color: #ff4181;\">\n                    <h2>\n                        <ion-icon style=\"float: left; position: relative; top: 7px;\" *ngIf=\"i === 1 || i === 2 || i === 3 || i === 4 || i === 5 || i === 6\" name=\"arrow-back-circle-outline\"></ion-icon>{{item.day}}<ion-icon style=\"float: right; position: relative; top: 7px;\" *ngIf=\"i === 1 || i === 2 || i === 3 || i === 4 || i === 5 || i === 0\" name=\"arrow-forward-circle-outline\"></ion-icon>\n                    </h2>\n                </div>\n                \n                <div style=\"width: 100%; float: left; padding: 10px 5px;\" *ngIf='!item.shopclose'>\n                    <ion-row style=\"margin-top: 15px;\">\n                        <ion-col size=\"5\" style=\"background: #ff4181; color: white; padding: 20px; border-radius: 45px 0px;\">{{item.bdast_open}}</ion-col>\n                        <ion-col size=\"2\" style=\"padding: 18px;\">To</ion-col>\n                        <ion-col size=\"5\" style=\"background: #ff4181; color: white; padding: 20px; border-radius: 45px 0px;\">{{item.bdast_close}}</ion-col>\n                    </ion-row>\n                    <ion-row style=\"margin-top: 15px;\">\n                        <ion-col size=\"5\" style=\"background: #ff4181; color: white; padding: 20px; border-radius: 45px 0px;\">{{item.lunch_open}}</ion-col>\n                        <ion-col size=\"2\" style=\"padding: 18px;\">To</ion-col>\n                        <ion-col size=\"5\" style=\"background: #ff4181; color: white; padding: 20px; border-radius: 45px 0px;\">{{item.lunch_close}}</ion-col>\n                    </ion-row>\n                    <ion-row style=\"margin-top: 15px;\">\n                        <ion-col size=\"5\" style=\"background: #ff4181; color: white; padding: 20px; border-radius: 45px 0px;\">{{item.dinner_open}}</ion-col>\n                        <ion-col size=\"2\" style=\"padding: 18px;\">To</ion-col>\n                        <ion-col size=\"5\" style=\"background: #ff4181; color: white; padding: 20px; border-radius: 45px 0px;\">{{item.dinner_close}}</ion-col>\n                    </ion-row>\n                </div>\n            </ion-slide>\n\t\t</ion-slides>\n\t</div>\n</ion-content>\n");

/***/ }),

/***/ 55540:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profileupdate/profileupdate.page.html ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content no-bounce has-bouncing=\"false\" forceOverscroll=\"false\">\n\n\t<div class=\"loginmobilefieldreg\">\n\t\t<label>Your full name</label>\n\t\t<input type=\"text\" [(ngModel)]=\"logineduser.name\">\n\t</div>\n\t<div class=\"loginmobilefieldreg\">\n\t\t<label>Recovery email</label>\n\t\t<input type=\"email\" [(ngModel)]=\"logineduser.email\">\n\t</div>\n\t<div class=\"fldheading\">Billing Address</div>\n\t<div class=\"loginmobilefieldreg\">\n\t\t<label>Address Line 1</label>\n\t\t<input type=\"email\" [(ngModel)]=\"logineduser.address_line_one\">\n\t</div>\n\t<div class=\"loginmobilefieldreg\">\n\t\t<label>Address Line 2</label>\n\t\t<input type=\"email\" [(ngModel)]=\"logineduser.address_line_two\">\n\t</div>\n\t<div class=\"loginmobilefieldreg\">\n\t\t<label>Postcode</label>\n\t\t<input type=\"email\" [(ngModel)]=\"logineduser.postcode\">\n\t</div>\n\t<div class=\"continuebtn\" (click)='updateprofile()'>\n\t\tUpdate\n\t</div>\n</ion-content>\n");

/***/ }),

/***/ 62070:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/writereview/writereview.page.html ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content no-bounce has-bouncing=\"false\" forceOverscroll=\"false\">\n\t<div class=\"almosttherehead\">\n\t\tWrite your review<br><span>Login or signup to place your order</span>\n\t</div>\n\t<div class=\"ratngstar\">\n\t\t<span *ngFor=\"let item of allstar\" (click)='getnowrate(item)'><ion-icon name=\"{{item.icon}}\"></ion-icon></span>\n\t\t\n\t</div>\n\t<div class=\"loginmobilefieldreg\">\n\t\t<label>Type your review</label>\n\t\t<input type=\"email\" [(ngModel)]=\"reviewtxt\">\n\t</div>\n\t<div class=\"continuebtn\" (click)='btnfrewview()'>\n\t\t{{updbtn}}\n\t</div>\n\t\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map