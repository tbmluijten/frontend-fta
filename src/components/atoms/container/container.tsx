import type { ComponentProps } from 'react';

type ContainerProps = ComponentProps<'div'> & {
  as?: 'div' | 'section' | 'main' | 'article';
};

export const Container = ({
  children,
  className = '',
  as: Component = 'div',
  ...props
}: ContainerProps) => {
  return (
    <Component
      className={`mx-auto w-full max-w-[1200px] py-[40px] md:py-[70px] px-4 ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};
