using SurvivalGame.Repository;
using SurvivalGame.ViewModels.Index;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SurvivalGame.Services
{
    public class IndexServices
    {
        public ProductsViewModel GetProductData()
        {
            IndexRepository indexRe = new IndexRepository();
            ProductsViewModel productVM = new ProductsViewModel();
            productVM.NewList = indexRe.GetAllNewItem();
            productVM.PopularList = indexRe.GetAllPopularItem();
            productVM.SortList = indexRe.GetAllSortItem();
            return productVM;
        }
    }

}