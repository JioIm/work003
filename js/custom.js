$(function(){
    $('.MainSlide .visual_slide').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        dots: true,
        infinite: true,
        speed: 1000,
        fade: true,
        cssEase: 'linear'
    });
    $(window).on('scroll', function (){
        const scrollHeight = $(window).scrollTop();
        if(scrollHeight > 0) {
        $('.Header').addClass('on')
        }else {
        $('.Header').removeClass('on')
        }
    });

    $('.MainVisual .business_slide').slick({
        dots: false,
        arrows: false,
        centerMode: true,
       variableWidth: true,
    });

    $('.MainVisual .business_slide').on('afterChange', function(e,s,c){
        $('.MainVisual .bar span').css({
            left: c* 135 + 'px',
        })
        $('.MainVisual .num strong').text(c + 1);
    })

    $('.MainVisual .arrows .left').on('click', function(){
        $('.main_slide .business_slide').slick('slickPrev');
    });
    $('.MainVisual .arrows .right').on('click', function(){
        $('.main_slide .business_slide').slick('slickNext');
    });


    
})