import { Injectable, signal } from '@angular/core';

export interface MapMarker {
	name: string;
	x: number;
	y: number;
}

export interface GameRole {
	title: string;
	icon: string;
	description: string;
}

export interface GameMap {
	name: string;
	size: string;
	image: string;
	description: string;
}

export interface StrategyTip {
	title: string;
	content: string;
}

export interface GameWeapon {
	name: string;
	type: string;
	ammo: string;
	damage: number;
	range: string;
	image: string;
	description: string;
}

@Injectable({
	providedIn: 'root',
})
export class PubgService {
	readonly markers = signal<MapMarker[]>([
		{ name: 'Pochinki', x: 43.5, y: 50 },
		{ name: 'School', x: 53.5, y: 40.5 },
		{ name: 'Sosnovka Military Base', x: 55, y: 82 },
	]);

	readonly roles = signal<GameRole[]>([
		{ title: 'In-Game Leader', icon: '👑', description: 'Makes macro decisions, rotations, and drop plans.' },
		{ title: 'Entry Fragger', icon: '⚔️', description: 'First to engage in combat and clear buildings.' },
		{ title: 'Support', icon: '🎒', description: 'Provides cover fire and carries extra utility.' },
		{ title: 'Sniper', icon: '🎯', description: 'Long-range engagement and target spotting.' },
	]);

	readonly maps = signal<GameMap[]>([
		{
			name: 'Erangel',
			size: '8x8 km',
			image: 'https://wstatic-prod.pubg.com/web/live/main_fa53437/img/590dba7.webp',
			description: 'Erangel_Desc',
		},
		{
			name: 'Miramar',
			size: '8x8 km',
			image: 'https://wstatic-prod.pubg.com/web/live/main_fa53437/img/24a088e.webp',
			description: 'Miramar_Desc',
		},
		{
			name: 'Sanhok',
			size: '4x4 km',
			image: 'https://wstatic-prod.pubg.com/web/live/main_fa53437/img/ad22769.webp',
			description: 'Sanhok_Desc',
		},
		{
			name: 'Vikendi',
			size: '6x6 km',
			image: 'https://wstatic-prod.pubg.com/web/live/main_fa53437/img/d1080a6.webp',
			description: 'Vikendi_Desc',
		},
		{
			name: 'Taego',
			size: '8x8 km',
			image: 'https://wstatic-prod.pubg.com/web/live/main_fa53437/img/19581ee.webp',
			description: 'Taego_Desc',
		},
		{
			name: 'Deston',
			size: '8x8 km',
			image: 'https://wstatic-prod.pubg.com/web/live/main_fa53437/img/e2bdf1e.webp',
			description: 'Deston_Desc',
		},
		{
			name: 'Rondo',
			size: '8x8 km',
			image: 'https://wstatic-prod.pubg.com/web/live/main_fa53437/img/8dad1dc.webp',
			description: 'Rondo_Desc',
		},
		{
			name: 'Karakin',
			size: '2x2 km',
			image: 'https://wstatic-prod.pubg.com/web/live/main_fa53437/img/c79a707.webp',
			description: 'Karakin_Desc',
		},
		{
			name: 'Paramo',
			size: '3x3 km',
			image: 'https://wstatic-prod.pubg.com/web/live/main_fa53437/img/b18244b.webp',
			description: 'Paramo_Desc',
		},
	]);

	readonly tips = signal<StrategyTip[]>([
		{ title: 'Choosing the Drop Zone', content: 'High-tier loot zones like Pochinki are dangerous. For beginners, choose remote clusters of houses to loot safely.' },
		{ title: 'The Art of Rotation', content: 'Use vehicles for long rotations. Try to stay near the edge of the blue zone to minimize the chance of being shot from behind.' },
		{ title: 'Utility is Key', content: 'Always carry smoke grenades. They are essential for reviving teammates or moving across open fields.' },
		{ title: 'Weapon Combinations', content: 'The ideal setup is an AR (for medium range) and a DMR or SR (for long range engagements).' },
	]);

