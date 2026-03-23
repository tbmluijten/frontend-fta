import type { ReactNode } from 'react';

type FloatingBadgeVariant = 'green' | 'primary' | 'gradient';

type FloatingBadgePosition = 'top-left' | 'bottom-right';

type FloatingBadgeProps = {
  title: string;
  subtitle: string;
  titleSize?: 'small' | 'big';
  icon?: ReactNode;
  variant?: FloatingBadgeVariant;
  position?: FloatingBadgePosition;
  className?: string;
};

const variantStyles: Record<FloatingBadgeVariant, string> = {
  green: 'bg-primary-green',
  primary: 'bg-primary',
  gradient: 'bg-gradient-to-br from-[#5B4B9E] to-[#0a1052]',
};

const iconColorStyles: Record<
  Exclude<FloatingBadgeVariant, 'gradient'>,
  string
> = {
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
  titleSize = 'small',
  icon,
  variant = 'primary',
  position = 'top-left',
  className = '',
}: FloatingBadgeProps) => {
  const hasIcon = icon != null;
  const iconColor =
    variant === 'gradient' ? 'text-primary' : iconColorStyles[variant];

  return (
    <div
      className={`absolute z-5 ${positionStyles[position]} flex items-center gap-2 rounded-[6px] py-1 px-2 shadow-lg backdrop-blur-sm md:rounded-xl lg:gap-3 lg:px-4 lg:py-3 ${variantStyles[variant]} opacity-90 ${className}`}
      aria-hidden
    >
      {hasIcon && (
        <span
          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/90 md:h-10 md:w-10 ${iconColor}`}
        >
          {icon}
        </span>
      )}
      <div className="flex flex-col">
        <span className={`text-xs font-bold text-white ${titleSize === 'big' ? 'md:text-[32px]' : ''}`}>
          {title}
        </span>
        <span className="text-[10px] text-white/90 md:text-base">
          {subtitle}
        </span>
      </div>
    </div>
  );
};
