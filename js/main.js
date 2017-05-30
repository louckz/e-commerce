/* global $, alert, console */
// start nav
$(document).ready(function(){
$('#newsletterBtn').on('click', function() {
$ ('#emailField').addClass('animated shake');
$('#emailField').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
  $('#emailField').removeClass('animated shake');
});
});
});

// start slider
$(document).ready(function(){
  $('.carousel').carousel({
    interval: 6000
  });
});

$(document).ready(function(){
var scrollButton = $("#scroll-top");
$(window).scroll(function()
{
  $(this).scrollTop() >= 700 ? scrollButton.show() :scrollButton.hide();

  });
  // click on button to scroll top
     scrollButton.click(function()
     {
         $("html,body").animate({ scrollTop : 0}, 600);
     });


  $('.carousel').carousel({
    interval: 10000
  });
});

$(document).ready(function () {

    $('[data-toggle="popover"]').popover({
        placement: 'top',
        delay: {
            show: 0,
            hide: 100
        }
    });

    $('[data-toggle="popover"]').click(function () {

        setTimeout(function () {
            $('.popover').fadeOut('slow');
        }, 6000);

    });

});

// $(document).ready(function(){
//    $('[data-toggle="popover"]').popover();
// });
//
$(function() {

  $('.bt').mouseenter(function() {

    $(this).find('#bto').slideDown(200);

 });

	$('.bt').mouseleave(function() {

		$(this).find('#bto').slideUp();

 });
 });

 $(function() {

   $('.bt').mouseenter(function() {

     $(this).find('#btoo').slideDown(200);

  });

 	$('.bt').mouseleave(function() {

 		$(this).find('#btoo').slideUp();

  });
  });

  $(function() {

    $('.bt').mouseenter(function() {

      $(this).find('#btooo').slideDown(200);

   });

  	$('.bt').mouseleave(function() {

  		$(this).find('#btooo').slideUp();

   });
   });


// start contact

$(function(){

// Debut Formulaire
  function verifnom(){

  if($("#nom").val().match(/^[a-zA-Zéèçà ]{1,30}$/)){

  $("#nom").css("border","2px solid green");

  }else {

    $("#nom").css("border","2px solid red");

  }
  };

  function verifprenom(){

  if($("#prenom").val().match(/^[a-zA-Zéèçà ]{1,30}$/)){

    $("#prenom").css("border","2px solid green");

  }else {

  $("#prenom").css("border","2px solid red");

  }
  };



  function verifage(){

  if($("#age").val().match(/^[0-9]+$/) >= 16){

    $("#age").css("border","2px solid green");

  }else {

      $("#age").css("border","2px solid red");

  }

  };


  function verifemail(){

  if($("#email").val().match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)){

    $("#email").css("border","2px solid green");

  }else {

      $("#email").css("border","2px solid red");

  }

  };

  function verifcommentaire(){

  if($("#commentaire").val().match(/^[a-zA-Zéèçà .:,?!-""]{1,400}$/)){

    $("#commentaire").css("border","2px solid green");

  }else {

  $("#commentaire").css("border","2px solid red");

  }
  };

  $("#nom").on('input', verifnom);
  $("#prenom").on('input', verifprenom);
  $("#age").on('input', verifage);
  $("#email").on('input', verifemail);
  $("#commentaire").on('input', verifcommentaire);

  $("form").submit(function(){
    var veriffinalnom = verifnom();
    var veriffinalprenom = verifprenom();
    var veriffinalage = verifage();
    var veriffinalemail = verifemail();
    var veriffinalcommentaire = verifcommentaire();

    if (veriffinalemail && veriffinalage && veriffinalnom && veriffinalprenom && veriffinalcommentaire) {
      return true; // pour ne pas bloquer l'envoi du formulaire
    } else {
      return false; // pour bloquer l'envoi du formulaire
    }
  });

// Fin Formulaire

});
