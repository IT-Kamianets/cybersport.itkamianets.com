import { WorkshopStation } from '../workshop.data';

export const workbench: WorkshopStation = {
	id: 'workbench',
	name: 'Workbench',
	description: 'A free basic bench which enables you to craft basic weapons and most types of ammo.',
	icon: '🛠️',
	tiers: [
		{
			level: 1,
			title: 'Basic Workbench',
			description: 'Unlocked automatically after your first played round.',
			upgradeCosts: [] // Free unlock (1 Round Played)
		}
	]
};