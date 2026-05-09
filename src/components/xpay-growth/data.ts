export type ProviderColorKey = 'green' | 'warn' | 'red'

export type Provider = {
  name: string
  desc: string
  feeRate: number
  fxMarkup: number
  fixed: number
  colorKey: ProviderColorKey
  settlement: string
}

export const providers: Provider[] = [
  {
    name: 'xPay',
    desc: 'YC W24 · Indian-first',
    feeRate: 0.015,
    fxMarkup: 0,
    fixed: 0,
    colorKey: 'green',
    settlement: '24 hrs',
  },
  {
    name: 'Skydo',
    desc: 'Inbound only',
    feeRate: 0.015,
    fxMarkup: 0.003,
    fixed: 0,
    colorKey: 'warn',
    settlement: '2–3 days',
  },
  {
    name: 'Payoneer',
    desc: 'Freelancer favourite',
    feeRate: 0.02,
    fxMarkup: 0.005,
    fixed: 0,
    colorKey: 'warn',
    settlement: '2–3 days',
  },
  {
    name: 'Razorpay Intl',
    desc: 'Domestic leader',
    feeRate: 0.03,
    fxMarkup: 0.02,
    fixed: 0,
    colorKey: 'red',
    settlement: '3–5 days',
  },
  {
    name: 'PayPal',
    desc: 'Global standard',
    feeRate: 0.044,
    fxMarkup: 0.015,
    fixed: 0.3,
    colorKey: 'red',
    settlement: '3–5 days',
  },
  {
    name: 'Stripe',
    desc: 'Invite-only in India',
    feeRate: 0.043,
    fxMarkup: 0.02,
    fixed: 0,
    colorKey: 'red',
    settlement: '5–7 days',
  },
]

export const currencies = [
  { code: 'USD', symbol: '$' },
  { code: 'GBP', symbol: '£' },
  { code: 'EUR', symbol: '€' },
  { code: 'CAD', symbol: 'C$' },
] as const

export type Currency = (typeof currencies)[number]

export const settlementTags = [
  { label: 'xPay — 24 hrs ✓', type: 'fast' as const },
  { label: 'Skydo — 2–3 days', type: 'med' as const },
  { label: 'Stripe — 5–7 days', type: 'slow' as const },
  { label: 'PayPal — 3–5 days', type: 'slow' as const },
  { label: 'Bank wire — 5–7 days', type: 'slow' as const },
  { label: 'Payoneer — 2–3 days', type: 'med' as const },
]

export const heroStats = [
  { val: '$135B', label: 'India Inward Remittances FY25' },
  { val: '121K+', label: 'Shopify Stores in India' },
  { val: '73×', label: 'xPay Growth Since Jan 2026' },
]

export type Phase = {
  num: string
  title: string
  period: string
  accentClass: string
  iconRingClass: string
  iconBgClass: string
  iconTextClass: string
  tasks: { name: string; desc: string }[]
  kpis: { name: string; val: string }[]
}

