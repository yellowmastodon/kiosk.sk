<!DOCTYPE html>
<html id="page" lang="<?php bloginfo( 'language' ) ?>">

<head>
	<meta charset="<?php bloginfo( 'charset' ) ?>">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">
	<link rel="stylesheet" href="<?= get_stylesheet_uri() ?>?<?= time() ?>" type="text/css" media="screen"/>
	<meta name="msapplication-TileColor" content="#ffffff">
	<meta name="theme-color" content="#ffffff">
	<?php
		if (get_site_icon_url() != '') {
			echo '<link rel="Icon" href="' . get_site_icon_url($size = 32) .'" sizes="32x32">';
			echo '<link rel="Icon" href="' . get_site_icon_url($size = 192) .'" sizes="192x192">';
			echo '<link rel="apple-touch-icon" href="' . get_site_icon_url($size = 180) .'">';
			echo '<link rel="msapplication-TileImage" href="' . get_site_icon_url($size = 270) .'">';
		}	
	?>

	<style>
		*, *::before, *::after {
			box-sizing: border-box;
			margin: 0;
			padding: 0;
		}

		body {
			display: flex;
			justify-content: center;
			margin: auto;
			padding: 30px 10px;
			min-width: 320px;
		}

		img {
			max-width: 100%;
			height: auto;
		}
	</style>
</head>
<body>
	<?php
		$image = get_field('image');
	?>
	<?php if ($image): ?>
		<img src="<?= esc_url($image['url']); ?>" alt="<?= esc_attr($image['alt']); ?>" loading="lazy"/>
	<?php endif; ?>
</body>