setTimeout(function () {
    $(".header-content").addClass("i-fix");
    setTimeout(function () {
        $(".my-navbar").addClass("i-fix");
        $("#headerImg").addClass("scale-in-hor-left");
    }, 200)
}, 300)
// navbar
$(".nav-bars").click(() => {
    console.log("anan")
    $(".toggle-block").slideToggle(500);
})
// let lastScroll = 0;
// $(window).scroll(() => {
//     let nowScroll = $(window).scrollTop();
//     if (nowScroll < lastScroll) {
//         $(".my-navbar").addClass("i-fix");
//     } else {
//         $(".my-navbar").removeClass("i-fix");
//     }
//     lastScroll = nowScroll;
// })
// navbar end
const headerContentTarget = $(".header-content").offset().top;
const target = $(".men-product-group").offset().top;
const threeSection = $("#threeSection").position().top;
const fourSection = $("#fourSection").position().top;
const fiveSection = $("#fiveSection").position().top;
const menSection = $("#men").position().top;
console.log(threeSection);
console.log(fourSection);
console.log(fiveSection);
console.log(menSection);
setTimeout(function () {
    $("#threeSection").addClass("advance-sticky");
    $("#fourSection").addClass("advance-sticky");
    $("#fiveSection").addClass("advance-sticky");
    $("#men").addClass("advance-sticky");
}, 100)
$(window).scroll(() => {
    let scroll = $(window).scrollTop();
    // console.log(scroll);
    if (scroll > headerContentTarget - 50) {
        $(".content-box").addClass("i-fix");
    }
    // change position
    // if (scroll > threeSection - 1000) {
    //     $("#threeSection").addClass("advance-sticky");
    // }
    // if (scroll > fourSection - 1000) {
    //     $("#fourSection").addClass("advance-sticky");
    // }
    // if (scroll > fiveSection - 1000) {
    //     $("#fiveSection").addClass("advance-sticky");
    // }
    // if (scroll > menSection - 1000) {
    //     $("#men").addClass("advance-sticky");
    // }
    // change position
    if (scroll > (target - 500)) {
        $("#men").addClass("i-fix");
    } else {
        $("#men").removeClass("i-fix");
    }
    if (scroll < 700) {
        $(".change-btn").each(function () {
            if (parseInt($(this).attr("data-num")) == 1) {
                $(this).addClass("active").siblings().removeClass("active");
            }
        })
    }
    if (scroll > 801) {
        $(".change-btn").each(function () {
            if (parseInt($(this).attr("data-num")) == 2) {
                $(this).addClass("active").siblings().removeClass("active");
            }
        })
    }
    if (scroll > threeSection - 1) {
        $(".change-btn").each(function () {
            if (parseInt($(this).attr("data-num")) == 3) {
                $(this).addClass("active").siblings().removeClass("active");
            }
        })
    }
    if (scroll > fourSection - 1) {
        $(".change-btn").each(function () {
            if (parseInt($(this).attr("data-num")) == 4) {
                $(this).addClass("active").siblings().removeClass("active");
            }
        })
    }
    if (scroll > fiveSection - 1) {
        $(".change-btn").each(function () {
            if (parseInt($(this).attr("data-num")) == 5) {
                $(this).addClass("active").siblings().removeClass("active");
            }
        })
    }
    if (scroll > menSection - 1) {
        $(".change-btn").each(function () {
            if (parseInt($(this).attr("data-num")) == 6) {
                $(this).addClass("active").siblings().removeClass("active");
            }
        })
    }
    // amimate
    if (scroll > fourSection - 100) {
        $(".product-advance-container").addClass("i-fix");
        // $(".product-advance-container").addClass("slit-in-horizontal");
    }
    if (scroll > fiveSection - 100) {
        $(".glass-container").addClass("i-fix");
        // $(".glass-container").addClass("slit-in-horizontal");
    }
    // amimate end
})
$(".change-btn").click(function () {
    // setTimeout(function () {
    //     $(this).addClass("active").siblings().removeClass("active");
    // }, 900)
    const number = parseInt($(this).attr("data-num"));
    console.log(number);
    let position = 0;
    if (number == 1) {
        position = 0;
    } else if (number == 2) {
        position = 810;
    } else if (number == 3) {
        position = threeSection;
    } else if (number == 4) {
        position = fourSection;
    } else if (number == 5) {
        position = fiveSection;
    } else {
        position = menSection;
    }

    // const position = $(target).offset().top;
    console.log(position);
    $('html, body').stop().animate({
        scrollTop: position
    }, 800);
})