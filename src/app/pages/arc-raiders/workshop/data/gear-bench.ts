import { WorkshopStation } from '../workshop.data';

export const gearBench: WorkshopStation = {
	id: 'gear-bench',
	name: 'Gear Bench',
	description: 'A station dedicated to crafting mobility rigs, shields, and tactical backpacks.',
	icon: '🎒',
	image: 'https://arcraiders.wiki/w/images/a/a9/Gear_Bench_1.png',
	tiers: [
		{
			level: 1,
			title: 'Gear Bench Level 1',
			description: 'Basic assembly of Light/Medium Shields and Mk. 1 Loadouts.',
			image: 'https://arcraiders.wiki/w/images/a/a9/Gear_Bench_1.png',
			upgradeCosts: [
				{ itemId: 'plastic-parts', quantity: 25 },
				{ itemId: 'fabric', quantity: 30 }
			]
		},
		{
			level: 2,
			title: 'Gear Bench Level 2',
			description: 'Advanced assembly including Heavy Shields and Mk. 2 Loadouts.',
			image: 'https://arcraiders.wiki/w/images/c/ce/Gear_Bench_2.png',
			upgradeCosts: [
				{ itemId: 'power-cable', quantity: 3 },
				{ itemId: 'electrical-components', quantity: 5 },
				{ itemId: 'hornet-driver', quantity: 5 }
			]
		},
		{
			level: 3,
			title: 'Gear Bench Level 3',
			description: 'Top-tier tactical gear and specialized Mk. 3 class loadouts.',
			image: 'https://arcraiders.wiki/w/images/e/eb/Gear_Bench_3.png',
			upgradeCosts: [
				{ itemId: 'industrial-battery', quantity: 3 },
				{ itemId: 'advanced-electrical-components', quantity: 5 },
				{ itemId: 'bastion-cell', quantity: 6 }
			]
		}
	]
};