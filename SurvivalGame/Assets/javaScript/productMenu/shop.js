let fakeTitlelistRandom = `前幾天有在其他篇看到某樓板友也有相同問題所以當時有回文交流
就是使用中有機率會黑屏或是直接畫面凍結死當
原本有懷疑自己是機王，但幾天下來看01上有幾篇版友的回覆都有遇過這個問題
昨天另一個現實朋友也購入G14新機，剛剛也因為發生同樣問題詢問我有沒有遇到
他去了皇家也用內建的MYASUS檢測，因為是偶發性皇家也沒檢查出東西，MYASUS檢測大家似乎也都是正常的，目前"我個人"看到有人有同樣問題或是現實朋友也有發生已經有好幾例到底是AMD的鍋還是華碩的問題，N的1650TI跟1660TI都不算新產品了，加上我自己GU501跟502都沒有發生過
，所以沒有把N算在問題內客服也根本不用浪費時間打，100%是叫你還原，還原無效建議你送修，並且絕對沒有其他人有反應同樣問題
，問題是買這台就是為了主辦公副娛樂，螢幕保護貼跟上蓋保護貼也貼了，到底是個案or機王還是調教或韌體
呢，Win10更新到最新，BIOS也更新到最新版了，而朋友那邊第一版BIOS也同樣有這情形
附個照片，這台真的是很棒的一台機器，娛樂跟辦公+外型都能兼顧，但目前帶給我的只有麻煩`;

let fakeCategoryData = [
    {
        categoryTitle: "槍枝",
        categoryItemList: [
            { Name: 'a gun' },
            { Name: '2 gun' },
            { Name: '3 gun' },
        ]
    },
    {
        categoryTitle: "服飾",
        categoryItemList: [
            { Name: '衣服' },
            { Name: '衣服2' },
            { Name: '衣服3' },
        ]
    },
    {
        categoryTitle: "配件",
        categoryItemList: [
            { Name: '配件' },
            { Name: '配件2' },
            { Name: '配件3' },
        ]
    },
]
let fakeProductData = [
    // {
    //     name: '',
    //     price: '',
    //     onsalePrice:'',
    //     img:''
    // },
]
let fakeSubClassData = [
    {
        rangeList: [
            {
                Title: "價錢",
                min: 20,
                max: 40000
            }
        ],
        colorList: [
            {
                Title: "顏色",
                colorItemList: [
                    {
                        Name: "紅色",
                        colorCode: "#f00"
                    },
                    {
                        Name: "綠色",
                        colorCode: "#0f0"
                    },
                    {
                        Name: "藍色",
                        colorCode: "#00f"
                    },
                ]
            }
        ],
        otherList: [
            {
                Title: "廠商",
                Attributes: [
                    { Name: "Asus" },
                    { Name: "Acer" },
                    { Name: "Msi" },
                ]
            }
        ]
    }

]


let catagoryA = null, subCatagory = null, catagoryBtn = null;
let firstPage = true;

function initActivate() {
    var favme = $(".favme");

    favme.on('click', function () {
        $(this).toggleClass('active');
    });

    favme.on('click touchstart', function () {
        $(this).toggleClass('is_animating');
    });

    favme.on('animationend', function () {
        $(this).toggleClass('is_animating');
    });

    // :: Tooltip Active Code
    if ($.fn.tooltip) {
        $('[data-toggle="tooltip"]').tooltip();
    }

    // :: PreventDefault a Click
    $("a[href*='#']").on('click', function ($) {
        $.preventDefault();
        // console.log("in button");
    });

    // :: Slider Range Price Active Code
    $('.slider-range-price').each(function () {
        var min = jQuery(this).data('min');
        var max = jQuery(this).data('max');
        var unit = jQuery(this).data('unit');
        var value_min = jQuery(this).data('value-min');
        var value_max = jQuery(this).data('value-max');
        var label_result = jQuery(this).data('label-result');
        var t = $(this);
        $(this).slider({
            range: true,
            min: min,
            max: max,
            values: [value_min, value_max],
            slide: function (event, ui) {
                var result = label_result + " " + unit + ui.values[0] + ' - ' + unit + ui.values[1];
                // console.log(t);
                console.log("test");
                t.closest('.slider-range').find('.range-price').html(result);
            }
        });
    });
}

