
//(function ($) {
//    "use strict";


//    /*==================================================================
//    [ Validate ]*/
//    var input = $('.validate-input .input100');

//    $('.validate-form').on('submit',function(){
//        var check = true;

//        for(var i=0; i<input.length; i++) {
//            if(validate(input[i]) == false){
//                showValidate(input[i]);
//                check=false;
//            }
//        }

//        return check;
//    });


//    $('.validate-form .input100').each(function(){
//        $(this).focus(function(){
//           hideValidate(this);
//        });
//    });

//    function validate (input) {
//        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
//            //if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null)
//            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@.+\..{2,3}$/) == null) {
//                return false;
//            }
//        }
//        else {
//            if($(input).val().trim() == ''){
//                return false;
//            }
//        }
//    }

//    function showValidate(input) {
//        var thisAlert = $(input).parent();

//        $(thisAlert).addClass('alert-validate');
//    }

//    function hideValidate(input) {
//        var thisAlert = $(input).parent();

//        $(thisAlert).removeClass('alert-validate');
//    }


//})(jQuery);


var Account = document.getElementById("LoginAccount");
var rule_account = /^[a-zA-Z_]\w*$/;

var Password = document.getElementById("LoginPassword");
var rule_password = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,35}$/;

var AccountInvalid = document.querySelector(".AccountInvalid");
var PasswordInvalid = document.querySelector(".PasswordInvalid");

var LoginButton = document.querySelector(".login100-form-btn");
//var InvalidFeedback = document.querySelectorAll(".invalid-feedback");

user.addEventListener("click", function () {
    //console.log("click");
    $("#Login").modal('show');

    Account.addEventListener("keyup", function () {
        if (rule_account.test(Account.value) === true && Account.value != "") {
            AccountInvalid.setAttribute("style", "display: none;");
        } else {
            AccountInvalid.setAttribute("style", "display: block;");
        }
    })

    Password.addEventListener("keyup", function () {
        if (rule_password.test(Password.value) === true && Password.value != "") {
            PasswordInvalid.setAttribute("style", "display: none;");
        } else {
            PasswordInvalid.setAttribute("style", "display: block;");
        }
    })

})

//function submit () {
//    alert("XDDD");

//    if ((AccountInvalid.getAttribute("style") != "display: none;") && (PasswordInvalid.getAttribute("style") != "display: none;")) {
//            alert("登入資料錯誤");
//            return;
//        }


//    var MemberItem = {
//        Account: Account.value,
//        Password: Password.value
//    };
//    console.log(JSON.stringify(MemberItem));
//    $.ajax({
//        url: "/Member/GetLogin",
//        method: "post",
//        contentType: 'application/json',
//        data: JSON.stringify(MemberItem),
//        success: function () {
//            //window.location.href = '/Home/Index';
//        }
//    });
//}

LoginButton.onclick = function (e) {
    e.preventDefault();
    alert("XDDD");

    if ((AccountInvalid.getAttribute("style") != "display: none;") && (PasswordInvalid.getAttribute("style") != "display: none;")) {
        alert("登入資料錯誤");
        return;
    }

    var MemberItem = {
        Account: Account.value,
        Password: Password.value
    };
    console.log(JSON.stringify(MemberItem));
    $.ajax({
        url: "/Member/GetLogin",
        method: "post",
        contentType: 'application/json',
        data: JSON.stringify(MemberItem),
        success: function () {
            //window.location.href = '/Home/Index';
        }
    });
}