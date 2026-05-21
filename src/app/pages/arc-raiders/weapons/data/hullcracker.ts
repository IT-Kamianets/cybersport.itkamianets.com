import { Weapon } from '../weapons.data';

export const hullcracker: Weapon = {
	id: 'hullcracker',
	name: 'Hullcracker',
	class: 'Heavy',
	rarity: 'Epic',
	ammoType: 'Special', // Launcher Ammo
	magSize: 5,
	firingMode: 'Pump-Action',
	overview: 'The Hullcracker is a pump-action Grenade Launcher that uses Launcher Ammo. Fires explosive projectiles that only detonate when hitting ARC.',
	
	acquisition: {
		sources: [
			'Scavenging',
			'Crafting (Requires Hullcracker Blueprint rewarded from quest: The Major\'s Footlocker)',
			'Sold by Tian Wen'
		]
	},

	// Base Crafting (Produces Hullcracker I)
	craftingRequirements: [
		{ itemId: 'magnetic-accelerator', quantity: 1 },
		{ itemId: 'heavy-gun-parts', quantity: 3 },
		{ itemId: 'exodus-modules', quantity: 1 }
	],
	craftingStation: { stationId: 'gunsmith', level: 3 },

	// Advanced Stats
	advancedStats: {
		arcArmorPenetration: 'Very Strong',
		damage: 100,
		fireRateBase: 20.3,
		fireRateRpm: 0,
		headshotMultiplier: 1.0, // Not listed
		range: 38.9,
		stability: 97.2,
		agility: 67.9,
		stealth: 1,
		weight: 7.0
	},

	// Tier Progression
	tiers: [
		{
			tierLevel: 1,
			romanNumeral: 'I',
			durabilityMax: 0, // ?? shots
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
				{ itemId: 'hullcracker-1', quantity: 1 },
				{ itemId: 'advanced-mechanical-components', quantity: 1 },
				{ itemId: 'heavy-gun-parts', quantity: 2 }
			],
			upgradeStation: { stationId: 'gunsmith', level: 1 },
			upgradePerks: [
				'18% Increased Fire Rate',
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
				{ itemId: 'hullcracker-2', quantity: 1 },
				{ itemId: 'advanced-mechanical-components', quantity: 2 },
				{ itemId: 'heavy-gun-parts', quantity: 1 }
			],
			upgradeStation: { stationId: 'gunsmith', level: 1 },
			upgradePerks: [
				'35% Increased Fire Rate',
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
				{ itemId: 'hullcracker-3', quantity: 1 },
				{ itemId: 'advanced-mechanical-components', quantity: 2 },
				{ itemId: 'heavy-gun-parts', quantity: 3 }
			],
			upgradeStation: { stationId: 'gunsmith', level: 1 },
			upgradePerks: [
				'53% Increased Fire Rate',
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
	image: 'https://placehold.co/800x400/1a1a1a/800080?text=Hullcracker+Grenade+Launcher',
	icon: '🔫'
};