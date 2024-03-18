if (typeof jQuery === "undefined") {
    throw new Error("jQuery plugins need to be before this file");
}
$(function() {
    "use strict";

    /*****Owl Slider************/
    $(document).ready(function(){
        $('.owl-carouselthree').owlCarousel({
            loop:true,
            margin:15,
            autoplay:true,
            autoplayTimeout:4000,
            autoplayHoverPause:true,
            responsive:{
                0:{
                    items:1
                },
                480:{
                    items:2
                },
                600:{
                    items:2
                },
                1000:{
                    items:3
                },
                1100:{
                    items:3
                },
                1400:{
                    items:8
                }
            }
        })
    });

    /*****Chatbox************/
   
    $(".friend").each(function(){		
        $(this).click(function(){
            var childOffset = $(this).offset();
            var parentOffset = $(this).parent().parent().offset();
            var childTop = childOffset.top - parentOffset.top;
            var clone = $(this).find('img').eq(0).clone();
            var top = childTop+12+"px";
            
            $(clone).css({'top': top}).addClass("floatingImg").appendTo("#rightchatbox");									
            
            setTimeout(function(){$("#profile p").addClass("animate");$("#profile").addClass("animate");}, 100);
            setTimeout(function(){
                $("#chat-messages").addClass("animate");
                $('.cx, .cy').addClass('s1');
                setTimeout(function(){$('.cx, .cy').addClass('s2');}, 100);
                setTimeout(function(){$('.cx, .cy').addClass('s3');}, 200);			
            }, 150);														
            
            $('.floatingImg').animate({
                'width': "68px",
                'left':'108px',
                'top':'20px'
            }, 200);
            
            var name = $(this).find("p strong").html();
            var email = $(this).find("p span").html();														
            $("#profile p").html(name);
            $("#profile span").html(email);			
            
            $(".message").not(".right").find("img").attr("src", $(clone).attr("src"));									
            $('#friendslist').fadeOut();
            $('#chatview').fadeIn();
        
            
            $('#close').unbind("click").click(function(){				
                $("#chat-messages, #profile, #profile p").removeClass("animate");
                $('.cx, .cy').removeClass("s1 s2 s3");
                $('.floatingImg').animate({
                    'width': "40px",
                    'top':top,
                    'left': '12px'
                }, 200, function(){$('.floatingImg').remove()});				
                
                setTimeout(function(){
                    $('#chatview').fadeOut();
                    $('#friendslist').fadeIn();				
                }, 50);
            });
            
        });
    });			
    
});

