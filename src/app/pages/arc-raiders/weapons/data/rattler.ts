import { Weapon } from '../weapons.data';

export const rattler: Weapon = {
	id: 'rattler',
	name: 'Rattler',
	class: 'Assault Rifle',
	rarity: 'Common',
	ammoType: 'Medium Ammo',
	magSize: 12, // Base mag size at Tier I
	firingMode: 'Fully-Automatic',
	overview: 'The Rattler is a fully-automatic Assault Rifle that uses Medium Ammo. It is an inexpensive but solid weapon that offers good damage output and accuracy at close- to medium-range. A cheap offensive option, but has to be reloaded 2 bullets at a time.',
	
	acquisition: {
		sources: [
			'Free Loadout (May receive this weapon as part of the kit)',
			'Scavenging',
			'Crafting'
		]
	},

	// Base Crafting (Produces Rattler I)
	craftingRequirements: [
		{ itemId: 'metal-parts', quantity: 16 },
		{ itemId: 'rubber-parts', quantity: 12 }
	],
	craftingStation: { stationId: 'gunsmith', level: 1 },

	// Advanced Stats
	advancedStats: {
		arcArmorPenetration: 'Moderate',
		damage: 9,
		fireRateBase: 33.3,
		fireRateRpm: 500,
		headshotMultiplier: 2.0,
		range: 56.2,
		stability: 72.2,
		agility: 54.8,
		stealth: 14,
		weight: 6.0
	},

	// Tier Progression (Durability, Upgrades, Repairs, Recycling)
	tiers: [
		{
			tierLevel: 1,
			romanNumeral: 'I',
			durabilityMax: 517,
			weaponSalePrice: 1750,
			componentSalePricePerSlot: 900,
			
			repairCost: [
				{ itemId: 'mechanical-components', quantity: 1 },
				{ itemId: 'rubber-parts', quantity: 2 }
			],
			repairDurabilityRestored: 50,
			
			recycleYield: [
				{ itemId: 'metal-parts', quantity: 8 }
			],
			salvageYield: [
				{ itemId: 'metal-parts', quantity: 4 }
			]
		},
		{
			tierLevel: 2,
			romanNumeral: 'II',
			durabilityMax: 574,
			weaponSalePrice: 3000,
			componentSalePricePerSlot: 1027,
			
			upgradeRequirements: [
				{ itemId: 'rattler-1', quantity: 1 },
				{ itemId: 'metal-parts', quantity: 10 },
				{ itemId: 'rubber-parts', quantity: 10 }
			],
			upgradeStation: { stationId: 'gunsmith', level: 1 },
			upgradePerks: [
				'+4 Magazine Size',
				'+10 Durability'
			],
			
			repairCost: [
				{ itemId: 'mechanical-components', quantity: 2 },
				{ itemId: 'rubber-parts', quantity: 1 }
			],
			repairDurabilityRestored: 55,
			
			recycleYield: [
				{ itemId: 'metal-parts', quantity: 12 }
			],
			salvageYield: [
				{ itemId: 'metal-parts', quantity: 8 }
			]
		},
		{
			tierLevel: 3,
			romanNumeral: 'III',
			durabilityMax: 646,
			weaponSalePrice: 5000,
			componentSalePricePerSlot: 1173,
			
			upgradeRequirements: [
				{ itemId: 'rattler-2', quantity: 1 },
				{ itemId: 'mechanical-components', quantity: 3 },
				{ itemId: 'simple-gun-parts', quantity: 1 }
			],
			upgradeStation: { stationId: 'gunsmith', level: 1 },
			upgradePerks: [
				'+8 Magazine Size',
				'+20 Durability'
			],
			
			repairCost: [
				{ itemId: 'mechanical-components', quantity: 2 },
				{ itemId: 'simple-gun-parts', quantity: 1 }
			],
			repairDurabilityRestored: 60,
			
			recycleYield: [
				{ itemId: 'mechanical-components', quantity: 3 },
				{ itemId: 'simple-gun-parts', quantity: 1 }
			],
			salvageYield: [
				{ itemId: 'metal-parts', quantity: 12 }
			]
		},
		{
			tierLevel: 4,
			romanNumeral: 'IV',
			durabilityMax: 738,
			weaponSalePrice: 7000,
			componentSalePricePerSlot: 1735,
			
			upgradeRequirements: [
				{ itemId: 'rattler-3', quantity: 1 },
				{ itemId: 'mechanical-components', quantity: 3 },
				{ itemId: 'simple-gun-parts', quantity: 1 }
			],
			upgradeStation: { stationId: 'gunsmith', level: 1 },
			upgradePerks: [
				'+12 Magazine Size',
				'+30 Durability'
			],
			
			repairCost: [
				{ itemId: 'mechanical-components', quantity: 3 },
				{ itemId: 'simple-gun-parts', quantity: 2 }
			],
			repairDurabilityRestored: 65,
			
			recycleYield: [
				{ itemId: 'mechanical-components', quantity: 4 },
				{ itemId: 'simple-gun-parts', quantity: 2 }
			],
			salvageYield: [
				{ itemId: 'metal-parts', quantity: 14 }
			]
		}
	],

	patchHistory: [
		{ version: '1.7.0', notes: 'Base Magazine Size: 10 -> 12' }
	],
	image: 'https://arcraiders.wiki/w/images/b/be/Rattler-Level1.png',
	icon: '🔫'
};