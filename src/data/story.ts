export interface StoryUpdate {
  session: number;
  title: string;
  date?: string;
  location: string;
  summary: string;
  highlights: string[];
  cliffhanger?: string;
}

export interface JourneyMilestone {
  title: string;
  location: string;
  description: string;
  icon: string;
  tags: string[];
}

export interface Quote {
  text: string;
  speaker: string;
  context: string;
  session?: number;
}

export const storyUpdates: StoryUpdate[] = [
  {
    session: 1,
    title: "The City of Donnel — Bounties & Beginnings",
    location: "City of Donnel",
    summary:
      "The Motley Marauders found their footing in the City of Donnel — a sprawling metropolis divided into three temple districts and four commercial quarters. Word spread quickly of lucrative bounties posted around the city: gnoll ears fetching 500gp each, an entire goblin village worth 25,000gp, a basilisk, and a chimera. The party wasted no time picking a direction.",
    highlights: [
      "Arrived in Donnel — city of three temples and four districts",
      "Bounty board: gnoll ears 500gp each, goblin village 25,000gp, basilisk, chimera",
      "The party began sizing up which job to tackle first",
    ],
    cliffhanger: "The gnoll camp wasn't going to hunt itself...",
  },
  {
    session: 2,
    title: "Fifteen Gnoll Ears",
    location: "Wilderness outside Donnel",
    summary:
      "The Marauders hunted down a gnoll warband and returned with fifteen ears — a tidy payday and proof they could handle themselves in the wilds. Along the way they captured and interrogated a wizard, extracting useful intel before helping themselves to his loot.",
    highlights: [
      "15 gnoll ears collected at 500gp each",
      "Wizard captured and interrogated for information",
      "Loot acquired from the wizard's belongings",
    ],
    cliffhanger: "The information the wizard let slip pointed toward something far more dangerous.",
  },
  {
    session: 3,
    title: "Velento & the Night Terrors",
    location: "Velento — The Sunken City",
    summary:
      "Beneath the surface lay Velento — a sunken city shrouded in dark magic. The party discovered that many of its inhabitants suffered from the Night Terrors curse, a creeping affliction that plagued their sleep. Investigating the source led them to whispers of a broken sword, and a dangerous encounter with an incubus that wouldn't be their last.",
    highlights: [
      "Discovered Velento — the sunken city",
      "Night Terrors curse affecting the local population",
      "Clues pointing to a broken sword tied to the curse's origin",
      "Encountered an incubus — magic and morality were both tested",
    ],
    cliffhanger: "The broken sword was somewhere in the city. Finding it would mean going deeper.",
  },
  {
    session: 4,
    title: "The Goblin Village",
    date: "11/01/25",
    location: "Goblin Village",
    summary:
      "The party made good on the goblin village bounty — though the fight was anything but straightforward. Amid the chaos, they recovered a personal treasure: Ross' mum's necklace, quietly retrieved from the rubble.",
    highlights: [
      "Goblin village bounty completed — 25,000gp earned",
      "Chaotic and bloody fight through the village",
      "Ross' mum's necklace recovered from the wreckage",
    ],
  },
  {
    session: 5,
    title: "The Devil's Den — Xavier & the Well",
    date: "23/02/25",
    location: "Devil's Den",
    summary:
      "A location known as the Devil's Den brought revelations and danger in equal measure. The party came face to face with Xavier, and a shocking truth emerged: Crawley is Lucian's father. A well at the site whispered strange things to those who listened too closely. A succubus lurked in the shadows, and the fight that followed tested the party to its limits.",
    highlights: [
      "Xavier encountered and confronted",
      "Crawley revealed to be Lucian's father — a bombshell for the bard",
      "A well with strange whispers — something deep and old",
      "Succubus ambush — the party barely held together",
    ],
    cliffhanger: "The truth about Lucian's parentage raised more questions than it answered.",
  },
  {
    session: 6,
    title: "Cahiver — The Monastery Secrets",
    date: "27/04/25",
    location: "Cahiver Monastery",
    summary:
      "The party investigated the Cahiver monastery and found things weren't as holy as they appeared. A suspicious humanoid lurking within the monastery grounds, and Ignacious — someone they had reason to trust — was missing. Their investigations earned them hard experience, and the Marauders reached Level 5.",
    highlights: [
      "Cahiver monastery investigated",
      "Suspicious humanoid discovered within the monastery",
      "Ignacious missing — whereabouts unknown",
      "Party reached Level 5",
    ],
    cliffhanger: "Whatever happened to Ignacious began to feel deliberate rather than accidental.",
  },
  {
    session: 7,
    title: "Behind Bars — The Monk Trials",
    date: "29/06/25",
    location: "Prison",
    summary:
      "Incarcerated and forced to fight for their freedom — or at least their dignity — the Marauders faced a series of 3v3 monk battles inside the prison walls. They also crossed paths with the orc brothers Morvith and Malzaroth, whose presence in that particular jail felt like anything but coincidence.",
    highlights: [
      "Party imprisoned",
      "3v3 monk battle trials — honour through combat",
      "Met the orc brothers Morvith and Malzaroth",
    ],
    cliffhanger: "Why were those two orcs there — and who put them in the same cell block?",
  },
  {
    session: 8,
    title: "All Aboard The Red Fall",
    date: "20/10/25",
    location: "The Red Fall — Sea Voyage",
    summary:
      "The Marauders took to the seas aboard The Red Fall, captained by Damon. It didn't stay peaceful for long. Pirates attacked, and in the chaos Thalara fell — struck down before anyone could reach her. She was revived, but the near-loss shook the party. Arriving at Tattenmore, they met Tiberick Tibert and had their potions properly identified.",
    highlights: [
      "Set sail on The Red Fall — Captain Damon at the helm",
      "Pirate attack on the open sea",
      "Thalara died and was revived — a close call that changed the mood",
      "Arrived at Tattenmore; met Tiberick Tibert",
      "Potions identified by Tiberick",
    ],
    cliffhanger: "The pirates weren't random — they were looking for something specific.",
  },
  {
    session: 9,
    title: "The Ancient Green Dragon",
    date: "19/10/25",
    location: "Azkellion — Mephiston's Village",
    summary:
      "In Azkellion, the party discovered Mephiston's village ablaze — attacked and left burning. The culprit: an Ancient Green Dragon, but one that had been corrupted rather than acting of its own will. The Marauders engaged and survived, and the confrontation pushed everyone to Level 6.",
    highlights: [
      "Mephiston's village discovered on fire — people in danger",
      "Tracked down an Ancient Green Dragon — corrupted, not feral",
      "Survived the encounter against overwhelming odds",
      "Party reached Level 6",
    ],
    cliffhanger: "Who or what had corrupted the dragon — and why target Mephiston's home?",
  },
  {
    session: 10,
    title: "Freeing the Dragon",
    date: "30/11/25",
    location: "Azkellion",
    summary:
      "With a Scroll of Greater Restoration in hand, the party returned to the corrupted Ancient Green Dragon — not to fight it, but to free it. The ritual worked. The dragon, restored to its true self, was released from whatever had twisted it. A moment of unexpected grace in a campaign full of violence.",
    highlights: [
      "Scroll of Greater Restoration used on the Ancient Green Dragon",
      "Dragon successfully freed from corruption",
      "A rare peaceful resolution — diplomacy over destruction",
    ],
    cliffhanger: "A freed ancient dragon owes you something. That's either very useful or very complicated.",
  },
  {
    session: 11,
    title: "Sea Serpent — Life for Life",
    date: "08/10/26",
    location: "Open Sea",
    summary:
      "The seas proved treacherous once more as a sea serpent attacked the party's vessel. The fight was brutal — Life Transference was cast to keep someone standing, and when it was over, 17 serpent scales were collected as trophies. In the aftermath, sharp eyes noticed something odd about Lucian's pendant. Something suspicious.",
    highlights: [
      "Sea serpent attack — brutal maritime combat",
      "Life Transference cast to save a party member",
      "17 sea serpent scales collected",
      "Lucian's pendant noticed to be acting strangely — suspicion mounts",
    ],
    cliffhanger: "What exactly is in that pendant — and does Lucian know?",
  },
  {
    session: 12,
    title: "The Velento Heist — Theodas' House",
    date: "29/10/26",
    location: "Velento — Theodas' Mansion",
    summary:
      "The party infiltrated Theodas' mansion in Velento, navigating a series of deadly puzzle rooms: a piano with a specific key sequence (2,1,5,3,8,7,6,4), intricate clock puzzles, and ancient runes that guarded the inner sanctum. At the end of it all they discovered that Crowley had killed Theodas. Priceless items were stolen, and a reward of 6,000gp awaited on the other side.",
    highlights: [
      "Puzzle rooms navigated — piano code: 2,1,5,3,8,7,6,4",
      "Clock puzzles and ancient runes solved",
      "Crowley murdered Theodas — a death that raises questions",
      "Items stolen from the mansion",
      "Reward: 6,000gp",
    ],
    cliffhanger: "Crowley killed Theodas. Was it the plan all along — or did something go wrong?",
  },
];

