<?php
/**
 * Media highlight — image / core values overlay variant.
 *
 * @package WWFFYJ_Landing
 */

if (!defined('ABSPATH')) {
	exit;
}

$bg = wwffyj_landing_asset_esc('image-values.png');

$items = array(
	array(
		'id'    => 'fees',
		'label' => 'No fees unless you win',
		'svg'   => '<svg class="h-12 w-12 shrink-0 text-white" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M24 30L18 24M24 30C26.7937 28.9375 29.4738 27.5975 32 26M24 30V40C24 40 30.06 38.9 32 36C34.16 32.76 32 26 32 26M18 24C19.0643 21.2389 20.4044 18.5921 22 16.1C24.3304 12.374 27.5752 9.30611 31.426 7.18819C35.2768 5.07028 39.6053 3.97275 44 4.00001C44 9.44001 42.44 19 32 26M18 24H8C8 24 9.1 17.94 12 16C15.24 13.84 22 16 22 16M9 33C6 35.52 5 43 5 43C5 43 12.48 42 15 39C16.42 37.32 16.4 34.74 14.82 33.18C14.0426 32.438 13.0186 32.0093 11.9445 31.9761C10.8703 31.9428 9.82175 32.3075 9 33Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
	),
	array(
		'id'    => 'help',
		'label' => 'Our legal partners are here to help',
		'svg'   => '<svg class="h-12 w-12 shrink-0 text-white" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M24 4V6M6 24H4M11 11L9.7998 9.7998M37 11L38.2005 9.7998M44 24H42M20 27H28M24 27V37M31 33.7479C34.0281 31.5695 36 28.0151 36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 28.0151 13.9719 31.5695 17 33.7479V37.6C17 39.8402 17 40.9603 17.436 41.816C17.8195 42.5686 18.4314 43.1805 19.184 43.564C20.0397 44 21.1598 44 23.4 44H24.6C26.8402 44 27.9603 44 28.816 43.564C29.5686 43.1805 30.1805 42.5686 30.564 41.816C31 40.9603 31 39.8402 31 37.6V33.7479Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
	),
	array(
		'id'    => 'specialists',
		'label' => 'Specialists in corporate accountability claims',
		'svg'   => '<svg class="h-12 w-12 shrink-0 text-white" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M15.7373 30.9199L14 44L23.1768 38.4939C23.4761 38.3143 23.6258 38.2245 23.7855 38.1895C23.9268 38.1584 24.0732 38.1584 24.2145 38.1895C24.3742 38.2245 24.5239 38.3143 24.8232 38.4939L34 44L32.2638 30.9142M32.8518 8.49776C33.1606 9.2448 33.7535 9.8386 34.5001 10.1486L37.1179 11.233C37.8649 11.5424 38.4585 12.136 38.7679 12.8831C39.0774 13.6302 39.0774 14.4696 38.7679 15.2167L37.6844 17.8327C37.3748 18.5801 37.3744 19.4204 37.6854 20.1675L38.767 22.7827C38.9204 23.1527 38.9994 23.5494 38.9995 23.9499C38.9995 24.3505 38.9207 24.7471 38.7674 25.1172C38.6141 25.4873 38.3894 25.8235 38.1061 26.1067C37.8228 26.3899 37.4865 26.6145 37.1164 26.7677L34.5005 27.8513C33.7535 28.1602 33.1597 28.7531 32.8497 29.4997L31.7654 32.1175C31.456 32.8646 30.8624 33.4582 30.1154 33.7677C29.3683 34.0771 28.5289 34.0771 27.7818 33.7677L25.1659 32.6841C24.4188 32.3754 23.5797 32.376 22.8331 32.6858L20.2153 33.7686C19.4687 34.0774 18.63 34.0771 17.8836 33.7679C17.1371 33.4587 16.5439 32.8658 16.2342 32.1195L15.1496 29.5009C14.8407 28.7538 14.2478 28.16 13.5013 27.85L10.8835 26.7657C10.1368 26.4564 9.54338 25.8632 9.23382 25.1165C8.92426 24.3698 8.92384 23.5308 9.23266 22.7838L10.3162 20.1678C10.6249 19.4207 10.6243 18.5816 10.3144 17.8349L9.23246 15.2152C9.07905 14.8451 9.00006 14.4485 9 14.0479C8.99994 13.6474 9.0788 13.2507 9.23208 12.8806C9.38537 12.5106 9.61007 12.1743 9.89335 11.8911C10.1766 11.6079 10.5129 11.3833 10.883 11.2302L13.4989 10.1466C14.2453 9.83796 14.8387 9.2458 15.149 8.50008L16.2333 5.88221C16.5427 5.13512 17.1363 4.54155 17.8833 4.23209C18.6304 3.92264 19.4698 3.92264 20.2169 4.23209L22.8328 5.31567C23.5799 5.62437 24.419 5.62374 25.1656 5.31392L27.7845 4.23377C28.5314 3.92449 29.3706 3.92455 30.1176 4.23395C30.8645 4.54335 31.458 5.13674 31.7675 5.88365L32.8521 8.50229L32.8518 8.49776Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
	),
	array(
		'id'    => 'confidential',
		'label' => 'Free, confidential review with no obligation',
		'svg'   => '<svg class="h-12 w-12 shrink-0 text-white" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M34 20V16C34 10.4772 29.5228 6 24 6C18.4772 6 14 10.4772 14 16V20M24 29V33M17.6 42H30.4C33.7603 42 35.4405 42 36.7239 41.346C37.8529 40.7708 38.7708 39.8529 39.346 38.7239C40 37.4405 40 35.7603 40 32.4V29.6C40 26.2397 40 24.5595 39.346 23.2761C38.7708 22.1471 37.8529 21.2292 36.7239 20.654C35.4405 20 33.7603 20 30.4 20H17.6C14.2397 20 12.5595 20 11.2761 20.654C10.1471 21.2292 9.2292 22.1471 8.65396 23.2761C8 24.5595 8 26.2397 8 29.6V32.4C8 35.7603 8 37.4405 8.65396 38.7239C9.2292 39.8529 10.1471 40.7708 11.2761 41.346C12.5595 42 14.2397 42 17.6 42Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
	),
);
?>
<section class="bg-white" aria-labelledby="media-highlight-heading">
	<div class="mx-auto w-full max-w-[1200px] px-4 !py-12 md:!py-14 lg:!py-16 md:py-[70px]">
		<div class="w-full">
			<div class="flex w-full flex-col gap-10 lg:flex-row lg:items-center lg:gap-12">
				<div class="flex min-w-0 flex-1 flex-col gap-6">
					<span
						class="inline-flex w-fit rounded-full px-4 py-1.5 text-sm font-bold text-[var(--color-wwffyj-badge-text)]"
						style="background-color: var(--color-wwffyj-badge-bg);"
					>
						<?php esc_html_e('Our Core Values', 'wwffyj-landing'); ?>
					</span>
					<h2 id="media-highlight-heading" class="font-alexandria text-[30px] font-semibold leading-none text-[#0A3182] lg:text-[48px]">
						<?php esc_html_e('Why people choose us to fight for them', 'wwffyj-landing'); ?>
					</h2>
					<p class="max-w-lg text-lg leading-relaxed text-[#111827]">
						<?php esc_html_e("We're here for one reason — to make sure you have every chance to get the justice you deserve. Our legal partners are ready to review your situation at no cost and no pressure.", 'wwffyj-landing'); ?>
					</p>
					<a
						href="<?php echo wwffyj_landing_home('/case-review/'); ?>"
						class="hidden rounded-md border-0 bg-[var(--color-wwffyj-cta)] px-6 py-4 text-base font-bold text-white shadow-none transition-colors hover:bg-[var(--color-wwffyj-cta)]/90 lg:inline-flex"
					>
						<?php esc_html_e('Start my free case review', 'wwffyj-landing'); ?>
					</a>
				</div>
				<div class="relative min-w-0 w-full flex-1">
					<div class="relative aspect-square w-full overflow-hidden rounded-2xl">
						<div
							class="absolute inset-0 bg-cover bg-center bg-no-repeat"
							style="background-image: url('<?php echo esc_url($bg); ?>');"
							aria-hidden="true"
						></div>
						<span class="sr-only"><?php esc_html_e('Client reviewing their legal options with care', 'wwffyj-landing'); ?></span>
						<div class="pointer-events-none absolute left-2 top-1/2 z-10 hidden w-[min(calc(100%-1rem),268px)] -translate-y-1/2 flex-col gap-2 lg:left-3 lg:flex xl:left-4" aria-hidden="true">
							<?php foreach ($items as $row) : ?>
								<div class="flex items-center gap-3 rounded-xl border border-white/45 bg-white/20 p-2 shadow-lg backdrop-blur-md">
									<?php echo $row['svg']; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- inline SVG ?>
									<span class="text-left text-sm font-medium leading-snug text-white"><?php echo esc_html($row['label']); ?></span>
								</div>
							<?php endforeach; ?>
						</div>
					</div>
				</div>
			</div>
			<ul class="mt-10 flex flex-col gap-5 lg:hidden" aria-label="<?php esc_attr_e('Core values', 'wwffyj-landing'); ?>">
				<?php foreach ($items as $row) : ?>
					<li class="flex items-center gap-5 p-2">
						<?php
						// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- inline SVG, class swap only
						echo str_replace('text-white', 'text-[var(--color-wwffyj-cta)]', $row['svg']);
						?>
						<span class="text-base leading-relaxed text-[#111827]"><?php echo esc_html($row['label']); ?></span>
					</li>
				<?php endforeach; ?>
			</ul>
			<a
				href="<?php echo wwffyj_landing_home('/case-review/'); ?>"
				class="mt-8 inline-flex rounded-md border-0 bg-[var(--color-wwffyj-cta)] px-6 py-4 text-base font-bold text-white shadow-none transition-colors hover:bg-[var(--color-wwffyj-cta)]/90 lg:hidden"
			>
				<?php esc_html_e('Start my free case review', 'wwffyj-landing'); ?>
			</a>
		</div>
	</div>
</section>
