<?php
/**
 * Stories slider (Embla) — FTA variant, startIndex 1.
 *
 * @package FTA_Landing
 */

if (!defined('ABSPATH')) {
	exit;
}

$stories = fta_landing_stories();
?>
<section class="bg-white" aria-label="<?php esc_attr_e('Stories', 'fta-landing'); ?>" aria-roledescription="slider" data-stories-root data-stories-start="1" data-stories-variant="default">
	<div class="mx-auto w-full max-w-[1200px] px-4 py-[40px] md:py-[70px]">
		<div class="mx-auto max-w-[768px] text-center">
			<h2 class="text-[32px] font-semibold leading-none tracking-tight text-stories-text-active">
				<?php esc_html_e('Stories', 'fta-landing'); ?>
			</h2>
			<p class="mt-4 text-[18px] text-text-muted">
				<?php esc_html_e('These experiences could be yours in your search for justice.', 'fta-landing'); ?>
			</p>
		</div>
		<div class="relative mx-auto mt-8 lg:mt-10">
			<div class="cursor-pointer overflow-hidden embla__viewport" data-embla-viewport>
				<div class="embla__container flex touch-pan-y pinch-zoom items-stretch gap-[30px]">
					<?php foreach ($stories as $i => $story) : ?>
						<?php
						$is_active = ( 1 === $i );
						?>
						<div
							class="embla__slide relative flex min-w-0 flex-[0_0_90%] lg:flex-[0_0_890px]"
							role="group"
							aria-roledescription="slide"
							aria-label="<?php echo esc_attr((string) ($i + 1) . ' of ' . (string) count($stories)); ?>"
						>
							<div class="story-card flex h-full w-full flex-col items-center justify-center rounded-2xl p-[30px] transition-all duration-500 ease-in-out lg:px-[72px] lg:py-10 <?php echo $is_active ? 'bg-[#D5F8D4] opacity-100' : 'bg-[#E7EBEF] opacity-50'; ?>" data-story-card>
								<p class="story-card-text text-center text-[20px] leading-[32px] transition-colors duration-500 ease-in-out lg:text-2xl lg:leading-[36px] <?php echo $is_active ? 'text-[#0F105F]' : 'text-stories-text-inactive'; ?>">
									&ldquo;<?php echo esc_html($story['text']); ?>&rdquo;
								</p>
							</div>
						</div>
					<?php endforeach; ?>
				</div>
			</div>
			<div class="mt-8 flex justify-center gap-3" role="tablist" aria-label="<?php esc_attr_e('Slider pagination', 'fta-landing'); ?>" data-stories-dots>
				<?php foreach ($stories as $i => $_) : ?>
					<button
						type="button"
						role="tab"
						data-story-dot="<?php echo esc_attr((string) $i); ?>"
						aria-label="<?php echo esc_attr('Go to slide ' . (string) ($i + 1)); ?>"
						class="h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 <?php echo 1 === $i ? 'w-8 bg-[#0F105F]' : 'w-2 bg-[#E7EBEF] hover:opacity-80'; ?>"
						aria-selected="<?php echo 1 === $i ? 'true' : 'false'; ?>"
					></button>
				<?php endforeach; ?>
			</div>
		</div>
	</div>
</section>
