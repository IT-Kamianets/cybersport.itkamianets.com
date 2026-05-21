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

import { workbench } from './data/workbench';
import { medicalLab } from './data/medical-lab';
import { explosivesStation } from './data/explosives-station';
import { utilityStation } from './data/utility-station';
import { refiner } from './data/refiner';
import { scrappy } from './data/scrappy';
import { gunsmith } from './data/gunsmith';
import { gearBench } from './data/gear-bench';

export const WORKSHOP_STATIONS = [
	workbench,
	gunsmith,
	gearBench,
	medicalLab,
	explosivesStation,
	utilityStation,
	refiner,
	scrappy
];