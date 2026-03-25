<?php
/**
 * Justice steps timeline.
 *
 * @package WWFFYJ_Landing
 */

if (!defined('ABSPATH')) {
	exit;
}

$steps = array(
	array(
		'id'          => '01',
		'number'      => '01',
		'title'       => 'Free Case Review',
		'description' => 'Fill out our 2-minute eligibility form to see if your case qualifies for a potential settlement.',
	),
	array(
		'id'          => '02',
		'number'      => '02',
		'title'       => 'Legal Consultation',
		'description' => 'Our specialized attorneys will review your history of exposure and medical records at no cost to you.',
	),
	array(
		'id'          => '03',
		'number'      => '03',
		'title'       => 'Secure Compensation',
		'description' => 'We fight the manufacturers in court to ensure you receive the maximum settlement allowed by law.',
	),
);
?>
<section class="bg-white" aria-labelledby="justice-steps-heading">
	<div class="mx-auto w-full max-w-[1200px] px-4 !py-12 md:!py-14 lg:!py-16 md:py-[70px]">
		<div class="mx-auto max-w-[720px] text-center">
			<span
				class="inline-flex rounded-full px-4 py-1.5 text-sm font-bold text-[var(--color-wwffyj-badge-text)]"
				style="background-color: var(--color-wwffyj-badge-bg);"
			>
				<?php esc_html_e('How it works', 'wwffyj-landing'); ?>
			</span>
			<h2 id="justice-steps-heading" class="mt-4 font-alexandria text-[30px] font-semibold leading-none lg:text-[48px]">
				<span class="block text-[#0A3182]"><?php esc_html_e('Your Path to Justice in', 'wwffyj-landing'); ?></span>
				<span class="mt-1 block text-[var(--color-wwffyj-cta)]"><?php esc_html_e('3 Simple Steps', 'wwffyj-landing'); ?></span>
			</h2>
			<p class="mx-auto mt-4 max-w-[480px] text-[16px] font-normal leading-6 text-[#465469] lg:mt-5 lg:text-[18px]">
				<?php esc_html_e("We've streamlined the legal process so you can focus on your health while we handle the heavy lifting.", 'wwffyj-landing'); ?>
			</p>
		</div>
		<div class="relative mx-auto mt-10 flex w-full max-w-[796px] flex-col lg:mt-14" role="list">
			<?php foreach ($steps as $index => $step) : ?>
				<?php
				$is_last = $index === count($steps) - 1;
				$row     = $index + 1;
				?>
				<div class="grid w-full" style="grid-template-columns: 3rem minmax(0, 1fr); column-gap: 1.25rem;">
					<div class="flex h-full min-h-0 flex-col items-center">
						<span class="grid h-12 w-12 shrink-0 place-items-center rounded-full border-2 border-[#0A3182] bg-white text-center text-[16px] font-bold tabular-nums leading-[1] text-[var(--color-wwffyj-cta)]">
							<?php echo esc_html($step['number']); ?>
						</span>
						<?php if (! $is_last) : ?>
							<div class="mx-auto mt-2 min-h-8 w-px flex-1 bg-[#E5E7EB]" aria-hidden="true"></div>
							<div class="h-8 w-px shrink-0 bg-[#E5E7EB] lg:h-12" aria-hidden="true"></div>
						<?php endif; ?>
					</div>
					<div class="flex min-h-0 min-w-0 flex-col">
						<article class="min-w-0 rounded-2xl border border-[#E5E7EB] bg-white px-5 py-5 lg:px-6 lg:py-6" role="listitem">
							<h3 class="font-alexandria text-[18px] font-medium leading-snug text-[#111827] lg:text-[24px] lg:font-semibold lg:leading-snug">
								<?php echo esc_html($step['title']); ?>
							</h3>
							<p class="mt-2 text-[16px] font-normal leading-[26px] text-[#4B5563]">
								<?php echo esc_html($step['description']); ?>
							</p>
						</article>
						<?php if (! $is_last) : ?>
							<div class="h-8 shrink-0 lg:h-12" aria-hidden="true"></div>
						<?php endif; ?>
					</div>
				</div>
			<?php endforeach; ?>
		</div>
	</div>
</section>
