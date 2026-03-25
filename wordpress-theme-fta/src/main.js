import EmblaCarousel from 'embla-carousel';

function initHeader() {
	const header = document.getElementById('site-header');
	if (!header || !header.hasAttribute('data-header-scroll')) return;
	const threshold = 10;
	const onScroll = () => {
		if (window.scrollY > threshold) {
			header.classList.add('bg-white', 'sticky');
			header.classList.remove('bg-none', 'absolute');
		} else {
			header.classList.remove('bg-white', 'sticky');
			header.classList.add('bg-none', 'absolute');
		}
	};
	onScroll();
	window.addEventListener('scroll', onScroll, { passive: true });
}

function initFaq() {
	const root = document.querySelector('[data-faq-root]');
	if (!root) return;

	const triggers = root.querySelectorAll('.faq-trigger');
	const panels = root.querySelectorAll('.faq-panel');

	const setOpen = (index) => {
		triggers.forEach((btn, i) => {
			const open = index >= 0 && i === index;
			btn.setAttribute('aria-expanded', open ? 'true' : 'false');
			const chev = btn.querySelector('.faq-chevron');
			if (chev) {
				chev.classList.toggle('rotate-180', open);
				chev.classList.toggle('rotate-0', !open);
			}
		});
		panels.forEach((panel, i) => {
			const open = index >= 0 && i === index;
			panel.classList.toggle('grid-rows-[1fr]', open);
			panel.classList.toggle('grid-rows-[0fr]', !open);
		});
	};

	triggers.forEach((btn, index) => {
		btn.addEventListener('click', () => {
			const expanded = btn.getAttribute('aria-expanded') === 'true';
			if (expanded) {
				setOpen(-1);
			} else {
				setOpen(index);
			}
		});
	});

	setOpen(0);
}

const activeStoryCard =
	'bg-[#D5F8D4] opacity-100';
const inactiveStoryCard = 'bg-[#E7EBEF] opacity-50';
const activeStoryText = 'text-[#0F105F]';
const inactiveStoryText = 'text-stories-text-inactive';

function initStoriesDefault() {
	const root = document.querySelector('[data-stories-root][data-stories-variant="default"]');
	if (!root) return;

	const viewport = root.querySelector('[data-embla-viewport]');
	if (!viewport) return;

	const startIndex = Number.parseInt(root.getAttribute('data-stories-start') || '0', 10) || 0;
	const embla = EmblaCarousel(viewport, {
		loop: false,
		align: 'center',
		slidesToScroll: 1,
		startIndex,
	});

	const cards = root.querySelectorAll('[data-story-card]');
	const texts = root.querySelectorAll('.story-card-text');
	const dots = root.querySelectorAll('[data-story-dot]');

	const applySlideState = () => {
		const selected = embla.selectedScrollSnap();
		cards.forEach((card, i) => {
			card.className = `story-card flex h-full w-full flex-col items-center justify-center rounded-2xl p-[30px] transition-all duration-500 ease-in-out lg:px-[72px] lg:py-10 ${
				i === selected ? activeStoryCard : inactiveStoryCard
			}`;
		});
		texts.forEach((el, i) => {
			el.className = `story-card-text text-center text-[20px] leading-[32px] transition-colors duration-500 ease-in-out lg:text-2xl lg:leading-[36px] ${
				i === selected ? activeStoryText : inactiveStoryText
			}`;
		});
		dots.forEach((dot, i) => {
			const on = i === selected;
			dot.setAttribute('aria-selected', on ? 'true' : 'false');
			dot.className = `h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
				on ? 'w-8 bg-[#0F105F]' : 'w-2 bg-[#E7EBEF] hover:opacity-80'
			}`;
		});
	};

	embla.on('select', applySlideState);
	embla.on('reInit', applySlideState);
	applySlideState();

	dots.forEach((dot, i) => {
		dot.addEventListener('click', () => embla.scrollTo(i));
	});
}

document.addEventListener('DOMContentLoaded', () => {
	initHeader();
	initFaq();
	initStoriesDefault();
});
