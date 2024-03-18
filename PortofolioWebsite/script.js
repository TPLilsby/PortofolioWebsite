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

  
  // valider formular
  const form = document.getElementById('contactForm');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    
    form.addEventListener('submit', function(event) {
      if (!validateEmail(emailInput.value)) {
        event.preventDefault();
        alert('Indtast venligst en gyldig e-mailadresse.');
      }

      if (!validatePhone(phoneInput.value)) {
        event.preventDefault();
        alert('Telefonnummeret må kun indeholde numeriske tegn.');
      }
    });

    function validateEmail(email) {
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    }

    function validatePhone(phone) {
      const re = /^\d+$/;
      return re.test(phone);
    }