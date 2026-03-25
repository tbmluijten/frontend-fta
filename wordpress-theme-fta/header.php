<?php
/**
 * Theme header — FTA variant only.
 *
 * @package FTA_Landing
 */

if (!defined('ABSPATH')) {
	exit;
}
?><!DOCTYPE html>
<html <?php language_attributes(); ?> class="h-full antialiased">
<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<?php wp_head(); ?>
	<style>
		:root {
			--font-inter: "Inter", ui-sans-serif, system-ui, sans-serif;
			--font-manrope: "Manrope", ui-sans-serif, system-ui, sans-serif;
			--font-alexandria-raw: "Alexandria", ui-sans-serif, system-ui, sans-serif;
		}
	</style>
</head>
<body <?php body_class('flex min-h-full flex-col bg-[#EFEFFF] font-sans'); ?>>
<?php wp_body_open(); ?>
<header
	id="site-header"
	class="top-0 z-50 w-full transition-colors duration-300 ease-in-out bg-none absolute"
	data-header-scroll
	role="banner"
>
	<div class="mx-auto flex w-full max-w-[1200px] items-center justify-between px-4 py-4 md:py-[40px] lg:!py-6">
		<a
			href="<?php echo esc_url(home_url('/')); ?>"
			class="rounded-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
			aria-label="<?php esc_attr_e('For The Abused - Home', 'fta-landing'); ?>"
		>
			<img
				src="<?php echo fta_landing_asset_esc('logo/fortheabused.png'); ?>"
				alt="<?php esc_attr_e('For The Abused - Justice Starts Here', 'fta-landing'); ?>"
				width="332"
				height="80"
				class="h-12 w-auto object-contain"
				decoding="async"
			>
		</a>
		<a
			href="<?php echo fta_landing_home('/case-review/'); ?>"
			class="inline-flex w-fit max-w-full items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-4 text-sm font-bold text-white shadow-[0_4px_14px_rgba(15,16,95,0.25)] transition-colors hover:bg-primary/90 focus:ring-2 focus:ring-primary focus:ring-offset-2 md:text-base"
		>
			<?php esc_html_e('Free Case Review', 'fta-landing'); ?>
		</a>
	</div>
</header>
