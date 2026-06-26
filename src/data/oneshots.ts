export interface OneShotNPC {
  name: string;
  role: string;
  description: string;
  image?: string;
  isHostile?: boolean;
}

export interface OneShotData {
  slug: string;
  title: string;
  tagline: string;
  synopsis: string;
  npcs: OneShotNPC[];
}

export const oneShots: OneShotData[] = [
  {
    slug: 'battle-royale',
    title: 'Battle Royale',
    tagline: 'Every hero. One arena. No mercy.',
    synopsis: 'Synopsis coming soon.',
    npcs: [],
  },
  {
    slug: 'the-heist',
    title: 'The Heist',
    tagline: 'The plan was simple. It never is.',
    synopsis: 'Synopsis coming soon.',
    npcs: [],
  },
  {
    slug: 'healers-grief',
    title: "The Healer's Grief",
    tagline: 'Even the hands that mend can break.',
    synopsis: 'Synopsis coming soon.',
    npcs: [],
  },
  {
    slug: 'cobalt-trials',
    title: 'The Cobalt Trials',
    tagline: 'Only the worthy survive the blue flame.',
    synopsis: 'Synopsis coming soon.',
    npcs: [],
  },
];
