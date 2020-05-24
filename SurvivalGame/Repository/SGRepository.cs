using SurvivalGame.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace SurvivalGame.Repository
{
    public class SGRepository<T> where T : class
    {
        private SGModel _context;
        protected SGModel Content { get { return _context; } }

        public SGRepository(SGModel context)
        {
            if (context == null)
            {
                throw new ArgumentException();
            }
            _context = context;
        }
        public void Create(T value)
        {
            _context.Entry(value).State = EntityState.Added;
        }
        public void Update(T value)
        {
            _context.Entry(value).State = EntityState.Modified;
        }
        public void Delete(T value)
        {
            _context.Entry(value).State = EntityState.Deleted;
        }

        public IQueryable<T> GetAll()
        {
            return _context.Set<T>();
        }
    }
}