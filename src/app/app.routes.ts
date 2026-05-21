import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		data: {
			meta: {
				titleSuffix: '',
			},
		},
		loadComponent: () =>
			import('./pages/landing/landing.component').then((m) => m.LandingComponent),
	},
	{
		path: 'factorio',
		data: {
			meta: {
				title: 'Factorio',
				description:
					'Factorio sessions with factory planning, automation races, and cooperative logistics challenges.',
			},
		},
		loadComponent: () =>
			import('./pages/factorio/factorio.component').then((m) => m.FactorioComponent),
	},
	{
		path: 'pubg',
		data: {
			meta: {
				title: 'PUBG',
				description:
					'PUBG battle royale nights with squads, tactical rotations, and competitive survival formats.',
			},
		},
		loadComponent: () => import('./pages/pubg/pubg.component').then((m) => m.PubgComponent),
	},
	{
		path: 'dota2',
		data: {
			meta: {
				title: 'Dota 2',
				description:
					'Dota 2 match days with drafts, five-player teams, strategy practice, and tournament-style games.',
			},
		},
		loadComponent: () => import('./pages/dota2/dota2.component').then((m) => m.Dota2Component),
	},
	{
		path: 'arc-raiders',
		data: {
			meta: {
				title: 'ARC Raiders',
				description:
					'ARC Raiders co-op sessions focused on squad coordination, extraction routes, and shared objectives.',
			},
		},
		loadComponent: () =>
			import('./pages/arc-raiders/arc-raiders.component').then((m) => m.ArcRaidersComponent),
	},
	{
		path: '**',
		redirectTo: '',
	},
];
