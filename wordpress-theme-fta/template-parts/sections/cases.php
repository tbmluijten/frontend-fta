<?php
/**
 * Cases grid — FTA variant.
 *
 * @package FTA_Landing
 */

if (!defined('ABSPATH')) {
	exit;
}

$items = fta_landing_case_items();
?>
<section id="cases" class="scroll-mt-24 bg-section-bg" aria-labelledby="cases-heading">
	<div class="mx-auto w-full max-w-[1200px] px-4 py-[40px] md:py-[70px]">
		<div class="mx-auto max-w-[768px] text-center">
			<span class="inline-flex rounded-full bg-badge-green-bg px-4 py-1.5 text-sm font-bold uppercase tracking-wide text-primary-green" aria-hidden="true">
				<?php esc_html_e('Our Services', 'fta-landing'); ?>
			</span>
			<h2 id="cases-heading" class="mt-4 text-[32px] font-bold leading-none tracking-tight text-[#0F105F]">
				<?php esc_html_e('Cases We Handle', 'fta-landing'); ?>
			</h2>
			<p class="mt-4 text-[18px] text-text-muted">
				<?php esc_html_e('We help survivors navigate complex legal processes while ensuring their voices are heard.', 'fta-landing'); ?>
			</p>
		</div>
		<div class="mt-12 grid grid-cols-1 gap-6 lg:mt-16 lg:grid-cols-4">
			<?php foreach ($items as $case_item) : ?>
				<article class="group flex h-full cursor-pointer flex-col overflow-hidden rounded-[12px] bg-white transition-all duration-500 ease-in-out hover:bg-[#0F105F]">
					<div class="flex min-h-0 flex-1 flex-col px-8 pt-12 lg:px-[30px] lg:pt-[30px]">
						<h3 class="shrink-0 text-left text-[18px] font-medium leading-[26px] text-[#0F105F] transition-colors duration-500 ease-in-out group-hover:text-white">
							<?php echo esc_html($case_item['title']); ?>
						</h3>
						<div class="min-h-0 flex-1"></div>
						<p class="mt-[18px] line-clamp-3 shrink-0 text-left text-[16px] font-normal leading-[21px] text-text-muted transition-colors duration-500 ease-in-out group-hover:text-white/90">
							<?php echo esc_html($case_item['description']); ?>
						</p>
						<div class="min-h-[18px] shrink-0"></div>
						<div class="relative h-[180px] w-full shrink-0 overflow-hidden rounded-t-[12px] lg:h-[200px]">
							<img
								src="<?php echo fta_landing_asset_esc($case_item['image']); ?>"
								alt="<?php echo esc_attr($case_item['alt']); ?>"
								class="absolute inset-0 h-full w-full object-cover"
								loading="lazy"
								decoding="async"
							>
						</div>
					</div>
				</article>
			<?php endforeach; ?>
		</div>
		<div class="mt-12 flex flex-col items-center gap-4 text-center">
			<a href="<?php echo fta_landing_home('/case-review/'); ?>" class="inline-flex w-fit max-w-full items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-4 text-sm font-bold text-white shadow-[0_4px_14px_rgba(15,16,95,0.25)] transition-colors hover:bg-primary/90 focus:ring-2 focus:ring-primary focus:ring-offset-2 md:text-base">
				<?php esc_html_e('Begin Your Claim', 'fta-landing'); ?>
			</a>
			<p class="mt-4 text-[16px] text-text-muted">
				<?php esc_html_e('We are always helping survivors seek justice while', 'fta-landing'); ?>
				<span class="font-medium text-primary-green"><?php esc_html_e('connecting', 'fta-landing'); ?></span>
				<?php esc_html_e(' them with the', 'fta-landing'); ?>
				<span class="font-bold text-[#0F105F]"> <?php esc_html_e('support they deserve', 'fta-landing'); ?></span>.
			</p>
		</div>
	</div>
</section>
