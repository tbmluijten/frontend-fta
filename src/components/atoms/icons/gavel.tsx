type GavelProps = {
  className?: string;
  size?: number;
};

export const Gavel = ({ className = '', size = 24 }: GavelProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden
  >
    <path d="m14 13-7.5 7.5c-.78.78-.78 2.05 0 2.83.78.78 2.05.78 2.83 0L16.83 16" />
    <path d="m16 16 2-2" />
    <path d="m18 12-3 3" />
    <path d="m3 21 3-3" />
    <path d="m4.22 15.22 4.24-4.24" />
    <path d="m12 18 3-3" />
    <path d="m18 12 4.24-4.24a2 2 0 0 0 0-2.83l-2.83-2.83a2 2 0 0 0-2.83 0L12 6" />
    <path d="m15 9 3-3" />
  </svg>
);
