import type { ReactNode } from 'react'

const OBJECTIVES: { title: string; points: string[]; links?: string[]; dont?: string }[] = [
  {
    title: 'Objective 1: Qualify an Encrypted-Transaction Deployment Opportunity',
    points: [
      'The encrypted mempool encrypts transactions until they are included in a block, so nobody can read or exploit them while they wait in a public mempool.',
      'Identify and qualify a concrete opportunity to integrate Shutter’s encrypted mempool with a wallet, dApp, RPC provider, routing service, chain, validator ecosystem, or other transaction-flow operator.',
      'Deliver a scoped assessment, pilot proposal, or feasibility test tied to a named operator (or a substantiated route to one), a defined transaction flow, and a stated next decision.',
    ],
    dont: 'Generic outreach, contact lists, and generic explainers do not qualify.',
    links: ['Shutter Encrypted mempools', 'Github'],
  },
  {
    title: 'Objective 2: Qualify a Private Voting Deployment',
    points: [
      'For DAOs, ballots stay encrypted while the vote runs, so voters cannot be pressured, bought, or bandwagoned. Results are revealed when the vote closes, or ballots stay secret with only the result published.',
      'For real-world voting, associations, municipalities, and other organizations use Shutter Governance to run private and verifiable elections.',
      'Identify and qualify a concrete opportunity for an existing voting platform to integrate Shutter’s private voting solution.',
      'Deliver a pilot proposal tied to a named platform or body, what they would pay (an integration fee or transaction revenue), and a stated next decision.',
    ],
    dont: 'Generic advocacy or unsupported interest does not qualify.',
    links: [
      'Coming Soon to DAOs: Permanent Shielded Voting via Homomorphic Encryption',
      'Introducing Shutter Governance',
    ],
  },
  {
    title: 'Objective 3: Identify and Validate a Concorde Use Case',
    points: [
      'Concorde lets a group operate with a shared AI agent that works for the whole group: collecting input, keeping shared history, coordinating recurring work, and tracking decisions.',
      'Identify and validate a high-value, repeatable use case and customer segment where a Concorde shared agent could provide meaningful value and generate revenue.',
      'Deliver a decision-ready assessment based on real user or customer evidence: the problem, current workflow, required Concorde capabilities, commercial or adoption path, and a route to a first pilot.',
    ],
    dont: 'Generic market research, lists of possible industries, unsupported use-case ideas, and generic outreach do not qualify.',
    links: ['Concorde Shared Agent Launcher', 'Concorde: A Framework for Shared Agents'],
  },
  {
    title: 'Objective 4: Validate a Shutter Use Case in Tokenized Markets',
    points: [
      'Tokenized markets bring stocks, funds, credit, and other assets on chain. Shutter may help where revealing orders, allocations, or terms too early creates avoidable execution or coordination risk.',
      'Test a defined use case in tokenized equities, funds, credit, or other real-world-asset workflows: information leakage, allocation fairness, confidential coordination, sealed bidding, or timed disclosure.',
      'Identify the operator, workflow, constraints, and next decision.',
    ],
    dont: 'Generic market reports and speculative “RWA + privacy” concepts do not qualify.',
  },
  {
    title: 'Objective 5: Package a Repeatable Shutter Workflow',
    points: [
      'Turn an existing Shutter capability into a reusable workflow for a defined user, operator, or customer segment — for example sealed RFPs, selection processes, procurement, auctions, bug bounties, confidential coordination, or timed disclosure.',
      'Deliver a productized design, a customer- or partner-informed pilot package, or a reusable implementation guide.',
    ],
    dont: 'Generic demos and unmaintained tooling do not qualify.',
  },
  {
    title: 'Objective 6: Advance Shutter PEN Adoption, Operations, and Funding Readiness',
    points: [
      'Strengthen Shutter PEN as a long-term, mission-aligned funding institution for Ethereum Cypherpunk Manifesto projects.',
      'Eligible work includes a reviewable PEN interface, governance, security, operational, or funding-round capability; a measured SEAT-holder onboarding or participation initiative; or an artifact that resolves a defined PEN design, legal, capital-stewardship, or coordination blocker.',
      'This objective does not require a commercial-revenue pathway.',
    ],
    dont: 'Generic advocacy, broad explainers, and unscoped campaigns do not qualify.',
  },
  {
    title: 'Objective 7: Advance a High-Conviction Shutter Opportunity Outside the Defined Tracks',
    points: [
      'Use this exception track only for a concrete Shutter-related opportunity that does not fit Objectives 1–6.',
      'Explain why it does not fit, identify who needs to be involved, define the deliverable, and show the resulting decision, implementation step, or durable capability.',
      'The same evidence, milestone, disclosure, and demonstrated-value standards apply.',
      'Awards require specific DAO approval and may not use funds reserved for Objectives 1–6 unless the DAO separately approves it.',
    ],
  },
]

