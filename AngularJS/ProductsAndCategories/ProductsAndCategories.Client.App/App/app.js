(function () {
    'use strict';

    var app = angular.module('productsAndCategories',
        [
            "commonServices",
            "ui.router"
        ]);

    app.config(["$stateProvider",
                "$urlRouterProvider",

                function ($stateProvider, $urlRouterProvider) {
                    var CONTROLLER_VIEW_MODEL_NAME = 'vm';

                    $urlRouterProvider.otherwise("/");

                    $stateProvider
                        .state("categoriesList", {
                            url: "/",
                            templateUrl: "App/categoriesList/categoriesListView.html",
                            controller: "CategoriesListController",
                            controllerAs: CONTROLLER_VIEW_MODEL_NAME
                        })
                        .state("categoryDetails", {
                            url: "/categoryDetails/:categoryId",
                            templateUrl: "App/categoryDetails/categoryDetailsView.html",
                            controller: "CategoryDetailsController",
                            controllerAs: CONTROLLER_VIEW_MODEL_NAME
                        })
                }]);

    app.constant('jQuery', $);
})();