using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SurvivalGame.ViewModels.ProductMenu
{
    public class ProductMenuViewModel
    {
        public List<ProductViewModel> ProductList { get; set; }
        public List<CatagoryViewModel> CatagoryList { get; set; }
        public AttributesViewModel Attributes { get; set; }
    }
}