// ===== EDIT ME: everything personal lives in birthdayConfig.ts and memories.ts =====
export const config = {
  name: 'Aditya',
  fullName: 'Aditya Kashyap',
  // Explicit offset = 00:00 IST = 18:30 UTC on 23 Oct 2026, regardless of visitor's timezone.
  targetISO: '2026-10-24T00:00:00+05:30',
  soundtrack: { src: 'audio/soundtrack.mp3', title: 'Your licensed indie track (edit title)' },
  signature: 'Always your brother in this madness.',
  fromName: '— [Alok Raj]',
  shareTeaser: 'Something special is waiting for Aditya. Four years, countless stories.',
}
// Test without waiting: open /?now=2026-10-23T18:29:50Z  (fake "current time", keeps ticking)
export function getClockOffset(): number {
  const q = new URLSearchParams(location.search).get('now')
  const t = q ? Date.parse(q) : NaN
  return isNaN(t) ? 0 : t - Date.now()
}
export const targetMs = Date.parse(config.targetISO)
