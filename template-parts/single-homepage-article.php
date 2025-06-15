<a class="article_wrap" href="<?= get_the_permalink() ?>">
<article class="article_wrap stefan-simple">
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
        <h3 class="title"><?php the_title(); ?></h3>
        <p class="text"><?= get_the_excerpt(); ?></p>
    </div>
</article>
</a>