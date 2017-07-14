'use strict';

angular.module('socialNetwork.common.footer', [])
    .directive('footer', function() {
        return {
            restrict: 'A',
            replace: true,
            templateUrl: 'common/footer-directive.html'
        };
});

