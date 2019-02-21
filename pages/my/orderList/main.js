require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonpMpvue([8],{

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(286);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_template_compiler_index_id_data_v_6e87674e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(289);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(287)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6e87674e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_template_compiler_index_id_data_v_6e87674e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\my\\orderList\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6e87674e", Component.options)
  } else {
    hotAPI.reload("data-v-6e87674e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 287:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_serviceC__ = __webpack_require__(25);



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      list: null
    };
  },
  onLoad: function onLoad(opt) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()(this.$data, this.$options.data());
  },

  components: { serviceD: __WEBPACK_IMPORTED_MODULE_3__components_serviceC__["a" /* default */] },
  onShow: function onShow() {
    this.getList();
  },


  methods: {
    getList: function getList() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var url, data;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                url = _this.$api.orderList;
                _context.next = 3;
                return _this.$http({ loading: true, url: url }).then(function (data) {
                  return data;
                });

              case 3:
                data = _context.sent;

                console.log(data);
                _this.list = data;

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    unpay: function unpay(id) {
      var _this2 = this;

      var url = this.$api.unpay;
      var self = this;
      this.$http({
        loading: true,
        method: 'POST',
        url: url,
        data: { out_trade_no: id }
      }).then(function (data) {
        self.$util.payMent(data).then(function (res) {
          self.$util.showToast('支付成功', 'success');
          _this2.getList();
        }).catch(function (err) {
          self.$util.showToast('取消支付');
        });
      });
    }
  }

});

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.list != null) ? _c('div', {
    staticClass: "order"
  }, [(_vm.list.length > 0) ? _c('ul', _vm._l((_vm.list), function(item, i) {
    return _c('li', {
      key: i
    }, [_c('h4', {
      staticClass: "border_bottom"
    }, [_vm._v("订单编号：" + _vm._s(item.out_trade_no))]), _vm._v(" "), _c('div', {
      staticClass: "info"
    }, [_c('h5', [_vm._v(_vm._s(item.category_title))]), _vm._v(" "), _c('p', [_vm._v("金额：" + _vm._s(item.money) + "元")]), _vm._v(" "), (item.payment_time) ? _c('p', [_vm._v("支付时间：" + _vm._s(item.payment_time))]) : _vm._e()], 1), _vm._v(" "), _c('div', {
      staticClass: "status"
    }, [(item.status == 0) ? _c('span', [_vm._v("等待处理")]) : _vm._e(), _vm._v(" "), (item.status == 1) ? _c('span', [_vm._v("材料收集中")]) : _vm._e(), _vm._v(" "), (item.status == 2) ? _c('span', [_vm._v("材料补充中")]) : _vm._e(), _vm._v(" "), (item.status == 3) ? _c('span', [_vm._v("材料齐全报送中")]) : _vm._e(), _vm._v(" "), (item.status == 4) ? _c('span', {
      staticClass: "on"
    }, [_vm._v("办理完成")]) : _vm._e()])], 1)
  })) : _c('div', {
    staticClass: "nodata"
  }, [_c('img', {
    attrs: {
      "src": "/static/img/nodata.jpg"
    }
  }), _vm._v(" "), _c('p', [_vm._v("空空如也~")])], 1), _vm._v(" "), _c('serviceD', {
    attrs: {
      "mpcomid": '0'
    }
  })], 1) : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-6e87674e", esExports)
  }
}

/***/ })

},[285]);
//# sourceMappingURL=main.js.map