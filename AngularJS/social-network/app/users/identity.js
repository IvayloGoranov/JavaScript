'use strict';

angular.module('socialNetwork.users.identity', [])
    .factory('identity', ['$http', '$q', 'BASE_URL', function($http, $q, BASE_URL) {
        var deferred = $q.defer();

        var accessToken = "PWgCqRD40vnorasO46-tyVVpHg0ptqzRZS5SBTGA4jHEVwcWAhQk-vksdodr9HaQG4s1t949IHVY5Z4bo2RI_y02OSvAR-T2w-fcbHn2o-U2MLmTx4UcekwvmpL0gM4x0OJ3Zp-jQnBTVvF2z8ENehMjWrwdWQECwywHpqhNv7qJfpvUiOKwsJlt6hoAQWK8knSVMYTyFWAydYDlpEbFieGf2iX3PrnR_QZz6gLpkjT9LqL7NRUWh8orSD3VsR0XugocDjlCjopkArin_St4hQDSQE_PchQ_yYeOFpu7ZErDwXuwp75ZX50_MQU9edDFfz4vVGAhSiaIA8I6LE-9UUpOIqFcNqp6szxYufJHx5UKKOetx0NYaIrFhEF9PyiZ7FpWgTdPkeykvdVZtu6-MeRLfEaTXgANBLmGB_n57RhblwbFaRRE-jZu7pit0Rk40gpe8nI0-XG0x1wvhWQeEx8_f26vZwN2C56LuzluzyFPipSkFEzqSs7vS-NVIPOo";
        $http.defaults.headers.common.Authorization = 'Bearer ' + accessToken;

        var currentUser = undefined;
        $http.get(BASE_URL + 'me')
            .then(function (response) {
                currentUser = response.data;
                deferred.resolve(currentUser);
        });

        var userName = "tsenko";

        return {
            getCurrentUser: function (){
                if(currentUser){
                    return $q.when(currentUser);
                }else{
                    return deferred.promise;
                }
            },
            isAuthenticated: function(){
                return true;
            }
        };
    }]);
