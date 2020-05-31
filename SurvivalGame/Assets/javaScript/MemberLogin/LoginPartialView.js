var user = document.querySelector(".user-login-info a");

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

})

var Account = document.getElementById("Account");
var rule_account = /^[a-zA-Z_]\w*$/;

var Password = document.getElementById("Password");
var rule_password = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,35}$/;

var AccountInvalid = document.querySelector(".AccountInvalid");
var PasswordInvalid = document.querySelector(".PasswordInvalid");

var LoginButton = document.getElementsByClassName("login100-form-btn");
var check = true;



//Password.addEventListener("keyup", function () {
//    if (rule_password.test(Password.value) === true && Password.value != "") {
//        PasswordInvalid.setAttribute("style", "display: none;");
//    } else {
//        PasswordInvalid.setAttribute("style", "display: block;");
//    }
//})