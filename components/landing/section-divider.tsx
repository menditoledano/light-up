interface SectionDividerProps {
  variant?: 'dark-a-to-b' | 'dark-b-to-a' | 'dark-to-footer';
}

export default function SectionDivider({ variant = 'dark-a-to-b' }: SectionDividerProps) {
  const bgFrom = variant === 'dark-b-to-a' ? 'from-[#0D1220]' : variant === 'dark-to-footer' ? 'from-[#0B0F1A]' : 'from-[#0B0F1A]';
  const bgTo = variant === 'dark-b-to-a' ? 'to-[#0B0F1A]' : variant === 'dark-to-footer' ? 'to-[#060911]' : 'to-[#0D1220]';

  return (
    <div className={`relative h-8 bg-gradient-to-b ${bgFrom} ${bgTo}`} />
  );
}
