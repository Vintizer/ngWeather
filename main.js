(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./modules/contact/contact.module": [
		"./src/app/modules/contact/contact.module.ts",
		"modules-contact-contact-module"
	],
	"./modules/hotels.module": [
		"./src/app/modules/hotels.module.ts",
		"modules-hotels-module"
	],
	"./modules/users/users.module": [
		"./src/app/modules/users/users.module.ts",
		"modules-users-users-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _guards_users_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guards/users.guard */ "./src/app/guards/users.guard.ts");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/components/not-found/not-found.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var routes = [
    {
        path: '',
        redirectTo: 'hotels',
        pathMatch: 'full'
    },
    {
        path: 'about',
        component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]
    },
    {
        path: 'hotels',
        loadChildren: './modules/hotels.module#HotelsModule'
    },
    {
        path: 'users',
        loadChildren: './modules/users/users.module#UsersModule',
        canActivate: [_guards_users_guard__WEBPACK_IMPORTED_MODULE_1__["UsersGuard"]]
    },
    {
        path: 'contact',
        loadChildren: './modules/contact/contact.module#ContactModule'
    },
    {
        path: '**',
        component: _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes, {
                    enableTracing: false,
                    paramsInheritanceStrategy: 'always'
                })
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<simple-notifications></simple-notifications>\r\n<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _store_effects_router_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store/effects/router.effects */ "./src/app/store/effects/router.effects.ts");
/* harmony import */ var _store_reducers_custom_route_serializer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/reducers/custom-route-serializer */ "./src/app/store/reducers/custom-route-serializer.ts");
/* harmony import */ var _store_effects_favorite_hotel_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/effects/favorite-hotel.effects */ "./src/app/store/effects/favorite-hotel.effects.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/components/not-found/not-found.component.ts");
/* harmony import */ var _services_api_interceptor__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/api.interceptor */ "./src/app/services/api.interceptor.ts");
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./store/reducers */ "./src/app/store/reducers/index.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _store_effects_hotel_effects__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./store/effects/hotel.effects */ "./src/app/store/effects/hotel.effects.ts");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/fesm5/router-store.js");























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"],
                _components_about_about_component__WEBPACK_IMPORTED_MODULE_15__["AboutComponent"],
                _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_17__["NotFoundComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_16__["NavbarComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                angular2_notifications__WEBPACK_IMPORTED_MODULE_11__["SimpleNotificationsModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["StoreModule"].forRoot(_store_reducers__WEBPACK_IMPORTED_MODULE_19__["reducers"], { metaReducers: _store_reducers__WEBPACK_IMPORTED_MODULE_19__["metaReducers"] }),
                !_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_10__["StoreDevtoolsModule"].instrument() : [],
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_20__["EffectsModule"].forRoot([_store_effects_hotel_effects__WEBPACK_IMPORTED_MODULE_21__["HotelEffects"], _store_effects_favorite_hotel_effects__WEBPACK_IMPORTED_MODULE_3__["FavoriteHotelEffects"], _store_effects_router_effects__WEBPACK_IMPORTED_MODULE_1__["RouterEffects"]]),
                _ngrx_router_store__WEBPACK_IMPORTED_MODULE_22__["StoreRouterConnectingModule"].forRoot({
                    serializer: _store_reducers_custom_route_serializer__WEBPACK_IMPORTED_MODULE_2__["CustomSerializer"]
                })
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                    useClass: _services_api_interceptor__WEBPACK_IMPORTED_MODULE_18__["ParamInterceptor"],
                    multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about/about.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/about/about.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/about/about.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <p>\r\n      Далеко-далеко за словесными горами в стране гласных и согласных живут\r\n      рыбные тексты. Продолжил единственное маленький страну жизни\r\n      парадигматическая до, выйти если они запятых океана текстами грустный\r\n      вопроса она подпоясал рекламных собрал залетают грамматики на берегу\r\n      переписали над но родного решила? Языком которое сбить последний путь\r\n      всеми, его великий мир несколько свою за прямо домах которой все коварный\r\n      бросил переписали ручеек она единственное! Образ вопрос подзаголовок\r\n      проектах всемогущая решила ему приставка страна но. Своих на берегу\r\n      текстами свой имени, гор маленькая безорфографичный большого составитель\r\n      речью родного меня вопрос диких вопроса, путь инициал? Снова, буквенных.\r\n      Решила последний лучше эта запятой рукопись. Рекламных сбить ручеек толку,\r\n      подпоясал инициал страна города предложения пустился, по всей заголовок\r\n      безопасную! Несколько переулка это запятых она языком взгляд его правилами\r\n      рот свой дал океана, первую агентство инициал себя жизни наш решила,\r\n      заманивший подпоясал города то! Ее, живет предложения коварный вскоре\r\n      большой эта образ, домах пунктуация переписывается гор строчка запятой то\r\n      грамматики путь. Однажды лучше взобравшись по всей, путь которой гор на\r\n      берегу, повстречался переписали родного, грустный ты правилами залетают то\r\n      назад дороге свой не! Большого даже алфавит мир встретил повстречался\r\n      заглавных коварный маленький страну всеми запятой обеспечивает,\r\n      подзаголовок если? Вдали, вопроса своих до лучше, они снова послушавшись\r\n      ему обеспечивает продолжил предупредила взгляд гор то запятых одна\r\n      переулка! Знаках, инициал города? Меня, безорфографичный напоивший жизни,\r\n      своих текстов заголовок первую вскоре вопрос большого составитель речью\r\n      которой силуэт коварный маленький правилами текстами переписали снова.\r\n      Запятой на берегу вскоре власти не но вопроса ручеек города? Вопрос речью\r\n      он но снова первую скатился? Все свой злых дорогу, семантика реторический\r\n      своего наш ты курсивных гор назад что подзаголовок над диких, домах щеке\r\n      обеспечивает встретил вопрос его! Обеспечивает запятой агентство проектах\r\n      переписывается, продолжил пустился предупредила текстами, ведущими\r\n      необходимыми до, дорогу возвращайся lorem! Безорфографичный дал страну\r\n      приставка своего это одна запятых агентство алфавит повстречался даль ты\r\n      языком, не, всеми напоивший моей продолжил снова дороге.\r\n    </p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/components/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/components/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active {\r\n    background-color: rgb(139, 233, 236)\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzksIDIzMywgMjM2KVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n    <a class=\"navbar-brand\" [routerLink]=\"['/hotels']\">Hotels</a>\r\n  \r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/hotels']\" routerLinkActive=\"active\">Home</a>\r\n        </li>\r\n        <li class=\"nav-item\" *ngIf=\"isAdminVal\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/users']\" routerLinkActive=\"active\">Users</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/contact']\" routerLinkActive=\"active\">Contact us</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/about']\" routerLinkActive=\"active\">About us</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.isAdminVal = Boolean(sessionStorage.getItem('isAdmin'));
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/not-found/not-found.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/not-found/not-found.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n Извините, такой страницы у нас нет\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/not-found/not-found.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.ts ***!
  \*************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/components/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/components/not-found/not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/guards/users.guard.ts":
/*!***************************************!*\
  !*** ./src/app/guards/users.guard.ts ***!
  \***************************************/
/*! exports provided: UsersGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersGuard", function() { return UsersGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _store_actions_router_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/actions/router.actions */ "./src/app/store/actions/router.actions.ts");




var UsersGuard = /** @class */ (function () {
    function UsersGuard(store) {
        this.store = store;
        this.isAdminVal = Boolean(sessionStorage.getItem('isAdmin'));
    }
    UsersGuard.prototype.canActivate = function (next, state) {
        if (this.isAdminVal) {
            return true;
        }
        else {
            this.store.dispatch(new _store_actions_router_actions__WEBPACK_IMPORTED_MODULE_3__["Go"]({
                path: [''],
                extras: { replaceUrl: false }
            }));
            return false;
        }
    };
    UsersGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], UsersGuard);
    return UsersGuard;
}());



