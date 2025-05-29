
// homepage background animation
//==================================================================

export function bg_animation() {
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



