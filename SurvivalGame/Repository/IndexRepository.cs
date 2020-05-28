using SurvivalGame.Models;
using SurvivalGame.ViewModels.Index;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SurvivalGame.Repository
{
    public class IndexRepository
    {
        private Models.SGModel _context = new SGModel();
        public List<SortViewModel> GetAllSortItem()
        {
            var data = from ca in _context.Catagory
                       join cl in _context.Class on ca.ID equals cl.CatagoryID
                       join p in _context.Products on cl.ID equals p.ClassID
                       join img in _context.Imgs on p.ID equals img.ProductID
                       select new { ca, cl, p, img };

            return data.GroupBy(x => x.ca.Name).Select(x =>
                new SortViewModel
                {
                    Title = x.Key,
                    Img = x.FirstOrDefault().img.Img
                }
            ).ToList();
        }
    }
}