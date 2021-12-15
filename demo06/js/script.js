$("document").ready(function(){

     $("#fade-in").on("click",function(){
          $("#box").fadeIn(3000,function(){
               alert("Fade In Complete");
          });
       });

     $("#fade-out").on("click",function(){
     $("#box").fadeOut("fast",function(){
          alert("Fade Out Complete");
     });
     });
     
});