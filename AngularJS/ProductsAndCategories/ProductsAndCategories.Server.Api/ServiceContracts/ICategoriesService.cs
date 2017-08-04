using System.Collections.Generic;
using System.ServiceModel;
using System.ServiceModel.Web;

using ProductsAndCategories.Ordering.Data;

namespace ProductsAndCategories.Server.Api.ServiceContracts
{
    [ServiceContract(Namespace = "")]
    public interface ICategoriesService
    {
        [OperationContract]
        [WebInvoke(Method = "GET",
                    ResponseFormat = WebMessageFormat.Json)]
        IEnumerable<CategoryItem> GetFilteredCategories(
            int itemsCount = GlobalConstants.GlobalConstants.DefaultItemsCount,
            string nameFilter = null);


        [OperationContract]
        [WebInvoke(Method = "GET",
                    ResponseFormat = WebMessageFormat.Json)]
        CategoryItem GetCategory(int id);

        [OperationContract]
        [WebInvoke(Method = "POST",
                    ResponseFormat = WebMessageFormat.Json)]
        CategoryItem SaveCategory(CategoryItem category);

        [OperationContract]
        [WebInvoke(Method = "DELETE")]
        void DeleteCategory(int id);
    }
}
