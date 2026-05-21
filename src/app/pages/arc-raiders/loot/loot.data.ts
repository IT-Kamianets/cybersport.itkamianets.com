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

import { magneticAccelerator } from './data/magnetic-accelerator';
import { ionSputter } from './data/ion-sputter';
import { blueAccessKeycard } from './data/blue-access-keycard';
import { syntheticPolymer } from './data/synthetic-polymer';
import { voltageConverter } from './data/voltage-converter';
import { scrapMetal } from './data/scrap-metal';

export const LOOT: LootItem[] = [
	magneticAccelerator,
	ionSputter,
	blueAccessKeycard,
	syntheticPolymer,
	voltageConverter,
	scrapMetal
];
