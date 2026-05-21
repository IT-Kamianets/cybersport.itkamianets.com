import { Weapon } from '../weapons.data';

export const arpeggio: Weapon = {
	id: 'arpeggio',
	name: 'Arpeggio',
	class: 'Assault Rifle',
	rarity: 'Uncommon',
	ammoType: 'Medium Ammo',
	magSize: 24,
	firingMode: '3-Round Burst',
	overview: 'The Arpeggio is a three-round-burst Assault Rifle that uses Medium Ammo. It has decent damage output and accuracy, making it highly effective for controlled, mid-range engagements.',
	
	acquisition: {
		sources: [
			'Scavenging',
			'Crafting'
		]
	},

	// Base Crafting (Produces Arpeggio I)
	craftingRequirements: [
		{ itemId: 'mechanical-components', quantity: 6 },
		{ itemId: 'simple-gun-parts', quantity: 6 }
	],
	craftingStation: { stationId: 'gunsmith', level: 2 },

	// Advanced Stats
	advancedStats: {
		arcArmorPenetration: 'Moderate',
		damage: 9.5,
		fireRateBase: 18.3,
		fireRateRpm: 0, // Not explicitly listed in PDF, leaving 0 as placeholder
		headshotMultiplier: 2.0,
		range: 55.9,
		stability: 84,
		agility: 57.3,
		stealth: 14,
		weight: 7.0
	},

	// Tier Progression (Durability, Upgrades, Repairs, Recycling)
	tiers: [
		{
			tierLevel: 1,
			romanNumeral: 'I',
			durabilityMax: 0, // Listed as "?? shots" in the current datamine
			weaponSalePrice: 5500,
			componentSalePricePerSlot: 2820,
			
			repairCost: [
				{ itemId: 'mechanical-components', quantity: 2 },
				{ itemId: 'simple-gun-parts', quantity: 2 }
			],
			repairDurabilityRestored: 50,
			
			recycleYield: [
				{ itemId: 'simple-gun-parts', quantity: 2 },
				{ itemId: 'mechanical-components', quantity: 2 }
			],
			salvageYield: [
				{ itemId: 'simple-gun-parts', quantity: 2 }
			]
		},
		{
			tierLevel: 2,
			romanNumeral: 'II',
			durabilityMax: 0, 
			weaponSalePrice: 8000,
			componentSalePricePerSlot: 4265,
			
			upgradeRequirements: [
				{ itemId: 'arpeggio-1', quantity: 1 }, // Requires previous tier
				{ itemId: 'mechanical-components', quantity: 4 },
				{ itemId: 'simple-gun-parts', quantity: 1 }
			],
			upgradeStation: { stationId: 'gunsmith', level: 1 },
			upgradePerks: [
				'20% Increased Fire Rate',
				'12.5% Reduced Reload Time',
				'+10 Durability'
			],
			
			repairCost: [
				{ itemId: 'mechanical-components', quantity: 3 },
				{ itemId: 'simple-gun-parts', quantity: 3 }
			],
			repairDurabilityRestored: 55,
			
			recycleYield: [
				{ itemId: 'simple-gun-parts', quantity: 3 },
				{ itemId: 'mechanical-components', quantity: 3 }
			],
			salvageYield: [
				{ itemId: 'simple-gun-parts', quantity: 3 }
			]
		},
		{
			tierLevel: 3,
			romanNumeral: 'III',
			durabilityMax: 0, 
			weaponSalePrice: 11500,
			componentSalePricePerSlot: 4144, // As written in PDF
			
			upgradeRequirements: [
				{ itemId: 'arpeggio-2', quantity: 1 },
				{ itemId: 'mechanical-components', quantity: 5 },
				{ itemId: 'medium-gun-parts', quantity: 1 }
			],
			upgradeStation: { stationId: 'gunsmith', level: 1 },
			upgradePerks: [
				'40% Increased Fire Rate',
				'25% Reduced Reload Time',
				'+20 Durability'
			],
			
			repairCost: [
				{ itemId: 'mechanical-components', quantity: 4 },
				{ itemId: 'simple-gun-parts', quantity: 4 }
			],
			repairDurabilityRestored: 60,
			
			recycleYield: [
				{ itemId: 'simple-gun-parts', quantity: 4 },
				{ itemId: 'mechanical-components', quantity: 4 }
			],
			salvageYield: [
				{ itemId: 'simple-gun-parts', quantity: 4 }
			]
		},
		{
			tierLevel: 4,
			romanNumeral: 'IV',
			durabilityMax: 0, 
			weaponSalePrice: 15000,
			componentSalePricePerSlot: 5443,
			
			upgradeRequirements: [
				{ itemId: 'arpeggio-3', quantity: 1 },
				{ itemId: 'mechanical-components', quantity: 5 },
				{ itemId: 'medium-gun-parts', quantity: 1 }
			],
			upgradeStation: { stationId: 'gunsmith', level: 1 },
			upgradePerks: [
				'60% Increased Fire Rate',
				'50% Reduced Reload Time',
				'+30 Durability'
			],
			
			repairCost: [
				{ itemId: 'mechanical-components', quantity: 5 },
				{ itemId: 'simple-gun-parts', quantity: 5 }
			],
			repairDurabilityRestored: 65,
			
			recycleYield: [
				{ itemId: 'simple-gun-parts', quantity: 5 },
				{ itemId: 'mechanical-components', quantity: 5 }
			],
			salvageYield: [
				{ itemId: 'simple-gun-parts', quantity: 5 }
			]
		}
	],

	patchHistory: [
		{ version: '1.0', notes: 'Initial Release.' }
	],
	image: 'https://arcraiders.wiki/w/images/6/6c/Arpeggio-Level1.png',
	icon: '🔫'
};