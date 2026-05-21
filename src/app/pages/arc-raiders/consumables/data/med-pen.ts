import { Consumable } from '../consumables.data';

export const medPen: Consumable = {
	id: 'med-pen',
	name: 'Med-Pen',
	craftingRequirements: [
		{ itemId: 'synthetic-polymer', quantity: 2 }
	],
	craftingStation: { stationId: 'medical-lab', level: 1 },
	category: 'Medical',
	stackSize: 3,
	useTime: 'Instant',
	effect: 'Restores 50 HP immediately',
	description: 'A quick-injection medical stim that stabilizes vitals and restores health on the go. Essential for surviving frantic firefights when there is no time to bandage up.',
	image: 'https://placehold.co/800x400/1a1a1a/00ff00?text=Med-Pen',
	icon: '💉'
};
