<?php /* Template Name: Template Homepage */ ?>

<?php get_header();
$event_name = get_field('event_name', false, false);
//end swoosh instead of &shy;
$event_name = preg_replace("/(\w)\u{00AD}/", '<span class="end-swoosh">${1}</span><wbr>', $event_name);
$event_date = get_field('event_date');
$event_place = get_field('event_place');
$homepage_welcome_text_more = get_field('homepage_welcome_text_more');
//image sequence defined in header
global $current_image_sequence;

?>

<main id="main">
	<section class="big_top wrap distorted">
		<?php
		$dancing_letter_classes = ['letters-pos-1', 'letters-pos-2', 'letters-pos-3']; ?>
		<div class="big_top_overflow" data-letter-pos-classes="<?= htmlspecialchars(json_encode($dancing_letter_classes)) ?>">
			<?php get_template_part('template-parts/kiosk-dancing-letters');
			?> <div class="big_top_animation_wrapper ">

				<audio class="metronome_tick" preload="auto" src="<?php echo get_template_directory_uri() . '/audio/metronome_tick.mp3'; ?>"></audio>
				<img alt="" id="bg_animation" class="big_top_bg" <?php
															$template_dir = get_template_directory_uri();
															echo ' src="' . $template_dir  . '/images/metronome_bkg.jpg' . '"';
															echo ' srcset="' . $template_dir . '/images/metronome_bkg_2560.jpg 2560w,'
																. $template_dir . '/images/metronome_bkg_2000.jpg 2000w,'
																. $template_dir . '/images/metronome_bkg_1800.jpg 1800w,'
																. $template_dir . '/images/metronome_bkg_1400.jpg 1400w,'
																. $template_dir . '/images/metronome_bkg_1280.jpg 1280w'
																. '"';
															//sizes quite arbitrary, no way to know, and also the smallest picture should be ok enought
															echo ' sizes="(max-width: 576px) 850px, (max-width: 1000px) 1395px, (max-width: 1280px) 1650px, 100vw"';

															?>>


				<svg id="metronome_pendulum" viewBox="0 0 3300 2560" preserveAspectRatio="xMinYMin slice">
					<defs>
						<filter id="metronome_pendulum_blur">
							<feGaussianBlur in="SourceGraphic" stdDeviation="0 0" />
						</filter>
						<clipPath id="metronome_pendulum_clip">
							<rect width="3300" height="1258" fill="black" />
						</clipPath>
					</defs>
					<g clip-path="url(#metronome_pendulum_clip)">
						<image transform="rotate(30, 1650, 1312)" id="metronome_pendulum_image" x="1600" y="500" href="<?php echo get_template_directory_uri() . '/images/metronome_fore.png'; ?>" filter="url(#metronome_pendulum_blur)">
						</image>
					</g>
				</svg>
			</div>
			<div class="dates-wrap">
				<p class="dates stefan-simple">
					<?php if ($event_date) : ?><span class="event_name"><?= $event_name ?></span> <?php endif;
																								if ($event_date && $event_place) echo '<span class="event_date_place">';
																								if ($event_date) : ?><span class="event_date"><?= $event_date ?></span> <?php endif; ?>
					<?php if ($event_place) : ?><span class="event_place end-swoosh-2"><?= $event_place ?></span><?php endif;
																												if ($event_date && $event_place) echo '</span>'; ?>
				</p>
			</div>

		</div>
		<div id="animation_control">
			<button class="h2 bright-red-hover btn-reset" id="metronome_sound_on" aria-label="Zapnúť zvuk" aria-pressed="false">
				<svg class="inline-icon" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 -2 47 35.3">
					<g>
						<path d="M1.7,15.9c.6,3.1,1.2,3,1.9,6.2.5,2.8,1.6,4.9,4.5,4.9,2.5-.2,2.5-.7,4.9-1,.6,0,1.2,0,1.7.5,3.1,2.6,3.3,2.3,6.4,4.9,1.6,1.4,3.3.6,3.1-1.6-.3-3.3.2-3.3-.2-6.6s-.6-3.3-1-6.5,0-3.3-.4-6.6-.6-3.3-.9-6.5c-.1-2.1-2.9-3.1-4.3-1.5-2.8,4.3-2.9,4.2-5.6,8.6-.3.4-.4,1.3-.9,1.4-3.6.8-3.7.2-7.4.9-1.3.3-2.2,1.8-2,3Z" fill="#ffff00" stroke="currentColor" stroke-width="3px" stroke-linecap="round" stroke-mitter-limit="10" />

					</g>
					<g class="off" fill="none" stroke="currentColor" stroke-width="3px" stroke-linecap="round">
						<path d="M31,8.6c1.6,1.6,3.4,3,4.9,4.7s2.7,3.6,4,5.5,2.7,3.7,3.9,5.6" />
						<path d="M44.7,9.3c-1.8,1.4-3.6,2.7-5.3,4.3s-3.3,3.2-4.8,4.8-3.1,3.3-4.7,5" />
					</g>
					<g class="on" fill="none" stroke="currentColor" stroke-width="3px" stroke-linecap="round">
						<path d="M28.8,12.2c2.1,1.8,2.7,4.5,1.4,6.7" />
						<path d="M34.1,6.9c2.8,2.7,3.9,5.9,4.4,9.2.2,1.6-.6,3.7-1.5,5.3" />
						<path d="M38,2.3c1.9,1.4,3.2,3,4.3,4.8s1.8,4,2.2,6.1,1.1,4.5.7,6.6-1.2,4.5-2.3,6.3" />
					</g>
				</svg>
			</button>
			<div class="metronome-speed-wrapper stefan-simple">
				<span class="metronome-speed-slider-wrapper"><input class="slider metronome-speed-slider" type="range" min="25" max="240" value="40" step="1"></span><span class="metronome-speed-string"><span id="metronome_speed_no"></span>
					<span id="metronome-speed-no">40</span><span class="bpm">&thinsp;BPM</span></span>
			</div>
		</div>

	</section>

	<?php
	$schedule_button = get_field('schedule_button');

	if ($schedule_button !== ""):
	?>
		<section class="program_button wrap">
			<div class="wrap_inner">
				<?php
				 if ($schedule_button) :
					get_template_part('template-parts/link-button', null, array(
						'target_blank' => false,
						'url' =>  $schedule_button['url'],
						'text' => $schedule_button['title']
					));
				endif;
				?>
			</div>
		</section>
	<?php endif;

	//performances
	?>

	<?php if (is_front_page()) :
		if (get_field('show_performance_section')): ?>
			<section class="articles">
				<?php
				$rocnik = get_field('performance_year');
				$the_query = new WP_Query(
					array(
						'post_type' => 'post',
						'posts_per_page' => -1,
						'tax_query' => [
							'relation' => 'AND',
							[
								'taxonomy' => 'rocnik',
								'field'    => 'term_id', // or 'term_id' or 'name'
								'terms'    => $rocnik,
							],
							[
								'taxonomy' => 'category',
								'field'    => 'slug', // or 'term_id' or 'name'
								'terms'    => 'inscenacie',
							],
						],
					)
				);

				?>
				<h2 class="main_title wrap_inner"><span class="rotate-minus-5">Inscenácie</span></h2>
				<?php if ($the_query->have_posts()) : ?>
					<div class="custom-scrollbar-wrapper" tabindex="-1">
						<div class="articles_list wrap_inner custom-scrollbar-content">
							<?php
							while ($the_query->have_posts()) : $the_query->the_post();
								get_template_part('template-parts/single-homepage-article');
							endwhile;
							wp_reset_postdata();
							?>
						<?php else: ?>
							<p class="wrap_inner coming-soon">Coming soon...</p>
						<?php endif; ?>
						</div>
					</div>
			</section>
		<?php endif;

		//news
		if (get_field('show_news_section')):
			$the_query = new WP_Query(array(
				'post_type' => 'post',
				'posts_per_page' => 15,
				'category_name' => 'news',
			));	?>
			<section class="articles">
				<h2 class="main_title wrap_inner"><span class="rotate-5">News</span></h2>
				<?php if ($the_query->post_count > 1) echo '<div class="custom-srollbar-wrapper">'; ?>
				<div class="articles_list wrap_inner  custom-scrollbar-content">
					<?php

					while ($the_query->have_posts()) : $the_query->the_post();
						get_template_part('template-parts/single-homepage-article', null, ["show_publish_date" => true]);
					endwhile;
					wp_reset_postdata();
					?>
				</div>
				<?php if ($the_query->post_count > 1) echo '</div>'; ?>
			</section>
	<?php
		endif;
	endif; ?>

</main>

<?php get_footer() ?>