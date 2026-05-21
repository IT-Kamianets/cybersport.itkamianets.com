import { Weapon } from '../weapons.data';

export const hairpin: Weapon = {
	id: 'hairpin',
	name: 'Hairpin',
	class: 'Pistol',
	rarity: 'Common',
	ammoType: 'Light Ammo',
	magSize: 8,
	firingMode: 'Slide-Action',
	overview: 'The Hairpin is a slide-action Pistol that uses Light Ammo. It has a built-in silencer. Great for stealth, but tricky in combat.',
	
	acquisition: {
		sources: [
			'Scavenging',
			'Crafting',
			'Sold by Tian Wen'
		]
	},

	// Base Crafting (Produces Hairpin I)
	craftingRequirements: [
		{ itemId: 'metal-parts', quantity: 2 },
		{ itemId: 'plastic-parts', quantity: 5 }
	],
	craftingStation: { stationId: 'gunsmith', level: 1 },

	// Advanced Stats
	advancedStats: {
		arcArmorPenetration: 'Very Weak',
		damage: 20,
		fireRateBase: 9,
		fireRateRpm: 0,
		headshotMultiplier: 2.5,
		range: 38.6,
		stability: 90.9,
		agility: 78.3,
		stealth: 70,
		weight: 3.0
	},

	// Tier Progression (Durability, Upgrades, Repairs, Recycling)
	tiers: [
		{
			tierLevel: 1,
			romanNumeral: 'I',
			durabilityMax: 274,
			weaponSalePrice: 450,
			componentSalePricePerSlot: 0,
			
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
			durabilityMax: 304,
			weaponSalePrice: 1000,
			componentSalePricePerSlot: 0,
			
			upgradeRequirements: [
				{ itemId: 'hairpin-1', quantity: 1 },
				{ itemId: 'metal-parts', quantity: 8 }
			],
			upgradeStation: { stationId: 'gunsmith', level: 1 },
			upgradePerks: [
				'10% Increased Fire Rate',
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
				{ itemId: 'metal-parts', quantity: 4 }
			]
		},
		{
			tierLevel: 3,
			romanNumeral: 'III',
			durabilityMax: 342,
			weaponSalePrice: 2000,
			componentSalePricePerSlot: 0,
			
			upgradeRequirements: [
				{ itemId: 'hairpin-2', quantity: 1 },
				{ itemId: 'metal-parts', quantity: 9 },
				{ itemId: 'simple-gun-parts', quantity: 1 }
			],
			upgradeStation: { stationId: 'gunsmith', level: 1 },
			upgradePerks: [
				'20% Increased Fire Rate',
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
			durabilityMax: 391,
			weaponSalePrice: 2900,
			componentSalePricePerSlot: 0,
			
			upgradeRequirements: [
				{ itemId: 'hairpin-3', quantity: 1 },
				{ itemId: 'mechanical-components', quantity: 1 },
				{ itemId: 'simple-gun-parts', quantity: 1 }
			],
			upgradeStation: { stationId: 'gunsmith', level: 1 },
			upgradePerks: [
				'30% Increased Fire Rate',
				'40% Reduced Reload Time',
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
	image: 'https://placehold.co/800x400/1a1a1a/808080?text=Hairpin+Pistol',
	icon: '🔫'
};