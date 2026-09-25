import { financials } from '../data/financials'
import { overview } from '../data/overview'
import { timeline } from '../data/timeline'
import { tracker } from '../data/tracker'

const APPLICATION = 'https://shutternetwork.discourse.group/t/shutter-dao-0x36-impact-pilot-program-round-1-grant-guide-application-template/951'

function usd(value: number | null) {
  if (value === null) return 'Not set'
  return `$${value.toLocaleString('en-US')}`
}

function parseAmount(amount: string) {
  const value = Number(amount.replace(/[^0-9.]/g, ''))
  return Number.isFinite(value) ? value : 0
}

const earmarked = tracker.reduce((sum, row) => (
  row.submissionCheck ? sum + parseAmount(row.amount) : sum
), 0)

const MONEY: { label: string; value: number; note?: string }[] = [
  { label: 'Total pool', value: financials.totalPool },
  { label: 'Round 1 pool', value: financials.round1Pool },
  { label: 'Round 2 pool', value: financials.round2Pool },
  { label: 'Earmarked', value: earmarked, note: 'Passed submission check' },
  { label: 'Remainder', value: financials.totalPool - earmarked },
]

const META = [
  { label: 'Status', value: 'Active' },
  { label: 'Design / admin', value: overview.programDesignAdmin },
  { label: 'Start', value: overview.startDate },
  { label: 'End', value: overview.endDate },
  { label: 'Next milestone', value: timeline[0] ? `${timeline[0].label} · ${timeline[0].date}` : '—' },
  { label: 'Pool', value: overview.totalPool },
]

export function Overview() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight text-bone-950">{overview.title}</h1>
      <p className="max-w-2xl text-base text-bone-600">{overview.subtitle} 🚀</p>
      <p className="max-w-2xl rounded-lg border-2 border-moss-800 bg-moss-100 px-3 py-1.5 text-sm leading-relaxed text-moss-900">
        Between two rounds: Proactive and Retroactive, applicants will be able to receive funding for evidence-driven, high impact initiatives among 7 objectives. Apply{' '}
        <a href={APPLICATION} className="font-medium text-brand-700 hover:underline" target="_blank" rel="noreferrer">here</a>!
      </p>

      <section className="overflow-hidden rounded-2xl border border-bone-200 bg-white">
        <dl className="grid sm:grid-cols-2">
          {META.map((item) => (
            <div key={item.label} className="border-b border-r border-bone-200 px-5 py-4">
              <dt className="text-[11px] font-semibold uppercase tracking-wider text-bone-400">{item.label}</dt>
              <dd className="mt-1 text-sm font-medium text-bone-950">{item.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="rounded-2xl border border-bone-200 bg-white">
        <h2 className="border-b border-bone-200 px-5 py-4 text-xs font-semibold uppercase tracking-wider text-bone-500">Financials</h2>
        <dl>
          {MONEY.map((row) => (
            <div key={row.label} className="flex items-baseline justify-between gap-4 border-b border-bone-100 px-5 py-3.5 last:border-b-0">
              <dt className="text-sm text-bone-600">
                {row.label}
                {row.note && <span className="ml-2 text-xs italic text-bone-400">({row.note})</span>}
              </dt>
              <dd className={`text-sm font-medium tabular-nums ${row.value === null ? 'text-bone-400' : 'text-bone-950'}`}>
                {usd(row.value)}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="rounded-2xl border border-bone-200 bg-white">
        <h2 className="border-b border-bone-200 px-5 py-4 text-xs font-semibold uppercase tracking-wider text-bone-500">Timeline</h2>
        <ol className="px-5 py-5">
          {timeline.map((row, index) => (
            <li key={row.label} className="relative pl-6 pb-6 last:pb-0">
              {index < timeline.length - 1 && (
                <span className="absolute left-[5px] top-2 bottom-0 w-px bg-brand-200" />
              )}
              <span className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full bg-brand-600" />
              {row.highlight ? (
                <div className="inline-block rounded-lg border-2 border-moss-800 bg-moss-100 px-3 py-1.5">
                  <div className="text-xs text-moss-800">{row.date}</div>
                  <div className="mt-0.5 text-sm font-semibold text-moss-900">{row.label}</div>
                </div>
              ) : (
                <div>
                  <div className="text-xs text-bone-400">{row.date}</div>
                  <div className="mt-0.5 text-sm font-semibold text-bone-950">{row.label}</div>
                </div>
              )}
            </li>
          ))}
        </ol>
      </section>

      <section className="rounded-2xl border border-bone-200 bg-white">
        <h2 className="border-b border-bone-200 px-5 py-4 text-xs font-semibold uppercase tracking-wider text-bone-500">Tracker</h2>
        {tracker.length === 0 ? (
          <p className="px-5 py-10 text-center text-sm text-bone-400">No entries yet</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead>
                <tr className="border-b border-bone-100 text-[11px] font-semibold uppercase tracking-wider text-bone-400">
                  {['Applicant', 'Round', 'Objective', 'Amount', 'Submission check', 'Next step'].map((col) => (
                    <th key={col} className={`whitespace-nowrap px-5 py-3 font-semibold ${col === 'Round' || col === 'Objective' || col === 'Submission check' ? 'text-center' : ''}`}>{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tracker.map((row) => (
                  <tr key={`${row.applicant}-${row.round}-${row.objective}`} className="border-b border-bone-100 last:border-b-0 align-top">
                    <td className="px-5 py-3.5 font-medium">
                      {row.link ? (
                        <a href={row.link} className="text-brand-700 hover:underline" target="_blank" rel="noreferrer">{row.applicant}</a>
                      ) : <span className="text-bone-950">{row.applicant}</span>}
                    </td>
                    <td className="px-5 py-3.5 text-center text-bone-600">{row.round}</td>
                    <td className="px-5 py-3.5 text-center text-bone-600">{row.objective}</td>
                    <td className="px-5 py-3.5 tabular-nums text-bone-950">{row.amount}</td>
                    <td className="px-5 py-3.5 text-center">{row.submissionCheck ? '✅' : '—'}</td>
                    <td className="px-5 py-3.5 text-bone-600">{row.nextStep}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  )
}
