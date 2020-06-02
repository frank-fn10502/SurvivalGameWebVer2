namespace SurvivalGame.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Orders
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Orders()
        {
            Order_Details = new HashSet<Order_Details>();
            OrderSource = new HashSet<OrderSource>();
        }

        [StringLength(10)]
        public string ID { get; set; }

        [Required]
        [StringLength(10)]
        public string MemberID { get; set; }

        public int PaymentMethod { get; set; }

        [StringLength(50)]
        public string Depiction { get; set; }

        [Required]
        [StringLength(50)]
        public string ShipAddress { get; set; }

        public int Status { get; set; }

        [Column(TypeName = "smalldatetime")]
        public DateTime RequiredDate { get; set; }

        [Column(TypeName = "smalldatetime")]
        public DateTime ShippedDate { get; set; }

        public virtual Members Members { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Order_Details> Order_Details { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<OrderSource> OrderSource { get; set; }
    }
}
