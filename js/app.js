function responsivize() {
  $('.responsive')
    .css({
      height: $(window).height() + 'px',
      width:  $(window).width() + 'px',
    });
}

$(document).ready(function() {
  
  $('#fillHeader').fitText(0.5);
  $('.featured-image').imgLiquid();
  responsivize();
  $(window).on('resize', responsivize);

  setTimeout(function() {
    $('div.featured-image h1').fadeIn(1000);
  }, 300);
  
  $('div.featured-image').click(function() {
    $("html, body").animate({
      'scrollTop': $('#about').offset().top - 50
    });
    
    // $('.navbar-brand').addClass('black');
    // $('.nav a').addClass('black');
    // $('.navbar').css('display: block;');
    
    $('#fillText').fitText(0.4);
    // responsivize();
  });
  
  $('#nabout').click(function() {
    $('html, body').animate({
      'scrollTop': $('#about').offset().top - 50
    });
    // responsivize();
  });
  
  $('#nwork').click(function() {
    $('html, body').animate({
      'scrollTop': $('#work').offset().top - 50
    });
    // responsivize();
  });
  
  $('#nskills').click(function() {
    $('html, body').animate({
      'scrollTop': $('#skills').offset().top - 50
    });
    // responsivize();
  });
  
  $('#ncontact').click(function() {
    $('html, body').animate({
      'scrollTop': $('#contact').offset().top - 50
    });
    // responsivize();
  });
  
});