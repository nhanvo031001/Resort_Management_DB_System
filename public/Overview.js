(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Overview"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Home.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
// import editProfile from './EditProfile.vue'
// import changePassword from './ChangePassword.vue'
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {// editProfile,
    // changePassword
  },
  data: function data() {
    return {
      locking: true,
      // user: {
      //     id: 1910409,
      //     position: 'Warehouse Manager',
      //     email: 'nhanvo@hcmut.edu.vn',
      //     birthday: '2001-10-03',
      //     phone: '0919140703',
      //     address: 'Ha Tien City'
      // },
      user_account: {},
      language: ''
    };
  },
  created: function created() {// this.getUser();
  },
  methods: {// getUser() {
    // //console.log('hihihi')
    // axios.get('/api/users')
    // .then(response => {
    //     this.user_account = response.data[0];       // one object
    //     console.log(this.user_account)
    // })
    // .catch(error => {
    //     console.log(error.response)
    // });
    // }
    // getUser() {
    //     // axios.get('/api/user/' + 1910409)
    //     axios.get('/api/getUser')
    //     .then (response => {
    //         console.log(response)
    //         this.user_account = response.data[0]
    //         console.log(this.book)
    //     })
    //     .catch (error => {
    //         console.log(error)
    //     })
    // },
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home.vue?vue&type=style&index=0&id=f2b6376c&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Home.vue?vue&type=style&index=0&id=f2b6376c&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.overview[data-v-f2b6376c] {         /*not use*/\r\n    /* display: flex;\r\n    justify-content: center;\r\n    align-items: center; */\r\n    height: 100%;\r\n    width: 100%;\r\n    font-size: 30px;\r\n    /* color: rgb(167, 167, 167); */\r\n    color: black;\r\n    font-weight: 600;\r\n    margin-top: 30px;\n}\n.no-padding[data-v-f2b6376c] {\r\n    padding: 0;\n}\n.star[data-v-f2b6376c] {\r\n    color: red;\n}\n.avatar[data-v-f2b6376c] {\r\n    font-size: 20px;\n}\n.image-container[data-v-f2b6376c] {\r\n    width: 200px;\r\n    height: 200px;\r\n    position: relative;\r\n    overflow: hidden;\r\n    border-radius: 50%;\r\n    border: 3px solid #0084B4;\r\n    margin-left: 75px;\n}\n.image-avatar[data-v-f2b6376c] {\r\n    /* margin-top: 10px;\r\n    border-radius: 50%;\r\n    border: 2px solid blue; */\r\n    display: inline;\r\n  margin: 0 auto;\r\n  height: 100%;\r\n  width: auto;\n}\n.name[data-v-f2b6376c] {\r\n    margin-top: 30px;\r\n    /* border: 1px solid red; */\r\n    width: 200px;\r\n    margin-left: 75px;\r\n    background-color: #0084B4;\r\n    border-radius: 20px 0px 20px 0px;\r\n    color: white;\r\n    border: none;\r\n    height: 50px;\r\n    padding-top: 10px;\n}\n.title[data-v-f2b6376c] {      \r\n    /* display: flex;\r\n    justify-content: center;\r\n    align-items: center; */\r\n    /* height: 100%;\r\n    width: 100%; */\r\n    font-size: 30px;\r\n    /* color: rgb(167, 167, 167); */\r\n    color: black;\r\n    font-weight: bold;\r\n    margin-top: 30px;\n}\n.content[data-v-f2b6376c] {\r\n    margin-top: 40px;\r\n    overflow: hidden;\n}\n.filling[data-v-f2b6376c] {\r\n    font-size: 23px;\n}\n.input-field[data-v-f2b6376c] {\r\n    font-size: 20px;\r\n    color: #0084B4;\r\n    font-weight: normal;\r\n    margin-top: 10px;\n}\n.input-filling[data-v-f2b6376c] {\r\n    border: 2px solid #D8DBE0;\r\n    border-radius: 3px;\n}\n.button-below[data-v-f2b6376c] {\r\n    margin-top: 30px;\r\n    margin-bottom: 5px;\n}\n.change-password[data-v-f2b6376c] {\r\n    background-color: #EEEEEE;\r\n    border: none ;\r\n    border-radius: 5px;\r\n    color: #616161;\r\n    font-size: 20px;\r\n    padding: 0.25rem 1.5rem;\n}\n.change-password[data-v-f2b6376c]:hover {\r\n    background-color: #d0d6d6;\n}\n.change-password[data-v-f2b6376c]:focus {\r\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n}\n.edit-profile[data-v-f2b6376c] {\r\n    margin-left: 290px;\r\n    background-color: #00ACED;\r\n    border: none ;\r\n    color: white;\r\n    font-size: 20px;\r\n    padding: 0.25rem 1.5rem;\r\n    border-radius: 5px;\n}\n.edit-profile[data-v-f2b6376c]:hover {\r\n    background-color: #0084B4;\n}\n.edit-profile[data-v-f2b6376c]:focus {\r\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n}\n.welcome[data-v-f2b6376c] {\r\n    color: #36b2ce;\n}\r\n\r\n\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home.vue?vue&type=style&index=0&id=f2b6376c&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Home.vue?vue&type=style&index=0&id=f2b6376c&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=style&index=0&id=f2b6376c&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home.vue?vue&type=style&index=0&id=f2b6376c&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "overview" }, [
      _c("div", { staticClass: "welcome" }, [_vm._v("WELCOME TO BK RESORT")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Home.vue":
/*!******************************************!*\
  !*** ./resources/js/components/Home.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_f2b6376c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=f2b6376c&scoped=true& */ "./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&scoped=true&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/components/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Home_vue_vue_type_style_index_0_id_f2b6376c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.vue?vue&type=style&index=0&id=f2b6376c&scoped=true&lang=css& */ "./resources/js/components/Home.vue?vue&type=style&index=0&id=f2b6376c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_f2b6376c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_f2b6376c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "f2b6376c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Home.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Home.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Home.vue?vue&type=style&index=0&id=f2b6376c&scoped=true&lang=css&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/Home.vue?vue&type=style&index=0&id=f2b6376c&scoped=true&lang=css& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_f2b6376c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=style&index=0&id=f2b6376c&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home.vue?vue&type=style&index=0&id=f2b6376c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_f2b6376c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_f2b6376c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_f2b6376c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_f2b6376c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&scoped=true&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&scoped=true& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_f2b6376c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=f2b6376c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_f2b6376c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_f2b6376c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);