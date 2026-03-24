'use client';

import { useId, useState } from 'react';

import { ChevronDown, Container } from '@/components/atoms';

const ITEMS = [
  {
    question: '1. How do I know if I qualify for a lawsuit?',
    answer:
      'Our mission is to bring clear guidance for you. By simply filling out 1 minute form we can match you to the right experts. Our team carefully reviews your situation privately and securely.',
  },
  {
    question: '2. Will my identity remain confidential if I start a claim?',
    answer: 'Our mission is to bring clear guidance for you. By simply filling out 1 minute form we can match you to the right experts. Our team carefully reviews your situation privately and securely.',
  },
  {
    question: '3. Is there any cost to file a claim or hire an attorney?',
    answer: 'Our mission is to bring clear guidance for you. By simply filling out 1 minute form we can match you to the right experts. Our team carefully reviews your situation privately and securely.',
  },
  {
    question: '4. Can I still file a claim if the abuse happened years ago?',
    answer: 'Our mission is to bring clear guidance for you. By simply filling out 1 minute form we can match you to the right experts. Our team carefully reviews your situation privately and securely.',
  },
] as const;

export const FAQ = () => {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white" aria-labelledby="faq-heading">
      <Container>
        <div className="mx-auto max-w-[720px] text-center">
          <h2
            id="faq-heading"
            className="text-[30px] font-semibold leading-none text-[#0E1629]"
          >
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-[16px] font-normal leading-6 text-[#465469] lg:text-[18px] lg:leading-none">
            Common questions about pursuing a claim and getting support.
          </p>
        </div>

        <ul
          className="mx-auto mt-10 flex w-full flex-col gap-3 lg:mt-12 lg:max-w-[940px] lg:gap-4"
          role="list"
        >
          {ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `${baseId}-panel-${index}`;
            const buttonId = `${baseId}-trigger-${index}`;

            return (
              <li key={item.question}>
                <div className="rounded-xl border border-[#E2E8F0] bg-white px-5 py-4 lg:px-6 lg:py-5">
                  <h3 className="m-0 text-[18px] font-medium leading-none text-[#0A3182]">
                    <button
                      id={buttonId}
                      type="button"
                      className="flex w-full cursor-pointer items-start gap-3 text-left"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() =>
                        setOpenIndex(isOpen ? -1 : index)
                      }
                    >
                      <span className="min-w-0 flex-1">{item.question}</span>
                      <span
                        className={`mt-0.5 shrink-0 text-[#0A3182] transition-transform duration-300 ease-out ${
                          isOpen ? 'rotate-180' : 'rotate-0'
                        }`}
                        aria-hidden
                      >
                        <ChevronDown size={22} />
                      </span>
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="min-h-0 overflow-hidden">
                      {item.answer ? (
                        <p className="pt-3 text-[16px] font-normal leading-6 text-[#465469] lg:pt-4 lg:leading-[27px]">
                          {item.answer}
                        </p>
                      ) : null}
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
};
