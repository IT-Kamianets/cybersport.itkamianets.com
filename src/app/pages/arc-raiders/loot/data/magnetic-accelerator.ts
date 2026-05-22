import { LootItem } from '../loot.data';

export const magneticAccelerator: LootItem = {
	id: 'magnetic-accelerator',
	name: 'Magnetic Accelerator',
	category: 'Material',
	rarity: 'Epic',
	stackLimit: 3,
	sellValue: 5500,
	
	foundIn: [
		'Scavenging: ARC (Matriarch, Queen)',
		'Recycling',
		'Crafting'
	],
	
	description: 'Magnetic Accelerator is an Epic item that can be used as a component in crafting advanced weaponry or recycled into crafting materials.',
	
	recyclesInto: [
		{ itemId: 'advanced-mechanical-components', itemName: 'Advanced Mechanical Components', yieldAmount: 1 },
		{ itemId: 'arc-motion-core', itemName: 'ARC Motion Core', yieldAmount: 1 }
	],
	
	image: 'https://arcraiders.wiki/w/images/5/5e/Magnetic_Accelerator.png',
	icon: '🧲'
};