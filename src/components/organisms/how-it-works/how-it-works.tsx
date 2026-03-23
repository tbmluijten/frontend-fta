import { Button } from '@/components/atoms';
import { Media, StepCard } from '@/components/molecules';
import { ContentMediaSection } from '@/components/templates';

const steps = [
  {
    step: '01',
    title: 'Report',
    description:
      'Share your experience with us so we can find the right agent for you.',
    isActive: true,
  },
  {
    step: '02',
    title: 'Analyse',
    description:
      'Our experts review your case to identify violations and relevant legal frameworks.',
    isActive: false,
  },
  {
    step: '03',
    title: 'Act',
    description:
      'Your expert team will support you on every step of the way throughout the process.',
    isActive: false,
  },
];

type HowItWorksProps = {
  imageSrc?: string;
  imageAlt?: string;
};

export const HowItWorks = ({
  imageSrc = '/how-it-works/how-it-works-placeholder.svg',
  imageAlt = 'Professional consultation',
}: HowItWorksProps) => {
  const badge = (
    <span
      className="inline-flex rounded-full bg-badge-green-bg px-4 py-1.5 text-sm font-bold uppercase tracking-wide text-primary-green"
      aria-hidden
    >
      How It Works
    </span>
  );

  const contentSlot = (
    <>
      <div className="flex flex-col gap-4">
        {steps.map((s) => (
          <StepCard
            key={s.step}
            step={s.step}
            title={s.title}
            description={s.description}
            isActive={s.isActive}
          />
        ))}
      </div>
      <p className="text-[18px] text-text-muted">
        Take the first step toward{' '}
        <span className="font-bold text-accent">clarity</span> and{' '}
        <span className="font-bold text-primary-green">support</span>.
      </p>
      <Button variant="primary" href="/case-review" className="max-w-[280px]">
        Start My Free Case Review
      </Button>
    </>
  );

  const mediaSlot = (
    <div className="w-full">
      <Media src={imageSrc} alt={imageAlt} fullWidth={true} />
    </div>
  );

  return (
    <ContentMediaSection
      badge={badge}
      title="Get Justice in 3 Simple Steps"
      titleId="how-it-works-heading"
      subtitle="Let's make the legal process easier and less stressful. Being able to speak your truth is one of the most powerful steps toward healing."
      contentSlot={contentSlot}
      mediaSlot={mediaSlot}
      mediaPosition="right"
      alignToTop={true}
    />
  );
};
