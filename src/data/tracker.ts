export interface TrackerEntry {
  applicant: string
  round: string
  objective: string
  /** Application URL. Shown on the applicant name. Leave empty if none yet. */
  link: string
  amount: string
  /** true shows a green tick in the tracker. */
  submissionCheck: boolean
  nextStep: string
}
export const tracker: TrackerEntry[] = [
  {
    applicant: 'Alex.eth',
    round: '1',
    objective: '6',
    link: 'https://shutternetwork.discourse.group/t/shutter-dao-0x36-impact-pilot-program-round-1-proactive-grant-shutter-pen-membership-challenge/952?u=seedgov',
    amount: '$2,500',
    submissionCheck: true,
    nextStep: 'DAO Vote',
  },
]
