export interface TimelineRow {
  label: string
  date: string
  /** Drawn as a light yellow callout on the timeline. */
  highlight?: boolean
}

/** Timeline block from the public tracker sheet. Edit here, then rebuild. */
export const timeline: TimelineRow[] = [
  { label: 'Submission deadline', date: 'October 9th' },
  { label: 'Submission Review', date: 'October 16th' },
  { label: 'Open Discussion & Pitch Day', date: 'October 19th–October 30th' },
  { label: 'DAO Vote - Round 1', date: 'November 2nd' },
  { label: 'Initial Payments', date: 'November 9th' },
  { label: 'Round 2 launch', date: 'November 16th', highlight: true },
  { label: 'Delivery deadline', date: 'December 21st' },
  { label: 'DAO Vote - Round 2', date: 'January 8th' },
  { label: 'Final Payments', date: 'January 15th' },
]
