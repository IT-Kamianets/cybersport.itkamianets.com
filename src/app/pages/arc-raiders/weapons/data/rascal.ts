import { Weapon } from '../weapons.data';

export const rascal: Weapon = {
	id: 'rascal',
	name: 'Rascal',
	class: 'Heavy',
	rarity: 'Rare',
	ammoType: 'Special', // Launcher Ammo
	magSize: 1,
	firingMode: 'Break-Action',
	overview: 'The Rascal is a break-action Grenade Launcher that uses Launcher Ammo. Fires explosive projectiles that only detonate when hitting ARC.',
	
	acquisition: {
		sources: [
			'Scavenging',
			'Crafting (Requires Rascal Blueprint)'
		]
	},

	// Base Crafting (Produces Rascal I)
	craftingRequirements: [
		{ itemId: 'advanced-mechanical-components', quantity: 2 },
		{ itemId: 'heavy-gun-parts', quantity: 3 },
		{ itemId: 'canister', quantity: 5 }
	],
	craftingStation: { stationId: 'gunsmith', level: 2 },

	// Advanced Stats
	advancedStats: {
		arcArmorPenetration: 'Very Strong',
		damage: 75,
		fireRateBase: 13.7,
		fireRateRpm: 0,
		headshotMultiplier: 1.0, // Not listed
		range: 28.3,
		stability: 87.8,
		agility: 78.1,
		stealth: 1,
		weight: 4.0
	},

	// Tier Progression
	tiers: [
		{
			tierLevel: 1,
			romanNumeral: 'I',
			durabilityMax: 0, // ?? shots
			weaponSalePrice: 7000,
			componentSalePricePerSlot: 0,
			
			repairCost: [
				{ itemId: 'advanced-mechanical-components', quantity: 1 },
				{ itemId: 'heavy-gun-parts', quantity: 2 }
			],
			repairDurabilityRestored: 50,
			
			recycleYield: [
				{ itemId: 'advanced-mechanical-components', quantity: 1 },
				{ itemId: 'heavy-gun-parts', quantity: 2 }
			],
			salvageYield: [
				{ itemId: 'heavy-gun-parts', quantity: 2 }
			]
		},
		{
			tierLevel: 2,
			romanNumeral: 'II',
			durabilityMax: 0,
			weaponSalePrice: 10000,
			componentSalePricePerSlot: 0,
			
			upgradeRequirements: [
				{ itemId: 'rascal-1', quantity: 1 },
				{ itemId: 'advanced-mechanical-components', quantity: 1 },
				{ itemId: 'heavy-gun-parts', quantity: 1 }
			],
			upgradeStation: { stationId: 'gunsmith', level: 1 },
			upgradePerks: [
				'7% Reduced Reload Time',
				'+10 Durability'
			],
			
			repairCost: [
				{ itemId: 'advanced-mechanical-components', quantity: 2 },
				{ itemId: 'heavy-gun-parts', quantity: 2 }
			],
			repairDurabilityRestored: 55,
			
			recycleYield: [
				{ itemId: 'advanced-mechanical-components', quantity: 2 },
				{ itemId: 'heavy-gun-parts', quantity: 2 }
			],
			salvageYield: [
				{ itemId: 'heavy-gun-parts', quantity: 2 }
			]
		},
		{
			tierLevel: 3,
			romanNumeral: 'III',
			durabilityMax: 0,
			weaponSalePrice: 13000,
			componentSalePricePerSlot: 0,
			
			upgradeRequirements: [
				{ itemId: 'rascal-2', quantity: 1 },
				{ itemId: 'advanced-mechanical-components', quantity: 1 },
				{ itemId: 'heavy-gun-parts', quantity: 1 }
			],
			upgradeStation: { stationId: 'gunsmith', level: 1 },
			upgradePerks: [
				'13% Reduced Reload Time',
				'+20 Durability'
			],
			
			repairCost: [
				{ itemId: 'advanced-mechanical-components', quantity: 2 },
				{ itemId: 'heavy-gun-parts', quantity: 3 }
			],
			repairDurabilityRestored: 60,
			
			recycleYield: [
				{ itemId: 'advanced-mechanical-components', quantity: 2 },
				{ itemId: 'heavy-gun-parts', quantity: 3 }
			],
			salvageYield: [
				{ itemId: 'heavy-gun-parts', quantity: 3 }
			]
		},
		{
			tierLevel: 4,
			romanNumeral: 'IV',
			durabilityMax: 0,
			weaponSalePrice: 17000,
			componentSalePricePerSlot: 0,
			
			upgradeRequirements: [
				{ itemId: 'rascal-3', quantity: 1 },
				{ itemId: 'advanced-mechanical-components', quantity: 2 },
				{ itemId: 'heavy-gun-parts', quantity: 1 }
			],
			upgradeStation: { stationId: 'gunsmith', level: 1 },
			upgradePerks: [
				'20% Reduced Reload Time',
				'+30 Durability'
			],
			
			repairCost: [
				{ itemId: 'advanced-mechanical-components', quantity: 3 },
				{ itemId: 'heavy-gun-parts', quantity: 3 }
			],
			repairDurabilityRestored: 65,
			
			recycleYield: [
				{ itemId: 'advanced-mechanical-components', quantity: 3 },
				{ itemId: 'heavy-gun-parts', quantity: 3 }
			],
			salvageYield: [
				{ itemId: 'heavy-gun-parts', quantity: 3 }
			]
		}
	],

	patchHistory: [
		{ version: '1.29.0', notes: 'Added to the game.' }
	],
	image: 'https://arcraiders.wiki/w/images/4/4b/Rascal_II.png',
	icon: '🔫'
};