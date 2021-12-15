$("document").ready(function(){
 
$("#add-class").click(function(){

    $("#container p").addClass("color");
});

$("#remove-class").click(function(){

    $("#container p").removeClass("color");
});

$("#toggle-class").click(function(){

    $("#container p:last").toggleClass("color");
});


$("#increase").click(function(){

    $("#container p:first").css("font-size", "+=1px");
});

$("#decrease").click(function(){

    $("#container p:first").css("font-size", "-=1px");
});

});