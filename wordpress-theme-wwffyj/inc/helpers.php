<?php
/**
 * WWFFYJ Landing theme helpers.
 *
 * @package WWFFYJ_Landing
 */

if (!defined('ABSPATH')) {
	exit;
}

function wwffyj_landing_asset_url(string $path): string {
	return trailingslashit(get_template_directory_uri()) . 'assets/images/' . ltrim($path, '/');
}

function wwffyj_landing_asset_esc(string $path): string {
	return esc_url(wwffyj_landing_asset_url($path));
}

function wwffyj_landing_home(string $path = '/'): string {
	return esc_url(home_url($path));
}
