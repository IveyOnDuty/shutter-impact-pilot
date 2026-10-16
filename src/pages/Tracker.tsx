import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { tracker, type TrackerEntry } from '../data/tracker'
import { OBJECTIVES } from './Program'

function checkRank(value: boolean | 'tbd' | 'no') {
  if (value === true) return 0
  if (value === 'tbd') return 1
  if (value === 'no') return 2
  return 3
}

function checkMark(value: boolean | 'tbd' | 'no') {
  if (value === true) return '✅'
  if (value === 'tbd') return '🕐'
  if (value === 'no') return '❌'
  return '—'
}

const trackerRows = [...tracker].sort((a, b) => checkRank(a.submissionCheck) - checkRank(b.submissionCheck))
const objectives = [...new Set(tracker.map((row) => row.objective))].sort((a, b) => Number(a) - Number(b))

function objectiveTitle(id: string) {
  const item = OBJECTIVES[Number(id) - 1]
  return item ? item.title.replace(/^Objective \d+:\s*/, '') : id
}

function rowKey(row: TrackerEntry) {
  return `${row.applicant}-${row.round}-${row.objective}`
}

function SummaryCard({ row }: { row: TrackerEntry }) {
  return (
    <article className="rounded-2xl border border-bone-200 bg-white px-5 py-4">
      <h2 className="text-lg font-semibold tracking-tight text-bone-950">{row.applicant}</h2>
      <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-bone-500">Summary</p>
      {row.summary && (
        <p className="mt-2 text-sm leading-relaxed text-bone-700">{row.summary}</p>
      )}
      {row.link && (
        <p className="mt-4 text-sm text-bone-700">
          <a href={row.link} className="font-medium text-brand-700 hover:underline" target="_blank" rel="noreferrer">Full application</a>
        </p>
      )}
    </article>
  )
}

