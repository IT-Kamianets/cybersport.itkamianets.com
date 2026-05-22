import { Weapon } from '../weapons.data';

export const torrente: Weapon = {
	id: 'torrente',
	name: 'Torrente',
	class: 'LMG',
	rarity: 'Rare',
	ammoType: 'Medium Ammo',
	magSize: 60,
	firingMode: 'Fully-Automatic',
	overview: 'The Torrente is a fully-automatic Light Machine Gun (LMG) that uses Medium Ammo. Has a large ammo capacity, but is only accurate while crouched.',
	
	acquisition: {
		sources: [
			'Scavenging',
			'Crafting (Requires Torrente Blueprint)'
		]
	},

	// Base Crafting (Produces Torrente I)
	craftingRequirements: [
		{ itemId: 'advanced-mechanical-components', quantity: 2 },
		{ itemId: 'medium-gun-parts', quantity: 3 },
		{ itemId: 'steel-spring', quantity: 6 }
	],
	craftingStation: { stationId: 'gunsmith', level: 2 },

	// Advanced Stats
	advancedStats: {
		arcArmorPenetration: 'Moderate',
		damage: 8,
		fireRateBase: 58.3,
		fireRateRpm: 0,
		headshotMultiplier: 2.0,
		range: 49.9,
		stability: 74.2,
		agility: 37.7,
		stealth: 1,
		weight: 12.0
	},

	// Tier Progression (Durability, Upgrades, Repairs, Recycling)
	tiers: [
		{
			tierLevel: 1,
			romanNumeral: 'I',
			durabilityMax: 1113,
			weaponSalePrice: 7000,
			componentSalePricePerSlot: 0,
			
			repairCost: [
				{ itemId: 'advanced-mechanical-components', quantity: 1 },
				{ itemId: 'medium-gun-parts', quantity: 1 }
			],
			repairDurabilityRestored: 50,
			
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
			durabilityMax: 1236,
			weaponSalePrice: 10000,
			componentSalePricePerSlot: 0,
			
			upgradeRequirements: [
				{ itemId: 'torrente-1', quantity: 1 },
				{ itemId: 'advanced-mechanical-components', quantity: 1 },
				{ itemId: 'medium-gun-parts', quantity: 2 }
			],
			upgradeStation: { stationId: 'gunsmith', level: 1 },
			upgradePerks: [
				'+10 Magazine Size',
				'15% Reduced Reload Time',
				'+10 Durability'
			],
			
			repairCost: [
				{ itemId: 'advanced-mechanical-components', quantity: 2 },
				{ itemId: 'medium-gun-parts', quantity: 1 }
			],
			repairDurabilityRestored: 55,
			
			recycleYield: [
				{ itemId: 'advanced-mechanical-components', quantity: 2 },
				{ itemId: 'medium-gun-parts', quantity: 2 }
			],
			salvageYield: [
				{ itemId: 'medium-gun-parts', quantity: 2 }
			]
		},
		{
			tierLevel: 3,
			romanNumeral: 'III',
			durabilityMax: 1391,
			weaponSalePrice: 13000,
			componentSalePricePerSlot: 0,
			
			upgradeRequirements: [
				{ itemId: 'torrente-2', quantity: 1 },
				{ itemId: 'advanced-mechanical-components', quantity: 1 },
				{ itemId: 'medium-gun-parts', quantity: 2 }
			],
			upgradeStation: { stationId: 'gunsmith', level: 1 },
			upgradePerks: [
				'+20 Magazine Size',
				'30% Reduced Reload Time',
				'+20 Durability'
			],
			
			repairCost: [
				{ itemId: 'advanced-mechanical-components', quantity: 2 },
				{ itemId: 'medium-gun-parts', quantity: 3 }
			],
			repairDurabilityRestored: 60,
			
			recycleYield: [
				{ itemId: 'advanced-mechanical-components', quantity: 2 },
				{ itemId: 'medium-gun-parts', quantity: 3 }
			],
			salvageYield: [
				{ itemId: 'medium-gun-parts', quantity: 3 }
			]
		},
		{
			tierLevel: 4,
			romanNumeral: 'IV',
			durabilityMax: 1590,
			weaponSalePrice: 17000,
			componentSalePricePerSlot: 0,
			
			upgradeRequirements: [
				{ itemId: 'torrente-3', quantity: 1 },
				{ itemId: 'advanced-mechanical-components', quantity: 2 },
				{ itemId: 'medium-gun-parts', quantity: 2 }
			],
			upgradeStation: { stationId: 'gunsmith', level: 1 },
			upgradePerks: [
				'+30 Magazine Size',
				'45% Reduced Reload Time',
				'+30 Durability'
			],
			
			repairCost: [
				{ itemId: 'advanced-mechanical-components', quantity: 3 },
				{ itemId: 'medium-gun-parts', quantity: 3 }
			],
			repairDurabilityRestored: 65,
			
			recycleYield: [
				{ itemId: 'advanced-mechanical-components', quantity: 3 },
				{ itemId: 'medium-gun-parts', quantity: 3 }
			],
			salvageYield: [
				{ itemId: 'medium-gun-parts', quantity: 3 }
			]
		}
	],

	patchHistory: [
		{ version: '1.0', notes: 'Initial Release.' }
	],
	image: 'https://arcraiders.wiki/w/images/1/1e/Torrente-Level1.png',
	icon: '🔫'
};