/***/ }),

/***/ "./src/app/hotels.service.ts":
/*!***********************************!*\
  !*** ./src/app/hotels.service.ts ***!
  \***********************************/
/*! exports provided: HotelsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelsService", function() { return HotelsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../environments/environment */ "./src/environments/environment.ts");




var HotelsService = /** @class */ (function () {
    function HotelsService(http) {
        this.http = http;
        this.configUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].configUrl;
    }
    HotelsService.prototype.getHotelsObservable = function (page, limit) {
        if (page === void 0) { page = 0; }
        if (limit === void 0) { limit = 20; }
        return this.http.get(this.configUrl + "hotels?_page=" + (page + 1) + "&_limit=" + limit);
    };
    HotelsService.prototype.getHotelById = function (id) {
        return this.http.get(this.configUrl + "hotels/" + id);
    };
    HotelsService.prototype.getCommentsById = function (id) {
        return this.http.get(this.configUrl + "comments?hotel_id=" + id);
    };
    HotelsService.prototype.getAllHotels = function () {
        console.log('getAllHotels: ', _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].configUrl);
        return this.http.get(this.configUrl + "hotels");
    };
    HotelsService.prototype.removeHotel = function (id) {
        return this.http.delete(this.configUrl + "hotels/" + id);
    };
    HotelsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HotelsService);
    return HotelsService;
}());



/***/ }),

/***/ "./src/app/services/api.interceptor.ts":
/*!*********************************************!*\
  !*** ./src/app/services/api.interceptor.ts ***!
  \*********************************************/
/*! exports provided: ParamInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParamInterceptor", function() { return ParamInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ParamInterceptor = /** @class */ (function () {
    function ParamInterceptor() {
    }
    ParamInterceptor.prototype.intercept = function (req, next) {
        if (req.method === 'DELETE') {
            var authToken = sessionStorage.getItem('isAdmin');
            if (!authToken) {
                return next.handle(req);
            }
            var updatedRequest = req.clone({
                headers: req.headers.set('Authorization', authToken)
            });
            return next.handle(updatedRequest);
        }
        else {
            return next.handle(req);
        }
    };
    ParamInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ParamInterceptor);
    return ParamInterceptor;
}());



/***/ }),

/***/ "./src/app/services/favorite-service.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/favorite-service.service.ts ***!
  \******************************************************/
/*! exports provided: FavoriteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteService", function() { return FavoriteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");




var FavoriteService = /** @class */ (function () {
    function FavoriteService(http) {
        this.http = http;
        this.configUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].configUrl;
    }
    FavoriteService.prototype.addFavorite = function (hotel) {
        var newFavoriteHotel = Object.assign(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, hotel, { voted: 1 }));
        return this.http.post(this.configUrl + "favorites/", newFavoriteHotel);
    };
    FavoriteService.prototype.voteFavorite = function (favHotel) {
        return this.http.patch(this.configUrl + "favorites/" + favHotel.id, {
            voted: favHotel.voted + 1
        });
    };
    FavoriteService.prototype.getFavorites = function () {
        return this.http.get(this.configUrl + "favorites");
    };
    FavoriteService.prototype.removeFromFavorites = function (id) {
        return this.http.delete(this.configUrl + "favorites/" + id);
    };
    FavoriteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FavoriteService);
    return FavoriteService;
}());



/***/ }),

/***/ "./src/app/store/actions/favorite-hotel.actions.ts":
/*!*********************************************************!*\
  !*** ./src/app/store/actions/favorite-hotel.actions.ts ***!
  \*********************************************************/
