$("document").ready(function(){

     $(".para1").hover(highlight);

     function highlight(){
          $(this).toggleClass("highlight");
     }

});