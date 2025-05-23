<?php
	$schedule_day = get_field('schedule_day');
?>	
<?php if ($schedule_day): ?>	
	<section class="schedules_wrap wrap no_margin_bottom">
		<div class="wrap_inner no_thumbnail_img">
			<h1 class="main_title"><span class="main_title_inner">Program</span></h1>
			<?php $show_schedule = get_field('show_schedule');
			if ($show_schedule !== 'show'):?>

			<p>Coming soon...</p>
			<?php else: ?>
				<div class="schedules_list_outer">
					<div class="schedules_list">

					<?php while (have_rows('schedule_day')): the_row();
						$schedule_title = get_sub_field('schedule_title');
						$schedule_item = get_field('schedule_item');
						$schedule_item = get_field('schedule_item');
					?>
					<div class="schedule_wrap">
						<?php if ($schedule_title): ?>
							<h3 class="schedule_title"><?= $schedule_title ?></h3>
						<?php endif; ?>
						<ol>

							<?php while (have_rows('schedule_item')): the_row();
								$schedule_time = get_sub_field('schedule_time');
								$schedule_info = get_sub_field('schedule_info');
								$schedule_link = get_sub_field('schedule_link');
								$schedule_img = get_sub_field('schedule_img');
							?>

							<li class="<?php if ($schedule_link): ?>has_link<?php endif; ?>" data-img="<?php if ($schedule_img) { echo $schedule_img['sizes']['medium']; } ?>">
								<?php if ($schedule_time): ?>
									<span class="time"><?= $schedule_time ?></span>
								<?php endif; ?>

								<?php if ($schedule_info): ?>
									<span class="info"><?= $schedule_info ?></span>
								<?php endif; ?>					
								
								<?php if ($schedule_link): ?>
									<a class="link" href="<?= $schedule_link['url'] ?>"<?= $schedule_link['target'] ? 'target="' . $schedule_link['target'] .'"' : '' ?>></a>
								<?php endif; ?>
							</li>	

							<?php endwhile; ?>
						</ol>
					</div>
					<?php endwhile; ?>
					</div>
					<div class="square"></div>
				</div>
		<?php endif; ?>
		<?php
			$additional_info = get_field('additional_info');
		?>	
		<?php if ($additional_info): ?>
			<div class="additional_info">
				<?= $additional_info ?>
			</div>
		<?php endif; ?>


			<?php
				$global_button_buy_ticket = get_field('global_button_buy_ticket','option');
			?>
							
			<?php if ($global_button_buy_ticket): ?>
				<a class="buy_button button type_big" href="<?= $global_button_buy_ticket['url'] ?>"<?= $global_button_buy_ticket['target'] ? 'target="' . $global_button_buy_ticket['target'] .'"' : '' ?>>
					<span class="lbl_normal lbl"><?= $global_button_buy_ticket['title'] ?></span>
					<span class="lbl_hover_wrap">
						<span class="lbl_hover lbl"><?= $global_button_buy_ticket['title'] ?></span>
					</span>
				</a>
			<?php endif; ?>
		</div>
	</section>

	<?php
		$global_running_imgs = get_field('global_running_imgs', 'option');
	?>
	<section class="running_imgs wrap margin_top">
		<div class="wrap_inner">
			<?php if( $global_running_imgs ): ?>
				<div class="imgs_inner">
					<?php foreach( $global_running_imgs as $image ): ?>
						<figure class="img_wrap">
							<img src="<?php echo esc_url($image['sizes']['large']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" loading="lazy" />
						</figure>
						<figure class="img_wrap clone">
							<img src="<?php echo esc_url($image['sizes']['large']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" loading="lazy"/>
						</figure>
					<?php endforeach; ?>
				</div>
			<?php endif; ?>
		</div>
	</section>
		
<?php endif; ?>