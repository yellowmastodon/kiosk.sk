<?php /* Template Name: Template Archive List */ ?>

<?php get_header() ?>
	<section class="archive_wrap wrap">
		<div class="wrap_inner">
			<div class="title_wrap">
				<h1><?= get_the_title() ?></h1>
			</div>

			<?php
				if ((isset($_POST['archive_sort']) && $_POST['archive_sort'] == 'OTN') || (isset($_GET['as']) && $_GET['as'] == 'OTN')) {
					$archive_sort_from_oldest = true;
				}
				else {
					$archive_sort_from_oldest = false;
				}
			?>

			<div class="archive_sort<?= $archive_sort_from_oldest ? ' sort_old_to_new' : '' ?>">
				<form class="archive_sort_form" method="post" action="<?= get_the_permalink() . (!$archive_sort_from_oldest ? '?as=OTN' : '') ?>">
					<span class="lbl">Zoradiť od:</span>
					<input type="hidden" name="archive_sort" value="<?= !$archive_sort_from_oldest ? 'OTN' : 'NTO' ?>">
					<span class="value">
						<span class="old_to_new">
							najstaršieho Kiosku
							<span class="arr"></span>
						</span>
						<span class="new_to_old">
							najnovšieho Kiosku
							<span class="arr"></span>
						</span>
					</span>
				</form>
			</div>

			<div class="archive_list">
			<?php
				$archive_post_per_page = 2;				
				$archive_post_count = wp_count_posts('archive_detail')->publish;		
				$archive_max_pages = ceil($archive_post_count / $archive_post_per_page);				
				$archive_current_page = isset($_GET['ap']) ? $_GET['ap'] : 1;
				$archive_current_page = intval($archive_current_page);
				
				if ($archive_current_page > $archive_max_pages) {
					$archive_current_page = $archive_max_pages;
				}

				$archive_offset = ($archive_current_page - 1) * $archive_post_per_page;

				$args = array(
					'post_type' => 'archive_detail',
					'posts_per_page' => $archive_post_per_page,
					'offset' => $archive_offset,
					'order' => $archive_sort_from_oldest ? 'ASC' : 'DESC',
				);
				$the_query = new WP_Query( $args ); ?>

			<?php if ( $the_query->have_posts() ) : ?>
				<?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
					<figure class="archive_item">						
						<a class="img_link" title="<?= get_the_title() ?>" href="<?= get_the_permalink() ?>"><?= get_the_post_thumbnail(get_the_ID()); ?></a>
					</figure>
				<?php endwhile; ?>
				<?php wp_reset_postdata(); ?>

			<?php endif; ?>

			</div>

			<div class="archive_pagenav_wrap">
				<?php
					for ($i = 1; $i <= $archive_max_pages; $i++) {

						if ($i == 1) {
							echo '<a class="pagenav_item' . ($i == $archive_current_page ? ' active' : '') . '" href="' . get_permalink() . ($archive_sort_from_oldest ? '?as=OTN' : '') . '">' . $i . '</a>';
						}
						else {
							echo '<a class="pagenav_item' . ($i == $archive_current_page ? ' active' : '') . '" href="' . get_permalink() . '?ap=' .$i . ($archive_sort_from_oldest ? '&as=OTN' : '') . '">' . $i . '</a>';
						}
					}

					if ($archive_current_page + 1 <= $archive_max_pages) {
						echo '<a class="pagenav_next" href="' . get_permalink() .'?ap=' . ($archive_current_page + 1) . ($archive_sort_from_oldest ? '&as=OTN' : '') .'">Ďalšia</a>';
					}
				?>
			</div>
		</div>
	</section>

<?php get_footer() ?>