import { Weapon } from '../weapons.data';

export const equalizer: Weapon = {
	id: 'equalizer',
	name: 'Equalizer',
	class: 'Heavy',
	rarity: 'Legendary',
	ammoType: 'Energy',
	magSize: 50,
	firingMode: 'Fully-Automatic',
	overview: 'The Equalizer is a fully-automatic Special Beam Rifle that uses Energy Clips to fire energy-based projectiles. A high capacity experimental beam rifle. Note: It cannot be upgraded.',
	
	acquisition: {
		sources: [
			'Crafting (Requires Equalizer Blueprint found in Harvester)'
		]
	},

	// Base Crafting (Produces Equalizer I)
	craftingRequirements: [
		{ itemId: 'magnetic-accelerator', quantity: 3 },
		{ itemId: 'complex-gun-parts', quantity: 3 },
		{ itemId: 'queen-reactor', quantity: 1 }
	],
	craftingStation: { stationId: 'gunsmith', level: 3 },

	// Advanced Stats
	advancedStats: {
		arcArmorPenetration: 'Very Strong',
		damage: 8,
		fireRateBase: 33.33,
		fireRateRpm: 0,
		headshotMultiplier: 2.0,
		range: 0, // Not explicitly listed in PDF
		stability: 84.6,
		agility: 44.6,
		stealth: 0, // Not explicitly listed in PDF
		weight: 14.0
	},

	// Since it cannot be upgraded, we define it as a single tier
	tiers: [
		{
			tierLevel: 1,
			romanNumeral: 'I',
			durabilityMax: 3450,
			weaponSalePrice: 27500,
			componentSalePricePerSlot: 0,
			
			repairCost: [
				{ itemId: 'magnetic-accelerator', quantity: 2 },
				{ itemId: 'complex-gun-parts', quantity: 1 }
			],
			repairDurabilityRestored: 50,
			
			recycleYield: [
				{ itemId: 'magnetic-accelerator', quantity: 2 },
				{ itemId: 'complex-gun-parts', quantity: 1 }
			],
			salvageYield: [
				{ itemId: 'magnetic-accelerator', quantity: 1 }
			]
		}
	],

	patchHistory: [
		{ version: '1.0', notes: 'Initial Release.' }
	],
	image: 'https://placehold.co/800x400/1a1a1a/FFFF00?text=Equalizer+Beam+Rifle',
	icon: '⚡'
};