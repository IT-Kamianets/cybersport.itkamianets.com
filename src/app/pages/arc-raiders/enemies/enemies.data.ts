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

import { bastion } from './data/bastion';
import { tick } from './data/tick';
import { snitch } from './data/snitch';

export const ENEMIES: Enemy[] = [
	bastion,
	tick,
	snitch
];
