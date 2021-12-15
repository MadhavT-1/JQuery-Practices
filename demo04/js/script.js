$("document").ready(function(){

     $("#box").on("click", whenMouseClicked);
     $("#box").on("mouseleave", whenMouseLeaves);
     function whenMouseClicked(){
          $("#box").html("<h4>Hey Madhav ..Clicked</h4>");
     }

     function whenMouseLeaves(){
          $("#box").html("<h4>hey where r u going</h4>");
     }

});