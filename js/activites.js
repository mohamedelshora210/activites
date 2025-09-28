'use strict'

let aboutOffset = $('#activites').offset().top ;
let footerOffset = $('footer').offset().top - $(window).height();
$(window).on('scroll',function(){
    let currentScroll = $(window).scrollTop();
    if(currentScroll > aboutOffset)
    {
        $('.top').slideDown(300);
    }
    else
    {
        $('.top').slideUp(300);
    }
});

$(window).on('scroll',function(){
     let currentScroll = $(window).scrollTop();
     if(currentScroll > footerOffset)
     {
        $('.top').css({
            'background-color' : '#eee',
            'color' : '#2c3e50'
        })
     }
     else
     {
        $('.top').css({
            'background-color' : '#2c3e50',
            'color' : '#eee'
        })
     }
})

$('.top').on('click' , ()=>{
    $('html , body').animate({scrollTop : 0 } , 300);
});

$(document).ready(function(){
    setTimeout(() => {
        $('.load').fadeOut(400)
    }, 1500);
})

