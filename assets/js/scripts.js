$(document).ready( function() { 
    var menu__counter = false;
    $(".header__burger").click(function(){
        if(!menu__counter){
            $(".menu").show();
            menu__counter = true;
        }else{
            $(".menu").hide();
            menu__counter = false;
        }
    });
    
});