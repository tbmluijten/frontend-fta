<?php
/**
 * Hero — FTA (default) variant.
 *
 * @package FTA_Landing
 */

if (!defined('ABSPATH')) {
	exit;
}

$img = fta_landing_asset_esc('hero/fta-hero.jpg');
?>
<section aria-labelledby="hero-heading">
	<div class="mx-auto w-full max-w-[1200px] px-4 pt-[90px] md:pt-[110px] md:py-[70px]">
		<div class="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-12">
			<div class="flex flex-1 flex-col gap-6">
				<span class="inline-flex w-fit rounded-full bg-badge-green-bg px-4 py-1.5 text-sm font-bold uppercase tracking-wide text-primary-green" aria-hidden>
					<?php esc_html_e('Confidential Support', 'fta-landing'); ?>
				</span>
				<h1 id="hero-heading" class="text-3xl leading-tight tracking-tight text-primary sm:text-4xl md:text-5xl">
					<b><?php esc_html_e('Seeking Justice', 'fta-landing'); ?></b>
					<?php esc_html_e(' for Victims of ', 'fta-landing'); ?>
					<span class="relative inline-block text-primary-green">
						<?php esc_html_e('Organizational Harm', 'fta-landing'); ?>
						<svg class="hidden lg:block" width="489" height="10" viewBox="0 0 489 10" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
							<path d="M2.93766 3.35963C2.14245 3.36506 1.38623 3.68687 0.83543 4.25714C0.284628 4.82724 -0.0156383 5.59909 0.000629177 6.40002C0.0168965 7.20096 0.348348 7.96453 0.92201 8.51991C1.49567 9.07545 2.26456 9.37729 3.05957 9.36189C3.05957 9.36189 3.05957 9.36189 3.05957 9.36189C11.1524 9.20586 19.2453 9.04983 27.3381 8.8938C173.01 6.08523 318.681 3.27665 464.352 0.468083C472.445 0.312052 480.538 0.15602 488.631 -1.0896e-05C480.536 0.0559816 472.441 0.111976 464.346 0.167971C318.638 1.17586 172.93 2.18375 27.2223 3.19164C19.1274 3.24764 11.0326 3.30363 2.93766 3.35963Z" fill="#0F105F"/>
						</svg>
					</span>
				</h1>
				<p class="max-w-lg text-lg leading-relaxed text-text-muted">
					<?php esc_html_e('We provide a professional and supportive platform to help you navigate rights violations and find the path to recovery with expert guidance.', 'fta-landing'); ?>
				</p>
				<div class="flex flex-wrap gap-4">
					<a
						href="#cases"
						class="inline-flex w-fit max-w-full items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-4 text-sm font-bold text-white shadow-[0_4px_14px_rgba(15,16,95,0.25)] transition-colors hover:bg-primary/90 focus:ring-2 focus:ring-primary focus:ring-offset-2 md:text-base"
					>
						<?php esc_html_e('Check My Eligibility Now', 'fta-landing'); ?>
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
							<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
						</svg>
					</a>
					<a
						href="<?php echo fta_landing_home('/learn-more/'); ?>"
						class="inline-flex w-fit max-w-full items-center justify-center gap-2 rounded-2xl border border-zinc-300 bg-transparent px-6 py-4 text-sm font-bold text-black transition-colors hover:border-zinc-400 hover:bg-zinc-50 focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 md:text-base"
					>
						<?php esc_html_e('Learn More', 'fta-landing'); ?>
					</a>
				</div>
			</div>
			<div class="relative flex-1">
				<div class="absolute z-5 left-4 lg:-left-[100px] top-8 flex items-center gap-2 rounded-[6px] py-1 px-2 shadow-lg backdrop-blur-sm opacity-90 md:rounded-xl lg:gap-3 lg:px-4 lg:py-3 bg-primary-green" aria-hidden="true">
					<span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/90 text-primary-green md:h-10 md:w-10">
						<svg class="h-[18px] w-[21px] md:h-5 md:w-6" width="30" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
							<path d="M21.25 2.11182H8.75C7.36929 2.11182 6.25 3.05731 6.25 4.22364V21.1182C6.25 22.2846 7.36929 23.2301 8.75 23.2301H21.25C22.6307 23.2301 23.75 22.2846 23.75 21.1182V4.22364C23.75 3.05731 22.6307 2.11182 21.25 2.11182Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M18.75 14.7828H18.7625" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M11.25 6.33546H18.75" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M11.25 10.5591H18.75" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
					</span>
					<div class="flex flex-col">
						<span class="text-xs font-bold text-white"><?php esc_html_e('Free', 'fta-landing'); ?></span>
						<span class="text-[10px] text-white/90 md:text-base"><?php esc_html_e('Case Review', 'fta-landing'); ?></span>
					</div>
				</div>
				<div class="absolute z-5 right-4 lg:-right-2 bottom-6 flex items-center gap-2 rounded-[6px] py-1 px-2 shadow-lg backdrop-blur-sm opacity-90 md:rounded-xl lg:gap-3 lg:px-4 lg:py-3 bg-primary" aria-hidden="true">
					<span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/90 text-primary md:h-10 md:w-10">
						<svg class="size-[18px] md:size-5" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
							<path d="M17.501 16.25L7.02479 26.725C6.77856 26.9713 6.48623 27.1667 6.16448 27.3C5.84274 27.4333 5.49788 27.502 5.14961 27.5021C4.44623 27.5022 3.77161 27.2229 3.27416 26.7256C2.77672 26.2283 2.49719 25.5538 2.49707 24.8504C2.49695 24.147 2.77626 23.4724 3.27354 22.975L13.7535 12.4987" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M20 20L27.5 12.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M26.875 13.125L16.875 3.125" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M10 10L17.5 2.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M10.625 9.375L20.625 19.375" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
					</span>
					<div class="flex flex-col">
						<span class="text-xs font-bold text-white"><?php esc_html_e('1000+', 'fta-landing'); ?></span>
						<span class="text-[10px] text-white/90 md:text-base"><?php esc_html_e('Survivors supported', 'fta-landing'); ?></span>
					</div>
				</div>
				<div class="relative w-full overflow-hidden rounded-2xl border-[6px] border-[#889fd671] aspect-[4/3] lg:aspect-auto lg:h-[524px] lg:w-[488px]">
					<img src="<?php echo esc_url($img); ?>" alt="<?php esc_attr_e('Person seeking support', 'fta-landing'); ?>" class="absolute inset-0 h-full w-full object-cover" width="488" height="524" decoding="async">
				</div>
			</div>
		</div>
	</div>
</section>
