namespace SurvivalGame.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Cart")]
    public partial class Cart
    {
        [StringLength(10)]
        public string ID { get; set; }

        [Required]
        [StringLength(10)]
        public string MemberID { get; set; }

        [Required]
        [StringLength(10)]
        public string ProductID { get; set; }

        public short Quantity { get; set; }

        [StringLength(50)]
        public string Depiction { get; set; }

        public virtual Member Member { get; set; }

        public virtual Product Product { get; set; }
    }
}
