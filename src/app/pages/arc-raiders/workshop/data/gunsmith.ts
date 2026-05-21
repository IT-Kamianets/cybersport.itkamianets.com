import { WorkshopStation } from '../workshop.data';

export const gunsmith: WorkshopStation = {
	id: 'gunsmith',
	name: 'Gunsmith',
	description: 'A specialized workstation dedicated to firearms assembly, maintenance, and complex weapon modifications.',
	icon: '🔫',
	tiers: [
		{
			level: 1,
			title: 'Basic Gunsmith',
			description: 'Allows assembly of standard ballistic weapons and basic modifications.',
			upgradeCosts: []
		},
		{
			level: 2,
			title: 'Advanced Gunsmith',
			description: 'Enables crafting of high-tier ballistic weaponry and precision attachments.',
			upgradeCosts: [
				{ itemId: 'scrap-metal', quantity: 20 },
				{ itemId: 'synthetic-polymer', quantity: 5 }
			]
		}
	]
};
