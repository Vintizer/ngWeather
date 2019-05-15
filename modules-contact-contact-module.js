(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-contact-contact-module"],{

/***/ "./src/app/components/contact-us/contact-us.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/contact-us/contact-us.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/contact-us/contact-us.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/contact-us/contact-us.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row mt-3 d-flex justify-content-center\">\r\n    <form [formGroup]=\"commentForm\">\r\n      <div class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <span class=\"input-group-text\" id=\"basic-addon3\">Your name:</span>\r\n        </div>\r\n        <input\r\n          type=\"text\"\r\n          class=\"form-control\"\r\n          id=\"basic-url\"\r\n          aria-describedby=\"basic-addon3\"\r\n          formControlName=\"name\"\r\n        />\r\n      </div>\r\n      <div class=\"input-group\">\r\n        <div class=\"input-group-prepend\">\r\n          <span class=\"input-group-text\">Your comment:</span>\r\n        </div>\r\n        <textarea\r\n          class=\"form-control\"\r\n          formControlName=\"comment\"\r\n          aria-label=\"With textarea\"\r\n        ></textarea>\r\n      </div>\r\n      <div class=\"btn-group d-flex justify-content-center mt-3\" role=\"group\" aria-label=\"Basic example\">\r\n          <button type=\"button\" class=\"btn btn-success\" (click)=\"submit()\">Submit</button>\r\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"cancel()\">Cancel</button>\r\n        </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/contact-us/contact-us.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/contact-us/contact-us.component.ts ***!
  \***************************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _store_actions_router_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/actions/router.actions */ "./src/app/store/actions/router.actions.ts");





var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent(formBuilder, store) {
        this.formBuilder = formBuilder;
        this.store = store;
    }
    ContactUsComponent.prototype.ngOnInit = function () {
        this.commentForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            comment: ''
        });
    };
    ContactUsComponent.prototype.submit = function () {
        var _this = this;
        setTimeout(function () { return _this.commentForm.reset(); }, 1000);
    };
    ContactUsComponent.prototype.isFormEdit = function () {
        return this.commentForm.dirty;
    };
    ContactUsComponent.prototype.cancel = function () {
        this.store.dispatch(new _store_actions_router_actions__WEBPACK_IMPORTED_MODULE_4__["Go"]({
            path: ['/hotels'],
        }));
    };
    ContactUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-contact-us',
            template: __webpack_require__(/*! ./contact-us.component.html */ "./src/app/components/contact-us/contact-us.component.html"),
            styles: [__webpack_require__(/*! ./contact-us.component.css */ "./src/app/components/contact-us/contact-us.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "./src/app/guards/contact-deactivate.guard.ts":
/*!****************************************************!*\
  !*** ./src/app/guards/contact-deactivate.guard.ts ***!
  \****************************************************/
/*! exports provided: ContactDeactivateGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactDeactivateGuard", function() { return ContactDeactivateGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactDeactivateGuard = /** @class */ (function () {
    function ContactDeactivateGuard() {
    }
    ContactDeactivateGuard.prototype.canDeactivate = function (component, next, state) {
        return !component.isFormEdit() || confirm('You have unsaved date.Are you sure to leave this page?');
    };
    ContactDeactivateGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ContactDeactivateGuard);
    return ContactDeactivateGuard;
}());



/***/ }),

/***/ "./src/app/modules/contact/contact.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/contact/contact.module.ts ***!
  \***************************************************/
/*! exports provided: ContactModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactModule", function() { return ContactModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _guards_contact_deactivate_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../guards/contact-deactivate.guard */ "./src/app/guards/contact-deactivate.guard.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../components/contact-us/contact-us.component */ "./src/app/components/contact-us/contact-us.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var routes = [
    {
        path: '',
        component: _components_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_3__["ContactUsComponent"],
        canDeactivate: [_guards_contact_deactivate_guard__WEBPACK_IMPORTED_MODULE_1__["ContactDeactivateGuard"]],
    }
];
var ContactModule = /** @class */ (function () {
    function ContactModule() {
    }
    ContactModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [_components_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_3__["ContactUsComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes)]
        })
    ], ContactModule);
    return ContactModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-contact-contact-module.js.map