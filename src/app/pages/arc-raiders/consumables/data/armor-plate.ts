import { Consumable } from '../consumables.data';

export const armorPlate: Consumable = {
	id: 'armor-plate',
	name: 'Armor Plate',
	category: 'Utility',
	stackSize: 5,
	useTime: '3.0 seconds',
	effect: 'Restores 1 armor segment',
	description: 'A scavenged piece of ballistic plating that can be inserted into the Raider\'s vest. Requires a few seconds to securely strap in.',
	image: 'https://placehold.co/800x400/1a1a1a/00ff00?text=Armor+Plate',
	icon: '🛡️'
};
