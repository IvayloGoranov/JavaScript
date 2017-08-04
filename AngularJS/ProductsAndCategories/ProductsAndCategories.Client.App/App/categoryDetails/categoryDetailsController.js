(function () {
    "use strict";
    angular
        .module("productsAndCategories")
        .controller("CategoryDetailsController",
                    ["$stateParams",
                     "$state",
                     "categoryDetailsService",
                     "saveCategoryService",
                     "deleteProductService",
                     "saveProductService",
                     "deleteCategoryService",
                     categoryDetailsController]);

    function categoryDetailsController($stateParams, $state, categoryDetailsService, saveCategoryService,
        deleteProductService, saveProductService, deleteCategoryService) {
        var categoryId = $stateParams.categoryId;
        var message = $stateParams.message;
        var vm = this;
        vm.model = {};
        vm.model = getCategoryDetailsData();
        vm.SuccessMessage = message;

        vm.selectColor = function (colorValue) {

            vm.removeMessages();

            vm.model.CategoryItem.Color = colorValue;

            saveCategoryService.save({}, vm.model.CategoryItem, function (data) {
                if (data.IsError) {

                    vm.model.ErrorMessage = data.ErrorMessage;
                }

                getCategoryDetailsData();
                vm.SuccessMessage = "Color changed";
            });
        };

        vm.deleteProduct = function (product) {

            vm.removeMessages();

            deleteProductService.save({}, product, function (data) {
                if (data.IsError) {

                    vm.model.ErrorMessage = data.ErrorMessage;
                }

                getCategoryDetailsData();
                vm.SuccessMessage = "Product deleted";
            });
        };

        vm.saveProduct = function (product) {

            vm.removeMessages();

            saveProductService.save({}, product, function (data) {
                if (data.IsError) {

                    vm.model.ErrorMessage = data.ErrorMessage;
                }

                getCategoryDetailsData();
                vm.SuccessMessage = "Product saved";
            });
        };

        vm.addProduct = function () {

            vm.removeMessages();

            var newProduct = {
                Name: vm.model.NewProductName,
                Price: vm.model.NewProductPrice,
                CategoryId: categoryId
            };

            saveProductService.save({}, newProduct, function (data) {
                if (data.IsError) {

                    vm.model.ErrorMessage = data.ErrorMessage;
                }

                getCategoryDetailsData();
                vm.SuccessMessage = "Product added";
            });
        };

        vm.saveCategory = function () {

            vm.removeMessages();

            saveCategoryService.save({}, vm.model.CategoryItem, function (data) {
                if (data.IsError) {

                    vm.model.ErrorMessage = data.ErrorMessage;
                } else {

                    vm.SuccessMessage = "Category saved";
                }

                $state.go("categoryDetails", { categoryId: data.Id, message: "Category saved" });
            });

        };

        vm.deleteCategory = function () {

            vm.removeMessages();

            deleteCategoryService.save({}, vm.model.CategoryItem, function (data) {
                if (data.IsError) {

                    vm.model.ErrorMessage = data.ErrorMessage;
                }

                $state.go("categoriesList", { message: "Category deleted" });
            });
        };

        vm.removeMessages = function () {

            vm.model.ErrorMessage = "";
            vm.model.SuccessMessage = "";
        };

        function getCategoryDetailsData() {
            categoryDetailsService.get({ categoryId }, function (data) {
                if (data.IsError) {

                    vm.model.ErrorMessage = data.ErrorMessage;
                }

                vm.model = angular.copy(data);
            });
        }
    }
}());