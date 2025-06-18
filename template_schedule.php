<?php /* Template Name: Template Schedule */ ?>

<?php get_header() ?>

<?php
	$page_id = get_the_ID();
?>
<main id="main">
<?php
get_template_part('template-parts/schedule'); ?>
</main>
<?php get_footer(); ?>