<!DOCTYPE html>
<html id="page" lang="<?php bloginfo('language') ?>">

<head>
	<meta charset="<?php bloginfo('charset') ?>">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1 maximum-scale=1.0">
	<link rel="stylesheet" href="<?php echo get_template_directory_uri() . '/style.min.css?mod=' . filemtime(get_template_directory() . '/style.min.css') ?>" type="text/css" media="screen" />
	<meta name="msapplication-TileColor" content="#ffffff">
	<meta name="theme-color" content="#ffffff">
	<?php wp_head() ?>

</head>



<?php
// if page is archive
if (get_post_type(get_the_ID()) == 'archive_detail') {
	$archive_background_color = get_field('archive_background_color');
}
?>

<body <?php body_class() ?> <?php if (isset($archive_background_color)) {
								echo 'style="--bg_color:' . $archive_background_color . '"';
							} ?>>
	<?php //svg sprites
	get_template_part('template-parts/svg-sprites');

	?>
	<header class="main_header">
			<?php
			$logo_wrapper = is_front_page() ? 'h1' : 'p';
			if (is_front_page()):?>
				<h1 class="main_logo sr-only"><svg>
							<use xlink:href="#main-logo"></use>
						</svg><span><?=get_bloginfo('name')?></span></h1>
			<?php else: ?>
				<p class="main_logo">
					<a class="bright-red-hover" href="<?= get_home_url() ?>">
						<svg>
							<use xlink:href="#main-logo"></use>
						</svg>
						<span class="sr-only"><?= get_bloginfo('name') ?></span>
					</a>
				</p>
			<?php endif;?>
			<div class="offcanvas-toggle-wrap">
			<button class="bright-red-hover btn-reset offcanvas-toggle" id="main_menu_switch" aria-controls="main_menu_wrap" aria-expanded="false">
				<svg viewBox="0 0 158 158" fill="none" xmlns="http://www.w3.org/2000/svg">
					<circle cx="79" cy="79" r="79" transform="matrix(-1 0 0 1 158 0)"/>
					<path id="icon-roundabout" d="M109.456 50.9168C109.457 50.9168 109.459 50.9174 109.46 50.9184C114.741 55.5305 118.428 61.4267 120.538 68.6072C123.476 78.5908 122.445 88.1756 117.445 97.371C117.05 98.0983 116.637 98.8067 116.207 99.4948C115.586 100.486 114.234 100.659 113.356 99.8861C110.944 97.7623 108.628 95.504 106.406 93.1074C105.203 91.8089 102.973 92.5134 102.801 94.2757L99.5889 127.258C99.4516 128.668 100.782 129.769 102.141 129.372L137.181 119.119C139.032 118.577 139.143 115.926 137.378 115.149C134.671 113.957 132.055 112.654 129.528 111.239C128.516 110.672 128.233 109.358 128.859 108.381C129.619 107.196 130.338 105.982 131.015 104.737C138.048 91.8732 139.498 78.406 135.373 64.3354C132.783 55.5799 128.511 48.1666 122.541 42.0955C121.824 41.3664 120.668 41.3392 119.89 42.0028L109.452 50.9057C109.447 50.9095 109.45 50.9168 109.456 50.9168ZM41.9269 68.2769C41.9269 68.278 41.9284 68.2781 41.9286 68.2771C43.2332 61.4108 46.4721 55.2543 51.6548 49.8075C58.8437 42.2954 67.6767 38.4031 78.1439 38.1404C78.9868 38.1195 79.8241 38.1295 80.6557 38.1691C81.8104 38.224 82.6173 39.3001 82.3914 40.4338C81.7612 43.5965 80.9604 46.7457 79.9931 49.8815C79.471 51.5741 81.1987 53.1511 82.8101 52.4153L112.942 38.6557C114.228 38.0684 114.515 36.3681 113.493 35.3909L87.0796 10.1351C85.6916 8.80795 83.3556 10.0188 83.5598 11.9283C83.8779 14.9038 84.0609 17.8453 84.1073 20.7542C84.1258 21.9076 83.1441 22.8124 81.9914 22.7685C80.5878 22.715 79.1756 22.7045 77.7548 22.7368C63.1046 23.0773 50.7112 28.546 40.5844 39.1427C34.2668 45.7258 29.9793 53.1245 27.7139 61.331C27.4421 62.3157 27.9967 63.3295 28.9594 63.6714L41.9263 68.2761C41.9267 68.2762 41.9269 68.2766 41.9269 68.2769ZM89.3894 118.651C89.3894 118.652 89.3892 118.652 89.3889 118.652C82.7449 120.939 75.7896 121.201 68.5133 119.43C58.3963 116.969 50.6139 111.276 45.1857 102.353C44.7497 101.637 44.3386 100.912 43.951 100.177C43.4046 99.1418 43.9307 97.8822 45.0398 97.5074C48.076 96.4815 51.1845 95.6029 54.3614 94.8755C56.0879 94.4801 56.5904 92.195 55.1483 91.1668L28.1651 71.9282C27.0128 71.1066 25.3952 71.7089 25.0607 73.084L16.4174 108.621C15.9632 110.488 18.1858 111.906 19.7382 110.773C22.1521 109.011 24.6115 107.383 27.1206 105.885C28.1178 105.29 29.3996 105.7 29.9345 106.731C30.5725 107.96 31.2583 109.177 31.9947 110.381C39.6214 122.904 50.5556 130.903 64.7972 134.367C73.9276 136.585 82.6744 136.545 91.0459 134.238C91.6781 134.064 92.064 133.432 91.9473 132.787L89.391 118.651C89.3909 118.65 89.3894 118.65 89.3894 118.651Z"/>
				</svg>
				<span class="sr-only">Zobraziť hlavné menu</span>
			</button>
			</div>
		<div role="dialog" id="main_menu_wrap" class="offcanvas rounded" aria-modal="true" aria-label="Bočné menu - dialóg" tabindex="-1" aria-hidden="true">
			<button class="btn-reset offcanvas-close" id="main_menu_close" aria-controls="main_menu_wrap">
				<svg viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M8.0767 30.0756H0V0H30.1468V8.05764H14.0873L35.5 29.4197L56.9127 8.05764H40.8532V0H71V30.0756H62.9233V14.054L41.4167 35.4161L64.4259 58.371L58.5093 64.2737L35.5 41.3188L12.4907 64.2737L6.57408 58.371L29.5833 35.4161L8.0767 14.054V30.0756Z"/>
					<path d="M62.9233 40.9244L71 40.9244L71 71L40.8532 71L40.8532 62.9424L56.9127 62.9424L35.5 41.5803L14.0873 62.9424L30.1468 62.9424L30.1468 71L-7.62939e-06 71L-5.0001e-06 40.9244L8.07669 40.9244L8.07669 56.946L29.5833 35.5839L6.57407 12.629L12.4907 6.72631L35.5 29.6812L58.5093 6.72632L64.4259 12.629L41.4167 35.5839L62.9233 56.946L62.9233 40.9244Z"/>
				</svg>
				<span class="sr-only">Zavrieť hlavné menu</span>
			</button>
			<nav class="main-menu offcanvas-content" aria-label="Hlavné menu">
				<?php
				wp_nav_menu(
					array(
						'theme_location' => 'primary',
						'menu'	=> 'header_menu',
						'container'   => '',
						'depth'	=> 1,
						'items_wrap'  => '<ul class="main_menu list-none" role="list">%3$s</ul>',
						'fallback_cb' => false,
					)
				);


				get_template_part('template-parts/socials-menu');
				?>
			</nav>
		</div>
	</header>