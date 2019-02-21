require("../../common/manifest.js");
require("../../common/vendor.js");
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonpMpvue([7],{

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(291);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_template_compiler_index_id_data_v_45f8f637_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(294);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(292)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-45f8f637"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_template_compiler_index_id_data_v_45f8f637_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\test\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-45f8f637", Component.options)
  } else {
    hotAPI.reload("data-v-45f8f637", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 292:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 293:
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


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      current: 0,
      postData: {
        test: [],
        phone: '', // string  手机号
        code: ''
      },
      test: [],
      testList: [],
      disable: false,
      captcha: '获取验证码'
    };
  },
  onLoad: function onLoad(opt) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()(this.$data, this.$options.data());
  },
  onShow: function onShow() {
    this.getTests();
  },

  computed: {},
  methods: {
    getTests: function getTests() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var url, list;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                url = _this.$api.testList;
                _context.next = 3;
                return _this.$http({ loading: true, url: url }).then(function (data) {
                  return data;
                });

              case 3:
                list = _context.sent;

                _this.testList = list;
                list.forEach(function (item, i) {
                  _this.postData.test.push({
                    'id': item.id,
                    'title': item.title,
                    'option': []

                  });
                  _this.$set(_this.test, i, {
                    'option': []
                  });
                  item.children.forEach(function (sub, j) {
                    _this.$set(_this.test[i].option, j, false);
                  });
                });

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    choose: function choose(type, i, j) {
      var _this2 = this;

      if (type == '1') {
        this.$set(this.test[i].option, j, !this.test[i].option[j]);
      } else {
        this.test[i].option.forEach(function (sub, j) {
          _this2.$set(_this2.test[i].option, j, false);
        });
        this.$set(this.test[i].option, j, true);
      }
    },
    prev: function prev() {
      this.current--;
    },
    next: function next() {
      var current = this.current;
      var self = this;
      if (current == self.test.length) {
        if (self.postData.phone && self.postData.code) {
          self.$http({
            loading: true,
            method: 'POST',
            url: self.$api.testForm,
            data: self.postData
          }).then(function (res) {
            self.$util.showToast('提交成功', 'success');
            setTimeout(function () {
              wx.switchTab({ url: '/pages/index/main' });
            }, 1000);
          });
        } else {
          self.$util.showToast('请输入手机号或验证码');
        }
      } else {
        var result = self.test[current].option;
        result.forEach(function (item, i) {
          if (item) {
            self.postData.test[current].option.push({
              'id': self.testList[current].children[i].id,
              'title': self.testList[current].children[i].title
            });
          }
        });
        if (self.postData.test[current].option.length == 0) {
          self.$util.showToast('请选择后再进行下一步');
          return;
        }
        self.current++;
      }
    },
    sendCode: function sendCode() {
      var _this3 = this;

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
        data: { phone: tel, type: 'test' }
      }).then(function (res) {
        var time = 10;
        var interval = setInterval(function () {
          if (--time > 0) {
            _this3.captcha = '\u91CD\u65B0\u53D1\u9001(' + time + ')';
            _this3.disable = true;
          } else {
            clearInterval(interval);
            _this3.captcha = '获取验证码';
            _this3.disable = false;
          }
        }, 1000);
      });
    }
  }

});

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.test.length > 0) ? _c('div', {
    staticClass: "test"
  }, [_c('h2', [_vm._v("目前仅支持通信及互联网相关业务的企业筛查")]), _vm._v(" "), _vm._l((_vm.testList), function(item, i) {
    return _c('div', {
      key: i,
      staticClass: "question"
    }, [_c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (_vm.current == i),
        expression: "current == i"
      }]
    }, [_c('h3', [_vm._v(_vm._s(item.title) + _vm._s(item.type == '1' ? "（多选）" : "（单选）"))]), _vm._v(" "), _c('ul', _vm._l((item.children), function(answer, j) {
      return _c('li', {
        key: j,
        class: {
          on: _vm.test[i].option[j]
        },
        attrs: {
          "eventid": '0-' + i + '-' + j
        },
        on: {
          "click": function($event) {
            _vm.choose(item.type, i, j)
          }
        }
      }, [_vm._v(_vm._s(answer.title)), _c('b')], 1)
    }))], 1)])
  }), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.current == _vm.test.length),
      expression: "current == test.length"
    }],
    staticClass: "step_2"
  }, [_c('p', [_vm._v("绑定手机号接收测试结果！")]), _vm._v(" "), _c('input', {
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
      "eventid": '1'
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
      "eventid": '4'
    },
    on: {
      "click": _vm.prev
    }
  }, [_vm._v("上一步")]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.current != _vm.test.length),
      expression: "current != test.length"
    }],
    staticClass: "btn-style",
    attrs: {
      "eventid": '5'
    },
    on: {
      "click": _vm.next
    }
  }, [_vm._v("下一步")]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.current == _vm.test.length),
      expression: "current == test.length"
    }],
    staticClass: "btn-style",
    attrs: {
      "eventid": '6'
    },
    on: {
      "click": _vm.next
    }
  }, [_vm._v("提交")])])], 2) : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-45f8f637", esExports)
  }
}

/***/ })

},[290]);
//# sourceMappingURL=main.js.map