export interface TrackerEntry {
  applicant: string
  round: string
  objective: string
  /** Application URL. Shown on the applicant name. Leave empty if none yet. */
  link: string
  amount: string
  /** true shows a green tick, 'tbd' a clock (under review), false a dash. */
  submissionCheck: boolean | 'tbd'
  nextStep: string
}

export const tracker: TrackerEntry[] = [
  {
    applicant: 'franklincg',
    round: '1',
    objective: '6',
    link: 'https://shutternetwork.discourse.group/t/shutter-dao-0x36-impact-pilot-round-1-proactive-grant-pen-roundops/958?u=seedgov',
    amount: '$3,000',
    submissionCheck: 'tbd',
    nextStep: 'Submission Check',
  },
]
