import { Link, useParams } from 'react-router-dom'
import { applicantSlug, tracker } from '../data/tracker'

const OBJECTIVE_TITLES: Record<string, string> = {
  '1': 'Qualify an Encrypted-Transaction Deployment Opportunity',
  '2': 'Qualify a Private Voting Deployment',
  '3': 'Identify and Validate a Concorde Use Case',
  '4': 'Validate a Shutter Use Case in Tokenized Markets',
  '5': 'Package a Repeatable Shutter Workflow',
  '6': 'Advance Shutter PEN Adoption, Operations, and Funding Readiness',
  '7': 'Advance a High-Conviction Shutter Opportunity Outside the Defined Tracks',
}

function objectiveLabel(objective: string) {
  const title = OBJECTIVE_TITLES[objective]
  return title ? `${objective}: ${title}` : objective
}

export function Applicant() {
  const { slug } = useParams()
  const row = tracker.find((entry) => entry.submissionCheck === true && applicantSlug(entry.applicant) === slug)

  if (!row) {
    return (
      <div className="max-w-3xl">
        <Link to="/applicants" className="text-sm font-medium text-brand-700 hover:underline">Back</Link>
        <p className="mt-6 text-sm text-bone-600">This applicant is not on the tracker.</p>
      </div>
    )
  }

  const facts = [
    { label: 'Round', value: row.round },
    { label: 'Objective', value: objectiveLabel(row.objective) },
    { label: 'Amount', value: row.amount },
  ]

  return (
    <div className="max-w-3xl">
      <Link to="/applicants" className="text-sm font-medium text-brand-700 hover:underline">Back</Link>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight text-bone-950">{row.applicant}</h1>
      <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-bone-500">Summary</p>
      {row.summary && (
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-bone-700">{row.summary}</p>
      )}
      <dl className="mt-6 overflow-hidden rounded-2xl border border-bone-200 bg-white">
        {facts.map((fact) => (
          <div key={fact.label} className="flex items-baseline justify-between gap-4 border-b border-bone-100 px-5 py-3.5 last:border-b-0">
            <dt className="text-sm text-bone-600">{fact.label}</dt>
            <dd className="max-w-[70%] text-right text-sm font-medium text-bone-950">{fact.value}</dd>
          </div>
        ))}
      </dl>
      {row.link && (
        <p className="mt-4 text-sm text-bone-700">
          <a href={row.link} className="font-medium text-brand-700 hover:underline" target="_blank" rel="noreferrer">Full application</a>
        </p>
      )}
    </div>
  )
}
