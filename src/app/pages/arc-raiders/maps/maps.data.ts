export interface MapPuzzle {
	title: string;
	steps: string[];
	requiredGadgets?: string[];
}

export interface MapResourceLock {
	title: string;
	description: string;
	requiredItems: { 
		category: 'Large' | 'Small'; 
		itemIds: string[]; 
		quantity: string; 
	}[];
}

export interface GameMap {
	id: string;
	name: string;
	environment: string;
	size: 'Small' | 'Medium' | 'Large';
	maxSquads: number;
	overview: string;
	thumbnail: string;
	mapImage: string;
	
	conditions: string[];
	puzzles?: MapPuzzle[];
	resourceLocks?: MapResourceLock[];
	
	extractions: { title: string; description: string; }[];
	lore: string;
	patchHistory: { version: string; notes: string; }[];
}

import { buriedCity } from './data/buried-city';
import { damBattlegrounds } from './data/dam-battlegrounds';
import { spaceport } from './data/spaceport';
import { theBlueGate } from './data/blue-gate';
import { rivenTides } from './data/riven-tides';
import { stellaMontis } from './data/stella-montis';

export const MAPS: GameMap[] = [
	damBattlegrounds,
	spaceport,
	buriedCity,
	theBlueGate,
	stellaMontis,
	rivenTides
];
