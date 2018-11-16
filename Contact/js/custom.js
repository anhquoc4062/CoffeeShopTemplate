/* SLIDING PAGES AND MENU SETUP (ASCENSOR) */

var ascensor = jQuery('#ascensorBuilding').ascensor({
    time: 1000,
    childType: 'section',
    swipeNavigation: false,
    keyNavigation: false
});
var ascensorInstance = jQuery('#ascensorBuilding').data('ascensor');

jQuery(".links-to-floor li:eq(" + ascensor.data("current-floor") + ")").addClass("selected-menu-item");

ascensor.on("scrollStart", function (event, floor) {
    "use strict";
    jQuery(".links-to-floor li").removeClass("selected-menu-item");
    jQuery(".links-to-floor li:eq(" + floor.to + ")").addClass("selected-menu-item");
});

jQuery('body').find('.links-to-floor li').on("click", function (e) {
    "use strict";
    e.preventDefault();
    window.location.hash = jQuery(this).data('slug');
    jQuery(".slider").gotoSlide(jQuery(this).data('id'));
    ascensorInstance.scrollToFloor(jQuery(this).data('id') - 1);
});

jQuery(window).load(function () {
    "use strict";
    jQuery('#submenu > ul > li:has(ul) > a').addClass("has-sub");
    var hash = window.location.hash.substr(1);
    
    if (window.location.hash)
    {        
        jQuery(".links-to-floor li").removeClass("selected-menu-item");        
        var smenu = jQuery(".links-to-floor li").filter('[data-slug="' + hash + '"]');       
        smenu.addClass("selected-menu-item");
        
        var floornumber = jQuery(".selected-menu-item").data('id');
        ascensorInstance.scrollToFloor(floornumber - 1);
        jQuery(".slider").gotoSlide(floornumber);
        
        setTimeout(function(){
            jQuery("body").find('#site-loading-left').transition({
            x: '-100%'
        },500,'easeInOutQuart').fadeOut();
            jQuery("body").find('#site-loading-right').transition({
            x: '100%'   
        },500,'easeInOutQuart').fadeOut();
        }, 1000);
    }
    else {
        jQuery("body").find('#site-loading-left').transition({
            x: '-100%'
        },500,'easeInOutQuart').fadeOut();
            jQuery("body").find('#site-loading-right').transition({
            x: '100%'
        },500,'easeInOutQuart').fadeOut();
    }
});

/* DROPDOWN MENU */

jQuery('#submenu ul > li > a').click(function() {
    "use strict";
	var checkElement = jQuery(this).next();
	jQuery('#submenu li').removeClass('selected-menu-item');
	jQuery(this).closest('li').addClass('selected-menu-item');

	if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
		checkElement.slideUp(200);
        jQuery(this).removeClass("has-sub2");
        jQuery(this).addClass("has-sub");
        jQuery(this).closest('li').removeClass('selected-menu-item');
	}

	if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
		jQuery('#submenu ul ul:visible').slideUp(200);
		checkElement.slideDown(200);
        jQuery('#submenu > ul > li:has(ul) > a').removeClass("has-sub2");
        jQuery('#submenu > ul > li:has(ul) > a').addClass("has-sub");
        jQuery(this).addClass("has-sub2");
	}

	if (checkElement.is('ul')) {
		return false;
	} else {
		return true;	
	}
});

/* MOBILE MENU */

jQuery('#mobile-menu-icon').click(function() {
    "use strict";
    jQuery('body').find('.left-bar').animate({
        'left': '0px'
        }, 500);
});
jQuery('#mobile-close-icon').click(function() {
    "use strict";
    jQuery('body').find('.left-bar').animate({
        'left': '-100%'
        }, 500);
});

jQuery('body').find('.links-to-floor ul li a').click(function() {
    "use strict";
    if (jQuery(window).width() < 800) {
    jQuery('body').find('.left-bar').animate({
        'left': '-100%'
        }, 500);
    }
});

jQuery(window).resize(function () {
    "use strict";
    if (jQuery(window).width() > 800) {
        jQuery('body').find('.left-bar').css('left', 'auto');
    }
    else {
        jQuery('body').find('.left-bar').css('left', '-100%');
    }
});

/* LEFT SLIDER */

