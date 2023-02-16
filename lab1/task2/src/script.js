let flag = true;
$(function () {
    $(".slide1").on("click", function () {
        if (flag) {
            $("#slideCont1").fadeOut();
            flag = false;
        }
        else {
            $("#slideCont1").fadeIn();
            flag = true;
        }
    });
    $(".slide2").on("click", function () {
        if (flag) {
            $("#slideCont2").fadeOut();
            flag = false;
        }
        else {
            $("#slideCont2").fadeIn();
            flag = true;
        }
    });
    $(".slide3").on("click", function () {
        if (flag) {
            $("#slideCont3").fadeOut();
            flag = false;
        }
        else {
            $("#slideCont3").fadeIn();
            flag = true;
        }
    });


})