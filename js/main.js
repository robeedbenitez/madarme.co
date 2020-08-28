$(document).ready(function(){
  $('.menu-content li:has(ul)').click(function(e){
    e.preventDefault();
    if ($(this).hasClass('activate')) {
      $(this).removeClass('activate');
      $(this).children('ul').slideUp();
    }else {
      $('.menu-content li ul').slideUp();
      $('.menu-content li').removeClass('activate');
      $(this).addClass('activate');
      $(this).children('ul').slideDown();
    }

  });
});
