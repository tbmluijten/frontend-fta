<?php
/**
 * WWFFYJ landing sections.
 *
 * @package WWFFYJ_Landing
 */

if (!defined('ABSPATH')) {
	exit;
}
?>
<main class="min-h-screen font-sans">
	<?php get_template_part('template-parts/sections/hero'); ?>
	<div class="bg-[#F9FAFB]">
		<?php
		get_template_part('template-parts/sections/media-highlight');
		get_template_part('template-parts/sections/media-highlight-steps');
		get_template_part('template-parts/sections/justice-steps');
		get_template_part('template-parts/sections/cases');
		get_template_part('template-parts/sections/stories');
		get_template_part('template-parts/sections/faq');
		get_template_part('template-parts/sections/banner');
		?>
	</div>
</main>
