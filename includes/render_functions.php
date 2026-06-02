<?php

function auto_nbsp($text)
{
	$text = preg_replace('/\h(\w{1,2})\h(\w)/', ' $1&nbsp;$2', $text);
	return $text;
};


add_filter('wp_nav_menu_objects', 'menu_auto_nbsp', 10, 2);

function menu_auto_nbsp($items)
{
	foreach ($items as $key => $item) {
		$items[$key]->title = auto_nbsp($item->title);
	}
	return $items;
};

// Callback function to filter the MCE settings
function kiosk_mce_before_init_insert_formats($init_array)
{
	// Define the style_formats array
	$toolbar_1 = $init_array["toolbar1"];
	//$init_array["toolbar1"] = "styleselect,bold,italic,highlight,blockquote,bullist,numlist,alignleft,aligncenter,alignright,link,unlink,undo,redo,spellchecker,dfw";

	$style_formats = array(
		// Each array child is a format with it's own settings
		array(
			'title' => 'Paragraph',
			'block' => 'p',
			'classes' => '',
		),
		array(
			'title' => 'Perex',
			'block' => 'p',
			'classes' => 'perex',
		),
		array(
			'title' => 'Heading 2',
			'format' => 'h2',
		),
		array(
			'title' => 'Heading 3',
			'format' => 'h3',
		),
		array(
			'title' => 'Heading 4',
			'format' => 'h4',
		),
		array(
			'title' => 'Heading 5',
			'format' => 'h5',
		),
		array(
			'title' => 'Heading 6',
			'format' => 'h6',
		),
		array(
			'title' => 'Highlight',
			'inline' => 'span',
			'classes' => 'highlight',
			'wrapper' => false,
		),
		array(
			'title' => 'small',
			'inline' => 'span',
			'classes' => 'small',
			'wrapper' => false,
		),
	);


	// Insert the array, JSON ENCODED, into 'style_formats'
	$init_array['style_formats'] = wp_json_encode($style_formats);

	return $init_array;
}
// Attach callback to 'tiny_mce_before_init' 
add_filter('tiny_mce_before_init', 'kiosk_mce_before_init_insert_formats');


// Callback function to insert 'styleselect' into the $buttons array
 function kiosk_mce_buttons( $buttons ) {

	$buttons = array(
		"styleselect",
		"bold",
		"italic",
		"bullist",
		"numlist",
		"blockquote",
		"alignleft",
		"aligncenter",
		"highlight",
		"alignright",
		"link",
		"unlink",
		"spellchecker",
		"fullscreen",
		"wp_adv"
	);
	return $buttons;
}
// Register our callback to the appropriate filter
add_filter( 'mce_buttons', 'kiosk_mce_buttons', 'content');




function kiosk_secondary_title_admin_post_css()
{
	$screen = get_current_screen();
	if ($screen && in_array($screen->base, ['post', 'edit'])) {
		// Inline CSS
		echo '<style id="hide_secondary_title_group_title">
            #acf-group_68516ea7384e2 .postbox-header { display: none !important; }
        </style>';
	}
}




add_action('admin_head', 'kiosk_secondary_title_admin_post_css');

/**
 * Custom excerpt trim filter
 * @param $excerpt post excerpt
 * @param $excerpt_word_count   minimum number of words
 */
function kapital_wp_trim_excerpt($excerpt, $excerpt_word_count = 40)
{
	global $post;
	if ('' == $excerpt) {
		$excerpt = get_the_content('', false, $post);
	}
	$excerpt = strip_shortcodes($excerpt);
	$excerpt = apply_filters('the_content', $excerpt);
	$excerpt = str_replace(']]>', ']]&gt;', $excerpt);
	$excerpt = strip_tags($excerpt, ['<br>', '<p>', '<h1>', '<h2>', '<h3>', '<h4>', '<h5>', '<h6>']); /*IF you need to allow just certain tags. Delete if all tags are allowed */
	$excerpt = str_replace(['h1>', 'h2>', 'h3>', 'h4>', 'h5>', 'h6>'], 'p>', $excerpt);
	$excerpt = str_replace(['<h1', '<h2', '<h3', '<h4', '<h5', '<h6'], '<p', $excerpt);
	$excerpt = preg_replace('/class=".*?"/', '', $excerpt); //fix excerpt classes - first paragraph is perex
	//trim empty paragraphs (if e.g. image removed)
	$excerpt = preg_replace('/<p>(\s|&nbsp;|\xC2\xA0)*<\/p>+/', '', $excerpt);

	//Set the excerpt word count and only break after sentence is complete.
	$excerpt_length = apply_filters('excerpt_length', $excerpt_word_count);
	$tokens = array();
	$excerptOutput = '';
	$count = 0;

	// Divide the string into tokens; HTML tags, or words, followed by any whitespace
	preg_match_all('/(<[^>]+>|[^<>\s]+)\s*/u', $excerpt, $tokens);

	foreach ($tokens[0] as $key => $token) {
		if ($count >= $excerpt_length && (preg_match('/[\,\;\?\.\!\<\/p>]\s*$/uS', $token) || $key > 50)) {
			// Limit reached, continue until , ; ? . or ! occur at the end
			$excerptOutput .= preg_replace('/<\/p>$/', '', trim($token, " \n\r\t\v\x00,.?!"));
			break;
		}

		// Add words to complete sentence
		$count++;

		// Append what's left of the token
		$excerptOutput .= $token;
	}

	//sometimes opening '<p>' left at the end
	$excerptOutput = preg_replace('/<p\b[^>]*>(\s|&nbsp;|\xC2\xA0)*$/i', '', $excerptOutput);
	//trim colon and br character at the end as we append '...'
	$excerptOutput = preg_replace('/((\.*<br\s*\/?>|\.*\s*\.*<\/p>)\s*)+$/i', '', $excerptOutput); 
	$excerptOutput .= '...';
	$excerpt = trim(force_balance_tags($excerptOutput));

	return $excerpt;

	return apply_filters('kapital_wp_trim_excerpt', $excerpt);
}
remove_filter('get_the_excerpt', 'wp_trim_excerpt');
add_filter('get_the_excerpt', 'kapital_wp_trim_excerpt');

/**
 * check if empty, disregard whitespace and empty tags
 */
function check_nonempty_tinymce_field($data)
{   if ($data === "" || $data === null){
    return false;
    } else {
        return preg_match('/\S/', str_replace("\xc2\xa0", ' ', strip_tags($data)));
    }
}
