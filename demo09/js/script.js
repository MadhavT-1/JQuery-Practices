$("document").ready(function(){

  $("#slide-up").click(function(){
    $("#para").slideUp(4000,"linear");
  });

  $("#slide-down").click(function(){
    $("#para").slideDown(4000,"linear");
  });

  $("#toggle-slide").click(function(){
    $("#para").slideToggle("fast",function(){
      alert("Slide is now " + $("#para").css("display"));
    });
  });

});