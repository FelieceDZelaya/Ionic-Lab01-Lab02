webpackJsonp([4],{

/***/ 112:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/deposit/deposit.module": [
		281,
		3
	],
	"../pages/login/login.module": [
		282,
		2
	],
	"../pages/transaction-details/transaction-details.module": [
		283,
		1
	],
	"../pages/withdrawal/withdrawal.module": [
		284,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 154;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    urlEndPoint: "http://localhost:3000/atm",
    title: "Atm Project",
    apiKey: "heregoesastrongpasswordfortheApiKey"
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionsListingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_atmservice_atmservice__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TransactionsListingPage = /** @class */ (function () {
    function TransactionsListingPage(navCtrl, atmService) {
        this.navCtrl = navCtrl;
        this.atmService = atmService;
        this.transactions = [];
    }
    TransactionsListingPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.atmService.getLastOperations(this.atmService.getAccountNumber()).subscribe(function (data) {
            _this.transactions = data.transactions;
        });
    };
    TransactionsListingPage.prototype.goToDetails = function (item) {
        this.navCtrl.push("TransactionDetailsPage", { item: item });
    };
    TransactionsListingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-transactions-listing',template:/*ion-inline-start:"/Users/feliecedellonezelaya/Documents/BBLWebDevTraining2018/Ionic/Day2/myApp/src/pages/transactions-listing/transactions-listing.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Account Acitvity\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let item of transactions" (click)="goToDetails(item)">\n      \n      {{ item.transactionType }} -- {{ item.amount | currency }}\n\n    </button>\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/feliecedellonezelaya/Documents/BBLWebDevTraining2018/Ionic/Day2/myApp/src/pages/transactions-listing/transactions-listing.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_atmservice_atmservice__["a" /* AtmserviceProvider */]])
    ], TransactionsListingPage);
    return TransactionsListingPage;
}());

//# sourceMappingURL=transactions-listing.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_atmservice_atmservice__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl, atmService) {
        this.navCtrl = navCtrl;
        this.atmService = atmService;
        this.atmService.logOff();
        this.navCtrl.setRoot("LoginPage");
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/feliecedellonezelaya/Documents/BBLWebDevTraining2018/Ionic/Day2/myApp/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/feliecedellonezelaya/Documents/BBLWebDevTraining2018/Ionic/Day2/myApp/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_atmservice_atmservice__["a" /* AtmserviceProvider */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AtmOperationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_atmservice_atmservice__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AtmOperationsPage = /** @class */ (function () {
    function AtmOperationsPage(navCtrl, atmService) {
        this.navCtrl = navCtrl;
        this.atmService = atmService;
        this.currentBalance = 0;
        this.transactions = [];
    }
    AtmOperationsPage.prototype.ionViewCanEnter = function () {
        return this.atmService.accountValid;
    };
    AtmOperationsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.atmService.getCurrentBalance(this.atmService.accountNumber).subscribe(function (resp) {
            _this.currentBalance = resp.currentBalance;
            _this.atmService.accountName = resp.accountName;
        });
    };
    AtmOperationsPage.prototype.getAccountName = function () {
        return this.atmService.accountName;
    };
    AtmOperationsPage.prototype.getAccountBalance = function () {
        return this.atmService.getCurrentBalance(this.atmService.accountNumber);
    };
    AtmOperationsPage.prototype.goToWithdrawal = function () {
        this.navCtrl.push("WithdrawalPage", { acc: this.atmService.accountNumber });
    };
    AtmOperationsPage.prototype.goToDeposit = function () {
        this.navCtrl.push("DepositPage", { acc: this.atmService.accountNumber });
    };
    AtmOperationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-atm-operations',template:/*ion-inline-start:"/Users/feliecedellonezelaya/Documents/BBLWebDevTraining2018/Ionic/Day2/myApp/src/pages/atm-operations/atm-operations.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Operations</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2>Welcome {{ getAccountName() }}</h2>\n  <p>\n    Curr Bal {{ currentBalance | currency }}\n  </p>\n\n  <div padding>\n    <button ion-button round color="secondary" (click)="goToWithdrawal()">Withdrawal</button>\n    <button ion-button round color="secondary" (click)="goToDeposit()">Deposit</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/feliecedellonezelaya/Documents/BBLWebDevTraining2018/Ionic/Day2/myApp/src/pages/atm-operations/atm-operations.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_atmservice_atmservice__["a" /* AtmserviceProvider */]])
    ], AtmOperationsPage);
    return AtmOperationsPage;
}());

