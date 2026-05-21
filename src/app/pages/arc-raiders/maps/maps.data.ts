export interface MapPoi {
	id: string;
	type: 'extraction' | 'loot' | 'boss' | 'landmark';
	requiredKeyId?: string;
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

import { damBattlegrounds } from './data/dam-battlegrounds';
import { buriedCity } from './data/buried-city';

export const MAPS: GameMap[] = [
	damBattlegrounds,
	buriedCity
];
