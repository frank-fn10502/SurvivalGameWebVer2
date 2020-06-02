using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SurvivalGame.ViewModels.ProductDetails
{
    public class ProductDetailsViewModel
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public decimal? Price { get; set; }
        public string Describe { get; set; }
        public int Quantity { get; set; }
        public string color { get; set; }
        public List<string> Imgs { get; set; }
    }
}