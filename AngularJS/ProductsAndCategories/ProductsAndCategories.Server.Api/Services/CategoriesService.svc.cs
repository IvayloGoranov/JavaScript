using System.Collections.Generic;
using System.ServiceModel.Web;
using System.Net;
using System.ServiceModel.Activation;

using ProductsAndCategories.Ordering.Data;
using ProductsAndCategories.Server.Api.ServiceContracts;
using ProductsAndCategories.BusinessObject.Interfaces;
using ProductsAndCategories.BusinessObject;

namespace ProductsAndCategories.Server.Api.Services
{
    
    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Allowed)]
    public class CategoriesService : ICategoriesService
    {
        private ICategories categories;

        public CategoriesService(ICategories categories)
        {
            this.categories = categories;
        }

        public CategoriesService()
            : this(new Categories())
        {    
        }

        public void DeleteCategory(int id)
        {
            this.categories.Delete(id);

            WebOperationContext.Current.OutgoingResponse.StatusCode = HttpStatusCode.NoContent;
        }

        public CategoryItem GetCategory(int id)
        {
            return this.categories.Get(id);
        }

        public IEnumerable<CategoryItem> GetFilteredCategories(int itemsCount = 5, string nameFilter = null)
        {
            return this.categories.GetFilteredCategories(itemsCount, nameFilter);
        }

        public CategoryItem SaveCategory(CategoryItem category)
        {
            if (!this.IsModelValid(category))
            {
                throw new WebFaultException(HttpStatusCode.BadRequest);
            }

            WebOperationContext.Current.OutgoingResponse.StatusCode = HttpStatusCode.Created;

            return this.categories.Save(category);
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

            return true;
        }
    }
}
