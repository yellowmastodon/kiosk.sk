export function bg_animation() {
    if (!document.body.classList.contains('page_homepage')) {
        return;
    }
    const SPEED_SLIDER = document.querySelector('input.metronome-speed-slider');
    const TICK_AUDIO = document.querySelector('audio.metronome_tick');
    let current_tick_num = 0;
    const PENDULUM = document.getElementById('metronome_pendulum_image');
    const SOUND_BUTTON = document.getElementById('metronome_sound_on');
    const PENDULUM_BLUR = document.querySelector('#metronome_pendulum_blur feGaussianBlur');
    const METRONOME_SPEED_NUMBER = document.getElementById('metronome-speed-no');
    let bpm = 40;
    if (SPEED_SLIDER) {
        bpm = Number(SPEED_SLIDER.value);
        METRONOME_SPEED_NUMBER.innerHTML = SPEED_SLIDER.value;

    }
    let freq = bpm / 60;
    setBlur(freq);


    let soundOn = false;
    let audioTickTimeout = null;
    let now = null;

    const TICK_URL = TICK_AUDIO.src;
    let context = null;
    var tickBuffer = void 0;


    SOUND_BUTTON.addEventListener('click', () => {
        if (context === null) {
            AudioContext = window.AudioContext || window.webkitAudioContext; // Make it crossbrowser
            context = new AudioContext({
                sampleRate: 48000,
                // Set latencyHint to 'interactive' for better timing precision
                latencyHint: 'interactive'
            });
            window.fetch(TICK_URL)
                .then(response => response.arrayBuffer())
                .then(arrayBuffer => context.decodeAudioData(arrayBuffer,
                    audioBuffer => {
                        tickBuffer = audioBuffer;
                    },
                    error =>
                        console.error(error)
                ));
        }
        soundOn = !soundOn;
        SOUND_BUTTON.setAttribute("aria-pressed", soundOn ? "true" : "false");
    });

    SPEED_SLIDER.addEventListener('change', () => {
        changeSpeed(false);
    });
    SPEED_SLIDER.addEventListener('input', () => {
        changeSpeed();
    });
    /**
     * 
     * @param {boolean} only_number //if only display the value, but not change. 
     */
    function changeSpeed(only_number = true) {
        if (!only_number) {
            bpm = Number(SPEED_SLIDER.value);
            freq = bpm / 120; //every second note, since we have 2 two ticks per sinusoid
            setBlur(freq);
        }
        METRONOME_SPEED_NUMBER.innerHTML = SPEED_SLIDER.value;
    }
    function setBlur(freq) {
        let newBlurValue = (freq - .6) * 6; //arbitrary values, how it seemed visually ok
        if (newBlurValue > 0) {
            PENDULUM_BLUR.setAttribute('stdDeviation', `${newBlurValue} 0`);
            return;
        }
        PENDULUM_BLUR.setAttribute('stdDeviation', '0 0');

    }
    let prevRotation = null;
    let currentRotation = null;
    // Animation (visual)
    function animate() {
        let now = performance.now() * 0.001;
        currentRotation = getSinusoid(now, freq);
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
 * @param {number} freq - The frequency in Hz (beats per second).
 * @returns {number} Sinusoidal value between -1 and 1.
 */
export function getSinusoid(time, freq = 1) {
    return Math.sin(freq * time * 2 * Math.PI);
}