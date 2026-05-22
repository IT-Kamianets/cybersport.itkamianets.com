import { GameMap } from '../maps.data';

export const theBlueGate: GameMap = {
	id: 'the-blue-gate',
	name: 'The Blue Gate',
	environment: 'Mountainous Valley',
	size: 'Large',
	maxSquads: 6,
	overview: 'The Blue Gate is a spacious map inside a large, mountainous valley. It features abandoned towns, fruiting orchids, and an underground complex full of deadly ARC machines. This map is unlocked after completing 18 rounds.',
	thumbnail: 'https://arcraiders.wiki/w/images/4/4f/Blue_Gate.png',
	mapImage: 'https://arcraiders.wiki/w/images/thumb/4/4c/Blue_Gate_Map.jpg/1920px-Blue_Gate_Map.jpg.webp',
	
	conditions: [
		'Normal condition',
		'Lush Blooms',
		'Uncovered Caches',
		'Harvester',
		'Husk Graveyard',
		'Matriarch',
		'Electromagnetic Storm',
		'Night Raid',
		'Cold Snap',
		'Locked Gate',
		'Hurricane',
		'Close Scrutiny (ARC OPERATION)'
	],
	
	puzzles: [],
	resourceLocks: [],
	
	extractions: [
		{
			title: 'Underground Complex Extractions',
			description: 'This map features a massive underground complex requiring careful navigation to reach extraction points.'
		}
	],
	
	lore: 'Once a steadfast symbol of defiant connection, the Blue Gate now serves as a daunting entryway into the perilous mountain ranges. The surrounding valley bears scars both new and old.\n\nThe Tubes network has only recently been expanded to reach the gates, requiring the construction of all-new Raider structures to facilitate Raider presence.',
	
	patchHistory: [
		{ version: 'Release', notes: 'Added to the game.' }
	]
};