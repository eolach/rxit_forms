(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_directives/alert.component.html":
/*!**************************************************!*\
  !*** ./src/app/_directives/alert.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" [ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">{{message.text}}</div>"

/***/ }),

/***/ "./src/app/_directives/alert.component.ts":
/*!************************************************!*\
  !*** ./src/app/_directives/alert.component.ts ***!
  \************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = /** @class */ (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.alertService.getMessage().subscribe(function (message) {
            _this.message = message;
        });
    };
    AlertComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AlertComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'alert',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/_directives/alert.component.html")
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["AlertService"]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/_directives/index.ts":
/*!**************************************!*\
  !*** ./src/app/_directives/index.ts ***!
  \**************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.component */ "./src/app/_directives/alert.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return _alert_component__WEBPACK_IMPORTED_MODULE_0__["AlertComponent"]; });




/***/ }),

/***/ "./src/app/_services/alert.service.ts":
/*!********************************************!*\
  !*** ./src/app/_services/alert.service.ts ***!
  \********************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/_services/authentication.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/_services/authentication.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../env */ "./src/app/env.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.login = function (username, password) {
        return this.http.post(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/login", { username: username, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) {
            localStorage.setItem('participant', JSON.stringify(user));
            // localStorage.setItem('participant_type', JSON.stringify(user.participant_type));
            return user;
        }));
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        // localStorage.removeItem('participantType');
        // localStorage.removeItem('participantId');
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/_services/index.ts":
/*!************************************!*\
  !*** ./src/app/_services/index.ts ***!
  \************************************/
/*! exports provided: AlertService, AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.service */ "./src/app/_services/alert.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return _alert_service__WEBPACK_IMPORTED_MODULE_0__["AlertService"]; });

/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return _authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]; });





/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-sidenav-container, mat-sidenav-content, mat-sidenav {\n  height: 100%;\n}\n\nmat-sidenav {\n  width: 250px;\n}\n\na {\n  text-decoration: none;\n  color: white;\n}\n\na:hover,\na:active {\n  color: lightgray;\n}\n\n.navigation-items {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  cursor: pointer;\n}\n\n.icon {\n  display: inline-block;\n  height: 30px;\n  margin: 0 auto;\n  padding-right: 10px;\n  text-align: center;\n  vertical-align: middle;\n  width: 15%;\n}\n\n.label {\n  display: inline-block;\n  line-height: 30px;\n  margin: 0;\n  width: 85%;\n}\n\n/* add custom */\n\n.container-content {\n  max-width: 960px;\n  margin: 0 auto;\n  font-size: 1.6rem;\n  line-height: 2rem;\n}\n\n.content-area {\n    padding: 1rem;\n    background-color: rgba(red, 0.3);\n}\n\nh1.desc {\n  max-width: 960px;\n  margin: 2rem auto 0.5rem;\n  padding: 0 1rem;\n  font-size: 2rem;\n  font-weight: 200;\n  color: tint(black, 70%);\n}\n\n.cont {\n  font-size: 1.0rem;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\n\t<mat-sidenav #sidenav role=\"navigation\">\n\t\t<mat-nav-list>\n\t\t\t<a *ngIf=\"!authorized\" mat-list-item routerLink=\"/login\">\n\t\t\t\t<mat-icon class=\"icon\">input</mat-icon>\n\t\t\t\t<span class=\"label\">Login</span>\n\t\t\t</a>\n\t\t\t<a *ngIf=\"authorized\" mat-list-item type=\"button\">\n\t\t\t\t<mat-icon class=\"icon\">input</mat-icon>\n\t\t\t\t<span class=\"label\">LogOut</span>\n\t\t\t</a>\n\t\t\t<a mat-list-item routerLink=\"/\">\n\t\t\t\t<mat-icon class=\"icon\">home</mat-icon>\n\t\t\t\t<span class=\"label\"> Home</span>\n\t\t\t</a>\n\t\t\t<a *ngIf=\"authorized\" mat-list-item routerLink=\"/dashboard\">\n\t\t\t\t<mat-icon class=\"icon\">dashboard</mat-icon>\n\t\t\t\t<span class=\"label\">Dashboard</span>\n\t\t\t</a>\n\t\t</mat-nav-list>\n\t</mat-sidenav>\n\t<mat-sidenav-content>\n\t\t<mat-toolbar color=\"primary\">\n\t\t\t<div fxHide.gt-xs>\n\t\t\t\t<button mat-icon-button (click)=\"sidenav.toggle()\">\n\t\t\t\t\t<mat-icon>menu</mat-icon>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<a>PrescribeIT study</a>\n\t\t\t</div>\n\t\t\t<div fxFlex fxLayout fxLayoutAlign=\"flex-end\" fxHide.xs>\n\t\t\t\t<ul fxLayout fxLayoutGap=\"20px\" class=\"navigation-items\">\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a *ngIf=\"!authorized\" >\n\t\t\t\t\t\t\t<mat-icon class=\"icon\">input</mat-icon>\n\t\t\t\t\t\t\t<span class=\"label\">Login</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a routerLink=\"/\">\n\t\t\t\t\t\t\t<mat-icon class=\"icon\">home</mat-icon>\n\t\t\t\t\t\t\t<span class=\"label\">Home</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a *ngIf=\"authorized\" routerLink=\"/prescribers\">\n\t\t\t\t\t\t\t<mat-icon class=\"icon\">dashboard</mat-icon>\n\t\t\t\t\t\t\t<span class=\"label\">Prescribers</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a *ngIf=\"authorized\" routerLink=\"/dispensers\">\n\t\t\t\t\t\t\t<mat-icon class=\"icon\">dashboard</mat-icon>\n\t\t\t\t\t\t\t<span class=\"label\">Dispensers</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a *ngIf=\"authorized\" >\n\t\t\t\t\t\t\t<mat-icon class=\"icon\">input</mat-icon>\n\t\t\t\t\t\t\t<span class=\"label\">LogOut</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</mat-toolbar>\n\t</mat-sidenav-content>\n</mat-sidenav-container>\n<main>\n\t<alert>Alert</alert>\n\t<app-welcome></app-welcome>\n</main>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.authorized = false;
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./_directives */ "./src/app/_directives/index.ts");
/* harmony import */ var _participants_prescribers_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./participants/prescribers.component */ "./src/app/participants/prescribers.component.ts");
/* harmony import */ var _participants_participant_api_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./participants/participant-api.service */ "./src/app/participants/participant-api.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./_services/authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./_services/alert.service */ "./src/app/_services/alert.service.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _participants_prescriber_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./participants/prescriber.component */ "./src/app/participants/prescriber.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _participants_dispenser_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./participants/dispenser.component */ "./src/app/participants/dispenser.component.ts");
/* harmony import */ var _participants_dispensers_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./participants/dispensers.component */ "./src/app/participants/dispensers.component.ts");
/* harmony import */ var _callback_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./callback.component */ "./src/app/callback.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _participants_physician_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./participants/physician.component */ "./src/app/participants/physician.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"],
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_20__["WelcomeComponent"],
                _directives__WEBPACK_IMPORTED_MODULE_21__["AlertComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_26__["DashboardComponent"],
                _participants_prescriber_component__WEBPACK_IMPORTED_MODULE_27__["PrescriberComponent"],
                _participants_prescribers_component__WEBPACK_IMPORTED_MODULE_22__["PrescribersComponent"],
                _participants_physician_component__WEBPACK_IMPORTED_MODULE_33__["PhysicianComponent"],
                _messages_messages_component__WEBPACK_IMPORTED_MODULE_28__["MessagesComponent"],
                _participants_dispenser_component__WEBPACK_IMPORTED_MODULE_29__["DispenserComponent"],
                _participants_dispensers_component__WEBPACK_IMPORTED_MODULE_30__["DispensersComponent"],
                _callback_component__WEBPACK_IMPORTED_MODULE_31__["CallbackComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_32__["LoginComponent"]
            ],
            exports: [
                _app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"],
                _participants_prescribers_component__WEBPACK_IMPORTED_MODULE_22__["PrescribersComponent"],
                _participants_prescriber_component__WEBPACK_IMPORTED_MODULE_27__["PrescriberComponent"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatTableModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__["MatExpansionModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatTableModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__["MatExpansionModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                _app_routes__WEBPACK_IMPORTED_MODULE_18__["AppRouters"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            ],
            providers: [_participants_participant_api_service__WEBPACK_IMPORTED_MODULE_23__["ParticipantApiService"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_24__["AuthenticationService"], _services_alert_service__WEBPACK_IMPORTED_MODULE_25__["AlertService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: AppRouters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRouters", function() { return AppRouters; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _participants_prescribers_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./participants/prescribers.component */ "./src/app/participants/prescribers.component.ts");
/* harmony import */ var _participants_prescriber_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./participants/prescriber.component */ "./src/app/participants/prescriber.component.ts");
/* harmony import */ var _participants_dispensers_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./participants/dispensers.component */ "./src/app/participants/dispensers.component.ts");
/* harmony import */ var _participants_dispenser_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./participants/dispenser.component */ "./src/app/participants/dispenser.component.ts");
/* harmony import */ var _participants_physician_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./participants/physician.component */ "./src/app/participants/physician.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: '', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__["WelcomeComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"] },
    { path: 'prescribers', component: _participants_prescribers_component__WEBPACK_IMPORTED_MODULE_5__["PrescribersComponent"] },
    { path: 'dispensers', component: _participants_dispensers_component__WEBPACK_IMPORTED_MODULE_7__["DispensersComponent"] },
    { path: 'prescribers/:id', component: _participants_prescriber_component__WEBPACK_IMPORTED_MODULE_6__["PrescriberComponent"] },
    { path: 'dispensers/:id', component: _participants_dispenser_component__WEBPACK_IMPORTED_MODULE_8__["DispenserComponent"] },
    { path: 'physician/:id', component: _participants_physician_component__WEBPACK_IMPORTED_MODULE_9__["PhysicianComponent"] }
];
var AppRouters = /** @class */ (function () {
    function AppRouters() {
    }
    AppRouters = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRouters);
    return AppRouters;
}());



/***/ }),

/***/ "./src/app/callback.component.ts":
/*!***************************************!*\
  !*** ./src/app/callback.component.ts ***!
  \***************************************/
