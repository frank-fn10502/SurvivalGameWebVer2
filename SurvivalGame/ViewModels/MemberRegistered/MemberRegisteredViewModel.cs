using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace SurvivalGame.ViewModels.MemberRegistered
{
    public class MemberRegisteredViewModel
    {
        [Required]
        [RegularExpression(@"^[\a-\z\A-\Z\u2E80-\u9FFF]*$")]
        [StringLength(25, MinimumLength = 2, ErrorMessage = "姓名長度介於2-25個字元")]
        public string Name { get; set; }

        [Required]
        [RegularExpression(@"^[a-zA-Z_]\w*$")]
        [StringLength(25, MinimumLength = 2, ErrorMessage = "開頭只能為大寫或小寫英文")]
        public string Account { get; set; }

        [Required]
        [RegularExpression(@"^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,35}$")]
        [DataType(DataType.Password)]
        [StringLength(35, MinimumLength = 8, ErrorMessage = "密碼長度介於8-35個大小寫英文數字")]
        public string Password { get; set; }

        [Required]
        [DataType(DataType.Password)]
        [NotMapped]
        [Compare("Password", ErrorMessage = "密碼不一致!")]
        public string CheckPassword { get; set; }

        [DataType(DataType.Date)]
        public DateTime Birth { get; set; }

        [Required]
        [RegularExpression(@"^\d{3,6}$")]
        [StringLength(6, MinimumLength = 2, ErrorMessage = "請輸入3至6位數字")]
        public int PostCode { get; set; }

        [Required]
        [RegularExpression(@"^[\a-\z\A-\Z\u2E80-\u9FFF]*$")]
        [StringLength(50, MinimumLength = 10, ErrorMessage = "請輸入完整地址")]
        public string Address { get; set; }

        [Required]
        [RegularExpression(@"^09\d{8}$", ErrorMessage = "請輸入09開頭的10位數字手機號碼")]
        public string Phone { get; set; }

        [Required(ErrorMessage = "請輸入完整信箱地址")]
        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }
    }

    

}