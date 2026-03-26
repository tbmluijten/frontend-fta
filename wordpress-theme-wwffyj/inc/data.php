<?php
/**
 * Static content (mirrors Next data — duplicated from FTA theme, no shared files).
 *
 * @package WWFFYJ_Landing
 */

if (!defined('ABSPATH')) {
	exit;
}

/**
 * @return list<array{title: string, description: string, image: string, alt: string}>
 */
function wwffyj_landing_case_items(): array {
	return array(
		array(
			'title'       => 'Rideshare Incidents & Assault',
			'description' => 'Reports of assault, harassment, or safety failures involving rideshare platforms and drivers.',
			'image'       => 'cases/case-1.png',
			'alt'         => 'Woman in car looking at phone',
		),
		array(
			'title'       => 'Institutional Misconduct',
			'description' => 'Misconduct or negligence occurring within schools, care facilities, or government institutions.',
			'image'       => 'cases/case-2.png',
			'alt'         => 'Young woman in classroom',
		),
		array(
			'title'       => 'Religious Institution Abuse',
			'description' => 'Allegations of abuse or misconduct involving clergy or religious organizations.',
			'image'       => 'cases/case-3.png',
			'alt'         => 'Church setting',
		),
		array(
			'title'       => 'Workplace Harassment & Misconduct',
			'description' => 'Cases involving harassment, discrimination, or unsafe workplace environments.',
			'image'       => 'cases/case-4.png',
			'alt'         => 'Woman at desk',
		),
		array(
			'title'       => 'Campus Misconduct Cases',
			'description' => 'Allegations of assault, harassment, or institutional negligence on college campuses.',
			'image'       => 'cases/case-5.png',
			'alt'         => 'Students with smartphone',
		),
		array(
			'title'       => 'Healthcare Misconduct',
			'description' => 'Misconduct or negligence involving doctors, nurses, or healthcare professionals.',
			'image'       => 'cases/case-6.png',
			'alt'         => 'Medical consultation',
		),
		array(
			'title'       => 'Childhood Abuse Cases',
			'description' => 'Historical or recent cases involving abuse of minors or institutional failures.',
			'image'       => 'cases/case-7.png',
			'alt'         => 'Child alone',
		),
		array(
			'title'       => 'Government & Detention Facility Misconduct',
			'description' => 'Allegations of abuse, negligence, or misconduct within government facilities and detention settings.',
			'image'       => 'cases/case-8.png',
			'alt'         => 'Government facility interior',
		),
	);
}

/**
 * @return list<array{q: string, a: string}>
 */
function wwffyj_landing_faq_items(): array {
	$a1 = 'Our mission is to bring clear guidance for you. By simply filling out 1 minute form we can match you to the right experts. Our team carefully reviews your situation privately and securely.';
	$a2 = 'Absolutely. Your privacy is our priority. Your information is 100% confidential and stored on secure servers. We only share your details with our trusted legal partners if you qualify and choose to move forward. You remain in control of your story at every step.';
	$a3 = "None. Your initial review is 100% free, and we work on a contingency basis. This means there are no upfront costs or hourly fees. Our legal partners only receive a fee if they successfully secure compensation for you. If you don't win, you don't pay.";
	$a4 = 'Yes. Many states have extended or removed time limits for these types of cases, allowing survivors to seek justice decades later. The best way to know for sure is to complete our 1-minute eligibility check. Our team will privately review your timeline and let you know if you are eligible to move forward.';
	return array(
		array('q' => '1. How do I know if I qualify for a lawsuit?', 'a' => $a1),
		array('q' => '2. Will my identity remain confidential if I start a claim?', 'a' => $a2),
		array('q' => '3. Is there any cost to file a claim or hire an attorney?', 'a' => $a3),
		array('q' => '4. Can I still file a claim if the abuse happened years ago?', 'a' => $a4),
	);
}

/**
 * @return list<array{id: string, text: string}>
 */
function wwffyj_landing_stories(): array {
	return array(
		array(
			'id'   => '1',
			'text' => "I felt completely alone and unheard until I found this platform. They didn't just provide legal resources; they gave me the psychological strength to stand up for my rights when a major corporation tried to silence me. The process was discreet, professional, and ultimately life-changing.",
		),
		array(
			'id'   => '2',
			'text' => "After years of struggling with an unfair contract, I finally got the support I needed. The team understood my situation and helped me navigate the complex legal landscape with confidence. I couldn't have done it without them.",
		),
		array(
			'id'   => '3',
			'text' => 'What looked like an impossible fight became a victory thanks to this platform. They connected me with experts who believed in my case and fought alongside me. Justice was finally served.',
		),
	);
}

/**
 * @return list<string>
 */
function wwffyj_social_avatar_urls(): array {
	return array(
		'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&auto=format',
		'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&auto=format',
		'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&auto=format',
		'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&auto=format',
	);
}