/*! exports provided: CallbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallbackComponent", function() { return CallbackComponent; });
/* harmony import */ var auth0_web__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! auth0-web */ "../../../node_modules/auth0-web/dist/index.js");
/* harmony import */ var auth0_web__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(auth0_web__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CallbackComponent = /** @class */ (function () {
    function CallbackComponent(router) {
        this.router = router;
    }
    CallbackComponent.prototype.ngOnInit = function () {
        var self = this;
        auth0_web__WEBPACK_IMPORTED_MODULE_0__["handleAuthCallback"](function (err) {
            if (err)
                alert(err);
            self.router.navigate(['/']);
        });
    };
    CallbackComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'callback',
            template: "\n    <div>Loading authentication details...</div>\n  ",
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CallbackComponent);
    return CallbackComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <br>\n  <div class=\"container\">\n    <div fxLayout=\"column\" fxLayoutGap=\"20px\" fxLayout.gt-md=\"row\" fxLayoutAlgin=\"space-around center\" class=\"coneent\">\n      <div class=\"blocks\" >\n        <button button=\"submit\" mat-raised-button color=\"primary\">\n          <mat-icon>add</mat-icon> Add Dispenser\n        </button>\n      </div>\n    </div>\n  </div>\n  <br>\n  <div class=\"container\">\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"content\">\n      <mat-card class=\"card\">\n        <mat-card-title fxLayout.gt-xs=\"row\" fxLayout.xs=\"column\">\n          <h3>Participating Dispensers</h3>\n        </mat-card-title>\n        <mat-card-content>\n          <div class=\"example-container mat-elevation-z8\">\n            <mat-table #table [dataSource]=\"dataSource\">\n              <ng-container matColumnDef=\"name\">\n                <mat-header-cell *matHeaderCellDef>Name</mat-header-cell>\n                <mat-cell *matCellDef=\"let element\"> {{ element.name }} </mat-cell>\n              </ng-container>                    \n              <ng-container matColumnDef=\"name\">\n                <mat-header-cell *matHeaderCellDef>Street</mat-header-cell>\n                <mat-cell *matCellDef=\"let element\"> {{ element.name }} </mat-cell>\n              </ng-container>                    \n              <ng-container matColumnDef=\"city\">\n                <mat-header-cell *matHeaderCellDef>City</mat-header-cell>\n                <mat-cell *matCellDef=\"let element\"> {{ element.name }} </mat-cell>\n              </ng-container>                    \n              <ng-container matColumnDef=\"name\">\n                <mat-header-cell *matHeaderCellDef>Province</mat-header-cell>\n                <mat-cell *matCellDef=\"let element\"> {{ element.name }} </mat-cell>\n              </ng-container>                    \n              <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n              <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n            </mat-table>\n          </div>\n        </mat-card-content>\n      </mat-card>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent, DispenserDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DispenserDataSource", function() { return DispenserDataSource; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _data_dispenser_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/dispenser.service */ "./src/app/data/dispenser.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(dispenserService) {
        this.dispenserService = dispenserService;
        this.displayedColumns = ['name', 'city'];
        this.dataSource = new DispenserDataSource(this.dispenserService);
    }
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        })
        // The component that displays a dashboard
        ,
        __metadata("design:paramtypes", [_data_dispenser_service__WEBPACK_IMPORTED_MODULE_2__["DispenserService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());

// Construct a datasource for use in material design of the dashboard
// It is built using the appropriate service, in this case DispenserService
var DispenserDataSource = /** @class */ (function (_super) {
    __extends(DispenserDataSource, _super);
    function DispenserDataSource(dispenserService) {
        var _this = _super.call(this) || this;
        _this.dispenserService = dispenserService;
        return _this;
    }
    DispenserDataSource.prototype.connect = function () {
        return this.dispenserService.getDispensers();
    };
    DispenserDataSource.prototype.disconnect = function () {
    };
    return DispenserDataSource;
}(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["DataSource"]));



/***/ }),

/***/ "./src/app/data/data-model.ts":
/*!************************************!*\
  !*** ./src/app/data/data-model.ts ***!
  \************************************/
/*! exports provided: Dispenser, Address, Manager, dispensers, volumes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dispenser", function() { return Dispenser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Address", function() { return Address; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Manager", function() { return Manager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dispensers", function() { return dispensers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "volumes", function() { return volumes; });
var Dispenser = /** @class */ (function () {
    function Dispenser() {
        this.id = 0;
        this.name = '';
        this.affiliation = '';
        this.volume = '';
    }
    return Dispenser;
}());

var Address = /** @class */ (function () {
    function Address() {
        this.street = '';
        this.city = '';
        this.province = '';
        this.postalCode = '';
    }
    return Address;
}());

var Manager = /** @class */ (function () {
    function Manager() {
        this.name = '';
        this.title = '';
        this.email = '';
        this.phone = '';
    }
    return Manager;
}());

var dispensers = [
    {
        id: 1,
        name: 'Campus Pharmacy',
        affiliation: 'Independent',
        addresses: [
            { street: '460 St. Davids Rd #9',
                city: 'St. Catherines',
                province: 'ON',
                postalCode: ''
            },
        ],
        manager: {
            name: 'Rafik Sharobim',
            title: 'Manager',
            phone: '905-688-8800',
            email: 'brockpharmacy@gmail.com​'
        },
        volume: 'Low'
    },
    {
        id: 2,
        name: 'West Lincoln Pharmacy',
        affiliation: 'Pharmasave',
        addresses: [
            { street: '25 - 239 St. Catherines St.',
                city: 'Smithville',
                province: 'ON',
                postalCode: ''
            },
        ],
        manager: {
            name: 'Bruce McAlpine',
            title: 'Manager',
            phone: '905-957-5701',
            email: 'westlincolnpharmacy@gmail.com'
        },
        volume: 'Med'
    },
    {
        id: 3,
        name: 'Mapleland IDA Pharmacy',
        affiliation: 'McKesson - Guardian/IDA',
        addresses: [
            { street: '120 Welland Ave. Unit 10B',
                city: 'St. Catherines',
                province: 'ON',
                postalCode: ''
            },
        ],
        manager: {
            name: 'Vaughan Osgan',
            title: 'Pharmacy Manager',
            phone: '905-641-4440',
            email: 'maplelandpharmacy@yahoo.com'
        },
        volume: 'High'
    },
];
var volumes = ['Low', 'Med', 'High'];


/***/ }),

/***/ "./src/app/data/dispenser.service.ts":
/*!*******************************************!*\
  !*** ./src/app/data/dispenser.service.ts ***!
  \*******************************************/
/*! exports provided: DispenserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DispenserService", function() { return DispenserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/observable/of */ "./node_modules/rxjs-compat/_esm5/add/observable/of.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./env */ "./src/app/data/env.ts");
/* harmony import */ var _data_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data-model */ "./src/app/data/data-model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DispenserService = /** @class */ (function () {
    function DispenserService(http) {
        this.http = http;
    }
    //	private handleError(error: HttpErrorResponse | any) {
    //		if (error.error instanceof ErrorEvent) {
    //		    // A client-side or network error occurred. Handle it accordingly.
    //		    console.error('An error occurred:', error.error.message);
    //		} else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    //console.error(
    //  `Backend returned code ${error.status}, ` +
    //  `body was: ${error.error}`);
    //		}
    // return an observable with a user-facing error message
    //		return throw( 'Something bad happened; please try again later.');
    //	};
    DispenserService.prototype.getDispensers = function () {
        return this.http
            .get(_env__WEBPACK_IMPORTED_MODULE_5__["API_URL"] + "/dispensers");
        //.pipe(catchError(this.handleError)
    };
    // Fake server update; assume nothing can go wrong
    DispenserService.prototype.updateDispenser = function (dispenser) {
        var oldDispenser = _data_model__WEBPACK_IMPORTED_MODULE_6__["dispensers"].find(function (d) { return d.id == dispenser.id; });
        var newDispenser = Object.assign(oldDispenser, dispenser);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(newDispenser);
    };
    DispenserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DispenserService);
    return DispenserService;
}());



/***/ }),

/***/ "./src/app/data/env.ts":
/*!*****************************!*\
  !*** ./src/app/data/env.ts ***!
  \*****************************/
/*! exports provided: API_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
var API_URL = 'http://localhost:5000';


/***/ }),

/***/ "./src/app/env.ts":
/*!************************!*\
  !*** ./src/app/env.ts ***!
  \************************/
