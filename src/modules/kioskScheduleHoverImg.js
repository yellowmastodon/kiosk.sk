
// schedule hover img
//==================================================================
export function kiosk_schedule_hover_img() {
	let is_touch_device = window.is_touch_device;
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