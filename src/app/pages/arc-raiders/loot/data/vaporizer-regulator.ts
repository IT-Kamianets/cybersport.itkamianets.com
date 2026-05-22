import { LootItem } from '../loot.data';

export const vaporizerRegulator: LootItem = {
	id: 'vaporizer-regulator',
	name: 'Vaporizer Regulator',
	category: 'Recyclable',
	rarity: 'Epic',
	stackLimit: 3,
	sellValue: 6000,
	
	foundIn: [
		'Scavenging: ARC (Courier, Vaporizer)'
	],
	
	description: 'Vaporizer Regulator is an Epic item scavenged from destroyed Vaporizers. Can be recycled into crafting materials.',
	
	recyclesInto: [
		{ itemId: 'advanced-electrical-components', itemName: 'Advanced Electrical Components', yieldAmount: 1 },
		{ itemId: 'arc-circuitry', itemName: 'ARC Circuitry', yieldAmount: 2 }
	],
	
	image: 'https://arcraiders.wiki/w/images/b/b8/Vaporizer_Regulator.png',
	icon: '⚙️'
};