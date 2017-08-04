

using ProductsAndCategories.Client.App.ViewModels;

namespace ProductsAndCategories.Client.App.Utils
{
    public interface ICategoryDetails
    {
        CategoryDetailsViewModel GetCategoryDetailsViewModel(int categoryId);
    }
}
