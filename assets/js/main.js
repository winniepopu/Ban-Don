var now = 1;
var prev = 6;
var next = 2;

$(document).ready(function() {
    setTimeout("setTable()", 300);
    setTimeout("setText()", 2000);
    setTimeout("setTitle1()", 2700);
    setTimeout("setTitle2()", 3200);
})

function setTable() {
    // $('.chair1 , .chair2 ,.chair3 ,.chair4 ,.chair5 ,.table').transition('fade up', 2000);
    $('.chair,.table').transition('fade up', 2000);
}

function setText() {
    $('.intro').transition('fade right', 2000);
}

function setTitle1() {
    $('.one').transition('fade down', 2000);
}

function setTitle2() {
    $('.two').transition('fade down', 2000);
    $('.bandon').transition('fade down', 2000);

}



function ChairMouseover() {
    $(".chair img").attr("src", "assets/media/wchair.png");
}

function ChairMouseout() {
    $(".chair img").attr("src", "assets/media/chair.png");
}



// 按下椅子後的動作
function disappear() {
    $(".chair").html("<img src='assets/media/chair.png'/>") //讓椅子不能再被按
        // $('.bac').css("display", "block");
    $('.bac').transition('fade', 1000)


    // setTimeout("btn_back()", 4000);

    $('.intro').transition('fade left', 2000);
    $('.one').transition('fade up', 2000);
    $('.two').transition('fade up', 2000);
    $('.bandon').transition('fade up', 2000);

    move();
    setTimeout("meat_appear()", 1800);


}


// 椅子桌椅移動
function move() {
    $('.table').animate({
        "left": "0vw",
        "width": "100vw",
        "bottom": "-22vh"
    }, 2000, function() {});




    $('.chair:nth-child(1)').animate({
        "left": "3vw",
        "width": "12vw",
        "bottom": "47vh"
    }, 2000, function() {});


    $('.chair:nth-child(2)').animate({
        "left": "22vw",
        "width": "11.5vw",
        "bottom": "65vh"
    }, 2000, function() {});


    $('.chair:nth-child(3)').animate({
        "left": "43vw",
        "width": "11.5vw",
        "bottom": "75vh"
    }, 2000, function() {});

    $('.chair:nth-child(4)').animate({
        "left": "67vw",
        "width": "10vw",
        "bottom": "67vh"
    }, 2000, function() {});

    $('.chair:nth-child(5)').animate({
        "left": "85vw",
        "width": "12vw",
        "bottom": "47vh"
    }, 2000, function() {});

}

function back() {
    $(".chair").html("<img src='assets/media/chair.png' onmouseover='ChairMouseover()' onmouseout='ChairMouseout()' onclick='disappear()' title='入席'>") //讓椅子不能再被按
    $('.bac').transition('fade', 1000);

    // setTimeout("btn_back()", 100);

    $('.intro').transition('fade right', 2000);
    $('.one').transition('fade down', 2000);
    $('.two').transition('fade down', 2000);
    $('.bandon').transition('fade down', 2000);

    setTimeout("meat_disappear()", 100);



    $('.table').animate({
        "left": "-7vw",
        "width": "60%",
        "bottom": "-13vw"
    }, 2000, function() {});

    $('.chair:nth-child(1)').animate({
        "left": "1.83vw",
        "width": "8%",
        "bottom": "12vw"
    }, 2000, function() {});


    $('.chair:nth-child(2)').animate({
        "left": "12.8vw",
        "width": "7%",
        "bottom": "16vw"
    }, 2000, function() {});


    $('.chair:nth-child(3)').animate({
        "left": "23.79vw",
        "width": "7%",
        "bottom": "16vw"
    }, 2000, function() {});

    $('.chair:nth-child(4)').animate({
        "left": "34.77vw",
        "width": "8%",
        "bottom": "14vw"
    }, 2000, function() {});

    $('.chair:nth-child(5)').animate({
        "left": "47.58vw",
        "width": "10%",
        "bottom": "6vw"
    }, 2000, function() {});

}

//餐品出現
function meat_appear() {
    $('.dish').transition('scale', 1000);
    $('.left-button').transition('scale', 1000);
    $('.right-button').transition('scale', 1000);
}


//餐品消失
function meat_disappear() {
    $('.dish').transition('scale', 1000);
    $('.left-button').transition('scale', 1000);
    $('.right-button').transition('scale', 1000);
}