function setEvent() {
    if (firstPage) {
        catagoryBtn = document.querySelector('.catagoryTitle .btn');
        catagoryBtn.addEventListener('click', (e) => {
            if (e.currentTarget.className.includes('unselect')) {
                subCatagory.forEach(x => {
                    x.classList.remove('activateA');
                });
                catagoryA.forEach(x => {
                    if (x != e.currentTarget) {
                        $(`#${x.parentElement.querySelector('ul').id}`).collapse('hide');
                    }
                });
                e.currentTarget.classList.remove('unselect');
                resetDisply();
            }
        });

        catagoryA = this.document.querySelectorAll('#menu-content2 > li > a');
        catagoryA.forEach(x => {
            x.addEventListener('click', (e) => {
                console.log("catagory top test");
                catagoryA.forEach(x => {
                    if (x != e.currentTarget) {
                        $(`#${x.parentElement.querySelector('ul').id}`).collapse('hide');
                        //x.classList.remove('activateA');
                    }
                });
                e.currentTarget.classList.add('activateA');
            });
        });

        subCatagory = this.document.querySelectorAll('#menu-content2 ul a');
        subCatagory.forEach(x => {
            x.addEventListener('click', (e) => {
                console.log("catagory test");
                subCatagory.forEach(x => {
                    x.classList.remove('activateA');
                });
                e.currentTarget.classList.add('activateA');
                catagoryBtn.classList.add('unselect');

                let idDatas = e.currentTarget.getAttribute('data-id').split('_');
                let caID = idDatas[0];
                let clID = idDatas.length > 1 && idDatas[1] != "" ? idDatas[1] : undefined;
                resetDisply(caID, clID);
            });
        });
    }
    let pCards = this.document.querySelectorAll('.shop_grid_product_area .single-product-wrapper');
    pCards.forEach(x => {
        x.addEventListener('click', (e) => {
            window.location.href = `./productDetails?PID=${e.currentTarget.getAttribute('data-PID')}`;
        });
    });

    let filter = this.document.querySelectorAll('.filterArea .nomalAttr ul a');
    filter.forEach(x => {
        x.addEventListener('click', (e) => {
            console.log("filter test");
            if (e.currentTarget.className.includes('activateA'))
                e.currentTarget.classList.remove('activateA');
            else
                e.currentTarget.classList.add('activateA');

        });
    });
    let filterColor = this.document.querySelectorAll('.filterArea .widget.color.colorAttr li > a');
    filterColor.forEach(x => {
        x.addEventListener('click', (e) => {
            console.log("filter color test");
            if (e.currentTarget.className.includes('boxSelected'))
                e.currentTarget.classList.remove('boxSelected');
            else
                e.currentTarget.classList.add('boxSelected');

        });
    });
}
function getRealData() {
    let productMenu = this.document.querySelector(".shop_grid_product_area .row:last-child");
    productMenu.innerHTML = '';
    productMenu.innerHTML = createEntity(fakeProductData, ['#singleProductTemplate']).innerHTML;


    let pNum = this.document.querySelector('#productCount');
    pNum.innerHTML = fakeProductData.length;

    if (firstPage) {
        let catagoryPanel = this.document.querySelector('.catagories-menu .menu-content');
        catagoryPanel.innerHTML = '';
        catagoryPanel.innerHTML = createEntity(fakeCategoryData, ['#catagoryTemplate', '#categoryItemList']).innerHTML;
    }

    let classPanel = this.document.querySelector('.shop_sidebar_area .filterArea');
    classPanel.innerHTML = "";
    classPanel.innerHTML = createEntity(fakeSubClassData, ['#filterTemplate', '#pricePaternTemplate',
        ['#colorPaternTemplate', '#colorItemList'],
        ['#normalAttrTemplate', '#normalAttrItemList']]).innerHTML;


    setEvent();
}

function resetDisply(caID = undefined, clID = undefined) {
    new Promise((resolve, reject) => {
        $.ajax({
            type: "GET",
            url: "/Product/GetCatagoryItems",
            dataType: "JSON",
            data: { "CaId": caID, "clID": clID },
            success: function (response) {
                console.log(response);
                fakeCategoryData = response.CatagoryList;
                fakeProductData = response.ProductList;
                fakeSubClassData = response.Attributes;

                resolve("get Data from sql server Donme!!!");
            },
            error: function (r) {

            }
        });
    }).then((e) => {
        getRealData();
        initActivate();
        firstPage = false;
    });
}

window.onload = function () {
    let test = this.document.querySelectorAll(".nice-select li");
    test.forEach(x => {
        x.addEventListener('click', (x) => {
            console.log(x.currentTarget.innerHTML);
        });
    });
    console.log(test);

    this.resetDisply();
}