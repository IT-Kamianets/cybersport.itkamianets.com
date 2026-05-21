import { PlayerEquipment } from '../equipment.data';

export const lightScavengerShield: PlayerEquipment = {
	id: 'light-scavenger-shield',
	name: 'Light Scavenger Shield',
	type: 'Shield',
	rarity: 'Common',
	shieldHealth: 50,
	description: 'A basic rigged shield generator. Provides minimal protection against small arms fire and glancing blows from ARC machines.',
	image: 'https://placehold.co/800x400/1a1a1a/00ff00?text=Light+Scavenger+Shield',
	icon: '🛡️',
	craftingStation: { stationId: 'gear-bench', level: 1 },
	craftingRequirements: [
		{ itemId: 'scrap-metal', quantity: 10 }
	]
};
