import { WeaponMod } from '../mods.data';

export const suppressor: WeaponMod = {
	id: 'suppressor',
	name: 'Suppressor',
	slot: 'Barrel',
	statModifiers: [
		{ stat: 'Firing Noise', value: '-80%', type: 'buff' },
		{ stat: 'Muzzle Flash', value: '-100%', type: 'buff' },
		{ stat: 'Effective Range', value: '-20%', type: 'nerf' }
	],
	compatibleWeapons: ['rattler', 'arpeggio', 'tempest'],
	description: 'Baffles the escaping gasses from firing, drastically reducing noise and eliminating muzzle flash. Essential for stealth Raiders, though the lower bullet velocity reduces damage at long ranges.',
	image: 'https://placehold.co/800x400/1a1a1a/ff00ff?text=Suppressor',
	icon: '🤫'
};
