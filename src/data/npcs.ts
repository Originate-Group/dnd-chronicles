export type Disposition = 'friendly' | 'neutral' | 'mysterious' | 'hostile';

export interface NPC {
  name: string;
  /** Where they're based, or where the party met them */
  location: string;
  /** Merchant, priest, smith, etc. */
  profession: string;
  /** Drives the card colour + filter category */
  disposition: Disposition;
  /** Short read on them — the vibe at a glance */
  vibe: string;
  /** What the party knows / why they matter */
  note: string;
  status?: 'alive' | 'deceased' | 'unknown';
  /** Optional portrait — drop a file in /public/npcs and point here later */
  image?: string;
  /** Session they first appeared, for reference */
  firstSeen?: number;
}

export const npcs: NPC[] = [
  // ── Donnel ────────────────────────────────────────────────
  {
    name: "Duke Savale",
    location: "City of Donnel",
    profession: "Duke / City Ruler",
    disposition: "neutral",
    vibe: "Distant authority",
    note: "Presides over Donnel and its annual Sun Festival. The party have debriefed him on their travels more than once — he hears a lot and gives away little.",
    status: "alive",
    firstSeen: 1,
  },
  {
    name: "Conrad Shaw",
    location: "Donnel — South Temple",
    profession: "Head Priest",
    disposition: "friendly",
    vibe: "Grateful ally",
    note: "Head Priest of Donnel's temples. Went missing in the northern woods and was dragged back alive from a teleporting spider's cave. He confirmed the stolen opal came from Khaver Monastery.",
    status: "alive",
    firstSeen: 1,
  },
  {
    name: "Jemima",
    location: "Donnel — Hunter/Slayer Guild",
    profession: "Guild Leader",
    disposition: "friendly",
    vibe: "Straight-talking quest-giver",
    note: "Runs the Hunter/Slayer Guild bounty board. Handed the party the gnoll, basilisk, chimera and goblin-village contracts, and the first real intel on the orc brothers.",
    status: "alive",
    firstSeen: 3,
  },
  {
    name: "Pollard",
    location: "City of Donnel",
    profession: "Head Smith",
    disposition: "friendly",
    vibe: "Reliable craftsman",
    note: "Donnel's head smith. Forged Leucian's prosthetic leg (three days' work) and is the man to see about reforging the broken sword fragment recovered from the goblin village.",
    status: "alive",
    firstSeen: 2,
  },
  {
    name: "Orius",
    location: "Donnel — whereabouts unknown",
    profession: "Wizard",
    disposition: "hostile",
    vibe: "Shadowy and suspect",
    note: "A wizard tied to the theft of the absorbing shadow opal during the Sun Festival. A loose thread the party has never fully pulled.",
    status: "unknown",
    firstSeen: 1,
  },

  // ── The Road ─────────────────────────────────────────────
  {
    name: "Marquese",
    location: "On the road — travelling",
    profession: "Travelling Merchant",
    disposition: "friendly",
    vibe: "Always turns up with the goods",
    note: "The party's favourite travelling merchant. Sold them the Bag of Holding, an Identifying Spyglass and a stack of health potions, and keeps promising to be useful again. Also recorded in early notes as 'Marcus'.",
    status: "alive",
    firstSeen: 2,
  },

  // ── Velento ──────────────────────────────────────────────
  {
    name: "Zook",
    location: "Velento — Dragon's Keep Inn",
    profession: "Rock Gnome Tinkerer",
    disposition: "neutral",
    vibe: "Curious inventor",
    note: "A rock gnome tinkerer met at the Dragon's Keep Inn in the layered, cursed city of Velento.",
    status: "alive",
    firstSeen: 4,
  },
  {
    name: "The Orc Barkeep",
    location: "Velento — Red Moon Inn",
    profession: "Barkeep",
    disposition: "friendly",
    vibe: "Talks if you listen",
    note: "Pours drinks at the Red Moon Inn. Confirmed the Night Terrors, the incubus behind them, and that his own family had been caught up in the curse.",
    status: "alive",
    firstSeen: 4,
  },
  {
    name: "Xavier",
    location: "Velento",
    profession: "Fixer (Blue Tiefling)",
    disposition: "mysterious",
    vibe: "Shady but pays well",
    note: "A blue tiefling who shadowed the party before making contact. Hires them for jobs against Theodas — the marble elephant, then the mansion heist — but won't name his employer.",
    status: "alive",
    firstSeen: 6,
  },
  {
    name: "Chig",
    location: "Velento",
    profession: "Messenger",
    disposition: "neutral",
    vibe: "Runs the errands",
    note: "Carries word between Xavier and the party — including the warning that Theodas had come home early and knew they'd been in his house.",
    status: "alive",
    firstSeen: 7,
  },
  {
    name: "Theodas",
    location: "Velento — NW district mansion",
    profession: "Mayoral Candidate & Collector (Drow)",
    disposition: "hostile",
    vibe: "Dangerous hoarder of secrets",
    note: "A drow running for mayor, obsessed with magical locks, traps and trophies. His mansion hid maps and books tracking the gems, the Shadowfell and the First Vampire. Eventually found murdered in his own bedroom — a knife in his back.",
    status: "deceased",
    firstSeen: 6,
  },
  {
    name: "Crowley",
    location: "Velento — Devil's Drinking Den",
    profession: "\"King of the Crossroads\" (Purple Tiefling)",
    disposition: "mysterious",
    vibe: "Charming, reckless, not to be trusted",
    note: "A purple tiefling wanted by half the town — and Lucian's father. He opened the rift beneath Velento trying to summon a demon, and later killed Theodas in a power play. Sometimes written 'Crawley'.",
    status: "alive",
    firstSeen: 7,
  },

  // ── Khaver ───────────────────────────────────────────────
  {
    name: "Brother Ignacious",
    location: "Khaver — The Monastery",
    profession: "Genasi-Fire Monk",
    disposition: "friendly",
    vibe: "Devoted, doomed",
    note: "A fire genasi monk who went after the suspicious skeletal-robed visitor asking about rifts and rituals. Died in the chaos of the chase, carrying a torn ritual page.",
    status: "deceased",
    firstSeen: 8,
  },
  {
    name: "Ulster",
    location: "Khaver — The Monastery",
    profession: "Monastery Head",
    disposition: "neutral",
    vibe: "Stern but fair",
    note: "Head of the Khaver Monastery. Arranged the party's release from the cells on the condition they fought structured 3v3 training bouts against his monks.",
    status: "alive",
    firstSeen: 9,
  },
  {
    name: "Bort",
    location: "Khaver — outside the gates",
    profession: "Hired Hand",
    disposition: "friendly",
    vibe: "Friend of a friend",
    note: "A human waiting outside the prison gates who'd helped vouch for the party's release. Quietly useful.",
    status: "alive",
    firstSeen: 9,
  },

  // ── Bellport & The Sea ───────────────────────────────────
  {
    name: "Captain Damon",
    location: "Bellport — Seaside Tavern",
    profession: "Ship Captain — The Red Fall",
    disposition: "friendly",
    vibe: "Old salt from Lucian's past",
    note: "Real name Nelson. One-eyed, with a mechanical gun-hand, and thought long dead by Lucian. Captains The Red Fall — a ship named after Lucian's own past — running flammable cargo north for coin.",
    status: "alive",
    firstSeen: 9,
  },
  {
    name: "Varach",
    location: "Tiding",
    profession: "Tinkerer",
    disposition: "neutral",
    vibe: "Gifted mechanic",
    note: "The Tiding tinkerer who rebuilt Captain Damon after his wreck — including the mechanical gun-hand. Damon's gunpowder runs are a return favour.",
    status: "alive",
    firstSeen: 10,
  },

  // ── Tattenmore ───────────────────────────────────────────
  {
    name: "Tiberick Tibert",
    location: "Tattenmore",
    profession: "Gnome Tinkerer / Arcane Express",
    disposition: "neutral",
    vibe: "Flamboyant dealmaker",
    note: "A flamboyant gnome tinkerer who runs the Arcane Express delivery route between Surbridge, Velono and Tiding. Identified the party's entire haul of magic gear — but cared only for the copper autognomes in the cargo.",
    status: "alive",
    firstSeen: 11,
  },
  {
    name: "The Woman in Black",
    location: "Tattenmore",
    profession: "Unknown",
    disposition: "mysterious",
    vibe: "A face from Nyx's past",
    note: "Arrived alongside Tiberick Tibert, dressed all in black. Nyx recognised her — and hasn't fully explained how.",
    status: "alive",
    firstSeen: 11,
  },

  // ── Azkellion ────────────────────────────────────────────
  {
    name: "Baldezer",
    location: "Azkellion — Mephiston's village",
    profession: "Villager",
    disposition: "friendly",
    vibe: "A good man, gone",
    note: "Mephiston's best friend. Killed by the floating Necromancer when the village burned — body taken, no trace left.",
    status: "deceased",
    firstSeen: 12,
  },
  {
    name: "Terminus",
    location: "Azkellion",
    profession: "Shaman",
    disposition: "friendly",
    vibe: "Desperate for aid",
    note: "The village shaman whose broken whispers — 'Cor… Min… us' — called the party back to the cave to free the Great Protector from its corruption.",
    status: "alive",
    firstSeen: 13,
  },
  {
    name: "The Great Protector",
    location: "Azkellion — the mountain cave",
    profession: "Ancient Green Dragon",
    disposition: "friendly",
    vibe: "Wounded guardian, now an ally",
    note: "An ancient green dragon guarding the Night Onyx and fighting its own corruption. The party purged the rot with a scroll of Greater Restoration — and it has not forgotten what they did.",
    status: "alive",
    firstSeen: 12,
  },

  // ── Enemies of Note ──────────────────────────────────────
  {
    name: "Karkath & Grommak",
    location: "The Ravaged Lands — Camry Gorge",
    profession: "Orc Warlords",
    disposition: "hostile",
    vibe: "Raiders, brothers, butchers",
    note: "Orc brothers running a warband of trolls, orcs, hobgoblins and ogres, raiding centaur and minotaur villages. The 25,000gp+ end of the bounty board.",
    status: "alive",
    firstSeen: 3,
  },
  {
    name: "The Necromancer",
    location: "Wherever the rifts open",
    profession: "Necromancer",
    disposition: "hostile",
    vibe: "The shadow over everything",
    note: "A floating, inhuman figure hunting the Bane stones and the Great Protector. Burned Mephiston's village, slaughtered civilians in Khaver, and teleports away before anyone can land a blow. The campaign's gathering storm.",
    status: "alive",
    firstSeen: 8,
  },
];
