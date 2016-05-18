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
var submitForm_service_1 = require('./submitForm.service');
var LeftPanel = (function () {
    function LeftPanel(formService) {
        var _this = this;
        this.formService = formService;
        this.account = { user: "", password: "" };
        this.id = 1;
        this.onSubmit = function () {
            // console.log( this.account.user );
            // console.log( this.account.password );
            _this.getFormService();
        };
    }
    LeftPanel.prototype.getFormService = function () {
        this.service = this.formService.postData();
    };
    LeftPanel = __decorate([
        core_1.Component({
            selector: 'left-panel',
            templateUrl: '../templates/left-panel.template.html',
            providers: [submitForm_service_1.SubmitForm]
        }), 
        __metadata('design:paramtypes', [submitForm_service_1.SubmitForm])
    ], LeftPanel);
    return LeftPanel;
}());
exports.LeftPanel = LeftPanel;
//# sourceMappingURL=left-panel.component.js.map