jQuery(document).ready(function () {
    "use strict";
    jQuery(".slider").nerveSlider({
        sliderAutoPlay: false,
        sliderWidth: "100%",
        sliderHeight: "100%",
        slideTransitionDelay: 2000,
        slideTransitionSpeed: 1000,
        sliderResizable: true,
        sliderKeepAspectRatio: false,
        slideTransitionDirection: "down",
        allowKeyboardEvents: false,
        showDots: false,
        showTimer: false,
        showArrows: false,
        showPause: false
    });
});

/* HOME SLIDER */

jQuery(document).ready(function () {
    "use strict";
    jQuery("#home-slider").nerveSlider({
        slideTransition: "fade",
        sliderAutoPlay: false,
        sliderWidth: "100%",
        sliderHeight: "300px",
        sliderResizable: true,
        sliderKeepAspectRatio: false,
        slideTransitionSpeed: 1000,
        slideTransitionEasing: "easeOutExpo"
    });
});

/* CUSTOM SCROLLBAR */

(function ($) {
    "use strict";
    jQuery(document).ready(function () {
        $(".left-bar").mCustomScrollbar({
            scrollInertia: 0,
            autoHideScrollbar: true,
            theme: "light",
            advanced: {
                updateOnContentResize: true
            }
        });
    });
})(jQuery);

/* CSS3 EFFECTS */

jQuery(document).ready(function () {
    "use strict";
    jQuery('.icon-container').find('a').hover(
        function () {
            jQuery(this).find('.icon-bg').transition({
                perspective: '500px',
                rotateY: 180
            });
        },
        function () {
            jQuery(this).find('.icon-bg').transition({
                perspective: '500px',
                rotateY: 360
            });
        }
    );
});

jQuery(document).ready(function () {
    "use strict";
    jQuery('.social-icons li').find('img').hover(
        function () {
            jQuery(this).transition({
                rotate: '360deg'
            });
        },
        function () {
            jQuery(this).transition({
                rotate: '-360deg'
            });
        }
    );
});

/* OUR TEAM GRID */

jQuery(window).load(function () {
    "use strict";
    jQuery('body').find("ul.our-team-grid").append('<li data-x="3"></li>');
    jQuery('body').find('ul.our-team-grid').AwesomeGrid({
        rowSpacing: 20,
        initSpacing: 19,
        colSpacing: 20,
        columns: {
            'defaults': 3,
            '960': 1,
            '800': 3,
            '480': 1
        }
    });
});

/* EVENTS GRID */

jQuery(window).load(function () {
    "use strict";
    jQuery('body').find(".event-list").append('<li data-x="2"></li>');
    jQuery('body').find('.event-list').AwesomeGrid({
        rowSpacing: 20,
        initSpacing: 0,
        colSpacing: 20,
        columns: {
            'defaults': 2,
            '960': 1,
            '800': 2,
            '480': 1
        }
    });
});

/* GALLERY GRID */

jQuery(window).load(function () {
    "use strict";
    jQuery('body').find("ul.gallery-grid").append('<li data-x="2"></li>');
    jQuery('body').find('ul.gallery-grid').AwesomeGrid({
        rowSpacing: 20,
        initSpacing: 0,
        colSpacing: 20,
        columns: {
            'defaults': 2,
            '960': 1,
            '800': 2,
            '480': 1
        }
    });
});

/* COLORBOX */

jQuery(document).ready(function () {
    "use strict";
    jQuery('body').find(".coffees").colorbox({
        maxWidth: '95%',
        maxHeight: '95%',
        rel: 'coffees',
        title: function () {
            return jQuery(this).data('title');
        }
    });
    jQuery('body').find(".teas").colorbox({
        maxWidth: '95%',
        maxHeight: '95%',
        rel: 'teas',
        title: function () {
            return jQuery(this).data('title');
        }
    });
    jQuery('body').find(".food").colorbox({
        maxWidth: '95%',
        maxHeight: '95%',
        rel: 'food',
        title: function () {
            return jQuery(this).data('title');
        }
    });
    jQuery('body').find(".deserts").colorbox({
        maxWidth: '95%',
        maxHeight: '95%',
        rel: 'deserts',
        title: function () {
            return jQuery(this).data('title');
        }
    });
});

/* EVENTS POPUP BOXES */

jQuery(document).ready(function () {
    "use strict";
    jQuery('.popup-inline').magnificPopup({
        type: 'inline',
        fixedContentPos: true,
        fixedBgPos: true,
        overflowY: 'auto',
        closeBtnInside: true,
        preloader: false,
        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in'
    });
});