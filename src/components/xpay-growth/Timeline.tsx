import { phases } from './data'
import { SectionLabel } from './SectionLabel'

function PhaseCard({ phase }: { phase: (typeof phases)[number] }) {
  return (
    <div className="flex flex-col bg-xpay-bg-2 p-7">
      <div className="mb-1 font-['IBM_Plex_Mono',monospace] text-xs tracking-widest text-xpay-dim uppercase">
        {phase.num}
      </div>
      <div className={`mb-1 font-['Syne',sans-serif] text-2xl font-bold ${phase.accentClass}`}>{phase.title}</div>
      <div className="mb-6 border-b border-xpay-line pb-5 font-['IBM_Plex_Mono',monospace] text-xs text-xpay-muted">
        {phase.period}
      </div>
      <div className="mb-8 flex flex-1 flex-col gap-4">
        {phase.tasks.map((task, i) => (
          <div key={task.name} className="flex items-start gap-3">
            <div
              className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border font-['IBM_Plex_Mono',monospace] text-[9px] font-bold ${phase.iconBgClass} ${phase.iconRingClass} ${phase.iconTextClass}`}
            >
              {i + 1}
            </div>
            <div>
              <div className="mb-0.5 text-sm font-medium text-xpay-fg">{task.name}</div>
              <div className="text-xs font-light leading-relaxed text-xpay-muted">{task.desc}</div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <div className="mb-3 font-['IBM_Plex_Mono',monospace] text-xs tracking-widest text-xpay-dim uppercase">
          KPIs — End of period
        </div>
        <div className="flex flex-col gap-2">
          {phase.kpis.map((kpi) => (
            <div
              key={kpi.name}
              className="flex items-baseline justify-between rounded-lg border border-xpay-line bg-xpay-surface px-3 py-2"
            >
              <span className="text-xs text-xpay-muted">{kpi.name}</span>
              <span className={`font-['IBM_Plex_Mono',monospace] text-xs font-medium ${phase.accentClass}`}>
                {kpi.val}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function Timeline() {
  return (
    <section id="timeline" className="bg-xpay-bg px-8 py-24 md:px-12">
      <SectionLabel index="02" label="Growth Roadmap" />
      <h2 className="mt-2 mb-3 font-['Syne',sans-serif] text-[clamp(30px,4vw,52px)] font-bold tracking-tight text-xpay-fg">
        90 days. 3 phases.
        <br />
        One clear north star.
      </h2>
      <p className="mb-14 max-w-xl text-[15px] font-light leading-relaxed text-xpay-muted">
        Each phase builds the infrastructure the next one needs. Nothing is parallel for the sake of it —
        sequencing is the strategy.
      </p>
      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-xpay-line bg-xpay-line lg:grid-cols-3">
        {phases.map((phase) => (
          <PhaseCard key={phase.num} phase={phase} />
        ))}
      </div>
    </section>
  )
}
