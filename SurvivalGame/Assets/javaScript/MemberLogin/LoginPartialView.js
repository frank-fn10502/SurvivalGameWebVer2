var user = document.querySelector(".user-login-info a");

var Account = document.getElementById("ModalAccount");
var rule_account = /^[a-zA-Z_]\w*$/;

var Password = document.getElementById("ModalPassword");
var rule_password = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,35}$/;

var AccountInvalid = document.querySelector(".ModalAccountInvalid");
var PasswordInvalid = document.querySelector(".ModalPasswordInvalid");

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
    //alert("XDDD");

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