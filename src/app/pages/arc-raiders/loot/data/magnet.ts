import { LootItem } from '../loot.data';

export const magnet: LootItem = {
	id: 'magnet',
	name: 'Magnet',
	category: 'Material',
	rarity: 'Uncommon',
	stackLimit: 15,
	sellValue: 300,
	
	foundIn: [
		'Scavenging',
		'Sold by Celeste'
	],
	
	description: 'Magnet is an Uncommon item that can be recycled into crafting materials. Used to craft a wide range of items.',
	
	recyclesInto: [
		{ itemId: 'metal-parts', itemName: 'Metal Parts', yieldAmount: 2 }
	],
	
	image: 'https://arcraiders.wiki/w/images/8/8c/Magnet.png',
	icon: '🧲'
};