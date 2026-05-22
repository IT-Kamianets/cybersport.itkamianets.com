import { LootItem } from '../loot.data';

export const mediumGunParts: LootItem = {
	id: 'medium-gun-parts',
	name: 'Medium Gun Parts',
	category: 'Material',
	rarity: 'Rare',
	stackLimit: 5,
	sellValue: 700,
	
	foundIn: [
		'Scavenging: ARC (Bastion, Sentinel)',
		'Crafting',
		'Recycling',
		'Sold by Celeste'
	],
	
	description: 'Medium Gun Parts are used to upgrade, craft, and repair Weapons.',
	
	recyclesInto: [
		{ itemId: 'simple-gun-parts', itemName: 'Simple Gun Parts', yieldAmount: 2 }
	],
	
	image: 'https://arcraiders.wiki/w/images/9/9a/Medium_Gun_Parts.png',
	icon: '🧰'
};