const REQUIREMENTS = [
  'A named decision-maker, operating owner, funder, partner, or beneficiary group — or a substantiated route to identify that counterpart.',
  'A concrete problem and a credible rationale for addressing it, including budget, willingness to pay, partner funding, adoption value, risk reduction, or durable ecosystem benefit where applicable.',
  'The Shutter product, service, deployment, or capability the contribution advances.',
  'A concrete deliverable that will exist at the end of the grant period.',
  'A proportionate milestone that the DAO can review before the second 50% payment.',
  'Public or reviewable evidence, such as a scoped proposal, repository, deployment, documentation, transaction records, test results, partner-approved artifact, or other decision-ready material.',
  'Relevant prior compensation and conflicts. Work already covered by a bounty, grant, employment role, or other paid engagement must be disclosed. It is not eligible for duplicate payment unless the application identifies a distinct contribution outside that compensated scope.',
]

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="space-y-2">
      <h2 className="text-xs font-semibold text-bone-500 uppercase tracking-wider">{title}</h2>
      <div className="text-sm text-bone-700 space-y-2 leading-relaxed">{children}</div>
    </section>
  )
}

export function Program() {
  return (
    <div className="space-y-8 max-w-3xl">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight text-bone-950">Program objectives</h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-bone-700">
          The pilot tests whether a transparent, evidence-based process can identify, support, and retain contributors whose work creates verifiable value for Shutter. It is not compensation for a role, an idea, or activity alone.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xs font-semibold text-bone-500 uppercase tracking-wider">Round 1 objectives</h2>
        <ol className="space-y-3">
          {OBJECTIVES.map((objective) => (
            <li key={objective.title} className="rounded-2xl border border-bone-200 bg-white px-5 py-4">
              <h3 className="text-sm font-semibold text-bone-950">{objective.title}</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-bone-700">
                {objective.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
                {objective.links && (
                  <li>
                    Relevant links:
                    <ul className="mt-1 list-disc pl-5">
                      {objective.links.map((link) => (
                        <li key={link}>{link}</li>
                      ))}
                    </ul>
                  </li>
                )}
              </ul>
              {objective.dont && (
                <p className="mt-3 flex items-start gap-2 text-sm leading-relaxed text-bone-700">
                  <span className="mt-0.5 shrink-0 rounded bg-bone-950 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">Don't</span>
                  <span>{objective.dont}</span>
                </p>
              )}
            </li>
          ))}
        </ol>
      </section>

      <Block title="Common requirements for every Round 1 application">
        <ul className="list-disc space-y-1 pl-5">
          {REQUIREMENTS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Block>

      <Block title="What may be rewarded">
        <p>Open to any individual or organization that produces meaningful, verifiable value. Delegation or voting alone does not qualify. Ideas alone do not qualify unless they become a tangible contribution.</p>
        <p>Work already paid under a scoped bounty stays outside the pilot. A distinct contribution beyond that scope can be considered if the original bounty, its scope, and the extra work are disclosed. The pilot assesses only the extra contribution.</p>
      </Block>

      <Block title="Review">
        <p>Evidence, value, relevance, quality and leverage, and cost discipline. Conflicts of interest must be disclosed. Technical evidence can include a merged pull request, a verified contract, a transaction hash, documentation, or a reproducible on-chain outcome. The review looks at the contribution, not an artifact in isolation.</p>
      </Block>
    </div>
  )
}
