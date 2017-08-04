using System.Collections.Generic;

using ProductsAndCategories.Ordering.Data;

namespace ProductsAndCategories.Client.App.ViewModels
{
    public class CategoryDetailsViewModel
    {
        public string SuccessMessage { get; set; }

        public string ErrorMessage { get; set; }

        public string SelectedColorClass { get; set; }

        public string NewProductName { get; set; }

        public decimal NewProductPrice { get; set; }

        private CategoryItem categoryItem;
        public CategoryItem CategoryItem
        {
            get
            {
                if (this.categoryItem == null)
                {
                    this.categoryItem = new CategoryItem();

                }

                return this.categoryItem;
            }

            set
            {
                this.categoryItem = value;
            }
        }

        private IEnumerable<ProductItem> productItems;
        public IEnumerable<ProductItem> ProductItems
        {
            get
            {
                if (this.productItems == null)
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