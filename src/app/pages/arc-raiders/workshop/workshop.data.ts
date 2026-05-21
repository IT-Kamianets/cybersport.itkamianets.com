export interface StationTier {
	level: number;
	title: string;
	description: string;
	upgradeCosts: { itemId: string; quantity: number }[];
}

export interface WorkshopStation {
	id: string;
	name: string;
	description: string;
	icon: string;
	tiers: StationTier[];
}

import { gunsmith } from './data/gunsmith';
import { medicalLab } from './data/medical-lab';
import { gearBench } from './data/gear-bench';

export const WORKSHOP_STATIONS: WorkshopStation[] = [
	gunsmith,
	medicalLab,
	gearBench
];
