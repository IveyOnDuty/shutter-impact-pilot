export interface TimelineRow {
  label: string
  date: string
  /** Drawn as a light yellow callout on the timeline. */
  highlight?: boolean
}

/** Timeline block from the public tracker sheet. Edit here, then rebuild. */
export const timeline: TimelineRow[] = [
  { label: 'Submission deadline', date: 'October 9th' },
  { label: 'DAO Vote - Round 1', date: 'October 12th' },
  { label: 'Round 2 launch', date: 'October 15th', highlight: true },
  { label: 'Delivery deadline', date: 'November 30th' },
  { label: 'DAO Vote - Round 2', date: 'December 7th' },
  { label: 'Final Payments', date: 'December 15th' },
]