/*! exports provided: FavoriteHotelActionTypes, LoadFavoriteHotels, LoadFavoriteHotelsSuccess, LoadFavoriteHotelsFailure, AddFavoriteHotels, AddFavoriteHotelsSuccess, AddFavoriteHotelsFailure, VoteFavoriteHotels, VoteFavoriteHotelsSuccess, VoteFavoriteHotelsFailure, RemoveFavoriteHotels, RemoveFavoriteHotelsSuccess, RemoveFavoriteHotelsFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteHotelActionTypes", function() { return FavoriteHotelActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadFavoriteHotels", function() { return LoadFavoriteHotels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadFavoriteHotelsSuccess", function() { return LoadFavoriteHotelsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadFavoriteHotelsFailure", function() { return LoadFavoriteHotelsFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFavoriteHotels", function() { return AddFavoriteHotels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFavoriteHotelsSuccess", function() { return AddFavoriteHotelsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFavoriteHotelsFailure", function() { return AddFavoriteHotelsFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoteFavoriteHotels", function() { return VoteFavoriteHotels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoteFavoriteHotelsSuccess", function() { return VoteFavoriteHotelsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoteFavoriteHotelsFailure", function() { return VoteFavoriteHotelsFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveFavoriteHotels", function() { return RemoveFavoriteHotels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveFavoriteHotelsSuccess", function() { return RemoveFavoriteHotelsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveFavoriteHotelsFailure", function() { return RemoveFavoriteHotelsFailure; });
var FavoriteHotelActionTypes;
(function (FavoriteHotelActionTypes) {
    FavoriteHotelActionTypes["LoadFavoriteHotels"] = "[FavoriteHotel] Load FavoriteHotels";
    FavoriteHotelActionTypes["LoadFavoriteHotelsSuccess"] = "[FavoriteHotel] Load FavoriteHotels Success";
    FavoriteHotelActionTypes["LoadFavoriteHotelsFailure"] = "[FavoriteHotel] Load FavoriteHotels Failure";
    FavoriteHotelActionTypes["AddFavoriteHotels"] = "[FavoriteHotel] Add FavoriteHotels";
    FavoriteHotelActionTypes["AddFavoriteHotelsSuccess"] = "[FavoriteHotel] Add FavoriteHotels Success";
    FavoriteHotelActionTypes["AddFavoriteHotelsFailure"] = "[FavoriteHotel] Add FavoriteHotels Failure";
    FavoriteHotelActionTypes["VoteFavoriteHotels"] = "[FavoriteHotel] Vote FavoriteHotels";
    FavoriteHotelActionTypes["VoteFavoriteHotelsSuccess"] = "[FavoriteHotel] Vote FavoriteHotels Success";
    FavoriteHotelActionTypes["VoteFavoriteHotelsFailure"] = "[FavoriteHotel] Vote FavoriteHotels Failure";
    FavoriteHotelActionTypes["RemoveFavoriteHotels"] = "[FavoriteHotel] Remove FavoriteHotels";
    FavoriteHotelActionTypes["RemoveFavoriteHotelsSuccess"] = "[FavoriteHotel] Remove FavoriteHotels Success";
    FavoriteHotelActionTypes["RemoveFavoriteHotelsFailure"] = "[FavoriteHotel] Remove FavoriteHotels Failure";
})(FavoriteHotelActionTypes || (FavoriteHotelActionTypes = {}));
// tslint:disable-next-line: max-classes-per-file
var LoadFavoriteHotels = /** @class */ (function () {
    function LoadFavoriteHotels() {
        this.type = FavoriteHotelActionTypes.LoadFavoriteHotels;
    }
    return LoadFavoriteHotels;
}());

// tslint:disable-next-line: max-classes-per-file
var LoadFavoriteHotelsSuccess = /** @class */ (function () {
    function LoadFavoriteHotelsSuccess(payload) {
        this.payload = payload;
        this.type = FavoriteHotelActionTypes.LoadFavoriteHotelsSuccess;
    }
    return LoadFavoriteHotelsSuccess;
}());

// tslint:disable-next-line: max-classes-per-file
var LoadFavoriteHotelsFailure = /** @class */ (function () {
    function LoadFavoriteHotelsFailure(payload) {
        this.payload = payload;
        this.type = FavoriteHotelActionTypes.LoadFavoriteHotelsFailure;
    }
    return LoadFavoriteHotelsFailure;
}());

// tslint:disable-next-line: max-classes-per-file
var AddFavoriteHotels = /** @class */ (function () {
    function AddFavoriteHotels(payload) {
        this.payload = payload;
        this.type = FavoriteHotelActionTypes.AddFavoriteHotels;
    }
    return AddFavoriteHotels;
}());

// tslint:disable-next-line: max-classes-per-file
var AddFavoriteHotelsSuccess = /** @class */ (function () {
    function AddFavoriteHotelsSuccess(payload) {
        this.payload = payload;
        this.type = FavoriteHotelActionTypes.AddFavoriteHotelsSuccess;
    }
    return AddFavoriteHotelsSuccess;
}());

// tslint:disable-next-line: max-classes-per-file
var AddFavoriteHotelsFailure = /** @class */ (function () {
    function AddFavoriteHotelsFailure(payload) {
        this.payload = payload;
        this.type = FavoriteHotelActionTypes.AddFavoriteHotelsFailure;
    }
    return AddFavoriteHotelsFailure;
}());

// tslint:disable-next-line: max-classes-per-file
var VoteFavoriteHotels = /** @class */ (function () {
    function VoteFavoriteHotels(payload) {
        this.payload = payload;
        this.type = FavoriteHotelActionTypes.VoteFavoriteHotels;
    }
    return VoteFavoriteHotels;
}());

// tslint:disable-next-line: max-classes-per-file
var VoteFavoriteHotelsSuccess = /** @class */ (function () {
    function VoteFavoriteHotelsSuccess(payload) {
        this.payload = payload;
        this.type = FavoriteHotelActionTypes.VoteFavoriteHotelsSuccess;
    }
    return VoteFavoriteHotelsSuccess;
}());

// tslint:disable-next-line: max-classes-per-file
var VoteFavoriteHotelsFailure = /** @class */ (function () {
    function VoteFavoriteHotelsFailure(payload) {
        this.payload = payload;
        this.type = FavoriteHotelActionTypes.VoteFavoriteHotelsFailure;
    }
    return VoteFavoriteHotelsFailure;
}());

// tslint:disable-next-line: max-classes-per-file
var RemoveFavoriteHotels = /** @class */ (function () {
    function RemoveFavoriteHotels(payload) {
        this.payload = payload;
        this.type = FavoriteHotelActionTypes.RemoveFavoriteHotels;
    }
    return RemoveFavoriteHotels;
}());

