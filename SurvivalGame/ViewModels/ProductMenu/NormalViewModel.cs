using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SurvivalGame.ViewModels.ProductMenu
{
    public class NormalViewModel
    {
        public string Title { get; set; }
        public List<SubClassViewModel> Attributes { get; set; }
    }
}