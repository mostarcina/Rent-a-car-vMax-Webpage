$('.header a').on('click', function(e){
    if(this.hash !== ''){
        e.preventDefault();
        const hash = this.hash;
        $('html,body').animate({
            scrollTop:$(hash).offset().top
        },800);
    }
});


$('.footer-list a').on('click', function(e){
    if(this.hash !== ''){
        e.preventDefault();
        const hash = this.hash;
        $('html,body').animate({
            scrollTop:$(hash).offset().top
        },800);
    }
});

$('.bg__text-box a').on('click', function(e){
    if(this.hash !== ''){
        e.preventDefault();
        const hash = this.hash;
        $('html,body').animate({
            scrollTop:$(hash).offset().top
        },800);
    }
});