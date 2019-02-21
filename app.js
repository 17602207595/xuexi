require("./common/manifest.js");
require("./common/vendor.js");
global.webpackJsonpMpvue([6],{

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(70);




__WEBPACK_IMPORTED_MODULE_1_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_2_vuex__["a" /* default */]);

var store = new __WEBPACK_IMPORTED_MODULE_2_vuex__["a" /* default */].Store({
  state: {
    isLogin: false
  },
  getters: {
    loginFlag: function loginFlag(state) {
      return state.isLogin;
    }
  },
  mutations: {
    /**
     * 在main.js例引入
     * import store from './store/index'
     * 把store挂载到全局
     * Vue.prototype.$store = store;
     */

    /**
     * 这里设置一个统一的方法,大部分用的vuex都是简单的改变一些状态,不需要写过多的mutations
     * 使用方法 例:
     * this.$store.update({"cityName":"北京"})
     * 
     *  config需要传入对象
     * @param {*} state 
     * @param {*Object} config 
     */
    update: function update(state, config) {
      __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(config).map(function (item, key) {
        state[item] = config[item];
      });
    }
  }
});

/* harmony default export */ __webpack_exports__["a"] = (store);

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var baseUrl = 'https://www.99tjit.cn/api';
var imgPrefix = 'https://www.99tjit.cn';
var api = {
    login: baseUrl + '/user/login', //get
    banner: baseUrl + '/Focus/getFcousList', //get
    uploadImg: baseUrl + '/Upload/uploadBaseImg', //post
    sms: baseUrl + '/Sms/getSms', //get
    provinceList: baseUrl + '/Address/provinceList', //get
    districtList: baseUrl + '/Address/districtList', //get
    cityList: baseUrl + '/Address/cityList', //get
    Category: baseUrl + '/Category/getCategoryList', //get--首页分类
    getCategoryInfo: baseUrl + '/Category/getCategoryInfo', //get--分类详情
    Reserve: baseUrl + '/Reserve/info', //post--预约上门表单提交
    ispForm: baseUrl + '/Handle/info', //post--ISP_IDC_SP_呼叫中心_VPN_CDN表单提交
    icpForm: baseUrl + '/Icp/info', //post--ICP表单提交
    certificateForm: baseUrl + '/Certificateinspection/inspection', //post--证书表单提交
    smsForm: baseUrl + '/Numberproces/trademarkForm', //post--短信表单提交
    brandForm: baseUrl + '/Trademark/trademarkForm', //post--短信表单提交
    enterprise: baseUrl + '/Option/getList', //get--ISP_IDC_SP_呼叫中心_VPN_CDN企业性质
    manageOption: baseUrl + '/Certificatemanagetype/manageOption', //请求方式
    manageInfo: baseUrl + '/Certificatemanage/manageInfo', //请求方式
    manageForm: baseUrl + '/Certificatemanage/manageForm', //请求方式
    reserveList: baseUrl + '/Reserve/list', //请求方式
    orderList: baseUrl + '/Order/list', //请求方式
    manageList: baseUrl + '/Certificatemanage/manageList', //请求方式
    testForm: baseUrl + '/Selfchecking/testForm', //请求方式
    testList: baseUrl + '/Test/getList', //请求方式
    unpay: baseUrl + '/payment/userPayment',
    isPay: baseUrl + '/Payment/isPayment', //检测是否已购买当前业务--get
    pay: baseUrl + '/Payment/businessPayment' //支付--get


};

/* harmony default export */ __webpack_exports__["a"] = ({
    imgPrefix: imgPrefix,
    api: api
});

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api__ = __webpack_require__(47);





function formatNumber(n) {
  var str = n.toString();
  return str[1] ? str : '0' + str;
}

function formatTime(date) {
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();

  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();

  var t1 = [year, month, day].map(formatNumber).join('/');
  var t2 = [hour, minute, second].map(formatNumber).join(':');

  return t1 + ' ' + t2;
}
function formatDate(date) {
  var mark = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '-';

  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();

  var t1 = [year, month, day].map(formatNumber).join(mark);

  return '' + t1;
}
function showToast(tip) {
  var icon = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'none';

  wx.showToast({
    title: tip,
    icon: icon,
    duration: 2000
  });
}
function isPhone(tel) {
  var reg = /^1[2|3|4|5|6|7|8|9]\d{9}$/;
  if (reg.test(tel)) {
    return true;
  } else {
    return false;
  }
}

function uploadImg() {
  var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

  return new __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
    wx.chooseImage({
      count: count,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function success(res) {
        var imgs = res.tempFilePaths;
        uploadFile(imgs).then(function (data) {
          resolve(data);
        }).catch(function (err) {
          showToast(err);
        });
      },
      fail: function fail(err) {
        reject(err);
      }
    });
  });
}
function uploadFile() {
  var imgs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  // 封装上传图片接口
  var self = this;
  var index = 0; // 当前要上传第几个图片的索引
  var filePath = []; // 上传成功后的文件地址
  var token = wx.getStorageSync('token');
  wx.showLoading({
    title: '上传图片中',
    mask: true
  });

  return new __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
    (function up() {
      console.log(imgs[index], 3333333333333300);
      wx.uploadFile({
        url: __WEBPACK_IMPORTED_MODULE_4__api__["a" /* default */].api.uploadImg,
        filePath: imgs[index],
        name: 'img',
        success: function success(res) {
          var data = JSON.parse(res.data);
          console.log(data);
          if (data.code == 0) {
            filePath.push(data.data.src);
            index++;
            // 递归上传图片（微信上传接口不支持多个文件）
            if (imgs.length > index) {
              up();
            } else {
              wx.hideLoading();
              resolve(filePath);
            }
          } else {
            wx.hideLoading();
            reject('上传失败，请重试');
          }
        },
        fail: function fail(err) {
          wx.hideLoading();
          reject('上传图片失败，请重试');
        }
      });
    })();
  });
}
function preImg(urls) {
  var current = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  wx.previewImage({
    urls: urls,
    current: urls[current],
    fail: function fail() {
      showToast('预览失败，请重新尝试');
    }
  });
}

