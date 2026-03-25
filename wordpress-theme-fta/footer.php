<?php
/**
 * Theme footer.
 *
 * @package FTA_Landing
 */

if (!defined('ABSPATH')) {
	exit;
}
?>
<footer class="bg-section-bg py-4 lg:py-10">
	<div class="mx-auto flex w-full max-w-[1200px] flex-col items-center justify-center px-4 !py-0 md:py-[70px]">
		<p class="text-[#6D6D6D]">&copy; <?php echo esc_html(gmdate('Y')); ?> <?php esc_html_e('For The Abused. All rights reserved.', 'fta-landing'); ?></p>
		<div class="flex w-full flex-wrap items-center justify-center gap-2 text-center text-[#6D6D6D]">
			<a href="<?php echo fta_landing_home('/privacy-policy/'); ?>"><?php esc_html_e('Privacy Policy', 'fta-landing'); ?></a>
			<a href="<?php echo fta_landing_home('/terms-of-service/'); ?>"><?php esc_html_e('Terms of Service', 'fta-landing'); ?></a>
			<a href="<?php echo fta_landing_home('/cookie-policy/'); ?>"><?php esc_html_e('Cookie Policy', 'fta-landing'); ?></a>
		</div>
	</div>
</footer>
<?php wp_footer(); ?>
</body>
</html>
