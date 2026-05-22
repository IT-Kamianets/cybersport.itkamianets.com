import { Weapon } from '../weapons.data';

export const venator: Weapon = {
	id: 'venator',
	name: 'Venator',
	class: 'Pistol',
	rarity: 'Rare',
	ammoType: 'Medium Ammo',
	magSize: 10,
	firingMode: 'Semi-Automatic',
	overview: 'The Venator is a semi-automatic Pistol that uses Medium Ammo. It is a fairly fast-firing pistol that shoots two projectiles at a time. It is particularly effective at close- to medium-range combat. Despite firing two bullets per shot, only one unit of ammo is removed from the magazine when the trigger is pulled.',
	
	acquisition: {
		sources: [
			'Scavenging',
			'Crafting (Requires Venator Blueprint)'
		]
	},

	// Base Crafting (Produces Venator I)
	craftingRequirements: [
		{ itemId: 'advanced-mechanical-components', quantity: 2 },
		{ itemId: 'medium-gun-parts', quantity: 3 },
		{ itemId: 'magnet', quantity: 5 }
	],
	craftingStation: { stationId: 'gunsmith', level: 2 },

	// Advanced Stats
	advancedStats: {
		arcArmorPenetration: 'Moderate',
		damage: 16, // 2x8
		fireRateBase: 36.7,
		fireRateRpm: 0,
		headshotMultiplier: 2.0,
		range: 48.4,
		stability: 61.3,
		agility: 76.4,
		stealth: 12,
		weight: 5.0
	},

	// Tier Progression (Durability, Upgrades, Repairs, Recycling)
	tiers: [
		{
			tierLevel: 1,
			romanNumeral: 'I',
			durabilityMax: 729,
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
			durabilityMax: 810,
			weaponSalePrice: 10000,
			componentSalePricePerSlot: 0,
			
			upgradeRequirements: [
				{ itemId: 'venator-1', quantity: 1 },
				{ itemId: 'advanced-mechanical-components', quantity: 1 },
				{ itemId: 'medium-gun-parts', quantity: 2 }
			],
			upgradeStation: { stationId: 'gunsmith', level: 1 },
			upgradePerks: [
				'13% Increased Fire Rate',
				'16% Reduced Reload Time',
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
			durabilityMax: 911,
			weaponSalePrice: 13000,
			componentSalePricePerSlot: 0,
			
			upgradeRequirements: [
				{ itemId: 'venator-2', quantity: 1 },
				{ itemId: 'advanced-mechanical-components', quantity: 1 },
				{ itemId: 'medium-gun-parts', quantity: 2 }
			],
			upgradeStation: { stationId: 'gunsmith', level: 1 },
			upgradePerks: [
				'26% Increased Fire Rate',
				'33% Reduced Reload Time',
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
			durabilityMax: 1041,
			weaponSalePrice: 17000,
			componentSalePricePerSlot: 0,
			
			upgradeRequirements: [
				{ itemId: 'venator-3', quantity: 1 },
				{ itemId: 'advanced-mechanical-components', quantity: 2 },
				{ itemId: 'medium-gun-parts', quantity: 2 }
			],
			upgradeStation: { stationId: 'gunsmith', level: 1 },
			upgradePerks: [
				'40% Increased Fire Rate',
				'50% Reduced Reload Time',
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
		{ version: '1.17.0', notes: 'Reduced Headshot Multiplier from 2.5 to 2. Reduced Base Damage from 9 to 8.' },
		{ version: '1.3.0', notes: 'Reduced Fire-rate gained from upgrades: 22/44/66% -> 13/26/40%. Increased Weight: 2 -> 5.' }
	],
	image: 'https://arcraiders.wiki/w/images/b/b4/Venator-Level1.png',
	icon: '🔫'
};