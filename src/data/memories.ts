export type Memory = { chapter: number; src: string; alt: string; caption: string; date?: string; size?: 'wide' | 'tall' | '' }
export const chapters = [
  { title: 'The Night-Out Chronicles', blurb: 'Late nights, spontaneous plans, and what happened after dark.' },
  { title: 'Flatmates, Roommates & Absolute Chaos', blurb: 'Ordinary days that turned into the best ones.' },
  { title: 'Drinks, Laughs & No Regrets', blurb: 'Good company, better stories.' },
  { title: 'Lost Between the Waves', blurb: 'Sea, sand and salt-water stories.' },
  { title: 'The Moments That Made Us', blurb: 'The candid ones that say it all.' },
]
// Drop photos in public/images/ and edit below. Missing files show a labelled placeholder.
// Keep 6-15 items. Captions/dates optional — leave date out if unsure.
const m = (chapter: number, n: number, caption: string, size: Memory['size'] = ''): Memory =>
  ({ chapter, src: `images/memory-${String(n).padStart(2, '0')}.jpg`, alt: `Photo ${n}: ${caption}`, caption, size })
export const memories: Memory[] = [
  m(0, 1, 'Our Bakchodi in office', 'wide'), m(0, 2, 'Choli ke pichhe kya h?'),
  m(1, 3, 'O bhai o kya maal h...!'), m(1, 4, 'Bhai tu kab Haldi lagwa rha h?', 'tall'),
  m(2, 5, 'Bhai hum log kya Alian lag rhe h'), m(2, 6, 'I think this is our fist clubbing', 'wide'),
  m(3, 7, 'Devil Aditya!', 'wide'), m(3, 8, 'Caption khud soch le'),
  m(4, 9, 'o bhai kya Smile teri?', 'tall'), m(4, 10, '2 rupye ki papsi apna bhai sexy!!'),
]
export const timeline = [
  { year: 'Year One', date: '[Oct 2023]', story: 'Our first year durga puja pandal hopping.', joke: '', quote: '' },
  { year: 'Year Two', date: '[Nov 2024]', story: 'Chandan Bhai ki sadi me Shapooji gang', joke: '', quote: '' },
  { year: 'Year Three', date: '[March 2025]', story: 'Finding perfect bra for Brother. ', joke: '', quote: '' },
  { year: 'Year Four', date: '[April 2026]', story: 'Laundiabazi in After party', joke: '', quote: '' },
].map((t, i) => ({ ...t, photo: `images/memory-${String(i + 1).padStart(2, '0')}.jpg` }))
export const jokes = [
  'The Plan That Was Never Really a Plan', 'One More Night Out', 'Flatmate Logic',
  'The Bokhali Sea Adventure ', 'Stories Best Left Between Us',
].map(t => ({ title: t, text: 'Replace with the real inside joke.' }))
export const letter = [
  'Happy birthday, brother.',
  'It’s crazy how four years can be filled with so many stories — the nights out, the random plans, the sea adventures, the laughs, and all those ordinary moments that somehow became unforgettable.',
  'We might not always be in the same place or doing the same things, but the memories we’ve made will always have their own place in my life. I’m grateful for the friendship, the madness, and the kind of bond that doesn’t need a special occasion to matter.',
  'I hope this next year brings you happiness, success, great adventures, and plenty of reasons to laugh. May life give us many more stories to look back on and say, “Remember when we did that?”',
  'Happy birthday, Aditya. Four years down, a lifetime of memories to go.',
]
export const brotherhood = [
  'Some people start as colleague and somehow become family.',
  'Four years later, what I remember most isn’t just the places we’ve been or the nights we’ve spent out.',
  'It’s the random plans, the ridiculous laughter, the stories that make sense to nobody else — and the way an ordinary day could turn into a memory worth keeping.',
  'We’ve had our share of chaos, unforgettable adventures, and moments that will always be ours.',
  'Here’s to everything we’ve lived through, everything we’ve learned, and all the madness still waiting for us.',
  'Happy birthday, brother. Four years down, a lifetime of stories to go.',
]
