import {
  Banner,
  Cases,
  CoreValues,
  FAQ,
  Hero,
  HowItWorks,
  Stories,
  USP,
} from '@/components/organisms';

export const HomePageContent = () => {
  return (
    <div className="min-h-screen">
      <main className="min-h-screen bg-section-bg">
        <Hero />
        <CoreValues />
        <HowItWorks />
        <Stories />
        <Cases />
        <FAQ />
        <USP />
        <Banner />
      </main>
    </div>
  );
};
