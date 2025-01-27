const subheader_obj = {
	"1":"TP cost",
	"2":"Limit cost",
	"3":"Speed",
	"4":"Skill accuracy",
	"5":"Acc. (mod)",
	"6":"Field effect",
    "7":"UNUSED",
	"8":"DMG mult if ailment",
	"9":"DMG mult per ailm.",
    "10":"UNUSED", //Difference-based lifesteal
	"11":"Lifesteal %",
    "12":"UNUSED",
    "13":"UNUSED",
	"14":"If front multiplier",
	"15":"If back multiplier",
    "16":"UNUSED",
    "17":"UNUSED",
	"18":"Swap row on hit (?)",
    "19":"UNUSED",
    "20":"UNUSED",
    "21":"UNUSED",
    "22":"UNUSED",
    "23":"UNUSED",
    "24":"UNUSED",
	"25":"Chase chance red.",
	"26":"Maximum chases",
	"27":"Use weap DMG type", //I'm not super sure about this one. It's on All Out and it seems to ignore a flag that checks if the attack has no base type?
    "28":"Bot chase elem.", //unsure
	"29":"DMG type from bot",
    "30":"Elem from attack",
	"31":"Uncounterable",
    "32":"UNUSED", //stacking charge turn duration (doesn't work)
	"33":"Horseplay",
    "34":"UNUSED",
    "35":"Mult per buff",
    "36":"Mult per debuff",
    "37":"UNUSED",
    "38":"UNUSED",
	"39":"Chance to endure",
    "40":"UNUSED",
    "41":"UNUSED",
	"42":"Day bonus DMG %",
	"43":"UNUSED",
	"44":"Night bonus DMG %",
	"45":"Splash %",
    "46":"UNUSED", //related to 47
    "47":"Ocean Drop",                      //TODO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	"48":"Damage vs. Binds", //just binds?
	"49":"Reduce chance", //chance reduction after minimum hits it seems
    "50":"UNUSED",
	"51":"DW max hit mult",
	"52":"Valid kill target", //only one monster skill has this
	"53":"Target mod",
	"54":"UNUSED",
	"55":"UNUSED",
	"56":"Ailment chance",
	"57":"Chance vs. ailment",
    "58":"UNUSED",
	"59":"Unknown59",
	"60":"Missing HP mult",
    "61":"UNUSED",
	"62":"UNUSED", //Buc Nin - deals damage based on the last source of damage
	"63":"UNUSED",
	"64":"Damage %",
	"65":"Pincushion DMG",
	"66":"Restore rate",
	"67":"HP restore",
	"68":"TP restore",
	"69":"Self-damage %",
	"70":"UNUSED",
	"71":"Self-destruct",
    "72":"UNUSED",
	"73":"Target acts next", //knighthood
    "74":"UNUSED",
	"75":"Min hits",
	"76":"Max hits",
	"77":"Skill link (ID)",
	"78":"Link after turns",
	"79":"Summon monster",
	"80":"Summon amount",
	"81":"Poison damage",
	"82":"Charge %",
	"83":"Ailment mod",
	"84":"Bind mod",
	"85":"DMG reduction %",
	"86":"Same row DR bonus",
	"87":"Preemptive chance",
    "88":"UNUSED",
	"89":"Field steps",
    "90":"% of Throw dmg", //TODO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    "91":"UNUSED",
	"92":"Flee chance",
    "93":"UNUSED",
	"94":"Crit damage", //replaces crit damage instead of buffing it
    "95":"UNUSED",
    "96":"UNUSED",
    "97":"UNUSED",
    "98":"UNUSED",
    "99":"UNUSED",
	"100":"something to do with subheaders", //figure it out - not in data
    "101":"UNUSED",
    "102":"UNUSED",
    "103":"Store damage turns", //hmm
    "104":"% of damage taken", //a cumulative counter, divided across the team
	"105":"% of damage taken", //reflection
	"106":"Beast to summon",
	"107":"Link on summon",
	"108":"Beast base HP",
	"109":"Beast stat mult",
	"110":"Link after use", //target self-team
	"111":"Link after use", //target enemy team
	"112":"Link on use",
	"113":"Weapon type", //this is really weird. I'll need to investigate it in detail later
	"114":"Bot skill ID",
	"115":"Bot damage mult",
	"116":"Clone^2 * this mult", //find better wording
	"117":"Avoid DMG chance",
	"118":"Chance to sprout",
	"119":"Bonus DMG taken", //warrior might
	"120":"Bot HP and TP",
	"121":"Bodyguard DMG %", //How does this differ from 85?
	"122":"Clone HP/TP",
    "124":"Abyssal God Event",
	"125":"Line free cast",
	"126":"Link when attacked",
	"127":"Block and link W.A.",
	"128":"Link on ally hit",
	"129":"DOESN'T EXIST!",
	"130":"Link on line hit", 
    "133":"Unused", //Found in the accuracy subheader
	"134":"Cannot miss",
	"135":"Cannot repeat", //shoot - may also be "cannot be chased"
	"136":"Use weap ani/snd", //all out - may also be "cannot be chased"
	"137":"Unknown137", //narmer's earthquake
	"139":"Hit twice", //??? not certain
    "140":"Cast twice", //also not sure
	"142":"Ignore DEF buffs",
    "143":"Some unused ailment thing",
	"144":"Use ailment on self",
	"145":"Double TP cost",
	"146":"Die after use",
	"147":"All drops on kill",
	"148":"Guaranteed evasion",
	"149":"Dispel arms buff",
	"150":"Join clones after",
	"151":"Target acts first", //knighthood
	"152":"Act first", //quick draw
	"153":"Rear Dignity flag",
	"155":"1% DMG per miss HP",
	"156":"Clear ailment AR",
	"157":"Clear bind AR",
    "158":"Normal death anim.", //death fang (call tiger)
	"159":"Formaldehyde",
    "160":"Flee to pole",
	"161":"Provoke flag",
	"162":"Unknown162", //enemy kaishaku heal?
	"162":"Skip heal message",
	"164":"Defrag flag", //again, not sure what this does exactly. don't care enough to find out
	"165":"Yggdroid bind flag", //I don't actually know what this is for. it seems to do... something with binds.
	"166":"Restrict to bots",
	"167":"Kill bots after use",
	"168":"Check for bot", //all out works only with bots
	"170":"Buff duration",
    "171":"Basic ATK %", //applies to basic attacks only
	"172":"Use skill at EOT",
    "173":"Link on buff end", //Fortress
	"174":"ELE weakness %",
	"175":"DEF % (ailment)",
	"176":"ATK % (ailment)",
	"177":"ATK %",
	"178":"Damage taken %",
	"179":"ATK %", //daifuhensha and fore honor
	"180":"Damage taken %", //rear dignity and other things
	"181":"ATK %", //rear dignity
	"182":"Bonus DMG taken", //not sure how this differs from 119
	"183":"Fore Honor flag",
	"184":"Rear dignity buff",
	"186":"Max HP %",
	"194":"Accuracy %", //this is the buff version, which differs from 284
	"197":"Evasion",
	"200":"Draw rate modifier",
	"205":"Ailment immunity", //205 and 206 are, as far as I can tell, identical in the game's code
	"206":"Ailment immunity",
	"207":"Bind immunity",
	"208":"Guaranteed crit",
    "212":"DMG Up %", //unused - this subheader provides a damage buff regardless of the buff type
	"214":"Passive buff dur.", //unused. this subheader, if found in a passive, seems to make it so all buffs that are applied by the user to have a specific duration rather than what's specified on the skill.
	"215":"Cast when buffed",
	"216":"Cast on buff use",
	"218":"Use twice chance",
	"219":"Splash chance",
	"220":"DMG Up %",
	"221":"Parry chance",
	"222":"Stun chance",
	"223":"DEF %", //passive for guardian
	"226":"Bonus hit chance",
	"227":"UNUSED PRIORITY SUBHEADER", //roll a number between x and the subheader value. if found, this character gets +17,000 speed (EO2 1st Hit) [quickness]
	"228":"Full DMG in back",
	"229":"TP cost reduction",
	"230":"Bonus crit chance",
	"231":"Crit during night",
	"232":"Instant kill chance",
	"235":"Use on evade",
	"237":"UNUSED PRIORITY SUBHEADER",
	"238":"UNUSED PRIORITY SUBHEADER",
	"239":"Heal mult %", //form qi
	"240":"Use on skill use",
	"241":"Use on death", //target allies
	"242":"Use on death", //target enemies
	"243":"Chance to revive",
	"244":"Use on ally death",
	"245":"Use on ally death 2", //how does this differ from 244?
	"246":"Bonus bind chance", //unused
	"247":"Bonus ailment chance", //unused
	"248":"Recovery chance",
	"249":"HP on kill", //extend. HP only?
	"250":"TP on kill", //etheric return. TP only?
	"251":"ATK on kill",
	"252":"DMG vs. weakness",
	"253":"% health required",
	"254":"If HP full on front",
	"255":"Use when bound",
	"256":"Heal at battle end",
	"257":"Bonus EXP %",
	"258":"Activate chance", //seen in endure
	"259":"Bonus drop rate %",
	"260":"Rare drop chance",
	"262":"DMG % vs. high HP",
	"263":"Beast DMG %",
	"264":"Beast DEF %",
	"265":"Beast HP %",
	"267":"Chance to trigger", //with beast
	"268":"Beast ailment %",
	"269":"Beast draw chance",
	"270":"Beast draw chance", //not sure why it has two subheaders for this
	"272":"Passive Aggro",
	"273":"Dual wield DMG %",
	"274":"Use on defend",
	"276":"Ailment resistance",
	"277":"Reduce blindside chance", //unused
	"278":"Avoid blindside %",
	"279":"Use on DMG skill",
	"280":"UNUSED",
	"281":"Use on buff expire",
	"282":"Fail if this ailment",
	"283":"Hit %",
	"284":"Evasion %",
	"285":"Hit rate at night",
	"286":"Dodge rate at night",
    "288":"UNUSED LINKING SUBHEADER", //use an autoattack when buff is applied. should have had an RNG roll but is guaranteed in the final code
	"289":"Damage while ailment", //unused. ailment goes in the main ailment header. probably used in EO2 sight
	"290":"Use on revive",
	"291":"HP cost on skill",
	"292":"Link when hit %", //used only on EM barrier
	"293":"HP threshold", 
	"294":"Activation chance", //kaishaku
	"295":"Act first",
	"296":"Act last",
	"306":"Drain damage",
	"308":"UNUSED", //checked for in a subheader handler
	"312":"UNUSED PRIORITY SUBHEADER", //checked for in priority function
	"314":"Block element",
    "315":"UNUSED",
    "319":"UNUSED",
	"320":"UNUSED LINKING SUBHEADER", //checked for in linking function
	"324":"Sword DMG %",
	"325":"Club DMG %",
	"326":"Spear DMG %",
	"327":"Shield DMG %",
	"328":"Rapier DMG %",
	"329":"Gun DMG %",
	"330":"Knife DMG %",
	"331":"Unarmed DMG %",
	"332":"Unarmed DMG %", //this is actually used in wild mastery, but it's just 100% for each value. weird
	"334":"Bolt DMG %",
	"335":"Katana DMG %",
	"336":"UNUSED YGGDROID PASSIVE", //immobilizes the yggdroid every x turns
	"337":"HP Up %", //note: this subheader doesn't actually change things
	"338":"TP Up %", //nor does this one
	"342":"AGI Up % (unused)",
	"343":"LUC Up % (unused)",
	"344":"Bonus ESC chance",
	"345":"Bonus limit",
	"346":"EXP Bonus % (/10)",
    "347":"Golem endure",
    "348":"Golem endure HP",
    "349":"Use on death (RNG)",
    "350":"Chance to use",
    "352":"Use on death",
    "353":"Swallow HP%", //guess
    "354":"Swallow Whole%",
    "356":"Red Pas. Multiply",
    "357":"Blue Pas. Multiply",
    "358":"Gold Pas. Multiply",
    "359":"Lay egg on death",
}

