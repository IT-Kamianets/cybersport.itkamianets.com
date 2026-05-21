import { Gadget } from '../gadgets.data';

export const photoelectricCloak: Gadget = {
	id: 'photoelectric-cloak',
	name: 'Photoelectric Cloak',
	craftingRequirements: [
		{ itemId: 'synthetic-polymer', quantity: 1 }
	],
	craftingStation: { stationId: 'gear-bench', level: 1 },
	category: 'Stealth',
	activationType: 'Toggle',
	cooldown: '45 seconds',
	duration: '12 seconds',
	description: 'Bends light around the user, rendering them nearly invisible to the naked eye and untargetable by standard ARC machine optics. Firing a weapon instantly breaks the cloak.',
	tacticalAdvice: [
		'Use this to cross open spaces like the dried riverbed in Dam Battlegrounds without attracting sniper fire.',
		'Highly effective for flanking enemy squads or sneaking past a Bastion tank.',
		'Beware: the cloak emits a faint hum. Experienced Raiders can still hear you approaching.'
	],
	image: 'https://placehold.co/800x400/1a1a1a/00ffff?text=Photoelectric+Cloak',
	icon: '👻'
};
