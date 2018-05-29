webpackJsonp([3],{

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepositPageModule", function() { return DepositPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__deposit__ = __webpack_require__(285);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DepositPageModule = /** @class */ (function () {
    function DepositPageModule() {
    }
    DepositPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__deposit__["a" /* DepositPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__deposit__["a" /* DepositPage */]),
            ],
        })
    ], DepositPageModule);
    return DepositPageModule;
}());

//# sourceMappingURL=deposit.module.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DepositPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
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




var DepositPage = /** @class */ (function () {
    function DepositPage(navCtrl, navParams, atmService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.atmService = atmService;
        this.alertCtrl = alertCtrl;
        this.accNum = '';
        this.currentBalance = 0;
        this.atmResponse = {};
        this.atmResponseBalance = {};
        this.accNum = navParams.get("acc");
    }
    DepositPage.prototype.ngOnInit = function () {
        this.depositForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            amount: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](0, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required)
        });
    };
    DepositPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.atmService.getCurrentBalance(this.atmService.accountNumber).subscribe(function (resp) {
            _this.currentBalance = resp.currentBalance;
            _this.atmService.accountName = resp.accountName;
        });
    };
    DepositPage.prototype.doDeposit = function (theForm) {
        var _this = this;
        this.amount = theForm.value.amount;
        this.makeADeposit(this.atmService.getAccountNumber(), this.amount);
        this.alertCtrl.create({
            title: "Success",
            subTitle: "Deposit Successful",
            buttons: [{ text: 'Ok', handler: function (data) { _this.navCtrl.pop(); } }]
        }).present();
    };
    DepositPage.prototype.makeADeposit = function (acct, amount) {
        var _this = this;
        this.atmService.deposit(acct, amount).then(function (result) {
            _this.atmResponse = result;
            _this.currentBalance = result.currentBalance;
        });
    };
    DepositPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DepositPage');
    };
    DepositPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-deposit',template:/*ion-inline-start:"/Users/feliecedellonezelaya/Documents/BBLWebDevTraining2018/Ionic/Day2/myApp/src/pages/deposit/deposit.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Deposit</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <h3>Account: {{ accNum }}</h3>\n    <p>Available Balance {{ currentBalance | currency }}</p>\n    <form [formGroup]="depositForm" (ngSubmit)="doDeposit(depositForm)">\n        <ion-list>\n            <ion-item>\n              <ion-label floating>Enter amount</ion-label>\n              <ion-input type="text" formControlName="amount"></ion-input>\n            </ion-item>\n        </ion-list>\n        <button ion-button round type="submit" [disabled]="!depositForm.valid">Perform Deposit</button>\n    </form>\n</ion-content>\n'/*ion-inline-end:"/Users/feliecedellonezelaya/Documents/BBLWebDevTraining2018/Ionic/Day2/myApp/src/pages/deposit/deposit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_atmservice_atmservice__["a" /* AtmserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], DepositPage);
    return DepositPage;
}());

//# sourceMappingURL=deposit.js.map

/***/ })

});
//# sourceMappingURL=3.js.map