require("../../common/manifest.js");
require("../../common/vendor.js");
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonpMpvue([3],{

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(249);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_template_compiler_index_id_data_v_1516f9a3_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(256);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(250)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1516f9a3"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_template_compiler_index_id_data_v_1516f9a3_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1516f9a3", Component.options)
  } else {
    hotAPI.reload("data-v-1516f9a3", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 250:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_slide__ = __webpack_require__(252);



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
      indicator: false,
      autoplay: true,
      interval: 3000,
      duration: 1000,
      banner: [],
      navs: [],
      imgPrefix: this.$imgPrefix
    };
  },
  onLoad: function onLoad(opt) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()(this.$data, this.$options.data());
    console.log('onLoad', this.autoplay);
  },
  mounted: function mounted() {
    this.getBanner();
    this.getNav();
    console.log('mounted', this.autoplay);
  },

  components: {
    banner: __WEBPACK_IMPORTED_MODULE_3__components_slide__["a" /* default */]
  },

  methods: {
    getBanner: function getBanner() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var url;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                url = _this.$api.banner;
                _context.next = 3;
                return _this.$http({ url: url }).then(function (data) {
                  return data;
                });

              case 3:
                _this.banner = _context.sent;

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    getNav: function getNav() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var url;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                url = _this2.$api.Category;
                _context2.next = 3;
                return _this2.$http({ loading: true, url: url }).then(function (data) {
                  return data;
                });

              case 3:
                _this2.navs = _context2.sent;

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    }
  }

});

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_script_index_0_slide_vue__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_template_compiler_index_id_data_v_0593db6f_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_template_index_0_slide_vue__ = __webpack_require__(255);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(253)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_script_index_0_slide_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_template_compiler_index_id_data_v_0593db6f_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_template_index_0_slide_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\slide.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] slide.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0593db6f", Component.options)
  } else {
    hotAPI.reload("data-v-0593db6f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 253:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 254:
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
  name: 'slider',
  data: function data() {
    return {
      activeIndex: 0,
      imgPrefix: this.$imgPrefix
    };
  },
  mounted: function mounted() {
    this.imgPrefix = this.$imgPrefix;
  },

  methods: {
    changeIndex: function changeIndex(e) {
      this.activeIndex = e.mp.detail.current;
    }
  },
  props: {
    'indicator': {
      type: Boolean,
      default: false
    },
    'autoplay': {
      type: Boolean,
      default: false
    },
    'interval': {
      type: Number,
      default: 3000
    },
    'duration': {
      type: Number,
      default: 1000
    },
    'imgUrls': {
      type: Array,
      required: true
    }
  }
});

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "slider"
  }, [_c('swiper', {
    attrs: {
      "indicator-dots": _vm.indicator,
      "autoplay": _vm.autoplay,
      "interval": _vm.interval,
      "duration": _vm.duration,
      "lazy-load": "",
      "eventid": '0'
    },
    on: {
      "change": _vm.changeIndex
    }
  }, _vm._l((_vm.imgUrls), function(item, index) {
    return _c('block', {
      key: index
    }, [_c('swiper-item', {
      attrs: {
        "mpcomid": '0-' + index
      }
    }, [_c('image', {
      staticClass: "slide-image",
      attrs: {
        "src": _vm.imgPrefix + item.img,
        "mode": "scaleToFill"
      }
    })])], 1)
  })), _vm._v(" "), _c('div', {
    staticClass: "indicator"
  }, _vm._l((_vm.imgUrls), function(item, index) {
    return _c('span', {
      key: index,
      class: index == _vm.activeIndex ? 'on' : ''
    })
  }))], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-0593db6f", esExports)
  }
}

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.navs.length > 0) ? _c('div', {
    staticClass: "home"
  }, [_c('banner', {
    attrs: {
      "indicator": _vm.indicator,
      "autoplay": _vm.autoplay,
      "interval": _vm.interval,
      "duration": _vm.duration,
      "imgUrls": _vm.banner,
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "nav"
  }, [_c('ul', _vm._l((_vm.navs), function(nav, i) {
    return _c('li', {
      key: nav.id
    }, [_c('a', {
      attrs: {
        "href": '/pages/index/detail/main?id=' + nav.id
      }
    }, [_c('img', {
      attrs: {
        "src": _vm.imgPrefix + nav.icon_img
      }
    }), _vm._v(" "), _c('h4', [_vm._v(_vm._s(nav.title))]), _vm._v(" "), _c('p', [_vm._v("开始办理")])], 1)])
  }))], 1)], 1) : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-1516f9a3", esExports)
  }
}

/***/ })

},[248]);
//# sourceMappingURL=main.js.map