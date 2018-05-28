webpackJsonp([1],{

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionDetailsPageModule", function() { return TransactionDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transaction_details__ = __webpack_require__(287);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TransactionDetailsPageModule = /** @class */ (function () {
    function TransactionDetailsPageModule() {
    }
    TransactionDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__transaction_details__["a" /* TransactionDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__transaction_details__["a" /* TransactionDetailsPage */]),
            ],
        })
    ], TransactionDetailsPageModule);
    return TransactionDetailsPageModule;
}());

//# sourceMappingURL=transaction-details.module.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TransactionDetailsPage = /** @class */ (function () {
    function TransactionDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.transaction = navParams.get("item");
    }
    TransactionDetailsPage.prototype.dismissThis = function () {
        this.navCtrl.pop();
    };
    TransactionDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-transaction-details',template:/*ion-inline-start:"/Users/feliecedellonezelaya/Documents/BBLWebDevTraining2018/Ionic/Day2/myApp/src/pages/transaction-details/transaction-details.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Transaction Details for Account {{ transaction.accountNumber }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-label>Transaction Date</ion-label>\n    <ion-item>{{ transaction.dateOfTransaction | date }}</ion-item>\n\n    <ion-label>Transaction Type</ion-label>\n    <ion-item>{{ transaction.transactionType }}</ion-item>\n\n    <ion-label>Amount</ion-label>\n    <ion-item>{{ transaction.amount | currency }}</ion-item>\n\n  </ion-list>\n\n  <button (click)="dismissThis()" ion-button block>Close</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/feliecedellonezelaya/Documents/BBLWebDevTraining2018/Ionic/Day2/myApp/src/pages/transaction-details/transaction-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], TransactionDetailsPage);
    return TransactionDetailsPage;
}());

//# sourceMappingURL=transaction-details.js.map

/***/ })

});
//# sourceMappingURL=1.js.map