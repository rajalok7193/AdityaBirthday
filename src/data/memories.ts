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
  m(0, 1, 'Caption for photo 1', 'wide'), m(0, 2, 'Caption for photo 2'),
  m(1, 3, 'Caption for photo 3'), m(1, 4, 'Caption for photo 4', 'tall'),
  m(2, 5, 'Caption for photo 5'), m(2, 6, 'Caption for photo 6', 'wide'),
  m(3, 7, 'Caption for photo 7', 'wide'), m(3, 8, 'Caption for photo 8'),
  m(4, 9, 'Caption for photo 9', 'tall'), m(4, 10, 'Caption for photo 10'),
]
export const timeline = [
  { year: 'Year One', date: '[add dates]', story: 'Placeholder — write the story of how it began.', joke: '', quote: '' },
  { year: 'Year Two', date: '[add dates]', story: 'Placeholder — a memory from this year.', joke: '', quote: '' },
  { year: 'Year Three', date: '[add dates]', story: 'Placeholder — a memory from this year.', joke: '', quote: '' },
  { year: 'Year Four', date: '[add dates]', story: 'Placeholder — a memory from this year.', joke: '', quote: '' },
].map((t, i) => ({ ...t, photo: `images/memory-${String(i + 1).padStart(2, '0')}.jpg` }))
export const jokes = [
  'The Plan That Was Never Really a Plan', 'One More Night Out', 'Flatmate Logic',
  'The Sea Adventure Files', 'Stories Best Left Between Us',
].map(t => ({ title: t, text: 'Replace with the real inside joke.' }))
export const letter = [
  'Happy birthday, brother.',
  'It’s crazy how four years can be filled with so many stories — the nights out, the random plans, the sea adventures, the laughs, and all those ordinary moments that somehow became unforgettable.',
  'We might not always be in the same place or doing the same things, but the memories we’ve made will always have their own place in my life. I’m grateful for the friendship, the madness, and the kind of bond that doesn’t need a special occasion to matter.',
  'I hope this next year brings you happiness, success, great adventures, and plenty of reasons to laugh. May life give us many more stories to look back on and say, “Remember when we did that?”',
  'Happy birthday, Aditya. Four years down, a lifetime of memories to go.',
]
export const brotherhood = [
  'Some people start as flatmates and somehow become family.',
  'Four years later, what I remember most isn’t just the places we’ve been or the nights we’ve spent out.',
  'It’s the random plans, the ridiculous laughter, the stories that make sense to nobody else — and the way an ordinary day could turn into a memory worth keeping.',
  'We’ve had our share of chaos, unforgettable adventures, and moments that will always be ours.',
  'Here’s to everything we’ve lived through, everything we’ve learned, and all the madness still waiting for us.',
  'Happy birthday, brother. Four years down, a lifetime of stories to go.',
]
