;(function (params) {
  let scrollTop = null
  $(window).scroll(function () {
    scrollTop = $(window).scrollTop()
    $(".header").stop()
    if (scrollTop>200) {
      $(".header").slideUp();
    }else{
      $(".header").slideDown();
    }
  }) 
}())