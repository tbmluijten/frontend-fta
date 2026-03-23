import Image from 'next/image';

type MediaProps = {
  src: string;
  alt: string;
  /** Desktop height in px, mobile uses 4:3 aspect ratio */
  desktopHeight?: number;
  desktopWidth?: number;
  /** Width 100%, height volgt aspect ratio (4:3) of desktopHeight indien gezet */
  fullWidth?: boolean;
};

export const Media = ({
  src,
  alt,
  desktopHeight,
  desktopWidth = 488,
  fullWidth = false,
}: MediaProps) => {
  const height = desktopHeight ?? 400;
  const useFixedHeight = fullWidth && desktopHeight !== undefined;

  const containerStyle = fullWidth
    ? (useFixedHeight ? { ['--media-height' as string]: `${desktopHeight}px` } : {}) as React.CSSProperties
    : ({
        ['--media-height' as string]: `${height}px`,
        ['--media-width' as string]: `${desktopWidth}px`,
      } as React.CSSProperties);

  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl border-[6px] border-[#889fd671] ${
        fullWidth
          ? `aspect-[4/3] ${useFixedHeight ? 'lg:aspect-auto lg:[height:var(--media-height)]' : ''}`
          : 'aspect-[4/3] lg:aspect-auto lg:[height:var(--media-height,524px)] lg:[width:var(--media-width,488px)]'
      }`}
      style={containerStyle}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(min-width: 1024px) 50vw, 100vw"
      />
    </div>
  );
};