//# sourceMappingURL=atm-operations.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__transactions_listing_transactions_listing__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__atm_operations_atm_operations__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__atm_operations_atm_operations__["a" /* AtmOperationsPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__transactions_listing_transactions_listing__["a" /* TransactionsListingPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/feliecedellonezelaya/Documents/BBLWebDevTraining2018/Ionic/Day2/myApp/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Operations" tabIcon="apps"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Transactions" tabIcon="list"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="LogOff" tabIcon="log-out"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/feliecedellonezelaya/Documents/BBLWebDevTraining2018/Ionic/Day2/myApp/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_transactions_listing_transactions_listing__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_atm_operations_atm_operations__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_atmservice_atmservice__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_httpinterceptor_httpinterceptor__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_transactions_listing_transactions_listing__["a" /* TransactionsListingPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_atm_operations_atm_operations__["a" /* AtmOperationsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/deposit/deposit.module#DepositPageModule', name: 'DepositPage', segment: 'deposit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/transaction-details/transaction-details.module#TransactionDetailsPageModule', name: 'TransactionDetailsPage', segment: 'transaction-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/withdrawal/withdrawal.module#WithdrawalPageModule', name: 'WithdrawalPage', segment: 'withdrawal', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_transactions_listing_transactions_listing__["a" /* TransactionsListingPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_atm_operations_atm_operations__["a" /* AtmOperationsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_atmservice_atmservice__["a" /* AtmserviceProvider */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_11__providers_httpinterceptor_httpinterceptor__["a" /* HttpinterceptorProvider */],
                    multi: true
                },
                __WEBPACK_IMPORTED_MODULE_11__providers_httpinterceptor_httpinterceptor__["a" /* HttpinterceptorProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { TabsPage } from '../pages/tabs/tabs';
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = "LoginPage";
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/feliecedellonezelaya/Documents/BBLWebDevTraining2018/Ionic/Day2/myApp/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/feliecedellonezelaya/Documents/BBLWebDevTraining2018/Ionic/Day2/myApp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpinterceptorProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_atmservice_atmservice__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HttpinterceptorProvider = /** @class */ (function () {
    function HttpinterceptorProvider(http, atmService) {
        this.http = http;
        this.atmService = atmService;
        console.log('Hello HttpinterceptorProvider Provider');
    }
    HttpinterceptorProvider.prototype.intercept = function (req, next) {
        var token = this.atmService.getToken();
        var authReq = req.clone({
            headers: req.headers.set('bbank-apiKey', __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiKey)
                .set('bbank-secure', token)
        });
        // send cloned request with header to the next handler.
        return next.handle(authReq);
    };
    HttpinterceptorProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__providers_atmservice_atmservice__["a" /* AtmserviceProvider */]])
    ], HttpinterceptorProvider);
    return HttpinterceptorProvider;
}());

//# sourceMappingURL=httpinterceptor.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AtmserviceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AtmserviceProvider = /** @class */ (function () {
    function AtmserviceProvider(http) {
        this.http = http;
        this.onUpdatedTransactions$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.onUpdateAccountNumber$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.END_POINT = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].urlEndPoint;
        this.accountValid = undefined;
    }
    AtmserviceProvider.prototype.getToken = function () { return this.token !== undefined ? this.token : ''; };
    AtmserviceProvider.prototype.setAccountNumber = function (acct, pin) {
        var _this = this;
        return new Promise(function (succ, reject) {
            _this.accountExists(acct, pin).then(function (resp) {
                if (resp.status === 0) {
                    _this.accountNumber = acct;
                    _this.accountValid = true;
                    _this.token = resp.token;
                    _this.onUpdateAccountNumber$.next();
                    succ(true);
                }
                else {
                    _this.accountValid = false;
                    reject(false);
                }
            });
        });
    };
    AtmserviceProvider.prototype.getAccountNumber = function () {
        return this.accountNumber;
    };
    AtmserviceProvider.prototype.isAlive = function () {
        return this.http.get(this.END_POINT);
    };
    AtmserviceProvider.prototype.accountExists = function (acct, pin) {
        var _this = this;
        return new Promise(function (success, reject) {
            var FINDACCOUNT = '/find/' + acct + '/pin/' + pin;
            _this.http.get(_this.END_POINT + FINDACCOUNT)
                .subscribe(function (resp) { success(resp); }, function (err) { reject(err); });
        });
    };
    AtmserviceProvider.prototype.getCurrentBalance = function (acct) {
        var BALANCE = "/" + acct;
        return this.http.get(this.END_POINT + BALANCE);
    };
    AtmserviceProvider.prototype.withDraw = function (acct, amount) {
        var _this = this;
        var WITHDRAW = "/withdraw/" + acct + "/amount/" + amount;
        return new Promise(function (success, reject) {
            _this.http.get(_this.END_POINT + WITHDRAW).subscribe(function (resp) { success(resp); }, function (err) { reject(err); }, function () {
                console.log('onUpdatedTransactions.next()');
                _this.onUpdatedTransactions$.next();
            });
        });
    };
    AtmserviceProvider.prototype.deposit = function (acct, amount) {
        var _this = this;
        var DEPOSIT = "/deposit/" + acct + "/amount/" + amount;
        return new Promise(function (success, reject) {
            _this.http.get(_this.END_POINT + DEPOSIT).subscribe(function (resp) { success(resp); }, function (err) { reject(err); }, function () {
                console.log('onUpdatedTransactions.next()');
                _this.onUpdatedTransactions$.next();
            });
        });
    };
    AtmserviceProvider.prototype.getLastOperations = function (acct) {
        var TRANSACTIONS = "/transactions/" + acct;
        return this.http.get(this.END_POINT + TRANSACTIONS);
    };
    AtmserviceProvider.prototype.logOff = function () {
        this.accountNumber = '';
        this.accountName = '';
        this.currentBalance = 0;
        this.token = undefined;
        this.accountValid = undefined;
    };
    AtmserviceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], AtmserviceProvider);
    return AtmserviceProvider;
}());

//# sourceMappingURL=atmservice.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map