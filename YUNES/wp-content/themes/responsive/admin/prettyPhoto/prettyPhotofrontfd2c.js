// JavaScript Document
jQuery( document ).ready(function( $ ) {
		$("a[rel^='prettyPhoto']").prettyPhoto({
				animation_speed: 'normal',
				slideshow: 5000,
				show_title: true,
				allow_resize: true,
				counter_separator_label: '/',
				theme: 'light_square',
				horizontal_padding: 20,
				autoplay: false,
				social_tools: false
				
			}); 
});