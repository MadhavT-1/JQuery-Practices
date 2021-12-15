$("document").ready(function(){
 

// $("#appendTo").click(function(){

//     $("#container p:first").appendTo("#container p:last");

//   });


// $("#prependTo").click(function(){

//     $("p:last").prependTo("p:first");
    
//   });

  $("#insertafter").click(function(){

    $("p").after("**");
    
  });

  $("#insertbefore").click(function(){

    $("p").before("**");
    
  });

  $("#prependTo").click(function(){

    $("<p> New Para</p>").insertAfter("p:first");
    
  });
 
  
$("#appendTo").click(function(){

  $("<p> New Para</p>").insertBefore("p:first");

});
   


});