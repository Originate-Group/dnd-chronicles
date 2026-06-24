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
    title: "The City of Donnel — Sun Festival & the Stolen Opal",
    location: "City of Donnel",
    summary:
      "The Motley Marauders came together in Donnel during its annual Sun Festival — a religion-heavy city of three temples and four districts, with Duke Savale presiding over the celebrations. The festival was interrupted by a zombie attack in the town square. In the chaos, a magical crystal opal was stolen by an unknown magic user. The opal — described as a shadowy absorbing crystal tied to dark forces — was traced to a wizard named Orius. Conrad Shaw, Head Priest of the temples, was among those affected. The party had their first taste of what this city hides beneath its pageantry.",
    highlights: [
      "Arrived in Donnel during the Sun Festival — three temples, four districts: Amethyst, Sapphire, Emerald, Ruby",
      "Zombie attack erupted in the town square during the festival",
      "Magical crystal opal stolen by an unknown magic user — described as an absorbing shadow crystal",
      "Orius the wizard identified as connected to the opal",
      "Conrad Shaw, Head Priest, missing after the attack",
      "Party hired by the Hunter/Slayer Guild to investigate",
    ],
    cliffhanger: "A stolen absorbing opal. A missing priest. A zombie attack at a festival. This city has serious problems beneath the pageantry.",
  },
  {
    session: 2,
    title: "The Teleporting Spider & Conrad's Return",
    location: "Wilderness outside Donnel",
    summary:
      "Conrad Shaw had walked out of the North Gate into the heavily wooded area and not come back. The Hunter/Slayer Guild had word of a teleporting creature in the same woods — a bounty worth 25gp each. The party tracked it to a cave thick with webs and killed the teleporting spider, recovering Conrad in the process. He needed 24 hours of rest in the South Temple before he could speak. The party reported the bodies to the guards and claimed their reward. Marcus the Travelling Merchant crossed their path and promised to be useful again.",
    highlights: [
      "Conrad Shaw traced to the wooded area north of the city gates",
      "Teleporting spider tracked to a cave — bounty claimed: 25gp each",
      "Spider killed, Conrad recovered alive — brought back to the South Temple",
      "Bodies reported to the city guard",
      "Leucian commissioned a prosthetic leg from Pollard, the head Smith in Donnel — three days to make",
      "Met Marcus the Travelling Merchant — promised future usefulness",
      "Conrad needs 24 hours to recover before he can share what he knows",
    ],
    cliffhanger: "Conrad survived. Whatever he saw in those woods — he hasn't said yet.",
  },
  {
    session: 3,
    title: "The Bounty Board & the Road to Velento",
    location: "Donnel → Velento",
    summary:
      "With Conrad recovering, the party turned to the Hunter/Slayer Guild and its bounty board. Guild leader Jemima laid out four contracts: basilisk, chimera, a gnoll herd at 50gp per ear, and the big one — the head of a goblin village leader for a rumoured 25,000gp. The guild also shared intelligence on the orc brothers Karkath and Grommak, who were running raids with a large warband and had been hitting centaur and minotaur villages. Conrad, recovered, confirmed the opal came from a monastery in Cahiver — traded for a sacred town stone. The party set out toward Velento, noting the decay in the forests getting worse the further they travelled.",
    highlights: [
      "Bounty board accessed — four contracts: basilisk (3,000gp), chimera (5,000gp), gnolls (50gp/ear), goblin village (25,000gp+)",
      "Guild Leader Jemima provided intelligence on the orc brothers Karkath and Grommak",
      "Orc warband confirmed: trolls, orcs, hobgoblins, ogres — raiding centaur and minotaur villages",
      "Conrad confirmed the opal originated from Cahiver Monastery — traded for the North Temple Town Stone",
      "Forest decay noted as worsening — Delargor Woods referenced",
      "Party departed for Velento, following the main trade route",
      "Party reached Level 2",
    ],
    cliffhanger: "The decay in the forest is getting worse and nobody in authority is talking about why.",
  },
  {
    session: 4,
    title: "Velento, the Goblin Village & the Puzzle Caves",
    location: "Velento → Goblin Village → Celery Gorge",
    summary:
      "Velento hit the party like a weight — a city that descends in layers, wealthy at the top, cursed at the centre, flooded at the bottom. The Night Terrors had been active for a year, ever since a landslide buried the mines and the black fog first appeared. The party gathered what they could — a broken sword fragment, intel from the Red Moon Inn's orc barkeep, and confirmation from the Miners Arms that someone in power was covering up the truth about the mine explosion. They left Velento to clear the goblin village bounty, fought through two cave rooms of goblins, and discovered something in the orc-connected caves at Celery Gorge: a series of puzzle rooms themed around coloured doors — ruby red, citrine orange, sapphire blue, onyx black — each sealed by a different kind of power.",
    highlights: [
      "On the road: a wizard's group ambushed the party for taking the teleporting spider bounty they'd wanted. The wizard was killed.",
      "Met Marquese the Travelling Merchant — sold them a Bag of Holding, an Identifying Spyglass, and three health potions",
      "Gnolls hunted: 15 ears recovered from 18 gnolls — bounty delivered",
      "Arrived in Velento — layered city, wealthy above, cursed below. Night Terrors active for one year.",
      "Met Zook, a Rock Gnome tinkerer at the Dragon's Keep Inn",
      "Black fog identified as source of the Night Terrors curse — anyone who enters the mine crevice doesn't return",
      "Broken sword fragment recovered — needs to be returned to Pollard the Smith in Donnel",
      "Red Moon Inn: orc barkeep confirmed Night Terrors, incubus involvement, and his family being cursed",
      "Miners Arms: local aspiring leader actively hushing the truth about the mine explosion",
      "Goblin village assaulted — two cave rooms cleared",
      "Puzzle caves discovered in Celery Gorge — four doors: Blood Ruby, Citrine, Glacial Sapphire, Night Onyx",
      "Ross' mum's necklace recovered from the goblin shaman",
    ],
    cliffhanger: "The puzzle rooms in the gorge are sealed by something that predates the goblins. Whatever they were built to protect is still inside.",
  },
  {
    session: 5,
    title: "The Puzzle Caves & the Gems of Bane",
    location: "Celery Gorge — Puzzle Caves",
    summary:
      "The party solved their way through the puzzle rooms — each door demanding a different form of engagement: sacrifice at the red, resistance at the black, cold logic at the blue. What they found inside was connected to something far older than the caves themselves: four gems — the Blood Ruby, Citrine Radiance, Midnight Onyx, and Glacial Sapphire — each containing a fraction of the god Bane's power. In combination with the stolen opal, these gems were used long ago to strip Bane of his power and bind him. The Ravaged Lands are a byproduct of that ancient spell. Someone is collecting them again. The loot was significant: rings, a broken Staff of Frost, Pearls of Power.",
    highlights: [
      "Puzzle rooms solved — blood (sacrifice), darkness (resistance), frost (logic), light (excellence)",
      "Four gems discovered: Blood Ruby, Citrine Radiance, Midnight Onyx, Glacial Sapphire",
      "Gems confirmed as containers for Bane's fractured power — used in his ancient binding",
      "The Ravaged Lands identified as a byproduct of the original binding ritual",
      "Someone is reassembling the gems — the implications are significant",
      "Loot: Ring of Water Walking, Ring of Protection, Nature Mantle, Pearls of Power x2, Stone of Good Luck, Ring of Intelligence, broken Staff of Frozen",
      "Party reached Level 3",
    ],
    cliffhanger: "These gems were used to imprison a god. Now someone is collecting them again. The question is whether they plan to finish what was started — or undo it.",
  },
  {
    session: 6,
    title: "Xavier's Job — Theodas' House",
    date: "23/3/25",
    location: "Velento — Theodas' House",
    summary:
      "A blue tiefling named Xavier had been following the party. When he finally made contact, his ask was simple: retrieve a small marble elephant from the house of Theodas — a drow running for mayor in the north-west district, with a fondness for magical locks and booby traps. Xavier couldn't say who his employer was. He could say the reward was 800gp each, the house was empty, and there were trophies in a trophy room. The party entered, navigated the defences, and found more than a marble elephant: maps on the walls with locations circled — Delargar Woods, Everwood Forest, Vyramount, Azkellion — and three historical books that pointed at something enormous. The first vampire. The Shadowfell. A castle.",
    highlights: [
      "Xavier revealed — blue tiefling, shady, following the party for reasons he can't disclose",
      "Job accepted: retrieve a marble elephant from Theodas' house — 800gp each",
      "Theodas: drow, running for mayor, house protected by traps and magical locks",
      "Maps found inside with circled locations: Delargar Woods, Everwood Forest, Vyramount, Azkellion",
      "Three historical books discovered: 'Legends of Gods vs Men', 'Titans', 'The First Vampire'",
      "'The First Vampire' book connects Vyramount and the Shadowfell — a vampire living in a castle, spreading decay",
      "Marble elephant retrieved and delivered to Xavier",
    ],
    cliffhanger: "The maps, the books, the circled locations — Theodas was tracking something. The question is whether he found it.",
  },
  {
    session: 7,
    title: "The Well, the Rift & Crawley",
    date: "27/4/25",
    location: "Velento — Devil's Drinking Den",
    summary:
      "Xavier sent word through Chig — Theodas was back early, and he knew the party had been in his house. The party retreated to the Devil's Drinking Den. There, they followed a lead to a well at the centre of town that had been whispering to people at night. They went down. The further they descended, the louder the whispers became — until, at the tunnel's end, a rift in reality pulsed red and warm. A figure stepped through it: a woman with a large scythe, there and gone in seconds. A product of the Necromancer. The party fought a succubus on the way back out and left a note for Xavier. The next morning, they returned to the Den — and met a purple tiefling who called himself the King of the Crossroads. His name was Crowley. Lucian looked at him for a long time before speaking. 'Daaad?'",
    highlights: [
      "Chig delivered word from Xavier — Theodas back early, aware the party entered his house",
      "Well at the centre of Velento investigated — whispers growing louder with depth",
      "Rift discovered at the tunnel's end — red, warm, pulsing. Something wrong is on the other side.",
      "Mysterious woman with a large scythe stepped through the rift and vanished — a product of the Necromancer",
      "Succubus fought on the way back out of the tunnels",
      "Left word for Xavier at the Den; long rest achieved",
      "Met Crowley — purple tiefling, 'King of the Crossroads', wanted by everyone in town",
      "Crowley is Lucian's father. Lucian needed a moment.",
    ],
    cliffhanger: "Lucian's father is the King of the Crossroads. He opened the rift. He wants the party's help closing it.",
  },
  {
    session: 8,
    title: "Cahiver — The Monastery Chase",
    date: "10/05/25",
    location: "Cahiver",
    summary:
      "Crowley needed information from Cahiver's library to close the rift he'd accidentally opened trying to summon a demon. He gave the party a Scroll of Dispel Magic as a gesture of good faith and promised 100gp each for the trip. They travelled to Cahiver — past a giant near the camp — and split up across the city's religious quarter. The Monastery held most of what they needed, but also a problem: a suspicious male humanoid in a skeletal robe had been asking about rifts and rituals. The party gave chase. Twenty civilian casualties in the chaos. The Necromancer teleported away. Brother Ignacious — a Genasi-Fire monk who'd gone missing after the suspicious visitor — died in the fight. He was carrying a torn page. The party was arrested. All equipment confiscated.",
    highlights: [
      "Crowley's request: find ritual information in Cahiver to close the rift — 100gp each",
      "Scroll of Dispel Magic received from Crowley as good faith",
      "Giant encountered near camp during travel — navigated",
      "Cahiver reached — party split across Monastery, Raven Queen temple, and Ioune temple",
      "Suspicious humanoid identified in the Monastery — skeletal robe, dark hair, 6ft, not technically human",
      "Chase through the city — 20 civilian casualties",
      "Necromancer teleported away before capture",
      "Brother Ignacious (Genasi-Fire) died in the fight — found with a torn ritual page",
      "Entire party arrested. All weapons, armour and attuned items confiscated.",
    ],
    cliffhanger: "The Necromancer escaped. Ignacious is dead. The torn page he was carrying is now in someone's hands — but whose?",
  },
  {
    session: 9,
    title: "Behind Bars — The Motley Marauders",
    date: "29/06/25",
    location: "Cahiver Prison → Bellport",
    summary:
      "Released from the cells with 250gp and their equipment returned, the party found that local witnesses had given them a name: the Motley Marauders. It stuck. Ulster, the monastery head, arranged the release on the condition of a training combat session — the party fought in structured 3v3 bouts against monastery fighters. They won. Outside the gates, a human named Bort was waiting — a friend of a friend who'd vouched for them. The party headed to Bellport, found it a working port town, and took on a job: Captain Damon needed crew for The Red Fall, a delivery run north paying 25gp a day. The ship had cannons. The cargo was flammable. They signed on.",
    highlights: [
      "Released from prison — 250gp returned, equipment recovered",
      "Witnesses had named them 'the Motley Marauders' — the name was adopted",
      "Structured 3v3 monk training bouts fought — won",
      "Bort waiting outside — 'friend of a friend', had helped secure the release",
      "Galahad — confirmed as son of Theseus",
      "Arrived in Bellport — working port town",
      "Captain Damon found at the Seaside Tavern — old, one-eyed, mechanical arm, thought dead by Lucian",
      "The Red Fall: Lucian's old ship name. Damon's ship. 25gp/day, 350gp each for the run.",
      "Cargo confirmed as risky — flammable and explosive. Ship has cannons port and starboard.",
    ],
    cliffhanger: "The ship is named after Lucian's past. The captain is from Lucian's past. Nothing about this is a coincidence.",
  },
  {
    session: 10,
    title: "Crew of The Red Fall",
    date: "20/07/25",
    location: "The Red Fall — Open Sea",
    summary:
      "The party learned their roles aboard The Red Fall. Lucian took First Mate. Galahad navigated with cartographer's tools. Gerald, Nyx and Malekith served as powder monkeys. Morg crewed as carpenter. Thalara worked the deck. The ship had fifteen to twenty barrels of cargo, fourteen cannonballs per side, and a loose crew that needed training. Captain Damon — Nelson by his first name, survivor of a Tiding wreck and bearer of a mechanical gun-hand courtesy of a tinkerer named Varach — ran a tight enough vessel. Galahad, after recovering his mother's necklace in earlier sessions, was finally allowed to use his real name. The voyage north began without incident.",
    highlights: [
      "Ship crew roles assigned: Lucian (First Mate), Galahad (Navigator), Morg (Carpenter), Thalara (Deck Mate), Gerald/Nyx/Malekith (Powder Monkeys)",
      "Captain Damon: real name Nelson, washed up near Tiding, rebuilt with mechanical gun-hand by tinkerer Varach",
      "Varach in Tiding did the gun conversion — Damon transporting gunpowder as return favour",
      "14 cannonballs per side, 15–20 barrels of cargo aboard",
      "Galahad allowed to reclaim his real name after recovering his mother's necklace",
      "Crew trained — Lucian's previous sea experience put to use",
      "A stone called a Tessera mentioned — nullifies 7th-level spells on Bane crystals",
    ],
    cliffhanger: "A ship full of flammable cargo, a crew learning on the job, and open water ahead. What could go wrong.",
  },
  {
    session: 11,
    title: "Tiberick Tibert & the Loot Identified",
    date: "07/09/25",
    location: "Tattenmore",
    summary:
      "The Red Fall docked at Tattenmore — a foggy mid-evening port. The cargo delivery led the party to Tiberick Tibert, a flamboyant gnome tinkerer who arrived with two cronies (a half-orc and a half-giant) and a woman in all black that Nyx recognised. Tiberick was interested only in his copper shapes — an autognome sphere, cube, and pyramid discovered inside the barrels. He had his own Arcane Express route between Surbridge, Velono and Tiding but couldn't move gunpowder or magic spheres through it. He identified all the party's accumulated gear. Then the pirates hit. The sinking ship fight produced significant loot and tested the party hard. The Necromancer hadn't caught up yet — but it felt like borrowed time.",
    highlights: [
      "Pirates attacked mid-crossing — sustained ship combat",
      "Thalara died during the fight. She was revived.",
      "Two young green dragons attacked the ship en route — defeated",
      "Arrived at Tattenmore — foggy port, mid-evening",
      "Met Tiberick Tibert — gnome tinkerer, flamboyant, arrived with half-orc and half-giant cronies",
      "Woman in all black with Tiberick — Nyx recognised her",
      "Copper autognomes discovered in the barrels: sphere, cube, pyramid",
      "Tiberick ran the Arcane Express between Surbridge, Velono and Tiding — gunpowder excluded",
      "Pearl of Power sending revealed: Norith/Malzereth is ALIVE — taken prisoner. Cannot reply until morning.",
      "All party loot formally identified: Cloak of Arachnida, Wand of Fireballs, Luck Blade, Ring of Regeneration, Mace of Disruption, Bracers of Defence, Rope of Entanglement, Necklace of Adaptation, Tome of Wisdom (+2 Wis), and more",
      "1,250gp each distributed after Damon's cut",
    ],
    cliffhanger: "The Necromancer is still out there. The woman in black knows Nyx. Norith/Malzereth is alive and captive somewhere. None of those threads are finished.",
  },
  {
    session: 12,
    title: "Azkellion — Mephiston's Village Burns",
    date: "19/10/25",
    location: "Azkellion",
    summary:
      "The island of Azkellion was nothing like the mainland — no armour beyond pauldrons and shin guards, weapons that cost a fortune for outsiders, and dinosaurs in the jungle that Gerald and Tainan immediately went toward instead of away from. Mephiston's village was on fire when the party arrived. A single humanoid attacker — floating, inhuman — had killed Mephiston's best friend Baldezer and fled south toward the mountains. The village chief said the attacker had come for information about the 'Great Protector'. Thalara spoke to the animals. They confirmed a floating figure. The party followed the river south-west through acidic swamp water and poison mist, into a mountain cave with a hedge labyrinth inside, zombies in the tunnels, and a roar from somewhere deep below. The Great Protector was losing its fight. Party reached Level 6.",
    highlights: [
      "Arrived in Azkellion — dinosaurs in the jungle, Gerald and Tainan immediately went toward them",
      "Mephiston's village on fire — single humanoid attacker confirmed by chief",
      "Mephiston's best friend Baldezer murdered — Disintegrate or Power Word Kill. Body missing.",
      "Thalara communicated with animals — floating humanoid figure confirmed: the Necromancer",
      "Necromancer sought information about the 'Great Protector' and a Black Gem",
      "Mephiston has no memory of the past year — first time home in twelve months",
      "Followed the attacker south-west through acidic swamps and poison mist",
      "Cave discovered — hedge labyrinth inside, zombies in the tunnels, draconic groaning from below",
      "The Great Protector revealed: an Ancient Green Dragon, actively fighting its own corruption",
      "Party reached Level 6",
    ],
    cliffhanger: "The dragon is losing. The Necromancer has already been here. And whatever the Black Gem is — it matters enough to burn a village for.",
  },
  {
    session: 13,
    title: "Freeing the Dragon — The Night Onyx",
    date: "30/11/25",
    location: "Azkellion — The Cave",
    summary:
      "The whispers started before the party even left the village — broken fragments: 'Cor', 'Min', 'us'. The shaman's name was Terminus. They went back to the cave, moved the boulders, and faced the dragon again. It was worse than before. Corruption had tightened its grip. The dragon screamed at them for returning. Not resistant to fire — vulnerable to psychic. The scroll worked. The Great Protector was restored. The Night Onyx — the stone the dragon had been guarding — was recovered and kept. Another stone is guarded by a dragon to the north. One sits south-east on the mainland, guarded by a Sphinx. One is in a different plane of existence — possibly connected to Vyramount. Mephiston got his memories back: one day he had gone missing, and everything before that day is blurry. It connects to a sea serpent — a quest thread now visible.",
    highlights: [
      "Whispers from the village: 'Cor', 'Min', 'us' — shaman Terminus was calling for help",
      "Returned to the cave — moved the boulders, re-entered",
      "Dragon's corruption had worsened — screamed at the party for coming back",
      "Dragon not resistant to fire — vulnerable to psychic damage",
      "Scroll of Greater Restoration used — corruption purged. Dragon restored.",
      "Night Onyx recovered — one of the five stones, confirmed. Party now holds it.",
      "Stone locations revealed: one guarded by a northern dragon, one by a Sphinx south-east, one in another plane (Vyramount?)",
      "Mephiston's memories partially returned — one missing day, everything before it hazy. Involves a sea serpent.",
      "Dragon free — its awareness of what the party did for it is noted",
    ],
    cliffhanger: "Four stones still to find. Mephiston's missing memories point to a sea serpent. Vyramount — where Strahd lives — holds one of the remaining stones.",
  },
  {
    session: 14,
    title: "Sea Serpent — Life for Life",
    date: "08/02/26",
    location: "Open Sea → Bellport",
    summary:
      "The sea gave the party another fight it didn't ask for. A sea serpent hit the ship without warning, and what followed was the kind of sustained combat that leaves everyone quieter afterwards. Life Transference was cast to keep someone standing when the alternative was watching them die. The serpent was eventually killed — seventeen deep blue scales recovered as proof and trade goods. The party returned to Bellport, handed in the bounty for 2,000gp, and started making plans for the next leg: Donnel for orc brother intelligence, then Camry Gorge, then Hammerhead City. Lucian's pendant was behaving strangely. Not obviously. Just wrong enough to notice.",
    highlights: [
      "Sea serpent ambushed the ship — sustained combat in confined conditions",
      "Lucian suffered emotional damage during the fight — retreated to the ship's hold, overwhelmed",
      "Life Transference cast — someone traded their own health to keep a party member alive",
      "Sea serpent killed — 17 deep blue scales collected",
      "Returned to Bellport — 2,000gp bounty paid out, 200gp each",
      "Boat repairs quoted at 500gp; travel to Donnel: 325gp",
      "Party received 10 beer tokens (important)",
      "Lucian's pendant observed acting strangely — red and clear, almost bloodlike. Not connected to Bane.",
      "Plan set: Donnel → orc brother info → Camry Gorge → Hammerhead City → Strahd",
    ],
    cliffhanger: "Lucian's pendant is doing something. It is red and bloodlike and not connected to Bane. Nobody knows what it is connected to.",
  },
  {
    session: 15,
    title: "The Velento Heist — Theodas' Mansion",
    date: "29/3/26",
    location: "Velento — Theodas' Mansion",
    summary:
      "Xavier reappeared with updated intelligence: Theodas had become more reckless, the rift under Velento was still open and causing problems, and there were books and information in the mansion's treasure room worth finding. The reward was raised to 6,000gp. The party entered — a long corridor, six doors, each room a puzzle. The music room had a piano and a chessboard; the library opened into a sitting room with eight candles and a book about Elm Hollow; the kitchen was a decoy; the function room had a chandelier, a chessboard floor, and a clock reading 12:12 with the inscription 'Imagine asking a door to unlock.' Upstairs, they found Theodas dead in his bedroom. His diary entries told the story: he hadn't wanted to go further, but the rift under the city had already been opened, a Lich had escaped, and Crowley had made his power play. Galahad investigated the final box with a natural 20.",
    highlights: [
      "Xavier returned — reward raised to 6,000gp; Theodas more reclusive than ever",
      "Entered Theodas' mansion with Pass Without Trace — Morg rolled 27 on stealth",
      "Music room: piano, chessboard, clock reading 4:23 — sequence unlocked a passage",
      "Library: 30 shelves, 12 bookcases, clicking sound when Tainan pulled a book",
      "Sitting room: 8 candles, 'Tales of History: Heroes of Elm Hollow' bookmarked",
      "Function room: chandelier, chessboard tiles, clock at 12:12 — 'Imagine asking a door to unlock'",
      "Theodas found dead in his bedroom — knife in his back",
      "Theodas' diary: discovered the blight, the Underdark, Elm Hollow, the rift, the escaped Lich, Crowley's power grab",
      "Runes decoded — treasure room unlocked. Some cases covered in blood.",
      "Galahad rolled a natural 20 investigating the final item box",
    ],
    cliffhanger: "Crowley killed Theodas. Whether that was always the plan or something changed — the party doesn't know yet.",
  },
  {
    session: 16,
    title: "The Trophy Room, the Feather & Camry Gorge",
    date: "19/4/26",
    location: "Velento → Donnel → Camry Gorge",
    summary:
      "The treasure room yielded twelve items, each sealed in its own case. Some were mundane. Some were not. Morg and Keith took the raven feather — their eyes went black, they were cocooned in feathers, and they disappeared into a shadow realm. The coin went to Lucian, whose eyes turned red and who dropped to one knee while a voice told him to 'embrace the power bestowed upon you, Lomerian.' He gathered himself after a minute. The party left the mansion at midnight, found Gerald at the Rumble Inn, and took a long rest — two levels of exhaustion burned off. Xavier was waiting for the marble elephant. The Duke in Donnel received a full debrief. The wizard examined the Night Onyx and tied it off from other dark forces. The party teleported to the foot of Camry Gorge. Recon began. A cave troll. A blue-pink draconic creature on the ceiling. And somewhere deeper in — the orc brothers.",
    highlights: [
      "Twelve items recovered from the treasure room — envelope, pirate coin, feather, small shield, hairpin, mushroom, bottle, tree sample, crest, leatherbound book, moving eye",
      "Morg and Keith took the raven feather — eyes went black, cocooned, taken to a shadow realm",
      "Lucian took the pirate coin — eyes turned red, voice said 'Embrace the power bestowed upon you, Lomerian.' Struggled but recovered.",
      "Left the mansion at midnight — found Gerald at the Rumble Inn, long rest taken",
      "Marble elephant handed to Xavier",
      "Duke debriefed in Donnel — summarised all travels to date",
      "Wizard studied the Night Onyx — tied it off from other evil forces. Mentioned Dakkar, a northern dwarf, and a shield from the Molten Peaks.",
      "Teleported to Camry Village at the foot of the gorge — no full arsenal, start recon",
      "Gorge: extremely hot, broken buildings, high cliffs, nothing visible",
      "Cave 1: Cave Troll — defeated. Cave 2: 120ft cavern — blue-pink draconic creature on the ceiling — killed.",
    ],
    cliffhanger: "Morg and Keith are in a shadow realm with items from the trophy room laid out like an altar. The Raven Queen is involved. What she wants from them is not yet clear.",
  },
  {
    session: 17,
    title: "The Raven Queen's Champion & the Gorge",
    date: "31/5/26",
    location: "Camry Gorge",
    summary:
      "In the shadow realm, Morg was covered in raven feathers. Before them: a piece of feather, a raven skull, a scythe, and items from the puzzle room — arranged like offerings on an altar. The Raven Queen's face appeared. The party had returned a lost relic. In recognition, she offered more: a chance to unlock further Vestiges. Morg was named her Champion. Keith was named Warrior of the Raven Queen. They returned to the gorge in new armour. Meanwhile, the gorge itself continued to give the party problems — a purple worm burrowing through the path, craters to navigate, and at its end a large cavern with two ancient trees (Treants) at its centre, roots spreading rot and blight, mushrooms networked into a hive mind. They burned the trees. The session ended with fire and silence.",
    highlights: [
      "Morg and Keith in the shadow realm — items from the trophy room arranged on an altar",
      "Raven Queen appeared — confirmed the feather was a returned relic",
      "Morg named Champion of the Raven Queen",
      "Keith named Warrior of the Raven Queen — both returned in new armour",
      "Crummock introduced — half-orc, first-born, kicked out by the other two orc bosses",
      "Purple Worm discovered burrowing through the gorge floor — navigated around",
      "Entered the deepest cave — smell of decay and rot",
      "Two Treants found at the centre — roots spreading blight, connected to a mushroom hive-mind",
      "Trees set on fire — session ended",
    ],
    cliffhanger: "The Treants are burning. The orc brothers are deeper in. Morg is the Raven Queen's Champion and Keith is her Warrior. Whatever comes next — they are not going in as the same people who entered the gorge.",
  },
];

