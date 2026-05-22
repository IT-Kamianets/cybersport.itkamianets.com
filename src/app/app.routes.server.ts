import { RenderMode, ServerRoute } from '@angular/ssr';
import { ENEMIES } from './pages/arc-raiders/enemies/enemies.data';
import { WEAPONS } from './pages/arc-raiders/weapons/weapons.data';
import { MAPS } from './pages/arc-raiders/maps/maps.data';
import { LOOT } from './pages/arc-raiders/loot/loot.data';
import { WORKSHOP_STATIONS } from './pages/arc-raiders/workshop/workshop.data';
import { HEROES } from './pages/dota2/heroes.data';

export const serverRoutes: ServerRoute[] = [
	{
		path: 'arc-raiders/enemies/:id',
		renderMode: RenderMode.Prerender,
		async getPrerenderParams() {
			return ENEMIES.map(e => ({ id: e.id }));
		}
	},
	{
		path: 'arc-raiders/weapons/:id',
		renderMode: RenderMode.Prerender,
		async getPrerenderParams() {
			return WEAPONS.map(w => ({ id: w.id }));
		}
	},
	{
		path: 'arc-raiders/maps/:id',
		renderMode: RenderMode.Prerender,
		async getPrerenderParams() {
			return MAPS.map(m => ({ id: m.id }));
		}
	},
	{
		path: 'arc-raiders/loot/:id',
		renderMode: RenderMode.Prerender,
		async getPrerenderParams() {
			return LOOT.map(l => ({ id: l.id }));
		}
	},
	{
		path: 'arc-raiders/workshop/:id',
		renderMode: RenderMode.Prerender,
		async getPrerenderParams() {
			return WORKSHOP_STATIONS.map(w => ({ id: w.id }));
		}
	},
	{
		path: 'dota2/guide/:id',
		renderMode: RenderMode.Prerender,
		async getPrerenderParams() {
			return HEROES.map(h => ({ id: h.id }));
		}
	},
	{
		path: '**',
		renderMode: RenderMode.Prerender,
	},
];
