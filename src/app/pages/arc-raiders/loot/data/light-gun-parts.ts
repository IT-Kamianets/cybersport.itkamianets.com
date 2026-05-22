import { LootItem } from '../loot.data';

export const lightGunParts: LootItem = {
	id: 'light-gun-parts',
	name: 'Light Gun Parts',
	category: 'Material',
	rarity: 'Rare',
	stackLimit: 5,
	sellValue: 700,
	
	foundIn: [
		'Scavenging',
		'Crafting',
		'Recycling',
		'Sold by Celeste'
	],
	
	description: 'Light Gun Parts are used to upgrade, craft, and repair Weapons that use Light Ammo.',
	
	recyclesInto: [
		{ itemId: 'simple-gun-parts', itemName: 'Simple Gun Parts', yieldAmount: 2 }
	],
	
	image: 'https://arcraiders.wiki/w/images/c/c9/Light_Gun_Parts.png',
	icon: '🧰'
};