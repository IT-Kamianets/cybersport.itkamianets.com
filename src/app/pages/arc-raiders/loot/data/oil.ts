import { LootItem } from '../loot.data';

export const oil: LootItem = {
	id: 'oil',
	name: 'Oil',
	category: 'Material',
	rarity: 'Uncommon',
	stackLimit: 15,
	sellValue: 300,
	
	foundIn: [
		'Scavenging',
		'Recycling',
		'Sold by Celeste'
	],
	
	description: 'Oil is an Uncommon item used to create explosives. It can be recycled into chemicals.',
	
	recyclesInto: [
		{ itemId: 'chemicals', itemName: 'Chemicals', yieldAmount: 3 }
	],
	
	image: 'https://arcraiders.wiki/w/images/0/06/Oil.png',
	icon: '🛢️'
};