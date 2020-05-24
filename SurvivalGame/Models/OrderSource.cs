namespace SurvivalGame.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("OrderSource")]
    public partial class OrderSource
    {
        [StringLength(10)]
        public string ID { get; set; }

        [Required]
        [StringLength(10)]
        public string OrderID { get; set; }

        [Required]
        [StringLength(10)]
        public string ProcurementId { get; set; }

        public int Quantity { get; set; }

        public virtual Orders Orders { get; set; }
    }
}
