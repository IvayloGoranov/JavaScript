'use strict';

angular.module('socialNetwork.users.authentication', [])

    .factory('authentication', ['$http', '$q', 'BASE_URL', function($http, $q, BASE_URL) {
        console.log(BASE_URL);

        function registerUser(user){
            var deferred = $q.defer();

            $http.post(BASE_URL + 'users/register', user)
                 .then(function(response){
                     deferred.resolve(response.data);
                 }, function() {

                 });

            return deferred.promise;
        }

        function loginUser(user){
            var deferred = $q.defer();

            $http.post(BASE_URL + 'users/login', user)
                .then(function(response){
                    deferred.resolve(response.data);
                }, function() {

                });

            return deferred.promise;
        }

        function logoutUser(){

        }

        return {
            registerUser: registerUser,
            loginUser: loginUser,
            logoutUser: logoutUser
        };
    }]);
