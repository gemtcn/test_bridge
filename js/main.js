import $ from "jquery";
// import bootstrap from "bootstrap/dist/js/bootstrap";

$('#toggleMobileMenu').on('click', function () {
  if ($('.br-header--main__content').hasClass('show')) {
    $('.br-header--main__content').removeClass('show');
    $('body').removeClass('no-scroll');
    $(this).removeClass('show');
  } else {
    $('.br-header--main__content').addClass('show');
    $('body').addClass('no-scroll');
    $(this).addClass('show');
  }
})

$("a[data-tooltip='hasTooltip']").on('click', function (e) {
  e.preventDefault();
  $(this).next('.br-tooltip').toggleClass('show');
})


// Detect ios
const isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);
const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

if (isSafari && iOS) {
  $('body').addClass('ios-content');
}