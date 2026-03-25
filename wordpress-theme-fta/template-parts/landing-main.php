<?php
/**
 * Main landing sections (shared by front-page.php and index.php).
 *
 * @package FTA_Landing
 */

if (!defined('ABSPATH')) {
	exit;
}
?>
<main class="min-h-screen bg-section-bg">
	<?php
	get_template_part('template-parts/sections/hero');
	get_template_part('template-parts/sections/core-values');
	get_template_part('template-parts/sections/how-it-works');
	get_template_part('template-parts/sections/stories');
	get_template_part('template-parts/sections/cases');
	get_template_part('template-parts/sections/faq');
	get_template_part('template-parts/sections/usp');
	get_template_part('template-parts/sections/banner');
	?>
</main>
