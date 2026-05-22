import { GameMap } from '../maps.data';

export const spaceport: GameMap = {
	id: 'spaceport',
	name: 'Spaceport',
	environment: 'Derelict Facility',
	size: 'Large', 
	maxSquads: 6, 
	overview: 'Spaceport is a spacious map featuring a facility that once raised the Exodus shuttles to be with the stars. Nowadays, it is a derelict trove of old, pre-Collapse technology tightly guarded by ARC. This map is unlocked after completing 12 rounds.',
	thumbnail: 'https://arcraiders.wiki/w/images/a/aa/Spaceport.png',
	mapImage: 'https://arcraiders.wiki/w/images/thumb/1/18/Acerra_Spaceport_Map.jpg/1920px-Acerra_Spaceport_Map.jpg.webp',
	
	conditions: [
		'Normal condition', 
		'Lush Blooms', 
		'Uncovered Caches', 
		'Prospecting Probes', 
		'Harvester', 
		'Husk Graveyard', 
		'Launch Tower Loot',
		'Matriarch', 
		'Electromagnetic Storm', 
		'Night Raid', 
		'Cold Snap', 
		'Hidden Bunker',
		'Hurricane', 
		'Close Scrutiny (ARC OPERATION)'
	],
	
	// Specific puzzles or resource locks are not detailed in this specific PDF, 
	// but the arrays can remain empty or omitted based on your schema setup.
	puzzles: [],
	resourceLocks: [],
	
	extractions: [
		{
			title: 'Cargo Elevator',
			description: 'Standard heavy-duty elevator extraction leading down into the underground network. (Derived from map legend)'
		},
		{
			title: 'Raider Hatch',
			description: 'Secure, rapid extraction point. Requires an access keycard. (Derived from map legend)'
		}
	],
	
	lore: 'Acerra Spaceport is a majestic testament to humanity\'s past ambitions. This is where the Exodus shuttles, vessels of hope and desperation, once roared into the heavens, leaving a beleaguered Earth behind.',
	
	patchHistory: [
		{ version: 'Release', notes: 'Added to the game.' }
	]
};