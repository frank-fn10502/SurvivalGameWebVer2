using SurvivalGame.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SurvivalGame.Controllers
{
    public class ProductController :Controller
    {
        // GET: Product
        public ActionResult ProductMenu()
        {
            return View();
        }

        public ActionResult ShoppingCart()
        {
            return View();
        }

        public ActionResult ProductDetails()
        {
            return View();
        }

        public ActionResult GetCatagoryItems()
        {
            ProductMenuService pService = new ProductMenuService();
            var t = pService.GetViewData("CG001");
            return Json( t,JsonRequestBehavior.AllowGet);
        }
    }
}