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
var key_model_1 = require('../keys/key.model');
var GeneratorService = (function () {
    function GeneratorService() {
        var _this = this;
        this.key = new key_model_1.Key();
        this.generate = function (passwordAmount, letterAmount, numberAmount, symbolAmount) {
            // symbols 33-47
            // numbers 48-57
            // letters 65-90, 97-122
            for (var i = 0; i < passwordAmount; i++) {
                for (var j = 0; j < letterAmount; j++) {
                    var flipBit = Math.round(Math.random());
                    var letterToAdd = void 0;
                    if (flipBit === 1) {
                        var charCode = Math.floor(90 - (Math.random() * 26));
                        letterToAdd = String.fromCharCode(charCode);
                        _this.key.value += letterToAdd;
                    }
                    else if (flipBit === 0) {
                        var charCode = Math.floor(122 - (Math.random() * 26));
                        letterToAdd = String.fromCharCode(charCode);
                        _this.key.value += letterToAdd;
                    }
                    else {
                        console.log('flipBit: Something went horribly wrong');
                    }
                }
            }
            return _this.shuffle(_this.key.value);
        };
        this.shuffle = function (keyValue) {
            var keyValueArr = keyValue.split('');
            for (var i = 0; i < keyValueArr.length; i++) {
                var randomIndex = Math.floor(Math.random() * keyValueArr.length - 1);
                var tmp = keyValueArr[i];
                keyValueArr[i] = keyValueArr[randomIndex];
                keyValueArr[randomIndex] = tmp;
            }
            console.log(keyValueArr.join(''));
            return keyValueArr.join('');
        };
        // TODO
        this.swap = function () {
        };
    }
    GeneratorService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], GeneratorService);
    return GeneratorService;
}());
exports.GeneratorService = GeneratorService;
//# sourceMappingURL=generator.service.js.map