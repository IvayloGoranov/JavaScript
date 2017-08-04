(function () {
    "use strict";

    var app = angular.module("commonServices");

    app.factory("categoriesListService",
                            [
                                "$resource",
                                categoriesListService
                            ]);

    function categoriesListService($resource) {
        return $resource("/WCF/Categories/CategoriesService.svc/GetCategoriesListViewModel");
    }
}());