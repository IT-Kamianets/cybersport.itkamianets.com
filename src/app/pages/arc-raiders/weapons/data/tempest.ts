import { Weapon } from '../weapons.data';

export const tempest: Weapon = {
	id: 'tempest',
	name: 'Tempest',
	class: 'Sniper Rifle',
	rarity: 'Legendary',
	ammoType: 'Heavy Ammo',
	craftingStation: { stationId: 'gunsmith', level: 2 },
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
};