// tslint:disable-next-line: max-classes-per-file
var RemoveFavoriteHotelsSuccess = /** @class */ (function () {
    function RemoveFavoriteHotelsSuccess(payload) {
        this.payload = payload;
        this.type = FavoriteHotelActionTypes.RemoveFavoriteHotelsSuccess;
    }
    return RemoveFavoriteHotelsSuccess;
}());

// tslint:disable-next-line: max-classes-per-file
var RemoveFavoriteHotelsFailure = /** @class */ (function () {
    function RemoveFavoriteHotelsFailure(payload) {
        this.payload = payload;
        this.type = FavoriteHotelActionTypes.RemoveFavoriteHotelsFailure;
    }
    return RemoveFavoriteHotelsFailure;
}());



/***/ }),

/***/ "./src/app/store/actions/hotel.actions.ts":
/*!************************************************!*\
  !*** ./src/app/store/actions/hotel.actions.ts ***!
  \************************************************/
/*! exports provided: HotelActionTypes, RemoveHotels, RemoveHotelsSuccess, RemoveHotelsError, LoadHotels, LoadHotelsSuccess, LoadHotelsError, LoadHotel, LoadHotelSuccess, LoadHotelError, LoadAllHotels, LoadAllHotelsSuccess, LoadAllHotelsError, SetTextFilter, SetStarFilter, SetActiveHotel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelActionTypes", function() { return HotelActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveHotels", function() { return RemoveHotels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveHotelsSuccess", function() { return RemoveHotelsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveHotelsError", function() { return RemoveHotelsError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadHotels", function() { return LoadHotels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadHotelsSuccess", function() { return LoadHotelsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadHotelsError", function() { return LoadHotelsError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadHotel", function() { return LoadHotel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadHotelSuccess", function() { return LoadHotelSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadHotelError", function() { return LoadHotelError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadAllHotels", function() { return LoadAllHotels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadAllHotelsSuccess", function() { return LoadAllHotelsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadAllHotelsError", function() { return LoadAllHotelsError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTextFilter", function() { return SetTextFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetStarFilter", function() { return SetStarFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetActiveHotel", function() { return SetActiveHotel; });
var HotelActionTypes;
(function (HotelActionTypes) {
    HotelActionTypes["LoadHotels"] = "[Hotel] Load Hotels";
    HotelActionTypes["LoadHotelsSuccess"] = "[Hotel] Load Hotels Success";
    HotelActionTypes["LoadHotelsError"] = "[Hotel] Load Hotels Error";
    HotelActionTypes["LoadHotel"] = "[Hotel] Load Hotel";
    HotelActionTypes["LoadHotelSuccess"] = "[Hotel] Load Hotel Success";
    HotelActionTypes["LoadHotelError"] = "[Hotel] Load Hotel Error";
    HotelActionTypes["LoadAllHotels"] = "[Hotel] Load All Hotels";
    HotelActionTypes["LoadAllHotelsSuccess"] = "[Hotel] Load Hotels All Success";
    HotelActionTypes["LoadAllHotelsError"] = "[Hotel] Load Hotels All Error";
    HotelActionTypes["RemoveHotels"] = "[Hotel] Remove Hotels";
    HotelActionTypes["RemoveHotelsSuccess"] = "[Hotel] Remove Hotels Success";
    HotelActionTypes["RemoveHotelsError"] = "[Hotel] Remove Hotels Error";
    HotelActionTypes["SetTextFilter"] = "[Hotel] Set Text Filter";
    HotelActionTypes["SetStarFilter"] = "[Hotel] Set Star Filter";
    HotelActionTypes["SetActiveHotel"] = "[Hotel] Set Active Hotel";
})(HotelActionTypes || (HotelActionTypes = {}));
// tslint:disable-next-line: max-classes-per-file
var RemoveHotels = /** @class */ (function () {
    function RemoveHotels(payload) {
        this.payload = payload;
        this.type = HotelActionTypes.RemoveHotels;
    }
    return RemoveHotels;
}());

// tslint:disable-next-line: max-classes-per-file
var RemoveHotelsSuccess = /** @class */ (function () {
    function RemoveHotelsSuccess(payload) {
        this.payload = payload;
        this.type = HotelActionTypes.RemoveHotelsSuccess;
    }
    return RemoveHotelsSuccess;
}());

// tslint:disable-next-line: max-classes-per-file
var RemoveHotelsError = /** @class */ (function () {
    function RemoveHotelsError(payload) {
        this.payload = payload;
        this.type = HotelActionTypes.RemoveHotelsError;
    }
    return RemoveHotelsError;
}());

// tslint:disable-next-line: max-classes-per-file
var LoadHotels = /** @class */ (function () {
    function LoadHotels(payload) {
        if (payload === void 0) { payload = { page: 0, limit: 20 }; }
        this.payload = payload;
        this.type = HotelActionTypes.LoadHotels;
    }
    return LoadHotels;
}());

// tslint:disable-next-line: max-classes-per-file
var LoadHotelsSuccess = /** @class */ (function () {
    function LoadHotelsSuccess(payload) {
        this.payload = payload;
        this.type = HotelActionTypes.LoadHotelsSuccess;
    }
    return LoadHotelsSuccess;
}());

// tslint:disable-next-line: max-classes-per-file
var LoadHotelsError = /** @class */ (function () {
    function LoadHotelsError(payload) {
        this.payload = payload;
        this.type = HotelActionTypes.LoadHotelsError;
    }
    return LoadHotelsError;
}());

// tslint:disable-next-line: max-classes-per-file
var LoadHotel = /** @class */ (function () {
    function LoadHotel(payload) {
        this.payload = payload;
        this.type = HotelActionTypes.LoadHotel;
    }
    return LoadHotel;
}());

// tslint:disable-next-line: max-classes-per-file
var LoadHotelSuccess = /** @class */ (function () {
    function LoadHotelSuccess(payload) {
        this.payload = payload;
        this.type = HotelActionTypes.LoadHotelSuccess;
    }
    return LoadHotelSuccess;
}());

