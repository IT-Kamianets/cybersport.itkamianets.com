import { WorkshopStation } from '../workshop.data';

export const utilityStation: WorkshopStation = {
	id: 'utility-station',
	name: 'Utility Station',
	description: 'Creates tactical tools, vision equipment, and traversal gadgets.',
	icon: '🔧',
	tiers: [
		{
			level: 1,
			title: 'Utility Station Level 1',
			description: 'Basic tactical tools like Smoke Grenades and Barricades.',
			upgradeCosts: [
				{ itemId: 'plastic-parts', quantity: 50 },
				{ itemId: 'arc-alloy', quantity: 6 }
			]
		},
		{
			level: 2,
			title: 'Utility Station Level 2',
			description: 'Traversal gear including Ziplines and Raider Hatch Keys.',
			upgradeCosts: [
				{ itemId: 'damaged-heat-sink', quantity: 2 },
				{ itemId: 'electrical-components', quantity: 5 },
				{ itemId: 'snitch-scanner', quantity: 6 }
			]
		},
		{
			level: 3,
			title: 'Utility Station Level 3',
			description: 'High-tech gadgets like the Photoelectric Cloak and Snap Hook.',
			upgradeCosts: [
				{ itemId: 'fried-motherboard', quantity: 3 },
				{ itemId: 'advanced-electrical-components', quantity: 5 },
				{ itemId: 'leaper-pulse-unit', quantity: 4 }
			]
		}
	]
};