export const journeyMilestones: JourneyMilestone[] = [
  {
    title: "City of Donnel",
    location: "Donnel",
    description: "Where the Motley Marauders first formed — a city of temples, coin, and dangerous bounties.",
    icon: "🏙️",
    tags: ["Origin", "First Base"],
  },
  {
    title: "The Gnoll Hunt",
    location: "Wilderness outside Donnel",
    description: "Fifteen gnoll ears and a wizard's loot — the party's first real taste of the wilds.",
    icon: "🐺",
    tags: ["Bounty", "Combat"],
  },
  {
    title: "Velento — The Sunken City",
    location: "Velento",
    description: "A cursed city beneath the surface, plagued by Night Terrors and guarded by an incubus.",
    icon: "🌊",
    tags: ["Major Location", "Curse"],
  },
  {
    title: "The Goblin Village",
    location: "Goblin Village",
    description: "25,000gp earned. Ross got his mum's necklace back. Worth it.",
    icon: "💰",
    tags: ["Bounty Completed", "Battle"],
  },
  {
    title: "Devil's Den",
    location: "Devil's Den",
    description: "Xavier revealed. Crawley is Lucian's father. A whispering well. A succubus in the dark.",
    icon: "😈",
    tags: ["Major Revelation", "NPC Lore"],
  },
  {
    title: "Cahiver Monastery",
    location: "Cahiver",
    description: "Something unholy behind holy walls. A suspicious humanoid. Ignacious gone missing.",
    icon: "⛪",
    tags: ["Investigation", "Mystery", "Level 5"],
  },
  {
    title: "The Prison Trials",
    location: "Prison",
    description: "Locked up and forced to fight. The orc brothers Morvith and Malzaroth watched from the shadows.",
    icon: "⛓️",
    tags: ["Combat", "Captivity"],
  },
  {
    title: "The Red Fall",
    location: "Open Sea → Tattenmore",
    description: "Pirates. A near-death for Thalara. Captain Damon at the helm of The Red Fall.",
    icon: "⚓",
    tags: ["Sea Voyage", "Near-Death"],
  },
  {
    title: "Azkellion — The Dragon",
    location: "Azkellion",
    description: "Mephiston's village burned. An Ancient Green Dragon, corrupted. The Marauders chose to free it.",
    icon: "🐉",
    tags: ["Dragon", "Level 6"],
  },
  {
    title: "The Sea Serpent",
    location: "Open Sea",
    description: "Life Transference kept someone breathing. 17 scales as proof. Lucian's pendant grows suspicious.",
    icon: "🐍",
    tags: ["Sea Combat", "Lore"],
  },
  {
    title: "Theodas' Mansion Heist",
    location: "Velento",
    description: "Puzzle rooms, clock riddles, piano codes. Crowley killed Theodas. 6,000gp reward.",
    icon: "🔐",
    tags: ["Heist", "Major Revelation"],
  },
];

