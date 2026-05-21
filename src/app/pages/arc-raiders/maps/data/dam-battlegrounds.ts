import { GameMap } from '../maps.data';

export const damBattlegrounds: GameMap = {
	id: 'dam-battlegrounds',
	name: 'Dam Battlegrounds',
	environment: 'Industrial / Forest',
	size: 'Large',
	maxSquads: 6,
	signatureThreat: 'The Queen (Harvester Event)',
	overview: 'Dam Battlegrounds is a massive, highly vertical map. The central dam acts as a natural choke point, often drawing heavy PvP firefights. Squads should stick to the wooded perimeter for stealth, or control the central comms tower to dominate the map.',
	thumbnail: 'https://placehold.co/600x400/1a1a1a/00ff00?text=Dam+Thumbnail',
	mapImage: 'https://placehold.co/1200x800/1a1a1a/333333?text=Dam+Battlegrounds+Top-Down+Map',
	pois: [
		{
			id: 'poi-metro',
			type: 'extraction',
			x: 80,
			y: 15,
			title: 'Metro Station Extraction',
			description: 'Loud extraction requiring a 60-second hold. Highly exposed to sniper fire.',
			icon: '🚁'
		},
		{
			id: 'poi-hatch',
			type: 'extraction',
			requiredKeyId: 'blue-access-keycard',
			x: 35,
			y: 20,
			title: 'Hidden Raider Hatch',
			description: 'Instant, silent extraction. Requires Blue Access Keycard.',
			icon: '🚁'
		},
		{
			id: 'poi-tower',
			type: 'loot',
			x: 50,
			y: 45,
			title: 'Central Control Tower',
			description: 'High density of weapon cases and medical supplies. Usually heavily contested.',
			icon: '🔒'
		},
		{
			id: 'poi-boss',
			type: 'boss',
			x: 30,
			y: 75,
			title: 'Harvester Drop Zone',
			description: 'At 15 minutes, the Queen boss drops here. Area becomes highly radioactive.',
			icon: '💀'
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
	highValueTargets: [
		{
			title: 'The Control Tower',
			description: 'Usually spawns 2x Weapon Cases and Meds, but features long sightlines making it a sniper\'s paradise.'
		},
		{
			title: 'Sub-Level Breach Room',
			description: 'Located inside the dam wall. Requires a Breach Charge to open. Guaranteed to contain Medical Supplies and Synthetic Polymers.'
		}
	],
	hazards: [
		{
			title: 'The Harvester Drop',
			description: 'At the 15-minute mark, the sky turns red and the ARC Harvester ship drops The Queen boss. The immediate area becomes a high-radiation zone.'
		},
		{
			title: 'Rolling Fog',
			description: 'Occasionally, dense fog covers the lower river basin, reducing visibility to 10 meters. Excellent for sneaking past Bastions, but makes spotting Snitches difficult.'
		}
	]
};
