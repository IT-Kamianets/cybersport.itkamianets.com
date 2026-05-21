import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MAPS } from './maps.data';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-maps-hub',
	imports: [RouterLink, CommonModule],
	template: `
		<div class="flex flex-col gap-8 pb-12">
			
			<header class="border-b border-[var(--c-border)] pb-6">
				<h1 class="text-4xl font-bold text-[var(--c-arc-green)] mb-4">Maps & Regions</h1>
				<p class="text-lg text-[var(--c-text)]">
					Explore the various regions of the Rust Belt. Discover extraction points, high-value loot zones, and the unique hazards each map presents.
				</p>
			</header>

			<!-- 1. The Interactive Filter Bar -->
			<section class="rounded-xl border border-[var(--c-border)] bg-[var(--c-bg-secondary)] p-5 shadow-[var(--shadow-sm)]">
				<div class="flex flex-wrap gap-x-8 gap-y-4">
					
					<!-- Size Filter -->
					<div class="flex flex-col gap-2">
						<span class="text-sm font-semibold uppercase tracking-wider text-[var(--c-text-muted)]">By Size</span>
						<div class="flex flex-wrap gap-2">
							@for (size of sizes; track size) {
								<button 
									(click)="selectedSize.set(size)"
									[class.bg-[var(--c-arc-green)]]="selectedSize() === size"
									[class.text-black]="selectedSize() === size"
									[class.bg-[var(--c-bg-primary)]]="selectedSize() !== size"
									[class.text-[var(--c-text-strong)]]="selectedSize() !== size"
									class="rounded-md px-3 py-1.5 text-sm font-medium transition-colors hover:bg-[var(--c-arc-green)] hover:text-black">
									{{ size }}
								</button>
							}
						</div>
					</div>

					<!-- Environment Filter -->
					<div class="flex flex-col gap-2">
						<span class="text-sm font-semibold uppercase tracking-wider text-[var(--c-text-muted)]">By Environment</span>
						<div class="flex flex-wrap gap-2">
							@for (env of environments; track env) {
								<button 
									(click)="selectedEnvironment.set(env)"
									[class.bg-[var(--c-arc-green)]]="selectedEnvironment() === env"
									[class.text-black]="selectedEnvironment() === env"
									[class.bg-[var(--c-bg-primary)]]="selectedEnvironment() !== env"
									[class.text-[var(--c-text-strong)]]="selectedEnvironment() !== env"
									class="rounded-md px-3 py-1.5 text-sm font-medium transition-colors hover:bg-[var(--c-arc-green)] hover:text-black">
									{{ env }}
								</button>
							}
						</div>
					</div>
				</div>

				<div class="mt-6 border-t border-[var(--c-border)] pt-4 text-sm text-[var(--c-text-muted)]">
					Showing {{ filteredMaps().length }} region(s).
				</div>
			</section>

			<!-- 2. The Map Grid -->
			<section class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				@for (map of filteredMaps(); track map.id) {
					<a [routerLink]="['/arc-raiders/maps', map.id]" class="group relative overflow-hidden rounded-xl border border-[var(--c-border)] bg-[var(--c-bg-secondary)] shadow-[var(--shadow-sm)] transition-all hover:-translate-y-1 hover:border-[var(--c-arc-green)] hover:shadow-[var(--shadow-md)]">
						
						<!-- Image & Badges -->
						<div class="relative h-48 w-full overflow-hidden bg-black/50">
							<img [src]="map.thumbnail" [alt]="map.name" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
							
							<!-- Top Left Badges -->
							<div class="absolute left-3 top-3 flex flex-col gap-2">
								<div class="flex items-center gap-1.5 rounded-full bg-black/70 px-2.5 py-1 text-xs font-bold text-white backdrop-blur-sm border border-white/10 w-fit">
									<span>📏</span> {{ map.size }}
								</div>
								<div class="flex items-center gap-1.5 rounded-full bg-black/70 px-2.5 py-1 text-xs font-bold text-[var(--c-arc-green)] backdrop-blur-sm border border-white/10 w-fit">
									<span>🌲</span> {{ map.environment }}
								</div>
							</div>

							<!-- Hover Overlay (Signature Threat) -->
							<div class="absolute inset-0 flex flex-col items-center justify-center bg-black/80 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100 p-6 text-center">
								<div>
									<span class="block text-xs uppercase tracking-wider text-[var(--c-text-muted)] mb-1">Signature Threat</span>
									<span class="text-xl font-bold text-[var(--c-arc-red)]">{{ map.signatureThreat }}</span>
								</div>
							</div>
						</div>
						
						<!-- Bottom Banner -->
						<div class="border-t border-[var(--c-border)] bg-[var(--c-bg-secondary)] p-4">
							<h3 class="text-2xl font-black tracking-wide text-[var(--c-text-strong)] group-hover:text-[var(--c-arc-green)] transition-colors">{{ map.name }}</h3>
							<p class="mt-1 text-sm text-[var(--c-text-muted)] line-clamp-2">{{ map.overview }}</p>
						</div>
					</a>
				}
				@if (filteredMaps().length === 0) {
					<div class="col-span-full py-12 text-center text-[var(--c-text-muted)]">
						No maps match your selected filters.
					</div>
				}
			</section>

		</div>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArcRaidersMapsComponent {
	protected readonly maps = MAPS;

	// Filter Options
	protected readonly sizes = ['All', 'Small', 'Medium', 'Large'];
	protected readonly environments = ['All', 'Industrial / Forest', 'Urban / Underground', 'Desert', 'Snow'];

	// Selected Filters
	protected readonly selectedSize = signal<string>('All');
	protected readonly selectedEnvironment = signal<string>('All');

	// Derived Filtered List
	protected readonly filteredMaps = computed(() => {
		return this.maps.filter(m => {
			const sizeMatch = this.selectedSize() === 'All' || m.size === this.selectedSize();
			const envMatch = this.selectedEnvironment() === 'All' || m.environment === this.selectedEnvironment();
			return sizeMatch && envMatch;
		});
	});
}
