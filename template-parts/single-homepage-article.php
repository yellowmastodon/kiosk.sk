<article class="article_wrap stefan-simple">
    <figure class="img_wrap">
        <a class="img_link" href="<?= get_the_permalink() ?>">
            <?php
            the_post_thumbnail(
    'thumb-image-twocol',
    array(
        'sizes' => '(max-width: 600px) 70vw, (max-width: 900px) 60vw, (max-width: 1100px) 45vw, (max-width: 1400px) 576px, (max-width: 1650px) 624px, (max-width: 1920px) 678px, (max-width: 2250px) 740px, (max-width: 2560px) 800px'
    ),
);
?>        </a>
    </figure>
    <div class="text_wrap">
        <h3 class="title"><a href="<?= get_the_permalink() ?>"><?php the_title(); ?></a></h3>
        <p class="text"><?= get_the_excerpt(); ?></p>
    </div>
</article>