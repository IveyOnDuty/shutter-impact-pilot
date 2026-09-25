/**
 * Financials from the public tracker sheet.
 * `null` on earmarked is the sheet's X$ placeholder: the page shows "Not set".
 * Remainder is total pool minus earmarked (an unset earmarked counts as 0).
 */
export const financials = {
  totalPool: 14000,
  round1Pool: 7000,
  round2Pool: 7000,
  earmarked: null as number | null,
}
