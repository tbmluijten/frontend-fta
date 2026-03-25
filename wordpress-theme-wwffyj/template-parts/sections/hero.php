<?php
/**
 * Hero — WWFFYJ variant.
 *
 * @package WWFFYJ_Landing
 */

if (!defined('ABSPATH')) {
	exit;
}

$img   = wwffyj_landing_asset_esc('hero/wwffyj-hero.jpg');
$trust = array( 'Free', 'Confidential', 'No upfront costs' );
?>
<section aria-labelledby="hero-heading" class="bg-white">
	<div class="mx-auto w-full max-w-[1200px] px-4 pb-20 pt-[90px] md:pt-[140px] md:py-[70px]">
		<div class="flex flex-col justify-between gap-12 lg:flex-row lg:items-center lg:gap-12">
			<div class="flex flex-1 flex-col gap-6">
				<span
					class="inline-flex w-fit rounded-full px-4 py-1.5 text-sm font-bold text-[var(--color-wwffyj-badge-text)]"
					style="background-color: var(--color-wwffyj-badge-bg);"
				>
					<?php esc_html_e('Active Litigation 2025', 'wwffyj-landing'); ?>
				</span>
				<h1 id="hero-heading" class="font-alexandria text-3xl leading-tight tracking-tight text-primary sm:text-4xl md:text-5xl">
					<b><?php esc_html_e('Harmed. Ignored. Left Without Answers.', 'wwffyj-landing'); ?></b>
					<?php esc_html_e(' You deserve justice.', 'wwffyj-landing'); ?>
				</h1>
				<p class="max-w-lg text-lg leading-relaxed text-text-muted">
					<?php esc_html_e("We're here to help you understand your rights and take the next step — clearly, confidently, and at no cost to you.", 'wwffyj-landing'); ?>
				</p>
				<a
					href="<?php echo wwffyj_landing_home('/case-review/'); ?>"
					class="inline-flex w-fit max-w-full items-center justify-center gap-2 rounded-md border-0 bg-[var(--color-wwffyj-cta)] px-6 py-4 text-sm font-bold text-white shadow-none transition-colors hover:bg-[var(--color-wwffyj-cta)]/90 md:text-base"
				>
					<?php esc_html_e('Start my free case review', 'wwffyj-landing'); ?>
				</a>
				<ul class="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-text-muted">
					<?php foreach ($trust as $label) : ?>
						<li class="flex items-center gap-2">
							<span class="text-accent" aria-hidden="true">
								<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 4.5L6.75 12.75L3 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
							</span>
							<?php echo esc_html($label); ?>
						</li>
					<?php endforeach; ?>
				</ul>
			</div>
			<div class="relative flex flex-1 flex-col pb-12 lg:pb-0">
				<div class="relative mx-auto w-full max-w-[488px] lg:mx-0 lg:max-w-none">
					<div class="relative z-10">
						<div class="relative ml-auto w-full overflow-hidden rounded-2xl border-2 border-[var(--color-wwffyj-frame)] aspect-[4/3] lg:aspect-auto lg:h-[524px] lg:w-[488px]">
							<img
								src="<?php echo esc_url($img); ?>"
								alt="<?php esc_attr_e('Client in rural setting seeking justice', 'wwffyj-landing'); ?>"
								class="absolute inset-0 h-full w-full object-cover"
								width="488"
								height="524"
								decoding="async"
							>
						</div>
					</div>
					<div
						class="absolute -bottom-8 left-1/2 z-20 w-[min(calc(100%-2rem),280px)] -translate-x-1/2 rounded-2xl border border-white/50 bg-white/35 p-4 shadow-xl shadow-black/10 backdrop-blur-xl backdrop-saturate-150 ring-1 ring-inset ring-white/25 lg:bottom-10 lg:left-10 lg:w-[min(100%,260px)] lg:translate-x-0"
						role="region"
						aria-label="<?php esc_attr_e('Social proof', 'wwffyj-landing'); ?>"
					>
						<div class="-space-x-2 flex justify-center lg:justify-start" aria-hidden="true">
							<?php foreach (wwffyj_social_avatar_urls() as $url) : ?>
								<div class="relative h-10 w-10 shrink-0 overflow-hidden rounded-full ring-2 ring-white">
									<img src="<?php echo esc_url($url); ?>" alt="" width="40" height="40" class="size-10 object-cover" loading="lazy">
								</div>
							<?php endforeach; ?>
						</div>
						<p class="mt-3 text-center font-alexandria text-2xl font-bold text-white lg:text-left">15,000+</p>
						<p class="text-center text-sm font-medium text-white lg:text-left"><?php esc_html_e('Families Represented', 'wwffyj-landing'); ?></p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
