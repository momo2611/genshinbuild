//Filter section
$(document).ready(function(){
    $(".button").click(function(){
        var name = $(this).attr('data-filter');
        if(name == "all"){
            $(".shot-thumbnail").show('2000');
        }else{
            $(".shot-thumbnail").not("."+name).hide('2000');
            $(".shot-thumbnail").filter("."+name).show('2000');
        }
    })
    $(".navigation-filter a").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
    })
    // Feedback
    $('#slider').owlCarousel({
        loop:true,
        margin:15,
        nav:false,
        autoplay: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })
    $("#btnfb").click(function(){
        $('html, body').animate({
            scrollTop: $("#feedback").offset().top
        }, 1000);
    })
    $("#btnft").click(function(){
        $('html, body').animate({
            scrollTop: $("#footer").offset().top
        }, 1000);
    })
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });
    
    //Click event to scroll to top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
});

