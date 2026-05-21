export interface EnemyBehavior {
	mode: string;
	description: string;
}

export interface EnemyWeakPoint {
	point: string;
	description: string;
}

export interface Enemy {
	id: string;
	name: string;
	threatLevel: 'Fodder / Swarm' | 'Standard' | 'Heavy / Elite' | 'World Boss';
	mobility: 'Ground-based' | 'Aerial' | 'Turrets/Stationary';
	damageType: 'Ballistic' | 'Explosive' | 'Energy/Laser';
	armorType: string;
	primaryAttack: string;
	secondaryAttack: string;
	spawnsIn: string;
	overview: string;
	behavior: EnemyBehavior[];
	weakPoints: EnemyWeakPoint[];
	tactics: string;
	lootDrops: {
		guaranteed: string;
		common: string;
		rare: string;
	};
	lore: string;
	primaryWeakness: string;
	keyDrop: string;
	image: string;
	icon: string;
}

export const ENEMIES: Enemy[] = [
	{
		id: 'bastion',
		name: 'Bastion',
		threatLevel: 'Heavy / Elite',
		mobility: 'Ground-based',
		damageType: 'Ballistic',
		armorType: 'Heavy Plating (Resistant to Light Ammo)',
		primaryAttack: 'Twin Rotary Cannons',
		secondaryAttack: 'Ground Stomp (AoE Knockback)',
		spawnsIn: 'Dam Battlegrounds, Spaceport (often guarding Key Rooms)',
		overview: 'The Bastion is a massive, heavily armored ground unit designed to hold territory. It is slow-moving but features extreme durability and devastating suppressing fire. Engaging a Bastion head-on is a death sentence; squads must use cover and flanking maneuvers to expose its vulnerabilities.',
		behavior: [
			{ mode: 'Patrol Mode', description: 'Slowly roams high-tier loot zones. Scanning laser is highly visible.' },
			{ mode: 'Combat Mode', description: 'Locks onto the nearest target and spams rotary cannon fire.' },
			{ mode: 'Defense Mechanism', description: 'If a player gets too close, it will perform a hydraulic stomp that deals massive damage and throws players backward.' }
		],
		weakPoints: [
			{ point: 'Armor Stripping', description: 'The Bastion\'s main chassis is completely bulletproof. You must shoot the orange/yellow armor plates on its sides to blow them off.' },
			{ point: 'The Cooling Vents (Primary Weak Point)', description: 'Once the side armor is destroyed, glowing blue cooling vents are exposed. Focus all fire here for 3x critical damage.' }
		],
		tactics: 'Have one squadmate use a Photoelectric Cloak to sneak behind the Bastion and throw a Pulse Mine to stagger it, while the other two players shoot the side plates. Armor-piercing rounds from Sniper Rifles (like the Tempest) are highly recommended.',
		lootDrops: {
			guaranteed: '15x Scrap Metal, 5x Heavy Ammo drops.',
			common: 'Bastion Targeting CPU (used for high-tier optics crafting).',
			rare: 'Unidentified Encrypted Blueprint.'
		},
		lore: '"Don\'t play hero with a Bastion. If you don\'t have explosives or heavy rounds, just hide in the rubble and wait for it to pass. It ain\'t worth losing your haul." - Unknown Raider',
		primaryWeakness: 'Side Cooling Vents',
		keyDrop: 'Targeting CPU',
		image: 'https://placehold.co/800x400/1a1a1a/FF0000?text=Bastion+Tank',
		icon: '💀💀💀'
	},
	{
		id: 'tick',
		name: 'Tick',
		threatLevel: 'Fodder / Swarm',
		mobility: 'Ground-based',
		damageType: 'Explosive',
		armorType: 'Light / Unarmored',
		primaryAttack: 'Self-Destruct (Small AoE)',
		secondaryAttack: 'Leap Attack',
		spawnsIn: 'All Zones (often found in clusters in urban areas)',
		overview: 'Ticks are small, fast-moving quadrupedal machines designed to overwhelm intruders through sheer numbers. Individually weak, they become a massive threat when a swarm surrounds a distracted Raider.',
		behavior: [
			{ mode: 'Dormant', description: 'Clings to walls or ceilings, blending into the environment until disturbed.' },
			{ mode: 'Swarm Mode', description: 'Rushes the target erratically, attempting to leap and detonate on impact.' }
		],
		weakPoints: [
			{ point: 'Central Eye', description: 'Shooting the red glowing eye causes immediate detonation, often taking out nearby Ticks.' }
		],
		tactics: 'Do not let them get close. Use SMGs or Assault Rifles to pick them off at a distance. If swarmed, an EMP Grenade will instantly disable all Ticks in its radius.',
		lootDrops: {
			guaranteed: '1x Scrap Metal.',
			common: 'Synthetic Polymer.',
			rare: 'Volatile Explosive Compound.'
		},
		lore: '"Watch the ceilings. If you hear that clicking sound, you already have three of them above you." - Speranza Scavenger Guide',
		primaryWeakness: 'EMP / Explosives',
		keyDrop: 'Explosive Compound',
		image: 'https://placehold.co/800x400/1a1a1a/FF0000?text=Tick+Swarm',
		icon: '💀'
	},
	{
		id: 'snitch',
		name: 'Snitch Drone',
		threatLevel: 'Standard',
		mobility: 'Aerial',
		damageType: 'Energy/Laser',
		armorType: 'Light Shielding',
		primaryAttack: 'Target Designator (Calls Reinforcements)',
		secondaryAttack: 'Light Plasma Volley',
		spawnsIn: 'Open fields, patrolling extraction zones',
		overview: 'The Snitch is a scout drone that patrols the skies. While its offensive capabilities are minimal, it serves as the eyes of the ARC network. If it spots a Raider, it will paint the target with a laser and call in drop-pods containing heavier combat units.',
		behavior: [
			{ mode: 'Search Pattern', description: 'Flies in large circular patterns scanning the ground with a sweeping blue cone.' },
			{ mode: 'Alert Mode', description: 'Cone turns red, it emits a loud siren, and begins dodging incoming fire while summoning reinforcements.' }
		],
		weakPoints: [
			{ point: 'Rotor Hubs', description: 'Destroying any of the four rotor hubs will send the drone crashing to the ground.' }
		],
		tactics: 'Stealth is preferred. If you must engage, coordinate with your squad to destroy it instantly before it can finish its alert broadcast. Smoke grenades break its line of sight and interrupt the summoning sequence.',
		lootDrops: {
			guaranteed: '5x Scrap Metal, 1x Energy Cell.',
			common: 'Sensor Optics.',
			rare: 'Pristine ARC Communication Array.'
		},
		lore: '"The Snitch doesn\'t kill you. It just invites the guys who will." - Resistance Radio Broadcast',
		primaryWeakness: 'Coordinated Burst Fire',
		keyDrop: 'Sensor Optics',
		image: 'https://placehold.co/800x400/1a1a1a/FF0000?text=Snitch+Drone',
		icon: '💀💀'
	}
];
