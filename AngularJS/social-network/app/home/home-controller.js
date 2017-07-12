'use strict';

angular.module('socialNetwork.home', [
    'socialNetwork.users.authentication'
])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'home/home.html',
            controller: 'HomeCtrl'
        });
    }])

    .controller('HomeCtrl', ['$scope', '$location', 'authentication', function($scope, $location, authentication) {
        $scope.login = function(user){
            authentication.loginUser(user)
                .then(function(loggedInUser) {
                    console.log(loggedInUser);
                    $location.path('/newsFeed');
                });
        };

        $scope.register = function(user){
            authentication.registerUser(user)
                          .then(function(registeredUser){
                              console.log(registeredUser);
                          });

        };

        $scope.logout = function(){
            authentication.logoutUser();
        };
    }]);
