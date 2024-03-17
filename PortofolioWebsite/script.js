$(document).ready(function() {
    // Glat rulleeffekt til ankerlinks
    $('nav a').on('click', function(event) {
      event.preventDefault();
      const targetId = $(this).attr('href');
      const targetOffset = $(targetId).offset().top;
      $('html, body').animate({
        scrollTop: targetOffset
      }, 1000);
    });
  
    // Vis "Om Mig" tekst og knap
    $('#showAboutMe').on('click', function(event) {
      event.preventDefault();
      $('#aboutMeText').slideDown();
    });
  });
  