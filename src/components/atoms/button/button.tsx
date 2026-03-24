import Link from 'next/link';
import type { ComponentProps } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary';

type ButtonColorOverrides = {
  backgroundColor?: string;
  color?: string;
  borderColor?: string;
};

type ButtonBaseProps = {
  variant?: ButtonVariant;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  customColors?: ButtonColorOverrides;
};

type ButtonAsButton = ComponentProps<'button'> &
  ButtonBaseProps & {
    href?: never;
  };

type ButtonAsLink = ComponentProps<typeof Link> &
  ButtonBaseProps & {
    href: string;
    disabled?: never;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-white shadow-[0_4px_14px_rgba(15,16,95,0.25)] hover:bg-primary/90 focus:ring-2 focus:ring-primary focus:ring-offset-2',
  secondary:
    'bg-transparent text-black border border-zinc-300 hover:bg-zinc-50 hover:border-zinc-400 focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2',
  tertiary:
    'bg-transparent text-black border-0 hover:bg-zinc-100 focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2',
};

export const Button = ({
  children,
  variant = 'primary',
  icon,
  iconPosition = 'right',
  className = '',
  disabled,
  customColors,
  style,
  href,
  ...props
}: ButtonProps) => {
  const baseStyles =
    'inline-flex w-fit max-w-full items-center justify-center gap-2 font-bold rounded-2xl py-4 px-6 text-sm md:text-base transition-colors disabled:opacity-50 disabled:cursor-not-allowed';

  const customStyle: React.CSSProperties = {
    ...(customColors?.backgroundColor && { backgroundColor: customColors.backgroundColor }),
    ...(customColors?.color && { color: customColors.color }),
    ...(customColors?.borderColor && { borderColor: customColors.borderColor }),
    ...style,
  };

  const sharedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;
  const content = (
    <>
      {icon && iconPosition === 'left' && <span aria-hidden>{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span aria-hidden>{icon}</span>}
    </>
  );

  if (href) {
    const { disabled: _d, href: _h, ...linkProps } = props as ButtonAsLink;
    return (
      <Link
        href={href}
        className={sharedClassName}
        style={customStyle}
        {...linkProps}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={sharedClassName}
      style={customStyle}
      disabled={disabled}
      {...(props as ButtonAsButton)}
    >
      {content}
    </button>
  );
};
