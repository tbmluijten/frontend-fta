import { CoreValues, Header, Hero } from '@/components/organisms';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="min-h-screen bg-section-bg">
        <Hero />
        <CoreValues />
      </main>
    </div>
  );
}
