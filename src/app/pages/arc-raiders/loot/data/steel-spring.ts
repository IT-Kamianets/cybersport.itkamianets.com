import { LootItem } from '../loot.data';

export const steelSpring: LootItem = {
	id: 'steel-spring',
	name: 'Steel Spring',
	category: 'Material',
	rarity: 'Uncommon',
	stackLimit: 15,
	sellValue: 300,
	
	foundIn: [
		'Scavenging: Metal Crate',
		'Recycling',
		'Sold by Celeste'
	],
	
	description: 'Steel Spring is an Uncommon item that is primarily used to craft Weapon Mods. It is required to complete the Expedition project. Used to craft a wide range of items. Can be recycled into crafting materials.',
	
	recyclesInto: [
		{ itemId: 'metal-parts', itemName: 'Metal Parts', yieldAmount: 2 }
	],
	
	image: 'https://arcraiders.wiki/w/images/d/db/Steel_Spring.png',
	icon: '➰'
};