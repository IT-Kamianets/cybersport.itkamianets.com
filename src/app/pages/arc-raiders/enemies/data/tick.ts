import { Enemy } from '../enemies.data';

export const tick: Enemy = {
	id: 'tick',
	name: 'Tick',
	threatLevel: 'Fodder / Swarm',
	mobility: 'Ground-based',
	damageType: 'Explosive',
	
	armor: 'Light / Unarmored',
	health: 200,
	primaryAttack: 'Self-Destruct (Small AoE)',
	secondaryAttack: 'Leap Attack',
	abilities: [
		'Dormant: Clings to walls or ceilings, blending into the environment until disturbed.',
		'Swarm Mode: Rushes the target erratically, attempting to leap and detonate on impact.'
	],
	weaknesses: [
		'Central Eye: Shooting the red glowing eye causes immediate detonation, often taking out nearby Ticks.',
		'EMP / Explosives: Highly vulnerable to EMP and explosive damage.'
	],
	xpGained: [
		{ action: 'Kill', xp: 20 }
	],
	
	overview: 'Ticks are small, fast-moving quadrupedal machines designed to overwhelm intruders through sheer numbers. Individually weak, they become a massive threat when a swarm surrounds a distracted Raider. Spawns in All Zones (often found in clusters in urban areas).',
	tactics: [
		'Do not let them get close.',
		'Use SMGs or Assault Rifles to pick them off at a distance.',
		'If swarmed, an EMP Grenade will instantly disable all Ticks in its radius.'
	],
	
	lootDropIds: ['metal-parts', 'plastic-parts', 'volatile-explosive-compound'],
	keyDropId: 'volatile-explosive-compound',
	
	lore: '"Watch the ceilings. If you hear that clicking sound, you already have three of them above you." - Speranza Scavenger Guide',
	
	image: 'https://arcraiders.wiki/w/images/1/17/ARC_Tick.png',
	icon: '💀'
};
