import {
  Cases,
  CoreValues,
  Hero,
  HowItWorks,
  Stories,
} from '@/components/organisms';

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="min-h-screen bg-section-bg">
        <Hero />
        <CoreValues />
        <HowItWorks />
        <Stories />
        <Cases />
      </main>
    </div>
  );
}
