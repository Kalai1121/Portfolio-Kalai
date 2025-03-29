// Carousel script
$(document).ready(function(){
    $('#carouselControls').carousel({
        interval: 3000
    });
});

// Smooth scrolling script
$(document).ready(function(){
    $("a.nav-link").on('click', function(event) { 
        if (this.hash !== "") { 
            event.preventDefault();
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 70
            }, 800);
        }
    });
});

// Skill block hover effect script
$(document).ready(function(){
    $('.skill-block').hover(function(){
        $(this).css('background-color', '#e9e4f5');
    }, function(){
        $(this).css('background-color', 'rgba(255, 255, 255, 0.1)');
    });
});

// Portfolio image hover effect script
$(document).ready(function(){
    $('.carousel-inner img').hover(function(){
        $(this).css('opacity', '0.5');
    }, function(){
        $(this).css('opacity', '1');
    });
});

// Navigation bar script
$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.navbar').addClass('fixed-top');
        } else {
            $('.navbar').removeClass('fixed-top');
        }
    });
     // Close navbar on link click (for mobile)
     $(".navbar-nav .nav-link").click(function(){
        $(".navbar-collapse").collapse('hide');
    });
});

// Scroll to top script
$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 200) {
            $('.scroll-to-top').fadeIn();
        } else {
            $('.scroll-to-top').fadeOut();
        }
    });
    $('.scroll-to-top').click(function(){
        $('html, body').animate({scrollTop: 0}, 800);
    });
});