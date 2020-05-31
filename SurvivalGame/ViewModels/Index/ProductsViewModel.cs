using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SurvivalGame.ViewModels.Index
{
    public class ProductsViewModel
    {
        public List<SortViewModel> SortList { get; set; }
        public List<PopularViewModel> PopularList { get; set; }
        public List<NewViewModel> NewList { get; set; }

    }
}