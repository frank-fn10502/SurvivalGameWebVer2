let user = document.querySelector(".user-login-info a");

let ModalAccount = document.getElementById("ModalAccount");
let Modalrule_account = /^[a-zA-Z_]\w*$/;

let ModalPassword = document.getElementById("ModalPassword");
let Modalrule_password = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,35}$/;

let ModalAccountInvalid = document.querySelector(".ModalAccountInvalid");
let ModalPasswordInvalid = document.querySelector(".ModalPasswordInvalid");

let ModalLoginButton = document.querySelector(".login100-form-btn");

user.addEventListener("click", function () {
    $("#Login").modal('show');

    ModalAccount.addEventListener("keyup", function () {
        if (Modalrule_account.test(ModalAccount.value) === true && ModalAccount.value != "") {
            ModalAccountInvalid.setAttribute("style", "display: none;");
        } else {
            ModalAccountInvalid.setAttribute("style", "display: block;");
        }
    })

    ModalPassword.addEventListener("keyup", function () {
        if (Modalrule_password.test(ModalPassword.value) === true && ModalPassword.value != "") {
            ModalPasswordInvalid.setAttribute("style", "display: none;");
        } else {
            ModalPasswordInvalid.setAttribute("style", "display: block;");
        }
    })

//})

ModalLoginButton.onclick = function (e) {
    e.preventDefault();
    //alert("XDDD");

    if ((ModalAccountInvalid.getAttribute("style") != "display: none;") && (ModalPasswordInvalid.getAttribute("style") != "display: none;")) {
        alert("µn¤J¸ê®Æ¿ù»~");
        return;
    }

    let ModalMemberItem = {
        Account: ModalAccount.value,
        Password: ModalPassword.value
    };
    console.log(JSON.stringify(ModalMemberItem));
    $.ajax({
        url: "/Member/GetLogin",
        method: "post",
        contentType: 'application/json',
        data: JSON.stringify(ModalMemberItem),
        success: function () {
            //window.location.href = '/Home/Index';
        }
    });
}