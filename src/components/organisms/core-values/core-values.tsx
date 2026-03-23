import {
  Button,
  Eye,
  FloatingBadge,
  Fist,
  Shield,
  Star,
} from '@/components/atoms';
import { Media } from '@/components/molecules';
import { ContentMediaSection } from '@/components/templates';

type ValueItem = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const values: ValueItem[] = [
  {
    icon: <Eye size={24} />,
    title: 'Transparency',
    description:
      'Honest communication and clear processes every step of the way.',
  },
  {
    icon: <Shield size={24} />,
    title: 'Confidentiality',
    description:
      'Your data and story are protected by top-tier security protocols.',
  },
  {
    icon: <Fist size={24} />,
    title: 'Empowerment',
    description:
      'Giving you the tools and confidence to reclaim your narrative.',
  },
];

type CoreValuesProps = {
  imageSrc?: string;
  imageAlt?: string;
};

export const CoreValues = ({
  imageSrc = '/core-values/core-values-placeholder.svg',
  imageAlt = 'Professional consultation setting',
}: CoreValuesProps) => {
  const mediaSlot = (
    <div className="relative w-full">
      <FloatingBadge
        title="1000+"
        titleSize="big"
        subtitle="Survivors supported every year worldwide"
        variant="gradient"
        position="bottom-right"
        className="max-w-[240px]"
      />
      <span
        className="absolute -left-2 -top-2 z-10 text-primary lg:-left-4 lg:-top-4"
        aria-hidden
      >
        <Star size={48} />
      </span>
      <Media
        src={imageSrc}
        alt={imageAlt}
        desktopHeight={400}
        desktopWidth={488}
      />
    </div>
  );

  const contentSlot = (
    <>
      <ul className="flex flex-col gap-6" role="list">
        {values.map((value) => (
          <li key={value.title} className="flex items-center gap-4">
            <span
              className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-badge-green-bg text-primary-green"
              aria-hidden
            >
              {value.icon}
            </span>
            <div>
              <h3 className="font-medium text-[18px] text-primary">
                {value.title}
              </h3>
              <p className="mt-1 text-text-muted">{value.description}</p>
            </div>
          </li>
        ))}
      </ul>
      <Button variant="primary" href="/case-review" className="max-w-[220px]">
        Free Case Review
      </Button>
    </>
  );

  return (
    <ContentMediaSection
      title="Our Core Values"
      titleId="core-values-heading"
      subtitle="Founded on principles that prioritize your safety, dignity, and recovery above all else."
      contentSlot={contentSlot}
      mediaSlot={mediaSlot}
      mediaPosition="left"
      className="bg-white"
    />
  );
};
