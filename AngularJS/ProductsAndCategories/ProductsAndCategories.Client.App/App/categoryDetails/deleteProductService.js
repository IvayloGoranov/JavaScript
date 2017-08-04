(function () {
    "use strict";

    angular
        .module("commonServices")
        .factory("deleteProductService",
                ["$resource",
                 deleteProductService]);

    function deleteProductService($resource) {
        return $resource("/WCF/Products/ProductsService.svc/DeleteProduct");
    }
}());