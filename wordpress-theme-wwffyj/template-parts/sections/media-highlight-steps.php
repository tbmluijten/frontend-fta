<?php
/**
 * Media highlight — “abuse crisis” steps variant.
 *
 * @package WWFFYJ_Landing
 */

if (!defined('ABSPATH')) {
	exit;
}

$steps = array(
	array(
		'id'          => 'exposure',
		'title'       => 'Exposure',
		'description' => "Exposure to harmful products or abuse can change the course of someone's life.",
		'svg'         => '<svg class="h-12 w-12 text-[var(--color-wwffyj-cta)]" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M4 41.5L24 6.5L44 41.5H4ZM10.2727 37.8158H37.7273L24 13.8684L10.2727 37.8158ZM24 35.9737C24.5152 35.9737 24.947 35.7971 25.2955 35.4441C25.6439 35.091 25.8182 34.6535 25.8182 34.1316C25.8182 33.6096 25.6439 33.1721 25.2955 32.8191C24.947 32.466 24.5152 32.2895 24 32.2895C23.4848 32.2895 23.053 32.466 22.7045 32.8191C22.3561 33.1721 22.1818 33.6096 22.1818 34.1316C22.1818 34.6535 22.3561 35.091 22.7045 35.4441C23.053 35.7971 23.4848 35.9737 24 35.9737ZM22.1818 30.4474H25.8182V21.2368H22.1818V30.4474Z" fill="currentColor"/></svg>',
	),
	array(
		'id'          => 'impact',
		'title'       => 'Impact',
		'description' => "The impact on a person's life is great. We fight for their justice!",
		'svg'         => '<svg class="h-12 w-12 text-[var(--color-wwffyj-cta)]" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M21 31.5H27V26.5H32V20.5H27V15.5H21V20.5H16V26.5H21V31.5ZM24 44.5C19.3667 43.3333 15.5417 40.675 12.525 36.525C9.50833 32.375 8 27.7667 8 22.7V10.5L24 4.5L40 10.5V22.7C40 27.7667 38.4917 32.375 35.475 36.525C32.4583 40.675 28.6333 43.3333 24 44.5ZM24 40.3C27.4667 39.2 30.3333 37 32.6 33.7C34.8667 30.4 36 26.7333 36 22.7V13.25L24 8.75L12 13.25V22.7C12 26.7333 13.1333 30.4 15.4 33.7C17.6667 37 20.5333 39.2 24 40.3Z" fill="currentColor"/></svg>',
	),
	array(
		'id'          => 'liability',
		'title'       => 'Liability',
		'description' => 'We help with keeping the perpetrators accountable.',
		'svg'         => '<svg class="h-12 w-12 text-[var(--color-wwffyj-cta)]" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M4 42.5V6.5H24V14.5H44V42.5H4ZM8 38.5H20V34.5H8V38.5ZM8 30.5H20V26.5H8V30.5ZM8 22.5H20V18.5H8V22.5ZM8 14.5H20V10.5H8V14.5ZM24 38.5H40V18.5H24V38.5ZM28 26.5V22.5H36V26.5H28ZM28 34.5V30.5H36V34.5H28Z" fill="currentColor"/></svg>',
	),
);
?>
<section class="bg-[#F9FAFB]" aria-labelledby="media-highlight-steps-heading">
	<div class="mx-auto w-full max-w-[1200px] px-4 !py-12 md:!py-14 lg:!py-16 md:py-[70px]">
		<div class="flex w-full flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
			<div class="flex min-w-0 flex-1 flex-col gap-6">
				<span
					class="inline-flex w-fit rounded-full px-4 py-1.5 text-sm font-bold text-[var(--color-wwffyj-badge-text)]"
					style="background-color: var(--color-wwffyj-badge-bg);"
				>
					<?php esc_html_e('The Abuse Crisis', 'wwffyj-landing'); ?>
				</span>
				<h2 id="media-highlight-steps-heading" class="font-alexandria text-[30px] font-semibold leading-none text-[#0A3182] lg:text-[48px]">
					<?php esc_html_e('Cases of Abuse are Widespread', 'wwffyj-landing'); ?>
				</h2>
				<p class="max-w-lg text-lg leading-relaxed text-[#111827]">
					<?php esc_html_e('Abuse can happen in many forms, not just by people but also by products. We fight for everyone affected by such circumstances.', 'wwffyj-landing'); ?>
				</p>
				<a
					href="<?php echo wwffyj_landing_home('/eligibility/'); ?>"
					class="hidden rounded-md border-0 bg-[var(--color-wwffyj-cta)] px-6 py-4 text-base font-bold text-white shadow-none transition-colors hover:bg-[var(--color-wwffyj-cta)]/90 lg:inline-flex"
				>
					<?php esc_html_e('Check My Eligibility', 'wwffyj-landing'); ?>
				</a>
			</div>
			<div class="min-w-0 w-full flex-1">
				<div class="relative grid w-full" style="grid-template-columns: 3rem minmax(0, 1fr); column-gap: 1.5rem;" role="list">
					<div
						class="relative col-start-1 justify-self-center"
						style="grid-row-start: 1; grid-row-end: <?php echo esc_attr((string) (count($steps) + 1)); ?>;"
						aria-hidden="true"
					>
						<div class="absolute left-1/2 top-6 bottom-6 w-0.5 -translate-x-1/2 bg-[var(--color-wwffyj-cta)]"></div>
					</div>
					<?php
					$idx = 0;
					foreach ($steps as $step) :
						++$idx;
						$is_last = $idx === count($steps);
						?>
						<div class="relative z-[1] col-start-1 flex justify-center self-start pt-0.5" style="grid-row-start: <?php echo esc_attr((string) $idx); ?>; grid-row-end: <?php echo esc_attr((string) $idx); ?>;">
							<span class="flex h-12 w-12 shrink-0 items-center justify-center bg-[#F9FAFB] outline-solid outline-16 outline-[#F9FAFB]">
								<?php echo $step['svg']; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
							</span>
						</div>
						<div class="col-start-2 min-w-0 pt-0.5 <?php echo $is_last ? '' : 'pb-10'; ?>" style="grid-row-start: <?php echo esc_attr((string) $idx); ?>; grid-row-end: <?php echo esc_attr((string) $idx); ?>;" role="listitem">
							<h3 class="text-[18px] font-bold leading-snug text-[#111827] lg:text-[24px]"><?php echo esc_html($step['title']); ?></h3>
							<p class="mt-2 text-base leading-relaxed text-[#111827]"><?php echo esc_html($step['description']); ?></p>
						</div>
					<?php endforeach; ?>
				</div>
			</div>
		</div>
	</div>
</section>
