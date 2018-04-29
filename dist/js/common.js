var owl = $('.owl-slider-doctors');
owl.owlCarousel({
	items: 1
});

// Go to the next item
$('.right-hint-control').click(function() {
	owl.trigger('next.owl.carousel', [300]);
})

// Go to the previous item
$('.left-hint-control').click(function() {
		// With optional speed parameter
		// Parameters has to be in square bracket '[]'
		owl.trigger('prev.owl.carousel', [300]);
	})


$(document).ready(function(){
  $(".owl-slider-testimonials").owlCarousel({
  	items: 2,
  	nav: false,
  	dots: true,
  	margin: 30,
    autoHeight:true
  });
});

jQuery(document).ready(function($) {
    $('.popup-js').magnificPopup({
        type: 'inline',
        removalDelay: 300,
        callbacks: {
        beforeOpen: function() {
           this.st.mainClass = this.st.el.attr('data-effect');
        }}
    });
});


$(document).ready(function() {
  $('.mask-phone').mask("8 (999) 999-9999");
});

$(document).ready(function() {
  $(".brazzers-slider-js").brazzersCarousel();
});

jQuery(document).ready(function() {
  jQuery("a.scrollto-js").click(function () {
    elementClick = jQuery(this).attr("href")
    destination = jQuery(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
    return false;
  });
});


! function(i) {
  var o, n;
  i(".price-table__header").on("click", function() {
    o = i(this).parents(".price-table__info-block"), n = o.find(".price-table__conten-table"),

    o.hasClass("price-table___info-block--active") ? (o.removeClass("price-table___info-block--active"),
      n.slideUp()) : (o.addClass("price-table___info-block--active"), n.stop(!0, !0).slideDown(),
      o.siblings(".price-table___info-block--active").removeClass("price-table___info-block--active").children(
        ".price-table__conten-table").stop(!0, !0).slideUp())
    })
}(jQuery);

