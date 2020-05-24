using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SurvivalGame.ViewModels.ProductMenu
{
    public class AttributesViewModel
    {
        public List<RangeViewModel> RangeList { get; set; }
        public List<ColorViewModel> ColorList { get; set; }
        public List<NormalViewModel> OtherList { get; set; }
    }
}