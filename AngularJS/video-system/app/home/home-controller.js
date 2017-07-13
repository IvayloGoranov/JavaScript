/*jshint esversion: 6 */
'use strict';

angular.module('videoSystem.home', [
    'videoSystem.videos'
])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'home/home.html',
            controller: 'HomeCtrl'
        });
    }])

    .controller('HomeCtrl', ['$scope', 'videos', function($scope, videos) {
        $scope.videos = videos.getAll();
        $scope.categories = videos.getAllCategories();
        $scope.dates = videos.getAllDates();

        $scope.filter = function(filterValue){
            if(filterValue){
                $scope.videos = videos.filter(filterValue.category, filterValue.date, filterValue.hasSubtitles);
            }
        };
    }]);
