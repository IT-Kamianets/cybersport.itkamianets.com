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
				path: 'loot',
				children: [
					{
						path: '',
						loadComponent: () =>
							import('./loot/loot-hub.component').then((m) => m.ArcRaidersLootHubComponent),
					},
					{
						path: ':id',
						loadComponent: () =>
							import('./loot/loot-detail.component').then((m) => m.ArcRaidersLootDetailComponent),
					}
				]
			},

			{
				path: 'workshop',
				loadComponent: () =>
					import('./workshop/workshop-hub.component').then((m) => m.ArcRaidersWorkshopHubComponent),
			},
			{
				path: 'workshop/:id',
				loadComponent: () =>
					import('./workshop/station-detail.component').then((m) => m.ArcRaidersStationDetailComponent),
			},
			{
				path: 'guides',
				loadComponent: () =>
					import('./guides.component').then((m) => m.ArcRaidersGuidesComponent),
			},
		],
	},
];
