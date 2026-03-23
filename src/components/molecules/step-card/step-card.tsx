type StepCardProps = {
  step: string;
  title: string;
  description: string;
  isActive?: boolean;
};

export const StepCard = ({
  step,
  title,
  description,
  isActive = false,
}: StepCardProps) => {
  return (
    <div
      className={`flex items-center gap-4 rounded-2xl px-6 py-5 transition-colors ${
        isActive
          ? 'bg-[#2D2E7C] text-white'
          : 'border-[1px] border-[#DDE6FF] text-primary'
      }`}
    >
      <div
        className="relative flex h-14 w-14 shrink-0 items-center justify-center bg-no-repeat font-bold text-[24px] [background-size:100%]"
        style={{
          ...(isActive
            ? {
                backgroundImage: `url("/background-steps.svg")`,
                backgroundPosition: 'center',
              }
            : {
                backgroundImage: `url("/background-steps-outline.svg")`,
                backgroundPosition: 'center',
              }),
        }}
        aria-hidden
      >
        <span
          className={`relative z-10 ${isActive ? 'text-primary' : 'text-[#696AB7]'}`}
        >
          {step}
        </span>
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="font-bold lg:text-[20px]">{title}</h3>
        <p className={`mt-1 text-[14px] lg:text-[16px] max-w-[340px] leading-tight ${isActive ? 'text-white/90' : 'text-text-muted'}`}>
          {description}
        </p>
      </div>
    </div>
  );
};
