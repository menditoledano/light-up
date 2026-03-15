interface SectionDividerProps {
  variant?: 'dark-a-to-b' | 'dark-b-to-a' | 'dark-to-footer';
}

export default function SectionDivider({ variant = 'dark-a-to-b' }: SectionDividerProps) {
  const bgFrom = variant === 'dark-b-to-a' ? 'from-[#0D1220]' : variant === 'dark-to-footer' ? 'from-[#0B0F1A]' : 'from-[#0B0F1A]';
  const bgTo = variant === 'dark-b-to-a' ? 'to-[#0B0F1A]' : variant === 'dark-to-footer' ? 'to-[#060911]' : 'to-[#0D1220]';

  return (
    <div className={`relative h-8 bg-gradient-to-b ${bgFrom} ${bgTo}`}>
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center">
        <div className="flex items-center gap-3">
          <div className="w-16 sm:w-32 h-px bg-gradient-to-r from-transparent to-[#D4AF37]/15" />
          <div className="w-1 h-1 rounded-full bg-[#D4AF37]/40" />
          <div className="w-16 sm:w-32 h-px bg-gradient-to-l from-transparent to-[#D4AF37]/15" />
        </div>
      </div>
    </div>
  );
}
