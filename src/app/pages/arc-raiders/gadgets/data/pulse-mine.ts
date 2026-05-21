import { Gadget } from '../gadgets.data';

export const pulseMine: Gadget = {
	id: 'pulse-mine',
	name: 'Pulse Mine',
	category: 'Defensive',
	activationType: 'Fire/Deploy',
	cooldown: '30 seconds',
	duration: 'Until triggered or destroyed',
	description: 'A deployable proximity mine that releases a concentrated EMP blast when triggered. Staggers large ARC machines and instantly destroys swarmers like Ticks.',
	tacticalAdvice: [
		'Place these around blind corners in the Buried City to cover your rear while looting.',
		'Throwing a pulse mine directly at a Bastion will stagger it long enough for you to close the distance.'
	],
	image: 'https://placehold.co/800x400/1a1a1a/00ffff?text=Pulse+Mine',
	icon: '💥'
};
