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

function initStoriesWwffyj() {
	const root = document.querySelector('[data-stories-root][data-stories-variant="wwffyj"]');
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

	const prevBtn = root.querySelector('[data-stories-prev]');
	const nextBtn = root.querySelector('[data-stories-next]');

	const syncButtons = () => {
		if (prevBtn) prevBtn.disabled = !embla.canScrollPrev();
		if (nextBtn) nextBtn.disabled = !embla.canScrollNext();
	};

	embla.on('select', syncButtons);
	embla.on('reInit', syncButtons);
	syncButtons();

	if (prevBtn) prevBtn.addEventListener('click', () => embla.scrollPrev());
	if (nextBtn) nextBtn.addEventListener('click', () => embla.scrollNext());
}

document.addEventListener('DOMContentLoaded', () => {
	initHeader();
	initFaq();
	initStoriesWwffyj();
});
