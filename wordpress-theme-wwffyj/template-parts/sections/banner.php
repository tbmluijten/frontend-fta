<?php
/**
 * Closing banner — WWFFYJ variant.
 *
 * @package WWFFYJ_Landing
 */

if (!defined('ABSPATH')) {
	exit;
}
?>
<section class="w-full bg-transparent px-4" aria-labelledby="support-banner-heading">
	<div class="mx-auto w-full max-w-[1200px] py-6 md:py-10">
		<div class="flex w-full flex-col gap-8 rounded-2xl bg-[#0A3182] px-6 py-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:px-12 lg:py-14">
			<div class="flex min-w-0 w-full max-w-[811px] flex-1 flex-col">
				<h2 id="support-banner-heading" class="text-left font-alexandria text-[28px] font-bold leading-tight text-white sm:text-[32px] lg:text-[36px]">
					<?php esc_html_e('Ready to hold them accountable?', 'wwffyj-landing'); ?>
				</h2>
				<p class="mt-4 text-left text-[16px] font-normal leading-[26px] text-white/90 lg:mt-5 lg:text-[18px] lg:leading-[28px]">
					<?php esc_html_e('Join thousands of other brave men and women who are standing up for their health and their future.', 'wwffyj-landing'); ?>
				</p>
			</div>
			<div class="flex w-full shrink-0 flex-col items-start gap-3 lg:w-auto lg:min-w-[200px]">
				<a
					href="#cases"
					class="inline-flex w-full items-center justify-center rounded-md border-0 bg-[var(--color-wwffyj-cta)] px-6 py-4 text-base font-bold text-white shadow-none transition-colors hover:bg-[var(--color-wwffyj-cta)]/90 lg:w-auto"
				>
					<?php esc_html_e('Check My Eligibility', 'wwffyj-landing'); ?>
				</a>
			</div>
		</div>
	</div>
</section>
