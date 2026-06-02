<?php $global_fb = get_field('global_fb', 'option');
$global_instagram = get_field('global_instagram', 'option');

?>
<ul class="socials-menu ff-heading ">
    <?php if ($global_instagram): ?>
        <li>
            <a target="_blank" class="link_arr bright-red-hover" href="<?= $global_instagram['url'] ?>" <?= $global_instagram['target'] ? 'target="' . $global_instagram['target'] . '"' : '' ?>><?= $global_instagram['title'] ?></a>
        </li>
    <?php endif;
    if ($global_fb): ?>
        <li>
            <a target="_blank" class="link_arr bright-red-hover" href="<?= $global_fb['url'] ?>" <?= $global_fb['target'] ? 'target="' . $global_fb['target'] . '"' : '' ?>><?= $global_fb['title'] ?></a>
        </li>
    <?php endif; ?>
</ul>