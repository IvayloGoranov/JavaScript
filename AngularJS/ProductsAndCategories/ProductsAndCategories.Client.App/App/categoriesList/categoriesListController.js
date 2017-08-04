(function () {
    "use strict";
    angular
        .module("productsAndCategories")
        .controller("CategoriesListController",
                    ["$q",
                     "$scope",
                     "categoriesListService",
                     "productsService",
                     "deleteCategoryService",
                     "saveCategoryService",
                     "categoryDetailsService",
                     "changeOrderService",
                     categoriesListController]);

    function categoriesListController($q, $scope, categoriesListService, productsService,
        deleteCategoryService, saveCategoryService, categoryDetailsService, changeOrderService) {
        var DefaultItemsCount = 5;
        var vm = this;
        vm.model = {};
        vm.model = getCategoriesListData();

        //$scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {
        //    fixRowLinks();
        //});

        vm.filterByName = function () {

            vm.removeMessages();

            getCategoriesListData(DefaultItemsCount, vm.model.NameFilter);
        };

        vm.resetNameFilter = function () {

            vm.removeMessages();

            getCategoriesListData();
        };

        vm.showCategoryInfo = function (category) {

            vm.removeMessages();

            var isCategoryDetailsVisible = category.IsCategoryDetailsVisible;

            vm.hideCategoryInfo();

            category.IsCategoryDetailsVisible = isCategoryDetailsVisible ? false : true;

            if (category.IsCategoryDetailsVisible) {
                productsService.save({}, vm.model, function (data) {
                    if (data.IsError) {

                        vm.model.ErrorMessage = data.ErrorMessage;
                    }

                    vm.model = angular.copy(data);
                });
            }
        };

        vm.hideCategoryInfo = function () {
            for (var item in vm.model.ItemList) {
                vm.model.ItemList[item].IsCategoryDetailsVisible = false;
            }
        }

        vm.selectAll = function () {

            vm.removeMessages();

            vm.model.IsCheckedAll = vm.model.IsCheckedAll ? false : true;

            for (var item in vm.model.ItemList) {
                if (vm.model.IsCheckedAll) {
                    vm.model.ItemList[item].IsChecked = true;

                } else {
                    vm.model.ItemList[item].IsChecked = false;
                }
            }
        }

        vm.showPrices = function () {

            vm.removeMessages();

            vm.model.IsPriceShown = vm.model.IsPriceShown ? false : true;
        }

        vm.selectCategory = function (category) {

            vm.removeMessages();

            category.IsChecked = category.IsChecked ? false : true;
        }

        vm.uncheckCategories = function () {
            for (var item in vm.model.ItemList) {
                vm.model.ItemList[item].IsChecked = false;
            }
        }

        vm.deleteCategories = function () {

            vm.removeMessages();

            var promiseArray = [];
            for (var item in vm.model.ItemList) {
                if (vm.model.ItemList[item].IsChecked) {
                    var categoryToDelete = {
                        Id: vm.model.ItemList[item].CategoryID
                    };

                    var currentPromise = deleteCategoryService.save({}, categoryToDelete, function (data) {
                        if (data.IsError) {

                            vm.model.ErrorMessage = data.ErrorMessage;
                        }
                    }).$promise;

                    promiseArray.push(currentPromise);
                }
            }

            $q.all(promiseArray)
              .then(function () {
                  getCategoriesListData();
                  vm.model.IsCheckedAll = false;
                  vm.SuccessMessage = "Category(s) deleted";
                }, function (error) {
                    console.log("Error occured")
                });
        }

        vm.selectColor = function (category, colorValue) {

            vm.removeMessages();

            switch(colorValue) {
                case 0:
                    category.SelectedColorClass = "green-background";
                    break;
                case 1:
                    category.SelectedColorClass = "blue-background";
                    break;
                case 2:
                    category.SelectedColorClass = "red-background";
                    break;
                default:
                    category.SelectedColorClass = "green-background";
            }

            categoryDetailsService.get({ categoryId: category.CategoryID }, function (data) {
                if (data.IsError) {

                    vm.model.ErrorMessage = data.ErrorMessage;
                }

                var categoryItem = data.CategoryItem;
                categoryItem.Color = colorValue;
                saveCategoryService.save({}, categoryItem, function (data) {
                    if (data.IsError) {

                        vm.model.ErrorMessage = data.ErrorMessage;
                    }

                    vm.SuccessMessage = "Color changed";
                });
            });
        };

        vm.viewMore = function () {

            vm.removeMessages();

            var itemsCount = vm.model.ItemsToShowCount + DefaultItemsCount;

            getCategoriesListData(itemsCount, null);
        };

        vm.moveUp = function (category) {
            var currentOrderNo = category.OrderNo;
            var previousCategory = {};
            previousCategory.OrderNo = 0;

            for (var i = 0; i < vm.model.ItemList.length; i++) {
                if (vm.model.ItemList[i].OrderNo < currentOrderNo) {
                    if (vm.model.ItemList[i].OrderNo > previousCategory.OrderNo) {
                        previousCategory = vm.model.ItemList[i];
                    }
                }
            }

            category.OrderNo = previousCategory.OrderNo;
            previousCategory.OrderNo = currentOrderNo;

            changeOrderService.save({}, { Id: category.CategoryID, OrderNo: category.OrderNo }, function (data) {
                if (data.IsError) {

                    vm.model.ErrorMessage = data.ErrorMessage;
                }

                changeOrderService.save({}, { Id: previousCategory.CategoryID, OrderNo: previousCategory.OrderNo }, function (data) {
                    if (data.IsError) {

                        vm.model.ErrorMessage = data.ErrorMessage;
                    }

                    getCategoriesListData();
                });
            });

            //let row = $(e.currentTarget).parent().parent().parent();
            //row.fadeOut(function () {
            //    row.insertBefore(row.prev());
            //    row.fadeIn();
            //    fixRowLinks();
            //});
        };

        vm.moveDown = function (category) {
            var currentOrderNo = category.OrderNo;
            var nextCategory = {};
            nextCategory.OrderNo = Number.MAX_VALUE;

            for (var i = 0; i < vm.model.ItemList.length; i++) {
                if (vm.model.ItemList[i].OrderNo > currentOrderNo) {
                    if (vm.model.ItemList[i].OrderNo < nextCategory.OrderNo) {
                        nextCategory = vm.model.ItemList[i];
                    }
                }
            }

            category.OrderNo = nextCategory.OrderNo;
            nextCategory.OrderNo = currentOrderNo;

            changeOrderService.save({}, { Id: category.CategoryID, OrderNo: category.OrderNo }, function (data) {
                if (data.IsError) {

                    vm.model.ErrorMessage = data.ErrorMessage;
                }

                changeOrderService.save({}, { Id: nextCategory.CategoryID, OrderNo: nextCategory.OrderNo }, function (data) {
                    if (data.IsError) {

                        vm.model.ErrorMessage = data.ErrorMessage;
                    }

                    getCategoriesListData();
                });
            });
            
            //let row = $(e.currentTarget).parent().parent().parent();
            //row.fadeOut(function () {
            //    row.insertAfter(row.next());
            //    row.fadeIn();
            //    fixRowLinks();
            //});
        }

        vm.removeMessages = function () {

            vm.model.ErrorMessage = "";
            vm.model.SuccessMessage = "";
        };

        function getCategoriesListData(itemsCount, nameFilter) {
            itemsCount = itemsCount ? itemsCount : DefaultItemsCount;
            categoriesListService.get({ itemsCount, nameFilter }, function (data) {
                if (data.IsError) {

                    vm.model.ErrorMessage = data.ErrorMessage;
                }

                vm.model = angular.copy(data);
                console.log(vm.model);
            });
        }

        function fixRowLinks() {
            // Show all links in the table
            let allArrowSpans = $('#categories-table span');
            allArrowSpans.css('display', 'inline');

            // Hide [Up] link in first table data row
            let tableRows = $('#categories-table .row');
            let firstUpArrowSpan = $(tableRows[0]).find('.up-arrow');
            firstUpArrowSpan.css('display', 'none');

            // Hide the [Down] link in the last table row
            let lastDownArrowSpan = $(tableRows[tableRows.length - 1]).find('.down-arrow');
            lastDownArrowSpan.css('display', 'none');
        }
    }
}());