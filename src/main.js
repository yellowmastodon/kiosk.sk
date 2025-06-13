var body;
var is_touch_device;
var html_top_margin;

import { vh_mobile_fix } from './modules/vhMobileFix.js';
import { kiosk_archive_sort, kiosk_program_slick, kiosk_new_articles_mcsutomscrollbar, kiosk_gallery_slick } from './modules/scrollersAndSort.js';
import { kiosk_schedule_hover_img } from './modules/kioskScheduleHoverImg.js';
import { bg_animation } from './modules/bgAnimPendulum.js';

body = jQuery('body');
is_touch_device = body.hasClass('is_touch_device');
html_top_margin = parseInt(jQuery('html').css('margin-top'));
vh_mobile_fix();
kiosk_schedule_hover_img();
kiosk_gallery_slick();
// kiosk_program_mcsutomscrollbar();
kiosk_program_slick();
kiosk_new_articles_mcsutomscrollbar();
kiosk_archive_sort();
bg_animation();




// main menu
//==================================================================

const toggleBtn = document.getElementById('main_menu_switch');
const offcanvas = document.getElementById('main_menu_wrap');

toggleBtn.addEventListener('click', () => {
  const isOpen = offcanvas.getAttribute('aria-hidden') === 'true';
  offcanvas.setAttribute('aria-hidden', String(!isOpen));
  toggleBtn.setAttribute('aria-expanded', String(isOpen));
  offcanvas.focus();
});


document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && offcanvas.getAttribute('aria-hidden') === 'false') {
	offcanvas.setAttribute('aria-hidden', 'true');
  	toggleBtn.setAttribute('aria-expanded', 'false');
  }
});