//餐品詳細內頁
function dish_page(t) {
    if (t == 1) {
        $('.rec .page-pic img').attr("src", "assets/media/rmeat.png");
        $('.rec .page-word h3').text("東坡肉");
        $('.rec .page-word p').text("正統的東坡肉，油而不膩，入口即化，一口接一口，讓人無法放下筷子。提到東坡肉的來源，跟中國宋代的大文豪「蘇東坡」有著密不可分的關係。蘇東坡，名軾，字子瞻，是個文學家兼美食家，不只為後代留下了許多美妙的詩詞，更留下了這道美味的佳餚。");
        $('.rec').transition('fade up', 1500);

    } else if (t == 2) {
        $('.rec .page-pic img').attr("src", "assets/media/rrice.png");
        $('.rec .page-word h3').text("紅蟳荷葉米糕");
        $('.rec .page-word p').text("紅蟳米糕源自福建福州的名菜，當地稱為八寶蟳飯或紅蟳八寶飯，我們今天吃的這個是用舊米、蓮子、蛋黃、蝦米等料在蒸籠內去蒸，整個紅蟳的蟹黃也都很飽滿，這道米糕是對於時間的敬意，也是考驗師傅對於選材能力。");
        $('.rec').transition('fade up', 1500);
    } else if (t == 3) {
        $('.rec .page-pic img').attr("src", "assets/media/rfish.png");
        $('.rec .page-word h3').text("清蒸魚");
        $('.rec .page-word p').text("魚象徵著繁榮和盈餘( 年年有魚 )。除夕這一天人們準備除舊迎新，吃團圓飯。家人的團聚往往令一家之主在精神上得到安慰與滿足，老人家眼看兒孫滿堂，一家大小共敘天倫，過去的關懷與撫養子女所付出的心血總算沒有白費，這是何等的幸福。而年輕一輩，也正可以藉此機會向父母的養育之恩表達感激之情。");
        $('.rec').transition('fade up', 1500);
    } else if (t == 4) {
        $('.rec .page-pic img').attr("src", "assets/media/rveget.png");
        $('.rec .page-word h3').text("炒青菜");
        $('.rec .page-word p').text("只要是炒青菜，空心菜、莧菜、湯匙菜、野蓮或高麗菜等菜蔬的烹調手法大同小異–菜莖菜葉挑揀開來，武火燒鍋下冷油與鹽，依據不同的菜蔬爆香蒜末、辣椒或薑絲增添層次香氣，先炒莖再炒葉，起鍋前噴灑些許米酒即可。因為是高溫爆炒，拋鍋翻滾不出幾分鐘便該盛盤，炒青菜就是該熱呼呼地吃才過癮。");
        $('.rec').transition('fade up', 1500);
    } else if (t == 5) {
        $('.rec .page-pic img').attr("src", "assets/media/rcolddish.png");
        $('.rec .page-word h3').text("冷盤");
        $('.rec .page-word p').text("共七道冷盤，有大肉、烏魚子、蝦棗丸、螺肉、滷豬舌、海蜇花、松阪豬，承裝的七仙女盤，七仙女寓意吉祥，七道食物的烹調方式不同，食材也不重複，考驗總舖師的底蘊。");
        $('.rec').transition('fade up', 1500);
    } else if (t == 6) {
        $('.rec .page-pic img').attr("src", "assets/media/rfo.png");
        $('.rec .page-word h3').text("佛跳牆");
        $('.rec .page-word p').text("清光緒年間，一福州官錢局官員在家宴請福建按察使周蓮，主料為雞、鴨、豬等約為十多種，用紹興酒罈精心煨製而成。周蓮品嘗後讚不絕口，問及菜名，該官員說該菜取「吉祥如意、福壽雙全」之意，名「福壽全」。另一說，「福壽全」的福州腔似「佛跳牆」，遂以訛傳訛至今。");
        $('.rec').transition('fade up', 1500);
    }
}

// 取消餐品內頁
function cancel() {
    $('.rec').transition('fade down', 1000);
}


