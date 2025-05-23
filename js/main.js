/*


var max = 349;
var min = 259;

var px = 0;
var vw = 0;
var c = 1492;

vw = (max - min) / c;
px = min - 428 * vw;

console.log('calc(~"' + px.toFixed(0) + 'px + ' + (vw * 100).toFixed(2) + 'vw")');

*/

var body;
var is_touch_device;
var html_top_margin;


body = jQuery('body');
is_touch_device = body.hasClass('is_touch_device');
html_top_margin = parseInt(jQuery('html').css('margin-top'));
vh_mobile_fix();
kiosk_fixed_header();
kiosk_main_menu();
kiosk_schedule_hover_img();
kiosk_gallery_slick();
// kiosk_program_mcsutomscrollbar();
kiosk_program_slick();
kiosk_new_articles_mcsutomscrollbar();
kiosk_archive_sort();
bg_animation();


// fix for vh on mobile
//==================================================================
function vh_mobile_fix() {
	let vh = window.innerHeight * 0.01;

	document.documentElement.style.setProperty('--vh', `${vh}px`);

	window.addEventListener('resize', () => {
		if (!is_touch_device) {
			let vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty('--vh', `${vh}px`);
		}
	});

}

// archive sort
//==================================================================
function kiosk_archive_sort() {
	var form = jQuery('.archive_sort_form');

	if (!form.length) { return; }

	form.find('.value').on('click', function () {
		form.trigger('submit');
	});
}

// fixed header
//==================================================================
function kiosk_fixed_header() {
	jQuery(window).on('scroll', function () {
		if (jQuery(window).scrollTop() > html_top_margin) {
			body.addClass('fixed_header');
		} else {
			body.removeClass('fixed_header');
		}
	});
	jQuery(window).trigger('scroll');
}

// kiosk_program_slick
//==================================================================
function kiosk_program_slick() {
	var mod = jQuery('.schedules_wrap');

	if (!mod.length) { return; }

	mod.find('.schedules_list').slick({
		slide: '.schedule_wrap',
		infinite: false,
		variableWidth: false,
		autoplay: false,
		autoplaySpeed: 3000,
		swipe: true,
		speed: 500,
		variableWidth: true,
		appendArrows: mod.find('.main_title span'),
		prevArrow: '<span class="arrow-prev"></span>',
		nextArrow: '<span class="arrow-next"></span>',
	});
}

// kiosk_program_mcsutomscrollbar
//==================================================================
function kiosk_program_mcsutomscrollbar() {
	var list = jQuery('.schedules_list');

	list.mCustomScrollbar({
		theme: "rounded-dark",
		axis: 'x',
		mouseWheel: false,
		scrollbarPosition: 'outside',
		contentTouchScroll: false,
		documentTouchScroll: false,

		advanced: {
			updateOnContentResize: true,
		},
	});

	var oldX = null;
	var newX = null;
	var oldY = null;
	var newY = null;
	var contentX;

	list.on('touchstart', function (e) {
		oldX = null;
		newX = null;

		oldY = null;
		newY = null;

		contentX = list.find('.mCSB_container').offset().left * (-1);
	});

	list.on('touchmove', function (e) {

		if (newX === null) {
			newX = e.originalEvent.touches[0].pageX;
			newY = e.originalEvent.touches[0].pageY;
		}
		else {
			oldX = newX;
			newX = e.originalEvent.touches[0].pageX;

			oldY = newY;
			newY = e.originalEvent.touches[0].pageY;

			if (Math.abs(oldY - newY) > 4) {
				return;
			}

			contentX += (oldX - newX) * 1.5;

			contentX = contentX < 0 ? 0 : contentX;

			list.mCustomScrollbar('scrollTo', contentX, {
				scrollInertia: 0,
			});
		}
	});
}


// kiosk_new_articles_mcsutomscrollbar
//==================================================================
function kiosk_new_articles_mcsutomscrollbar() {
	var lists = jQuery('.articles_list');

	lists.each(function () {
		var list = jQuery(this);

		list.mCustomScrollbar({
			theme: "dark-rounded",
			axis: 'x',
			mouseWheel: false,
			scrollbarPosition: 'outside',
			contentTouchScroll: false,
			documentTouchScroll: false,

			advanced: {
				updateOnContentResize: true
			}
		});

		var oldX = null;
		var newX = null;
		var oldY = null;
		var newY = null;
		var contentX;

		list.on('touchstart', function (e) {
			oldX = null;
			newX = null;

			oldY = null;
			newY = null;

			contentX = list.find('.mCSB_container').offset().left * (-1);
		});

		list.on('touchmove', function (e) {

			if (newX === null) {
				newX = e.originalEvent.touches[0].pageX;
				newY = e.originalEvent.touches[0].pageY;
			}
			else {
				oldX = newX;
				newX = e.originalEvent.touches[0].pageX;

				oldY = newY;
				newY = e.originalEvent.touches[0].pageY;

				if (Math.abs(oldY - newY) > 4) {
					return;
				}

				contentX += (oldX - newX) * 1.5;

				contentX = contentX < 0 ? 0 : contentX;

				list.mCustomScrollbar('scrollTo', contentX, {
					scrollInertia: 0,
				});
			}
		});
	});
}

