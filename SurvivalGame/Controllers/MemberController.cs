﻿using Microsoft.Ajax.Utilities;
using SurvivalGame.ViewModels.MemberLogin;
using SurvivalGame.ViewModels.MemberRegistered;
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
        public ActionResult MemberCentre()
        {
            return View();
        }

        //[HttpPost]
        //public void GetRegistered(string Name, string Account, string Password, DateTime Birth, int Postcode, string Address, string Phone, string Email)
        //{
        //return RedirectToAction("Index","Home");
        //if (!ModelState.IsValid)
        //{
        //    return View();
        //}
        //}

        [HttpPost]
        public ActionResult GetRegistered([Bind(Include = "Name, Account, Password, Birth, Postcode, Address, Phone, Email")] MemberRegisteredViewModel registeredVM)
        {
            if (ModelState.IsValid)
            {
                //db.Accounts.Add(registeredVM);
                //db.SaveChanges();
                return RedirectToAction("Index", "Home");
            }
            return View(registeredVM);
        }

        [HttpPost]
        public ActionResult GetLogin([Bind(Include = "Account, Password")] MemberLoginViewModel loginVM)
        {
            if (ModelState.IsValid)
            {
                //db.Accounts.Add(loginVM);
                //db.SaveChanges();
                return RedirectToAction("Index", "Home");
            }
            return View(loginVM);
        }

    }
}