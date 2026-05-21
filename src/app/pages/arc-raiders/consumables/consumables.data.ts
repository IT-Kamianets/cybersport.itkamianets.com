export interface Consumable {
	id: string;
	name: string;
	craftingRequirements?: { itemId: string; quantity: number }[];
	craftingStation?: { stationId: string; level: number };
	category: 'Medical' | 'Lethal' | 'Tactical' | 'Utility';
	stackSize: number;
	useTime: string;
	effect: string;
	description: string;
	image: string;
	icon: string;
}

export const CONSUMABLES: Consumable[] = [
	{
		id: 'med-pen',
		name: 'Med-Pen',
		craftingRequirements: [
			{ itemId: 'synthetic-polymer', quantity: 2 }
		],
		craftingStation: { stationId: 'medical-lab', level: 1 },
		category: 'Medical',
		stackSize: 3,
		useTime: 'Instant',
		effect: 'Restores 50 HP immediately',
		description: 'A quick-injection medical stim that stabilizes vitals and restores health on the go. Essential for surviving frantic firefights when there is no time to bandage up.',
		image: 'https://placehold.co/800x400/1a1a1a/00ff00?text=Med-Pen',
		icon: '💉'
	},
	{
		id: 'emp-grenade',
		name: 'EMP Grenade',
		category: 'Tactical',
		stackSize: 2,
		useTime: '1.5s fuse',
		effect: 'Disables all ARC machines within a 15m radius for 8 seconds',
		description: 'An improvised explosive that releases a high-voltage electromagnetic pulse. Extremely effective against swarms of Ticks or for temporarily shutting down a Snitch drone.',
		image: 'https://placehold.co/800x400/1a1a1a/00ff00?text=EMP+Grenade',
		icon: '⚡'
	},
	{
		id: 'armor-plate',
		name: 'Armor Plate',
		category: 'Utility',
		stackSize: 5,
		useTime: '3.0 seconds',
		effect: 'Restores 1 armor segment',
		description: 'A scavenged piece of ballistic plating that can be inserted into the Raider\'s vest. Requires a few seconds to securely strap in.',
		image: 'https://placehold.co/800x400/1a1a1a/00ff00?text=Armor+Plate',
		icon: '🛡️'
	}
];
