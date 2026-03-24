'use client';

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

import { ChevronDown, Container } from '@/components/atoms';

const STORIES = [
  {
    id: '1',
    text: "I felt completely alone and unheard until I found this platform. They didn't just provide legal resources; they gave me the psychological strength to stand up for my rights when a major corporation tried to silence me. The process was discreet, professional, and ultimately life-changing.",
  },
  {
    id: '2',
    text: "After years of struggling with an unfair contract, I finally got the support I needed. The team understood my situation and helped me navigate the complex legal landscape with confidence. I couldn't have done it without them.",
  },
  {
    id: '3',
    text: "What looked like an impossible fight became a victory thanks to this platform. They connected me with experts who believed in my case and fought alongside me. Justice was finally served.",
  },
];

export type StoriesTheme = 'default' | 'wwffyj';

type StoriesProps = {
  theme?: StoriesTheme;
};

export const Stories = ({ theme = 'default' }: StoriesProps) => {
  const isWwffyj = theme === 'wwffyj';

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'center',
    slidesToScroll: 1,
    startIndex: isWwffyj ? 0 : 1,
  });

  const [selectedIndex, setSelectedIndex] = useState(isWwffyj ? 0 : 1);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  const sectionClassName = 'bg-white';

  const titleClassName = isWwffyj
    ? 'font-alexandria text-[30px] font-semibold leading-none text-[#111827] lg:text-[48px]'
    : 'text-[32px] font-semibold leading-none tracking-tight text-stories-text-active';

  const slideTrackClassName = isWwffyj
    ? 'flex items-stretch gap-0'
    : 'flex touch-pan-y pinch-zoom items-stretch gap-[30px]';

  const slideItemClassName = isWwffyj
    ? 'relative flex min-w-0 flex-[0_0_100%]'
    : 'relative flex min-w-0 flex-[0_0_90%] lg:flex-[0_0_890px]';

  const arrowBtnClass =
    'rotate-180 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-wwffyj-badge-bg)] text-[#0A3182] transition-colors hover:bg-[#f8d4d4] focus:outline-none focus:ring-2 focus:ring-[#0A3182]/25 disabled:pointer-events-none disabled:opacity-35';

  return (
    <section
      className={sectionClassName}
      aria-label={isWwffyj ? 'Your story' : 'Stories'}
      aria-roledescription="slider"
    >
      <Container>
        <div className="mx-auto max-w-[768px] text-center">
          <h2 className={titleClassName}>
            {isWwffyj ? 'Your Story' : 'Stories'}
          </h2>
          {!isWwffyj ? (
            <p className="mt-4 text-[18px] text-text-muted">
              These experiences could be yours in your search for justice.
            </p>
          ) : null}
        </div>

        {isWwffyj ? (
          <div className="mx-auto mt-8 flex w-full items-center justify-center gap-3 lg:mt-10 lg:gap-6">
            <button
              type="button"
              className={arrowBtnClass}
              aria-label="Previous story"
              disabled={!canScrollPrev}
              onClick={scrollPrev}
            >
              <ChevronDown className="-rotate-90" size={22} />
            </button>
            <div
              className="w-full min-w-0 max-w-[856px] shrink overflow-hidden"
              ref={emblaRef}
            >
              <div className={slideTrackClassName}>
                {STORIES.map((story, index) => (
                  <div
                    key={story.id}
                    className={slideItemClassName}
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`${index + 1} of ${STORIES.length}`}
                  >
                    <StoryCard
                      text={story.text}
                      isActive={selectedIndex === index}
                      theme={theme}
                    />
                  </div>
                ))}
              </div>
            </div>
            <button
              type="button"
              className={arrowBtnClass}
              aria-label="Next story"
              disabled={!canScrollNext}
              onClick={scrollNext}
            >
              <ChevronDown className="rotate-90" size={22} />
            </button>
          </div>
        ) : (
          <div className="relative mx-auto mt-8 lg:mt-10">
            <div className="cursor-pointer overflow-hidden" ref={emblaRef}>
              <div className={slideTrackClassName}>
                {STORIES.map((story, index) => (
                  <div
                    key={story.id}
                    className={slideItemClassName}
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`${index + 1} of ${STORIES.length}`}
                  >
                    <StoryCard
                      text={story.text}
                      isActive={selectedIndex === index}
                      theme={theme}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div
              className="mt-8 flex justify-center gap-3"
              role="tablist"
              aria-label="Slider pagination"
            >
              {STORIES.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  role="tab"
                  aria-selected={selectedIndex === index}
                  aria-label={`Go to slide ${index + 1}`}
                  onClick={() => scrollTo(index)}
                  className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                    selectedIndex === index
                      ? 'w-8 bg-[#0F105F]'
                      : 'w-2 bg-[#E7EBEF] hover:opacity-80'
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};

type StoryCardProps = {
  text: string;
  isActive: boolean;
  theme: StoriesTheme;
};

const StoryCard = ({ text, isActive, theme }: StoryCardProps) => {
  if (theme === 'wwffyj') {
    return (
      <div className="relative w-full rounded-2xl border border-[#E5E7EB] bg-white px-8 py-10 lg:px-[72px] lg:py-12">
        <p className="text-center text-[20px] font-normal leading-[32px] text-[#111827] lg:text-[24px] lg:leading-[36px]">
          &ldquo;{text}&rdquo;
        </p>
      </div>
    );
  }

  return (
    <div
      className={`flex h-full w-full flex-col items-center justify-center rounded-2xl p-[30px] transition-all duration-500 ease-in-out lg:px-[72px] lg:py-10 ${
        isActive
          ? 'bg-[#D5F8D4] opacity-100'
          : 'bg-[#E7EBEF] opacity-50'
      }`}
    >
      <p
        className={`text-center text-[20px] leading-[32px] lg:text-[24px] lg:leading-[36px] transition-colors duration-500 ease-in-out lg:text-2xl ${
          isActive ? 'text-[#0F105F]' : 'text-stories-text-inactive'
        }`}
      >
        &ldquo;{text}&rdquo;
      </p>
    </div>
  );
};
