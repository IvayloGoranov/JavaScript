using System.ServiceModel;
using System.ServiceModel.Activation;
using System.ServiceModel.Web;
using System.Net;

using ProductsAndCategories.Client.App.ViewModels;
using ProductsAndCategories.Client.App.Utils;
using ProductsAndCategories.Ordering.Data;
using ProductsAndCategories.BusinessObject.Interfaces;
using ProductsAndCategories.Client.App.ViewModels.DataModels;

namespace ProductsAndCategories.Client.App.WCF.Categories
{
    [ServiceContract(Namespace = "")]
    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Allowed)]
    public class CategoriesService
    {
        private ICategoriesList categoriesListUtil;
        private ICategoryDetails categoryDetails;
        private ICategories categoriesBusinessObject;

        public CategoriesService(ICategoriesList categoriesListUtil, ICategoryDetails categoryDetails,
            ICategories categoriesBusinessObject)
        {
            this.categoriesListUtil = categoriesListUtil;
            this.categoryDetails = categoryDetails;
            this.categoriesBusinessObject = categoriesBusinessObject;
        }

        public CategoriesService()
            : this(new CategoriesList(), new CategoryDetails(), new ProductsAndCategories.BusinessObject.Categories())
        {
        }

        [OperationContract]
        [WebInvoke(Method = "GET", ResponseFormat = WebMessageFormat.Json)]
        public CategoriesListViewModel GetCategoriesListViewModel(
            int itemsCount = GlobalConstants.GlobalConstants.DefaultItemsCount, 
            string nameFilter = null)
        {
            return this.categoriesListUtil.GetCategoriesListViewModel(itemsCount, nameFilter);
        }

        [OperationContract]
        [WebInvoke(Method = "GET", ResponseFormat = WebMessageFormat.Json)]
        public CategoryDetailsViewModel GetCategoryDetailsViewModel(int categoryId = 0)
        {
            if (categoryId < 0)
            {
                throw new WebFaultException(HttpStatusCode.BadRequest);
            }

            return this.categoryDetails.GetCategoryDetailsViewModel(categoryId);
        }

        [OperationContract]
        [WebInvoke(Method = "POST", ResponseFormat = WebMessageFormat.Json)]
        public CategoriesListViewModel GetCategoriesListViewModelWithProductsList(CategoriesListViewModel viewModel)
        {
            return this.categoriesListUtil.GetCategoriesListViewModelWithProductsList(viewModel);
        }

        [OperationContract]
        [WebInvoke(Method = "POST", ResponseFormat = WebMessageFormat.Json)]
        public CategoryItem SaveCategory(CategoryItem category)
        {
            if (!this.IsModelValid(category))
            {
                throw new WebFaultException(HttpStatusCode.BadRequest);
            }

            return this.categoriesBusinessObject.Save(category);
        }

        [OperationContract]
        [WebInvoke(Method = "POST", ResponseFormat = WebMessageFormat.Json)]
        public CategoryItem ChangeCategoryOrder(ChangeCategoryOrderDataModel dataModel)
        {
            var category = this.categoriesBusinessObject.Get(dataModel.Id);
            category.OrderNo = dataModel.OrderNo;

            return this.categoriesBusinessObject.Save(category);
        }

        [OperationContract]
        [WebInvoke(Method = "POST", ResponseFormat = WebMessageFormat.Json)]
        public void DeleteCategory(CategoryItem categoryToDelete)
        {
            if (categoryToDelete.Id < 0)
            {
                throw new WebFaultException(HttpStatusCode.BadRequest);
            }

            this.categoriesBusinessObject.Delete(categoryToDelete.Id);
        }

        private bool IsModelValid(CategoryItem model)
        {
            if (model == null)
            {
                return false;
            }

            if (string.IsNullOrEmpty(model.Name))
            {
                return false;
            }

            if ((int)model.Color < 0 || (int)model.Color > 2)
            {
                return false;
            }

            return true;
        }
    }
}
