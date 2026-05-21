import { Weapon } from '../weapons.data';

export const bettina: Weapon = {
	id: 'bettina',
	name: 'Bettina',
	class: 'Assault Rifle',
	rarity: 'Epic',
	ammoType: 'Heavy Ammo',
	magSize: 22,
	firingMode: 'Fully-Automatic',
	overview: 'The Bettina is a fully-automatic Assault Rifle that uses Heavy Ammo. It has a slow fire rate but extremely high damage output and Strong ARC Armor Penetration. Note: Crafting this weapon requires a learned Bettina Blueprint.',
	
	acquisition: {
		sources: [
			'Scavenging',
			'Crafting (Requires Bettina Blueprint)'
		]
	},

	// Base Crafting (Produces Bettina I)
	craftingRequirements: [
		{ itemId: 'advanced-mechanical-components', quantity: 3 },
		{ itemId: 'heavy-gun-parts', quantity: 3 },
		{ itemId: 'canister', quantity: 3 }
	],
	craftingStation: { stationId: 'gunsmith', level: 3 },

	// Advanced Stats
	advancedStats: {
		arcArmorPenetration: 'Strong',
		damage: 16,
		fireRateBase: 28.7,
		fireRateRpm: 250,
		headshotMultiplier: 1.5,
		range: 52.3,
		stability: 79.7,
		agility: 49.4,
		stealth: 14,
		weight: 11.0
	},

	// Tier Progression (Durability, Upgrades, Repairs, Recycling)
	tiers: [
		{
			tierLevel: 1,
			romanNumeral: 'I',
			durabilityMax: 759,
			weaponSalePrice: 8000,
			componentSalePricePerSlot: 2750,
			
			repairCost: [
				{ itemId: 'advanced-mechanical-components', quantity: 1 },
				{ itemId: 'heavy-gun-parts', quantity: 2 }
			],
			repairDurabilityRestored: 50,
			
			recycleYield: [
				{ itemId: 'advanced-mechanical-components', quantity: 1 },
				{ itemId: 'heavy-gun-parts', quantity: 2 }
			],
			salvageYield: [
				{ itemId: 'advanced-mechanical-components', quantity: 1 }
			]
		},
		{
			tierLevel: 2,
			romanNumeral: 'II',
			durabilityMax: 843,
			weaponSalePrice: 11000,
			componentSalePricePerSlot: 3800,
			
			upgradeRequirements: [
				{ itemId: 'bettina-1', quantity: 1 }, // Requires previous tier
				{ itemId: 'advanced-mechanical-components', quantity: 1 },
				{ itemId: 'heavy-gun-parts', quantity: 2 }
			],
			upgradeStation: { stationId: 'gunsmith', level: 1 },
			upgradePerks: [
				'5% Increased Fire Rate',
				'11.1% Reduced Reload Time',
				'+10 Durability'
			],
			
			repairCost: [
				{ itemId: 'advanced-mechanical-components', quantity: 2 },
				{ itemId: 'heavy-gun-parts', quantity: 2 }
			],
			repairDurabilityRestored: 55,
			
			recycleYield: [
				{ itemId: 'advanced-mechanical-components', quantity: 2 },
				{ itemId: 'heavy-gun-parts', quantity: 2 }
			],
			salvageYield: [
				{ itemId: 'advanced-mechanical-components', quantity: 2 }
			]
		},
		{
			tierLevel: 3,
			romanNumeral: 'III',
			durabilityMax: 948,
			weaponSalePrice: 14000,
			componentSalePricePerSlot: 4850,
			
			upgradeRequirements: [
				{ itemId: 'bettina-2', quantity: 1 },
				{ itemId: 'advanced-mechanical-components', quantity: 1 },
				{ itemId: 'heavy-gun-parts', quantity: 2 }
			],
			upgradeStation: { stationId: 'gunsmith', level: 1 },
			upgradePerks: [
				'10% Increased Fire Rate',
				'22.2% Reduced Reload Time',
				'+20 Durability'
			],
			
			repairCost: [
				{ itemId: 'advanced-mechanical-components', quantity: 2 },
				{ itemId: 'heavy-gun-parts', quantity: 3 }
			],
			repairDurabilityRestored: 60,
			
			recycleYield: [
				{ itemId: 'advanced-mechanical-components', quantity: 2 },
				{ itemId: 'heavy-gun-parts', quantity: 3 }
			],
			salvageYield: [
				{ itemId: 'advanced-mechanical-components', quantity: 3 }
			]
		},
		{
			tierLevel: 4,
			romanNumeral: 'IV',
			durabilityMax: 1095,
			weaponSalePrice: 18000,
			componentSalePricePerSlot: 6484,
			
			upgradeRequirements: [
				{ itemId: 'bettina-3', quantity: 1 },
				{ itemId: 'advanced-mechanical-components', quantity: 2 },
				{ itemId: 'heavy-gun-parts', quantity: 2 }
			],
			upgradeStation: { stationId: 'gunsmith', level: 1 },
			upgradePerks: [
				'15% Increased Fire Rate',
				'33.3% Reduced Reload Time',
				'+30 Durability'
			],
			
			repairCost: [
				{ itemId: 'advanced-mechanical-components', quantity: 3 },
				{ itemId: 'heavy-gun-parts', quantity: 3 }
			],
			repairDurabilityRestored: 65,
			
			recycleYield: [
				{ itemId: 'advanced-mechanical-components', quantity: 3 },
				{ itemId: 'heavy-gun-parts', quantity: 3 }
			],
			salvageYield: [
				{ itemId: 'advanced-mechanical-components', quantity: 4 }
			]
		}
	],

	patchHistory: [
		{ 
			version: '1.29.0', 
			notes: 'Base Fire Rate has been increased from 235 to 250.' 
		},
		{ 
			version: '1.26.0', 
			notes: 'Base Damage increased from 14 to 16. Base Fire-Rate reduced from 285 to 235. Per Shot Dispersion reduced by around 40% (Making it bloom slower). Dispersion Recovery Time improved by around 30%. Damage against ARC armor increased by around 33%. Unlisted stat changes: Range increased from 51.3 to 52.3, Stability increased from 76.4 to 79.7, Agility increased from 48.2 to 49.4.' 
		},
		{ 
			version: '1.7.0', 
			notes: 'Durability Burn Rate: ~0.43% -> ~0.17% per shot. Base Magazine Size: 20 -> 22. Base Reload Time: 5 -> 4.5.' 
		}
	],
	image: 'https://placehold.co/800x400/1a1a1a/800080?text=Bettina+Assault+Rifle',
	icon: '🔫'
};