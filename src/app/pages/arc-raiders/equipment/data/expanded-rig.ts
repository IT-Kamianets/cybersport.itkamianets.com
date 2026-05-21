import { PlayerEquipment } from '../equipment.data';

export const expandedRig: PlayerEquipment = {
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
};
