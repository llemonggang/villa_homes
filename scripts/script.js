$(document).ready(function() {
  $('#about-body').hide();
  $('#contact-body').hide();
  $('#history-body').hide();
  $('#gallery-body').hide();
  $('#services-body').hide();

  $('#home').click(function() {
    $('#about-body').hide();
    $('#services-body').hide();
    $('#contact-body').hide();
    $('#history-body').hide();
    $('#gallery-body').hide();
    $('#body-image').fadeTo( "slow" , 1)
  });

  $('#about').click(function() {
    $('#about-body').show();
    $('#services-body').hide();
    $('#contact-body').hide();
    $('#history-body').hide();
    $('#gallery-body').hide();
    $('#body-image').fadeTo( "slow" , 0.4);
  })

  $('#services').click(function() {
    $('#services-body').show();
    $('#about-body').hide();
    $('#contact-body').hide();
    $('#history-body').hide();
    $('#gallery-body').hide();
    $('#body-image').fadeTo( "slow" , 0.4)
  })

  $('#contact').click(function() {
    $('#contact-body').show();
    $('#about-body').hide();
    $('#services-body').hide();
    $('#history-body').hide();
    $('#gallery-body').hide();
    $('#body-image').fadeTo( "slow" , 0.4)
  })

  $('#history').click(function() {
    $('#history-body').show();
    $('#about-body').hide();
    $('#services-body').hide();
    $('#contact-body').hide();
    $('#gallery-body').hide();
    $('#body-image').fadeTo( "slow" , 0.4)
  })

  $('#gallery').click(function() {
    $('#gallery-body').show();
    $('#about-body').hide();
    $('#services-body').hide();
    $('#contact-body').hide();
    $('#history-body').hide();
    $('#body-image').fadeTo( "slow" , 0.4)
  })

});
