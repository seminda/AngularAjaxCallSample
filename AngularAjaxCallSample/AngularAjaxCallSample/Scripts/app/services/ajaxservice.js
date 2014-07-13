(function (angular, $) {
    angular.module('main').service('ajaxService', function ($http) {
        var self = this;
        self.get = function (options) {
            options.type = 'get';
            return $.ajax(options);
        };
        self.post = function (options) {
            options.type = 'post';
            return $.ajax(options);
        };
        self.put = function (options) {
            options.type = 'put';
            return $.ajax(options);
        };
    });
})(angular, jQuery);