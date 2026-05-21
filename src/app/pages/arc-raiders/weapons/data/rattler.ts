import { Weapon } from '../weapons.data';

export const rattler: Weapon = {
	id: 'rattler',
	name: 'Rattler',
	class: 'SMG',
	rarity: 'Standard',
	ammoType: 'Light Ammo',
	craftingRequirements: [
		{ itemId: 'synthetic-polymer', quantity: 3 }
	],
	craftingStation: { stationId: 'gunsmith', level: 1 },
	magSize: '30 (Base) / 45 (Extended)',
	baseDamage: 18,
	firingMode: 'Fully Automatic',
	headshotMultiplier: '1.5x',
	effectiveRange: 'Short',
	blueprintRequired: 'Yes (Level 2 Workbench)',
	overview: 'The Rattler is a high-fire-rate, close-quarters Submachine Gun favored by Raiders for urban scavenging. While it suffers from heavy damage drop-off at a distance, its hip-fire accuracy makes it devastating in the tight corridors of the Buried City map or when getting rushed by Leaper ARC machines.',
	acquisition: {
		looting: 'Can be found in standard Weapon Cases and high-tier military crates.',
		crafting: 'Can be crafted at Speranza using 1x Weapon Parts, 3x Scrap Metal, and 1x Synthetic Polymer.',
		trader: 'Occasionally sold by the Speranza Quartermaster for in-game currency.'
	},
	mods: [
		{ category: 'Optics', options: 'Red Dot Sight, Holographic Sight. (Cannot equip Sniper Scopes).' },
		{ category: 'Barrel', options: 'Suppressor (reduces sound, lowers range), Compensator (reduces vertical recoil).' },
		{ category: 'Magazine', options: 'Extended Light Mag, Quick-Draw Mag.' }
	],
	strategies: [
		'Pair the Rattler with the Photoelectric Cloak gadget. Use the invisibility to flank rival squads, getting close enough to negate the Rattler\'s poor range.',
		'Excellent for stripping the armor off basic ARC variants like Wasps and Ticks, but highly ineffective against Bastion armor.'
	],
	patchHistory: [
		{ version: 'Update 1.2', notes: 'Base damage increased from 16 to 18. Recoil pattern smoothed out.' },
		{ version: 'Launch (1.0)', notes: 'Weapon introduced.' }
	],
	image: 'https://placehold.co/800x400/1a1a1a/FFFF00?text=Rattler+SMG',
	icon: '🔫'
};
