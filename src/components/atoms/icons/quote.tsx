type QuoteProps = {
  className?: string;
  size?: number;
};

export const Quote = ({ className = '', size = 32 }: QuoteProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 32 24"
    fill="currentColor"
    className={className}
    aria-hidden
  >
    <path d="M0 14h8v-6c0-3.3-2.7-6-6-6V2c4.4 0 8 3.6 8 8v10H0v-6zm24 0h8v-6c0-3.3-2.7-6-6-6V2c4.4 0 8 3.6 8 8v10h-10v-6z" />
  </svg>
);