/*! exports provided: API_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
var API_URL = 'http://localhost:5000';


/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"card\">\n    <mat-card-title fxLayout.gt-xs=\"row\" fxLayout.xs=\"column\">\n        <h3>Login</h3>\n    </mat-card-title>\n    <mat-card-content>\n        <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\" style=\"width: 300px\">\n            <div class=\"form-group\">\n                <label for=\"username\">Username</label>\n                <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n                <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.username.errors.required\">Username is required</div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"password\">Password</label>\n                <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n                <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                </div>\n            </div>\n            <!-- <mat-form-field> -->\n            <div class=\"form-group\">\n                <button mat-button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\n                <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n                <!-- <a [routerLink]=\"['/register']\" class=\"btn btn-link\">Register</a> -->\n            </div>\n            <!-- </mat-form-field> -->\n        </form>\n    </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _participants_participant_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../participants/participant-api.service */ "./src/app/participants/participant-api.service.ts");
/* harmony import */ var _participants_participant_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../participants/participant.model */ "./src/app/participants/participant.model.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, route, router, authenticationService, alertService, welcomeComponent) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.welcomeComponent = welcomeComponent;
        this.loading = false;
        this.submitted = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        // reset login status
        this.authenticationService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .subscribe(function (user) {
            _this.user = user;
            console.log('Hello ', user.username);
            _this.resolveUser(_this.user);
        }, 
        // just a note
        function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    LoginComponent.prototype.resolveUser = function (reporter) {
        console.log('resolving user ', reporter.username);
        if (reporter.prescriber) {
            this.alertService.success('participant' + reporter.prescriber.name, true);
            console.log('Participant in ', reporter.prescriber.city);
            this.welcomeComponent.setPrescriber(reporter.prescriber);
            this.loading = false;
        }
        else if (reporter.dispenser) {
            this.alertService.success('participant is ' + reporter.dispenser.name, true);
            console.log('Participant in ', reporter.dispenser.city);
            this.loading = false;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _participants_participant_model__WEBPACK_IMPORTED_MODULE_5__["Dispenser"])
    ], LoginComponent.prototype, "dispenser", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _participants_participant_model__WEBPACK_IMPORTED_MODULE_5__["Prescriber"])
    ], LoginComponent.prototype, "prescriber", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _participants_participant_model__WEBPACK_IMPORTED_MODULE_5__["User"])
    ], LoginComponent.prototype, "user", void 0);
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ../participants/participant.component.css */ "./src/app/participants/participant.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _participants_participant_api_service__WEBPACK_IMPORTED_MODULE_4__["ParticipantApiService"],
            _services__WEBPACK_IMPORTED_MODULE_3__["AlertService"],
            _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_6__["WelcomeComponent"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/message.service.ts":
/*!************************************!*\
  !*** ./src/app/message.service.ts ***!
  \************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.add = function (message) {
        this.messages.push(message);
    };
    MessageService.prototype.clear = function () {
        this.messages = [];
    };
    MessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/messages/messages.component.css":
/*!*************************************************!*\
  !*** ./src/app/messages/messages.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/messages/messages.component.html":
/*!**************************************************!*\
  !*** ./src/app/messages/messages.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  messages works!\n</p>\n"

/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MessagesComponent = /** @class */ (function () {
    function MessagesComponent() {
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.component.html */ "./src/app/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ./messages.component.css */ "./src/app/messages/messages.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/participants/dispenser.component.html":
/*!*******************************************************!*\
  !*** ./src/app/participants/dispenser.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"dispenser\">\n  <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n    <div class=\"main-content\">\n      <!-- Header -->\n      <mat-accordion>\n        <mat-expansion-panel [expanded]=\"step === 0\" (opened)=\"setStep(0)\" showToggle>\n          <mat-expansion-panel-header>\n            <mat-panel-title class=\"card-title\">\n              <h2>Dispenser description</h2>\n            </mat-panel-title>\n            <mat-panel-description class=\"card-description\">\n              Details of this dispenser practice\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n          <mat-form-field>\n            <div class=\"form-group\" fxLayout=\"row\" min-width=\"400px\">\n              <label>Dispenser name:</label>\n              <input matInput value=\"{{ dispenser.name }}\" class=\"input-text\" />\n            </div>\n            <div class=\"form-group\" fxLayout=\"row\">\n              <label>Address:</label>\n              <input matInput value=\"{{ dispenser.street }}\" class=\"input-text\" />\n            </div>\n            <div class=\"form-group\" fxLayout=\"row\">\n              <label>City:</label>\n              <input matInput value=\"{{ dispenser.city }}\" class=\"input-text\" />\n            </div>\n            <div class=\"form-group\" fxLayout=\"row\">\n              <label>Province:</label>\n              <input matInput value=\"{{ dispenser.province }}\" class=\"input-text\" />\n            </div>\n          </mat-form-field>\n        </mat-expansion-panel>\n      </mat-accordion>\n      <!-- Statistics -->\n      <mat-accordion>\n        <mat-expansion-panel [expanded]=\"step === 0\" (opened)=\"setStep(0)\" showToggle>\n          <mat-expansion-panel-header>\n            <mat-panel-title class=\"card-title\">\n              Dispenser statistics\n            </mat-panel-title>\n            <mat-panel-description class=\"card-description\">\n              Summary statistics for this dispenser practice\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n          <mat-card-content>\n            <div fxLayout=\"column\" max-width=\"80%\" xLayoutAlign=\"center center\" class=\"container-content\">\n              <div class=\"card-header-text\">How many prescriptions do you receive?\n              </div>\n              <div fxLayout=\"row\" class=\"form-group\">\n                <div class=\"input-description\">Total prescriptions</div>\n                <mat-form-field>\n                  <input matInput value=\"\" placeholder=\"Morning\" class=\"input-number\" />\n                </mat-form-field>\n                <mat-form-field>\n                  <input matInput value=\"\" placeholder=\"Afternoon\" class=\"input-number\" />\n                </mat-form-field>\n                <mat-form-field>\n                  <input matInput value=\"\" placeholder=\"Evening\" class=\"input-number\" />\n                </mat-form-field>\n                <mat-form-field>\n                  <input matInput value=\"\" placeholder=\"Weekends\" class=\"input-number\" />\n                </mat-form-field>\n              </div>\n              <div fxLayout=\"row\" class=\"form-group level2\">\n                <div class=\"input-description\">Walk-in patients (printed)</div>\n                <mat-form-field>\n                  <input matInput value=\"\" placeholder=\"Morning\" class=\"input-number\" />\n                </mat-form-field>\n                <mat-form-field>\n                  <input matInput value=\"\" placeholder=\"Afternoon\" class=\"input-number\" />\n                </mat-form-field>\n                <mat-form-field>\n                  <input matInput value=\"\" placeholder=\"Evening\" class=\"input-number\" />\n                </mat-form-field>\n                <mat-form-field>\n                  <input matInput value=\"\" placeholder=\"Weekends\" class=\"input-number\" />\n                </mat-form-field>\n              </div>\n              <div fxLayout=\"row\" class=\"form-group level2\">\n                <div class=\"input-description\">Walk-in patients (hand written)</div>\n                <mat-form-field>\n                  <input matInput value=\"\" placeholder=\"Morning\" class=\"input-number\" />\n                </mat-form-field>\n                <mat-form-field>\n                  <input matInput value=\"\" placeholder=\"Afternoon\" class=\"input-number\" />\n                </mat-form-field>\n                <mat-form-field>\n                  <input matInput value=\"\" placeholder=\"Evening\" class=\"input-number\" />\n                </mat-form-field>\n                <mat-form-field>\n                  <input matInput value=\"\" placeholder=\"Weekends\" class=\"input-number\" />\n                </mat-form-field>\n              </div>\n              <div fxLayout=\"row\" class=\"form-group level2\">\n                <div class=\"input-description\">Faxed prescriptions</div>\n                <mat-form-field>\n                  <input matInput value=\"\" placeholder=\"Morning\" class=\"input-number\" />\n                </mat-form-field>\n                <mat-form-field>\n                  <input matInput value=\"\" placeholder=\"Afternoon\" class=\"input-number\" />\n                </mat-form-field>\n                <mat-form-field>\n                  <input matInput value=\"\" placeholder=\"Evening\" class=\"input-number\" />\n                </mat-form-field>\n                <mat-form-field>\n                  <input matInput value=\"\" placeholder=\"Weekends\" class=\"input-number\" />\n                </mat-form-field>\n              </div>\n              <div fxLayout=\"row\" class=\"form-group level2\">\n                <div class=\"input-description\">e-prescribed using PrescribeIT</div>\n                <mat-form-field>\n                  <input matInput value=\"\" placeholder=\"Morning\" class=\"input-number\" />\n                </mat-form-field>\n                <mat-form-field>\n                  <input matInput value=\"\" placeholder=\"Afternoon\" class=\"input-number\" />\n                </mat-form-field>\n                <mat-form-field>\n                  <input matInput value=\"\" placeholder=\"Evening\" class=\"input-number\" />\n                </mat-form-field>\n                <mat-form-field>\n                  <input matInput value=\"\" placeholder=\"Weekends\" class=\"input-number\" />\n                </mat-form-field>\n              </div>\n              <div fxLayout=\"row\" class=\"form-group level2\">\n                <div class=\"input-description\">Phoned-in requests (refills)</div>\n                <mat-form-field>\n                  <input matInput value=\"\" placeholder=\"Morning\" class=\"input-number\" />\n                </mat-form-field>\n                <mat-form-field>\n                  <input matInput value=\"\" placeholder=\"Afternoon\" class=\"input-number\" />\n                </mat-form-field>\n                <mat-form-field>\n                  <input matInput value=\"\" placeholder=\"Evening\" class=\"input-number\" />\n                </mat-form-field>\n                <mat-form-field>\n                  <input matInput value=\"\" placeholder=\"Weekends\" class=\"input-number\" />\n                </mat-form-field>\n              </div>\n              <div fxLayout=\"row\" class=\"form-group\">\n                <div class=\"input-description\">Patients new to this dispenser</div>\n                <mat-form-field>\n                  <input matInput value=\"\" placeholder=\"Morning\" class=\"input-number\" />\n                </mat-form-field>\n                <mat-form-field>\n                  <input matInput value=\"\" placeholder=\"Afternoon\" class=\"input-number\" />\n                </mat-form-field>\n                <mat-form-field>\n                  <input matInput value=\"\" placeholder=\"Evening\" class=\"input-number\" />\n                </mat-form-field>\n                <mat-form-field>\n                  <input matInput value=\"\" placeholder=\"Weekends\" class=\"input-number\" />\n                </mat-form-field>\n              </div>\n              <div fxLayout=\"row\" class=\"form-group\">\n                <div class=\"input-description\">Average time in mins. to dispense one item in prescription</div>\n                <mat-form-field>\n                  <input matInput value=\"\" placeholder=\"Morning\" class=\"input-number\" />\n                </mat-form-field>\n                <mat-form-field>\n                  <input matInput value=\"\" placeholder=\"Afternoon\" class=\"input-number\" />\n                </mat-form-field>\n                <mat-form-field>\n                  <input matInput value=\"\" placeholder=\"Evening\" class=\"input-number\" />\n                </mat-form-field>\n                <mat-form-field>\n                  <input matInput value=\"\" placeholder=\"Weekends\" class=\"input-number\" />\n                </mat-form-field>\n              </div>\n            </div>\n          </mat-card-content>\n        </mat-expansion-panel>\n      </mat-accordion>\n\n      <!-- Transcription -->\n      <mat-accordion>\n        <mat-expansion-panel>\n          <!-- [expanded]=\"step === 0\" (opened)=\"setStep(0)\" showToggle> -->\n          <mat-expansion-panel-header>\n            <mat-panel-title class=\"card-title\">\n              Prescription transcription\n            </mat-panel-title>\n            <mat-panel-description class=\"card-description\">\n              How long does it take to enter prescription data, and who does so?\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n        <mat-card-content>\n          <div fxLayout=\"column\" max-width=\"80%\" xLayoutAlign=\"center center\" class=\"container-content\">\n            <div class=\"card-header-text\">How long does it take to input prescription data into the pharmcy management system?\n            </div>\n            <div fxLayout=\"row\" class=\"form-group\">\n              <div class=\"input-description\">New patients</div>\n              <mat-form-field>\n                <input matInput value=\"\" placeholder=\"mins\" class=\"input-number\" />\n              </mat-form-field>\n            </div>\n            <div fxLayout=\"row\" class=\"form-group\">\n              <div class=\"input-description\">New prescription (exiting patient)</div>\n              <mat-form-field>\n                <input matInput value=\"\" placeholder=\"mins\" class=\"input-number\" />\n              </mat-form-field>\n            </div>\n            <div fxLayout=\"row\" class=\"form-group\">\n              <div class=\"input-description\">Repeat prescription</div>\n              <mat-form-field>\n                <input matInput value=\"\" placeholder=\"mins\" class=\"input-number\" />\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"card-header-text\">Who inputs the data?\n          </div>\n          <div fxLayout=\"row\" class=\"form-group\">\n            <div class=\"input-description\">Pharmacist</div>\n            <mat-form-field>\n              <input matInput value=\"\" placeholder=\"mins\" class=\"input-number\" />\n            </mat-form-field>\n          </div>\n          <div class=\"input-description\">Pharmacy technician</div>\n          <mat-form-field>\n            <input matInput value=\"\" placeholder=\"mins\" class=\"input-number\" />\n          </mat-form-field>\n          <div class=\"input-description\">Pharmacy assistant</div>\n          <mat-form-field>\n            <input matInput value=\"\" placeholder=\"mins\" class=\"input-number\" />\n          </mat-form-field>\n        </mat-card-content>\n      </mat-expansion-panel>\n      </mat-accordion>\n\n      <!-- Communication with prescriber -->\n      <mat-accordion>\n        <mat-expansion-panel>\n          <!-- [expanded]=\"step === 0\" (opened)=\"setStep(0)\" showToggle>-->\n          <mat-expansion-panel-header>\n            <mat-panel-title class=\"card-title\">\n              Prescription delivery\n            </mat-panel-title>\n            <mat-panel-description class=\"card-description\">\n              How prescriptions are delivered to patients\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n          <mat-card-content>\n            <div>During the review process, the pharmacist may need clarifaction of a prescription, and will cntact the precriber.\n              (Pharmacists may be authorized to make ceratain changes and advise the prescriber.) What are the main reaons\n              for seeking clarifcation? How do communications occur? Howlong do they take?\n            </div>\n            <div fxLayout=\"column\" max-width=\"80%\" xLayoutAlign=\"center center\" class=\"container-content\">\n              <div fxLayout=\"row\" class=\"form-group\">\n                <div class=\"input-description\">Illegible prescription</div>\n                <mat-checkbox></mat-checkbox>\n                <mat-form-field>\n                  <input matInput value=\"\" placeholder=\"Duration\" class=\"input-number\" />\n                </mat-form-field>\n                <mat-form-field>\n                  <input matInput value=\"\" placeholder=\"Frequency\" class=\"input-number\" />\n                </mat-form-field>\n                <mat-form-field>\n                  <input matInput value=\"\" placeholder=\"Elapsed time\" class=\"input-number\" />\n                </mat-form-field>\n                <mat-checkbox>by fax</mat-checkbox>\n                <mat-checkbox>by phone</mat-checkbox>\n                <mat-checkbox>by direct message</mat-checkbox>\n              </div>\n              <div fxLayout=\"row\" class=\"form-group\">\n                <div class=\"input-description\">Illegible prescription</div>\n                <mat-checkbox></mat-checkbox>\n                <mat-form-field>\n                  <input matInput value=\"\" placeholder=\"Duration\" class=\"input-number\" />\n                </mat-form-field>\n                <mat-form-field>\n                  <input matInput value=\"\" placeholder=\"Frequency\" class=\"input-number\" />\n                </mat-form-field>\n                <mat-form-field>\n                  <input matInput value=\"\" placeholder=\"Elapsed time\" class=\"input-number\" />\n                </mat-form-field>\n                <mat-checkbox>by fax</mat-checkbox>\n                <mat-checkbox>by phone</mat-checkbox>\n                <mat-checkbox>by direct message</mat-checkbox>\n              </div>\n              <div fxLayout=\"row\" class=\"form-group\">\n                <div class=\"input-description\">Incomplete information</div>\n                <mat-checkbox></mat-checkbox>\n                <mat-form-field>\n                  <input matInput value=\"\" placeholder=\"Duration\" class=\"input-number\" />\n                </mat-form-field>\n                <mat-form-field>\n                  <input matInput value=\"\" placeholder=\"Frequency\" class=\"input-number\" />\n                </mat-form-field>\n                <mat-form-field>\n                  <input matInput value=\"\" placeholder=\"Elapsed time\" class=\"input-number\" />\n                </mat-form-field>\n                <mat-checkbox>by fax</mat-checkbox>\n                <mat-checkbox>by phone</mat-checkbox>\n                <mat-checkbox>by direct message</mat-checkbox>\n              </div>\n              <div fxLayout=\"row\" class=\"form-group\">\n                <div class=\"input-description\">Advise of change (no repsonse required)</div>\n                <mat-checkbox></mat-checkbox>\n                <mat-form-field>\n                  <input matInput value=\"\" placeholder=\"Duration\" class=\"input-number\" />\n                </mat-form-field>\n                <mat-form-field>\n                  <input matInput value=\"\" placeholder=\"Frequency\" class=\"input-number\" />\n                </mat-form-field>\n                <mat-form-field>\n                  <input matInput value=\"\" placeholder=\"Elapsed time\" class=\"input-number\" />\n                </mat-form-field>\n                <mat-checkbox>by fax</mat-checkbox>\n                <mat-checkbox>by phone</mat-checkbox>\n                <mat-checkbox>by direct message</mat-checkbox>\n              </div>\n              <div fxLayout=\"row\" class=\"form-group\">\n                <div class=\"input-description\">Cancellations</div>\n                <mat-checkbox></mat-checkbox>\n                <mat-form-field>\n                  <input matInput value=\"\" placeholder=\"Duration\" class=\"input-number\" />\n                </mat-form-field>\n                <mat-form-field>\n                  <input matInput value=\"\" placeholder=\"Frequency\" class=\"input-number\" />\n                </mat-form-field>\n                <mat-form-field>\n                  <input matInput value=\"\" placeholder=\"Elapsed time\" class=\"input-number\" />\n                </mat-form-field>\n                <mat-checkbox>by fax</mat-checkbox>\n                <mat-checkbox>by phone</mat-checkbox>\n                <mat-checkbox>by direct message</mat-checkbox>\n              </div>\n              <div fxLayout=\"row\" class=\"form-group\">\n                <div class=\"input-description\">Physician communication</div>\n                <mat-checkbox></mat-checkbox>\n                <mat-form-field>\n                  <input matInput value=\"\" placeholder=\"Duration\" class=\"input-number\" />\n                </mat-form-field>\n                <mat-form-field>\n                  <input matInput value=\"\" placeholder=\"Frequency\" class=\"input-number\" />\n                </mat-form-field>\n                <mat-form-field>\n                  <input matInput value=\"\" placeholder=\"Elapsed time\" class=\"input-number\" />\n                </mat-form-field>\n                <mat-checkbox>by fax</mat-checkbox>\n                <mat-checkbox>by phone</mat-checkbox>\n                <mat-checkbox>by direct message</mat-checkbox>\n              </div>\n            </div>\n          </mat-card-content>\n        </mat-expansion-panel>\n      </mat-accordion>\n\n      <!-- Review -->\n      <mat-accordion>\n        <mat-expansion-panel>\n          <!-- [expanded]=\"step === 0\" (opened)=\"setStep(0)\" showToggle> -->\n          <mat-expansion-panel-header>\n            <mat-panel-title class=\"card-title\">\n              Prescription review with the patient\n            </mat-panel-title>\n            <mat-panel-description class=\"card-description\">\n              How messages with pharmacies are handled\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n          <mat-card-content>\n            <div fxLayout=\"column\" max-width=\"80%\" xLayoutAlign=\"center center\" class=\"container-content\">\n              <div class=\"card-header-text\">A discussion by the pharmacist with the patient can be an important step in filling a prescription. Sometimes\n                the is review takes place at the beginning of the process, and frequently at the end, when the medications\n                are handed to the patient. How often does these occur\n              </div>\n              <div fxLayout=\"row\" class=\"form-group\">\n                <div class=\"input-description\">New patient and prescription</div>\n                <mat-form-field>\n                  <input matInput value=\"\" placeholder=\"% before filing\" class=\"input-number\" />\n                </mat-form-field>\n                <mat-form-field>\n                  <input matInput value=\"\" placeholder=\"% on completion\" class=\"input-number\" />\n                </mat-form-field>\n              </div>\n              <div fxLayout=\"row\" class=\"form-group\">\n                <div class=\"input-description\">Existing patient with new prescription</div>\n                <mat-form-field>\n                  <input matInput value=\"\" placeholder=\"% before filing\" class=\"input-number\" />\n                </mat-form-field>\n                <mat-form-field>\n                  <input matInput value=\"\" placeholder=\"% on completion\" class=\"input-number\" />\n                </mat-form-field>\n              </div>\n              <div fxLayout=\"row\" class=\"form-group\">\n                <div class=\"input-description\">Repeat prescription</div>\n                <mat-form-field>\n                  <input matInput value=\"\" placeholder=\"% before filing\" class=\"input-number\" />\n                </mat-form-field>\n                <mat-form-field>\n                  <input matInput value=\"\" placeholder=\"% on completion\" class=\"input-number\" />\n                </mat-form-field>\n              </div>\n            </div>\n          </mat-card-content>\n        </mat-expansion-panel>\n\n      </mat-accordion>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/participants/dispenser.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/participants/dispenser.component.ts ***!
  \*****************************************************/
/*! exports provided: DispenserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DispenserComponent", function() { return DispenserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _participant_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./participant.model */ "./src/app/participants/participant.model.ts");
/* harmony import */ var _participant_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./participant-api.service */ "./src/app/participants/participant-api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DispenserComponent = /** @class */ (function () {
    function DispenserComponent(route, dispenserService, location) {
        this.route = route;
        this.dispenserService = dispenserService;
        this.location = location;
        this.step = 0;
    }
    DispenserComponent.prototype.setStep = function (index) {
        this.step = index;
    };
    DispenserComponent.prototype.nextStep = function () {
        this.step++;
    };
    DispenserComponent.prototype.prevStep = function () {
        this.step--;
    };
    DispenserComponent.prototype.ngOnChanges = function () {
        this.getDispenser();
    };
    DispenserComponent.prototype.getDispenser = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.dispenserService.getDispenser(id)
            .subscribe(function (dispenser) { return _this.dispenser = dispenser; });
    };
    DispenserComponent.prototype.updateDispenser = function () { };
    DispenserComponent.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _participant_model__WEBPACK_IMPORTED_MODULE_3__["Dispenser"])
    ], DispenserComponent.prototype, "dispenser", void 0);
    DispenserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dispenser-component',
            template: __webpack_require__(/*! ./dispenser.component.html */ "./src/app/participants/dispenser.component.html"),
            styles: [__webpack_require__(/*! ./participant.component.css */ "./src/app/participants/participant.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _participant_api_service__WEBPACK_IMPORTED_MODULE_4__["ParticipantApiService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], DispenserComponent);
    return DispenserComponent;
}());



