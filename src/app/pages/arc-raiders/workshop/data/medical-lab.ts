import { WorkshopStation } from '../workshop.data';

export const medicalLab: WorkshopStation = {
	id: 'medical-lab',
	name: 'Medical Lab',
	description: 'A sterile environment equipped with synthesizers for producing advanced medical treatments and stims.',
	icon: '⚕️',
	image: 'https://arcraiders.wiki/w/images/f/fc/Medical_Lab_1.png',
	tiers: [
		{
			level: 1,
			title: 'Medical Lab Level 1',
			description: 'Allows production of basic bandages and adrenaline shots.',
			image: 'https://arcraiders.wiki/w/images/f/fc/Medical_Lab_1.png',
			upgradeCosts: [
				{ itemId: 'fabric', quantity: 50 },
				{ itemId: 'arc-alloy', quantity: 6 }
			]
		},
		{
			level: 2,
			title: 'Medical Lab Level 2',
			description: 'Enables synthesis of sterilized equipment and surge rechargers.',
			image: 'https://arcraiders.wiki/w/images/0/01/Medical_Lab_2.png',
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
			image: 'https://arcraiders.wiki/w/images/f/f7/Medical_Lab_3.png',
			upgradeCosts: [
				{ itemId: 'rusted-shut-medical-kit', quantity: 3 },
				{ itemId: 'antiseptic', quantity: 8 },
				{ itemId: 'surveyor-vault', quantity: 5 }
			]
		}
	]
};