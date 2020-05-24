let email = document.getElementById("MailSend")
var idRule = /^[a-zA-Z]\w*$/;
var login = document.getElementById("LoginId")
var PWD = document.getElementById("LoginPWD")
var BtnLogin = document.getElementById("BtnLogin")
console.log(document.getElementById("Buy"))
BtnLogin.addEventListener("click", function () {
    if (login.value == "Admin" && PWD.value == "Admin") {
        $('#MemberLogin').modal('toggle')
        let BtnBuy = document.getElementById("Buy");
        let BtnSignIn = document.getElementById("SignIn");
        BtnBuy.classList.remove("d-none")
        BtnSignIn.classList.add("d-none")
        TempAlert(login.value)
    } else {
        alert("帳號或密碼錯誤")
    }
})
//登入見面 帳號檢定
login.addEventListener("change", function () {
    let loginalert = document.querySelector('.LoginError')
    if (login.value.search(idRule) != -1) {
        login.style.outline = "none"
        loginalert.style.visibility = "hidden"
    } else {
        login.style.outline = "2px solid red"
        loginalert.style.visibility = "visible"
    }
})
//查詢密碼 會員帳號檢定
document.getElementById("Id").addEventListener("change", function () {
    let idalert = document.querySelector('.MailId')
    if (document.getElementById("Id").value.search(idRule) != -1) {
        document.getElementById("Id").style.outline = "none"
        idalert.style.visibility = "hidden"
    } else {
        document.getElementById("Id").style.outline = "2px solid red"
        idalert.style.visibility = "visible"

    }
})
//傳送信件
email.addEventListener("click", function () {
    let Id = document.getElementById("Id");
    let Email = document.getElementById("Email")
    let emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
    if (Email.value.search(emailRule) != -1 && Id.value.search(idRule) != -1) {
        SendEmail(Id, Email)
        $('#FogetPWD').modal('toggle')
        Email.value = "";
        Id.value = "";
        loginalert.style.visibility = "visible"
    } else {
        alert("帳號或郵件填寫錯誤");
    }
});

function SendEmail(idtmp, eltmp) {
    Email.send({
        SecureToken: "d3b735aa-0723-46d1-9d26-87e1edbfb945",
        To: `${eltmp.value}`,
        From: "管理者<bsmvc20@gmail.com>",
        Subject: "密碼已經被重設",
        Body: `使用者${idtmp.value}`
    }).then(
        message => alert(message)
    );
}

function TempAlert(msg) {
    let el = document.createElement("div")
    el.setAttribute("style",
        "text-align:center;position:fixed;font-size:30px;color:white;top:25%;left:25%;background:rgba(0,0,0,0.6);width:50%;")
    el.innerText = `歡迎${msg}登入`;
    setTimeout(function () {
        el.parentNode.removeChild(el);
    }, 2000)
    document.body.appendChild(el);
}