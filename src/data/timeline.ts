export interface TimelineRow {
  label: string
  date: string
  /** Drawn as a light yellow callout on the timeline. */
  highlight?: boolean
}

/** Timeline block from the public tracker sheet. Edit here, then rebuild. */
export const timeline: TimelineRow[] = [
  { label: 'Submission deadline', date: 'October 9th' },
  { label: 'Submission Review', date: 'October 10th–October 16th' },
  { label: 'DAO Vote - Round 1', date: 'October 19th' },
  { label: 'Round 2 launch', date: 'October 22nd', highlight: true },
  { label: 'Delivery deadline', date: 'December 7th' },
  { label: 'DAO Vote - Round 2', date: 'December 14th' },
  { label: 'Final Payments', date: 'December 22nd' },
]
