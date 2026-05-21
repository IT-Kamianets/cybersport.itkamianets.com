import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GADGETS } from './gadgets.data';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-gadgets-hub',
	imports: [RouterLink, CommonModule],
	template: `
		<div class="flex flex-col gap-8 pb-12">
			
			<header class="border-b border-[var(--c-border)] pb-6">
				<h1 class="text-4xl font-bold text-[var(--c-arc-cyan)] mb-4">Tactical Gadgets</h1>
				<p class="text-lg text-[var(--c-text)]">
					Browse the specialized gear used by Raiders. Gadgets are reusable abilities that operate on a cooldown, offering crucial utility in the field.
				</p>
			</header>

			<!-- 1. The Interactive Filter Bar -->
			<section class="rounded-xl border border-[var(--c-border)] bg-[var(--c-bg-secondary)] p-5 shadow-[var(--shadow-sm)]">
				<div class="flex flex-wrap gap-x-8 gap-y-4">
					
					<!-- Category Filter -->
					<div class="flex flex-col gap-2">
						<span class="text-sm font-semibold uppercase tracking-wider text-[var(--c-text-muted)]">By Category</span>
						<div class="flex flex-wrap gap-2">
							@for (cat of categories; track cat) {
								<button 
									(click)="selectedCategory.set(cat)"
									[class.bg-[var(--c-arc-cyan)]]="selectedCategory() === cat"
									[class.text-black]="selectedCategory() === cat"
									[class.bg-[var(--c-bg-primary)]]="selectedCategory() !== cat"
									[class.text-[var(--c-text-strong)]]="selectedCategory() !== cat"
									class="rounded-md px-3 py-1.5 text-sm font-medium transition-colors hover:bg-[var(--c-arc-cyan)] hover:text-black">
									{{ cat }}
								</button>
							}
						</div>
					</div>
				</div>

				<div class="mt-6 border-t border-[var(--c-border)] pt-4 text-sm text-[var(--c-text-muted)]">
					Showing {{ filteredGadgets().length }} gadget(s).
				</div>
			</section>

			<!-- 2. The Gadget Grid -->
			<section class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				@for (gadget of filteredGadgets(); track gadget.id) {
					<a [routerLink]="['/arc-raiders/gadgets', gadget.id]" class="group relative overflow-hidden rounded-xl border border-[var(--c-border)] bg-[var(--c-bg-secondary)] shadow-[var(--shadow-sm)] transition-all hover:-translate-y-1 hover:border-[var(--c-arc-cyan)] hover:shadow-[var(--shadow-md)]">
						
						<!-- Image & Badge -->
						<div class="relative h-48 w-full overflow-hidden bg-black/50 p-4 flex items-center justify-center">
							<div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
							<img [src]="gadget.image" [alt]="gadget.name" class="h-full w-full object-cover absolute inset-0 opacity-40 transition-opacity group-hover:opacity-60 mix-blend-screen" />
							
							<!-- Top Left Badge -->
							<div class="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-black/70 px-2.5 py-1 text-xs font-bold text-white backdrop-blur-sm border border-[var(--c-arc-cyan)]/30">
								<span>{{ gadget.icon }}</span> {{ gadget.category }}
							</div>
							
							<div class="relative z-10 text-5xl opacity-80 group-hover:scale-125 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(0,255,255,0.5)]">{{ gadget.icon }}</div>
						</div>
						
						<!-- Bottom Banner -->
						<div class="border-t border-[var(--c-border)] bg-[var(--c-bg-secondary)] p-4 text-center">
							<h3 class="text-xl font-bold tracking-wide text-[var(--c-text-strong)] group-hover:text-[var(--c-arc-cyan)] transition-colors">{{ gadget.name }}</h3>
							<p class="mt-2 text-xs uppercase text-[var(--c-text-muted)] flex justify-center gap-4">
								<span>CD: {{ gadget.cooldown }}</span>
								<span>{{ gadget.activationType }}</span>
							</p>
						</div>
					</a>
				}
				@if (filteredGadgets().length === 0) {
					<div class="col-span-full py-12 text-center text-[var(--c-text-muted)]">
						No gadgets match your selected filters.
					</div>
				}
			</section>

		</div>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArcRaidersGadgetsComponent {
	protected readonly gadgets = GADGETS;

	// Filter Options
	protected readonly categories = ['All', 'Mobility', 'Stealth', 'Defensive', 'Recon'];

	// Selected Filters
	protected readonly selectedCategory = signal<string>('All');

	// Derived Filtered List
	protected readonly filteredGadgets = computed(() => {
		return this.gadgets.filter(g => {
			return this.selectedCategory() === 'All' || g.category === this.selectedCategory();
		});
	});
}
