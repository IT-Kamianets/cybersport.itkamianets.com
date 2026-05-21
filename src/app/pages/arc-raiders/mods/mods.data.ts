export interface ModStatModifier {
	stat: string;
	value: string;
	type: 'buff' | 'nerf';
}

export interface WeaponMod {
	id: string;
	name: string;
	slot: 'Optic' | 'Barrel' | 'Magazine' | 'Underbarrel' | 'Stock';
	statModifiers: ModStatModifier[];
	compatibleWeapons: string[];
	description: string;
	image: string;
	icon: string;
}

export const WEAPON_MODS: WeaponMod[] = [
	{
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
	},
	{
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
	},
	{
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
	}
];
