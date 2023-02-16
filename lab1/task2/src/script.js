$(function () {
    $("#slideCont1").on("click", function () {
        $(".slide1").fadeIn();
    });
$(".slide1").hover(function () {
    $(".slide1").fadeOut();
});
$("#slideCont2").on("click", function () {
    $(".slide2").fadeIn();
});
$(".slide2").hover(function () {
$(".slide2").fadeOut();
});
$("#slideCont3").on("click", function () {
    $(".slide3").fadeIn();
});
$(".slide3").hover(function () {
$(".slide3").fadeOut();
});

})