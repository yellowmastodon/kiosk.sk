<?php 
if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}
do_action('qm/debug', get_template_directory_uri());

$f_base = get_template_directory_uri() . '/images/main-video/holuby'

/* <source
    src="<?= "{$filename_base}{$res}-vp9.webm" ?>"
    type="video/webm"
    media="(min-aspect-ratio: 16/10) and (min-width: 980px)"
    data-poster="<?= "{$filename_base}{$res}-poster.webp" ?>"> */


?>
<div class="main-video">
    <video class="main-video__video" id="main-video__video" poster="<?= $f_base . '1x1-poster.webp' ?>" playsinline webkit-playsinline disablepictureinpicture controlslist="nofullscreen" muted preload="auto" tabindex="-1">
        <source src="<?= $f_base . '-vp9-1920x1080.webm' ?>" type="video/webm" media="(min-aspect-ratio: 16/10) and (min-width: 980px)" data-poster="<?= $f_base . '-1920x1080-poster.webp' ?>">
        <source src="<?= $f_base . '-h264-1920x1080.mp4' ?>" type="video/mp4" media="(min-aspect-ratio: 16/10) and (min-width: 980px)">
        <source src="<?= $f_base . '-vp9-1280x720.webm' ?>" type="video/webm" media="(min-aspect-ratio: 16/10)" data-poster="<?= $f_base . '-1280x720-poster.webp' ?>">
        <source src="<?= $f_base . '-h264-1280x720.mp4' ?>" type="video/mp4" media="(min-aspect-ratio: 16/10)">
        <source src="<?= $f_base . '-vp9-1080x810.webm' ?>" type="video/webm" media="(min-aspect-ratio: 1/1))" data-poster="<?= $f_base . '-1080x810-poster.webp' ?>">
        <source src="<?= $f_base . '-h264-1080x810.mp4' ?>" type="video/mp4" media="(min-aspect-ratio: 1/1)">
        <source src="<?= $f_base . '-vp9-810x1080.webm' ?>" type="video/webm" media="(min-aspect-ratio: 5/8)" data-poster="<?= $f_base . '-810x1080-poster.webp' ?>">
        <source src="<?= $f_base . '-h264-810x1080.mp4' ?>" type="video/mp4" media="(min-aspect-ratio: 5/8)">
        <source src="<?= $f_base . '-vp9-720x1280.webm' ?>" type="video/webm" data-poster="<?= $f_base . '-720x1280-poster.webp' ?>">
        <source src="<?= $f_base . '-h264-720x1280.mp4' ?>" type="video/mp4">        
    </video>
    <script class="init-script" type="text/javascript"><?= file_get_contents(get_template_directory() . '/js/inlineOnload-poster.js') ?></script> 

    <div class="main-video__overlay"></div>
    <svg viewBox="0 0 158 158" class="main-video__spinner"><use xlink:href="#icon-roundabout"></use></svg>
  
    <div class="main-video__controls">
        <button class="main-video__play btn-reset" aria-controls="main-video__video">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="42 35.7 85 122.3">
                    <rect class="pause" x="42" y="35.7" width="20" height="86.6"/>
                    <rect class="pause" x="80" y="35.7" width="20" height="86.6"/>
                    <polygon class="play" points="126.5 79 51.5 35.7 51.5 122.3 126.5 79"/>
                </svg><span class="sr-only play">Prehrať</span><span class="play" aria-hidden="true">Let them eat!</span><span class="sr-only pause">Pozastaviť</span><span class="pause" aria-hidden="true">Pause</span>
        </button>
        <div class="main-video__jump">
        <button class="main-video__jump-back btn-reset">
            <span class="sr-only">15 sekúnd dozadu</span>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="51.5 35.7 75 122.3">
                <polygon class="play" points="51.5 79 126.5 35.7 126.5 122.3 51.5 79"/>
            </svg>
        </button>
        <span aria-hidden="true">Move</span>
        <button class="main-video__jump-forward btn-reset">
            <span class="sr-only">15 sekúnd dopredu</span>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="51.5 35.7 75 122.3">
                    <polygon class="play" points="126.5 79 51.5 35.7 51.5 122.3 126.5 79"/>
                </svg>
        </button>
        </div>
    </div>
    
      <div class="main-video__timeline-track">
        <input
            class="main-video__timeline-range"
            type="range"
            min="0"
            max="100"
            value="0"
            aria-label="Pozícia vo videu"
            aria-controls="main-video__video"
            step="1"
        >
        <div class="main-video__timeline-thumb"></div>

    </div>


</div>
