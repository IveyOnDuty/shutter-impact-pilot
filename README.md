# Shutter Impact Pilot

Public tracker for the Shutter DAO 0x36 Impact Pilot. Static Vite site. Numbers change by editing TypeScript and rebuilding.

## Run

```bash
npm install
npm run dev
```

`npm run build` typechecks and writes `dist/`.

## Edit figures

- `src/data/overview.ts` — dates, pool, design / admin
- `src/data/timeline.ts` — milestone rows
- `src/data/financials.ts` — pool splits. `null` displays as “Not set” (the sheet’s X$ placeholder)
- `src/data/tracker.ts` — one object per applicant. Leave the array empty until there is a real submission

Program copy lives in `src/pages/Program.tsx`.
