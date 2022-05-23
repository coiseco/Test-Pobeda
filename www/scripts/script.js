$(document).ready(function () {


  //menu-animation
  $('.menu-item').on('click', function (e) {
    e.preventDefault();

   $('.j-hidden-border').removeClass('active');
   $(this).find('.j-hidden-border').addClass('active');
   $('.j-menu-link').removeClass('active-link');
   $(this).find('.j-menu-link').addClass('active-link');
  });


  //phone mask
  $("#phone").mask('+7 (999) 999-99-99')
})