/***/ }),

/***/ "./src/app/participants/dispensers.component.html":
/*!********************************************************!*\
  !*** ./src/app/participants/dispensers.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxFlex=\"450px\">\n  <!-- <br>\n    <div class=\"container\">\n      <div fxLayout=\"column\" fxLayoutGap=\"20px\" fxLayout.gt-md=\"row\" fxLayoutAlgin=\"space-around center\" class=\"coneent\">\n        <div class=\"blocks\" >\n          <button button=\"submit\" mat-raised-button color=\"primary\">\n            <mat-icon>add</mat-icon> Add Dispenser\n          </button>\n        </div>\n      </div>\n    </div>\n    <br> -->\n  <div class=\"container\" fxLayout=\"column\" fxLayoutAlign=\"top right\" >\n    <div>\n      <mat-card class=\"card\">\n        <mat-card-title fxLayout.gt-xs=\"row\" fxLayout.xs=\"column\">\n          <h3>Participating Dispensers</h3>\n        </mat-card-title>\n        <mat-card-content>\n          <div class=\"example-container mat-elevation-z8\">\n            <mat-table #table [dataSource]=\"dataSource\">\n              <ng-container matColumnDef=\"name\">\n                <mat-header-cell *matHeaderCellDef>Name</mat-header-cell>\n                <mat-cell *matCellDef=\"let element\"> {{ element.name }} </mat-cell>\n              </ng-container>\n              <ng-container matColumnDef=\"street\">\n                <mat-header-cell *matHeaderCellDef>Street</mat-header-cell>\n                <mat-cell *matCellDef=\"let element\"> {{ element.street }} </mat-cell>\n              </ng-container>\n              <ng-container matColumnDef=\"city\">\n                <mat-header-cell *matHeaderCellDef>City</mat-header-cell>\n                <mat-cell *matCellDef=\"let element\"> {{ element.city }} </mat-cell>\n              </ng-container>\n              <ng-container matColumnDef=\"province\">\n                <mat-header-cell *matHeaderCellDef>Province</mat-header-cell>\n                <mat-cell *matCellDef=\"let element\"> {{ element.province }} </mat-cell>\n              </ng-container>\n              <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n              <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n            </mat-table>\n          </div>\n        </mat-card-content>\n      </mat-card>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/participants/dispensers.component.ts":
/*!******************************************************!*\
  !*** ./src/app/participants/dispensers.component.ts ***!
  \******************************************************/
/*! exports provided: DispensersComponent, DispenserDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DispensersComponent", function() { return DispensersComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DispenserDataSource", function() { return DispenserDataSource; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _participant_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./participant-api.service */ "./src/app/participants/participant-api.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DispensersComponent = /** @class */ (function () {
    function DispensersComponent(participantApi) {
        this.participantApi = participantApi;
        this.displayedColumns = ['name', 'street', 'city', 'province'];
        this.dataSource = new DispenserDataSource(this.participantApi);
    }
    // this version loads a subscription
    // tour of heroes defers that until the get() function
    // so this version, copied from the auth0 app budles it all into one function call
    DispensersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dispensersSubs = this.participantApi
            .getDispensers()
            .subscribe(function (res) {
            _this.dispensers = res;
        }, console.error);
    };
    DispensersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dispensers-component',
            template: __webpack_require__(/*! ./dispensers.component.html */ "./src/app/participants/dispensers.component.html"),
            styles: [__webpack_require__(/*! ./participants.component.css */ "./src/app/participants/participants.component.css")],
        }),
        __metadata("design:paramtypes", [_participant_api_service__WEBPACK_IMPORTED_MODULE_2__["ParticipantApiService"]])
    ], DispensersComponent);
    return DispensersComponent;
}());

// datasource for the prescribers
var DispenserDataSource = /** @class */ (function (_super) {
    __extends(DispenserDataSource, _super);
    function DispenserDataSource(participantApiService) {
        var _this = _super.call(this) || this;
        _this.participantApiService = participantApiService;
        return _this;
    }
    DispenserDataSource.prototype.connect = function () {
        return this.participantApiService.getDispensers();
    };
    DispenserDataSource.prototype.disconnect = function () {
    };
    return DispenserDataSource;
}(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["DataSource"]));



/***/ }),

/***/ "./src/app/participants/participant-api.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/participants/participant-api.service.ts ***!
  \*********************************************************/
/*! exports provided: ParticipantApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticipantApiService", function() { return ParticipantApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../message.service */ "./src/app/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var ParticipantApiService = /** @class */ (function () {
    function ParticipantApiService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
    }
    // get list of prescribers
    ParticipantApiService.prototype.getPrescribers = function () {
        var _this = this;
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL + "/api/prescribers")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (prescribers) { return _this.log("fetched prescribers"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getPrescribers', [])));
    };
    // get an individual prescriber
    ParticipantApiService.prototype.getPrescriber = function (id) {
        return this.http
            .get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL + "/api/prescribers/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return console.log("fetched prescriber id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getPrescriber id=" + id)));
    };
    ParticipantApiService.prototype.updatePrescriber = function (prescriber) {
        var _this = this;
        return this.http
            .post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL + "/api", prescriber, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("updated prescriber w/ id=" + prescriber.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('addHero')));
    };
    // get list of dispensers
    ParticipantApiService.prototype.getDispensers = function () {
        var _this = this;
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL + "/api/dispensers")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (dispensers) { return _this.log("fetched dispensers"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getDispensers', [])));
    };
    // get an individual dispenser
    ParticipantApiService.prototype.getDispenser = function (id) {
        var _this = this;
        return this.http
            .get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL + "/api/dispensers/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("fetched dispenser id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getDispenser id=" + id)));
    };
    ParticipantApiService.prototype.login = function (username, password) {
        return this.http
            .post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL + "/api/login", { username: username, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return console.log("logged in user"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('logging in')));
    };
    ParticipantApiService.prototype.logout = function () {
        // remove user from local storage to log user out
        // localStorage.removeItem('participantType');
        // localStorage.removeItem('participantId');
    };
    /**
       * Handle Http operation that failed.
       * Let the app continue.
       * @param operation - name of the operation that failed
       * @param result - optional value to return as the observable result
       */
    ParticipantApiService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            console.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    /** Log a HeroService message with the MessageService */
    ParticipantApiService.prototype.log = function (message) {
        this.messageService.add('ParticipantApiService: ' + message);
    };
    ParticipantApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"]])
    ], ParticipantApiService);
    return ParticipantApiService;
}());



