	<div class="main_footer_wrap">
		<!-- single -->
		<?php if (is_single()) :?>
			<div class="post_detail_bottom_decor"></div>
		<?php endif; ?>

		<!-- running text -->
		<?php
			$global_running_text = get_field('global_running_text','option');
		?>
		
		<?php if ($global_running_text): ?>
			<aside class="running_text wrap margin_top h1_size kommuna_narrow">
				<div class="dates">
					<?php for ($i = 0; $i < 3; $i++): ?>
						<span><?= $global_running_text ?>&nbsp;</span>
					<?php endfor; ?>
				</div>
			</aside>
		<?php endif; ?>

		<footer class="main_footer wrap no_margin_bottom">
			<div class="wrap_inner top">
				<?php
					$global_contact_title = get_field('global_contact_title','option');
					
					$global_contact_subtitle_1 = get_field('global_contact_subtitle_1','option');
					$global_contact_personal_info_1a = get_field('global_contact_personal_info_1a','option');
					$global_contact_personal_info_1b = get_field('global_contact_personal_info_1b','option');
					
					$global_contact_subtitle_2 = get_field('global_contact_subtitle_2','option');
					$global_contact_personal_info_2a = get_field('global_contact_personal_info_2a','option');
					$global_contact_personal_info_2b = get_field('global_contact_personal_info_2b','option');
				?>

				<!-- contacts -->
				<div class="footer_contact">	
					<?php if ($global_contact_title): ?>
						<h3 class="title"><?= $global_contact_title ?></h3>
					<?php endif; ?>

					<div class="contact_wrap">	
						<?php if ($global_contact_subtitle_1): ?>
							<h4 class="subtitle sec1 wide"><span><?= $global_contact_subtitle_1 ?></span></h4>
						<?php endif; ?>	

						<?php if ($global_contact_personal_info_1a): ?>
							<div class="person sec11"><?= $global_contact_personal_info_1a ?></div>
						<?php endif; ?>	
						<?php if ($global_contact_personal_info_1b): ?>
							<div class="person sec12"><?= $global_contact_personal_info_1b ?></div>
						<?php endif; ?>

						<?php if ($global_contact_subtitle_2): ?>
							<h4 class="subtitle sec2"><span><?= $global_contact_subtitle_2 ?></span></h4>
						<?php endif; ?>	

						<?php if ($global_contact_personal_info_2a): ?>
							<div class="person sec21"><?= $global_contact_personal_info_2a ?></div>
						<?php endif; ?>	
						<?php if ($global_contact_personal_info_2b): ?>
							<div class="person sec22"><?= $global_contact_personal_info_2b ?></div>
						<?php endif; ?>
					</div>
				</div>

				<!-- social -->
				<?php
					$global_fb = get_field('global_fb','option');
					$global_instagram = get_field('global_instagram','option');
				?>

				<ul class="footer_menu">
					<?php if ($global_instagram): ?>
						<li><a class="link_arr h3_size" href="<?= $global_instagram['url'] ?>" <?= $global_instagram['target'] ? 'target="' . $global_instagram['target'] .'"' : '' ?>><span class="label"><?= $global_instagram['title'] ?></span></a></li>
					<?php endif; ?>

					<?php if ($global_fb): ?>
						<li><a class="link_arr h3_size" href="<?= $global_fb['url'] ?>" <?= $global_fb['target'] ? 'target="' . $global_fb['target'] .'"' : '' ?>><span class="label"><?= $global_fb['title'] ?></span></a></li>
					<?php endif; ?>
				</ul>
			</div>

			<div class="wrap_inner bottom">
				<div class="designer">
					Design by <a href="https://www.instagram.com/tomadzery/">Tom & Džery</a>,<br>based on layout by Kateřina Tesařová</a>
				</div>
			</div>
		</footer>
	</div>					
	<div class="overlay"></div>
	<?php wp_footer(); ?>
</body>