import Link from 'next/link';
import { Container } from '@/components/atoms';

export const Footer = () => {
  return (
    <footer className="py-4 lg:py-10 bg-section-bg">
      <Container className="flex flex-col items-center justify-center py-0! ">
        <p className="text-[#6D6D6D]">© 2026 For The Abused. All rights reserved.</p>
        <div className="flex items-center justify-center gap-2 text-center w-full text-[#6D6D6D]">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-of-service">Terms of Service</Link>
          <Link href="/cookie-policy">Cookie Policy</Link>
        </div>
      </Container>
    </footer>
  );
};
