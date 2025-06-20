import { vh_mobile_fix } from './modules/vhMobileFix.js';
import { kiosk_schedule_hover_img } from './modules/kioskScheduleHoverImg.js';
import { bg_animation } from './modules/bgAnimPendulum.js';
import { initializeCustomScrollbars } from './modules/overlayScrollbars.js';
//not working
import { initOffcanvas } from './modules/offcanvas.js';
import { Splide } from '@splidejs/splide';


let scheduleSplide = document.querySelector('.splide.schedules_splide');
if (scheduleSplide){
let splide = new Splide( scheduleSplide, {
  perPage: 1,
  focus  : 0,
  pagination: false,
  speed: 600
} );

splide.mount()
}


    
const body = document.body;
vh_mobile_fix();
kiosk_schedule_hover_img();
// kiosk_program_mcsutomscrollbar();
//kiosk_program_slick();
//kiosk_new_articles_mcsutomscrollbar();
bg_animation();

const custom_scroll_elements = document.querySelectorAll('.custom-scrollbar-wrapper');
custom_scroll_elements.forEach( (element)=>{
  initializeCustomScrollbars(element);
})



// main menu
//==================================================================

const toggleBtn = document.getElementById('main_menu_switch');
const offcanvas = document.getElementById('main_menu_wrap');
if (toggleBtn && offcanvas){
  initOffcanvas(offcanvas, toggleBtn);
}
//const trap = new FocusTrap({ trapElement: offcanvas, autofocus: false });


