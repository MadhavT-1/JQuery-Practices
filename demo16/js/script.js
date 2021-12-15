$("document").ready(function(){
 

$("#append").click(function(){

    $("p:first").append("Appended text");

  });


$("#prepend").click(function(){

    $("p:first").prepend("Appended text");
    
  });




});