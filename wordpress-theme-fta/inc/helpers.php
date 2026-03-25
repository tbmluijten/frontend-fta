<?php
/**
 * FTA Landing theme helpers.
 *
 * @package FTA_Landing
 */

if (!defined('ABSPATH')) {
	exit;
}

/**
 * Public URL for a file under assets/images (mirrors Next.js /public).
 */
function fta_landing_asset_url(string $path): string {
	return trailingslashit(get_template_directory_uri()) . 'assets/images/' . ltrim($path, '/');
}

/**
 * Escaped asset URL.
 */
function fta_landing_asset_esc(string $path): string {
	return esc_url(fta_landing_asset_url($path));
}

/**
 * Home URL for internal routes (same site only).
 */
function fta_landing_home(string $path = '/'): string {
	return esc_url(home_url($path));
}
