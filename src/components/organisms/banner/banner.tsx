import { Button } from '@/components/atoms';

export const Banner = () => {
  return (
    <section
      className="w-full px-4 bg-section-bg"
      aria-labelledby="support-banner-heading"
    >
      <div className="mx-auto w-full max-w-[1200px] py-6 md:py-10">
        <div
          className="relative w-full overflow-hidden rounded-2xl bg-primary pt-6 pl-5 pr-5 pb-32 font-sans bg-[url('/banner.png')] bg-bottom-right bg-no-repeat bg-size-[auto_56%] min-h-[440px] lg:min-h-[320px] lg:bg-size-[auto_min(92%,420px)] lg:px-12 lg:py-14"
        >
          <div className="relative z-10 flex max-w-[20rem] flex-col lg:max-w-[min(100%,26rem)]">
            <h2
              id="support-banner-heading"
              className="text-[36px] font-semibold leading-none text-white lg:text-[48px]"
            >
              You don&apos;t have to face this{' '}
              <span className="text-primary-green">alone.</span>
            </h2>
            <p className="mt-4 text-[16px] font-medium leading-[26px] text-[#E7EBEF] lg:mt-5 lg:text-[18px] lg:leading-[28px]">
              Join the 20,000+ individuals who have found clarity and support
              through our platform.
            </p>
            <Button
              variant="tertiary"
              href="/case-review"
              className="mt-6 w-fit rounded-xl border-0 bg-primary-green! px-6 py-4 text-base font-bold text-white! shadow-none hover:bg-primary-green/90! focus:ring-2 focus:ring-primary-green focus:ring-offset-2"
            >
              Speak with a Consultant
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
