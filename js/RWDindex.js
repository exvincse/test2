$(document).ready(function () {
  $(".hamburger-menu").click(function () {
    $(".menu").addClass("show");
    $(".bg-black").addClass("show-bg-black");
    $("body").addClass("scroll-hidden");
  });

  $(".bg-black").click(function () {
    $(".menu").removeClass("show");
    $(".bg-black").removeClass("show-bg-black");
    $("body").removeClass("scroll-hidden");
  });

  $(".menu")
    .find("a")
    .click(function () {
      $(".menu").removeClass("show");
      $(".bg-black").removeClass("show-bg-black");
      $("body").removeClass("scroll-hidden");
    });
});
