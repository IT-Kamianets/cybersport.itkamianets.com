import { LootItem } from '../loot.data';

export const mechanicalComponents: LootItem = {
	id: 'mechanical-components',
	name: 'Mechanical Components',
	category: 'Material',
	rarity: 'Uncommon',
	stackLimit: 10,
	sellValue: 640,
	
	foundIn: [
		'Scavenging: ARC (Bastion, Bombardier, Leaper, Shredder)',
		'Crafting',
		'Recycling'
	],
	
	description: 'Mechanical Components is an Uncommon item that is primarily used to craft, repair, and upgrade Weapons. It is used to upgrade the Gunsmith.',
	
	recyclesInto: [
		{ itemId: 'rubber-parts', itemName: 'Rubber Parts', yieldAmount: 2 },
		{ itemId: 'metal-parts', itemName: 'Metal Parts', yieldAmount: 3 }
	],
	
	image: 'https://arcraiders.wiki/w/images/9/94/Mechanical_Components.png',
	icon: '⚙️'
};