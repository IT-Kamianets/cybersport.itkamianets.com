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
		{
			name: 'M416',
			type: 'Assault Rifle',
			ammo: '5.56mm',
			damage: 41,
			range: 'Medium',
			image: 'https://wstatic-prod.pubg.com/web/live/main_fa53437/img/963e6e8.png',
		},
		{
			name: 'Beryl M762',
			type: 'Assault Rifle',
			ammo: '7.62mm',
			damage: 44,
			range: 'Medium',
			image: 'https://wstatic-prod.pubg.com/web/live/main_fa53437/img/14f25b2.png',
		},
		{
			name: 'Kar98k',
			type: 'Sniper Rifle',
			ammo: '7.62mm',
			damage: 79,
			range: 'Long',
			image: 'https://wstatic-prod.pubg.com/web/live/main_fa53437/img/830e0e0.png',
		},
		{
			name: 'M24',
			type: 'Sniper Rifle',
			ammo: '7.62mm',
			damage: 75,
			range: 'Long',
			image: 'https://wstatic-prod.pubg.com/web/live/main_fa53437/img/b1d6f7a.png',
		},
		{
			name: 'AWM',
			type: 'Sniper Rifle',
			ammo: '.300 Magnum',
			damage: 105,
			range: 'Extreme',
			image: 'https://wstatic-prod.pubg.com/web/live/main_fa53437/img/4e8b3b4.png',
		},
		{
			name: 'Mini14',
			type: 'DMR',
			ammo: '5.56mm',
			damage: 48,
			range: 'Long',
			image: 'https://wstatic-prod.pubg.com/web/live/main_fa53437/img/5d0e0e0.png',
		},
	]);
}
