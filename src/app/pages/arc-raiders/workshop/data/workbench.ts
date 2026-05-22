import { WorkshopStation } from '../workshop.data';

export const workbench: WorkshopStation = {
	id: 'workbench',
	name: 'Workbench',
	description: 'A free basic bench which enables you to craft basic weapons and most types of ammo.',
	icon: '🛠️',
	image: 'https://arcraiders.wiki/w/images/0/0f/Workbench_1.png',
	tiers: [
		{
			level: 1,
			title: 'Basic Workbench',
			description: 'Unlocked automatically after your first played round.',
			image: 'https://arcraiders.wiki/w/images/0/0f/Workbench_1.png',
			upgradeCosts: [] // Free unlock (1 Round Played)
		}
	]
};