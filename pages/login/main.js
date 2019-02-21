require("../../common/manifest.js");
require("../../common/vendor.js");
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonpMpvue([12],{

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(263);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_template_compiler_index_id_data_v_1de7af7a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(266);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(264)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1de7af7a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_template_compiler_index_id_data_v_1de7af7a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\login\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1de7af7a", Component.options)
  } else {
    hotAPI.reload("data-v-1de7af7a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 264:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
      code: ''
    };
  },
  mounted: function mounted() {
    this.login();
  },


  methods: {
    login: function login() {
      var self = this;
      _login();
      function _login() {
        wx.login({
          success: function success(res) {
            if (res.code) {
              self.code = res.code;
            } else {
              _login();
              console.log('登录失败！' + res.errMsg);
            }
          }
        });
      }
    },
    onGotUserInfo: function onGotUserInfo(e) {
      var url = this.$api.login;
      var self = this;
      var detail = e.mp.detail;
      if (detail.errMsg = "getUserInfo:ok") {
        var data = {
          code: self.code,
          rawData: detail.rawData,
          signature: detail.signature,
          encryptedData: detail.encryptedData,
          iv: detail.iv
        };
        self.$http({ loading: true, url: url, data: data }).then(function (res) {
          wx.setStorageSync('token', res.token);
          wx.navigateBack({
            delta: 1
          });
        });
      } else {
        self.$util.showToast('登录失败！');
      }
      console.log(e);
    }
  }

});

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.code) ? _c('div', {
    staticClass: "login"
  }, [_c('p', [_vm._v("为了您更好的体验本小程序，请允许授权登录")]), _vm._v(" "), _c('button', {
    staticClass: "btn-style",
    attrs: {
      "open-type": "getUserInfo",
      "eventid": '0'
    },
    on: {
      "getuserinfo": _vm.onGotUserInfo
    }
  }, [_vm._v("授权登录")])], 1) : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-1de7af7a", esExports)
  }
}

/***/ })

},[262]);
//# sourceMappingURL=main.js.map