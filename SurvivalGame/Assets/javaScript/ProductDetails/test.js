var AddCart = document.querySelector(".cart-list");
var Re = document.querySelectorAll(".single-cart-item");
var AddItem = document.getElementsByName("addtocart")
var btncart = document.querySelector(".cart-area")
var itemcount = document.querySelector(".cart-area span")
var cartcount = document.querySelector(".cart-button span")
AddItem[0].addEventListener('click', function () {
    Addshop()
    itemcount.innerText = AddCart.children.length
    cartcount.innerText = AddCart.children.length
})

btncart.addEventListener('click', function () {
    let RemoveCart = AddCart.children
    for (let i = 0; i < RemoveCart.length; i++) {
        RemoveCart[i].addEventListener('click', function () {
            AddCart.removeChild(this)
            itemcount.innerText = AddCart.children.length
            cartcount.innerText = AddCart.children.length
        });

    }
})

function Addshop() {
    let AddItem = document.getElementById("TemplateCart");
    let PColor = document.querySelector("#ProductColor")
    let PCount = document.querySelector("#ProductCount")
    let cloneContent = AddItem.content.cloneNode(true);
    let badge = cloneContent.querySelector(".badge");
    let name = cloneContent.querySelector(".Brief");
    let count = cloneContent.querySelector(".size");
    let color = cloneContent.querySelector(".color");
    let price = cloneContent.querySelector(".price");
    badge.textContent = document.querySelector(".BadgeName").innerText;
    name.textContent = document.getElementById("ProductName").innerText;
    count.textContent = PCount.selectedOptions[0].text;
    color.textContent = PColor.selectedOptions[0].text;
    price.textContent = document.querySelector(".product-price span").innerText;
    AddCart.appendChild(cloneContent);
}