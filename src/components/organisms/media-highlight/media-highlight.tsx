import { Fragment } from 'react';

import { Button, Container } from '@/components/atoms';
import { WWFFYJ_MEDIA_HIGHLIGHT_IMAGE_SRC } from '@/lib/constants';

export type MediaHighlightVariant = 'image' | 'steps';

type IconProps = { className?: string };

/** Core values — `/public/icons/core-values/rocket-02.svg` */
function IconRocket({ className = '' }: IconProps) {
  return (
    <svg
      className={className}
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M24 30L18 24M24 30C26.7937 28.9375 29.4738 27.5975 32 26M24 30V40C24 40 30.06 38.9 32 36C34.16 32.76 32 26 32 26M18 24C19.0643 21.2389 20.4044 18.5921 22 16.1C24.3304 12.374 27.5752 9.30611 31.426 7.18819C35.2768 5.07028 39.6053 3.97275 44 4.00001C44 9.44001 42.44 19 32 26M18 24H8C8 24 9.1 17.94 12 16C15.24 13.84 22 16 22 16M9 33C6 35.52 5 43 5 43C5 43 12.48 42 15 39C16.42 37.32 16.4 34.74 14.82 33.18C14.0426 32.438 13.0186 32.0093 11.9445 31.9761C10.8703 31.9428 9.82175 32.3075 9 33Z"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** `/public/icons/core-values/lightbulb-05.svg` */
function IconLightbulb({ className = '' }: IconProps) {
  return (
    <svg
      className={className}
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M24 4V6M6 24H4M11 11L9.7998 9.7998M37 11L38.2005 9.7998M44 24H42M20 27H28M24 27V37M31 33.7479C34.0281 31.5695 36 28.0151 36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 28.0151 13.9719 31.5695 17 33.7479V37.6C17 39.8402 17 40.9603 17.436 41.816C17.8195 42.5686 18.4314 43.1805 19.184 43.564C20.0397 44 21.1598 44 23.4 44H24.6C26.8402 44 27.9603 44 28.816 43.564C29.5686 43.1805 30.1805 42.5686 30.564 41.816C31 40.9603 31 39.8402 31 37.6V33.7479Z"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** `/public/icons/core-values/award-03.svg` */
function IconAward({ className = '' }: IconProps) {
  return (
    <svg
      className={className}
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M15.7373 30.9199L14 44L23.1768 38.4939C23.4761 38.3143 23.6258 38.2245 23.7855 38.1895C23.9268 38.1584 24.0732 38.1584 24.2145 38.1895C24.3742 38.2245 24.5239 38.3143 24.8232 38.4939L34 44L32.2638 30.9142M32.8518 8.49776C33.1606 9.2448 33.7535 9.8386 34.5001 10.1486L37.1179 11.233C37.8649 11.5424 38.4585 12.136 38.7679 12.8831C39.0774 13.6302 39.0774 14.4696 38.7679 15.2167L37.6844 17.8327C37.3748 18.5801 37.3744 19.4204 37.6854 20.1675L38.767 22.7827C38.9204 23.1527 38.9994 23.5494 38.9995 23.9499C38.9995 24.3505 38.9207 24.7471 38.7674 25.1172C38.6141 25.4873 38.3894 25.8235 38.1061 26.1067C37.8228 26.3899 37.4865 26.6145 37.1164 26.7677L34.5005 27.8513C33.7535 28.1602 33.1597 28.7531 32.8497 29.4997L31.7654 32.1175C31.456 32.8646 30.8624 33.4582 30.1154 33.7677C29.3683 34.0771 28.5289 34.0771 27.7818 33.7677L25.1659 32.6841C24.4188 32.3754 23.5797 32.376 22.8331 32.6858L20.2153 33.7686C19.4687 34.0774 18.63 34.0771 17.8836 33.7679C17.1371 33.4587 16.5439 32.8658 16.2342 32.1195L15.1496 29.5009C14.8407 28.7538 14.2478 28.16 13.5013 27.85L10.8835 26.7657C10.1368 26.4564 9.54338 25.8632 9.23382 25.1165C8.92426 24.3698 8.92384 23.5308 9.23266 22.7838L10.3162 20.1678C10.6249 19.4207 10.6243 18.5816 10.3144 17.8349L9.23246 15.2152C9.07905 14.8451 9.00006 14.4485 9 14.0479C8.99994 13.6474 9.0788 13.2507 9.23208 12.8806C9.38537 12.5106 9.61007 12.1743 9.89335 11.8911C10.1766 11.6079 10.5129 11.3833 10.883 11.2302L13.4989 10.1466C14.2453 9.83796 14.8387 9.2458 15.149 8.50008L16.2333 5.88221C16.5427 5.13512 17.1363 4.54155 17.8833 4.23209C18.6304 3.92264 19.4698 3.92264 20.2169 4.23209L22.8328 5.31567C23.5799 5.62437 24.419 5.62374 25.1656 5.31392L27.7845 4.23377C28.5314 3.92449 29.3706 3.92455 30.1176 4.23395C30.8645 4.54335 31.458 5.13674 31.7675 5.88365L32.8521 8.50229L32.8518 8.49776Z"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** `/public/icons/core-values/lock-01.svg` */
function IconLock({ className = '' }: IconProps) {
  return (
    <svg
      className={className}
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M34 20V16C34 10.4772 29.5228 6 24 6C18.4772 6 14 10.4772 14 16V20M24 29V33M17.6 42H30.4C33.7603 42 35.4405 42 36.7239 41.346C37.8529 40.7708 38.7708 39.8529 39.346 38.7239C40 37.4405 40 35.7603 40 32.4V29.6C40 26.2397 40 24.5595 39.346 23.2761C38.7708 22.1471 37.8529 21.2292 36.7239 20.654C35.4405 20 33.7603 20 30.4 20H17.6C14.2397 20 12.5595 20 11.2761 20.654C10.1471 21.2292 9.2292 22.1471 8.65396 23.2761C8 24.5595 8 26.2397 8 29.6V32.4C8 35.7603 8 37.4405 8.65396 38.7239C9.2292 39.8529 10.1471 40.7708 11.2761 41.346C12.5595 42 14.2397 42 17.6 42Z"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Exposure — `/public/icons/steps/calendar.svg` */
function IconStepExposure({ className = '' }: IconProps) {
  return (
    <svg
      className={className}
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M4 41.5L24 6.5L44 41.5H4ZM10.2727 37.8158H37.7273L24 13.8684L10.2727 37.8158ZM24 35.9737C24.5152 35.9737 24.947 35.7971 25.2955 35.4441C25.6439 35.091 25.8182 34.6535 25.8182 34.1316C25.8182 33.6096 25.6439 33.1721 25.2955 32.8191C24.947 32.466 24.5152 32.2895 24 32.2895C23.4848 32.2895 23.053 32.466 22.7045 32.8191C22.3561 33.1721 22.1818 33.6096 22.1818 34.1316C22.1818 34.6535 22.3561 35.091 22.7045 35.4441C23.053 35.7971 23.4848 35.9737 24 35.9737ZM22.1818 30.4474H25.8182V21.2368H22.1818V30.4474Z"
        fill="currentColor"
      />
    </svg>
  );
}

/** Impact — `/public/icons/steps/file-check-03.svg` */
function IconStepImpact({ className = '' }: IconProps) {
  return (
    <svg
      className={className}
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M21 31.5H27V26.5H32V20.5H27V15.5H21V20.5H16V26.5H21V31.5ZM24 44.5C19.3667 43.3333 15.5417 40.675 12.525 36.525C9.50833 32.375 8 27.7667 8 22.7V10.5L24 4.5L40 10.5V22.7C40 27.7667 38.4917 32.375 35.475 36.525C32.4583 40.675 28.6333 43.3333 24 44.5ZM24 40.3C27.4667 39.2 30.3333 37 32.6 33.7C34.8667 30.4 36 26.7333 36 22.7V13.25L24 8.75L12 13.25V22.7C12 26.7333 13.1333 30.4 15.4 33.7C17.6667 37 20.5333 39.2 24 40.3Z"
        fill="currentColor"
      />
    </svg>
  );
}

/** Liability — `/public/icons/steps/Layer_1.svg` */
function IconStepLiability({ className = '' }: IconProps) {
  return (
    <svg
      className={className}
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M4 42.5V6.5H24V14.5H44V42.5H4ZM8 38.5H20V34.5H8V38.5ZM8 30.5H20V26.5H8V30.5ZM8 22.5H20V18.5H8V22.5ZM8 14.5H20V10.5H8V14.5ZM24 38.5H40V18.5H24V38.5ZM28 26.5V22.5H36V26.5H28ZM28 34.5V30.5H36V34.5H28Z"
        fill="currentColor"
      />
    </svg>
  );
}

const HIGHLIGHT_ITEMS = [
  {
    id: 'fees',
    label: 'No fees unless you win',
    Icon: IconRocket,
  },
  {
    id: 'help',
    label: 'Our legal partners are here to help',
    Icon: IconLightbulb,
  },
  {
    id: 'specialists',
    label: 'Specialists in corporate accountability claims',
    Icon: IconAward,
  },
  {
    id: 'confidential',
    label: 'Free, confidential review with no obligation',
    Icon: IconLock,
  },
] as const;

const STEPS_ITEMS = [
  {
    id: 'exposure',
    title: 'Exposure',
    description:
      'Exposure to harmful products or abuse can change the course of someone\'s life.',
    Icon: IconStepExposure,
  },
  {
    id: 'impact',
    title: 'Impact',
    description:
      'The impact on a person\'s life is great. We fight for their justice!',
    Icon: IconStepImpact,
  },
  {
    id: 'liability',
    title: 'Liability',
    description: 'We help with keeping the perpetrators accountable.',
    Icon: IconStepLiability,
  },
] as const;

type MediaHighlightProps = {
  variant?: MediaHighlightVariant;
  backgroundImageSrc?: string;
  imageAlt?: string;
};

const WWFFYJ_BTN =
  '!rounded-md !border-0 !bg-[var(--color-wwffyj-cta)] !text-white !shadow-none hover:!bg-[var(--color-wwffyj-cta)]/90';

export const MediaHighlight = ({
  variant = 'image',
  backgroundImageSrc = WWFFYJ_MEDIA_HIGHLIGHT_IMAGE_SRC,
  imageAlt = 'Client reviewing their legal options with care',
}: MediaHighlightProps) => {
  if (variant === 'steps') {
    return (
      <section
        className="bg-[#F9FAFB]"
        aria-labelledby="media-highlight-steps-heading"
      >
        <Container className="!py-12 md:!py-14 lg:!py-16">
          <div className="flex w-full flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
            <div className="flex min-w-0 flex-1 flex-col gap-6">
              <span
                className="inline-flex w-fit rounded-full px-4 py-1.5 text-sm font-bold text-[var(--color-wwffyj-badge-text)]"
                style={{ backgroundColor: 'var(--color-wwffyj-badge-bg)' }}
              >
                The Abuse Crisis
              </span>

              <h2
                id="media-highlight-steps-heading"
                className="font-alexandria text-[30px] font-semibold leading-none text-[#0A3182] lg:text-[48px]"
              >
                Cases of Abuse are Widespread
              </h2>

              <p className="max-w-lg text-lg leading-relaxed text-[#111827]">
                Abuse can happen in many forms, not just by people but also by
                products. We fight for everyone affected by such circumstances.
              </p>

              <Button
                variant="primary"
                href="#cases"
                className={`hidden lg:inline-flex ${WWFFYJ_BTN}`}
              >
                Check My Eligibility
              </Button>
            </div>

            <div className="min-w-0 w-full flex-1">
              <div
                className="relative grid w-full"
                style={{
                  gridTemplateColumns: '3rem minmax(0, 1fr)',
                  columnGap: '1.5rem',
                }}
                role="list"
              >
                <div
                  className="relative col-start-1 justify-self-center"
                  style={{
                    gridRowStart: 1,
                    gridRowEnd: STEPS_ITEMS.length + 1,
                  }}
                  aria-hidden
                >
                  <div className="absolute left-1/2 top-6 bottom-6 w-0.5 -translate-x-1/2 bg-[var(--color-wwffyj-cta)]" />
                </div>
                {STEPS_ITEMS.map((step, index) => {
                  const Icon = step.Icon;
                  const row = index + 1;
                  const isLast = index === STEPS_ITEMS.length - 1;
                  return (
                    <Fragment key={step.id}>
                      <div
                        className="relative z-[1] col-start-1 flex justify-center self-start pt-0.5"
                        style={{ gridRowStart: row, gridRowEnd: row }}
                      >
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#F9FAFB] outline-solid outline-16 outline-[#F9FAFB]">
                          <Icon className="h-12 w-12 text-[var(--color-wwffyj-cta)]" />
                        </span>
                      </div>
                      <div
                        className={`col-start-2 min-w-0 pt-0.5 ${isLast ? '' : 'pb-10'}`}
                        style={{ gridRowStart: row, gridRowEnd: row }}
                        role="listitem"
                      >
                        <h3 className="text-[18px] lg:text-[24px] font-bold leading-snug text-[#111827]">
                          {step.title}
                        </h3>
                        <p className="mt-2 text-base leading-relaxed text-[#111827]">
                          {step.description}
                        </p>
                      </div>
                    </Fragment>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="bg-white" aria-labelledby="media-highlight-heading">
      <Container className="!py-12 md:!py-14 lg:!py-16">
        <div className="w-full">
          <div className="flex w-full flex-col gap-10 lg:flex-row lg:items-center lg:gap-12">
            <div className="flex min-w-0 flex-1 flex-col gap-6">
              <span
                className="inline-flex w-fit rounded-full px-4 py-1.5 text-sm font-bold text-[var(--color-wwffyj-badge-text)]"
                style={{ backgroundColor: 'var(--color-wwffyj-badge-bg)' }}
              >
                Our Core Values
              </span>

              <h2
                id="media-highlight-heading"
                className="font-alexandria text-[30px] font-semibold leading-none text-[#0A3182] lg:text-[48px]"
              >
                Why people choose us to fight for them
              </h2>

              <p className="max-w-lg text-lg leading-relaxed text-[#111827]">
                We&apos;re here for one reason, to make sure you have every
                chance to get the justice you deserve. Our legal partners are
                ready to review your situation at no cost and no pressure.
              </p>

              <Button
                variant="primary"
                href="/case-review"
                className={`hidden lg:inline-flex ${WWFFYJ_BTN}`}
              >
                Start my free case review
              </Button>
            </div>

            <div className="relative min-w-0 w-full flex-1">
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url('${backgroundImageSrc}')`,
                  }}
                  aria-hidden
                />
                <span className="sr-only">{imageAlt}</span>
                <div
                  className="pointer-events-none absolute left-2 top-1/2 z-10 hidden w-[min(calc(100%-1rem),268px)] -translate-y-1/2 flex-col gap-2 lg:left-3 lg:flex xl:left-4"
                  aria-hidden
                >
                  {HIGHLIGHT_ITEMS.map(({ id, label, Icon }) => (
                    <div
                      key={id}
                      className="flex items-center gap-3 rounded-xl border border-white/45 bg-white/20 p-2 shadow-lg backdrop-blur-md"
                    >
                      <Icon className="h-12 w-12 shrink-0 text-white" />
                      <span className="text-left text-sm font-medium leading-snug text-white">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <ul
            className="mt-10 flex flex-col gap-5 lg:hidden"
            aria-label="Core values"
          >
            {HIGHLIGHT_ITEMS.map(({ id, label, Icon }) => (
              <li key={id} className="flex items-center gap-5 p-2">
                <Icon className="h-12 w-12 shrink-0 text-[var(--color-wwffyj-cta)]" />
                <span className="text-base leading-relaxed text-[#111827]">
                  {label}
                </span>
              </li>
            ))}
          </ul>

          <Button
            variant="primary"
            href="/case-review"
            className={`mt-8 lg:hidden ${WWFFYJ_BTN}`}
          >
            Start my free case review
          </Button>
        </div>
      </Container>
    </section>
  );
};
