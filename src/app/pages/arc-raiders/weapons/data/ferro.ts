import { Weapon } from '../weapons.data';

export const ferro: Weapon = {
	id: 'ferro',
	name: 'Ferro',
	class: 'Battle Rifle', // Make sure to add 'Battle Rifle' to your interface!
	rarity: 'Common',
	ammoType: 'Heavy Ammo',
	magSize: 1,
	firingMode: 'Break-Action',
	overview: 'The Ferro is a break-action Battle Rifle that uses Heavy Ammo. It is an inexpensive but effective option for taking engagements at medium- to long-range, but its lengthy reload speed can make it a liability when fights get close. Packs a punch, but must be reloaded between every shot.',
	
	acquisition: {
		sources: [
			'Free Loadout (May receive this weapon as part of the kit)',
			'Scavenging',
			'Crafting',
			'Sold by Tian Wen'
		]
	},

	// Base Crafting (Produces Ferro I)
	craftingRequirements: [
		{ itemId: 'metal-parts', quantity: 5 },
		{ itemId: 'rubber-parts', quantity: 2 }
	],
	craftingStation: { stationId: 'gunsmith', level: 1 },

	// Advanced Stats
	advancedStats: {
		arcArmorPenetration: 'Strong',
		damage: 40,
		fireRateBase: 6.6,
		fireRateRpm: 0, // Not explicitly listed in RPM in this PDF, though derived would be low
		headshotMultiplier: 2.5,
		range: 53.1,
		stability: 78.1,
		agility: 32.1,
		stealth: 8,
		weight: 8.0
	},

	// Tier Progression (Durability, Upgrades, Repairs, Recycling)
	tiers: [
		{
			tierLevel: 1,
			romanNumeral: 'I',
			durabilityMax: 152,
			weaponSalePrice: 475,
			componentSalePricePerSlot: 238,
			
			repairCost: [
				{ itemId: 'metal-parts', quantity: 2 },
				{ itemId: 'rubber-parts', quantity: 1 }
			],
			repairDurabilityRestored: 50,
			
			recycleYield: [
				{ itemId: 'metal-parts', quantity: 2 },
				{ itemId: 'rubber-parts', quantity: 1 }
			],
			salvageYield: [
				{ itemId: 'metal-parts', quantity: 2 }
			]
		},
		{
			tierLevel: 2,
			romanNumeral: 'II',
			durabilityMax: 169,
			weaponSalePrice: 1000,
			componentSalePricePerSlot: 500,
			
			upgradeRequirements: [
				{ itemId: 'ferro-1', quantity: 1 }, // Requires previous tier
				{ itemId: 'metal-parts', quantity: 7 }
			],
			upgradeStation: { stationId: 'gunsmith', level: 1 },
			upgradePerks: [
				'13% Reduced Reload Time',
				'+10 Durability'
			],
			
			repairCost: [
				{ itemId: 'metal-parts', quantity: 4 },
				{ itemId: 'rubber-parts', quantity: 3 }
			],
			repairDurabilityRestored: 55,
			
			recycleYield: [
				{ itemId: 'metal-parts', quantity: 4 },
				{ itemId: 'rubber-parts', quantity: 3 }
			],
			salvageYield: [
				{ itemId: 'metal-parts', quantity: 2 }
			]
		},
		{
			tierLevel: 3,
			romanNumeral: 'III',
			durabilityMax: 190,
			weaponSalePrice: 2000,
			componentSalePricePerSlot: 669,
			
			upgradeRequirements: [
				{ itemId: 'ferro-2', quantity: 1 },
				{ itemId: 'metal-parts', quantity: 9 },
				{ itemId: 'simple-gun-parts', quantity: 1 }
			],
			upgradeStation: { stationId: 'gunsmith', level: 1 },
			upgradePerks: [
				'26% Reduced Reload Time',
				'+20 Durability'
			],
			
			repairCost: [
				{ itemId: 'metal-parts', quantity: 6 },
				{ itemId: 'simple-gun-parts', quantity: 1 }
			],
			repairDurabilityRestored: 60,
			
			recycleYield: [
				{ itemId: 'metal-parts', quantity: 6 },
				{ itemId: 'simple-gun-parts', quantity: 1 }
			],
			salvageYield: [
				{ itemId: 'simple-gun-parts', quantity: 1 }
			]
		},
		{
			tierLevel: 4,
			romanNumeral: 'IV',
			durabilityMax: 217,
			weaponSalePrice: 2900,
			componentSalePricePerSlot: 744,
			
			upgradeRequirements: [
				{ itemId: 'ferro-3', quantity: 1 },
				{ itemId: 'mechanical-components', quantity: 1 },
				{ itemId: 'simple-gun-parts', quantity: 1 }
			],
			upgradeStation: { stationId: 'gunsmith', level: 1 },
			upgradePerks: [
				'39% Reduced Reload Time',
				'+30 Durability'
			],
			
			repairCost: [
				{ itemId: 'mechanical-components', quantity: 1 },
				{ itemId: 'simple-gun-parts', quantity: 2 }
			],
			repairDurabilityRestored: 65,
			
			recycleYield: [
				{ itemId: 'mechanical-components', quantity: 1 },
				{ itemId: 'simple-gun-parts', quantity: 2 }
			],
			salvageYield: [
				{ itemId: 'simple-gun-parts', quantity: 2 }
			]
		}
	],

	patchHistory: [
		{ version: '1.0', notes: 'Initial Release.' }
	],
	image: 'https://arcraiders.wiki/w/images/b/b0/Ferro-Level1.png',
	icon: '🔫'
};