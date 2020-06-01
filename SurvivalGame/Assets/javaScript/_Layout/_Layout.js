let user;
let AccountInvalid;
let PasswordInvalid;
let Account
let Password;

let rule_account = /^[a-zA-Z_]\w*$/;
let rule_password = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,35}$/;
var isLogin = false;

function checkLoginStatus() {
    let authData = localStorage.getItem('Authorization');
    if (authData) {
        $.ajax({
            type: "Post",
            url: checkLoginUrl,
            dataType: "JSON",
            //add jwt token
            headers: {
                Authorization: authData
            },
            success: function (response) {
                if (response.Status) {
                    isLogin = true;
                    document.querySelector('.user-login-info a').setAttribute('data-toggle', "dropdown");

                    if(document.querySelector('#accountId').className.includes('show'))
                    {
                        $('#accountId').dropdown();
                    }
                    document.querySelector('#accountId').style.display = "";

                    
                    document.querySelector('.user-login-info .accountName span:first-child').innerHTML = response.Name;
                    $('#accountId').dropdown('update')
                    if (response.Token) {
                        localStorage.setItem('Authorization', data.Token);
                    }
                }
            }
        });
    }
}

function initLayout() {
    user = document.querySelector(".user-login-info > a");
    Account = document.querySelector(".modal-content .ModalAccount");
    Password = document.querySelector(".modal-content .ModalPassword");
    AccountInvalid = document.querySelector(".modal-content .ModalAccountInvalid");
    PasswordInvalid = document.querySelector(".modal-content .ModalPasswordInvalid");
    isLogin = false;

    user.addEventListener("click", function () {
        if (isLogin) {
            $('#accountId').dropdown();
        }
        else {
            $("#Login").modal('show');
        }
    });
    Account.addEventListener("keyup", function () {
        if (rule_account.test(Account.value) === true && Account.value != "") {
            AccountInvalid.setAttribute("style", "display: none;");
        } else {
            AccountInvalid.setAttribute("style", "display: block;");
        }
    });
    Password.addEventListener("keyup", function () {
        if (rule_password.test(Password.value) === true && Password.value != "") {
            PasswordInvalid.setAttribute("style", "display: none;");
        } else {
            PasswordInvalid.setAttribute("style", "display: block;");
        }
    });
    document.querySelector('.user-login-info #accountId a').addEventListener('click', function (e) {
        e.preventDefault();
        isLogin = false;
        localStorage.removeItem('Authorization');


        $('#accountId').dropdown();
        $('#accountId').dropdown('update')
        document.querySelector('#accountId').style.display = "none";
    })

    checkLoginStatus();

    let loginBtn = document.querySelector('.modal-content .login100-form-btn');
    loginBtn.addEventListener('click', function (e) {
        e.preventDefault();

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
            success: function (data) {
                localStorage.setItem('Authorization', data.token);
                checkLoginStatus();
                $("#Login").modal('hide');
            }
        });
        // alert('test modal');
    });
}

$(document).ready(function () {
    initLayout();
});