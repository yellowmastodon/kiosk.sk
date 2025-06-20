export function kiosk_schedule_hover_img() {
	const is_touch_device = window.is_touch_device;
	const mod = document.querySelector('.schedules_wrap');
	if (!mod || is_touch_device) return;

	const list = mod.querySelector('.schedules_list');
	const square = mod.querySelector('.square');
	const ol = mod.querySelectorAll('ol');
	const lis = document.querySelectorAll('.schedules_list ol li');

	// Hide square on mouseleave
	if (ol) {
		ol.forEach((el) => {
			el.addEventListener('mouseleave', () => {
				square.classList.remove('show');
			});
		})

	}

	// Show square on hover
	lis.forEach(li => {
		li.addEventListener('mouseenter', function () {
			const url = this.getAttribute('data-img');
			if (url) {
				square.classList.add('show');
				square.style.backgroundImage = `url(${url})`;
			} else {
				square.classList.remove('show');
				square.style.backgroundImage = 'none';
			}
		});
	});

	// Get html margin-top as integer
	const html = document.documentElement;
	const htmlMarginTop = parseInt(getComputedStyle(html).marginTop, 10) || 0;

	// Cursor move
	mod.addEventListener('mousemove', function (e) {
		console.log(e);
		requestAnimationFrame(()=>{
				const left = e.clientX;
		const top = e.clientY;
		square.style.left = `${left}px`;
		square.style.top = `${top}px`;
		})
	
	});

	// Trigger initial mousemove event (optional, as in original)
	const event = new MouseEvent('mousemove', {
		view: window,
		bubbles: true,
		cancelable: true
	});
	html.dispatchEvent(event);
}