	readonly weapons = signal<GameWeapon[]>([
		// === ASSAULT RIFLES (Штурмові гвинтівки - AR) ===
		{ name: 'AUG A3', type: 'Assault Rifle', ammo: '5.56mm', damage: 41, range: 'Medium', image: 'https://wstatic-prod.pubg.com/web/live/main_fa53437/img/9715d2a.png', description: 'Weapon_AUG_Desc' },
		{ name: 'M416', type: 'Assault Rifle', ammo: '5.56mm', damage: 40, range: 'Medium', image: 'https://wstatic-prod.pubg.com/web/live/main_fa53437/img/963e6e8.png', description: 'Weapon_M416_Desc' },
		{ name: 'AKM', type: 'Assault Rifle', ammo: '7.62mm', damage: 47, range: 'Medium', image: 'https://wstatic-prod.pubg.com/web/live/main_fa53437/img/f7a08b3.png', description: 'Weapon_AKM_Desc' },
		{ name: 'Beryl M762', type: 'Assault Rifle', ammo: '7.62mm', damage: 44, range: 'Medium', image: 'https://wstatic-prod.pubg.com/web/live/main_fa53437/img/14f25b2.png', description: 'Weapon_Beryl_Desc' },
		{ name: 'SCAR-L', type: 'Assault Rifle', ammo: '5.56mm', damage: 41, range: 'Medium', image: 'https://wstatic-prod.pubg.com/web/live/main_fa53437/img/c57cd22.png', description: 'Weapon_SCARL_Desc' },
		{ name: 'Groza', type: 'Assault Rifle', ammo: '7.62mm', damage: 47, range: 'Medium', image: 'https://wstatic-prod.pubg.com/web/live/main_fa53437/img/7b309eb.png', description: 'Weapon_Groza_Desc' },
		{ name: 'FAMAS', type: 'Assault Rifle', ammo: '5.56mm', damage: 39, range: 'Medium', image: 'assets/pubg/weapon-placeholder.png', description: 'Weapon_FAMAS_Desc' },
		{ name: 'G36C', type: 'Assault Rifle', ammo: '5.56mm', damage: 41, range: 'Medium', image: 'assets/pubg/weapon-placeholder.png', description: 'Weapon_G36C_Desc' },
		{ name: 'M16A4', type: 'Assault Rifle', ammo: '5.56mm', damage: 43, range: 'Medium-Long', image: 'https://wstatic-prod.pubg.com/web/live/main_fa53437/img/9f9c7e0.png', description: 'Weapon_M16A4_Desc' },
		{ name: 'Mk47 Mutant', type: 'Assault Rifle', ammo: '7.62mm', damage: 49, range: 'Medium-Long', image: 'assets/pubg/weapon-placeholder.png', description: 'Weapon_Mk47Mutant_Desc' },
		{ name: 'QBZ', type: 'Assault Rifle', ammo: '5.56mm', damage: 41, range: 'Medium', image: 'assets/pubg/weapon-placeholder.png', description: 'Weapon_QBZ_Desc' },
		{ name: 'ACE32', type: 'Assault Rifle', ammo: '7.62mm', damage: 43, range: 'Medium', image: 'assets/pubg/weapon-placeholder.png', description: 'Weapon_ACE32_Desc' },
		{ name: 'K2', type: 'Assault Rifle', ammo: '5.56mm', damage: 41, range: 'Medium', image: 'assets/pubg/weapon-placeholder.png', description: 'Weapon_K2_Desc' },

		// === DESIGNATED MARKSMAN RIFLES (Марксманські гвинтівки - DMR) ===
		{ name: 'SKS', type: 'DMR', ammo: '7.62mm', damage: 53, range: 'Medium-Long', image: 'https://wstatic-prod.pubg.com/web/live/main_fa53437/img/0e1e355.png', description: 'Weapon_SKS_Desc' },
		{ name: 'SLR', type: 'DMR', ammo: '7.62mm', damage: 58, range: 'Medium-Long', image: 'https://wstatic-prod.pubg.com/web/live/main_fa53437/img/c5c8e2f.png', description: 'Weapon_SLR_Desc' },
		{ name: 'Mini14', type: 'DMR', ammo: '5.56mm', damage: 46, range: 'Medium-Long', image: 'https://wstatic-prod.pubg.com/web/live/main_fa53437/img/5d0e0e0.png', description: 'Weapon_Mini14_Desc' },
		{ name: 'Mk14', type: 'DMR', ammo: '7.62mm', damage: 61, range: 'Long', image: 'https://wstatic-prod.pubg.com/web/live/main_fa53437/img/f6e0766.png', description: 'Weapon_Mk14_Desc' },
		{ name: 'QBU', type: 'DMR', ammo: '5.56mm', damage: 48, range: 'Medium-Long', image: 'assets/pubg/weapon-placeholder.png', description: 'Weapon_QBU_Desc' },
		{ name: 'VSS', type: 'DMR', ammo: '9mm', damage: 43, range: 'Medium', image: 'assets/pubg/weapon-placeholder.png', description: 'Weapon_VSS_Desc' },
		{ name: 'Mk12', type: 'DMR', ammo: '5.56mm', damage: 50, range: 'Medium-Long', image: 'assets/pubg/weapon-placeholder.png', description: 'Weapon_Mk12_Desc' },
		{ name: 'Dragunov', type: 'DMR', ammo: '7.62mm', damage: 60, range: 'Medium-Long', image: 'assets/pubg/weapon-placeholder.png', description: 'Weapon_Dragunov_Desc' },

		// === SNIPER RIFLES (Снайперські гвинтівки - SR) ===
		{ name: 'Kar98k', type: 'Sniper Rifle', ammo: '7.62mm', damage: 79, range: 'Long', image: 'https://wstatic-prod.pubg.com/web/live/main_fa53437/img/830e0e0.png', description: 'Weapon_Kar98k_Desc' },
		{ name: 'M24', type: 'Sniper Rifle', ammo: '7.62mm', damage: 75, range: 'Long', image: 'https://wstatic-prod.pubg.com/web/live/main_fa53437/img/b1d6f7a.png', description: 'Weapon_M24_Desc' },
		{ name: 'AWM', type: 'Sniper Rifle', ammo: '.300 Magnum', damage: 105, range: 'Very Long', image: 'https://wstatic-prod.pubg.com/web/live/main_fa53437/img/4e8b3b4.png', description: 'Weapon_AWM_Desc' },
		{ name: 'Mosin Nagant', type: 'Sniper Rifle', ammo: '7.62mm', damage: 79, range: 'Long', image: 'https://wstatic-prod.pubg.com/web/live/main_fa53437/img/e1d75c1.png', description: 'Weapon_Mosin_Desc' },
		{ name: 'Win94', type: 'Sniper Rifle', ammo: '.45 ACP', damage: 66, range: 'Medium-Long', image: 'assets/pubg/weapon-placeholder.png', description: 'Weapon_Win94_Desc' },
		{ name: 'Lynx AMR', type: 'Sniper Rifle', ammo: '.50 BMG', damage: 118, range: 'Very Long', image: 'assets/pubg/weapon-placeholder.png', description: 'Weapon_LynxAMR_Desc' },

		// === SUBMACHINE GUNS (Пістолети-кулемети - SMG) ===
		{ name: 'UMP45', type: 'SMG', ammo: '.45 ACP', damage: 41, range: 'Short-Medium', image: 'https://wstatic-prod.pubg.com/web/live/main_fa53437/img/28a8d05.png', description: 'Weapon_UMP45_Desc' },
		{ name: 'Micro UZI', type: 'SMG', ammo: '9mm', damage: 26, range: 'Short', image: 'https://wstatic-prod.pubg.com/web/live/main_fa53437/img/5548053.png', description: 'Weapon_UZI_Desc' },
		{ name: 'Vector', type: 'SMG', ammo: '9mm', damage: 31, range: 'Short', image: 'https://wstatic-prod.pubg.com/web/live/main_fa53437/img/f01bba2.png', description: 'Weapon_Vector_Desc' },
		{ name: 'Tommy Gun', type: 'SMG', ammo: '.45 ACP', damage: 40, range: 'Short-Medium', image: 'assets/pubg/weapon-placeholder.png', description: 'Weapon_TommyGun_Desc' },
		{ name: 'PP-19 Bizon', type: 'SMG', ammo: '9mm', damage: 35, range: 'Short-Medium', image: 'assets/pubg/weapon-placeholder.png', description: 'Weapon_Bizon_Desc' },
		{ name: 'MP5K', type: 'SMG', ammo: '9mm', damage: 33, range: 'Short', image: 'https://wstatic-prod.pubg.com/web/live/main_fa53437/img/fdb502d.png', description: 'Weapon_MP5K_Desc' },
		{ name: 'P90', type: 'SMG', ammo: '5.7mm', damage: 35, range: 'Short-Medium', image: 'assets/pubg/weapon-placeholder.png', description: 'Weapon_P90_Desc' },
		{ name: 'JS9', type: 'SMG', ammo: '9mm', damage: 34, range: 'Short', image: 'assets/pubg/weapon-placeholder.png', description: 'Weapon_JS9_Desc' },

		// === LIGHT MACHINE GUNS (Ручні кулемети - LMG) ===
		{ name: 'M249', type: 'LMG', ammo: '5.56mm', damage: 40, range: 'Medium', image: 'https://wstatic-prod.pubg.com/web/live/main_fa53437/img/e16f31f.png', description: 'Weapon_M249_Desc' },
		{ name: 'DP-28', type: 'LMG', ammo: '7.62mm', damage: 51, range: 'Medium', image: 'https://wstatic-prod.pubg.com/web/live/main_fa53437/img/18deea2.png', description: 'Weapon_DP28_Desc' },
		{ name: 'MG3', type: 'LMG', ammo: '7.62mm', damage: 40, range: 'Medium', image: 'https://wstatic-prod.pubg.com/web/live/main_fa53437/img/d6e530f.png', description: 'Weapon_MG3_Desc' },

		// === SHOTGUNS (Дробовики - SG) ===
		{ name: 'S1897', type: 'Shotgun', ammo: '12 Gauge', damage: 26, range: 'Very Short', image: 'https://wstatic-prod.pubg.com/web/live/main_fa53437/img/67d605c.png', description: 'Weapon_S1897_Desc' },
		{ name: 'S686', type: 'Shotgun', ammo: '12 Gauge', damage: 26, range: 'Very Short', image: 'https://wstatic-prod.pubg.com/web/live/main_fa53437/img/c6d2c4e.png', description: 'Weapon_S686_Desc' },
		{ name: 'S12K', type: 'Shotgun', ammo: '12 Gauge', damage: 24, range: 'Very Short', image: 'https://wstatic-prod.pubg.com/web/live/main_fa53437/img/3eab5a2.png', description: 'Weapon_S12K_Desc' },
		{ name: 'DBS', type: 'Shotgun', ammo: '12 Gauge', damage: 26, range: 'Very Short', image: 'https://wstatic-prod.pubg.com/web/live/main_fa53437/img/e33d267.png', description: 'Weapon_DBS_Desc' },
		{ name: 'O12', type: 'Shotgun', ammo: '12 Gauge Slug', damage: 100, range: 'Short', image: 'assets/pubg/weapon-placeholder.png', description: 'Weapon_O12_Desc' },

		// === PISTOLS / SIDEARMS (Пістолети) ===
		{ name: 'P92', type: 'Pistol', ammo: '9mm', damage: 35, range: 'Short', image: 'assets/pubg/weapon-placeholder.png', description: 'Weapon_P92_Desc' },
		{ name: 'P1911', type: 'Pistol', ammo: '.45 ACP', damage: 42, range: 'Short', image: 'assets/pubg/weapon-placeholder.png', description: 'Weapon_P1911_Desc' },
		{ name: 'P18C', type: 'Pistol', ammo: '9mm', damage: 23, range: 'Short', image: 'assets/pubg/weapon-placeholder.png', description: 'Weapon_P18C_Desc' },
		{ name: 'R1895', type: 'Pistol', ammo: '7.62mm', damage: 64, range: 'Short', image: 'assets/pubg/weapon-placeholder.png', description: 'Weapon_R1895_Desc' },
		{ name: 'R45', type: 'Pistol', ammo: '.45 ACP', damage: 65, range: 'Short', image: 'assets/pubg/weapon-placeholder.png', description: 'Weapon_R45_Desc' },
		{ name: 'Deagle', type: 'Pistol', ammo: '.45 ACP', damage: 62, range: 'Short-Medium', image: 'assets/pubg/weapon-placeholder.png', description: 'Weapon_Deagle_Desc' },
		{ name: 'Skorpion', type: 'Pistol', ammo: '9mm', damage: 22, range: 'Short', image: 'assets/pubg/weapon-placeholder.png', description: 'Weapon_Skorpion_Desc' },
		{ name: 'Sawed-off', type: 'Pistol', ammo: '12 Gauge', damage: 22, range: 'Very Short', image: 'assets/pubg/weapon-placeholder.png', description: 'Weapon_SawedOff_Desc' },

		// === MISC / SPECIAL (Спеціальна зброя) ===
		{ name: 'Crossbow', type: 'Misc', ammo: 'Bolt', damage: 105, range: 'Short-Medium', image: 'assets/pubg/weapon-placeholder.png', description: 'Weapon_Crossbow_Desc' },
		{ name: 'Panzerfaust', type: 'Misc', ammo: 'Warhead', damage: 100, range: 'Medium', image: 'assets/pubg/weapon-placeholder.png', description: 'Weapon_Panzerfaust_Desc' },
		{ name: 'Mortar', type: 'Misc', ammo: '60mm', damage: 100, range: 'Long', image: 'assets/pubg/weapon-placeholder.png', description: 'Weapon_Mortar_Desc' },
		{ name: 'Stun Gun', type: 'Misc', ammo: 'Battery', damage: 1, range: 'Very Short', image: 'assets/pubg/weapon-placeholder.png', description: 'Weapon_StunGun_Desc' },

		// === MELEE (Холодна зброя) ===
		{ name: 'Pan', type: 'Melee', ammo: 'None', damage: 80, range: 'Melee', image: 'assets/pubg/weapon-placeholder.png', description: 'Weapon_Pan_Desc' },
		{ name: 'Machete', type: 'Melee', ammo: 'None', damage: 60, range: 'Melee', image: 'assets/pubg/weapon-placeholder.png', description: 'Weapon_Machete_Desc' },
		{ name: 'Crowbar', type: 'Melee', ammo: 'None', damage: 60, range: 'Melee', image: 'assets/pubg/weapon-placeholder.png', description: 'Weapon_Crowbar_Desc' },
		{ name: 'Sickle', type: 'Melee', ammo: 'None', damage: 60, range: 'Melee', image: 'assets/pubg/weapon-placeholder.png', description: 'Weapon_Sickle_Desc' }
	]);
}
