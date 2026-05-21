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
import { plasticParts } from './data/plastic-parts';
import { rubberParts } from './data/rubber-parts';
import { wires } from './data/wires';
import { oil } from './data/oil';
import { canister } from './data/canister';
import { magnet } from './data/magnet';
import { steelSpring } from './data/steel-spring';
import { exodusModules } from './data/exodus-modules';
import { matriarchReactor } from './data/matriarch-reactor';
import { queenReactor } from './data/queen-reactor';
import { advancedMechanicalComponents } from './data/advanced-mechanical-components';
import { complexGunParts } from './data/complex-gun-parts';
import { heavyGunParts } from './data/heavy-gun-parts';
import { mediumGunParts } from './data/medium-gun-parts';
import { mechanicalComponents } from './data/mechanical-components';
import { magneticAccelerator } from './data/magnetic-accelerator';
import { lightGunParts } from './data/light-gun-parts';
import { simpleGunParts } from './data/simple-gun-parts';
import { vaporizerRegulator } from './data/vaporizer-regulator';
import { shredderGyro } from './data/shredder-gyro';


export const LOOT: LootItem[] = [
	metalParts,
	rubberParts,
	plasticParts,
	wires,
	oil,
	canister,
	magnet,
	steelSpring,
	queenReactor,
	matriarchReactor,
	exodusModules,
	advancedMechanicalComponents,
	mechanicalComponents,
	complexGunParts,
	heavyGunParts,
	mediumGunParts,
	lightGunParts,
	simpleGunParts,
	vaporizerRegulator,
	shredderGyro,
	magneticAccelerator
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
