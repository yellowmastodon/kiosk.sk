<?php get_header() ?>

	<section class="archive_detail_top wrap">
		<div class="wrap_inner">

			<?php
				$archive_date = get_field('archive_date');
				$archive_text = get_field('archive_text');
			?>

			<h1><?= get_the_title() ?> <?php if ($archive_date) { echo '<div class="date">' . $archive_date . '</div>'; } ?></h1>			
			<?php
				$thumb = get_field('thumb',get_the_ID());
				$post_thumbnail = get_the_post_thumbnail(get_the_ID());
			?>
			<div class="cont_wrap">
				<?php if ($post_thumbnail) {?>
				<figure class="img_wrap"><?= $post_thumbnail ?></figure>
				<?php } ?>
				<?php if ($archive_text ) { ?>
					<div class="text"><?= $archive_text ?></div>
				<?php } ?>
			</div>
		</div>
	</section>

	<?php
		$archive_gallery = get_field('archive_gallery');

		if ($archive_gallery) :
	?>
	<section class="archive_detail_gallery wrap">
		<div class="wrap_inner">
			<h2>Galéria</h2>
			<div class="items_wrap">
				<div class="arrs_wrap"></div>
				<div class="items">	
					<?php if( $archive_gallery ): ?>

						<?php foreach( $archive_gallery as $image ): ?>
							
							<figure class="img_wrap">
								<div class="img_wrap_inner">
									<img src="<?php echo esc_url($image['sizes']['large']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" loading="lazy"/>
								</div>
								<?php
									$caption = $image['caption'];
								?>
								<?php if( $caption != '' ): ?>
									<figcaption><?= $caption ?></figcaption>
								<?php endif; ?>

							</figure>
						<?php endforeach; ?>
					<?php endif; ?>
				</div>
			</div>
		</div>	
	</section>
	<?php endif; ?>

	<?php
		$archive_date = get_field('archive_inscenations');

		if ($archive_date) :
	?>
	<section class="archive_detail_inscenations wrap">
		<div class="wrap_inner">
			<h2>Zoznam inscenácií</h2>
			<div class="inscenations"><?= $archive_date ?></div>
		</div>
	</section>
	<?php endif; ?>

<?php get_footer() ?>