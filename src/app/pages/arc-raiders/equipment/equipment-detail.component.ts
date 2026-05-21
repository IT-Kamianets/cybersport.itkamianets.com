import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { EQUIPMENT } from './equipment.data';
import { LOOT } from '../loot/loot.data';
import { map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-equipment-detail',
	imports: [RouterLink, CommonModule],
	template: `
		<div class="pb-12">
			
			<!-- Breadcrumb -->
			<nav class="mb-6 flex items-center gap-2 text-sm text-[var(--c-text-muted)]">
				<a routerLink="/arc-raiders/equipment" class="hover:text-[var(--c-arc-cyan)] transition-colors">Equipment</a>
				<span>/</span>
				<span class="text-[var(--c-text-strong)]">{{ equipment()?.name || 'Not Found' }}</span>
			</nav>

			@if (equipment(); as e) {
				<div class="flex flex-col gap-10 lg:flex-row lg:items-start">
					
					<!-- Left Side: Main Content Column -->
					<div class="flex-1 space-y-10">
						
						<!-- Header -->
						<header>
							<h1 class="text-4xl font-black tracking-wide text-[var(--c-text-strong)]">{{ e.name }}</h1>
							<p class="mt-2 text-lg text-[var(--c-arc-cyan)] font-medium uppercase tracking-widest">{{ e.type }}</p>
						</header>

						<!-- 1. Overview -->
						<section>
							<h2 class="mb-4 border-b border-[var(--c-border)] pb-2 text-2xl font-bold text-[var(--c-text-strong)]">Overview</h2>
							<p class="text-lg leading-relaxed text-[var(--c-text)]">{{ e.description }}</p>
						</section>

						<!-- 2. Crafting Requirements -->
						@if (craftingMaterials().length > 0) {
							<section>
								<h2 class="mb-4 border-b border-[var(--c-border)] pb-2 text-2xl font-bold text-[var(--c-arc-cyan)] flex items-center gap-2">
									<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
									Crafting Requirements
								</h2>
								<div class="grid gap-4 sm:grid-cols-2">
									@for (material of craftingMaterials(); track material.lootItem?.id) {
										<a [routerLink]="['/arc-raiders/loot', material.lootItem?.id]" class="group rounded-lg border border-[var(--c-border)] bg-[var(--c-bg-primary)] p-4 shadow-[var(--shadow-sm)] hover:border-[var(--c-arc-cyan)] transition-colors flex justify-between items-center">
											<div class="flex items-center gap-3">
												<div class="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-black/50 border border-[var(--c-border)] text-xl">
													{{ material.lootItem?.icon }}
												</div>
												<h3 class="mb-1 text-sm font-bold uppercase tracking-wider text-[var(--c-text-strong)] group-hover:text-[var(--c-arc-cyan)]">{{ material.lootItem?.name }}</h3>
											</div>
											<div class="bg-[var(--c-bg-secondary)] border border-[var(--c-border)] rounded px-3 py-1 text-sm font-bold text-[var(--c-text-strong)]">
												x{{ material.quantity }}
											</div>
										</a>
									}
								</div>
								
								@if (e.craftingStation) {
									<div class="mt-4 inline-flex items-center gap-2 rounded border border-[var(--c-border)] bg-[var(--c-bg-primary)] px-4 py-2 text-sm text-[var(--c-text-muted)]">
										<span>Requires:</span>
										<a [routerLink]="['/arc-raiders/workshop', e.craftingStation.stationId]" class="font-bold text-[var(--c-arc-cyan)] hover:underline capitalize">{{ e.craftingStation.stationId.replace('-', ' ') }} (Level {{ e.craftingStation.level }})</a>
									</div>
								}
							</section>
						}

					</div>

					<!-- Right Side: The Infobox (Sticky) -->
					<aside class="w-full lg:w-80 shrink-0">
						<div class="sticky top-6 overflow-hidden rounded-xl border border-[var(--c-border)] bg-[var(--c-bg-secondary)] shadow-[var(--shadow-md)]">
							
							<div class="bg-[var(--c-bg-primary)] p-4 text-center border-b border-[var(--c-border)] flex items-center justify-center gap-3">
								<span class="text-2xl">{{ e.icon }}</span>
								<h2 class="text-xl font-black tracking-wider text-[var(--c-text-strong)]">{{ e.name }}</h2>
							</div>
							
							<div class="bg-black/80 flex items-center justify-center p-8">
								<div class="text-7xl drop-shadow-[0_0_25px_rgba(0,255,255,0.4)] text-[var(--c-arc-cyan)]">
									{{ e.icon }}
								</div>
							</div>

							<div class="p-5 text-sm">
								<dl class="space-y-3">
									<div class="flex justify-between border-b border-[var(--c-border)] pb-2">
										<dt class="font-semibold text-[var(--c-text-muted)]">Type</dt>
										<dd class="font-medium text-[var(--c-text-strong)] text-right">{{ e.type }}</dd>
									</div>
									<div class="flex justify-between border-b border-[var(--c-border)] pb-2">
										<dt class="font-semibold text-[var(--c-text-muted)]">Rarity</dt>
										<dd class="font-bold text-right"
											[class.text-gray-400]="e.rarity === 'Common'"
											[class.text-green-400]="e.rarity === 'Uncommon'"
											[class.text-blue-400]="e.rarity === 'Rare'"
											[class.text-purple-400]="e.rarity === 'Epic'"
											[class.text-yellow-400]="e.rarity === 'Legendary'">
											{{ e.rarity }}
										</dd>
									</div>
									
									@if (e.type === 'Shield') {
										<div class="flex justify-between border-b border-[var(--c-border)] pb-2">
											<dt class="font-semibold text-[var(--c-text-muted)]">Shield Health</dt>
											<dd class="font-bold text-[var(--c-arc-cyan)] text-right font-mono">{{ e.shieldHealth }}</dd>
										</div>
									}
									
									@if (e.type === 'Augment') {
										<div class="flex justify-between border-b border-[var(--c-border)] pb-2">
											<dt class="font-semibold text-[var(--c-text-muted)]">Inventory Slots</dt>
											<dd class="font-bold text-[var(--c-arc-cyan)] text-right font-mono">+{{ e.inventorySlots }}</dd>
										</div>
									}
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
					<h2 class="text-2xl font-bold text-[var(--c-text-strong)]">Equipment Not Found</h2>
					<p class="mt-2 text-[var(--c-text)]">The equipment you are looking for does not exist in our database.</p>
					<a routerLink="/arc-raiders/equipment" class="mt-6 inline-block rounded-lg bg-[var(--c-arc-cyan)] px-6 py-2 font-bold text-black hover:opacity-90 transition-opacity">
						Return to Equipment Hub
					</a>
				</div>
			}
		</div>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArcRaidersEquipmentDetailComponent {
	private readonly route = inject(ActivatedRoute);

	private readonly idParam = toSignal(this.route.paramMap.pipe(map(params => params.get('id'))));

	protected readonly equipment = computed(() => {
		const id = this.idParam();
		return EQUIPMENT.find(e => e.id === id);
	});

	protected readonly craftingMaterials = computed(() => {
		const item = this.equipment();
		if (!item || !item.craftingRequirements) return [];

		return item.craftingRequirements.map(req => {
			const lootItem = LOOT.find(l => l.id === req.itemId);
			return {
				lootItem: lootItem,
				quantity: req.quantity
			};
		}).filter(mapped => mapped.lootItem !== undefined);
	});
}
