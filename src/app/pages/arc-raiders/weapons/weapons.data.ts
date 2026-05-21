export interface WeaponPatch {
	version: string;
	notes: string;
}

export interface Weapon {
	id: string;
	name: string;
	craftingRequirements?: { itemId: string; quantity: number }[];
	class: 'SMG' | 'Assault Rifle' | 'Sniper Rifle' | 'Shotgun' | 'Heavy' | 'Pistol' | 'Melee';
	rarity: 'Standard' | 'Legendary' | 'Melee';
	ammoType: 'Light Ammo' | 'Medium Ammo' | 'Heavy Ammo' | 'Energy' | 'Special';
	magSize: string;
	baseDamage: number;
	firingMode: string;
	headshotMultiplier: string;
	effectiveRange: string;
	blueprintRequired: string;
	overview: string;
	acquisition: {
		looting: string;
		crafting: string;
		trader: string;
	};
	mods: {
		category: string;
		options: string;
	}[];
	strategies: string[];
	patchHistory: WeaponPatch[];
	image: string;
	icon: string;
}

export const WEAPONS: Weapon[] = [
	{
		id: 'rattler',
		name: 'Rattler',
		class: 'SMG',
		rarity: 'Standard',
		ammoType: 'Light Ammo',
		craftingRequirements: [
			{ itemId: 'synthetic-polymer', quantity: 3 }
		],
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
		icon: '🔫' // Placeholder icon
	},
	{
		id: 'arpeggio',
		name: 'ARPEGGIO',
		class: 'Assault Rifle',
		rarity: 'Standard',
		ammoType: 'Medium Ammo',
		magSize: '25 (Base) / 40 (Extended)',
		baseDamage: 24,
		firingMode: 'Fully Automatic',
		headshotMultiplier: '1.75x',
		effectiveRange: 'Medium',
		blueprintRequired: 'No',
		overview: 'The ARPEGGIO is the bread-and-butter assault rifle of the Resistance. Reliable, easy to control, and effective at most combat ranges. It lacks the sheer burst damage of SMGs but makes up for it in consistency.',
		acquisition: {
			looting: 'Common drop in all zones. Often found on fallen Raiders.',
			crafting: 'Craftable with 2x Weapon Parts, 2x Scrap Metal.',
			trader: 'Always available at the Quartermaster.'
		},
		mods: [
			{ category: 'Optics', options: 'Red Dot Sight, 2x Scope, 4x Scope.' },
			{ category: 'Barrel', options: 'Compensator, Flash Hider.' },
			{ category: 'Underbarrel', options: 'Vertical Grip, Angled Grip.' }
		],
		strategies: [
			'A solid all-rounder. Use it when you are exploring unfamiliar territory.',
			'Equip a 4x scope to challenge Snipers, but be wary of the recoil.'
		],
		patchHistory: [
			{ version: 'Launch (1.0)', notes: 'Weapon introduced.' }
		],
		image: 'https://placehold.co/800x400/1a1a1a/FFFF00?text=ARPEGGIO+Assault+Rifle',
		icon: '⚔️'
	},
	{
		id: 'tempest',
		name: 'Tempest',
		class: 'Sniper Rifle',
		rarity: 'Legendary',
		ammoType: 'Heavy Ammo',
		magSize: '5',
		baseDamage: 95,
		firingMode: 'Bolt-Action',
		headshotMultiplier: '2.5x',
		effectiveRange: 'Long',
		blueprintRequired: 'Yes (Level 4 Workbench)',
		overview: 'A massive anti-materiel sniper rifle. The Tempest can rip through ARC armor plates and one-shot most enemy Raiders with a well-placed headshot. Its main drawbacks are incredibly slow handling and expensive ammo.',
		acquisition: {
			looting: 'Found only in Locked Vaults and high-threat ARC Drops.',
			crafting: 'Craftable with 5x Weapon Parts, 2x Advanced Processor, 1x ARC Core.',
			trader: 'Not sold.'
		},
		mods: [
			{ category: 'Optics', options: '6x Scope, 8x Thermal Scope.' },
			{ category: 'Barrel', options: 'Heavy Barrel (increases damage, reduces handling).' }
		],
		strategies: [
			'Find a high vantage point like the silos in Calabash.',
			'Coordinate with your squad: use the Tempest to initiate fights by downing a key target.'
		],
		patchHistory: [
			{ version: 'Update 1.4', notes: 'ADS speed slightly reduced.' },
			{ version: 'Update 1.1', notes: 'Added thermal scope compatibility.' },
			{ version: 'Launch (1.0)', notes: 'Weapon introduced.' }
		],
		image: 'https://placehold.co/800x400/1a1a1a/FFFF00?text=Tempest+Sniper',
		icon: '🎯'
	}
];
