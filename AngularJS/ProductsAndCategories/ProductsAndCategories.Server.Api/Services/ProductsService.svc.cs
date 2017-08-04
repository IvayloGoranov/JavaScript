using System.Collections.Generic;
using System.ServiceModel.Web;
using System.Net;
using System.ServiceModel.Activation;

using ProductsAndCategories.Ordering.Data;
using ProductsAndCategories.BusinessObject.Interfaces;
using ProductsAndCategories.BusinessObject;
using ProductsAndCategories.Server.Api.ServiceContracts;

namespace ProductsAndCategories.Server.Api.Services
{
    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Allowed)]
    public class ProductsService : IProductsService
    {
        private IProducts products;
        private ICategories categories;

        public ProductsService(IProducts products,  ICategories categories)
        {
            this.products = products;
            this.categories = categories;
        }

        public ProductsService()
            : this(new Products(), new Categories())
        {
        }

        public void DeleteProduct(int id)
        {
            this.products.Delete(id);

            WebOperationContext.Current.OutgoingResponse.StatusCode = HttpStatusCode.NoContent;
        }

        public ProductItem GetProduct(int id)
        {
            return this.products.Get(id);
        }

        public IEnumerable<ProductItem> GetProductsByCategoryID(int categoryId)
        {
            return this.products.GetProductsByCategoryID(categoryId);
        }

        public ProductItem SaveProduct(ProductItem product)
        {
            if (!this.IsModelValid(product))
            {
                throw new WebFaultException(HttpStatusCode.BadRequest);
            }

            WebOperationContext.Current.OutgoingResponse.StatusCode = HttpStatusCode.Created;

            return this.products.Save(product);
        }

        private bool IsModelValid(ProductItem model)
        {
            if (model == null)
            {
                return false;
            }

            if (string.IsNullOrEmpty(model.Name))
            {
                return false;
            }

            if (model.Price < 0)
            {
                return false;
            }

            return true;
        }
    }
}
