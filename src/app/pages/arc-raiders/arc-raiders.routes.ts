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
				children: [
					{
						path: '',
						loadComponent: () =>
							import('./enemies/enemies-hub.component').then((m) => m.ArcRaidersEnemiesComponent),
					},
					{
						path: ':id',
						loadComponent: () =>
							import('./enemies/enemy-detail.component').then((m) => m.ArcRaidersEnemyDetailComponent),
					}
				]
			},
			{
				path: 'weapons',
				children: [
					{
						path: '',
						loadComponent: () =>
							import('./weapons/weapons-hub.component').then((m) => m.ArcRaidersWeaponsComponent),
					},
					{
						path: ':id',
						loadComponent: () =>
							import('./weapons/weapon-detail.component').then((m) => m.ArcRaidersWeaponDetailComponent),
					}
				]
			},
			{
				path: 'maps',
				children: [
					{
						path: '',
						loadComponent: () =>
							import('./maps/maps-hub.component').then((m) => m.ArcRaidersMapsComponent),
					},
					{
						path: ':id',
						loadComponent: () =>
							import('./maps/map-detail.component').then((m) => m.ArcRaidersMapDetailComponent),
					}
				]
			},
			{
				path: 'gadgets',
				children: [
					{
						path: '',
						loadComponent: () =>
							import('./gadgets/gadgets-hub.component').then((m) => m.ArcRaidersGadgetsComponent),
					},
					{
						path: ':id',
						loadComponent: () =>
							import('./gadgets/gadget-detail.component').then((m) => m.ArcRaidersGadgetDetailComponent),
					}
				]
			},
			{
				path: 'guides',
				loadComponent: () =>
					import('./guides.component').then((m) => m.ArcRaidersGuidesComponent),
			},
		],
	},
];
