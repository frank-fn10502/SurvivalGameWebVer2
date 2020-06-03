using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SurvivalGame.ViewModels.ProductMenu
{
    public class ProductViewModel
    {
        public string  ID { get; set; }
        public string Name { get; set; }
        public decimal? Price { get; set; }
        public decimal? OnsalePrice { get; set; }
        public string ImgPath { get; set; }
    }
}