import { cn } from '@/lib/utils'

type SectionLabelProps = {
  index: string
  label: string
  className?: string
}

export function SectionLabel({ index, label, className }: SectionLabelProps) {
  return (
    <div
      className={cn(
        "mb-2 flex items-center gap-3 font-['IBM_Plex_Mono',monospace] text-xs font-medium tracking-widest text-xpay-accent uppercase",
        className,
      )}
    >
      <div className="h-px w-6 bg-xpay-accent" />
      {index} - {label}
    </div>
  )
}
