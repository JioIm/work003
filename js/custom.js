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


    
})