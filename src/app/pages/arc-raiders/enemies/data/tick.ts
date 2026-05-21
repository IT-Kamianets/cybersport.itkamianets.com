import { Enemy } from '../enemies.data';

export const tick: Enemy = {
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
};
