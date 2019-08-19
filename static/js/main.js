// $('.trainer-img').on('mouseenter', function(){
//     var name = $(this).attr('name');
//     $('.section_our-team .name').text(name);
// })
// $('.trainer-img').on('mouseleave', function(){
//     $('.section_our-team .name').text('');
// })

var currentPhoto = 0;
$('.img-wrapper').click(function(){
	currentPhoto = $('.img-wrapper').index(this);
	$('.full-img-wrapper').css('opacity','1');
	$('.full-img-wrapper').css('pointer-events','all');
	$('.full-img-wrapper img').attr('src',$(this).find('img').attr('src'));
})
$('.full-img-wrapper .cover').click(function(){
	$('.full-img-wrapper').css('opacity','0');
	$('.full-img-wrapper').css('pointer-events','none');
})

$('.full-img-wrapper .arrow.next').click(function(){
    var el = parseInt(currentPhoto)+1;
	if($('.gallery-wrapper .img-wrapper:nth-child('+el+') img').is('img')){
		currentPhoto++;
		var src = $('.gallery-wrapper .img-wrapper:nth-child('+el+') img').attr('src');
		$('.full-img-wrapper img').attr('src',src);
	}
})
$('.full-img-wrapper .arrow.prev').click(function(){
	var el = parseInt(currentPhoto)-1;
	if($('.gallery-wrapper .img-wrapper:nth-child('+el+') img').is('img')){
		currentPhoto--;
		var src = $('.gallery-wrapper .img-wrapper:nth-child('+el+') img').attr('src');
		$('.full-img-wrapper img').attr('src', src);
	}
})


 $('a[hrf]').bind('click', function(){
	 if($(window).innerWidth()<1100){
		 $('html,body').animate({
			 scrollTop: $($(this).attr('hrf')).offset().top-40}, 0);
		 $('.hamburger').click();
	 }
	 else{
		 $('html,body').animate({
			 scrollTop: $($(this).attr('hrf')).offset().top-40}, 600);
	 }
 })
$(window).on("scroll",function(){
	(parseInt($('header').offset().top) > 650)
	    ?$('header').attr('backgroundActive','')
	    :$('header').attr('backgroundActive',null)
});

var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 4,
    loop: true,
    freeMode: true,
    loopedSlides: 5, //looped slides should be the same
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});
var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    loop:true,
    loopedSlides: 5, //looped slides should be the same
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: galleryThumbs,
    },
});

// Shine effect
$( '.suggest, .trainer-img, .advantage' ).on('mousemove', function (e) {
	const x = e.pageX - $(this).offset().left;
	const y = e.pageY - $(this).offset().top;
	$(this).find('.light').css( 'left', x + 'px' );
	$(this).find('.light').css( 'top', y + 'px' );
})

$(window).on('scroll',function () {
	$('.background').css('transform', 'translateY('+$(window).scrollTop() / 3+'px)')
	$('.scroll__line').css('width',($(window).scrollTop()/($(document).height()-$(window).height()))*100+'%')
});
