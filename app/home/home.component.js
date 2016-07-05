"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var primeng_1 = require('primeng/primeng');
var generator_service_1 = require('../generator/generator.service');
var Home = (function () {
    function Home(viewContainerRef, generatorService) {
        var _this = this;
        this.displayDialog = false;
        this.resizeDialog = false;
        this.dragDialog = false;
        this.showDialog = function () {
            _this.displayDialog = true;
            _this.effect = 'fade';
        };
        this.onSubmit = function () {
            if (_this.passwordAmount < 1) {
                _this.passwordAmount = 1;
            }
            if (_this.letterAmount < 1) {
                _this.letterAmount = 32;
            }
            if (_this.numberAmount < 1) {
                _this.numberAmount = 32;
            }
            if (_this.symbolAmount < 1) {
                _this.symbolAmount = 0;
            }
            _this.generatorService.generate(_this.passwordAmount, _this.letterAmount, _this.numberAmount, _this.symbolAmount);
        };
        this.viewContainerRef = viewContainerRef;
        this.generatorService = generatorService;
    }
    Home = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './app/home/home.component.html',
            styleUrls: ['./app/home/home.component.css'],
            directives: [
                primeng_1.InputText,
                primeng_1.Dialog,
                primeng_1.Button
            ],
            providers: [
                generator_service_1.GeneratorService
            ]
        }), 
        __metadata('design:paramtypes', [core_1.ViewContainerRef, generator_service_1.GeneratorService])
    ], Home);
    return Home;
}());
exports.Home = Home;
//# sourceMappingURL=home.component.js.map