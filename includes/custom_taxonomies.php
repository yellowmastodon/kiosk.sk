<?php 
// Register Custom Taxonomy
function rocnik() {

	$labels = array(
		'name'                       => _x( 'Ročníky', 'Taxonomy General Name', 'kiosk' ),
		'singular_name'              => _x( 'Ročník', 'Taxonomy Singular Name', 'kiosk' ),
		'menu_name'                  => __( 'Ročníky', 'kiosk' ),
		'all_items'                  => __( 'Všetky ročníky', 'kiosk' ),
		'parent_item'                => __( 'Nadradený ročník', 'kiosk' ),
		'parent_item_colon'          => __( 'Nadradený ročník:', 'kiosk' ),
		'new_item_name'              => __( 'Nový ročník', 'kiosk' ),
		'add_new_item'               => __( 'Pridať nový ročník', 'kiosk' ),
		'edit_item'                  => __( 'Upraviť ročník', 'kiosk' ),
		'update_item'                => __( 'Aktualizovať ročník', 'kiosk' ),
		'view_item'                  => __( 'Zobraziť ročník', 'kiosk' ),
		'separate_items_with_commas' => __( 'Oddeľte ročníky čiarkami', 'kiosk' ),
		'add_or_remove_items'        => __( 'Pridať alebo odstrániť ročníky', 'kiosk' ),
		'choose_from_most_used'      => __( 'Vyberte z najpoužívanejších ročníkov', 'kiosk' ),
		'popular_items'              => __( 'Obľúbené ročníky', 'kiosk' ),
		'search_items'               => __( 'Vyhľadať ročníky', 'kiosk' ),
		'not_found'                  => __( 'Ročník nenájdený', 'kiosk' ),
		'no_terms'                   => __( 'Žiadne ročníky', 'kiosk' ),
		'items_list'                 => __( 'Zoznam ročníkov', 'kiosk' ),
		'items_list_navigation'      => __( 'Navigácia zoznamu ročníkov', 'kiosk' ),
	);
	$args = array(
		'labels'                     => $labels,
		'hierarchical'               => false,
		'public'                     => true,
		'show_ui'                    => true,
		'show_admin_column'          => true,
		'show_in_nav_menus'          => true,
		'show_tagcloud'              => true,
		'show_in_rest'               => true,
		'rest_base'                  => 'rocnik',
        'meta_box_cb' => "post_categories_meta_box",
	);
	register_taxonomy( 'rocnik', array( 'post' ), $args );

}
add_action( 'init', 'rocnik', 0 );
