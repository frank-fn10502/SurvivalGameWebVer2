using Jose;
using Microsoft.Ajax.Utilities;
using SurvivalGame.Filter;
using SurvivalGame.Models;
using SurvivalGame.Repository;
using SurvivalGame.Security;
using SurvivalGame.ViewModels.MemberLogin;
using SurvivalGame.ViewModels.MemberRegistered;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.Mvc;

namespace SurvivalGame.Controllers
{
    public class MemberController :Controller
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

        [JwtAuthActionFilter]
        public ActionResult MemberCentre()
        {
            return View();
        }

        [HttpPost]
        public ActionResult GetRegistered([Bind(Include = "Name, Account, Password,Birth ,Postcode ,Address , Phone ,Email")] MemberRegisteredViewModel registeredVM)
        {
            if (ModelState.IsValid)
            {
                //db.Accounts.Add(registeredVM);
                //db.SaveChanges();
                return RedirectToAction("Index" ,"Home");
            }
            return View(registeredVM);
        }


        [HttpPost]
        public ActionResult GetLogin([Bind(Include = "Account, Password")] MemberLoginViewModel loginVM)
        {
            if (!ModelState.IsValid)
            {
                return Json(new
                {
                    status = false ,
                    token = "Account Or Password is not Valid"
                });
            }
            //var repository = new SGRepository<Members>(new SGModel());
            //var result = repository.GetAll().Where(x => x.Name == loginVM.Account && x.Password == loginVM.Password).FirstOrDefault();
            //if (result == null)
            //{
            //    return Json(new
            //    {
            //        status = false ,
            //        token = "Account Or Password Error"
            //    });
            //}

            JwtAuthUtil jwtAuthUtil = new JwtAuthUtil();
            string jwtToken = jwtAuthUtil.GenerateToken(loginVM.Account);
            return Json(new
            {
                status = true ,
                token = jwtToken
            });
        }
        
        [HttpPost]
        public ActionResult CheckLoginStatus()
        {
            if(Request.Headers["Authorization"] == null)
            {
                return Json(new
                {
                    Status = false
                });
            }
            string secret = "bs2020SurvivalGameProjectOneJwtAuth";//加解密的key,如果不一樣會無法成功解密
                                                                    //解密後會回傳Json格式的物件(即加密前的資料)
            var jwtObject = Jose.JWT.Decode<Dictionary<string ,Object>>(
            Request.Headers["Authorization"] ,Encoding.UTF8.GetBytes(secret) ,JwsAlgorithm.HS512);

            if (JwtAuthActionFilter.IsTokenExpired(jwtObject["Exp"].ToString()))
            {
                return Json(new
                {
                    Status = false
                });
            }

            return Json(new
            {
                Status = true ,
                Name = jwtObject["Account"] ,
                Token = JwtAuthActionFilter.ReGenerateToken(jwtObject["Exp"].ToString() ,jwtObject["Account"].ToString())
            });
        }

    }
}