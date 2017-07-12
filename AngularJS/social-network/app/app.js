  'use strict';

// Declare app level module which depends on views, and components
angular.module('socialNetwork', [
  'ngRoute',
  'socialNetwork.common',
  'socialNetwork.users.identity',
  'socialNetwork.home',
  'socialNetwork.newsFeed'
])
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.otherwise({redirectTo: '/'});
    }])
    .constant('BASE_URL', 'http://softuni-social-network.azurewebsites.net/api/');
