(function () {
    "use strict";

    var app = angular.module("commonServices");

    app.factory("productsService",
                            [
                                "$resource",
                                productsService
                            ]);

    function productsService($resource) {
        return $resource("/WCF/Categories/CategoriesService.svc/GetCategoriesListViewModelWithProductsList");
    }
}());