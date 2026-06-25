export type ItemRarity = 'Common' | 'Uncommon' | 'Rare' | 'Very Rare' | 'Legendary' | 'Unknown';
export type ItemStatus = 'active' | 'consumed' | 'lost' | 'unknown';

export interface InventoryItem {
  name: string;
  type: string;
  rarity: ItemRarity;
  description: string;
  holder: string;
  status: ItemStatus;
  icon?: string;
  notes?: string;
  dndBeyondUrl?: string;
}

export interface MysteriousItem {
  name: string;
  description: string;
  holder?: string;
  notes?: string;
  icon?: string;
}

export interface GeneralItem {
  name: string;
  quantity: string;
  holder: string;
  notes?: string;
  icon?: string;
}

export const partyGold = 0; // update with current party gold

export const magicItems: InventoryItem[] = [
  {
    name: 'Cloak of Arachnida',
    type: 'Wondrous Item',
    rarity: 'Very Rare',
    description: 'Grants the ability to move along vertical surfaces and ceilings, and to cast Web once per day.',
    holder: 'Thalara',
    status: 'active',
    icon: '🕷',
    dndBeyondUrl: 'https://www.dndbeyond.com/magic-items/4604-cloak-of-arachnida',
  },
  {
    name: 'Wand of Fireballs',
    type: 'Wand',
    rarity: 'Rare',
    description: 'Contains charges that can be expended to cast Fireball.',
    holder: 'Mephiston',
    status: 'active',
    icon: '🔥',
    dndBeyondUrl: 'https://www.dndbeyond.com/magic-items/4791-wand-of-fireballs',
  },
  {
    name: 'Luck Blade',
    type: 'Weapon (Longsword)',
    rarity: 'Legendary',
    description: 'Grants a luck bonus and can be used to cast Wish once. Handle with care.',
    holder: 'Malakith',
    status: 'active',
    icon: '⚔',
    dndBeyondUrl: 'https://www.dndbeyond.com/magic-items/5393-luck-blade',
  },
  {
    name: 'Ring of Regeneration',
    type: 'Ring',
    rarity: 'Very Rare',
    description: 'Slowly regenerates hit points over time while attuned.',
    holder: 'Unassigned',
    status: 'active',
    icon: '💍',
    dndBeyondUrl: 'https://www.dndbeyond.com/magic-items/4727-ring-of-regeneration',
  },
  {
    name: 'Mace of Disruption',
    type: 'Weapon (Mace)',
    rarity: 'Rare',
    description: 'Deals radiant damage and can destroy undead outright on a low saving throw.',
    holder: 'Unassigned',
    status: 'active',
    icon: '🔨',
    dndBeyondUrl: 'https://www.dndbeyond.com/magic-items/4670-mace-of-disruption',
  },
  {
    name: 'Bracers of Defence',
    type: 'Wondrous Item',
    rarity: 'Rare',
    description: '+2 AC while wearing no armour and no shield.',
    holder: 'Unassigned',
    status: 'active',
    icon: '🛡',
    dndBeyondUrl: 'https://www.dndbeyond.com/magic-items/4594-bracers-of-defense',
  },
  {
    name: 'Rope of Entanglement',
    type: 'Wondrous Item',
    rarity: 'Rare',
    description: 'On command, animates and restrains a target. Up to 30ft long.',
    holder: 'Unassigned',
    status: 'active',
    icon: '🪢',
    dndBeyondUrl: 'https://www.dndbeyond.com/magic-items/4750-rope-of-entanglement',
  },
  {
    name: 'Necklace of Adaptation',
    type: 'Wondrous Item',
    rarity: 'Uncommon',
    description: 'Allows the wearer to breathe in any environment, including underwater.',
    holder: 'Unassigned',
    status: 'active',
    icon: '📿',
    dndBeyondUrl: 'https://www.dndbeyond.com/magic-items/4682-necklace-of-adaptation',
  },
  {
    name: 'Ring of Water Walking',
    type: 'Ring',
    rarity: 'Uncommon',
    description: 'Allows the wearer to stand on and walk across any liquid surface.',
    holder: 'Unassigned',
    status: 'active',
    icon: '💍',
    dndBeyondUrl: 'https://www.dndbeyond.com/magic-items/4737-ring-of-water-walking',
  },
  {
    name: 'Ring of Protection',
    type: 'Ring',
    rarity: 'Rare',
    description: '+1 bonus to AC and saving throws while attuned.',
    holder: 'Unassigned',
    status: 'active',
    icon: '💍',
    dndBeyondUrl: 'https://www.dndbeyond.com/magic-items/4726-ring-of-protection',
  },
  {
    name: 'Nature Mantle',
    type: 'Wondrous Item',
    rarity: 'Uncommon',
    description: 'A cloak woven with natural magic. Exact properties to be confirmed.',
    holder: 'Unassigned',
    status: 'active',
    icon: '🌿',
  },
  {
    name: 'Pearls of Power',
    type: 'Wondrous Item',
    rarity: 'Uncommon',
    description: 'Once per day, recover a used spell slot.',
    holder: 'Unassigned',
    status: 'active',
    notes: 'x2',
    icon: '🔮',
    dndBeyondUrl: 'https://www.dndbeyond.com/magic-items/4691-pearl-of-power',
  },
  {
    name: 'Stone of Good Luck',
    type: 'Wondrous Item',
    rarity: 'Uncommon',
    description: '+1 bonus to ability checks and saving throws while carried.',
    holder: 'Unassigned',
    status: 'active',
    icon: '🪨',
    dndBeyondUrl: 'https://www.dndbeyond.com/magic-items/4773-stone-of-good-luck-luckstone',
  },
  {
    name: 'Ring of Intelligence',
    type: 'Ring',
    rarity: 'Rare',
    description: 'Sets or increases the wearer\'s Intelligence score while attuned.',
    holder: 'Unassigned',
    status: 'active',
    icon: '💍',
  },
  {
    name: 'Night Onyx',
    type: 'Wondrous Item',
    rarity: 'Unknown',
    description: 'A dark gemstone tied off from other dark forces by a wizard in Donnel. Connected to Dakkar, a northern dwarf, and a shield from the Molten Peaks.',
    holder: 'Party (Bag of Holding)',
    status: 'active',
    notes: 'Do not attune without further research.',
    icon: '🖤',
  },
  {
    name: 'Tome of Wisdom',
    type: 'Wondrous Item',
    rarity: 'Very Rare',
    description: 'Permanently increases Wisdom by +2.',
    holder: '—',
    status: 'consumed',
    notes: 'Already read. Effect applied.',
    icon: '📖',
    dndBeyondUrl: 'https://www.dndbeyond.com/magic-items/4783-tome-of-understanding',
  },
];

