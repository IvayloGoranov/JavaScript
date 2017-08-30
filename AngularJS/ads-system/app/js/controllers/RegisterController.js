'use strict';

app.controller('RegisterController',
    function ($scope, $location, authService, notifyService, townsService) {
        $scope.userData = {townId: null};
        $scope.towns = townsService.getTowns();

        $scope.register = function(userData) {
            authService.register(userData,
                function success() {
                    notifyService.showInfo("Register successful");
                    $location.path("/");
                },

                function error(err) {
                    notifyService.showError("User registration failed", err);
                }
            );
        };
    }
);