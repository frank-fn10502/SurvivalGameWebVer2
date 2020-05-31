﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Jose;
using System.Text;
using System.Web.Routing;
using SurvivalGame.Security;

namespace SurvivalGame.Filter
{
    public class JwtAuthActionFilter :ActionFilterAttribute
    {
        //驗證token時效
        public static bool IsTokenExpired(string dateTime)
        {
            return Convert.ToDateTime(dateTime) < DateTime.Now;
        }
        public static string ReGenerateToken(string dateTime ,string name)
        {
            if( (Convert.ToDateTime(dateTime) - DateTime.Now).TotalMinutes <= 15)
            {
                return new JwtAuthUtil().GenerateToken(name);
            }
            return null;
        }

        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            string secret = "bs2020SurvivalGameProjectOneJwtAuth";//加解密的key,如果不一樣會無法成功解密
            var request = filterContext.RequestContext.HttpContext.Request;
            if (request.Headers["Authorization"] == null)
            {
                filterContext.Result = new RedirectToRouteResult(
                new RouteValueDictionary
                {
                    { "controller", "Member" },
                    { "action", "MemberLogin" }
                });
                return;
            }
            else
            {
                //解密後會回傳Json格式的物件(即加密前的資料)
                var jwtObject = Jose.JWT.Decode<Dictionary<string ,Object>>(
                request.Headers["Authorization"] ,Encoding.UTF8.GetBytes(secret) ,JwsAlgorithm.HS512);

                if (IsTokenExpired(jwtObject["Exp"].ToString()))
                {
                    filterContext.Result = new RedirectToRouteResult(
                    new RouteValueDictionary
                    {
                        { "controller", "Member" },
                        { "action", "MemberLogin" }
                    });
                    return;
                }
            }

            base.OnActionExecuting(filterContext);
        }
    }
}