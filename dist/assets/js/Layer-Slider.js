$(window).scroll(function(){
  var scroll = $(window).scrollTop();
  if((scroll > 0)&&(scroll >= 10)){
    $('.image-holder').addClass('scale-img');
    $('.image2-holder').addClass('scale-img');
    $('.image3-holder').addClass('scale-img');
  }
  else if(scroll < 10){
    $('.image-holder').removeClass('scale-img');
    $('.image2-holder').removeClass('scale-img');
    $('.image3-holder').removeClass('scale-img');
  }
})