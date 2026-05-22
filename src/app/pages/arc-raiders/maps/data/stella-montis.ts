import { GameMap } from '../maps.data';

export const stellaMontis: GameMap = {
	id: 'stella-montis',
	name: 'Stella Montis',
	environment: 'Mountain Research Facility',
	size: 'Medium',
	maxSquads: 6,
	overview: 'A secluded research facility amidst snow-draped peaks, Stella Montis is said to have been the last bulwark of humanity\'s preservation. Located north of the Rust Belt, it features a cold and pristine environment characterized by remnants of humanity\'s lost ambitions. It is unlocked after 24 rounds played.',
	thumbnail: 'https://arcraiders.wiki/w/images/9/93/Stella_Montis.png',
	mapImage: 'https://arcraiders.wiki/w/images/thumb/4/4c/Stella_Montis_Upper_Level_Map.jpg/1920px-Stella_Montis_Upper_Level_Map.jpg.webp',
	
	conditions: [
		'Normal condition',
		'Night Raid'
	],
	
	puzzles: [],
	resourceLocks: [],
	
	extractions: [
		{
			title: 'Multi-Level Complex',
			description: 'This facility is built deep into the mountain, requiring players to navigate distinct upper and lower levels to reach extraction zones.'
		}
	],
	
	lore: 'Carved deep into the mountainside, Stella Montis looms silently over the valley below. Its vast scale hints at some grand intent, but the last occupants seemingly sealed it away from the world, leaving what lies within largely unknown.',
	
	patchHistory: [
		{ version: '1.4.0', notes: 'Added Night Raid.' },
		{ version: '1.2.0', notes: 'Added to the game.' }
	]
};