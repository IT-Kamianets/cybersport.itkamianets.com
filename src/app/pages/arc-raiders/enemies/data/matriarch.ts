import { Enemy } from '../enemies.data';

export const matriarch: Enemy = {
	id: 'matriarch',
	name: 'Matriarch',
	threatLevel: 'World Boss',
	mobility: 'Ground-based',
	damageType: 'Explosive',
	armor: 'Heavy',
	primaryAttack: 'Missile Swarm',
	abilities: ['Gas Grenades', 'Flashbangs', 'Energy Shield', 'Summons ARC'],
	weaknesses: ['Core', 'Leg Joints'],
	xpGained: [
		{ action: 'Destroy', xp: 1000 },
		{ action: 'Scavenging Core', xp: 1000 },
		{ action: 'Scavenging Leg', xp: 500 }
	],
	overview: 'The Matriarch is a colossal ARC machine that makes the Queen look friendly by comparison. It can only be found when its map condition is active. The Matriarch is an unrelenting challenge posing a significant risk once engaged. It has several abilities and attacks that allow it to withstand substantial firepower.',
	tactics: [
		'Missile Swarm: Will fire 3-6 Missiles from the back of its body that will track its target and fly in a straight line towards the Raider.',
		'Leg Stomp: Secondary attack when a Raider is close to the legs. Temporarily stun-locks the Raider in a fallen over animation for about 2 seconds.',
		'Gas Capsule: Blocks line of sight with a thick, green gas and drains the Raider\'s stamina when in proximity.',
		'Flashbang Capsule: Travels long distances. Blinks briefly before exploding, blinding the Raider by flashing their screen white.',
		'Energy Shield: Absorbs all incoming projectiles and throwables. Only projectiles from within the shield will deal damage. Lasts for ~1 minute.',
		'High Ground/Cover: If its children are unable to protect it, the fight becomes trivial. Use covers like the Launch Towers in Spaceport or the Electrical Substation in Dam Battleground.',
		'Weak Points: Don\'t target the legs, target its faceplates until they break off, then its big, red, glowing core will be exposed.',
		'When its energy shield comes up, hold fire till it falls; or if you fancy your chances, slip inside the shield and take shots at its now-exposed core.'
	],
	lootDropIds: [
		'arc-alloy', 'advanced-arc-powercell', 'advanced-electrical-components', 
		'advanced-mechanical-components', 'arc-circuitry', 'arc-coolant', 
		'arc-flex-rubber', 'arc-motion-core', 'arc-performance-steel', 
		'arc-synthetic-resin', 'arc-thermo-lining', 'complex-gun-parts', 
		'magnetic-accelerator', 'matriarch-reactor'
	],
	keyDropId: 'matriarch-reactor',
	lore: 'The Matriarch makes the Queen look friendly by comparison. This colossal terror dominates the battlefield with punishing barrages that impairs vision, cripples movement and tear Raiders apart.\n\nThe versatility of the Matriarch is stunning. She is able to surprise even veteran Raiders with her tactical capabilities.\n\nThe Matriarch\'s Reactor is one of the most sought after trophies. Few Raiders have managed to bring one back home.',
	patchHistory: [
		{ version: '1.13.0', notes: 'Matriarch icon changed.' },
		{ version: '1.2.0', notes: 'Introduction to the game.' }
	],
	image: 'https://arcraiders.wiki/w/images/4/49/ARC_Matriarch.png',
	icon: '👑'
};
