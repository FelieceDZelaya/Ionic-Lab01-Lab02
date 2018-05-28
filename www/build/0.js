webpackJsonp([0],{

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithdrawalPageModule", function() { return WithdrawalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__withdrawal__ = __webpack_require__(288);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WithdrawalPageModule = /** @class */ (function () {
    function WithdrawalPageModule() {
    }
    WithdrawalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__withdrawal__["a" /* WithdrawalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__withdrawal__["a" /* WithdrawalPage */]),
            ],
        })
    ], WithdrawalPageModule);
    return WithdrawalPageModule;
}());

//# sourceMappingURL=withdrawal.module.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WithdrawalPage; });
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




var WithdrawalPage = /** @class */ (function () {
    function WithdrawalPage(navCtrl, navParams, atmService, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.atmService = atmService;
        this.toastCtrl = toastCtrl;
        this.accNum = '';
        this.amount = 0;
        this.currentBalance = 0;
        this.atmResponse = {};
        this.atmResponseBalance = {};
        this.accNum = navParams.get("acc");
    }
    WithdrawalPage.prototype.ngOnInit = function () {
        this.withdrawalForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            amount: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](0, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required)
        });
    };
    WithdrawalPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.atmService.getCurrentBalance(this.atmService.accountNumber).subscribe(function (resp) {
            _this.currentBalance = resp.currentBalance;
            _this.atmService.accountName = resp.accountName;
        });
    };
    WithdrawalPage.prototype.doWithdrawal = function (theForm) {
        this.amount = theForm.value.amount;
        if (this.amount < this.currentBalance) {
            this.makeAWithdraw(this.atmService.getAccountNumber(), this.amount);
            this.navCtrl.pop();
        }
        else {
            var toast = this.toastCtrl.create({ message: 'Amount exceeds available balance', duration: 3000 });
            toast.present();
        }
    };
    WithdrawalPage.prototype.makeAWithdraw = function (acct, amount) {
        var _this = this;
        this.atmService.withDraw(acct, amount).then(function (result) {
            _this.atmResponse = result;
            _this.currentBalance = result.currentBalance;
        });
    };
    WithdrawalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WithdrawalPage');
    };
    WithdrawalPage.prototype.dismissThis = function () {
        this.navCtrl.pop();
    };
    WithdrawalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-withdrawal',template:/*ion-inline-start:"/Users/feliecedellonezelaya/Documents/BBLWebDevTraining2018/Ionic/Day2/myApp/src/pages/withdrawal/withdrawal.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Withdrawal</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <h3>Account: {{ accNum }}</h3>\n    <p>Available Balance {{ currentBalance | currency }}</p>\n      <form [formGroup]="withdrawalForm" (ngSubmit)="doWithdrawal(withdrawalForm)">\n  \n          <ion-input formControlName="amount" placeholder="Enter amount"></ion-input>\n           <button ion-button round type="submit">Perform Withdrawal</button>\n      </form>\n      <!-- <button (click)="dismissThis()" ion-button block>Close</button> -->\n  </ion-content>\n'/*ion-inline-end:"/Users/feliecedellonezelaya/Documents/BBLWebDevTraining2018/Ionic/Day2/myApp/src/pages/withdrawal/withdrawal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_atmservice_atmservice__["a" /* AtmserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], WithdrawalPage);
    return WithdrawalPage;
}());

//# sourceMappingURL=withdrawal.js.map

/***/ })

});
//# sourceMappingURL=0.js.map