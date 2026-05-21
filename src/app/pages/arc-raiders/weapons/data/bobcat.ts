import { Weapon } from '../weapons.data';

export const bobcat: Weapon = {
	id: 'bobcat',
	name: 'Bobcat',
	class: 'SMG',
	rarity: 'Epic',
	ammoType: 'Light Ammo',
	magSize: 20,
	firingMode: 'Fully-Automatic',
	overview: 'The Bobcat is a fully-automatic Submachine Gun (SMG) that uses Light Ammo. Has a high fire rate but low accuracy.',
	
	acquisition: {
		sources: [
			'Scavenging',
			'Crafting (Requires Bobcat Blueprint)'
		]
	},

	// Base Crafting (Produces Bobcat I)
	craftingRequirements: [
		{ itemId: 'magnetic-accelerator', quantity: 1 },
		{ itemId: 'light-gun-parts', quantity: 3 },
		{ itemId: 'exodus-modules', quantity: 2 }
	],
	craftingStation: { stationId: 'gunsmith', level: 3 },

	// Advanced Stats
	advancedStats: {
		arcArmorPenetration: 'Very Weak',
		damage: 6,
		fireRateBase: 66.7,
		fireRateRpm: 0,
		headshotMultiplier: 2.0,
		range: 44,
		stability: 45.9,
		agility: 73.1,
		stealth: 21,
		weight: 7.0
	},

	// Tier Progression (Durability, Upgrades, Repairs, Recycling)
	tiers: [
		{
			tierLevel: 1,
			romanNumeral: 'I',
			durabilityMax: 1525,
			weaponSalePrice: 13000,
			componentSalePricePerSlot: 4367,
			
			repairCost: [
				{ itemId: 'advanced-mechanical-components', quantity: 2 },
				{ itemId: 'light-gun-parts', quantity: 2 }
			],
			repairDurabilityRestored: 50,
			
			recycleYield: [
				{ itemId: 'advanced-mechanical-components', quantity: 2 },
				{ itemId: 'light-gun-parts', quantity: 2 }
			],
			salvageYield: [
				{ itemId: 'light-gun-parts', quantity: 2 }
			]
		},
		{
			tierLevel: 2,
			romanNumeral: 'II',
			durabilityMax: 1694,
			weaponSalePrice: 17000,
			componentSalePricePerSlot: 4325,
			
			upgradeRequirements: [
				{ itemId: 'bobcat-1', quantity: 1 },
				{ itemId: 'advanced-mechanical-components', quantity: 2 },
				{ itemId: 'light-gun-parts', quantity: 1 }
			],
			upgradeStation: { stationId: 'gunsmith', level: 1 },
			upgradePerks: [
				'15% Reduced Max Shot Dispersion',
				'15% Reduced Horizontal Recoil',
				'13% Reduced Reload Time',
				'+10 Durability'
			],
			
			repairCost: [
				{ itemId: 'advanced-mechanical-components', quantity: 3 },
				{ itemId: 'light-gun-parts', quantity: 3 }
			],
			repairDurabilityRestored: 55,
			
			recycleYield: [
				{ itemId: 'advanced-mechanical-components', quantity: 3 },
				{ itemId: 'light-gun-parts', quantity: 3 }
			],
			salvageYield: [
				{ itemId: 'light-gun-parts', quantity: 3 }
			]
		},
		{
			tierLevel: 3,
			romanNumeral: 'III',
			durabilityMax: 1906,
			weaponSalePrice: 22000,
			componentSalePricePerSlot: 5725,
			
			upgradeRequirements: [
				{ itemId: 'bobcat-2', quantity: 1 },
				{ itemId: 'advanced-mechanical-components', quantity: 2 },
				{ itemId: 'light-gun-parts', quantity: 3 }
			],
			upgradeStation: { stationId: 'gunsmith', level: 1 },
			upgradePerks: [
				'30% Reduced Max Shot Dispersion',
				'30% Reduced Horizontal Recoil',
				'26% Reduced Reload Time',
				'+20 Durability'
			],
			
			repairCost: [
				{ itemId: 'advanced-mechanical-components', quantity: 4 },
				{ itemId: 'light-gun-parts', quantity: 4 }
			],
			repairDurabilityRestored: 60,
			
			recycleYield: [
				{ itemId: 'advanced-mechanical-components', quantity: 4 },
				{ itemId: 'light-gun-parts', quantity: 4 }
			],
			salvageYield: [
				{ itemId: 'light-gun-parts', quantity: 4 }
			]
		},
		{
			tierLevel: 4,
			romanNumeral: 'IV',
			durabilityMax: 2185,
			weaponSalePrice: 27000,
			componentSalePricePerSlot: 7125,
			
			upgradeRequirements: [
				{ itemId: 'bobcat-3', quantity: 1 },
				{ itemId: 'advanced-mechanical-components', quantity: 2 },
				{ itemId: 'light-gun-parts', quantity: 3 }
			],
			upgradeStation: { stationId: 'gunsmith', level: 1 },
			upgradePerks: [
				'50% Reduced Max Shot Dispersion',
				'45% Reduced Horizontal Recoil',
				'40% Reduced Reload Time',
				'+30 Durability'
			],
			
			repairCost: [
				{ itemId: 'advanced-mechanical-components', quantity: 5 },
				{ itemId: 'light-gun-parts', quantity: 4 }
			],
			repairDurabilityRestored: 65,
			
			recycleYield: [
				{ itemId: 'advanced-mechanical-components', quantity: 5 },
				{ itemId: 'light-gun-parts', quantity: 4 }
			],
			salvageYield: [
				{ itemId: 'light-gun-parts', quantity: 5 }
			]
		}
	],

	patchHistory: [
		{ version: '1.0', notes: 'Initial Release.' }
	],
	image: 'https://placehold.co/800x400/1a1a1a/800080?text=Bobcat+SMG',
	icon: '🔫'
};