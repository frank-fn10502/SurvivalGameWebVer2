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
        public ProductMenuViewModel GetViewData(string catagoryID ,string classID)
        {
            ProductRepository pr = new ProductRepository();
            ProductMenuViewModel pView = new ProductMenuViewModel()
            {
                ProductList = pr.GetSimpleProductsByCatagory(catagoryID ,classID).ToList() ,
                CatagoryList = pr.GetCatagoryTree().Select(x =>
                {
                    x.CategoryItemList.Insert(0 ,new SubCatagoryViewModel 
                    { 
                        Name = "All" ,
                        CaID = x.CategoryItemList.First().CaID,
                        ClID = null
                    });
                    return x;
                }).ToList() ,
                Attributes = pr.GetAttribute(catagoryID ,classID)
            };
            return pView;
        }
    }
}