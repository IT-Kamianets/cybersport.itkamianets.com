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

export const EQUIPMENT: PlayerEquipment[] = [
	{
		id: 'light-scavenger-shield',
		name: 'Light Scavenger Shield',
		type: 'Shield',
		rarity: 'Common',
		shieldHealth: 50,
		description: 'A basic rigged shield generator. Provides minimal protection against small arms fire and glancing blows from ARC machines.',
		image: 'https://placehold.co/800x400/1a1a1a/00ff00?text=Light+Scavenger+Shield',
		icon: '🛡️',
		craftingStation: { stationId: 'gear-bench', level: 1 },
		craftingRequirements: [
			{ itemId: 'scrap-metal', quantity: 10 }
		]
	},
	{
		id: 'expanded-rig',
		name: 'Expanded Rig',
		type: 'Augment',
		rarity: 'Uncommon',
		inventorySlots: 12,
		description: 'A tactical backpack featuring modular webbing and expanded carrying capacity. Essential for long extraction runs.',
		image: 'https://placehold.co/800x400/1a1a1a/00ff00?text=Expanded+Rig',
		icon: '🎒',
		craftingStation: { stationId: 'gear-bench', level: 2 },
		craftingRequirements: [
			{ itemId: 'synthetic-polymer', quantity: 15 }
		]
	}
];
