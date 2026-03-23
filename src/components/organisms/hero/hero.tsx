import {
  ArrowRight,
  Button,
  Container,
  Document,
  FloatingBadge,
  Gavel,
} from '@/components/atoms';
import { Media } from '@/components/molecules';

type HeroProps = {
  heroImageSrc?: string;
  heroImageAlt?: string;
};

export const Hero = ({
  heroImageSrc = '/hero/hero-placeholder.svg',
  heroImageAlt = 'Person seeking support',
}: HeroProps) => {
  return (
    <section aria-labelledby="hero-heading">
      <Container className="pt-[90px] md:pt-[110px]">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-12">
          {/* Left: Content */}
          <div className="flex flex-1 flex-col gap-6">
            <span
              className="inline-flex w-fit rounded-full bg-badge-green-bg px-4 py-1.5 text-sm font-bold uppercase tracking-wide text-primary-green"
              aria-hidden
            >
              Confidential Support
            </span>

            <h1
              id="hero-heading"
              className="text-3xl leading-tight tracking-tight text-primary sm:text-4xl md:text-5xl"
            >
              <b>Seeking Justice</b> for Victims of{' '}
              <span className="relative inline-block text-primary-green">
                Organizational Harm
                <svg
                className="hidden lg:block"
                  width="489"
                  height="10"
                  viewBox="0 0 489 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.93766 3.35963C2.14245 3.36506 1.38623 3.68687 0.83543 4.25714C0.284628 4.82724 -0.0156383 5.59909 0.000629177 6.40002C0.0168965 7.20096 0.348348 7.96453 0.92201 8.51991C1.49567 9.07545 2.26456 9.37729 3.05957 9.36189C3.05957 9.36189 3.05957 9.36189 3.05957 9.36189C11.1524 9.20586 19.2453 9.04983 27.3381 8.8938C173.01 6.08523 318.681 3.27665 464.352 0.468083C472.445 0.312052 480.538 0.15602 488.631 -1.0896e-05C480.536 0.0559816 472.441 0.111976 464.346 0.167971C318.638 1.17586 172.93 2.18375 27.2223 3.19164C19.1274 3.24764 11.0326 3.30363 2.93766 3.35963Z"
                    fill="#0F105F"
                  />
                </svg>
              </span>
            </h1>

            <p className="max-w-lg text-lg leading-relaxed text-text-muted">
              We provide a professional and supportive platform to help you
              navigate rights violations and find the path to recovery with
              expert guidance.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                variant="primary"
                href="/eligibility"
                icon={<ArrowRight />}
                iconPosition="right"
              >
                Check My Eligibility Now
              </Button>
              <Button variant="secondary" href="/learn-more">
                Learn More
              </Button>
            </div>
          </div>

          {/* Right: Media with floating badges (parent for positioning) */}
          <div className="relative flex-1">
            <FloatingBadge
              title="Free"
              subtitle="Case Review"
              icon={<Document size={20} />}
              variant="green"
              position="top-left"
            />
            <FloatingBadge
              title="1000+"
              subtitle="Survivors supported"
              icon={<Gavel size={20} />}
              variant="primary"
              position="bottom-right"
            />
            <Media src={heroImageSrc} alt={heroImageAlt} desktopHeight={524} />
          </div>
        </div>
      </Container>
    </section>
  );
};
