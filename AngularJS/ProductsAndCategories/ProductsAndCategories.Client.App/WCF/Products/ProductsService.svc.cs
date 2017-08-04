using System.ServiceModel;
using System.ServiceModel.Activation;
using System.ServiceModel.Web;
using System.Net;

using ProductsAndCategories.BusinessObject.Interfaces;
using ProductsAndCategories.Ordering.Data;

namespace ProductsAndCategories.Client.App.WCF.Products
{
    [ServiceContract(Namespace = "")]
    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Allowed)]
    public class ProductsService
    {
        private IProducts productsBusinessObject;

        public ProductsService(IProducts productsBusinessObject)
        {
            this.productsBusinessObject = productsBusinessObject;
        }

        public ProductsService()
            : this(new ProductsAndCategories.BusinessObject.Products())
        {
        }

        [OperationContract]
        [WebInvoke(Method = "POST", ResponseFormat = WebMessageFormat.Json)]
        public void SaveProduct(ProductItem product)
        {
            if (!this.IsModelValid(product))
            {
                throw new WebFaultException(HttpStatusCode.BadRequest);
            }

            this.productsBusinessObject.Save(product);
        }

        [OperationContract]
        [WebInvoke(Method = "POST", ResponseFormat = WebMessageFormat.Json)]
        public void DeleteProduct(ProductItem productToDelete)
        {
            if (productToDelete.Id < 0)
            {
                throw new WebFaultException(HttpStatusCode.BadRequest);
            }

            this.productsBusinessObject.Delete(productToDelete.Id);
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

            if (model.CategoryId < 0)
            {
                return false;
            }

            return true;
        }
    }
}
