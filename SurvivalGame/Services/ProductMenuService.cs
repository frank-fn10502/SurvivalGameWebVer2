using SurvivalGame.Repository;
using SurvivalGame.ViewModels.ProductMenu;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SurvivalGame.Services
{
    public class ProductMenuService
    {
        public ProductMenuViewModel GetViewData(string catagoryID)
        {
            ProductRepository pr = new ProductRepository();
            ProductMenuViewModel pView = new ProductMenuViewModel()
            {
                ProductList = pr.GetAllSimpleProducts().ToList() ,
                CatagoryList = pr.GetCatagoryTree().Select(x =>
                {
                    x.CategoryItemList.Insert(0 ,new SubClassViewModel { Name = "All" });
                    return x;
                }).ToList() ,
                Attributes = pr.GetAttribute(catagoryID)
            };
            return pView;
        }
    }
}