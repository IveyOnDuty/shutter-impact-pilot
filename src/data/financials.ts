/**
 * Financials from the public tracker sheet.
 * `null` is the sheet's X$ placeholder: the page shows "Not set".
 * Replace with a number (USD) when a figure is known, then rebuild.
 */
export const financials = {
  totalPool: 14000,
  round1Pool: 7000,
  round2Pool: 7000,
  earmarked: null as number | null,
  reminder: null as number | null,
}
