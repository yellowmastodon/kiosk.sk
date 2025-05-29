export function bg_animation() {
    const DEFAULT_SPEED = 1;
    let speed = DEFAULT_SPEED;
    const SPEED_SLIDER = document.querySelector('input#metronome_speed');
    const TICK_AUDIO = document.querySelectorAll('audio.metronome_tick');
    let current_tick_num = 0;
    const PENDULUM = document.getElementById('metronome_pendulum_image');
    const SOUND_BUTTON = document.getElementById('metronome_sound_on');
    const PENDULUM_BLUR = document.querySelector('#metronome_pendulum_blur feGaussianBlur');
    let soundOn = false;
    let audioTickTimeout = null;
    let now = null;

    SOUND_BUTTON.addEventListener('click', () => {
        soundOn = !soundOn;
        SOUND_BUTTON.setAttribute("aria-pressed", soundOn ? "true" : "false");
    });

    SPEED_SLIDER.addEventListener('change', () => {
        speed = Number(SPEED_SLIDER.value);
        let blur = (speed - 3) * .6;
        if (blur > 0){
            PENDULUM_BLUR.setAttribute('stdDeviation', `${speed} 0`);
        } else {
            PENDULUM_BLUR.setAttribute('stdDeviation', '0 0');

        }
    });
    let prevRotation = null;
    let currentRotation = null;
    // Animation (visual)
    function animate() {
        let now = performance.now() * 0.001;
        currentRotation = getSinusoid(now, speed);
        if (soundOn){
            if (prevRotation !== null && Math.sign(prevRotation) !== Math.sign(currentRotation)) {
                current_tick_num++;
                if (current_tick_num >= TICK_AUDIO.length){
                    current_tick_num = 0;
                }
                TICK_AUDIO[current_tick_num].currentTime = 0; // Always restart from beginning
                TICK_AUDIO[current_tick_num].play();
            }
        }
        prevRotation = currentRotation;
        PENDULUM.setAttribute('transform', `rotate(${currentRotation * 30}, 1650, 1312)`);
        requestAnimationFrame(animate);
    }
    animate();
}

/**
 * Returns a sinusoidal value between -1 and 1.
 * @param {number} time - The current time in seconds.
 * @param {number} speed - The frequency (cycles per second).
 * @returns {number} Sinusoidal value between -1 and 1.
 */
export function getSinusoid(time, speed = 1) {
    return Math.sin(speed * time);
}

