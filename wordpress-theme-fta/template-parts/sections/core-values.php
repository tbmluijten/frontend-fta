<?php
/**
 * Core values section.
 *
 * @package FTA_Landing
 */

if (!defined('ABSPATH')) {
	exit;
}
?>
<section class="bg-white" aria-labelledby="core-values-heading">
	<div class="mx-auto w-full max-w-[1200px] px-4 py-[40px] md:py-[70px]">
		<div class="mx-auto max-w-[768px] text-center">
			<h2 id="core-values-heading" class="text-[32px] font-bold leading-none tracking-tight text-primary">
				<?php esc_html_e('Our Core Values', 'fta-landing'); ?>
			</h2>
			<p class="mt-4 text-[18px] text-text-muted">
				<?php esc_html_e('Founded on principles that prioritize your safety, dignity, and recovery above all else.', 'fta-landing'); ?>
			</p>
		</div>
		<div class="mt-12 flex flex-col gap-12 lg:mt-16 lg:flex-row lg:items-center lg:gap-16">
			<div class="flex flex-1">
				<div class="relative w-full">
					<div class="absolute bottom-6 right-4 z-5 flex max-w-[240px] items-center gap-2 rounded-[6px] px-2 py-1 opacity-90 shadow-lg backdrop-blur-sm md:rounded-xl lg:-right-2 lg:gap-3 lg:px-4 lg:py-3 bg-gradient-to-br from-[#5B4B9E] to-[#0a1052]" aria-hidden="true">
						<div class="flex flex-col">
							<span class="text-xs font-bold text-white md:text-[32px]"><?php esc_html_e('1000+', 'fta-landing'); ?></span>
							<span class="text-[10px] text-white/90 md:text-base"><?php esc_html_e('Survivors supported every year worldwide', 'fta-landing'); ?></span>
						</div>
					</div>
					<div class="relative w-full overflow-hidden rounded-2xl border-[6px] border-[#889fd671] aspect-[4/3] lg:aspect-auto lg:h-[400px] lg:w-[488px]">
						<img
							src="<?php echo fta_landing_asset_esc('core-values/core-values-bg.jpg'); ?>"
							alt="<?php esc_attr_e('Professional consultation setting', 'fta-landing'); ?>"
							class="absolute inset-0 h-full w-full object-cover"
							width="488"
							height="400"
							decoding="async"
						>
					</div>
				</div>
			</div>
			<div class="flex flex-1 flex-col gap-4 lg:gap-8">
				<ul class="flex flex-col gap-6" role="list">
					<li class="flex items-center gap-4">
						<span class="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-badge-green-bg text-primary-green" aria-hidden="true">
							<svg class="h-8 w-8" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.74838 16.464C2.63726 16.1646 2.63726 15.8353 2.74838 15.536C3.83065 12.9118 5.66773 10.668 8.02674 9.08919C10.3857 7.51034 13.1604 6.66748 15.999 6.66748C18.8377 6.66748 21.6123 7.51034 23.9714 9.08919C26.3304 10.668 28.1674 12.9118 29.2497 15.536C29.3608 15.8353 29.3608 16.1646 29.2497 16.464C28.1674 19.0882 26.3304 21.3319 23.9714 22.9108C21.6123 24.4897 18.8377 25.3325 15.999 25.3325C13.1604 25.3325 10.3857 24.4897 8.02674 22.9108C5.66773 21.3319 3.83065 19.0882 2.74838 16.464Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 20C18.2091 20 20 18.2091 20 16C20 13.7909 18.2091 12 16 12C13.7909 12 12 13.7909 12 16C12 18.2091 13.7909 20 16 20Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
						</span>
						<div>
							<h3 class="text-[18px] font-medium text-primary"><?php esc_html_e('Transparency', 'fta-landing'); ?></h3>
							<p class="mt-1 text-text-muted"><?php esc_html_e('Honest communication and clear processes every step of the way.', 'fta-landing'); ?></p>
						</div>
					</li>
					<li class="flex items-center gap-4">
						<span class="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-badge-green-bg text-primary-green" aria-hidden="true">
							<svg class="h-8 w-8" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.6663 17.3333C26.6663 23.9999 21.9997 27.3333 16.453 29.2666C16.1626 29.365 15.8471 29.3603 15.5597 29.2533C9.99967 27.3333 5.33301 23.9999 5.33301 17.3333V7.99995C5.33301 7.64633 5.47348 7.30719 5.72353 7.05714C5.97358 6.80709 6.31272 6.66662 6.66634 6.66662C9.33301 6.66662 12.6663 5.06662 14.9863 3.03995C15.2688 2.79861 15.6281 2.66602 15.9997 2.66602C16.3712 2.66602 16.7305 2.79861 17.013 3.03995C19.3463 5.07995 22.6663 6.66662 25.333 6.66662C25.6866 6.66662 26.0258 6.80709 26.2758 7.05714C26.5259 7.30719 26.6663 7.64633 26.6663 7.99995V17.3333Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 16L14.6667 18.6667L20 13.3334" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
						</span>
						<div>
							<h3 class="text-[18px] font-medium text-primary"><?php esc_html_e('Confidentiality', 'fta-landing'); ?></h3>
							<p class="mt-1 text-text-muted"><?php esc_html_e('Your data and story are protected by top-tier security protocols.', 'fta-landing'); ?></p>
						</div>
					</li>
					<li class="flex items-center gap-4">
						<span class="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-badge-green-bg text-primary-green" aria-hidden="true">
							<svg class="h-8 w-8" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.0467 22.6826C16.0467 21.6218 15.6252 20.6043 14.8751 19.8542C14.1249 19.1041 13.1075 18.6826 12.0467 18.6826L11.632 18.68C11.4426 18.6788 11.2578 18.6218 11.1008 18.5159C10.9438 18.41 10.8216 18.26 10.7497 18.0848C10.6777 17.9097 10.6591 17.7171 10.6963 17.5315C10.7335 17.3458 10.8248 17.1752 10.9587 17.0413L12.552 15.448C13.052 14.9478 13.7301 14.6668 14.4373 14.6666H16C16.7072 14.6666 17.3855 14.3857 17.8856 13.8856C18.3857 13.3855 18.6667 12.7072 18.6667 12C18.6667 11.2927 18.3857 10.6144 17.8856 10.1143C17.3855 9.61424 16.7072 9.33329 16 9.33329H12.324C11.7985 9.33323 11.2782 9.4367 10.7927 9.6378C10.3073 9.83889 9.86617 10.1337 9.49467 10.5053L5.88533 14.1146C4.67836 15.3221 4.00023 16.9594 4 18.6666C4 21.4956 5.12381 24.2087 7.12419 26.2091C9.12458 28.2095 11.8377 29.3333 14.6667 29.3333H17.3333C20.1623 29.3333 22.8754 28.2095 24.8758 26.2091C26.8762 24.2087 28 21.4956 28 18.6666V9.33329C28 8.62605 27.719 7.94777 27.219 7.44767C26.7189 6.94758 26.0406 6.66663 25.3333 6.66663C24.6261 6.66663 23.9478 6.94758 23.4477 7.44767C22.9476 7.94777 22.6667 8.62605 22.6667 9.33329V12C22.6667 12.7072 22.9476 13.3855 23.4477 13.8856C23.9478 14.3857 24.6261 14.6666 25.3333 14.6666C26.0406 14.6666 26.7189 14.3857 27.219 13.8856C27.719 13.3855 28 12.7072 28 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M18.517 12.8827C18.9185 13.1512 19.3853 13.3057 19.8677 13.3296C20.3501 13.3535 20.8299 13.2459 21.2559 13.0184C21.6819 12.7909 22.0382 12.4519 22.2866 12.0377C22.535 11.6235 22.6663 11.1496 22.6663 10.6667V6.66667C22.6663 5.95942 22.3854 5.28115 21.8853 4.78105C21.3852 4.28095 20.7069 4 19.9997 4C19.2924 4 18.6142 4.28095 18.1141 4.78105C17.614 5.28115 17.333 5.95942 17.333 6.66667" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12.0003 6.66667C12.0003 5.95942 11.7194 5.28115 11.2193 4.78105C10.7192 4.28095 10.0409 4 9.33366 4C8.62641 4 7.94814 4.28095 7.44804 4.78105C6.94794 5.28115 6.66699 5.95942 6.66699 6.66667V13.3333" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 9.33329V5.33329C12 4.62605 12.281 3.94777 12.781 3.44767C13.2811 2.94758 13.9594 2.66663 14.6667 2.66663C15.3739 2.66663 16.0522 2.94758 16.5523 3.44767C17.0524 3.94777 17.3333 4.62605 17.3333 5.33329V9.69063" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
						</span>
						<div>
							<h3 class="text-[18px] font-medium text-primary"><?php esc_html_e('Empowerment', 'fta-landing'); ?></h3>
							<p class="mt-1 text-text-muted"><?php esc_html_e('Giving you the tools and confidence to reclaim your narrative.', 'fta-landing'); ?></p>
						</div>
					</li>
				</ul>
				<a href="<?php echo fta_landing_home('/case-review/'); ?>" class="inline-flex w-fit max-w-full items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-4 text-sm font-bold text-white shadow-[0_4px_14px_rgba(15,16,95,0.25)] transition-colors hover:bg-primary/90 focus:ring-2 focus:ring-primary focus:ring-offset-2 md:text-base">
					<?php esc_html_e('Free Case Review', 'fta-landing'); ?>
				</a>
			</div>
		</div>
	</div>
</section>
