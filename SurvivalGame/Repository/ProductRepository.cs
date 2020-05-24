using Microsoft.Ajax.Utilities;
using SurvivalGame.Models;
using SurvivalGame.ViewModels.ProductMenu;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SurvivalGame.Repository
{
    public class ProductRepository
    {
        public List<ProductViewModel> GetAllSimpleProducts()
        {
            var context = new SGModel();
            var products = new SGRepository<Products>(context).GetAll();
            var imgs = new SGRepository<Imgs>(context).GetAll();
            var result = from p in products
                         join img in imgs
                         on p.ID equals img.ProductID
                         select new ProductViewModel { Name = p.Name ,ImgPath = img.Img ,Price = p.Price ,OnsalePrice = p.Price * 0.8m };

            return result.GroupBy(x => x.Name).Select(x =>
                    new ProductViewModel
                    {
                        Name = x.Key,
                        ImgPath = x.FirstOrDefault().ImgPath,
                        Price = x.FirstOrDefault().Price ,
                        OnsalePrice = x.FirstOrDefault().OnsalePrice
                    }
                ).ToList();
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
                CategoryItemList = x.Select(y => new SubClassViewModel { Name = y.cl.Name }).ToList()
            });

            return answer.ToList();
        }
        public AttributesViewModel GetAttribute(string caId)
        {
            var context = new SGModel();
            var products = new SGRepository<Products>(context).GetAll();
            var catagorys = new SGRepository<Catagory>(context).GetAll();
            var classes = new SGRepository<Models.Class>(context).GetAll();
            var pas = new SGRepository<Product_Attributes>(context).GetAll();

            var result = from p in products
                         join cl in classes on p.ClassID equals cl.ID
                         join ca in catagorys on cl.CatagoryID equals ca.ID
                         join p_a in pas on p.ID equals p_a.PID
                         where ca.ID == caId
                         select new { p ,cl ,ca ,p_a };

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
            return attributesViewModel;
        }
    }
}