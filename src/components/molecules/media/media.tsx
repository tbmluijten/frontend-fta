import Image from 'next/image';

type MediaProps = {
  src: string;
  alt: string;
  /** Desktop height in px, mobile uses 4:3 aspect ratio */
  desktopHeight?: number;
  desktopWidth?: number;
};

export const Media = ({
  src,
  alt,
  desktopHeight = 400,
  desktopWidth = 488,
}: MediaProps) => {
  return (
    <div
      className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border-[6px] border-[#889fd671] lg:aspect-auto lg:[height:var(--media-height,524px)] lg:[width:var(--media-width,488px)]"
      style={{ ['--media-height' as string]: `${desktopHeight}px`, ['--media-width' as string]: `${desktopWidth}px` } as React.CSSProperties}
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
