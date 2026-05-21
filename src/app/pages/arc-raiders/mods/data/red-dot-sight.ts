import { WeaponMod } from '../mods.data';

export const redDotSight: WeaponMod = {
	id: 'red-dot-sight',
	name: 'Red Dot Sight',
	slot: 'Optic',
	statModifiers: [
		{ stat: 'ADS Speed', value: '+10%', type: 'buff' },
		{ stat: 'Visual Clutter', value: '-15%', type: 'buff' }
	],
	compatibleWeapons: ['rattler', 'arpeggio'],
	description: 'A standard non-magnified reflex sight. Provides a clear picture of the target, making it perfect for close-to-medium range engagements.',
	image: 'https://placehold.co/800x400/1a1a1a/ff00ff?text=Red+Dot+Sight',
	icon: '🎯'
};
