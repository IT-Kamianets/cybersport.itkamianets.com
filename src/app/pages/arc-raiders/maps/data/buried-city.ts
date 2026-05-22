import { GameMap } from '../maps.data';

export const buriedCity: GameMap = {
	id: 'buried-city',
	name: 'Buried City',
	environment: 'Urban / Underground',
	size: 'Medium',
	maxSquads: 4,
	overview: 'A ruined metropolis half-swallowed by the earth. Combat here is close-quarters and chaotic. The underground subway lines provide excellent cover but are infested with ARC Tick nests. It is highly recommended to bring EMP grenades and shotguns.',
	thumbnail: 'https://placehold.co/600x400/1a1a1a/00ff00?text=Buried+City+Thumbnail',
	mapImage: 'https://placehold.co/1200x800/1a1a1a/333333?text=Buried+City+Top-Down+Map',
	conditions: ['Normal', 'Tick Infestation', 'Toxic Fog'],
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
	lore: 'Buried City was once a thriving financial district before the earthquakes struck. Now it is a labyrinth of unstable ruins and dangerous secrets.',
	patchHistory: [
		{ version: 'Release', notes: 'Added to game.' }
	]
};
