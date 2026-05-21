import { Weapon } from '../weapons.data';

export const dolabra: Weapon = {
	id: 'dolabra',
	name: 'Dolabra',
	class: 'Shotgun',
	rarity: 'Legendary',
	ammoType: 'Energy',
	magSize: 8,
	firingMode: 'Semi-Automatic',
	overview: 'The Dolabra is a semi-automatic Shotgun that uses Energy Clips to fire energy-based short- to medium-ranged beams of heat. An experimental weapon that can either fire a wide short range blast, or be focused to fire a tight medium range beam of heat. Note: It cannot be upgraded.',
	
	acquisition: {
		sources: [
			'Crafting (Requires Dolabra Blueprint found in ARC Assessor)'
		]
	},

	// Base Crafting (Produces Dolabra I)
	craftingRequirements: [
		{ itemId: 'shredder-gyro', quantity: 3 },
		{ itemId: 'magnetic-accelerator', quantity: 3 },
		{ itemId: 'vaporizer-regulator', quantity: 2 }
	],
	craftingStation: { stationId: 'gunsmith', level: 3 },

	// Advanced Stats
	advancedStats: {
		arcArmorPenetration: 'Strong',
		damage: 50,
		fireRateBase: 0,
		fireRateRpm: 0,
		headshotMultiplier: 0, // Listed as N/A in PDF
		range: 0,
		stability: 0,
		agility: 0,
		stealth: 1,
		weight: 8.0
	},

	// Since it cannot be upgraded, we define it as a single tier
	tiers: [
		{
			tierLevel: 1,
			romanNumeral: 'I',
			durabilityMax: 0, // ?? shots in PDF
			weaponSalePrice: 27500,
			componentSalePricePerSlot: 0,
			
			repairCost: [
				{ itemId: 'magnetic-accelerator', quantity: 2 },
				{ itemId: 'shredder-gyro', quantity: 1 }
			],
			repairDurabilityRestored: 50,
			
			recycleYield: [
				{ itemId: 'magnetic-accelerator', quantity: 2 }
			],
			salvageYield: [
				{ itemId: 'magnetic-accelerator', quantity: 1 }
			]
		}
	],

	patchHistory: [
		{ version: '1.22.0', notes: 'Added to the game.' }
	],
	image: 'https://placehold.co/800x400/1a1a1a/FFFF00?text=Dolabra+Shotgun',
	icon: '⚡'
};