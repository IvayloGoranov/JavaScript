  'use strict';

// Declare app level module which depends on views, and components
angular.module('videoSystem', [
  'ngRoute',
  'videoSystem.home'
])
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.otherwise({redirectTo: '/'});
    }]);
