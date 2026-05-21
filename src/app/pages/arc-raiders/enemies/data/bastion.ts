import { Enemy } from '../enemies.data';

export const bastion: Enemy = {
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
	image: 'https://arcraiders.wiki/w/images/4/47/ARC_Bastion.png',
	icon: '💀💀💀'
};
