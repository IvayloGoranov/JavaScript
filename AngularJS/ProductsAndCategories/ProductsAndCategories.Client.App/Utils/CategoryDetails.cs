using System;

using ProductsAndCategories.BusinessObject;
using ProductsAndCategories.BusinessObject.Interfaces;
using ProductsAndCategories.Client.App.ViewModels;
using ProductsAndCategories.Data.Enums;

namespace ProductsAndCategories.Client.App.Utils
{
    public class CategoryDetails : ICategoryDetails
    {
        private ICategories categoriesBusinessObject;
        private IProducts productsBusinessObject;

        public CategoryDetails(ICategories categoriesBusinessObject, IProducts productsBusinessObject)
        {
            this.categoriesBusinessObject = categoriesBusinessObject;
            this.productsBusinessObject = productsBusinessObject;
        }

        public CategoryDetails()
            : this(new Categories(), new Products())
        {
        }

        public CategoryDetailsViewModel GetCategoryDetailsViewModel(int categoryId = 0)
        {
            if (categoryId < 0)
            {
                throw new InvalidOperationException("Category Id should be equal or bigger than 0");
            }

            var viewModel = new CategoryDetailsViewModel();

            if (categoryId > 0)
            {
                viewModel.CategoryItem = this.categoriesBusinessObject.Get(categoryId);
                viewModel.ProductItems = this.productsBusinessObject.GetProductsByCategoryID(categoryId);
            }

            switch (viewModel.CategoryItem.Color)
            {
                case Color.Green:
                    viewModel.SelectedColorClass = "green-background";
                    break;
                case Color.Blue:
                    viewModel.SelectedColorClass = "blue-background";
                    break;
                case Color.Red:
                    viewModel.SelectedColorClass = "red-background";
                    break;
                default:
                    viewModel.SelectedColorClass = "green-background";
                    break;
            }

            return viewModel;
        }
    }
}