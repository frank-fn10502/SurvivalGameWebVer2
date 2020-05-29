using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SurvivalGame.ViewModels.ShoppingCart
{
    public class GetCartItemViewModel
    {
        public string Img { get; set; }
        public string Name { get; set; }
        public string Brief { get; set; }
        public decimal Price { get; set; }
        public int Quantity { get; set; }
        public decimal Total { get; set; }
    }
}