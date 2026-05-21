import { Weapon } from '../weapons.data';

export const anvil: Weapon = {
	id: 'anvil',
	name: 'Anvil',
	class: 'Hand Cannon',
	rarity: 'Uncommon',
	ammoType: 'Heavy Ammo',
	magSize: 6,
	firingMode: 'Single-Action',
	overview: 'The Anvil is a single-action Hand Cannon that uses Heavy Ammo. It is a versatile hand cannon that excels at hitting targets at medium-range, but its slow firing speed can make the Anvil feel clunky at close-range.',
	
	acquisition: {
		sources: [
			'Scavenging',
			'Crafting (Requires Anvil Blueprint)',
			'Sold by Tian Wen'
		]
	},

	// Base Crafting (Produces Anvil I)
	craftingRequirements: [
		{ itemId: 'mechanical-components', quantity: 5 },
		{ itemId: 'simple-gun-parts', quantity: 6 }
	],
	craftingStation: { stationId: 'gunsmith', level: 1 },

	// Advanced Stats
	advancedStats: {
		arcArmorPenetration: 'Strong',
		damage: 40,
		fireRateBase: 16.3,
		fireRateRpm: 0,
		headshotMultiplier: 2.5,
		range: 50.2,
		stability: 75.2,
		agility: 69.1,
		stealth: 10,
		weight: 5.0
	},

	// Tier Progression (Durability, Upgrades, Repairs, Recycling)
	tiers: [
		{
			tierLevel: 1,
			romanNumeral: 'I',
			durabilityMax: 188,
			weaponSalePrice: 5000,
			componentSalePricePerSlot: 0,
			
			repairCost: [
				{ itemId: 'mechanical-components', quantity: 2 },
				{ itemId: 'simple-gun-parts', quantity: 2 }
			],
			repairDurabilityRestored: 50,
			
			recycleYield: [
				{ itemId: 'mechanical-components', quantity: 2 },
				{ itemId: 'simple-gun-parts', quantity: 2 }
			],
			salvageYield: [
				{ itemId: 'simple-gun-parts', quantity: 2 }
			]
		},
		{
			tierLevel: 2,
			romanNumeral: 'II',
			durabilityMax: 208,
			weaponSalePrice: 7000,
			componentSalePricePerSlot: 0,
			
			upgradeRequirements: [
				{ itemId: 'anvil-1', quantity: 1 },
				{ itemId: 'mechanical-components', quantity: 3 },
				{ itemId: 'simple-gun-parts', quantity: 1 }
			],
			upgradeStation: { stationId: 'gunsmith', level: 1 },
			upgradePerks: [
				'6.5% Reduced Dispersion Recovery Time',
				'25% Increased Fire Rate',
				'+10 Durability'
			],
			
			repairCost: [
				{ itemId: 'mechanical-components', quantity: 3 },
				{ itemId: 'simple-gun-parts', quantity: 3 }
			],
			repairDurabilityRestored: 55,
			
			recycleYield: [
				{ itemId: 'mechanical-components', quantity: 3 },
				{ itemId: 'simple-gun-parts', quantity: 3 }
			],
			salvageYield: [
				{ itemId: 'simple-gun-parts', quantity: 3 }
			]
		},
		{
			tierLevel: 3,
			romanNumeral: 'III',
			durabilityMax: 235,
			weaponSalePrice: 10000,
			componentSalePricePerSlot: 0,
			
			upgradeRequirements: [
				{ itemId: 'anvil-2', quantity: 1 },
				{ itemId: 'mechanical-components', quantity: 4 },
				{ itemId: 'heavy-gun-parts', quantity: 1 }
			],
			upgradeStation: { stationId: 'gunsmith', level: 1 },
			upgradePerks: [
				'12.5% Reduced Dispersion Recovery Time',
				'50% Increased Fire Rate',
				'+20 Durability'
			],
			
			repairCost: [
				{ itemId: 'mechanical-components', quantity: 4 },
				{ itemId: 'simple-gun-parts', quantity: 4 }
			],
			repairDurabilityRestored: 60,
			
			recycleYield: [
				{ itemId: 'mechanical-components', quantity: 4 },
				{ itemId: 'simple-gun-parts', quantity: 4 }
			],
			salvageYield: [
				{ itemId: 'simple-gun-parts', quantity: 4 }
			]
		},
		{
			tierLevel: 4,
			romanNumeral: 'IV',
			durabilityMax: 268,
			weaponSalePrice: 13000,
			componentSalePricePerSlot: 0,
			
			upgradeRequirements: [
				{ itemId: 'anvil-3', quantity: 1 },
				{ itemId: 'mechanical-components', quantity: 4 },
				{ itemId: 'heavy-gun-parts', quantity: 1 }
			],
			upgradeStation: { stationId: 'gunsmith', level: 1 },
			upgradePerks: [
				'18.75% Reduced Dispersion Recovery Time',
				'75% Increased Fire Rate',
				'+30 Durability'
			],
			
			repairCost: [
				{ itemId: 'mechanical-components', quantity: 5 },
				{ itemId: 'simple-gun-parts', quantity: 5 }
			],
			repairDurabilityRestored: 65,
			
			recycleYield: [
				{ itemId: 'mechanical-components', quantity: 5 },
				{ itemId: 'simple-gun-parts', quantity: 5 }
			],
			salvageYield: [
				{ itemId: 'simple-gun-parts', quantity: 5 }
			]
		}
	],

	patchHistory: [
		{ version: '1.0', notes: 'Initial Release.' }
	],
	image: 'https://placehold.co/800x400/1a1a1a/DAA520?text=Anvil+Hand+Cannon',
	icon: '🔫'
};