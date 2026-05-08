import { FeeCalculator } from './FeeCalculator'
import { Footer } from './Footer'
import { Hero } from './Hero'
import { Manifesto } from './Manifesto'
import { NavBar } from './NavBar'
import { Timeline } from './Timeline'

function SectionDivider() {
  return (
    <div className="h-px w-full bg-gradient-to-r from-transparent via-xpay-accent-line to-transparent" />
  )
}

export function XpayGrowthLanding() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-xpay-bg font-['IBM_Plex_Sans',sans-serif] text-xpay-fg antialiased">
      <NavBar />
      <main>
        <Hero />
        <SectionDivider />
        <FeeCalculator />
        <SectionDivider />
        <Timeline />
        <SectionDivider />
        <Manifesto />
        <Footer />
      </main>
    </div>
  )
}
