(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkSalon"] = self["webpackChunkSalon"] || []).push([["main"], {
    /***/
    98255: function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 98255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    92306: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BasicApiService": function BasicApiService() {
          return (
            /* binding */
            _BasicApiService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      79765);

      var _BasicApiService = /*#__PURE__*/function () {
        function BasicApiService(toastController, loadingController, alertController) {
          _classCallCheck(this, BasicApiService);

          this.toastController = toastController;
          this.loadingController = loadingController;
          this.alertController = alertController;
          this.fooSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        }

        _createClass(BasicApiService, [{
          key: "presentToast",
          value: function presentToast(msg) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var toast;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.toastController.create({
                        message: msg,
                        position: 'top',
                        duration: 2000
                      });

                    case 2:
                      toast = _context.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "publishSomeData",
          value: function publishSomeData(data) {
            this.fooSubject.next(data);
          }
        }, {
          key: "getObservable",
          value: function getObservable() {
            return this.fooSubject;
          }
        }, {
          key: "presentLoading",
          value: function presentLoading() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var loading;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.isLoading = true;
                      _context2.next = 3;
                      return this.loadingController.create({
                        message: 'Please wait...',
                        spinner: 'bubbles' // message: '<img src="' + this.app_assets_url + '">'

                      });

                    case 3:
                      loading = _context2.sent;
                      _context2.next = 6;
                      return loading.present();

                    case 6:
                      return _context2.abrupt("return", _context2.sent);

                    case 7:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "dismissloader",
          value: function dismissloader() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.isLoading = false;
                      _context3.next = 3;
                      return this.loadingController.dismiss().then(function () {
                        return console.log('dismissed this loading');
                      });

                    case 3:
                      return _context3.abrupt("return", _context3.sent);

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "alert",
          value: function alert(head, msg) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var alert;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.alertController.create({
                        header: head,
                        message: msg,
                        buttons: [{
                          text: 'OK',
                          handler: function handler() {
                            console.log('ok');
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
          key: "imagepas",
          value: function imagepas() {
            return '';
          }
        }]);

        return BasicApiService;
      }();

      _BasicApiService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ToastController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.LoadingController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.AlertController
        }];
      };

      _BasicApiService = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _BasicApiService);
      /***/
    },

    /***/
    65248: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CartApiService": function CartApiService() {
          return (
            /* binding */
            _CartApiService
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


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../environments/environment */
      92340);

      var _CartApiService = /*#__PURE__*/function () {
        function CartApiService() {
          _classCallCheck(this, CartApiService);

          var mycrt = JSON.parse(localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.storage_prefix + 'cartlist'));

          if (!mycrt) {
            localStorage.setItem(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.storage_prefix + 'cartlist', '[]');
          }
        }

        _createClass(CartApiService, [{
          key: "removeCart",
          value: function removeCart() {
            localStorage.setItem(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.storage_prefix + 'cartlist', '[]');
          }
        }, {
          key: "addcart",
          value: function addcart(item, variation, selections, mealdeal) {
            console.log("item", item);
            var slcTotal = 0;
            var mldlTotal = 0;
            var productnames, prodcPrice, prdid, itemtotal, itmOnly, isvartn, isoptn, ismldl;

            if (variation) {
              productnames = item.name + ' - ' + variation.name;
              prodcPrice = variation.price;
              itmOnly = variation.price;
              prdid = item.id + '_' + variation.id;
              isvartn = 'YES';
            } else if (selections) {
              productnames = item.name;
              prodcPrice = item.price;
              itmOnly = item.price;
              prdid = item.id + '_otpn';
              isvartn = '';
            } else if (mealdeal) {
              if (variation) {
                productnames = item.name + ' - ' + variation.name;
                prodcPrice = variation.price;
                itmOnly = variation.price;
                prdid = item.id + '_' + variation.id;
              } else {
                prodcPrice = item.price;
                itmOnly = item.price;
                productnames = item.name;
                prdid = item.id + '_mldl';
              }

              isvartn = 'YES';
            } else {
              productnames = item.name;
              prodcPrice = item.price;
              itmOnly = item.price;
              prdid = item.id;
              isvartn = '';
            }

            if (selections) {
              var selecTTotal = 0.00;

              for (var i = 0; i < selections.length; i++) {
                var fil = parseFloat(selections[i].price);
                selecTTotal += fil;
              }

              var fnSlTotal = selecTTotal.toFixed(2);
              var slcTtl = parseFloat(fnSlTotal);
              slcTotal = slcTtl.toFixed(2);
              isoptn = 'YES';
              var withslpr = parseFloat(slcTotal) + parseFloat(prodcPrice);
            } else {
              isoptn = '';
              var withslpr = 0;
            }

            if (mealdeal) {
              var mslDttol = 0.00;

              for (var r = 0; r < mealdeal.length; r++) {
                mealdeal[r].total = mealdeal[r].price;
                var fil = parseFloat(mealdeal[r].price);
                mslDttol += fil;
              }

              var fnmldtal = mslDttol.toFixed(2);
              var mslTtol = parseFloat(fnmldtal);
              mldlTotal = mslTtol.toFixed(2);
              ismldl = 'YES';
              var withmealdeal = parseFloat(mldlTotal) + parseFloat(prodcPrice);
            } else {
              ismldl = '';
              var withmealdeal = 0;
            }

            var item_sub_total = parseFloat(itmOnly) + parseFloat(slcTotal) + parseFloat(mldlTotal);
            this.locres_cartlist = JSON.parse(localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.storage_prefix + 'cartlist'));

            if (this.locres_cartlist.length > 0) {
              var existingCartProduct = [];
              existingCartProduct = this.filterCart(this.locres_cartlist, item.id);

              if (existingCartProduct && existingCartProduct.length > 0 && !variation && !item.extras) {
                existingCartProduct[0].qty++;
                var prcFloat = existingCartProduct[0].qty * existingCartProduct[0].price;
                var totalpriceincr = prcFloat.toFixed(2);
                existingCartProduct[0].total = totalpriceincr;
              } else {
                var totalforitem = parseFloat(prodcPrice);
                var productDetails = [{
                  'name': productnames,
                  'image': item.productImage,
                  'preorder': item.preorder,
                  'pre_time': item.preorder_text,
                  'price': prodcPrice,
                  'id': prdid,
                  'productDesc': item.description,
                  'selections': selections,
                  'productType': item.foodcategory,
                  'qty': 1,
                  'total': totalforitem * 1,
                  'slcTotal': slcTotal,
                  'itemtotal': itmOnly * 1,
                  'item_sub_total': item_sub_total.toFixed(2),
                  'itmOnly': itmOnly,
                  'xtras': item.extras,
                  'isvartn': isvartn,
                  'isoptn': isoptn,
                  'withslpr': withslpr,
                  'ismldl': ismldl,
                  'withmealdeal': withmealdeal,
                  'mealdeal': mealdeal,
                  'mldlTotal': mldlTotal,
                  'corner_text': item.corner_text
                }];
                this.locres_cartlist.push(productDetails[0]);
              }
            } else {
              var _totalforitem = parseFloat(prodcPrice);

              var _productDetails = [{
                'name': productnames,
                'image': item.productImage,
                'preorder': item.preorder,
                'pre_time': item.preorder_text,
                'price': prodcPrice,
                'id': prdid,
                'productDesc': item.description,
                'selections': selections,
                'productType': item.foodcategory,
                'qty': 1,
                'total': _totalforitem * 1,
                'slcTotal': slcTotal,
                'itemtotal': itmOnly * 1,
                'item_sub_total': item_sub_total.toFixed(2),
                'itmOnly': itmOnly,
                'xtras': item.extras,
                'isvartn': isvartn,
                'isoptn': isoptn,
                'withslpr': withslpr,
                'ismldl': ismldl,
                'withmealdeal': withmealdeal,
                'mealdeal': mealdeal,
                'mldlTotal': mldlTotal,
                'corner_text': item.corner_text
              }];
              this.locres_cartlist.push(_productDetails[0]);
            }

            localStorage.setItem(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.storage_prefix + 'cartlist', JSON.stringify(this.locres_cartlist));
            return this.getcart();
          }
        }, {
          key: "getcart",
          value: function getcart() {
            return JSON.parse(localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.storage_prefix + 'cartlist'));
          }
        }, {
          key: "plusqnty",
          value: function plusqnty(item) {
            this.locres_cartlist = JSON.parse(localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.storage_prefix + 'cartlist'));
            var existingCartProduct = [];
            existingCartProduct = this.filterCart(this.locres_cartlist, item.id);
            existingCartProduct[0].qty++;
            var prcFloat = existingCartProduct[0].qty * existingCartProduct[0].price;
            var totalpriceincr = prcFloat.toFixed(2);
            var itprcFloat = existingCartProduct[0].qty * existingCartProduct[0].itmOnly;
            var ittotalpriceincr = itprcFloat.toFixed(2);
            existingCartProduct[0].itemtotal = ittotalpriceincr;
            var slcTotal = 0;

            for (var i = 0; i < existingCartProduct[0].selections.length; i++) {
              var newsltrl = existingCartProduct[0].selections[i].price * existingCartProduct[0].qty;
              existingCartProduct[0].selections[i].total = newsltrl.toFixed(2);
              slcTotal = parseFloat(existingCartProduct[0].selections[i].total) + parseFloat(slcTotal);
            }

            var mldlTotal = 0;

            if (existingCartProduct[0].mealdeal) {
              for (var _i = 0; _i < existingCartProduct[0].mealdeal.length; _i++) {
                var newsltrl = existingCartProduct[0].mealdeal[_i].price * existingCartProduct[0].qty;
                existingCartProduct[0].mealdeal[_i].total = newsltrl.toFixed(2);
                mldlTotal = parseFloat(existingCartProduct[0].mealdeal[_i].total) + parseFloat(mldlTotal);
              }
            }

            existingCartProduct[0].slcTotal = slcTotal;
            existingCartProduct[0].mldlTotal = mldlTotal;
            var item_sub_total = parseFloat(totalpriceincr) + parseFloat(slcTotal) + parseFloat(mldlTotal);
            existingCartProduct[0].item_sub_total = item_sub_total.toFixed(2);
            localStorage.setItem(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.storage_prefix + 'cartlist', JSON.stringify(this.locres_cartlist));
            return this.getcart();
          }
        }, {
          key: "minusqntyfrmprod",
          value: function minusqntyfrmprod(item) {
            this.locres_cartlist = JSON.parse(localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.storage_prefix + 'cartlist'));
            var existingCartProduct = [];
            existingCartProduct = this.filterCart(this.locres_cartlist, item.id);

            if (existingCartProduct[0].qty > 1) {
              existingCartProduct[0].qty--;
              var prcFloat = existingCartProduct[0].qty * existingCartProduct[0].price;
              var totalpriceincr = prcFloat.toFixed(2);
              existingCartProduct[0].total = totalpriceincr;
              var itprcFloat = existingCartProduct[0].qty * existingCartProduct[0].itmOnly;
              var ittotalpriceincr = itprcFloat.toFixed(2);
              existingCartProduct[0].itemtotal = ittotalpriceincr;
              var slcTotal = 0;

              for (var i = 0; i < existingCartProduct[0].selections.length; i++) {
                var newsltrl = existingCartProduct[0].selections[i].price * existingCartProduct[0].qty;
                existingCartProduct[0].selections[i].total = newsltrl.toFixed(2);
                slcTotal = parseFloat(existingCartProduct[0].selections[i].total) + parseFloat(slcTotal);
              }

              var mldlTotal = 0;

              if (existingCartProduct[0].mealdeal) {
                for (var _i2 = 0; _i2 < existingCartProduct[0].mealdeal.length; _i2++) {
                  var newsltrl = existingCartProduct[0].mealdeal[_i2].price * existingCartProduct[0].qty;
                  existingCartProduct[0].mealdeal[_i2].total = newsltrl.toFixed(2);
                  mldlTotal = parseFloat(existingCartProduct[0].mealdeal[_i2].total) + parseFloat(mldlTotal);
                }
              }

              existingCartProduct[0].slcTotal = slcTotal;
              existingCartProduct[0].mldlTotal = mldlTotal;
              var item_sub_total = parseFloat(totalpriceincr) + parseFloat(slcTotal) + parseFloat(mldlTotal);
              existingCartProduct[0].item_sub_total = item_sub_total.toFixed(2);
            } else {
              for (var _i3 = 0; _i3 < this.locres_cartlist.length; _i3++) {
                if (this.locres_cartlist[_i3].id == item.id) {
                  this.deleteProduct(_i3);
                }
              }
            }

            localStorage.setItem(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.storage_prefix + 'cartlist', JSON.stringify(this.locres_cartlist));
            return this.getcart();
          }
        }, {
          key: "deleteProduct",
          value: function deleteProduct(index) {
            this.locres_cartlist = JSON.parse(localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.storage_prefix + 'cartlist'));
            this.locres_cartlist.splice(index, 1);
            localStorage.setItem(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.storage_prefix + 'cartlist', JSON.stringify(this.locres_cartlist));
            return this.getcart();
          }
        }, {
          key: "filterCart",
          value: function filterCart(cartProducts, id) {
            var returnArray = [];

            for (var i = 0; i < cartProducts.length; i++) {
              if (cartProducts[i].id == id) {
                returnArray.push(cartProducts[i]);
              }
            }

            return returnArray;
          }
        }, {
          key: "getSingleQty",
          value: function getSingleQty(itm) {
            var cart = this.getcart();

            for (var i = 0; i < cart.length; i++) {
              if (cart[i].id == itm) {
                return cart[i].qty;
              }
            }
          }
        }, {
          key: "getTotalCart",
          value: function getTotalCart() {
            var cart = this.getcart();
            this.forcrtttl = 0;

            for (var i = 0; i < cart.length; i++) {
              var total = parseFloat(cart[i].item_sub_total);
              this.forcrtttl = parseFloat(total) + parseFloat(this.forcrtttl);
            }

            return this.forcrtttl.toFixed(2);
          }
        }]);

        return CartApiService;
      }();

      _CartApiService.ctorParameters = function () {
        return [];
      };

      _CartApiService = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
      })], _CartApiService);
      /***/
    },

    /***/
    99068: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LocalApiService": function LocalApiService() {
          return (
            /* binding */
            _LocalApiService
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


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../environments/environment */
      92340);

      var _LocalApiService = /*#__PURE__*/function () {
        function LocalApiService() {
          _classCallCheck(this, LocalApiService);

          var dirymtl = JSON.parse(localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.storage_prefix + 'setngpushface'));

          if (!dirymtl) {
            var psfc = {
              push: true,
              face: false
            };
            localStorage.setItem(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.storage_prefix + 'setngpushface', JSON.stringify(psfc));
          }
        }

        _createClass(LocalApiService, [{
          key: "getuser",
          value: function getuser() {
            return JSON.parse(localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.storage_prefix + 'user'));
          }
        }, {
          key: "setuser",
          value: function setuser(val) {
            localStorage.setItem(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.storage_prefix + 'user', JSON.stringify(val));
            this.setuserdevice(val);
          }
        }, {
          key: "removeUser",
          value: function removeUser() {
            localStorage.removeItem(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.storage_prefix + 'user');
          }
        }, {
          key: "getuserdevice",
          value: function getuserdevice() {
            return JSON.parse(localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.storage_prefix + 'userdevice'));
          }
        }, {
          key: "setuserdevice",
          value: function setuserdevice(val) {
            localStorage.setItem(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.storage_prefix + 'userdevice', JSON.stringify(val));
          }
        }, {
          key: "callforuser",
          value: function callforuser() {
            return 'hello';
          }
        }, {
          key: "getappseting",
          value: function getappseting() {
            return JSON.parse(localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.storage_prefix + 'appsetting'));
          }
        }, {
          key: "setappseting",
          value: function setappseting(val) {
            localStorage.setItem(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.storage_prefix + 'appsetting', JSON.stringify(val));
          }
        }, {
          key: "getdeladrs",
          value: function getdeladrs() {
            return JSON.parse(localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.storage_prefix + 'deladdrs'));
          }
        }, {
          key: "setdeladrs",
          value: function setdeladrs(val) {
            localStorage.setItem(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.storage_prefix + 'deladdrs', JSON.stringify(val));
          }
        }, {
          key: "removedeladrs",
          value: function removedeladrs() {
            localStorage.removeItem(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.storage_prefix + 'deladdrs');
          }
        }, {
          key: "getdelcost",
          value: function getdelcost() {
            return JSON.parse(localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.storage_prefix + 'delcost'));
          }
        }, {
          key: "setdelcost",
          value: function setdelcost(val) {
            localStorage.setItem(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.storage_prefix + 'delcost', JSON.stringify(val));
          }
        }, {
          key: "removedelcost",
          value: function removedelcost() {
            localStorage.removeItem(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.storage_prefix + 'delcost');
          }
        }, {
          key: "getxtrnt",
          value: function getxtrnt() {
            return localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.storage_prefix + 'xtrnt');
          }
        }, {
          key: "setxtrnt",
          value: function setxtrnt(val) {
            localStorage.setItem(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.storage_prefix + 'xtrnt', val);
          }
        }, {
          key: "removextrnt",
          value: function removextrnt() {
            localStorage.removeItem(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.storage_prefix + 'xtrnt');
          }
        }, {
          key: "getapplyedofr",
          value: function getapplyedofr() {
            return JSON.parse(localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.storage_prefix + 'apldofr'));
          }
        }, {
          key: "setapplyedofr",
          value: function setapplyedofr(val) {
            localStorage.setItem(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.storage_prefix + 'apldofr', JSON.stringify(val));
          }
        }, {
          key: "removeapplyedofr",
          value: function removeapplyedofr() {
            localStorage.removeItem(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.storage_prefix + 'apldofr');
          }
        }, {
          key: "getpushfaceset",
          value: function getpushfaceset() {
            return JSON.parse(localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.storage_prefix + 'setngpushface'));
          }
        }, {
          key: "setpushfaceset",
          value: function setpushfaceset(val) {
            localStorage.setItem(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.storage_prefix + 'setngpushface', JSON.stringify(val));
          }
        }, {
          key: "getordertype",
          value: function getordertype() {
            return localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.storage_prefix + 'ordtype');
          }
        }, {
          key: "setordertype",
          value: function setordertype(val) {
            localStorage.setItem(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.storage_prefix + 'ordtype', val);
          }
        }, {
          key: "removeordertype",
          value: function removeordertype() {
            localStorage.removeItem(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.storage_prefix + 'ordtype');
          }
        }, {
          key: "getdeltime",
          value: function getdeltime() {
            return localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.storage_prefix + 'deltime');
          }
        }, {
          key: "setdeltime",
          value: function setdeltime(val) {
            localStorage.setItem(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.storage_prefix + 'deltime', val);
          }
        }, {
          key: "removedeltime",
          value: function removedeltime() {
            localStorage.removeItem(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.storage_prefix + 'deltime');
          }
        }]);

        return LocalApiService;
      }();

      _LocalApiService.ctorParameters = function () {
        return [];
      };

      _LocalApiService = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
      })], _LocalApiService);
      /***/
    },

    /***/
    48158: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ApiService": function ApiService() {
          return (
            /* binding */
            _ApiService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _Local_local_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../Local/local-api.service */
      99068);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../environments/environment */
      92340);

      var _ApiService = /*#__PURE__*/function () {
        function ApiService(http, localapiservice) {
          _classCallCheck(this, ApiService);

          this.http = http;
          this.localapiservice = localapiservice;
          this.baseurl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.baseurl + 'restapi/';
        }

        _createClass(ApiService, [{
          key: "postdata",
          value: function postdata(url, postParams) {
            this.token = 'OK';
            return this.http.post(this.baseurl + url, postParams, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
                Authorization: this.token
              })
            });
          }
        }, {
          key: "getdata",
          value: function getdata(url) {
            var token = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            this.token = token;
            return this.http.get(this.baseurl + url, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
                Authorization: this.token
              })
            });
          }
        }]);

        return ApiService;
      }();

      _ApiService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient
        }, {
          type: _Local_local_api_service__WEBPACK_IMPORTED_MODULE_0__.LocalApiService
        }];
      };

      _ApiService = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
      })], _ApiService);
      /***/
    },

    /***/
    90158: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppRoutingModule": function AppRoutingModule() {
          return (
            /* binding */
            _AppRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var routes = [{
        path: '',
        redirectTo: 'homepage',
        pathMatch: 'full'
      }, {
        path: 'homepage',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_jquery_dist_jquery_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_homepage_homepage_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./homepage/homepage.module */
          42173)).then(function (m) {
            return m.HomepagePageModule;
          });
        }
      }, {
        path: 'homepage1',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_jquery_dist_jquery_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_homepage1_homepage_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./homepage1/homepage.module */
          1612)).then(function (m) {
            return m.HomepagePageModule;
          });
        }
      }, {
        path: 'homepage2',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_jquery_dist_jquery_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_homepage2_homepage_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./homepage2/homepage.module */
          83734)).then(function (m) {
            return m.HomepagePageModule;
          });
        }
      }, {
        path: 'homepage3',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_jquery_dist_jquery_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_homepage3_homepage_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./homepage3/homepage.module */
          60933)).then(function (m) {
            return m.HomepagePageModule;
          });
        }
      }, {
        path: 'homepage4',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_jquery_dist_jquery_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_homepage4_homepage_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./homepage4/homepage.module */
          76396)).then(function (m) {
            return m.HomepagePageModule;
          });
        }
      }, {
        path: 'homepage5',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_jquery_dist_jquery_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_homepage5_homepage_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./homepage5/homepage.module */
          90399)).then(function (m) {
            return m.HomepagePageModule;
          });
        }
      }, {
        path: 'homepage6',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_jquery_dist_jquery_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_homepage6_homepage_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./homepage6/homepage.module */
          86756)).then(function (m) {
            return m.HomepagePageModule;
          });
        }
      }, {
        path: 'homepage7',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_jquery_dist_jquery_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_homepage7_homepage_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./homepage7/homepage.module */
          51042)).then(function (m) {
            return m.HomepagePageModule;
          });
        }
      }, {
        path: 'homepage8',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_jquery_dist_jquery_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_homepage8_homepage_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./homepage8/homepage.module */
          67202)).then(function (m) {
            return m.HomepagePageModule;
          });
        }
      }, {
        path: 'loginpage',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_loginpage_loginpage_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./loginpage/loginpage.module */
          38828)).then(function (m) {
            return m.LoginpagePageModule;
          });
        }
      }, {
        path: 'ourstylists',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_ourstylists_ourstylists_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./ourstylists/ourstylists.module */
          7588)).then(function (m) {
            return m.OurstylistsPageModule;
          });
        }
      }, {
        path: 'imagegallerypage/:pgtype',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_imagegallerypage_imagegallerypage_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./imagegallerypage/imagegallerypage.module */
          31165)).then(function (m) {
            return m.ImagegallerypagePageModule;
          });
        }
      }, {
        path: 'aboutus/:pgtype',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_aboutus_aboutus_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./aboutus/aboutus.module */
          76202)).then(function (m) {
            return m.AboutusPageModule;
          });
        }
      }, {
        path: 'reviewandrating',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e("src_app_reviewandrating_reviewandrating_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./reviewandrating/reviewandrating.module */
          21646)).then(function (m) {
            return m.ReviewandratingPageModule;
          });
        }
      }, {
        path: 'openinghours',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e("src_app_openinghours_openinghours_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./openinghours/openinghours.module */
          16059)).then(function (m) {
            return m.OpeninghoursPageModule;
          });
        }
      }, {
        path: 'offer/:pgtype',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e("src_app_offer_offer_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./offer/offer.module */
          61357)).then(function (m) {
            return m.OfferPageModule;
          });
        }
      }, {
        path: 'listviews/:pgtype',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e("src_app_listviews_listviews_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./listviews/listviews.module */
          36295)).then(function (m) {
            return m.ListviewsPageModule;
          });
        }
      }, {
        path: 'ourteam/:pgtype',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_ourteam_ourteam_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./ourteam/ourteam.module */
          16962)).then(function (m) {
            return m.OurteamPageModule;
          });
        }
      }, {
        path: 'contactus',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_contactus_contactus_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./contactus/contactus.module */
          58037)).then(function (m) {
            return m.ContactusPageModule;
          });
        }
      }, {
        path: 'subcategory/:categoryid/:title',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_subcategory_subcategory_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./subcategory/subcategory.module */
          36884)).then(function (m) {
            return m.SubcategoryPageModule;
          });
        }
      }, {
        path: 'products/:category/:subcategory/:title',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_jquery_dist_jquery_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_products_products_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./products/products.module */
          88980)).then(function (m) {
            return m.ProductsPageModule;
          });
        }
      }, {
        path: 'itemdetails',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e("src_app_itemdetails_itemdetails_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./itemdetails/itemdetails.module */
          55445)).then(function (m) {
            return m.ItemdetailsPageModule;
          });
        }
      }, {
        path: 'offerdetails',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e("src_app_offerdetails_offerdetails_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./offerdetails/offerdetails.module */
          95190)).then(function (m) {
            return m.OfferdetailsPageModule;
          });
        }
      }, {
        path: 'myaccount/:status',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e("src_app_myaccount_myaccount_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./myaccount/myaccount.module */
          48498)).then(function (m) {
            return m.MyaccountPageModule;
          });
        }
      }, {
        path: 'profileupdate',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e("src_app_profileupdate_profileupdate_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./profileupdate/profileupdate.module */
          60149)).then(function (m) {
            return m.ProfileupdatePageModule;
          });
        }
      }, {
        path: 'booknow',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_jquery_dist_jquery_js"), __webpack_require__.e("src_app_booknow_booknow_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./booknow/booknow.module */
          78534)).then(function (m) {
            return m.BooknowPageModule;
          });
        }
      }, {
        path: 'mybooking',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_mybooking_mybooking_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./mybooking/mybooking.module */
          24096)).then(function (m) {
            return m.MybookingPageModule;
          });
        }
      }, {
        path: 'checkout',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_checkout_checkout_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./checkout/checkout.module */
          28400)).then(function (m) {
            return m.CheckoutPageModule;
          });
        }
      }, {
        path: 'videogallery/:pgtype',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_videogallery_videogallery_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./videogallery/videogallery.module */
          42091)).then(function (m) {
            return m.VideogalleryPageModule;
          });
        }
      }, {
        path: 'writereview',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e("src_app_writereview_writereview_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./writereview/writereview.module */
          7037)).then(function (m) {
            return m.WritereviewPageModule;
          });
        }
      }, {
        path: 'orderdetails/:orderid/:pagetype',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_orderdetails_orderdetails_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./orderdetails/orderdetails.module */
          81195)).then(function (m) {
            return m.OrderdetailsPageModule;
          });
        }
      }];

      var _AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      _AppRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      })], _AppRoutingModule);
      /***/
    },

    /***/
    55041: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./app.component.html */
      91106);
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component.scss */
      43069);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var src_Providers_Services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/Providers/Services/api.service */
      48158);
      /* harmony import */


      var src_Providers_Local_local_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/Providers/Local/local-api.service */
      99068);
      /* harmony import */


      var _loginpage_loginpage_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./loginpage/loginpage.page */
      42985);
      /* harmony import */


      var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/onesignal/ngx */
      61779);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../environments/environment */
      92340);

      var _AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, route, apiService, localApi, menu, modalController, oneSignal) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.route = route;
          this.apiService = apiService;
          this.localApi = localApi;
          this.menu = menu;
          this.modalController = modalController;
          this.oneSignal = oneSignal;
          this.appPages = [{
            title: 'Gobierno Regional Puno',
            url: '/homepage',
            icon: 'home'
          }, {
            title: 'Gobierno Local San Roman',
            url: '/homepage1',
            icon: 'man'
          }, {
            title: 'Gobierno Local Puno',
            url: '/homepage2',
            icon: 'man'
          }, {
            title: 'Gobierno Local Lampa',
            url: '/homepage3',
            icon: 'man'
          }, {
            title: 'Gobierno Local San Antonio de Putina',
            url: '/homepage4',
            icon: 'man'
          }, {
            title: 'Gobierno Local San Pedro de Moho',
            url: '/homepage5',
            icon: 'man'
          }, {
            title: 'Gobierno Local Chucuito',
            url: '/homepage6',
            icon: 'man'
          }, {
            title: 'Gobierno Local Azangaro',
            url: '/homepage7',
            icon: 'man'
          }, {
            title: 'Gobierno Local Yunguyo',
            url: '/homepage8',
            icon: 'man'
          } // { title: 'Our Services', url: '/ourstylists', icon:'man'},
          // { title: 'Make An Appointment', url: '/mybooking', icon:'calendar'},
          // { title: 'Offers', url: '/offer/noapply', icon:'gift'},
          // { title: 'Reviews / Ratings', url: '/reviewandrating', icon:'star-half'},
          // { title: 'Opening Hours', url: '/openinghours', icon:'time'},
          // { title: 'About Us', url: '/listviews/About Us', icon:'information-circle'},
          // { title: 'Help & Info', url: '/listviews/Help and Info', icon:'help-circle'},
          // { title: 'Contact Us', url: '/contactus', icon:'call'},
          // { title: 'Settings', url: '/listviews/Settings', icon:'settings'},
          ];
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
          this.postdata = {};
          this.initializeApp();
        }

        _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            var _this = this;

            // this.apiService.getdata('getappsetings', '').subscribe((resp: any) => {
            this.localApi.setappseting(this.respData.data);
            this.appstngs = this.respData.data; //}, (err: any) => false);

            this.platform.ready().then(function () {
              _this.oneSignal.startInit(_environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.onesignalkey, _environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.firebasekey);

              _this.oneSignal.inFocusDisplaying(_this.oneSignal.OSInFocusDisplayOption.InAppAlert);

              _this.oneSignal.handleNotificationReceived().subscribe(function () {// do something when notification is received
              });

              _this.oneSignal.handleNotificationOpened().subscribe(function (rsvnt) {
                if (rsvnt.notification.payload.additionalData.type === 'Offers') {
                  setTimeout(function () {
                    _this.route.navigate(['/offer/noapply']);
                  }, 3000);
                }
              });

              _this.oneSignal.promptForPushNotificationsWithUserResponse().then(function () {
                console.log('Hello My Name ', _environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment);
              });

              _this.oneSignal.getIds().then(function (dvsid) {
                localStorage.setItem(_environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.storage_prefix + 'userdevicetoken', dvsid.userId);

                _this.setUserTokens(dvsid.userId);
              })["catch"](function (err) {
                console.log('OneSGNLERR', err);
              });

              _this.oneSignal.endInit();
            });
            this.logeduser = this.localApi.getuser();
          }
        }, {
          key: "setUserTokens",
          value: function setUserTokens(mytoken) {
            this.logeduser = this.localApi.getuser();
            this.postdata.token = mytoken;
            this.postdata.device = 'Mobile'; // this.postdata.device_type = this.device.platform;

            if (this.platform.is('android')) {
              this.postdata.device_type = 'Android';
            } else {
              this.postdata.device_type = 'iOS';
            }

            this.postdata.user = 'Customer';
            this.postdata.user_id = '';
            this.apiService.postdata('setusertokens', this.postdata).subscribe(function (resp) {
              console.log('Set Token', resp);
            }, function (err) {
              return false;
            });
          }
        }, {
          key: "checklogin",
          value: function checklogin() {
            this.logeduser = this.localApi.getuser();
          }
        }, {
          key: "openloginpanel",
          value: function openloginpanel() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this2 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      this.menu.close();
                      _context5.next = 3;
                      return this.modalController.create({
                        component: _loginpage_loginpage_page__WEBPACK_IMPORTED_MODULE_4__.LoginpagePage,
                        cssClass: 'my-custom-class',
                        backdropDismiss: true
                      });

                    case 3:
                      modal = _context5.sent;
                      modal.onDidDismiss().then(function (data) {
                        if (data.data) {
                          _this2.logeduser = _this2.localApi.getuser();

                          _this2.route.navigate(['/myaccount/any']);
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
          key: "gomyacount",
          value: function gomyacount() {
            this.menu.close();
            this.route.navigate(['/myaccount/any']);
          }
        }]);

        return AppComponent;
      }();

      _AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
        }, {
          type: src_Providers_Services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService
        }, {
          type: src_Providers_Local_local_api_service__WEBPACK_IMPORTED_MODULE_3__.LocalApiService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.MenuController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController
        }, {
          type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_5__.OneSignal
        }];
      };

      _AppComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AppComponent);
      /***/
    },

    /***/
    36747: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/platform-browser */
      39075);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app.component */
      55041);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app-routing.module */
      90158);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _ionic_native_app_rate_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/app-rate/ngx */
      13553);
      /* harmony import */


      var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/in-app-browser/ngx */
      53760);
      /* harmony import */


      var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/social-sharing/ngx */
      24276);
      /* harmony import */


      var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/call-number/ngx */
      64687);
      /* harmony import */


      var _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/email-composer/ngx */
      51535);
      /* harmony import */


      var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/app-version/ngx */
      7354);
      /* harmony import */


      var _ionic_native_touch_id_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/touch-id/ngx */
      5945);
      /* harmony import */


      var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/keyboard/ngx */
      4329);
      /* harmony import */


      var _ionic_native_youtube_video_player_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic-native/youtube-video-player/ngx */
      64542);
      /* harmony import */


      var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic-native/onesignal/ngx */
      61779);

      var _AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      _AppModule = (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_13__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClientModule],
        providers: [{
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouteReuseStrategy,
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonicRouteStrategy
        }, _ionic_native_app_rate_ngx__WEBPACK_IMPORTED_MODULE_2__.AppRate, _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_9__.Keyboard, _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_11__.OneSignal, _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__.InAppBrowser, _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_4__.SocialSharing, _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__.CallNumber, _ionic_native_youtube_video_player_ngx__WEBPACK_IMPORTED_MODULE_10__.YoutubeVideoPlayer, _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_6__.EmailComposer, _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_7__.AppVersion, _ionic_native_touch_id_ngx__WEBPACK_IMPORTED_MODULE_8__.TouchID],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
      })], _AppModule);
      /***/
    },

    /***/
    42985: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoginpagePage": function LoginpagePage() {
          return (
            /* binding */
            _LoginpagePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_loginpage_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./loginpage.page.html */
      54201);
      /* harmony import */


      var _loginpage_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./loginpage.page.scss */
      39316);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_native_touch_id_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/touch-id/ngx */
      5945);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_Providers_Basic_basic_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/Providers/Basic/basic-api.service */
      92306);
      /* harmony import */


      var src_Providers_Cart_cart_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/Providers/Cart/cart-api.service */
      65248);
      /* harmony import */


      var src_Providers_Local_local_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/Providers/Local/local-api.service */
      99068);
      /* harmony import */


      var src_Providers_Services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/Providers/Services/api.service */
      48158);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../environments/environment */
      92340);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      38583);

      var _LoginpagePage = /*#__PURE__*/function () {
        function LoginpagePage(menuCtrl, apiService, basic, localApi, cart, route, alertController, location, modalController, activatedRoute, platform, touchId) {
          _classCallCheck(this, LoginpagePage);

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
          this.platform = platform;
          this.touchId = touchId;
          this.postdata = {};
          this.tknsvdata = {};
          this.isnewUser = false;
          this.regt = {};
          this.isPassrd = false;
          this.isTouchidDevice = false;
          this.isshowfldsnup = true;
          this.isTncdesc = false;
          this.ispvcdesc = false;
        }

        _createClass(LoginpagePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.isdeviceuser = this.localApi.getuserdevice();
            this.touchId.isAvailable().then(function (res) {
              if (_this3.isdeviceuser) {
                _this3.openTouchid();
              }
            }, function (err) {
              console.error('TouchID is not available', err);
            });
          }
        }, {
          key: "gotncpg",
          value: function gotncpg(val) {
            var _this4 = this;

            this.postdata.pgtype = val;
            this.basic.presentLoading();
            this.apiService.postdata('getallcms', this.postdata).subscribe(function (resp) {
              _this4.allProducts = resp.data;
              setTimeout(function () {
                _this4.basic.dismissloader();

                _this4.isshowfldsnup = false;
                _this4.isTncdesc = true;
              }, 1000);
            }, function (err) {
              return false;
            });
          }
        }, {
          key: "closetncpvc",
          value: function closetncpvc() {
            this.isshowfldsnup = true;
            this.isTncdesc = false;
          }
        }, {
          key: "openTouchid",
          value: function openTouchid() {
            var _this5 = this;

            this.touchId.verifyFingerprint('Scan your fingerprint please').then(function (res) {
              _this5.isdeviceuser = _this5.localApi.getuserdevice();

              _this5.localApi.setuser(_this5.isdeviceuser);

              _this5.setUserTokens();

              _this5.dismissmodal();
            }, function (err) {
              console.error('Error', err);
            });
          }
        }, {
          key: "checkMobile",
          value: function checkMobile() {
            var _this6 = this;

            this.adnmregdata = '';
            var str = this.logmobile;
            var res = str.substring(0, 2);

            if (!this.logmobile) {
              this.basic.alert('Error:', 'Enter your registered mobile number');
            } else if (this.logmobile.length < 10) {
              this.basic.alert('Error:', 'Please enter a valid mobile number');
            } else {
              this.basic.presentLoading();
              this.postdata.mobile = this.logmobile;
              this.apiService.postdata('checllogin', this.postdata).subscribe(function (resp) {
                if (resp.data == false) {
                  _this6.isnewUser = true;
                } else {
                  if (resp.data.device == 'ADMIN') {
                    _this6.adnmregdata = resp.data;
                    _this6.isnewUser = true;
                  } else {
                    _this6.isPassrd = true;
                  }
                }

                setTimeout(function () {
                  _this6.basic.dismissloader();
                }, 1000);
              }, function (err) {
                return false;
              });
            }
          }
        }, {
          key: "loginnow",
          value: function loginnow() {
            var _this7 = this;

            if (!this.logedpass) {
              this.basic.alert('Error:', 'Enter your password');
            } else {
              this.basic.presentLoading();
              this.postdata.mobile = this.logmobile;
              this.postdata.password = this.logedpass;
              this.apiService.postdata('login', this.postdata).subscribe(function (resp) {
                if (resp.data == false) {
                  _this7.basic.alert('Error:', 'Password did not match!');
                } else {
                  _this7.localApi.setuser(resp.data);

                  _this7.setUserTokens();

                  _this7.dismissmodal();
                }

                setTimeout(function () {
                  _this7.basic.dismissloader();
                }, 1000);
              }, function (err) {
                return false;
              });
            }
          }
        }, {
          key: "setUserTokens",
          value: function setUserTokens() {
            this.mytoken = localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_7__.environment.storage_prefix + 'userdevicetoken');
            this.logedUser = this.localApi.getuser();
            this.tknsvdata.token = this.mytoken;
            this.tknsvdata.device = 'Mobile';

            if (this.platform.is('android')) {
              this.tknsvdata.device_type = 'Android';
            } else {
              this.tknsvdata.device_type = 'iOS';
            }

            this.tknsvdata.user = 'Customer';
            this.tknsvdata.user_id = this.logedUser.id;
            this.apiService.postdata('setusertokens', this.tknsvdata).subscribe(function (resp) {
              console.log('Set Token', resp);
            }, function (err) {
              return false;
            });
          }
        }, {
          key: "signupnow",
          value: function signupnow() {
            var _this8 = this;

            this.mytoken = localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_7__.environment.storage_prefix + 'userdevicetoken');
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            if (!this.regt.fullname) {
              this.basic.alert('Error:', 'Enter your full name');
            } else if (!this.regt.email) {
              this.basic.alert('Error:', 'Enter your email address (for recover your password)');
            } else if (!re.test(this.regt.email)) {
              this.basic.alert('Error:', 'Please enter a valid email');
            } else if (!this.regt.password) {
              this.basic.alert('Error:', 'Enter a password');
            } else {
              this.postdata.mobile = this.logmobile;
              this.postdata.otherdetails = this.regt;
              this.basic.presentLoading();
              this.postdata.mobile = this.logmobile;
              this.postdata.token = this.mytoken;
              this.postdata.device = 'Mobile';

              if (this.platform.is('android')) {
                this.postdata.device_type = 'Android';
              } else {
                this.postdata.device_type = 'iOS';
              }

              this.postdata.adnmregdata = this.adnmregdata;

              if (this.adnmregdata) {
                this.postdata.isupd = 'OLD';
              } else {
                this.postdata.isupd = 'NEW';
              }

              this.apiService.postdata('signup', this.postdata).subscribe(function (resp) {
                console.log('User', resp);

                if (resp.data == false) {
                  _this8.basic.alert('Error:', 'Something went wrong. Please try again');
                } else {
                  _this8.localApi.setuser(resp.data);

                  _this8.setUserTokens();

                  _this8.dismissmodal();
                }

                setTimeout(function () {
                  _this8.basic.dismissloader();
                }, 1000);
              }, function (err) {
                return false;
              });
            }
          }
        }, {
          key: "dismissmodal",
          value: function dismissmodal() {
            this.modalController.dismiss({
              'dismissed': true
            });
          }
        }, {
          key: "forgotpassword",
          value: function forgotpassword() {
            var _this9 = this;

            console.log(this.logmobile);
            this.basic.presentLoading();
            this.apiService.postdata('forgotpassword', this.logmobile).subscribe(function (resp) {
              console.log('Return', resp);

              _this9.basic.alert('Info:', 'We have emailed you a link to help you reset your password.');

              setTimeout(function () {
                _this9.basic.dismissloader();
              }, 1000);
            }, function (err) {
              return false;
            });
          }
        }]);

        return LoginpagePage;
      }();

      _LoginpagePage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.MenuController
        }, {
          type: src_Providers_Services_api_service__WEBPACK_IMPORTED_MODULE_6__.ApiService
        }, {
          type: src_Providers_Basic_basic_api_service__WEBPACK_IMPORTED_MODULE_3__.BasicApiService
        }, {
          type: src_Providers_Local_local_api_service__WEBPACK_IMPORTED_MODULE_5__.LocalApiService
        }, {
          type: src_Providers_Cart_cart_api_service__WEBPACK_IMPORTED_MODULE_4__.CartApiService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_10__.Location
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform
        }, {
          type: _ionic_native_touch_id_ngx__WEBPACK_IMPORTED_MODULE_2__.TouchID
        }];
      };

      _LoginpagePage = (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-loginpage',
        template: _raw_loader_loginpage_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_loginpage_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _LoginpagePage);
      /***/
    },

    /***/
    92340: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      });
      /* eslint-disable @typescript-eslint/naming-convention */
      // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment = {
        production: false,
        baseurl: 'localhost:80/',
        imagepath: 'your-image-path-url-here',
        onesignalkey: 'your-onesignalkey-here',
        firebasekey: 'your-firebase-key-here',
        developer_website: 'your-website-here',
        fb_profile: 'your-fb-profile-link-here',
        mobileprefix: '+44',
        playstore: 'your-android-app-url-here',
        appstore: 'your-ios-app-url-here',
        iosrateandreview: 'itms-apps://apps.apple.com/app/xxxxxx?mt=8&action=write-review',
        app_share_text: 'Wite your share app text here',
        androidappid: 'your-android-app-id-here',
        iosappid: 'your-ios-app-id-here',
        appname: 'Candidatos',
        storage_prefix: 'salon_'
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    14431: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      24608);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      36747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      92340);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      (0, _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    50863: function _(module, __unused_webpack_exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": [47321, "common", "node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"],
        "./ion-alert.entry.js": [36108, "common", "node_modules_ionic_core_dist_esm_ion-alert_entry_js"],
        "./ion-app_8.entry.js": [31489, "common", "node_modules_ionic_core_dist_esm_ion-app_8_entry_js"],
        "./ion-avatar_3.entry.js": [10305, "common", "node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"],
        "./ion-back-button.entry.js": [15830, "common", "node_modules_ionic_core_dist_esm_ion-back-button_entry_js"],
        "./ion-backdrop.entry.js": [37757, "node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"],
        "./ion-button_2.entry.js": [30392, "common", "node_modules_ionic_core_dist_esm_ion-button_2_entry_js"],
        "./ion-card_5.entry.js": [66911, "common", "node_modules_ionic_core_dist_esm_ion-card_5_entry_js"],
        "./ion-checkbox.entry.js": [30937, "common", "node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"],
        "./ion-chip.entry.js": [78695, "common", "node_modules_ionic_core_dist_esm_ion-chip_entry_js"],
        "./ion-col_3.entry.js": [16034, "node_modules_ionic_core_dist_esm_ion-col_3_entry_js"],
        "./ion-datetime_3.entry.js": [68837, "common", "node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"],
        "./ion-fab_3.entry.js": [34195, "common", "node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"],
        "./ion-img.entry.js": [41709, "node_modules_ionic_core_dist_esm_ion-img_entry_js"],
        "./ion-infinite-scroll_2.entry.js": [33087, "node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"],
        "./ion-input.entry.js": [84513, "common", "node_modules_ionic_core_dist_esm_ion-input_entry_js"],
        "./ion-item-option_3.entry.js": [58056, "common", "node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"],
        "./ion-item_8.entry.js": [10862, "common", "node_modules_ionic_core_dist_esm_ion-item_8_entry_js"],
        "./ion-loading.entry.js": [7509, "common", "node_modules_ionic_core_dist_esm_ion-loading_entry_js"],
        "./ion-menu_3.entry.js": [76272, "common", "node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"],
        "./ion-modal.entry.js": [71855, "common", "node_modules_ionic_core_dist_esm_ion-modal_entry_js"],
        "./ion-nav_2.entry.js": [38708, "common", "node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"],
        "./ion-popover.entry.js": [23527, "common", "node_modules_ionic_core_dist_esm_ion-popover_entry_js"],
        "./ion-progress-bar.entry.js": [24694, "common", "node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"],
        "./ion-radio_2.entry.js": [19222, "common", "node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"],
        "./ion-range.entry.js": [25277, "common", "node_modules_ionic_core_dist_esm_ion-range_entry_js"],
        "./ion-refresher_2.entry.js": [39921, "common", "node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"],
        "./ion-reorder_2.entry.js": [83122, "common", "node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"],
        "./ion-ripple-effect.entry.js": [51602, "node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"],
        "./ion-route_4.entry.js": [45174, "common", "node_modules_ionic_core_dist_esm_ion-route_4_entry_js"],
        "./ion-searchbar.entry.js": [7895, "common", "node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"],
        "./ion-segment_2.entry.js": [76164, "common", "node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"],
        "./ion-select_3.entry.js": [20592, "common", "node_modules_ionic_core_dist_esm_ion-select_3_entry_js"],
        "./ion-slide_2.entry.js": [27162, "node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"],
        "./ion-spinner.entry.js": [81374, "common", "node_modules_ionic_core_dist_esm_ion-spinner_entry_js"],
        "./ion-split-pane.entry.js": [97896, "node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"],
        "./ion-tab-bar_2.entry.js": [25043, "common", "node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"],
        "./ion-tab_2.entry.js": [77802, "common", "node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"],
        "./ion-text.entry.js": [29072, "common", "node_modules_ionic_core_dist_esm_ion-text_entry_js"],
        "./ion-textarea.entry.js": [32191, "common", "node_modules_ionic_core_dist_esm_ion-textarea_entry_js"],
        "./ion-toast.entry.js": [40801, "common", "node_modules_ionic_core_dist_esm_ion-toast_entry_js"],
        "./ion-toggle.entry.js": [67110, "common", "node_modules_ionic_core_dist_esm_ion-toggle_entry_js"],
        "./ion-virtual-scroll.entry.js": [10431, "node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function () {
        return Object.keys(map);
      };

      webpackAsyncContext.id = 50863;
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    43069: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid #d7d8da;\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 18px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n\nion-list-header {\n  text-align: center;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.welcome {\n  width: 65%;\n  margin: 15% 0px;\n  padding-left: 5%;\n  font-weight: bold;\n  font-size: 16px;\n}\n\n.manulogo {\n  background: #fff;\n  width: 30%;\n  height: 90px;\n  border-radius: 45px;\n  text-align: center;\n  font-weight: bold;\n  margin-left: 3%;\n}\n\nion-icon {\n  color: #1B74E4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJFQUFBO0FBQ0Y7O0FBRUE7RUFJRSxzQkFBQTtBQUZGOztBQVNBO0VBQ0UsbUJBQUE7QUFORjs7QUFTQTs7RUFFRSxrQkFBQTtBQU5GOztBQVNBO0VBQ0UsZ0NBQUE7RUFBQSwyREFBQTtBQU5GOztBQVNBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBRUEsZ0JBQUE7QUFQRjs7QUFVQTtFQUNFLGVBQUE7RUFFQSxtQkFBQTtFQUlBLGdCQUFBO0FBWEY7O0FBY0E7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFYRjs7QUFjQTtFQUNFLHNEQUFBO0FBWEY7O0FBc0JBO0VBQ0UsZ0JBQUE7QUFuQkY7O0FBc0JBO0VBQ0Usc0JBQUE7QUFuQkY7O0FBc0JBO0VBQ0UsbUJBQUE7QUFuQkY7O0FBc0JBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQW5CRjs7QUFzQkE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFuQkY7O0FBMEJBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUF2QkY7O0FBMEJBO0VBQ0Usa0JBQUE7QUF2QkY7O0FBMEJBOztFQUVFLGtCQUFBO0VBQ0EsbUJBQUE7QUF2QkY7O0FBMEJBO0VBQ0Usa0JBQUE7QUF2QkY7O0FBMEJBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBRUEsb0NBQUE7QUF4QkY7O0FBMkJBO0VBQ0UsaUNBQUE7QUF4QkY7O0FBMkJBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBeEJGOztBQTJCQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUF4QkY7O0FBMkJBO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUF4QkY7O0FBMEJBO0VBQ0UsY0FBQTtBQXZCRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbWVudSBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpKTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWNvbnRlbnQge1xuICAvLyAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgLy8gLS1wYWRkaW5nLWVuZDogOHB4O1xuICAvLyAtLXBhZGRpbmctdG9wOiAyMHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCB7XG4gIC8vIHBhZGRpbmc6IDIwcHggMDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdC1oZWFkZXIsXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsICNkN2Q4ZGEpO1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcblxuICBtaW4taGVpZ2h0OiAyMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBmb250LXNpemU6IDE2cHg7XG5cbiAgbWFyZ2luLWJvdHRvbTogMThweDtcblxuICAvLyBjb2xvcjogIzc1NzU3NTtcblxuICBtaW4taGVpZ2h0OiAyNnB4O1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgLS1wYWRkaW5nLWVuZDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjE0KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICAvLyBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24taWNvbiB7XG4gIC8vIGNvbG9yOiAjNjE2ZTdlO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24tbGFiZWwge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAyMHB4IDAgMCAwO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAtLW1pbi1oZWlnaHQ6IDUwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XG4gIC8vY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogIzczODQ5YTtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0LWhlYWRlcixcbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5pb24tbm90ZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xuXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbn1cblxuaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmlvbi1saXN0LWhlYWRlcntcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ud2VsY29tZXtcbiAgd2lkdGg6IDY1JTtcbiAgbWFyZ2luOiAxNSUgMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDUlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4ubWFudWxvZ297XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHdpZHRoOiAzMCU7XG4gIGhlaWdodDogOTBweDtcbiAgYm9yZGVyLXJhZGl1czogNDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWxlZnQ6IDMlO1xufVxuaW9uLWljb257XG4gIGNvbG9yOiAjMUI3NEU0O1xufSJdfQ== */";
      /***/
    },

    /***/
    39316: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".almosttherehead {\n  width: 100%;\n  height: auto;\n  padding: 10px 15px;\n  font-size: 15px;\n  font-weight: bold;\n  text-transform: uppercase;\n}\n.almosttherehead span {\n  font-size: 12px;\n  font-weight: normal;\n  color: #080808;\n  text-transform: none;\n}\n.loginmobilefield {\n  width: 100%;\n  height: auto;\n  padding: 10px 15px;\n  position: relative;\n}\n.loginmobilefield img {\n  height: 16px;\n  margin-top: 2px;\n}\n.loginmobilefield label {\n  font-size: 10px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  color: #8c8c8c;\n}\n.loginmobilefield input {\n  width: 100%;\n  height: 30px;\n  border: none;\n  background-color: transparent;\n  outline: none;\n  border-bottom: solid 1px #ff4181;\n  padding-left: 47px;\n  font-size: 15px;\n  padding-top: 5px;\n}\n.loginmobilefield span {\n  position: absolute;\n  left: 17px;\n  top: 36px;\n  font-size: 14px;\n  border-right: solid 1px #CCC;\n  padding-right: 6px;\n}\n.onlytxt {\n  font-size: 13px;\n  background: #fff;\n  padding: 15px;\n  line-height: 21px;\n}\n.onlytxt span {\n  color: #4263de;\n  font-weight: bold;\n}\n.loginmobilefieldreg {\n  width: 100%;\n  height: auto;\n  padding: 10px 15px;\n  position: relative;\n}\n.loginmobilefieldreg label {\n  font-size: 10px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  color: #8c8c8c;\n}\n.loginmobilefieldreg input {\n  width: 100%;\n  height: 30px;\n  border: none;\n  background-color: transparent;\n  outline: none;\n  border-bottom: solid 1px #ff4181;\n  font-size: 14px;\n}\n.continuebtn {\n  width: 92%;\n  height: auto;\n  padding: 10px 15px;\n  text-transform: uppercase;\n  font-size: 12px;\n  background-color: #ff4181;\n  color: #fff;\n  text-align: center;\n  margin: 0 auto;\n}\n.forgotpass {\n  width: 92%;\n  height: auto;\n  margin: 6px auto;\n  padding-bottom: 10px;\n  font-size: 13px;\n  color: #ff4181;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2lucGFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUFDRDtBQUFDO0VBQ0MsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FBRUY7QUFDQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUVEO0FBREM7RUFDQyxZQUFBO0VBQ0csZUFBQTtBQUdMO0FBREM7RUFDQyxlQUFBO0VBQ0cseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFHTDtBQURDO0VBQ0MsV0FBQTtFQUNHLFlBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUdMO0FBREM7RUFDQyxrQkFBQTtFQUNHLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7QUFHTDtBQUFBO0VBQ0MsZUFBQTtFQUNHLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FBR0o7QUFGQztFQUNDLGNBQUE7RUFDRyxpQkFBQTtBQUlMO0FBQ0E7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFFRDtBQURDO0VBQ0MsZUFBQTtFQUNHLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBR0w7QUFEQztFQUNDLFdBQUE7RUFDRyxZQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtBQUdMO0FBQ0E7RUFDQyxVQUFBO0VBQ0csWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBRUo7QUFDQTtFQUNDLFVBQUE7RUFDRyxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBRUoiLCJmaWxlIjoibG9naW5wYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbG1vc3R0aGVyZWhlYWR7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IGF1dG87XG5cdHBhZGRpbmc6IDEwcHggMTVweDtcblx0Zm9udC1zaXplOiAxNXB4O1xuXHRmb250LXdlaWdodDogYm9sZDtcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0c3Bhbntcblx0XHRmb250LXNpemU6IDEycHg7XG5cdFx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcblx0XHRjb2xvcjogcmdiKDgsIDgsIDgpO1xuXHRcdHRleHQtdHJhbnNmb3JtOiBub25lO1xuXHR9XG59XG4ubG9naW5tb2JpbGVmaWVsZHtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogYXV0bztcblx0cGFkZGluZzogMTBweCAxNXB4O1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGltZ3tcblx0XHRoZWlnaHQ6IDE2cHg7XG4gICAgXHRtYXJnaW4tdG9wOiAycHg7XG5cdH1cblx0bGFiZWx7XG5cdFx0Zm9udC1zaXplOiAxMHB4O1xuXHQgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0ICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG5cdCAgICBjb2xvcjogIzhjOGM4Yztcblx0fVxuXHRpbnB1dHtcblx0XHR3aWR0aDogMTAwJTtcblx0ICAgIGhlaWdodDogMzBweDtcblx0ICAgIGJvcmRlcjogbm9uZTtcblx0ICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXHQgICAgb3V0bGluZTogbm9uZTtcblx0ICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjZmY0MTgxO1xuXHQgICAgcGFkZGluZy1sZWZ0OiA0N3B4O1xuXHQgICAgZm9udC1zaXplOiAxNXB4O1xuXHQgICAgcGFkZGluZy10b3A6IDVweDtcblx0fVxuXHRzcGFue1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0ICAgIGxlZnQ6IDE3cHg7XG5cdCAgICB0b3A6IDM2cHg7XG5cdCAgICBmb250LXNpemU6IDE0cHg7XG5cdCAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCAjQ0NDO1xuXHQgICAgcGFkZGluZy1yaWdodDogNnB4O1xuXHR9XG59XG4ub25seXR4dHtcblx0Zm9udC1zaXplOiAxM3B4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBsaW5lLWhlaWdodDogMjFweDtcblx0c3Bhbntcblx0XHRjb2xvcjogIzQyNjNkZTtcbiAgICBcdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHR9XG59XG5cblxuLmxvZ2lubW9iaWxlZmllbGRyZWd7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IGF1dG87XG5cdHBhZGRpbmc6IDEwcHggMTVweDtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRsYWJlbHtcblx0XHRmb250LXNpemU6IDEwcHg7XG5cdCAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHQgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcblx0ICAgIGNvbG9yOiAjOGM4YzhjO1xuXHR9XG5cdGlucHV0e1xuXHRcdHdpZHRoOiAxMDAlO1xuXHQgICAgaGVpZ2h0OiAzMHB4O1xuXHQgICAgYm9yZGVyOiBub25lO1xuXHQgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cdCAgICBvdXRsaW5lOiBub25lO1xuXHQgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNmZjQxODE7XG5cdCAgICBmb250LXNpemU6IDE0cHg7XG5cdH1cbn1cblxuLmNvbnRpbnVlYnRue1xuXHR3aWR0aDogOTIlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNDE4MTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5mb3Jnb3RwYXNze1xuXHR3aWR0aDogOTIlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXJnaW46IDZweCBhdXRvO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBjb2xvcjogI2ZmNDE4MTtcblx0XG59Il19 */";
      /***/
    },

    /***/
    91106: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n  <ion-split-pane contentId=\"main-content\">\n    <ion-menu contentId=\"main-content\" type=\"overlay\">\n      <ion-content>\n        <ion-list id=\"inbox-list\" style=\"padding: 0px; border: none;\">\n          <ion-row style=\"background: hsl(213, 78%, 50%);\">\n            <ion-col style=\"display: contents;\">\n              <p class=\"manulogo\"><img style=\"padding-top: 15%;\" src=\"../../assets/images/logo.png\"/></p>\n              <p class=\"welcome\" *ngIf='!logeduser' (click)='openloginpanel()'>  <br><span style=\"color: #734e4e;\"> </span></p>\n              <p class=\"welcome\" *ngIf='!logeduser' (click)='openloginpanel()'>  <br><span style=\"color: #734e4e;\"> </span></p>\n              <p class=\"welcome\" *ngIf='logeduser' (click)='gomyacount()'>{{logeduser.name}}<br><span style=\"color: #734e4e;\">{{logeduser.mobile}}</span></p>\n            </ion-col>\n          </ion-row>\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\">\n            <ion-item routerDirection=\"root\" [routerLink]=\"[p.url]\" lines=\"none\" detail=\"false\" routerLinkActive=\"selected\">\n              <ion-icon slot=\"start\" [ios]=\"p.icon + '-outline'\" [md]=\"p.icon + '-sharp'\"></ion-icon>\n              <ion-label>{{ p.title }}</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n        </ion-list>\n      </ion-content>\n    </ion-menu>\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>\n";
      /***/
    },

    /***/
    54201: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<ion-content no-bounce has-bouncing=\"false\" forceOverscroll=\"false\">\n\t<div class=\"almosttherehead\" *ngIf='!isTncdesc'>\n\t\tAlmost There!<br><span>Login or signup to book your services</span>\n\t</div>\n\t<div *ngIf='!isnewUser'>\n\t\t<div class=\"loginmobilefield\">\n\t\t\t<span><img src=\"assets/icon/phone-icon.png\"></span>\n\t\t\t<label>Mobile Number</label>\n\t\t\t<input type=\"tel\" [(ngModel)]=\"logmobile\" maxlength=\"11\" onkeypress='return event.charCode >= 48 && event.charCode <= 57'>\n\t\t</div>\n\t\t<div *ngIf='!isPassrd'>\n\t\t\t<div class=\"continuebtn\" (click)='checkMobile()'>\n\t\t\t\tContinue\n\t\t\t</div>\n\t\t</div>\n\t\t<div *ngIf='isPassrd'>\n\t\t\t<div class=\"loginmobilefieldreg\">\n\t\t\t\t<label>Password</label>\n\t\t\t\t<input type=\"password\" [(ngModel)]=\"logedpass\">\n\t\t\t</div>\n\t\t\t<div class=\"forgotpass\" (click)='forgotpassword()'>\n\t\t\t\tForgot Password ? Click here to reset.\n\t\t\t</div>\n\t\t\t<div class=\"continuebtn\" (click)='loginnow()'>\n\t\t\t\tLogin\n\t\t\t</div>\n\t\t</div>\t\n\t</div>\n\t<div *ngIf='isnewUser'>\n\t\t<div *ngIf='isshowfldsnup'>\n\t\t\t<div class=\"loginmobilefieldreg\">\n\t\t\t\t<label>Your full name</label>\n\t\t\t\t<input type=\"text\" [(ngModel)]=\"regt.fullname\">\n\t\t\t</div>\n\t\t\t<div class=\"loginmobilefieldreg\">\n\t\t\t\t<label>Recovery email</label>\n\t\t\t\t<input type=\"email\" [(ngModel)]=\"regt.email\">\n\t\t\t</div>\n\t\t\t<div class=\"loginmobilefieldreg\">\n\t\t\t\t<label>Password</label>\n\t\t\t\t<input type=\"password\" [(ngModel)]=\"regt.password\">\n\t\t\t</div>\n\t\t\t<div class=\"onlytxt\">\n\t\t\t\t<input type=\"checkbox\" checked=\"true\" disabled=\"true\" style=\"position: relative; top: 2px;\"> By clicking sign up, you agree to our <span (click)=\"gotncpg('Terms and Conditions')\">Terms & Conditions</span> and our <span (click)=\"gotncpg('Privacy Policy')\">Privacy Policy</span>. You also acknowledge to read our allergy advice and information before placing an order.\n\t\t\t</div>\n\t\t\t<div class=\"continuebtn\" (click)='signupnow()'>\n\t\t\t\tSignup\n\t\t\t</div>\n\t\t</div>\n\t\t<div *ngIf='isTncdesc' style=\"position: relative;\">\n\t\t\t<div style=\"position: absolute; right: 10px; top: -19px;font-size: 25px;font-weight: bold;\" (click)='closetncpvc()'>x</div>\n\t\t\t<div class=\"cmsdesc\" [innerHTML]='allProducts?.description'></div>\n\t\t\t<div class=\"continuebtn\" (click)='closetncpvc()'>\n\t\t\t\tClose\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</ion-content>";
      /***/
    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    "use strict";
    /******/

    /******/

    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(14431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map