'use client';

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

import { Container } from '@/components/atoms';

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

export const Stories = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'center',
    slidesToScroll: 1,
    startIndex: 1,
  });

  const [selectedIndex, setSelectedIndex] = useState(1);

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    onSelect();
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section
      className="bg-white"
      aria-label="Stories"
      aria-roledescription="slider"
    >
      <Container>
        <div className="mx-auto max-w-[768px] text-center">
          <h2 className="text-[32px] font-semibold leading-none tracking-tight text-stories-text-active">
            Stories
          </h2>
          <p className="mt-4 text-[18px] text-text-muted">
            These experiences could be yours in your search for justice.
          </p>
        </div>

        <div className="relative mx-auto mt-8 lg:mt-10">
          <div className="cursor-pointer overflow-hidden" ref={emblaRef}>
            <div className="flex touch-pan-y pinch-zoom items-stretch gap-[30px]">
              {STORIES.map((story, index) => (
                <div
                  key={story.id}
                  className="relative flex min-w-0 flex-[0_0_90%] lg:flex-[0_0_890px]"
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${index + 1} of ${STORIES.length}`}
                >
                  <StoryCard
                    text={story.text}
                    isActive={selectedIndex === index}
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
      </Container>
    </section>
  );
};

type StoryCardProps = {
  text: string;
  isActive: boolean;
};

const StoryCard = ({ text, isActive }: StoryCardProps) => {
  return (
    <div
      className={`flex h-full w-full flex-col items-center justify-center rounded-2xl p-[30px] transition-all duration-500 ease-in-out lg:py-10 lg:px-[72px] ${
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
