import { WorkshopStation } from '../workshop.data';

export const explosivesStation: WorkshopStation = {
	id: 'explosives-station',
	name: 'Explosives Station',
	description: 'A reinforced bench used for mixing volatile chemicals and crafting lethal ordnance.',
	icon: '💣',
	tiers: [
		{
			level: 1,
			title: 'Explosives Station Level 1',
			description: 'Crafting of basic impact and gas grenades.',
			upgradeCosts: [
				{ itemId: 'chemicals', quantity: 50 },
				{ itemId: 'arc-alloy', quantity: 6 }
			]
		},
		{
			level: 2,
			title: 'Explosives Station Level 2',
			description: 'Enables crafting of high-yield shrapnel and blaze grenades.',
			upgradeCosts: [
				{ itemId: 'synthesized-fuel', quantity: 3 },
				{ itemId: 'crude-explosives', quantity: 5 },
				{ itemId: 'pop-trigger', quantity: 5 }
			]
		},
		{
			level: 3,
			title: 'Explosives Station Level 3',
			description: 'Advanced demolition tools, mines, and Wolfpack systems.',
			upgradeCosts: [
				{ itemId: 'laboratory-reagents', quantity: 3 },
				{ itemId: 'explosive-compound', quantity: 5 },
				{ itemId: 'rocketeer-driver', quantity: 3 }
			]
		}
	]
};