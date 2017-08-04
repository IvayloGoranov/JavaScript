(function () {
    "use strict";

    angular
        .module("commonServices")
        .factory("deleteCategoryService",
                ["$resource",
                 deleteCategoryService]);

    function deleteCategoryService($resource) {
        return $resource("/WCF/Categories/CategoriesService.svc/DeleteCategory");
    }
}());