export interface Consumable {
	id: string;
	name: string;
	craftingRequirements?: { itemId: string; quantity: number }[];
	craftingStation?: { stationId: string; level: number };
	category: 'Medical' | 'Lethal' | 'Tactical' | 'Utility';
	stackSize: number;
	useTime: string;
	effect: string;
	description: string;
	image: string;
	icon: string;
}

import { medPen } from './data/med-pen';
import { empGrenade } from './data/emp-grenade';
import { armorPlate } from './data/armor-plate';

export const CONSUMABLES: Consumable[] = [
	medPen,
	empGrenade,
	armorPlate
];
