import { WorkshopStation } from '../workshop.data';

export const medicalLab: WorkshopStation = {
	id: 'medical-lab',
	name: 'Medical Lab',
	description: 'A sterile environment equipped with synthesizers for producing advanced medical treatments and stims.',
	icon: '⚕️',
	tiers: [
		{
			level: 1,
			title: 'Medical Lab Level 1',
			description: 'Allows production of basic bandages and adrenaline shots.',
			upgradeCosts: [
				{ itemId: 'fabric', quantity: 50 },
				{ itemId: 'arc-alloy', quantity: 6 }
			]
		},
		{
			level: 2,
			title: 'Medical Lab Level 2',
			description: 'Enables synthesis of sterilized equipment and surge rechargers.',
			upgradeCosts: [
				{ itemId: 'cracked-bioscanner', quantity: 2 },
				{ itemId: 'durable-cloth', quantity: 5 },
				{ itemId: 'tick-pod', quantity: 8 }
			]
		},
		{
			level: 3,
			title: 'Medical Lab Level 3',
			description: 'Cutting-edge Vita-tech healing items.',
			upgradeCosts: [
				{ itemId: 'rusted-shut-medical-kit', quantity: 3 },
				{ itemId: 'antiseptic', quantity: 8 },
				{ itemId: 'surveyor-vault', quantity: 5 }
			]
		}
	]
};