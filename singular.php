<?php get_header() ?>
	<article>
	<section class="post_detail wrap no_margin_bottom">
	<?php //if no thumbnail image do not render and add class to header for additional padding
		$thumbnail_img = get_the_post_thumbnail_url($post->ID, 'large');?>
		<div class="wrap_inner<?php if($thumbnail_img == false): echo ' no_thumbnail_img'; endif;?>">
			<?php if($thumbnail_img !== false):?>
			<div class="thumbnail_img" style="background-image: url(<?php echo $thumbnail_img ?>)"></div>
			<?php endif;?>

			<header class="title_wrap">
				<h1><?php echo auto_nbsp( get_the_title()); ?></h1>
			</header>

			<div class="text_wrap">
				<div class="text"><?= get_the_content(); ?></div>

				<?php
					$show_button_buy_tickets = get_field('show_button_buy_tickets');
					$global_button_buy_ticket = get_field('global_button_buy_ticket','option');
				?>
								
				<?php if ($global_button_buy_ticket && $show_button_buy_tickets): ?>						
					<a class="buy_button button type_big" href="<?= $global_button_buy_ticket['url'] ?>"<?= $global_button_buy_ticket['target'] ? 'target="' . $global_button_buy_ticket['target'] .'"' : '' ?>>
						<span class="lbl_normal lbl"><?= $global_button_buy_ticket['title'] ?></span>
						<span class="lbl_hover_wrap">
							<span class="lbl_hover lbl"><?= $global_button_buy_ticket['title'] ?></span>
						</span>
					</a>
				<?php endif; ?>
			</div>
		</div>
	</section>

	<?php
		$gallery = get_field('gallery');

		if ($gallery) :
	?>
	<section class="gallery_wrap">
		<div class="wrap_inner">
			<div class="items_wrap">
				<div class="arrs_wrap"></div>				
				<div class="items">	
					<?php if( $gallery ): ?>

						<?php foreach( $gallery as $image ): ?>
							
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
	<?php
		endif;
	?>
	</article>

<?php get_footer() ?>