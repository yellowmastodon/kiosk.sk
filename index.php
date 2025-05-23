<?php get_header() ?>

<section class="default wrap">
	<div class="wrap_inner">
		<div class="title_wrap">
			<h1><span><?= get_the_title() ?></span></h1>
		</div>
		<div class="text_wrap"><?= the_content(); ?></div>
	</div>
</section>

<?php get_footer() ?>