import { WorkshopStation } from '../workshop.data';

export const scrappy: WorkshopStation = {
	id: 'scrappy',
	name: 'Scrappy',
	description: 'A rooster resident of the workshop. Scrappy periodically brings back dubiously-sourced materials (Metal Parts, Fabric, Plastic Parts, Chemicals, Rubber Parts, and Assorted Seeds) based on how long you survive in a raid.',
	icon: '🐓',
	tiers: [
		{
			level: 1,
			title: 'Fledgling',
			description: 'Max Yield (>15m Extracted): 6x per Resource, 5x Seeds.',
			upgradeCosts: []
		},
		{
			level: 2,
			title: 'Forager',
			description: 'Max Yield (>15m Extracted): 7x per Resource, 7x Seeds.',
			upgradeCosts: [
				{ itemId: 'dog-collar', quantity: 1 }
			]
		},
		{
			level: 3,
			title: 'Scavenger',
			description: 'Max Yield (>15m Extracted): 8x per Resource, 8x Seeds.',
			upgradeCosts: [
				{ itemId: 'lemon', quantity: 3 },
				{ itemId: 'apricot', quantity: 3 }
			]
		},
		{
			level: 4,
			title: 'Treasure Hunter',
			description: 'Max Yield (>15m Extracted): 8x per Resource, 11x Seeds.',
			upgradeCosts: [
				{ itemId: 'prickly-pear', quantity: 6 },
				{ itemId: 'olives', quantity: 6 },
				{ itemId: 'cat-bed', quantity: 1 }
			]
		},
		{
			level: 5,
			title: 'Master Hoarder',
			description: 'Max Yield (>15m Extracted): 8x per Resource, 13x Seeds.',
			upgradeCosts: [
				{ itemId: 'mushroom', quantity: 12 },
				{ itemId: 'apricot', quantity: 12 },
				{ itemId: 'very-comfortable-pillow', quantity: 3 }
			]
		}
	]
};