export const quotes: Quote[] = [
  {
    text: "We are the Motley Marauders, and we are HERE!",
    speaker: "Leucian",
    context: "Screamed as a battle cry charging into a fight outnumbered and outmatched.",
  },
  {
    text: "The Raven Queen speaks through signs. I merely follow where fate points.",
    speaker: "Morg (Morgarth)",
    context: "Explaining her decision-making process to the rest of the party, who remained unconvinced.",
  },
  {
    text: "She sees the signs. I make sure she lives long enough to follow them.",
    speaker: "Malekith",
    context: "Asked why he never strays far from his twin sister.",
  },
  {
    text: "I swore an oath — protect the innocent, bring justice to those who wronged my people. Whether that makes me a hero or a monster depends on the day.",
    speaker: "Galahad",
    context: "When a city guard questioned whether a minotaur in dark armour could be trusted.",
  },
  {
    text: "Crawley is my father. I need a moment.",
    speaker: "Leucian",
    context: "After the revelation at Devil's Den. The moment lasted considerably longer than advertised.",
    session: 5,
  },
  {
    text: "The dragon was corrupted. We freed it. Not everything has to end in fire.",
    speaker: "Thalara",
    context: "After the Scroll of Greater Restoration worked on the Ancient Green Dragon.",
    session: 10,
  },
  {
    text: "I died. I came back. Can we move on?",
    speaker: "Thalara",
    context: "When the party wouldn't stop fussing over her after she was revived on the deck of The Red Fall.",
    session: 8,
  },
  {
    text: "Fifteen ears. Not sixteen, not fourteen. Fifteen. I counted.",
    speaker: "Gerald",
    context: "Presenting the gnoll bounty to the clerk in Donnel with absolute precision.",
    session: 2,
  },
  {
    text: "The piano goes 2, 1, 5, 3, 8, 7, 6, 4. Don't ask how I know.",
    speaker: "Leucian",
    context: "Standing confidently in front of the puzzle room organ in Theodas' mansion.",
    session: 12,
  },
  {
    text: "Crowley killed Theodas. Of course he did.",
    speaker: "Nyx",
    context: "Delivered with zero surprise, maximum exhaustion.",
    session: 12,
  },
  {
    text: "You hurt wizard dad. Boblin stop being funny now.",
    speaker: "Boblin",
    context: "Issued as a formal threat. Everyone believed it.",
  },
];
