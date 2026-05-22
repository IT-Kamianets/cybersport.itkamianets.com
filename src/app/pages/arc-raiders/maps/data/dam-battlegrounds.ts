import { GameMap } from '../maps.data';

export const damBattlegrounds: GameMap = {
	id: 'dam-battlegrounds',
	name: 'Dam Battlegrounds',
	environment: 'Industrial / Forest',
	size: 'Large',
	maxSquads: 6,
	overview: 'Alcantara Power Plant, or "The Dam", stands as a silent sentinel amidst a toxic, waterlogged land, nourishing a riot of resilient vegetation and fauna. A monument echoing with the memories of a power once generated.',
	thumbnail: 'https://arcraiders.wiki/w/images/a/a6/Dam_Battlegrounds.png',
	mapImage: 'https://arcraiders.wiki/w/images/thumb/9/96/Dam_Battlegrounds_Map.jpg/1920px-Dam_Battlegrounds_Map.jpg.webp',
	
	conditions: [
		'Normal condition', 
		'Lush Blooms', 
		'Uncovered Caches', 
		'Prospecting Probes', 
		'Harvester', 
		'Husk Graveyard', 
		'Matriarch', 
		'Electromagnetic Storm', 
		'Night Raid', 
		'Cold Snap', 
		'Hurricane', 
		'Close Scrutiny (ARC OPERATION)'
	],
	
	puzzles: [
		{
			title: 'Controlled Access Zone',
			steps: [
				'Powering up a lock room: Find the Fuel Cell (often spawns on the ground floor). Carry it to the top of the room and insert it into the wall receptacle. This unlocks the room containing the fourth switch.',
				'Activating the switches: All 4 buttons must be pressed at nearly the same time. There is a short delay allowed. This is possible with three people, but requires a Snap Hook to hit the last button in time.',
				'Resource lock: A second door is closed; to open it, you will need to deposit randomized items into an electrical panel.'
			],
			requiredGadgets: ['snap-hook']
		}
	],
	
	resourceLocks: [
		{
			title: 'Controlled Access Zone - Resource Lock',
			description: 'You must deposit specific items to unlock the final rewards behind that second door. These items are randomized each match.',
			requiredItems: [
				{ category: 'Large', itemIds: ['arc-performance-steel'], quantity: '1-x' },
				{ category: 'Large', itemIds: ['industrial-battery', 'leaper-pulse-unit', 'motor', 'rocketeer-driver'], quantity: '1' },
				{ category: 'Small', itemIds: ['arc-powercell', 'battery', 'wires'], quantity: '1-3' },
				{ category: 'Small', itemIds: ['metal-parts'], quantity: '2-12' }
			]
		}
	],
	
	extractions: [
		{
			title: 'The Metro Station',
			description: 'Always open, but loudly announces your departure to the whole map. Defend for 60 seconds.'
		},
		{
			title: 'West Cliff Elevator',
			description: 'Requires powering up the nearby generator first. Watch for ARC snipers while it ascends.'
		},
		{
			title: 'Raider Hatch (Under Bridge)',
			description: 'Silent and instant, but requires a Blue Access Keycard to open.'
		}
	],
	
	lore: 'The Alcantara Power Plant, or The Dam, stands a silent sentinel amidst waterlogged lands. Once a rare lifeline for settlers during the age of Sunrise, it became a shell-scarred battleground during the closing battles of the First Wave.\n\nEven now, these toxic, waterlogged lands remain a hot spot for ARC skirmishes. Between the research buildings, various Dam structures and the ramshackle hydroponic domes, Raiders know it to be a reliable source of valuable loot.\n\nDuring the First Wave, the Alcantara Dam was the site for many of the conflict\'s most harrowing battles, with scars and structures still pockmarking the area today.',
	
	patchHistory: [
		{ version: '1.17.0', notes: 'A new high-value loot area called the Controlled Access Zone was added.' },
		{ version: 'Release', notes: 'Added to the game.' }
	]
};