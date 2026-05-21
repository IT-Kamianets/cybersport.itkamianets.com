import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MAPS } from './maps.data';
import { map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-map-detail',
	imports: [RouterLink, CommonModule],
	template: `
		<div class="pb-12">
			
			<!-- Breadcrumb -->
			<nav class="mb-6 flex items-center gap-2 text-sm text-[var(--c-text-muted)]">
				<a routerLink="/arc-raiders/maps" class="hover:text-[var(--c-arc-green)] transition-colors">Maps</a>
				<span>/</span>
				<span class="text-[var(--c-text-strong)]">{{ gameMap()?.name || 'Not Found' }}</span>
			</nav>

			@if (gameMap(); as m) {
				<div class="flex flex-col gap-10">
					
					<!-- Header -->
					<header>
						<h1 class="text-4xl font-black tracking-wide text-[var(--c-text-strong)]">{{ m.name }}</h1>
						<p class="mt-2 text-lg text-[var(--c-arc-green)] font-medium uppercase tracking-widest">{{ m.environment }}</p>
					</header>

					<!-- The Interactive Map View (Top Section) -->
					<section class="relative w-full overflow-hidden rounded-2xl border-4 border-[var(--c-border)] shadow-[var(--shadow-md)] bg-black/50" style="aspect-ratio: 16/9; max-height: 70vh;">
						
						<!-- The Map Background -->
						<img [src]="m.mapImage" [alt]="m.name + ' Map'" class="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700" />
						
						<!-- Grid Overlay for aesthetic -->
						<div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgwem0zOSAzOVYxaC0zOHYzOGgzOHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvc3ZnPg==')] pointer-events-none"></div>

						<!-- POI Pins -->
						@for (poi of m.pois; track poi.id) {
							<div 
								class="absolute z-10 -translate-x-1/2 -translate-y-1/2 cursor-help group"
								[style.left.%]="poi.x" 
								[style.top.%]="poi.y"
								(mouseenter)="activePoi.set(poi.id)"
								(mouseleave)="activePoi.set(null)"
							>
								<!-- The Pin -->
								<div class="flex h-10 w-10 items-center justify-center rounded-full border-2 bg-black/80 text-xl shadow-lg transition-transform hover:scale-125 hover:z-20"
									 [class.border-[var(--c-arc-green)]]="poi.type === 'extraction'"
									 [class.border-[var(--c-arc-yellow)]]="poi.type === 'loot'"
									 [class.border-[var(--c-arc-red)]]="poi.type === 'boss'"
									 [class.border-[var(--c-primary)]]="poi.type === 'landmark'">
									{{ poi.icon }}
								</div>

								<!-- Custom Tooltip (Optional, replacing native title for better styling) -->
								@if (activePoi() === poi.id) {
									<div class="absolute left-1/2 bottom-full mb-3 -translate-x-1/2 w-64 rounded-lg border border-[var(--c-border)] bg-[var(--c-bg-secondary)] p-3 shadow-xl z-50">
										<div class="absolute -bottom-2 left-1/2 -translate-x-1/2 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[var(--c-border)]"></div>
										<h4 class="font-bold text-[var(--c-text-strong)] text-sm mb-1"
											[class.text-[var(--c-arc-green)]]="poi.type === 'extraction'"
											[class.text-[var(--c-arc-yellow)]]="poi.type === 'loot'"
											[class.text-[var(--c-arc-red)]]="poi.type === 'boss'">
											{{ poi.title }}
										</h4>
										<p class="text-xs text-[var(--c-text)]">{{ poi.description }}</p>
									</div>
								}
							</div>
						}
					</section>

					<!-- Bottom Section: Main Content & Infobox -->
					<div class="flex flex-col lg:flex-row gap-10">
						
						<!-- Left Side: Main Content Column -->
						<div class="flex-1 space-y-10">
							
							<!-- Overview -->
							<section>
								<h2 class="mb-4 border-b border-[var(--c-border)] pb-2 text-2xl font-bold text-[var(--c-text-strong)]">Overview</h2>
								<p class="text-lg leading-relaxed text-[var(--c-text)]">{{ m.overview }}</p>
							</section>

							<!-- Extractions -->
							<section>
								<h2 class="mb-4 border-b border-[var(--c-border)] pb-2 text-2xl font-bold text-[var(--c-arc-green)] flex items-center gap-2">
									<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11l7-7 7 7M5 19l7-7 7 7"></path></svg>
									Extractions
								</h2>
								<div class="grid gap-4 sm:grid-cols-2">
									@for (ext of m.extractions; track ext.title) {
										<div class="rounded-lg border border-[var(--c-arc-green)]/30 bg-[var(--c-arc-green)]/5 p-4 shadow-[var(--shadow-sm)]">
											<h3 class="mb-2 text-sm font-bold uppercase tracking-wider text-[var(--c-arc-green)]">{{ ext.title }}</h3>
											<p class="text-sm text-[var(--c-text)]">{{ ext.description }}</p>
										</div>
									}
								</div>
							</section>

							<!-- High Value Targets -->
							<section>
								<h2 class="mb-4 border-b border-[var(--c-border)] pb-2 text-2xl font-bold text-[var(--c-arc-yellow)] flex items-center gap-2">
									<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
									High Value Targets
								</h2>
								<ul class="space-y-3">
									@for (hvt of m.highValueTargets; track hvt.title) {
										<li class="rounded-lg border border-[var(--c-arc-yellow)]/30 bg-[var(--c-bg-primary)] p-4 border-l-4 border-l-[var(--c-arc-yellow)]">
											<strong class="text-[var(--c-text-strong)] block mb-1">{{ hvt.title }}</strong>
											<span class="text-[var(--c-text)] text-sm">{{ hvt.description }}</span>
										</li>
									}
								</ul>
							</section>

							<!-- Hazards -->
							<section>
								<h2 class="mb-4 border-b border-[var(--c-border)] pb-2 text-2xl font-bold text-[var(--c-arc-red)] flex items-center gap-2">
									<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
									Hazards
								</h2>
								<div class="space-y-4">
									@for (hazard of m.hazards; track hazard.title) {
										<div class="rounded-lg bg-[var(--c-arc-red)]/10 p-5 border border-[var(--c-arc-red)]/20">
											<h3 class="font-bold text-[var(--c-arc-red)] mb-2">{{ hazard.title }}</h3>
											<p class="text-sm text-[var(--c-text)]">{{ hazard.description }}</p>
										</div>
									}
								</div>
							</section>

						</div>

						<!-- Right Side: The Infobox (Sticky) -->
						<aside class="w-full lg:w-80 shrink-0">
							<div class="sticky top-6 overflow-hidden rounded-xl border border-[var(--c-border)] bg-[var(--c-bg-secondary)] shadow-[var(--shadow-md)]">
								
								<div class="bg-[var(--c-bg-primary)] p-4 text-center border-b border-[var(--c-border)]">
									<h2 class="text-xl font-black tracking-wider text-[var(--c-text-strong)] uppercase">Map Intel</h2>
								</div>
								
								<div class="p-5 text-sm">
									<dl class="space-y-4">
										<div class="flex justify-between border-b border-[var(--c-border)] pb-2">
											<dt class="font-semibold text-[var(--c-text-muted)]">Size</dt>
											<dd class="font-medium text-[var(--c-text-strong)] text-right">{{ m.size }}</dd>
										</div>
										<div class="flex justify-between border-b border-[var(--c-border)] pb-2">
											<dt class="font-semibold text-[var(--c-text-muted)]">Environment</dt>
											<dd class="font-medium text-[var(--c-text-strong)] text-right text-[var(--c-arc-green)]">{{ m.environment }}</dd>
										</div>
										<div class="flex justify-between border-b border-[var(--c-border)] pb-2">
											<dt class="font-semibold text-[var(--c-text-muted)]">Max Squads</dt>
											<dd class="font-medium text-[var(--c-text-strong)] text-right">{{ m.maxSquads }} ({{ m.maxSquads * 3 }} Raiders)</dd>
										</div>
										<div class="flex flex-col pt-1 gap-1">
											<dt class="font-semibold text-[var(--c-text-muted)]">Signature Threat</dt>
											<dd class="font-bold text-[var(--c-arc-red)] p-2 bg-[var(--c-arc-red)]/10 rounded-md border border-[var(--c-arc-red)]/20 mt-1">
												{{ m.signatureThreat }}
											</dd>
										</div>
									</dl>
								</div>
							</div>
						</aside>

					</div>
				</div>
			} @else {
				<!-- Not Found State -->
				<div class="rounded-xl border border-[var(--c-border)] bg-[var(--c-bg-secondary)] p-12 text-center shadow-[var(--shadow-sm)]">
					<div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--c-bg-primary)] text-3xl">
						🗺️
					</div>
					<h2 class="text-2xl font-bold text-[var(--c-text-strong)]">Map Data Corrupted</h2>
					<p class="mt-2 text-[var(--c-text)]">The sector you are looking for does not exist in our database.</p>
					<a routerLink="/arc-raiders/maps" class="mt-6 inline-block rounded-lg bg-[var(--c-arc-green)] px-6 py-2 font-bold text-black hover:opacity-90 transition-opacity">
						Return to Map Terminal
					</a>
				</div>
			}
		</div>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArcRaidersMapDetailComponent {
	private readonly route = inject(ActivatedRoute);

	// Read the :id from the route URL
	private readonly idParam = toSignal(this.route.paramMap.pipe(map(params => params.get('id'))));

	// Find the matching map
	protected readonly gameMap = computed(() => {
		const id = this.idParam();
		return MAPS.find(m => m.id === id);
	});

	// For custom tooltips on map POIs
	protected readonly activePoi = signal<string | null>(null);
}
