$(document).scroll(function(){
  if($(document).width() < 1024)
    return false;

  if($(document).scrollTop() > $('.section_head').height() / 2)
    $("header").addClass("fixed");
  else
    $("header").removeClass("fixed");
});

function slowScroll(id) {
  $("html, body").animate({
    scrollTop: $(id).offset().top
  }, 500);
  return false;
}

$(".header .menu").on("click", function() {
  if($("header .mobile-menu").is(":visible"))
    $(this).html('<i class="fa-solid fa-bars"></i>');
  else
    $(this).html('<i class="fa-solid fa-xmark"></i>');


  $("header .mobile-menu").slideToggle();
});

$('.video-play img, #modal_video .close_button').on('click', function() {
  $("#modal_video").toggle();
  $("body").toggleClass("overflow-hidden");
  resizeVideo();
});

$(window).on('resize', function() {
  resizeVideo();
}).resize();

function resizeVideo() {
  $("iframe").each(function() {
    let width = $(this).width();
    $(this).css("height", width / 1.77 + "px");
  });
}
