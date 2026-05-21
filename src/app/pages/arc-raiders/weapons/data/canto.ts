import { Weapon } from '../weapons.data';

export const canto: Weapon = {
	id: 'canto',
	name: 'Canto',
	class: 'SMG',
	rarity: 'Rare',
	ammoType: 'Medium Ammo',
	magSize: 18,
	firingMode: 'Fully-Automatic',
	overview: 'The Canto is a fully-automatic Submachine Gun (SMG) that uses Medium Ammo. Fully automatic submachine gun with a larger caliber.',
	
	acquisition: {
		sources: [
			'Crafting (Requires Canto Blueprint found in First Wave Caches)'
		]
	},

	// Base Crafting (Produces Canto I)
	craftingRequirements: [
		{ itemId: 'advanced-mechanical-components', quantity: 2 },
		{ itemId: 'magnet', quantity: 5 },
		{ itemId: 'medium-gun-parts', quantity: 3 }
	],
	craftingStation: { stationId: 'gunsmith', level: 3 },

	// Advanced Stats
	advancedStats: {
		arcArmorPenetration: 'Moderate',
		damage: 6.5,
		fireRateBase: 56.7,
		fireRateRpm: 0,
		headshotMultiplier: 1.75,
		range: 51,
		stability: 39.4,
		agility: 78.3,
		stealth: 24,
		weight: 4.0
	},

	// Tier Progression (Durability, Upgrades, Repairs, Recycling)
	tiers: [
		{
			tierLevel: 1,
			romanNumeral: 'I',
			durabilityMax: 784,
			weaponSalePrice: 7000,
			componentSalePricePerSlot: 0, // Not explicitly listed in PDF
			
			repairCost: [], // Not explicitly listed in PDF
			repairDurabilityRestored: 0,
			
			recycleYield: [
				{ itemId: 'advanced-mechanical-components', quantity: 1 },
				{ itemId: 'medium-gun-parts', quantity: 2 }
			],
			salvageYield: [
				{ itemId: 'medium-gun-parts', quantity: 2 }
			]
		},
		{
			tierLevel: 2,
			romanNumeral: 'II',
			durabilityMax: 871,
			weaponSalePrice: 0,
			componentSalePricePerSlot: 0,
			
			upgradeRequirements: [
				{ itemId: 'canto-1', quantity: 1 },
				{ itemId: 'mechanical-components', quantity: 1 },
				{ itemId: 'medium-gun-parts', quantity: 2 }
			],
			upgradeStation: { stationId: 'gunsmith', level: 1 },
			upgradePerks: [
				'15% Reduced Max Shot Dispersion',
				'+2 Magazine Size',
				'14% Reduced Reload Time',
				'+10 Durability'
			],
			
			repairCost: [],
			repairDurabilityRestored: 0,
			recycleYield: [],
			salvageYield: []
		},
		{
			tierLevel: 3,
			romanNumeral: 'III',
			durabilityMax: 980,
			weaponSalePrice: 0,
			componentSalePricePerSlot: 0,
			
			upgradeRequirements: [
				{ itemId: 'canto-2', quantity: 1 },
				{ itemId: 'mechanical-components', quantity: 1 },
				{ itemId: 'medium-gun-parts', quantity: 2 }
			],
			upgradeStation: { stationId: 'gunsmith', level: 1 },
			upgradePerks: [
				'30% Reduced Max Shot Dispersion',
				'+4 Magazine Size',
				'29% Reduced Reload Time',
				'+20 Durability'
			],
			
			repairCost: [],
			repairDurabilityRestored: 0,
			recycleYield: [],
			salvageYield: []
		},
		{
			tierLevel: 4,
			romanNumeral: 'IV',
			durabilityMax: 1120,
			weaponSalePrice: 0,
			componentSalePricePerSlot: 0,
			
			upgradeRequirements: [
				{ itemId: 'canto-3', quantity: 1 },
				{ itemId: 'mechanical-components', quantity: 2 },
				{ itemId: 'medium-gun-parts', quantity: 2 }
			],
			upgradeStation: { stationId: 'gunsmith', level: 1 },
			upgradePerks: [
				'45% Reduced Max Shot Dispersion',
				'+6 Magazine Size',
				'43% Reduced Reload Time',
				'+30 Durability'
			],
			
			repairCost: [],
			repairDurabilityRestored: 0,
			recycleYield: [],
			salvageYield: []
		}
	],

	patchHistory: [
		{ version: '1.22.0', notes: 'Added to the game.' }
	],
	image: 'https://arcraiders.wiki/w/images/8/83/Canto-Level1.png',
	icon: '🔫'
};