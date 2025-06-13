<?php

/**
 * Scripts
 */
wp_enqueue_script('jquery');
wp_enqueue_script('jqueryDraggable',get_template_directory_uri() . '/js/jqueryDraggable.min.js');
wp_enqueue_script('slick',get_template_directory_uri() . '/js/slick.min.js');
wp_enqueue_script('mcustomscrollbar',get_template_directory_uri() . '/js/mcustomScrollbar.min.js');

/**
 * Thumbsizes
 */
add_image_size( 'thumb-image', 600, 450, true);
add_image_size( 'thumb-image-mid', 750, 675, true);
add_image_size( 'thumb-image-twocol', 900, 675, true);
add_image_size( 'thumb-image-onecol', 1280, 960, true);
add_image_size( 'blog-image', 1280, 9999);
add_image_size( 'full-width-image', 1280, 720, true);
add_image_size( 'full-width-image-gallery', 1280, 720, true);

/**
 * Theme Support and Site Settings
 */
add_action( 'after_setup_theme', 'kiosksetup' );
function kiosksetup() {
	/**
	 * Theme support
	 */
	add_theme_support( 'menus' );
	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'html5', array( 'comment-list', 'comment-form', 'search-form', 'gallery', 'caption', 'section' ) );
}

/**
 * Disable block editor stylesheets
 */
add_action( 'wp_enqueue_scripts', 'remove_block_css', 100 );
function remove_block_css() {
    wp_dequeue_style( 'wp-block-library' ); // Wordpress core
    wp_dequeue_style( 'wp-block-library-theme' ); // Wordpress core
}

/**
 * enable SVG
 */
add_filter('upload_mimes', 'kioskmime_types');
function kioskmime_types($mimes) {
	$mimes['svg'] = 'image/svg+xml';
	return $mimes;
}

/**
 * Add specific CSS class by filter
 */
add_filter( 'body_class', 'body_classes' );
function body_classes($wp_classes) {

	$classes = [];

	foreach ($wp_classes as $value) {
		
		// page classes
		if ($value == 'home') { $classes[] = 'page_homepage'; }
		elseif ($value == 'page-template-template_schedule') { $classes[] = 'page_schedule'; }
		elseif ($value == 'page-template-tempalte_archive_list') { $classes[] = 'page_archive_list'; }
		elseif ($value == 'single-post') { $classes[] = 'page_post'; }
		elseif ($value == 'single-archive_detail') { $classes[] = 'page_archive_detail'; }
	}

	if (empty($classes)) {
		$classes[] = 'page_default';
	}

	if (is_page()) {
		$classes[] = 'page_id' . get_queried_object_id();
	}

	if (is_user_logged_in()) {
		if (wp_get_current_user()->ID == 16) {
			$classes[] = 'user_mino';
		}
	}

	// if is touch device
	if(kioskdetect_touch_device()){ $classes[] = 'is_touch_device'; }

	return $classes;
}

/**
 * Remove menu id
 */
add_filter('nav_menu_item_id', 'kioskclear_menu_item_id', 10, 3);
function kioskclear_menu_item_id($id, $item, $args) {
    return "";
}

/**
 * Handle menu class
 */
add_filter('nav_menu_css_class', 'kioskhandle_menu_item_class', 10, 3);
function kioskhandle_menu_item_class($classes, $item, $args) {
	$arr = [];

	foreach ($classes as $value) {
		if ($value == 'menu-item-has-children') {
			$arr[] = 'has_submenu';
		}

		if ($value == 'current_page_item') {
			$arr[] = 'active';
		}
	}

    return $arr;
}

/**
 * Options page
 */
add_action('acf/init', 'kioskacf_op_init');
function kioskacf_op_init() {

    // Check function exists.
    if( function_exists('acf_add_options_page') ) {

        // Add parent.
        $parent = acf_add_options_page(array(
            'page_title'  => __('Global options'),
            'menu_title'  => __('Global options'),
            'redirect'    => false,
        ));
    }
}

/**
 * Create Image annotation
 */
add_action( 'init', 'create_posttype_img_annotation' );
function create_posttype_img_annotation() {  
    register_post_type( 'img_annotation',
        array(
            'labels' => array(
                'name' => __( 'Obrázkové anotácie' ),
                'singular_name' => __( 'Obrázková anotácia' )
            ),
            'public' => true,
            'has_archive' => true,
            'rewrite' => array('slug' => 'obrazkove-anotacie'),
            'show_in_rest' => true,
			'exclude_from_search' => true,
			'menu_icon' => 'dashicons-format-image',
			'supports'  => array('title', 'thumbnail'),
        )
    );
}

/**
 * Create Archive
 */
add_action( 'init', 'create_posttype_archive' );
function create_posttype_archive() {  
    register_post_type( 'archive_detail',
        array(
            'labels' => array(
                'name' => __( 'Archív' ),
                'singular_name' => __( 'archiv' )
            ),
            'public' => true,
            'has_archive' => false,
            'rewrite' => array('slug' => 'archiv'),
            'show_in_rest' => true,
			'exclude_from_search' => true,
			'menu_icon' => 'dashicons-archive',
			'supports'  => array('title', 'thumbnail'),
        )
    );
}

/**
 * Check color is HEX
*/
function kiosk_color_is_hex($str) {
    return preg_match('/^(?:0x)?[a-f0-9]{1,}$/i', $str);
}

/**
 * Disable big image size threshold
 */
add_filter( 'big_image_size_threshold', '__return_false' );

/**
 * Detect touch device
 */
function kioskdetect_touch_device() {
    return preg_match("/(android|avantgo|blackberry|bolt|boost|cricket|docomo
|fone|hiptop|mini|mobi|palm|phone|pie|tablet|up\.browser|up\.link|webos|wos)/i"
, $_SERVER["HTTP_USER_AGENT"]);
}

/**
 * include additional files
 */
$template_directory = get_template_directory();
require_once $template_directory . '/includes/render_functions.php';
