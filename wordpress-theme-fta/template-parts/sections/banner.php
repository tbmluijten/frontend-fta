<?php
/**
 * Closing banner — FTA variant.
 *
 * @package FTA_Landing
 */

if (!defined('ABSPATH')) {
	exit;
}

$banner_bg = fta_landing_asset_esc('banner.png');
?>
<section class="w-full bg-section-bg px-4" aria-labelledby="support-banner-heading">
	<div class="mx-auto w-full max-w-[1200px] py-6 md:py-10">
		<div
			class="relative min-h-[440px] w-full overflow-hidden rounded-2xl bg-primary bg-size-[auto_56%] bg-bottom-right bg-no-repeat pt-6 pr-5 pb-32 pl-5 font-sans lg:min-h-[320px] lg:bg-size-[auto_min(92%,420px)] lg:px-12 lg:py-14"
			style="background-image: url('<?php echo esc_url($banner_bg); ?>');"
		>
			<div class="relative z-10 flex max-w-[20rem] flex-col lg:max-w-[min(100%,26rem)]">
				<h2 id="support-banner-heading" class="text-[36px] font-semibold leading-none text-white lg:text-[48px]">
					<?php esc_html_e("You don't have to face this ", 'fta-landing'); ?>
					<span class="text-primary-green"><?php esc_html_e('alone.', 'fta-landing'); ?></span>
				</h2>
				<p class="mt-4 text-[16px] font-medium leading-[26px] text-[#E7EBEF] lg:mt-5 lg:text-[18px] lg:leading-[28px]">
					<?php esc_html_e('Join the 20,000+ individuals who have found clarity and support through our platform.', 'fta-landing'); ?>
				</p>
				<div class="mt-6 flex w-fit flex-col gap-3 sm:flex-row sm:items-center">
					<a
						href="<?php echo fta_landing_home('/case-review/'); ?>"
						class="w-fit rounded-xl border-0 bg-primary-green px-6 py-4 text-base font-bold text-white! shadow-none hover:bg-primary-green/90 focus:ring-2 focus:ring-primary-green focus:ring-offset-2"
					>
						<?php esc_html_e('Speak with a Consultant', 'fta-landing'); ?>
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
