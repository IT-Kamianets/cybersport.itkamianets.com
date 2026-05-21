import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { WORKSHOP_STATIONS } from './workshop.data';
import { LOOT } from '../loot/loot.data';
import { WEAPONS } from '../weapons/weapons.data';
import { GADGETS } from '../gadgets/gadgets.data';
import { CONSUMABLES } from '../consumables/consumables.data';
import { EQUIPMENT } from '../equipment/equipment.data';
import { map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-station-detail',
	imports: [RouterLink, CommonModule],
	template: `
		<div class="pb-12">
			
			<!-- Breadcrumb -->
			<nav class="mb-6 flex items-center gap-2 text-sm text-[var(--c-text-muted)]">
				<a routerLink="/arc-raiders/workshop" class="hover:text-[var(--c-arc-cyan)] transition-colors">Workshop Stations</a>
				<span>/</span>
				<span class="text-[var(--c-text-strong)]">{{ station()?.name || 'Not Found' }}</span>
			</nav>

			@if (station(); as s) {
				<header class="mb-10 border-b border-[var(--c-border)] pb-8 flex items-center gap-6">
					<div class="flex h-24 w-24 items-center justify-center rounded-xl bg-[var(--c-bg-secondary)] border border-[var(--c-border)] text-5xl shadow-[var(--shadow-md)]">
						{{ s.icon }}
					</div>
					<div>
						<h1 class="text-4xl font-black tracking-widest text-[var(--c-text-strong)]">{{ s.name }}</h1>
						<p class="mt-2 text-lg text-[var(--c-text)] max-w-3xl">{{ s.description }}</p>
					</div>
				</header>

				<div class="space-y-12 max-w-5xl mx-auto">
					@for (tier of mappedTiers(); track tier.level) {
						<div class="rounded-xl border border-[var(--c-border)] bg-[var(--c-bg-secondary)] overflow-hidden shadow-[var(--shadow-md)] flex flex-col md:flex-row relative">
							
							<!-- Left Header Section -->
							<div class="bg-[var(--c-bg-primary)] p-8 md:w-1/3 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-[var(--c-border)]">
								<div class="text-[var(--c-arc-cyan)] font-black text-8xl opacity-20 absolute md:relative top-4 right-4 md:top-auto md:right-auto md:mb-4 drop-shadow-lg">
									{{ tier.level }}
								</div>
								<h2 class="text-2xl font-black tracking-wider text-[var(--c-text-strong)] relative z-10">{{ tier.title }}</h2>
								<p class="text-sm font-bold uppercase tracking-widest text-[var(--c-text-muted)] mt-1 relative z-10">Level {{ tier.level }}</p>
							</div>

							<!-- Right Content Section -->
							<div class="p-8 md:w-2/3 flex flex-col gap-6">
								
								<p class="text-lg text-[var(--c-text)]">{{ tier.description }}</p>

								<!-- Upgrade Costs -->
								<div>
									<h3 class="mb-3 border-b border-[var(--c-border)] pb-2 text-lg font-bold text-[var(--c-arc-cyan)] uppercase tracking-wider">Upgrade Cost</h3>
									@if (tier.costs.length > 0) {
										<div class="grid gap-3 sm:grid-cols-2">
											@for (cost of tier.costs; track cost.lootItem?.id) {
												<a [routerLink]="['/arc-raiders/loot', cost.lootItem?.id]" class="group rounded-lg border border-[var(--c-border)] bg-[var(--c-bg-primary)] p-3 shadow-[var(--shadow-sm)] hover:border-[var(--c-arc-cyan)] transition-colors flex justify-between items-center">
													<div class="flex items-center gap-3">
														<span class="text-lg">{{ cost.lootItem?.icon }}</span>
														<span class="text-sm font-bold text-[var(--c-text-strong)] group-hover:text-[var(--c-arc-cyan)]">{{ cost.lootItem?.name }}</span>
													</div>
													<div class="bg-[var(--c-bg-secondary)] border border-[var(--c-border)] rounded px-2 py-0.5 text-xs font-bold text-[var(--c-text-strong)]">
														x{{ cost.quantity }}
													</div>
												</a>
											}
										</div>
									} @else {
										<p class="text-sm italic text-[var(--c-text-muted)]">Available by default.</p>
									}
								</div>

								<!-- Unlocked Recipes -->
								@if (tier.unlockedWeapons.length > 0 || tier.unlockedGadgets.length > 0 || tier.unlockedConsumables.length > 0 || tier.unlockedEquipment.length > 0) {
									<div>
										<h3 class="mb-3 border-b border-[var(--c-border)] pb-2 text-lg font-bold text-[var(--c-arc-yellow)] uppercase tracking-wider">Unlocks Crafting Recipes</h3>
										<div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
											
											@for (w of tier.unlockedWeapons; track w.id) {
												<a [routerLink]="['/arc-raiders/weapons', w.id]" class="group rounded bg-[var(--c-bg-primary)] p-2 text-sm border border-[var(--c-border)] hover:border-[var(--c-arc-yellow)] transition-colors">
													<div class="font-bold text-[var(--c-text-strong)] group-hover:text-[var(--c-arc-yellow)] truncate">{{ w.name }}</div>
													<div class="text-xs text-[var(--c-text-muted)] mt-0.5">Weapon</div>
												</a>
											}

											@for (g of tier.unlockedGadgets; track g.id) {
												<a [routerLink]="['/arc-raiders/gadgets', g.id]" class="group rounded bg-[var(--c-bg-primary)] p-2 text-sm border border-[var(--c-border)] hover:border-[var(--c-arc-yellow)] transition-colors">
													<div class="font-bold text-[var(--c-text-strong)] group-hover:text-[var(--c-arc-yellow)] truncate">{{ g.name }}</div>
													<div class="text-xs text-[var(--c-text-muted)] mt-0.5">Gadget</div>
												</a>
											}

											@for (c of tier.unlockedConsumables; track c.id) {
												<a [routerLink]="['/arc-raiders/consumables', c.id]" class="group rounded bg-[var(--c-bg-primary)] p-2 text-sm border border-[var(--c-border)] hover:border-[var(--c-arc-yellow)] transition-colors">
													<div class="font-bold text-[var(--c-text-strong)] group-hover:text-[var(--c-arc-yellow)] truncate">{{ c.name }}</div>
													<div class="text-xs text-[var(--c-text-muted)] mt-0.5">Consumable</div>
												</a>
											}

											@for (e of tier.unlockedEquipment; track e.id) {
												<a [routerLink]="['/arc-raiders/equipment', e.id]" class="group rounded bg-[var(--c-bg-primary)] p-2 text-sm border border-[var(--c-border)] hover:border-[var(--c-arc-yellow)] transition-colors">
													<div class="font-bold text-[var(--c-text-strong)] group-hover:text-[var(--c-arc-yellow)] truncate">{{ e.name }}</div>
													<div class="text-xs text-[var(--c-text-muted)] mt-0.5">{{ e.type }}</div>
												</a>
											}
										</div>
									</div>
								}

							</div>
						</div>
					}
				</div>

			} @else {
				<div class="rounded-xl border border-[var(--c-border)] bg-[var(--c-bg-secondary)] p-12 text-center shadow-[var(--shadow-sm)]">
					<div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--c-bg-primary)] text-3xl">
						❓
					</div>
					<h2 class="text-2xl font-bold text-[var(--c-text-strong)]">Station Not Found</h2>
					<p class="mt-2 text-[var(--c-text)]">The workshop station you are looking for does not exist in our database.</p>
					<a routerLink="/arc-raiders/workshop" class="mt-6 inline-block rounded-lg bg-[var(--c-arc-cyan)] px-6 py-2 font-bold text-black hover:opacity-90 transition-opacity">
						Return to Workshop Hub
					</a>
				</div>
			}
		</div>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArcRaidersStationDetailComponent {
	private readonly route = inject(ActivatedRoute);

	private readonly idParam = toSignal(this.route.paramMap.pipe(map(params => params.get('id'))));

	protected readonly station = computed(() => {
		const id = this.idParam();
		return WORKSHOP_STATIONS.find(s => s.id === id);
	});

	protected readonly mappedTiers = computed(() => {
		const currentStation = this.station();
		if (!currentStation) return [];

		return currentStation.tiers.map(tier => {
			// Forward Lookup: Map upgrade costs to LOOT objects
			const mappedCosts = tier.upgradeCosts.map(cost => ({
				lootItem: LOOT.find(l => l.id === cost.itemId),
				quantity: cost.quantity
			})).filter(c => c.lootItem !== undefined);

			// Reverse Lookup: What does this specific station + level unlock?
			const unlockedWeapons = WEAPONS.filter(w => w.craftingStation?.stationId === currentStation.id && w.craftingStation?.level === tier.level);
			const unlockedGadgets = GADGETS.filter(g => g.craftingStation?.stationId === currentStation.id && g.craftingStation?.level === tier.level);
			const unlockedConsumables = CONSUMABLES.filter(c => c.craftingStation?.stationId === currentStation.id && c.craftingStation?.level === tier.level);
			const unlockedEquipment = EQUIPMENT.filter(e => e.craftingStation?.stationId === currentStation.id && e.craftingStation?.level === tier.level);

			return {
				...tier,
				costs: mappedCosts,
				unlockedWeapons,
				unlockedGadgets,
				unlockedConsumables,
				unlockedEquipment
			};
		});
	});
}
