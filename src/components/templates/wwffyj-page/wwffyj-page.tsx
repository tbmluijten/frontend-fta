import {
  Banner,
  Cases,
  FAQ,
  Hero,
  JusticeSteps,
  MediaHighlight,
  Stories,
} from '@/components/organisms';

export const WwffyjPageContent = () => {
  return (
    <div className="min-h-screen font-sans">
      <main className="min-h-screen">
        <Hero theme="wwffyj" />
        <div className="bg-[#F9FAFB]">
          <MediaHighlight />
          <MediaHighlight variant="steps" />
          <JusticeSteps />
          <Cases theme="wwffyj" />
          <Stories theme="wwffyj" />
          <FAQ theme="wwffyj" />
          <Banner variant="wwffyj" />
        </div>
      </main>
    </div>
  );
};
