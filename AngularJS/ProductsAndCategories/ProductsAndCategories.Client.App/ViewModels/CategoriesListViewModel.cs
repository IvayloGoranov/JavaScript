using System.Collections.Generic;

using ProductsAndCategories.Client.App.ViewModels.DataModels;

namespace ProductsAndCategories.Client.App.ViewModels
{
    public class CategoriesListViewModel
    {
        public decimal TotalPrices { get; set; }

        public bool IsCheckedAll { get; set; }

        public bool IsPriceShown { get; set; }

        public int ItemsToShowCount { get; set; }

        public int AllItemsCount { get; set; }

        public int MaxOrderNo { get; set; }

        public string SuccessMessage { get; set; }

        public string ErrorMessage { get; set; }

        public string NameFilter { get; set; }

        private IList<CategoriesListUIItem> categoriesListItems;

        public IList<CategoriesListUIItem> ItemList
        {
            get
            {
                if(this.categoriesListItems == null)
                {
                    this.categoriesListItems = new List<CategoriesListUIItem>();

                }

                return this.categoriesListItems;
            }
            set
            {
                this.categoriesListItems = value;
            }
        }
    }
}