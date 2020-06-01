using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace SurvivalGame.ViewModels.MemberLogin
{
    public class MemberLoginViewModel
    {
        [Required]
        [RegularExpression(@"^[a-zA-Z_]\w*$")]
        [StringLength(25, MinimumLength = 2, ErrorMessage = "開頭只能為大寫或小寫英文")]
        public string Account { get; set; }

        [Required]
        [RegularExpression(@"^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,35}$")]
        [DataType(DataType.Password)]
        [StringLength(35, MinimumLength = 8, ErrorMessage = "密碼長度介於8-35個大小寫英文數字")]
        public string Password { get; set; }
    }
}