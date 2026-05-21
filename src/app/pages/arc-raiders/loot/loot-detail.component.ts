import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LOOT } from './loot.data';
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

						<!-- Dynamic Relational Sections -->

						@if (i.recyclesInto && i.recyclesInto.length > 0) {
							<section>
								<h2 class="mb-4 border-b border-[var(--c-border)] pb-2 text-2xl font-bold text-[var(--c-arc-cyan)] flex items-center gap-2">
									<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
									Recycling Yield (RMB)
								</h2>
								<div class="grid gap-4 sm:grid-cols-2">
									@for (yield of i.recyclesInto; track yield.itemId) {
										<a [routerLink]="['/arc-raiders/loot', yield.itemId]" class="group rounded-lg border border-[var(--c-border)] bg-[var(--c-bg-primary)] p-4 shadow-[var(--shadow-sm)] hover:border-[var(--c-arc-cyan)] transition-colors flex justify-between items-center">
											<h3 class="mb-1 text-sm font-bold uppercase tracking-wider text-[var(--c-text-strong)] group-hover:text-[var(--c-arc-cyan)]">{{ yield.itemName }}</h3>
											<div class="bg-[var(--c-bg-secondary)] border border-[var(--c-border)] rounded px-3 py-1 text-sm font-bold text-[var(--c-text-strong)]">
												x{{ yield.yieldAmount }}
											</div>
										</a>
									}
								</div>
							</section>
						}
						
						@if (i.unlocksLocations && i.unlocksLocations.length > 0) {
							<section>
								<h2 class="mb-4 border-b border-[var(--c-border)] pb-2 text-2xl font-bold text-[var(--c-arc-green)] flex items-center gap-2">
									<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4v-4l5.659-5.659C9.11 10.606 9 10.117 9 9.5A5.5 5.5 0 0114.5 4c1.137 0 2.22.348 3.105.952L15 7z"></path></svg>
									Unlocks Locations
								</h2>
								<div class="grid gap-4 sm:grid-cols-2">
									@for (loc of i.unlocksLocations; track loc.target) {
										<a [routerLink]="['/arc-raiders/maps', loc.mapId]" class="group rounded-lg border border-[var(--c-border)] bg-[var(--c-bg-primary)] p-4 shadow-[var(--shadow-sm)] hover:border-[var(--c-arc-green)] transition-colors">
											<h3 class="mb-1 text-sm font-bold uppercase tracking-wider text-[var(--c-text-strong)] group-hover:text-[var(--c-arc-green)]">{{ loc.target }}</h3>
											<p class="text-xs text-[var(--c-text-muted)]">{{ loc.mapName }}</p>
										</a>
									}
								</div>
							</section>
						}

						@if (i.usedToCraft && i.usedToCraft.length > 0) {
							<section>
								<h2 class="mb-4 border-b border-[var(--c-border)] pb-2 text-2xl font-bold text-[var(--c-arc-yellow)] flex items-center gap-2">
									<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
									Crafting Recipes
								</h2>
								<div class="grid gap-4 sm:grid-cols-2">
									@for (recipe of i.usedToCraft; track recipe.itemId) {
										<a [routerLink]="['/arc-raiders/' + recipe.itemCategory, recipe.itemId]" class="group rounded-lg border border-[var(--c-border)] bg-[var(--c-bg-primary)] p-4 shadow-[var(--shadow-sm)] hover:border-[var(--c-arc-yellow)] transition-colors flex justify-between items-center">
											<div>
												<h3 class="mb-1 text-sm font-bold uppercase tracking-wider text-[var(--c-text-strong)] group-hover:text-[var(--c-arc-yellow)]">{{ recipe.itemName }}</h3>
												<p class="text-xs text-[var(--c-text-muted)] capitalize">{{ recipe.itemCategory }}</p>
											</div>
											<div class="bg-[var(--c-bg-secondary)] border border-[var(--c-border)] rounded px-3 py-1 text-sm font-bold text-[var(--c-text-strong)]">
												x{{ recipe.quantityNeeded }}
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
								<span class="text-2xl">{{ i.icon }}</span>
								<h2 class="text-xl font-black tracking-wider text-[var(--c-text-strong)]">{{ i.name }}</h2>
							</div>
							
							<div class="bg-black/80 flex items-center justify-center p-8">
								<div class="text-7xl opacity-90 drop-shadow-md text-white">
									{{ i.icon }}
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
}
