export type ItemRarity = 'Common' | 'Uncommon' | 'Rare' | 'Very Rare' | 'Legendary' | 'Unknown';
export type ItemStatus = 'active' | 'consumed' | 'lost' | 'unknown';

export interface InventoryItem {
  name: string;
  type: string;
  rarity: ItemRarity;
  description: string;
  holder?: string;
  status: ItemStatus;
  icon?: string;
  notes?: string;
}

export interface MysteriousItem {
  name: string;
  description: string;
  holder?: string;
  notes?: string;
  icon?: string;
}

export const magicItems: InventoryItem[] = [
  {
    name: 'Cloak of Arachnida',
    type: 'Wondrous Item',
    rarity: 'Very Rare',
    description: 'Grants the ability to move along vertical surfaces and ceilings, and to cast Web once per day.',
    status: 'active',
    icon: '🕷',
  },
  {
    name: 'Wand of Fireballs',
    type: 'Wand',
    rarity: 'Rare',
    description: 'Contains charges that can be expended to cast Fireball. A crowd favourite.',
    status: 'active',
    icon: '🔥',
  },
  {
    name: 'Luck Blade',
    type: 'Weapon (Longsword)',
    rarity: 'Legendary',
    description: 'A sword that grants a luck bonus and can be used to cast Wish once. Handle with care.',
    status: 'active',
    icon: '⚔',
  },
  {
    name: 'Ring of Regeneration',
    type: 'Ring',
    rarity: 'Very Rare',
    description: 'Slowly regenerates hit points over time while attuned.',
    status: 'active',
    icon: '💍',
  },
  {
    name: 'Mace of Disruption',
    type: 'Weapon (Mace)',
    rarity: 'Rare',
    description: 'Deals radiant damage and can destroy undead outright on a low saving throw.',
    status: 'active',
    icon: '🔨',
  },
  {
    name: 'Bracers of Defence',
    type: 'Wondrous Item',
    rarity: 'Rare',
    description: '+2 AC while wearing no armour and no shield.',
    status: 'active',
    icon: '🛡',
  },
  {
    name: 'Rope of Entanglement',
    type: 'Wondrous Item',
    rarity: 'Rare',
    description: 'On command, animates and restrains a target. Up to 30ft long.',
    status: 'active',
    icon: '🪢',
  },
  {
    name: 'Necklace of Adaptation',
    type: 'Wondrous Item',
    rarity: 'Uncommon',
    description: 'Allows the wearer to breathe in any environment, including underwater and in vacuum.',
    status: 'active',
    icon: '📿',
  },
  {
    name: 'Tome of Wisdom',
    type: 'Wondrous Item',
    rarity: 'Very Rare',
    description: 'Permanently increases Wisdom by +2. Already read — effect applied.',
    status: 'consumed',
    notes: 'Effect already applied to a party member.',
    icon: '📖',
  },
  {
    name: 'Ring of Water Walking',
    type: 'Ring',
    rarity: 'Uncommon',
    description: 'Allows the wearer to stand on and walk across any liquid surface.',
    status: 'active',
    icon: '💍',
  },
  {
    name: 'Ring of Protection',
    type: 'Ring',
    rarity: 'Rare',
    description: '+1 bonus to AC and saving throws while attuned.',
    status: 'active',
    icon: '💍',
  },
  {
    name: 'Nature Mantle',
    type: 'Wondrous Item',
    rarity: 'Uncommon',
    description: 'A cloak woven with natural magic. Exact properties to be confirmed.',
    status: 'active',
    icon: '🌿',
  },
  {
    name: 'Pearls of Power',
    type: 'Wondrous Item',
    rarity: 'Uncommon',
    description: 'Once per day, recover a used spell slot. Party holds two.',
    status: 'active',
    notes: 'x2',
    icon: '🔮',
  },
  {
    name: 'Stone of Good Luck',
    type: 'Wondrous Item',
    rarity: 'Uncommon',
    description: '+1 bonus to ability checks and saving throws while in your possession.',
    status: 'active',
    icon: '🪨',
  },
  {
    name: 'Ring of Intelligence',
    type: 'Ring',
    rarity: 'Rare',
    description: 'Sets or increases the wearer\'s Intelligence score while attuned.',
    status: 'active',
    icon: '💍',
  },
  {
    name: 'Night Onyx',
    type: 'Wondrous Item',
    rarity: 'Unknown',
    description: 'A dark gemstone of unclear purpose. Studied by a wizard in Donnel who tied it off from other dark forces. Connected to Dakkar, a northern dwarf, and a shield from the Molten Peaks.',
    status: 'active',
    notes: 'Magical properties unknown. Handle with caution.',
    icon: '🖤',
  },
];

export const mysteriousItems: MysteriousItem[] = [
  {
    name: 'Raven Feather',
    description: 'A single dark feather from Theodas\' treasure room. Morg and Keith touched it — their eyes went black and they were cocooned and pulled into a shadow realm. The Raven Queen is involved.',
    holder: 'Morg & Keith (shadow realm)',
    icon: '🪶',
  },
  {
    name: 'Pirate Coin',
    description: 'An old coin of unknown origin. When Lucian took it, his eyes turned red and a voice said: "Embrace the power bestowed upon you, Lomerian." He recovered after a minute.',
    holder: 'Lucian',
    notes: 'Connected to the name "Lomerian". Significance unknown.',
    icon: '🪙',
  },
  {
    name: 'Envelope',
    description: 'A sealed envelope from the treasure room. Contents unknown.',
    icon: '✉',
  },
  {
    name: 'Small Shield',
    description: 'A miniature shield recovered from the treasure room. Significance unknown.',
    icon: '🛡',
  },
  {
    name: 'Hairpin',
    description: 'An ornate hairpin from the treasure room. Significance unknown.',
    icon: '📌',
  },
  {
    name: 'Mushroom',
    description: 'A preserved mushroom from the treasure room. Magical or medicinal properties unknown.',
    icon: '🍄',
  },
  {
    name: 'Bottle',
    description: 'A sealed bottle from the treasure room. Contents unknown.',
    icon: '🍾',
  },
  {
    name: 'Tree Sample',
    description: 'A cutting or sample from an unidentified tree. Origin and purpose unknown.',
    icon: '🌿',
  },
  {
    name: 'Crest',
    description: 'A heraldic crest of unknown house or faction. Significance unknown.',
    icon: '⚜',
  },
  {
    name: 'Leatherbound Book',
    description: 'A leatherbound tome from the treasure room. Contents unread.',
    icon: '📕',
  },
  {
    name: 'Moving Eye',
    description: 'An unsettling item — an eye that moves on its own. Purpose and origin entirely unknown.',
    icon: '👁',
  },
];
