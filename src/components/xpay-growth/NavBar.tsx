const links = [
  { href: '#calculator', label: 'Fee Comparison' },
  { href: '#timeline', label: '90-Day Roadmap' },
  { href: '#manifesto', label: 'The Case' },
  { href: '/resume', label: 'About Me' },
]

export function NavBar() {
  return (
    <nav className="fixed top-0 right-0 left-0 z-50 flex items-center justify-between border-b border-xpay-line bg-xpay-bg/85 px-8 py-4 backdrop-blur-md md:px-12">
      <span className="font-['Syne',sans-serif] text-sm font-bold tracking-widest text-xpay-accent">
        xPay × <span className="uppercase">Growth</span>
      </span>
      <ul className="hidden list-none gap-8 md:flex">
        {links.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="font-['IBM_Plex_Mono',monospace] text-xs tracking-wider text-xpay-muted uppercase transition-colors duration-200 hover:text-xpay-accent"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
