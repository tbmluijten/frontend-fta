import type { ReactNode } from 'react';

type FloatingBadgeVariant = 'green' | 'primary';

type FloatingBadgePosition = 'top-left' | 'bottom-right';

type FloatingBadgeProps = {
  title: string;
  subtitle: string;
  icon: ReactNode;
  variant?: FloatingBadgeVariant;
  position?: FloatingBadgePosition;
};

const variantStyles: Record<FloatingBadgeVariant, string> = {
  green: 'bg-primary-green',
  primary: 'bg-primary',
};

const iconColorStyles: Record<FloatingBadgeVariant, string> = {
  green: 'text-primary-green',
  primary: 'text-primary',
};

const positionStyles: Record<FloatingBadgePosition, string> = {
  'top-left': 'left-4 lg:-left-[100px] top-8',
  'bottom-right': 'right-4 lg:-right-2 bottom-6',
};

export const FloatingBadge = ({
  title,
  subtitle,
  icon,
  variant = 'primary',
  position = 'top-left',
}: FloatingBadgeProps) => {
  return (
    <div
      className={`absolute ${positionStyles[position]} flex items-center gap-2 lg:gap-3 rounded-[6px] md:rounded-xl py-1 px-2 shadow-lg backdrop-blur-sm lg:px-4 lg:py-3 ${variantStyles[variant]} opacity-90`}
      aria-hidden
    >
      <span
        className={`flex h-6 md:h-10 w-6 md:w-10 shrink-0 items-center justify-center rounded-full bg-white/90 ${iconColorStyles[variant]}`}
      >
        {icon}
      </span>
      <div className="flex flex-col">
        <span className="font-bold text-white text-xs md:text-[16px]">{title}</span>
        <span className="text-[10px] md:text-[16px] text-white/90">{subtitle}</span>
      </div>
    </div>
  );
};
