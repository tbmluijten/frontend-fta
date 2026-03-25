<?php
/**
 * How it works section.
 *
 * @package FTA_Landing
 */

if (!defined('ABSPATH')) {
	exit;
}

$steps = array(
	array(
		'step'        => '01',
		'title'       => 'Report',
		'description' => 'Share your experience with us so we can find the right agent for you.',
		'active'      => true,
	),
	array(
		'step'        => '02',
		'title'       => 'Analyse',
		'description' => 'Our experts review your case to identify violations and relevant legal frameworks.',
		'active'      => false,
	),
	array(
		'step'        => '03',
		'title'       => 'Act',
		'description' => 'Your expert team will support you on every step of the way throughout the process.',
		'active'      => false,
	),
);
?>
<section class="bg-section-bg" aria-labelledby="how-it-works-heading">
	<div class="mx-auto w-full max-w-[1200px] px-4 py-[40px] md:py-[70px]">
		<div class="mx-auto max-w-[768px] text-center">
			<div class="mb-4 flex justify-center" aria-hidden="true">
				<span class="inline-flex rounded-full bg-badge-green-bg px-4 py-1.5 text-sm font-bold uppercase tracking-wide text-primary-green">
					<?php esc_html_e('How It Works', 'fta-landing'); ?>
				</span>
			</div>
			<h2 id="how-it-works-heading" class="text-[32px] font-bold leading-none tracking-tight text-primary">
				<?php esc_html_e('Get Justice in 3 Simple Steps', 'fta-landing'); ?>
			</h2>
			<p class="mt-4 text-[18px] text-text-muted">
				<?php esc_html_e("Let's make the legal process easier and less stressful. Being able to speak your truth is one of the most powerful steps toward healing.", 'fta-landing'); ?>
			</p>
		</div>
		<div class="mt-12 flex flex-col gap-12 lg:mt-16 lg:flex-row lg:items-start lg:gap-16">
			<div class="flex flex-1 flex-col gap-4 lg:gap-8">
				<div class="flex flex-col gap-4">
					<?php foreach ($steps as $s) : ?>
						<div class="flex items-center gap-4 rounded-2xl px-6 py-5 transition-colors <?php echo $s['active'] ? 'bg-[#2D2E7C] text-white' : 'border border-[#DDE6FF] text-primary'; ?>">
							<div class="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full font-bold text-[24px] <?php echo $s['active'] ? 'border border-white/40 text-white' : 'border border-[#DDE6FF] text-[#696AB7]'; ?>" aria-hidden="true">
								<span class="relative z-10"><?php echo esc_html($s['step']); ?></span>
							</div>
							<div class="min-w-0 flex-1">
								<h3 class="font-bold lg:text-[20px] <?php echo $s['active'] ? 'text-white' : ''; ?>"><?php echo esc_html($s['title']); ?></h3>
								<p class="mt-1 max-w-[340px] text-[14px] leading-tight lg:text-[16px] <?php echo $s['active'] ? 'text-white/90' : 'text-text-muted'; ?>">
									<?php echo esc_html($s['description']); ?>
								</p>
							</div>
						</div>
					<?php endforeach; ?>
				</div>
				<p class="text-[18px] text-text-muted">
					<?php esc_html_e('Take the first step toward', 'fta-landing'); ?>
					<span class="font-bold text-accent"><?php esc_html_e('clarity', 'fta-landing'); ?></span>
					<?php esc_html_e(' and ', 'fta-landing'); ?>
					<span class="font-bold text-primary-green"><?php esc_html_e('support', 'fta-landing'); ?></span>.
				</p>
				<a href="<?php echo fta_landing_home('/case-review/'); ?>" class="inline-flex w-fit max-w-full items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-4 text-sm font-bold text-white shadow-[0_4px_14px_rgba(15,16,95,0.25)] transition-colors hover:bg-primary/90 focus:ring-2 focus:ring-primary focus:ring-offset-2 md:text-base">
					<?php esc_html_e('Start My Free Case Review', 'fta-landing'); ?>
				</a>
			</div>
			<div class="flex flex-1">
				<div class="w-full">
					<div class="relative w-full overflow-hidden rounded-2xl border-[6px] border-[#889fd671] aspect-[4/3]">
						<img
							src="<?php echo fta_landing_asset_esc('core-values/core-values-bg.jpg'); ?>"
							alt="<?php esc_attr_e('Professional consultation', 'fta-landing'); ?>"
							class="absolute inset-0 h-full w-full object-cover"
							decoding="async"
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
