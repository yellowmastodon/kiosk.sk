// archive sort
//==================================================================
export function kiosk_archive_sort() {
	var form = jQuery('.archive_sort_form');

	if (!form.length) { return; }

	form.find('.value').on('click', function () {
		form.trigger('submit');
	});
}


// kiosk_program_slick
//==================================================================
export function kiosk_program_slick() {
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
export function kiosk_program_mcsutomscrollbar() {
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
export function kiosk_new_articles_mcsutomscrollbar() {
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
export function kiosk_gallery_slick() {
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
