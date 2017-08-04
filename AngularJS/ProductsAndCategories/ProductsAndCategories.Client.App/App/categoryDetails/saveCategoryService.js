(function () {
    "use strict";

    angular
        .module("commonServices")
        .factory("saveCategoryService",
                ["$resource",
                 saveCategoryService]);

    function saveCategoryService($resource) {
        return $resource("/WCF/Categories/CategoriesService.svc/SaveCategory");
    }
}());

