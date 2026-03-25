<?php
/**
 * WWFFYJ Landing theme bootstrap.
 *
 * @package WWFFYJ_Landing
 */

if (!defined('ABSPATH')) {
	exit;
}

require_once get_template_directory() . '/inc/helpers.php';
require_once get_template_directory() . '/inc/data.php';

add_action(
	'after_setup_theme',
	function (): void {
		add_theme_support('title-tag');
		add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script'));
	}
);

add_action(
	'wp_enqueue_scripts',
	function (): void {
		$ver = wp_get_theme()->get('Version');

		wp_enqueue_style(
			'wwffyj-landing-fonts',
			'https://fonts.googleapis.com/css2?family=Alexandria:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap',
			array(),
			null
		);

		wp_enqueue_style(
			'wwffyj-landing-app',
			get_template_directory_uri() . '/assets/css/app.css',
			array('wwffyj-landing-fonts'),
			$ver
		);

		wp_enqueue_script(
			'wwffyj-landing-main',
			get_template_directory_uri() . '/assets/js/main.js',
			array(),
			$ver,
			true
		);
	}
);
