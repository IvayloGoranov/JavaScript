using System.Collections.Generic;
using System.Linq;
using System;

using ProductsAndCategories.BusinessObject;
using ProductsAndCategories.BusinessObject.Interfaces;
using ProductsAndCategories.Client.App.ViewModels;
using ProductsAndCategories.Client.App.ViewModels.DataModels;
using ProductsAndCategories.Ordering.Data;
using ProductsAndCategories.Data.Enums;

namespace ProductsAndCategories.Client.App.Utils
{
    public class CategoriesList : ICategoriesList
    {
        private ICategories categoriesBusinessObject;
        private IProducts productsBusinessObject;

        public CategoriesList(ICategories categoriesBusinessObject,
            IProducts productsBusinessObject)
        {
            this.categoriesBusinessObject = categoriesBusinessObject;
            this.productsBusinessObject = productsBusinessObject;
        }

        public CategoriesList()
            : this(new Categories(), new Products())
        {
        }

        public CategoriesListViewModel GetCategoriesListViewModel(
            int itemsCount = GlobalConstants.GlobalConstants.DefaultItemsCount,
            string nameFilter = null)
        {
            var viewModel = new CategoriesListViewModel();

            viewModel.IsPriceShown = true;
            viewModel.ItemsToShowCount = itemsCount;
            viewModel.NameFilter = nameFilter;

            var categories = this.categoriesBusinessObject.GetFilteredCategories(itemsCount, nameFilter);

            var categoriesListUIItems = new List<CategoriesListUIItem>();
            foreach (var category in categories)
            {
                var categoryUIItem = this.ConvertToCategoriesListUIItem(category);

                viewModel.ItemList.Add(categoryUIItem);
            }

            viewModel.TotalPrices = categories.Sum(x => x.ProductsTotalPrice);
            viewModel.AllItemsCount = this.categoriesBusinessObject.GetCount();
            viewModel.MaxOrderNo = this.categoriesBusinessObject.GetMaxOrderNo();

            return viewModel;
        }

        public CategoriesListViewModel GetCategoriesListViewModelWithProductsList(CategoriesListViewModel viewModel)
        {
            if (viewModel == null)
            {
                throw new InvalidOperationException("CategoriesListViewModel cannot be null");
            }

            var categoryWithVisibleProducts = viewModel.ItemList.FirstOrDefault(x => x.IsCategoryDetailsVisible);
            if (categoryWithVisibleProducts == null)
            {
                throw new InvalidOperationException("No category selected to show products list");
            }

            categoryWithVisibleProducts.ProductItems = this.productsBusinessObject.GetProductsByCategoryID(categoryWithVisibleProducts.CategoryID);

            return viewModel;
        }

        private CategoriesListUIItem ConvertToCategoriesListUIItem(CategoryItem category)
        {
            var categoryUIItem = new CategoriesListUIItem();
            categoryUIItem.CategoryID = category.Id;
            categoryUIItem.CategoryName = category.Name;
            categoryUIItem.ProductsTotalPrice = category.ProductsTotalPrice;
            categoryUIItem.OrderNo = category.OrderNo;

            switch (category.Color)
            {
                case Color.Green:
                    categoryUIItem.SelectedColorClass = "green-background";
                    break;
                case Color.Blue:
                    categoryUIItem.SelectedColorClass = "blue-background";
                    break;
                case Color.Red:
                    categoryUIItem.SelectedColorClass = "red-background";
                    break;
                default:
                    categoryUIItem.SelectedColorClass = "green-background";
                    break;
            }

            return categoryUIItem;
        }
    }
}