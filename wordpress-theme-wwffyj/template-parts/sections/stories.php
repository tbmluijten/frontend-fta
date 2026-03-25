<?php
/**
 * Stories — WWFFYJ variant (Embla + arrows), startIndex 0.
 *
 * @package WWFFYJ_Landing
 */

if (!defined('ABSPATH')) {
	exit;
}

$stories = wwffyj_landing_stories();
?>
<section
	class="bg-white"
	aria-label="<?php esc_attr_e('Your story', 'wwffyj-landing'); ?>"
	aria-roledescription="slider"
	data-stories-root
	data-stories-start="0"
	data-stories-variant="wwffyj"
>
	<div class="mx-auto w-full max-w-[1200px] px-4 py-[40px] md:py-[70px]">
		<div class="mx-auto max-w-[768px] text-center">
			<h2 class="font-alexandria text-[30px] font-semibold leading-none text-[#0A3182] lg:text-[48px]">
				<?php esc_html_e('Your Story', 'wwffyj-landing'); ?>
			</h2>
		</div>
		<div class="mx-auto mt-8 flex w-full items-center justify-center gap-3 lg:mt-10 lg:gap-6">
			<button
				type="button"
				class="rotate-180 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-wwffyj-badge-bg)] text-[#0A3182] transition-colors hover:bg-[#f8d4d4] focus:outline-none focus:ring-2 focus:ring-[#0A3182]/25 disabled:pointer-events-none disabled:opacity-35"
				aria-label="<?php esc_attr_e('Previous story', 'wwffyj-landing'); ?>"
				data-stories-prev
			>
				<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="-rotate-90" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
			</button>
			<div class="w-full min-w-0 max-w-[856px] shrink overflow-hidden embla__viewport" data-embla-viewport>
				<div class="embla__container flex items-stretch gap-0">
					<?php foreach ($stories as $i => $story) : ?>
						<div
							class="embla__slide relative flex min-w-0 flex-[0_0_100%]"
							role="group"
							aria-roledescription="slide"
							aria-label="<?php echo esc_attr((string) ($i + 1) . ' of ' . (string) count($stories)); ?>"
						>
							<div class="relative w-full rounded-2xl border border-[#E5E7EB] bg-white px-8 py-10 lg:px-[72px] lg:py-12">
								<p class="text-center text-[20px] font-normal leading-[32px] text-[#111827]">
									&ldquo;<?php echo esc_html($story['text']); ?>&rdquo;
								</p>
							</div>
						</div>
					<?php endforeach; ?>
				</div>
			</div>
			<button
				type="button"
				class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-wwffyj-badge-bg)] text-[#0A3182] transition-colors hover:bg-[#f8d4d4] focus:outline-none focus:ring-2 focus:ring-[#0A3182]/25 disabled:pointer-events-none disabled:opacity-35"
				aria-label="<?php esc_attr_e('Next story', 'wwffyj-landing'); ?>"
				data-stories-next
			>
				<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="rotate-90" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
			</button>
		</div>
	</div>
</section>
