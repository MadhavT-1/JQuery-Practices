$("document").ready(function(){

  $("#grow").click(function(){
    $("#box").animate({ width: '500px'},1000);
  });

  $("#move").click(function(){
    $("#box").animate({ marginLeft: '200px'},1000);
  });

  $("#increase").click(function(){
    $("#box").animate({ fontSize:"30px"},1000);
  });
  $("#domany").click(function(){
    $("#box").animate({ width: '500px',marginLeft: '200px',fontSize:"30px" },1000);
  });
});