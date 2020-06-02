using SurvivalGame.Repository;
using SurvivalGame.ViewModels.ProductDetails;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SurvivalGame.Services
{
    public class ProductDetailsServices
    {
        public ProductDetailsViewModel GetProductDetailById(string PID)
        {
            ProductRepository pr = new ProductRepository();
            return pr.GetProductDetails(PID);
        }
    }
}