// tslint:disable-next-line: max-classes-per-file
var LoadHotelError = /** @class */ (function () {
    function LoadHotelError(payload) {
        this.payload = payload;
        this.type = HotelActionTypes.LoadHotelError;
    }
    return LoadHotelError;
}());

// tslint:disable-next-line: max-classes-per-file
var LoadAllHotels = /** @class */ (function () {
    function LoadAllHotels() {
        this.type = HotelActionTypes.LoadAllHotels;
    }
    return LoadAllHotels;
}());

// tslint:disable-next-line: max-classes-per-file
var LoadAllHotelsSuccess = /** @class */ (function () {
    function LoadAllHotelsSuccess(payload) {
        this.payload = payload;
        this.type = HotelActionTypes.LoadAllHotelsSuccess;
    }
    return LoadAllHotelsSuccess;
}());

// tslint:disable-next-line: max-classes-per-file
var LoadAllHotelsError = /** @class */ (function () {
    function LoadAllHotelsError(payload) {
        this.payload = payload;
        this.type = HotelActionTypes.LoadAllHotelsError;
    }
    return LoadAllHotelsError;
}());

// tslint:disable-next-line: max-classes-per-file
var SetTextFilter = /** @class */ (function () {
    function SetTextFilter(payload) {
        this.payload = payload;
        this.type = HotelActionTypes.SetTextFilter;
    }
    return SetTextFilter;
}());

// tslint:disable-next-line: max-classes-per-file
var SetStarFilter = /** @class */ (function () {
    function SetStarFilter(payload) {
        this.payload = payload;
        this.type = HotelActionTypes.SetStarFilter;
    }
    return SetStarFilter;
}());

// tslint:disable-next-line: max-classes-per-file
var SetActiveHotel = /** @class */ (function () {
    function SetActiveHotel(payload) {
        this.payload = payload;
        this.type = HotelActionTypes.SetActiveHotel;
    }
    return SetActiveHotel;
}());



/***/ }),

/***/ "./src/app/store/actions/router.actions.ts":
/*!*************************************************!*\
  !*** ./src/app/store/actions/router.actions.ts ***!
  \*************************************************/
/*! exports provided: GO, BACK, FORWARD, Go, Back, Forward */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GO", function() { return GO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BACK", function() { return BACK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORWARD", function() { return FORWARD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Go", function() { return Go; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Back", function() { return Back; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Forward", function() { return Forward; });
var GO = '[Router] Go';
var BACK = '[Router] Back';
var FORWARD = '[Router] Forward';
var Go = /** @class */ (function () {
    function Go(payload) {
        this.payload = payload;
        this.type = GO;
    }
    return Go;
}());

var Back = /** @class */ (function () {
    function Back() {
        this.type = BACK;
    }
    return Back;
}());

var Forward = /** @class */ (function () {
    function Forward() {
        this.type = FORWARD;
    }
    return Forward;
}());



/***/ }),

/***/ "./src/app/store/effects/favorite-hotel.effects.ts":
/*!*********************************************************!*\
  !*** ./src/app/store/effects/favorite-hotel.effects.ts ***!
  \*********************************************************/
/*! exports provided: FavoriteHotelEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteHotelEffects", function() { return FavoriteHotelEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_favorite_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../services/favorite-service.service */ "./src/app/services/favorite-service.service.ts");
/* harmony import */ var _actions_favorite_hotel_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../actions/favorite-hotel.actions */ "./src/app/store/actions/favorite-hotel.actions.ts");









var FavoriteHotelEffects = /** @class */ (function () {
    function FavoriteHotelEffects(actions$, favService, store, ns) {
        var _this = this;
        this.actions$ = actions$;
        this.favService = favService;
        this.store = store;
        this.ns = ns;
        this.loadFavorites$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_favorite_hotel_actions__WEBPACK_IMPORTED_MODULE_8__["FavoriteHotelActionTypes"].LoadFavoriteHotels), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function () {
            return _this.favService.getFavorites().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (hotels) { return new _actions_favorite_hotel_actions__WEBPACK_IMPORTED_MODULE_8__["LoadFavoriteHotelsSuccess"](hotels); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _actions_favorite_hotel_actions__WEBPACK_IMPORTED_MODULE_8__["LoadFavoriteHotelsFailure"](err)); }));
        }));
        this.addToFavorites$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_favorite_hotel_actions__WEBPACK_IMPORTED_MODULE_8__["FavoriteHotelActionTypes"].AddFavoriteHotels), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (_a) {
            var hotel = _a.payload;
            return _this.favService.addFavorite(hotel).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function () { return _this.addFavoriteNotification.bind(_this)(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (favHotel) { return new _actions_favorite_hotel_actions__WEBPACK_IMPORTED_MODULE_8__["AddFavoriteHotelsSuccess"](favHotel); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _actions_favorite_hotel_actions__WEBPACK_IMPORTED_MODULE_8__["AddFavoriteHotelsFailure"](err)); }));
        }));
        this.voteFavorite$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_favorite_hotel_actions__WEBPACK_IMPORTED_MODULE_8__["FavoriteHotelActionTypes"].VoteFavoriteHotels), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (_a) {
            var hotelId = _a.payload;
            return _this.store.select('favoriteHotel', 'data').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (favHotels) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(favHotels); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["find"])(function (favHotel) { return favHotel.id === hotelId; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (hotel) {
                return _this.favService.voteFavorite(hotel).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function () { return _this.voteFavoriteNotification.bind(_this)(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (favHotel) {
                    return new _actions_favorite_hotel_actions__WEBPACK_IMPORTED_MODULE_8__["VoteFavoriteHotelsSuccess"](favHotel);
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _actions_favorite_hotel_actions__WEBPACK_IMPORTED_MODULE_8__["VoteFavoriteHotelsFailure"](err)); }));
            }));
        }));
        this.removeFromFavorites$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_favorite_hotel_actions__WEBPACK_IMPORTED_MODULE_8__["FavoriteHotelActionTypes"].RemoveFavoriteHotels), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (_a) {
            var hotelId = _a.payload;
            return _this.favService.removeFromFavorites(hotelId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function () { return _this.removeFavoriteNotification.bind(_this)(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function () { return new _actions_favorite_hotel_actions__WEBPACK_IMPORTED_MODULE_8__["RemoveFavoriteHotelsSuccess"](hotelId); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _actions_favorite_hotel_actions__WEBPACK_IMPORTED_MODULE_8__["RemoveFavoriteHotelsFailure"](err)); }));
        }));
    }
    FavoriteHotelEffects.prototype.addFavoriteNotification = function () {
        this.ns.success('Favorite added!', '', {
            timeOut: 1000,
            clickToClose: true,
            animate: 'fade',
            showProgressBar: false
        });
    };
    FavoriteHotelEffects.prototype.removeFavoriteNotification = function () {
        this.ns.warn('Favorite removed!', '', {
            timeOut: 1000,
            clickToClose: true,
            animate: 'fade',
            showProgressBar: false
        });
    };
    FavoriteHotelEffects.prototype.voteFavoriteNotification = function () {
        this.ns.info('Your vote has been counted!', '', {
            timeOut: 1000,
            clickToClose: true,
            animate: 'fade',
            showProgressBar: false
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"])
    ], FavoriteHotelEffects.prototype, "loadFavorites$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"])
    ], FavoriteHotelEffects.prototype, "addToFavorites$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"])
    ], FavoriteHotelEffects.prototype, "voteFavorite$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"])
    ], FavoriteHotelEffects.prototype, "removeFromFavorites$", void 0);
    FavoriteHotelEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"],
            _services_favorite_service_service__WEBPACK_IMPORTED_MODULE_7__["FavoriteService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            angular2_notifications__WEBPACK_IMPORTED_MODULE_1__["NotificationsService"]])
    ], FavoriteHotelEffects);
    return FavoriteHotelEffects;
}());



