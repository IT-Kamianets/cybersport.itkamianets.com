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
		path: 'dota2/guide/:id',
		data: {
			meta: {
				title: 'Dota 2 — Hero Guide',
			},
		},
		loadComponent: () => import('./pages/dota2/hero-guide.component').then((m) => m.HeroGuideComponent),
	},
	{
		path: 'dota2',
		data: {
			meta: {
				title: 'Dota 2 Wiki — Patch 7.41b',
				description:
					'Dota 2 patch 7.41b guide with heroes, roles, meta builds, and interactive map support.',
			},
		},
		loadComponent: () => import('./pages/dota2/dota2.component').then((m) => m.Dota2Component),
	},
	{
		path: 'arc-raiders',
		data: {
			meta: {
				title: 'ARC Raiders Wiki',
				description:
					'Unofficial ARC Raiders wiki: enemies, weapons, maps, and guides.',
			},
		},
		loadChildren: () =>
			import('./pages/arc-raiders/arc-raiders.routes').then((m) => m.arcRaidersRoutes),
	},
	{
		path: '**',
		redirectTo: '',
	},
];
