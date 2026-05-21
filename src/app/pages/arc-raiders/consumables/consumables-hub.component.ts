import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CONSUMABLES } from './consumables.data';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-consumables-hub',
	imports: [RouterLink, CommonModule],
	template: `
		<div class="flex flex-col gap-8 pb-12">
			
			<header class="border-b border-[var(--c-border)] pb-6">
				<h1 class="text-4xl font-bold text-[var(--c-arc-green)] mb-4">Consumables & Supplies</h1>
				<p class="text-lg text-[var(--c-text)]">
					One-time use items essential for survival. From medical stims to improvised explosives, managing your consumable inventory is the key to extracting alive.
				</p>
			</header>

			<!-- 1. The Interactive Filter Bar -->
			<section class="rounded-xl border border-[var(--c-border)] bg-[var(--c-bg-secondary)] p-5 shadow-[var(--shadow-sm)]">
				<div class="flex flex-col gap-2">
					<span class="text-sm font-semibold uppercase tracking-wider text-[var(--c-text-muted)]">By Category</span>
					<div class="flex flex-wrap gap-2">
						@for (cat of categories; track cat) {
							<button 
								(click)="selectedCategory.set(cat)"
								[class.bg-[var(--c-arc-green)]]="selectedCategory() === cat"
								[class.text-black]="selectedCategory() === cat"
								[class.bg-[var(--c-bg-primary)]]="selectedCategory() !== cat"
								[class.text-[var(--c-text-strong)]]="selectedCategory() !== cat"
								class="rounded-md px-3 py-1.5 text-sm font-medium transition-colors hover:bg-[var(--c-arc-green)] hover:text-black">
								{{ cat }}
							</button>
						}
					</div>
				</div>

				<div class="mt-6 border-t border-[var(--c-border)] pt-4 text-sm text-[var(--c-text-muted)]">
					Showing {{ filteredConsumables().length }} item(s).
				</div>
			</section>

			<!-- 2. The Consumable Grid -->
			<section class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				@for (item of filteredConsumables(); track item.id) {
					<a [routerLink]="['/arc-raiders/consumables', item.id]" class="group relative overflow-hidden rounded-xl border border-[var(--c-border)] bg-[var(--c-bg-secondary)] shadow-[var(--shadow-sm)] transition-all hover:-translate-y-1 hover:border-[var(--c-arc-green)] hover:shadow-[var(--shadow-md)]">
						
						<!-- Image & Badge -->
						<div class="relative h-48 w-full overflow-hidden bg-black/50 p-4 flex items-center justify-center">
							<div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
							<img [src]="item.image" [alt]="item.name" class="h-full w-full object-cover absolute inset-0 opacity-40 transition-opacity group-hover:opacity-60 mix-blend-screen" />
							
							<!-- Top Left Badge -->
							<div class="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-black/70 px-2.5 py-1 text-xs font-bold text-white backdrop-blur-sm border border-[var(--c-arc-green)]/30">
								<span>{{ item.icon }}</span> {{ item.category }}
							</div>
							
							<!-- Hover Stats -->
							<div class="absolute inset-0 flex flex-col items-center justify-center bg-black/80 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100 p-6 text-center">
								<div class="mb-4">
									<span class="block text-xs uppercase tracking-wider text-[var(--c-text-muted)]">Max Stack</span>
									<span class="text-xl font-bold text-[var(--c-arc-green)]">{{ item.stackSize }}</span>
								</div>
								<div>
									<span class="block text-xs uppercase tracking-wider text-[var(--c-text-muted)]">Use Time</span>
									<span class="text-xl font-bold text-white">{{ item.useTime }}</span>
								</div>
							</div>
						</div>
						
						<!-- Bottom Banner -->
						<div class="border-t border-[var(--c-border)] bg-[var(--c-bg-secondary)] p-4 text-center flex flex-col h-full">
							<h3 class="text-xl font-bold tracking-wide text-[var(--c-text-strong)] group-hover:text-[var(--c-arc-green)] transition-colors">{{ item.name }}</h3>
							<p class="mt-2 text-xs text-[var(--c-text-muted)] line-clamp-2 flex-grow">{{ item.effect }}</p>
						</div>
					</a>
				}
				@if (filteredConsumables().length === 0) {
					<div class="col-span-full py-12 text-center text-[var(--c-text-muted)]">
						No items match your selected filters.
					</div>
				}
			</section>

		</div>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArcRaidersConsumablesComponent {
	protected readonly consumables = CONSUMABLES;

	// Filter Options
	protected readonly categories = ['All', 'Medical', 'Lethal', 'Tactical', 'Utility'];

	// Selected Filters
	protected readonly selectedCategory = signal<string>('All');

	// Derived Filtered List
	protected readonly filteredConsumables = computed(() => {
		return this.consumables.filter(c => {
			return this.selectedCategory() === 'All' || c.category === this.selectedCategory();
		});
	});
}