/***/ }),

/***/ "./src/app/participants/participant.component.css":
/*!********************************************************!*\
  !*** ./src/app/participants/participant.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field{\n  width: 5em;\n  margin-right:3em;\n}\n\n.mat-expansion-panel-header {\n  background: rgb(213, 219, 253)\n}\n\n.mat-expansion-panel-header.hover {\n  background: rgb(48, 58, 116)\n}\n\n.mat-expanded { \n  background: rgb(255, 255, 255)\n}\n\n.mat-expansion-panel-header.mat-expanded { \n  background: rgb(184, 188, 212)\n}\n\n.mat-expansion-panel-header.mat-expanded:hover {\n  background: rgb(206, 207, 216)\n}\n\n*/\n\nhtml,\nbody {\n  height: 100%;\n  padding: 0;\n  margin: 0;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\ntextarea {\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.main-content {\n  padding: 20px;\n}\n\n/* continer widths */\n\n.main-content{\n  max-width: 768px;\n}\n\n.card-title{\n  min-width:300px;\n  font-size: 18px;\n  font-weight: bold;\n  /*border: 3px solid blue;*/\n}\n\n.card-description{\n  text-align: left;\n  /* border: 3px solid green;*/\n}\n\n.card-header-text{\n  max-width: 500px;\n  margin-bottom: 1em;\n  font-style: italic;\n  border:2px solid gray;\n}\n\n@media (max-width: 768px) {\n}\n\n/* form specific formatting */\n\n.form-group {\n  display: flex;\n  flex-direction: column;\n}\n\n.form-group label {\n  flex: none;\n  display: block;\n  width: 125px;\n  font-weight: bold;\n  font-size: 1em;\n}\n\n.form-group label.right-inline {\n  text-align: right;  \n  padding-right: 8px;\n  padding-left: 10px;\n  width: auto;\n}\n\n.form-group .table-line{\n  flex: 1 1 column;\n}\n\n.form-group .input-control {\n  flex: 1 1 auto;\n  display: block;\n  max-width: 50px;\n  margin-bottom: 10px;\n  margin-right: 8px;\n  padding: 4px;\n  margin-top: -4px;\n}\n\n.input-description{\n  width: 15em;\n  font-size: 15px;\n  font-weight: bold;\n}\n\n.input-text { \n min-width: 300px;\n /* border: 3px solid rgb(255, 153, 0);*/\n}\n\n.input-number { \n  max-width: 100px;\n  margin-right: 5em;\n  /*border: 3px solid rgb(0, 255, 64);*/\n}\n\n.level2{\n  color:rgb(80, 81, 97);\n  padding-left: 1em;\n  font-size: 13px;\n}\n\n.level3{\n  color:gray;\n  padding-left: 2em;\n  font-size: 13px;\n}\n\n.short-form{\n  max-width: 100px;\n}\n\n.low-spacer{\n  padding-bottom: 20px;\n}\n\n.side-spacer{\n  width: 3em;\n}\n\nbutton {\n  padding: 5px 15px;\n  margin: 5px;\n  min-width: 100px\n}\n\n@media (max-width: 768px) {\n  .main-content {\n    padding: 20px 8px;\n  }\n  \n  .form-group {\n    flex-direction: column;\n  }\n  .form-group .input-control {\n    margin-top: 2px;\n  }\n  .form-group label.right-inline {\n    text-align: left;  \n    padding-right: 0;\n    padding-left: 0;   \n  }\n}\n\n\n"

/***/ }),

/***/ "./src/app/participants/participant.model.ts":
/*!***************************************************!*\
  !*** ./src/app/participants/participant.model.ts ***!
  \***************************************************/
/*! exports provided: Prescriber, PrescriberStatistics, PrescriberDelivery, PrescriberAdmin, PrescriberPreperation, PrescriberSpecification, Dispenser, User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Prescriber", function() { return Prescriber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrescriberStatistics", function() { return PrescriberStatistics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrescriberDelivery", function() { return PrescriberDelivery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrescriberAdmin", function() { return PrescriberAdmin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrescriberPreperation", function() { return PrescriberPreperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrescriberSpecification", function() { return PrescriberSpecification; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dispenser", function() { return Dispenser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var Prescriber = /** @class */ (function () {
    function Prescriber(name, street, city, province, id, statistics, delivery, admin, prepration, specification) {
        this.name = name;
        this.street = street;
        this.city = city;
        this.province = province;
        this.id = id;
        this.statistics = statistics;
        this.delivery = delivery;
        this.admin = admin;
        this.prepration = prepration;
        this.specification = specification;
    }
    return Prescriber;
}());

var PrescriberStatistics = /** @class */ (function () {
    function PrescriberStatistics(total_pt_daily, total_pt_weekly, std_pt_daily, std_pt_weekly, ext_pt_daily, ext_pt_weekly, prop_ongoing_daily, prop_ongoing_weekly, total_rx_daily, total_rx_weekly, new_rx_daily, new_rx_weekly, renew_rx_daily, renew_rx_weekly, auth_rx_daily, auth_rx_weekly, multi_rx_daily, multi_rx_weekly, clarify_rx_daily, clarify_rx_weekly, request_rx_daily, request_rx_weekly, other_rx_daily, other_rx_weekly, other_rx_note) {
        this.total_pt_daily = total_pt_daily;
        this.total_pt_weekly = total_pt_weekly;
        this.std_pt_daily = std_pt_daily;
        this.std_pt_weekly = std_pt_weekly;
        this.ext_pt_daily = ext_pt_daily;
        this.ext_pt_weekly = ext_pt_weekly;
        this.prop_ongoing_daily = prop_ongoing_daily;
        this.prop_ongoing_weekly = prop_ongoing_weekly;
        this.total_rx_daily = total_rx_daily;
        this.total_rx_weekly = total_rx_weekly;
        this.new_rx_daily = new_rx_daily;
        this.new_rx_weekly = new_rx_weekly;
        this.renew_rx_daily = renew_rx_daily;
        this.renew_rx_weekly = renew_rx_weekly;
        this.auth_rx_daily = auth_rx_daily;
        this.auth_rx_weekly = auth_rx_weekly;
        this.multi_rx_daily = multi_rx_daily;
        this.multi_rx_weekly = multi_rx_weekly;
        this.clarify_rx_daily = clarify_rx_daily;
        this.clarify_rx_weekly = clarify_rx_weekly;
        this.request_rx_daily = request_rx_daily;
        this.request_rx_weekly = request_rx_weekly;
        this.other_rx_daily = other_rx_daily;
        this.other_rx_weekly = other_rx_weekly;
        this.other_rx_note = other_rx_note;
    }
    return PrescriberStatistics;
}());

var PrescriberDelivery = /** @class */ (function () {
    function PrescriberDelivery(print, fax, phone, e_rx) {
        this.print = print;
        this.fax = fax;
        this.phone = phone;
        this.e_rx = e_rx;
    }
    return PrescriberDelivery;
}());

var PrescriberAdmin = /** @class */ (function () {
    function PrescriberAdmin() {
    }
    return PrescriberAdmin;
}());

var PrescriberPreperation = /** @class */ (function () {
    function PrescriberPreperation() {
    }
    return PrescriberPreperation;
}());

var PrescriberSpecification = /** @class */ (function () {
    function PrescriberSpecification() {
    }
    return PrescriberSpecification;
}());

var Dispenser = /** @class */ (function () {
    function Dispenser(name, street, city, province, id) {
        this.name = name;
        this.street = street;
        this.city = city;
        this.province = province;
        this.id = id;
    }
    return Dispenser;
}());

var User = /** @class */ (function () {
    function User(id, username, 
    // public password: string,
    // public firstName: string,
    // public lastName: string,
    participantType, participantId, prescriber, dispenser) {
        this.id = id;
        this.username = username;
        this.participantType = participantType;
        this.participantId = participantId;
        this.prescriber = prescriber;
        this.dispenser = dispenser;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/participants/participants.component.css":
/*!*********************************************************!*\
  !*** ./src/app/participants/participants.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/participants/physician.component.html":
/*!*******************************************************!*\
  !*** ./src/app/participants/physician.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"sample-app-content\">\n  <h1>Template-driven Form Example:</h1>\n  <form #f=\"ngForm\" (ngSubmit)=\"onSubmitTemplateBased()\">\n      <p>\n          <label for ='name'>First Name:</label>\n          <input type=\"text\"  \n              [(ngModel)]=\"prescriber.name\" required name='name'>\n      </p>\n      <p>\n          <label for = 'street'>Password:</label>\n          <input type=\"text\"  \n              [(ngModel)]=\"prescriber.street\" required name='street'>\n      </p>\n      <p>\n          <button type=\"submit\" [disabled]=\"!f.valid\">Submit</button>\n      </p>\n  </form>\n</section>\nTODO remove: {{ prescriber.name}}"

/***/ }),

/***/ "./src/app/participants/physician.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/participants/physician.component.ts ***!
  \*****************************************************/
/*! exports provided: PhysicianComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhysicianComponent", function() { return PhysicianComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _participant_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./participant.model */ "./src/app/participants/participant.model.ts");
/* harmony import */ var _participant_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./participant-api.service */ "./src/app/participants/participant-api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PhysicianComponent = /** @class */ (function () {
    function PhysicianComponent(route, prescriberService, location) {
        this.route = route;
        this.prescriberService = prescriberService;
        this.location = location;
        // prescriber: Prescriber;
        this.prescriber = new _participant_model__WEBPACK_IMPORTED_MODULE_3__["Prescriber"]('', '', '', '', 3);
    }
    PhysicianComponent.prototype.onSubmitTemplateBased = function () {
        console.log(this.prescriber.name);
    };
    PhysicianComponent.prototype.ngOnInit = function () {
        this.getPrescriber();
    };
    PhysicianComponent.prototype.getPrescriber = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.prescriberService.getPrescriber(id)
            .subscribe(function (prescriber) {
            console.log('participant name' + prescriber.name); // do stuff with our data here.
            // ....
            // asign data to our class property in the end
            // so it will be available to our template
            _this.prescriber = prescriber;
        });
    };
    PhysicianComponent.prototype.buildPrescriber = function () {
        var prescriber = new _participant_model__WEBPACK_IMPORTED_MODULE_3__["Prescriber"]('New physician', 'Dundas', 'Hamilton', 'ON', 3);
        return prescriber;
    };
    PhysicianComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-physician',
            template: __webpack_require__(/*! ./physician.component.html */ "./src/app/participants/physician.component.html"),
            styles: [__webpack_require__(/*! ./participants.component.css */ "./src/app/participants/participants.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _participant_api_service__WEBPACK_IMPORTED_MODULE_4__["ParticipantApiService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], PhysicianComponent);
    return PhysicianComponent;
}());



/***/ }),

