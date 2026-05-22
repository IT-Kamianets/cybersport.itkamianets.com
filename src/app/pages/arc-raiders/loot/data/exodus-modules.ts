import { LootItem } from '../loot.data';

export const exodusModules: LootItem = {
	id: 'exodus-modules',
	name: 'Exodus Modules',
	category: 'Material',
	rarity: 'Epic',
	stackLimit: 10,
	sellValue: 2750,
	
	foundIn: [
		'Scavenging',
		'Recycling',
		'Sold by Celeste',
		'Red Locker'
	],
	
	description: 'Exodus Modules is an Epic item that can be used as a component in crafting advanced weaponry or recycled into crafting materials.',
	
	recyclesInto: [
		{ itemId: 'magnet', itemName: 'Magnet', yieldAmount: 2 },
		{ itemId: 'processor', itemName: 'Processor', yieldAmount: 2 }
	],
	
	image: 'https://arcraiders.wiki/w/images/1/1b/Exodus_Modules.png',
	icon: '📦'
};