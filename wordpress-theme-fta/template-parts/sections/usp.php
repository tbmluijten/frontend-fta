<?php
/**
 * USP stats row.
 *
 * @package FTA_Landing
 */

if (!defined('ABSPATH')) {
	exit;
}

$items = array(
	array( 'title' => '24/7', 'subtitle' => 'Full Time Support' ),
	array( 'title' => '50 +', 'subtitle' => 'Legal experts' ),
	array( 'title' => '100%', 'subtitle' => 'Confidential' ),
	array( 'title' => 'Free', 'subtitle' => 'Case review & consultation' ),
);
?>
<section class="bg-section-bg" aria-labelledby="usp-heading">
	<div class="mx-auto w-full max-w-[1200px] px-4 py-[40px] md:py-[70px]">
		<h2 id="usp-heading" class="sr-only"><?php esc_html_e('USP', 'fta-landing'); ?></h2>
		<ul class="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6" role="list">
			<?php foreach ($items as $item) : ?>
				<li class="rounded-xl bg-white px-5 py-6 lg:px-6 lg:py-8">
					<p class="text-[24px] font-bold leading-[28px] text-[#0F105F] lg:text-[30px] lg:leading-[36px]">
						<?php echo esc_html($item['title']); ?>
					</p>
					<p class="mt-1 text-[11px] leading-[20px] text-[#465469] lg:mt-2 lg:text-[16px] lg:leading-[21px]">
						<?php echo esc_html($item['subtitle']); ?>
					</p>
				</li>
			<?php endforeach; ?>
		</ul>
	</div>
</section>
