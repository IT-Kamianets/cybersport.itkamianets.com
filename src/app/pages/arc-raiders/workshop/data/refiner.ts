import { WorkshopStation } from '../workshop.data';

export const refiner: WorkshopStation = {
	id: 'refiner',
	name: 'Refiner',
	description: 'An industrial machine used to process raw junk into usable crafting components.',
	icon: '🏭',
	image: 'https://arcraiders.wiki/w/images/f/f6/Refiner_1.png',
	tiers: [
		{
			level: 1,
			title: 'Refiner Level 1',
			description: 'Processes basic materials into components like Durable Cloth and Mechanical Components.',
			image: 'https://arcraiders.wiki/w/images/f/f6/Refiner_1.png',
			upgradeCosts: [
				{ itemId: 'metal-parts', quantity: 60 },
				{ itemId: 'arc-powercell', quantity: 5 }
			]
		},
		{
			level: 2,
			title: 'Refiner Level 2',
			description: 'Advanced processing for ARC Circuitry and Explosive Compounds.',
			image: 'https://arcraiders.wiki/w/images/5/51/Refiner_2.png',
			upgradeCosts: [
				{ itemId: 'toaster', quantity: 3 },
				{ itemId: 'arc-motion-core', quantity: 5 },
				{ itemId: 'fireball-burner', quantity: 8 }
			]
		},
		{
			level: 3,
			title: 'Refiner Level 3',
			description: 'Master tier refining, capable of creating Magnetic Accelerators and Complex Gun Parts.',
			image: 'https://arcraiders.wiki/w/images/a/a5/Refiner_3.png',
			upgradeCosts: [
				{ itemId: 'motor', quantity: 3 },
				{ itemId: 'arc-circuitry', quantity: 10 },
				{ itemId: 'bombardier-cell', quantity: 6 }
			]
		}
	]
};