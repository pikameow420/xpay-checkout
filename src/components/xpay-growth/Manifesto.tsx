import { SectionLabel } from './SectionLabel'

export function Manifesto() {
  return (
    <section id="manifesto" className="bg-xpay-bg-2 px-8 py-32 text-center md:px-12">
      <div className="mx-auto max-w-3xl">
        <div className="flex justify-center">
          <SectionLabel index="03" label="The Case" className="w-full justify-center" />
        </div>
        <h2 className="mt-4 mb-7 font-['Syne',sans-serif] text-[clamp(36px,5vw,64px)] leading-none font-extrabold tracking-tight text-xpay-fg">
          xPay&apos;s 73× growth came from product.
          <br />
          <span className="text-xpay-accent">The next 100× comes from the system.</span>
        </h2>
        <p className="mx-auto mb-14 max-w-xl text-base font-light leading-loose text-xpay-muted">
          The infrastructure is right, the timing is right, and India&apos;s SaaS export economy is only
          accelerating. What xPay needs now isn&apos;t more hustle — it&apos;s repeatable, scalable growth
          architecture: clear ICPs, social proof that converts, distribution partnerships, and a sales machine
          that works without the founders in every call.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:hello@xpaycheckout.com"
            className="rounded-xl bg-xpay-accent px-8 py-3.5 font-['Syne',sans-serif] text-sm font-bold tracking-wide text-xpay-bg shadow-none transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xpay-glow-lg"
          >
            Let&apos;s build this together →
          </a>
          <a
            href="#calculator"
            className="rounded-xl border border-xpay-line bg-transparent px-8 py-3.5 font-['Syne',sans-serif] text-sm font-semibold text-xpay-muted transition-colors duration-200 hover:border-xpay-accent-line hover:text-xpay-accent"
          >
            Back to the numbers
          </a>
        </div>
      </div>
    </section>
  )
}