const e_name = ["Blank","Attack","Claw Cut","Poison Gun","Membrane","Sea God's Anger","Lightning Drop","Panic Rush","Poison Tail","Thorn","100-Leg Bind","Bite Off","Vine Dance","Choke","Chomp","Charge","Crush","Greedy Fang","Sharp Fang","Call Allies","Breath","Jump","Muddle Roar","Defend","Ruin Claw","Ferocious Fish","Decay Breath","Life Absorb","Regen","Power Fang","Cover","Absorb Spirit","Withering Glare","Shell","Foul Spew","Mud Ink","Tear Apart","Aqua Shot","Ruin Fangs","King's Gift","Ice Slurry","Cuff Fangs","Dampen Claw","Claw Chop","Charge In","Ancient Curse","Unload","Combust","Ice Aura","Constricting Leg","Bloody Supper","Poison","Yawn","Twine","Fireball","Crazy Swipe","Mud Spit","Worm Crack","Heavy Fire","Call Allies B","Burning Wind","Fumes","Evil Cry","Flame Claw","Hiss","Ram","Venom Fang","Sticky Acid","Throw","DEFend Stance","Throw","Greedy Claws","Predator","Empress Hammer","Duster","Panic Spores","Double Fire","Bide Time","Great Spike","Roar","Lullaby of Rest","Blast Assault","Frost Lap","Fishman Drug","Icicle","Bouha Stance","Rush","Gale Blade","Torpedo","Ice Burn","NONE","Crushing Fang","Ominous Step","Dino Crush","Antihuman Fire","Dis-Element","Zone Icicle","Leaping Slash","Crystal Edge","Nightmare Solo","Soulshaking Song","Dazzling Eye","Bamboo Splicer","Ground Shake","Bronze Fang","Zone Thunder","Zone Blaze","Ice Beast","Wide Cut","Counter","Sea Guillotine","Deadly Incisor","Gel Electrolyte","Sleeper","Petals","Lightning Call","Bullrush","Moon Prayer","Venom","Branch","Stunning Spore","Diving Breath","Silent Claw","Stone Needle","Bolt Spread","Heavenly Bolt","Stinky Mist","Thunderclap","Dozing Gaze","Crazed Shout","Divine Storm","Exhaust Field","Phosphorescence","Amputate","Scythe Dance","Curse Spores","Violent Vines","Tangling Vines","Scorching Hell","Bewildering Eye","Snapping Teeth","Discharge","Crazy Noise","Binding","Mad Charge","Stone Eye","Spirit Dry","Parasite Venom","Dragon Head","Seven Plagues","Halloween","NONE","NONE","NONE","NONE","NONE","Self-Destruct","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","Change","NONE","NONE","NONE","NONE","NONE","NONE","Spurting Fumes","Kaishaku Heal","NONE","NONE","NONE","Imperial Pride","NONE","NONE","Counter","NONE","NONE","NONE","NONE","NONE","Crystal Edge","Reversal Spore","NONE","NONE","NONE","NONE","Counter","Mud Throw","Fin Smack","Whip Ripper","Earthquake","Marsh Dive","Submerged Move","Escape","Grand Berry","Ocean Rave","Spout","Great Melody","Freeze Ripple","Souha Stance","Tenchi Souha Sho","Disperse","Focus","Line Slice","Punching","Iron Claw","Heat Ray","Blizzard Breath","Electric Flash","Malfunction","Lament","Dubious Mist","Thin Ice","Thunder Wrath","Ocean Drop","Sweet Song","Brandish","Grasp Arm","Liberation","Uzurai","Punishment","Dark Breath","Thorn Cutter","Vine Rush","Spine Blaze","Frozen Eye","Death Thunder","Liberate","Accumulate","Bite Off","Shark Rush","Evil Placoid","Charge","Baracuda","Heated Shot","Dazzling Aurora","Arrest Mine","Oil Cannon","Thunder Cannon","Thunder Feather","Godly Flash","Panic Claw","Ice Crush","Heavenly Light","Critical Break","Fuming Snort","Fumes","Tie Up","Overeat","Hard Scale","Cold Wave","NONE","Violent Grudge","Withstand","NONE","Tentacle Grab","Cnidocyte Rush","Tentacle Reap","Tentacle Suck","Twin Ice Spear","Ice Breath","Ice Pillar","Twin Fire Spear","Fire Breath","Fire Pillar","Twin Volt Spear","Volt Breath","Volt Pillar","Dragon Quake","Ultimate Ruin","Regenerate","Devilish Smile","Misfortune","Breath of Envy","Mist Robe","Cold Stare","Demon Kiss","Reflection","Multi Hammer","Triple Hammer","Death Tentacle","Squid Press","Tidal Wave","Shower","Restoration","Supernova","Black Fire","Scarlet Ice","Green Flash","Grand Dive","Wing Rush","Ancient Breath","NONE","Magma Ocean","Ice Tempest","Proton Thunder","Regenerator","NONE","NONE","NONE","NONE","Nameless Wall","Mist Curtain","Chaotic Beckon","Spurting Fumes","Abyssal Offering","NONE","Demon Rage","Rising Claw","Chaos Tentacle","Primitive Burn","Foul Glacier","Dark Lightning","Ripping Neigh","Fetter Dance","Tail Swing","Divine Wrath","Retribution","Imperial Pride","Summons","Fortress","Conciliate","Restraint","Cruel Stare","Cruelty","Demon Reaper","Falcon Thrust","War Spirit","Kaitou Ranma","Ouka no Mai","Frigid","Regen","Iceblock","NONE","NONE","Zero Point","Shower","NONE","NONE","NONEDATA","NONE","Regen","Magic Lullaby","Petrivoice","Darkness Coil","Poison Tale","Voltage","Curse","Corrupt","Fangs","Blow","Searing","Howling","NO DATA","Beat","Red Fang","Strike","Aquaveil","Flood","Coiling","Ice Gaze","Frost Smile","Shock","Tentacle Beat","Vampire Kiss","Pollen","Cry Soul","Embrace","Lullaby","Tentacle","Six Sins","NO DATA","NO DATA","NO DATA","Corroding Acid","Lay Egg","Swallow Whole","Phoenix","Multiply","Multiply","Multiply","Poison Seeds","Scream","Poison Spores","Self-Destruct 1","Palsy Destruct","Endure"]; //it's gross but there's really no reason to load it as a data file tbh

