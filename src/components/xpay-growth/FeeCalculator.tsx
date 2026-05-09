import { useCallback, useMemo, useState } from 'react'
import { Slider } from '@/components/ui/slider'
import { SectionLabel } from './SectionLabel'
import {
  currencies,
  type Currency,
  providers,
  type Provider,
  type ProviderColorKey,
  settlementTags,
} from './data'

const MIN_AMOUNT = 1_000
const MAX_AMOUNT = 1_000_000
const AMOUNT_STEP = 1_000

function calcFee(provider: Provider, amount: number) {
  return amount * (provider.feeRate + provider.fxMarkup) + provider.fixed
}

const currencyLocaleMap: Record<Currency['code'], string> = {
  USD: 'en-US',
  GBP: 'en-GB',
  EUR: 'de-DE',
  CAD: 'en-CA',
}

function formatMoney(amount: number, symbol: string, locale: string) {
  if (amount >= 1000) {
    return symbol + amount.toLocaleString(locale, { maximumFractionDigits: 0 })
  }
  return symbol + amount.toFixed(2)
}

const barColors: Record<ProviderColorKey, { bar: string; text: string }> = {
  green: { bar: 'bg-xpay-accent', text: 'text-xpay-accent' },
  warn: { bar: 'bg-xpay-warn', text: 'text-xpay-warn' },
  red: { bar: 'bg-xpay-danger', text: 'text-xpay-danger' },
}

const settlementTypeClass = {
  fast: 'border-xpay-accent-line bg-xpay-accent-soft text-xpay-accent',
  med: 'border-xpay-warn-line bg-xpay-warn-soft text-xpay-warn',
  slow: 'border-xpay-danger-line bg-xpay-danger-soft text-xpay-danger',
} as const

