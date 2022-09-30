(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkSalon"] = self["webpackChunkSalon"] || []).push([["src_app_products_products_module_ts"], {
    /***/
    986:
    /*!*****************************************************!*\
      !*** ./src/app/products/products-routing.module.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductsPageRoutingModule": function ProductsPageRoutingModule() {
          return (
            /* binding */
            _ProductsPageRoutingModule
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


      var _products_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./products.page */
      43854);

      var routes = [{
        path: '',
        component: _products_page__WEBPACK_IMPORTED_MODULE_0__.ProductsPage
      }];

      var _ProductsPageRoutingModule = /*#__PURE__*/_createClass(function ProductsPageRoutingModule() {
        _classCallCheck(this, ProductsPageRoutingModule);
      });

      _ProductsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ProductsPageRoutingModule);
      /***/
    },

    /***/
    88980:
    /*!*********************************************!*\
      !*** ./src/app/products/products.module.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductsPageModule": function ProductsPageModule() {
          return (
            /* binding */
            _ProductsPageModule
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


      var _products_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./products-routing.module */
      986);
      /* harmony import */


      var _products_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./products.page */
      43854);

      var _ProductsPageModule = /*#__PURE__*/_createClass(function ProductsPageModule() {
        _classCallCheck(this, ProductsPageModule);
      });

      _ProductsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _products_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductsPageRoutingModule],
        declarations: [_products_page__WEBPACK_IMPORTED_MODULE_1__.ProductsPage]
      })], _ProductsPageModule);
      /***/
    },

    /***/
    43854:
    /*!*******************************************!*\
      !*** ./src/app/products/products.page.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductsPage": function ProductsPage() {
          return (
            /* binding */
            _ProductsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_products_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./products.page.html */
      75974);
      /* harmony import */


      var _products_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./products.page.scss */
      27451);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! jquery */
      91704);
      /* harmony import */


      var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);
      /* harmony import */


      var _itemdetails_itemdetails_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../itemdetails/itemdetails.page */
      48979);

      var _ProductsPage = /*#__PURE__*/function () {
        function ProductsPage(menuCtrl, apiService, basic, localApi, cart, route, alertController, location, modalController, activatedRoute) {
          _classCallCheck(this, ProductsPage);

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
          this.isPrd = true;
        }

        _createClass(ProductsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getappsetng = this.localApi.getappseting();
            this.imgpath = _environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.imagepath;
            this.category_id = this.activatedRoute.snapshot.paramMap.get('category');
            this.sub_category_id = this.activatedRoute.snapshot.paramMap.get('subcategory');
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
            var _this2 = this;

            this.totlaofcart();
            this.mycart = this.cart.getcart();
            this.carttotal = this.cart.getTotalCart();
            this.cartcount = this.mycart.length;
            this.basic.getObservable().subscribe(function (data) {
              _this2.totlaofcart();
            });
          }
        }, {
          key: "totlaofcart",
          value: function totlaofcart() {
            this.mycart = this.cart.getcart();
            this.carttotal = this.cart.getTotalCart();
            this.cartcount = this.mycart.length;
          }
        }, {
          key: "getallProducts",
          value: function getallProducts() {
            var _this3 = this;

            this.totlaofcart();
            this.postdata.category_id = this.category_id;
            this.postdata.sub_category_id = this.sub_category_id;
            this.basic.presentLoading();
            this.apiService.postdata('getproducts', this.postdata).subscribe(function (resp) {
              _this3.allProducts = resp.data;

              if (_this3.allProducts.length > 0) {
                _this3.isPrd = true;
              } else {
                _this3.isPrd = false;
              }

              for (var i = 0; i < _this3.allProducts.length; i++) {
                var single = _this3.allProducts[i];

                var qty = _this3.cart.getSingleQty(single.id);

                _this3.allProducts[i].qty = qty;
                _this3.allProducts[i].crtbtn = 'Select';

                if (_this3.allProducts[i].hours_time) {
                  _this3.allProducts[i].corner_text = _this3.allProducts[i].hours_time + ' Hour';
                }

                if (_this3.allProducts[i].minutes_time) {
                  _this3.allProducts[i].corner_text = _this3.allProducts[i].minutes_time + ' Minutes';
                }

                if (_this3.allProducts[i].hours_time && _this3.allProducts[i].minutes_time) {
                  _this3.allProducts[i].corner_text = _this3.allProducts[i].hours_time + ' Hour ' + _this3.allProducts[i].minutes_time + ' Minutes';
                }
              }

              setTimeout(function () {
                _this3.basic.dismissloader();
              }, 1000);
            }, function (err) {
              return false;
            });
          }
        }, {
          key: "addtoCart",
          value: function addtoCart(itm) {
            jquery__WEBPACK_IMPORTED_MODULE_7__('#addcartbtn_' + itm.id).hide();
            jquery__WEBPACK_IMPORTED_MODULE_7__('#qtycartbtn_' + itm.id).show();
            jquery__WEBPACK_IMPORTED_MODULE_7__('#itmqty_' + itm.id).html('1');
            this.cart.addcart(itm, '', '', '');
            this.totlaofcart();
          }
        }, {
          key: "minusqty",
          value: function minusqty(itm) {
            this.nowqty = '';
            this.nowval = '';
            this.nowqty = jquery__WEBPACK_IMPORTED_MODULE_7__('#itmqty_' + itm.id).html();

            if (this.nowqty == 1) {
              jquery__WEBPACK_IMPORTED_MODULE_7__('#addcartbtn_' + itm.id).show();
              jquery__WEBPACK_IMPORTED_MODULE_7__('#qtycartbtn_' + itm.id).hide();
            }

            this.nowval = parseInt(this.nowqty) - 1;
            jquery__WEBPACK_IMPORTED_MODULE_7__('#itmqty_' + itm.id).html(this.nowval);
            this.cart.minusqntyfrmprod(itm);
            this.totlaofcart();
          }
        }, {
          key: "addqty",
          value: function addqty(itm) {
            this.nowqty = '';
            this.nowval = '';
            this.nowqty = jquery__WEBPACK_IMPORTED_MODULE_7__('#itmqty_' + itm.id).html();
            this.nowval = parseInt(this.nowqty) + 1;
            jquery__WEBPACK_IMPORTED_MODULE_7__('#itmqty_' + itm.id).html(this.nowval);
            this.cart.plusqnty(itm);
            this.totlaofcart();
          }
        }, {
          key: "openDetailsItem",
          value: function openDetailsItem(itm) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var modal;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalController.create({
                        component: _itemdetails_itemdetails_page__WEBPACK_IMPORTED_MODULE_8__.ItemdetailsPage,
                        cssClass: 'my-custom-class',
                        componentProps: {
                          'item': itm
                        },
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
          key: "viewmycart",
          value: function viewmycart() {
            this.route.navigate(['/booknow']);
          }
        }, {
          key: "backmenu",
          value: function backmenu() {
            this.location.back();
          }
        }, {
          key: "openAlergyInfo",
          value: function openAlergyInfo(val) {
            if (val.allergy_info) {
              this.basic.alert('Allergy Info:', val.allergy_info);
            }
          }
        }]);

        return ProductsPage;
      }();

      _ProductsPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.MenuController
        }, {
          type: src_Providers_Services_api_service__WEBPACK_IMPORTED_MODULE_5__.ApiService
        }, {
          type: src_Providers_Basic_basic_api_service__WEBPACK_IMPORTED_MODULE_2__.BasicApiService
        }, {
          type: src_Providers_Local_local_api_service__WEBPACK_IMPORTED_MODULE_4__.LocalApiService
        }, {
          type: src_Providers_Cart_cart_api_service__WEBPACK_IMPORTED_MODULE_3__.CartApiService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_12__.Location
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute
        }];
      };

      _ProductsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-products',
        template: _raw_loader_products_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_products_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ProductsPage);
      /***/
    },

    /***/
    27451:
    /*!*********************************************!*\
      !*** ./src/app/products/products.page.scss ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".productlists {\n  width: 100%;\n  height: auto;\n  position: relative;\n  background: #fff;\n  padding: 10px;\n  border-radius: 10px;\n  margin-top: 30px;\n  float: left;\n  margin-bottom: 10px;\n}\n.productlists .outofstkstamp {\n  width: 100%;\n  height: auto;\n  text-align: center;\n  position: absolute;\n  z-index: 9;\n  top: 24px;\n  left: 0;\n  opacity: 0.8;\n}\n.productlists .outofstkstamp img {\n  width: 145px;\n}\n.productlists .itemimg {\n  width: 100%;\n  height: 100%;\n}\n.productlists .pro_img {\n  width: 100%;\n  overflow: hidden;\n}\n.productlists .prdimg {\n  width: 100%;\n  height: auto;\n  position: relative;\n  overflow: hidden;\n}\n.productlists .prdimg img {\n  width: 100%;\n}\n.productlists .prdimg .cornertxt {\n  width: 100px;\n  height: auto;\n  letter-spacing: 1px;\n  text-transform: capitalize;\n  background: #9fbd08;\n  color: #000;\n  padding: 3px 10px;\n  margin: 0 0 10px 0;\n  line-height: 13px;\n  position: absolute;\n  top: 54px;\n  left: -15px;\n  transform-origin: 0 0;\n  transform: rotate(315deg);\n  z-index: 99;\n  font-size: 8px;\n  text-align: center;\n  text-shadow: 0 1px 1px #292929;\n  box-shadow: 1px 1px 3px #404040;\n}\n.productlists .prdimg .hotdeal {\n  background: #F00;\n}\n.productlists .prdimg .bestdeal {\n  background: #f7b312;\n}\n.productlists .cardbtn {\n  width: 30%;\n  background-color: #353535;\n  font-size: 11px;\n  text-transform: uppercase;\n  color: #FFF;\n  text-align: right;\n  margin: 0 auto 0;\n  line-height: 24px;\n  position: relative;\n  padding-right: 8px;\n  float: right;\n  border-radius: 8px;\n}\n.productlists .cardbtn ion-icon {\n  background-color: #ff4181;\n  position: absolute;\n  font-size: 14px;\n  left: 0;\n  top: 0;\n  height: 24px;\n  padding: 0 7px;\n  border-top-left-radius: 8px;\n  border-bottom-left-radius: 8px;\n}\n.productlists .soldoutbtn {\n  width: 100%;\n  background-color: #353535;\n  font-size: 10px;\n  text-transform: uppercase;\n  color: #FFF;\n  text-align: center;\n  margin: 0 auto 0;\n  line-height: 24px;\n  position: relative;\n  padding-right: 4px;\n  font-weight: bold;\n}\n.productlists .soldoutbtn ion-icon {\n  background-color: #d71818;\n  position: absolute;\n  font-size: 12px;\n  left: 0;\n  top: 0;\n  height: 24px;\n  padding: 0 7px;\n}\n.productlists .cartbtn {\n  width: 100%;\n  background-color: #fff;\n  font-size: 14px;\n  text-transform: uppercase;\n  color: #000;\n  text-align: center;\n  margin: 0 auto 5px;\n  line-height: 24px;\n  position: relative;\n  margin-top: 5px;\n  display: none;\n}\n.productlists .cartbtn .minusbtn {\n  left: 0;\n  background-color: #353535;\n  position: absolute;\n  font-size: 20px;\n  top: 0;\n  height: 24px;\n  padding: 0 5px;\n  color: #FFF;\n  line-height: 30px;\n  border-radius: 3px;\n}\n.productlists .cartbtn .plusbtn {\n  right: 0;\n  background-color: #353535;\n  position: absolute;\n  font-size: 20px;\n  top: 0;\n  height: 24px;\n  padding: 0 5px;\n  color: #FFF;\n  line-height: 30px;\n  border-radius: 3px;\n}\n.productlists .itemcntnt {\n  width: 100%;\n  height: auto;\n}\n.productlists .itemcntnt img {\n  height: 21px;\n  margin-right: 6px;\n}\n.productlists .itemname {\n  width: 100%;\n  height: auto;\n  font-size: 14px;\n  font-weight: bold;\n  padding: 7px 0 0;\n  color: #ff4181;\n}\n.productlists .itemname img {\n  height: 10px;\n}\n.productlists .itemdesc {\n  width: 100%;\n  height: auto;\n  font-size: 12px;\n  color: #353535;\n}\n.productlists .itemdesc p {\n  margin: 5px 0px;\n}\n.itemprice {\n  width: 70%;\n  height: auto;\n  font-size: 20px;\n  font-weight: bold;\n  float: left;\n}\n.itemprice span {\n  font-size: 12px;\n  font-weight: normal;\n}\n.pro_img {\n  width: 100%;\n  height: 110px;\n  overflow: hidden;\n  text-align: center;\n}\n.pro_img img {\n  height: 100%;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n}\n.claer {\n  clear: both;\n}\n.leftnameandother {\n  width: 70%;\n  height: 100%;\n  float: left;\n  padding-right: 15px;\n}\n.rightimgsnaothr {\n  width: 30%;\n  height: 100%;\n  float: left;\n  margin-top: -35px;\n}\n/*# sourceMappingURL=data:application/json;base64,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QUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUhKO0FBSUk7RUFDSSxZQUFBO0VBRUEsMkJBQUE7RUFBQSxzQkFBQTtBQUhSO0FBTUE7RUFDSSxXQUFBO0FBSEo7QUFLQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBRko7QUFJQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBREoiLCJmaWxlIjoicHJvZHVjdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ucHJvZHVjdGxpc3Rze1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIC5vdXRvZnN0a3N0YW1we1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgei1pbmRleDogOTtcbiAgICAgICAgdG9wOiAyNHB4O1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICAgIGltZ3tcbiAgICAgICAgICAgIHdpZHRoOiAxNDVweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5pdGVtaW1ne1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbiAgICAucHJvX2ltZ3tcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxuICAgIC5wcmRpbWd7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgaW1ne1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgLmNvcm5lcnR4dHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM5ZmJkMDg7XG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDNweCAxMHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwIDAgMTBweCAwO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEzcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDU0cHg7XG4gICAgICAgICAgICBsZWZ0OiAtMTVweDtcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDMxNWRlZyk7XG4gICAgICAgICAgICB6LWluZGV4OiA5OTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMXB4IDFweCAjMjkyOTI5O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggIzQwNDA0MDtcbiAgICAgICAgfVxuICAgICAgICAuaG90ZGVhbHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGMDA7XG4gICAgICAgIH1cbiAgICAgICAgLmJlc3RkZWFse1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y3YjMxMjtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuY2FyZGJ0bntcbiAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM1MzUzNTtcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBjb2xvcjogI0ZGRjtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvIDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNDE4MTs7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMCA3cHg7XG4gICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA4cHg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA4cHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuc29sZG91dGJ0bntcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzNTM1MzU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgY29sb3I6ICNGRkY7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG8gMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgcGFkZGluZy1yaWdodDogNHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgaW9uLWljb257XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDcxODE4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgN3B4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmNhcnRidG57XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvIDVweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAubWludXNidG57XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM1MzUzNTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgNXB4O1xuICAgICAgICAgICAgY29sb3I6ICNGRkY7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgfVxuICAgICAgICAucGx1c2J0bntcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM1MzUzNTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgNXB4O1xuICAgICAgICAgICAgY29sb3I6ICNGRkY7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuaXRlbWNudG50e1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBpbWd7XG4gICAgICAgICAgICBoZWlnaHQ6IDIxcHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDZweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuaXRlbW5hbWV7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHBhZGRpbmc6IDdweCAwIDA7XG4gICAgICAgIGNvbG9yOiAjZmY0MTgxO1xuICAgICAgICBpbWd7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLml0ZW1kZXNje1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGNvbG9yOiAjMzUzNTM1O1xuICAgICAgICAvLyBwYWRkaW5nOiA3cHggMDtcbiAgICAgICAgcHtcbiAgICAgICAgICAgIG1hcmdpbjogNXB4IDBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cbi5pdGVtcHJpY2V7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHNwYW57XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICB9XG59XG5cbi5wcm9faW1ne1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTEwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaW1ne1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIC8vIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICAgIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgfVxufVxuLmNsYWVye1xuICAgIGNsZWFyOiBib3RoO1xufVxuLmxlZnRuYW1lYW5kb3RoZXJ7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cbi5yaWdodGltZ3NuYW90aHJ7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luLXRvcDogLTM1cHg7XG59Il19 */";
      /***/
    },

    /***/
    75974:
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/products.page.html ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"header-background-color\">\n  \t <!-- <ion-back-button slot=\"start\"></ion-back-button> --><ion-menu-button slot=\"start\"></ion-menu-button>\n    <ion-title class=\"heaerfont\">{{title}}</ion-title>\n    <ion-buttons slot=\"end\" (click)='viewmycart()'>\n    \t<div class=\"cartcount\" *ngIf='cartcount'>\n    \t\t{{cartcount}}\n    \t</div>\n      <ion-icon name=\"cart-outline\" class='headerrighticon'></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n\t    <ion-refresher-content></ion-refresher-content>\n\t </ion-refresher>\n   \n   <div class=\"padcontr\">\n    <div class=\"notcartitm\" *ngIf='!isPrd'>\n      <img src=\"assets/shoppingEmpty.png\"><p><span>There is no item for this category</span></p>\n      <div class=\"brwsmenu\" (click)='backmenu()'><span>Browse Menu</span></div>\n    </div>\n    <div *ngIf='isPrd'>\n      <div class=\"productlists\" *ngFor=\"let item of allProducts\">\n        <div>\n          <div class=\"leftnameandother\">\n            <div class=\"itemname\" (click)=\"openDetailsItem(item)\">\n              {{item.name}}\n            </div>\n            <div class=\"itemdesc\" (click)=\"openDetailsItem(item)\" [innerHTML]='item.description'>\n              <!-- <span [innerHTML]='item.description'></span> -->\n            </div>\n          </div>\n          <div class=\"rightimgsnaothr\">\n            <div class=\"itemimg\">\n              <div class=\"prdimg\">\n                <div class=\"pro_img\">\n                  <img src=\"{{imgpath}}products/{{item.imgs[0]}}\" style=\"border-radius: 8px; width: 100%; height: 100%; object-fit: cover;\" (click)=\"openDetailsItem(item)\">\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"claer\"></div>\n          <div style=\"margin-top: 2px;\">\n            <div class=\"itemprice\">\n              <span><code [innerHTML]='getappsetng?.currency_symbol'></code></span>{{item.price}}\n            </div>\n            <div [style.display]=\"item.qty?'none':'inherit'\" id=\"addcartbtn_{{item.id}}\" class=\"cardbtn\" (click)=\"addtoCart(item)\">\n              <ion-icon name=\"cart-outline\"></ion-icon> {{item.crtbtn}}\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"claer\"></div>\n  </div>\n</ion-content>\n\n<ion-footer class=\"ion-no-border myfootercart\" *ngIf='cartcount'>\n  <div class=\"leftprice\">\n    {{cartcount}} Service(s) | <code [innerHTML]='getappsetng?.currency_symbol'></code>{{carttotal}}<br>\n    \n  </div>\n  <div class=\"viewcardbtn\" (click)='viewmycart()'>\n    View Cart <ion-icon name=\"cart-outline\"></ion-icon>\n  </div>\n  <div class=\"clear\"></div>\n</ion-footer>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_products_products_module_ts-es5.js.map