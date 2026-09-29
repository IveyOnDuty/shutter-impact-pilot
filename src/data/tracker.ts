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

/** One object per application. Add a new block below; do not replace an existing row. */
export const tracker: TrackerEntry[] = [
  {
    applicant: 'Alexsotodigital.eth',
    round: '1',
    objective: '6',
    link: 'https://shutternetwork.discourse.group/t/shutter-dao-0x36-impact-pilot-program-round-1-proactive-grant-shutter-pen-membership-challenge/952?u=seedgov',
    amount: '$2,500',
    submissionCheck: true,
    nextStep: 'DAO Vote',
  },
  {
    applicant: 'franklincg',
    round: '1',
    objective: '6',
    link: 'https://shutternetwork.discourse.group/t/shutter-dao-0x36-impact-pilot-round-1-proactive-grant-pen-roundops/958?u=seedgov',
    amount: '$3,000',
    submissionCheck: 'tbd',
    nextStep: 'Submission Check',
  },
  {
    applicant: 'Crezno',
    round: '1',
    objective: '6',
    link: 'https://shutternetwork.discourse.group/t/shutter-dao-0x36-impact-pilot-program-round-1-proactive-grant-pen-ownership-chain-verification-and-deployment-runbook/964?u=seedgov',
    amount: '$2,000',
    submissionCheck: 'tbd',
    nextStep: 'Submission Check',
  },
]
