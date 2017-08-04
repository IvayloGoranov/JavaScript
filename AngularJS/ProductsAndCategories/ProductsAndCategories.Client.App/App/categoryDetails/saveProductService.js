(function () {
    "use strict";

    angular
        .module("commonServices")
        .factory("saveProductService",
                ["$resource",
                 saveProductService]);

    function saveProductService($resource) {
        return $resource("/WCF/Products/ProductsService.svc/SaveProduct");
    }
}());