/// <reference path="knockout.d.ts" />
// this works! but is all javascript. keep for reference
//function PersonViewModel(){
//    this.firstName = ko.observable('');
//    this.lastName = ko.observable('');
//    this.fullName = ko.computed(function () {
//            return this.firstName() + " " + this.lastName();
//        }, this);
//}
// Whoa! CHeckit! THis is the typescript version of above and it works too! 
// but no constructor...
//class PersonViewModel {
//    firstName = ko.observable('');
//    lastName = ko.observable('');
//    fullName = ko.computed(() => {
//        return this.firstName() + " " + this.lastName();
//    });
//}
//var vm = new PersonViewModel();
//ko.applyBindings(vm);
// HAS a constructor AND the button!
var PersonViewModel = (function () {
    function PersonViewModel(firstName, lastName) {
        var _this = this;
        this.firstName = ko.observable('');
        this.lastName = ko.observable('');
        this.fullName = ko.observable('');
        this.firstName = ko.observable(firstName);
        this.lastName = ko.observable(lastName);
        this.fullName = ko.computed(function () {
            return _this.firstName() + " " + _this.lastName();
        });
    }
    PersonViewModel.prototype.capitalizeLastName = function () {
        this.lastName(this.lastName().toUpperCase());
    };
    return PersonViewModel;
}());
var vm = new PersonViewModel("Sam", "Smooth");
ko.applyBindings(vm);
//# sourceMappingURL=hello.js.map