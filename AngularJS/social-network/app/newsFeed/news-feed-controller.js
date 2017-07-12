'use strict';

angular.module('socialNetwork.newsFeed', [
    'socialNetwork.newsFeed.feed'
])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/newsFeed', {
            templateUrl: 'newsFeed/news-feed.html',
            controller: 'NewsFeedCtrl'
        });
    }])
    .controller('NewsFeedCtrl', ['$scope', 'feed', function($scope, feed) {
        feed.latest()
            .then(function (latestFeed) {
                $scope.latestFeed = latestFeed;
            });
    }]);