import { GameMap } from '../maps.data';

export const rivenTides: GameMap = {
	id: 'riven-tides',
	name: 'Riven Tides',
	environment: 'Coastal / Harbor Resort',
	size: 'Medium',
	maxSquads: 6,
	overview: 'A twice-abandoned coastal paradise, this magnificent harbor resort holds memories of both grand ambitions and reluctant retreat. Yet for all the upheaval this place has known, the ocean looks much the same. Players unlock this map after completing 20 raids.',
	thumbnail: 'https://arcraiders.wiki/w/images/1/11/Riven_Tides.png',
	mapImage: 'https://arcraiders.wiki/w/images/thumb/e/eb/Riven_Tides_Map.jpg/1280px-Riven_Tides_Map.jpg.webp',
	
	conditions: [
		'Normal condition',
		'Lush Blooms',
		'Beachcombing',
		'Uncovered Caches',
		'Husk Graveyard',
		'Night Raid'
	],
	
	puzzles: [
		{
			title: 'Riven Tides Stacking Yard Puzzle',
			steps: [
				'Unlocking the first loot room: Search the Stacking Yard to locate and activate four hidden buttons. Once all four buttons are pressed, the first locked room containing initial loot will open.',
				'Find a battery: Locate a battery within the yard to power the lift.',
				'Repair the lift: Bring the battery and necessary components to the lift mechanism to repair it.',
				'Moving the battery: Someone must interact and maintain the lift button "Move Up", someone else needs to pick up the battery once it\'s on top of the building, then move the battery back to the first locked room you opened in the first step.',
				'Deposit & Take the loot: Insert the battery into the designated slot. Depositing the battery opens a building outside, granting access to even higher loot.'
			]
		}
	],
	
	resourceLocks: [
		{
			title: 'Lift Repair Requirements',
			description: 'Bring the battery and necessary components to the lift mechanism to repair it and progress the Stacking Yard puzzle.',
			requiredItems: [
				{ category: 'Small', itemIds: ['battery'], quantity: '1-2' },
				{ category: 'Small', itemIds: ['wires'], quantity: '1-2' }
			]
		}
	],
	
	extractions: [],
	
	lore: 'Once a luxurious, Exodus-era harbor resort, the oceanfront of Riven Tides is known to a handful of veteran Raiders as the first place they ever witnessed ARC coming down from the skies.\n\nThe area was abandoned in the early days of The First Wave due to its lack of shelter, but that same exposed coastline is now crucial for spotting new threats moving into the Rust Belt.',
	
	patchHistory: [
		{ version: '1.26.0', notes: 'Added to the game.' }
	]
};