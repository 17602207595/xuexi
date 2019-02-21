require("../../../common/manifest.js");
require("../../../common/vendor.js");
require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonpMpvue([14],{

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(134);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_template_compiler_index_id_data_v_304fc1cc_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(137);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(135)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-304fc1cc"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_template_compiler_index_id_data_v_304fc1cc_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index\\business_certificate\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-304fc1cc", Component.options)
  } else {
    hotAPI.reload("data-v-304fc1cc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 135:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_switchTab__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_contactInfo__ = __webpack_require__(19);

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
      menus: ['联系人信息', '上传证件'],
      activeIndex: '0',
      imgPrefix: this.$imgPrefix,
      formCertificate: {
        business_license_img: '', // string  营业执照副本图
        certificate_img: '', // string  证书原件图
        asset_liability_img: '', // string  资产负债表
        profit_img: '' // string  利润表
      },
      formContact: {},
      tid: '',
      isRender: false
    };
  },
  onLoad: function onLoad(opt) {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(this.$data, this.$options.data());
    this.tid = opt.id;
    console.log('onLoad');
  },
  onShow: function onShow() {
    this.isRender = true;
    console.log('show');
  },

  components: {
    switchTab: __WEBPACK_IMPORTED_MODULE_1__components_switchTab__["a" /* default */], contactInfo: __WEBPACK_IMPORTED_MODULE_2__components_contactInfo__["a" /* default */]
  },

  methods: {
    //基本信息
    getContact: function getContact(data) {
      this.formContact = data;
    },
    uploadEvent: function uploadEvent(type) {
      var self = this;
      var imgArr = ['business_license_img', 'certificate_img', 'asset_liability_img', 'profit_img'];
      self.$util.uploadImg().then(function (res) {
        self.formCertificate[imgArr[type]] = res[0];
      });
    },
    delImg: function delImg(type) {
      var self = this;
      var imgArr = ['business_license_img', 'certificate_img', 'asset_liability_img', 'profit_img'];
      self.formCertificate[imgArr[type]] = '';
    },
    preImg: function preImg(type) {
      var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      var self = this;
      var imgArr = ['business_license_img', 'certificate_img', 'asset_liability_img', 'profit_img'];
      var imgs = [this.$imgPrefix + self.formCertificate[imgArr[type]]];
      self.$util.preImg(imgs, i);
    },
    prev: function prev() {
      this.activeIndex--;
    },
    next: function next() {
      var current = this.activeIndex;
      var self = this;
      var equity_info = null;
      var url = self.$api.certificateForm;
      if (current == 0) {
        var dataObj = self.formContact;
        this.$util.isFilled(dataObj, function () {
          self.$util.showToast('请完善联系人信息再进行下一步');
        }, function () {
          self.activeIndex++;
        });
      } else {
        var _dataObj = self.formCertificate;
        this.$util.isFilled(_dataObj, function () {
          self.$util.showToast('请上传证件照片再进行下一步');
        }, function () {
          var postData = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, self.formContact, self.formCertificate, { tid: self.tid });
          self.$http({ loading: true, url: url, method: 'POST', data: postData }).then(function (data) {
            self.$util.payMent(data).then(function (res) {
              self.$util.showToast('支付成功', 'success');
              setTimeout(function () {
                wx.navigateTo({ url: '/pages/my/orderList/main' });
                self.$util.clearAll(self, { tid: self.tid });
              }, 500);
            }).catch(function (err) {
              self.$util.showToast('取消支付');
              setTimeout(function () {
                wx.navigateTo({ url: '/pages/my/orderList/main' });
                self.$util.clearAll(self, { tid: self.tid });
              }, 500);
            });
          });
        });
      }
    }
  }

});

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.isRender) ? _c('div', {
    staticClass: "certificate_wrap"
  }, [_c('switchTab', {
    attrs: {
      "menuList": _vm.menus,
      "activeIndex": _vm.activeIndex,
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "form_wrap"
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.activeIndex == 0),
      expression: "activeIndex==0"
    }],
    staticClass: "certi_1"
  }, [_c('contactInfo', {
    attrs: {
      "eventid": '0',
      "mpcomid": '1'
    },
    on: {
      "getContact": _vm.getContact
    }
  })], 1), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.activeIndex == 1),
      expression: "activeIndex==1"
    }],
    staticClass: "certi_2"
  }, [_c('div', {
    staticClass: "_title"
  }, [_c('p', [_vm._v("请依次上传：营业执照扫描件、证书原件扫描件 ")]), _vm._v(" "), _c('div', {
    staticClass: "certi_imgs"
  }, [_c('ul', [_c('li', [_c('div', {
    staticClass: "imgs_sb2"
  }, [(_vm.formCertificate.business_license_img) ? _c('div', {
    staticClass: "img_wrap"
  }, [_c('img', {
    attrs: {
      "src": _vm.imgPrefix + _vm.formCertificate.business_license_img,
      "mode": "aspectFill",
      "eventid": '1'
    },
    on: {
      "click": function($event) {
        _vm.preImg(0)
      }
    }
  }), _vm._v(" "), _c('b', {
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": function($event) {
        _vm.delImg(0)
      }
    }
  }, [_vm._v("X")])], 1) : _c('img', {
    attrs: {
      "src": "/static/img/bg_imga.png",
      "eventid": '3'
    },
    on: {
      "click": function($event) {
        _vm.uploadEvent(0)
      }
    }
  })])]), _vm._v(" "), _c('li', [_c('div', {
    staticClass: "imgs_sb2"
  }, [(_vm.formCertificate.certificate_img) ? _c('div', {
    staticClass: "img_wrap"
  }, [_c('img', {
    attrs: {
      "src": _vm.imgPrefix + _vm.formCertificate.certificate_img,
      "mode": "aspectFill",
      "eventid": '4'
    },
    on: {
      "click": function($event) {
        _vm.preImg(1)
      }
    }
  }), _vm._v(" "), _c('b', {
    attrs: {
      "eventid": '5'
    },
    on: {
      "click": function($event) {
        _vm.delImg(1)
      }
    }
  }, [_vm._v("X")])], 1) : _c('img', {
    attrs: {
      "src": "/static/img/bg_imgb.png",
      "eventid": '6'
    },
    on: {
      "click": function($event) {
        _vm.uploadEvent(1)
      }
    }
  })])])], 1)], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "_title"
  }, [_c('p', [_vm._v("2018年12月份财务报表（资产负债表、利润表） ")]), _vm._v(" "), _c('div', {
    staticClass: "certi_imgs"
  }, [_c('ul', [_c('li', [_c('div', {
    staticClass: "imgs_sb2"
  }, [(_vm.formCertificate.asset_liability_img) ? _c('div', {
    staticClass: "img_wrap"
  }, [_c('img', {
    attrs: {
      "src": _vm.imgPrefix + _vm.formCertificate.asset_liability_img,
      "mode": "aspectFill",
      "eventid": '7'
    },
    on: {
      "click": function($event) {
        _vm.preImg(2)
      }
    }
  }), _vm._v(" "), _c('b', {
    attrs: {
      "eventid": '8'
    },
    on: {
      "click": function($event) {
        _vm.delImg(2)
      }
    }
  }, [_vm._v("X")])], 1) : _c('img', {
    attrs: {
      "src": "/static/img/bg_imgc.png",
      "eventid": '9'
    },
    on: {
      "click": function($event) {
        _vm.uploadEvent(2)
      }
    }
  })])]), _vm._v(" "), _c('li', [_c('div', {
    staticClass: "imgs_sb2"
  }, [(_vm.formCertificate.profit_img) ? _c('div', {
    staticClass: "img_wrap"
  }, [_c('img', {
    attrs: {
      "src": _vm.imgPrefix + _vm.formCertificate.profit_img,
      "mode": "aspectFill",
      "eventid": '10'
    },
    on: {
      "click": function($event) {
        _vm.preImg(3)
      }
    }
  }), _vm._v(" "), _c('b', {
    attrs: {
      "eventid": '11'
    },
    on: {
      "click": function($event) {
        _vm.delImg(3)
      }
    }
  }, [_vm._v("X")])], 1) : _c('img', {
    attrs: {
      "src": "/static/img/bg_imgd.png",
      "eventid": '12'
    },
    on: {
      "click": function($event) {
        _vm.uploadEvent(3)
      }
    }
  })])])], 1)], 1)], 1)]), _vm._v(" "), _c('div', {
    staticClass: "btn_wrap"
  }, [_c('div', {
    staticClass: "btn_wrap"
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.activeIndex != 0),
      expression: "activeIndex != 0"
    }],
    staticClass: "btn-style bg-btn",
    attrs: {
      "eventid": '13'
    },
    on: {
      "click": _vm.prev
    }
  }, [_vm._v("上一步")]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.activeIndex != 1),
      expression: "activeIndex != 1"
    }],
    staticClass: "btn-style",
    attrs: {
      "eventid": '14'
    },
    on: {
      "click": _vm.next
    }
  }, [_vm._v("下一步")]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.activeIndex == 1),
      expression: "activeIndex == 1"
    }],
    staticClass: "btn-style",
    attrs: {
      "eventid": '15'
    },
    on: {
      "click": _vm.next
    }
  }, [_vm._v("提交")])])])])], 1) : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-304fc1cc", esExports)
  }
}

/***/ })

},[133]);
//# sourceMappingURL=main.js.map