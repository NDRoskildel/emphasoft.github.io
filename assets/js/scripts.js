$(document).ready( function() {
    // Menu script
    if ( $(window).width() < 993 ) {

        $(".menu").hide();
        var menu__counter = false;
        // click burger
        $(".header__burger").click(function(){
            if(!menu__counter){
                $(".menu").slideDown(500);
                menu__counter = true;
            }else{
                $(".menu").slideUp(500);
                menu__counter = false;
            }
        });
        // click menu__item
        $(".menu__item").click(function(){
            if(!menu__counter){
                $(".menu").slideDown(500);
                menu__counter = true;
            }else{
                $(".menu").slideUp(500);
                menu__counter = false;
            }
        });

    }else{
        $(".menu").css({"display":"flex"});
    }

    // Menu script if resize window
    $(window).resize(function() {
        if ( $(window).width() < 993 ) {

            $(".menu").hide();
            var menu__counter = false;

            // click burger
            $(".header__burger").click(function(){
                if(!menu__counter){
                    $(".menu").slideDown(500);
                    menu__counter = true;
                }else{
                    $(".menu").slideUp(500);
                    menu__counter = false;
                }
            });

            // click menu__item
            $(".menu__item").click(function(){
                if(!menu__counter){
                    $(".menu").slideDown(500);
                    menu__counter = true;
                }else{
                    $(".menu").slideUp(500);
                    menu__counter = false;
                }
            });
        }else{
            $(".menu").css({"display":"flex"});
        }
    });
});