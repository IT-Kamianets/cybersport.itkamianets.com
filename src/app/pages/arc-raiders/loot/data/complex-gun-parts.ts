import { LootItem } from '../loot.data';

export const complexGunParts: LootItem = {
	id: 'complex-gun-parts',
	name: 'Complex Gun Parts',
	category: 'Material',
	rarity: 'Epic',
	stackLimit: 3,
	sellValue: 3000,
	
	foundIn: [
		'Scavenging: ARC (Queen, Matriarch)',
		'Recycling',
		'Sold by Celeste'
	],
	
	description: 'Complex Gun Parts are used to craft more advanced weaponry and can be recycled down to crafting materials.',
	
	recyclesInto: [
		{ itemId: 'simple-gun-parts', itemName: 'Simple Gun Parts', yieldAmount: 3 }
	],
	
	image: 'https://arcraiders.wiki/w/images/3/3d/Complex_Gun_Parts.png',
	icon: '🧰'
};