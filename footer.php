<div class="main_footer_wrap">
	<!-- single -->
	<?php if (is_single()) : ?>
		<div class="post_detail_bottom_decor"></div>
	<?php endif; ?>

	<!-- running text -->


	<footer class="main_footer wrap no_margin_bottom">
		<div class="wrap_inner top">
			<?php
			$global_contact_title = get_field('global_contact_title', 'option');

			$global_contact_subtitle_1 = get_field('global_contact_subtitle_1', 'option');
			$global_contact_personal_info_1a = get_field('global_contact_personal_info_1a', 'option');
			$global_contact_personal_info_1b = get_field('global_contact_personal_info_1b', 'option');

			$global_contact_subtitle_2 = get_field('global_contact_subtitle_2', 'option');
			$global_contact_personal_info_2a = get_field('global_contact_personal_info_2a', 'option');
			$global_contact_personal_info_2b = get_field('global_contact_personal_info_2b', 'option');
			?>

			<!-- contacts -->
			<div class="footer_contact">
				<?php if ($global_contact_title): ?>
					<h3 class="title h1 ff-heading">
						<?= $global_contact_title ?>
					</h3>
				<?php endif; ?>

				<div class="contact_wrap">

					<div class="contact-1">
						<?php if ($global_contact_subtitle_1): ?>
							<h4 class="subtitle sec1 wide ff-base"><span><?= $global_contact_subtitle_1 ?></span></h4>
						<?php endif; ?>
						<?php if ($global_contact_personal_info_1a): ?>
							<div class="person sec11 ff-base"><?= $global_contact_personal_info_1a ?></div>
						<?php endif; ?>
						<?php if ($global_contact_personal_info_1b): ?>
							<div class="person sec12 ff-base"><?= $global_contact_personal_info_1b ?></div>
						<?php endif; ?>
					</div>


					<div class="contact-2">
						<?php if ($global_contact_subtitle_2): ?>
							<h4 class="subtitle sec2 ff-base"><span><?= $global_contact_subtitle_2 ?></span></h4>
						<?php endif; ?>
						<?php if ($global_contact_personal_info_2a): ?>
							<div class="person sec21 ff-base"><?= $global_contact_personal_info_2a ?></div>
						<?php endif; ?>
						<?php if ($global_contact_personal_info_2b): ?>
							<div class="person sec22 ff-base"><?= $global_contact_personal_info_2b ?></div>
						<?php endif; ?>
					</div>

					<!-- social -->
					<?php
					get_template_part('template-parts/socials-menu'); ?>
					<div class="designer">
						<svg viewBox="0 0 229 182" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M0.0100098 37.7H228.8V61.1H205.4V84.5H182V61.1H46.8V84.5H23.4001V61.1H0V37.7H0.0100098ZM65.79 72.8H105.31V182H45.51L65.79 72.8ZM79.3101 0H105.31V28.6H74.1101L79.3101 0ZM123.51 0H149.51L154.71 28.6H123.51V0ZM123.51 72.8H163.03L183.31 182H123.51V72.8Z" fill="white"/>
						</svg>
						<p>Design by <a target="_blank" href="https://workout-office.com/">WorkOut Office</a>,<br>Code by Juraj Mydla</p>
					</div>
				</div>
			</div>
		</div>
	</footer>
</div>
<div class="overlay"></div>
<?php wp_footer(); ?>

<script type="text/javascript" src="<?= get_template_directory_uri() . '/js/main.js?mod=' . filemtime(get_template_directory() . '/js/main.js'); ?>"></script>

</body>