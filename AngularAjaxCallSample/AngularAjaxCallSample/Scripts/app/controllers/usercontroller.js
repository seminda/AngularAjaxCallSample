
(function (angular) {
    angular.module('main').controller('UserController', ['$scope', 'userService', function ($scope, userService) {
        $scope.usersList = [];
        $scope.selectedUsers = [];
        
        userService.getUsers(null, function (data) {
            $scope.usersList = [];
            angular.forEach(data, function (userData) {
                $scope.usersList.push(userData);
            });
            $scope.$apply();
        });
    }]);
})(angular);