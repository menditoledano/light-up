interface SectionDividerProps {
  variant?: 'dark-a-to-b' | 'dark-b-to-a' | 'dark-to-footer';
}

export default function SectionDivider({ variant = 'dark-a-to-b' }: SectionDividerProps) {
  const bgFrom = variant === 'dark-b-to-a' ? 'from-[#0D1220]' : variant === 'dark-to-footer' ? 'from-[#0B0F1A]' : 'from-[#0B0F1A]';
  const bgTo = variant === 'dark-b-to-a' ? 'to-[#0B0F1A]' : variant === 'dark-to-footer' ? 'to-[#060911]' : 'to-[#0D1220]';

  return (
    <div className={`relative h-16 sm:h-20 bg-gradient-to-b ${bgFrom} ${bgTo}`}>
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center">
        <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-r from-transparent to-slate-700/50" />
        <div className="mx-3 w-1.5 h-1.5 rounded-full bg-slate-700/60" />
        <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-l from-transparent to-slate-700/50" />
      </div>
    </div>
  );
}
