'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { Button, Container } from '@/components/atoms';

const SCROLL_THRESHOLD = 10;

export const Header = () => {
  const pathname = usePathname();
  const isWwffyjTheme =
    pathname === '/wwffyj' || pathname?.startsWith('/wwffyj/');
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
      } ${isWwffyjTheme ? 'font-alexandria' : ''}`}
      role="banner"
    >
      <Container className="flex items-center justify-between !py-4 lg:!py-6">
        <Link
          href="/"
          className="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm"
          aria-label="For The Abused - Home"
        >
          <Image
            src={
              isWwffyjTheme
                ? '/logo/logo-wwffyj.png'
                : '/logo/fortheabused.png'
            }
            alt="For The Abused - Justice Starts Here"
            width={isWwffyjTheme ? 114 : 332}
            height={isWwffyjTheme ? 110 : 80}
            priority
            className="h-12 w-auto object-contain"
          />
        </Link>
        <Button
          variant="primary"
          href={isWwffyjTheme ? '/eligibility' : '/case-review'}
        >
          {isWwffyjTheme ? 'Check My Eligibility' : 'Free Case Review'}
        </Button>
      </Container>
    </header>
  );
};
