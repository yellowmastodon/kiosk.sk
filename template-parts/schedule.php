<?php
$schedule_day = get_field('schedule_day');
if ($schedule_day): ?>
	<section class="schedules_wrap wrap no_margin_bottom">
		<div class="wrap_inner no_thumbnail_img ">
			<?php $show_schedule = get_field('show_schedule');
			if ($show_schedule !== 'show'): ?>
				<h1 class="main_title"><span class="main_title_inner">Program</span></h1>
				<p>Coming soon...</p>
			<?php else: ?>
				<div class="splide schedules_splide">
					<div class="main_title_wrap h1">
						<h1 class="main_title">Program</h1>
						<div class="splide__arrows">
							<button class="splide__arrow splide__arrow--prev btn-reset bright-red-hover">
								<span class="sr-only">Predošlý deň</span><span aria-hidden="true">←</span>
							</button>
							<button class="splide__arrow splide__arrow--next btn-reset bright-red-hover">
								<span class="sr-only">Ďalší deň</span><span aria-hidden="true">→</span>
							</button>
						</div>
					</div>
					<div class="schedules_list_outer splide__track">
						<div class="schedules_list splide__list">

							<?php while (have_rows('schedule_day')): the_row();
								$schedule_title = get_sub_field('schedule_title');
								$schedule_item = get_field('schedule_item');
								$schedule_item = get_field('schedule_item');
							?>
								<div class="splide__slide">
									<div class="schedule_wrap">
										<?php if ($schedule_title): ?>
											<h2 class="h3 schedule_title"><?= $schedule_title ?></h2>
										<?php endif; ?>
										<ol role="list">

											<?php while (have_rows('schedule_item')): the_row();
												$schedule_time = get_sub_field('schedule_time');
												$schedule_info = get_sub_field('schedule_info');
												$schedule_link = get_sub_field('schedule_link');
												$schedule_img = get_sub_field('schedule_img');
											?>

												<li class="<?php if ($schedule_link): ?>has_link<?php endif; ?>" data-img="<?php if ($schedule_img) {
																																echo $schedule_img['sizes']['medium'];
																															} ?>">
													<?php if ($schedule_link): ?>
														<a class="link" href="<?= $schedule_link['url'] ?>" <?= $schedule_link['target'] ? 'target="' . $schedule_link['target'] . '"' : '' ?>>
														<?php else: ?>
															<div class="link">
															<?php endif; ?>
															<?php if ($schedule_time): ?>
																<span class="time"><?= $schedule_time ?></span>
															<?php endif; ?>

															<?php if ($schedule_info): ?>
																<div class="info"><?= $schedule_info ?></div>
															<?php endif; ?>

															<?php if ($schedule_link): ?>
														</a>
													<?php else: ?>
									</div>
								<?php endif; ?>
								</li>

							<?php endwhile; ?>
							</ol>
								</div>
						</div>
					<?php endwhile; ?>
					</div>
					<div class="square"></div>
				</div>
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
	$global_button_buy_ticket = get_field('global_button_buy_ticket', 'option');
	?>

	<?php if ($global_button_buy_ticket): ?>
		<a class="buy_button button type_big" href="<?= $global_button_buy_ticket['url'] ?>" <?= $global_button_buy_ticket['target'] ? 'target="' . $global_button_buy_ticket['target'] . '"' : '' ?>>
			<span class="lbl_normal lbl"><?= $global_button_buy_ticket['title'] ?></span>
			<span class="lbl_hover_wrap">
				<span class="lbl_hover lbl"><?= $global_button_buy_ticket['title'] ?></span>
			</span>
		</a>
	<?php endif; ?>
	</div>
	</section>

<?php endif;
