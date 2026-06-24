export default function initMainVideo() {
    const root = document.querySelector('.main-video');
    if (!root) return;

    const video = root.querySelector('.main-video__video');
    if (!video) return;

    const playButton = root.querySelector('.main-video__play');
    const range = root.querySelector('.main-video__timeline-range');
    const track = root.querySelector('.main-video__timeline-track');
    const hasTimeline = range && track;

    let isScrubbing = false;

    const formatTime = (s) => {
        if (!isFinite(s)) return '0:00';
        const m = Math.floor(s / 60);
        const sec = Math.floor(s % 60);
        return `${m}:${String(sec).padStart(2, '0')}`;
    };

    // TIMELINE
    const setProgress = (progress) => {
        if (!hasTimeline) return;
        track.style.setProperty('--video-progress', `${progress * 100}%`);
    };

    const updateFromVideo = () => {
        if (!hasTimeline || !video.duration || isScrubbing) return;
        const progress = video.currentTime / video.duration;
        range.value = Math.round(progress * 100);
        setProgress(progress);
    };

    const seek = () => {
        if (!hasTimeline || !video.duration) return;
        const progress = Number(range.value) / 100;
        video.currentTime = progress * video.duration;
        setProgress(progress);
    };

    const skipBy = (seconds) => {
        if (!video.duration) return;
        video.currentTime = Math.max(0, Math.min(video.duration, video.currentTime + seconds));
        updateFromVideo();
    };

    // LOADER
    const setLoading = (on) => root.classList.toggle('is-loading', on);

    // PLAYING STATE
    const setPlaying = (on) => root.classList.toggle('is-playing', on);

    const togglePlayback = () => {
        if (video.paused) {
            if (video.readyState < HTMLMediaElement.HAVE_FUTURE_DATA) {
                setLoading(true);
            }
            video.play().catch(() => {
                setLoading(false);
            });
        } else {
            video.pause();
        }
    };

    // PLAY
    if (playButton) {
        playButton.addEventListener('click', togglePlayback);
    }
    video.addEventListener('click', togglePlayback);

    // JUMP BUTTONS
    const jumpBack = root.querySelector('.main-video__jump-back');
    const jumpForward = root.querySelector('.main-video__jump-forward');
    if (jumpBack) jumpBack.addEventListener('click', () => skipBy(-15));
    if (jumpForward) jumpForward.addEventListener('click', () => skipBy(15));

    // LOADER EVENTS
    // only playing/canplay clear the loader — not play, which fires before buffering
    video.addEventListener('waiting', () => setLoading(true));
    video.addEventListener('playing', () => setLoading(false));
    video.addEventListener('canplay', () => setLoading(false));

    // PLAYING STATE EVENTS
    video.addEventListener('play', () => setPlaying(true));
    video.addEventListener('pause', () => setPlaying(false));
    video.addEventListener('ended', () => setPlaying(false));

    // TIMELINE EVENTS
    if (hasTimeline) {
        // Arrow keys: 5s back/forward
        range.addEventListener('keydown', (e) => {
            if (!video.duration) return;
            if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
                e.preventDefault();
                skipBy(-5);
            } else if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
                e.preventDefault();
                skipBy(5);
            }
        });

        // SCRUBBING STATE
        range.addEventListener('pointerdown', () => { isScrubbing = true; });

        range.addEventListener('pointerup', () => {
            seek();
            isScrubbing = false;
        });

        range.addEventListener('pointercancel', () => {
            isScrubbing = false;
            updateFromVideo();
        });

        // LIVE SEEK
        range.addEventListener('input', seek);

        // VIDEO → UI SYNC
        video.addEventListener('timeupdate', updateFromVideo);
        video.addEventListener('loadedmetadata', updateFromVideo);
        video.addEventListener('play', updateFromVideo);
        video.addEventListener('pause', updateFromVideo);
    }
}