import { Weapon } from '../weapons.data';

export const burletta: Weapon = {
	id: 'burletta',
	name: 'Burletta',
	class: 'Pistol',
	rarity: 'Uncommon',
	ammoType: 'Light Ammo',
	magSize: 12,
	firingMode: 'Semi-Automatic',
	overview: 'The Burletta is a semi-automatic Pistol that uses Light Ammo. Has decent damage output and accuracy.',
	
	acquisition: {
		sources: [
			'Scavenging',
			'Crafting (Requires Burletta Blueprint rewarded from quest: Industrial Espionage)',
			'Sold by Tian Wen'
		]
	},

	// Base Crafting (Produces Burletta I)
	craftingRequirements: [
		{ itemId: 'mechanical-components', quantity: 3 },
		{ itemId: 'simple-gun-parts', quantity: 3 }
	],
	craftingStation: { stationId: 'gunsmith', level: 1 },

	// Advanced Stats
	advancedStats: {
		arcArmorPenetration: 'Very Weak',
		damage: 10,
		fireRateBase: 28,
		fireRateRpm: 0,
		headshotMultiplier: 2.5,
		range: 41.7,
		stability: 74.5,
		agility: 84.4,
		stealth: 24,
		weight: 4.0
	},

	// Tier Progression (Durability, Upgrades, Repairs, Recycling)
	tiers: [
		{
			tierLevel: 1,
			romanNumeral: 'I',
			durabilityMax: 0, // ?? shots in PDF
			weaponSalePrice: 2900,
			componentSalePricePerSlot: 0,
			
			repairCost: [
				{ itemId: 'mechanical-components', quantity: 1 },
				{ itemId: 'simple-gun-parts', quantity: 2 }
			],
			repairDurabilityRestored: 50,
			
			recycleYield: [
				{ itemId: 'mechanical-components', quantity: 1 },
				{ itemId: 'simple-gun-parts', quantity: 2 }
			],
			salvageYield: [
				{ itemId: 'simple-gun-parts', quantity: 2 }
			]
		},
		{
			tierLevel: 2,
			romanNumeral: 'II',
			durabilityMax: 0,
			weaponSalePrice: 5000,
			componentSalePricePerSlot: 0,
			
			upgradeRequirements: [
				{ itemId: 'burletta-1', quantity: 1 },
				{ itemId: 'mechanical-components', quantity: 3 },
				{ itemId: 'simple-gun-parts', quantity: 1 }
			],
			upgradeStation: { stationId: 'gunsmith', level: 1 },
			upgradePerks: [
				'16.6% Reduced Reload Time',
				'+10 Durability'
			],
			
			repairCost: [
				{ itemId: 'mechanical-components', quantity: 2 },
				{ itemId: 'simple-gun-parts', quantity: 2 }
			],
			repairDurabilityRestored: 55,
			
			recycleYield: [
				{ itemId: 'mechanical-components', quantity: 2 },
				{ itemId: 'simple-gun-parts', quantity: 2 }
			],
			salvageYield: [
				{ itemId: 'simple-gun-parts', quantity: 2 }
			]
		},
		{
			tierLevel: 3,
			romanNumeral: 'III',
			durabilityMax: 0,
			weaponSalePrice: 7000,
			componentSalePricePerSlot: 0,
			
			upgradeRequirements: [
				{ itemId: 'burletta-2', quantity: 1 },
				{ itemId: 'mechanical-components', quantity: 3 },
				{ itemId: 'simple-gun-parts', quantity: 1 }
			],
			upgradeStation: { stationId: 'gunsmith', level: 1 },
			upgradePerks: [
				'33.3% Reduced Reload Time',
				'+20 Durability'
			],
			
			repairCost: [
				{ itemId: 'mechanical-components', quantity: 3 },
				{ itemId: 'simple-gun-parts', quantity: 3 }
			],
			repairDurabilityRestored: 60,
			
			recycleYield: [
				{ itemId: 'mechanical-components', quantity: 3 },
				{ itemId: 'simple-gun-parts', quantity: 3 }
			],
			salvageYield: [
				{ itemId: 'simple-gun-parts', quantity: 3 }
			]
		},
		{
			tierLevel: 4,
			romanNumeral: 'IV',
			durabilityMax: 0,
			weaponSalePrice: 10000,
			componentSalePricePerSlot: 0,
			
			upgradeRequirements: [
				{ itemId: 'burletta-3', quantity: 1 },
				{ itemId: 'mechanical-components', quantity: 4 },
				{ itemId: 'light-gun-parts', quantity: 1 }
			],
			upgradeStation: { stationId: 'gunsmith', level: 1 },
			upgradePerks: [
				'50% Reduced Reload Time',
				'+30 Durability'
			],
			
			repairCost: [
				{ itemId: 'mechanical-components', quantity: 4 },
				{ itemId: 'simple-gun-parts', quantity: 4 }
			],
			repairDurabilityRestored: 65,
			
			recycleYield: [
				{ itemId: 'mechanical-components', quantity: 4 },
				{ itemId: 'simple-gun-parts', quantity: 4 }
			],
			salvageYield: [
				{ itemId: 'simple-gun-parts', quantity: 4 }
			]
		}
	],

	patchHistory: [
		{ version: '1.0', notes: 'Initial Release.' }
	],
	image: 'https://placehold.co/800x400/1a1a1a/008080?text=Burletta+Pistol',
	icon: '🔫'
};