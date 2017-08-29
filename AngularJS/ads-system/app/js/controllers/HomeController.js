'use strict';

app.controller('HomeController',
    function ($scope, $rootScope, adsService, notifyService, pageSize) {
        $scope.adsParams = {
            'startPage' : 1,
            'pageSize' : pageSize
        };

        $scope.reloadAds = function() {
            adsService.getAds(
                $scope.adsParams,
                function success(data) {
                    // TODO: put the ads in the scope
                },
                function error(err) {
                    // TODO: display an error message
                }
             );
        };

        $scope.reloadAds();

        $scope.$on("categorySelectionChanged", function(event, selectedCategoryId) {
            $scope.adsParams.categoryId = selectedCategoryId;
            $scope.adsParams.startPage = 1;
            $scope.reloadAds();
        });

        $scope.$on("townSelectionChanged", function(event, selectedTownId) {
            $scope.adsParams.townId = selectedCategoryId;
            $scope.adsParams.startPage = 1;
            $scope.reloadAds(); 
        });
    }
);