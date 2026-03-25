import Image from 'next/image';

import {
  ArrowRight,
  Button,
  Container,
  FloatingBadge,
} from '@/components/atoms';
import { Media } from '@/components/molecules';
import {
  FTA_HERO_IMAGE_SRC,
  WWFFYJ_HERO_IMAGE_SRC,
  WWFFYJ_SOCIAL_AVATAR_URLS,
} from '@/lib/constants';

export type HeroTheme = 'default' | 'wwffyj';

/** FTA hero floating badges — `/public/icons/fta-hero/free-case-review.svg` */
function HeroIconFreeCaseReview({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      width="30"
      height="26"
      viewBox="0 0 30 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M21.25 2.11182H8.75C7.36929 2.11182 6.25 3.05731 6.25 4.22364V21.1182C6.25 22.2846 7.36929 23.2301 8.75 23.2301H21.25C22.6307 23.2301 23.75 22.2846 23.75 21.1182V4.22364C23.75 3.05731 22.6307 2.11182 21.25 2.11182Z"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.75 14.7828H18.7625"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.25 6.33546H18.75"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.25 10.5591H18.75"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** `/public/icons/fta-hero/support.svg` */
function HeroIconSurvivorsSupport({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M17.501 16.25L7.02479 26.725C6.77856 26.9713 6.48623 27.1667 6.16448 27.3C5.84274 27.4333 5.49788 27.502 5.14961 27.5021C4.44623 27.5022 3.77161 27.2229 3.27416 26.7256C2.77672 26.2283 2.49719 25.5538 2.49707 24.8504C2.49695 24.147 2.77626 23.4724 3.27354 22.975L13.7535 12.4987"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 20L27.5 12.5"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26.875 13.125L16.875 3.125"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 10L17.5 2.5"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.625 9.375L20.625 19.375"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type HeroProps = {
  theme?: HeroTheme;
  heroImageSrc?: string;
  heroImageAlt?: string;
  /** wwffyj: override social proof copy */
  socialProofStat?: string;
  socialProofLabel?: string;
  socialAvatarUrls?: readonly string[];
};

const WWFFYJ_TRUST_ITEMS = [
  'Free',
  'Confidential',
  'No upfront costs',
] as const;

function WwffyjTrustCheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M15 4.5L6.75 12.75L3 9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WwffyjSocialProofCard({
  stat,
  label,
  avatarUrls,
}: {
  stat: string;
  label: string;
  avatarUrls: readonly string[];
}) {
  return (
    <div
      className="absolute -bottom-8 left-1/2 z-20 w-[min(calc(100%-2rem),280px)] -translate-x-1/2 rounded-2xl border border-white/50 bg-white/35 p-4 shadow-xl shadow-black/10 backdrop-blur-xl backdrop-saturate-150 ring-1 ring-inset ring-white/25 lg:bottom-10 lg:left-10 lg:translate-x-0 lg:w-[min(100%,260px)]"
      role="region"
      aria-label="Social proof"
    >
      <div
        className="-space-x-2 flex justify-center lg:justify-start"
        aria-hidden
      >
        {avatarUrls.map((url) => (
          <div
            key={url}
            className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full ring-2 ring-white"
          >
            <Image
              src={url}
              alt=""
              width={40}
              height={40}
              className="size-10 object-cover"
            />
          </div>
        ))}
      </div>
      <p className="mt-3 text-center font-alexandria text-2xl font-bold text-white lg:text-left">
        {stat}
      </p>
      <p className="text-center text-sm font-medium text-white lg:text-left">
        {label}
      </p>
    </div>
  );
}

export const Hero = ({
  theme = 'default',
  heroImageSrc,
  heroImageAlt,
  socialProofStat = '15,000+',
  socialProofLabel = 'Families Represented',
  socialAvatarUrls = WWFFYJ_SOCIAL_AVATAR_URLS,
}: HeroProps) => {
  const imageSrc =
    heroImageSrc ??
    (theme === 'wwffyj' ? WWFFYJ_HERO_IMAGE_SRC : FTA_HERO_IMAGE_SRC);
  const imageAlt =
    heroImageAlt ??
    (theme === 'wwffyj'
      ? 'Client in rural setting seeking justice'
      : 'Person seeking support');

  if (theme === 'wwffyj') {
    return (
      <section aria-labelledby="hero-heading" className="bg-white">
        <Container className="pb-20 pt-[90px] md:pt-[140px]">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-center justify-between lg:gap-12">
            <div className="flex flex-1 flex-col gap-6">
              <span
                className="inline-flex w-fit rounded-full px-4 py-1.5 text-sm font-bold text-[var(--color-wwffyj-badge-text)]"
                style={{ backgroundColor: 'var(--color-wwffyj-badge-bg)' }}
              >
                Active Litigation 2025
              </span>

              <h1
                id="hero-heading"
                className="font-alexandria text-3xl leading-tight tracking-tight text-primary sm:text-4xl md:text-5xl"
              >
                <b>Harmed. Ignored. Left Without Answers.</b> You deserve
                justice.
              </h1>

              <p className="max-w-lg text-lg leading-relaxed text-text-muted">
                We&apos;re here to help you understand your rights and take the
                next step clearly, confidently, and at no cost to you.
              </p>

              <Button
                variant="primary"
                href="/case-review"
                className="!rounded-md !border-0 !bg-[var(--color-wwffyj-cta)] !text-white !shadow-none hover:!bg-[var(--color-wwffyj-cta)]/90"
              >
                Start my free case review
              </Button>

              <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-text-muted">
                {WWFFYJ_TRUST_ITEMS.map((label) => (
                  <li key={label} className="flex items-center gap-2">
                    <span className="text-accent">
                      <WwffyjTrustCheckIcon />
                    </span>
                    {label}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative flex flex-1 flex-col pb-12 lg:pb-0">
              <div className="relative mx-auto w-full max-w-[488px] lg:mx-0 lg:max-w-none">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 z-0 hidden rounded-2xl lg:block"
                />
                <div className="relative z-10">
                  <Media
                    src={imageSrc}
                    alt={imageAlt}
                    desktopHeight={524}
                    className="!border-2 !border-[var(--color-wwffyj-frame)] ml-auto"
                  />
                </div>
                <WwffyjSocialProofCard
                  stat={socialProofStat}
                  label={socialProofLabel}
                  avatarUrls={socialAvatarUrls}
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section aria-labelledby="hero-heading">
      <Container className="pt-[90px] md:pt-[110px]">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-12">
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
                href="#cases"
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

          <div className="relative flex-1">
            <FloatingBadge
              title="Free"
              subtitle="Case Review"
              icon={
                <HeroIconFreeCaseReview className="h-[18px] w-[21px] md:h-5 md:w-6" />
              }
              variant="green"
              position="top-left"
            />
            <FloatingBadge
              title="1000+"
              subtitle="Survivors supported"
              icon={
                <HeroIconSurvivorsSupport className="size-[18px] md:size-5" />
              }
              variant="primary"
              position="bottom-right"
            />
            <Media src={imageSrc} alt={imageAlt} desktopHeight={524} />
          </div>
        </div>
      </Container>
    </section>
  );
};
