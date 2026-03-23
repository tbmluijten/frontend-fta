type FistProps = {
  className?: string;
  size?: number;
};

export const Fist = ({ className = '', size = 24 }: FistProps) => (
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
    <path d="M8 14V4.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5V14" />
    <path d="M8 14H5.5C4.7 14 4 14.7 4 15.5S4.7 17 5.5 17H8" />
    <path d="M8 14v3c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-5" />
    <path d="M12 10V4.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5V14" />
    <path d="M15 11V4.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5V14c0 .8-.7 1.5-1.5 1.5h-2.5" />
  </svg>
);
