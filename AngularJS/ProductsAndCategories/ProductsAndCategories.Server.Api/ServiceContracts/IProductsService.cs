using System.Collections.Generic;
using System.ServiceModel;
using System.ServiceModel.Web;

using ProductsAndCategories.Ordering.Data;

namespace ProductsAndCategories.Server.Api.ServiceContracts
{
    [ServiceContract(Namespace = "")]
    public interface IProductsService
    {
        [OperationContract]
        [WebInvoke(Method = "GET",
                    ResponseFormat = WebMessageFormat.Json)]
        IEnumerable<ProductItem> GetProductsByCategoryID(int categoryId);


        [OperationContract]
        [WebInvoke(Method = "GET",
                    ResponseFormat = WebMessageFormat.Json)]
        ProductItem GetProduct(int id);

        [OperationContract]
        [WebInvoke(Method = "POST",
                    ResponseFormat = WebMessageFormat.Json)]
        ProductItem SaveProduct(ProductItem product);

        [OperationContract]
        [WebInvoke(Method = "DELETE")]
        void DeleteProduct(int id);
    }
}