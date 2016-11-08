$(function () {
    function friend(name) {
        return {
            name: ko.observable(name)
        };
    }


    function viewModel() {
        this.firstName = ko.observable('Steve');
        this.lastName = ko.observable('Smith');
        this.friends = ko.observableArray([new friend("Steve"), new friend("Annie")]);


        this.fullName = ko.computed(function () {
            return this.firstName() + " " + this.lastName();
        }, this)
        this.twitterAlias = ko.observable('@fu');
        this.twitterUrl = ko.computed(function () {
            return "https://twitter.com/" + this.twitterAlias().replace('@', '');
        }, this)

        this.capitalizeTwitterAlias = function () {
            var currentValue = this.twitterAlias();
            this.twitterAlias(currentValue.toUpperCase());
        }
    };
    ko.applyBindings(viewModel);
});