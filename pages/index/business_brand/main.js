require("../../../common/manifest.js");
require("../../../common/vendor.js");
require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonpMpvue([15],{

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(119);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_template_compiler_index_id_data_v_7a91fb0a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(132);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(120)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7a91fb0a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_template_compiler_index_id_data_v_7a91fb0a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index\\business_brand\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7a91fb0a", Component.options)
  } else {
    hotAPI.reload("data-v-7a91fb0a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 120:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_defineProperty__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_switchTab__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_contactInfo__ = __webpack_require__(19);




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
    var _ref;

    return _ref = {
      menus: ['基本信息', '联系人信息'],
      activeIndex: '0',
      imgPrefix: this.$imgPrefix,
      formBrand: {
        company_name: '', // string  公司名称
        license_identity_img: '', // string  营业执照或者身份证照片
        trademark_img: '', // string  商标扫描件图片
        trademark_parent_type_id: '', // int 申请类别：一级id
        trademark_type_id: '' // int 申请类别：二级id
      },
      formContact: {},
      sortVal: '',
      sortData: [], //类别所有数据
      sortIdArr: [], //一级类别id集合
      sortValArr: [], //一级类别title集合
      sortSubIdArr: [], //二级类别id集合
      sortSubValArr: [] }, __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_defineProperty___default()(_ref, 'sortVal', ''), __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_defineProperty___default()(_ref, 'sortSubVal', ''), __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_defineProperty___default()(_ref, 'tid', ''), __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_defineProperty___default()(_ref, 'isRender', false), _ref;
  },
  onLoad: function onLoad(opt) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()(this.$data, this.$options.data());
    this.tid = opt.id;
  },

  components: {
    switchTab: __WEBPACK_IMPORTED_MODULE_4__components_switchTab__["a" /* default */], contactInfo: __WEBPACK_IMPORTED_MODULE_5__components_contactInfo__["a" /* default */]
  },
  mounted: function mounted() {
    this.getSort();
  },
  onShow: function onShow() {
    this.isRender = true;
  },

  methods: {
    //分类
    getSort: function getSort() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var id, url;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                id = '42';
                url = _this.$api.enterprise + '?id=' + id;
                _context.next = 4;
                return _this.$http({ loading: true, url: url }).then(function (data) {
                  return data;
                });

              case 4:
                _this.sortData = _context.sent;

                _this.sortData.forEach(function (item, i) {
                  _this.sortValArr.push(item.title);
                  _this.sortIdArr.push(item.id);
                });
                _this.processData(_this.sortData, 0);

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    processData: function processData(data, index) {
      var _this2 = this;

      this.sortSubIdArr = [];
      this.sortSubValArr = [];
      data[index].children.forEach(function (item, j) {
        _this2.sortSubValArr.push(item.title);
        _this2.sortSubIdArr.push(item.id);
      });
      this.sortVal = this.sortValArr[index];
      this.sortSubVal = this.sortSubValArr[0];
      this.formBrand.trademark_parent_type_id = this.sortIdArr[index];
      this.formBrand.trademark_type_id = this.sortSubIdArr[0];
    },

    //基本信息
    getContact: function getContact(data) {
      this.formBasic = data;
    },
    uploadEvent: function uploadEvent(type) {
      var self = this;
      var imgArr = ['license_identity_img', 'trademark_img'];
      self.$util.uploadImg().then(function (res) {
        self.formBrand[imgArr[type]] = res[0];
      });
    },
    delImg: function delImg(type) {
      var self = this;
      var imgArr = ['license_identity_img', 'trademark_img'];
      self.formBrand[imgArr[type]] = '';
    },
    preImg: function preImg(type) {
      var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      var self = this;
      var imgArr = ['license_identity_img', 'trademark_img'];
      var imgs = [this.$imgPrefix + self.formBrand[imgArr[type]]];
      self.$util.preImg(imgs, i);
    },
    prev: function prev() {
      this.activeIndex--;
    },
    next: function next() {
      var current = this.activeIndex;
      var self = this;
      var url = self.$api.brandForm;
      if (current == 1) {
        var dataObj = self.formBasic;
        this.$util.isFilled(dataObj, function () {
          self.$util.showToast('请完善联系人信息再进行下一步');
        }, function () {
          var postData = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()({}, self.formBasic, self.formBrand, { tid: self.tid });
          self.$http({ loading: true, url: url, method: 'POST', data: postData }).then(function (data) {
            self.$util.payMent(data).then(function (res) {
              self.$util.showToast('支付成功', 'success');
              setTimeout(function () {
                wx.navigateTo({ url: '/pages/my/orderList/main' });
                self.formBrand = self.resetParam(self.formBrand);
                self.formContact = self.resetParam(self.formContact);
                self.sortVal = self.sortValArr[0];
                self.sortSubVal = self.sortSubValArr[0];
                self.formBrand.trademark_parent_type_id = self.sortIdArr[0];
                self.formBrand.trademark_type_id = self.sortSubIdArr[0];
              }, 500);
            }).catch(function (err) {
              self.$util.showToast('取消支付');
              setTimeout(function () {
                wx.navigateTo({ url: '/pages/my/orderList/main' });
                self.formBrand = self.resetParam(self.formBrand);
                self.formContact = self.resetParam(self.formContact);
                self.sortVal = self.sortValArr[0];
                self.sortSubVal = self.sortSubValArr[0];
                self.formBrand.trademark_parent_type_id = self.sortIdArr[0];
                self.formBrand.trademark_type_id = self.sortSubIdArr[0];
              }, 500);
            });
          });
        });
      } else {
        var _dataObj = self.formBrand;
        this.$util.isFilled(_dataObj, function () {
          self.$util.showToast('请完善基本信息再进行下一步');
        }, function () {
          self.activeIndex++;
        });
      }
    },
    sortChange: function sortChange(e) {
      var _index = e.mp.detail.value;
      this.processData(this.sortData, _index);
    },
    sortSubChange: function sortSubChange(e) {
      var _index = e.mp.detail.value;
      this.sortSubVal = this.sortSubValArr[_index];
      this.trademark_type_id = this.sortSubIdArr[_index];
    },
    resetParam: function resetParam(obj) {
      for (var key in obj) {
        obj[key] = '';
      }
      return obj;
    }
  }

});

