export interface WeaponPatch {
	version: string;
	notes: string;
}

export interface Weapon {
	id: string;
	name: string;
	craftingRequirements?: { itemId: string; quantity: number }[];
	craftingStation?: { stationId: string; level: number };
	class: 'SMG' | 'Assault Rifle' | 'Sniper Rifle' | 'Shotgun' | 'Heavy' | 'Pistol' | 'Melee';
	rarity: 'Standard' | 'Legendary' | 'Melee';
	ammoType: 'Light Ammo' | 'Medium Ammo' | 'Heavy Ammo' | 'Energy' | 'Special';
	magSize: string;
	baseDamage: number;
	firingMode: string;
	headshotMultiplier: string;
	effectiveRange: string;
	blueprintRequired: string;
	overview: string;
	acquisition: {
		looting: string;
		crafting: string;
		trader: string;
	};
	mods: {
		category: string;
		options: string;
	}[];
	strategies: string[];
	patchHistory: WeaponPatch[];
	image: string;
	icon: string;
}

import { rattler } from './data/rattler';
import { arpeggio } from './data/arpeggio';
import { tempest } from './data/tempest';

export const WEAPONS: Weapon[] = [
	rattler,
	arpeggio,
	tempest
];
