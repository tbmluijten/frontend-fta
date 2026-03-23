import {
  Button,
  Container,
  Eye,
  FloatingBadge,
  Fist,
  Shield,
  Star,
} from '@/components/atoms';
import { Media } from '@/components/molecules';

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
  return (
    <section
      className="bg-section-bg bg-white"
      aria-labelledby="core-values-heading"
    >
      <Container>
        <div className="mx-auto max-w-[768px] text-center">
          <h2
            id="core-values-heading"
            className="text-[32px] font-bold tracking-tight text-primary leading-none"
          >
            Our Core Values
          </h2>
          <p className="mt-4 text-[18px] text-[#465469]">
            Founded on principles that prioritize your safety, dignity, and
            recovery above all else.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-12 lg:mt-16 lg:flex-row lg:items-center lg:gap-16">
          {/* Left: Media with floating badge (parent for positioning) */}
          <div className="relative flex-1">
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
            </span>
            <Media src={imageSrc} alt={imageAlt} desktopHeight={400} desktopWidth={488} />
          </div>

          {/* Right: Values list + CTA */}
          <div className="flex flex-1 flex-col gap-8">
            <ul className="flex flex-col gap-6" role="list">
              {values.map((value) => (
                <li key={value.title} className="flex gap-4 items-center">
                  <span
                    className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-badge-green-bg text-primary-green"
                    aria-hidden
                  >
                    {value.icon}
                  </span>
                  <div>
                    <h3 className="font-medium text-[18px] text-primary">{value.title}</h3>
                    <p className="mt-1 text-[#465469]">{value.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Button
              variant="primary"
              href="/case-review"
              className="max-w-[220px]"
            >
              Free Case Review
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