// post gallery slick
//==================================================================
function kiosk_gallery_slick() {
	var mod = jQuery('.gallery_wrap, .archive_detail_gallery');

	if (!mod.length) { return; }

	mod.find('.items').slick({
		slide: '.img_wrap',
		infinite: true,
		variableWidth: false,
		autoplay: false,
		autoplaySpeed: 3000,
		slidesToShow: 2,
		slidesToScroll: 2,
		swipe: false,
		speed: 500,
		appendArrows: mod.find('.arrs_wrap'),
		prevArrow: '<span class="arrow-prev"></span>',
		nextArrow: '<span class="arrow-next"></span>',
		responsive: [
			{
				breakpoint: 801,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}
		]
	});
}

// schedule hover img
//==================================================================
function kiosk_schedule_hover_img() {
	var mod = jQuery('.schedules_wrap');
	var list;
	var url;
	var square;

	if (!mod.length || is_touch_device) { return; }

	list = mod.find('.schedules_list');
	square = mod.find('.square');

	// hide square on mouseleave
	mod.find('ol').on('mouseleave', function () {
		if (square.hasClass('show')) {
			square.removeClass('show');
		}
	});

	// show square on hover
	mod.find('li').on('mouseenter', function () {
		url = jQuery(this).attr('data-img');

		if (url !== '') {
			if (!square.hasClass('show')) {
				square.addClass('show');
			}

			square.css({
				'background-image': 'url(' + url + ')',
			});
		}
		else {
			if (square.hasClass('show')) {
				square.removeClass('show');
			}

			square.css({
				'background-image': 'none',
			});
		}
	});

	// cursor move
	var delta;
	delta = parseInt(jQuery('html').css('margin-top'));

	mod.on('mousemove', function (e) {
		square.css({
			left: e.pageX - list.offset().left,
			top: e.pageY - delta - list.offset().top,
		});
	});

	jQuery('html').trigger('mousemove');
}

// main menu
//==================================================================
function kiosk_main_menu() {
	jQuery('.overlay').on('click', function () {
		body.removeClass('open_menu');
	});
	jQuery('.main_menu_switch').on('click', function () {
		body.toggleClass('open_menu');
	});
}

// homepage background animation
//==================================================================

function bg_animation() {
	jQuery(window).load(function () {
		//get all preloaded images from link tags
		var bg_images = [];
		jQuery('.preloaded_bg_image').each(function () {
			bg_images.push(this.attributes.href.nodeValue);
		});
		//get element to animate
		var bg_element = jQuery('#bg_animation');
		//speed in ms
		const animation_speed = 200;
		const animation_delay = 300;
		var current_image_index = 0;
		//animation_length is used for enabling zoom controls
		var animation_length = animation_speed * (bg_images.length - 1) + animation_delay;
		var zoom_out = jQuery('#bg_animation_zoom_out');
		var zoom_in = jQuery('#bg_animation_zoom_in');

		//onload animation
		for (var i = 0; i < bg_images.length - 1; i++) {
			animation(i);
		}
		function animation(i) {
			setTimeout(function () {
				current_image_index++;
				jQuery(bg_element).attr('src', bg_images[current_image_index]);
			}, animation_speed * i + animation_delay);
		}
		//enable animation control
		setTimeout(function () {
			zoom_out.prop('disabled', false);
			//also needs class, firefox keeps user states on reload
			zoom_out.removeClass('disabled');
		}, animation_length);

		//animation control - zoom in and out
		zoom_in.click(function (event) {
			if (jQuery(this).hasClass('disabled')) {
				event.preventDefault();
			} else {
				if (current_image_index < bg_images.length - 1) {
					current_image_index++
				}
				if (current_image_index == bg_images.length - 1) {
					jQuery(this).prop('disabled', true);
					//also needs class, firefox keeps user states on reload
					jQuery(this).addClass('disabled');
				}
				if (current_image_index == 1) {
					zoom_out.prop('disabled', false);
					zoom_out.removeClass('disabled');
				}
				jQuery(bg_element).attr('src', bg_images[current_image_index]);
			}
		});
		zoom_out.click(function (event) {
			if (jQuery(this).hasClass('disabled')) {
				event.preventDefault();
			} else {

				if (current_image_index > 0) {
					current_image_index--;
				};
				if (current_image_index == 0) {
					jQuery(this).prop('disabled', true);
					jQuery(this).addClass('disabled');
				}
				if (current_image_index == bg_images.length - 2) {
					zoom_in.prop('disabled', false);
					zoom_in.removeClass('disabled');

				}
				jQuery(bg_element).attr('src', bg_images[current_image_index]);
			}
		})
	})

}



