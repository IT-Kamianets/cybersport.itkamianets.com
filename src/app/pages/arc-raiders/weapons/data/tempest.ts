import { Weapon } from '../weapons.data';

export const tempest: Weapon = {
	id: 'tempest',
	name: 'Tempest',
	class: 'Assault Rifle',
	rarity: 'Epic',
	ammoType: 'Medium Ammo',
	magSize: 25,
	firingMode: 'Fully-Automatic',
	overview: 'The Tempest is a fully-automatic Assault Rifle that uses Medium Ammo. It has a moderate fire rate and accuracy. Note: Crafting this weapon requires a learned Tempest Blueprint.',
	
	acquisition: {
		sources: [
			'Scavenging',
			'Crafting (Requires Tempest Blueprint)'
		]
	},

	// Base Crafting (Produces Tempest I)
	craftingRequirements: [
		{ itemId: 'magnetic-accelerator', quantity: 1 },
		{ itemId: 'medium-gun-parts', quantity: 3 },
		{ itemId: 'exodus-modules', quantity: 2 }
	],
	craftingStation: { stationId: 'gunsmith', level: 3 },

	// Advanced Stats
	advancedStats: {
		arcArmorPenetration: 'Moderate',
		damage: 10,
		fireRateBase: 36.7,
		fireRateRpm: 0, // Not explicitly listed in RPM in this PDF
		headshotMultiplier: 1.5,
		range: 55.9,
		stability: 78.9,
		agility: 46,
		stealth: 14,
		weight: 11.0
	},

	// Tier Progression (Durability, Upgrades, Repairs, Recycling)
	tiers: [
		{
			tierLevel: 1,
			romanNumeral: 'I',
			durabilityMax: 950,
			weaponSalePrice: 13000,
			componentSalePricePerSlot: 4367,
			
			repairCost: [
				{ itemId: 'advanced-mechanical-components', quantity: 2 },
				{ itemId: 'medium-gun-parts', quantity: 2 }
			],
			repairDurabilityRestored: 50,
			
			recycleYield: [
				{ itemId: 'advanced-mechanical-components', quantity: 2 },
				{ itemId: 'medium-gun-parts', quantity: 2 }
			],
			salvageYield: [
				{ itemId: 'medium-gun-parts', quantity: 2 }
			]
		},
		{
			tierLevel: 2,
			romanNumeral: 'II',
			durabilityMax: 1055,
			weaponSalePrice: 17000,
			componentSalePricePerSlot: 4325,
			
			upgradeRequirements: [
				{ itemId: 'tempest-1', quantity: 1 }, // Requires previous tier
				{ itemId: 'advanced-mechanical-components', quantity: 2 },
				{ itemId: 'medium-gun-parts', quantity: 1 }
			],
			upgradeStation: { stationId: 'gunsmith', level: 1 },
			upgradePerks: [
				'16.6% Reduced Horizontal Recoil',
				'13% Reduced Reload Time',
				'+10 Durability'
			],
			
			repairCost: [
				{ itemId: 'advanced-mechanical-components', quantity: 3 },
				{ itemId: 'medium-gun-parts', quantity: 3 }
			],
			repairDurabilityRestored: 55,
			
			recycleYield: [
				{ itemId: 'advanced-mechanical-components', quantity: 3 },
				{ itemId: 'medium-gun-parts', quantity: 3 }
			],
			salvageYield: [
				{ itemId: 'medium-gun-parts', quantity: 3 }
			]
		},
		{
			tierLevel: 3,
			romanNumeral: 'III',
			durabilityMax: 1187,
			weaponSalePrice: 22000,
			componentSalePricePerSlot: 5725,
			
			upgradeRequirements: [
				{ itemId: 'tempest-2', quantity: 1 },
				{ itemId: 'advanced-mechanical-components', quantity: 2 },
				{ itemId: 'medium-gun-parts', quantity: 3 }
			],
			upgradeStation: { stationId: 'gunsmith', level: 1 },
			upgradePerks: [
				'33.3% Reduced Horizontal Recoil',
				'26% Reduced Reload Time',
				'+20 Durability'
			],
			
			repairCost: [
				{ itemId: 'advanced-mechanical-components', quantity: 4 },
				{ itemId: 'medium-gun-parts', quantity: 4 }
			],
			repairDurabilityRestored: 60,
			
			recycleYield: [
				{ itemId: 'advanced-mechanical-components', quantity: 4 },
				{ itemId: 'medium-gun-parts', quantity: 4 }
			],
			salvageYield: [
				{ itemId: 'medium-gun-parts', quantity: 4 }
			]
		},
		{
			tierLevel: 4,
			romanNumeral: 'IV',
			durabilityMax: 1366,
			weaponSalePrice: 27000,
			componentSalePricePerSlot: 7125,
			
			upgradeRequirements: [
				{ itemId: 'tempest-3', quantity: 1 },
				{ itemId: 'advanced-mechanical-components', quantity: 2 },
				{ itemId: 'medium-gun-parts', quantity: 3 }
			],
			upgradeStation: { stationId: 'gunsmith', level: 1 },
			upgradePerks: [
				'50% Reduced Horizontal Recoil',
				'40% Reduced Reload Time',
				'+30 Durability'
			],
			
			repairCost: [
				{ itemId: 'advanced-mechanical-components', quantity: 5 },
				{ itemId: 'medium-gun-parts', quantity: 4 }
			],
			repairDurabilityRestored: 65,
			
			recycleYield: [
				{ itemId: 'advanced-mechanical-components', quantity: 5 },
				{ itemId: 'medium-gun-parts', quantity: 4 }
			],
			salvageYield: [
				{ itemId: 'medium-gun-parts', quantity: 5 }
			]
		}
	],

	patchHistory: [
		{ version: '1.0', notes: 'Initial Release.' }
	],
	image: 'https://placehold.co/800x400/1a1a1a/800080?text=Tempest+Assault+Rifle',
	icon: '🔫'
};