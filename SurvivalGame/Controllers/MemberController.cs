using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SurvivalGame.Controllers
{
    public class MemberController : Controller
    {
        // GET: Member
        //public ActionResult Index()
        //{
        //    return View();
        //}
        public ActionResult MemberRegistered()
        {
            return View();
        }
        public ActionResult MemberLogin()
        {
            return View();
        }
    }
}