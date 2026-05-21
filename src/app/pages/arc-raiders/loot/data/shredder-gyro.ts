import { LootItem } from '../loot.data';

export const shredderGyro: LootItem = {
	id: 'shredder-gyro',
	name: 'Shredder Gyro',
	category: 'Recyclable',
	rarity: 'Rare',
	stackLimit: 3,
	sellValue: 2000,
	
	foundIn: [
		'Scavenging: ARC (Shredder)'
	],
	
	description: 'Shredder Gyro is a Rare item scavenged from destroyed Shredders. Can be recycled into crafting materials.',
	
	recyclesInto: [
		{ itemId: 'arc-alloy', itemName: 'ARC Alloy', yieldAmount: 2 },
		{ itemId: 'mechanical-components', itemName: 'Mechanical Components', yieldAmount: 2 }
	],
	
	image: 'https://arcraiders.wiki/w/images/9/96/Shredder_Gyro.png',
	icon: '🌀'
};