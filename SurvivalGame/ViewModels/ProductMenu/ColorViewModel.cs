using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SurvivalGame.ViewModels.ProductMenu
{
    public class ColorViewModel
    {
        public string Title { get; set; }
        public List<ColorItemViewModel> ColorItemList { get; set; }
    }
}