export function FeeCalculator() {
  const [amount, setAmount] = useState(300_000)
  const [currency, setCurrency] = useState<Currency>(currencies[0])
  const activeLocale = currencyLocaleMap[currency.code]

  const clamp = useCallback((n: number) => Math.max(MIN_AMOUNT, Math.min(MAX_AMOUNT, n)), [])

  const rows = useMemo(
    () =>
      providers.map((p) => ({
        ...p,
        fee: calcFee(p, amount),
        net: amount - calcFee(p, amount),
      })),
    [amount],
  )

  const maxNet = Math.max(...rows.map((r) => r.net), 1)
  const xpayFee = rows[0].fee
  const stripeFee = rows.find((r) => r.name === 'Stripe')?.fee ?? 0
  const savingsVsStripe = stripeFee - xpayFee
  const annualized = savingsVsStripe * 12

  return (
    <section id="calculator" className="bg-xpay-bg-2 px-8 py-24 md:px-12">
      <SectionLabel index="01" label="Competitive Edge" />
      <h2 className="mt-2 mb-3 font-['Syne',sans-serif] text-[clamp(30px,4vw,52px)] font-bold tracking-tight text-xpay-fg">
        What every transaction <em className="not-italic">actually</em> costs
      </h2>
      <p className="mb-14 max-w-xl text-[15px] font-light leading-relaxed text-xpay-muted">
        Adjust the transaction amount to see live fee comparisons across every gateway Indian founders use
        today.
      </p>

      <div className="grid max-w-5xl grid-cols-1 gap-10 lg:grid-cols-2">
        <div className="rounded-2xl border border-xpay-line bg-xpay-surface p-8">
          <h3 className="mb-7 font-['Syne',sans-serif] text-lg font-semibold text-xpay-fg">
            Transaction details
          </h3>

          <div className="mb-6">
            <label className="mb-2 block font-['IBM_Plex_Mono',monospace] text-xs tracking-widest text-xpay-muted uppercase">
              Payment amount
            </label>
            <div className="flex items-center overflow-hidden rounded-xl border border-xpay-line bg-xpay-bg-3">
              <span className="flex h-12 items-center border-r border-xpay-line px-4 font-['IBM_Plex_Mono',monospace] text-sm font-medium text-xpay-accent">
                {currency.symbol}
              </span>
              <input
                type="number"
                min={MIN_AMOUNT}
                max={MAX_AMOUNT}
                step={AMOUNT_STEP}
                value={amount}
                onChange={(e) => {
                  const n = Number(e.target.value)
                  if (!Number.isFinite(n)) return
                  setAmount(clamp(n))
                }}
                className="flex-1 border-none bg-transparent px-4 font-['Syne',sans-serif] text-2xl font-bold text-xpay-fg outline-none"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="mb-3 block font-['IBM_Plex_Mono',monospace] text-xs tracking-widest text-xpay-muted uppercase">
              Adjust with slider ({currency.symbol}1K to {currency.symbol}1M)
            </label>
            <Slider
              min={MIN_AMOUNT}
              max={MAX_AMOUNT}
              step={AMOUNT_STEP}
              value={[amount]}
              onValueChange={(v) => {
                const next = Array.isArray(v) ? v[0] : v
                setAmount(clamp(Number(next)))
              }}
              className="mb-2 w-full [&_[data-slot=slider-track]]:h-1 [&_[data-slot=slider-track]]:rounded-full [&_[data-slot=slider-track]]:bg-white/10 [&_[data-slot=slider-range]]:rounded-full [&_[data-slot=slider-range]]:bg-xpay-accent [&_[data-slot=slider-thumb]]:size-5 [&_[data-slot=slider-thumb]]:border-2 [&_[data-slot=slider-thumb]]:border-xpay-bg [&_[data-slot=slider-thumb]]:bg-xpay-accent [&_[data-slot=slider-thumb]]:shadow-xpay-thumb [&_[data-slot=slider-thumb]]:ring-0"
            />
            <div className="flex justify-between font-['IBM_Plex_Mono',monospace] text-xs text-xpay-dim">
              <span>{currency.symbol}1K</span>
              <span>{currency.symbol}1M</span>
            </div>
          </div>

          <div className="mb-6">
            <label className="mb-2 block font-['IBM_Plex_Mono',monospace] text-xs tracking-widest text-xpay-muted uppercase">
              Currency
            </label>
            <div className="flex flex-wrap gap-2">
              {currencies.map((c) => (
                <button
                  key={c.code}
                  type="button"
                  onClick={() => setCurrency(c)}
                  className={`rounded-lg px-4 py-2 font-['IBM_Plex_Mono',monospace] text-xs transition-all duration-150 ${
                    currency.code === c.code
                      ? 'border border-xpay-accent-line bg-xpay-accent-soft text-xpay-accent'
                      : 'border border-xpay-line bg-xpay-bg-3 text-xpay-muted hover:border-xpay-accent-line/50'
                  }`}
                >
                  {c.code}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="mb-2 block font-['IBM_Plex_Mono',monospace] text-xs tracking-widest text-xpay-muted uppercase">
              Payment Provider
            </label>
            <div className="flex flex-wrap gap-2">
              {settlementTags.map((t) => (
                <span
                  key={t.label}
                  className={`rounded-full border px-3 py-1 font-['IBM_Plex_Mono',monospace] text-xs ${settlementTypeClass[t.type]}`}
                >
                  {t.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          {rows.map((row, index) => {
            const colors = barColors[row.colorKey]
            const widthPct = maxNet > 0 ? Math.max(4, (row.net / maxNet) * 100) : 4
            const isXpay = index === 0
            const deltaVsXpay = row.fee - xpayFee
            return (
              <div
                key={row.name}
                className={`relative grid items-center gap-3 rounded-xl px-5 py-4 transition-[border-color] duration-200 [grid-template-columns:140px_1fr_auto] ${
                  isXpay
                    ? 'border border-xpay-accent-line bg-xpay-accent-soft'
                    : 'border border-xpay-line bg-xpay-surface'
                }`}
              >
                {isXpay ? (
                  <span className="absolute -top-3 right-4 rounded bg-xpay-accent px-2 py-0.5 font-['IBM_Plex_Mono',monospace] text-[9px] font-medium tracking-[0.08em] text-xpay-bg uppercase">
                    Best deal
                  </span>
                ) : null}
                <div>
                  <div className="font-['Syne',sans-serif] text-sm font-semibold text-xpay-fg">{row.name}</div>
                </div>
                <div className="relative">
                  <div className="h-1.5 w-full rounded-full bg-white/10">
                    <div
                      className={`h-full rounded-full transition-[width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${colors.bar}`}
                      style={{ width: `${widthPct}%` }}
                    />
                  </div>
                  {!isXpay ? (
                    <div className="mt-1 font-['IBM_Plex_Mono',monospace] text-[10px] text-xpay-dim">
                      +{formatMoney(deltaVsXpay, currency.symbol, activeLocale)} more fees vs xPay
                    </div>
                  ) : (
                    <div className="mt-1 font-['IBM_Plex_Mono',monospace] text-[10px] text-xpay-accent">
                      Baseline cost benchmark
                    </div>
                  )}
                </div>
                <div className="text-right">
                  <div className={`font-['IBM_Plex_Mono',monospace] text-base font-semibold ${colors.text}`}>
                    {formatMoney(row.net, currency.symbol, activeLocale)}
                  </div>
                  <div className="mt-0.5 font-['IBM_Plex_Mono',monospace] text-xs text-xpay-dim">
                    Fees: {formatMoney(row.fee, currency.symbol, activeLocale)}
                  </div>
                </div>
              </div>
            )
          })}

          {savingsVsStripe > 0 ? (
            <div className="mt-1 rounded-xl border border-xpay-accent-line bg-xpay-accent-soft px-5 py-4 text-sm font-light leading-relaxed text-xpay-accent">
              On a{' '}
              <span className="font-semibold font-['IBM_Plex_Mono',monospace]">
                {formatMoney(amount, currency.symbol, activeLocale)}
              </span>{' '}
              transaction, xPay saves you{' '}
              <strong className="font-['Syne',sans-serif]">
                {formatMoney(savingsVsStripe, currency.symbol, activeLocale)} vs Stripe
              </strong>{' '}
              — that&apos;s{' '}
              <strong className="font-['IBM_Plex_Mono',monospace]">
                {formatMoney(annualized, currency.symbol, activeLocale)}/year
              </strong>{' '}
              on just one monthly client payment. At scale, this is a significant P&amp;L line.
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}