export function Tracker() {
  const location = useLocation()
  const [objective, setObjective] = useState<string | null>(null)
  const [objectiveOpen, setObjectiveOpen] = useState(false)
  const [selectedKey, setSelectedKey] = useState<string | null>(null)
  const objectiveMenu = useRef<HTMLDivElement>(null)
  const visibleRows = objective ? trackerRows.filter((row) => row.objective === objective) : trackerRows
  const passedRows = objective ? visibleRows.filter((row) => row.submissionCheck === true) : []
  const selectedRow = !objective && selectedKey
    ? trackerRows.find((row) => row.submissionCheck === true && rowKey(row) === selectedKey)
    : undefined

  useEffect(() => {
    const stamp = (location.state as { allObjectives?: number } | null)?.allObjectives
    if (!stamp) return
    setObjective(null)
    setSelectedKey(null)
    setObjectiveOpen(false)
  }, [location.state])

  useEffect(() => {
    if (!objectiveOpen) return
    function close(event: MouseEvent) {
      if (!objectiveMenu.current?.contains(event.target as Node)) setObjectiveOpen(false)
    }
    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') setObjectiveOpen(false)
    }
    document.addEventListener('mousedown', close)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', close)
      document.removeEventListener('keydown', onKey)
    }
  }, [objectiveOpen])

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight text-bone-950">Applicants</h1>

      <div className="space-y-3">
          <div className="relative" ref={objectiveMenu}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-3 rounded-lg border-2 border-moss-800 bg-moss-100 px-4 py-2.5 text-left text-sm text-moss-900 transition hover:bg-moss-200"
              aria-expanded={objectiveOpen}
              onClick={() => setObjectiveOpen((open) => !open)}
            >
              {objective ? (
                <span className="flex min-w-0 items-baseline gap-2">
                  <span className="shrink-0 font-semibold">{objective}</span>
                  <span className="truncate">{objectiveTitle(objective)}</span>
                </span>
              ) : (
                <span className="font-semibold">All objectives</span>
              )}
              <svg
                viewBox="0 0 20 20"
                aria-hidden="true"
                className={`h-5 w-5 shrink-0 text-moss-800 transition duration-200 ${objectiveOpen ? 'rotate-180' : ''}`}
              >
                <path fill="currentColor" d="M5.2 7.4a1 1 0 0 1 1.4 0L10 10.8l3.4-3.4a1 1 0 1 1 1.4 1.4l-4.1 4.1a1 1 0 0 1-1.4 0L5.2 8.8a1 1 0 0 1 0-1.4Z" />
              </svg>
            </button>
            <div className={`absolute left-0 right-0 z-20 mt-1.5 origin-top overflow-hidden rounded-xl border-2 border-moss-800 bg-moss-50 py-1 shadow-lg transition duration-200 ${objectiveOpen ? 'translate-y-0 scale-100 opacity-100' : 'pointer-events-none -translate-y-1 scale-95 opacity-0'}`}>
              <button
                type="button"
                className={`block w-full whitespace-nowrap px-4 py-2.5 text-left text-sm transition hover:bg-moss-200 ${objective === null ? 'bg-moss-500 font-medium text-moss-950' : 'text-moss-900'}`}
                onClick={() => { setObjective(null); setSelectedKey(null); setObjectiveOpen(false) }}
              >
                All objectives
              </button>
              {objectives.map((item) => (
                <button
                  key={item}
                  type="button"
                  className={`flex w-full items-baseline gap-2 whitespace-nowrap px-4 py-2.5 text-left text-sm transition hover:bg-moss-200 ${objective === item ? 'bg-moss-500 font-medium text-moss-950' : 'text-moss-900'}`}
                  onClick={() => { setObjective(item); setSelectedKey(null); setObjectiveOpen(false) }}
                >
                  <span className="w-4 shrink-0 font-semibold">{item}</span>
                  <span className="min-w-0 truncate">{objectiveTitle(item)}</span>
                </button>
              ))}
            </div>
          </div>

          {selectedRow ? (
            <div key={selectedKey} className="summary-in">
              <button
                type="button"
                className="text-sm font-medium text-brand-700 hover:underline"
                onClick={() => setSelectedKey(null)}
              >
                Back
              </button>
              <div className="mt-4">
                <SummaryCard row={selectedRow} />
              </div>
            </div>
          ) : (
          <section className="rounded-2xl border border-bone-200 bg-white">
        {tracker.length === 0 ? (
          <p className="px-5 py-10 text-center text-sm text-bone-400">No entries yet</p>
        ) : (
          <div className="overflow-x-auto px-1 py-2">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead>
                <tr className="border-b border-bone-100 text-[11px] font-semibold uppercase tracking-wider text-bone-400">
                  {['Applicant', 'Round', 'Objective', 'Amount', 'Submission check', 'Next step'].map((col) => (
                    <th key={col} className={`whitespace-nowrap px-5 py-3 font-semibold ${col === 'Round' || col === 'Objective' || col === 'Submission check' ? 'text-center' : ''}`}>{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {visibleRows.length === 0 && (
                  <tr>
                    <td colSpan={6} className="px-5 py-10 text-center text-sm text-bone-400">No entries for this objective</td>
                  </tr>
                )}
                {visibleRows.map((row) => {
                  const hoverable = objective === null && row.submissionCheck === true
                  const lift = hoverable ? 'bg-white transition duration-150 group-hover:-translate-y-1' : ''
                  return (
                    <tr
                      key={rowKey(row)}
                      className={`border-b border-bone-100 last:border-b-0 align-top ${hoverable ? 'group cursor-pointer hover:drop-shadow-md' : ''}`}
                      onClick={hoverable ? () => setSelectedKey(rowKey(row)) : undefined}
                    >
                      <td className={`px-5 py-3.5 font-medium ${lift}`}>
                        {row.link ? (
                          <a
                            href={row.link}
                            className="text-brand-700 hover:underline"
                            target="_blank"
                            rel="noreferrer"
                            onClick={(event) => event.stopPropagation()}
                          >
                            {row.applicant}
                          </a>
                        ) : (
                          <span className="text-bone-950">{row.applicant}</span>
                        )}
                      </td>
                      <td className={`px-5 py-3.5 text-center text-bone-600 ${lift}`}>{row.round}</td>
                      <td className={`px-5 py-3.5 text-center text-bone-600 ${lift}`}>{row.objective}</td>
                      <td className={`px-5 py-3.5 tabular-nums text-bone-950 ${lift}`}>{row.amount}</td>
                      <td className={`px-5 py-3.5 text-center ${lift}`}>{checkMark(row.submissionCheck)}</td>
                      <td className={`px-5 py-3.5 text-bone-600 ${lift}`}>{row.nextStep}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )}
          </section>
          )}
      </div>

      {passedRows.length > 0 && (
        <div key={objective} className="summary-in space-y-4">
          {passedRows.map((row) => (
            <SummaryCard key={rowKey(row)} row={row} />
          ))}
        </div>
      )}
    </div>
  )
}
