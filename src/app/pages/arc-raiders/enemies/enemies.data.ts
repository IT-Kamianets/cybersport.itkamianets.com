export interface EnemyPatch {
	version: string;
	notes: string;
}

export interface EnemyXpReward {
	action: string;
	xp: number;
}

export interface Enemy {
	id: string;
	name: string;
	
	threatLevel: 'Fodder / Swarm' | 'Standard' | 'Heavy / Elite' | 'World Boss';
	mobility: 'Ground-based' | 'Aerial' | 'Turrets/Stationary';
	damageType: 'Ballistic' | 'Explosive' | 'Energy/Laser';
	
	armor: string;
	health?: number;
	primaryAttack: string;
	secondaryAttack?: string;
	abilities?: string[];
	weaknesses: string[];
	xpGained: EnemyXpReward[];
	
	overview: string;
	tactics: string[];
	achievementTips?: string[];
	
	// SSOT Loot (Links to loot.data.ts)
	lootDropIds: string[];
	keyDropId?: string; // The signature drop used for upgrades
	
	lore: string;
	patchHistory?: EnemyPatch[];
	
	image: string;
	icon: string;
}

import { bastion } from './data/bastion';
import { tick } from './data/tick';
import { snitch } from './data/snitch';
import { wasp } from './data/wasp';
import { rocketeer } from './data/rocketeer';
import { matriarch } from './data/matriarch';

export const ENEMIES: Enemy[] = [
	bastion,
	tick,
	snitch,
	wasp,
	matriarch,
	rocketeer
];
