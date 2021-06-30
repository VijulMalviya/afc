
 AOS.init();
 
$("#bar").click(function(){
    $("#navslide").slideToggle();
  });
  $(".links").click(function(){
    $("#navslide").slideToggle();
  });

  $(window).on("load",function(){
    $(".loading").fadeOut(2000);
  });