/***/ "./src/app/participants/prescriber.component.html":
/*!********************************************************!*\
  !*** ./src/app/participants/prescriber.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #f=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n  <!-- <div *ngIf=\"prescriber\"> -->\n    <div>\n    <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n      <div class=\"main-content\">\n        <mat-accordion>\n          <mat-expansion-panel [expanded]=\"step === 0\" (opened)=\"setStep(0)\" showToggle>\n            <mat-expansion-panel-header>\n              <mat-panel-title class=\"card-title\">\n                <h3>{{prescriber.name}}</h3>\n              </mat-panel-title>\n              <mat-panel-description class=\"card-description\">\n                Details of this prescriber practice\n              </mat-panel-description>\n            </mat-expansion-panel-header>\n            <!-- <mat-form-field> -->\n            <div class=\"form-group\" fxLayout=\"row\">\n              <label for='street'>Address:</label>\n              <input type='text' class=\"input-text\" [(ngModel)]='prescriber.street' name=\"street\" />\n            </div>\n            <div class=\"form-group\" fxLayout=\"row\">\n              <label for='city'>City:</label>\n              <input type='text' class=\"input-text\" [(ngModel)]='prescriber.city' name=\"city\" />\n            </div>\n            <div class=\"form-group\" fxLayout=\"row\">\n              <label for='province'>Province:</label>\n              <input type='text' class=\"input-text\" [(ngModel)]=\"prescriber.province\" name='province' />\n            </div>\n            <!-- </mat-form-field> -->\n          </mat-expansion-panel>\n        </mat-accordion>\n         <mat-accordion>\n          <mat-expansion-panel [expanded]=\"step === 0\" (opened)=\"setStep(0)\" showToggle>\n            <mat-expansion-panel-header color='accent'>\n              <mat-panel-title class=\"card-title\">\n                Prescriber statistics\n              </mat-panel-title>\n              <mat-panel-description class=\"card-description\">\n                Summary statistics for this prescriber practice\n              </mat-panel-description>\n            </mat-expansion-panel-header>\n            <mat-card-content>\n              <div fxLayout=\"column\" max-width=\"80%\" xLayoutAlign=\"center center\" class=\"container-content\">\n                <div class=\"card-header-text\">How many patients you see - in an average day and week. Of these, how many have have extended visits, and\n                  how many do you follow for ongoing conditions?\n                </div>\n                <div fxLayout=\"row\" class=\"form-group\">\n                  <div class=\"input-description\">Total patient visits</div>\n                  <mat-form-field>\n                    <input matInput name=\"total_pt_daily\" placeholder=\"Daily\" class=\"input-number\" \n                      [(ngModel)]=\"prescriber.statistics.total_pt_daily\"/>\n                  </mat-form-field>\n                  <mat-form-field>\n                    <input matInput name=\"total_pt_weekly\" placeholder=\"Weekly\" class=\"input-number\" \n                      [(ngModel)]=\"prescriber.statistics.total_pt_weekly\"/>\n                  </mat-form-field>\n                </div>\n                <div fxLayout=\"row\" class=\"form-group level2\">\n                  <div class=\"input-description\">Standard patient visits (&tilde;15 mins)</div>\n                  <mat-form-field>\n                    <input matInput name=\"std_pt_daily\" placeholder=\"Daily\" class=\"input-number\" \n                    [(ngModel)]=\"prescriber.statistics.std_pt_daily\"/>\n                  </mat-form-field>\n                  <mat-form-field>\n                    <input matInput formControlName=\"std_pt_weekly\" placeholder=\"Weekly\" class=\"input-number\" \n                      [(ngModel)] = \"prescriber.statistics.std_pt_weekly\"/>\n                  </mat-form-field>\n                </div>\n                <div fxLayout=\"row\" class=\"form-group level2\">\n                  <div class=\"input-description\">Standard patient visits (&gt;30 mins)</div>\n                  <mat-form-field>\n                    <input matInput formControlName=\"ext_pt_daily\" placeholder=\"Daily\" class=\"input-number\" \n                      [(ngModel)]=\"prescriber.statistics.ext_pt_daily\"/>\n                  </mat-form-field>\n                  <mat-form-field class=\"level2\">\n                    <input matInput formControlName=\"ext_pt_weekly\" placeholder=\"Weekly\" class=\"input-number\" \n                      [(ngModel)]=\"prescriber.statistics.ext_pt_weekly\"/>\n                  </mat-form-field>\n                </div>\n                <div class=\"card-header-text\">What pattern do you observe in writing new or renewing existing perscriptions?\n                </div>\n                <div fxLayout=\"row\" class=\"form-group\">\n                  <div class=\"input-description\">Total prescriptions written</div>\n                  <mat-form-field>\n                    <input matInput formControlName=\"total_rx_daily\" placeholder=\"Daily\" class=\"input-number\" \n                      [(ngModel)]=\"prescriber.statistics.total_rx_daily\"/>\n                  </mat-form-field>\n                  <mat-form-field>\n                    <input matInput formControlName=\"total_rx_weekly\" placeholder=\"Weekly\" class=\"input-number\" \n                      [(ngModel)]=\"prescriber.statistics.total_rx_weekly\"/>\n                  </mat-form-field>\n                </div>\n                <div fxLayout=\"row\" class=\"form-group level2\">\n                  <div class=\"input-description\">New prescriptions written</div>\n                  <mat-form-field>\n                    <input matInput formControlName=\"new_rx_daily\" placeholder=\"Daily\" class=\"input-number\" \n                      [(ngModel)]=\"prescriber.statistics.new_rx_daily\"/>\n                  </mat-form-field>\n                  <mat-form-field>\n                    <input matInput formControlName=\"new_rx_weekly\" placeholder=\"Weekly\" class=\"input-number\" \n                      [(ngModel)]=\"prescriber.statistics.new_rx_weekly\"/>\n                  </mat-form-field>\n                </div>\n                <div fxLayout=\"row\" class=\"form-group level2\">\n                  <div class=\"input-description\">Renewal prescriptions written</div>\n                  <mat-form-field>\n                    <input matInput formControlName=\"renew_rx_daily\" placeholder=\"Daily\" class=\"input-number\" \n                      [(ngModel)]=\"prescriber.statistics.renew_rx_daily\"/>\n                  </mat-form-field>\n                  <mat-form-field>\n                    <input matInput formControlName=\"renew_rx_weekly\" placeholder=\"Weekly\" class=\"input-number\" \n                      [(ngModel)]=\"prescriber.statistics.renew_rx_weekly\"/>\n                  </mat-form-field>\n                </div>\n                <div fxLayout=\"row\" class=\"form-group level3\">\n                  <div class=\"input-description\">Prescriptions authorized by fax</div>\n                  <mat-form-field>\n                    <input matInput formControlName=\"auth_rx_daily\" type=\"number\" placeholder=\"Daily\" class=\"input-number\" \n                      [(ngModel)]=\"prescriber.statistics.auth_rx_daily\"/>\n                  </mat-form-field>\n                  <mat-form-field>\n                    <input matInput formControlName=\"auth_rx_weekly\" placeholder=\"Weekly\" class=\"input-number\" \n                      [(ngModel)]=\"prescriber.statistics.auth_rx_weekly\"/>\n                  </mat-form-field>\n                </div>\n                <div fxLayout=\"row\" class=\"form-group\">\n                  <div class=\"input-description\">Multi-drug prescriptions </div>\n                  <mat-form-field>\n                    <input matInput formControlName=\"multi_rx_daily\" placeholder=\"Daily\" class=\"input-number\" \n                      [(ngModel)]=\"prescriber.statistics.total_pt_weekly\"/>\n                  </mat-form-field>\n                  <mat-form-field>\n                    <input matInput formControlName=\"multi_rx_daily\" placeholder=\"Weekly\" class=\"input-number\" \n                      [(ngModel)]=\"prescriber.statistics.multi_rx_daily\"/>\n                  </mat-form-field>\n                </div>\n              </div>\n            </mat-card-content>\n          </mat-expansion-panel>\n        </mat-accordion>\n        <!-- <mat-accordion>\n          <mat-expansion-panel>\n            [expanded]=\"step === 0\" (opened)=\"setStep(0)\" showToggle>\n            <mat-expansion-panel-header>\n              <mat-panel-title class=\"card-title\">\n                Prescription delivery\n              </mat-panel-title>\n              <mat-panel-description class=\"card-description\">\n                How prescriptions are delivered to patients\n              </mat-panel-description>\n            </mat-expansion-panel-header>\n            <mat-card-content>\n              <div formGroupName=\"deliveryForm\" fxLayout=\"row\" class=\"container-content\">\n                <div fxLayout=\"column\" max-width=\"80%\">\n                  <div fxLayout=\"row\" class=\"form-group\">\n                    <div class=\"input-description\">Printed (or written) prescription, handed to the patient</div>\n                    <mat-checkbox formControlName=\"print\">Print</mat-checkbox>\n                    <mat-form-field>\n                      <input matInput value=\"\" placeholder=\"%\" class=\"input-number\" />\n                    </mat-form-field>\n                  </div>\n                  <div fxLayout=\"row\" class=\"form-group\">\n                    <div class=\"input-description\">Prescription faxed to patient's chosen pharmacy</div>\n                    <mat-checkbox formFieldName=\"fax\">Fax</mat-checkbox>\n                    <mat-form-field>\n                      <input matInput value=\"\" placeholder=\"%\" class=\"input-number\" />\n                    </mat-form-field>\n                  </div>\n                  <div fxLayout=\"row\" class=\"form-group\">\n                    <div class=\"input-description\">Prescription phoned to patient's chosen pharmacy</div>\n                    <mat-checkbox formFieldName=\"phone\">Phone</mat-checkbox>\n                    <mat-form-field>\n                      <input matInput value=\"\" placeholder=\"%\" class=\"input-number\" />\n                    </mat-form-field>\n                  </div>\n                  <div fxLayout=\"row\" class=\"form-group\">\n                    <div class=\"input-description\">Prescription e-prescribed using PrescribeIT</div>\n                    <mat-checkbox formFieldName=\"e_rx\">e-prescribe</mat-checkbox>\n                    <mat-form-field>\n                      <input matInput value=\"\" placeholder=\"%\" class=\"input-number\" />\n                    </mat-form-field>\n                  </div>\n                </div>\n                <div fxLayout=\"column\">\n                  <mat-form-field>\n                    <textarea matInput value=\"\" placeholder=\"Other (please specify)\" class=\"input-text\">Other delivery methods</textarea>\n                  </mat-form-field>\n                </div>\n              </div>\n            </mat-card-content>\n          </mat-expansion-panel>\n        </mat-accordion>\n        <mat-accordion>\n          <mat-expansion-panel>\n            [expanded]=\"step === 0\" (opened)=\"setStep(0)\" showToggle>\n            <mat-expansion-panel-header>\n              <mat-panel-title class=\"card-title\">\n                Administration and support\n              </mat-panel-title>\n              <mat-panel-description class=\"card-description\">\n                How messages with pharmacies are handled\n              </mat-panel-description>\n            </mat-expansion-panel-header>\n            <mat-card-content>\n              <div fxLayout=\"column\" max-width=\"80%\" class=\"container-content\">\n                <div class=\"card-header-text\">Messages regarding prescription are regularly exchanged with pharmacies, usually by fax and occasionally\n                  by phone. How often are these messages managed and by whom, both incoming and outgoing?\n                </div>\n                <div fxLayout=\"row\" class=\"form-group\">\n                  <div class=\"input-description\">Receive and process messages from pharmacy</div>\n                  <mat-form-field>\n                    <input matInput value=\"\" placeholder=\"Daily frequency\" class=\"input-number\" />\n                  </mat-form-field>\n                  <mat-form-field>\n                    <mat-select placeholder=\"by whom?\">\n                      <mat-option *ngFor=\"let role of roles\" [value]=\"role.value\">\n                        {{role.viewValue}}\n                      </mat-option>\n                    </mat-select>\n                  </mat-form-field>\n                  <mat-form-field>\n                    <input matInput value=\"\" placeholder=\"Average daily number\" class=\"input-number\" />\n                  </mat-form-field>\n                  <mat-form-field>\n                    <input matInput value=\"\" placeholder=\"Proportion urgent\" class=\"input-number\" />\n                  </mat-form-field>\n                  <mat-form-field>\n                    <input matInput value=\"\" placeholder=\"Total time\" class=\"input-number\" />\n                  </mat-form-field>\n                </div>\n                <div fxLayout=\"row\" class=\"form-group\">\n                  <div class=\"input-description\">Process messages authorized by physician</div>\n                  <mat-form-field>\n                    <input matInput value=\"\" placeholder=\"Daily frequency\" class=\"input-number\" />\n                  </mat-form-field>\n                  <mat-form-field>\n                    <input matInput value=\"\" placeholder=\"By whom?\" class=\"input-number\" />\n                  </mat-form-field>\n                  <mat-form-field>\n                    <input matInput value=\"\" placeholder=\"Average daily number\" class=\"input-number\" />\n                  </mat-form-field>\n                  <mat-form-field>\n                    <input matInput value=\"\" placeholder=\"Proportion urgent\" class=\"input-number\" />\n                  </mat-form-field>\n                  <mat-form-field>\n                    <input matInput value=\"\" placeholder=\"Total time\" class=\"input-number\" />\n                  </mat-form-field>\n                </div>\n              </div>\n            </mat-card-content>\n          </mat-expansion-panel>\n        </mat-accordion>\n        <mat-accordion>\n          <mat-expansion-panel>\n            [expanded]=\"step === 0\" (opened)=\"setStep(0)\" showToggle>\n            <mat-expansion-panel-header>\n              <mat-panel-title class=\"card-title\">\n                Prescription preparation\n              </mat-panel-title>\n              <mat-panel-description class=\"card-description\">\n                How the choice of prescriptions is supported by external sources\n              </mat-panel-description>\n            </mat-expansion-panel-header>\n            <mat-card-content>\n              <div fxLayout=\"column\" max-width=\"80%\" xLayoutAlign=\"center center\" class=\"container-content\">\n                <div class=\"card-header-text\">As you consider which medications to prescribe, how often do you consult with the following sources? Where\n                  do you find the information you need? (Please check that apply.)\n                </div>\n                <div fxLayout=\"row\" class=\"form-group\">\n                  <div class=\"input-description\">Your patient's medical history</div>\n                  <mat-form-field>\n                    <input matInput value=\"\" placeholder=\"Fraction of Prescriptions\" class=\"input-number\" />\n                  </mat-form-field>\n                  <mat-form-field>\n                    <input matInput value=\"\" placeholder=\"Typical duration (mins)\" class=\"input-number\" />\n                  </mat-form-field>\n                  <mat-checkbox>Within EMR</mat-checkbox>\n                  <mat-checkbox>Linked to EMR</mat-checkbox>\n                  <mat-checkbox>Separate desktop applicaiton</mat-checkbox>\n                  <mat-checkbox>Mobile app</mat-checkbox>\n                </div>\n                <div fxLayout=\"row\" class=\"form-group\">\n                  <div class=\"input-description\">Clinical decision support</div>\n                  <mat-form-field>\n                    <input matInput value=\"\" placeholder=\"Fraction of Prescriptions\" class=\"input-number\" />\n                  </mat-form-field>\n                  <mat-form-field>\n                    <input matInput value=\"\" placeholder=\"Typical duration (mins)\" class=\"input-number\" />\n                  </mat-form-field>\n                  <mat-checkbox>Within EMR</mat-checkbox>\n                  <mat-checkbox>Linked to EMR</mat-checkbox>\n                  <mat-checkbox>Separate desktop applicaiton</mat-checkbox>\n                  <mat-checkbox>Mobile app</mat-checkbox>\n                </div>\n                <div fxLayout=\"row\" class=\"form-group\">\n                  <div class=\"input-description\">Provincial formulary</div>\n                  <mat-form-field>\n                    <input matInput value=\"\" placeholder=\"Fraction of Prescriptions\" class=\"input-number\" />\n                  </mat-form-field>\n                  <mat-form-field>\n                    <input matInput value=\"\" placeholder=\"Typical duration (mins)\" class=\"input-number\" />\n                  </mat-form-field>\n                  <mat-checkbox>Within EMR</mat-checkbox>\n                  <mat-checkbox>Linked to EMR</mat-checkbox>\n                  <mat-checkbox>Separate desktop applicaiton</mat-checkbox>\n                  <mat-checkbox>Mobile app</mat-checkbox>\n                </div>\n                <div fxLayout=\"row\" class=\"form-group\">\n                  <div class=\"input-description\">Provincial drug system</div>\n                  <mat-form-field>\n                    <input matInput value=\"\" placeholder=\"Fraction of Prescriptions\" class=\"input-number\" />\n                  </mat-form-field>\n                  <mat-form-field>\n                    <input matInput value=\"\" placeholder=\"Typical duration (mins)\" class=\"input-number\" />\n                  </mat-form-field>\n                  <mat-checkbox>Within EMR</mat-checkbox>\n                  <mat-checkbox>Linked to EMR</mat-checkbox>\n                  <mat-checkbox>Separate desktop applicaiton</mat-checkbox>\n                  <mat-checkbox>Mobile app</mat-checkbox>\n                </div>\n              </div>\n            </mat-card-content>\n          </mat-expansion-panel>\n        </mat-accordion>\n        <mat-accordion>\n          <mat-expansion-panel>\n            [expanded]=\"step === 0\" (opened)=\"setStep(0)\" showToggle>\n            <mat-expansion-panel-header>\n              <mat-panel-title class=\"card-title\">\n                Medication selection and specification\n              </mat-panel-title>\n              <mat-panel-description class=\"card-description\">\n                How details of the prescription are specified\n              </mat-panel-description>\n            </mat-expansion-panel-header>\n            <mat-card-content>\n              <div fxLayout=\"column\" class=\"container-content\">\n                <div class=\"card-header-text\">How do you specify the details of a prescription?\n                </div>\n                <div fxLayout=\"row\" class=\"form-group\">\n                  <div class=\"input-description short-form\">Drug name</div>\n                  <mat-form-field class=\"input-number\">\n                    <input matInput value=\"\" placeholder=\"Duration (mins)\" class=\"input-number\" />\n                  </mat-form-field>\n                  <div fxLayout=\"column\" class=\"low-spacer\">\n                    <mat-checkbox>Write by hand</mat-checkbox>\n                    <mat-checkbox>Type in EMR (free text)</mat-checkbox>\n                    <mat-checkbox>Drop down menu</mat-checkbox>\n                    <mat-checkbox>Check boxes</mat-checkbox>\n                    <mat-checkbox>Search on name/code</mat-checkbox>\n                  </div>\n                </div>\n                <div fxLayout=\"row\" class=\"form-group\">\n                  <div class=\"input-description short-form\">Dosage</div>\n                  <mat-form-field class=\"input-number\">\n                    <input matInput value=\"\" placeholder=\"Duration (mins)\" class=\"input-number\" />\n                  </mat-form-field>\n                  <div fxLayout=\"column\" class=\"low-spacer\">\n                    <mat-checkbox>Write by hand</mat-checkbox>\n                    <mat-checkbox>Type in EMR (free text)</mat-checkbox>\n                    <mat-checkbox>Drop down menu</mat-checkbox>\n                    <mat-checkbox>Check boxes</mat-checkbox>\n                    <mat-checkbox>Search on name/code</mat-checkbox>\n                  </div>\n                </div>\n                <div fxLayout=\"row\" class=\"form-group\">\n                  <div class=\"input-description short-form\">Refills</div>\n                  <mat-form-field class=\"input-number\">\n                    <input matInput value=\"\" placeholder=\"Duration (mins)\" class=\"input-number\" />\n                  </mat-form-field>\n                  <div fxLayout=\"column\" class=\"low-spacer\">\n                    <mat-checkbox>Write by hand</mat-checkbox>\n                    <mat-checkbox>Type in EMR (free text)</mat-checkbox>\n                    <mat-checkbox>Drop down menu</mat-checkbox>\n                    <mat-checkbox>Check boxes</mat-checkbox>\n                    <mat-checkbox>Search on name/code</mat-checkbox>\n                  </div>\n                </div>\n                <div fxLayout=\"row\" class=\"form-group\">\n                  <div class=\"input-description short-form\">Route</div>\n                  <mat-form-field class=\"input-number\">\n                    <input matInput value=\"\" placeholder=\"Duration (mins)\" class=\"input-number\" />\n                  </mat-form-field>\n                  <div fxLayout=\"column\" class=\"low-spacer\">\n                    <mat-checkbox>Write by hand</mat-checkbox>\n                    <mat-checkbox>Type in EMR (free text)</mat-checkbox>\n                    <mat-checkbox>Drop down menu</mat-checkbox>\n                    <mat-checkbox>Check boxes</mat-checkbox>\n                    <mat-checkbox>Search on name/code</mat-checkbox>\n                  </div>\n                </div>\n                <div fxLayout=\"row\" class=\"form-group\">\n                  <div class=\"input-description short-form\">Instructions</div>\n                  <mat-form-field class=\"input-number\">\n                    <input matInput value=\"\" placeholder=\"Duration (mins)\" />\n                  </mat-form-field>\n                  <div fxLayout=\"column\">\n                    <mat-checkbox>Write by hand</mat-checkbox>\n                    <mat-checkbox>Type in EMR (free text)</mat-checkbox>\n                    <mat-checkbox>Drop down menu</mat-checkbox>\n                    <mat-checkbox>Check boxes</mat-checkbox>\n                    <mat-checkbox>Search on name/code</mat-checkbox>\n                  </div>\n                </div>\n              </div>\n            </mat-card-content>\n          </mat-expansion-panel>\n        </mat-accordion> -->\n        <button width=\"80px\" (click)=\"goBack()\" mat-raised-button color=\"primary\">go back</button>\n        <button (click)=\"updatePrescriber()\" mat-raised-button color=\"primary\">save</button>\n      </div>\n    </div>\n  </div>\n</form>\n<p>prescriberform value: {{ prescriber.name | json}}</p>"

/***/ }),

