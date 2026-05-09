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
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/advit-mahale/"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-xpay-accent px-8 py-3.5 font-['Syne',sans-serif] text-sm font-bold tracking-wide text-xpay-bg shadow-none transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xpay-glow-lg"
          >
            Let&apos;s kill Stripe together? →
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
