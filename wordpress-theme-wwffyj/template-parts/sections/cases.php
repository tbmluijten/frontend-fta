<?php
/**
 * Cases grid — WWFFYJ variant.
 *
 * @package WWFFYJ_Landing
 */

if (!defined('ABSPATH')) {
	exit;
}

$items = wwffyj_landing_case_items();
?>
<section class="bg-transparent" aria-labelledby="cases-heading">
	<div class="mx-auto w-full max-w-[1200px] px-4 py-[40px] md:py-[70px]">
		<div class="mx-auto max-w-[768px] text-center">
			<span
				class="inline-flex rounded-full px-4 py-1.5 text-sm font-bold text-[var(--color-wwffyj-badge-text)]"
				style="background-color: var(--color-wwffyj-badge-bg);"
				aria-hidden="true"
			>
				<?php esc_html_e('Our Services', 'wwffyj-landing'); ?>
			</span>
			<h2 id="cases-heading" class="mt-4 font-alexandria text-[30px] font-semibold leading-none text-[#0A3182] lg:text-[48px]">
				<?php esc_html_e('Cases We Handle', 'wwffyj-landing'); ?>
			</h2>
			<p class="mt-4 text-[18px] text-[#4B5563]">
				<?php esc_html_e('We support individuals affected by negligence, dangerous products, toxic exposure, abuse, and other harmful practices. Explore the legal matters we\'re currently investigating.', 'wwffyj-landing'); ?>
			</p>
		</div>
		<div class="mt-12 grid grid-cols-1 gap-6 lg:mt-16 lg:grid-cols-4">
			<?php foreach ($items as $index => $case_item) : ?>
				<?php if (0 === $index) : ?>
					<article class="flex h-full flex-col overflow-hidden rounded-[12px] bg-[#0A3182]">
						<div class="flex min-h-0 flex-1 flex-col px-8 pt-12 lg:px-[30px] lg:pt-[30px]">
							<h3 class="shrink-0 text-left font-alexandria text-[18px] font-medium leading-[26px] text-white">
								<?php echo esc_html($case_item['title']); ?>
							</h3>
							<div class="min-h-0 flex-1"></div>
							<p class="mt-[18px] line-clamp-3 shrink-0 text-left text-[16px] font-normal leading-[21px] text-white/90">
								<?php echo esc_html($case_item['description']); ?>
							</p>
							<div class="min-h-[18px] shrink-0"></div>
							<div class="relative h-[180px] w-full shrink-0 overflow-hidden rounded-t-[12px] lg:h-[200px]">
								<img
									src="<?php echo wwffyj_landing_asset_esc($case_item['image']); ?>"
									alt="<?php echo esc_attr($case_item['alt']); ?>"
									class="absolute inset-0 h-full w-full object-cover"
									loading="lazy"
									decoding="async"
								>
							</div>
						</div>
					</article>
				<?php else : ?>
					<article class="group flex h-full cursor-pointer flex-col overflow-hidden rounded-[12px] bg-white transition-all duration-500 ease-in-out hover:bg-[#0A3182]">
						<div class="flex min-h-0 flex-1 flex-col px-8 pt-12 lg:px-[30px] lg:pt-[30px]">
							<h3 class="shrink-0 text-left font-alexandria text-[18px] font-medium leading-[26px] text-[#111827] transition-colors duration-500 ease-in-out group-hover:text-white">
								<?php echo esc_html($case_item['title']); ?>
							</h3>
							<div class="min-h-0 flex-1"></div>
							<p class="mt-[18px] line-clamp-3 shrink-0 text-left text-[16px] font-normal leading-[21px] text-[#4B5563] transition-colors duration-500 ease-in-out group-hover:text-white/90">
								<?php echo esc_html($case_item['description']); ?>
							</p>
							<div class="min-h-[18px] shrink-0"></div>
							<div class="relative h-[180px] w-full shrink-0 overflow-hidden rounded-t-[12px] lg:h-[200px]">
								<img
									src="<?php echo wwffyj_landing_asset_esc($case_item['image']); ?>"
									alt="<?php echo esc_attr($case_item['alt']); ?>"
									class="absolute inset-0 h-full w-full object-cover"
									loading="lazy"
									decoding="async"
								>
							</div>
						</div>
					</article>
				<?php endif; ?>
			<?php endforeach; ?>
		</div>
		<div class="mt-12 flex flex-col items-center gap-4 text-center">
			<a
				href="<?php echo wwffyj_landing_home('/case-review/'); ?>"
				class="inline-flex rounded-md border-0 bg-[var(--color-wwffyj-cta)] px-6 py-4 text-base font-bold text-white shadow-none transition-colors hover:bg-[var(--color-wwffyj-cta)]/90"
			>
				<?php esc_html_e('Check My Eligibility', 'wwffyj-landing'); ?>
			</a>
			<p class="mt-4 text-[16px] text-[#4B5563]">
				<?php esc_html_e('We are always helping survivors seek justice while', 'wwffyj-landing'); ?>
				<span class="font-medium text-[var(--color-wwffyj-cta)]"><?php esc_html_e('connecting', 'wwffyj-landing'); ?></span>
				<?php esc_html_e(' them with the', 'wwffyj-landing'); ?>
				<span class="font-bold text-[#0A3182]"> <?php esc_html_e('support they deserve', 'wwffyj-landing'); ?></span>.
			</p>
		</div>
	</div>
</section>
