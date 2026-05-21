import { LootItem } from '../loot.data';

export const advancedMechanicalComponents: LootItem = {
	id: 'advanced-mechanical-components',
	name: 'Advanced Mechanical Components',
	category: 'Material',
	rarity: 'Rare',
	stackLimit: 5,
	sellValue: 1750,
	
	foundIn: [
		'Scavenging: ARC (Matriarch, Queen)',
		'Crafting',
		'Recycling'
	],
	
	description: 'Advanced Mechanical Components is a Rare item primarily used to craft other items. It is used to upgrade the Gunsmith.',
	
	recyclesInto: [
		{ itemId: 'steel-spring', itemName: 'Steel Spring', yieldAmount: 1 },
		{ itemId: 'mechanical-components', itemName: 'Mechanical Components', yieldAmount: 1 }
	],
	
	image: 'https://arcraiders.wiki/w/images/2/25/Advanced_Mechanical_Components.png',
	icon: '⚙️'
};