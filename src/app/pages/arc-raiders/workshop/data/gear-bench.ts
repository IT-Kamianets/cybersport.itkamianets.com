import { WorkshopStation } from '../workshop.data';

export const gearBench: WorkshopStation = {
	id: 'gear-bench',
	name: 'Gear Bench',
	description: 'A station dedicated to crafting mobility rigs, stealth emitters, and defensive tactical gear.',
	icon: '🎒',
	tiers: [
		{
			level: 1,
			title: 'Standard Gear Bench',
			description: 'Basic assembly of tactical backpacks and low-level stealth gear.',
			upgradeCosts: []
		}
	]
};
