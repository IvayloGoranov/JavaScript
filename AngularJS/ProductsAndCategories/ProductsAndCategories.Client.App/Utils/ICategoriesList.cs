
using ProductsAndCategories.Client.App.ViewModels;

namespace ProductsAndCategories.Client.App.Utils
{
    public interface ICategoriesList
    {
        CategoriesListViewModel GetCategoriesListViewModel(
            int itemsCount = GlobalConstants.GlobalConstants.DefaultItemsCount,
            string nameFilter = null);

        CategoriesListViewModel GetCategoriesListViewModelWithProductsList(CategoriesListViewModel viewModel);
    }
}
