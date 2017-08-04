(function () {
    "use strict";

    angular
        .module("commonServices")
        .factory("changeOrderService",
                ["$resource",
                 saveCategoryService]);

    function saveCategoryService($resource) {
        return $resource("/WCF/Categories/CategoriesService.svc/ChangeCategoryOrder");
    }
}());