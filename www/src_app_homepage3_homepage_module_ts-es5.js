(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkSalon"] = self["webpackChunkSalon"] || []).push([["src_app_homepage3_homepage_module_ts"], {
    /***/
    35070:
    /*!******************************************************!*\
      !*** ./src/app/homepage3/homepage-routing.module.ts ***!
      \******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomepagePageRoutingModule": function HomepagePageRoutingModule() {
          return (
            /* binding */
            _HomepagePageRoutingModule
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


      var _homepage_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./homepage.page */
      22370);

      var routes = [{
        path: '',
        component: _homepage_page__WEBPACK_IMPORTED_MODULE_0__.HomepagePage
      }];

      var _HomepagePageRoutingModule = /*#__PURE__*/_createClass(function HomepagePageRoutingModule() {
        _classCallCheck(this, HomepagePageRoutingModule);
      });

      _HomepagePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _HomepagePageRoutingModule);
      /***/
    },

    /***/
    60933:
    /*!**********************************************!*\
      !*** ./src/app/homepage3/homepage.module.ts ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomepagePageModule": function HomepagePageModule() {
          return (
            /* binding */
            _HomepagePageModule
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


      var _homepage_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./homepage-routing.module */
      35070);
      /* harmony import */


      var _homepage_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./homepage.page */
      22370);

      var _HomepagePageModule = /*#__PURE__*/_createClass(function HomepagePageModule() {
        _classCallCheck(this, HomepagePageModule);
      });

      _HomepagePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _homepage_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomepagePageRoutingModule],
        declarations: [_homepage_page__WEBPACK_IMPORTED_MODULE_1__.HomepagePage]
      })], _HomepagePageModule);
      /***/
    },

    /***/
    22370:
    /*!********************************************!*\
      !*** ./src/app/homepage3/homepage.page.ts ***!
      \********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomepagePage": function HomepagePage() {
          return (
            /* binding */
            _HomepagePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_homepage_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./homepage.page.html */
      86988);
      /* harmony import */


      var _homepage_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./homepage.page.scss */
      93568);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! jquery */
      91704);
      /* harmony import */


      var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/app-version/ngx */
      7354);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../environments/environment */
      92340);
      /* harmony import */


      var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/in-app-browser/ngx */
      53760);
      /* harmony import */


      var _itemdetails_itemdetails_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../itemdetails/itemdetails.page */
      48979);
      /* harmony import */


      var _loginpage_loginpage_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../loginpage/loginpage.page */
      42985);

      var _HomepagePage = /*#__PURE__*/function () {
        function HomepagePage(menuCtrl, apiService, basic, localApi, cart, route, alertController, location, modalController, nav, appVersion, iab, platform) {
          _classCallCheck(this, HomepagePage);

          this.menuCtrl = menuCtrl;
          this.apiService = apiService;
          this.basic = basic;
          this.localApi = localApi;
          this.cart = cart;
          this.route = route;
          this.alertController = alertController;
          this.location = location;
          this.modalController = modalController;
          this.nav = nav;
          this.appVersion = appVersion;
          this.iab = iab;
          this.platform = platform;
          this.Servicesshow = true;
          this.Offersshow = false;
          this.Reviewshow = false;
          this.slideOpts = {
            initialSlide: 0,
            autoplay: true,
            loop: true,
            speed: 10,
            effect: 'fade',
            spaceBetween: 10,
            slidesPerView: 1.1,
            slidesPerColumn: 1,
            pagination: false
          };
          this.slideOptsmenu = {
            initialSlide: 0,
            autoplay: false,
            loop: false,
            speed: 10,
            effect: 'fade',
            spaceBetween: 10,
            slidesPerView: 2.5,
            pagination: false
          };
          this.postdata = {};
          this.isShopclose = false;
          this.isRestricktn = false;
          this.ipbroptions = {};
          this.sesinlefct = false;
          this.respData = {
            "success": true,
            "data": {
              "id": "2",
              "min_amount_delivery": null,
              "min_amount_checkout": "20.00",
              "tax_type": "Percentage",
              "tax_lebel": "Tax One",
              "tax_value": "10",
              "deposit_required": "YES",
              "deposit_amount": "15.00",
              "deposit_text": "Please note that the deposits are non-refundable in case of a  ",
              "additional_two_value": "0.00",
              "additional_three_lebel": null,
              "additional_three_value": "0.00",
              "delivery": "NO",
              "takeaway": "NO",
              "dine_in": "NO",
              "preparation_time": " Minutes",
              "collection_time": null,
              "restrictions_label": "",
              "restrictions_text": "",
              "first_order": "NO",
              "iosversion": "5.0",
              "androidversion": "5.0",
              "delivery_free": null,
              "festive_theme": "None",
              "pause_order": null,
              "distance_unit": null,
              "currency_code": "GBP",
              "currency_symbol": "Â£",
              "currency_id": "211",
              "pay_getaway": null,
              "time_zone": "Europe/London",
              "print_size": null,
              "pop_head": null,
              "pop_desc": null,
              "wallet": null,
              "cash_payment": "YES",
              "card_payment": "YES",
              "additional_one_value": "0.00",
              "opentime": {
                "toDayShop": "CLOSE",
                "openTimeToday": "Our opening hours are: <br>Breakfast: 09:00AM - 12:00PM<br>Lunch: 12:00PM - 05:00PM<br>Dinner: 05:00PM - 10:00PM",
                "openTimeTxt": "Opening Hours",
                "fullclose": ""
              },
              "appversion": "0.1.1",
              "appversionandroid": "0.1.1",
              "contact": {
                "id": "1",
                "mobile": "07500844944",
                "phone": " 07500844944",
                "email": "sales@v1technologies.com",
                "whatsapp": "07500844944",
                "website": "https://salon.v1tl.com/",
                "address": "123 Salon Address",
                "postcode": "ABC XYZ",
                "facebook": "https://www.facebook.com/V1technologies",
                "twitter": "https://twitter.com/V1Technologies",
                "instagram": "https://www.instagram.com/v1technologies/",
                "trustpilot": "https://uk.trustpilot.com/review/v1technologies.co.uk",
                "trip_advisor": "",
                "google_mybusiness": "https://g.page/v1technologiesuk?share",
                "pinterest": "https://in.pinterest.com/v1technologies/",
                "linkedln": "https://www.linkedin.com/company/2952494/admin/",
                "latitude": null,
                "longitude": null
              },
              "pause_order_message": "",
              "timeslot": [{
                "value": "01:00",
                "datename": "Today"
              }, {
                "value": "01:05",
                "datename": "Today"
              }, {
                "value": "01:10",
                "datename": "Today"
              }, {
                "value": "01:15",
                "datename": "Today"
              }, {
                "value": "01:20",
                "datename": "Today"
              }, {
                "value": "01:25",
                "datename": "Today"
              }, {
                "value": "01:30",
                "datename": "Today"
              }, {
                "value": "01:35",
                "datename": "Today"
              }, {
                "value": "01:40",
                "datename": "Today"
              }, {
                "value": "01:45",
                "datename": "Today"
              }, {
                "value": "01:50",
                "datename": "Today"
              }, {
                "value": "01:55",
                "datename": "Today"
              }, {
                "value": "02:00",
                "datename": "Today"
              }, {
                "value": "02:05",
                "datename": "Today"
              }, {
                "value": "02:10",
                "datename": "Today"
              }, {
                "value": "02:15",
                "datename": "Today"
              }, {
                "value": "02:20",
                "datename": "Today"
              }, {
                "value": "02:25",
                "datename": "Today"
              }, {
                "value": "02:30",
                "datename": "Today"
              }, {
                "value": "02:35",
                "datename": "Today"
              }, {
                "value": "02:40",
                "datename": "Today"
              }, {
                "value": "02:45",
                "datename": "Today"
              }, {
                "value": "02:50",
                "datename": "Today"
              }, {
                "value": "02:55",
                "datename": "Today"
              }, {
                "value": "03:00",
                "datename": "Today"
              }, {
                "value": "03:05",
                "datename": "Today"
              }, {
                "value": "03:10",
                "datename": "Today"
              }, {
                "value": "03:15",
                "datename": "Today"
              }, {
                "value": "03:20",
                "datename": "Today"
              }, {
                "value": "03:25",
                "datename": "Today"
              }, {
                "value": "03:30",
                "datename": "Today"
              }, {
                "value": "03:35",
                "datename": "Today"
              }, {
                "value": "03:40",
                "datename": "Today"
              }, {
                "value": "03:45",
                "datename": "Today"
              }, {
                "value": "03:50",
                "datename": "Today"
              }, {
                "value": "03:55",
                "datename": "Today"
              }, {
                "value": "04:00",
                "datename": "Today"
              }, {
                "value": "04:05",
                "datename": "Today"
              }, {
                "value": "04:10",
                "datename": "Today"
              }, {
                "value": "04:15",
                "datename": "Today"
              }, {
                "value": "04:20",
                "datename": "Today"
              }, {
                "value": "04:25",
                "datename": "Today"
              }, {
                "value": "04:30",
                "datename": "Today"
              }, {
                "value": "04:35",
                "datename": "Today"
              }, {
                "value": "04:40",
                "datename": "Today"
              }, {
                "value": "04:45",
                "datename": "Today"
              }, {
                "value": "04:50",
                "datename": "Today"
              }, {
                "value": "04:55",
                "datename": "Today"
              }, {
                "value": "05:00",
                "datename": "Today"
              }, {
                "value": "05:05",
                "datename": "Today"
              }, {
                "value": "05:10",
                "datename": "Today"
              }, {
                "value": "05:15",
                "datename": "Today"
              }, {
                "value": "05:20",
                "datename": "Today"
              }, {
                "value": "05:25",
                "datename": "Today"
              }, {
                "value": "05:30",
                "datename": "Today"
              }, {
                "value": "05:35",
                "datename": "Today"
              }, {
                "value": "05:40",
                "datename": "Today"
              }, {
                "value": "05:45",
                "datename": "Today"
              }, {
                "value": "05:50",
                "datename": "Today"
              }, {
                "value": "05:55",
                "datename": "Today"
              }, {
                "value": "06:00",
                "datename": "Today"
              }, {
                "value": "06:05",
                "datename": "Today"
              }, {
                "value": "06:10",
                "datename": "Today"
              }, {
                "value": "06:15",
                "datename": "Today"
              }, {
                "value": "06:20",
                "datename": "Today"
              }, {
                "value": "06:25",
                "datename": "Today"
              }, {
                "value": "06:30",
                "datename": "Today"
              }, {
                "value": "06:35",
                "datename": "Today"
              }, {
                "value": "06:40",
                "datename": "Today"
              }, {
                "value": "06:45",
                "datename": "Today"
              }, {
                "value": "06:50",
                "datename": "Today"
              }, {
                "value": "06:55",
                "datename": "Today"
              }, {
                "value": "07:00",
                "datename": "Today"
              }, {
                "value": "07:05",
                "datename": "Today"
              }, {
                "value": "07:10",
                "datename": "Today"
              }, {
                "value": "07:15",
                "datename": "Today"
              }, {
                "value": "07:20",
                "datename": "Today"
              }, {
                "value": "07:25",
                "datename": "Today"
              }, {
                "value": "07:30",
                "datename": "Today"
              }, {
                "value": "07:35",
                "datename": "Today"
              }, {
                "value": "07:40",
                "datename": "Today"
              }, {
                "value": "07:45",
                "datename": "Today"
              }, {
                "value": "07:50",
                "datename": "Today"
              }, {
                "value": "07:55",
                "datename": "Today"
              }, {
                "value": "08:00",
                "datename": "Today"
              }, {
                "value": "08:05",
                "datename": "Today"
              }, {
                "value": "08:10",
                "datename": "Today"
              }, {
                "value": "08:15",
                "datename": "Today"
              }, {
                "value": "08:20",
                "datename": "Today"
              }, {
                "value": "08:25",
                "datename": "Today"
              }, {
                "value": "08:30",
                "datename": "Today"
              }, {
                "value": "08:35",
                "datename": "Today"
              }, {
                "value": "08:40",
                "datename": "Today"
              }, {
                "value": "08:45",
                "datename": "Today"
              }, {
                "value": "08:50",
                "datename": "Today"
              }, {
                "value": "08:55",
                "datename": "Today"
              }, {
                "value": "09:00",
                "datename": "Today"
              }, {
                "value": "09:05",
                "datename": "Today"
              }, {
                "value": "09:10",
                "datename": "Today"
              }, {
                "value": "09:15",
                "datename": "Today"
              }, {
                "value": "09:20",
                "datename": "Today"
              }, {
                "value": "09:25",
                "datename": "Today"
              }, {
                "value": "09:30",
                "datename": "Today"
              }, {
                "value": "09:35",
                "datename": "Today"
              }, {
                "value": "09:40",
                "datename": "Today"
              }, {
                "value": "09:45",
                "datename": "Today"
              }, {
                "value": "09:50",
                "datename": "Today"
              }, {
                "value": "09:55",
                "datename": "Today"
              }, {
                "value": "10:00",
                "datename": "Today"
              }, {
                "value": "10:05",
                "datename": "Today"
              }, {
                "value": "10:10",
                "datename": "Today"
              }, {
                "value": "10:15",
                "datename": "Today"
              }, {
                "value": "10:20",
                "datename": "Today"
              }, {
                "value": "10:25",
                "datename": "Today"
              }, {
                "value": "10:30",
                "datename": "Today"
              }, {
                "value": "10:35",
                "datename": "Today"
              }, {
                "value": "10:40",
                "datename": "Today"
              }, {
                "value": "10:45",
                "datename": "Today"
              }, {
                "value": "10:50",
                "datename": "Today"
              }, {
                "value": "10:55",
                "datename": "Today"
              }, {
                "value": "11:00",
                "datename": "Today"
              }, {
                "value": "11:05",
                "datename": "Today"
              }, {
                "value": "11:10",
                "datename": "Today"
              }, {
                "value": "11:15",
                "datename": "Today"
              }, {
                "value": "11:20",
                "datename": "Today"
              }, {
                "value": "11:25",
                "datename": "Today"
              }, {
                "value": "11:30",
                "datename": "Today"
              }, {
                "value": "11:35",
                "datename": "Today"
              }, {
                "value": "11:40",
                "datename": "Today"
              }, {
                "value": "11:45",
                "datename": "Today"
              }, {
                "value": "11:50",
                "datename": "Today"
              }, {
                "value": "11:55",
                "datename": "Today"
              }, {
                "value": "12:00",
                "datename": "Today"
              }, {
                "value": "01:00",
                "datename": "Today"
              }, {
                "value": "01:05",
                "datename": "Today"
              }, {
                "value": "01:10",
                "datename": "Today"
              }, {
                "value": "01:15",
                "datename": "Today"
              }, {
                "value": "01:20",
                "datename": "Today"
              }, {
                "value": "01:25",
                "datename": "Today"
              }, {
                "value": "01:30",
                "datename": "Today"
              }, {
                "value": "01:35",
                "datename": "Today"
              }, {
                "value": "01:40",
                "datename": "Today"
              }, {
                "value": "01:45",
                "datename": "Today"
              }, {
                "value": "01:50",
                "datename": "Today"
              }, {
                "value": "01:55",
                "datename": "Today"
              }, {
                "value": "02:00",
                "datename": "Today"
              }, {
                "value": "02:05",
                "datename": "Today"
              }, {
                "value": "02:10",
                "datename": "Today"
              }, {
                "value": "02:15",
                "datename": "Today"
              }, {
                "value": "02:20",
                "datename": "Today"
              }, {
                "value": "02:25",
                "datename": "Today"
              }, {
                "value": "02:30",
                "datename": "Today"
              }, {
                "value": "02:35",
                "datename": "Today"
              }, {
                "value": "02:40",
                "datename": "Today"
              }, {
                "value": "02:45",
                "datename": "Today"
              }, {
                "value": "02:50",
                "datename": "Today"
              }, {
                "value": "02:55",
                "datename": "Today"
              }, {
                "value": "03:00",
                "datename": "Today"
              }, {
                "value": "03:05",
                "datename": "Today"
              }, {
                "value": "03:10",
                "datename": "Today"
              }, {
                "value": "03:15",
                "datename": "Today"
              }, {
                "value": "03:20",
                "datename": "Today"
              }, {
                "value": "03:25",
                "datename": "Today"
              }, {
                "value": "03:30",
                "datename": "Today"
              }, {
                "value": "03:35",
                "datename": "Today"
              }, {
                "value": "03:40",
                "datename": "Today"
              }, {
                "value": "03:45",
                "datename": "Today"
              }, {
                "value": "03:50",
                "datename": "Today"
              }, {
                "value": "03:55",
                "datename": "Today"
              }, {
                "value": "04:00",
                "datename": "Today"
              }, {
                "value": "04:05",
                "datename": "Today"
              }, {
                "value": "04:10",
                "datename": "Today"
              }, {
                "value": "04:15",
                "datename": "Today"
              }, {
                "value": "04:20",
                "datename": "Today"
              }, {
                "value": "04:25",
                "datename": "Today"
              }, {
                "value": "04:30",
                "datename": "Today"
              }, {
                "value": "04:35",
                "datename": "Today"
              }, {
                "value": "04:40",
                "datename": "Today"
              }, {
                "value": "04:45",
                "datename": "Today"
              }, {
                "value": "04:50",
                "datename": "Today"
              }, {
                "value": "04:55",
                "datename": "Today"
              }, {
                "value": "05:00",
                "datename": "Today"
              }, {
                "value": "05:05",
                "datename": "Today"
              }, {
                "value": "05:10",
                "datename": "Today"
              }, {
                "value": "05:15",
                "datename": "Today"
              }, {
                "value": "05:20",
                "datename": "Today"
              }, {
                "value": "05:25",
                "datename": "Today"
              }, {
                "value": "05:30",
                "datename": "Today"
              }, {
                "value": "05:35",
                "datename": "Today"
              }, {
                "value": "05:40",
                "datename": "Today"
              }, {
                "value": "05:45",
                "datename": "Today"
              }, {
                "value": "05:50",
                "datename": "Today"
              }, {
                "value": "05:55",
                "datename": "Today"
              }, {
                "value": "06:00",
                "datename": "Today"
              }, {
                "value": "06:05",
                "datename": "Today"
              }, {
                "value": "06:10",
                "datename": "Today"
              }, {
                "value": "06:15",
                "datename": "Today"
              }, {
                "value": "06:20",
                "datename": "Today"
              }, {
                "value": "06:25",
                "datename": "Today"
              }, {
                "value": "06:30",
                "datename": "Today"
              }, {
                "value": "06:35",
                "datename": "Today"
              }, {
                "value": "06:40",
                "datename": "Today"
              }, {
                "value": "06:45",
                "datename": "Today"
              }, {
                "value": "06:50",
                "datename": "Today"
              }, {
                "value": "06:55",
                "datename": "Today"
              }, {
                "value": "07:00",
                "datename": "Today"
              }, {
                "value": "07:05",
                "datename": "Today"
              }, {
                "value": "07:10",
                "datename": "Today"
              }, {
                "value": "07:15",
                "datename": "Today"
              }, {
                "value": "07:20",
                "datename": "Today"
              }, {
                "value": "07:25",
                "datename": "Today"
              }, {
                "value": "07:30",
                "datename": "Today"
              }, {
                "value": "07:35",
                "datename": "Today"
              }, {
                "value": "07:40",
                "datename": "Today"
              }, {
                "value": "07:45",
                "datename": "Today"
              }, {
                "value": "07:50",
                "datename": "Today"
              }, {
                "value": "07:55",
                "datename": "Today"
              }, {
                "value": "08:00",
                "datename": "Today"
              }, {
                "value": "08:05",
                "datename": "Today"
              }, {
                "value": "08:10",
                "datename": "Today"
              }, {
                "value": "08:15",
                "datename": "Today"
              }, {
                "value": "08:20",
                "datename": "Today"
              }, {
                "value": "08:25",
                "datename": "Today"
              }, {
                "value": "08:30",
                "datename": "Today"
              }, {
                "value": "08:35",
                "datename": "Today"
              }, {
                "value": "08:40",
                "datename": "Today"
              }, {
                "value": "08:45",
                "datename": "Today"
              }, {
                "value": "08:50",
                "datename": "Today"
              }, {
                "value": "08:55",
                "datename": "Today"
              }, {
                "value": "09:00",
                "datename": "Today"
              }, {
                "value": "09:05",
                "datename": "Today"
              }, {
                "value": "09:10",
                "datename": "Today"
              }, {
                "value": "09:15",
                "datename": "Today"
              }, {
                "value": "09:20",
                "datename": "Today"
              }, {
                "value": "09:25",
                "datename": "Today"
              }, {
                "value": "09:30",
                "datename": "Today"
              }, {
                "value": "09:35",
                "datename": "Today"
              }, {
                "value": "09:40",
                "datename": "Today"
              }, {
                "value": "09:45",
                "datename": "Today"
              }, {
                "value": "09:50",
                "datename": "Today"
              }, {
                "value": "09:55",
                "datename": "Today"
              }, {
                "value": "10:00",
                "datename": "Today"
              }, {
                "value": "10:05",
                "datename": "Today"
              }, {
                "value": "10:10",
                "datename": "Today"
              }, {
                "value": "10:15",
                "datename": "Today"
              }, {
                "value": "10:20",
                "datename": "Today"
              }, {
                "value": "10:25",
                "datename": "Today"
              }, {
                "value": "10:30",
                "datename": "Today"
              }, {
                "value": "10:35",
                "datename": "Today"
              }, {
                "value": "10:40",
                "datename": "Today"
              }, {
                "value": "10:45",
                "datename": "Today"
              }, {
                "value": "10:50",
                "datename": "Today"
              }, {
                "value": "10:55",
                "datename": "Today"
              }, {
                "value": "11:00",
                "datename": "Today"
              }, {
                "value": "11:05",
                "datename": "Today"
              }, {
                "value": "11:10",
                "datename": "Today"
              }, {
                "value": "11:15",
                "datename": "Today"
              }, {
                "value": "11:20",
                "datename": "Today"
              }, {
                "value": "11:25",
                "datename": "Today"
              }, {
                "value": "11:30",
                "datename": "Today"
              }, {
                "value": "11:35",
                "datename": "Today"
              }, {
                "value": "11:40",
                "datename": "Today"
              }, {
                "value": "11:45",
                "datename": "Today"
              }, {
                "value": "11:50",
                "datename": "Today"
              }, {
                "value": "11:55",
                "datename": "Today"
              }, {
                "value": "12:00",
                "datename": "Today"
              }, {
                "value": "12:05",
                "datename": "Today"
              }, {
                "value": "12:10",
                "datename": "Today"
              }, {
                "value": "12:15",
                "datename": "Today"
              }, {
                "value": "12:20",
                "datename": "Today"
              }, {
                "value": "12:25",
                "datename": "Today"
              }, {
                "value": "12:30",
                "datename": "Today"
              }, {
                "value": "12:35",
                "datename": "Today"
              }, {
                "value": "12:40",
                "datename": "Today"
              }, {
                "value": "12:45",
                "datename": "Today"
              }, {
                "value": "12:50",
                "datename": "Today"
              }, {
                "value": "12:55",
                "datename": "Today"
              }, {
                "value": "13:00",
                "datename": "Today"
              }, {
                "value": "13:05",
                "datename": "Today"
              }, {
                "value": "13:10",
                "datename": "Today"
              }, {
                "value": "13:15",
                "datename": "Today"
              }, {
                "value": "13:20",
                "datename": "Today"
              }, {
                "value": "13:25",
                "datename": "Today"
              }, {
                "value": "13:30",
                "datename": "Today"
              }, {
                "value": "13:35",
                "datename": "Today"
              }, {
                "value": "13:40",
                "datename": "Today"
              }, {
                "value": "13:45",
                "datename": "Today"
              }, {
                "value": "13:50",
                "datename": "Today"
              }, {
                "value": "13:55",
                "datename": "Today"
              }, {
                "value": "14:00",
                "datename": "Today"
              }, {
                "value": "14:05",
                "datename": "Today"
              }, {
                "value": "14:10",
                "datename": "Today"
              }, {
                "value": "14:15",
                "datename": "Today"
              }, {
                "value": "14:20",
                "datename": "Today"
              }, {
                "value": "14:25",
                "datename": "Today"
              }, {
                "value": "14:30",
                "datename": "Today"
              }, {
                "value": "14:35",
                "datename": "Today"
              }, {
                "value": "14:40",
                "datename": "Today"
              }, {
                "value": "14:45",
                "datename": "Today"
              }, {
                "value": "14:50",
                "datename": "Today"
              }, {
                "value": "14:55",
                "datename": "Today"
              }, {
                "value": "15:00",
                "datename": "Today"
              }, {
                "value": "15:05",
                "datename": "Today"
              }, {
                "value": "15:10",
                "datename": "Today"
              }, {
                "value": "15:15",
                "datename": "Today"
              }, {
                "value": "15:20",
                "datename": "Today"
              }, {
                "value": "15:25",
                "datename": "Today"
              }, {
                "value": "15:30",
                "datename": "Today"
              }, {
                "value": "15:35",
                "datename": "Today"
              }, {
                "value": "15:40",
                "datename": "Today"
              }, {
                "value": "15:45",
                "datename": "Today"
              }, {
                "value": "15:50",
                "datename": "Today"
              }, {
                "value": "15:55",
                "datename": "Today"
              }, {
                "value": "16:00",
                "datename": "Today"
              }, {
                "value": "16:05",
                "datename": "Today"
              }, {
                "value": "16:10",
                "datename": "Today"
              }, {
                "value": "16:15",
                "datename": "Today"
              }, {
                "value": "16:20",
                "datename": "Today"
              }, {
                "value": "16:25",
                "datename": "Today"
              }, {
                "value": "16:30",
                "datename": "Today"
              }, {
                "value": "16:35",
                "datename": "Today"
              }, {
                "value": "16:40",
                "datename": "Today"
              }, {
                "value": "16:45",
                "datename": "Today"
              }, {
                "value": "16:50",
                "datename": "Today"
              }, {
                "value": "16:55",
                "datename": "Today"
              }, {
                "value": "17:00",
                "datename": "Today"
              }, {
                "value": "01:00",
                "datename": "Today"
              }, {
                "value": "01:05",
                "datename": "Today"
              }, {
                "value": "01:10",
                "datename": "Today"
              }, {
                "value": "01:15",
                "datename": "Today"
              }, {
                "value": "01:20",
                "datename": "Today"
              }, {
                "value": "01:25",
                "datename": "Today"
              }, {
                "value": "01:30",
                "datename": "Today"
              }, {
                "value": "01:35",
                "datename": "Today"
              }, {
                "value": "01:40",
                "datename": "Today"
              }, {
                "value": "01:45",
                "datename": "Today"
              }, {
                "value": "01:50",
                "datename": "Today"
              }, {
                "value": "01:55",
                "datename": "Today"
              }, {
                "value": "02:00",
                "datename": "Today"
              }, {
                "value": "02:05",
                "datename": "Today"
              }, {
                "value": "02:10",
                "datename": "Today"
              }, {
                "value": "02:15",
                "datename": "Today"
              }, {
                "value": "02:20",
                "datename": "Today"
              }, {
                "value": "02:25",
                "datename": "Today"
              }, {
                "value": "02:30",
                "datename": "Today"
              }, {
                "value": "02:35",
                "datename": "Today"
              }, {
                "value": "02:40",
                "datename": "Today"
              }, {
                "value": "02:45",
                "datename": "Today"
              }, {
                "value": "02:50",
                "datename": "Today"
              }, {
                "value": "02:55",
                "datename": "Today"
              }, {
                "value": "03:00",
                "datename": "Today"
              }, {
                "value": "03:05",
                "datename": "Today"
              }, {
                "value": "03:10",
                "datename": "Today"
              }, {
                "value": "03:15",
                "datename": "Today"
              }, {
                "value": "03:20",
                "datename": "Today"
              }, {
                "value": "03:25",
                "datename": "Today"
              }, {
                "value": "03:30",
                "datename": "Today"
              }, {
                "value": "03:35",
                "datename": "Today"
              }, {
                "value": "03:40",
                "datename": "Today"
              }, {
                "value": "03:45",
                "datename": "Today"
              }, {
                "value": "03:50",
                "datename": "Today"
              }, {
                "value": "03:55",
                "datename": "Today"
              }, {
                "value": "04:00",
                "datename": "Today"
              }, {
                "value": "04:05",
                "datename": "Today"
              }, {
                "value": "04:10",
                "datename": "Today"
              }, {
                "value": "04:15",
                "datename": "Today"
              }, {
                "value": "04:20",
                "datename": "Today"
              }, {
                "value": "04:25",
                "datename": "Today"
              }, {
                "value": "04:30",
                "datename": "Today"
              }, {
                "value": "04:35",
                "datename": "Today"
              }, {
                "value": "04:40",
                "datename": "Today"
              }, {
                "value": "04:45",
                "datename": "Today"
              }, {
                "value": "04:50",
                "datename": "Today"
              }, {
                "value": "04:55",
                "datename": "Today"
              }, {
                "value": "05:00",
                "datename": "Today"
              }, {
                "value": "05:05",
                "datename": "Today"
              }, {
                "value": "05:10",
                "datename": "Today"
              }, {
                "value": "05:15",
                "datename": "Today"
              }, {
                "value": "05:20",
                "datename": "Today"
              }, {
                "value": "05:25",
                "datename": "Today"
              }, {
                "value": "05:30",
                "datename": "Today"
              }, {
                "value": "05:35",
                "datename": "Today"
              }, {
                "value": "05:40",
                "datename": "Today"
              }, {
                "value": "05:45",
                "datename": "Today"
              }, {
                "value": "05:50",
                "datename": "Today"
              }, {
                "value": "05:55",
                "datename": "Today"
              }, {
                "value": "06:00",
                "datename": "Today"
              }, {
                "value": "06:05",
                "datename": "Today"
              }, {
                "value": "06:10",
                "datename": "Today"
              }, {
                "value": "06:15",
                "datename": "Today"
              }, {
                "value": "06:20",
                "datename": "Today"
              }, {
                "value": "06:25",
                "datename": "Today"
              }, {
                "value": "06:30",
                "datename": "Today"
              }, {
                "value": "06:35",
                "datename": "Today"
              }, {
                "value": "06:40",
                "datename": "Today"
              }, {
                "value": "06:45",
                "datename": "Today"
              }, {
                "value": "06:50",
                "datename": "Today"
              }, {
                "value": "06:55",
                "datename": "Today"
              }, {
                "value": "07:00",
                "datename": "Today"
              }, {
                "value": "07:05",
                "datename": "Today"
              }, {
                "value": "07:10",
                "datename": "Today"
              }, {
                "value": "07:15",
                "datename": "Today"
              }, {
                "value": "07:20",
                "datename": "Today"
              }, {
                "value": "07:25",
                "datename": "Today"
              }, {
                "value": "07:30",
                "datename": "Today"
              }, {
                "value": "07:35",
                "datename": "Today"
              }, {
                "value": "07:40",
                "datename": "Today"
              }, {
                "value": "07:45",
                "datename": "Today"
              }, {
                "value": "07:50",
                "datename": "Today"
              }, {
                "value": "07:55",
                "datename": "Today"
              }, {
                "value": "08:00",
                "datename": "Today"
              }, {
                "value": "08:05",
                "datename": "Today"
              }, {
                "value": "08:10",
                "datename": "Today"
              }, {
                "value": "08:15",
                "datename": "Today"
              }, {
                "value": "08:20",
                "datename": "Today"
              }, {
                "value": "08:25",
                "datename": "Today"
              }, {
                "value": "08:30",
                "datename": "Today"
              }, {
                "value": "08:35",
                "datename": "Today"
              }, {
                "value": "08:40",
                "datename": "Today"
              }, {
                "value": "08:45",
                "datename": "Today"
              }, {
                "value": "08:50",
                "datename": "Today"
              }, {
                "value": "08:55",
                "datename": "Today"
              }, {
                "value": "09:00",
                "datename": "Today"
              }, {
                "value": "09:05",
                "datename": "Today"
              }, {
                "value": "09:10",
                "datename": "Today"
              }, {
                "value": "09:15",
                "datename": "Today"
              }, {
                "value": "09:20",
                "datename": "Today"
              }, {
                "value": "09:25",
                "datename": "Today"
              }, {
                "value": "09:30",
                "datename": "Today"
              }, {
                "value": "09:35",
                "datename": "Today"
              }, {
                "value": "09:40",
                "datename": "Today"
              }, {
                "value": "09:45",
                "datename": "Today"
              }, {
                "value": "09:50",
                "datename": "Today"
              }, {
                "value": "09:55",
                "datename": "Today"
              }, {
                "value": "10:00",
                "datename": "Today"
              }, {
                "value": "10:05",
                "datename": "Today"
              }, {
                "value": "10:10",
                "datename": "Today"
              }, {
                "value": "10:15",
                "datename": "Today"
              }, {
                "value": "10:20",
                "datename": "Today"
              }, {
                "value": "10:25",
                "datename": "Today"
              }, {
                "value": "10:30",
                "datename": "Today"
              }, {
                "value": "10:35",
                "datename": "Today"
              }, {
                "value": "10:40",
                "datename": "Today"
              }, {
                "value": "10:45",
                "datename": "Today"
              }, {
                "value": "10:50",
                "datename": "Today"
              }, {
                "value": "10:55",
                "datename": "Today"
              }, {
                "value": "11:00",
                "datename": "Today"
              }, {
                "value": "11:05",
                "datename": "Today"
              }, {
                "value": "11:10",
                "datename": "Today"
              }, {
                "value": "11:15",
                "datename": "Today"
              }, {
                "value": "11:20",
                "datename": "Today"
              }, {
                "value": "11:25",
                "datename": "Today"
              }, {
                "value": "11:30",
                "datename": "Today"
              }, {
                "value": "11:35",
                "datename": "Today"
              }, {
                "value": "11:40",
                "datename": "Today"
              }, {
                "value": "11:45",
                "datename": "Today"
              }, {
                "value": "11:50",
                "datename": "Today"
              }, {
                "value": "11:55",
                "datename": "Today"
              }, {
                "value": "12:00",
                "datename": "Today"
              }, {
                "value": "12:05",
                "datename": "Today"
              }, {
                "value": "12:10",
                "datename": "Today"
              }, {
                "value": "12:15",
                "datename": "Today"
              }, {
                "value": "12:20",
                "datename": "Today"
              }, {
                "value": "12:25",
                "datename": "Today"
              }, {
                "value": "12:30",
                "datename": "Today"
              }, {
                "value": "12:35",
                "datename": "Today"
              }, {
                "value": "12:40",
                "datename": "Today"
              }, {
                "value": "12:45",
                "datename": "Today"
              }, {
                "value": "12:50",
                "datename": "Today"
              }, {
                "value": "12:55",
                "datename": "Today"
              }, {
                "value": "13:00",
                "datename": "Today"
              }, {
                "value": "13:05",
                "datename": "Today"
              }, {
                "value": "13:10",
                "datename": "Today"
              }, {
                "value": "13:15",
                "datename": "Today"
              }, {
                "value": "13:20",
                "datename": "Today"
              }, {
                "value": "13:25",
                "datename": "Today"
              }, {
                "value": "13:30",
                "datename": "Today"
              }, {
                "value": "13:35",
                "datename": "Today"
              }, {
                "value": "13:40",
                "datename": "Today"
              }, {
                "value": "13:45",
                "datename": "Today"
              }, {
                "value": "13:50",
                "datename": "Today"
              }, {
                "value": "13:55",
                "datename": "Today"
              }, {
                "value": "14:00",
                "datename": "Today"
              }, {
                "value": "14:05",
                "datename": "Today"
              }, {
                "value": "14:10",
                "datename": "Today"
              }, {
                "value": "14:15",
                "datename": "Today"
              }, {
                "value": "14:20",
                "datename": "Today"
              }, {
                "value": "14:25",
                "datename": "Today"
              }, {
                "value": "14:30",
                "datename": "Today"
              }, {
                "value": "14:35",
                "datename": "Today"
              }, {
                "value": "14:40",
                "datename": "Today"
              }, {
                "value": "14:45",
                "datename": "Today"
              }, {
                "value": "14:50",
                "datename": "Today"
              }, {
                "value": "14:55",
                "datename": "Today"
              }, {
                "value": "15:00",
                "datename": "Today"
              }, {
                "value": "15:05",
                "datename": "Today"
              }, {
                "value": "15:10",
                "datename": "Today"
              }, {
                "value": "15:15",
                "datename": "Today"
              }, {
                "value": "15:20",
                "datename": "Today"
              }, {
                "value": "15:25",
                "datename": "Today"
              }, {
                "value": "15:30",
                "datename": "Today"
              }, {
                "value": "15:35",
                "datename": "Today"
              }, {
                "value": "15:40",
                "datename": "Today"
              }, {
                "value": "15:45",
                "datename": "Today"
              }, {
                "value": "15:50",
                "datename": "Today"
              }, {
                "value": "15:55",
                "datename": "Today"
              }, {
                "value": "16:00",
                "datename": "Today"
              }, {
                "value": "16:05",
                "datename": "Today"
              }, {
                "value": "16:10",
                "datename": "Today"
              }, {
                "value": "16:15",
                "datename": "Today"
              }, {
                "value": "16:20",
                "datename": "Today"
              }, {
                "value": "16:25",
                "datename": "Today"
              }, {
                "value": "16:30",
                "datename": "Today"
              }, {
                "value": "16:35",
                "datename": "Today"
              }, {
                "value": "16:40",
                "datename": "Today"
              }, {
                "value": "16:45",
                "datename": "Today"
              }, {
                "value": "16:50",
                "datename": "Today"
              }, {
                "value": "16:55",
                "datename": "Today"
              }, {
                "value": "17:00",
                "datename": "Today"
              }, {
                "value": "17:05",
                "datename": "Today"
              }, {
                "value": "17:10",
                "datename": "Today"
              }, {
                "value": "17:15",
                "datename": "Today"
              }, {
                "value": "17:20",
                "datename": "Today"
              }, {
                "value": "17:25",
                "datename": "Today"
              }, {
                "value": "17:30",
                "datename": "Today"
              }, {
                "value": "17:35",
                "datename": "Today"
              }, {
                "value": "17:40",
                "datename": "Today"
              }, {
                "value": "17:45",
                "datename": "Today"
              }, {
                "value": "17:50",
                "datename": "Today"
              }, {
                "value": "17:55",
                "datename": "Today"
              }, {
                "value": "18:00",
                "datename": "Today"
              }, {
                "value": "18:05",
                "datename": "Today"
              }, {
                "value": "18:10",
                "datename": "Today"
              }, {
                "value": "18:15",
                "datename": "Today"
              }, {
                "value": "18:20",
                "datename": "Today"
              }, {
                "value": "18:25",
                "datename": "Today"
              }, {
                "value": "18:30",
                "datename": "Today"
              }, {
                "value": "18:35",
                "datename": "Today"
              }, {
                "value": "18:40",
                "datename": "Today"
              }, {
                "value": "18:45",
                "datename": "Today"
              }, {
                "value": "18:50",
                "datename": "Today"
              }, {
                "value": "18:55",
                "datename": "Today"
              }, {
                "value": "19:00",
                "datename": "Today"
              }, {
                "value": "19:05",
                "datename": "Today"
              }, {
                "value": "19:10",
                "datename": "Today"
              }, {
                "value": "19:15",
                "datename": "Today"
              }, {
                "value": "19:20",
                "datename": "Today"
              }, {
                "value": "19:25",
                "datename": "Today"
              }, {
                "value": "19:30",
                "datename": "Today"
              }, {
                "value": "19:35",
                "datename": "Today"
              }, {
                "value": "19:40",
                "datename": "Today"
              }, {
                "value": "19:45",
                "datename": "Today"
              }, {
                "value": "19:50",
                "datename": "Today"
              }, {
                "value": "19:55",
                "datename": "Today"
              }, {
                "value": "20:00",
                "datename": "Today"
              }, {
                "value": "20:05",
                "datename": "Today"
              }, {
                "value": "20:10",
                "datename": "Today"
              }, {
                "value": "20:15",
                "datename": "Today"
              }, {
                "value": "20:20",
                "datename": "Today"
              }, {
                "value": "20:25",
                "datename": "Today"
              }, {
                "value": "20:30",
                "datename": "Today"
              }, {
                "value": "20:35",
                "datename": "Today"
              }, {
                "value": "20:40",
                "datename": "Today"
              }, {
                "value": "20:45",
                "datename": "Today"
              }, {
                "value": "20:50",
                "datename": "Today"
              }, {
                "value": "20:55",
                "datename": "Today"
              }, {
                "value": "21:00",
                "datename": "Today"
              }, {
                "value": "21:05",
                "datename": "Today"
              }, {
                "value": "21:10",
                "datename": "Today"
              }, {
                "value": "21:15",
                "datename": "Today"
              }, {
                "value": "21:20",
                "datename": "Today"
              }, {
                "value": "21:25",
                "datename": "Today"
              }, {
                "value": "21:30",
                "datename": "Today"
              }, {
                "value": "21:35",
                "datename": "Today"
              }, {
                "value": "21:40",
                "datename": "Today"
              }, {
                "value": "21:45",
                "datename": "Today"
              }, {
                "value": "21:50",
                "datename": "Today"
              }, {
                "value": "21:55",
                "datename": "Today"
              }, {
                "value": "22:00",
                "datename": "Today"
              }]
            }
          };
          this.respDataCategory = {
            "success": true,
            "data": [{
              "id": "8",
              "name": "PROVINCIA DE LAMPA",
              "description": "Want a blow dry but can't find time for the salon? Now you don't have to. Book a mobile hairdresser to your home anywhere in London. So whether it's a business meeting, a hot date or a girls night out, blow LTD has the best stylists available any time, 7am till late.",
              "icon": "menu_70963haircut-834280_640.jpg",
              "sort_order": "1",
              "type": null,
              "time_for_pre_order": null,
              "status": "1",
              "meta_title": null,
              "meta_description": null,
              "meta_keywords": null,
              "url_link": null,
              "isscg": "",
              "scg": [],
              "prd": [{
                "id": "1",
                "cattegory_id": "8",
                "sub_category_id": "0",
                "name": "GESTIONANDO OBRAS Y OPORTUNIDADES CON LIDERAZGO - Wilfredo Molina Quiza",
                "description": "<p> Especialista...",
                "price": "",
                "image": "../../assets/candidatos/GL-LAMPA/logo.png",
                "imageDesc": "../../assets/candidatos/GL-LAMPA/1.jpg",
                "unique_id": "PRD-978090724",
                "status": "1",
                "sold": null,
                "sorting_order": "0",
                "recipe": null,
                "unavailable_date": null,
                "hours_time": "",
                "minutes_time": "",
                "imgs": ["../../assets/candidatos/GL-LAMPA/logo.png"],
                "preorder": "",
                "isAvailable": "",
                "contain": [""],
                "longdesc": "<p></p>"
              }, {
                "id": "2",
                "cattegory_id": "8",
                "sub_category_id": "0",
                "name": "PARTIDO POLITICO NACIONAL PERU LIBRE - Apaza Montalvo Alberth",
                "description": "<p> Alcalde...",
                "price": "",
                "image": "../../assets/candidatos/GL-LAMPA/logo.png",
                "imageDesc": "../../assets/candidatos/GL-LAMPA/2.jpg",
                "unique_id": "PRD-978090724",
                "status": "1",
                "sold": null,
                "sorting_order": "0",
                "recipe": null,
                "unavailable_date": null,
                "hours_time": "",
                "minutes_time": "",
                "imgs": ["../../assets/candidatos/GL-LAMPA/logo.png"],
                "preorder": "",
                "isAvailable": "",
                "contain": [""],
                "longdesc": "<p></p>"
              }, {
                "id": "3",
                "cattegory_id": "8",
                "sub_category_id": "0",
                "name": "MORAL Y DESARROLLO - Salvador Alejo Tunco",
                "description": "<p> Alcalde...",
                "price": "",
                "image": "../../assets/candidatos/GL-LAMPA/logo.png",
                "imageDesc": "../../assets/candidatos/GL-LAMPA/3.jpg",
                "unique_id": "PRD-978090724",
                "status": "1",
                "sold": null,
                "sorting_order": "0",
                "recipe": null,
                "unavailable_date": null,
                "hours_time": "",
                "minutes_time": "",
                "imgs": ["../../assets/candidatos/GL-PUNO/LAMPA.png"],
                "preorder": "",
                "isAvailable": "",
                "contain": [""],
                "longdesc": "<p></p>"
              }, {
                "id": "4",
                "cattegory_id": "8",
                "sub_category_id": "0",
                "name": "MOVIMIENTO DE INTEGRACION Y REVOLUCION ANDINA - Heraclides Ojeda Huarilloclla",
                "description": "<p>Consejero...",
                "price": "",
                "image": "../../assets/candidatos/GL-LAMPA/logo.png",
                "imageDesc": "../../assets/candidatos/GL-LAMPA/4.jpg",
                "unique_id": "PRD-178090250",
                "status": "1",
                "sold": "2021-08-26",
                "sorting_order": "0",
                "recipe": null,
                "unavailable_date": null,
                "hours_time": "",
                "minutes_time": "",
                "imgs": ["../../assets/candidatos/GL-LAMPA/logo.png"],
                "preorder": "",
                "isAvailable": "",
                "contain": [""],
                "longdesc": "<p></p>"
              }],
              "count": 1,
              "filter": null
            }
            /*{
              "id": "11",
              "name": "Facials",
              "description": "Enjoy a luxurious, professional facial in the comfort and safety of your home.",
              "icon": "category_66700massage-1929064_640.jpg",
              "sort_order": "2",
              "type": null,
              "time_for_pre_order": null,
              "status": "1",
              "meta_title": null,
              "meta_description": null,
              "meta_keywords": null,
              "url_link": null,
              "isscg": "",
              "scg": [],
              "prd": [
                {
                  "id": "14",
                  "cattegory_id": "11",
                  "sub_category_id": "0",
                  "name": "The Ultimate Million Dollar Facial",
                  "description": "<p>Need fabulous results, fast? The Million Dollar Facial is an advanc...",
                  "price": "149.00",
                  "image": "a:1:{i:0;s:43:\"how-often-should-you-get-a-facial-lede.jpeg\";}",
                  "unique_id": "PRD-428094908",
                  "status": "1",
                  "sold": null,
                  "sorting_order": "0",
                  "recipe": null,
                  "unavailable_date": null,
                  "hours_time": "1",
                  "minutes_time": "10",
                  "imgs": [
                    "how-often-should-you-get-a-facial-lede.jpeg"
                  ],
                  "preorder": "",
                  "isAvailable": "",
                  "contain": [
                    ""
                  ],
                  "longdesc": "<p>Need fabulous results, fast? The Million Dollar Facial is an advanced, ten-step facial which works your skin from the outside in. Your therapist will use a combination of high-tech treatments including Dermaplaning, Microneedling, Lymphatic Drainage and Icey Globes to flush out toxins, stimulate natural collagen and cell turnover and help treat conditions such as puffiness, breakouts rosacea and pigmentation.</p>"
                },
                {
                  "id": "15",
                  "cattegory_id": "11",
                  "sub_category_id": "0",
                  "name": "The Million Dollar Microneedling Facial",
                  "description": "<p>A real powerhouse for results. Microneedling is an advanced clinica...",
                  "price": "89.00",
                  "image": "a:1:{i:0;s:35:\"istockphoto-1171697897-612x612.jpeg\";}",
                  "unique_id": "PRD-611094848",
                  "status": "1",
                  "sold": null,
                  "sorting_order": "0",
                  "recipe": null,
                  "unavailable_date": null,
                  "hours_time": "",
                  "minutes_time": "45",
                  "imgs": [
                    "istockphoto-1171697897-612x612.jpeg"
                  ],
                  "preorder": "",
                  "isAvailable": "",
                  "contain": [
                    ""
                  ],
                  "longdesc": "<p>A real powerhouse for results. Microneedling is an advanced clinical treatment designed for instant skin rejuvenation. The procedure uses sterile micro-needles to prick the skin, to generate new collagen and skin tissue for smoother, firmer and more toned skin. With little pain or discomfort, your spa-trained therapist will use a Microneedle dermaroller to improve and treat conditions such as acne scarring, fine lines, wrinkles, enlarged pores and pigmentation.</p>"
                },
                {
                  "id": "16",
                  "cattegory_id": "11",
                  "sub_category_id": "0",
                  "name": "Decleor Ultimate Vitamin Glow Facial ",
                  "description": "<p>Suited to all skin types, this internationally renowned, multi-awar...",
                  "price": "74.00",
                  "image": "a:1:{i:0;s:18:\"1453683787978.jpeg\";}",
                  "unique_id": "PRD-325094825",
                  "status": "1",
                  "sold": null,
                  "sorting_order": "0",
                  "recipe": null,
                  "unavailable_date": null,
                  "hours_time": "1",
                  "minutes_time": "10",
                  "imgs": [
                    "1453683787978.jpeg"
                  ],
                  "preorder": "",
                  "isAvailable": "",
                  "contain": [
                    ""
                  ],
                  "longdesc": "<p>Suited to all skin types, this internationally renowned, multi-award-winning Decl&eacute;or facial relieves stress, and is power-packed with vitamins and anti-oxidants, leaving skin glowing with vitality.</p>"
                },
                {
                  "id": "17",
                  "cattegory_id": "11",
                  "sub_category_id": "0",
                  "name": "Decleor Moisture Surge Facial",
                  "description": "<p>This deeply hydrating facial is designed to quench the thirst of dr...",
                  "price": "75.00",
                  "image": "a:1:{i:0;s:22:\"facial-treatment2.jpeg\";}",
                  "unique_id": "PRD-310094804",
                  "status": "1",
                  "sold": null,
                  "sorting_order": "0",
                  "recipe": null,
                  "unavailable_date": null,
                  "hours_time": "1",
                  "minutes_time": "",
                  "imgs": [
                    "facial-treatment2.jpeg"
                  ],
                  "preorder": "",
                  "isAvailable": "",
                  "contain": [
                    ""
                  ],
                  "longdesc": "<p>This deeply hydrating facial is designed to quench the thirst of dry, dehydrated skin by using the Decl&eacute;or Neroli Essential Oil and Hyaluronic Acid to lock in moisture. Your skin will be left feeling rehydrated, smooth and super-soft.</p>"
                },
                {
                  "id": "18",
                  "cattegory_id": "11",
                  "sub_category_id": "0",
                  "name": "Decleor Firming Facial ",
                  "description": "<p>Created specifically to revitalise, plump and firm the skin for a m...",
                  "price": "75.00",
                  "image": "a:1:{i:0;s:23:\"woman-6485473__480.jpeg\";}",
                  "unique_id": "PRD-796094742",
                  "status": "1",
                  "sold": null,
                  "sorting_order": "0",
                  "recipe": null,
                  "unavailable_date": null,
                  "hours_time": "1",
                  "minutes_time": "",
                  "imgs": [
                    "woman-6485473__480.jpeg"
                  ],
                  "preorder": "",
                  "isAvailable": "",
                  "contain": [
                    ""
                  ],
                  "longdesc": "<p>Created specifically to revitalise, plump and firm the skin for a more youthful looking complexion. Using a bespoke blend of 100% natural Decl&eacute;or products, this re-energising facial smooths the appearance of lines and wrinkles, and includes an invigorating massage and a gentle exfoliation.</p>"
                },
                {
                  "id": "19",
                  "cattegory_id": "11",
                  "sub_category_id": "0",
                  "name": "Decleor Skin Soother Facial",
                  "description": "<p>Designed with the more delicate skin-type in mind, this intensely n...",
                  "price": "75.00",
                  "image": "a:1:{i:0;s:32:\"hba-damagedskinfacials-lead.jpeg\";}",
                  "unique_id": "PRD-830094715",
                  "status": "1",
                  "sold": null,
                  "sorting_order": "0",
                  "recipe": null,
                  "unavailable_date": null,
                  "hours_time": "1",
                  "minutes_time": "10",
                  "imgs": [
                    "hba-damagedskinfacials-lead.jpeg"
                  ],
                  "preorder": "",
                  "isAvailable": "",
                  "contain": [
                    ""
                  ],
                  "longdesc": "<p>Designed with the more delicate skin-type in mind, this intensely nurturing facial using Decl&eacute;or products soothes and conditions sensitive skin, instantly relieving stressed and fragile complexions. Organic Bulgarian Rose will leave the skin feeling soothed and resilient.</p>"
                }
              ],
              "count": 1,
              "filter": null
            },
            {
              "id": "12",
              "name": "Massage",
              "description": "Discover the joy of rolling into bed after a five star spa-grade massage in your home. ",
              "icon": "category_13762wellness-285587_640.jpg",
              "sort_order": "3",
              "type": null,
              "time_for_pre_order": null,
              "status": "1",
              "meta_title": null,
              "meta_description": null,
              "meta_keywords": null,
              "url_link": null,
              "isscg": "",
              "scg": [],
              "prd": [
                {
                  "id": "11",
                  "cattegory_id": "12",
                  "sub_category_id": "0",
                  "name": "CBD Massage",
                  "description": "<p>We are proud to offer massages for women, by women, so you can rela...",
                  "price": "79.00",
                  "image": "a:1:{i:0;s:23:\"wellness-285589_640.jpg\";}",
                  "unique_id": "PRD-480094629",
                  "status": "1",
                  "sold": null,
                  "sorting_order": "0",
                  "recipe": null,
                  "unavailable_date": null,
                  "hours_time": "1",
                  "minutes_time": "",
                  "imgs": [
                    "wellness-285589_640.jpg"
                  ],
                  "preorder": "",
                  "isAvailable": "",
                  "contain": [
                    ""
                  ],
                  "longdesc": "<p>We are proud to offer massages for women, by women, so you can relax knowing you are in safe and expert hands. Your spa-trained therapist will arrive with her massage table, CBD Massage Oil from leading UK brand Honest Hemp (containing organic hemp, frankincense, lavender and chamomile) and music playlist to create a spa-at-home experience. Our CBD Massage combines Deep Tissue techniques, applying strong, sustained pressure and slow deep strokes.</p>"
                },
                {
                  "id": "12",
                  "cattegory_id": "12",
                  "sub_category_id": "0",
                  "name": "Deep Tissue Massage",
                  "description": "<p>We are proud to offer massages for women, by women, so you can rela...",
                  "price": "65.00",
                  "image": "a:1:{i:0;s:22:\"massage-486700_640.jpg\";}",
                  "unique_id": "PRD-904095003",
                  "status": "1",
                  "sold": null,
                  "sorting_order": "0",
                  "recipe": null,
                  "unavailable_date": null,
                  "hours_time": "1",
                  "minutes_time": "10",
                  "imgs": [
                    "massage-486700_640.jpg"
                  ],
                  "preorder": "",
                  "isAvailable": "",
                  "contain": [
                    ""
                  ],
                  "longdesc": "<p>We are proud to offer massages for women, by women, so you can relax knowing you are in safe and expert hands. Your spa-trained therapist will arrive with her massage table, premium oils and music playlist to create a spa-at-home experience. She will use Deep Tissue Massage techniques, applying strong and sustained pressure and slow, deep strokes to target the inner layers of muscle and connective tissue. This massage is designed to improve flexibility and relieve tension and muscle-ache. Your massage will last 60 minutes, with an additional 10 minutes for set up time.</p>"
                },
                {
                  "id": "13",
                  "cattegory_id": "12",
                  "sub_category_id": "0",
                  "name": "Swedish Massage",
                  "description": "<p>We are proud to offer massages for women, by women, so you can rela...",
                  "price": "65.00",
                  "image": "a:1:{i:0;s:21:\"woman-3701712_640.jpg\";}",
                  "unique_id": "PRD-822094943",
                  "status": "1",
                  "sold": null,
                  "sorting_order": "0",
                  "recipe": null,
                  "unavailable_date": null,
                  "hours_time": "1",
                  "minutes_time": "",
                  "imgs": [
                    "woman-3701712_640.jpg"
                  ],
                  "preorder": "",
                  "isAvailable": "",
                  "contain": [
                    ""
                  ],
                  "longdesc": "<p>We are proud to offer massages for women, by women, so you can relax knowing you are in safe and expert hands. Your spa-trained therapist will arrive with her massage table, premium oils and music playlist to create a truly relaxing experience. She will use Swedish Massage techniques involving long, gentle kneading strokes to help ease muscle tension, promote joint mobility and relax your mind and your body. Your massage will last 60 minutes, with an additional 10 minutes for set up time.</p>"
                }
              ],
              "count": 1,
              "filter": null
            },
            {
              "id": "13",
              "name": "Waxing",
              "description": "Our mobile beauty services mean you can book your waxing appointments at your home, office or hotel",
              "icon": "category_45479sunblock-1461397_640.jpg",
              "sort_order": "4",
              "type": null,
              "time_for_pre_order": null,
              "status": "1",
              "meta_title": null,
              "meta_description": null,
              "meta_keywords": null,
              "url_link": null,
              "isscg": "OK",
              "scg": [
                {
                  "id": "14",
                  "catid": "13",
                  "name": "Leg & Underarm Wax",
                  "icon": "subcategory_2948210f5b96bf75c10005989cf5c6570986c.jpeg",
                  "status": "1"
                },
                {
                  "id": "15",
                  "catid": "13",
                  "name": "Full Face Wax",
                  "icon": "subcategory_63394depositphotos_107619982-stock-photo-closeup-womans-face-receiving-facial.jpeg",
                  "status": "1"
                }
              ],
              "prd": [
                {
                  "id": "5",
                  "cattegory_id": "13",
                  "sub_category_id": "14",
                  "name": "Eyebrow Wax",
                  "description": "<p>Full removal of hair from your legs and underarm area. All hair wil...",
                  "price": "15.00",
                  "image": "a:1:{i:0;s:37:\"10f5b96bf75c10005989cf5c6570986c.jpeg\";}",
                  "unique_id": "PRD-251095201",
                  "status": "1",
                  "sold": null,
                  "sorting_order": "0",
                  "recipe": null,
                  "unavailable_date": null,
                  "hours_time": "",
                  "minutes_time": "15",
                  "imgs": [
                    "10f5b96bf75c10005989cf5c6570986c.jpeg"
                  ],
                  "preorder": "",
                  "isAvailable": "",
                  "contain": [
                    ""
                  ],
                  "longdesc": "<p>Full removal of hair from your legs and underarm area. All hair will also be removed from the front and back of your intimate area.</p>"
                },
                {
                  "id": "6",
                  "cattegory_id": "13",
                  "sub_category_id": "14",
                  "name": "CHIN WAX",
                  "description": "<p>Full removal of hair from your legs and underarm area. All hair wil...",
                  "price": "15.00",
                  "image": "a:1:{i:0;s:53:\"360_F_140892344_XRLtm0NHef0UwRV22aTJrZva4ryQ4KhS.jpeg\";}",
                  "unique_id": "PRD-292095225",
                  "status": "1",
                  "sold": null,
                  "sorting_order": "0",
                  "recipe": null,
                  "unavailable_date": null,
                  "hours_time": "",
                  "minutes_time": "15",
                  "imgs": [
                    "360_F_140892344_XRLtm0NHef0UwRV22aTJrZva4ryQ4KhS.jpeg"
                  ],
                  "preorder": "",
                  "isAvailable": "",
                  "contain": [
                    ""
                  ],
                  "longdesc": "<p>Full removal of hair from your legs and underarm area. All hair will also be removed from the front and back of your intimate area.</p>"
                },
                {
                  "id": "7",
                  "cattegory_id": "13",
                  "sub_category_id": "14",
                  "name": "Upper Lip Wax",
                  "description": "<p>Full removal of hair from your legs and underarm area. All hair wil...",
                  "price": "15.00",
                  "image": "a:1:{i:0;s:70:\"beauty-salon-mustache-depilation-facial-skin-treatment-and-care-1.jpeg\";}",
                  "unique_id": "PRD-317095250",
                  "status": "1",
                  "sold": null,
                  "sorting_order": "0",
                  "recipe": null,
                  "unavailable_date": null,
                  "hours_time": "",
                  "minutes_time": "15",
                  "imgs": [
                    "beauty-salon-mustache-depilation-facial-skin-treatment-and-care-1.jpeg"
                  ],
                  "preorder": "",
                  "isAvailable": "",
                  "contain": [
                    ""
                  ],
                  "longdesc": "<p>Full removal of hair from your legs and underarm area. All hair will also be removed from the front and back of your intimate area.</p>"
                },
                {
                  "id": "8",
                  "cattegory_id": "13",
                  "sub_category_id": "14",
                  "name": "Arm Wax",
                  "description": "<p>Full removal of hair from your legs and underarm area. All hair wil...",
                  "price": "20.00",
                  "image": "a:1:{i:0;s:13:\"c700x420.jpeg\";}",
                  "unique_id": "PRD-670095313",
                  "status": "1",
                  "sold": null,
                  "sorting_order": "0",
                  "recipe": null,
                  "unavailable_date": null,
                  "hours_time": "",
                  "minutes_time": "20",
                  "imgs": [
                    "c700x420.jpeg"
                  ],
                  "preorder": "",
                  "isAvailable": "",
                  "contain": [
                    ""
                  ],
                  "longdesc": "<p>Full removal of hair from your legs and underarm area. All hair will also be removed from the front and back of your intimate area.</p>"
                },
                {
                  "id": "9",
                  "cattegory_id": "13",
                  "sub_category_id": "15",
                  "name": "Face Wax",
                  "description": "<p>Wax away any unwanted hair from the full facial area including chee...",
                  "price": "45.00",
                  "image": "a:1:{i:0;s:77:\"depositphotos_107619982-stock-photo-closeup-womans-face-receiving-facial.jpeg\";}",
                  "unique_id": "PRD-404095334",
                  "status": "1",
                  "sold": null,
                  "sorting_order": "0",
                  "recipe": null,
                  "unavailable_date": null,
                  "hours_time": "",
                  "minutes_time": "55",
                  "imgs": [
                    "depositphotos_107619982-stock-photo-closeup-womans-face-receiving-facial.jpeg"
                  ],
                  "preorder": "",
                  "isAvailable": "",
                  "contain": [
                    ""
                  ],
                  "longdesc": "<p>Wax away any unwanted hair from the full facial area including cheeks, hairline, lip and chin, tidy up your brows and say hello to softer skin. Your appointment will include a personalised consultation to determine whether strip or hot wax is best for you.</p>"
                },
                {
                  "id": "10",
                  "cattegory_id": "13",
                  "sub_category_id": "15",
                  "name": "Brow, Lip & Chin Wax",
                  "description": "<p>Wax away any unwanted hair from the lip and chin, tidy up your brow...",
                  "price": "40.00",
                  "image": "a:1:{i:0;s:32:\"facial-treatment-5529815_640.jpg\";}",
                  "unique_id": "PRD-328095111",
                  "status": "1",
                  "sold": null,
                  "sorting_order": "0",
                  "recipe": null,
                  "unavailable_date": null,
                  "hours_time": "",
                  "minutes_time": "50",
                  "imgs": [
                    "facial-treatment-5529815_640.jpg"
                  ],
                  "preorder": "",
                  "isAvailable": "",
                  "contain": [
                    ""
                  ],
                  "longdesc": "<p>Wax away any unwanted hair from the lip and chin, tidy up your brows and say hello to softer skin. Your appointment will include a personalised consultation to determine whether strip or hot wax is best for you.</p>"
                }
              ],
              "count": 1,
              "filter": null
            },
            {
              "id": "9",
              "name": "Hair Colour",
              "description": "New! Why go to the salon when you can have salon-grade hair colour for 30% less, in the comfort and safety of your own home? Our expertly trained and hygiene-certified colourists will work with you to find your perfect style and colour. Bookings available five days (or more) in advance, to allow tim",
              "icon": "menu_43024pink-hair-1450045_640.jpg",
              "sort_order": "5",
              "type": null,
              "time_for_pre_order": null,
              "status": "1",
              "meta_title": null,
              "meta_description": null,
              "meta_keywords": null,
              "url_link": null,
              "isscg": "OK",
              "scg": [
                {
                  "id": "16",
                  "catid": "9",
                  "name": "Permanent Colour",
                  "icon": "subcategory_6743489518259-stylist-puts-a-hair-dryer-and-comb-hair-in-a-hairdresser.jpeg",
                  "status": "1"
                },
                {
                  "id": "17",
                  "catid": "9",
                  "name": "Highlights & Balayage",
                  "icon": "subcategory_74831caramel-mocha-hair.jpeg",
                  "status": "1"
                }
              ],
              "prd": [
                {
                  "id": "20",
                  "cattegory_id": "9",
                  "sub_category_id": "16",
                  "name": "Permanent Colour, Cut & Blow Dry",
                  "description": "<p>Save up to 30% on salon prices by booking your Full Head Colour at ...",
                  "price": "109.00",
                  "image": "a:1:{i:0;s:99:\"89189945-master-in-a-hairdresser-dries-her-hair-to-a-girl-with-a-hairdryer-and-makes-a-styling.jpeg\";}",
                  "unique_id": "PRD-848094440",
                  "status": "1",
                  "sold": null,
                  "sorting_order": "0",
                  "recipe": null,
                  "unavailable_date": null,
                  "hours_time": "1",
                  "minutes_time": "55",
                  "imgs": [
                    "89189945-master-in-a-hairdresser-dries-her-hair-to-a-girl-with-a-hairdryer-and-makes-a-styling.jpeg"
                  ],
                  "preorder": "",
                  "isAvailable": "",
                  "contain": [
                    ""
                  ],
                  "longdesc": "<p>Save up to 30% on salon prices by booking your Full Head Colour at home (typical salon price &pound;128). This service includes a personalised plan from an expert colourist followed by a visit at home for a full salon-grade colour refresh, a cut and blow dry. To protect, nourish and strengthen your hair book an &lsquo;Olaplex&rsquo; service extra at checkout.</p>"
                }
              ],
              "count": 1,
              "filter": null
            },
            {
              "id": "10",
              "name": "Nails",
              "description": "We use all our manicures and pedicures and our mobile nail technicians can come to you 7 days a week",
              "icon": "category_5973painting-fingernails-635261_640.jpg",
              "sort_order": "6",
              "type": null,
              "time_for_pre_order": null,
              "status": "1",
              "meta_title": null,
              "meta_description": null,
              "meta_keywords": null,
              "url_link": null,
              "isscg": "",
              "scg": [],
              "prd": [
                {
                  "id": "22",
                  "cattegory_id": "10",
                  "sub_category_id": "0",
                  "name": "Nail polish application",
                  "description": "<p>Nail polish application of your choice either on hands or legs.&nbs...",
                  "price": "2.00",
                  "image": "a:1:{i:0;s:15:\"nail_polish.jpg\";}",
                  "unique_id": "PRD-800091845",
                  "status": "1",
                  "sold": null,
                  "sorting_order": "0",
                  "recipe": null,
                  "unavailable_date": null,
                  "hours_time": "00",
                  "minutes_time": "20",
                  "imgs": [
                    "nail_polish.jpg"
                  ],
                  "preorder": "",
                  "isAvailable": "",
                  "contain": [
                    ""
                  ],
                  "longdesc": "<p>Nail polish application of your choice either on hands or legs.&nbsp;</p>"
                }
              ],
              "count": 1,
              "filter": null
            },
            {
              "id": "7",
              "name": "Makeup",
              "description": "If youâ€™re bored of your everyday makeup look but donâ€™t have the time, skills or confidence to experiment yourself, book an appointment with blow LTD! Weâ€™re the UKâ€™s leading on demand beauty services platform that connects you to the very best professional makeup artists in London at a time a",
              "icon": "menu_1074fashion-4781538_640.jpg",
              "sort_order": "8",
              "type": null,
              "time_for_pre_order": null,
              "status": "1",
              "meta_title": null,
              "meta_description": null,
              "meta_keywords": null,
              "url_link": null,
              "isscg": "OK",
              "scg": [
                {
                  "id": "6",
                  "catid": "7",
                  "name": "Super Glam Makeup",
                  "icon": "subcategory_72175e1d4207e8d26aa20a79041b9f0ad5894.jpeg",
                  "status": "1"
                },
                {
                  "id": "7",
                  "catid": "7",
                  "name": "Soft Glam Makeup",
                  "icon": "subcategory_67247594f19bbd554c5d15c3afb64ea6bde60.jpeg",
                  "status": "1"
                },
                {
                  "id": "8",
                  "catid": "7",
                  "name": "Polished Day Makeup",
                  "icon": "subcategory_315731_LyEMlGIQ-acy2pFS4CnheA.jpeg",
                  "status": "1"
                },
                {
                  "id": "9",
                  "catid": "7",
                  "name": "Day Makeup",
                  "icon": "subcategory_9312955092f46781dc-ghk-0714-day-to-night-3-mdn.jpeg",
                  "status": "1"
                }
              ],
              "prd": [
                {
                  "id": "4",
                  "cattegory_id": "7",
                  "sub_category_id": "6",
                  "name": "Party Lasher",
                  "description": "<p>Going out, out? Then dial up the volume to 11 with our Super Glam l...",
                  "price": "10.00",
                  "image": "a:1:{i:0;s:15:\"78666577_m.jpeg\";}",
                  "unique_id": "PRD-633095133",
                  "status": "1",
                  "sold": null,
                  "sorting_order": "0",
                  "recipe": null,
                  "unavailable_date": null,
                  "hours_time": "",
                  "minutes_time": "10",
                  "imgs": [
                    "78666577_m.jpeg"
                  ],
                  "preorder": "",
                  "isAvailable": "",
                  "contain": [
                    ""
                  ],
                  "longdesc": "<p>Going out, out? Then dial up the volume to 11 with our Super Glam look! Think intensely smokey eyes and full-drama lashes, plus expertly contoured and highlighted skin and full, glossy lips. Your professional makeup artist will create the perfect intense look that most flatters your complexion.</p>"
                }
              ],
              "count": 1,
              "filter": null
            }*/
            ]
          };
          this.appstngs = {};
          this.newcategory = {};
        }

        _createClass(HomepagePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.homepage = "Services";
            this.imgpath = _environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.imagepath;
            this.apptitle = _environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.appname;
            this.logeduser = this.localApi.getuser();
            this.gethomecat();
            console.log("========================"); //this.apiService.getdata('getappsetings', '').subscribe((resp: any) => {

            this.localApi.setappseting(this.respData.data);
            this.appstngs = this.respData.data;

            if (this.respData.data.opentime.toDayShop == 'CLOSE') {
              this.isShopclose = true;
              this.closetxt = this.respData.data.opentime;
            }

            if (this.respData.data.restrictions_label) {
              this.restrictns_lbl = this.respData.data.restrictions_label;
              this.restrictns_txt = this.respData.data.restrictions_text;
              this.isRestricktn = true;
            }

            var self = this;
            this.appVersion.getVersionNumber().then(function (data) {
              console.log("ok version");

              if (self.platform.is('android')) {
                if (this.respData.data.androidversion > data) {
                  self.appupdatesandroid();
                }
              } else {
                console.log("resp.data.iosversion", this.respData.data.iosversion);
                console.log("data", data);

                if (this.respData.data.iosversion > data) {
                  self.appupdatesios();
                }
              }
            }); //}, (err: any) => {
            //return false;
            //  });
          }
        }, {
          key: "pophomepalrt",
          value: function pophomepalrt() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var alert, _yield$alert$onDidDis, role;

              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        // header: 'Alert',
                        subHeader: this.appstngs.pop_head,
                        message: this.appstngs.pop_desc,
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                      _context.next = 7;
                      return alert.onDidDismiss();

                    case 7:
                      _yield$alert$onDidDis = _context.sent;
                      role = _yield$alert$onDidDis.role;

                    case 9:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "appupdatesandroid",
          value: function appupdatesandroid() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var _this = this;

              var alert;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertController.create({
                        header: 'Update Available!',
                        cssClass: 'my-custom-class',
                        message: 'Please update the app to get the latest features, offers and discounts.',
                        buttons: [{
                          text: 'Not Now',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {
                            console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: 'OK',
                          handler: function handler() {
                            var browser = _this.iab.create(_environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.playstore, '_system');
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
          key: "appupdatesios",
          value: function appupdatesios() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              var _this2 = this;

              var alert;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.alertController.create({
                        header: 'Update Available!',
                        cssClass: 'my-custom-class',
                        message: 'Please update the app to get the latest features, offers and discounts.',
                        buttons: [{
                          text: 'Not Now',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {
                            console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: 'OK',
                          handler: function handler() {
                            var browser = _this2.iab.create(_environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.appstore, '_system');
                          }
                        }]
                      });

                    case 2:
                      alert = _context3.sent;
                      _context3.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "noshopping",
          value: function noshopping() {
            this.isShopclose = false;

            if (this.restrictns_lbl) {
              this.isRestricktn = true;
            }
          }
        }, {
          key: "gomyacount",
          value: function gomyacount() {
            this.route.navigate(['/myaccount/any']);
          }
        }, {
          key: "openloginpanel",
          value: function openloginpanel() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              var _this3 = this;

              var modal;
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.modalController.create({
                        component: _loginpage_loginpage_page__WEBPACK_IMPORTED_MODULE_11__.LoginpagePage,
                        cssClass: 'my-custom-class',
                        backdropDismiss: true
                      });

                    case 2:
                      modal = _context4.sent;
                      modal.onDidDismiss().then(function (data) {
                        if (data.data) {
                          _this3.logeduser = _this3.localApi.getuser();

                          _this3.route.navigate(['/myaccount/any']);
                        }
                      });
                      _context4.next = 6;
                      return modal.present();

                    case 6:
                      return _context4.abrupt("return", _context4.sent);

                    case 7:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "alrestclose",
          value: function alrestclose() {
            this.isRestricktn = false;
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this4 = this;

            this.logeduser = this.localApi.getuser();
            this.mycart = this.cart.getcart();
            console.log("this.cart.getcart()", this.cart.getcart());
            this.carttotal = this.cart.getTotalCart();
            this.cartcount = this.mycart.length;
            this.getappsetng = this.localApi.getappseting();
            this.localApi.removedeltime();
            var views = localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.storage_prefix + 'bktohome');

            if (views) {
              this.gethomecat();
            }

            this.basic.getObservable().subscribe(function (data) {
              _this4.totlaofcart();
            });
          }
        }, {
          key: "viewsearpg",
          value: function viewsearpg() {
            this.route.navigate(['/itemsearch']);
          }
        }, {
          key: "totlaofcart",
          value: function totlaofcart() {
            this.mycart = this.cart.getcart();
            this.carttotal = this.cart.getTotalCart();
            this.cartcount = this.mycart.length;
          }
        }, {
          key: "gethomecat",
          value: function gethomecat() {
            var _this5 = this;

            localStorage.removeItem(_environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.storage_prefix + "bktohome");
            this.totlaofcart();
            this.basic.presentLoading(); //this.apiService.getdata('gethomecategory', '').subscribe((resp: any) => {

            this.category = this.respDataCategory.data;
            console.log("resp.data", this.respDataCategory.data);

            for (var i = 0; i < this.category.length; i++) {
              var prd = this.category[i].prd;

              for (var j = 0; j < prd.length; j++) {
                var single = prd[j];
                var qty = this.cart.getSingleQty(single.id);
                this.category[i].prd[j].qty = qty;
                this.category[i].prd[j].crtbtn = 'Select';

                if (this.category[i].prd[j].hours_time) {
                  this.category[i].prd[j].corner_text = this.category[i].prd[j].hours_time + ' Hour';
                }

                if (this.category[i].prd[j].minutes_time) {
                  this.category[i].prd[j].corner_text = this.category[i].prd[j].minutes_time + ' Minutes';
                }

                if (this.category[i].prd[j].hours_time && this.category[i].prd[j].minutes_time) {
                  this.category[i].prd[j].corner_text = this.category[i].prd[j].hours_time + ' Hour ' + this.category[i].prd[j].minutes_time + ' Minutes';
                }
              }

              if (i === 0) {
                this.segmentChanged(this.category[i].id, '0');
              }
            }

            setTimeout(function () {
              _this5.sesinlefct = true;

              if (_this5.basic.isLoading) {
                _this5.basic.dismissloader();
              }
            }, 5000);
            /*}, (err: any) => {
              this.basic.dismissloader();
            return false;
            });*/
            //this.apiService.postdata('getbanner', this.postdata).subscribe((resp: any) => {

            this.banners = [];
            /*}, (err: any) => {
              return false;
            });*/
          }
        }, {
          key: "segmentChanged",
          value: function segmentChanged(id, ii) {
            for (var i = 0; i < this.category.length; i++) {
              if (this.category[i].id == id) {
                if (ii == 0) {
                  console.log("0", ii);
                  this.category[i].segstyle = 'segment-button-checked';
                } else {
                  console.log("0", ii);
                  this.category[0].segstyle = '';
                }

                var prd = this.category[i].prd;

                for (var j = 0; j < prd.length; j++) {
                  var single = prd[j];
                  var qty = this.cart.getSingleQty(single.id);
                  this.category[i].prd[j].qty = qty;
                  this.category[i].prd[j].crtbtn = 'Select';

                  if (this.category[i].prd[j].hours_time) {
                    this.category[i].prd[j].corner_text = this.category[i].prd[j].hours_time + ' Hour';
                  }

                  if (this.category[i].prd[j].minutes_time) {
                    this.category[i].prd[j].corner_text = this.category[i].prd[j].minutes_time + ' Minutes';
                  }

                  if (this.category[i].prd[j].hours_time && this.category[i].prd[j].minutes_time) {
                    this.category[i].prd[j].corner_text = this.category[i].prd[j].hours_time + ' Hour ' + this.category[i].prd[j].minutes_time + ' Minutes';
                  }
                }

                this.newcategory = this.category[i];
              }
            }

            console.log("this.newcategory", this.newcategory);
            console.log("newcategory.isscg", this.newcategory.isscg);
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            var _this6 = this;

            setTimeout(function () {
              _this6.gethomecat();

              event.target.complete();
            }, 2000);
          }
        }, {
          key: "addtoCart",
          value: function addtoCart(itm, itmid) {
            console.log("itm.id", itm.id);
            console.log("itmid", itmid);
            jquery__WEBPACK_IMPORTED_MODULE_6__('#addcartbtn_' + itmid + '_' + itm.id).hide();
            jquery__WEBPACK_IMPORTED_MODULE_6__('#qtycartbtn_' + itmid + '_' + itm.id).show();
            jquery__WEBPACK_IMPORTED_MODULE_6__('#itmqty_' + itmid + '_' + itm.id).html('1');
            this.cart.addcart(itm, '', '', '');
            this.totlaofcart();
          }
        }, {
          key: "minusqty",
          value: function minusqty(itm, itmid) {
            this.nowqty = '';
            this.nowval = '';
            this.nowqty = jquery__WEBPACK_IMPORTED_MODULE_6__('#itmqty_' + itmid + '_' + itm.id).html();

            if (this.nowqty == 1) {
              jquery__WEBPACK_IMPORTED_MODULE_6__('#addcartbtn_' + itmid + '_' + itm.id).show();
              jquery__WEBPACK_IMPORTED_MODULE_6__('#qtycartbtn_' + itmid + '_' + itm.id).hide();
            }

            this.nowval = parseInt(this.nowqty) - 1;
            jquery__WEBPACK_IMPORTED_MODULE_6__('#itmqty_' + itmid + '_' + itm.id).html(this.nowval);
            this.cart.minusqntyfrmprod(itm);
            this.totlaofcart();
          }
        }, {
          key: "addqty",
          value: function addqty(itm, itmid) {
            this.nowqty = '';
            this.nowval = '';
            this.nowqty = jquery__WEBPACK_IMPORTED_MODULE_6__('#itmqty_' + itmid + '_' + itm.id).html();
            this.nowval = parseInt(this.nowqty) + 1;
            jquery__WEBPACK_IMPORTED_MODULE_6__('#itmqty_' + itmid + '_' + itm.id).html(this.nowval);
            jquery__WEBPACK_IMPORTED_MODULE_6__('#itmqty_' + itmid + '_' + itm.id).delay(1500).animate({
              text: this.nowval
            }, 5000);
            this.cart.plusqnty(itm);
            this.totlaofcart();
          }
        }, {
          key: "openDetailsItem",
          value: function openDetailsItem(itm) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
              var modal;
              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.modalController.create({
                        component: _itemdetails_itemdetails_page__WEBPACK_IMPORTED_MODULE_10__.ItemdetailsPage,
                        cssClass: 'my-custom-class',
                        componentProps: {
                          'item': itm
                        },
                        backdropDismiss: true
                      });

                    case 2:
                      modal = _context5.sent;
                      _context5.next = 5;
                      return modal.present();

                    case 5:
                      return _context5.abrupt("return", _context5.sent);

                    case 6:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "seeall",
          value: function seeall(item) {
            if (item.isscg) {
              this.route.navigate(['/subcategory/' + item.id + '/' + item.name]);
            } else {
              this.route.navigate(['/products/' + item.id + '/0/' + item.name]);
            }
          }
        }, {
          key: "gocategory",
          value: function gocategory(item) {
            if (item.type) {
              if (item.type == 'category') {
                this.route.navigate(['/products/' + item.category.id + '/0/' + item.category.name]);
              } else if (item.type == 'contact') {
                this.route.navigate(['/contactus']);
              } else {
                this.route.navigate(['/offers/noapply']);
              }
            }
          }
        }, {
          key: "viewmycart",
          value: function viewmycart() {
            this.route.navigate(['/booknow']);
          }
        }, {
          key: "openAlergyInfo",
          value: function openAlergyInfo(val) {
            if (val.allergy_info) {
              this.basic.alert('Allergy Info:', val.allergy_info);
            }
          }
        }, {
          key: "gonextsbg",
          value: function gonextsbg(sbct, cat) {
            this.route.navigate(['/products/' + cat.id + '/' + sbct.id + '/' + sbct.name]);
          }
        }]);

        return HomepagePage;
      }();

      _HomepagePage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.MenuController
        }, {
          type: src_Providers_Services_api_service__WEBPACK_IMPORTED_MODULE_5__.ApiService
        }, {
          type: src_Providers_Basic_basic_api_service__WEBPACK_IMPORTED_MODULE_2__.BasicApiService
        }, {
          type: src_Providers_Local_local_api_service__WEBPACK_IMPORTED_MODULE_4__.LocalApiService
        }, {
          type: src_Providers_Cart_cart_api_service__WEBPACK_IMPORTED_MODULE_3__.CartApiService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.Router
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.AlertController
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_15__.Location
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ModalController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.NavController
        }, {
          type: _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_7__.AppVersion
        }, {
          type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__.InAppBrowser
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.Platform
        }];
      };

      _HomepagePage = (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_16__.Component)({
        selector: 'app-homepage',
        template: _raw_loader_homepage_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_homepage_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _HomepagePage);
      /***/
    },

    /***/
    93568:
    /*!**********************************************!*\
      !*** ./src/app/homepage3/homepage.page.scss ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".classone {\n  text-align: center;\n  padding: 10px 5px;\n}\n.classone p {\n  padding-bottom: 10px;\n}\n.classtwo {\n  padding: 10px 5px;\n}\n.classtwo p {\n  padding-bottom: 5px;\n  font-size: 12px;\n  text-align: justify;\n}\n.classtwo img {\n  width: 100%;\n  height: 100%;\n}\nh2 {\n  color: #1B74E4;\n  font-size: 20px;\n  padding-bottom: 10px;\n}\nion-button {\n  height: 2em;\n  background: #5cc7f1;\n  border-radius: 30px;\n  text-transform: uppercase;\n  color: white;\n  --border-style:none;\n}\n.mostpopular {\n  width: 100%;\n  margin: 20px auto 10px auto;\n  font-size: 13px;\n  font-weight: bold;\n}\n.mostpopular span {\n  float: right;\n  font-weight: normal;\n  color: #1B74E4;\n}\n.homebanner {\n  width: 100%;\n  height: auto;\n}\n.slidediv {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-column-gap: 10px;\n}\n.parentslid {\n  display: grid;\n  position: relative;\n  background: #d8d6d6;\n  padding: 7px;\n  border-radius: 10%;\n}\n.parentslid .outofstkstamp {\n  width: 100%;\n  height: auto;\n  text-align: center;\n  position: absolute;\n  z-index: 9;\n  top: 82px;\n  left: 0;\n  opacity: 0.8;\n}\n.parentslid .outofstkstamp img {\n  width: 79%;\n}\n.soldoutbtn {\n  width: 90%;\n  background-color: #1B74E4;\n  font-size: 10px;\n  text-transform: uppercase;\n  color: #FFF;\n  text-align: center;\n  margin: 0 auto 5px;\n  line-height: 24px;\n  position: absolute;\n  padding-right: 10px;\n  left: 5%;\n  bottom: 5px;\n  font-weight: bold;\n}\n.thumbsec {\n  width: 100%;\n  height: 100%;\n  background-color: #fff;\n  border-radius: 0 0 3px 3px;\n  text-align: left;\n  box-shadow: 0px 3px 3px 0px #e2e2e2;\n  padding-bottom: 40px;\n}\n.thumbsec .thubimg {\n  width: 100%;\n  height: 120px;\n  overflow: hidden;\n  position: relative;\n}\n.thumbsec .thubimg img {\n  width: 100%;\n  min-height: 100%;\n  max-height: -moz-fit-content;\n  max-height: fit-content;\n}\n.thumbsec .thubimg .cornertxt {\n  width: 100px;\n  height: auto;\n  letter-spacing: 1px;\n  text-transform: capitalize;\n  background: #9fbd08;\n  color: #000;\n  padding: 3px 10px;\n  margin: 0 0 10px 0;\n  line-height: 13px;\n  position: absolute;\n  top: 54px;\n  left: -15px;\n  transform-origin: 0 0;\n  transform: rotate(315deg);\n  z-index: 99;\n  font-size: 8px;\n  text-align: center;\n  text-shadow: 0 1px 1px #292929;\n  box-shadow: 1px 1px 3px #404040;\n}\n.thumbsec .thubimg .hotdeal {\n  background: #1B74E4;\n}\n.thumbsec .thubimg .bestdeal {\n  background: #f7b312;\n}\n.thumbsec .temname {\n  width: 100%;\n  height: auto;\n  padding: 5px 7px 0;\n  font-size: 13px;\n}\n.thumbsec .temname img {\n  height: 10px;\n}\n.thumbsec .temdesc {\n  width: 100%;\n  height: auto;\n  padding: 2px 7px 7px;\n  font-size: 10px;\n  color: #737373;\n}\n.clear {\n  clear: both;\n}\n.displaynon {\n  display: none;\n}\n.displayblk {\n  display: block;\n}\n.priceandvegicn {\n  width: 100%;\n  height: auto;\n  position: relative;\n  padding: 0 7px;\n  font-size: 18px;\n  font-weight: bold;\n}\n.priceandvegicn span {\n  font-size: 10px;\n  font-weight: normal;\n}\n.priceandvegicn img {\n  position: absolute;\n  right: 10px;\n  height: 14px;\n  top: 12px;\n}\n.conainfood {\n  width: 90%;\n  height: auto;\n  margin: 8px auto 0;\n}\n.conainfood img {\n  width: 20px;\n  margin-right: 3px;\n}\n.my-custom-class {\n  background: rgba(0, 0, 0, 0.5) !important;\n  padding: 20% 10% !important;\n}\n.chopclosenow {\n  width: 100%;\n  height: 100%;\n  padding: 0 20px;\n  position: fixed;\n  z-index: 999;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: table;\n  text-align: center;\n  color: #fff;\n}\n.chopclosenow span {\n  display: table-cell;\n  vertical-align: middle;\n}\n.chopclosenow .okbtnforrevoew {\n  width: 100%;\n  height: auto;\n  text-align: center;\n}\n.chopclosenow .okbtnforrevoew span {\n  background-color: #6780c5;\n  display: inline-block;\n  padding: 6px 40px;\n  text-transform: uppercase;\n  border-radius: 3px;\n}\n.highdemandbanner {\n  width: 100%;\n  height: auto;\n  padding: 10px 10px;\n  background: #da2a2c;\n  font-size: 11px;\n  font-weight: bold;\n  color: #fff;\n  position: relative;\n  padding-left: 50px;\n}\n.highdemandbanner ion-icon {\n  position: absolute;\n  left: 12px;\n  color: #fff;\n  font-size: 24px;\n}\n.blinking {\n  animation: blinkingText 1s infinite;\n}\n@keyframes blinkingText {\n  0% {\n    color: #dace2a;\n  }\n  /*49%{  color: #2d3dff; }*/\n  50% {\n    color: #fff;\n  }\n  /*99%{  color:#fb01ff;  }*/\n  100% {\n    color: #dace2a;\n  }\n}\n.searchicnhmheader {\n  margin: 0 4px 0 10px;\n}\n.topdata {\n  width: 100%;\n  padding: 10px;\n}\n.topdata .heading {\n  float: left;\n  width: 80%;\n  position: relative;\n  top: 2px;\n}\n.topdata .heading .spanone {\n  font-size: 18px;\n}\n.topdata .heading .spantwo {\n  font-size: 14px;\n}\n.topdata .logo {\n  text-align: right;\n}\n.topdata .logo img {\n  height: 45px;\n  background: #c1c0c0;\n  padding: 6px;\n  position: relative;\n  border-radius: 50%;\n}\n.productlists {\n  width: 100%;\n  height: auto;\n  position: relative;\n  background: #fff;\n  padding: 10px;\n  border-radius: 10px;\n  margin-top: 30px;\n  float: left;\n  margin-bottom: 10px;\n}\n.productlists .outofstkstamp {\n  width: 100%;\n  height: auto;\n  text-align: center;\n  position: absolute;\n  z-index: 9;\n  top: 24px;\n  left: 0;\n  opacity: 0.8;\n}\n.productlists .outofstkstamp img {\n  width: 145px;\n}\n.productlists .itemimg {\n  width: 100%;\n  height: 100%;\n}\n.productlists .pro_img {\n  width: 100%;\n  overflow: hidden;\n}\n.productlists .prdimg {\n  width: 100%;\n  height: auto;\n  position: relative;\n  overflow: hidden;\n}\n.productlists .prdimg img {\n  width: 100%;\n}\n.productlists .prdimg .cornertxt {\n  width: 100px;\n  height: auto;\n  letter-spacing: 1px;\n  text-transform: capitalize;\n  background: #9fbd08;\n  color: #000;\n  padding: 3px 10px;\n  margin: 0 0 10px 0;\n  line-height: 13px;\n  position: absolute;\n  top: 54px;\n  left: -15px;\n  transform-origin: 0 0;\n  transform: rotate(315deg);\n  z-index: 99;\n  font-size: 8px;\n  text-align: center;\n  text-shadow: 0 1px 1px #292929;\n  box-shadow: 1px 1px 3px #404040;\n}\n.productlists .prdimg .hotdeal {\n  background: #F00;\n}\n.productlists .prdimg .bestdeal {\n  background: #f7b312;\n}\n.productlists .cardbtn {\n  width: 30%;\n  background-color: #353535;\n  font-size: 11px;\n  text-transform: uppercase;\n  color: #FFF;\n  text-align: right;\n  margin: 0 auto 0;\n  line-height: 24px;\n  position: relative;\n  padding-right: 8px;\n  float: right;\n  border-radius: 8px;\n}\n.productlists .cardbtn ion-icon {\n  background-color: #1B74E4;\n  position: absolute;\n  font-size: 14px;\n  left: 0;\n  top: 0;\n  height: 24px;\n  padding: 0 7px;\n  border-top-left-radius: 8px;\n  border-bottom-left-radius: 8px;\n}\n.productlists .soldoutbtn {\n  width: 100%;\n  background-color: #353535;\n  font-size: 10px;\n  text-transform: uppercase;\n  color: #FFF;\n  text-align: center;\n  margin: 0 auto 0;\n  line-height: 24px;\n  position: relative;\n  padding-right: 4px;\n  font-weight: bold;\n}\n.productlists .soldoutbtn ion-icon {\n  background-color: #d71818;\n  position: absolute;\n  font-size: 12px;\n  left: 0;\n  top: 0;\n  height: 24px;\n  padding: 0 7px;\n}\n.productlists .cartbtn {\n  width: 100%;\n  background-color: #fff;\n  font-size: 14px;\n  text-transform: uppercase;\n  color: #000;\n  text-align: center;\n  margin: 0 auto 5px;\n  line-height: 24px;\n  position: relative;\n  margin-top: 5px;\n  display: none;\n}\n.productlists .cartbtn .minusbtn {\n  left: 0;\n  background-color: #353535;\n  position: absolute;\n  font-size: 20px;\n  top: 0;\n  height: 24px;\n  padding: 0 5px;\n  color: #FFF;\n  line-height: 30px;\n  border-radius: 3px;\n}\n.productlists .cartbtn .plusbtn {\n  right: 0;\n  background-color: #353535;\n  position: absolute;\n  font-size: 20px;\n  top: 0;\n  height: 24px;\n  padding: 0 5px;\n  color: #FFF;\n  line-height: 30px;\n  border-radius: 3px;\n}\n.productlists .itemcntnt {\n  width: 100%;\n  height: auto;\n}\n.productlists .itemcntnt img {\n  height: 21px;\n  margin-right: 6px;\n}\n.productlists .itemname {\n  width: 100%;\n  height: auto;\n  font-size: 14px;\n  font-weight: bold;\n  padding: 7px 0 0;\n  color: #1B74E4;\n}\n.productlists .itemname img {\n  height: 10px;\n}\n.productlists .itemdesc {\n  width: 100%;\n  height: auto;\n  font-size: 12px;\n  color: #353535;\n}\n.productlists .itemdesc p {\n  margin: 5px 0px;\n}\n.itemprice {\n  width: 70%;\n  height: auto;\n  font-size: 20px;\n  font-weight: bold;\n  float: left;\n}\n.itemprice span {\n  font-size: 12px;\n  font-weight: normal;\n}\n.pro_img {\n  width: 100%;\n  height: 110px;\n  overflow: hidden;\n  text-align: center;\n}\n.pro_img img {\n  height: 100%;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n}\n.claer {\n  clear: both;\n}\n.leftnameandother {\n  width: 70%;\n  height: 100%;\n  float: left;\n  padding-right: 15px;\n}\n.rightimgsnaothr {\n  width: 30%;\n  height: 100%;\n  float: left;\n  margin-top: -35px;\n}\n.categorylists {\n  width: 100%;\n  height: auto;\n  padding: 0;\n  position: relative;\n  background: #fff;\n  margin-bottom: 5px;\n  font-size: 12px;\n  text-transform: uppercase;\n  --padding-start: 3px;\n}\n.categorylists br {\n  content: \"A\" !important;\n  display: block !important;\n  margin-bottom: 3px !important;\n}\n.categorylists span {\n  font-size: 12px;\n  text-transform: none;\n  color: #828282;\n}\n.categorylists .catimg {\n  width: 60px;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 8px;\n  display: table;\n  /* vertical-align: middle; */\n  text-align: center;\n  /* margin-top: 12px; */\n  overflow: hidden;\n}\n.categorylists .catimg span {\n  display: table-cell;\n  vertical-align: middle;\n  text-align: center;\n  height: 100%;\n}\n.categorylists .catimg img {\n  width: 100%;\n  border: solid 1px #CCC;\n  border-radius: 3px;\n  vertical-align: middle;\n  display: table-cell;\n}\n.item-native {\n  padding: 0;\n  padding-left: 10px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWVwYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUFDSjtBQUFJO0VBQ0ksb0JBQUE7QUFFUjtBQUNBO0VBQ0ksaUJBQUE7QUFFSjtBQURJO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFHUjtBQURJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFHUjtBQUFBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQUdKO0FBR0E7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBQUo7QUFHQTtFQUNDLFdBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUFEO0FBQ0M7RUFDQyxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBQ0Y7QUFFQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0FBQ0Q7QUFDQTtFQUNDLGFBQUE7RUFDQyxxQ0FBQTtFQUVBLHFCQUFBO0FBQ0Y7QUFDQTtFQUVDLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0csWUFBQTtFQUNBLGtCQUFBO0FBQ0o7QUFBQztFQUNDLFdBQUE7RUFDRyxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7QUFFTDtBQURFO0VBQ0MsVUFBQTtBQUdIO0FBQ0E7RUFDRSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFFRjtBQUFBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQ0FBQTtFQUNBLG9CQUFBO0FBR0Q7QUFGQztFQUNDLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUlGO0FBSEU7RUFDQyxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUFBLHVCQUFBO0FBS0g7QUFIRTtFQUNDLFlBQUE7RUFDRyxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7QUFLTjtBQUhFO0VBQ1UsbUJBQUE7QUFLWjtBQUhRO0VBQ0ksbUJBQUE7QUFLWjtBQUZDO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFJRjtBQUhFO0VBQ0MsWUFBQTtBQUtIO0FBRkM7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFJRjtBQUFBO0VBQ0MsV0FBQTtBQUdEO0FBQUE7RUFDQyxhQUFBO0FBR0Q7QUFEQTtFQUNDLGNBQUE7QUFJRDtBQURBO0VBQ0MsV0FBQTtFQUNHLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFJSjtBQUhDO0VBQ0MsZUFBQTtFQUNBLG1CQUFBO0FBS0Y7QUFIQztFQUNDLGtCQUFBO0VBQ0csV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FBS0w7QUFGQTtFQUNDLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFLRDtBQUpDO0VBQ0MsV0FBQTtFQUNHLGlCQUFBO0FBTUw7QUFhQTtFQUNHLHlDQUFBO0VBQ0EsMkJBQUE7QUFWSDtBQWNBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFYRDtBQVlDO0VBQ0MsbUJBQUE7RUFDQSxzQkFBQTtBQVZGO0FBWUM7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBVkY7QUFXRTtFQUNDLHlCQUFBO0VBQ0cscUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFUTjtBQWVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFaRjtBQWFFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFYSjtBQWNBO0VBQ0UsbUNBQUE7QUFYRjtBQWFBO0VBQ0U7SUFBTSxjQUFBO0VBVE47RUFVQSwwQkFBQTtFQUNBO0lBQU0sV0FBQTtFQVBOO0VBUUEsMEJBQUE7RUFDQTtJQUFNLGNBQUE7RUFMTjtBQUNGO0FBT0E7RUFDRSxvQkFBQTtBQUxGO0FBUUE7RUFDQyxXQUFBO0VBQ0csYUFBQTtBQUxKO0FBTUM7RUFDQyxXQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQUpGO0FBS0U7RUFDQyxlQUFBO0FBSEg7QUFLRTtFQUNDLGVBQUE7QUFISDtBQU1DO0VBQ0MsaUJBQUE7QUFKRjtBQUtFO0VBQ0MsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFISDtBQVlBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFUSjtBQVVJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtBQVJSO0FBU1E7RUFDSSxZQUFBO0FBUFo7QUFXSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBVFI7QUFXSTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQVRSO0FBV0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFUUjtBQVVRO0VBQ0ksV0FBQTtBQVJaO0FBVVE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0FBUlo7QUFVUTtFQUNJLGdCQUFBO0FBUlo7QUFVUTtFQUNJLG1CQUFBO0FBUlo7QUFXSTtFQUNJLFVBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBVFI7QUFVUTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7QUFSWjtBQVlJO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQVZSO0FBV1E7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFUWjtBQWFJO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUFYUjtBQVlRO0VBQ0ksT0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFWWjtBQVlRO0VBQ0ksUUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFWWjtBQWFJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFYUjtBQVlRO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0FBVlo7QUFhSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDTixjQUFBO0FBWEY7QUFZUTtFQUNJLFlBQUE7QUFWWjtBQWFJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ04sY0FBQTtBQVhGO0FBYVE7RUFDSSxlQUFBO0FBWFo7QUFlQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQVpKO0FBYUk7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7QUFYUjtBQWVBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBWko7QUFhSTtFQUNJLFlBQUE7RUFFQSwyQkFBQTtFQUFBLHNCQUFBO0FBWlI7QUFlQTtFQUNJLFdBQUE7QUFaSjtBQWNBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFYSjtBQWFBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFWSjtBQWNBO0VBQ0MsV0FBQTtFQUNHLFlBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7QUFYSjtBQVlDO0VBQ0MsdUJBQUE7RUFDRSx5QkFBQTtFQUNBLDZCQUFBO0FBVko7QUFhQztFQUNDLGVBQUE7RUFDRyxvQkFBQTtFQUNBLGNBQUE7QUFYTDtBQWFDO0VBQ0MsV0FBQTtFQUNHLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBWEw7QUFZSztFQUNDLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFWTjtBQVlLO0VBQ0YsV0FBQTtFQUNHLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBVk47QUFlQTtFQUNDLFVBQUE7RUFDQSw2QkFBQTtBQVpEIiwiZmlsZSI6ImhvbWVwYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbGFzc29uZXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweCA1cHg7XG4gICAgcHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgfVxufVxuLmNsYXNzdHdve1xuICAgIHBhZGRpbmc6IDEwcHggNXB4O1xuICAgIHB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICB9XG4gICAgaW1ne1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbn1cbmgye1xuICAgIGNvbG9yOiAjMUI3NEU0O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi8vIGlvbi1pY29ue1xuLy8gICAgIGZvbnQtc2l6ZTogNTBweDtcbi8vICAgICBjb2xvcjogI2ZmZjtcbi8vIH1cbmlvbi1idXR0b257XG4gICAgaGVpZ2h0OiAyZW07XG4gICAgYmFja2dyb3VuZDogIzVjYzdmMTtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIC0tYm9yZGVyLXN0eWxlOm5vbmU7XG59XG5cbi5tb3N0cG9wdWxhcntcblx0d2lkdGg6IDEwMCU7XG5cdG1hcmdpbjogMjBweCBhdXRvIDEwcHggYXV0bztcblx0Zm9udC1zaXplOiAxM3B4O1xuXHRmb250LXdlaWdodDogYm9sZDtcblx0c3Bhbntcblx0XHRmbG9hdDogcmlnaHQ7XG5cdFx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcblx0XHRjb2xvcjogIzFCNzRFNDtcblx0fVxufVxuLmhvbWViYW5uZXJ7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IGF1dG87XG59XG4uc2xpZGVkaXZ7XG5cdGRpc3BsYXk6Z3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgLy8gZ3JpZC10ZW1wYWx0ZS1yb3dzOiAxZnI7XG4gIGdyaWQtY29sdW1uLWdhcDogMTBweDtcbn1cbi5wYXJlbnRzbGlke1xuXHRcblx0ZGlzcGxheTogZ3JpZDtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRiYWNrZ3JvdW5kOiAjZDhkNmQ2O1xuICAgIHBhZGRpbmc6IDdweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XG5cdC5vdXRvZnN0a3N0YW1we1xuXHRcdHdpZHRoOiAxMDAlO1xuXHQgICAgaGVpZ2h0OiBhdXRvO1xuXHQgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXHQgICAgcG9zaXRpb246IGFic29sdXRlO1xuXHQgICAgei1pbmRleDogOTtcblx0ICAgIHRvcDogODJweDtcblx0ICAgIGxlZnQ6IDA7XG5cdCAgICBvcGFjaXR5OiAwLjg7XG5cdFx0aW1ne1xuXHRcdFx0d2lkdGg6IDc5JTtcblx0XHR9XG5cdH1cbn1cbi5zb2xkb3V0YnRue1xuICB3aWR0aDogOTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUI3NEU0O1xuICBmb250LXNpemU6IDEwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjRkZGO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMCBhdXRvIDVweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgbGVmdDogNSU7XG4gIGJvdHRvbTogNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi50aHVtYnNlY3tcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMTAwJTtcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblx0Ym9yZGVyLXJhZGl1czogMCAwIDNweCAzcHg7XG5cdHRleHQtYWxpZ246IGxlZnQ7XG5cdGJveC1zaGFkb3c6IDBweCAzcHggM3B4IDBweCAjZTJlMmUyO1xuXHRwYWRkaW5nLWJvdHRvbTogNDBweDtcblx0LnRodWJpbWd7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0aGVpZ2h0OiAxMjBweDtcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRpbWd7XG5cdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdG1pbi1oZWlnaHQ6IDEwMCU7XG5cdFx0XHRtYXgtaGVpZ2h0OiBmaXQtY29udGVudDtcblx0XHR9XG5cdFx0LmNvcm5lcnR4dHtcblx0XHRcdHdpZHRoOiAxMDBweDtcblx0XHQgICAgaGVpZ2h0OiBhdXRvO1xuXHRcdCAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuXHRcdCAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcblx0XHQgICAgYmFja2dyb3VuZDogIzlmYmQwODtcblx0XHQgICAgY29sb3I6ICMwMDA7XG5cdFx0ICAgIHBhZGRpbmc6IDNweCAxMHB4O1xuXHRcdCAgICBtYXJnaW46IDAgMCAxMHB4IDA7XG5cdFx0ICAgIGxpbmUtaGVpZ2h0OiAxM3B4O1xuXHRcdCAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0ICAgIHRvcDogNTRweDtcblx0XHQgICAgbGVmdDogLTE1cHg7XG5cdFx0ICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcblx0XHQgICAgdHJhbnNmb3JtOiByb3RhdGUoMzE1ZGVnKTtcblx0XHQgICAgei1pbmRleDogOTk7XG5cdFx0ICAgIGZvbnQtc2l6ZTogOHB4O1xuXHRcdCAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0ICAgIHRleHQtc2hhZG93OiAwIDFweCAxcHggIzI5MjkyOTtcblx0XHQgICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggIzQwNDA0MDtcblx0XHR9XG5cdFx0LmhvdGRlYWx7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMUI3NEU0O1xuICAgICAgICB9XG4gICAgICAgIC5iZXN0ZGVhbHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmN2IzMTI7XG4gICAgICAgIH1cblx0fVxuXHQudGVtbmFtZXtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRoZWlnaHQ6IGF1dG87XG5cdFx0cGFkZGluZzogNXB4IDdweCAwO1xuXHRcdGZvbnQtc2l6ZTogMTNweDtcblx0XHRpbWd7XG5cdFx0XHRoZWlnaHQ6IDEwcHg7XG5cdFx0fVxuXHR9XG5cdC50ZW1kZXNje1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdGhlaWdodDogYXV0bztcblx0XHRwYWRkaW5nOiAycHggN3B4IDdweDtcblx0XHRmb250LXNpemU6IDEwcHg7XG5cdFx0Y29sb3I6ICM3MzczNzM7XG5cdFx0XG5cdH1cbn1cbi5jbGVhcntcblx0Y2xlYXI6IGJvdGg7XG59XG5cbi5kaXNwbGF5bm9ue1xuXHRkaXNwbGF5OiBub25lO1xufVxuLmRpc3BsYXlibGt7XG5cdGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ucHJpY2VhbmR2ZWdpY257XG5cdHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogMCA3cHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRzcGFue1xuXHRcdGZvbnQtc2l6ZTogMTBweDtcblx0XHRmb250LXdlaWdodDogbm9ybWFsO1xuXHR9XG5cdGltZ3tcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdCAgICByaWdodDogMTBweDtcblx0ICAgIGhlaWdodDogMTRweDtcblx0ICAgIHRvcDogMTJweDtcblx0fVxufVxuLmNvbmFpbmZvb2R7XG5cdHdpZHRoOiA5MCU7XG5cdGhlaWdodDogYXV0bztcblx0bWFyZ2luOiA4cHggYXV0byAwO1xuXHRpbWd7XG5cdFx0d2lkdGg6IDIwcHg7XG4gICAgXHRtYXJnaW4tcmlnaHQ6IDNweDtcblx0fVxufVxuLy8gLmNhcnRjb3VudHtcbi8vIFx0cG9zaXRpb246IGFic29sdXRlO1xuLy8gICAgIHdpZHRoOiAyMHB4O1xuLy8gICAgIGhlaWdodDogMjBweDtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0MTgxO1xuLy8gICAgIGZvbnQtc2l6ZTogOXB4O1xuLy8gICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4vLyAgICAgei1pbmRleDogOTtcbi8vICAgICB0b3A6IC01cHg7XG4vLyAgICAgcmlnaHQ6IDE1cHg7XG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuLy8gICAgIGNvbG9yOiAjRkZGO1xuLy8gICAgIGJveC1zaGFkb3c6IDBweCAxcHggMnB4ICNDQ0M7XG4vLyAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyB9XG4ubXktY3VzdG9tLWNsYXNzIHtcbiAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KSAhaW1wb3J0YW50O1xuICAgcGFkZGluZzogMjAlIDEwJSAgIWltcG9ydGFudDtcbn1cblxuXG4uY2hvcGNsb3Nlbm93e1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiAxMDAlO1xuXHRwYWRkaW5nOiAwIDIwcHg7XG5cdHBvc2l0aW9uOiBmaXhlZDtcblx0ei1pbmRleDogOTk5O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7XG5cdGRpc3BsYXk6IHRhYmxlO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGNvbG9yOiAjZmZmO1xuXHRzcGFue1xuXHRcdGRpc3BsYXk6IHRhYmxlLWNlbGw7XG5cdFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcblx0fVxuXHQub2tidG5mb3JyZXZvZXd7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0aGVpZ2h0OiBhdXRvO1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRzcGFue1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogIzY3ODBjNTtcblx0XHQgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdCAgICBwYWRkaW5nOiA2cHggNDBweDtcblx0XHQgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHQgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuXHRcdH1cblx0fVxufVxuXG5cbi5oaWdoZGVtYW5kYmFubmVye1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNkYTJhMmM7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjZmZmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogNTBweDtcbiAgaW9uLWljb257XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDEycHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICB9XG59XG4uYmxpbmtpbmd7XG4gIGFuaW1hdGlvbjpibGlua2luZ1RleHQgMXMgaW5maW5pdGU7XG59XG5Aa2V5ZnJhbWVzIGJsaW5raW5nVGV4dHtcbiAgMCV7ICAgY29sb3I6ICNkYWNlMmE7ICB9XG4gIC8qNDkleyAgY29sb3I6ICMyZDNkZmY7IH0qL1xuICA1MCV7ICBjb2xvcjogI2ZmZjsgfVxuICAvKjk5JXsgIGNvbG9yOiNmYjAxZmY7ICB9Ki9cbiAgMTAwJXsgY29sb3I6ICNkYWNlMmE7ICB9XG59XG5cbi5zZWFyY2hpY25obWhlYWRlcntcbiAgbWFyZ2luOiAwIDRweCAwIDEwcHg7XG59XG5cbi50b3BkYXRhe1xuXHR3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuXHQuaGVhZGluZ3tcblx0XHRmbG9hdDogbGVmdDtcblx0XHR3aWR0aDogODAlO1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHR0b3A6IDJweDtcblx0XHQuc3Bhbm9uZXtcblx0XHRcdGZvbnQtc2l6ZTogMThweDtcblx0XHR9XG5cdFx0LnNwYW50d297XG5cdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0fVxuXHR9XG5cdC5sb2dve1xuXHRcdHRleHQtYWxpZ246IHJpZ2h0O1xuXHRcdGltZ3tcblx0XHRcdGhlaWdodDogNDVweDtcblx0XHRcdGJhY2tncm91bmQ6ICNjMWMwYzA7XG5cdFx0XHRwYWRkaW5nOiA2cHg7XG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0fVxuXHR9XG5cbn1cblxuXG4vL3Byb2R1Y3Qgc2Nzc1xuXG4ucHJvZHVjdGxpc3Rze1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIC5vdXRvZnN0a3N0YW1we1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgei1pbmRleDogOTtcbiAgICAgICAgdG9wOiAyNHB4O1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICAgIGltZ3tcbiAgICAgICAgICAgIHdpZHRoOiAxNDVweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5pdGVtaW1ne1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbiAgICAucHJvX2ltZ3tcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxuICAgIC5wcmRpbWd7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgaW1ne1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgLmNvcm5lcnR4dHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM5ZmJkMDg7XG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDNweCAxMHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwIDAgMTBweCAwO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEzcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDU0cHg7XG4gICAgICAgICAgICBsZWZ0OiAtMTVweDtcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDMxNWRlZyk7XG4gICAgICAgICAgICB6LWluZGV4OiA5OTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMXB4IDFweCAjMjkyOTI5O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggIzQwNDA0MDtcbiAgICAgICAgfVxuICAgICAgICAuaG90ZGVhbHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGMDA7XG4gICAgICAgIH1cbiAgICAgICAgLmJlc3RkZWFse1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y3YjMxMjtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuY2FyZGJ0bntcbiAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM1MzUzNTtcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBjb2xvcjogI0ZGRjtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvIDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFCNzRFNDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDdweDtcbiAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDhweDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDhweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5zb2xkb3V0YnRue1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM1MzUzNTtcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBjb2xvcjogI0ZGRjtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW46IDAgYXV0byAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBpb24taWNvbntcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkNzE4MTg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMCA3cHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuY2FydGJ0bntcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG8gNXB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIC5taW51c2J0bntcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzUzNTM1O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMCA1cHg7XG4gICAgICAgICAgICBjb2xvcjogI0ZGRjtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICB9XG4gICAgICAgIC5wbHVzYnRue1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzUzNTM1O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMCA1cHg7XG4gICAgICAgICAgICBjb2xvcjogI0ZGRjtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5pdGVtY250bnR7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIGltZ3tcbiAgICAgICAgICAgIGhlaWdodDogMjFweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNnB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5pdGVtbmFtZXtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgcGFkZGluZzogN3B4IDAgMDtcblx0XHRjb2xvcjogIzFCNzRFNDtcbiAgICAgICAgaW1ne1xuICAgICAgICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5pdGVtZGVzY3tcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuXHRcdGNvbG9yOiAjMzUzNTM1O1xuICAgICAgICAvLyBwYWRkaW5nOiA3cHggMDtcbiAgICAgICAgcHtcbiAgICAgICAgICAgIG1hcmdpbjogNXB4IDBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cbi5pdGVtcHJpY2V7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHNwYW57XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICB9XG59XG5cbi5wcm9faW1ne1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTEwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaW1ne1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIC8vIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICAgIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgfVxufVxuLmNsYWVye1xuICAgIGNsZWFyOiBib3RoO1xufVxuLmxlZnRuYW1lYW5kb3RoZXJ7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cbi5yaWdodGltZ3NuYW90aHJ7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luLXRvcDogLTM1cHg7XG59XG5cbi8vc3ViY2F0ZWdvcnlcbi5jYXRlZ29yeWxpc3Rze1xuXHR3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzogMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAzcHg7XG5cdGJye1xuXHRcdGNvbnRlbnQ6IFwiQVwiICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAzcHggIWltcG9ydGFudDtcblx0fVxuXHRcblx0c3Bhbntcblx0XHRmb250LXNpemU6IDEycHg7XG5cdCAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcblx0ICAgIGNvbG9yOiAjODI4MjgyO1xuXHR9XG5cdC5jYXRpbWd7XG5cdFx0d2lkdGg6IDYwcHg7XG5cdCAgICBoZWlnaHQ6IDEwMCU7XG5cdCAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cdCAgICB0b3A6IDA7XG5cdCAgICBsZWZ0OiA4cHg7XG5cdCAgICBkaXNwbGF5OiB0YWJsZTtcblx0ICAgIC8qIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7ICovXG5cdCAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdCAgICAvKiBtYXJnaW4tdG9wOiAxMnB4OyAqL1xuXHQgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblx0ICAgIHNwYW57XG5cdCAgICBcdGRpc3BsYXk6IHRhYmxlLWNlbGw7XG5cdFx0ICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cdFx0ICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHQgICAgaGVpZ2h0OiAxMDAlO1xuXHQgICAgfVxuXHQgICAgaW1ne1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0ICAgIGJvcmRlcjogc29saWQgMXB4ICNDQ0M7XG5cdFx0ICAgIGJvcmRlci1yYWRpdXM6IDNweDtcblx0XHQgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcblx0XHQgICAgZGlzcGxheTogdGFibGUtY2VsbDtcblx0XHR9XG5cdH1cbn1cblxuLml0ZW0tbmF0aXZle1xuXHRwYWRkaW5nOiAwO1xuXHRwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    86988:
    /*!************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/homepage3/homepage.page.html ***!
      \************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{apptitle}}</ion-title>\n    <ion-menu-button slot=\"start\"></ion-menu-button>\n\t<ion-buttons slot=\"end\" (click)='viewmycart()'>\n\n\t\n\t</ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<div class=\"topdata\" *ngIf='!logeduser' (click)='openloginpanel()'>\n\t\t\n\t</div>\n\t<div class=\"topdata\" *ngIf='logeduser' (click)='gomyacount()'>\n\t\t<div class=\"heading\"><span class=\"spanone\">Hello,</span> <b>{{logeduser.name}}</b><br><span class=\"spantwo\">Welcome</span></div>\n\t\t<div class=\"logo\"><img src=\"../../assets/icon/social/address.png\"></div>\n\t</div>\n  \t<!--<div class=\"homebanner\">\n\t\t<ion-slides pager=\"true\" [options]=\"slideOpts\">\n\t\t\t<ion-slide *ngFor=\"let bnr of banners\" (click)='gocategory(bnr)' style=\"padding-left: 10px;\">\n\t\t\t\t<img src=\"{{imgpath}}banner/{{bnr.image}}\" style=\"border-radius: 20px;\">\n\t\t\t</ion-slide>\n\t\t</ion-slides>\n\t</div>-->\n  \t<div *ngIf='sesinlefct'>\n\t\t<div class=\"snowflx\">\n\t\t\t<div class=\"snowflakes\" *ngIf=\"appstngs.festive_theme=='Christmas'\">\n\t\t\t\t<i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>\n\t\t\t</div>\n\t\t\t<div class=\"sprngleaf\" *ngIf=\"appstngs.festive_theme=='Leaves'\">\n\t\t\t\t<img src=\"assets/86-866989_spring-leaf-png.png\">\n\t\t\t\t<img src=\"assets/86-866989_spring-leaf-png.png\">\n\t\t\t\t<img src=\"assets/86-866989_spring-leaf-png.png\">\n\t\t\t\t<img src=\"assets/86-866989_spring-leaf-png.png\">\n\t\t\t\t<img src=\"assets/86-866989_spring-leaf-png.png\">\n\t\t\t\t<img src=\"assets/86-866989_spring-leaf-png.png\">\n\t\t\t\t<img src=\"assets/86-866989_spring-leaf-png.png\">\n\t\t\t\t<img src=\"assets/86-866989_spring-leaf-png.png\">\n\t\t\t\t<img src=\"assets/86-866989_spring-leaf-png.png\">\n\t\t\t\t<img src=\"assets/86-866989_spring-leaf-png.png\">\n\t\t\t\t<img src=\"assets/86-866989_spring-leaf-png.png\">\n\t\t\t\t<img src=\"assets/86-866989_spring-leaf-png.png\">\n\t\t\t\t<img src=\"assets/86-866989_spring-leaf-png.png\">\n\t\t\t\t<img src=\"assets/86-866989_spring-leaf-png.png\">\n\t\t\t\t<img src=\"assets/86-866989_spring-leaf-png.png\">\n\t\t\t\t<img src=\"assets/86-866989_spring-leaf-png.png\">\n\t\t\t\t<img src=\"assets/86-866989_spring-leaf-png.png\">\n\t\t\t\t<img src=\"assets/86-866989_spring-leaf-png.png\">\n\t\t\t\t<img src=\"assets/86-866989_spring-leaf-png.png\">\n\t\t\t\t<img src=\"assets/86-866989_spring-leaf-png.png\">\n\t\t\t\t<img src=\"assets/86-866989_spring-leaf-png.png\">\n\t\t\t</div>\n\t\t\t<div class=\"wntrflwer\" *ngIf=\"appstngs.festive_theme=='Flowers'\">\n\t\t\t\t<img src=\"assets/winter_flower.png\">\n\t\t\t\t<img src=\"assets/winter_flower.png\">\n\t\t\t\t<img src=\"assets/winter_flower.png\">\n\t\t\t\t<img src=\"assets/winter_flower.png\">\n\t\t\t\t<img src=\"assets/winter_flower.png\">\n\t\t\t\t<img src=\"assets/winter_flower.png\">\n\t\t\t\t<img src=\"assets/winter_flower.png\">\n\t\t\t\t<img src=\"assets/winter_flower.png\">\n\t\t\t\t<img src=\"assets/winter_flower.png\">\n\t\t\t\t<img src=\"assets/winter_flower.png\">\n\t\t\t\t<img src=\"assets/winter_flower.png\">\n\t\t\t\t<img src=\"assets/winter_flower.png\">\n\t\t\t\t<img src=\"assets/winter_flower.png\">\n\t\t\t\t<img src=\"assets/winter_flower.png\">\n\t\t\t\t<img src=\"assets/winter_flower.png\">\n\t\t\t\t<img src=\"assets/winter_flower.png\">\n\t\t\t\t<img src=\"assets/winter_flower.png\">\n\t\t\t\t<img src=\"assets/winter_flower.png\">\n\t\t\t\t<img src=\"assets/winter_flower.png\">\n\t\t\t\t<img src=\"assets/winter_flower.png\">\n\t\t\t\t<img src=\"assets/winter_flower.png\">\n\t\t\t\t<img src=\"assets/winter_flower.png\">\n\t\t\t\t<img src=\"assets/winter_flower.png\">\n\t\t\t\t<img src=\"assets/winter_flower.png\">\n\t\t\t</div>\n\t\t\t<div class=\"bubbling-heart\" *ngIf=\"appstngs.festive_theme=='Valentine'\">\n\t\t\t\t<div>\n\t\t\t\t\t<ion-icon name=\"heart\"></ion-icon>\n\t\t\t\t</div>\n\t\t\t\t<div>\n\t\t\t\t\t<ion-icon name=\"heart\"></ion-icon>\n\t\t\t\t</div>\n\t\t\t\t<div>\n\t\t\t\t\t<ion-icon name=\"heart\"></ion-icon>\n\t\t\t\t</div>\n\t\t\t\t<div>\n\t\t\t\t\t<ion-icon name=\"heart\"></ion-icon>\n\t\t\t\t</div>\n\t\t\t\t<div>\n\t\t\t\t\t<ion-icon name=\"heart\"></ion-icon>\n\t\t\t\t</div>\n\t\t\t\t<div>\n\t\t\t\t\t<ion-icon name=\"heart\"></ion-icon>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<ul class=\"lightrope\" *ngIf=\"appstngs.festive_theme=='Diwali'\">\n\t\t\t\t<li></li>\n\t\t\t\t<li></li>\n\t\t\t\t<li></li>\n\t\t\t\t<li></li>\n\t\t\t\t<li></li>\n\t\t\t\t<li></li>\n\t\t\t\t<li></li>\n\t\t\t\t<li></li>\n\t\t\t\t<li></li>\n\t\t\t\t<li></li>\n\t\t\t\t<li></li>\n\t\t\t\t<li></li>\n\t\t\t\t<li></li>\n\t\t\t\t<li></li>\n\t\t\t\t<li></li>\n\t\t\t\t<li></li>\n\t\t\t\t<li></li>\n\t\t\t\t<li></li>\n\t\t\t\t<li></li>\n\t\t\t\t<li></li>\n\t\t\t\t<li></li>\n\t\t\t\t<li></li>\n\t\t\t\t<li></li>\n\t\t\t\t<li></li>\n\t\t\t\t<li></li>\n\t\t\t\t<li></li>\n\t\t\t\t<li></li>\n\t\t\t\t<li></li>\n\t\t\t\t<li></li>\n\t\t\t\t<li></li>\n\t\t\t\t<li></li>\n\t\t\t\t<li></li>\n\t\t\t\t<li></li>\n\t\t\t</ul>\n\t\t\t<div class=\"pyro\" *ngIf=\"appstngs.festive_theme=='New Year'\">\n\t\t\t\t<div class=\"before\"></div>\n\t\t\t\t<div class=\"after\"></div>\n\t\t\t</div>\n\t\t\t<div *ngIf=\"appstngs.festive_theme=='Haloween'\">\n\t\t\t\t<div class='spider_0'>\n\t\t\t\t\t<div class='eye left'></div>\n\t\t\t\t\t<div class='eye right'></div>\n\t\t\t\t\t<span class='leg left'></span>\n\t\t\t\t\t<span class='leg left'></span>\n\t\t\t\t\t<span class='leg left'></span>\n\t\t\t\t\t<span class='leg left'></span>\n\t\t\t\t\t<span class='leg right'></span>\n\t\t\t\t\t<span class='leg right'></span>\n\t\t\t\t\t<span class='leg right'></span>\n\t\t\t\t\t<span class='leg right'></span>\n\t\t\t\t</div>\n\t\t\t\t<div class='spider_1'>\n\t\t\t\t\t<div class='eye left'></div>\n\t\t\t\t\t<div class='eye right'></div>\n\t\t\t\t\t<span class='leg left'></span>\n\t\t\t\t\t<span class='leg left'></span>\n\t\t\t\t\t<span class='leg left'></span>\n\t\t\t\t\t<span class='leg left'></span>\n\t\t\t\t\t<span class='leg right'></span>\n\t\t\t\t\t<span class='leg right'></span>\n\t\t\t\t\t<span class='leg right'></span>\n\t\t\t\t\t<span class='leg right'></span>\n\t\t\t\t</div>\n\t\t\t\t<div class='spider_2'>\n\t\t\t\t\t<div class='eye left'></div>\n\t\t\t\t\t<div class='eye right'></div>\n\t\t\t\t\t<span class='leg left'></span>\n\t\t\t\t\t<span class='leg left'></span>\n\t\t\t\t\t<span class='leg left'></span>\n\t\t\t\t\t<span class='leg left'></span>\n\t\t\t\t\t<span class='leg right'></span>\n\t\t\t\t\t<span class='leg right'></span>\n\t\t\t\t\t<span class='leg right'></span>\n\t\t\t\t\t<span class='leg right'></span>\n\t\t\t\t</div>\n\t\t\t\t<div class='spider_3'>\n\t\t\t\t\t<div class='eye left'></div>\n\t\t\t\t\t<div class='eye right'></div>\n\t\t\t\t\t<span class='leg left'></span>\n\t\t\t\t\t<span class='leg left'></span>\n\t\t\t\t\t<span class='leg left'></span>\n\t\t\t\t\t<span class='leg left'></span>\n\t\t\t\t\t<span class='leg right'></span>\n\t\t\t\t\t<span class='leg right'></span>\n\t\t\t\t\t<span class='leg right'></span>\n\t\t\t\t\t<span class='leg right'></span>\n\t\t\t\t</div>\n\t\t\t\t<div class='spider_4'>\n\t\t\t\t\t<div class='eye left'></div>\n\t\t\t\t\t<div class='eye right'></div>\n\t\t\t\t\t<span class='leg left'></span>\n\t\t\t\t\t<span class='leg left'></span>\n\t\t\t\t\t<span class='leg left'></span>\n\t\t\t\t\t<span class='leg left'></span>\n\t\t\t\t\t<span class='leg right'></span>\n\t\t\t\t\t<span class='leg right'></span>\n\t\t\t\t\t<span class='leg right'></span>\n\t\t\t\t\t<span class='leg right'></span>\n\t\t\t\t</div>\n\t\t\t\t<div class='spider_5'>\n\t\t\t\t\t<div class='eye left'></div>\n\t\t\t\t\t<div class='eye right'></div>\n\t\t\t\t\t<span class='leg left'></span>\n\t\t\t\t\t<span class='leg left'></span>\n\t\t\t\t\t<span class='leg left'></span>\n\t\t\t\t\t<span class='leg left'></span>\n\t\t\t\t\t<span class='leg right'></span>\n\t\t\t\t\t<span class='leg right'></span>\n\t\t\t\t\t<span class='leg right'></span>\n\t\t\t\t\t<span class='leg right'></span>\n\t\t\t\t</div>\n\t\t\t\t<img class='web-right' src='http://www.scandiafun.com/images/spiderweb-corner-right.png'>\n\t\t\t\t<img class='web-left' src='http://www.scandiafun.com/images/spiderweb-corner-right.png'>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n\t\t<ion-refresher-content></ion-refresher-content>\n\t</ion-refresher>\n\n\t<div class=\"padcontr\">\n\t\t<ion-grid style=\"margin-bottom: 10px;\">\n\t\t\t<ion-segment scrollable mode=\"md\">\n\t\t\t\t<ion-segment-button *ngFor=\"let item of category;let i=index\" class=\"{{item.segstyle}}\" (click)=\"segmentChanged(item.id,i)\">\n\t\t\t\t\t<ion-label style=\"padding: 2px 5px;\">{{item.name}}</ion-label>\n\t\t\t\t</ion-segment-button>\n\t\t\t</ion-segment>\n\t\t</ion-grid>\n\t\t\n\t\t\n\t\t<div>\n\t\t\t<div *ngIf='!newcategory.isscg'>\n\t\t\t\t<div class=\"productlists\" *ngFor=\"let item of newcategory.prd\">\n\t\t\t\t\t<div>\n\t\t\t\t\t  <div class=\"leftnameandother\">\n\t\t\t\t\t\t<div class=\"itemname\" (click)=\"openDetailsItem(item)\">\n\t\t\t\t\t\t  {{item.name}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"itemdesc\" (click)=\"openDetailsItem(item)\" [innerHTML]='item.description'>\n\t\t\t\t\t\t  <!-- <span [innerHTML]='item.description'></span> -->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t  </div>\n\t\t\t\t\t  <div class=\"rightimgsnaothr\">\n\t\t\t\t\t\t<div class=\"itemimg\">\n\t\t\t\t\t\t  <div class=\"prdimg\">\n\t\t\t\t\t\t\t<div class=\"pro_img\">\n\t\t\t\t\t\t\t  <img src=\" {{item.image}}\" style=\"border-radius: 8px; height: 100%; width: 100%; object-fit: cover;\" (click)=\"openDetailsItem(item)\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t  </div>\n\t\t\t\t\t  <div class=\"claer\"></div>\n\t\t\t\t\t  <div style=\"margin-top: 2px;\">\n\t\t\t\t\t\t<div class=\"itemprice\">\n\t\t\t\t\t\t  <span><code ></code></span>{{item.price}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t  </div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"claer\"></div>\n\t\t\t<div *ngIf='newcategory.isscg'>\n\t\t\t\t<ion-card lines=\"none\" *ngFor=\"let item of newcategory.scg\"  (click)=\"gonextsbg(item, newcategory)\" style=\"margin-inline: 0px; margin: 0px 0px 8px 0px; border-radius: 8px !important;\">\n\t\t\t\t\t<img src=\"../../assets/offeriCon.png\" style=\"height: 150px; width: 96%; object-fit: cover; border-radius: 7px; margin-left: 2%; margin-top: 2%; border-radius: 8px !important;\">\n\t\t\t\t\t<ion-card-header>\n\n\t\t\t\t\t  <ion-card-subtitle style=\"font-size: 16px; color: #ff4181;\">{{item.name}} <span style=\"float: right; color: #858585;\">View All</span></ion-card-subtitle>\n\t\t\t\t\t\n\t\t\t\t\t</ion-card-header>\n\t\t\t\t</ion-card>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</ion-content>\n\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_homepage3_homepage_module_ts-es5.js.map