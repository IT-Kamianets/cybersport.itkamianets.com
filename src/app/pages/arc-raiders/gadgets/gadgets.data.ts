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

export const GADGETS: Gadget[] = [
	{
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
	},
	{
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
	},
	{
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
	}
];
