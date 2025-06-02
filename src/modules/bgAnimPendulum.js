export function bg_animation() {

    const SPEED_SLIDER = document.querySelector('input#metronome_speed');
    let speed = 1;
    speed = Number(SPEED_SLIDER.value);
    const TICK_AUDIO = document.querySelector('audio.metronome_tick');
    let current_tick_num = 0;
    const PENDULUM = document.getElementById('metronome_pendulum_image');
    const SOUND_BUTTON = document.getElementById('metronome_sound_on');
    const PENDULUM_BLUR = document.querySelector('#metronome_pendulum_blur feGaussianBlur');
    let soundOn = false;
    let audioTickTimeout = null;
    let now = null;

    const TICK_URL = TICK_AUDIO.src;
    let AudioContext = window.AudioContext || window.webkitAudioContext;
    const context = new AudioContext({
        sampleRate: 48000,
      // Set latencyHint to 'interactive' for better timing precision
      latencyHint: 'interactive'
    }); // Make it crossbrowser
    var tickBuffer = void 0;
    window.fetch(TICK_URL)
        .then(response => response.arrayBuffer())
        .then(arrayBuffer => context.decodeAudioData(arrayBuffer,
            audioBuffer => {
                tickBuffer = audioBuffer;
            },
            error =>
                console.error(error)
        ));

    SOUND_BUTTON.addEventListener('click', () => {
        soundOn = !soundOn;
        SOUND_BUTTON.setAttribute("aria-pressed", soundOn ? "true" : "false");
    });

    SPEED_SLIDER.addEventListener('change', () => {
        speed = Number(SPEED_SLIDER.value);
        let blur = (speed - 3) * .6;
        if (blur > 0) {
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
        if (soundOn) {
            if (prevRotation !== null && Math.sign(prevRotation) !== Math.sign(currentRotation)) {
                playTick(tickBuffer);
            }
        }
        prevRotation = currentRotation;
        PENDULUM.setAttribute('transform', `rotate(${currentRotation * 30}, 1650, 1312)`);
        requestAnimationFrame(animate);
    }
    animate();
    function playTick(audioBuffer) {
        var source = context.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(context.destination);
        source.start();
    };
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