<?php

//sync the parnts style
add_action('wp_enqueue_scripts', 'sync_styles');

function sync_style() {
    
    $parent_style = 'sydney-style';
    
    wp_enqueue_style( $parent_style, get_template_directory_uri() . '/style.css');
    
    
    wp_enqueue_style( $parent_style,
                     get_stylesheet_directory_uri() . '/style.css',
                     wp_get_theme()->get('Version')
                     );
    
}











?>