let email = document.getElementById("MailSend")
var idRule = /^[a-zA-Z]\w*$/;
var login = document.getElementById("LoginId")
var PWD = document.getElementById("LoginPWD")
var BtnLogin = document.getElementById("BtnLogin")
var test = document.querySelector(".btn.btn-outline-danger")
var additem = document.querySelector(".CartItemList")
var detaillist = [];
var pid = 1
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
test.addEventListener('click', function () {
    let rnum = Math.floor(Math.random() * 20 + 1)
    let temp = {
        name: '',
        brief: '',
        count: '',
        price: '',
    }
    let ItemTmp = document.getElementById("TemplateCartItem")
    let cloneContent = ItemTmp.content.cloneNode(true);
    let productId = cloneContent.querySelector('.CartSingleItem')
    let img = cloneContent.querySelector(".CartImg img");
    let num = Math.floor(Math.random() * 540 + 1);
    let name = cloneContent.querySelector('.CartName a')
    let total = cloneContent.querySelectorAll(".CartTotal")[0].children[1]
    let brief = cloneContent.querySelectorAll(".CartBrief")[0].children[1]
    let price = cloneContent.querySelectorAll(".CartPrice")[0].children[1]
    let count = cloneContent.querySelector(".CartCount select")
    let setkey = cloneContent.querySelector('.CartRemove a')
    productId.setAttribute("id", `P0${pid}`);
    setkey.setAttribute("data-key", `P0${pid}`)
    img.src = `https://picsum.photos/200/200/?random=${rnum}`
    name.textContent = "台灣製造 銀色 HFC 112 P8 6mm ABS 手拉空氣槍"
    temp.name = "台灣製造 銀色 HFC 112 P8 6mm ABS 手拉空氣槍"
    brief.textContent = "HA112S"
    temp.brief = "HA112S"
    price.textContent = `$${num}`
    temp.price = num
    for (let i = 1; i < rnum; i++) {
        let option1 = document.createElement("option")
        option1.value = i;
        option1.text = i;
        count.add(option1)
    }
    total.textContent = `$${num}`
    additem.appendChild(cloneContent)
    ReCart(pid);
    pid++
    temp.count = rnum
    var ChangeProduct = document.querySelectorAll(".CartName")
    detaillist.push(temp)
    ChangeProudct(ChangeProduct);

});

function ChangeSelect() {
    $(document).ready(function () {
        $('select').niceSelect();
    });
}

function ReCart(el) {
    let caritem = document.querySelector(`#P0${el} .CartRemove a`)
    caritem.addEventListener('click', function () {
        let tmp = this.getAttribute("data-key")
        let Re = document.getElementById(`${tmp}`)
        additem.removeChild(Re)
    })
}

function ChangeProudct(el) {
    el.forEach((element, index) => {
        element.addEventListener("click", function (e) {
            let tmp = detaillist[index]
            let productName = document.querySelectorAll(".CartChangeName span")[1]
            let productBrief = document.querySelectorAll(".CartChangeBrief span")[1]
            let productPrice = document.querySelectorAll(".CartChangePrice span")[1]
            let productCount = document.querySelectorAll(".CartChangeCount .list")[0]
            let num = document.querySelector('.CartChangeCount .current')
            productCount.innerHTML = '';
            productName.innerText = tmp.name
            productBrief.innerText = tmp.brief
            productPrice.innerText = tmp.price
            for (let i = 1; i < tmp.count; i++) {
                let op = document.createElement("li")
                op.innerText = i
                op.setAttribute("data-value", i)
                op.classList.add('option')
                if (i == 1) {
                    num.innerText = i
                    op.classList.add('selected')
                }
                productCount.appendChild(op)
            }
        })
    });
    ChangeSelect();

}