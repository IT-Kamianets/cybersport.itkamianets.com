import { LootItem } from '../loot.data';

export const canister: LootItem = {
	id: 'canister',
	name: 'Canister',
	category: 'Material',
	rarity: 'Uncommon',
	stackLimit: 15,
	sellValue: 300,
	
	foundIn: [
		'Scavenging',
		'Recycling',
		'Sold by Celeste'
	],
	
	description: 'The Canister is an Uncommon item that can be recycled into crafting materials. Used to craft a wide range of items. Can be recycled into plastic.',
	
	recyclesInto: [
		{ itemId: 'plastic-parts', itemName: 'Plastic Parts', yieldAmount: 3 }
	],
	
	image: 'https://arcraiders.wiki/w/images/5/5f/Canister.png',
	icon: '🛢️'
};