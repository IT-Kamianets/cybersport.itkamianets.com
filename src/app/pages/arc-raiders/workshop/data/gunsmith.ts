import { WorkshopStation } from '../workshop.data';

export const gunsmith: WorkshopStation = {
	id: 'gunsmith',
	name: 'Gunsmith',
	description: 'A specialized workstation dedicated to firearms assembly, maintenance, and complex weapon modifications.',
	icon: '🔫',
	tiers: [
		{
			level: 1,
			title: 'Gunsmith Level 1',
			description: 'Allows assembly of standard ballistic weapons and basic modifications.',
			upgradeCosts: [
				{ itemId: 'metal-parts', quantity: 20 },
				{ itemId: 'rubber-parts', quantity: 30 }
			]
		},
		{
			level: 2,
			title: 'Gunsmith Level 2',
			description: 'Enables crafting of high-tier ballistic weaponry.',
			upgradeCosts: [
				{ itemId: 'rusted-tools', quantity: 3 },
				{ itemId: 'mechanical-components', quantity: 5 },
				{ itemId: 'wasp-driver', quantity: 8 }
			]
		},
		{
			level: 3,
			title: 'Gunsmith Level 3',
			description: 'Master-level weapon crafting. Capable of assembling Epic-tier armaments.',
			upgradeCosts: [
				{ itemId: 'rusted-gear', quantity: 3 },
				{ itemId: 'advanced-mechanical-components', quantity: 5 },
				{ itemId: 'sentinel-firing-core', quantity: 4 }
			]
		}
	]
};