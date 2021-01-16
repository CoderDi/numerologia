$(document).ready(function(){
  $(".js-module-open").on("click", function(){
    if ($(this).data("module") == "module2") {
      $(".module__open3").css("padding-top", 70);
      $(".module3-img").css("top", 70);
    } else {
      $(".module__open3").addClass("open");
      $(".module3").css("padding-top", 250);
      $(".modules").css("padding-bottom", 0);
    }
    
    $('.' + $(this).data("module")).show();
  });
  
});