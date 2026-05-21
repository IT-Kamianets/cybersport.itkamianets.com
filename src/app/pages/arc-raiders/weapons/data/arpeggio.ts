import { Weapon } from '../weapons.data';

export const arpeggio: Weapon = {
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
};
