let user;
let AccountInvalidLayout;
let PasswordInvalidLayout;
let AccountLayout;
let PasswordLayout;

let rule_accountLayout = /^[a-zA-Z_]\w*$/;
let rule_passwordLayout = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,35}$/;
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
    AccountLayout = document.querySelector(".modal-content .ModalAccount");
    PasswordLayout = document.querySelector(".modal-content .ModalPassword");
    AccountInvalidLayout = document.querySelector(".modal-content .ModalAccountInvalid");
    PasswordInvalidLayout = document.querySelector(".modal-content .ModalPasswordInvalid");
    isLogin = false;

    user.addEventListener("click", function () {
        if (isLogin) {
            $('#accountId').dropdown();
        }
        else {
            $("#Login").modal('show');
        }
    });
    AccountLayout.addEventListener("keyup", function () {
        if (rule_accountLayout.test(AccountLayout.value) === true && AccountLayout.value != "") {
            AccountInvalidLayout.setAttribute("style", "display: none;");
        } else {
            AccountInvalidLayout.setAttribute("style", "display: block;");
        }
    });
    PasswordLayout.addEventListener("keyup", function () {
        if (rule_passwordLayout.test(PasswordLayout.value) === true && PasswordLayout.value != "") {
            PasswordInvalidLayout.setAttribute("style", "display: none;");
        } else {
            PasswordInvalidLayout.setAttribute("style", "display: block;");
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

        if ((AccountInvalidLayout.getAttribute("style") != "display: none;") && (PasswordInvalidLayout.getAttribute("style") != "display: none;")) {
            alert("登入資料錯誤");
            return;
        }

        var MemberItem = {
            Account: AccountLayout.value,
            Password: PasswordLayout.value
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