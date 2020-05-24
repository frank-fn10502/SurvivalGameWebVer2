using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SurvivalGame.ViewModels.ProductMenu
{

    public class CatagoryViewModel
    {
        public string CategoryTitle { get; set; }
        public List<SubClassViewModel> CategoryItemList { get; set; }
    }
}