import { Container } from '@/components/atoms';

const STEPS = [
  {
    id: '01',
    number: '01',
    title: 'Free Case Review',
    description:
      'Fill out our 2-minute eligibility form to see if your case qualifies for a potential settlement.',
  },
  {
    id: '02',
    number: '02',
    title: 'Legal Consultation',
    description:
      'Our specialized attorneys will review your history of exposure and medical records at no cost to you.',
  },
  {
    id: '03',
    number: '03',
    title: 'Secure Compensation',
    description:
      'We fight the manufacturers in court to ensure you receive the maximum settlement allowed by law.',
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
            <span className="mt-1 block text-wwffyj-cta">
              3 Simple Steps
            </span>
          </h2>
          <p className="mt-4 text-[16px] font-normal leading-6 text-[#465469] lg:mt-5 lg:text-[18px] max-w-[480px] mx-auto">
          We’ve streamlined the legal process so you can focus on your health while we handle the heavy lifting.
          </p>
        </div>

        <div
          className="relative mx-auto mt-10 flex w-full max-w-[796px] flex-col lg:mt-14"
          role="list"
        >
          {STEPS.map((step, index) => {
            const isLast = index === STEPS.length - 1;
            return (
              <div
                key={step.id}
                className="grid w-full"
                style={{
                  gridTemplateColumns: '3rem minmax(0, 1fr)',
                  columnGap: '1.25rem',
                }}
              >
                <div className="flex h-full min-h-0 flex-col items-center">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border-2 border-[#0A3182] bg-white text-center text-[16px] font-bold tabular-nums leading-[1] text-[var(--color-wwffyj-cta)]">
                    {step.number}
                  </span>
                  {!isLast ? (
                    <>
                      <div
                        className="mx-auto mt-2 w-px min-h-8 flex-1 bg-[#E5E7EB]"
                        aria-hidden
                      />
                      <div
                        className="h-8 w-px shrink-0 bg-[#E5E7EB] lg:h-12"
                        aria-hidden
                      />
                    </>
                  ) : null}
                </div>
                <div className="flex min-h-0 min-w-0 flex-col">
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
                  {!isLast ? (
                    <div
                      className="h-8 shrink-0 lg:h-12"
                      aria-hidden
                    />
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
