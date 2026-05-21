import { Weapon } from '../weapons.data';

export const stitcher: Weapon = {
	id: 'stitcher',
	name: 'Stitcher',
	class: 'SMG',
	rarity: 'Common',
	ammoType: 'Light Ammo',
	magSize: 20,
	firingMode: 'Fully-Automatic',
	overview: 'The Stitcher is a fully-automatic Submachine Gun (SMG) that uses Light Ammo. It deals good damage, but has quite a low fire-rate and can be hard to control.',
	
	acquisition: {
		sources: [
			'Free Loadout (May receive this weapon as part of the kit)',
			'Scavenging',
			'Crafting',
			'Sold by Tian Wen'
		]
	},

	// Base Crafting (Produces Stitcher I)
	craftingRequirements: [
		{ itemId: 'metal-parts', quantity: 8 },
		{ itemId: 'rubber-parts', quantity: 4 }
	],
	craftingStation: { stationId: 'gunsmith', level: 1 },

	// Advanced Stats
	advancedStats: {
		arcArmorPenetration: 'Very Weak',
		damage: 6.5,
		fireRateBase: 45.3,
		fireRateRpm: 680,
		headshotMultiplier: 1.75,
		range: 42.1,
		stability: 45.3,
		agility: 73.8,
		stealth: 19,
		weight: 5.0
	},

	// Tier Progression (Durability, Upgrades, Repairs, Recycling)
	tiers: [
		{
			tierLevel: 1,
			romanNumeral: 'I',
			durabilityMax: 713,
			weaponSalePrice: 800,
			componentSalePricePerSlot: 400,
			
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
			durabilityMax: 792,
			weaponSalePrice: 2000,
			componentSalePricePerSlot: 1000,
			
			upgradeRequirements: [
				{ itemId: 'stitcher-1', quantity: 1 },
				{ itemId: 'metal-parts', quantity: 8 },
				{ itemId: 'rubber-parts', quantity: 12 }
			],
			upgradeStation: { stationId: 'gunsmith', level: 1 },
			upgradePerks: [
				'16.6% Reduced Horizontal Recoil',
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
			durabilityMax: 891,
			weaponSalePrice: 3000,
			componentSalePricePerSlot: 1027,
			
			upgradeRequirements: [
				{ itemId: 'stitcher-2', quantity: 1 },
				{ itemId: 'metal-parts', quantity: 10 },
				{ itemId: 'simple-gun-parts', quantity: 1 }
			],
			upgradeStation: { stationId: 'gunsmith', level: 1 },
			upgradePerks: [
				'33.3% Reduced Horizontal Recoil',
				'26% Reduced Reload Time',
				'+20 Durability'
			],
			
			repairCost: [
				{ itemId: 'metal-parts', quantity: 12 },
				{ itemId: 'simple-gun-parts', quantity: 1 }
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
			durabilityMax: 1018,
			weaponSalePrice: 5000,
			componentSalePricePerSlot: 1333,
			
			upgradeRequirements: [
				{ itemId: 'stitcher-3', quantity: 1 },
				{ itemId: 'mechanical-components', quantity: 3 },
				{ itemId: 'simple-gun-parts', quantity: 1 }
			],
			upgradeStation: { stationId: 'gunsmith', level: 1 },
			upgradePerks: [
				'50% Reduced Horizontal Recoil',
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
		{ 
			version: '1.17.0', 
			notes: 'Reduced Headshot Multiplier from 2.5 to 1.75. Reduced Base Damage from 7 to 6.5. Increased Per Shot Dispersion by around 50%.' 
		}
	],
	image: 'https://arcraiders.wiki/w/images/3/3a/Stitcher-Level1.png',
	icon: '🔫'
};