/***/ }),

/***/ "./src/app/store/effects/hotel.effects.ts":
/*!************************************************!*\
  !*** ./src/app/store/effects/hotel.effects.ts ***!
  \************************************************/
/*! exports provided: HotelEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelEffects", function() { return HotelEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions_favorite_hotel_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../actions/favorite-hotel.actions */ "./src/app/store/actions/favorite-hotel.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_hotels_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/hotels.service */ "./src/app/hotels.service.ts");
/* harmony import */ var _actions_hotel_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../actions/hotel.actions */ "./src/app/store/actions/hotel.actions.ts");









var HotelEffects = /** @class */ (function () {
    function HotelEffects(actions$, hotelsService, store) {
        var _this = this;
        this.actions$ = actions$;
        this.hotelsService = hotelsService;
        this.store = store;
        this.loadHotels$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_hotel_actions__WEBPACK_IMPORTED_MODULE_8__["HotelActionTypes"].LoadHotels), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (_a) {
            var payload = _a.payload;
            return _this.hotelsService.getHotelsObservable(payload.page, payload.limit).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (hotels) { return new _actions_hotel_actions__WEBPACK_IMPORTED_MODULE_8__["LoadHotelsSuccess"](hotels); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _actions_hotel_actions__WEBPACK_IMPORTED_MODULE_8__["LoadHotelsError"](err)); }));
        }));
        this.loadHotel$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_hotel_actions__WEBPACK_IMPORTED_MODULE_8__["HotelActionTypes"].LoadHotel), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (_a) {
            var payload = _a.payload;
            return _this.hotelsService.getHotelById(payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (hotel) { return new _actions_hotel_actions__WEBPACK_IMPORTED_MODULE_8__["LoadHotelSuccess"](hotel); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _actions_hotel_actions__WEBPACK_IMPORTED_MODULE_8__["LoadHotelError"](err)); }));
        }));
        this.loadAllHotels$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_hotel_actions__WEBPACK_IMPORTED_MODULE_8__["HotelActionTypes"].LoadAllHotels), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function () {
            return _this.hotelsService.getAllHotels().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (hotels) { return new _actions_hotel_actions__WEBPACK_IMPORTED_MODULE_8__["LoadAllHotelsSuccess"](hotels); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _actions_hotel_actions__WEBPACK_IMPORTED_MODULE_8__["LoadAllHotelsError"](err)); }));
        }));
        this.removeHotels$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_hotel_actions__WEBPACK_IMPORTED_MODULE_8__["HotelActionTypes"].RemoveHotels), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (_a) {
            var hotelId = _a.payload;
            return _this.hotelsService.removeHotel(hotelId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function () { return _this.store.dispatch(new _actions_favorite_hotel_actions__WEBPACK_IMPORTED_MODULE_1__["RemoveFavoriteHotels"](hotelId)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function () { return new _actions_hotel_actions__WEBPACK_IMPORTED_MODULE_8__["RemoveHotelsSuccess"](hotelId); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _actions_hotel_actions__WEBPACK_IMPORTED_MODULE_8__["RemoveHotelsError"](err)); }));
        }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"])
    ], HotelEffects.prototype, "loadHotels$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"])
    ], HotelEffects.prototype, "loadHotel$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"])
    ], HotelEffects.prototype, "loadAllHotels$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"])
    ], HotelEffects.prototype, "removeHotels$", void 0);
    HotelEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"],
            src_app_hotels_service__WEBPACK_IMPORTED_MODULE_7__["HotelsService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], HotelEffects);
    return HotelEffects;
}());



/***/ }),

/***/ "./src/app/store/effects/router.effects.ts":
/*!*************************************************!*\
  !*** ./src/app/store/effects/router.effects.ts ***!
  \*************************************************/
/*! exports provided: RouterEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterEffects", function() { return RouterEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _actions_router_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/router.actions */ "./src/app/store/actions/router.actions.ts");







