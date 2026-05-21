import { Weapon } from '../weapons.data';

export const kettle: Weapon = {
	id: 'kettle',
	name: 'Kettle',
	class: 'Assault Rifle',
	rarity: 'Common',
	ammoType: 'Light Ammo',
	magSize: 20,
	firingMode: 'Semi-Automatic',
	overview: 'Quick and accurate, but has low bullet velocity and takes a long time reload.',
	
	acquisition: {
		sources: [
			'Free Loadout (May receive this weapon as part of the kit)',
			'Scavenging',
			'Crafting',
			'Sold by Tian Wen'
		]
	},

	// Base Crafting (Produces Kettle I)
	craftingRequirements: [
		{ itemId: 'metal-parts', quantity: 6 },
		{ itemId: 'rubber-parts', quantity: 8 }
	],
	craftingStation: { stationId: 'gunsmith', level: 1 },

	// Advanced Stats
	advancedStats: {
		arcArmorPenetration: 'Very Weak',
		damage: 8.5,
		fireRateBase: 30,
		fireRateRpm: 450,
		headshotMultiplier: 2.5,
		range: 42.8,
		stability: 69.8,
		agility: 58.5,
		stealth: 26,
		weight: 7.0
	},

	// Tier Progression (Durability, Upgrades, Repairs, Recycling)
	tiers: [
		{
			tierLevel: 1,
			romanNumeral: 'I',
			durabilityMax: 625,
			weaponSalePrice: 840,
			componentSalePricePerSlot: 425,
			
			repairCost: [
				{ itemId: 'metal-parts', quantity: 3 },
				{ itemId: 'rubber-parts', quantity: 2 }
			],
			repairDurabilityRestored: 50,
			
			recycleYield: [
				{ itemId: 'metal-parts', quantity: 3 },
				{ itemId: 'rubber-parts', quantity: 2 }
			],
			salvageYield: [
				{ itemId: 'metal-parts', quantity: 3 }
			]
		},
		{
			tierLevel: 2,
			romanNumeral: 'II',
			durabilityMax: 694,
			weaponSalePrice: 2000,
			componentSalePricePerSlot: 684,
			
			upgradeRequirements: [
				{ itemId: 'kettle-1', quantity: 1 }, // Requires previous tier
				{ itemId: 'metal-parts', quantity: 8 },
				{ itemId: 'plastic-parts', quantity: 10 }
			],
			upgradeStation: { stationId: 'gunsmith', level: 1 },
			upgradePerks: [
				'25% Increased Bullet Velocity',
				'13% Reduced Reload Time',
				'+10 Durability'
			],
			
			repairCost: [
				{ itemId: 'metal-parts', quantity: 6 },
				{ itemId: 'rubber-parts', quantity: 6 }
			],
			repairDurabilityRestored: 55,
			
			recycleYield: [
				{ itemId: 'metal-parts', quantity: 6 },
				{ itemId: 'rubber-parts', quantity: 6 }
			],
			salvageYield: [
				{ itemId: 'metal-parts', quantity: 6 }
			]
		},
		{
			tierLevel: 3,
			romanNumeral: 'III',
			durabilityMax: 781,
			weaponSalePrice: 3000,
			componentSalePricePerSlot: 783,
			
			upgradeRequirements: [
				{ itemId: 'kettle-2', quantity: 1 },
				{ itemId: 'metal-parts', quantity: 10 },
				{ itemId: 'simple-gun-parts', quantity: 1 }
			],
			upgradeStation: { stationId: 'gunsmith', level: 1 },
			upgradePerks: [
				'50% Increased Bullet Velocity',
				'26% Reduced Reload Time',
				'+20 Durability'
			],
			
			repairCost: [
				{ itemId: 'metal-parts', quantity: 12 },
				{ itemId: 'simple-gun-parts', quantity: 2 }
			],
			repairDurabilityRestored: 60,
			
			recycleYield: [
				{ itemId: 'metal-parts', quantity: 12 },
				{ itemId: 'simple-gun-parts', quantity: 1 }
			],
			salvageYield: [
				{ itemId: 'simple-gun-parts', quantity: 1 }
			]
		},
		{
			tierLevel: 4,
			romanNumeral: 'IV',
			durabilityMax: 898,
			weaponSalePrice: 5000,
			componentSalePricePerSlot: 1076,
			
			upgradeRequirements: [
				{ itemId: 'kettle-3', quantity: 1 },
				{ itemId: 'mechanical-components', quantity: 3 },
				{ itemId: 'simple-gun-parts', quantity: 1 }
			],
			upgradeStation: { stationId: 'gunsmith', level: 1 },
			upgradePerks: [
				'75% Increased Bullet Velocity',
				'40% Reduced Reload Time',
				'+30 Durability'
			],
			
			repairCost: [
				{ itemId: 'mechanical-components', quantity: 2 },
				{ itemId: 'simple-gun-parts', quantity: 2 }
			],
			repairDurabilityRestored: 65,
			
			recycleYield: [
				{ itemId: 'mechanical-components', quantity: 2 },
				{ itemId: 'simple-gun-parts', quantity: 2 }
			],
			salvageYield: [
				{ itemId: 'simple-gun-parts', quantity: 2 }
			]
		}
	],

	patchHistory: [
		{ version: '1.17.0', notes: 'Reduced Base Damage from 10 to 8.5' }
	],
	image: 'https://arcraiders.wiki/w/images/c/c1/Kettle-Level1.png',
	icon: '🔫'
};