export const mysteriousItems: MysteriousItem[] = [
  {
    name: 'Raven Feather',
    description: 'Morg and Keith touched it — eyes went black, cocooned in feathers, pulled into a shadow realm. The Raven Queen is involved.',
    holder: 'Morg & Keith (shadow realm)',
    icon: '🪶',
  },
  {
    name: 'Pirate Coin',
    description: 'Lucian took it. His eyes turned red and a voice said: "Embrace the power bestowed upon you, Lomerian." He recovered after a minute.',
    holder: 'Lucian',
    notes: 'Connected to the name "Lomerian".',
    icon: '🪙',
  },
  {
    name: 'Envelope',
    description: 'A sealed envelope from Theodas\' treasure room. Contents unknown.',
    holder: 'Unassigned',
    icon: '✉',
  },
  {
    name: 'Small Shield',
    description: 'A miniature shield recovered from the treasure room. Significance unknown.',
    holder: 'Unassigned',
    icon: '🛡',
  },
  {
    name: 'Hairpin',
    description: 'An ornate hairpin from the treasure room. Significance unknown.',
    holder: 'Unassigned',
    icon: '📌',
  },
  {
    name: 'Mushroom',
    description: 'A preserved mushroom. Magical or medicinal properties unknown.',
    holder: 'Unassigned',
    icon: '🍄',
  },
  {
    name: 'Bottle',
    description: 'A sealed bottle from the treasure room. Contents unknown.',
    holder: 'Unassigned',
    icon: '🍾',
  },
  {
    name: 'Tree Sample',
    description: 'A cutting from an unidentified tree. Origin and purpose unknown.',
    holder: 'Unassigned',
    icon: '🌿',
  },
  {
    name: 'Crest',
    description: 'A heraldic crest of unknown house or faction.',
    holder: 'Unassigned',
    icon: '⚜',
  },
  {
    name: 'Leatherbound Book',
    description: 'A leatherbound tome from the treasure room. Contents unread.',
    holder: 'Unassigned',
    icon: '📕',
  },
  {
    name: 'Moving Eye',
    description: 'An eye that moves on its own. Origin and purpose entirely unknown.',
    holder: 'Unassigned',
    icon: '👁',
  },
  {
    name: 'Magic Painting',
    description: 'A painting with magical properties. The nature of the magic is currently unknown.',
    holder: 'Party (Bag of Holding)',
    icon: '🖼',
  },
];

export const generalItems: GeneralItem[] = [
  { name: 'Healing Potion',       quantity: '?',  holder: 'Unassigned', icon: '🧪' },
  { name: 'Greater Healing Potion', quantity: '?', holder: 'Unassigned', icon: '🧪' },
  { name: 'Rope (50ft)',          quantity: '?',  holder: 'Unassigned', icon: '🪢' },
  { name: 'Torch',               quantity: '?',  holder: 'Unassigned', icon: '🔦' },
  { name: 'Rations (days)',      quantity: '?',  holder: 'Unassigned', icon: '🎒' },
  { name: 'Thieves\' Tools',     quantity: '?',  holder: 'Unassigned', icon: '🔑' },
  { name: 'Tinderbox',           quantity: '?',  holder: 'Unassigned', icon: '📦' },
  { name: 'Crowbar',             quantity: '?',  holder: 'Unassigned', icon: '🔧' },
  { name: 'Grappling Hook',      quantity: '?',  holder: 'Unassigned', icon: '⚓' },
  { name: 'Antitoxin',          quantity: '?',  holder: 'Unassigned', icon: '💊' },
  { name: 'Scroll of Dispel Magic', quantity: '1', holder: 'Unassigned', notes: 'Given by Crowley as good faith.', icon: '📜' },
  { name: 'Gunpowder',          quantity: '1lb', holder: 'Party (Bag of Holding)', notes: 'Excluded from Tiberick\'s Arcane Express routes.', icon: '💣' },
  { name: 'Holy Water',         quantity: '1',  holder: 'Party (Bag of Holding)', icon: '🫙' },
  { name: 'Mead (Very Nice)',   quantity: '3',  holder: 'Party (Bag of Holding)', icon: '🍺' },
  { name: 'Sea Serpent Scales', quantity: '17', holder: 'Party (Bag of Holding)', icon: '🐍' },
  { name: 'Regal Clothes',      quantity: '1 set', holder: 'Party (Bag of Holding)', icon: '👑' },
];