/***/ "./src/app/participants/prescriber.component.ts":
/*!******************************************************!*\
  !*** ./src/app/participants/prescriber.component.ts ***!
  \******************************************************/
/*! exports provided: PrescriberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrescriberComponent", function() { return PrescriberComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _participant_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./participant.model */ "./src/app/participants/participant.model.ts");
/* harmony import */ var _participant_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./participant-api.service */ "./src/app/participants/participant-api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PrescriberComponent = /** @class */ (function () {
    function PrescriberComponent(route, prescriberService, location, fb) {
        this.route = route;
        this.prescriberService = prescriberService;
        this.location = location;
        this.fb = fb;
        this.roles = [
            { value: 'physician', viewValue: 'Physician' },
            { value: 'assistant', viewValue: 'Assistant' },
            { value: 'other', viewValue: 'Other' }
        ];
        this.step = 0;
        this.createForm();
    }
    PrescriberComponent.prototype.setStep = function (index) {
        this.step = index;
    };
    PrescriberComponent.prototype.nextStep = function () {
        this.step++;
    };
    PrescriberComponent.prototype.prevStep = function () {
        this.step--;
    };
    // invoked in constructor
    PrescriberComponent.prototype.createForm = function () {
        this.prescriberForm = this.fb.group({
            name: '',
            street: '',
            city: '',
            province: '',
            statisticsForm: this.fb.group({
                total_pt_daily: '',
                total_pt_weekly: '',
                std_pt_daily: '',
                std_pt_weekly: '',
                ext_pt_daily: '',
                ext_pt_weekly: '',
                prop_ongoing_daily: '',
                prop_ongoing_weekly: '',
                total_rx_daily: '',
                total_rx_weekly: '',
                new_rx_daily: '',
                new_rx_weekly: '',
                renew_rx_daily: '',
                renew_rx_weekly: '',
                auth_rx_daily: '',
                auth_rx_weekly: '',
                multi_rx_daily: '',
                multi_rx_weekly: '',
                clarify_rx_daily: '',
                clarify_rx_weekly: '',
                request_rx_daily: '',
                request_rx_weekly: '',
                other_rx_daily: '',
                other_rx_weekly: '',
                other_rx_note: ''
            }),
            deliveryForm: this.fb.group({
                print: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](false),
                fax: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](false),
                phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](false),
                e_rx: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](false)
            }),
            adminForm: this.fb.group({
                pharmacy_msgs_freq: '',
                pharmacy_msgs_role: this.roles,
                pharmacy_msgs_num: '',
                pharmacy_msgs_percent: '',
                pharmacy_msgs_time: '',
                physician_msgs_freq: '',
                physician_msgs_role: this.roles,
                physician_msgs_num: '',
                physician_msgs_percent: '',
                physician_msgs_time: '',
            }),
            preparationForm: this.fb.group({
                pt_hx_freq: '',
                pt_hx_time: '',
                pt_hx_in_emr: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](false),
                pt_hx_linked_emr: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](false),
                pt_hx_desktop: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](false),
                pt_hx_mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](false),
                cds_hx_freq: '',
                cds_hx_time: '',
                cds_hx_in_emr: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](false),
                cds_hx_linked_emr: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](false),
                cds_hx_desktop: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](false),
                cds_hx_mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](false),
                frmlry_hx_freq: '',
                frmlry_hx_time: '',
                cfrmlry_hx_in_emr: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](false),
                frmlry_hx_linked_emr: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](false),
                frmlry_hx_desktop: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](false),
                frmlry_hx_mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](false),
                dis_hx_freq: '',
                dis_hx_time: '',
                dis_hx_in_emr: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](false),
                dis_hx_linked_emr: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](false),
                dis_hx_desktop: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](false),
                dis_hx_mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](false)
            }),
            specificationForm: this.fb.group({
                name_time: '',
                name_hand: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](false),
                name_freetext: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](false),
                name_menu: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](false),
                name_checkbox: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](false),
                name_search: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](false),
                dosage_time: '',
                dosage_hand: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](false),
                dosage_freetext: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](false),
                dosage_menu: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](false),
                dosage_checkbox: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](false),
                dosage_search: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](false),
                refills_time: '',
                refills_hand: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](false),
                refills_freetext: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](false),
                refills_menu: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](false),
                refills_checkbox: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](false),
                refills_search: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](false),
                route_time: '',
                route_hand: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](false),
                route_freetext: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](false),
                route_menu: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](false),
                route_checkbox: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](false),
                route_search: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](false),
                instruction_time: '',
                instruction_hand: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](false),
                instruction_freetext: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](false),
                instruction_menu: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](false),
                instruction_checkbox: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](false),
                instruction_search: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](false)
            }),
        });
    };
    // invoked when called on initialization
    PrescriberComponent.prototype.ngOnChanges = function () {
        this.rebuildForm();
    };
    // This takes whatever values are in the template form
    // and adds that back into the form model
    PrescriberComponent.prototype.rebuildForm = function () {
        // const temp_controls = this.prescriberForm['statisticsForm'].controls;
        // for (const field in temp_controls) { // 'field' is a string
        //   if (temp_controls.hasOwnProperty(field)) {
        //     temp_controls.key(field).value = prscbr.demographics[field]; // 'control' is a FormControl
        //   }
        // }
        this.prescriberForm.reset({
            name: this.prescriber.name,
            street: this.prescriber.street,
            city: this.prescriber.city,
            province: this.prescriber.province
        });
    };
    // set the prescriber for teh first time
    PrescriberComponent.prototype.setPrescriber = function (prescriber) {
        this.prescriber = prescriber;
        this.rebuildForm();
    };
    // Retrieves data from the server side database
    PrescriberComponent.prototype.getPrescriber = function () {
        var _this = this;
        // const id = +this.route.snapshot.paramMap.get('id');
        var id = 8;
        this.prescriberService.getPrescriber(id)
            .subscribe(function (prescriber) {
            console.log('participant is ' + prescriber.name); // do stuff with our data here.
            // ....
            // asign data to our class property in the end
            // so it will be available to our template
            _this.prescriber = prescriber;
        });
    };
    // Updates the database with the latest values from the form model
    PrescriberComponent.prototype.onSubmit = function () {
        this.updatePrescriber();
        this.rebuildForm();
    };
    PrescriberComponent.prototype.updatePrescriber = function () {
        this.prescriberService.updatePrescriber(this.prescriber).subscribe();
    };
    PrescriberComponent.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _participant_model__WEBPACK_IMPORTED_MODULE_3__["Prescriber"])
    ], PrescriberComponent.prototype, "prescriber", void 0);
    PrescriberComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-prescriber-component',
            template: __webpack_require__(/*! ./prescriber.component.html */ "./src/app/participants/prescriber.component.html"),
            styles: [__webpack_require__(/*! ./participant.component.css */ "./src/app/participants/participant.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _participant_api_service__WEBPACK_IMPORTED_MODULE_4__["ParticipantApiService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], PrescriberComponent);
    return PrescriberComponent;
}());



