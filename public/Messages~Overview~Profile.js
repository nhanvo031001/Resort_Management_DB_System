(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Messages~Overview~Profile"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/BookInfo.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/BookInfo.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
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
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      book: {},
      bookID: this.$route.params.bookID,
      locking: true
    };
  },
  methods: {
    getBookByID: function getBookByID(id) {
      var _this = this;

      axios.get('/api/book/' + id).then(function (response) {
        console.log(response);
        _this.book = response.data[0];
        console.log(_this.book);
      })["catch"](function (error) {
        console.log(error);
      });
    }
  },
  created: function created() {
    //console.log("ahhaa")
    this.getBookByID(this.bookID);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LoaiPhongInfo.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/LoaiPhongInfo.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
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
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      loaiPhongID: this.$route.params.loaiPhongID
    };
  },
  props: ['items', 'resultQuery'],
  components: {},
  methods: {
    removeBook: function removeBook(id) {
      var _this = this;

      axios["delete"]('/api/book/' + id).then(function (response) {
        if (response.status == 200) {
          _this.$emit('orderchanged');
        }
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UpdateBook.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/UpdateBook.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue2_datepicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue2-datepicker */ "./node_modules/vue2-datepicker/index.esm.js");
/* harmony import */ var vue2_datepicker_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue2-datepicker/index.css */ "./node_modules/vue2-datepicker/index.css");
/* harmony import */ var vue2_datepicker_index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue2_datepicker_index_css__WEBPACK_IMPORTED_MODULE_1__);
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


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    DatePicker: vue2_datepicker__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      book: {},
      bookID: this.$route.params.bookID,
      categories: [],
      filename: '',
      file: ''
    };
  },
  methods: {
    onFileChange: function onFileChange(e) {
      //console.log(e.target.files[0]);
      this.filename = "Selected File: " + e.target.files[0].name;
      this.file = e.target.files[0];
      this.book.image = e.target.files[0].name;
    },
    submitForm: function submitForm(e) {
      e.preventDefault();
      var currentObj = this;
      var config = {
        headers: {
          'content-type': 'multipart/form-data',
          'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content
        }
      }; // form data

      var formData = new FormData();
      formData.append('file', this.file); // send upload request

      axios.post('/api/store_file', formData, config).then(function (response) {
        console.log("Done upload image");
        currentObj.success = response.data.success;
        currentObj.filename = "";
      })["catch"](function (error) {
        console.log(error);
        currentObj.output = error;
      });
    },
    getBookByID: function getBookByID(id) {
      var _this = this;

      axios.get('/api/book/' + id).then(function (response) {
        console.log(response);
        _this.book = response.data[0];
        console.log(_this.book);
      })["catch"](function (error) {
        console.log(error);
      });
    },
    updateBook: function updateBook(bookID) {
      axios.put('/api/book/' + bookID, {
        title: this.book.title,
        book_id: this.book.book_id,
        author: this.book.author,
        cid: this.book.cid,
        publisher: this.book.publisher,
        input_date: this.book.input_date,
        quantity: this.book.quantity,
        cost_price: this.book.cost_price,
        selling_price: this.book.selling_price,
        page_number: this.book.page_number,
        sale: this.book.sale,
        publish_date: this.book.publish_date,
        language: this.book.language,
        image: this.book.image,
        description: this.book.description
      }).then(function (response) {
        console.log(response);
      })["catch"](function (error) {
        console.log(error.response);
      });
    },
    sucess_update: function sucess_update() {
      alert("Sucessfully update book information!");
    },
    getAllCategories: function getAllCategories() {
      var _this2 = this;

      axios.get('/api/categories').then(function (response) {
        //console.log("Get all categories");
        _this2.categories = response.data;
        console.log(_this2.categories);
      })["catch"](function (error) {
        console.log(error.response);
      });
    },
    previewFiles: function previewFiles(event) {
      console.log(event.target.files);
      console.log(event.target.files[0].name);
      this.book.image = event.target.files[0].name;
    }
  },
  created: function created() {
    //console.log("ahhaa")
    this.getBookByID(this.bookID);
    this.getAllCategories();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/BookInfo.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/BookInfo.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.header-detail {\r\n    margin-top: 30px;\r\n    font-weight: bold;\r\n    font-size: 30px;\n}\n.filling-all-info {\r\n    margin-top: 40px;\n}\n.one-row-field {\r\n    margin-top: 15px;\n}\n.row-input {\r\n    border: 2px solid #D8DBE0;\r\n    border-radius: 3px;\n}\n.field-name-left {\r\n    padding-left: 115px;\r\n    color: #0084B4;\r\n    font-size: 18px;\r\n    font-weight: bold;\n}\n.field-name-right {\r\n    color: #0084B4;\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n    padding-left: 0px;\n}\n.red-star {\r\n    color: red;\n}\n.field-right {\r\n    padding-left: 12px;\n}\n.text-area {\r\n    margin-left: 3px;\n}\n.button-below {\r\n    margin-top: 20px;\r\n    margin-bottom: 30px;\n}\n.cancle-detailed {\r\n    background-color: #EEEEEE;\r\n    border: none ;\r\n    border-radius: 5px;\r\n    color: #616161;\r\n    font-size: 20px;\r\n    padding: 0.25rem 1.5rem;\r\n    margin-right: 30px;\n}\n.cancle-detailed:hover {\r\n    background-color: #d0d6d6;\n}\n.cancle-detailed:focus {\r\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n}\n.done {\r\n    /* margin-left: 290px; */\r\n    background-color: #00ACED;\r\n    border: none ;\r\n    color: white;\r\n    font-size: 20px;\r\n    padding: 0.25rem 1.5rem;\r\n    border-radius: 5px;\r\n    margin-right: 140px;\n}\n.done:hover {\r\n    background-color: #0084B4;\n}\n.done:focus {\r\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n}\r\n\r\n\r\n\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UpdateBook.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/UpdateBook.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.header-update {\r\n    margin-top: 30px;\r\n    font-weight: bold;\r\n    font-size: 30px;\n}\n.filling-all-info {\r\n    margin-top: 40px;\n}\n.one-row-field {\r\n    margin-top: 15px;\n}\n.row-input {\r\n    border: 2px solid #D8DBE0;\r\n    border-radius: 3px;\n}\n.field-name-left {\r\n    padding-left: 115px;\r\n    color: #0084B4;\r\n    font-size: 18px;\r\n    font-weight: bold;\n}\n.field-name-right {\r\n    color: #0084B4;\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n    padding-left: 0px;\n}\n.red-star {\r\n    color: red;\n}\n.field-right {\r\n    padding-left: 12px;\n}\n.text-area {\r\n    margin-left: 3px;\n}\n.select-category {\r\n    width: 684px;\r\n    height: 30px;\r\n    border: 2px solid #D8DBE0;\r\n    border-radius: 3px;\n}\n.select-language {\r\n    width: 210px;\r\n    height: 30px;\r\n    border: 2px solid #D8DBE0;\r\n    border-radius: 3px;\n}\n.button-below {\r\n    margin-top: 20px;\r\n    margin-bottom: 30px;\n}\n.cancle-update {\r\n    background-color: #EEEEEE;\r\n    border: none ;\r\n    border-radius: 5px;\r\n    color: #616161;\r\n    font-size: 20px;\r\n    padding: 0.25rem 1.5rem;\r\n    margin-right: 30px;\n}\n.cancle-update:hover {\r\n    background-color: #d0d6d6;\n}\n.cancle-update:focus {\r\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n}\n.update {\r\n    /* margin-left: 290px; */\r\n    background-color: #00ACED;\r\n    border: none ;\r\n    color: white;\r\n    font-size: 20px;\r\n    padding: 0.25rem 1.5rem;\r\n    border-radius: 5px;\r\n    margin-right: 140px;\n}\n.update:hover {\r\n    background-color: #0084B4;\n}\n.update:focus {\r\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n}\n.input-group {\r\n    width: 83%;\n}\n.custom-file-label {\r\n    border: 2px solid #D8DBE0;\r\n    border-radius: 3px;\n}\n#custom-file-label {\r\n    border: 2px solid #D8DBE0;\r\n    border-radius: 3px;\n}\r\n\r\n/* .custom-file-input {\r\n    opacity: 1;\r\n    padding-top: 3px;\r\n    width: 105px;\r\n} */\n.custom-file-input-temp {\r\n    opacity: 1;\r\n    padding-top: 3px;\r\n    width: 105px;\n}\n#upload-button {\r\n    border-radius: 3px;\n}\n::-moz-placeholder {\r\n    color: black;\n}\n:-ms-input-placeholder {\r\n    color: black;\n}\n::placeholder {\r\n    color: black;\n}\r\n\r\n\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/BookInfo.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/BookInfo.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./BookInfo.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/BookInfo.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UpdateBook.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/UpdateBook.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./UpdateBook.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UpdateBook.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/BookInfo.vue?vue&type=template&id=e37bcdbc&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/BookInfo.vue?vue&type=template&id=e37bcdbc& ***!
  \***********************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", { staticClass: "header-detail" }, [
      _vm._v("DETAILED BOOK INFORMATION")
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "container filling-all-info" }, [
      _c("div", { staticClass: "row one-row-field" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "col text-left" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.book.title,
                expression: "book.title"
              }
            ],
            staticClass: "row-input",
            attrs: { type: "text", size: "80", disabled: _vm.locking },
            domProps: { value: _vm.book.title },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.book, "title", $event.target.value)
              }
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row one-row-field" }, [
        _vm._m(1),
        _vm._v(" "),
        _c("div", { staticClass: "col text-left" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.book.book_id,
                expression: "book.book_id"
              }
            ],
            staticClass: "row-input",
            attrs: { type: "text", size: "80", disabled: _vm.locking },
            domProps: { value: _vm.book.book_id },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.book, "book_id", $event.target.value)
              }
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row one-row-field" }, [
        _vm._m(2),
        _vm._v(" "),
        _c("div", { staticClass: "col text-left" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.book.author,
                expression: "book.author"
              }
            ],
            staticClass: "row-input",
            attrs: { type: "text", size: "80", disabled: _vm.locking },
            domProps: { value: _vm.book.author },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.book, "author", $event.target.value)
              }
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row one-row-field" }, [
        _vm._m(3),
        _vm._v(" "),
        _c("div", { staticClass: "col text-left" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.book.category_name,
                expression: "book.category_name"
              }
            ],
            staticClass: "row-input",
            attrs: { type: "text", size: "80", disabled: _vm.locking },
            domProps: { value: _vm.book.category_name },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.book, "category_name", $event.target.value)
              }
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row one-row-field" }, [
        _vm._m(4),
        _vm._v(" "),
        _c("div", { staticClass: "col text-left" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.book.publisher,
                expression: "book.publisher"
              }
            ],
            staticClass: "row-input",
            attrs: { type: "text", size: "80", disabled: _vm.locking },
            domProps: { value: _vm.book.publisher },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.book, "publisher", $event.target.value)
              }
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row one-row-field" }, [
        _vm._m(5),
        _vm._v(" "),
        _c("div", { staticClass: "col-3 text-left" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.book.input_date,
                expression: "book.input_date"
              }
            ],
            staticClass: "row-input",
            attrs: {
              type: "text",
              size: "20",
              placeholder: "yyyy/mm/dd",
              disabled: _vm.locking
            },
            domProps: { value: _vm.book.input_date },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.book, "input_date", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _vm._m(6),
        _vm._v(" "),
        _c("div", { staticClass: "col-3 text-left field-right" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.book.quantity,
                expression: "book.quantity"
              }
            ],
            staticClass: "row-input",
            attrs: { type: "text", size: "21", disabled: _vm.locking },
            domProps: { value: _vm.book.quantity },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.book, "quantity", $event.target.value)
              }
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row one-row-field" }, [
        _vm._m(7),
        _vm._v(" "),
        _c("div", { staticClass: "col-3 text-left" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.book.cost_price,
                expression: "book.cost_price"
              }
            ],
            staticClass: "row-input",
            attrs: { type: "text", size: "20", disabled: _vm.locking },
            domProps: { value: _vm.book.cost_price },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.book, "cost_price", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _vm._m(8),
        _vm._v(" "),
        _c("div", { staticClass: "col-3 text-left field-right" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.book.selling_price,
                expression: "book.selling_price"
              }
            ],
            staticClass: "row-input",
            attrs: { type: "text", size: "21", disabled: _vm.locking },
            domProps: { value: _vm.book.selling_price },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.book, "selling_price", $event.target.value)
              }
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row one-row-field" }, [
        _vm._m(9),
        _vm._v(" "),
        _c("div", { staticClass: "col-3 text-left" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.book.page_number,
                expression: "book.page_number"
              }
            ],
            staticClass: "row-input",
            attrs: { type: "text", size: "20", disabled: _vm.locking },
            domProps: { value: _vm.book.page_number },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.book, "page_number", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-2 text-left field-name-right" }, [
          _vm._v("Sale(%)")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-3 text-left field-right" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.book.sale,
                expression: "book.sale"
              }
            ],
            staticClass: "row-input",
            attrs: { type: "text", size: "21", disabled: _vm.locking },
            domProps: { value: _vm.book.sale },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.book, "sale", $event.target.value)
              }
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row one-row-field" }, [
        _vm._m(10),
        _vm._v(" "),
        _c("div", { staticClass: "col-3 text-left" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.book.publish_date,
                expression: "book.publish_date"
              }
            ],
            staticClass: "row-input",
            attrs: {
              type: "text",
              size: "20",
              placeholder: "yyyy/mm/dd",
              disabled: _vm.locking
            },
            domProps: { value: _vm.book.publish_date },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.book, "publish_date", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _vm._m(11),
        _vm._v(" "),
        _c("div", { staticClass: "col-3 text-left field-right" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.book.language,
                expression: "book.language"
              }
            ],
            staticClass: "row-input",
            attrs: { type: "text", size: "21", disabled: _vm.locking },
            domProps: { value: _vm.book.language },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.book, "language", $event.target.value)
              }
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row one-row-field" }, [
        _vm._m(12),
        _vm._v(" "),
        _c("div", { staticClass: "col text-left" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.book.image,
                expression: "book.image"
              }
            ],
            staticClass: "row-input",
            attrs: { type: "text", size: "80", disabled: _vm.locking },
            domProps: { value: _vm.book.image },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.book, "image", $event.target.value)
              }
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row one-row-field" }, [
        _vm._m(13),
        _vm._v(" "),
        _c("div", { staticClass: "col text-left" }, [
          _c("textarea", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.book.description,
                expression: "book.description"
              }
            ],
            staticClass: "row-input text-area",
            attrs: { rows: "6", cols: "82", disabled: _vm.locking },
            domProps: { value: _vm.book.description },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.book, "description", $event.target.value)
              }
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row button-below" }, [
        _c("div", { staticClass: "col-3" }),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col text-right" },
          [
            _c("router-link", { attrs: { to: "/admin/managebooks" } }, [
              _c("button", { staticClass: "done" }, [_vm._v("Done")])
            ])
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-3 text-left field-name-left" }, [
      _vm._v("Title"),
      _c("span", { staticClass: "red-star" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-3 text-left field-name-left" }, [
      _vm._v("ID"),
      _c("span", { staticClass: "red-star" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-3 text-left field-name-left" }, [
      _vm._v("Author"),
      _c("span", { staticClass: "red-star" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-3 text-left field-name-left" }, [
      _vm._v("Category"),
      _c("span", { staticClass: "red-star" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-3 text-left field-name-left" }, [
      _vm._v("Publisher"),
      _c("span", { staticClass: "red-star" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-3 text-left field-name-left" }, [
      _vm._v("Input date"),
      _c("span", { staticClass: "red-star" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-2 text-left field-name-right" }, [
      _vm._v("Quantity"),
      _c("span", { staticClass: "red-star" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-3 text-left field-name-left" }, [
      _vm._v("Cost price (USD)"),
      _c("span", { staticClass: "red-star" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-2 text-left field-name-right" }, [
      _vm._v("Selling Price (USD)"),
      _c("span", { staticClass: "red-star" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-3 text-left field-name-left" }, [
      _vm._v("Page"),
      _c("span", { staticClass: "red-star" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-3 text-left field-name-left" }, [
      _vm._v("Publish date"),
      _c("span", { staticClass: "red-star" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-2 text-left field-name-right" }, [
      _vm._v("Language"),
      _c("span", { staticClass: "red-star" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-3 text-left field-name-left" }, [
      _vm._v("Image"),
      _c("span", { staticClass: "red-star" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-3 text-left field-name-left" }, [
      _vm._v("Description"),
      _c("span", { staticClass: "red-star" }, [_vm._v("*")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LoaiPhongInfo.vue?vue&type=template&id=5c81abb8&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/LoaiPhongInfo.vue?vue&type=template&id=5c81abb8& ***!
  \****************************************************************************************************************************************************************************************************************/
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
  return _c("div", [_vm._v("\n\n\n    day la LoaiPhongInfo.vue\n\n\n\n")])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UpdateBook.vue?vue&type=template&id=36fc0efd&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/UpdateBook.vue?vue&type=template&id=36fc0efd& ***!
  \*************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", { staticClass: "header-update" }, [
      _vm._v("UPDATE BOOK INFORMATION")
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "container filling-all-info" }, [
      _c("div", { staticClass: "row one-row-field" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "col text-left" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.book.title,
                expression: "book.title"
              }
            ],
            staticClass: "row-input",
            attrs: { type: "text", size: "80" },
            domProps: { value: _vm.book.title },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.book, "title", $event.target.value)
              }
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row one-row-field" }, [
        _vm._m(1),
        _vm._v(" "),
        _c("div", { staticClass: "col text-left" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.book.book_id,
                expression: "book.book_id"
              }
            ],
            staticClass: "row-input",
            attrs: { type: "text", size: "80" },
            domProps: { value: _vm.book.book_id },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.book, "book_id", $event.target.value)
              }
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row one-row-field" }, [
        _vm._m(2),
        _vm._v(" "),
        _c("div", { staticClass: "col text-left" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.book.author,
                expression: "book.author"
              }
            ],
            staticClass: "row-input",
            attrs: { type: "text", size: "80" },
            domProps: { value: _vm.book.author },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.book, "author", $event.target.value)
              }
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row one-row-field" }, [
        _vm._m(3),
        _vm._v(" "),
        _c("div", { staticClass: "col text-left" }, [
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.book.cid,
                  expression: "book.cid"
                }
              ],
              staticClass: "select-category",
              attrs: { "data-placeholder": "Choose a Language..." },
              on: {
                change: function($event) {
                  var $$selectedVal = Array.prototype.filter
                    .call($event.target.options, function(o) {
                      return o.selected
                    })
                    .map(function(o) {
                      var val = "_value" in o ? o._value : o.value
                      return val
                    })
                  _vm.$set(
                    _vm.book,
                    "cid",
                    $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                  )
                }
              }
            },
            _vm._l(_vm.categories, function(category) {
              return _c(
                "option",
                {
                  key: category.category_id,
                  domProps: { value: category.category_id }
                },
                [_vm._v(" " + _vm._s(category.category_name) + " ")]
              )
            }),
            0
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row one-row-field" }, [
        _vm._m(4),
        _vm._v(" "),
        _c("div", { staticClass: "col text-left" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.book.publisher,
                expression: "book.publisher"
              }
            ],
            staticClass: "row-input",
            attrs: { type: "text", size: "80" },
            domProps: { value: _vm.book.publisher },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.book, "publisher", $event.target.value)
              }
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row one-row-field" }, [
        _vm._m(5),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-3 text-left" },
          [
            _c("date-picker", {
              attrs: {
                size: "20",
                placeholder: _vm.book.input_date,
                lang: "en",
                type: "date",
                format: "YYYY-MM-DD",
                "value-type": "YYYY/MM/DD"
              },
              model: {
                value: _vm.book.input_date,
                callback: function($$v) {
                  _vm.$set(_vm.book, "input_date", $$v)
                },
                expression: "book.input_date"
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _vm._m(6),
        _vm._v(" "),
        _c("div", { staticClass: "col-3 text-left field-right" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.book.quantity,
                expression: "book.quantity"
              }
            ],
            staticClass: "row-input",
            attrs: { type: "text", size: "21" },
            domProps: { value: _vm.book.quantity },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.book, "quantity", $event.target.value)
              }
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row one-row-field" }, [
        _vm._m(7),
        _vm._v(" "),
        _c("div", { staticClass: "col-3 text-left" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.book.cost_price,
                expression: "book.cost_price"
              }
            ],
            staticClass: "row-input",
            attrs: { type: "text", size: "20" },
            domProps: { value: _vm.book.cost_price },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.book, "cost_price", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _vm._m(8),
        _vm._v(" "),
        _c("div", { staticClass: "col-3 text-left field-right" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.book.selling_price,
                expression: "book.selling_price"
              }
            ],
            staticClass: "row-input",
            attrs: { type: "text", size: "21" },
            domProps: { value: _vm.book.selling_price },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.book, "selling_price", $event.target.value)
              }
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row one-row-field" }, [
        _vm._m(9),
        _vm._v(" "),
        _c("div", { staticClass: "col-3 text-left" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.book.page_number,
                expression: "book.page_number"
              }
            ],
            staticClass: "row-input",
            attrs: { type: "text", size: "20" },
            domProps: { value: _vm.book.page_number },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.book, "page_number", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-2 text-left field-name-right" }, [
          _vm._v("Sale(%)")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-3 text-left field-right" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.book.sale,
                expression: "book.sale"
              }
            ],
            staticClass: "row-input",
            attrs: { type: "text", size: "21" },
            domProps: { value: _vm.book.sale },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.book, "sale", $event.target.value)
              }
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row one-row-field" }, [
        _vm._m(10),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-3 text-left" },
          [
            _c("date-picker", {
              attrs: {
                size: "20",
                placeholder: _vm.book.publish_date,
                lang: "en",
                type: "date",
                format: "YYYY-MM-DD",
                "value-type": "YYYY/MM/DD"
              },
              model: {
                value: _vm.book.publish_date,
                callback: function($$v) {
                  _vm.$set(_vm.book, "publish_date", $$v)
                },
                expression: "book.publish_date"
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _vm._m(11),
        _vm._v(" "),
        _c("div", { staticClass: "col-3 text-left field-right" }, [
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.book.language,
                  expression: "book.language"
                }
              ],
              staticClass: "select-language",
              attrs: { "data-placeholder": "Choose a Language..." },
              on: {
                change: function($event) {
                  var $$selectedVal = Array.prototype.filter
                    .call($event.target.options, function(o) {
                      return o.selected
                    })
                    .map(function(o) {
                      var val = "_value" in o ? o._value : o.value
                      return val
                    })
                  _vm.$set(
                    _vm.book,
                    "language",
                    $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                  )
                }
              }
            },
            [
              _c("option", { attrs: { value: "Vietnamese" } }, [
                _vm._v("Vietnamese")
              ]),
              _vm._v(" "),
              _c("option", { attrs: { value: "English" } }, [
                _vm._v("English")
              ]),
              _vm._v(" "),
              _c("option", { attrs: { value: "Chinese" } }, [
                _vm._v("Chinese")
              ]),
              _vm._v(" "),
              _c("option", { attrs: { value: "Korean" } }, [_vm._v("Korean")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "French" } }, [_vm._v("French")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "\tJapanese" } }, [
                _vm._v("\tJapanese")
              ])
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row one-row-field" }, [
        _vm._m(12),
        _vm._v(" "),
        _c("div", { staticClass: "col text-left" }, [
          _c(
            "form",
            {
              attrs: { id: "upload-image", enctype: "multipart/form-data" },
              on: { submit: _vm.submitForm }
            },
            [
              _c("div", { staticClass: "input-group" }, [
                _c("div", { staticClass: "custom-file" }, [
                  _c("input", {
                    staticClass: "custom-file-input custom-file-input-temp",
                    attrs: {
                      type: "file",
                      name: "filename",
                      id: "inputFileUpload"
                    },
                    on: { change: _vm.onFileChange }
                  }),
                  _vm._v(
                    "\n                              " +
                      _vm._s(_vm.book.image) +
                      "\n                              "
                  )
                ]),
                _vm._v(" "),
                _vm._m(13)
              ])
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row one-row-field" }, [
        _vm._m(14),
        _vm._v(" "),
        _c("div", { staticClass: "col text-left" }, [
          _c("textarea", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.book.description,
                expression: "book.description"
              }
            ],
            staticClass: "row-input text-area",
            attrs: { rows: "6", cols: "82" },
            domProps: { value: _vm.book.description },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.book, "description", $event.target.value)
              }
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row button-below" }, [
        _c("div", { staticClass: "col-3" }),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col text-right" },
          [
            _c("router-link", { attrs: { to: "/admin/managebooks" } }, [
              _c("button", { staticClass: "cancle-update" }, [_vm._v("Back")])
            ]),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "update",
                on: {
                  click: [
                    function($event) {
                      return _vm.updateBook(_vm.bookID)
                    },
                    function($event) {
                      return _vm.sucess_update()
                    }
                  ]
                }
              },
              [_vm._v("Update")]
            )
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-3 text-left field-name-left" }, [
      _vm._v("Title"),
      _c("span", { staticClass: "red-star" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-3 text-left field-name-left" }, [
      _vm._v("ID"),
      _c("span", { staticClass: "red-star" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-3 text-left field-name-left" }, [
      _vm._v("Author"),
      _c("span", { staticClass: "red-star" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-3 text-left field-name-left" }, [
      _vm._v("Category"),
      _c("span", { staticClass: "red-star" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-3 text-left field-name-left" }, [
      _vm._v("Publisher"),
      _c("span", { staticClass: "red-star" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-3 text-left field-name-left" }, [
      _vm._v("Input date"),
      _c("span", { staticClass: "red-star" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-2 text-left field-name-right" }, [
      _vm._v("Quantity"),
      _c("span", { staticClass: "red-star" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-3 text-left field-name-left" }, [
      _vm._v("Cost price (USD)"),
      _c("span", { staticClass: "red-star" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-2 text-left field-name-right" }, [
      _vm._v("Selling Price (USD)"),
      _c("span", { staticClass: "red-star" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-3 text-left field-name-left" }, [
      _vm._v("Page"),
      _c("span", { staticClass: "red-star" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-3 text-left field-name-left" }, [
      _vm._v("Publish date"),
      _c("span", { staticClass: "red-star" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-2 text-left field-name-right" }, [
      _vm._v("Language"),
      _c("span", { staticClass: "red-star" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-3 text-left field-name-left" }, [
      _vm._v("Image"),
      _c("span", { staticClass: "red-star" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-append" }, [
      _c("input", {
        staticClass: "btn btn-primary",
        attrs: { type: "submit", id: "upload-button", value: "Upload" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-3 text-left field-name-left" }, [
      _vm._v("Description"),
      _c("span", { staticClass: "red-star" }, [_vm._v("*")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./public/images/warehouse/search-icon.png":
/*!*************************************************!*\
  !*** ./public/images/warehouse/search-icon.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/search-icon.png?9e103a2eabbc454a72a0f63f720c2623";

/***/ }),

/***/ "./resources/js/components/BookInfo.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/BookInfo.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BookInfo_vue_vue_type_template_id_e37bcdbc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BookInfo.vue?vue&type=template&id=e37bcdbc& */ "./resources/js/components/BookInfo.vue?vue&type=template&id=e37bcdbc&");
/* harmony import */ var _BookInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BookInfo.vue?vue&type=script&lang=js& */ "./resources/js/components/BookInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _BookInfo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BookInfo.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/BookInfo.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _BookInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BookInfo_vue_vue_type_template_id_e37bcdbc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BookInfo_vue_vue_type_template_id_e37bcdbc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/BookInfo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/BookInfo.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/BookInfo.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BookInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./BookInfo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/BookInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BookInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/BookInfo.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/BookInfo.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BookInfo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./BookInfo.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/BookInfo.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BookInfo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BookInfo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BookInfo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BookInfo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/BookInfo.vue?vue&type=template&id=e37bcdbc&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/BookInfo.vue?vue&type=template&id=e37bcdbc& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BookInfo_vue_vue_type_template_id_e37bcdbc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./BookInfo.vue?vue&type=template&id=e37bcdbc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/BookInfo.vue?vue&type=template&id=e37bcdbc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BookInfo_vue_vue_type_template_id_e37bcdbc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BookInfo_vue_vue_type_template_id_e37bcdbc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/LoaiPhongInfo.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/LoaiPhongInfo.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LoaiPhongInfo_vue_vue_type_template_id_5c81abb8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoaiPhongInfo.vue?vue&type=template&id=5c81abb8& */ "./resources/js/components/LoaiPhongInfo.vue?vue&type=template&id=5c81abb8&");
/* harmony import */ var _LoaiPhongInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoaiPhongInfo.vue?vue&type=script&lang=js& */ "./resources/js/components/LoaiPhongInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LoaiPhongInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LoaiPhongInfo_vue_vue_type_template_id_5c81abb8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LoaiPhongInfo_vue_vue_type_template_id_5c81abb8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/LoaiPhongInfo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/LoaiPhongInfo.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/LoaiPhongInfo.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoaiPhongInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./LoaiPhongInfo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LoaiPhongInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoaiPhongInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/LoaiPhongInfo.vue?vue&type=template&id=5c81abb8&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/LoaiPhongInfo.vue?vue&type=template&id=5c81abb8& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoaiPhongInfo_vue_vue_type_template_id_5c81abb8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./LoaiPhongInfo.vue?vue&type=template&id=5c81abb8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LoaiPhongInfo.vue?vue&type=template&id=5c81abb8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoaiPhongInfo_vue_vue_type_template_id_5c81abb8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoaiPhongInfo_vue_vue_type_template_id_5c81abb8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/UpdateBook.vue":
/*!************************************************!*\
  !*** ./resources/js/components/UpdateBook.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UpdateBook_vue_vue_type_template_id_36fc0efd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UpdateBook.vue?vue&type=template&id=36fc0efd& */ "./resources/js/components/UpdateBook.vue?vue&type=template&id=36fc0efd&");
/* harmony import */ var _UpdateBook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UpdateBook.vue?vue&type=script&lang=js& */ "./resources/js/components/UpdateBook.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _UpdateBook_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UpdateBook.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/UpdateBook.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _UpdateBook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UpdateBook_vue_vue_type_template_id_36fc0efd___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UpdateBook_vue_vue_type_template_id_36fc0efd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/UpdateBook.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/UpdateBook.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/UpdateBook.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateBook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./UpdateBook.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UpdateBook.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateBook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/UpdateBook.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/UpdateBook.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateBook_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./UpdateBook.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UpdateBook.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateBook_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateBook_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateBook_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateBook_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/UpdateBook.vue?vue&type=template&id=36fc0efd&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/UpdateBook.vue?vue&type=template&id=36fc0efd& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateBook_vue_vue_type_template_id_36fc0efd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./UpdateBook.vue?vue&type=template&id=36fc0efd& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UpdateBook.vue?vue&type=template&id=36fc0efd&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateBook_vue_vue_type_template_id_36fc0efd___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateBook_vue_vue_type_template_id_36fc0efd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);