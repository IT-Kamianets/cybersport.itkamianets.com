import { Consumable } from '../consumables.data';

export const empGrenade: Consumable = {
	id: 'emp-grenade',
	name: 'EMP Grenade',
	category: 'Tactical',
	stackSize: 2,
	useTime: '1.5s fuse',
	effect: 'Disables all ARC machines within a 15m radius for 8 seconds',
	description: 'An improvised explosive that releases a high-voltage electromagnetic pulse. Extremely effective against swarms of Ticks or for temporarily shutting down a Snitch drone.',
	image: 'https://placehold.co/800x400/1a1a1a/00ff00?text=EMP+Grenade',
	icon: '⚡'
};