/***/ }),

/***/ "./src/app/participants/prescribers.component.html":
/*!*********************************************************!*\
  !*** ./src/app/participants/prescribers.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxFlex=\"500px\">\n  <!-- <br>\n  <div class=\"container\">\n    <div fxLayout=\"column\" fxLayoutGap=\"20px\" fxLayout.gt-md=\"row\" fxLayoutAlgin=\"space-around center\" class=\"content\">\n      <div class=\"blocks\" >\n        <button button=\"submit\" mat-raised-button color=\"primary\">\n          <mat-icon>add</mat-icon> Add Prescriber\n        </button>\n      </div>\n    </div>\n  </div>\n  <br> -->\n  <div class=\"container\" fxLayout=\"column\" fxLayoutAlign=\"top left\">\n    <mat-card class=\"card\">\n      <mat-card-title fxLayout.gt-xs=\"row\" fxLayout.xs=\"column\">\n        <h3>Participating Prescribers</h3>\n      </mat-card-title>\n      <mat-card-content>\n        <div class=\"example-container mat-elevation-z8\">\n          <mat-table #table [dataSource]=\"dataSource\">\n            <ng-container matColumnDef=\"id\">\n              <mat-header-cell *matHeaderCellDef>id</mat-header-cell>\n              <mat-cell *matCellDef=\"let element\" > {{ element.id }} </mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"name\">\n              <mat-header-cell *matHeaderCellDef>Name</mat-header-cell>\n              <mat-cell *matCellDef=\"let element\"  (click)= \"selectPrescriber(element.id)\" > {{ element.name }} </mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"street\">\n              <mat-header-cell *matHeaderCellDef>Street</mat-header-cell>\n              <mat-cell *matCellDef=\"let element\"> {{ element.street }} </mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"city\">\n              <mat-header-cell *matHeaderCellDef>City</mat-header-cell>\n              <mat-cell *matCellDef=\"let element\"> {{ element.city }} </mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"province\">\n              <mat-header-cell *matHeaderCellDef>Province</mat-header-cell>\n              <mat-cell *matCellDef=\"let element\"> {{ element.province }} </mat-cell>\n            </ng-container>\n            <mat-header-row *matHeaderRowDef=\"displayedColumns\">\n            </mat-header-row>\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\" >\n            </mat-row>\n          </mat-table>\n        </div>\n      </mat-card-content>\n    </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/participants/prescribers.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/participants/prescribers.component.ts ***!
  \*******************************************************/
/*! exports provided: PrescribersComponent, PrescriberDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrescribersComponent", function() { return PrescribersComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrescriberDataSource", function() { return PrescriberDataSource; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _participant_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./participant-api.service */ "./src/app/participants/participant-api.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PrescribersComponent = /** @class */ (function () {
    function PrescribersComponent(participantApi, prescriberService) {
        this.participantApi = participantApi;
        this.prescriberService = prescriberService;
        this.displayedColumns = ['id', 'name', 'street', 'city', 'province'];
        this.dataSource = new PrescriberDataSource(this.participantApi);
    }
    // this version loads a subscription
    // tour of heroes defers that until the get() function
    // so this version, copied from the auth0 app budles it all into one function call
    PrescribersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.prescribersSubs = this.participantApi
            .getPrescribers()
            .subscribe(function (res) {
            _this.prescribers = res;
        }, console.error);
    };
    PrescribersComponent.prototype.selectPrescriber = function (id) {
        var _this = this;
        this.prescriberService.getPrescriber(id)
            .subscribe(function (prescriber) {
            console.log('participant is ' + prescriber.name); // do stuff with our data here.
            //     // ....
            //     // asign data to our class property in the end
            //     // so it will be available to our template
            _this.selectedPrescriber = prescriber;
        });
        console.log('prescriber ' + id + ' chosen');
    };
    PrescribersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-prescribers-component',
            template: __webpack_require__(/*! ./prescribers.component.html */ "./src/app/participants/prescribers.component.html"),
            styles: [__webpack_require__(/*! ./participants.component.css */ "./src/app/participants/participants.component.css")],
        }),
        __metadata("design:paramtypes", [_participant_api_service__WEBPACK_IMPORTED_MODULE_2__["ParticipantApiService"],
            _participant_api_service__WEBPACK_IMPORTED_MODULE_2__["ParticipantApiService"]])
    ], PrescribersComponent);
    return PrescribersComponent;
}());

// datasource for the prescribers
var PrescriberDataSource = /** @class */ (function (_super) {
    __extends(PrescriberDataSource, _super);
    function PrescriberDataSource(participantApiService) {
        var _this = _super.call(this) || this;
        _this.participantApiService = participantApiService;
        return _this;
    }
    PrescriberDataSource.prototype.connect = function () {
        return this.participantApiService.getPrescribers();
    };
    PrescriberDataSource.prototype.disconnect = function () {
    };
    return PrescriberDataSource;
}(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["DataSource"]));



/***/ }),

/***/ "./src/app/welcome/welcome.component.css":
/*!***********************************************!*\
  !*** ./src/app/welcome/welcome.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/welcome/welcome.component.html":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\t<h1>PrescribeIT Study</h1>\n\t<p>\n\t\tThis study assesses the improvments in prescribing and dispensing practices attributable to the introduction and adoption\n\t\tof PrescribeIT.\n\t\t<br> Select a participant to begin data entry.\n\t</p>\n\t<div *ngIf=\"login\" fxLayout=\"row\" fxLayoutGap=\"20px\" fxLayout.lt-md=\"column\" fxLayoutAlign=\"center start\">\n\t\t<app-login></app-login>\n\t</div>\n\t<div *ngIf=\"selectedPrescriber\" fxLayout=\"row\" fxLayoutGap=\"20px\" fxLayout.lt-md=\"column\" fxLayoutAlign=\"center start\">\n\t\t<app-prescriber-component [prescriber]=\"selectedPrescriber\">Prescriber here</app-prescriber-component>\n\t</div>\n\t<div *ngIf=\"selectedDispenser\" fxLayout=\"row\" fxLayoutGap=\"20px\" fxLayout.lt-md=\"column\" fxLayoutAlign=\"center start\">\n\t\t<app-dispenser-component [dispenser]=\"selectedDispenser\">Prescriber here\n\t\t\t</app-dispenser-component>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _participants_participant_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../participants/participant.model */ "./src/app/participants/participant.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
        this.login = true;
    };
    WelcomeComponent.prototype.setPrescriber = function (prescriber) {
        this.login = false;
        this.selectedPrescriber = prescriber;
        this.selectedDispenser = null;
    };
    WelcomeComponent.prototype.setDispenser = function (dispenser) {
        this.login = false;
        this.selectedDispenser = dispenser;
        this.selectedPrescriber = null;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _participants_participant_model__WEBPACK_IMPORTED_MODULE_1__["Prescriber"])
    ], WelcomeComponent.prototype, "prescriber", void 0);
    WelcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/welcome/welcome.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: true,
    API_URL: 'http://symulationstage.com'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/MiniMc/webServers/rxit_forms/rxit-forms/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map