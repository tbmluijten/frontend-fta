import { Fragment } from 'react';

import { Container } from '@/components/atoms';

const STEPS = [
  {
    id: '01',
    number: '01',
    title: 'Free Case Review',
    description:
      'Share your story in a confidential, no-obligation conversation so we can understand your situation and how we may help.',
  },
  {
    id: '02',
    number: '02',
    title: 'Expert Case Analysis',
    description:
      'Our legal partners review the facts, identify viable claims, and outline clear options—without pressure or upfront cost.',
  },
  {
    id: '03',
    number: '03',
    title: 'Pursue Your Claim',
    description:
      'If you choose to move forward, we connect you with representation to seek accountability and the justice you deserve.',
  },
] as const;

/**
 * Vertical “path to justice” steps with timeline (not themed — single layout).
 * Section title scale matches wwffyj FAQ / MediaHighlight headings.
 */
export const JusticeSteps = () => {
  return (
    <section
      className="bg-white"
      aria-labelledby="justice-steps-heading"
    >
      <Container className="!py-12 md:!py-14 lg:!py-16">
        <div className="mx-auto max-w-[720px] text-center">
          <span
            className="inline-flex rounded-full px-4 py-1.5 text-sm font-bold text-[var(--color-wwffyj-badge-text)]"
            style={{ backgroundColor: 'var(--color-wwffyj-badge-bg)' }}
          >
            How it works
          </span>
          <h2
            id="justice-steps-heading"
            className="mt-4 font-alexandria text-[30px] font-semibold leading-none lg:text-[48px]"
          >
            <span className="block text-[#0A3182]">Your Path to Justice in</span>
            <span className="mt-1 block text-[var(--color-wwffyj-cta)]">
              3 Simple Steps
            </span>
          </h2>
          <p className="mt-4 text-[16px] font-normal leading-6 text-[#465469] lg:mt-5 lg:text-[18px] lg:leading-none">
            A straightforward process designed to respect your privacy and give
            you clarity at every stage.
          </p>
        </div>

        <div
          className="relative mx-auto mt-10 grid w-full max-w-[940px] gap-y-8 lg:mt-14"
          style={{
            gridTemplateColumns: '3rem minmax(0, 1fr)',
            columnGap: '1.25rem',
          }}
          role="list"
        >
          {STEPS.map((step, index) => {
            const isLast = index === STEPS.length - 1;
            return (
              <Fragment key={step.id}>
                <div className="flex h-full min-h-0 flex-col items-center">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border-2 border-[#0A3182] bg-white text-center text-[16px] font-bold tabular-nums leading-[1] text-[var(--color-wwffyj-cta)]">
                    {step.number}
                  </span>
                  {!isLast ? (
                    <div
                      className="mt-2 w-px min-h-8 flex-1 bg-[#E5E7EB]"
                      aria-hidden
                    />
                  ) : null}
                </div>
                <article
                  className="min-w-0 rounded-2xl border border-[#E5E7EB] bg-white px-5 py-5 lg:px-6 lg:py-6"
                  role="listitem"
                >
                  <h3 className="font-alexandria text-[18px] font-medium leading-snug text-[#111827] lg:text-[24px] lg:font-semibold lg:leading-snug">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[16px] font-normal leading-[26px] text-[#4B5563]">
                    {step.description}
                  </p>
                </article>
              </Fragment>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
