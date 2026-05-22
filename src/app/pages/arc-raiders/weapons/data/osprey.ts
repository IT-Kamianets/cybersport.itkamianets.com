import { Weapon } from '../weapons.data';

export const osprey: Weapon = {
	id: 'osprey',
	name: 'Osprey',
	class: 'Sniper Rifle',
	rarity: 'Rare',
	ammoType: 'Medium Ammo',
	magSize: 8,
	firingMode: 'Bolt-Action',
	overview: 'The Osprey is a bolt-action Sniper Rifle that uses Medium Ammo. It excels at hitting long-range targets with the help of its scope. Has reliable damage output and accuracy.',
	
	acquisition: {
		sources: [
			'Scavenging',
			'Crafting (Requires Osprey Blueprint)'
		]
	},

	// Base Crafting (Produces Osprey I)
	craftingRequirements: [
		{ itemId: 'advanced-mechanical-components', quantity: 2 },
		{ itemId: 'medium-gun-parts', quantity: 3 },
		{ itemId: 'wires', quantity: 7 }
	],
	craftingStation: { stationId: 'gunsmith', level: 2 },

	// Advanced Stats
	advancedStats: {
		arcArmorPenetration: 'Moderate',
		damage: 45,
		fireRateBase: 17.7,
		fireRateRpm: 0,
		headshotMultiplier: 2.0,
		range: 80.3,
		stability: 89.4,
		agility: 45.9,
		stealth: 12,
		weight: 7.0
	},

	// Tier Progression (Durability, Upgrades, Repairs, Recycling)
	tiers: [
		{
			tierLevel: 1,
			romanNumeral: 'I',
			durabilityMax: 135,
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
			durabilityMax: 149,
			weaponSalePrice: 10000,
			componentSalePricePerSlot: 0,
			
			upgradeRequirements: [
				{ itemId: 'osprey-1', quantity: 1 },
				{ itemId: 'advanced-mechanical-components', quantity: 1 },
				{ itemId: 'medium-gun-parts', quantity: 2 }
			],
			upgradeStation: { stationId: 'gunsmith', level: 1 },
			upgradePerks: [
				'20% Reduced Bolt Action Time',
				'12.5% Reduced Reload Time',
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
			durabilityMax: 168,
			weaponSalePrice: 13000,
			componentSalePricePerSlot: 0,
			
			upgradeRequirements: [
				{ itemId: 'osprey-2', quantity: 1 },
				{ itemId: 'advanced-mechanical-components', quantity: 1 },
				{ itemId: 'medium-gun-parts', quantity: 2 }
			],
			upgradeStation: { stationId: 'gunsmith', level: 1 },
			upgradePerks: [
				'40% Reduced Bolt Action Time',
				'25% Reduced Reload Time',
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
			durabilityMax: 192,
			weaponSalePrice: 17000,
			componentSalePricePerSlot: 0,
			
			upgradeRequirements: [
				{ itemId: 'osprey-3', quantity: 1 },
				{ itemId: 'advanced-mechanical-components', quantity: 2 },
				{ itemId: 'medium-gun-parts', quantity: 2 }
			],
			upgradeStation: { stationId: 'gunsmith', level: 1 },
			upgradePerks: [
				'60% Reduced Bolt Action Time',
				'37.5% Reduced Reload Time',
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
	image: 'https://arcraiders.wiki/w/images/a/ae/Osprey-Level1.png',
	icon: '🔫'
};