// 下一道菜
function next_dish() {
    $('.left-button').transition('scale', 500);
    $('.right-button').transition('scale', 500);

    var this_dish = $(".dish:nth-child(" + now + ")");
    var next_dish = $(".dish:nth-child(" + next + ")");

    // 縮小
    // 1動2動
    // 2放大
    smaller(this_dish);
    rotate(this_dish, next_dish);
    bigger(next_dish);

    next++;
    now++;
    prev++;

    checkParameters();
    setTimeout("button_appear()", 4000);

}

// 前一道菜
function prev_dish() {
    $('.left-button').transition('scale', 500);
    $('.right-button').transition('scale', 500);

    var this_dish = $(".dish:nth-child(" + now + ")");
    var last_dish = $(".dish:nth-child(" + prev + ")");

    smaller(this_dish);
    rotate_reverse(this_dish, last_dish);
    bigger(last_dish);

    next--;
    now--;
    prev--;

    console.log("next:", next)
    console.log("now:", now)
    console.log("prev:", prev)

    checkParameters();
    setTimeout("button_appear()", 4000);


}

// 確定參數
function checkParameters() {
    if (next > 6) {
        next = 1;
    }
    if (now > 6) {
        now = 1;
    }
    if (prev > 6) {
        prev = 1;
    }

    if (next < 1) {
        next = 6;
    }
    if (now < 1) {
        now = 6;
    }
    if (prev < 1) {
        prev = 6;
    }

}


// 按鈕恢復出現
function button_appear() {
    $('.left-button').transition('scale', 500);
    $('.right-button').transition('scale', 500);

}

// 餐品變大
function bigger(dish) {

    if (next == 6) {
        dish.animate({
            "top": "48 vh",
            "width": "20vw",
            "left": "40vw",
        }, 1000, function() {});

    } else if (prev == 6) {
        dish.animate({
            "top": "48 vh",
            "width": "20vw",
            "left": "40vw",
        }, 1000, function() {});

    } else {
        dish.animate({
            "top": "57 vh",
            "width": "27vw",
            "left": "36vw",
        }, 1000, function() {});
    }
}

// 餐品變小
function smaller(this_dish) {
    var this_dish = $(".dish:nth-child(" + now + ")");
    this_dish.animate({
        "width": "16vw",
        "left": "42vw",
        "bottom": "2.5vh"
    }, 1000, function() {});
}

//按下right_button，順時鐘轉
function rotate(this_dish, next_dish) {
    var arc_params = {
        center: [44, 100],
        radius: 24,
        start: 180,
        end: 0,
        dir: -1
    }

    //vw
    // var arc_params = {
    //     center: [44, 60],
    //     radius: 24,
    //     start: 180,
    //     end: 0,
    //     dir: -1
    // }


    var arc_params2 = {
        center: [55, 100],
        radius: 40,
        start: 0,
        end: 200,
        dir: -1
    }

    // 佛跳牆 next to this
    var arc_params3 = {
        center: [60, 100],
        radius: 50,
        start: 0,
        end: 200,
        dir: -1
    }

    this_dish.animate({
        path: new $.path.arc(arc_params),
    }, 3000);


    if (next == 6) {
        console.log("666")
        next_dish.animate({
            path: new $.path.arc(arc_params3),
        }, 3000);

    } else {
        next_dish.animate({
            path: new $.path.arc(arc_params2),
        }, 3000);
    }


}


//按下left_button，逆時鐘轉
function rotate_reverse(this_dish, last_dish) {
    var arc_params = {
        center: [44, 100],
        radius: 35,
        start: 0,
        end: 180,
        dir: 1
    }
    var arc_params2 = {
        center: [55, 100],
        radius: 35,
        start: 200,
        end: 0,
        dir: 1
    }

    var arc_params3 = {
            center: [44, 95],
            radius: 50,
            start: 0,
            end: 180,
            dir: 1
        }
        //fo this -> last
    var arc_params4 = {
        center: [55, 100],
        radius: 44,
        start: 200,
        end: 0,
        dir: 1
    }

    if (now == 6) {
        this_dish.animate({
            path: new $.path.arc(arc_params4),
        }, 3000);

    } else {
        this_dish.animate({
            path: new $.path.arc(arc_params2),
        }, 3000);
    }


    if (prev == 6) {
        console.log("666")
        last_dish.animate({
            path: new $.path.arc(arc_params3),
        }, 3000);

    } else {
        last_dish.animate({
            path: new $.path.arc(arc_params),
        }, 3000);
    }
}