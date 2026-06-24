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
	<section class="hero wrap">

			<?php get_template_part('template-parts/main-video')?>
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

	</section>

	<?php
	$schedule_button = get_field('schedule_button');

	if ($schedule_button !== ""):
	?>
		<section class="program_button wrap">
			<div class="wrap_inner">
				<a class="btn" href="<?= $schedule_button['url'] ?>"><?= $schedule_button['title']?></a>
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
				<h2 class="main_title wrap_inner ff-heading-alt h2">Inscenácie</h2>
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
				<h2 class="main_title wrap_inner ff-heading-alt">News</h2>
				<?php
				if ($the_query->post_count > 1) echo '<div class="custom-scrollbar-wrapper">'; ?>
				<div class="articles_list wrap_inner custom-scrollbar-content">
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