import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WEAPON_MODS } from './mods.data';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-mods-hub',
	imports: [RouterLink, CommonModule],
	template: `
		<div class="flex flex-col gap-8 pb-12">
			
			<header class="border-b border-[var(--c-border)] pb-6">
				<h1 class="text-4xl font-bold text-[var(--c-arc-yellow)] mb-4">Weapon Mods</h1>
				<p class="text-lg text-[var(--c-text)]">
					Customize your arsenal. Weapon modifications allow you to tailor your firearms for specific tactical scenarios, but be mindful of the trade-offs.
				</p>
			</header>

			<!-- 1. The Interactive Filter Bar -->
			<section class="rounded-xl border border-[var(--c-border)] bg-[var(--c-bg-secondary)] p-5 shadow-[var(--shadow-sm)]">
				<div class="flex flex-col gap-2">
					<span class="text-sm font-semibold uppercase tracking-wider text-[var(--c-text-muted)]">By Slot</span>
					<div class="flex flex-wrap gap-2">
						@for (slot of slots; track slot) {
							<button 
								(click)="selectedSlot.set(slot)"
								[class.bg-[var(--c-arc-yellow)]]="selectedSlot() === slot"
								[class.text-black]="selectedSlot() === slot"
								[class.bg-[var(--c-bg-primary)]]="selectedSlot() !== slot"
								[class.text-[var(--c-text-strong)]]="selectedSlot() !== slot"
								class="rounded-md px-3 py-1.5 text-sm font-medium transition-colors hover:bg-[var(--c-arc-yellow)] hover:text-black">
								{{ slot }}
							</button>
						}
					</div>
				</div>

				<div class="mt-6 border-t border-[var(--c-border)] pt-4 text-sm text-[var(--c-text-muted)]">
					Showing {{ filteredMods().length }} modification(s).
				</div>
			</section>

			<!-- 2. The Mod Grid -->
			<section class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				@for (mod of filteredMods(); track mod.id) {
					<a [routerLink]="['/arc-raiders/mods', mod.id]" class="group relative overflow-hidden rounded-xl border border-[var(--c-border)] bg-[var(--c-bg-secondary)] shadow-[var(--shadow-sm)] transition-all hover:-translate-y-1 hover:border-[var(--c-arc-yellow)] hover:shadow-[var(--shadow-md)] flex flex-col">
						
						<!-- Image & Badge -->
						<div class="relative h-48 w-full overflow-hidden bg-black/50 p-4 flex items-center justify-center shrink-0">
							<div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
							<img [src]="mod.image" [alt]="mod.name" class="h-full w-full object-cover absolute inset-0 opacity-30 transition-opacity group-hover:opacity-50 mix-blend-screen" />
							
							<!-- Top Left Badge -->
							<div class="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-black/70 px-2.5 py-1 text-xs font-bold text-white backdrop-blur-sm border border-[var(--c-arc-yellow)]/30">
								<span>{{ mod.icon }}</span> {{ mod.slot }}
							</div>
							
							<div class="relative z-10 text-6xl opacity-80 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(255,255,0,0.5)]">{{ mod.icon }}</div>
						</div>
						
						<!-- Bottom Content -->
						<div class="border-t border-[var(--c-border)] bg-[var(--c-bg-secondary)] p-4 flex flex-col flex-grow">
							<h3 class="text-xl font-bold tracking-wide text-[var(--c-text-strong)] group-hover:text-[var(--c-arc-yellow)] transition-colors">{{ mod.name }}</h3>
							
							<div class="mt-3 space-y-1 flex-grow">
								@for (stat of mod.statModifiers.slice(0, 2); track stat.stat) {
									<div class="flex justify-between text-xs">
										<span class="text-[var(--c-text-muted)]">{{ stat.stat }}</span>
										<span class="font-bold" [class.text-green-400]="stat.type === 'buff'" [class.text-red-400]="stat.type === 'nerf'">
											{{ stat.value }}
										</span>
									</div>
								}
								@if (mod.statModifiers.length > 2) {
									<div class="text-xs text-[var(--c-text-muted)] italic mt-1">...and more</div>
								}
							</div>
						</div>
					</a>
				}
				@if (filteredMods().length === 0) {
					<div class="col-span-full py-12 text-center text-[var(--c-text-muted)]">
						No mods match your selected filters.
					</div>
				}
			</section>

		</div>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArcRaidersModsComponent {
	protected readonly mods = WEAPON_MODS;

	// Filter Options
	protected readonly slots = ['All', 'Optic', 'Barrel', 'Magazine', 'Underbarrel', 'Stock'];

	// Selected Filters
	protected readonly selectedSlot = signal<string>('All');

	// Derived Filtered List
	protected readonly filteredMods = computed(() => {
		return this.mods.filter(m => {
			return this.selectedSlot() === 'All' || m.slot === this.selectedSlot();
		});
	});
}
