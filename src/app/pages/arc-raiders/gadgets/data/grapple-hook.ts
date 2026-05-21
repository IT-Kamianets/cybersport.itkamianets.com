import { Gadget } from '../gadgets.data';

export const grappleHook: Gadget = {
	id: 'grapple-hook',
	name: 'Grapple Hook',
	category: 'Mobility',
	activationType: 'Fire/Deploy',
	cooldown: '15 seconds',
	duration: 'Instant',
	description: 'A wrist-mounted grappling hook that fires a magnetic tether. Pulls the Raider rapidly toward the anchor point, allowing for incredible vertical mobility.',
	tacticalAdvice: [
		'Essential for reaching the rooftops in Calabash or climbing the central dam.',
		'Can be used mid-combat to quickly disengage and break line of sight.',
		'Cannot tether to organic surfaces or smooth glass.'
	],
	image: 'https://placehold.co/800x400/1a1a1a/00ffff?text=Grapple+Hook',
	icon: '🪝'
};
