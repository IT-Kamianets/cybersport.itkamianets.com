import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { PubgService, GameMap } from './pubg.service';

@Component({
	selector: 'app-pubg-maps',
	standalone: true,
	imports: [TranslateDirective],
	template: `
		<div class="bg-[var(--c-bg-primary)] py-12 lg:py-20 animate-in fade-in slide-in-from-right-8 duration-500">
			<div class="mx-auto max-w-[var(--container)] px-4">
				<div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
					<div>
						<h2 class="text-4xl font-black uppercase tracking-tight text-[var(--c-text-strong)] sm:text-6xl mb-4" translate>
							World Maps
						</h2>
						<p class="text-lg text-[var(--c-text-muted)]" translate>
							Explore diverse terrains, from vast deserts to dense jungles.
						</p>
					</div>
					<div class="flex gap-2">
						<span class="px-4 py-1 bg-[var(--c-primary)] text-white text-xs font-black uppercase tracking-widest rounded-full" translate>Active Pool</span>
						<span class="px-4 py-1 bg-[var(--c-bg-secondary)] text-[var(--c-text-muted)] text-xs font-black uppercase tracking-widest rounded-full border border-[var(--c-border)]" translate>9 Maps</span>
					</div>
				</div>

				<!-- Selected Map Highlight (only if a map is selected) -->
				@if (selectedMap(); as map) {
					<div id="selected-map-details" class="mb-8 animate-in zoom-in-95 duration-500 scroll-mt-24">
						<div class="relative overflow-hidden rounded-2xl border border-[var(--c-primary)] bg-[var(--c-bg-secondary)] p-4 lg:p-6 shadow-xl">
							<div class="absolute top-0 right-0 w-48 h-48 bg-[var(--c-primary)]/5 blur-[60px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
							<div class="flex flex-col sm:flex-row gap-6 relative z-10">
								<div class="w-full sm:w-[35%] aspect-video rounded-lg overflow-hidden shadow-md border border-white/5">
									<img [src]="map.image" [alt]="map.name" class="w-full h-full object-cover">
								</div>
								<div class="flex-1 flex flex-col justify-center">
									<div class="flex items-center justify-between mb-2">
										<div class="inline-flex px-2 py-0.5 rounded-md bg-[var(--c-primary)] text-white text-[8px] font-black uppercase tracking-widest" translate>Selected Map</div>
										<button (click)="selectedMap.set(null)" class="text-[10px] font-black uppercase tracking-widest text-[var(--c-text-muted)] hover:text-[var(--c-primary)] transition-colors flex items-center gap-1.5">
											<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"/></svg>
											<span translate>Close Details</span>
										</button>
									</div>
									<h3 class="text-3xl font-black text-[var(--c-text-strong)] uppercase tracking-tighter leading-tight mb-2" translate>{{ map.name }}</h3>
									<div class="flex gap-4 mb-3">
										<div class="text-[10px] font-bold text-[var(--c-text-muted)] flex items-center gap-1.5">
											<span class="text-[var(--c-primary)]">📏</span> {{ map.size }}
										</div>
										<div class="text-[10px] font-bold text-[var(--c-text-muted)] flex items-center gap-1.5">
											<span class="text-[var(--c-primary)]">🌍</span> <span translate>Standard</span>
										</div>
									</div>
									<p class="text-base text-[var(--c-text)] leading-snug italic border-l-2 border-[var(--c-primary)] pl-4 py-1" [translate]="map.description">
									</p>
								</div>
							</div>
						</div>
					</div>
				}

				<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					@for (map of maps(); track map.name) {
						<div 
							(click)="onMapClick(map)"
							[class.border-[var(--c-primary)]]="selectedMap()?.name === map.name"
							class="group relative overflow-hidden rounded-[2rem] border-2 border-[var(--c-border)] bg-[var(--c-bg-secondary)] shadow-xl aspect-[16/10] transition-all hover:border-[var(--c-primary)] cursor-pointer hover:-translate-y-2"
						>
							<img [src]="map.image" [alt]="map.name" class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1">
							
							<div class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-8 transition-opacity duration-300 group-hover:from-[rgba(0,0,0,0.9)]">
								<div class="flex items-center justify-between">
									<div>
										<h3 class="text-3xl font-black text-white uppercase tracking-tighter mb-1" translate>{{ map.name }}</h3>
										<div class="flex items-center gap-4">
											<span class="text-white/70 text-sm font-bold flex items-center gap-1">
												<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
												{{ map.size }}
											</span>
											<span class="w-1 h-1 bg-[var(--c-primary)] rounded-full"></span>
											<span class="text-white/70 text-sm font-bold uppercase tracking-widest" translate>Standard</span>
										</div>
									</div>
									<div class="h-12 w-12 rounded-full bg-[var(--c-primary)] text-white flex items-center justify-center opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 shadow-[0_0_20px_rgba(255,77,0,0.4)]">
										<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
									</div>
								</div>
							</div>
						</div>
					}
				</div>

				<!-- Detailed Map Info -->
				<div class="mt-20 grid gap-12 lg:grid-cols-2 bg-[var(--c-bg-secondary)] rounded-[3rem] border border-[var(--c-border)] p-8 lg:p-12 overflow-hidden relative">
					<div class="absolute top-0 right-0 w-64 h-64 bg-[var(--c-primary)]/5 blur-3xl rounded-full"></div>
					<div class="relative z-10 space-y-8">
						<h3 class="text-3xl font-black uppercase tracking-tight text-[var(--c-text-strong)]" translate>Map Rotation</h3>
						<p class="text-lg text-[var(--c-text)] leading-relaxed" translate>
							PUBG features a rotating map pool for matchmaking to ensure fresh gameplay experiences while maintaining fast matchmaking times. Each map offers unique tactical challenges, from the open sniping fields of Miramar to the urban warfare of Deston.
						</p>
						<ul class="space-y-4">
							<li class="flex items-center gap-3 text-[var(--c-text)] font-bold">
								<span class="h-2 w-2 bg-[var(--c-primary)] rounded-full"></span>
								<span translate>Seasonal rotations every month</span>
							</li>
							<li class="flex items-center gap-3 text-[var(--c-text)] font-bold">
								<span class="h-2 w-2 bg-[var(--c-primary)] rounded-full"></span>
								<span translate>Dynamic weather systems on selected maps</span>
							</li>
							<li class="flex items-center gap-3 text-[var(--c-text)] font-bold">
								<span class="h-2 w-2 bg-[var(--c-primary)] rounded-full"></span>
								<span translate>Secret rooms and destructible environments</span>
							</li>
						</ul>
					</div>
					<div class="relative aspect-video rounded-2xl overflow-hidden border-2 border-[var(--c-border)] shadow-2xl">
						<div class="absolute inset-0 bg-[#1a2a3a] animate-pulse"></div>
						<img src="https://wstatic-prod.pubg.com/web/live/main_fa53437/img/d1080a6.webp" class="absolute inset-0 w-full h-full object-cover">
					</div>
				</div>
			</div>
		</div>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PubgMapsComponent {
	protected readonly maps = inject(PubgService).maps;
	protected readonly selectedMap = signal<GameMap | null>(null);

	protected onMapClick(map: GameMap): void {
		if (this.selectedMap()?.name === map.name) {
			this.selectedMap.set(null);
			return;
		}

		// Briefly clear to trigger "animate-in" again for the new map
		this.selectedMap.set(null);

		setTimeout(() => {
			this.selectedMap.set(map);
			
			// Smooth scroll to the details section
			setTimeout(() => {
				const element = document.getElementById('selected-map-details');
				element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
			}, 50);
		}, 0);
	}
}
