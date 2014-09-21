

(function (angular) {
    angular.module('main').service('userService',['ajaxService', function (ajaxService) {
        var self = this;
       
        self.getUsers = function (data, callback) {

            return ajaxService.get({
                url: '/api/users'
            }).done(function (result) {
                if (typeof callback === "function")
                    callback(result);
            }).fail(function (ex) {

            });
        };

        self.insertUser = function (data, callback) {
            
            return ajaxService.post({
                url: '/api/users',
                data: data
            }).done(function (result) {
                if (typeof callback === "function")
                    callback(result);
            }).fail(function (ex) {

            });
           
        };
        
        self.updateUser = function (data, callback) {

            return ajaxService.put({
                url: '/api/users',
                data:data
            }).done(function (result) {
                if (typeof callback === "function")
                    callback(result);
            }).fail(function (ex) {

            });

        };

    }]);
})(angular);