namespace SurvivalGame.Models
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class SGModel :DbContext
    {
        public SGModel()
            : base("name=SGModel")
        {
        }

        public virtual DbSet<Catagory> Catagory { get; set; }
        public virtual DbSet<Class> Class { get; set; }
        public virtual DbSet<Imgs> Imgs { get; set; }
        public virtual DbSet<Manufacturers> Manufacturers { get; set; }
        public virtual DbSet<Members> Members { get; set; }
        public virtual DbSet<Order_Details> Order_Details { get; set; }
        public virtual DbSet<Orders> Orders { get; set; }
        public virtual DbSet<OrderSource> OrderSource { get; set; }
        public virtual DbSet<Procurement> Procurement { get; set; }
        public virtual DbSet<Product_Attributes> Product_Attributes { get; set; }
        public virtual DbSet<Products> Products { get; set; }
        public virtual DbSet<RelatedProducts> RelatedProducts { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Catagory>()
                .Property(e => e.ID)
                .IsFixedLength();

            modelBuilder.Entity<Catagory>()
                .HasMany(e => e.Class)
                .WithRequired(e => e.Catagory)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Class>()
                .Property(e => e.ID)
                .IsFixedLength();

            modelBuilder.Entity<Class>()
                .Property(e => e.CatagoryID)
                .IsFixedLength();

            modelBuilder.Entity<Class>()
                .HasMany(e => e.Products)
                .WithRequired(e => e.Class)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Imgs>()
                .Property(e => e.ID)
                .IsFixedLength();

            modelBuilder.Entity<Imgs>()
                .Property(e => e.ProductID)
                .IsFixedLength();

            modelBuilder.Entity<Manufacturers>()
                .Property(e => e.ID)
                .IsFixedLength();

            modelBuilder.Entity<Manufacturers>()
                .HasMany(e => e.Products)
                .WithRequired(e => e.Manufacturers)
                .HasForeignKey(e => e.ManufacturerID)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Members>()
                .Property(e => e.ID)
                .IsFixedLength();

            modelBuilder.Entity<Members>()
                .Property(e => e.Password)
                .IsFixedLength();

            modelBuilder.Entity<Members>()
                .Property(e => e.Mail)
                .IsFixedLength();

            modelBuilder.Entity<Members>()
                .Property(e => e.Phone)
                .IsFixedLength();

            modelBuilder.Entity<Members>()
                .HasMany(e => e.Orders)
                .WithRequired(e => e.Members)
                .HasForeignKey(e => e.MemberID)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Order_Details>()
                .Property(e => e.ID)
                .IsFixedLength();

            modelBuilder.Entity<Order_Details>()
                .Property(e => e.OrderID)
                .IsFixedLength();

            modelBuilder.Entity<Order_Details>()
                .Property(e => e.ProductID)
                .IsFixedLength();

            modelBuilder.Entity<Order_Details>()
                .Property(e => e.UnitPrice)
                .HasPrecision(19 ,4);

            modelBuilder.Entity<Orders>()
                .Property(e => e.ID)
                .IsFixedLength();

            modelBuilder.Entity<Orders>()
                .Property(e => e.MemberID)
                .IsFixedLength();

            modelBuilder.Entity<Orders>()
                .HasMany(e => e.Order_Details)
                .WithRequired(e => e.Orders)
                .HasForeignKey(e => e.OrderID)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Orders>()
                .HasMany(e => e.OrderSource)
                .WithRequired(e => e.Orders)
                .HasForeignKey(e => e.OrderID)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<OrderSource>()
                .Property(e => e.ID)
                .IsFixedLength();

            modelBuilder.Entity<OrderSource>()
                .Property(e => e.OrderID)
                .IsFixedLength();

            modelBuilder.Entity<OrderSource>()
                .Property(e => e.ProcurementId)
                .IsFixedLength();

            modelBuilder.Entity<Procurement>()
                .Property(e => e.ID)
                .IsFixedLength();

            modelBuilder.Entity<Procurement>()
                .Property(e => e.ProductID)
                .IsFixedLength();

            modelBuilder.Entity<Procurement>()
                .Property(e => e.UintPrice)
                .HasPrecision(19 ,4);

            modelBuilder.Entity<Product_Attributes>()
                .Property(e => e.ID)
                .IsFixedLength();

            modelBuilder.Entity<Product_Attributes>()
                .Property(e => e.PID)
                .IsFixedLength();

            modelBuilder.Entity<Products>()
                .Property(e => e.ID)
                .IsFixedLength();

            modelBuilder.Entity<Products>()
                .Property(e => e.ClassID)
                .IsFixedLength();

            modelBuilder.Entity<Products>()
                .Property(e => e.ManufacturerID)
                .IsFixedLength();

            modelBuilder.Entity<Products>()
                .Property(e => e.Price)
                .HasPrecision(19 ,4);

            modelBuilder.Entity<Products>()
                .HasMany(e => e.Imgs)
                .WithRequired(e => e.Products)
                .HasForeignKey(e => e.ProductID)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Products>()
                .HasMany(e => e.Order_Details)
                .WithRequired(e => e.Products)
                .HasForeignKey(e => e.ProductID)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Products>()
                .HasMany(e => e.Procurement)
                .WithRequired(e => e.Products)
                .HasForeignKey(e => e.ProductID)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Products>()
                .HasMany(e => e.Product_Attributes)
                .WithRequired(e => e.Products)
                .HasForeignKey(e => e.PID)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Products>()
                .HasMany(e => e.RelatedProducts)
                .WithRequired(e => e.Products)
                .HasForeignKey(e => e.ProductID)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<RelatedProducts>()
                .Property(e => e.ID)
                .IsFixedLength();

            modelBuilder.Entity<RelatedProducts>()
                .Property(e => e.ProductID)
                .IsFixedLength();

            modelBuilder.Entity<RelatedProducts>()
                .Property(e => e.RelationPID)
                .IsFixedLength();
        }
    }
}