function isFilled(obj, fail, success) {
  if (isFilled) {
    var arr = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys___default()(obj);
    var flag = 0;
    for (var i = 0; i < arr.length; i++) {
      if (obj[arr[i]] == '') {
        fail();
        flag = 0;
        break;
      } else {
        flag = 1;
      }
    }
    if (flag) {
      success();
    }
  } else {
    fail();
  }

  console.log(obj);
}

function isLicenseNo(number, callback) {
  var reg = /(^(?:(?![IOZSV])[\dA-Z]){2}\d{6}(?:(?![IOZSV])[\dA-Z]){10}$)|(^\d{15}$)/;
  if (!reg.test(number)) {
    showToast('营业执照号格式不正确');
    callback();
  }
}
function isTelNo(number, callback) {
  var reg = /^1[3|4|5|6|7|8|9]\d{9}$/;
  if (!reg.test(number)) {
    showToast('手机格式不正确');
    callback();
  }
}
function isCardNo(card, callback) {
  // 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X 
  var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
  if (reg.test(card) === false) {
    showToast('身份证号码格式不正确');
    callback();
  }
}
function isEmail(email, callback) {
  var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
  if (reg.test(email) === false) {
    showToast('邮箱格式不正确');
    callback();
  }
}

function deepClone(obj) {
  var _obj = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify___default()(obj),
      objClone = JSON.parse(_obj);
  return objClone;
}
function payMent(res) {
  return new __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
    wx.requestPayment({
      timeStamp: res.timestamp,
      nonceStr: res.nonceStr,
      package: res.package,
      signType: res.signType,
      paySign: res.paySign,
      success: function success(resp) {
        resolve(resp);
      },
      fail: function fail(err) {
        reject(err);
      }
    });
  });
}
function clearAll(self) {
  var obj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if (obj) {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(self.$data, self.$options.data(), obj);
  } else {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(self.$data, self.$options.data());
  }
  console.log(obj, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(self.$data, self.$options.data(), obj));
}
/* harmony default export */ __webpack_exports__["a"] = ({
  formatNumber: formatNumber,
  formatTime: formatTime,
  showToast: showToast,
  isPhone: isPhone,
  formatDate: formatDate,
  uploadImg: uploadImg,
  isFilled: isFilled,
  isLicenseNo: isLicenseNo,
  isTelNo: isTelNo,
  isCardNo: isCardNo,
  isEmail: isEmail,
  preImg: preImg,
  deepClone: deepClone,
  payMent: payMent,
  clearAll: clearAll
});

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_index__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_api__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_http__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_index__ = __webpack_require__(55);







__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$store = __WEBPACK_IMPORTED_MODULE_2__store_index__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$api = __WEBPACK_IMPORTED_MODULE_3__utils_api__["a" /* default */].api;
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$imgPrefix = __WEBPACK_IMPORTED_MODULE_3__utils_api__["a" /* default */].imgPrefix;
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$http = __WEBPACK_IMPORTED_MODULE_4__utils_http__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$util = __WEBPACK_IMPORTED_MODULE_5__utils_index__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */].mpType = 'app';
var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(61);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(60)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */
var __vue_template__ = null
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-586a134c", Component.options)
  } else {
    hotAPI.reload("data-v-586a134c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 60:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/* harmony default export */ __webpack_exports__["a"] = ({
  created: function created() {}
});

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_js__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_index_js__ = __webpack_require__(39);




var _http = function _http(opt) {
    //封装请求
    var self = this;
    var _promise = new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
        var defaultOpt = {
            loading: false, // 是否显示Loading提示窗
            method: 'GET', // 请求方法，必须大写！！
            data: {}, // 入参
            header: {
                token: wx.getStorageSync('token') ? wx.getStorageSync('token') : ''
            }
            // 合并
        };opt = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, defaultOpt, opt);
        var loading = opt.loading; // 是否显示加载提示弹窗
        wx.request({
            url: opt.url,
            method: opt.method,
            data: opt.data,
            header: opt.header,
            success: function success(res) {
                if (res.data.code == 10001) {
                    reject({
                        code: 10001,
                        msg: opt.url + '接口需要token参数3，但系统中不存在token'
                    });
                } else if (res.data.code == 0) {
                    wx.hideLoading();
                    resolve(res.data.data);
                    console.log('请求成功', opt.url, res.data);
                } else {
                    wx.hideLoading();
                    reject(res.data);
                }
            },
            fail: function fail(res) {
                reject(res);
                console.log(opt.url, '通信接口失败');
            }
        });
        if (loading) {
            wx.showLoading({
                title: '加载中',
                mask: true
            });
        }
    });

    return _promise.catch(function (err) {
        wx.hideLoading();
        if (err.code == 10001) {
            wx.hideLoading();
            console.log('err10001', err.msg);
            wx.navigateTo({ url: '/pages/login/main' });
        } else if (err.code == -1) {
            __WEBPACK_IMPORTED_MODULE_2__index_js__["a" /* default */].showToast(err.msg);
            console.log('非err10001', err.msg, opt.url);
        }
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a.reject({
            code: err.code,
            msg: err.msg
        });
    });
};

/* harmony default export */ __webpack_exports__["a"] = (_http);

/***/ })

},[57]);
//# sourceMappingURL=app.js.map