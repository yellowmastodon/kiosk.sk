<?php /* Template Name: Template Homepage */ ?>

<?php get_header();
$event_name = get_field('event_name');
$event_date = get_field('event_date');
$event_place = get_field('event_place');
$homepage_welcome_text_more = get_field('homepage_welcome_text_more');

//image sequence defined in header
global $current_image_sequence;

?>


<section class="big_top wrap">
	<div class="big_top_overflow">
		<div class="big_top_animation_wrapper">

			<audio class="metronome_tick" preload="auto" src="<?php echo get_template_directory_uri() . '/audio/metronome_tick.mp3';?>"></audio>
			<img id="bg_animation" class="big_top_bg" src="<?php echo get_template_directory_uri() . '/images/metronome_bkg.jpg' ?>"></img>

			<!-- <div class="dates_wrap  h1_size">
			<div class="dates">
				<?php for ($i = 0; $i < 3; $i++) : ?>
					<?php if ($event_date) : ?><span class="event_name kommuna_narrow"><?= $event_name ?></span><?php endif; ?>
					<?php if ($event_date) : ?><span class="event_date kommuna_wide"><?= $event_date ?></span><span class="slash"> / </span><?php endif; ?>
					<?php if ($event_place) : ?><span class="event_place kommuna_narrow"><?= $event_place ?></span><?php endif;
																												//sprite defined in header
																													?>
					<span class="running_text_sprite"><svg>
							<use xlink:href="#slider-sprite" />
						</svg></span>
				<?php endfor; ?>
			</div>
		</div> -->
			<svg id="metronome_pendulum" viewBox="0 0 3300 2560" preserveAspectRatio="xMinYMin slice">
				<defs><filter id="metronome_pendulum_blur">
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
	</div>
	<div id="animation_control">
		<button class="button" id="metronome_sound_on" aria-label="Zapnúť zvuk" aria-pressed="false"><span class="lbl">AUDIO</span></button>
		<input id="metronome_speed" class="slider"  type="range" min=".5" max="15" value="3" step=".5">
	</div>
</section>

<!-- <section class="program_button wrap">
	<div class="wrap_inner">
		<?php
		$schedule_title = get_field('schedule_title');
		$schedule_button = get_field('schedule_button');
		?>
		<?php if ($schedule_title) : ?>
			<h2 class="main_title"><?= $schedule_title ?></h2>
		<?php endif; ?>
		<?php if ($schedule_button) : ?>
			<div class="button_wrap">
				<a class="button" href="<?= $schedule_button['url'] ?>">
					<span class="lbl_normal lbl"><?= $schedule_button['title'] ?></span>
					<span class="lbl_hover_wrap">
						<span class="lbl_hover lbl"><?= $schedule_button['title'] ?></span>
					</span>
				</a>
			</div>
		<?php endif; ?>
	</div>
</section> -->

<!-- homepage -->
<?php if (is_front_page()) :

	if (get_field('show_performance_section')): ?>
		<section class="articles wrap half_margin_bottom">
			<div class="wrap_inner">
				<?php $the_query = new WP_Query(
					array(
						'post_type' => 'post',
						'posts_per_page' => -1,
						'category_name' => 'inscenacie-2023',
					)
				);

				?>
				<div class="main_title_wrap">
					<h2 class="main_title">Inscenácie</h2>
					<?php if (!$the_query->have_posts()) : ?>
						<p>Coming soon...</p>
					<?php endif; ?>
				</div>
				<div class="articles_list">
					<?php
					while ($the_query->have_posts()) : $the_query->the_post();
					?>
						<div class="article_wrap">
							<figure class="img_wrap">
								<a class="img_link" href="<?= get_the_permalink() ?>">
									<?= get_the_post_thumbnail($post->ID, 'thumb-image-twocol'); ?>
								</a>
							</figure>
							<div class="text_wrap">
								<h3 class="title"><a href="<?= get_the_permalink() ?>"><?php the_title(); ?></a></h3>
								<p class="text"><?= get_the_excerpt(); ?></p>

								<?php
								$global_read_more = get_field('global_read_more', 'option');
								?>

								<?php if ($global_read_more) : ?>
									<a class="button" href="<?= get_the_permalink() ?>">
										<span class="lbl_normal lbl"><?= $global_read_more ?></span>
										<span class="lbl_hover_wrap">
											<span class="lbl_hover lbl"><?= $global_read_more ?></span>
										</span>
									</a>
								<?php endif; ?>
							</div>
						</div>
					<?php
					endwhile;
					wp_reset_postdata();
					?>
				</div>
			</div>
		</section>
	<?php endif;
	if (get_field('show_news_section')): ?>
		<section class="articles wrap no_margin_bottom">
			<div class="wrap_inner">
				<div class="main_title_wrap">
					<h2 class="main_title">News</h2>
				</div>
				<div class="articles_list">
					<?php
					$the_query = new WP_Query(array(
						'post_type' => 'post',
						'posts_per_page' => 15,
						'category_name' => 'news',
					));
					while ($the_query->have_posts()) : $the_query->the_post();
					?>
						<div class="article_wrap">
							<figure class="img_wrap">
								<a class="img_link" href="<?= get_the_permalink() ?>">
									<?= get_the_post_thumbnail($post->ID, 'thumb-image-twocol'); ?>
								</a>
							</figure>
							<div class="text_wrap">
								<h3 class="title"><a href="<?= get_the_permalink() ?>"><?php the_title(); ?></a></h3>
								<p class="text"><?= get_the_excerpt(); ?></p>

								<?php
								$global_read_more = get_field('global_read_more', 'option');
								?>

								<?php if ($global_read_more) : ?>
									<a class="button" href="<?= get_the_permalink() ?>">
										<span class="lbl_normal lbl"><?= $global_read_more ?></span>
										<span class="lbl_hover_wrap">
											<span class="lbl_hover lbl"><?= $global_read_more ?></span>
										</span>
									</a>
								<?php endif; ?>
							</div>
						</div>
					<?php
					endwhile;
					wp_reset_postdata();
					?>
				</div>
			</div>
		</section>
<?php
	endif;
endif; ?>

<?php
/*$homepage_schedule_title = get_field('schedule_title');
	$schedule_title = $homepage_schedule_title != '' ? $homepage_schedule_title : 'Program';
	include (dirname(__FILE__) . '/inc/schedule.php');*/
?>

<?php get_footer() ?>