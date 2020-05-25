﻿using Microsoft.Ajax.Utilities;
using Newtonsoft.Json;
using SurvivalGame.Models;
using SurvivalGame.ViewModels.ProductMenu;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SurvivalGame.Repository
{
    public class testr
    {
        public string color { get; set; }
        public string cc { get; set; }
    }
    public class ProductRepository
    {
        public IQueryable<ProductViewModel> GetAllSimpleProducts()
        {
            var context = new SGModel();
            var products = new SGRepository<Products>(context).GetAll();
            var imgs = new SGRepository<Imgs>(context).GetAll();
            var result = from p in products
                         join img in imgs on p.ID equals img.ProductID
                         select new ProductViewModel { Name = p.Name ,ImgPath = img.Img ,Price = p.Price ,OnsalePrice = p.Price * 0.8m };

            return result.GroupBy(x => x.Name).Select(x =>
                    new ProductViewModel
                    {
                        Name = x.Key ,
                        ImgPath = x.FirstOrDefault().ImgPath ,
                        Price = x.FirstOrDefault().Price ,
                        OnsalePrice = x.FirstOrDefault().OnsalePrice
                    }
                );
        }
        public List<CatagoryViewModel> GetCatagoryTree()
        {
            var context = new SGModel();
            var catagorys = new SGRepository<Catagory>(context).GetAll();
            var classes = new SGRepository<Models.Class>(context).GetAll();
            var result = from ca in catagorys
                         join cl in classes on ca.ID equals cl.CatagoryID
                         select new { ca ,cl };
            var answer = result.GroupBy(x => x.ca.Name).Select(x => new CatagoryViewModel
            {
                CategoryTitle = x.Key.Trim() ,
                CategoryItemList = x.Select(y => new SubCatagoryViewModel
                {
                    Name = y.cl.Name ,
                    CaID = x.GroupBy(z => z.ca.ID).Select(z => z.Key).FirstOrDefault() ,
                    ClID = y.cl.ID
                }).ToList()
            });

            return answer.ToList();
        }
        public AttributesViewModel GetAttribute(string caId ,string clID)
        {
            if (caId == null)
            {
                return null;
            }
            var context = new SGModel();
            var products = new SGRepository<Products>(context).GetAll();
            var catagorys = new SGRepository<Catagory>(context).GetAll();
            var classes = new SGRepository<Models.Class>(context).GetAll();
            var pas = new SGRepository<Product_Attributes>(context).GetAll();

            var result = from p in products
                         join cl in classes on p.ClassID equals cl.ID
                         join ca in catagorys on cl.CatagoryID equals ca.ID
                         join p_a in pas on p.ID equals p_a.PID
                         select new { p ,cl ,ca ,p_a };
            result = result.Where(x => x.ca.ID == caId);
            if (clID != null)
            {
                result = result.Where(x => x.cl.ID == clID);
            }

            List<RangeViewModel> rangeViewModels = new List<RangeViewModel>();
            List<ColorItemViewModel> colorItemViewModels = new List<ColorItemViewModel>();
            List<NormalViewModel> normalViewModels = new List<NormalViewModel>();
            rangeViewModels.Add(new RangeViewModel
            {
                Title = "價錢" ,
                max = 10000 ,//(int?)result.Max(x => x.p.Price) ,
                min = 30 //(int?)result.Min(x => x.p.Price)
            });
            colorItemViewModels.AddRange(result.GroupBy(x => x.p.Color).Select(x =>
                new ColorItemViewModel()
                {
                    Name = x.Key ,
                    ColorCode = "#ccc"
                }
            ));
            normalViewModels.AddRange(result.GroupBy(x => x.p_a.Name).Select(x =>
                new NormalViewModel
                {
                    Title = x.Key ,
                    Attributes = x.Select(y => new SubClassViewModel { Name = y.p_a.Value }).Distinct().ToList()
                }
            ));

            AttributesViewModel attributesViewModel = new AttributesViewModel
            {
                ColorList = new List<ColorViewModel>()
                {
                    new ColorViewModel()
                    {
                        Title = "顏色",
                        ColorItemList = colorItemViewModels
                    }
                } ,
                RangeList = rangeViewModels ,
                OtherList = normalViewModels
            };
            var test = result.GroupBy(x => x.p.Color).Where(x => x.Key.Contains("{")).Select(x => x.Key);
            var jtest = test.ToList()[0].ToString();
            var jsonR = JsonConvert.DeserializeObject<testr>(jtest);
            return attributesViewModel;
        }

        public IQueryable<ProductViewModel> GetSimpleProductsByCatagory(string caId ,string clID)
        {
            var context = new SGModel();
            var catagorys = new SGRepository<Catagory>(context).GetAll();
            var classes = new SGRepository<Models.Class>(context).GetAll();
            var products = new SGRepository<Products>(context).GetAll();
            var imgs = new SGRepository<Imgs>(context).GetAll();
            var result = from p in products
                         join cl in classes on p.ClassID equals cl.ID
                         join ca in catagorys on cl.CatagoryID equals ca.ID
                         join img in imgs on p.ID equals img.ProductID
                         select new { p ,cl ,ca ,img };

            if (caId != null)
                result = result.Where(x => x.ca.ID == caId);
            if (clID != null)
                result = result.Where(x => x.cl.ID == clID);


            var answer = result.Select(x => new ProductViewModel
            {
                Name = x.p.Name ,
                ImgPath = x.img.Img ,
                Price = x.p.Price ,
                OnsalePrice = x.p.Price * 0.8m
            });

            return answer.GroupBy(x => x.Name).Select(x =>
                    new ProductViewModel
                    {
                        Name = x.Key ,
                        ImgPath = x.FirstOrDefault().ImgPath ,
                        Price = x.FirstOrDefault().Price ,
                        OnsalePrice = x.FirstOrDefault().OnsalePrice
                    }
                );
        }
    }
}