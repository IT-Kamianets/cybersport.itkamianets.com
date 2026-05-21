export interface Gadget {
	id: string;
	name: string;
	craftingRequirements?: { itemId: string; quantity: number }[];
	craftingStation?: { stationId: string; level: number };
	category: 'Mobility' | 'Stealth' | 'Defensive' | 'Recon';
	activationType: 'Toggle' | 'Fire/Deploy' | 'Passive';
	cooldown: string;
	duration: string;
	description: string;
	tacticalAdvice: string[];
	image: string;
	icon: string;
}

import { photoelectricCloak } from './data/photoelectric-cloak';
import { pulseMine } from './data/pulse-mine';
import { grappleHook } from './data/grapple-hook';

export const GADGETS: Gadget[] = [
	photoelectricCloak,
	pulseMine,
	grappleHook
];
