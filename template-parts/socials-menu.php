<?php $global_fb = get_field('global_fb', 'option');
$global_instagram = get_field('global_instagram', 'option');

?>
<ul class="socials-menu h2">
    <?php if ($global_instagram): ?>
        <li><a target="_blank" class="link_arr bright-red-hover" href="<?= $global_instagram['url'] ?>" <?= $global_instagram['target'] ? 'target="' . $global_instagram['target'] . '"' : '' ?>><span class="sr-only"><?= $global_instagram['title'] ?></span><svg viewBox="0 0 211 56" class="inline-icon">
                    <use xlink:href="#icon-insta"></use>
                </svg></a></li>
    <?php endif;
    if ($global_fb): ?>
        <li><a target="_blank" class="link_arrbright-red-hover" href="<?= $global_fb['url'] ?>" <?= $global_fb['target'] ? 'target="' . $global_fb['target'] . '"' : '' ?>><span class="sr-only"><?= $global_fb['title'] ?></span><svg class="inline-icon" viewBox="0 0 87 56">
                    <use xlink:href="#icon-fb"></use>
                </svg></a></li>
    <?php endif; ?>
</ul>