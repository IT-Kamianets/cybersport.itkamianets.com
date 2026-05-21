export interface MapPoi {
	id: string;
	type: 'extraction' | 'loot' | 'boss' | 'landmark';
	x: number; // percentage from left
	y: number; // percentage from top
	title: string;
	description: string;
	icon: string;
}

export interface MapSection {
	title: string;
	description: string;
}

export interface GameMap {
	id: string;
	name: string;
	environment: string;
	size: 'Small' | 'Medium' | 'Large';
	maxSquads: number;
	signatureThreat: string;
	overview: string;
	thumbnail: string;
	mapImage: string;
	pois: MapPoi[];
	extractions: MapSection[];
	highValueTargets: MapSection[];
	hazards: MapSection[];
}

export const MAPS: GameMap[] = [
	{
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
				x: 10,
				y: 85,
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
	},
	{
		id: 'buried-city',
		name: 'Buried City',
		environment: 'Urban / Underground',
		size: 'Medium',
		maxSquads: 4,
		signatureThreat: 'Tick Nests',
		overview: 'A ruined metropolis half-swallowed by the earth. Combat here is close-quarters and chaotic. The underground subway lines provide excellent cover but are infested with ARC Tick nests. It is highly recommended to bring EMP grenades and shotguns.',
		thumbnail: 'https://placehold.co/600x400/1a1a1a/00ff00?text=Buried+City+Thumbnail',
		mapImage: 'https://placehold.co/1200x800/1a1a1a/333333?text=Buried+City+Top-Down+Map',
		pois: [
			{
				id: 'poi-plaza',
				type: 'loot',
				x: 50,
				y: 30,
				title: 'Sunken Plaza',
				description: 'Open area with multiple tech crates, but heavily patrolled by Drones.',
				icon: '🔒'
			},
			{
				id: 'poi-subway-evac',
				type: 'extraction',
				x: 20,
				y: 80,
				title: 'Collapsed Tunnel Evac',
				description: 'Underground extraction point. Safe from snipers but easily trapped by other squads.',
				icon: '🚁'
			},
			{
				id: 'poi-nest',
				type: 'boss',
				x: 70,
				y: 60,
				title: 'Alpha Tick Nest',
				description: 'Spawns endless waves of Ticks until the central node is destroyed.',
				icon: '⚠️'
			}
		],
		extractions: [
			{
				title: 'Collapsed Tunnel',
				description: 'Deep underground. Highly defensible but only has one exit, making it easy for rival Raiders to ambush you.'
			},
			{
				title: 'Rooftop Helipad',
				description: 'Requires grappling hooks or finding the functional elevator. Very exposed.'
			}
		],
		highValueTargets: [
			{
				title: 'Bank Vault',
				description: 'Requires a heavy explosive to breach. Contains massive amounts of Old World Currency and crafting components.'
			}
		],
		hazards: [
			{
				title: 'Tick Infestations',
				description: 'Certain buildings are covered in webbing. Firing unsuppressed weapons inside will wake the swarm.'
			},
			{
				title: 'Unstable Ground',
				description: 'Using explosives near weak floors can cause them to collapse, dropping you into lower, more dangerous levels.'
			}
		]
	}
];