var RouterEffects = /** @class */ (function () {
    function RouterEffects(actions$, router, location) {
        var _this = this;
        this.actions$ = actions$;
        this.router = router;
        this.location = location;
        this.navigate$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_router_actions__WEBPACK_IMPORTED_MODULE_6__["GO"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (_a) {
            var path = _a.path, queryParams = _a.query, extras = _a.extras;
            return _this.router.navigate(path, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ queryParams: queryParams }, extras));
        }));
        this.navigateBack$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_router_actions__WEBPACK_IMPORTED_MODULE_6__["BACK"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () { return _this.location.back(); }));
        this.navigateForward$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_router_actions__WEBPACK_IMPORTED_MODULE_6__["FORWARD"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () { return _this.location.forward(); }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])({ dispatch: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RouterEffects.prototype, "navigate$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])({ dispatch: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RouterEffects.prototype, "navigateBack$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])({ dispatch: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RouterEffects.prototype, "navigateForward$", void 0);
    RouterEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], RouterEffects);
    return RouterEffects;
}());



/***/ }),

/***/ "./src/app/store/reducers/custom-route-serializer.ts":
/*!***********************************************************!*\
  !*** ./src/app/store/reducers/custom-route-serializer.ts ***!
  \***********************************************************/
/*! exports provided: CustomSerializer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomSerializer", function() { return CustomSerializer; });
var CustomSerializer = /** @class */ (function () {
    function CustomSerializer() {
    }
    CustomSerializer.prototype.serialize = function (routerState) {
        var route = routerState.root;
        while (route.firstChild) {
            route = route.firstChild;
        }
        var url = routerState.url, queryParams = routerState.root.queryParams;
        var params = route.params;
        // Only return an object including the URL, params and query params
        // instead of the entire snapshot
        return { url: url, params: params, queryParams: queryParams };
    };
    return CustomSerializer;
}());



/***/ }),

/***/ "./src/app/store/reducers/favorite-hotel.reducer.ts":
/*!**********************************************************!*\
  !*** ./src/app/store/reducers/favorite-hotel.reducer.ts ***!
  \**********************************************************/
/*! exports provided: initialState, reducer, favHotelSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "favHotelSelector", function() { return favHotelSelector; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions_favorite_hotel_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../actions/favorite-hotel.actions */ "./src/app/store/actions/favorite-hotel.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");



var initialState = {
    data: [],
    isLoading: false,
    error: ''
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_favorite_hotel_actions__WEBPACK_IMPORTED_MODULE_1__["FavoriteHotelActionTypes"].LoadFavoriteHotels:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { isLoading: true });
        case _actions_favorite_hotel_actions__WEBPACK_IMPORTED_MODULE_1__["FavoriteHotelActionTypes"].LoadFavoriteHotelsSuccess:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { data: action.payload, isLoading: false });
        case _actions_favorite_hotel_actions__WEBPACK_IMPORTED_MODULE_1__["FavoriteHotelActionTypes"].LoadFavoriteHotelsFailure:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { error: action.payload, isLoading: false });
        case _actions_favorite_hotel_actions__WEBPACK_IMPORTED_MODULE_1__["FavoriteHotelActionTypes"].AddFavoriteHotels:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { isLoading: true });
        case _actions_favorite_hotel_actions__WEBPACK_IMPORTED_MODULE_1__["FavoriteHotelActionTypes"].AddFavoriteHotelsSuccess:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { data: state.data.concat([action.payload]), isLoading: false });
        case _actions_favorite_hotel_actions__WEBPACK_IMPORTED_MODULE_1__["FavoriteHotelActionTypes"].AddFavoriteHotelsFailure:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { error: action.payload, isLoading: false });
        case _actions_favorite_hotel_actions__WEBPACK_IMPORTED_MODULE_1__["FavoriteHotelActionTypes"].VoteFavoriteHotels:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { isLoading: true });
        case _actions_favorite_hotel_actions__WEBPACK_IMPORTED_MODULE_1__["FavoriteHotelActionTypes"].VoteFavoriteHotelsSuccess:
            var updatedFavHotels = state.data.map(function (hotel) {
                if (hotel.id === action.payload.id) {
                    hotel.voted++;
                }
                return hotel;
            });
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { data: updatedFavHotels, isLoading: false });
        case _actions_favorite_hotel_actions__WEBPACK_IMPORTED_MODULE_1__["FavoriteHotelActionTypes"].VoteFavoriteHotelsFailure:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { error: action.payload, isLoading: false });
        case _actions_favorite_hotel_actions__WEBPACK_IMPORTED_MODULE_1__["FavoriteHotelActionTypes"].RemoveFavoriteHotels:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { isLoading: true });
        case _actions_favorite_hotel_actions__WEBPACK_IMPORTED_MODULE_1__["FavoriteHotelActionTypes"].RemoveFavoriteHotelsSuccess:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { data: state.data.filter(function (hotel) { return hotel.id !== action.payload; }), isLoading: false });
        case _actions_favorite_hotel_actions__WEBPACK_IMPORTED_MODULE_1__["FavoriteHotelActionTypes"].RemoveFavoriteHotelsFailure:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { error: action.payload, isLoading: false });
        default:
            return state;
    }
}
var favHotelSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(function (state) { return state.favoriteHotel.data; }, function (favHotels, hotelId) {
    return Boolean(favHotels.find(function (hotel) { return hotel.id === hotelId; }));
});


/***/ }),

/***/ "./src/app/store/reducers/hotel.reducer.ts":
/*!*************************************************!*\
  !*** ./src/app/store/reducers/hotel.reducer.ts ***!
  \*************************************************/
/*! exports provided: initialState, reducer, starSelector, textSelector, filteredHotelsSelector, activeHotelsSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "starSelector", function() { return starSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textSelector", function() { return textSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filteredHotelsSelector", function() { return filteredHotelsSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activeHotelsSelector", function() { return activeHotelsSelector; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions_hotel_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../actions/hotel.actions */ "./src/app/store/actions/hotel.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");



