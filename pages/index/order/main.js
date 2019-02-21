require("../../../common/manifest.js");
require("../../../common/vendor.js");
require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonpMpvue([13],{

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(258);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_template_compiler_index_id_data_v_43dbed62_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(261);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(259)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-43dbed62"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_template_compiler_index_id_data_v_43dbed62_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index\\order\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-43dbed62", Component.options)
  } else {
    hotAPI.reload("data-v-43dbed62", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 259:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign__);



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
      provinceArray: [],
      cityArray: [],
      countyArray: [],
      provinceData: [],
      cityData: [],
      countyData: [],
      phone: '',
      captcha: '获取验证码',
      provinceVal: '',
      cityVal: '',
      countyVal: '',
      postData: {
        name: '', // string  联系人
        phone: '', // string  手机号
        province_id: '', // int 省份id
        city_id: '', // int 市id
        area_id: '', // int 区县id
        address_detail: '', // string  详细地址
        tid: '', // int 分类id
        code: '' // string  验证码
      },
      disable: false
    };
  },
  onLoad: function onLoad(opt) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()(this.$data, this.$options.data());
    this.postData.tid = '22';
  },
  mounted: function mounted() {
    this.getProvince();
  },


  methods: {
    getProvince: function getProvince() {
      var _this = this;

      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var self, url, data;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                self = _this;
                url = _this.$api.provinceList;
                _context.next = 4;
                return _this.$http({ loading: true, url: url }).then(function (data) {
                  return data;
                });

              case 4:
                data = _context.sent;

                data.forEach(function (item, i) {
                  self.provinceArray.push(item.name);
                });
                _this.getCity(data[index].id);
                _this.provinceData = data;
                _this.postData.province_id = data[0].id;
                _this.provinceVal = data[0].name;

              case 10:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    getCity: function getCity(id) {
      var _this2 = this;

      var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var self, url, data;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                self = _this2;
                url = _this2.$api.cityList + '?id=' + id;

                self.cityArray = [];
                _context2.next = 5;
                return _this2.$http({ loading: true, url: url }).then(function (data) {
                  return data;
                });

              case 5:
                data = _context2.sent;

                data.forEach(function (item, i) {
                  self.cityArray.push(item.name);
                });
                _this2.getCounty(data[index].id);
                _this2.cityData = data;
                _this2.postData.city_id = data[0].id;
                _this2.cityVal = data[0].name;

              case 11:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    },
    getCounty: function getCounty(id) {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
        var self, url, data;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                self = _this3;

                self.countyArray = [];
                url = _this3.$api.districtList + '?id=' + id;
                _context3.next = 5;
                return _this3.$http({ loading: true, url: url }).then(function (data) {
                  return data;
                });

              case 5:
                data = _context3.sent;

                data.forEach(function (item, i) {
                  self.countyArray.push(item.name);
                });
                _this3.countyData = data;
                _this3.postData.area_id = data[0].id;
                _this3.countyVal = data[0].name;

              case 10:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this3);
      }))();
    },
    provinceChange: function provinceChange(e) {
      var _i = e.mp.detail.value;
      var id = this.provinceData[_i].id;
      this.postData.province_id = id;
      this.provinceVal = this.provinceData[_i].name;
      this.getCity(id);
    },
    cityChange: function cityChange(e) {
      var _i = e.mp.detail.value;
      var id = this.cityData[_i].id;
      this.postData.city_id = id;
      this.cityVal = this.cityData[_i].name;
      this.getCounty(id);
    },
    countyChange: function countyChange(e) {
      var _i = e.mp.detail.value;
      var id = this.countyData[_i].id;
      this.postData.area_id = id;
      this.countyVal = this.countyData[_i].name;
    },
    validateTel: function validateTel(e) {
      var self = this;
      self.$util.isTelNo(e.mp.detail.value, function () {
        self.postData.phone = '';
      });
    },
    submitOrder: function submitOrder() {
      var self = this;
      var url = this.$api.Reserve;
      var dataObj = this.postData;
      console.log(dataObj);
      self.$util.isFilled(dataObj, function () {
        self.$util.showToast('请完善预约信息再提交');
      }, function () {
        self.$http({ loading: true, method: 'POST', url: url, data: dataObj }).then(function (res) {
          self.$util.showToast('预约成功', 'success');
          setTimeout(function () {
            wx.navigateTo({ url: '/pages/my/bookList/main' });
          }, 500);
        });
      });
    },
    sendCode: function sendCode() {
      var _this4 = this;

      var tel = this.postData.phone;
      var self = this;
      var url = this.$api.sms;
      console.log(tel);
      if (!this.$util.isPhone(tel)) {
        this.$util.showToast('手机格式不正确');
        return;
      }
      this.disable = true;
      this.$http({
        url: url,
        data: { phone: tel, type: 'reserve' }
      }).then(function (res) {
        var time = 10;
        var interval = setInterval(function () {
          if (--time > 0) {
            _this4.captcha = '\u91CD\u65B0\u53D1\u9001(' + time + ')';
            _this4.disable = true;
          } else {
            clearInterval(interval);
            _this4.captcha = '获取验证码';
            _this4.disable = false;
          }
        }, 1000);
      }).catch(function (err) {
        _this4.disable = false;
      });
    }
  }

});

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "order"
  }, [_c('div', {
    staticClass: "step_2"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.postData.name),
      expression: "postData.name"
    }],
    attrs: {
      "placeholder": "请输入姓名",
      "maxlength": "11",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.postData.name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.postData.name = $event.target.value
      }
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.postData.phone),
      expression: "postData.phone"
    }],
    attrs: {
      "type": "number",
      "placeholder": "请输入手机号",
      "maxlength": "11",
      "eventid": '1'
    },
    domProps: {
      "value": (_vm.postData.phone)
    },
    on: {
      "blur": _vm.validateTel,
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.postData.phone = $event.target.value
      }
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.postData.code),
      expression: "postData.code"
    }],
    staticClass: "code",
    attrs: {
      "type": "number",
      "placeholder": "请输入验证码",
      "eventid": '2'
    },
    domProps: {
      "value": (_vm.postData.code)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.postData.code = $event.target.value
      }
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "btn_code",
    attrs: {
      "disabled": _vm.disable,
      "eventid": '3'
    },
    on: {
      "click": _vm.sendCode
    }
  }, [_vm._v(_vm._s(_vm.captcha))]), _vm._v(" "), _c('div', {
    staticClass: "city"
  }, [_c('picker', {
    staticClass: " nature",
    attrs: {
      "range": _vm.provinceArray,
      "eventid": '5'
    },
    on: {
      "change": _vm.provinceChange
    }
  }, [_c('div', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.provinceVal),
      expression: "provinceVal"
    }],
    attrs: {
      "disabled": "",
      "placeholder": "省",
      "eventid": '4'
    },
    domProps: {
      "value": (_vm.provinceVal)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.provinceVal = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('picker', {
    staticClass: " nature",
    attrs: {
      "range": _vm.cityArray,
      "eventid": '7'
    },
    on: {
      "change": _vm.cityChange
    }
  }, [_c('div', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.cityVal),
      expression: "cityVal"
    }],
    attrs: {
      "disabled": "",
      "placeholder": "市",
      "eventid": '6'
    },
    domProps: {
      "value": (_vm.cityVal)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.cityVal = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('picker', {
    staticClass: " nature",
    attrs: {
      "range": _vm.countyArray,
      "eventid": '9'
    },
    on: {
      "change": _vm.countyChange
    }
  }, [_c('div', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.countyVal),
      expression: "countyVal"
    }],
    attrs: {
      "disabled": "",
      "placeholder": "区",
      "eventid": '8'
    },
    domProps: {
      "value": (_vm.countyVal)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.countyVal = $event.target.value
      }
    }
  })])])], 1), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.postData.address_detail),
      expression: "postData.address_detail"
    }],
    attrs: {
      "placeholder": "请输入具体地址",
      "maxlength": "-1",
      "eventid": '10'
    },
    domProps: {
      "value": (_vm.postData.address_detail)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.postData.address_detail = $event.target.value
      }
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "btn-style btn",
    attrs: {
      "eventid": '11'
    },
    on: {
      "click": _vm.submitOrder
    }
  }, [_vm._v("提交预约信息")])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-43dbed62", esExports)
  }
}

/***/ })

},[257]);
//# sourceMappingURL=main.js.map