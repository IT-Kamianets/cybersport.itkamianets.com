import { GameMap } from '../maps.data';

export const buriedCity: GameMap = {
	id: 'buried-city',
	name: 'Buried City',
	environment: 'Desert / Urban',
	size: 'Medium', // Estimated based on typical extraction map scale
	maxSquads: 6,
	overview: 'Buried City is the second playable map. It features the sand-choked remains of a desert city, where crowded villas offer Raiders a sprawl of sun-bleached rooftops perfect for seamless traversal. The combination of tight corridors and overlooking heights ensures that danger lurks around every corner. This map is unlocked after completing 6 rounds.',
	thumbnail: 'https://arcraiders.wiki/w/images/8/80/Buried_City.png',
	mapImage: 'https://arcraiders.wiki/w/images/thumb/5/5c/Buried_City_Map.jpg/1920px-Buried_City_Map.jpg.webp',
	
	conditions: [
		'Normal condition',
		'Lush Blooms',
		'Bird City',
		'Uncovered Caches',
		'Prospecting Probes',
		'Husk Graveyard',
		'Night Raid',
		'Cold Snap',
		'Hurricane',
		'Close Scrutiny (ARC OPERATION)'
	],
	
	puzzles: [],
	resourceLocks: [],
	
	extractions: [
		{
			title: 'Standard Extractions',
			description: 'Typical extraction points including Cargo Elevators and Raider Hatches scattered throughout the ruins. (Specifics not detailed in current intel)'
		}
	],
	
	lore: 'Long covered in sand dunes, Buried City offers rare insights in life before the Collapse. Strong winds have now uncovered part of its remains, though the ever-shifting dunes can be treacherous and unstable.\n\nSigns around the city reveal that it was originally called Marano by its inhabitants, though that name has long since faded into obscurity.\n\nAmidst the sand dunes in this arid wasteland you will find a remnant of the old world quite unlike the cold steel spires of the Exodus age. Walk these narrow streets and empty plazas, and know that people once lived here.',
	
	patchHistory: [
		{ version: 'Release', notes: 'Added to the game.' }
	]
};