var inputName = document.getElementById("Name");
var rule_name = /^[\a-\z\A-\Z\u2E80-\u9FFF]*$/;

var inputAccount = document.getElementById("Account");
var rule_account = /^[a-zA-Z_]\w*$/;

var inputPassword = document.getElementById("Password");
var rule_password = /[A-Z]|[a-z]|\d+[a-z]|[A-Z]|\d+\d|[A-Z]|[a-z]+\d|[a-z]|[A-Z][A-Z]|\d|[a-z][a-z]|\d|[A-Z]/;

var inputCheckPassword = document.getElementById("CheckPassword");

var inputBirth = document.getElementById("Birth");

var inputPostCode = document.getElementById("PostCode");
var rule_postCode = /\d/;

var inputAddress = document.getElementById("Address");

var inputPhone = document.getElementById("Phone");
var rule_phone = /[0-9|-]+/;

var inputEmail = document.getElementById("Email");
var rule_email = /^([a-zA-Z0-9_\-\.]+)@[a-zA-Z0-9_\-\.]+\..{2,3}$/;

var NameInvalid = document.querySelector(".NameInvalid");
var AccountInvalid = document.querySelector(".AccountInvalid");
var PasswordInvalid = document.querySelector(".PasswordInvalid");
var CheckPasswordInvalid = document.querySelector(".CheckPasswordInvalid");
var BirthdayInvalid = document.querySelector(".BirthdayInvalid");
var PostCodeInvalid = document.querySelector(".PostCodeInvalid");
var AddressInvalid = document.querySelector(".AddressInvalid");
var PhoneInvalid = document.querySelector(".PhoneInvalid");
var EmailInvalid = document.querySelector(".EmailInvalid");

document.getElementById("Registered").addEventListener("click", function(e){
    e.preventDefault();
});

inputName.addEventListener("keyup", function () {
    
    if (rule_name.test(inputName.value) === true && inputName.value != "") {
        NameInvalid.setAttribute("style", "display: none;");
    } else {
        NameInvalid.setAttribute("style", "display: block;");
    }
})

inputAccount.addEventListener("keyup", function () {
    
    if (rule_account.test(inputAccount.value) === true && inputAccount.value != "") {
        AccountInvalid.setAttribute("style", "display: none;");
    } else {
        AccountInvalid.setAttribute("style", "display: block;");
    }
})

inputPassword.addEventListener("keyup", function () {
    if (rule_password.test(inputPassword.value) === true && inputPassword.value.length >= 8 && inputPassword.value.length <= 35) {
        PasswordInvalid.setAttribute("style", "display: none;");
    } else {
        PasswordInvalid.setAttribute("style", "display: block;");
    }
})

inputCheckPassword.addEventListener("keyup", function () {
    if (inputCheckPassword.value === inputPassword.value && inputCheckPassword.value != "") {
        CheckPasswordInvalid.setAttribute("style", "display: none;");
    } else {
        CheckPasswordInvalid.setAttribute("style", "display: block;");
    }
})

inputBirth.addEventListener("keyup", function () {
    if (inputBirth.value != null) {
        BirthdayInvalid.setAttribute("style", "display: none;");
    } else {
        BirthdayInvalid.setAttribute("style", "display: block;");
    }
})

inputPostCode.addEventListener("keyup", function () {
    if (rule_postCode.test(inputPostCode.value) === true && inputPostCode.value.length >= 3) {
        PostCodeInvalid.setAttribute("style", "display: none;");
    } else {
        PostCodeInvalid.setAttribute("style", "display: block;");
    }
})

inputAddress.addEventListener("keyup", function () {
    if (inputAddress.value.length != "") {
        AddressInvalid.setAttribute("style", "display: none;");
    } else {
        AddressInvalid.setAttribute("style", "display: block;");
    }
})

inputPhone.addEventListener("keyup", function () {
    if (rule_phone.test(inputPhone.value) === true && inputPhone.value.length == 10) {
        PhoneInvalid.setAttribute("style", "display: none;");
    } else {
        PhoneInvalid.setAttribute("style", "display: block;");
    }
})

inputEmail.addEventListener("keyup", function () {
    if (rule_email.test(inputEmail.value) === true) {
        EmailInvalid.setAttribute("style", "display: none;");
    } else {
        EmailInvalid.setAttribute("style", "display: block;");
    }
})

// //生日
// var birth = document.querySelectorAll("#Birth");
// console.log(birth[0].value)