const p_name = ["Blank","Attack","HP Up","TP Up","Bandage","Combat Study","Limit Boost","AGI Up","LUC Up","Esc Up","Limit Boost","Chop","Mine","Take","Royal Veil","Monarch March","Royal Lineage","Triumphant Cry","Reinforce","Nobility Proof","Attack Order","Guard Order","Elemental Bomb","Negotiation","Inspire","Ad Nihilo","Fire Arms","Freeze Arms","Shock Arms","Regal Radiance","Prevent Order","Protect Order","Knighthood","Endless Battle","Sword Mastery","Club Mastery","Avenger","Fierce Strike","Wild Swings","Iron Will","Berserker Vow","Wolf Howl","Grand Colosseum","Break","Rush","Bind Cut","Bloodthirst","Blade Rave","Crushing Blow","Arm Breaker","Freezing Blow","Nine Smashes","Guardian","Spear Mastery","Shield Mastery","Parry","Rhongomyniad","Rex Hasta","Exploit Weakness","Provoke","Shrug Off","Gáe Bolg","Gungnir","Geirskögul","Aegis","Hoplon","Phalanx","Gradivus","Bodyguard","Overwatch","Vigilance","Trickster","Rapier Mastery","Gun Mastery","Swashbuckling","Lady Luck","Drunken Brawler","Eagle Eye","Quick Draw","Rapid Fire","Chase Flame","Chase Ice","Chase Volt","Lights Out","Hanging","Chase Weapon","Limit Boost","Cheers, Matey!","Pincushion","Double Tap","Mystic Calm","Beheading","Katon","Reflexes","Hyouton","Knife Mastery","Raiton","Otori","Epidemic","Ninpo: Double","Seiton Tenchu","Ninpo: Needles","Ninjutsu","Ninpo: Shuriken","Shadow Bind","Hawk Strike","Izuna","Chimatsuri","Genjutsu","Form Qi","Fist Mastery","Ascetic Deeds","Full Cleansing","Blood Return","Sanctify","Kikouken","Healing","Clinch","Full Heal","Counter","Retaliate","Merciful Heal","Resurrect","Aura Blast","Group Heal","Breakfire Fist","Darkness Fist","Meditation","Etheric Return","Inferno","Cocytus","Thor","Ether Mastery","Singularity","Etheric Charge","Dark Ether","Meteor","Fire Star","Binary Fire","Prominence","Ice Star","Binary Ice","Deluge","Volt Star","Binary Thunder","Tempest","Supernova","Spirit Fang","Wild Mastery","Beast Soul","Sacrifice","Nature Pact","Primal Energy","Beast Roar","Primal Drums","Dismiss Beast","Call Bird","Call Snake","Call Mole","Call Slime","Call Cow","Call Owl","Call Pasaran","Call Tiger","Call Lion","Call Ooze","Giant Kill","Bolt Mastery","Adrenaline Rush","Night Vision","Resilience","Proper Form","Sagittarius Arrow","Smoke Grenade","Apollo's Wrath","Heavy Shot","Artemis' Embrace","Eros' Carnage","Armor Piercer","Fire Barrage","Front Mortar","Ice Barrage","Volt Barrage","Cloudbuster","Ambush","Earth's Bounty","Death Blight","Contagion","Camp Mastery","Witchcraft","Keen Nose","Devil's Candle","Dust Devil","Rotten Egg","Lullaby","Strange Seeds","Offering","Harvest Time!","Malediction","Safe Stroll","Devil's Snare","Thorn Bind","Mesmerize","Harvestry","Second Sword","Katana Mastery","Endure","Upward Slash","Bloody Lance","Morale Boost","Charging Thrust","Hilt Strike","Morning Star","Twilight Hour","5-Ring Sword","Great Warrior","Warrior Might","Fore Honor","Rear Dignity","Ambush Stance","Alertness","Blitz Command","Sheath Strike","Sleep Mode","Overheat","Bastion","Family's Warmth","Infravision","Data Mining","Benben","Perkins","Pascal","Fortification","Reflector","Shoot","All Out","Rocket Punch","Rocket Head","Rocket Jump","Annihilation","Rocket Engine","Defrag","Cross Slash","Indomitable","Charge Tactic","Mumyouken","Guard Tactic","Second Wind","Regroup Tactic","Aegis Defense","Hellfire","Lucky Hammer","Absolute Zero","Aegis Barrier","Tri-Magic","Superspeed","Typhoon Bolt","Aegis Shield","Chain Blast","Star Smasher","Wind Tactic","Uroboros Guard","Immortal","Buc Farm","Buc Nin","Buc Mon","Buc Farm","Nin Prin","Nin Glad","Nin Farm","Nin Do","Nin Farm","Foot Pierce","Wind Wrap","Aerial Talons","Slime Protection","Bull Run","Sleep Powder","Self-Destruct","Death Fang","Regal Authority","Ooze Protection","Foot Pierce","Wind Wrap","Aerial Talons","Slime Protection","Bull Run","Sleep Powder","Self-Destruct","Fierce Counter","Regal Authority","Ooze Protection","NONE","NONE","NONE","NONE","Ooze Protection","Ooze Protection","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","Death's Door","Blitz Command","NONE","Reflector","Artemis' Embrace","Mercful Heal","Ice All","Volt All","NONE","Upper Stance","Middle Stance","Lower Stance","Spirit Reprisal","Nin Prin","Apollo's Wrath","Eros' Carnage","IMPORTANT","IMPORTANT","NONE","NONE","NONE","Defend","Escape","NONE","Medica Type","Amrita Type","Hamao Type","Nectar Type","Nectar Type","Soma Type","Theriaca A","Theriaca A","Theriaca B","Field?","Sanctify","Bombardment","IMPORTANT","Discharge","Protect Order","NONE","Strange Seed","Tiger Counter","Warrior Might","Cloudbuster","Counter","Retaliate","Chase Weapon","Drunken Brawler","Medicinal Lick","Chase Flame","Chase Ice","Chase Volt","Speed Up","Ambush Stance","Rocket Punch","Rocket Head","Rocket Jump","Benben","Perkins","Pascal","Fire All","Infect","Restore Mark","Fire Prophecy","Ice Prophecy","Volt Prophecy","Last Chase","Metapon","Unihorn","Bravant","Clairvoyant","Fire Mist","Ice Mist","Volt Mist","Cut Mist","Bash Mist","Stab Mist","Blaze Oil","Freeze Oil","Shock Oil","Fire Jar","Flame Jar","Ice Jar","Frost Jar","Volt Jar","Storm Jar","Poison Gas","Stun Gas","Blind Gas","Sleep Gas","Curse Gas","Addle Gas"]

const text_headers = ["Max level","Skill type","User Req","Target Req","Target Type","Target Team","Where Use","Buff/Debuff","B/D type","Unknown","B/D element","DMG element","ACureorInf","Ailment","Skill fl","Unknown 2"]; //I don't like this. I should rewrite it as an object probably

const error_m = ["No error. Why are you here?","Error! ID must be under 400 for enemy table.","Error! ID must be under 421 for player table.","Error! Skill name not found (make sure the checkbox is correct).","Error! Skill table size mismatched. This should never happen."]; //same with this
