(function () {
    "use strict";

    angular
        .module("commonServices")
        .factory("categoryDetailsService",
                ["$resource",
                 categoryDetailsService]);

    function categoryDetailsService($resource) {
        return $resource("/WCF/Categories/CategoriesService.svc/GetCategoryDetailsViewModel");
    }
}());