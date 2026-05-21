export interface LootRecycleYield {
	itemId: string;
	itemName: string;
	yieldAmount: number;
}

export interface LootItem {
	id: string;
	name: string;
	category: 'Material' | 'Recyclable' | 'Valuable' | 'Key' | 'Core';
	rarity: 'Common' | 'Uncommon' | 'Rare' | 'Epic' | 'Legendary';
	stackLimit: number;
	sellValue: number;
	foundIn: string[];
	description: string;
	image: string;
	icon: string;
	recyclesInto?: LootRecycleYield[];
}

import { metalParts } from './data/metal-parts';

export const LOOT: LootItem[] = [
	metalParts
];

export function resolveLootItem(id: string): LootItem {
	const item = LOOT.find(l => l.id === id);
	if (item) return item;
	return {
		id,
		name: id.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
		icon: '📦',
		category: 'Material',
		rarity: 'Common',
		stackLimit: 10,
		sellValue: 0,
		foundIn: [],
		description: 'Unknown Item',
		image: `https://placehold.co/100x100/1a1a1a/cccccc?text=${id.substring(0, 3).toUpperCase()}`
	};
}
