import { Enemy } from '../enemies.data';

export const bastion: Enemy = {
	id: 'bastion',
	name: 'Bastion',
	threatLevel: 'Heavy / Elite',
	mobility: 'Ground-based',
	damageType: 'Ballistic',
	
	armor: 'Heavy Plating (Resistant to Light Ammo)',
	health: 8000,
	primaryAttack: 'Twin Rotary Cannons',
	secondaryAttack: 'Ground Stomp (AoE Knockback)',
	abilities: [
		'Patrol Mode: Slowly roams high-tier loot zones. Scanning laser is highly visible.',
		'Combat Mode: Locks onto the nearest target and spams rotary cannon fire.',
		'Defense Mechanism: If a player gets too close, it will perform a hydraulic stomp that deals massive damage and throws players backward.'
	],
	weaknesses: [
		'Armor Stripping: The Bastion\'s main chassis is completely bulletproof. You must shoot the orange/yellow armor plates on its sides to blow them off.',
		'The Cooling Vents (Primary Weak Point): Once the side armor is destroyed, glowing blue cooling vents are exposed. Focus all fire here for 3x critical damage.'
	],
	xpGained: [
		{ action: 'Kill', xp: 750 },
		{ action: 'Armor Broken', xp: 50 }
	],
	
	overview: 'The Bastion is a massive, heavily armored ground unit designed to hold territory. It is slow-moving but features extreme durability and devastating suppressing fire. Engaging a Bastion head-on is a death sentence; squads must use cover and flanking maneuvers to expose its vulnerabilities. Commonly spawns in Dam Battlegrounds, Spaceport (often guarding Key Rooms).',
	tactics: [
		'Have one squadmate use a Photoelectric Cloak to sneak behind the Bastion and throw a Pulse Mine to stagger it.',
		'While the Bastion is staggered, the other two players shoot the side plates.',
		'Armor-piercing rounds from Sniper Rifles (like the Tempest) are highly recommended.'
	],
	
	lootDropIds: ['metal-parts', 'heavy-gun-parts', 'advanced-mechanical-components', 'bastion-targeting-cpu', 'unidentified-encrypted-blueprint'],
	keyDropId: 'bastion-targeting-cpu',
	
	lore: '"Don\'t play hero with a Bastion. If you don\'t have explosives or heavy rounds, just hide in the rubble and wait for it to pass. It ain\'t worth losing your haul." - Unknown Raider',
	
	image: 'https://arcraiders.wiki/w/images/4/47/ARC_Bastion.png',
	icon: '💀💀💀'
};
