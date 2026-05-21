export interface ModStatModifier {
	stat: string;
	value: string;
	type: 'buff' | 'nerf';
}

export interface WeaponMod {
	id: string;
	name: string;
	slot: 'Optic' | 'Barrel' | 'Magazine' | 'Underbarrel' | 'Stock';
	statModifiers: ModStatModifier[];
	compatibleWeapons: string[];
	description: string;
	image: string;
	icon: string;
}

import { redDotSight } from './data/red-dot-sight';
import { extendedLightMag } from './data/extended-light-mag';
import { suppressor } from './data/suppressor';

export const WEAPON_MODS: WeaponMod[] = [
	redDotSight,
	extendedLightMag,
	suppressor
];
