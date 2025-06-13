<?php 

function auto_nbsp($text){
	$text = preg_replace('/\h(\w{1,2})\h(\w)/', ' $1&nbsp;$2', $text);
	return $text;
};


add_filter('wp_nav_menu_objects', 'menu_auto_nbsp', 10, 2);

function menu_auto_nbsp($items){
	foreach ($items as $key => $item){
		$items[$key]->title = auto_nbsp($item->title);
	}
	return $items;
};