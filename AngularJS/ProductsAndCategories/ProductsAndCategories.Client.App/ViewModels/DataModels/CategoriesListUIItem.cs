using System.Collections.Generic;

using ProductsAndCategories.Ordering.Data;

namespace ProductsAndCategories.Client.App.ViewModels.DataModels
{
    public class CategoriesListUIItem
    {
        public decimal ProductsTotalPrice { get; set; }

        public bool IsChecked { get; set; }

        public bool IsCategoryDetailsVisible { get; set; }

        public int CategoryID { get; set; }

        public int OrderNo { get; set; }

        public string CategoryName { get; set; }

        public string SelectedColorClass { get; set; }

        private IEnumerable<ProductItem> productItems;

        public IEnumerable<ProductItem> ProductItems
        {
            get
            {
                if (productItems == null)
                {
                    this.productItems = new List<ProductItem>();
                }

                return this.productItems;
            }

            set
            {
                this.productItems = value;
            }
        }
    }
}