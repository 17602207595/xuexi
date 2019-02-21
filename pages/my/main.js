require("../../common/manifest.js");
require("../../common/vendor.js");
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonpMpvue([9],{

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(281);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_template_compiler_index_id_data_v_59ac6151_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(284);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(282)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-59ac6151"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_template_compiler_index_id_data_v_59ac6151_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\my\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-59ac6151", Component.options)
  } else {
    hotAPI.reload("data-v-59ac6151", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 282:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_serviceC__ = __webpack_require__(25);
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
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      nickName: '',
      avatarUrl: ''
    };
  },

  components: { serviceD: __WEBPACK_IMPORTED_MODULE_0__components_serviceC__["a" /* default */] },
  onShow: function onShow() {
    console.log('onshow');
    var self = this;
    wx.getUserInfo({
      success: function success(res) {
        var userInfo = res.userInfo;
        self.nickName = userInfo.nickName;
        self.avatarUrl = userInfo.avatarUrl;
      },
      fail: function fail(err) {
        wx.navigateTo({
          url: '/pages/login/main'
        });
      }
    });
  },


  methods: {}

});

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "person"
  }, [_c('div', {
    staticClass: "userinfo"
  }, [_c('img', {
    attrs: {
      "src": _vm.avatarUrl
    }
  }), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.nickName))])], 1), _vm._v(" "), _c('div', {
    staticClass: "list"
  }, [_c('ul', [_c('li', {
    staticClass: "bg_arrow border_bottom"
  }, [_c('a', {
    attrs: {
      "href": "/pages/my/orderList/main"
    }
  }, [_c('img', {
    attrs: {
      "src": "/static/img/icon-order.png"
    }
  }), _vm._v(" "), _c('p', [_vm._v("我的订单")])], 1)]), _vm._v(" "), _c('li', {
    staticClass: "bg_arrow border_bottom"
  }, [_c('a', {
    attrs: {
      "href": "/pages/my/bookList/main"
    }
  }, [_c('img', {
    attrs: {
      "src": "/static/img/icon-card.png"
    }
  }), _vm._v(" "), _c('p', [_vm._v("我的预约")])], 1)]), _vm._v(" "), _c('li', {
    staticClass: "bg_arrow"
  }, [_c('a', {
    attrs: {
      "href": "/pages/my/licenseList/main"
    }
  }, [_c('img', {
    attrs: {
      "src": "/static/img/icon-book.png"
    }
  }), _vm._v(" "), _c('p', [_vm._v("我的牌照")])], 1)])], 1)], 1), _vm._v(" "), _c('serviceD', {
    attrs: {
      "mpcomid": '0'
    }
  })], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-59ac6151", esExports)
  }
}

/***/ })

},[280]);
//# sourceMappingURL=main.js.map