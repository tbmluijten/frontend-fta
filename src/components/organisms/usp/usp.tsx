import { Container } from '@/components/atoms';

const ITEMS = [
  { title: '24/7', subtitle: 'Full Time Support' },
  { title: '50 +', subtitle: 'Legal experts' },
  { title: '100%', subtitle: 'Confidential' },
  { title: 'Free', subtitle: 'Case review & consultation' },
] as const;

export type USPTheme = 'default' | 'wwffyj';

type USPProps = {
  theme?: USPTheme;
};

export const USP = ({ theme = 'default' }: USPProps) => {
  const itemTitleClass =
    theme === 'wwffyj'
      ? 'font-alexandria text-[24px] font-bold leading-[28px] text-[#0F105F] lg:text-[30px] lg:leading-[36px]'
      : 'text-[24px] font-bold leading-[28px] text-[#0F105F] lg:text-[30px] lg:leading-[36px]';

  const sectionBgClass =
    theme === 'wwffyj' ? 'bg-[#F9FAFB]' : 'bg-section-bg';

  return (
    <section className={sectionBgClass} aria-labelledby="usp-heading">
      <Container>
        <h2 id="usp-heading" className="sr-only">
          USP
        </h2>
        <ul
          className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6"
          role="list"
        >
          {ITEMS.map((item) => (
            <li
              key={item.title}
              className="rounded-xl bg-white px-5 py-6 lg:px-6 lg:py-8"
            >
              <p className={itemTitleClass}>
                {item.title}
              </p>
              <p className="mt-1 text-[11px] leading-[20px] text-[#465469] lg:mt-2 lg:text-[16px] lg:leading-[21px]">
                {item.subtitle}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};
