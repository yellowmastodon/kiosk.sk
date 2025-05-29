var body;
var is_touch_device;
var html_top_margin;

import { vh_mobile_fix } from './modules/vhMobileFix.js';
import { kiosk_archive_sort, kiosk_program_slick, kiosk_program_mcsutomscrollbar, kiosk_new_articles_mcsutomscrollbar, kiosk_gallery_slick } from './modules/scrollersAndSort.js';
import { kiosk_schedule_hover_img } from './modules/kioskScheduleHoverImg.js';
import { bg_animation } from './modules/bgAnimPendulum.js';

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