var initialStarValue = ['3', '4', '5'];
var initialState = {
    isLoading: false,
    data: [],
    hotelsCount: 0,
    error: '',
    filter: {
        text: '',
        star: initialStarValue
    },
    selectedHotel: null,
    activeHotelId: -1
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_hotel_actions__WEBPACK_IMPORTED_MODULE_1__["HotelActionTypes"].LoadHotels:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { isLoading: true });
        case _actions_hotel_actions__WEBPACK_IMPORTED_MODULE_1__["HotelActionTypes"].LoadHotelsSuccess:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { isLoading: false, data: action.payload });
        case _actions_hotel_actions__WEBPACK_IMPORTED_MODULE_1__["HotelActionTypes"].LoadHotelsError:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { isLoading: false, error: action.payload });
        case _actions_hotel_actions__WEBPACK_IMPORTED_MODULE_1__["HotelActionTypes"].LoadHotel:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { isLoading: true });
        case _actions_hotel_actions__WEBPACK_IMPORTED_MODULE_1__["HotelActionTypes"].LoadHotelSuccess:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { isLoading: false, selectedHotel: action.payload });
        case _actions_hotel_actions__WEBPACK_IMPORTED_MODULE_1__["HotelActionTypes"].LoadHotelError:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { isLoading: false, error: action.payload });
        case _actions_hotel_actions__WEBPACK_IMPORTED_MODULE_1__["HotelActionTypes"].LoadAllHotels:
            return state;
        case _actions_hotel_actions__WEBPACK_IMPORTED_MODULE_1__["HotelActionTypes"].LoadAllHotelsSuccess:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { hotelsCount: action.payload.length });
        case _actions_hotel_actions__WEBPACK_IMPORTED_MODULE_1__["HotelActionTypes"].LoadAllHotelsError:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { isLoading: false, error: action.payload });
        case _actions_hotel_actions__WEBPACK_IMPORTED_MODULE_1__["HotelActionTypes"].RemoveHotels:
            return state;
        case _actions_hotel_actions__WEBPACK_IMPORTED_MODULE_1__["HotelActionTypes"].RemoveHotelsSuccess:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { isLoading: false, data: state.data.filter(function (hotel) { return hotel.id !== action.payload; }) });
        case _actions_hotel_actions__WEBPACK_IMPORTED_MODULE_1__["HotelActionTypes"].RemoveHotelsError:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { isLoading: false, error: action.payload });
        case _actions_hotel_actions__WEBPACK_IMPORTED_MODULE_1__["HotelActionTypes"].SetActiveHotel:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { activeHotelId: action.payload });
        case _actions_hotel_actions__WEBPACK_IMPORTED_MODULE_1__["HotelActionTypes"].SetTextFilter:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { isLoading: false, filter: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state.filter, { text: action.payload }) });
        case _actions_hotel_actions__WEBPACK_IMPORTED_MODULE_1__["HotelActionTypes"].SetStarFilter:
            var stars = state.filter.star.slice();
            if (action.payload === 'All') {
                stars = stars.length < 3 ? initialStarValue : [];
            }
            else {
                if (stars.includes(action.payload)) {
                    stars = stars.filter(function (starVal) { return starVal !== action.payload; });
                }
                else {
                    stars = stars.concat([action.payload]);
                }
            }
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { isLoading: false, filter: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state.filter, { star: stars }) });
        default:
            return state;
    }
}
var starSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(function (state) { return state.hotel.filter.star; }, function (star, starValue) {
    return star.includes(starValue);
});
var textSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(function (state) { return state.hotel.filter.text; }, function (text, hotelText) {
    var dataArray = [];
    var isTextNeedHighlight = hotelText.toUpperCase().indexOf(text.toUpperCase()) > -1;
    if (!text || !isTextNeedHighlight) {
        dataArray = [{ text: hotelText, isHighlight: false }];
    }
    else {
        dataArray = [];
        var index = 0;
        while (index !== -1) {
            var foundIndex = hotelText
                .toUpperCase()
                .indexOf(text.toUpperCase(), index);
            if (foundIndex > -1) {
                dataArray.push({
                    text: hotelText.slice(index, foundIndex),
                    isHighlight: false
                });
                dataArray.push({
                    text: hotelText.slice(foundIndex, foundIndex + text.length),
                    isHighlight: true
                });
                index = foundIndex + 1;
            }
            else {
                dataArray.push({
                    text: hotelText.slice(index + text.length - 1),
                    isHighlight: false
                });
                index = -1;
            }
        }
    }
    return dataArray;
});
var filteredHotelsSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(function (state) { return state.hotel.data; }, function (state) { return state.hotel.filter; }, function (hotels, filter) {
    return hotels.filter(function (hotel) {
        var isStarEquals = filter.star.includes(hotel.stars.toString());
        var isTextEqual = hotel.description.toUpperCase().includes(filter.text.toUpperCase()) ||
            hotel.title.toUpperCase().includes(filter.text.toUpperCase());
        return isStarEquals && isTextEqual;
    });
});
var activeHotelsSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(function (state) { return state.hotel.data; }, function (state) { return state.hotel.activeHotelId; }, function (hotels, activehotelId) {
    return hotels.find(function (hotel) {
        return hotel.id === activehotelId;
    });
});


/***/ }),

/***/ "./src/app/store/reducers/index.ts":
/*!*****************************************!*\
  !*** ./src/app/store/reducers/index.ts ***!
  \*****************************************/
/*! exports provided: reducers, metaReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _hotel_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hotel.reducer */ "./src/app/store/reducers/hotel.reducer.ts");
/* harmony import */ var _favorite_hotel_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./favorite-hotel.reducer */ "./src/app/store/reducers/favorite-hotel.reducer.ts");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/fesm5/router-store.js");




var reducers = {
    hotel: _hotel_reducer__WEBPACK_IMPORTED_MODULE_1__["reducer"],
    router: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_3__["routerReducer"],
    favoriteHotel: _favorite_hotel_reducer__WEBPACK_IMPORTED_MODULE_2__["reducer"],
};
var metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].production ? [] : [];


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    configUrl: 'https://agile-retreat-51594.herokuapp.com/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\GlobalLogic\ngWeather\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map