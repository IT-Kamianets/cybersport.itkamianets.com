import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LOOT, resolveLootItem } from './loot.data';
import { WORKSHOP_STATIONS } from '../workshop/workshop.data';
import { WEAPONS } from '../weapons/weapons.data';
import { EQUIPMENT } from '../equipment/equipment.data';
import { MAPS } from '../maps/maps.data';
import { map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-loot-detail',
	imports: [RouterLink, CommonModule],
	template: `
		<div class="pb-12">
			
			<!-- Breadcrumb -->
			<nav class="mb-6 flex items-center gap-2 text-sm text-[var(--c-text-muted)]">
				<a routerLink="/arc-raiders/loot" class="hover:text-[var(--c-arc-cyan)] transition-colors">Loot & Economy</a>
				<span>/</span>
				<span class="text-[var(--c-text-strong)]">{{ item()?.name || 'Not Found' }}</span>
			</nav>

			@if (item(); as i) {
				<div class="flex flex-col gap-10 lg:flex-row lg:items-start">
					
					<!-- Left Side: Main Content Column -->
					<div class="flex-1 space-y-10">
						
						<!-- Header -->
						<header>
							<h1 class="text-4xl font-black tracking-wide text-[var(--c-text-strong)]">{{ i.name }}</h1>
							<p class="mt-2 text-lg font-medium uppercase tracking-widest"
							   [class.text-gray-400]="i.rarity === 'Common'"
							   [class.text-green-400]="i.rarity === 'Uncommon'"
							   [class.text-blue-400]="i.rarity === 'Rare'"
							   [class.text-purple-400]="i.rarity === 'Epic'"
							   [class.text-yellow-400]="i.rarity === 'Legendary'">
								{{ i.rarity }} {{ i.category }}
							</p>
						</header>

						<!-- 1. Overview -->
						<section>
							<h2 class="mb-4 border-b border-[var(--c-border)] pb-2 text-2xl font-bold text-[var(--c-text-strong)]">Overview</h2>
							<p class="text-lg leading-relaxed text-[var(--c-text)]">{{ i.description }}</p>
						</section>

						<!-- 2. Found In Locations -->
						<section>
							<h2 class="mb-4 border-b border-[var(--c-border)] pb-2 text-2xl font-bold text-[var(--c-text-strong)]">Found In</h2>
							<ul class="space-y-3">
								@for (loc of i.foundIn; track loc) {
									<li class="flex items-center gap-3 text-[var(--c-text)]">
										<span class="flex h-1.5 w-1.5 rounded-full bg-[var(--c-arc-cyan)]"></span>
										{{ loc }}
									</li>
								}
							</ul>
						</section>

						<!-- Dynamic Relational Sections (Computed Reverse Lookups) -->

						@if (recyclingYield().length > 0) {
							<section>
								<h2 class="mb-4 border-b border-[var(--c-border)] pb-2 text-2xl font-bold text-[var(--c-arc-cyan)] flex items-center gap-2">
									<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
									Recycling Yield (RMB)
								</h2>
								<div class="grid gap-4 sm:grid-cols-2">
									@for (yieldData of recyclingYield(); track yieldData.lootItem.id) {
										<a [routerLink]="['/arc-raiders/loot', yieldData.lootItem.id]" class="group rounded-lg border border-[var(--c-border)] bg-[var(--c-bg-primary)] p-4 shadow-[var(--shadow-sm)] hover:border-[var(--c-arc-cyan)] transition-colors flex justify-between items-center">
											<div class="flex items-center gap-3">
												<div class="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-black/50 border border-[var(--c-border)] p-1 overflow-hidden">
													<img [src]="yieldData.lootItem.image" [alt]="yieldData.lootItem.name" class="h-full w-full object-contain" />
												</div>
												<h3 class="mb-1 text-sm font-bold uppercase tracking-wider text-[var(--c-text-strong)] group-hover:text-[var(--c-arc-cyan)]">{{ yieldData.lootItem.name }}</h3>
											</div>
											<div class="bg-[var(--c-bg-secondary)] border border-[var(--c-border)] rounded px-3 py-1 text-sm font-bold text-[var(--c-text-strong)]">
												x{{ yieldData.yieldAmount }}
											</div>
										</a>
									}
								</div>
							</section>
						}

						@if (recycledFrom().length > 0) {
							<section>
								<h2 class="mb-4 border-b border-[var(--c-border)] pb-2 text-2xl font-bold text-[var(--c-arc-cyan)] flex items-center gap-2">
									<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
									Recycling Source
								</h2>
								<p class="text-[var(--c-text-muted)] mb-4">You can obtain this item by recycling the following:</p>
								<div class="grid gap-4 sm:grid-cols-2">
									@for (source of recycledFrom(); track source.item.id) {
										<a [routerLink]="['/arc-raiders/loot', source.item.id]" class="group rounded-lg border border-[var(--c-border)] bg-[var(--c-bg-primary)] p-4 shadow-[var(--shadow-sm)] hover:border-[var(--c-arc-cyan)] transition-colors flex justify-between items-center">
											<h3 class="mb-1 text-sm font-bold uppercase tracking-wider text-[var(--c-text-strong)] group-hover:text-[var(--c-arc-cyan)]">{{ source.item.name }}</h3>
											<div class="bg-[var(--c-bg-secondary)] border border-[var(--c-border)] rounded px-3 py-1 text-sm font-bold text-[var(--c-text-strong)]">
												Yield: {{ source.yieldAmount }}
											</div>
										</a>
									}
								</div>
							</section>
						}

						@if (usedForStationUpgrades().length > 0) {
							<section>
								<h2 class="mb-4 border-b border-[var(--c-border)] pb-2 text-2xl font-bold text-[var(--c-arc-cyan)] flex items-center gap-2">
									<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
									Required for Station Upgrades
								</h2>
								<div class="grid gap-4 sm:grid-cols-2">
									@for (upgrade of usedForStationUpgrades(); track upgrade.stationId + upgrade.level) {
										<a [routerLink]="['/arc-raiders/workshop', upgrade.stationId]" class="group rounded-lg border border-[var(--c-border)] bg-[var(--c-bg-primary)] p-4 shadow-[var(--shadow-sm)] hover:border-[var(--c-arc-cyan)] transition-colors flex justify-between items-center">
											<div>
												<p class="text-xs text-[var(--c-text-muted)] mb-1">Required to unlock</p>
												<h3 class="text-sm font-bold uppercase tracking-wider text-[var(--c-text-strong)] group-hover:text-[var(--c-arc-cyan)]">{{ upgrade.stationName }} - Level {{ upgrade.level }}</h3>
											</div>
											<div class="bg-[var(--c-bg-secondary)] border border-[var(--c-border)] rounded px-3 py-1 text-sm font-bold text-[var(--c-text-strong)]">
												x{{ upgrade.quantity }}
											</div>
										</a>
									}
								</div>
							</section>
						}
						
						@if (unlocksMapPOIs().length > 0) {
							<section>
								<h2 class="mb-4 border-b border-[var(--c-border)] pb-2 text-2xl font-bold text-[var(--c-arc-green)] flex items-center gap-2">
									<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4v-4l5.659-5.659C9.11 10.606 9 10.117 9 9.5A5.5 5.5 0 0114.5 4c1.137 0 2.22.348 3.105.952L15 7z"></path></svg>
									Unlocks Locations
								</h2>
								<div class="grid gap-4 sm:grid-cols-2">
									@for (unlock of unlocksMapPOIs(); track unlock.poi.id) {
										<a [routerLink]="['/arc-raiders/maps', unlock.map.id]" class="group rounded-lg border border-[var(--c-border)] bg-[var(--c-bg-primary)] p-4 shadow-[var(--shadow-sm)] hover:border-[var(--c-arc-green)] transition-colors">
											<h3 class="mb-1 text-sm font-bold uppercase tracking-wider text-[var(--c-text-strong)] group-hover:text-[var(--c-arc-green)]">{{ unlock.poi.title }}</h3>
											<p class="text-xs text-[var(--c-text-muted)]">{{ unlock.map.name }}</p>
										</a>
									}
								</div>
							</section>
						}

						@if (usedToCraftWeapons().length > 0 || usedToCraftEquipment().length > 0) {
							<section>
								<h2 class="mb-4 border-b border-[var(--c-border)] pb-2 text-2xl font-bold text-[var(--c-arc-yellow)] flex items-center gap-2">
									<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
									Crafting Recipes
								</h2>
								<div class="grid gap-4 sm:grid-cols-2">
									
									<!-- Weapons -->
									@for (weapon of usedToCraftWeapons(); track weapon.weapon.id) {
										<a [routerLink]="['/arc-raiders/weapons', weapon.weapon.id]" class="group rounded-lg border border-[var(--c-border)] bg-[var(--c-bg-primary)] p-4 shadow-[var(--shadow-sm)] hover:border-[var(--c-arc-yellow)] transition-colors flex justify-between items-center">
											<div>
												<h3 class="mb-1 text-sm font-bold uppercase tracking-wider text-[var(--c-text-strong)] group-hover:text-[var(--c-arc-yellow)]">{{ weapon.weapon.name }}</h3>
												<p class="text-xs text-[var(--c-text-muted)] capitalize">Weapon</p>
											</div>
											<div class="bg-[var(--c-bg-secondary)] border border-[var(--c-border)] rounded px-3 py-1 text-sm font-bold text-[var(--c-text-strong)]">
												x{{ weapon.quantity }}
											</div>
										</a>
									}


									<!-- Equipment -->
									@for (equip of usedToCraftEquipment(); track equip.equipment.id) {
										<a [routerLink]="['/arc-raiders/equipment', equip.equipment.id]" class="group rounded-lg border border-[var(--c-border)] bg-[var(--c-bg-primary)] p-4 shadow-[var(--shadow-sm)] hover:border-[var(--c-arc-yellow)] transition-colors flex justify-between items-center">
											<div>
												<h3 class="mb-1 text-sm font-bold uppercase tracking-wider text-[var(--c-text-strong)] group-hover:text-[var(--c-arc-yellow)]">{{ equip.equipment.name }}</h3>
												<p class="text-xs text-[var(--c-text-muted)] capitalize">{{ equip.equipment.type }}</p>
											</div>
											<div class="bg-[var(--c-bg-secondary)] border border-[var(--c-border)] rounded px-3 py-1 text-sm font-bold text-[var(--c-text-strong)]">
												x{{ equip.quantity }}
											</div>
										</a>
									}
								</div>
							</section>
						}

					</div>

					<!-- Right Side: The Infobox (Sticky) -->
					<aside class="w-full lg:w-80 shrink-0">
						<div class="sticky top-6 overflow-hidden rounded-xl border border-[var(--c-border)] bg-[var(--c-bg-secondary)] shadow-[var(--shadow-md)]">
							
							<div class="bg-[var(--c-bg-primary)] p-4 text-center border-b border-[var(--c-border)] flex items-center justify-center gap-3">
								<div class="flex h-8 w-8 items-center justify-center rounded overflow-hidden">
									<img [src]="i.image" [alt]="i.name" class="h-full w-full object-contain" />
								</div>
								<h2 class="text-xl font-black tracking-wider text-[var(--c-text-strong)]">{{ i.name }}</h2>
							</div>
							
							<div class="bg-black/80 flex items-center justify-center p-8">
								<div class="flex h-32 w-32 items-center justify-center">
									<img [src]="i.image" [alt]="i.name" class="max-h-full max-w-full object-contain drop-shadow-2xl" />
								</div>
							</div>

							<div class="p-5 text-sm">
								<dl class="space-y-3">
									<div class="flex justify-between border-b border-[var(--c-border)] pb-2">
										<dt class="font-semibold text-[var(--c-text-muted)]">Rarity</dt>
										<dd class="font-bold text-right"
											[class.text-gray-400]="i.rarity === 'Common'"
											[class.text-green-400]="i.rarity === 'Uncommon'"
											[class.text-blue-400]="i.rarity === 'Rare'"
											[class.text-purple-400]="i.rarity === 'Epic'"
											[class.text-yellow-400]="i.rarity === 'Legendary'">
											{{ i.rarity }}
										</dd>
									</div>
									<div class="flex justify-between border-b border-[var(--c-border)] pb-2">
										<dt class="font-semibold text-[var(--c-text-muted)]">Category</dt>
										<dd class="font-medium text-[var(--c-text-strong)] text-right">{{ i.category }}</dd>
									</div>
									<div class="flex justify-between border-b border-[var(--c-border)] pb-2">
										<dt class="font-semibold text-[var(--c-text-muted)]">Stack Limit</dt>
										<dd class="font-bold text-[var(--c-text-strong)] text-right">{{ i.stackLimit }}</dd>
									</div>
									<div class="flex justify-between border-b border-[var(--c-border)] pb-2">
										<dt class="font-semibold text-[var(--c-text-muted)]">Single Sell Value</dt>
										<dd class="font-bold text-[var(--c-arc-yellow)] font-mono text-right">{{ i.sellValue }}</dd>
									</div>
									<div class="flex justify-between pt-1">
										<dt class="font-semibold text-[var(--c-text-muted)]">Max Stack Value</dt>
										<dd class="font-bold text-[var(--c-arc-yellow)] text-right font-mono">{{ i.sellValue * i.stackLimit }}</dd>
									</div>
								</dl>
							</div>
						</div>
					</aside>

				</div>
			} @else {
				<!-- Not Found State -->
				<div class="rounded-xl border border-[var(--c-border)] bg-[var(--c-bg-secondary)] p-12 text-center shadow-[var(--shadow-sm)]">
					<div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--c-bg-primary)] text-3xl">
						❓
					</div>
					<h2 class="text-2xl font-bold text-[var(--c-text-strong)]">Item Not Found</h2>
					<p class="mt-2 text-[var(--c-text)]">The item you are looking for does not exist in our database.</p>
					<a routerLink="/arc-raiders/loot" class="mt-6 inline-block rounded-lg bg-[var(--c-arc-cyan)] px-6 py-2 font-bold text-black hover:opacity-90 transition-opacity">
						Return to Loot Hub
					</a>
				</div>
			}
		</div>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArcRaidersLootDetailComponent {
	private readonly route = inject(ActivatedRoute);

	private readonly idParam = toSignal(this.route.paramMap.pipe(map(params => params.get('id'))));

	protected readonly item = computed(() => {
		const id = this.idParam();
		return LOOT.find(l => l.id === id);
	});

	protected readonly recyclingYield = computed(() => {
		const currentItem = this.item();
		if (!currentItem || !currentItem.recyclesInto) return [];

		return currentItem.recyclesInto.map(yieldData => {
			return {
				lootItem: resolveLootItem(yieldData.itemId),
				yieldAmount: yieldData.yieldAmount
			};
		});
	});

	// --- Computed Reverse Lookups ---

	protected readonly usedForStationUpgrades = computed(() => {
		const id = this.idParam();
		if (!id) return [];
		return WORKSHOP_STATIONS.reduce((acc, station) => {
			station.tiers.forEach(tier => {
				const req = tier.upgradeCosts.find(c => c.itemId === id);
				if (req) {
					acc.push({
						stationId: station.id,
						stationName: station.name,
						level: tier.level,
						quantity: req.quantity
					});
				}
			});
			return acc;
		}, [] as { stationId: string, stationName: string, level: number, quantity: number }[]);
	});

	protected readonly usedToCraftWeapons = computed(() => {
		const id = this.idParam();
		if (!id) return [];
		return WEAPONS.reduce((acc, weapon) => {
			const req = weapon.craftingRequirements?.find(r => r.itemId === id);
			if (req) {
				acc.push({ weapon, quantity: req.quantity });
			}
			return acc;
		}, [] as { weapon: any, quantity: number }[]);
	});

    

	protected readonly usedToCraftEquipment = computed(() => {
		const id = this.idParam();
		if (!id) return [];
		return EQUIPMENT.reduce((acc, equipment) => {
			const req = equipment.craftingRequirements?.find(r => r.itemId === id);
			if (req) {
				acc.push({ equipment, quantity: req.quantity });
			}
			return acc;
		}, [] as { equipment: any, quantity: number }[]);
	});

	protected readonly recycledFrom = computed(() => {
		const id = this.idParam();
		if (!id) return [];
		return LOOT.reduce((acc, item) => {
			const yieldData = item.recyclesInto?.find(r => r.itemId === id);
			if (yieldData) {
				acc.push({ item, yieldAmount: yieldData.yieldAmount });
			}
			return acc;
		}, [] as { item: any, yieldAmount: number }[]);
	});

	protected readonly unlocksMapPOIs = computed(() => {
		const id = this.idParam();
		if (!id) return [];
		return MAPS.reduce((acc, map) => {
			map.pois.forEach(poi => {
				if (poi.requiredKeyId === id) {
					acc.push({ map, poi });
				}
			});
			return acc;
		}, [] as { map: any, poi: any }[]);
	});
}
