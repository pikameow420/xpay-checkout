const resumePath = '/resume.pdf'

export function ResumePage() {
  return (
    <div className="min-h-screen bg-xpay-bg px-6 py-10 text-xpay-fg md:px-12">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h1 className="font-['Syne',sans-serif] text-3xl font-bold tracking-tight text-xpay-fg md:text-4xl">
            Resume
          </h1>
          <div className="flex items-center gap-2">
            <a
              href="/"
              className="rounded-md border border-xpay-line bg-xpay-surface px-4 py-2 font-['IBM_Plex_Mono',monospace] text-xs uppercase transition-colors hover:border-xpay-accent-line"
            >
              Back to landing
            </a>
            <a
              href={resumePath}
              target="_blank"
              rel="noreferrer"
              className="rounded-md bg-xpay-accent px-4 py-2 font-['IBM_Plex_Mono',monospace] text-xs font-semibold text-xpay-bg uppercase shadow-xpay-glow-lg"
            >
              Open PDF
            </a>
          </div>
        </div>
        <div className="h-[84vh] overflow-hidden rounded-xl border border-xpay-line bg-xpay-bg-2">
          <iframe title="Resume PDF" src={resumePath} className="h-full w-full" />
        </div>
      </div>
    </div>
  )
}
