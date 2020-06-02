using SurvivalGame.Repository;
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
        private ProductMenuService pService = new ProductMenuService();

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
            ProductDetailsServices dService = new ProductDetailsServices();
            var d = dService.GetProductDetailById("PD002");
            return View(d);
        }

        public ActionResult GetCatagoryItems(string CaId ,string clId)
        {
            var t = pService.GetViewData(CaId ,clId);
            return Json( t,JsonRequestBehavior.AllowGet);
        }
    }
}