/***/ }),

/***/ 132:
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
      value: (_vm.activeIndex == 1),
      expression: "activeIndex==1"
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
      value: (_vm.activeIndex == 0),
      expression: "activeIndex==0"
    }],
    staticClass: "certi_2"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.formBrand.company_name),
      expression: "formBrand.company_name"
    }],
    staticClass: "com_name",
    attrs: {
      "placeholder": "请输入公司名称",
      "eventid": '1'
    },
    domProps: {
      "value": (_vm.formBrand.company_name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.formBrand.company_name = $event.target.value
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "_title"
  }, [_c('p', [_vm._v("请依次上传：营业执照扫描件相片或者个人身份证扫描件，商标扫描件（黑白效果） ")]), _vm._v(" "), _c('div', {
    staticClass: "certi_imgs"
  }, [_c('ul', [_c('li', [_c('div', {
    staticClass: "imgs_sb2"
  }, [(_vm.formBrand.license_identity_img) ? _c('div', {
    staticClass: "img_wrap"
  }, [_c('img', {
    attrs: {
      "src": _vm.imgPrefix + _vm.formBrand.license_identity_img,
      "mode": "aspectFill",
      "eventid": '2'
    },
    on: {
      "click": function($event) {
        _vm.preImg(0)
      }
    }
  }), _vm._v(" "), _c('b', {
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": function($event) {
        _vm.delImg(0)
      }
    }
  }, [_vm._v("X")])], 1) : _c('img', {
    attrs: {
      "src": "/static/img/bg_imga.png",
      "eventid": '4'
    },
    on: {
      "click": function($event) {
        _vm.uploadEvent(0)
      }
    }
  })])]), _vm._v(" "), _c('li', [_c('div', {
    staticClass: "imgs_sb2"
  }, [(_vm.formBrand.trademark_img) ? _c('div', {
    staticClass: "img_wrap"
  }, [_c('img', {
    attrs: {
      "src": _vm.imgPrefix + _vm.formBrand.trademark_img,
      "mode": "aspectFill",
      "eventid": '5'
    },
    on: {
      "click": function($event) {
        _vm.preImg(1)
      }
    }
  }), _vm._v(" "), _c('b', {
    attrs: {
      "eventid": '6'
    },
    on: {
      "click": function($event) {
        _vm.delImg(1)
      }
    }
  }, [_vm._v("X")])], 1) : _c('img', {
    attrs: {
      "src": "/static/img/bg_imgb.png",
      "eventid": '7'
    },
    on: {
      "click": function($event) {
        _vm.uploadEvent(1)
      }
    }
  })])])], 1)], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "_title"
  }, [_c('p', [_vm._v("申请类别")]), _vm._v(" "), _c('div', {
    staticStyle: {
      "overflow": "hidden"
    }
  }, [_c('picker', {
    attrs: {
      "range": _vm.sortValArr,
      "eventid": '9'
    },
    on: {
      "change": _vm.sortChange
    }
  }, [_c('div', {
    staticClass: " sort1"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.sortVal),
      expression: "sortVal"
    }],
    attrs: {
      "disabled": "",
      "placeholder": "请选择",
      "eventid": '8'
    },
    domProps: {
      "value": (_vm.sortVal)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.sortVal = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('picker', {
    attrs: {
      "range": _vm.sortSubValArr,
      "eventid": '11'
    },
    on: {
      "change": _vm.sortSubChange
    }
  }, [_c('div', {
    staticClass: " sort2"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.sortSubVal),
      expression: "sortSubVal"
    }],
    attrs: {
      "disabled": "",
      "placeholder": "请选择",
      "eventid": '10'
    },
    domProps: {
      "value": (_vm.sortSubVal)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.sortSubVal = $event.target.value
      }
    }
  })])])], 1)], 1)]), _vm._v(" "), _c('div', {
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
      "eventid": '12'
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
      "eventid": '13'
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
      "eventid": '14'
    },
    on: {
      "click": _vm.next
    }
  }, [_vm._v("提交")])])])], 1) : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-7a91fb0a", esExports)
  }
}

/***/ })

},[118]);
//# sourceMappingURL=main.js.map