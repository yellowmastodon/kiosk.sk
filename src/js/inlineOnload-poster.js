const mainVideo = document.getElementById('main-video__video');
if (mainVideo) {

    function setPosterFromActiveSource() {
        // Find the active source (matching media query)
        const sources = mainVideo.querySelectorAll('source');
        let activePoster = null;

        for (const source of sources) {
            const media = source.getAttribute('media');
            const poster = source.getAttribute('data-poster');

            if (!poster) continue;

            // Check if media query matches
            if (!media || window.matchMedia(media).matches) {
                activePoster = poster;
                break;
            }
        }

        if (activePoster){
            mainVideo.poster = activePoster;
        }
    }

    // Set poster on load
    setPosterFromActiveSource();
}