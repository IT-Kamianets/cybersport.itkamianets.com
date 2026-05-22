import { Weapon } from '../weapons.data';

export const jupiter: Weapon = {
	id: 'jupiter',
	name: 'Jupiter',
	class: 'Sniper Rifle',
	rarity: 'Legendary',
	ammoType: 'Energy',
	magSize: 5,
	firingMode: 'Bolt-Action',
	overview: 'The Jupiter is a bolt-action Sniper Rifle that uses Energy Clips. It is the hardest-hitting per-shot weapon in ARC Raiders, capable of penetrating through ARC Armor. Note: It cannot be upgraded.',
	
	acquisition: {
		sources: [
			'Crafting (Requires Jupiter Blueprint found in Harvester)'
		]
	},

	// Base Crafting (Produces Jupiter I)
	craftingRequirements: [
		{ itemId: 'magnetic-accelerator', quantity: 3 },
		{ itemId: 'complex-gun-parts', quantity: 3 },
		{ itemId: 'queen-reactor', quantity: 1 }
	],
	craftingStation: { stationId: 'gunsmith', level: 3 },

	// Advanced Stats
	advancedStats: {
		arcArmorPenetration: 'Very Strong',
		damage: 60,
		fireRateBase: 7.67,
		fireRateRpm: 0,
		headshotMultiplier: 2.0,
		range: 71.7,
		stability: 73.5,
		agility: 39.2,
		stealth: 5,
		weight: 9.0
	},

	// Since it cannot be upgraded, we define it as a single tier
	tiers: [
		{
			tierLevel: 1,
			romanNumeral: 'I',
			durabilityMax: 222,
			weaponSalePrice: 27500,
			componentSalePricePerSlot: 0,
			
			repairCost: [
				{ itemId: 'magnetic-accelerator', quantity: 2 },
				{ itemId: 'complex-gun-parts', quantity: 1 }
			],
			repairDurabilityRestored: 50,
			
			recycleYield: [
				{ itemId: 'magnetic-accelerator', quantity: 2 },
				{ itemId: 'complex-gun-parts', quantity: 1 }
			],
			salvageYield: [
				{ itemId: 'advanced-mechanical-components', quantity: 3 }
			]
		}
	],

	patchHistory: [
		{ 
			version: '1.17.0', 
			notes: 'Improved ADS Magnification from ~1.9x to ~2.2x. Improved Equip Time from 1.2s to 1.05s. Improved Unequip Time from 0.9s to 0.75s.' 
		}
	],
	image: 'https://arcraiders.wiki/w/images/6/68/Jupiter.png',
	icon: '⚡'
};