<!DOCTYPE html>
<html id="page" lang="<?php bloginfo('language') ?>">

<head>
	<meta charset="<?php bloginfo('charset') ?>">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">
	<link rel="stylesheet" href="<?php echo get_template_directory_uri() . '/style.min.css?' . filemtime(get_template_directory() . '/style.min.css') ?>" type="text/css" media="screen" />

	<!-- 	preload images for image sequence -->
	<?php
	if (is_front_page()) :

		//names of subdirectories containing image sequences
		$image_sequences = array('bg_earth');
		$current_image_sequence_dir =  $image_sequences[array_rand($image_sequences)];
		//choose random subdirectory and get all images
		//store as global variable to be reused
		global $current_image_sequence;
		$current_image_sequence = glob(get_template_directory() . "/images/" . $current_image_sequence_dir . "/*.gif");
		//fix paths
		foreach ($current_image_sequence as $key => $image) {
			$current_image_sequence[$key] = get_template_directory_uri() . "/images/" . $current_image_sequence_dir . '/' . basename($image);
		}
		//preload images from image sequence in head
		foreach ($current_image_sequence as $image) : ?>
			<link rel="preload" class="preloaded_bg_image" href="<?php echo $image; ?>" as="image" type="image/gif" />
	<?php endforeach;
	endif; ?>


	<meta name="msapplication-TileColor" content="#ffffff">
	<meta name="theme-color" content="#ffffff">
	<?php wp_head() ?>

	<script type="text/javascript" src="<?php echo get_template_directory_uri() . '/js/main.js?' . filemtime(get_template_directory() . '/js/main.js'); ?>" defer></script>

</head>

<?php //sprite for navigation, and usage in running text ?>
<svg style="display:none" fill="none" xmlns="http://www.w3.org/2000/svg">
	<symbol id="slider-sprite" viewBox="0 0 233 230">
		<path class="sprite_stroke" d="M143.828 223.066C112.96 152.226 97.3132 149.827 6.65826 202.019C92.9891 140.353 94.9887 126.455 24.2294 80.312C102.787 112.282 113.135 103.834 114.734 6.19824C119.333 91.8603 121.808 95.7097 136.405 40.0681C129.431 102.584 133.83 105.008 174.746 61.2649C143.678 107.808 148.277 107.833 214.937 61.5649C143.878 116.557 145.153 127.28 226.26 155.426C150.376 138.903 145.428 140.078 182.894 165.774C137.654 144.277 134.83 146.977 158.1 189.496C131.306 153.601 129.656 157.425 143.853 223.066" />
		<path class="sprite_fore" d="M143.828 223.066C112.96 152.226 97.3132 149.827 6.65826 202.019C92.9891 140.353 94.9887 126.455 24.2294 80.312C102.787 112.282 113.135 103.834 114.734 6.19824C119.333 91.8603 121.808 95.7097 136.405 40.0681C129.431 102.584 133.83 105.008 174.746 61.2649C143.678 107.808 148.277 107.833 214.937 61.5649C143.878 116.557 145.153 127.28 226.26 155.426C150.376 138.903 145.428 140.078 182.894 165.774C137.654 144.277 134.83 146.977 158.1 189.496C131.306 153.601 129.656 157.425 143.853 223.066" />
	</symbol>
</svg>


<?php
// if page is archive
if (get_post_type(get_the_ID()) == 'archive_detail') {
	$archive_background_color = get_field('archive_background_color');
}
?>

<body <?php body_class() ?> <?php if (isset($archive_background_color)) {
								echo 'style="--bg_color:' . $archive_background_color . '"';
							} ?>>
	<header class="main_header">
		<div class="wrap_inner">
			<?php if (is_front_page()) : ?>
				<h1 class="main_logo">
				<?php else : ?>
					<figure class="main_logo">
					<?php endif; ?>
					<a href="<?= get_home_url() ?>">
						<img src="<?php echo get_template_directory_uri() . '/images/kiosk_logo_2024.svg'; ?>" alt="<?php echo get_bloginfo('name'); ?>" />
					</a>
					<?php if (is_front_page()) : ?>
				</h1>
			<?php else : ?>
				</figure>
			<?php endif; ?>

			<div class="main_menu_switch">
				<div class="lines">
					<div class="line"></div>
					<div class="line"></div>
					<div class="line"></div>
				</div>
			</div>
		</div>
		<nav class="main_menu_wrap">
			<?php
			wp_nav_menu(
				array(
					'theme_location' => 'primary',
					'menu'	=> 'header_menu',
					'menu_class'  => 'main_menu',
					'container'   => '',
					'depth'	=> 1,
					'items_wrap'  => '<ul class="main_menu">%3$s</ul>',
					'link_before' => '<span class="label">',
					'link_after'  => '</span>',
					'fallback_cb' => false,
				)
			);

			?>
		</nav>
	</header>