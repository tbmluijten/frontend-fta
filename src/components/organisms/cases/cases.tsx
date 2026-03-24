import { Button, Container } from '@/components/atoms';
import { CaseCard } from '@/components/molecules';
import { PLACEHOLDER_IMAGE_URL } from '@/lib/constants';

const CASES = [
  {
    id: '1',
    title: 'Rideshare Abuse Uber & Lyft',
    description:
      'Abuse by rideshare drivers. Platforms and drivers held accountable.',
    imageSrc: PLACEHOLDER_IMAGE_URL,
    imageAlt: 'Woman in car looking at phone',
  },
  {
    id: '2',
    title: 'Institutional Abuse',
    description:
      'Abuse by rideshare drivers. Platforms and drivers held accountable.',
    imageSrc: PLACEHOLDER_IMAGE_URL,
    imageAlt: 'Young woman in classroom',
  },
  {
    id: '3',
    title: 'Clergy & Religious Organization Abuse',
    description:
      'Abuse by rideshare drivers. Platforms and drivers held accountable.',
    imageSrc: PLACEHOLDER_IMAGE_URL,
    imageAlt: 'Church setting',
  },
  {
    id: '4',
    title: 'Workplace Misconduct & Harassment',
    description:
      'Abuse by rideshare drivers. Platforms and drivers held accountable.',
    imageSrc: PLACEHOLDER_IMAGE_URL,
    imageAlt: 'Woman at desk',
  },
  {
    id: '5',
    title: 'Campus & University Sexual Assault',
    description:
      'Abuse by rideshare drivers. Platforms and drivers held accountable.',
    imageSrc: PLACEHOLDER_IMAGE_URL,
    imageAlt: 'Students with smartphone',
  },
  {
    id: '6',
    title: 'Medical Professional Misconduct',
    description:
      'Abuse by rideshare drivers. Platforms and drivers held accountable.',
    imageSrc: PLACEHOLDER_IMAGE_URL,
    imageAlt: 'Medical consultation',
  },
  {
    id: '7',
    title: 'Child Sexual Abuse (Historical Cases)',
    description:
      'Abuse by rideshare drivers. Platforms and drivers held accountable.',
    imageSrc: PLACEHOLDER_IMAGE_URL,
    imageAlt: 'Child alone',
  },
  {
    id: '8',
    title: 'Government Facility Abuse',
    description:
      'Abuse by rideshare drivers. Platforms and drivers held accountable.',
    imageSrc: PLACEHOLDER_IMAGE_URL,
    imageAlt: 'Damaged facility interior',
  },
] as const;

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
            We help survivors navigate complex legal processes while ensuring
            their voices are heard.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:mt-16 lg:grid-cols-4">
          {CASES.map((caseItem, index) => (
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
