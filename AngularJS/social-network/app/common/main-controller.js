'use strict';

angular.module('socialNetwork.common', [])
    .controller('MainCtrl', ['$scope', 'identity', function($scope, identity) {
        $scope.isAuthenticated = identity.isAuthenticated;

        identity.getCurrentUser()
            .then(function (user) {
                $scope.currentUser = user;
            });
    }]);
