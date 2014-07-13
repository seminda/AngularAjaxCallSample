(function (angular) {
    angular.module('main').service('userService', function (ajaxService) {
        var self = this;


        self.insertUser = function (data, callback) {
            return ajaxService.post({
                url: '/api/users',
                cache: false,
                data: data
            }).done(function (result) {
                if (typeof callback === "function")
                    callback(result);
            });
        };

        self.getUsers = function (data, callback) {

            return ajaxService.get({
                url: '/api/users'
            }).done(function (result) {
                if (typeof callback === "function")
                    callback(result);
            }).fail(function (ex) {

            });
        };

        self.updateUser = function (data, callback) {
            return ajaxService.put({
                url: '/api/users',
                cache: false,
                data: data
            }).done(function (result) {
                if (typeof callback === "function")
                    callback(result);
            });
        };

        
    });
})(angular);