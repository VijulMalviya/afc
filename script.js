
 $(window).on("load",function(){
  $(".loading").fadeOut(2000);
});

 AOS.init();

$("#bar").click(function(){
    $("#navslide").slideToggle();
  });



  $(".links").click(function(){
    $("#navslide").slideToggle();
  });



  $({ Counter: 0 }).animate({
    Counter: $('.trainer').text()
  }, {
    duration: 2000,
    easing: 'swing',
    step: function() {
      $('.trainer').text(Math.ceil(this.Counter));
    }
  });

  $({ Counter: 0 }).animate({
    Counter: $('.member').text()
  }, {
    duration: 2000,
    easing: 'swing',
    step: function() {
      $('.member').text(Math.ceil(this.Counter));
    }
  });

