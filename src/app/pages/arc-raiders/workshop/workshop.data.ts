export interface StationTier {
	level: number;
	title: string;
	description: string;
	upgradeCosts: { itemId: string; quantity: number }[];
}

export interface WorkshopStation {
	id: string;
	name: string;
	description: string;
	icon: string;
	tiers: StationTier[];
}

export const WORKSHOP_STATIONS: WorkshopStation[] = [
	{
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
	},
	{
		id: 'medical-lab',
		name: 'Medical Lab',
		description: 'A sterile environment equipped with synthesizers for producing advanced medical treatments and stims.',
		icon: '⚕️',
		tiers: [
			{
				level: 1,
				title: 'Field Medic Station',
				description: 'Allows production of basic med-pens and bandages.',
				upgradeCosts: []
			},
			{
				level: 2,
				title: 'Advanced Medical Lab',
				description: 'Enables synthesis of combat stims and high-grade restorative treatments.',
				upgradeCosts: [
					{ itemId: 'synthetic-polymer', quantity: 10 }
				]
			}
		]
	},
	{
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
	}
];
