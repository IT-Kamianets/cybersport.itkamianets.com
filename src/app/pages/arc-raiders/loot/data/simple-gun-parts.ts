import { LootItem } from '../loot.data';

export const simpleGunParts: LootItem = {
	id: 'simple-gun-parts',
	name: 'Simple Gun Parts',
	category: 'Material',
	rarity: 'Uncommon',
	stackLimit: 10,
	sellValue: 330,
	
	foundIn: [
		'Scavenging: ARC (Wasps, Hornets, Turrets, Sentinels, Shredders)',
		'Recycling',
		'Sold by Celeste'
	],
	
	description: 'Simple Gun Parts are used to upgrade, craft, and repair Weapons. They can be refined into Light Gun Parts, Medium Gun Parts, and Heavy Gun Parts.',
	
	recyclesInto: [
		{ itemId: 'metal-parts', itemName: 'Metal Parts', yieldAmount: 2 }
	],
	
	image: 'https://arcraiders.wiki/w/images/d/da/Simple_Gun_Parts.png',
	icon: '🛠️'
};