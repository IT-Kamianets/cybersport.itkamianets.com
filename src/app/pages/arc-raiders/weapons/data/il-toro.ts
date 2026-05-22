import { Weapon } from '../weapons.data';

export const ilToro: Weapon = {
	id: 'il-toro',
	name: 'Il Toro',
	class: 'Shotgun',
	rarity: 'Uncommon',
	ammoType: 'Shotgun Ammo',
	magSize: 5,
	firingMode: 'Pump-Action',
	overview: 'The Il Toro is a pump-action Shotgun that uses Shotgun Ammo. Its high damage output makes it capable of downing most Raiders at close range with only two or three body shots. Ammo is reloaded one-by-one.',
	
	acquisition: {
		sources: [
			'Scavenging',
			'Crafting (Requires Il Toro Blueprint)',
			'Sold by Tian Wen'
		]
	},

	// Base Crafting (Produces Il Toro I)
	craftingRequirements: [
		{ itemId: 'mechanical-components', quantity: 5 },
		{ itemId: 'simple-gun-parts', quantity: 6 }
	],
	craftingStation: { stationId: 'gunsmith', level: 1 },

	// Advanced Stats
	advancedStats: {
		arcArmorPenetration: 'Weak',
		damage: 63,
		fireRateBase: 14,
		fireRateRpm: 38,
		headshotMultiplier: 1.0, // Multiplier not listed, assuming neutral
		range: 20,
		stability: 80.6,
		agility: 61.1,
		stealth: 18,
		weight: 8.0
	},

	// Tier Progression (Durability, Upgrades, Repairs, Recycling)
	tiers: [
		{
			tierLevel: 1,
			romanNumeral: 'I',
			durabilityMax: 0, // ?? shots in PDF
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
			durabilityMax: 0,
			weaponSalePrice: 7000,
			componentSalePricePerSlot: 0,
			
			upgradeRequirements: [
				{ itemId: 'il-toro-1', quantity: 1 },
				{ itemId: 'mechanical-components', quantity: 3 },
				{ itemId: 'simple-gun-parts', quantity: 1 }
			],
			upgradeStation: { stationId: 'gunsmith', level: 1 },
			upgradePerks: [
				'17.5% Increased Fire Rate',
				'+1 Magazine Size',
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
			durabilityMax: 0,
			weaponSalePrice: 10000,
			componentSalePricePerSlot: 0,
			
			upgradeRequirements: [
				{ itemId: 'il-toro-2', quantity: 1 },
				{ itemId: 'mechanical-components', quantity: 4 },
				{ itemId: 'heavy-gun-parts', quantity: 1 }
			],
			upgradeStation: { stationId: 'gunsmith', level: 1 },
			upgradePerks: [
				'35% Increased Fire Rate',
				'+2 Magazine Size',
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
			durabilityMax: 0,
			weaponSalePrice: 13000,
			componentSalePricePerSlot: 0,
			
			upgradeRequirements: [
				{ itemId: 'il-toro-3', quantity: 1 },
				{ itemId: 'mechanical-components', quantity: 4 },
				{ itemId: 'heavy-gun-parts', quantity: 1 }
			],
			upgradeStation: { stationId: 'gunsmith', level: 1 },
			upgradePerks: [
				'50% Increased Fire Rate',
				'+3 Magazine Size',
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
	image: 'https://arcraiders.wiki/w/images/5/50/Il_Toro-Level1.png',
	icon: '🔫'
};