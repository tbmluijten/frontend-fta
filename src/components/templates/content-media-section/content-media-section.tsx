import type { ReactNode } from 'react';

import { Container } from '@/components/atoms';

type ContentMediaSectionProps = {
  className?: string;
  badge?: ReactNode;
  title: string;
  titleId?: string;
  subtitle: string;
  contentSlot: ReactNode;
  mediaSlot: ReactNode;
  mediaPosition: 'left' | 'right';
  alignToTop?: boolean;
};

export const ContentMediaSection = ({
  className,
  badge,
  title,
  titleId,
  subtitle,
  contentSlot,
  mediaSlot,
  mediaPosition,
  alignToTop = false,
}: ContentMediaSectionProps) => {
  const contentFirst = mediaPosition === 'right';

  return (
    <section
      className={`bg-section-bg ${className}`}
      aria-labelledby={titleId}
    >
      <Container>
        <div className="mx-auto max-w-[768px] text-center">
          {badge && (
            <div className="mb-4 flex justify-center" aria-hidden>
              {badge}
            </div>
          )}
          <h2
            id={titleId}
            className="text-[32px] font-bold leading-none tracking-tight text-primary"
          >
            {title}
          </h2>
          <p className="mt-4 text-[18px] text-text-muted">{subtitle}</p>
        </div>

        <div
          className={`mt-12 flex flex-col gap-12 lg:mt-16 lg:flex-row lg:gap-16 ${
            alignToTop ? 'lg:items-start' : 'lg:items-center'
          }`}
        >
          {contentFirst ? (
            <>
              <div className="flex flex-1 flex-col gap-4 lg:gap-8">{contentSlot}</div>
              <div className="flex flex-1">{mediaSlot}</div>
            </>
          ) : (
            <>
              <div className="flex flex-1">{mediaSlot}</div>
              <div className="flex flex-1 flex-col gap-4 lg:gap-8">{contentSlot}</div>
            </>
          )}
        </div>
      </Container>
    </section>
  );
};
