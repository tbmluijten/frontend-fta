import Image from 'next/image';

export type CaseCardTheme = 'default' | 'wwffyj';

type CaseCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  theme?: CaseCardTheme;
  /** Eerste kaart in wwffyj-thema: vaste donkerblauwe achtergrond, witte tekst */
  featured?: boolean;
};

export const CaseCard = ({
  title,
  description,
  imageSrc,
  imageAlt,
  theme = 'default',
  featured = false,
}: CaseCardProps) => {
  if (theme === 'wwffyj' && featured) {
    return (
      <article className="flex h-full flex-col overflow-hidden rounded-[12px] bg-[#0A3182]">
        <div className="flex min-h-0 flex-1 flex-col px-8 pt-12 lg:px-[30px] lg:pt-[30px]">
          <h3 className="shrink-0 text-left font-alexandria text-[18px] font-medium leading-[26px] text-white">
            {title}
          </h3>
          <div className="min-h-0 flex-1" />
          <p className="mt-[18px] line-clamp-3 shrink-0 text-left text-[16px] font-normal leading-[21px] text-white/90">
            {description}
          </p>
          <div className="min-h-[18px] shrink-0" />
          <div className="relative h-[180px] w-full shrink-0 overflow-hidden rounded-t-[12px] lg:h-[200px]">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 25vw, 100vw"
            />
          </div>
        </div>
      </article>
    );
  }

  if (theme === 'wwffyj') {
    return (
      <article className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-[12px] bg-white transition-all duration-500 ease-in-out hover:bg-[#0A3182]">
        <div className="flex min-h-0 flex-1 flex-col px-8 pt-12 lg:px-[30px] lg:pt-[30px]">
          <h3 className="shrink-0 text-left font-alexandria text-[18px] font-medium leading-[26px] text-[#111827] transition-colors duration-500 ease-in-out group-hover:text-white">
            {title}
          </h3>
          <div className="min-h-0 flex-1" />
          <p className="mt-[18px] line-clamp-3 shrink-0 text-left text-[16px] font-normal leading-[21px] text-[#4B5563] transition-colors duration-500 ease-in-out group-hover:text-white/90">
            {description}
          </p>
          <div className="min-h-[18px] shrink-0" />
          <div className="relative h-[180px] w-full shrink-0 overflow-hidden rounded-t-[12px] lg:h-[200px]">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 25vw, 100vw"
            />
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-[12px] bg-white transition-all duration-500 ease-in-out hover:bg-[#0F105F]">
      <div className="flex min-h-0 flex-1 flex-col px-8 pt-12 lg:px-[30px] lg:pt-[30px]">
        <h3 className="shrink-0 text-left text-[18px] font-medium leading-[26px] text-[#0F105F] transition-colors duration-500 ease-in-out group-hover:text-white">
          {title}
        </h3>
        <div className="min-h-0 flex-1" />
        <p className="mt-[18px] line-clamp-3 shrink-0 text-left text-[16px] font-normal leading-[21px] text-text-muted transition-colors duration-500 ease-in-out group-hover:text-white/90">
          {description}
        </p>
        <div className="min-h-[18px] shrink-0" />
        <div className="relative h-[180px] w-full shrink-0 overflow-hidden rounded-t-[12px] lg:h-[200px]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 25vw, 100vw"
          />
        </div>
      </div>
    </article>
  );
};
