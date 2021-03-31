$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      addSticky();
    } else {
      removeSticky();
    }
  });

  $(".menu-toggler").click(function () {
    $(this).toggleClass("active");
    $(".navbar-menu").toggleClass("active");
  });
});

function addSticky() {
  $(".navbar").addClass("sticky");
  $(".logo").removeClass("shadow");
  $(".navbar-menu").removeClass("shadow");
}

function removeSticky() {
  $(".navbar").removeClass("sticky");
  $(".logo").addClass("shadow");
  $(".navbar-menu").addClass("shadow");
}
