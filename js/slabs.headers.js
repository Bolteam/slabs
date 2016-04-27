var checkNavScroll;

slabs.headers = slabs.headers || {};

slabs.headers.header2 = function() {
  return $('.header-2').slick({
    dots: true,
    infinite: true,
    autoplaySpeed: 8000,
    speed: 500,
    prevArrow: '<i class="slick_prev fa fa-angle-left"></i>',
    nextArrow: '<i class="slick_next fa fa-angle-right"></i>',
    autoplay: true,
    fade: true
  });
};

(function($) {
  return $(function() {

    /* implementing headers */
    var header, headerNumber;
    for (header in slabs.headers) {
      header = header;
      headerNumber = header.slice(6);
      if (jQuery('.header-' + headerNumber).length !== 0) {
        slabs.headers[header]();
      }
      return;
    }
  });
})(jQuery);

checkNavScroll = function() {
  var startY;
  startY = $('.navbar-transparent').height() * 2;
  if ($(window).scrollTop() > startY) {
    $('.navbar-transparent').addClass('scrolled');
  } else {
    $('.navbar-transparent').removeClass('scrolled');
  }
};

$(function() {
  if ($('.navbar-transparent').length > 0) {
    console.log("Starting!!!");
    return $(window).on('scroll load resize', function() {
      checkNavScroll();
    });
  }
});
