$(function(){
    $(".simple-accordion-title-shell").click(function(){
        if($(this).parent().hasClass("open")){
            $(this).parent().removeClass("open").addClass("closed");
            $(this).next("div").slideUp("1000");
        }
        else if($(this).parent().hasClass("closed")){
        	$(this).next("div").slideDown("200");
            $(this).parent().removeClass("closed").addClass("open");
        }
    });
});

