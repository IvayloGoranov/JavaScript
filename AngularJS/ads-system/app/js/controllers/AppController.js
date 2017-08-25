'use strict';

app.controller('AppController',
    function ($scope, authService) {
        $scope.authService = authService;
    }
);
