require("../../common/manifest.js");
require("../../common/vendor.js");
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonpMpvue([16],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(112);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_template_compiler_index_id_data_v_14f51fa8_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(117);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(113)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-14f51fa8"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_template_compiler_index_id_data_v_14f51fa8_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\certificate\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-14f51fa8", Component.options)
  } else {
    hotAPI.reload("data-v-14f51fa8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 113:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 114:
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

var _data = {
  type: '',
  start_time: '',
  end_time: ''
};
/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      natureArray: [],
      natureData: [],
      current: 0,
      isFilled: false,
      natureVal: [''],
      postData: {
        text: [{
          type: '',
          start_time: '',
          end_time: ''
        }], // array 信息

        code: '', // string  验证码
        phone: '', // string  手机号
        company_name: '', // string  公司名称
        license_number: '' // string  营业执照号
      },
      disable: false,
      captcha: '获取验证码'
    };
  },
  mounted: function mounted() {
    this.getNature();
    // this.getInfo();
  },
  onLoad: function onLoad(opt) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()(this.$data, this.$options.data());
  },

  components: {},
  onShow: function onShow() {
    this.current = 0;
    console.log('show');
    this.getInfo();
  },

  methods: {
    startChange: function startChange(i, e) {
      console.log(i, e);
      var value = e.mp.detail.value;
      this.postData.text[i].start_time = value;
    },
    endChange: function endChange(i, e) {
      console.log(i, e);
      var value = e.mp.detail.value;
      this.postData.text[i].end_time = value;
    },
    natureChange: function natureChange(i, e) {
      console.log(i, e);
      var value = e.mp.detail.value;
      this.natureVal[i] = this.natureData[value].title;
      this.postData.text[i].type = this.natureData[value].id;
    },
    addEvent: function addEvent() {
      var data = this.$util.deepClone(_data);
      this.postData.text.push(data);
      this.natureVal.push('');
    },

    //获取企业性质
    getNature: function getNature() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var url, data;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                url = _this.$api.manageOption;
                _context.next = 3;
                return _this.$http({ url: url }).then(function (data) {
                  return data;
                });

              case 3:
                data = _context.sent;

                _this.natureData = data;
                data.forEach(function (item, i) {
                  _this.natureArray.push(item.title);
                });

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },

    //获取企业信息
    getInfo: function getInfo() {
      var self = this;
      var url = this.$api.manageInfo;
      this.$http({ loading: true, url: url }).then(function (res) {
        if (res.company_name) {
          self.isFilled = true;
          self.postData.company_name = res.company_name;
          self.postData.license_number = res.license_number;
        } else {
          self.isFilled = false;
        }
      });
    },
    prev: function prev() {
      this.current--;
    },
    next: function next() {
      var current = this.current;
      var self = this;
      if (current == 0) {
        if (self.company_name == '' || self.license_number == '') {
          self.$util.showToast('请输入信息再进行下一步');
          return;
        }
        this.current++;
      } else if (current == 1) {
        var dataArr = self.postData.text;
        var isNext = false;
        var isStop = false;
        dataArr.forEach(function (item, i) {
          if (isStop) {
            return;
          }
          self.$util.isFilled(dataArr[i], function () {
            self.$util.showToast('请完善证书信息再进行下一步');
            isStop = true;
            isNext = false;
          }, function () {
            isNext = true;
          });
        });
        if (isNext) {
          self.current++;
        }
      } else {
        if (self.phone == '' || self.code == '') {
          self.$util.showToast('请输入');
          return;
        }
        self.$http({
          loading: true,
          method: 'POST',
          url: self.$api.manageForm,
          data: self.postData
        }).then(function (res) {
          self.$util.showToast('证书管理成功', 'success');
          setTimeout(function () {
            wx.navigateTo({
              url: '/pages/my/licenseList/main'
            });
            self.$util.clearAll(self, { natureArray: self.natureArray, natureData: self.natureData });
          }, 500);
        });
      }
    },
    sendCode: function sendCode() {
      var _this2 = this;

      var tel = this.postData.phone;
      var self = this;
      var url = this.$api.sms;
      if (!this.$util.isPhone(tel)) {
        this.$util.showToast('手机格式不正确');
        return;
      }
      this.$http({
        loading: true,
        url: url,
        data: { phone: tel, type: 'certificate_manage' }
      }).then(function (res) {
        var time = 10;
        var interval = setInterval(function () {
          if (--time > 0) {
            _this2.captcha = '\u91CD\u65B0\u53D1\u9001(' + time + ')';
            _this2.disable = true;
          } else {
            clearInterval(interval);
            _this2.captcha = '获取验证码';
            _this2.disable = false;
          }
        }, 1000);
      });
    }
  }

});

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "certificate"
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.current == 0),
      expression: "current == 0"
    }],
    staticClass: "step_2"
  }, [_c('p', [_vm._v("录入工商信息，享受免费到期提醒。")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.postData.company_name),
      expression: "postData.company_name"
    }],
    attrs: {
      "placeholder": "请输入您的公司名称",
      "disabled": _vm.isFilled,
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.postData.company_name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.postData.company_name = $event.target.value
      }
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.postData.license_number),
      expression: "postData.license_number"
    }],
    attrs: {
      "placeholder": "请输入您的营业执照号码",
      "disabled": _vm.isFilled,
      "eventid": '1'
    },
    domProps: {
      "value": (_vm.postData.license_number)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.postData.license_number = $event.target.value
      }
    }
  })], 1), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.current == 1),
      expression: "current == 1"
    }],
    staticClass: "step_1"
  }, [_vm._l((_vm.postData.text), function(item, i) {
    return _c('div', {
      key: i
    }, [_c('picker', {
      attrs: {
        "range": _vm.natureArray,
        "eventid": '3-' + i
      },
      on: {
        "change": function($event) {
          _vm.natureChange(i, $event)
        }
      }
    }, [_c('div', {
      staticClass: " nature"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (_vm.natureVal[i]),
        expression: "natureVal[i]"
      }],
      attrs: {
        "disabled": "",
        "placeholder": "企业性质",
        "eventid": '2-' + i
      },
      domProps: {
        "value": (_vm.natureVal[i])
      },
      on: {
        "input": function($event) {
          if ($event.target.composing) { return; }
          _vm.$set(_vm.natureVal, i, $event.target.value)
        }
      }
    })])]), _vm._v(" "), _c('picker', {
      staticClass: "date",
      attrs: {
        "mode": "date",
        "eventid": '4-' + i
      },
      on: {
        "change": function($event) {
          _vm.startChange(i, $event)
        }
      }
    }, [_c('p', [_vm._v("到期时间")]), _vm._v(" "), _c('div', {
      staticClass: " date_val"
    }, [_vm._v(_vm._s(item.start_time))])], 1), _vm._v(" "), _c('picker', {
      staticClass: "date",
      attrs: {
        "mode": "date",
        "eventid": '5-' + i
      },
      on: {
        "change": function($event) {
          _vm.endChange(i, $event)
        }
      }
    }, [_c('p', [_vm._v("到期时间")]), _vm._v(" "), _c('div', {
      staticClass: " date_val"
    }, [_vm._v(_vm._s(item.end_time))])], 1)], 1)
  }), _vm._v(" "), _c('div', {
    staticClass: "add_btn",
    attrs: {
      "eventid": '6'
    },
    on: {
      "click": _vm.addEvent
    }
  }, [_vm._v("\n          +增加一个录入信息\n      ")])], 2), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.current == 2),
      expression: "current == 2"
    }],
    staticClass: "step_2"
  }, [_c('p', [_vm._v("为避免错过年审期造成损失，绑定手机号可以定期接收到期提醒！")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.postData.phone),
      expression: "postData.phone"
    }],
    attrs: {
      "type": "number",
      "placeholder": "请输入手机号",
      "name": "phone",
      "maxlength": "11",
      "eventid": '7'
    },
    domProps: {
      "value": (_vm.postData.phone)
    },
    on: {
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
      "name": "code",
      "eventid": '8'
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
      "eventid": '9'
    },
    on: {
      "click": _vm.sendCode
    }
  }, [_vm._v(_vm._s(_vm.captcha))])], 1), _vm._v(" "), _c('div', {
    staticClass: "btn_wrap"
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.current != 0),
      expression: "current != 0"
    }],
    staticClass: "btn-style bg-btn",
    attrs: {
      "eventid": '10'
    },
    on: {
      "click": _vm.prev
    }
  }, [_vm._v("上一步")]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.current != 2),
      expression: "current != 2"
    }],
    staticClass: "btn-style",
    attrs: {
      "eventid": '11'
    },
    on: {
      "click": _vm.next
    }
  }, [_vm._v("下一步")]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.current == 2),
      expression: "current == 2"
    }],
    staticClass: "btn-style",
    attrs: {
      "eventid": '12'
    },
    on: {
      "click": _vm.next
    }
  }, [_vm._v("提交")])])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-14f51fa8", esExports)
  }
}

/***/ })

},[111]);
//# sourceMappingURL=main.js.map