import { heroStats } from './data'

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-end overflow-hidden bg-xpay-bg px-8 pt-24 pb-20 md:px-12 md:pt-28">
      <div
        className="pointer-events-none absolute inset-0 bg-size-[48px_48px] bg-[linear-gradient(var(--color-xpay-gridline)_1px,transparent_1px),linear-gradient(90deg,var(--color-xpay-gridline)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_80%_60%_at_30%_50%,black_30%,transparent_100%)] [-webkit-mask-image:radial-gradient(ellipse_80%_60%_at_30%_50%,black_30%,transparent_100%)]"
      />
      <div
        className="pointer-events-none absolute -left-[120px] top-[5%] h-[600px] w-[600px] animate-[xpay-pulse-glow_3s_ease-in-out_infinite] rounded-full bg-[radial-gradient(circle,var(--color-xpay-orb)_0%,transparent_70%)]"
        aria-hidden
      />

      <div className="relative z-10 max-w-5xl">
        <p className="mb-5 animate-[xpay-fade-up_0.6s_ease_both] font-['IBM_Plex_Mono',monospace] text-xs tracking-widest text-xpay-accent uppercase [animation-delay:50ms]">
          Growth Strategy Proposal — xPay 2026
        </p>
        <h1 className="animate-[xpay-fade-up_0.6s_ease_both] font-['Syne',sans-serif] text-[clamp(52px,8vw,96px)] leading-[0.96] font-extrabold tracking-tighter text-xpay-fg [animation-delay:200ms]">
          xPay should own
          <br />
          <span className="text-xpay-accent">Indian SaaS</span>
          <br />
          going global.
        </h1>
        <p className="mt-7 max-w-xl animate-[xpay-fade-up_0.6s_ease_both] text-base font-light leading-relaxed text-xpay-muted [animation-delay:350ms]">
          A research-backed case for how xPay grows from 1M transactions/month to 10M — with a live fee
          comparison tool and a 90-day sales playbook built from first principles.
        </p>
        <div className="mt-14 flex animate-[xpay-fade-up_0.6s_ease_both] flex-wrap items-center gap-10 [animation-delay:500ms]">
          {heroStats.map((stat, index) => (
            <div key={stat.val} className="flex items-center gap-10">
              <div>
                <div className="font-['Syne',sans-serif] text-[32px] font-bold text-xpay-accent">{stat.val}</div>
                <div className="mt-0.5 font-['IBM_Plex_Mono',monospace] text-xs tracking-wider text-xpay-muted uppercase">
                  {stat.label}
                </div>
              </div>
              {index < heroStats.length - 1 ? (
                <div className="hidden h-12 w-px bg-xpay-accent-line sm:block" />
              ) : null}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-7 right-8 flex animate-[xpay-fade-up_0.6s_ease_both] items-center gap-2 font-['IBM_Plex_Mono',monospace] text-[10px] tracking-[0.1em] text-xpay-dim uppercase [animation-delay:650ms] md:right-12">
        <div className="h-px w-8 bg-xpay-dim" />
        Scroll to explore
      </div>
    </section>
  )
}
