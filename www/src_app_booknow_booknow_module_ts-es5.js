(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkSalon"] = self["webpackChunkSalon"] || []).push([["src_app_booknow_booknow_module_ts"], {
    /***/
    65337:
    /*!***************************************************!*\
      !*** ./src/app/booknow/booknow-routing.module.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BooknowPageRoutingModule": function BooknowPageRoutingModule() {
          return (
            /* binding */
            _BooknowPageRoutingModule
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


      var _booknow_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./booknow.page */
      63793);

      var routes = [{
        path: '',
        component: _booknow_page__WEBPACK_IMPORTED_MODULE_0__.BooknowPage
      }];

      var _BooknowPageRoutingModule = /*#__PURE__*/_createClass(function BooknowPageRoutingModule() {
        _classCallCheck(this, BooknowPageRoutingModule);
      });

      _BooknowPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _BooknowPageRoutingModule);
      /***/
    },

    /***/
    78534:
    /*!*******************************************!*\
      !*** ./src/app/booknow/booknow.module.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BooknowPageModule": function BooknowPageModule() {
          return (
            /* binding */
            _BooknowPageModule
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


      var _booknow_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./booknow-routing.module */
      65337);
      /* harmony import */


      var _booknow_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./booknow.page */
      63793);

      var _BooknowPageModule = /*#__PURE__*/_createClass(function BooknowPageModule() {
        _classCallCheck(this, BooknowPageModule);
      });

      _BooknowPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _booknow_routing_module__WEBPACK_IMPORTED_MODULE_0__.BooknowPageRoutingModule],
        declarations: [_booknow_page__WEBPACK_IMPORTED_MODULE_1__.BooknowPage]
      })], _BooknowPageModule);
      /***/
    },

    /***/
    63793:
    /*!*****************************************!*\
      !*** ./src/app/booknow/booknow.page.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BooknowPage": function BooknowPage() {
          return (
            /* binding */
            _BooknowPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_booknow_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./booknow.page.html */
      9771);
      /* harmony import */


      var _booknow_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./booknow.page.scss */
      6324);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_Providers_Services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/Providers/Services/api.service */
      48158);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/in-app-browser/ngx */
      53760);
      /* harmony import */


      var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! jquery */
      91704);
      /* harmony import */


      var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var src_Providers_Cart_cart_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/Providers/Cart/cart-api.service */
      65248);
      /* harmony import */


      var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/keyboard/ngx */
      4329);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../environments/environment */
      92340);
      /* harmony import */


      var _loginpage_loginpage_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../loginpage/loginpage.page */
      42985);

      var _BooknowPage = /*#__PURE__*/function () {
        function BooknowPage(menuCtrl, apiService, basic, localApi, cart, route, alertController, location, modalController, activatedRoute, actionSheetController, iab, platform, keyboard) {
          _classCallCheck(this, BooknowPage);

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
          this.keyboard = keyboard;
          this.postdata = {};
          this.ipbroptions = {};
          this.ordervalue = {};
          this.extranotes = '';
          this.pay_amount = 0;
          this.offer_text = '';
          this.isRestricktn = false;
          this.deltimelist = [];
          this.isShopclose = false;
          this.isKeyboardHide = false;
          this.isordertomorrow = false;
        }

        _createClass(BooknowPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.localApi.removeapplyedofr();
            this.logedUser = this.localApi.getuser();

            if (this.logedUser) {
              if (!this.logedUser.device || !this.logedUser.token) {
                this.updateuserdetails();
              }
            }
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            localStorage.setItem(_environments_environment__WEBPACK_IMPORTED_MODULE_9__.environment.storage_prefix + "bktohome", 'OK');
            this.imgpath = _environments_environment__WEBPACK_IMPORTED_MODULE_9__.environment.imagepath;
            this.logedUser = this.localApi.getuser();
            this.getappsetng = this.localApi.getappseting();

            if (this.getappsetng.timeslot[0].datename != 'Today') {
              this.isordertomorrow = true;
              this.nextdeday = this.getdayfullname(this.getappsetng.timeslot[0].datename);
              this.nexttime = this.tConv24(this.getappsetng.timeslot[0].value);
            }

            if (this.getappsetng.restrictions_label) {
              this.restrictns_lbl = this.getappsetng.restrictions_label;
              this.restrictns_txt = this.getappsetng.restrictions_text;
            }

            this.localApi.removedeladrs();
            this.localApi.removedelcost();
            this.localApi.removextrnt();
            var totaladditional = parseFloat(this.getappsetng.additional_one_value) + parseFloat(this.getappsetng.additional_two_value) + parseFloat(this.getappsetng.additional_three_value);
            this.totaladditional = totaladditional.toFixed(2);
            var chsdeltime = this.localApi.getdeltime();

            if (chsdeltime) {
              var delday = chsdeltime.split(' -')[0];
              var deltm = chsdeltime.split(' -')[1];
              this.chsdeltime = delday + ' - ' + deltm;
            }

            this.getallProducts();
            this.keyboard.onKeyboardWillShow().subscribe(function () {
              _this.isKeyboardHide = false;
            });
            this.keyboard.onKeyboardWillHide().subscribe(function () {
              _this.isKeyboardHide = true;
            });
          }
        }, {
          key: "tConv24",
          value: function tConv24(time24) {
            var ts = time24;
            this.hrsfr = +ts.substr(0, 2);
            this.hrert = this.hrsfr % 12 || 12;
            this.hrert = this.hrert < 10 ? "0" + this.hrert : this.hrert; // leading 0 at the left for 1 digit hours

            var ampm = this.hrsfr < 12 ? " AM" : " PM";
            ts = this.hrert + ts.substr(2, 3) + ampm;
            return ts;
          }
        }, {
          key: "clearmycart",
          value: function clearmycart() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var _this2 = this;

              var alert;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        header: 'Attention!',
                        message: 'This will clear all services in your cart. Do you wish to continue?',
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          handler: function handler() {
                            console.log('Cancel clicked');
                          }
                        }, {
                          text: 'OK',
                          handler: function handler() {
                            _this2.cart.removeCart();

                            _this2.ionViewWillEnter();
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
          key: "getdayfullname",
          value: function getdayfullname(name) {
            var dayname = {
              'Mon': 'Monday',
              'Tue': 'Tuesday',
              'Wed': 'Wednesday',
              'Thu': 'Thursday',
              'Fri': 'Friday',
              'Sat': 'Saturday',
              'Sun': 'Sunday'
            };
            return dayname[name];
          }
        }, {
          key: "updateuserdetails",
          value: function updateuserdetails() {
            var _this3 = this;

            this.logedUser = this.localApi.getuser();

            if (this.logedUser) {
              this.logedUser.token = localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_9__.environment.storage_prefix + 'userdevicetoken');

              if (this.platform.is('android')) {
                this.logedUser.device_type = 'Android';
              } else {
                this.logedUser.device_type = 'iOS';
              }

              this.apiService.postdata('userfoceupdate', this.logedUser).subscribe(function (resp) {
                _this3.localApi.setuser(resp.data);

                _this3.logedUser = _this3.localApi.getuser();
              }, function (err) {
                return false;
              });
            }
          }
        }, {
          key: "cancelcpn",
          value: function cancelcpn() {
            this.localApi.removeapplyedofr();
            this.ionViewWillEnter();
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            var _this4 = this;

            console.log('Begin async operation');
            setTimeout(function () {
              _this4.getallProducts();

              event.target.complete();
            }, 2000);
          }
        }, {
          key: "checkshopstatus",
          value: function checkshopstatus() {
            if (this.getappsetng.opentime.toDayShop == 'CLOSE') {
              this.isShopclose = true;
              this.closetxt = this.getappsetng.opentime;
            } else {// this.getdeltimes();
            }
          }
        }, {
          key: "noshopping",
          value: function noshopping() {
            this.isShopclose = false; // this.getdeltimes();
          }
        }, {
          key: "getallProducts",
          value: function getallProducts() {
            this.getappsetng = this.localApi.getappseting();
            console.log("this.getappsetng", this.getappsetng);
            this.mycart = this.cart.getcart();
            this.carttotal = this.cart.getTotalCart();
            this.cartcount = this.mycart.length;

            if (this.cartcount > 0) {
              this.isKeyboardHide = true;
            } else {
              this.isKeyboardHide = true;
            }

            if (this.getappsetng.tax_lebel) {
              var taxvalue = parseFloat(this.carttotal) * parseFloat(this.getappsetng.tax_value) / 100;
              this.taxvalue = taxvalue.toFixed(2);
            } else {
              this.taxvalue = '0.00';
            }

            this.apldofrs = this.localApi.getapplyedofr();

            if (this.apldofrs) {
              if (this.apldofrs.off_type == 'Flat') {
                this.offer_text = 'Flat ' + this.getappsetng.currency_symbol + this.apldofrs.off_value + ' diccount applied';
                this.off_amount = this.apldofrs.off_value;
              } else {
                this.offer_text = this.apldofrs.off_value + '% discount applied';
                this.dicuctamnt = this.carttotal * this.apldofrs.off_value / 100;
                this.off_amount = this.dicuctamnt.toFixed(2);
              }

              this.payamuntcalc = parseFloat(this.carttotal) - parseFloat(this.off_amount);
              var pay_amount = parseFloat(this.payamuntcalc) + parseFloat(this.taxvalue) + parseFloat(this.totaladditional);
              this.pay_amount = pay_amount.toFixed(2); // this.pay_amount = this.carttotal;
            } else {
              var pay_amount = parseFloat(this.carttotal) + parseFloat(this.taxvalue) + parseFloat(this.totaladditional);
              this.pay_amount = pay_amount.toFixed(2);
            }

            if (this.getappsetng.delivery_free > this.carttotal) {
              var restfredelprx = parseFloat(this.getappsetng.delivery_free) - parseFloat(this.carttotal);
              this.restfredelprx = restfredelprx.toFixed(2);
              this.mrprcfrdelfree = 'Get FREE.Add another ' + this.getappsetng.currency_symbol + this.restfredelprx;
            } else {
              this.mrprcfrdelfree = '';
            }
          }
        }, {
          key: "getdeltimes",
          value: function getdeltimes(date) {
            var _this5 = this;

            this.postdata.snddate = date;
            this.basic.presentLoading();
            this.apiService.postdata('getdeltimebreak', this.postdata).subscribe(function (resp) {
              var timesdel = resp.data;

              if (timesdel.status == 'Close') {
                _this5.basic.alert('Info:', timesdel.message);
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

                _this5.deltimelist = theNewInputs;
              }

              setTimeout(function () {
                _this5.basic.dismissloader();

                if (timesdel.status != 'Close') {
                  _this5.opndeltimelist();
                }
              }, 1000);
            }, function (err) {
              _this5.basic.dismissloader();

              return false;
            });
          }
        }, {
          key: "opndeltimelist",
          value: function opndeltimelist() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var _this6 = this;

              var alert;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertController.create({
                        cssClass: 'freeddelmessages',
                        header: 'Select time',
                        subHeader: this.mrprcfrdelfree,
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
                                _this6.opendatetimedel();
                              } else {
                                _this6.localApi.setdeltime(val);

                                var delday = val.split(' -')[0];
                                var deltm = val.split(' -')[1];
                                _this6.chsdeltime = delday + ' - ' + deltm;
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
          key: "opendatetimedel",
          value: function opendatetimedel() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              var _this7 = this;

              var alert;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.alertController.create({
                        cssClass: 'freeddelmessage',
                        header: 'Select date',
                        subHeader: this.mrprcfrdelfree,
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
                              _this7.basic.alert('Error', 'Please choose a date');

                              return false;
                            } else {
                              _this7.getdeltimes(val.del_date);

                              return true;
                            }
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
          key: "addqty",
          value: function addqty(itm) {
            this.cancelcpn();
            this.nowqty = '';
            this.nowval = '';
            this.nowqty = jquery__WEBPACK_IMPORTED_MODULE_6__('#itmqtyval_' + itm.id).html();
            this.nowval = parseInt(this.nowqty) + 1;
            jquery__WEBPACK_IMPORTED_MODULE_6__('#itmqtyval_' + itm.id).html(this.nowval);
            this.cart.plusqnty(itm);
            this.getallProducts();
          }
        }, {
          key: "munisqty",
          value: function munisqty(itm) {
            this.cancelcpn();
            this.nowqty = '';
            this.nowval = '';
            this.nowqty = jquery__WEBPACK_IMPORTED_MODULE_6__('#itmqtyval_' + itm.id).html();
            this.nowval = parseInt(this.nowqty) - 1;
            jquery__WEBPACK_IMPORTED_MODULE_6__('#itmqtyval_' + itm.id).html(this.nowval);
            this.cart.minusqntyfrmprod(itm);
            this.getallProducts();
          }
        }, {
          key: "continueShp",
          value: function continueShp() {
            this.location.back();
          }
        }, {
          key: "alrestclose",
          value: function alrestclose() {
            this.isRestricktn = false;
            this.isordertomorrow = false;
          }
        }, {
          key: "callforprocessd",
          value: function callforprocessd() {
            console.log("this.getappsetng", this.getappsetng);

            if (this.getappsetng.restrictions_label) {
              this.isRestricktn = true;
            } else if (!this.chsdeltime) {
              this.basic.alert('Select Date and Time:', 'Please choose date and time');
            } else {
              this.processed();
            }
          }
        }, {
          key: "procesingtime",
          value: function procesingtime() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              var _this8 = this;

              var alert;
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.alertController.create({
                        header: 'Cooking Times:',
                        message: this.getappsetng.preparation_time,
                        buttons: [{
                          text: 'OK',
                          handler: function handler() {
                            _this8.processed();
                          }
                        }]
                      });

                    case 2:
                      alert = _context4.sent;
                      _context4.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "processed",
          value: function processed() {
            var chsdeltime = this.localApi.getdeltime();

            if (!chsdeltime) {
              this.basic.alert('Error:', 'Please chhose date and time');
            } else {
              this.logedUser = this.localApi.getuser();

              if (this.logedUser) {
                var carttotal = parseFloat(this.carttotal);
                var min_amount_checkout = parseFloat(this.getappsetng.min_amount_checkout);

                if (carttotal < min_amount_checkout) {
                  var morePr = parseFloat(this.getappsetng.min_amount_checkout) - parseFloat(this.carttotal);
                  this.basic.alert('Info:', 'Minimum Booking Value is ' + this.getappsetng.currency_symbol + this.getappsetng.min_amount_checkout + ', Please add another ' + this.getappsetng.currency_symbol + morePr.toFixed(2) + ' worth of services');
                } else {
                  this.openorderoption();
                }
              } else {
                this.openloginpanel();
              }
            }
          }
        }, {
          key: "openloginpanel",
          value: function openloginpanel() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
              var _this9 = this;

              var modal;
              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      console.log('OK');
                      _context5.next = 3;
                      return this.modalController.create({
                        component: _loginpage_loginpage_page__WEBPACK_IMPORTED_MODULE_10__.LoginpagePage,
                        cssClass: 'my-custom-class',
                        backdropDismiss: true
                      });

                    case 3:
                      modal = _context5.sent;
                      modal.onDidDismiss().then(function (data) {
                        console.log('data', data);

                        if (data.data) {
                          _this9.processed();
                        }
                      });
                      _context5.next = 7;
                      return modal.present();

                    case 7:
                      return _context5.abrupt("return", _context5.sent);

                    case 8:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "openorderoption",
          value: function openorderoption() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
              return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      this.route.navigate(['/checkout']);

                    case 1:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "gofers",
          value: function gofers() {
            this.logedUser = this.localApi.getuser();

            if (this.logedUser) {
              this.route.navigate(['/offer/apply']);
            } else {
              this.openlogforofr();
            }
          }
        }, {
          key: "openlogforofr",
          value: function openlogforofr() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
              var _this10 = this;

              var modal;
              return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.modalController.create({
                        component: _loginpage_loginpage_page__WEBPACK_IMPORTED_MODULE_10__.LoginpagePage,
                        cssClass: 'my-custom-class',
                        backdropDismiss: true
                      });

                    case 2:
                      modal = _context7.sent;
                      modal.onDidDismiss().then(function (data) {
                        console.log('data', data);

                        if (data.data) {
                          _this10.route.navigate(['/offer/apply']);
                        }
                      });
                      _context7.next = 6;
                      return modal.present();

                    case 6:
                      return _context7.abrupt("return", _context7.sent);

                    case 7:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "homego",
          value: function homego() {
            this.route.navigate(['/homepage']);
          }
        }, {
          key: "removeXtrs",
          value: function removeXtrs(item) {
            this.cart.deleteProduct(item);
            this.ionViewWillEnter();
          }
        }]);

        return BooknowPage;
      }();

      _BooknowPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.MenuController
        }, {
          type: src_Providers_Services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService
        }, {
          type: src_Providers_Basic_basic_api_service__WEBPACK_IMPORTED_MODULE_3__.BasicApiService
        }, {
          type: src_Providers_Local_local_api_service__WEBPACK_IMPORTED_MODULE_4__.LocalApiService
        }, {
          type: src_Providers_Cart_cart_api_service__WEBPACK_IMPORTED_MODULE_7__.CartApiService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.AlertController
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_14__.Location
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ActionSheetController
        }, {
          type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__.InAppBrowser
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.Platform
        }, {
          type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_8__.Keyboard
        }];
      };

      _BooknowPage = (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
        selector: 'app-booknow',
        template: _raw_loader_booknow_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_booknow_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _BooknowPage);
      /***/
    },

    /***/
    6324:
    /*!*******************************************!*\
      !*** ./src/app/booknow/booknow.page.scss ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".itemlists {\n  padding: 10px 10px 5px 10px;\n  background-color: #fff;\n  border-bottom: solid 1px #efebeb;\n  position: relative;\n}\n\n.nameanddesc {\n  width: 75%;\n  height: auto;\n  float: left;\n  font-size: 13px;\n  line-height: 14px;\n}\n\n.nameanddesc span {\n  font-size: 11px;\n  color: #717171;\n}\n\n.chopclosenow {\n  width: 100%;\n  height: 100%;\n  padding: 0 20px;\n  position: fixed;\n  z-index: 999;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: table;\n  text-align: center;\n  color: #fff;\n}\n\n.chopclosenow span {\n  display: table-cell;\n  vertical-align: middle;\n}\n\n.chopclosenow .okbtnforrevoew {\n  width: 100%;\n  height: auto;\n  text-align: center;\n}\n\n.chopclosenow .okbtnforrevoew span {\n  background-color: #6780c5;\n  display: inline-block;\n  padding: 6px 40px;\n  text-transform: uppercase;\n  border-radius: 3px;\n}\n\n.qtybox {\n  width: 25%;\n  height: auto;\n  float: left;\n  text-align: center;\n  border: solid 1px #dcdcdc;\n  line-height: 29px;\n  position: relative;\n  font-size: 14px;\n}\n\n.qtybox .minusbtn {\n  color: #ff4181;\n  position: absolute;\n  left: 0;\n  top: 0;\n  font-size: 19px;\n  padding: 0 4px;\n  padding-top: 5px;\n  line-height: 19px;\n}\n\n.qtybox .qtyvalue {\n  color: #ff4181;\n}\n\n.qtybox .plsvalue {\n  color: #ff4181;\n  position: absolute;\n  right: 0;\n  top: 0;\n  font-size: 19px;\n  padding: 0 4px;\n  padding-top: 5px;\n  line-height: 19px;\n}\n\n.totalitm {\n  width: 25%;\n  height: auto;\n  float: right;\n  text-align: right;\n  line-height: 30px;\n  font-size: 14px;\n}\n\n.ifanythonote {\n  width: 100%;\n  height: auto;\n  position: relative;\n  padding: 10px 10px 10px 50px;\n  background-color: #fff;\n  position: relative;\n}\n\n.ifanythonote input {\n  width: 100%;\n  font-size: 12px;\n  border: none;\n  background-color: transparent;\n  outline: none;\n}\n\n.ifanythonote ion-icon {\n  position: absolute;\n  left: 15px;\n  top: 13px;\n  font-size: 18px;\n  color: #8a8989;\n}\n\n.appcoupncd {\n  width: 100%;\n  height: auto;\n  padding: 15px 10px 15px 49px;\n  background-color: #fff;\n  position: relative;\n  margin: 10px auto;\n  font-size: 13px;\n  font-weight: bold;\n  line-height: 12px;\n}\n\n.appcoupncd img {\n  position: absolute;\n  height: 24px;\n  left: 12px;\n  top: 10px;\n}\n\n.appcoupncd span {\n  float: right;\n}\n\n.appcoupncd b {\n  color: #ff4181;\n  font-size: 10px;\n  font-weight: normal;\n}\n\n.billdeatils {\n  width: 100%;\n  height: auto;\n  padding: 15px 10px;\n  background-color: #fff;\n  position: relative;\n  margin: 5px auto;\n  font-size: 13px;\n}\n\n.billdeatils .head {\n  font-size: 13px;\n  margin-bottom: 10px;\n  font-weight: bold;\n}\n\n.billdeatils ul {\n  margin: 0;\n  padding: 0;\n}\n\n.billdeatils ul li {\n  list-style: none;\n  font-size: 12px;\n  padding: 7px 0;\n  border-bottom: solid 1px #ececec;\n}\n\n.billdeatils ul li span {\n  float: right;\n}\n\n.billdeatils ul .topay {\n  font-weight: bold;\n}\n\n.crtfooter {\n  width: 100%;\n  height: auto;\n  background-color: transparent;\n  font-size: 12px;\n}\n\n.crtfooter .leftsidehalf {\n  width: 50%;\n  height: auto;\n  float: left;\n  background-color: #ff4181;\n  text-align: center;\n  line-height: 50px;\n  text-transform: uppercase;\n  color: #fff;\n}\n\n.crtfooter .rightsidehlf {\n  width: 50%;\n  height: auto;\n  float: left;\n  background-color: #000;\n  text-align: center;\n  line-height: 50px;\n  text-transform: uppercase;\n  color: #fff;\n}\n\n.preorder {\n  float: none;\n  font-size: 8px !important;\n  font-weight: bold;\n  color: #f00 !important;\n}\n\n::-moz-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #d47906;\n  opacity: 1;\n  /* Firefox */\n}\n\n::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #d47906;\n  opacity: 1;\n  /* Firefox */\n}\n\n:-ms-input-placeholder {\n  /* Internet Explorer 10-11 */\n  color: #d47906;\n}\n\n::-ms-input-placeholder {\n  /* Microsoft Edge */\n  color: #d47906;\n}\n\n.xtrascss {\n  width: 85%;\n  color: #ff4181;\n}\n\n.xtrascss span {\n  color: #ff4181;\n}\n\n.xtrasremove {\n  position: absolute;\n  right: 0;\n  top: 0;\n  color: #f00;\n  width: 38px;\n  text-align: right;\n  height: 33px;\n}\n\n.highdemandbanner {\n  width: 100%;\n  height: auto;\n  padding: 10px 10px;\n  background: #da2a2c;\n  font-size: 11px;\n  font-weight: bold;\n  color: #fff;\n  position: relative;\n  padding-left: 50px;\n  margin-top: 8px;\n}\n\n.highdemandbanner ion-icon {\n  position: absolute;\n  left: 12px;\n  color: #fff;\n  font-size: 24px;\n}\n\n.blinking {\n  animation: blinkingText 1s infinite;\n}\n\n@keyframes blinkingText {\n  0% {\n    color: #dace2a;\n  }\n  /*49%{  color: #2d3dff; }*/\n  50% {\n    color: #fff;\n  }\n  /*99%{  color:#fb01ff;  }*/\n  100% {\n    color: #dace2a;\n  }\n}\n\n.minusbtn {\n  color: #ff4181;\n  left: 0;\n  top: 0;\n  font-size: 19px;\n  padding: 0 4px;\n  padding-top: 5px;\n  line-height: 19px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2tub3cucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7QUFDRDs7QUFDQTtFQUNDLFVBQUE7RUFDRyxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUVKOztBQURDO0VBQ0MsZUFBQTtFQUNBLGNBQUE7QUFHRjs7QUFBQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBR0Q7O0FBRkM7RUFDQyxtQkFBQTtFQUNBLHNCQUFBO0FBSUY7O0FBRkM7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBSUY7O0FBSEU7RUFDQyx5QkFBQTtFQUNHLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBS047O0FBREE7RUFDQyxVQUFBO0VBQ0csWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFJSjs7QUFIQztFQUNDLGNBQUE7RUFDRyxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBS0w7O0FBSEM7RUFDQyxjQUFBO0FBS0Y7O0FBSEM7RUFDQyxjQUFBO0VBQ0csa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUtMOztBQUZBO0VBQ0MsVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFLRDs7QUFIQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFNRDs7QUFMQztFQUNDLFdBQUE7RUFDRyxlQUFBO0VBRUEsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtBQU1MOztBQUpDO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBTUw7O0FBSEE7RUFDQyxXQUFBO0VBQ0csWUFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFNSjs7QUFMQztFQUNDLGtCQUFBO0VBQ0csWUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBT0w7O0FBTEM7RUFDQyxZQUFBO0FBT0Y7O0FBTEM7RUFDQyxjQUFBO0VBQ0csZUFBQTtFQUNBLG1CQUFBO0FBT0w7O0FBSkE7RUFDQyxXQUFBO0VBQ0csWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQU9KOztBQU5JO0VBQ0MsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFRTDs7QUFOSTtFQUNDLFNBQUE7RUFDQSxVQUFBO0FBUUw7O0FBUEs7RUFDQyxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0NBQUE7QUFTTjs7QUFSTTtFQUNDLFlBQUE7QUFVUDs7QUFQSztFQUNDLGlCQUFBO0FBU047O0FBSkE7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtBQU9EOztBQU5DO0VBQ0MsVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FBUUY7O0FBTkM7RUFDQyxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUFRRjs7QUFMQTtFQUNDLFdBQUE7RUFDRyx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QUFRSjs7QUFOQTtFQUFnQix5Q0FBQTtFQUNkLGNBQUE7RUFDQSxVQUFBO0VBQVksWUFBQTtBQVdkOztBQWJBO0VBQWdCLHlDQUFBO0VBQ2QsY0FBQTtFQUNBLFVBQUE7RUFBWSxZQUFBO0FBV2Q7O0FBUkE7RUFBeUIsNEJBQUE7RUFDdkIsY0FBQTtBQVlGOztBQVRBO0VBQTBCLG1CQUFBO0VBQ3hCLGNBQUE7QUFhRjs7QUFYQTtFQUNDLFVBQUE7RUFDQSxjQUFBO0FBY0Q7O0FBYkM7RUFDQyxjQUFBO0FBZUY7O0FBWEE7RUFDQyxrQkFBQTtFQUNHLFFBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFjSjs7QUFYQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQWNGOztBQWJFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFlSjs7QUFaQTtFQUNFLG1DQUFBO0FBZUY7O0FBYkE7RUFDRTtJQUFNLGNBQUE7RUFpQk47RUFoQkEsMEJBQUE7RUFDQTtJQUFNLFdBQUE7RUFtQk47RUFsQkEsMEJBQUE7RUFDQTtJQUFNLGNBQUE7RUFxQk47QUFDRjs7QUFuQkE7RUFDQyxjQUFBO0VBRUEsT0FBQTtFQUNBLE1BQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFvQkQiLCJmaWxlIjoiYm9va25vdy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbWxpc3Rze1xuXHRwYWRkaW5nOiAxMHB4IDEwcHggNXB4IDEwcHg7O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXHRib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2VmZWJlYjtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm5hbWVhbmRkZXNje1xuXHR3aWR0aDogNzUlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBmbG9hdDogbGVmdDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDE0cHg7XG5cdHNwYW57XG5cdFx0Zm9udC1zaXplOiAxMXB4O1xuXHRcdGNvbG9yOiAjNzE3MTcxO1xuXHR9XG59XG4uY2hvcGNsb3Nlbm93e1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiAxMDAlO1xuXHRwYWRkaW5nOiAwIDIwcHg7XG5cdHBvc2l0aW9uOiBmaXhlZDtcblx0ei1pbmRleDogOTk5O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7XG5cdGRpc3BsYXk6IHRhYmxlO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGNvbG9yOiAjZmZmO1xuXHRzcGFue1xuXHRcdGRpc3BsYXk6IHRhYmxlLWNlbGw7XG5cdFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcblx0fVxuXHQub2tidG5mb3JyZXZvZXd7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0aGVpZ2h0OiBhdXRvO1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRzcGFue1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogIzY3ODBjNTtcblx0XHQgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdCAgICBwYWRkaW5nOiA2cHggNDBweDtcblx0XHQgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHQgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuXHRcdH1cblx0fVxufVxuLnF0eWJveHtcblx0d2lkdGg6IDI1JTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlcjogc29saWQgMXB4ICNkY2RjZGM7XG4gICAgbGluZS1oZWlnaHQ6IDI5cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcblx0Lm1pbnVzYnRue1xuXHRcdGNvbG9yOiAjZmY0MTgxO1xuXHQgICAgcG9zaXRpb246IGFic29sdXRlO1xuXHQgICAgbGVmdDogMDtcblx0ICAgIHRvcDogMDtcblx0ICAgIGZvbnQtc2l6ZTogMTlweDtcblx0ICAgIHBhZGRpbmc6IDAgNHB4O1xuXHQgICAgcGFkZGluZy10b3A6IDVweDtcblx0ICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xuXHR9XG5cdC5xdHl2YWx1ZXtcblx0XHRjb2xvcjogI2ZmNDE4MTtcblx0fVxuXHQucGxzdmFsdWV7XG5cdFx0Y29sb3I6ICNmZjQxODE7XG5cdCAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cdCAgICByaWdodDogMDtcblx0ICAgIHRvcDogMDtcblx0ICAgIGZvbnQtc2l6ZTogMTlweDtcblx0ICAgIHBhZGRpbmc6IDAgNHB4O1xuXHQgICAgcGFkZGluZy10b3A6IDVweDtcblx0ICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xuXHR9XG59XG4udG90YWxpdG17XG5cdHdpZHRoOiAyNSU7XG5cdGhlaWdodDogYXV0bztcblx0ZmxvYXQ6IHJpZ2h0O1xuXHR0ZXh0LWFsaWduOiByaWdodDtcblx0bGluZS1oZWlnaHQ6IDMwcHg7XG5cdGZvbnQtc2l6ZTogMTRweDtcbn1cbi5pZmFueXRob25vdGV7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IGF1dG87XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0cGFkZGluZzogMTBweCAxMHB4IDEwcHggNTBweDtcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRpbnB1dHtcblx0XHR3aWR0aDogMTAwJTtcblx0ICAgIGZvbnQtc2l6ZTogMTJweDtcblx0ICAgIC8vIGhlaWdodDogMzBweDtcblx0ICAgIGJvcmRlcjogbm9uZTtcblx0ICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXHQgICAgb3V0bGluZTogbm9uZTtcblx0fVxuXHRpb24taWNvbntcblx0ICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0ICAgIGxlZnQ6IDE1cHg7XG5cdCAgICB0b3A6IDEzcHg7XG5cdCAgICBmb250LXNpemU6IDE4cHg7XG5cdCAgICBjb2xvcjogIzhhODk4OTtcblx0fVxufVxuLmFwcGNvdXBuY2R7XG5cdHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nOiAxNXB4IDEwcHggMTVweCA0OXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogMTBweCBhdXRvO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBsaW5lLWhlaWdodDogMTJweDtcblx0aW1ne1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0ICAgIGhlaWdodDogMjRweDtcblx0ICAgIGxlZnQ6IDEycHg7XG5cdCAgICB0b3A6IDEwcHg7XG5cdH1cblx0c3Bhbntcblx0XHRmbG9hdDogcmlnaHQ7XG5cdH1cblx0Yntcblx0XHRjb2xvcjogI2ZmNDE4MTtcblx0ICAgIGZvbnQtc2l6ZTogMTBweDtcblx0ICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG5cdH1cbn1cbi5iaWxsZGVhdGlsc3tcblx0d2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmc6IDE1cHggMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDVweCBhdXRvO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAuaGVhZHtcbiAgICBcdGZvbnQtc2l6ZTogMTNweDtcbiAgICBcdG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgXHRmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gICAgdWx7XG4gICAgXHRtYXJnaW46IDA7XG4gICAgXHRwYWRkaW5nOiAwO1xuICAgIFx0bGl7XG4gICAgXHRcdGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgXHRcdGZvbnQtc2l6ZTogMTJweDtcbiAgICBcdFx0cGFkZGluZzogN3B4IDA7XG4gICAgXHRcdGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjZWNlY2VjO1xuICAgIFx0XHRzcGFue1xuICAgIFx0XHRcdGZsb2F0OiByaWdodDtcbiAgICBcdFx0fVxuICAgIFx0fVxuICAgIFx0LnRvcGF5e1xuICAgIFx0XHRmb250LXdlaWdodDogYm9sZDtcbiAgICBcdH1cbiAgICB9XG59XG5cbi5jcnRmb290ZXJ7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IGF1dG87XG5cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXHRmb250LXNpemU6IDEycHg7XG5cdC5sZWZ0c2lkZWhhbGZ7XG5cdFx0d2lkdGg6IDUwJTtcblx0XHRoZWlnaHQ6IGF1dG87XG5cdFx0ZmxvYXQ6IGxlZnQ7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmNDE4MTtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0bGluZS1oZWlnaHQ6IDUwcHg7XG5cdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHRjb2xvcjogI2ZmZjtcblx0fVxuXHQucmlnaHRzaWRlaGxme1xuXHRcdHdpZHRoOiA1MCU7XG5cdFx0aGVpZ2h0OiBhdXRvO1xuXHRcdGZsb2F0OiBsZWZ0O1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdGxpbmUtaGVpZ2h0OiA1MHB4O1xuXHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdFx0Y29sb3I6ICNmZmY7XG5cdH1cbn1cbi5wcmVvcmRlcntcblx0ZmxvYXQ6IG5vbmU7XG4gICAgZm9udC1zaXplOiA4cHggIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogI2YwMCAhaW1wb3J0YW50O1xufVxuOjpwbGFjZWhvbGRlciB7IC8qIENocm9tZSwgRmlyZWZveCwgT3BlcmEsIFNhZmFyaSAxMC4xKyAqL1xuICBjb2xvcjogI2Q0NzkwNjtcbiAgb3BhY2l0eTogMTsgLyogRmlyZWZveCAqL1xufVxuXG46LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTAtMTEgKi9cbiAgY29sb3I6ICNkNDc5MDY7XG59XG5cbjo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgLyogTWljcm9zb2Z0IEVkZ2UgKi9cbiAgY29sb3I6ICNkNDc5MDY7XG59XG4ueHRyYXNjc3N7XG5cdHdpZHRoOiA4NSU7XG5cdGNvbG9yOiAjZmY0MTgxO1xuXHRzcGFue1xuXHRcdGNvbG9yOiAjZmY0MTgxO1xuXHR9XG59XG5cbi54dHJhc3JlbW92ZXtcblx0cG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgICBjb2xvcjogI2YwMDtcbiAgICB3aWR0aDogMzhweDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBoZWlnaHQ6IDMzcHg7XG59XG5cbi5oaWdoZGVtYW5kYmFubmVye1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNkYTJhMmM7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjZmZmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogNTBweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBpb24taWNvbntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMTJweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gIH1cbn1cbi5ibGlua2luZ3tcbiAgYW5pbWF0aW9uOmJsaW5raW5nVGV4dCAxcyBpbmZpbml0ZTtcbn1cbkBrZXlmcmFtZXMgYmxpbmtpbmdUZXh0e1xuICAwJXsgICBjb2xvcjogI2RhY2UyYTsgIH1cbiAgLyo0OSV7ICBjb2xvcjogIzJkM2RmZjsgfSovXG4gIDUwJXsgIGNvbG9yOiAjZmZmOyB9XG4gIC8qOTkleyAgY29sb3I6I2ZiMDFmZjsgIH0qL1xuICAxMDAleyBjb2xvcjogI2RhY2UyYTsgIH1cbn1cblxuLm1pbnVzYnRue1xuXHRjb2xvcjogI2ZmNDE4MTtcblx0Ly8gcG9zaXRpb246IGFic29sdXRlO1xuXHRsZWZ0OiAwO1xuXHR0b3A6IDA7XG5cdGZvbnQtc2l6ZTogMTlweDtcblx0cGFkZGluZzogMCA0cHg7XG5cdHBhZGRpbmctdG9wOiA1cHg7XG5cdGxpbmUtaGVpZ2h0OiAxOXB4O1xufSJdfQ== */";
      /***/
    },

    /***/
    9771:
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/booknow/booknow.page.html ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"chopclosenow\" *ngIf='isRestricktn'>\n\t<span>\n\t\t<h1>{{restrictns_lbl}}</h1>\n      \t<p>{{restrictns_txt}}</p>\n      \t<div class=\"okbtnforrevoew\" (click)='alrestclose()'><span>Ok</span></div>\n\t</span>\n</div>\n\n<div class=\"chopclosenow\" *ngIf='isordertomorrow'>\n\t<span>\n\t\t<h1>We are closed now</h1>\n      \t<p>Order will be delivered when we reopen on<br><strong>{{nextdeday}}</strong><strong> {{nexttime}}</strong>. </p>\n      \t<p>Please click ok if you wish to PRE-ORDER</p>\n      \t<div class=\"okbtnforrevoew\" (click)='alrestclose()'><span>Ok</span></div>\n\t</span>\n</div>\n\n<div class=\"chopclosenow\" *ngIf='isShopclose'>\n\t<span>\n\t\t<h1>{{closetxt.openTimeTxt}}</h1>\n      \t<p [innerHTML]='closetxt.openTimeToday'></p>\n      \t<div class=\"okbtnforrevoew\" (click)='noshopping()'><span>Ok</span></div>\n\t</span>\n</div>\n\n<ion-header>\n  <ion-toolbar class=\"header-background-color\">\n  \t<!-- <ion-back-button slot=\"start\"></ion-back-button> --><ion-menu-button slot=\"start\"></ion-menu-button>\n    <ion-title class=\"heaerfont\">My Cart</ion-title>\n    <ion-buttons slot=\"end\" (click)='clearmycart()' style='color: #FFF;font-size: 11px;font-weight: bold;text-transform: uppercase;'>\n    \tClear Cart\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n\t  <ion-refresher-content></ion-refresher-content>\n\t</ion-refresher>\n  <div *ngIf='!cartcount' class=\"notcartitm\">\n    <img src=\"assets/shoppingEmpty.png\"><p>v1 Salon Provide Good Services<br><span>Your cart is empty. Add something from the menu</span></p>\n    <div class=\"brwsmenu\" (click)='homego()'><span>Browse Menu</span></div>\n  </div>\n\t<div class=\"padcontr\" *ngIf='cartcount'>\n\t\t<div class=\"itemlists\" *ngFor=\"let item of mycart; let i = index\">\n\t\t\t<div class=\"nameanddesc\">\n        \t\tTotal Time : {{item.corner_text}}<br>\n\t\t\t\t{{item.name}} - <code [innerHTML]='getappsetng?.currency_symbol'></code>{{item.itmOnly}}<br><span [innerHTML]=\"item.productDesc\"></span>\n\t\t\t</div>\n\t\t\t<div class=\"totalitm\">\n\t\t\t\t<span class=\"minusbtn\" (click)='munisqty(item)'><ion-icon name=\"trash\"></ion-icon></span><br>\n\t\t\t\t<code [innerHTML]='getappsetng?.currency_symbol'></code>{{item.item_sub_total}}\n\t\t\t</div>\n\t\t\t<div class=\"clear\"></div>\n\t\t</div>\n\n\t\t<div class=\"ifanythonote\">\n\t\t\t<ion-icon name=\"newspaper-outline\"></ion-icon> <input type=\"text\" [(ngModel)]=\"extranotes\" placeholder=\"Any requests?\">\n\t\t</div>\n\n\t\t<div class=\"appcoupncd\" (click)='opendatetimedel()' *ngIf='!chsdeltime'>\n      \t\t<ion-icon name=\"calendar-outline\" style=\"position: absolute; left: 15px; top: 13px; font-size: 18px; color: #8a8989;\"></ion-icon> Select Date\n\t\t\t<span><ion-icon name=\"chevron-forward-outline\"></ion-icon></span>\n\t\t</div>\n\t\t<div class=\"appcoupncd\" (click)='opendatetimedel()' *ngIf='chsdeltime'>\n\t\t\t<ion-icon name=\"calendar-outline\" style=\"position: absolute; left: 15px; top: 13px; font-size: 18px; color: #8a8989;\"></ion-icon> Select Time:  {{chsdeltime}}\n\t\t\t<span><ion-icon name=\"pencil-outline\"></ion-icon></span>\n\t\t</div>\n\n\t\t<div class=\"appcoupncd\" *ngIf='!apldofrs' (click)='gofers();'>\n\t\t\t<img src=\"assets/offeriCon.png\"> Apply Discount / Coupon Code <span><ion-icon name=\"chevron-forward-outline\"></ion-icon></span>\n\t\t</div>\n\t\t<div class=\"appcoupncd\" *ngIf='apldofrs'>\n\t\t\t<img src=\"assets/offeriCon.png\"> Coupon applied - <strong>{{apldofrs.offer_code}}</strong> <span (click)='cancelcpn();'><ion-icon name=\"close-outline\"></ion-icon></span>\n\t\t</div>\n\n\t\t<div class=\"billdeatils\">\n\t\t\t<div class=\"head\">Book Details</div>\n\t\t\t<ul>\n\t\t\t\t<li>Service(s) Total <span><code [innerHTML]='getappsetng?.currency_symbol'></code>{{carttotal}}</span></li>\n\t\t\t\t<li *ngIf='apldofrs'>{{offer_text}} <span>- <code [innerHTML]='getappsetng?.currency_symbol'></code>{{off_amount}}</span></li>\n\t\t\t\t<li *ngIf='getappsetng.tax_lebel'>{{getappsetng.tax_lebel}} ({{getappsetng.tax_value}}%) <span>+ <code [innerHTML]='getappsetng?.currency_symbol'></code>{{taxvalue}}</span></li>\n\t\t\t\t<li class=\"topay\">To Pay <span><code [innerHTML]='getappsetng?.currency_symbol'></code>{{pay_amount}}</span></li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n</ion-content>\n<ion-footer class=\"ion-no-border crtfooter\" *ngIf='isKeyboardHide'>\n\t<div class=\"leftsidehalf\" (click)='continueShp()'>\n\t\tAdd More Services\n\t</div>\n\t<div class=\"rightsidehlf\" (click)='callforprocessd()'>\n\t\tProceed\n\t</div>\n\t<div class=\"clear\"></div>\n</ion-footer>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_booknow_booknow_module_ts-es5.js.map