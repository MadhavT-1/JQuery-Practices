$("document").ready(function(){
  // alert($("#container").html());

  $("#create").click(function(){
    $("#container p:first").html("<p> Replaced and created this text</p>")
  });

  $("#create-text").click(function(){
    $("#container p:last").html("<p> Replaced and created this text</p>")
  });


  $("#create-variable").click(function(){
    var newtext =$('#container p:last');
    $("#container p:first").html(newtext);
  });

});