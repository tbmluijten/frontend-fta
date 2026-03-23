'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { Button, Container } from '@/components/atoms';

const SCROLL_THRESHOLD = 10;

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`top-0 z-50 w-full transition-colors duration-300 ease-in-out ${
        isScrolled ? 'bg-white sticky' : 'bg-none absolute'
      }`}
      role="banner"
    >
      <Container className="flex items-center justify-between !py-4 lg:!py-6">
        <Link
          href="/"
          className="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm"
          aria-label="For The Abused - Home"
        >
          <Image
            src="/logo/fortheabused.png"
            alt="For The Abused - Justice Starts Here"
            width={200}
            height={48}
            priority
            className="h-12 w-auto object-contain"
          />
        </Link>
        <Button variant="primary" href="/case-review">
          Free Case Review
        </Button>
      </Container>
    </header>
  );
};
