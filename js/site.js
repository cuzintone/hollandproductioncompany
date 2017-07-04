$(document).ready(function () {
    "use strict";
    $("#theCarousel").carousel();
    // Enable Carousel Indicators
    $(".item1").click(function () {
        $("#theCarousel").carousel(0);
    });
    $(".item2").click(function () {
        $("#theCarousel").carousel(1);
    });
    $(".item3").click(function () {
        $("#theCarousel").carousel(2);
    });
    $(".item4").click(function () {
        $("#theCarousel").carousel(3);
    });
    // Enable Carousel Controls
    $(".left").click(function () {
        $("#theCarousel").carousel("prev");
    });
    $(".right").click(function () {
        $("#theCarousel").carousel("next");
    });
});