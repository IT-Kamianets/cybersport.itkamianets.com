import { WeaponMod } from '../mods.data';

export const extendedLightMag: WeaponMod = {
	id: 'extended-light-mag',
	name: 'Extended Light Mag',
	slot: 'Magazine',
	statModifiers: [
		{ stat: 'Magazine Size', value: '+15 Rounds', type: 'buff' },
		{ stat: 'Reload Speed', value: '-5%', type: 'nerf' }
	],
	compatibleWeapons: ['rattler'],
	description: 'An extended magazine tailored for light ammunition weapons. Increases sustained fire capacity but the added weight slightly hinders reload speed.',
	image: 'https://placehold.co/800x400/1a1a1a/ff00ff?text=Extended+Mag',
	icon: '🔋'
};
