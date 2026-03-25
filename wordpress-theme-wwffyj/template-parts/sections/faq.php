<?php
/**
 * FAQ — WWFFYJ styling.
 *
 * @package WWFFYJ_Landing
 */

if (!defined('ABSPATH')) {
	exit;
}

$items   = wwffyj_landing_faq_items();
$faq_uid = function_exists('wp_unique_id') ? wp_unique_id('faq-') : 'faq-' . wp_rand(1000, 9999);
?>
<section class="bg-[#F9FAFB]" aria-labelledby="faq-heading" data-faq-root>
	<div class="mx-auto w-full max-w-[1200px] px-4 py-[40px] md:py-[70px]">
		<div class="mx-auto max-w-[720px] text-center">
			<h2 id="faq-heading" class="font-alexandria text-[30px] font-semibold leading-none text-[#0A3182] lg:text-[48px]">
				<?php esc_html_e('Frequently Asked Questions', 'wwffyj-landing'); ?>
			</h2>
			<p class="mt-4 text-[16px] font-normal leading-6 text-[#465469] lg:text-[18px] lg:leading-none">
				<?php esc_html_e('Common questions about pursuing a claim and getting support.', 'wwffyj-landing'); ?>
			</p>
		</div>
		<ul class="mx-auto mt-10 flex w-full flex-col gap-3 lg:mt-12 lg:max-w-[940px] lg:gap-4" role="list">
			<?php foreach ($items as $index => $item) : ?>
				<li>
					<div class="rounded-xl border border-[#E2E8F0] bg-white px-5 py-4 lg:px-6 lg:py-5">
						<h3 class="m-0 font-alexandria text-[18px] font-medium leading-none text-[#111827]">
							<button
								id="<?php echo esc_attr($faq_uid . '-trigger-' . $index); ?>"
								type="button"
								class="faq-trigger flex w-full cursor-pointer items-start gap-3 text-left"
								data-faq-index="<?php echo esc_attr((string) $index); ?>"
								aria-expanded="<?php echo 0 === $index ? 'true' : 'false'; ?>"
								aria-controls="<?php echo esc_attr($faq_uid . '-panel-' . $index); ?>"
							>
								<span class="min-w-0 flex-1"><?php echo esc_html($item['q']); ?></span>
								<span class="faq-chevron mt-0.5 shrink-0 text-[#111827] transition-transform duration-300 ease-out <?php echo 0 === $index ? 'rotate-180' : 'rotate-0'; ?>" aria-hidden="true">
									<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
								</span>
							</button>
						</h3>
						<div
							id="<?php echo esc_attr($faq_uid . '-panel-' . $index); ?>"
							role="region"
							aria-labelledby="<?php echo esc_attr($faq_uid . '-trigger-' . $index); ?>"
							class="faq-panel grid transition-[grid-template-rows] duration-300 ease-out <?php echo 0 === $index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'; ?>"
							data-faq-panel="<?php echo esc_attr((string) $index); ?>"
						>
							<div class="min-h-0 overflow-hidden">
								<p class="pt-3 text-[16px] font-normal leading-6 text-[#4B5563] lg:pt-4 lg:leading-[27px]">
									<?php echo esc_html($item['a']); ?>
								</p>
							</div>
						</div>
					</div>
				</li>
			<?php endforeach; ?>
		</ul>
	</div>
</section>
