import { LootItem } from '../loot.data';

export const matriarchReactor: LootItem = {
	id: 'matriarch-reactor',
	name: 'Matriarch Reactor',
	category: 'Recyclable',
	rarity: 'Legendary',
	stackLimit: 1,
	sellValue: 11000,
	
	foundIn: [
		'Scavenging: ARC (Matriarch)'
	],
	
	description: 'Matriarch Reactor is a Legendary item that is found by scavenging destroyed Matriarchs. It can be recycled into crafting materials or used to create the Aphelion battle rifle.',
	
	recyclesInto: [
		{ itemId: 'power-rod', itemName: 'Power Rod', yieldAmount: 1 },
		{ itemId: 'magnetic-accelerator', itemName: 'Magnetic Accelerator', yieldAmount: 1 }
	],
	
	image: 'https://arcraiders.wiki/w/images/2/24/Matriarch_Reactor.png',
	icon: '⚛️'
};