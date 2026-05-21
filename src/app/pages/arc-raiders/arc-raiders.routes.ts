import { Routes } from '@angular/router';

export const arcRaidersRoutes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./arc-raiders.component').then((m) => m.ArcRaidersComponent),
		children: [
			{
				path: '',
				loadComponent: () =>
					import('./home.component').then((m) => m.ArcRaidersHomeComponent),
			},
			{
				path: 'enemies',
				loadComponent: () =>
					import('./enemies.component').then((m) => m.ArcRaidersEnemiesComponent),
			},
			{
				path: 'weapons',
				loadComponent: () =>
					import('./weapons.component').then((m) => m.ArcRaidersWeaponsComponent),
			},
			{
				path: 'maps',
				loadComponent: () =>
					import('./maps.component').then((m) => m.ArcRaidersMapsComponent),
			},
			{
				path: 'guides',
				loadComponent: () =>
					import('./guides.component').then((m) => m.ArcRaidersGuidesComponent),
			},
		],
	},
];
