import type { ReactNode } from 'react';

import { Button } from '@/components/atoms';

export type BannerVariant = 'default' | 'wwffyj';

type BannerProps = {
  variant?: BannerVariant;
  title?: ReactNode;
  description?: ReactNode;
  primaryHref?: string;
  primaryLabel?: string;
  /** Optioneel: tweede knop; href ontbreekt → zelfde als primary */
  secondaryHref?: string;
  secondaryLabel?: string;
};

const WWFFYJ_PRIMARY_BTN =
  '!rounded-md !border-0 !bg-[var(--color-wwffyj-cta)] !px-6 !py-4 !text-base !font-bold !text-white !shadow-none hover:!bg-[var(--color-wwffyj-cta)]/90';

const WWFFYJ_SECONDARY_BTN =
  '!rounded-md !border-2 !border-white !bg-white !px-6 !py-4 !text-base !font-bold !text-[var(--color-wwffyj-cta)] !shadow-none hover:!bg-white/95';

export const Banner = ({
  variant = 'default',
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: BannerProps) => {
  const isWwffyj = variant === 'wwffyj';

  const resolvedPrimaryHref = primaryHref ?? '/case-review';

  const resolvedTitle =
    title ??
    (isWwffyj ? (
      'Ready to hold them accountable?'
    ) : (
      <>
        You don&apos;t have to face this{' '}
        <span className="text-primary-green">alone.</span>
      </>
    ));

  const resolvedDescription =
    description ??
    (isWwffyj ? (
      <>
        Join thousands of other brave men and women who are standing up for
        their health and their future.
      </>
    ) : (
      <>
        Join the 20,000+ individuals who have found clarity and support through
        our platform.
      </>
    ));

  const resolvedPrimaryLabel =
    primaryLabel ?? (isWwffyj ? 'Check My Eligibility' : 'Speak with a Consultant');

  const showSecondary = Boolean(secondaryLabel);
  const resolvedSecondaryHref =
    secondaryHref ?? resolvedPrimaryHref;

  if (isWwffyj) {
    return (
      <section
        className="w-full bg-transparent px-4"
        aria-labelledby="support-banner-heading"
      >
        <div className="mx-auto w-full max-w-[1200px] py-6 md:py-10">
          <div className="flex w-full flex-col gap-8 rounded-2xl bg-[#0A3182] px-6 py-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:px-12 lg:py-14">
            <div className="flex min-w-0 w-full max-w-[811px] flex-1 flex-col">
              <h2
                id="support-banner-heading"
                className="font-alexandria text-left text-[28px] font-bold leading-tight text-white sm:text-[32px] lg:text-[36px]"
              >
                {resolvedTitle}
              </h2>
              <p className="mt-4 text-left text-[16px] font-normal leading-[26px] text-white/90 lg:mt-5 lg:text-[18px] lg:leading-[28px]">
                {resolvedDescription}
              </p>
            </div>
            <div className="flex w-full shrink-0 flex-col items-start gap-3 lg:w-auto lg:min-w-[200px]">
              <Button
                variant="primary"
                href={resolvedPrimaryHref}
                className={`justify-center ${WWFFYJ_PRIMARY_BTN}`}
              >
                {resolvedPrimaryLabel}
              </Button>
              {showSecondary ? (
                <Button
                  variant="secondary"
                  href={resolvedSecondaryHref}
                  className={`justify-center ${WWFFYJ_SECONDARY_BTN}`}
                >
                  {secondaryLabel}
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className="w-full bg-section-bg px-4"
      aria-labelledby="support-banner-heading"
    >
      <div className="mx-auto w-full max-w-[1200px] py-6 md:py-10">
        <div className="relative min-h-[440px] w-full overflow-hidden rounded-2xl bg-primary bg-[url('/banner.png')] bg-size-[auto_56%] bg-bottom-right bg-no-repeat pt-6 pr-5 pb-32 pl-5 font-sans lg:min-h-[320px] lg:bg-size-[auto_min(92%,420px)] lg:px-12 lg:py-14">
          <div className="relative z-10 flex max-w-[20rem] flex-col lg:max-w-[min(100%,26rem)]">
            <h2
              id="support-banner-heading"
              className="text-[36px] font-semibold leading-none text-white lg:text-[48px]"
            >
              {resolvedTitle}
            </h2>
            <p className="mt-4 text-[16px] font-medium leading-[26px] text-[#E7EBEF] lg:mt-5 lg:text-[18px] lg:leading-[28px]">
              {resolvedDescription}
            </p>
            <div className="mt-6 flex w-fit flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                variant="tertiary"
                href={resolvedPrimaryHref}
                className="w-fit rounded-xl border-0 bg-primary-green! px-6 py-4 text-base font-bold text-white! shadow-none hover:bg-primary-green/90! focus:ring-2 focus:ring-primary-green focus:ring-offset-2"
              >
                {resolvedPrimaryLabel}
              </Button>
              {showSecondary ? (
                <Button
                  variant="secondary"
                  href={resolvedSecondaryHref}
                  className="w-fit rounded-xl border-white/40 bg-white/10 px-6 py-4 text-base font-bold text-white! backdrop-blur-sm hover:bg-white/20"
                >
                  {secondaryLabel}
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
