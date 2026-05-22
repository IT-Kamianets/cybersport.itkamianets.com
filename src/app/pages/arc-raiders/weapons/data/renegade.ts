import { Weapon } from '../weapons.data';

export const renegade: Weapon = {
	id: 'renegade',
	name: 'Renegade',
	class: 'Battle Rifle',
	rarity: 'Rare',
	ammoType: 'Medium Ammo',
	magSize: 8,
	firingMode: 'Lever-Action',
	overview: 'The Renegade is a lever-action Battle Rifle that uses Medium Ammo. When fully upgraded, it is a powerful weapon in the hands of a skilled marksman. Although it favors medium- to long-range engagements, it is no slouch when taking the fight inside. Raiders who are crouching and stationary can bullseye targets down range. Equipping the Renegade with a Silencer II or better deafens every shot. Reloading is slow; every shell is loaded individually.',
	
	acquisition: {
		sources: [
			'Scavenging',
			'Crafting',
			'Sold by Tian Wen'
		]
	},

	// Base Crafting (Produces Renegade I)
	craftingRequirements: [
		{ itemId: 'advanced-mechanical-components', quantity: 2 },
		{ itemId: 'medium-gun-parts', quantity: 3 },
		{ itemId: 'oil', quantity: 5 }
	],
	craftingStation: { stationId: 'gunsmith', level: 3 },

	// Advanced Stats
	advancedStats: {
		arcArmorPenetration: 'Moderate',
		damage: 35,
		fireRateBase: 21,
		fireRateRpm: 0,
		headshotMultiplier: 2.25,
		range: 68.8,
		stability: 85.7,
		agility: 55.8,
		stealth: 16,
		weight: 10.0
	},

	// Tier Progression (Durability, Upgrades, Repairs, Recycling)
	tiers: [
		{
			tierLevel: 1,
			romanNumeral: 'I',
			durabilityMax: 269,
			weaponSalePrice: 7000,
			componentSalePricePerSlot: 2367,
			
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
			durabilityMax: 298,
			weaponSalePrice: 10000,
			componentSalePricePerSlot: 3417,
			
			upgradeRequirements: [
				{ itemId: 'renegade-1', quantity: 1 },
				{ itemId: 'advanced-mechanical-components', quantity: 1 },
				{ itemId: 'medium-gun-parts', quantity: 2 }
			],
			upgradeStation: { stationId: 'gunsmith', level: 1 },
			upgradePerks: [
				'16.6% Reduced Dispersion Recovery Time',
				'25% Increased Fire Rate',
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
			durabilityMax: 336,
			weaponSalePrice: 13000,
			componentSalePricePerSlot: 4467,
			
			upgradeRequirements: [
				{ itemId: 'renegade-2', quantity: 1 },
				{ itemId: 'advanced-mechanical-components', quantity: 1 },
				{ itemId: 'medium-gun-parts', quantity: 2 }
			],
			upgradeStation: { stationId: 'gunsmith', level: 1 },
			upgradePerks: [
				'33.3% Reduced Dispersion Recovery Time',
				'50% Increased Fire Rate',
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
			durabilityMax: 384,
			weaponSalePrice: 17000,
			componentSalePricePerSlot: 6100,
			
			upgradeRequirements: [
				{ itemId: 'renegade-3', quantity: 1 },
				{ itemId: 'advanced-mechanical-components', quantity: 2 },
				{ itemId: 'medium-gun-parts', quantity: 2 }
			],
			upgradeStation: { stationId: 'gunsmith', level: 1 },
			upgradePerks: [
				'50% Reduced Dispersion Recovery Time',
				'75% Increased Fire Rate',
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
	image: 'https://arcraiders.wiki/w/images/b/b5/Renegade-Level1.png',
	icon: '🔫'
};