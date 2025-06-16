<?php 
$show_publish_date = false;
if (isset($args["show_publish_date"])){
    $show_publish_date = $args["show_publish_date"];
}?>

<a class="article_wrap stefan-simple" href="<?= get_the_permalink() ?>">
<article>
    <div class="img_wrap">
            <?php
            the_post_thumbnail(
    'thumb-image-twocol',
    array(
        'sizes' => '(max-width: 600px) 70vw, (max-width: 900px) 60vw, (max-width: 1100px) 45vw, (max-width: 1400px) 576px, (max-width: 1650px) 624px, (max-width: 1920px) 678px, (max-width: 2250px) 740px, (max-width: 2560px) 800px'
    ),
);
?>        
    </div>
    <div class="text_wrap">
        <?php if ($show_publish_date){
            $publish_date = get_the_date('d. m. Y.');
            echo '<p class="publish_date"><svg class="inline-icon" viewBox="0 0 18.62 17.04"><use xlink:href="#icon-calendar"></use></svg>' . get_the_date('j. n. Y') . '</p>';
        }?>
        <h3 class="title"><?php the_title(); ?></h3>

        <p class="text"><?= get_the_excerpt(); ?></p>
    </div>
</article>
</a>