$(function () {
    function viewModel() {
        this.firstName = ko.observable('Steve');
        this.lastName = ko.observable('Smith');
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