import { LootItem } from '../loot.data';

export const heavyGunParts: LootItem = {
	id: 'heavy-gun-parts',
	name: 'Heavy Gun Parts',
	category: 'Material',
	rarity: 'Rare',
	stackLimit: 5,
	sellValue: 700,
	
	foundIn: [
		'Scavenging: ARC (Bombardier, Rocketeer)',
		'Crafting',
		'Recycling',
		'Sold by Celeste'
	],
	
	description: 'Heavy Gun Parts is an item used to upgrade, craft, and repair Weapons.',
	
	recyclesInto: [
		{ itemId: 'simple-gun-parts', itemName: 'Simple Gun Parts', yieldAmount: 2 }
	],
	
	image: 'https://arcraiders.wiki/w/images/3/33/Heavy_Gun_Parts.png',
	icon: '🧰'
};