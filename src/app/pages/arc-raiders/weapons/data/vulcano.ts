import { Weapon } from '../weapons.data';

export const vulcano: Weapon = {
	id: 'vulcano',
	name: 'Vulcano',
	class: 'Shotgun',
	rarity: 'Epic',
	ammoType: 'Shotgun Ammo',
	magSize: 6,
	firingMode: 'Semi-Automatic',
	overview: 'The Vulcano is a semi-automatic Shotgun that uses Shotgun Ammo. Has good bullet spread but sharp falloff.',
	
	acquisition: {
		sources: [
			'Scavenging',
			'Crafting (Requires Vulcano Blueprint)'
		]
	},

	// Base Crafting (Produces Vulcano I)
	craftingRequirements: [
		{ itemId: 'magnetic-accelerator', quantity: 1 },
		{ itemId: 'heavy-gun-parts', quantity: 3 },
		{ itemId: 'exodus-modules', quantity: 1 }
	],
	craftingStation: { stationId: 'gunsmith', level: 3 },

	// Advanced Stats
	advancedStats: {
		arcArmorPenetration: 'Weak',
		damage: 49.5,
		fireRateBase: 26.3,
		fireRateRpm: 0,
		headshotMultiplier: 1.0, // Not explicitly listed
		range: 26,
		stability: 68.6,
		agility: 70.3,
		stealth: 15,
		weight: 8.0
	},

	// Tier Progression (Durability, Upgrades, Repairs, Recycling)
	tiers: [
		{
			tierLevel: 1,
			romanNumeral: 'I',
			durabilityMax: 0, // ?? shots in PDF
			weaponSalePrice: 10000,
			componentSalePricePerSlot: 0,
			
			repairCost: [
				{ itemId: 'advanced-mechanical-components', quantity: 2 },
				{ itemId: 'heavy-gun-parts', quantity: 1 }
			],
			repairDurabilityRestored: 50,
			
			recycleYield: [
				{ itemId: 'advanced-mechanical-components', quantity: 2 },
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
			weaponSalePrice: 13000,
			componentSalePricePerSlot: 0,
			
			upgradeRequirements: [
				{ itemId: 'vulcano-1', quantity: 1 },
				{ itemId: 'advanced-mechanical-components', quantity: 1 },
				{ itemId: 'heavy-gun-parts', quantity: 1 }
			],
			upgradeStation: { stationId: 'gunsmith', level: 1 },
			upgradePerks: [
				'10% Increased Fire Rate',
				'13% Reduced Reload Time',
				'+10 Durability'
			],
			
			repairCost: [
				{ itemId: 'advanced-mechanical-components', quantity: 2 },
				{ itemId: 'heavy-gun-parts', quantity: 2 }
			],
			repairDurabilityRestored: 55,
			
			recycleYield: [
				{ itemId: 'advanced-mechanical-components', quantity: 2 },
				{ itemId: 'heavy-gun-parts', quantity: 3 }
			],
			salvageYield: [
				{ itemId: 'heavy-gun-parts', quantity: 3 }
			]
		},
		{
			tierLevel: 3,
			romanNumeral: 'III',
			durabilityMax: 0,
			weaponSalePrice: 17000,
			componentSalePricePerSlot: 0,
			
			upgradeRequirements: [
				{ itemId: 'vulcano-2', quantity: 1 },
				{ itemId: 'advanced-mechanical-components', quantity: 2 },
				{ itemId: 'heavy-gun-parts', quantity: 1 }
			],
			upgradeStation: { stationId: 'gunsmith', level: 1 },
			upgradePerks: [
				'20% Increased Fire Rate',
				'26% Reduced Reload Time',
				'+20 Durability'
			],
			
			repairCost: [
				{ itemId: 'advanced-mechanical-components', quantity: 3 },
				{ itemId: 'heavy-gun-parts', quantity: 3 }
			],
			repairDurabilityRestored: 60,
			
			recycleYield: [
				{ itemId: 'advanced-mechanical-components', quantity: 3 },
				{ itemId: 'heavy-gun-parts', quantity: 4 }
			],
			salvageYield: [
				{ itemId: 'heavy-gun-parts', quantity: 4 }
			]
		},
		{
			tierLevel: 4,
			romanNumeral: 'IV',
			durabilityMax: 0,
			weaponSalePrice: 22000,
			componentSalePricePerSlot: 0,
			
			upgradeRequirements: [
				{ itemId: 'vulcano-3', quantity: 1 },
				{ itemId: 'advanced-mechanical-components', quantity: 2 },
				{ itemId: 'heavy-gun-parts', quantity: 3 }
			],
			upgradeStation: { stationId: 'gunsmith', level: 1 },
			upgradePerks: [
				'30% Increased Fire Rate',
				'40% Reduced Reload Time',
				'+30 Durability'
			],
			
			repairCost: [
				{ itemId: 'advanced-mechanical-components', quantity: 4 },
				{ itemId: 'heavy-gun-parts', quantity: 4 }
			],
			repairDurabilityRestored: 65,
			
			recycleYield: [
				{ itemId: 'advanced-mechanical-components', quantity: 4 },
				{ itemId: 'heavy-gun-parts', quantity: 5 }
			],
			salvageYield: [
				{ itemId: 'heavy-gun-parts', quantity: 5 }
			]
		}
	],

	patchHistory: [
		{ version: '1.0', notes: 'Initial Release.' }
	],
	image: 'https://placehold.co/800x400/1a1a1a/800080?text=Vulcano+Shotgun',
	icon: '🔫'
};