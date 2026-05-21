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
	class: 'SMG' | 'Battle Rifle' | 'Assault Rifle' | 'Sniper Rifle' | 'Shotgun' | 'Heavy' | 'Pistol' | 'Melee';
	rarity: 'Common' | 'Uncommon' | 'Rare' | 'Epic' | 'Legendary' | 'Standard';
	ammoType: 'Light Ammo' | 'Medium Ammo' | 'Heavy Ammo' | 'Energy' | 'Special';
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

export const WEAPONS: Weapon[] = [
	kettle,
	rattler,
	arpeggio,
	tempest,
	bettina,
	ferro,
	renegade
];
