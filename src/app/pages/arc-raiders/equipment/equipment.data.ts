export interface PlayerEquipment {
	id: string;
	name: string;
	type: 'Shield' | 'Augment';
	rarity: 'Common' | 'Uncommon' | 'Rare' | 'Epic' | 'Legendary';
	description: string;
	image: string;
	icon: string;
	shieldHealth?: number;
	inventorySlots?: number;
	craftingStation?: { stationId: string; level: number };
	craftingRequirements?: { itemId: string; quantity: number }[];
}

import { lightScavengerShield } from './data/light-scavenger-shield';
import { expandedRig } from './data/expanded-rig';

export const EQUIPMENT: PlayerEquipment[] = [
	lightScavengerShield,
	expandedRig
];