export const phases: Phase[] = [
  {
    num: 'Phase 01',
    title: 'Foundation',
    period: 'Days 1–30 · Build the proof machine',
    accentClass: 'text-xpay-accent',
    iconBgClass: 'bg-xpay-accent-soft',
    iconRingClass: 'border-xpay-accent-line',
    iconTextClass: 'text-xpay-accent',
    tasks: [
      {
        name: 'ICP Definition & Scoring',
        desc: 'Define Tier 1 (Indian SaaS, $50K+/mo international),  Tier 2 (Remote Freelancing Platforms), Tier 3 (D2C/Artisan on Shopify & WooCommerce). Build/Improve lead scoring system in CRM.',
      },
      {
        name: '5 Case Studies with Real Numbers',
        desc: 'Interview top 10 existing customers. Extract ₹ savings, settlement improvement, FIRC compliance wins. Publish with founder names and logos.',
      },
      {
        name: 'Free Trial CTA to Hero Position',
        desc: 'Move 30-day free trial from blog to homepage hero, above the fold. A/B test vs current homepage. Track trial-to-paid conversion weekly.',
      },
      {
        name: 'Payment Cost Calculator',
        desc: 'Ship interactive calculator. Embed on homepage. Creates inbound intent signal from visitors who spend time with it.',
      },
      {
        name: 'LinkedIn Content Machine (Double down)',
        desc: '3 posts/week: one case study, one competitor teardown, one founder lesson. Every post ends with a soft CTA to free trial.',
      }
    ],
    kpis: [
      { name: 'Case studies published', val: '5' },
      { name: 'Trial signups (monthly)', val: '+40%' },
      { name: 'Homepage trial CTA CVR', val: '≥3.5%' },
      { name: 'LinkedIn reach', val: '50K / week' },
    ],
  },
  {
    num: 'Phase 02',
    title: 'Acceleration',
    period: 'Days 31–60 · Build the pipeline engine',
    accentClass: 'text-xpay-warn',
    iconBgClass: 'bg-xpay-warn-soft',
    iconRingClass: 'border-xpay-warn-line',
    iconTextClass: 'text-xpay-warn',
    tasks: [
      {
        name: 'Shopify & WooCommerce Plugin',
        desc: 'Ship xPay as a Shopify App Store plugin. Target the 121K+ India Shopify stores. Passive inbound from Tier 2 & Tier 3 businesses.',
      },
      {
        name: 'Accelerator Partnership Blitz',
        desc: 'Sign deals with 3 Indian accelerators (GSF, Antler India, Surge) as "Official Payment Gateway." Pitch deck focused on YC W24 credibility, global subscription feature & FIRC simplicity.',
      },
      {
        name: 'CA / Tax Firm Referral Program',
        desc: 'Partner with 20 high-volume CA firms who advise clients on FIRC, LUT compliance. Structured referral fee per activated account. Low CAC, high trust channel.',
      },
      {
        name: '"Going Global" Content Series',
        desc: 'Weekly educational blog: "How to collect USD without a US entity," "What is FIRC." SEO targets pre-awareness stage — before founders know they need xPay.',
      },
    ],
    kpis: [
      { name: 'Shopify plugin installs', val: '500+' },
      { name: 'Accelerator partnerships', val: '3 signed' },
      { name: 'Outbound pipeline opened', val: '₹2Cr ARR' },
      { name: 'CA referral partners', val: '20 active' },
    ],
  },
  {
    num: 'Phase 03',
    title: 'Scale',
    period: 'Days 61–90 · Build the moat',
    accentClass: 'text-xpay-purple',
    iconBgClass: 'bg-xpay-purple-soft',
    iconRingClass: 'border-xpay-purple-line',
    iconTextClass: 'text-xpay-purple',
    tasks: [
      {
        name: 'Enterprise Sales Motion',
        desc: 'Target IT services firms ($50K+/mo international revenue). Entry via "Free Payment Audit" call — frame as value-add, not pitch. CTO/CFO decision-maker targeting.',
      },
      {
        name: 'Medical Tourism Vertical Entry',
        desc: 'Target Apollo, Narayana, and 10 mid-tier specialty hospitals for international pre-payment. One enterprise hospital = massive TPV. Compliance story is the pitch.',
      },
      {
        name: 'Customer Referral Program',
        desc: 'Launch structured referral: existing customers earn 1 month free per activated referral. Indian SaaS founders trust peer recommendations over any ad.',
      },
      {
        name: '"Indian SaaS Going Global" Report',
        desc: 'Publish annual data report using anonymized xPay transaction data. Top currencies, geographies, payment trends. Generates press, builds authority, captures inbound.',
      },
      {
        name: 'Trial → Paid Conversion Sequence',
        desc: 'Automated onboarding: Day 1 call, Day 7 check-in, Day 14 "here\'s what you saved" email, Day 25 conversion call. Target 45%+ trial-to-paid rate.',
      },
    ],
    kpis: [
      { name: 'Monthly transactions', val: '2× baseline' },
      { name: 'Enterprise accounts closed', val: '5+' },
      { name: 'Trial → paid CVR', val: '≥80%' },
      { name: 'Referral-sourced signups', val: '20%+ of new' },
    ],
  },
]
