import { GameMap } from '../maps.data';

export const buriedCity: GameMap = {
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
};
