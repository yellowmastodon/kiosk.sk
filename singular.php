<?php get_header();
$secondary_title = get_field('secondary_title');
//template_sponsors adds this class
$additional_classes = "";
if (isset($args['additional_classes'])) {
	$additional_classes = $args['additional_classes'];
}
$en_text = get_field('english');
$en_title = get_field('english_title');
$en_secondary_title = get_field('english_secondary_title');
$has_en_translation = ($en_title && $en_title !== "") || check_nonempty_tinymce_field($en_text) ? true : false;
$is_news_article = is_single() && has_category('news');
?>
<main id="main" <?= $additional_classes !== "" ? 'class="' . $additional_classes . '"' : '' ?>>
	<article>
		<?php //if no thumbnail image do not render and add class to header for additional padding
		$thumbnail_img = get_the_post_thumbnail_url($post->ID, 'large'); ?>
		<section class="wrap_inner article-detail<?php if ($thumbnail_img == false): echo ' no_thumbnail_img';
									endif; ?>">
			<?php if ($thumbnail_img !== false): ?>
				<div class="thumbnail_img" style="background-image: url(<?php echo $thumbnail_img ?>)"></div>
			<?php endif; ?>

			<header class="title_wrap stefan-simple">
				<?php 
				if ($has_en_translation || $is_news_article):?>
					<div class="above-title-wrapper">
					<?php if (is_single() && has_category('news')) {
						$publish_date = get_the_date('d. m. Y.');
						echo '<p class="publish_date"><svg class="inline-icon" viewBox="0 0 18.62 17.04"><use xlink:href="#icon-calendar"></use></svg>' . get_the_date('j. n. Y') . '</p>';
					}
					if ($has_en_translation){
						echo '<a lang="en" aria-label="Jump to translation" class="english-link" href="#kiosk-english">English</a>';
					}?>
					</div>
				<?php endif;?>
				
				<h1><?php echo auto_nbsp(get_the_title()); ?></h1>
				<?php if ($secondary_title && $secondary_title !== "") {
					echo '<p class="secondary-title h2">' . auto_nbsp($secondary_title) . '</p>';
				} ?>
			</header>

			<div class="text_wrap">
				<div class="text"><?php the_content() ?></div>

				<?php
				$show_button_buy_tickets = get_field('show_button_buy_tickets');
				$global_button_buy_ticket = get_field('global_button_buy_ticket', 'option');
				?>

				<?php if ($global_button_buy_ticket && $show_button_buy_tickets): ?>
					<a class="buy_button button type_big" href="<?= $global_button_buy_ticket['url'] ?>" <?= $global_button_buy_ticket['target'] ? 'target="' . $global_button_buy_ticket['target'] . '"' : '' ?>>
						<span class="lbl_normal lbl"><?= $global_button_buy_ticket['title'] ?></span>
						<span class="lbl_hover_wrap">
							<span class="lbl_hover lbl"><?= $global_button_buy_ticket['title'] ?></span>
						</span>
					</a>
				<?php endif; ?>
			</div>
		</section>
		<?php
		if ($has_en_translation):?>
		<hr class="kiosk-english-separator section-separator">
		<section aria-label="English translation" lang="en" class="wrap_inner article-detail kiosk-english" id="kiosk-english">
		<header class="title_wrap stefan-simple">
				<h1><?php echo auto_nbsp($en_title); ?></h1>
				<?php if ($en_secondary_title && $en_secondary_title !== "") {
					echo '<p class="secondary-title h2">' . auto_nbsp($en_secondary_title) . '</p>';
				} ?>
			</header>
			<div class="text_wrap">
				<div class="text"><?= $en_text?></div>
			</div>
		</section>
		<?php endif;

		$gallery = get_field('gallery');

		if ($gallery) :
		?>
			<section class="gallery_wrap">
				<h2 class="sr-only">Galéria</h2>
				<div class="wrap_inner">
					<div class="items_wrap">
						<div class="arrs_wrap"></div>
						<div class="items">
							<?php if ($gallery): ?>

								<?php foreach ($gallery as $image): ?>

									<figure class="img_wrap">
										<div class="img_wrap_inner">
											<img src="<?php echo esc_url($image['sizes']['large']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" loading="lazy" />
										</div>
										<?php
										$caption = $image['caption'];
										?>
										<?php if ($caption != ''): ?>
											<figcaption><?= $caption ?></figcaption>
										<?php endif; ?>

									</figure>
								<?php endforeach; ?>
							<?php endif; ?>
						</div>
					</div>
				</div>
			</section>
		<?php
		endif;
		?>
	</article>
</main>
<?php get_footer(); ?>