import { LootItem } from '../loot.data';

export const queenReactor: LootItem = {
	id: 'queen-reactor',
	name: 'Queen Reactor',
	category: 'Recyclable',
	rarity: 'Legendary',
	stackLimit: 1,
	sellValue: 11000,
	
	foundIn: [
		'Scavenging: ARC (Queen)'
	],
	
	description: 'Queen Reactor is a Legendary item that can be found by scavenging destroyed Queens or the leg armor segments that are blown off during battle. Used to create the Legendary Equalizer and Jupiter weapons.',
	
	recyclesInto: [
		{ itemId: 'power-rod', itemName: 'Power Rod', yieldAmount: 1 },
		{ itemId: 'magnetic-accelerator', itemName: 'Magnetic Accelerator', yieldAmount: 1 }
	],
	
	image: 'https://arcraiders.wiki/w/images/6/6b/Queen_Reactor.png',
	icon: '☢️'
};