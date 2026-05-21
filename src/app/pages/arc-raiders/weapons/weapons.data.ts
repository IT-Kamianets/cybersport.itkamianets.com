export interface WeaponPatch {
	version: string;
	notes: string;
}

// SSOT interface for required materials
export interface ItemRequirement {
	itemId: string;
	quantity: number;
}

export interface WeaponTier {
	tierLevel: number; // e.g., 1, 2, 3, 4
	romanNumeral: string; // 'I', 'II', 'III', 'IV'
	durabilityMax: number;
	weaponSalePrice: number;
	componentSalePricePerSlot: number;
	
	// How to upgrade TO this tier (Tier 1 is usually empty, as it uses base crafting)
	upgradeRequirements?: ItemRequirement[];
	upgradeStation?: { stationId: string; level: number };
	upgradePerks?: string[];
	
	// Maintenance & Breakdown
	repairCost: ItemRequirement[];
	repairDurabilityRestored: number;
	recycleYield: ItemRequirement[];
	salvageYield: ItemRequirement[];
}

export interface AdvancedWeaponStats {
	arcArmorPenetration: string;
	damage: number;
	fireRateBase: number;
	fireRateRpm: number;
	headshotMultiplier: number;
	range: number;
	stability: number;
	agility: number;
	stealth: number;
	weight: number;
}

export interface Weapon {
	id: string;
	name: string;
	class: 'SMG' | 'Battle Rifle' | 'Assault Rifle' | 'Hand Cannon' | 'LMG' | 'Sniper Rifle' | 'Shotgun' | 'Heavy' | 'Pistol';
	rarity: 'Common' | 'Uncommon' | 'Rare' | 'Epic' | 'Legendary';
	ammoType: 'Light Ammo' | 'Medium Ammo' | 'Heavy Ammo' | 'Shotgun Ammo' | 'Energy' | 'Special';
	magSize: string | number;
	firingMode: string;
	
	overview: string;
	acquisition: {
		sources: string[];
	};
	
	// Base Crafting (To get Tier I)
	craftingRequirements?: ItemRequirement[];
	craftingStation?: { stationId: string; level: number };
	
	// Advanced Data (From the PDF)
	advancedStats?: AdvancedWeaponStats;
	tiers?: WeaponTier[];
	
	// Legacy / Basic Stats (Keep these so old weapons don't break)
	baseDamage?: number;
	headshotMultiplier?: string;
	effectiveRange?: string;
	blueprintRequired?: string;
	mods?: { category: string; options: string; }[];
	strategies?: string[];
	
	patchHistory: WeaponPatch[];
	image: string;
	icon: string;
}

import { kettle } from './data/kettle';
import { rattler } from './data/rattler';
import { arpeggio } from './data/arpeggio';
import { tempest } from './data/tempest';
import { bettina } from './data/bettina';
import { ferro } from './data/ferro';
import { renegade } from './data/renegade';
import { aphelion } from './data/aphelion';
import { canto } from './data/canto';
import { ilToro } from './data/il-toro';
import { rascal } from './data/rascal';
import { anvil } from './data/anvil';
import { equalizer } from './data/equalizer';
import { bobcat } from './data/bobcat';
import { burletta } from './data/burletta';
import { dolabra } from './data/dolabra';
import { hairpin } from './data/hairpin';
import { hullcracker } from './data/hullcracker';
import { jupiter } from './data/jupiter';
import { osprey } from './data/osprey';
import { stitcher } from './data/stitcher';
import { torrente } from './data/torrente';
import { venator } from './data/venator';
import { vulcano } from './data/vulcano';

export const WEAPONS: Weapon[] = [
	anvil,
	aphelion,
	arpeggio,
	bettina,
	bobcat,
	burletta,
	canto,
	dolabra,
	equalizer,
	ferro,
	hairpin,
	hullcracker,
	ilToro,
	jupiter,
	kettle,
	osprey,
	rascal,
	rattler,
	renegade,
	stitcher,
	tempest,
	torrente,
	venator,
	vulcano
];
