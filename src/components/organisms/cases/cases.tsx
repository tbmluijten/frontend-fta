import { Button, Container } from '@/components/atoms';
import { CaseCard } from '@/components/molecules';

import { CASE_ITEMS } from './data/case-items';

export type CasesTheme = 'default' | 'wwffyj';

type CasesProps = {
  theme?: CasesTheme;
};

export const Cases = ({ theme = 'default' }: CasesProps) => {
  const sectionClassName =
    theme === 'wwffyj' ? 'bg-transparent' : 'bg-section-bg';

  const badgeClassName =
    theme === 'wwffyj'
      ? 'inline-flex rounded-full px-4 py-1.5 text-sm font-bold text-[var(--color-wwffyj-badge-text)]'
      : 'inline-flex rounded-full bg-badge-green-bg px-4 py-1.5 text-sm font-bold uppercase tracking-wide text-primary-green';

  const badgeStyle =
    theme === 'wwffyj'
      ? { backgroundColor: 'var(--color-wwffyj-badge-bg)' }
      : undefined;

  const titleClassName =
    theme === 'wwffyj'
      ? 'mt-4 font-alexandria text-[30px] font-semibold leading-none text-[#0A3182] lg:text-[48px]'
      : 'mt-4 text-[32px] font-bold leading-none tracking-tight text-[#0F105F]';

  const introClassName =
    theme === 'wwffyj'
      ? 'mt-4 text-[18px] text-[#4B5563]'
      : 'mt-4 text-[18px] text-text-muted';

  return (
    <section
      className={sectionClassName}
      aria-labelledby="cases-heading"
    >
      <Container>
        <div className="mx-auto max-w-[768px] text-center">
          <span
            className={badgeClassName}
            style={badgeStyle}
            aria-hidden
          >
            Our Services
          </span>
          <h2 id="cases-heading" className={titleClassName}>
            Cases We Handle
          </h2>
          <p className={introClassName}>
            {theme === 'wwffyj' ? (
              <>
                We support individuals affected by negligence, dangerous
                products, toxic exposure, abuse, and other harmful practices.
                Explore the legal matters we&apos;re currently investigating.
              </>
            ) : (
              <>
                We help survivors navigate complex legal processes while
                ensuring their voices are heard.
              </>
            )}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:mt-16 lg:grid-cols-4">
          {CASE_ITEMS.map((caseItem, index) => (
            <CaseCard
              key={caseItem.id}
              title={caseItem.title}
              description={caseItem.description}
              imageSrc={caseItem.imageSrc}
              imageAlt={caseItem.imageAlt}
              theme={theme === 'wwffyj' ? 'wwffyj' : 'default'}
              featured={theme === 'wwffyj' && index === 0}
            />
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 text-center">
          {theme === 'wwffyj' ? (
            <Button
              variant="primary"
              href="/case-review"
              className="!rounded-md !border-0 !bg-[var(--color-wwffyj-cta)] !text-white !shadow-none hover:!bg-[var(--color-wwffyj-cta)]/90"
            >
              Check My Eligibility
            </Button>
          ) : (
            <Button variant="primary" href="/case-review">
              Begin Your Claim
            </Button>
          )}
          <p
            className={
              theme === 'wwffyj'
                ? 'mt-4 text-[16px] text-[#4B5563]'
                : 'mt-4 text-[16px] text-text-muted'
            }
          >
            We are always helping survivors seek justice while{' '}
            {theme === 'wwffyj' ? (
              <>
                <span className="font-medium text-[var(--color-wwffyj-cta)]">
                  connecting
                </span>{' '}
                them with the{' '}
                <span className="font-bold text-[#0A3182]">
                  support they deserve
                </span>
                .
              </>
            ) : (
              <>
                <span className="font-medium text-primary-green">
                  connecting
                </span>{' '}
                them with the{' '}
                <span className="font-bold text-[#0F105F]">
                  support they deserve
                </span>
                .
              </>
            )}
          </p>
        </div>
      </Container>
    </section>
  );
};
