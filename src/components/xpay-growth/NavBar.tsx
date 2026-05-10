import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const links = [
  { href: '#calculator', label: 'Fee Comparison' },
  { href: '#timeline', label: '90-Day Roadmap' },
  { href: '#manifesto', label: 'The Case' },
  { href: '/resume', label: 'About Me' },
]

const linkDesktop =
  "font-['IBM_Plex_Mono',monospace] text-xs tracking-wider text-xpay-muted uppercase transition-colors duration-200 hover:text-xpay-accent"

const linkMobile =
  "font-['IBM_Plex_Mono',monospace] block py-3 text-xs tracking-wider text-xpay-muted uppercase transition-colors duration-200 active:bg-xpay-line/30 hover:text-xpay-accent"

export function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    if (!mobileOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [mobileOpen])

  return (
    <>
      <nav className="fixed top-0 right-0 left-0 z-[60] flex items-center justify-between border-b border-xpay-line bg-xpay-bg/85 px-6 py-3 backdrop-blur-md sm:px-8 sm:py-4 md:px-12">
        <span className="font-['Syne',sans-serif] text-sm font-bold tracking-widest text-xpay-accent">
          xPay × <span className="uppercase">Growth</span>
        </span>
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-md text-xpay-muted transition-colors hover:bg-xpay-line/40 hover:text-xpay-accent md:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <X className="h-5 w-5" strokeWidth={1.75} /> : <Menu className="h-5 w-5" strokeWidth={1.75} />}
        </button>
        <ul className="hidden list-none gap-8 md:flex">
          {links.map((item) => (
            <li key={item.href}>
              <a href={item.href} className={linkDesktop}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile: backdrop + right drawer (below top nav) */}
      <div
        className={cn(
          'fixed top-16 right-0 bottom-0 left-0 z-40 md:hidden transition-opacity duration-300 ease-out sm:top-[4.5rem]',
          mobileOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        )}
        aria-hidden={!mobileOpen}
      >
        <button
          type="button"
          className="absolute inset-0 bg-xpay-bg/85"
          aria-label="Close menu"
          tabIndex={mobileOpen ? 0 : -1}
          onClick={() => setMobileOpen(false)}
        />
      </div>

      <div
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className={cn(
          'fixed top-16 right-0 bottom-0 z-50 flex w-[min(88vw,20rem)] flex-col border-l border-xpay-line bg-xpay-bg shadow-[-8px_0_40px_rgb(0_0_0_0.45)] transition-transform duration-300 ease-out md:hidden sm:top-[4.5rem] sm:w-[min(85vw,22rem)]',
          mobileOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none',
        )}
      >
        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-6 pb-6 pt-4 sm:px-8">
          <ul className="list-none divide-y divide-xpay-line/35">
            {links.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={linkMobile}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
