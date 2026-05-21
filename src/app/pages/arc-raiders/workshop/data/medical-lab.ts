import { WorkshopStation } from '../workshop.data';

export const medicalLab: WorkshopStation = {
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
};
