import { Weapon } from '../weapons.data';

export const aphelion: Weapon = {
	id: 'aphelion',
	name: 'Aphelion',
	class: 'Battle Rifle',
	rarity: 'Legendary',
	ammoType: 'Energy',
	magSize: 10,
	firingMode: '2-Round Burst',
	overview: 'The Aphelion is a two-round-burst Battle Rifle that uses Energy Clips to fire energy-based projectiles. Fires high velocity energy rounds. Note: It cannot be upgraded.',
	
	acquisition: {
		sources: [
			'Crafting (Requires Aphelion Blueprint found in Stella Montis)',
			'Quest reward (Furtive Meetings)'
		]
	},

	// Base Crafting (Produces Aphelion I)
	craftingRequirements: [
		{ itemId: 'magnetic-accelerator', quantity: 3 },
		{ itemId: 'complex-gun-parts', quantity: 3 },
		{ itemId: 'matriarch-reactor', quantity: 1 }
	],
	craftingStation: { stationId: 'gunsmith', level: 3 },

	// Advanced Stats
	advancedStats: {
		arcArmorPenetration: 'Strong',
		damage: 25,
		fireRateBase: 9,
		fireRateRpm: 0,
		headshotMultiplier: 2.0,
		range: 76,
		stability: 88,
		agility: 39,
		stealth: 16,
		weight: 10.0
	},

	// Since it cannot be upgraded, we define it as a single tier
	tiers: [
		{
			tierLevel: 1,
			romanNumeral: 'I',
			durabilityMax: 1130,
			weaponSalePrice: 27500,
			componentSalePricePerSlot: 11833,
			
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
				{ itemId: 'magnetic-accelerator', quantity: 1 }
			]
		}
	],

	patchHistory: [
		{ 
			version: '1.17.0', 
			notes: 'Reduced Base Reload Time from 4.5s to 3.5s. Reduced Time Between Shots from 0.9s to 0.7s. Reduced Vertical Recoil by 50%. Improved ADS Settle Speed by 35%.' 
		},
		{ 
			version: '1.7.0', 
			notes: 'Moved the Aphelion blueprint drop from the Matriarch to Stella Montis.' 
		},
		{ 
			version: '1.2.0', 
			notes: 'Added to the game.' 
		}
	],
	image: 'https://placehold.co/800x400/1a1a1a/FFFF00?text=Aphelion+Battle+Rifle',
	icon: '⚡'
};