export const journeyMilestones: JourneyMilestone[] = [
  {
    title: "City of Donnel",
    location: "Donnel",
    description: "Where the Motley Marauders first formed — a city of temples, coin, and dangerous bounties.",
    icon: `<svg viewBox="0 0 20 20" fill="#f0c040" xmlns="http://www.w3.org/2000/svg" width="22" height="22"><rect x="1" y="11" width="4" height="8"/><rect x="6" y="6" width="5" height="13"/><rect x="12" y="8" width="4" height="11"/><rect x="17" y="4" width="2.5" height="15"/><rect x="7" y="10" width="1.2" height="1.8" fill="#1a1208"/><rect x="9.2" y="10" width="1.2" height="1.8" fill="#1a1208"/></svg>`,
    tags: ["Origin", "First Base"],
  },
  {
    title: "The Gnoll Hunt",
    location: "Wilderness outside Donnel",
    description: "Fifteen gnoll ears and a wizard's loot — the party's first real taste of the wilds.",
    icon: `<svg viewBox="0 0 20 20" fill="none" stroke="#f0c040" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" width="22" height="22"><path d="M5 4 L4 17 Q4 18 5 18 L15 18 Q16 18 15 17 L14 4 Z" fill="rgba(240,192,64,0.15)"/><path d="M14 7 C18 7 18 15 14 15"/><path d="M4 4 Q5.5 2.5 7 4 Q8.5 2.5 10 4 Q11.5 2.5 13 4 Q14.5 2.5 15 4"/><line x1="7" y1="8" x2="12" y2="8"/><line x1="7" y1="11" x2="12" y2="11"/><line x1="7" y1="14" x2="12" y2="14"/></svg>`,
    tags: ["Bounty", "Combat"],
  },
  {
    title: "Velento — The Sunken City",
    location: "Velento",
    description: "A cursed city beneath the surface, plagued by Night Terrors and guarded by an incubus.",
    icon: `<svg viewBox="0 0 20 20" fill="none" stroke="#f0c040" stroke-width="2" stroke-linecap="round" xmlns="http://www.w3.org/2000/svg" width="22" height="22"><path d="M1 5c1.2-1.6 2.5-1.6 3.8 0s2.5 1.6 3.8 0 2.5-1.6 3.8 0 2.5 1.6 3.8 0"/><path d="M1 10c1.2-1.6 2.5-1.6 3.8 0s2.5 1.6 3.8 0 2.5-1.6 3.8 0 2.5 1.6 3.8 0"/><path d="M1 15c1.2-1.6 2.5-1.6 3.8 0s2.5 1.6 3.8 0 2.5-1.6 3.8 0 2.5 1.6 3.8 0"/></svg>`,
    tags: ["Major Location", "Curse"],
  },
  {
    title: "The Goblin Village",
    location: "Goblin Village",
    description: "25,000gp earned. Ross got his mum's necklace back. Worth it.",
    icon: `<svg viewBox="0 0 20 20" fill="#f0c040" xmlns="http://www.w3.org/2000/svg" width="22" height="22"><circle cx="10" cy="10" r="8"/><circle cx="10" cy="10" r="5" fill="#1a1208"/><rect x="9.2" y="6.5" width="1.6" height="7" fill="#f0c040"/><rect x="7" y="9.2" width="6" height="1.6" fill="#f0c040"/></svg>`,
    tags: ["Bounty Completed", "Battle"],
  },
  {
    title: "Devil's Den",
    location: "Devil's Den",
    description: "Xavier revealed. Crawley is Lucian's father. A whispering well. A succubus in the dark.",
    icon: `<svg viewBox="0 0 20 20" fill="#f0c040" xmlns="http://www.w3.org/2000/svg" width="22" height="22"><path d="M10 1C7.5 6 6 8.5 6 12a4 4 0 0 0 8 0c0-1.8-.8-3-1.8-4.2C11.8 9.5 11 11 11 12.5 11 10 12 7.5 10 1z"/></svg>`,
    tags: ["Major Revelation", "NPC Lore"],
  },
  {
    title: "Cahiver Monastery",
    location: "Cahiver",
    description: "The rift is under the monastery. The mission: five stones, one Lich, one First Vampire. Ignacious is missing. The Raven Queen said keep going.",
    icon: `<svg viewBox="0 0 20 20" fill="#f0c040" xmlns="http://www.w3.org/2000/svg" width="22" height="22"><rect x="2" y="10" width="16" height="9"/><path d="M5 10V8A5 5 0 0 1 15 8v2" fill="none" stroke="#f0c040" stroke-width="2"/><rect x="8.5" y="12" width="3" height="7" fill="#1a1208"/><line x1="10" y1="2" x2="10" y2="6" stroke="#f0c040" stroke-width="1.5"/><line x1="8" y1="4" x2="12" y2="4" stroke="#f0c040" stroke-width="1.5"/></svg>`,
    tags: ["Investigation", "Mystery", "Level 5"],
  },
  {
    title: "The Prison Trials",
    location: "Prison",
    description: "Locked up and forced to fight. The orc brothers Morvith and Malzaroth watched from the shadows.",
    icon: `<svg viewBox="0 0 20 20" fill="none" stroke="#f0c040" stroke-width="2.5" stroke-linecap="round" xmlns="http://www.w3.org/2000/svg" width="22" height="22"><line x1="5" y1="2" x2="5" y2="18"/><line x1="10" y1="2" x2="10" y2="18"/><line x1="15" y1="2" x2="15" y2="18"/><line x1="2" y1="7" x2="18" y2="7"/><line x1="2" y1="13" x2="18" y2="13"/></svg>`,
    tags: ["Combat", "Captivity"],
  },
  {
    title: "The Red Fall",
    location: "Open Sea → Tattenmore",
    description: "Lucian's old ship. His old captain. Pirates hit mid-crossing. Thalara died — then didn't. The mystery potions were finally identified.",
    icon: `<svg viewBox="0 0 20 20" fill="none" stroke="#f0c040" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" width="22" height="22"><circle cx="10" cy="5" r="2.5"/><line x1="10" y1="7.5" x2="10" y2="18"/><path d="M4 13a6 6 0 0 0 12 0"/><line x1="4" y1="10" x2="16" y2="10"/></svg>`,
    tags: ["Sea Voyage", "Near-Death"],
  },
  {
    title: "Azkellion — The Dragon",
    location: "Azkellion",
    description: "Mephiston's village burning. His best friend dead. A year of memories missing. The Great Protector — an Ancient Green Dragon — told the party to run. They didn't.",
    icon: `<svg viewBox="0 0 20 20" fill="#f0c040" xmlns="http://www.w3.org/2000/svg" width="22" height="22"><path d="M10 18L2 8l4 2.5L4.5 4 9 9V5l1.5 3.5L12 5v4l4.5-5-1.5 6.5L18 8z"/></svg>`,
    tags: ["Dragon", "Level 6"],
  },
  {
    title: "The Sea Serpent",
    location: "Open Sea",
    description: "Life Transference kept someone breathing. 17 scales as proof. Lucian's pendant grows suspicious.",
    icon: `<svg viewBox="0 0 20 20" fill="none" stroke="#f0c040" stroke-width="2.5" stroke-linecap="round" xmlns="http://www.w3.org/2000/svg" width="22" height="22"><path d="M5 3c5 0 8 3 8 6.5S9 15 9 17.5c0 1.2 1.5 2.2 3.5 2.2"/><circle cx="5" cy="3" r="1.8" fill="#f0c040" stroke="none"/></svg>`,
    tags: ["Sea Combat", "Lore"],
  },
  {
    title: "Theodas' Mansion Heist",
    location: "Velento",
    description: "Puzzle rooms, clock riddles, piano codes. Crowley killed Theodas. 6,000gp reward.",
    icon: `<svg viewBox="0 0 20 20" fill="#f0c040" xmlns="http://www.w3.org/2000/svg" width="22" height="22"><rect x="3" y="9" width="14" height="10" rx="2"/><path d="M7 9V6.5a3 3 0 0 1 6 0V9" fill="none" stroke="#f0c040" stroke-width="2.5" stroke-linecap="round"/><circle cx="10" cy="14" r="2" fill="#1a1208"/></svg>`,
    tags: ["Heist", "Major Revelation"],
  },
  {
    title: "The Trophy Room & the Feather",
    location: "Velento → Camry Gorge",
    description: "Twelve sealed items from Theodas' treasure room. Morg and Keith touched the raven feather — blacked out, cocooned, gone. Lucian's coin turned his eyes red and called him Lomerian. The Night Onyx was tied off. The gorge: a cave troll, a draconic creature on a cave ceiling, and something worse further in.",
    icon: `<svg viewBox="0 0 20 20" fill="#f0c040" xmlns="http://www.w3.org/2000/svg" width="22" height="22"><path d="M10 2C8 5 5 8 5 12a5 5 0 0 0 10 0c0-2-1-4-2-5.5C12.5 8.5 12 10 12 12c0-2.5 1-5-2-10z"/><path d="M10 12v6" stroke="#f0c040" stroke-width="1.5" stroke-linecap="round"/></svg>`,
    tags: ["Major Revelation", "Raven Queen", "Level 7"],
  },
  {
    title: "Raven Queen's Champion",
    location: "Shadow Realm → Camry Gorge",
    description: "In the shadow realm, the Raven Queen named Morg her Champion and Keith her Warrior — both returned in new armour. The gorge delivered a purple worm, ancient rot, and two Treants at the centre of a mushroom hive-mind. They burned the trees. The orc brothers are still ahead.",
    icon: `<svg viewBox="0 0 20 20" fill="#f0c040" xmlns="http://www.w3.org/2000/svg" width="22" height="22"><path d="M10 2l-1.5 4H4l3.5 2.5L6 13l4-2.5L14 13l-1.5-4.5L16 6h-4.5z"/><path d="M7 14c0 3 1.5 4.5 3 4.5S13 17 13 14" fill="none" stroke="#f0c040" stroke-width="1.5" stroke-linecap="round"/></svg>`,
    tags: ["Champion", "Boss Fight", "Raven Queen"],
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
  {
    text: "So close. But so far.",
    speaker: "Mephiston",
    context: "Said with a wink to Morg after she fumbled Hold Person on a non-humanoid in the Cahiver tavern. It smelled familiar.",
    session: 6,
  },
  {
    text: "Run. You will not survive this.",
    speaker: "The Great Protector",
    context: "The Ancient Green Dragon's first words to the party inside the cave. They did not run.",
    session: 9,
  },
  {
    text: "The Red Fall. He named it the Red Fall. Of course he did.",
    speaker: "Leucian",
    context: "On recognising the name of Captain Damon's ship — his old ship's name — in Bellport.",
    session: 8,
  },
];
