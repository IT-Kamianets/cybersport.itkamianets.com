import { LootItem } from '../loot.data';

export const ionSputter: LootItem = {
	id: 'ion-sputter',
	name: 'Ion Sputter',
	category: 'Recyclable',
	rarity: 'Epic',
	stackLimit: 3,
	sellValue: 400,
	foundIn: ['Industrial Zones', 'Dam Battlegrounds'],
	description: 'A delicate mechanism used by ARC machines for atmospheric processing. It can be sold as-is, or dismantled into extremely useful crafting components.',
	image: 'https://placehold.co/400x400/1a1a1a/00ffff?text=Ion+Sputter',
	icon: '🔋',
	recyclesInto: [
		{ itemId: 'voltage-converter', itemName: 'Voltage Converter', yieldAmount: 1 },
		{ itemId: 'scrap-metal', itemName: 'Scrap Metal', yieldAmount: 5 }
	]
};
