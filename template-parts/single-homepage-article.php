<?php
$show_publish_date = false;
if (isset($args["show_publish_date"])) {
    $show_publish_date = $args["show_publish_date"];
} ?>

<a class="article_wrap stefan-simple" href="<?= get_the_permalink() ?>">
    <article>
        <?php
            $thumb_img = get_the_post_thumbnail( $post,
                'thumb-image-twocol',
                array(
                    'sizes' => '(max-width: 570px) 70vw, (max-width: 1100px) 40vw, 26vw'
                ),
            );
            ?>
        <div class="img_wrap<?=$thumb_img ? '' : ' placeholder'?>">
            <?=$thumb_img?>
        </div>
        <div class="text_wrap">
            <?php if ($show_publish_date) {
                $publish_date = get_the_date('d. m. Y.');
                echo '<p class="publish_date"><svg class="inline-icon" viewBox="0 0 18.62 17.04"><use xlink:href="#icon-calendar"></use></svg>' . get_the_date('j. n. Y') . '</p>';
            } ?>
            <h3 class="title"><?php the_title(); ?></h3>

            <div class="text"><?= get_the_excerpt(); ?></div>
        </div>
    </article>
</a>