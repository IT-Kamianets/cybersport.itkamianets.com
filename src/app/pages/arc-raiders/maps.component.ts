import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-arc-raiders-maps',
	template: `
		<div class="max-w-3xl">
			<h2 class="text-3xl font-semibold text-[var(--c-text-strong)] sm:text-4xl">Maps & Regions</h2>
			<p class="mt-4 text-lg text-[var(--c-text)]">
				Explore the ruined landscapes. Know your extraction points and resource hotspots.
			</p>
		</div>

		<div class="mt-8 space-y-8">
			@for (map of maps; track map.name) {
				<div class="flex flex-col md:flex-row gap-6 rounded-lg border border-[var(--c-border)] bg-[var(--c-bg-secondary)] p-6 hover:border-[var(--c-arc-green)] transition-colors">
					<img [src]="map.image" [alt]="map.name" class="w-full md:w-1/2 h-64 object-cover rounded-lg" />
					<div class="flex-1">
						<h3 class="text-2xl font-bold text-[var(--c-text-strong)]">{{ map.name }}</h3>
						<p class="mt-3 text-[var(--c-text)]">{{ map.description }}</p>
						<h4 class="mt-4 font-semibold text-[var(--c-text-strong)]">Key Locations:</h4>
						<ul class="mt-2 list-disc list-inside text-sm text-[var(--c-text)] space-y-1">
							@for (loc of map.locations; track loc) {
								<li>{{ loc }}</li>
							}
						</ul>
					</div>
				</div>
			}
		</div>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArcRaidersMapsComponent {
	protected readonly maps = [
		{
			name: 'Calabash',
			description: 'A vast rural area with rolling hills, abandoned farmsteads, and scattered military outposts.',
			locations: ['The Silos', 'Old Town', 'Evac Center Alpha'],
			image: 'https://placehold.co/800x600/282828/00FF00?text=Calabash+Map',
		},
		{
			name: 'Speranza',
			description: 'Underground tunnels and ruined cityscapes where close quarters combat is inevitable.',
			locations: ['Subway Hub', 'Market Square', 'Upper Ruins'],
			image: 'https://placehold.co/800x600/282828/00FF00?text=Speranza+Map',
		},
	];
}
