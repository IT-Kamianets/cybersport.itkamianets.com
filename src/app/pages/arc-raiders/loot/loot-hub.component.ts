import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LOOT } from './loot.data';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-loot-hub',
	imports: [RouterLink, CommonModule],
	template: `
		<div class="flex flex-col gap-8 pb-12">
			
			<header class="border-b border-[var(--c-border)] pb-6">
				<h1 class="text-4xl font-bold text-[var(--c-arc-cyan)] mb-4">Loot & Materials</h1>
				<p class="text-lg text-[var(--c-text)]">
					A comprehensive database of all scavengable items in the Rust Belt. Track crafting materials, high-value trade goods, keys, and rare boss drops.
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

					<!-- Rarity Filter -->
					<div class="flex flex-col gap-2">
						<span class="text-sm font-semibold uppercase tracking-wider text-[var(--c-text-muted)]">By Rarity</span>
						<div class="flex flex-wrap gap-2">
							@for (rarity of rarities; track rarity) {
								<button 
									(click)="selectedRarity.set(rarity)"
									[class.bg-[var(--c-arc-cyan)]]="selectedRarity() === rarity"
									[class.text-black]="selectedRarity() === rarity"
									[class.bg-[var(--c-bg-primary)]]="selectedRarity() !== rarity"
									[class.text-[var(--c-text-strong)]]="selectedRarity() !== rarity"
									class="rounded-md px-3 py-1.5 text-sm font-medium transition-colors hover:bg-[var(--c-arc-cyan)] hover:text-black">
									{{ rarity }}
								</button>
							}
						</div>
					</div>
				</div>

				<div class="mt-6 border-t border-[var(--c-border)] pt-4 text-sm text-[var(--c-text-muted)]">
					Showing {{ filteredLoot().length }} item(s).
				</div>
			</section>

			<!-- 2. The Loot List (Dense Scannable Grid/List) -->
			<section class="rounded-xl border border-[var(--c-border)] bg-[var(--c-bg-secondary)] overflow-hidden shadow-[var(--shadow-sm)]">
				<div class="overflow-x-auto">
					<table class="w-full text-left text-sm text-[var(--c-text)]">
						<thead class="bg-[var(--c-bg-primary)] text-xs uppercase text-[var(--c-text-strong)] border-b border-[var(--c-border)]">
							<tr>
								<th class="px-6 py-4 font-semibold w-[40%]">Item Name</th>
								<th class="px-6 py-4 font-semibold">Category</th>
								<th class="px-6 py-4 font-semibold">Rarity</th>
								<th class="px-6 py-4 font-semibold text-center">Stack Limit</th>
								<th class="px-6 py-4 font-semibold text-right">Value (Max Stack)</th>
							</tr>
						</thead>
						<tbody class="divide-y divide-[var(--c-border)]">
							@for (item of filteredLoot(); track item.id) {
								<tr class="hover:bg-[var(--c-bg-primary)]/50 transition-colors group">
									<td class="px-6 py-4">
										<a [routerLink]="['/arc-raiders/loot', item.id]" class="flex items-center gap-3 font-bold text-[var(--c-text-strong)] group-hover:text-[var(--c-arc-cyan)]">
											<div class="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-black/50 border border-[var(--c-border)] p-1 overflow-hidden">
												<img [src]="item.image" [alt]="item.name" class="h-full w-full object-contain drop-shadow-md" />
											</div>
											{{ item.name }}
										</a>
									</td>
									<td class="px-6 py-4">{{ item.category }}</td>
									<td class="px-6 py-4">
										<span [class.text-gray-400]="item.rarity === 'Common'"
											  [class.text-green-400]="item.rarity === 'Uncommon'"
											  [class.text-blue-400]="item.rarity === 'Rare'"
											  [class.text-purple-400]="item.rarity === 'Epic'"
											  [class.text-yellow-400]="item.rarity === 'Legendary'"
											  class="font-bold">
											{{ item.rarity }}
										</span>
									</td>
									<td class="px-6 py-4 text-center">
										<div class="text-[var(--c-text-strong)] font-bold">{{ item.stackLimit }}</div>
									</td>
									<td class="px-6 py-4 text-right">
										<div class="font-mono font-bold text-[var(--c-arc-yellow)]">{{ item.sellValue }}</div>
										<div class="text-xs text-[var(--c-text-muted)]">({{ item.maxStackValue }} max)</div>
									</td>
								</tr>
							}
							@if (filteredLoot().length === 0) {
								<tr>
									<td colspan="5" class="px-6 py-12 text-center text-[var(--c-text-muted)]">
										No loot items match your selected filters.
									</td>
								</tr>
							}
						</tbody>
					</table>
				</div>
			</section>

		</div>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArcRaidersLootHubComponent {
	// Add the computed maxStackValue to the data
	protected readonly loot = LOOT.map(item => ({
		...item,
		maxStackValue: item.sellValue * item.stackLimit
	}));

	// Filter Options
	protected readonly categories = ['All', 'Material', 'Recyclable', 'Valuable', 'Key', 'Core'];
	protected readonly rarities = ['All', 'Common', 'Uncommon', 'Rare', 'Epic', 'Legendary'];

	// Selected Filters
	protected readonly selectedCategory = signal<string>('All');
	protected readonly selectedRarity = signal<string>('All');

	// Derived Filtered List
	protected readonly filteredLoot = computed(() => {
		return this.loot.filter(item => {
			const catMatch = this.selectedCategory() === 'All' || item.category === this.selectedCategory();
			const rarMatch = this.selectedRarity() === 'All' || item.rarity === this.selectedRarity();
			return catMatch && rarMatch;
		});
	});
}
