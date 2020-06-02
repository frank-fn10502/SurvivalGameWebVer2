let inputName = document.getElementById("Name");
let rule_name = /^[\a-\z\A-\Z\u2E80-\u9FFF]*$/;

let inputAccount = document.getElementById("Account");
let rule_account = /^[a-zA-Z_]\w*$/;

let inputPassword = document.getElementById("Password");
let rule_password = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,35}$/;

let inputCheckPassword = document.getElementById("CheckPassword");

let inputBirth = document.getElementById("Birth");

let inputPostCode = document.getElementById("PostCode");
let rule_postCode = /^\d{3,6}$/;

let inputAddress = document.getElementById("Address");
let rule_address = /^[\a-\z\A-\Z\u2E80-\u9FFF]*$/;

let inputPhone = document.getElementById("Phone");
let rule_phone = /^09\d{8}$/;

let inputEmail = document.getElementById("Email");
let rule_email = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;

let NameInvalid = document.querySelector(".NameInvalid");
let AccountInvalid = document.querySelector(".AccountInvalid");
let PasswordInvalid = document.querySelector(".PasswordInvalid");
let CheckPasswordInvalid = document.querySelector(".CheckPasswordInvalid");
let BirthdayInvalid = document.querySelector(".BirthdayInvalid");
let PostCodeInvalid = document.querySelector(".PostCodeInvalid");
let AddressInvalid = document.querySelector(".AddressInvalid");
let PhoneInvalid = document.querySelector(".PhoneInvalid");
let EmailInvalid = document.querySelector(".EmailInvalid");

let InvalidFeedback = document.querySelectorAll(".invalid-feedback");
let submit = document.getElementById("Registered");

submit.addEventListener("click", function () {
    for (let i = 0; i < InvalidFeedback.length; i++) {
        if (InvalidFeedback[i].getAttribute("style") != "display: none;") {
            alert("資料不完整");
            return;
        }
    }

    if (!$("#Look").prop('checked')) {
        alert("請勾選會員條款");
        return;
    }

    let MemberItem = {
        Name: inputName.value,
        Account: inputAccount.value,
        Password: inputPassword.value,
        Birth: inputBirth["value"],
        postcode: inputPostCode.value,
        address: inputAddress.value,
        phone: inputPhone.value,
        email: inputEmail.value
    };
    console.log(JSON.stringify(MemberItem));
    $.ajax({
        url: "/Member/GetRegistered",
        method: "post",
        contentType: 'application/json',
        data: JSON.stringify(MemberItem),
        success: function () {
            //window.location.href = '/Home/Index';
        }
    });
})


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
    if (rule_password.test(inputPassword.value) === true && inputPassword.value != "") {
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

inputBirth.addEventListener("change", function () {
    if (inputBirth["value"] != "") {
        BirthdayInvalid.setAttribute("style", "display: none;");
    } else {
        BirthdayInvalid.setAttribute("style", "display: block;");
    }
})

inputPostCode.addEventListener("keyup", function () {
    if (rule_postCode.test(inputPostCode.value) === true && inputPostCode.value.length >= 3 && inputPostCode.value.length != "") {
        PostCodeInvalid.setAttribute("style", "display: none;");
    } else {
        PostCodeInvalid.setAttribute("style", "display: block;");
    }
})

inputAddress.addEventListener("keyup", function () {
    if (rule_address.test(inputAddress.value) === true && inputAddress.value.length != "") {
        AddressInvalid.setAttribute("style", "display: none;");
    } else {
        AddressInvalid.setAttribute("style", "display: block;");
    }
})

inputPhone.addEventListener("keyup", function () {
    if (rule_phone.test(inputPhone.value) === true && inputPhone.value.length == 10 && inputPhone.value.length != "") {
        PhoneInvalid.setAttribute("style", "display: none;");
    } else {
        PhoneInvalid.setAttribute("style", "display: block;");
    }
})

inputEmail.addEventListener("keyup", function () {
    if (rule_email.test(inputEmail.value) === true && inputEmail.value != "") {
        EmailInvalid.setAttribute("style", "display: none;");
    } else {
        EmailInvalid.setAttribute("style", "display: block;");
    }
})