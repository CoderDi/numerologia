$(document).ready(function(){
  $(".js-module-open").on("click", function(){
    $('.' + $(this).data("module")).slideDown(500);
  });
  
});